import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import EditCard from './EditCard'
  
  
const CardDrawer = ({ children,card,index,cardsKey}) => {
 return(
    <>
     <div className='lg:hidden'>
     <DrawerElement card={card} index={index} cardsKey={cardsKey}>
     { children }
     </DrawerElement>
     </div>
     <div className='hidden lg:flex'>
     <SheetElement card={card} index={index} cardsKey={cardsKey}>
     { children }
     </SheetElement>
     </div>
    </>
 )
}

export const DrawerElement=({ children,card,index,cardsKey})=>{
    return (
   <Drawer>
  <DrawerTrigger>{ children }</DrawerTrigger>
  <DrawerContent className="w-full flex justify-center items-center">
    <EditCard type="drawer" card={card} index={index} cardsKey={cardsKey}/>
  </DrawerContent>
</Drawer>
    )
}

export const SheetElement=({ children,card,index,cardsKey })=>{
    return (

        <Sheet>
          <SheetTrigger>{ children }</SheetTrigger>
          <SheetContent className="w-full flex justify-center items-center">
           <EditCard type="sheet" card={card} index={index} cardsKey={cardsKey}/>
          </SheetContent>
        </Sheet>
        
          )
}

export default CardDrawer