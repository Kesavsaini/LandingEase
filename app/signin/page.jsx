"use client"
import { Button } from '@/components/ui/button'
import GoogleIcon from "../../public/GoogleIcon.svg"
import React from 'react'
import Image from 'next/image'
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'


const Page = () => {
    const session=useSession();
    const router=useRouter();
    if(session.status==="authenticated"){
      router.push("/dashboard/create");
    }
  return (
    <div className='w-full h-screen flex justify-center items-center landingGradient'>
     
     <Button variant="outline" className="rounded-2xl p-8 flex items-center justify-center gap-4" onClick={()=>signIn("google")}>
        <Image src={GoogleIcon} width={30} height={30}/>
        Login With Google
     </Button>
    </div>
  )
}

export default Page