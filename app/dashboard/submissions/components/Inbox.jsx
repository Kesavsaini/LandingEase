'use client'
import React, { useEffect, useState } from "react";
import SelectInboxProject from "./SelectInboxProject";
import { getMessageBySubdomain, getMessageOfAllSubdomains, getPagesByUser } from "@/app/action/pageJson";
import { toast } from "sonner";
import MessageCard from "./MessageCard";
import { DateFormatter } from "@/lib/utilsFn";
import { usePathname } from "next/navigation";

const Inbox = () => {
  const pathname=usePathname();
  const isDynamicPath=pathname.startsWith('/dashboard/submissions/')
  const [selected, setSelected]=useState("all");
  const [messages,setMessages]=useState([]);
  const getMessagesByValue=async()=>{
    const res=await getMessageBySubdomain({subdomain:selected});
    if(res.done){
      console.log(res.messages);
      setMessages(res.messages);
    }else toast.error(res.message);
  }
   
  const getAllMessages =async(subdomains)=>{
   const res= await getMessageOfAllSubdomains({subdomains:subdomains});
   if(res.done){
    console.log("Get these",res.messages);
    setMessages(res.messages);
  }else toast.error(res.message);
  }

  const [projectsArray, setProjectsArray] =useState([]);
   const getPages=async()=>{
    const projects=await getPagesByUser();
    const projectsArr=projects.map((page)=>{
       return {name:page.name,id:page.id,subdomain:page.subdomain};
    })
    setProjectsArray(projectsArr);
    console.log("ProjectsArray",projectsArray);
   }
   useEffect(()=>{
      getPages();
    },[])

  useEffect(()=>{
    if(selected==='all'){
      getAllMessages(projectsArray.map((project)=>project.subdomain));
    }else  getMessagesByValue();
  },[selected])
  return <div className={`border w-full sm:min-w-64 sm:w-64 h-[34rem] rounded-lg ${isDynamicPath && "hidden"} sm:block`}>
    <div className="p-2 text-2xl font-extrabold border-b flex justify-around items-center">
      Inbox
      <SelectInboxProject selected={selected} setSelected={setSelected} projectsArray={projectsArray}/>
      </div>
      <div className="flex flex-col p-4 justify-center items-center gap-2">
        {
            messages.length>0 ?
            messages.map(msg=>{
              const formattedDate=DateFormatter(msg.created_at);
              const formattedFormName="Form "+ msg.formName.substr(5);
              const firstKey=Object.keys(msg.message)[0];
              const msgPreview=msg.message[firstKey].value.slice(0,12)+"...";
              return <MessageCard subdomain={msg.subdomain} formName={formattedFormName} date={formattedDate} msgPreview={msgPreview} id={msg._id}/>
            })
            :
            <div className="text-gray-600 text-center">No messages found</div>

          }
      </div>
  </div>;
};

export default Inbox;
