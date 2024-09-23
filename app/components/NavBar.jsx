"use client"
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import ThemeSelector from './ThemeSelector'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArchiveIcon } from '@radix-ui/react-icons'
import { updateStateByPageId } from '../action/pageJson'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import Image from 'next/image'
import LandingEaseSvg from "../../public/LandingEaseSvg.svg"


const NavBar = () => {
  const pathname = usePathname();
  const state=useSelector(state=>state.page);
  const [disabled,setDisabled]=useState(false);
   const SaveState=async()=>{
     setDisabled(true);
     const pageId=pathname.split('/')[3];
     const res=await updateStateByPageId({pageId,newState:state});
     if(res.done){
      toast.success("Saved successfully");
     }else toast.error("Failed to save state");
     setDisabled(false);
   }
  return (
    <div className='p-4 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-4'>
     <div className='lg:hidden'>
       <MobileMenu/>
     </div>
     <div className="flex gap-2 items-center">
          <Image
            src={LandingEaseSvg}
            alt="Landing Ease SVG"
            width={50}
            height={50}
            className="object-contain sm:object-scale-down"
          />
        <div className='text-2xl sm:text-4xl font-extrabold  text-black hidden sm:block'>Landing
        <span className='text-orange-500 text-base sm:text-2xl font-extrabold'>Ease</span>
        </div>
        </div>
     {/* <div className='text-xl sm:text-4xl font-extrabold'>Landing
        <span className='text-orange-500 text-base sm:text-2xl font-extrabold'>Ease</span>
        </div> */}
        </div>
        <div>
         {pathname.startsWith("/dashboard/create/") && <div className='w-full flex gap-2 justify-center items-center'>
          <Button className="flex gap-1 items-center" onClick={SaveState} disabled={disabled}>
          <ArchiveIcon/>
            <span className='hidden sm:block'>Save</span>
          </Button>
          <ThemeSelector/>
          </div>}
        </div>
    </div>
  )
}

export default NavBar