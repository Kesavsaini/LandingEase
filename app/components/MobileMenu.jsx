"use client"
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { ThreeLines } from './Icons'
import { MenuItems } from '@/lib/staticData'

const MobileMenu = () => {
    const router = useRouter()
    const changeRoute=(path)=>{
        router.push(path)
    }
  return (
    <DropdownMenu className="p-44">
    <DropdownMenuTrigger>
     <ThreeLines/>
  </DropdownMenuTrigger>
  <DropdownMenuContent className='w-36  rounded-lg p-4 ml-4'>
    {
        MenuItems.map((item,idx)=>{
            return (
                <DropdownMenuItem key={idx} className="cursor-pointer flex gap-2 items-center" onClick={()=>changeRoute(item.path)}>
                   <span>{item.icon}</span>
                    {item.title}
                </DropdownMenuItem>
            )
        })
    }
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default MobileMenu