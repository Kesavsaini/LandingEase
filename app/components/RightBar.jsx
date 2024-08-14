"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateHeroSection from './CreateHeroSection'


const RightBar = () => {
  return (
    <Tabs defaultValue="hero" className="w-full sm:w-[400px] border p-4 rounded-lg flex flex-col">
    <TabsList>
      <TabsTrigger value="hero">Hero</TabsTrigger>
      <TabsTrigger value="about">About</TabsTrigger>
      <TabsTrigger value="cards">Cards</TabsTrigger>
      <TabsTrigger value="form">Form</TabsTrigger>
    </TabsList>
    <TabsContent value="hero" className="w-full flex justify-center items-center">
        <CreateHeroSection/>
    </TabsContent>
  </Tabs>
  
  )
}

export default RightBar