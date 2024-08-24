'use client'
import React, { useEffect } from 'react'  
import { Button } from '@/components/ui/button'
import { MenuItems } from '@/lib/staticData'
import { usePathname, useRouter } from 'next/navigation'
import SlefPromotionCard from './SlefPromotionCard'

  

const LeftSideBar = () => {
    const router = useRouter()
    const pathname=usePathname();
    const changeRoute=(path)=>{
        router.push(path)
    }

  return (
    <div className='min-w-56 h-[34rem] border rounded-lg p-4 hidden lg:flex flex-col gap-4'>
        {
        MenuItems.map((item,idx)=>{
            const isActive=pathname===item.path;
            return (
                <Button key={idx} className="cursor-pointer flex gap-2 items-center justify-start" onClick={()=>changeRoute(item.path)} variant={`${isActive? "secondary":"ghost"}`}>
                   <span>{item.icon}</span>
                    {item.title}
                </Button>
            )
        })
    }
  <SlefPromotionCard/>
    </div>
  
  )
}

export default LeftSideBar