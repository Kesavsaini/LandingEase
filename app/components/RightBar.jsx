"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateHeroSection from './CreateHeroSection'
import CreateFeature from './CreateFeature'
import { Button } from '@/components/ui/button'


const RightBar = () => {
  return (
    <Tabs defaultValue="hero" className="w-full h-[34rem] sm:w-[400px] border p-4 rounded-lg flex flex-col">
    <TabsList>
      <TabsTrigger value="hero">Hero</TabsTrigger>
      <TabsTrigger value="feature">Feature</TabsTrigger>
      <TabsTrigger value="cards">Cards</TabsTrigger>
      <TabsTrigger value="form">Form</TabsTrigger>
    </TabsList>
    <TabsContent value="hero" className="w-full flex justify-center items-center">
        <CreateHeroSection/>
    </TabsContent>
    <TabsContent value="feature" className="w-full flex flex-col justify-center items-center">
      <CreateFeature/>
    </TabsContent>
  </Tabs>
  
  )
}

export default RightBar