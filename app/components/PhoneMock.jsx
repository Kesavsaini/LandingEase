import React from 'react'
import DekstopView from './DekstopView'
import { ScrollArea } from "@/components/ui/scroll-area"


const PhoneMock = () => {
  return (
    <div className="mockup-phone">
    <div className="camera scale-50"></div>
    <div className="display">
      <div className="artboard artboard-demo phone-1">
         <div className='w-full h-full'>
         <ScrollArea className="w-[90%] xxs:w-full h-full">
           <DekstopView/>
        </ScrollArea>
         </div>
      </div>
    </div>
  </div>
  )
}

export default PhoneMock