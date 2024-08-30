"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, DeleteIcon } from "./Icons";
import MyAlertDialog from "./MyAlertDialog";
import { deletePageById, updatePageById } from "../action/pageJson";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const visitSite = (
  <>
    Visit
    <ArrowUpRight />
  </>
);

const UserPagesCard = ({
  name,
  subdomain,
  published,
  createdAt,
  updatedAt,
  id,
}) => {
  const router = useRouter();
  const deletePage = async () => {
    const res = await deletePageById({ id });
    if (res.done) {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res.message);
    }
  };
  const handlePagePublish=async()=>{
    const res=await updatePageById({pageId:id,body:{published:!published}});
    if(!res.done){
      toast.error("there was an error updating");
      router.refresh();
    }else{
      toast.success("updated successfully");
    }
  }
  return (
    <Card className="w-full sm:w-64 h-72 flex flex-col justify-around relative">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {name}
          <Button variant="outline" onClick={handlePagePublish}>
            {published ? "Unpublish" : "Publish"}
          </Button>
          {published && (
            <Button variant="outline" className="p-2 absolute top-0 right-0" onClick={()=>window.open (`http://localhost:3000/${subdomain}`, '_ blank')}>
              <ArrowUpRight />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 text-sm">
          <div className="font-medium flex justify-between">
            subdomain <span className="font-light">{subdomain}</span>
          </div>
          <div className="font-medium flex justify-between">
            published{" "}
            <span className="font-light">{published ? "Yes" : "No"}</span>
          </div>
          <div className="font-medium flex justify-between">
            created at <span className="font-light">{createdAt}</span>
          </div>
          <div className="font-medium flex justify-between">
            last update <span className="font-light">{updatedAt}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => router.push(`/dashboard/create/${id}`)}>
          Edit Page
        </Button>
        <MyAlertDialog type="delete" name={name} onClick={deletePage}>
          <div className="text-red-600 hover:text-red-800 border p-2 rounded-lg">
            <DeleteIcon />
          </div>
        </MyAlertDialog>
      </CardFooter>
    </Card>
  );
};

export default UserPagesCard;
