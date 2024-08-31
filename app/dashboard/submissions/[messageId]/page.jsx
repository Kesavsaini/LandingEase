import { getMessageById } from '@/app/action/pageJson'
import React from 'react'

const Page = async({params}) => {
  const res=await getMessageById({messageId: params.messageId});
  if(!res.done){
   toast.error(res.message);
  };
  const userMessage=JSON.parse(res.userMessage);
  const message=userMessage.message;
  return (
    <div className='w-full h-[34rem] border rounded-lg p-4'>
     <div className='flex flex-col gap-4'>
         {
            Object.keys(message).map((msgKey,index)=>{
                return (
                    <div key={index}>
                    <div className='text-xl font-bold'>{message[msgKey]["name"]}</div>
                    <div className='text-lg'>{message[msgKey]["value"]}</div>
                    </div>
                )
 
            })
         }
         </div>
    </div>
  )
}

export default Page