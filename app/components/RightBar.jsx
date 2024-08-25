"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateHeroSection from './Hero/CreateHeroSection'
import CreateFeature from './Feature/CreateFeature'
import { Button } from '@/components/ui/button'
import CreateCardSection from './Card/CreateCardSection'
import CreateFormSection from './Form/CreateFormSection'
import CreateFooter from './Footer/CreateFooter'


const RightBar = () => {
  return (
    <Tabs defaultValue="hero" className="w-full h-[34rem] sm:max-w-[400px]  border p-4 rounded-lg flex flex-col">
    <TabsList className="">
      <TabsTrigger value="hero">Hero</TabsTrigger>
      <TabsTrigger value="feature">Feature</TabsTrigger>
      <TabsTrigger value="cards">Cards</TabsTrigger>
      <TabsTrigger value="forms">Form</TabsTrigger>
      <TabsTrigger value="footer">Footer</TabsTrigger>
    </TabsList>
    <TabsContent value="hero" className="w-full flex justify-center items-center">
        <CreateHeroSection/>
    </TabsContent>
    <TabsContent value="feature">
      <CreateFeature/>
    </TabsContent>
    <TabsContent value="cards">
      <CreateCardSection/>
    </TabsContent>
    <TabsContent value="forms">
      <CreateFormSection/>
    </TabsContent>
    <TabsContent value="footer" className="w-full flex justify-center items-center">
      <CreateFooter/>
    </TabsContent>
  </Tabs>
  
  )
}

export default RightBar