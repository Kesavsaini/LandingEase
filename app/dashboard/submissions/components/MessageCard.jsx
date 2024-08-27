'use client'
import React from 'react'
import { Badge } from "@/components/ui/badge"
import { usePathname, useRouter } from 'next/navigation'


const MessageCard = ({subdomain, formName, date,msgPreview,id}) => {
    const router=useRouter();
    const pathname=usePathname();
    const pathId=pathname.split('/')[3];
    const isActivePath=pathId===id;
  return (
    <div className={`border rounded-lg w-full p-2 flex flex-col gap-2 cursor-pointer ${isActivePath ?"bg-black": "bg-zinc-100"} ${isActivePath  && "text-white"}`} onClick={()=>router.push(`/dashboard/submissions/${id}`)}>
        <div className='flex justify-around items-center'>
        <Badge className={`${isActivePath ?"bg-white": "bg-black"} ${isActivePath ?"text-black": "text-white"} text-[8px]`}>{subdomain}</Badge>
        <Badge className={`${isActivePath ?"bg-white": "bg-black"} ${isActivePath ?"text-black": "text-white"} text-[8px]`}>{formName}</Badge>
        {/* <Badge className={`${isActivePath ?"bg-white": "bg-black"} ${isActivePath ?"text-black": "text-white"} text-[8px]`}>{date}</Badge> */}
        <div className={`text-[8px]`}>{date}</div>
        </div>
        <div className='text-xs'>{msgPreview}</div>
        
    </div>
  )
}

export default MessageCard