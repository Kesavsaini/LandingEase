import { getPagesByUser } from '@/app/action/pageJson';
import CreateProject from '@/app/components/CreateProject'
import UserPagesCard from '@/app/components/UserPagesCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DateFormatter } from '@/lib/utilsFn';
import React from 'react'

const page = async() => {
  const userPages=await getPagesByUser();
  console.log("userPages",userPages);
  return (
    <ScrollArea>
    <div className='w-full sm:h-[34rem] p-4 flex flex-wrap gap-4'>
      <CreateProject/>
      {
        userPages && userPages.map((page, index) => {
          const createdAtformated=DateFormatter(page.created_at);
          const updatedAtFormated=DateFormatter(page.updated_at);
         return <UserPagesCard key={page.subdomain} name={page.name} subdomain={page.subdomain} published={page.published} createdAt={createdAtformated} updatedAt={updatedAtFormated} id={page.id}/>
  })
      }
    </div>
    </ScrollArea>
  )
}

export default page