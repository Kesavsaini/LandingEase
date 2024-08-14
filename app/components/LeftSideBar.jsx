'use client'
import React, { useEffect } from 'react'  
import { Button } from '@/components/ui/button'
import { MenuItems } from '@/lib/staticData'
import { useRouter } from 'next/navigation'

  

const LeftSideBar = () => {
    const router = useRouter()
    const changeRoute=(path)=>{
        router.push(path)
    }

  return (
    <div className='w-56 h-[30rem] border rounded-lg p-4 hidden lg:flex flex-col gap-4'>
        {
        MenuItems.map((item,idx)=>{
            return (
                <Button key={idx} className="cursor-pointer flex gap-2 items-center" onClick={()=>changeRoute(item.path)} variant="ghost">
                   <span>{item.icon}</span>
                    {item.title}
                </Button>
            )
        })
    }
    </div>
  
  )
}

export default LeftSideBar