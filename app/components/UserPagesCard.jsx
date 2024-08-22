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
import { DeleteIcon } from "./Icons";
import MyAlertDialog from "./MyAlertDialog";
import { deletePageById } from "../action/pageJson";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
    const res=await deletePageById({ id });
    if(res.done){
        toast.success(res.message);
    }else{
        toast.error(res.message);
    }
  };
  return (
    <Card className="w-full sm:w-64 h-64">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
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
        <Button onClick={()=>router.push(`/dashboard/create/${id}`)}>Edit Page</Button>
        <MyAlertDialog type="delete" name={name} onClick={deletePage}>
          <div
            className="text-red-600 hover:text-red-800 border p-2 rounded-lg"
          >
            <DeleteIcon />
          </div>
        </MyAlertDialog>
      </CardFooter>
    </Card>
  );
};

export default UserPagesCard;
