'use client'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AlertIcon, CreateIcon } from './Icons'
import { CreatePage } from '../action/pageJson'
import { toast } from "sonner"


  

const CreateProject = () => {
    const [name,setName]=useState(null);
    const [subdomain,setSubdomain]=useState(null);
    const [subdomainError,setSubdomainError]=useState(false);
    const createNewaProject=async()=>{
       let res=await CreatePage({name,subdomain});
       if(res.subdomainError){
        setSubdomainError(true);
        toast.warning("Your subdomain should be unique");
        }else if(res.done){
            toast.success(res.message)
            setName(null);
            setSubdomain(null);
            setSubdomainError(false);
        }else if(!res.done){
          toast.error(res.message)
        }
    }
  return (
    <Card className="w-full sm:w-64 h-64">
  <CardHeader>
    <CardTitle>Create New Project</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-2">
    <Input placeholder="Project Name" onChange={(e)=>setName(e.target.value)}/>
    <div className='items-start justify-start flex flex-col gap-1'>
    <Input placeholder="Project Subdomain" onChange={(e)=>setSubdomain(e.target.value)}/>
  {subdomainError &&  <div className='text-red-600 text-xs flex gap-1 items-center'>
      <AlertIcon/>
      subdomain already exists
      </div>
    }
    </div>
  </CardContent>
  <CardFooter className="">
    <Button className="flex gap-1" onClick={createNewaProject}>
        <CreateIcon/>
        Create Project
    </Button>
  </CardFooter>
</Card>

  )
}

export default CreateProject