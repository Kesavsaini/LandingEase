"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileIcon } from '@radix-ui/react-icons'
import { DekstopIcon } from './Icons'
import PhoneMock from './PhoneMock'
import BrowserPreview from './BrowserPreview'
import { useDispatch, useSelector } from 'react-redux'
import { changeView } from '@/lib/features/otherStates/otherSlice'

const MockSelector = () => {
    const dispatch=useDispatch();
    const view=useSelector(state=>state.other.view);

  return (
    <Tabs value={view} className="w-full max-h-full" onValueChange={(value)=>{
        dispatch(changeView(value))
    }}>
    <TabsList className="hidden sm:inline-flex">
    <TabsTrigger value="dekstop">
        <DekstopIcon/>
      </TabsTrigger>
      <TabsTrigger value="mobile">
        <MobileIcon/>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="dekstop" className="h-[30rem]">
        <BrowserPreview/>
    </TabsContent>
    <TabsContent value="mobile" className="h-[37rem] w-full flex justify-center sm:-mt-12">
      <PhoneMock/>
    </TabsContent>
  </Tabs>
  )
}

export default MockSelector