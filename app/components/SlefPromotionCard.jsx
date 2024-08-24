import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
  

const SlefPromotionCard = () => {
  return (
    <Card className="w-48 max-h-full">
    <CardHeader>
      <CardTitle>👋 Hi, I am Keshav</CardTitle>
      <CardDescription> 👨‍💻 Web developer</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Let’s stay connected! Follow me on my social media handles to keep in touch and stay updated..</p>
    </CardContent>
    <CardFooter className="flex items-center justify-around">
     <a href="https://x.com/KeshavXDev" target="_blank" rel="noopener noreferrer"><TwitterLogoIcon className="size-8"/></a>
     <a href="https://github.com/Kesavsaini" target="_blank" rel="noopener noreferrer"><GitHubLogoIcon className="size-8"/></a> 
     <a href="https://www.linkedin.com/in/kesavsaini/" target="_blank" rel="noopener noreferrer"><LinkedInLogoIcon className="size-8"/></a> 
    </CardFooter>
  </Card>
  
  )
}

export default SlefPromotionCard