'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const HeroButton = () => {
    const router=useRouter()
  return (
    <Button className="bg-[#1a2a3a] hover:bg-zinc-950 w-full h-full" onClick={()=>router.push('/dashboard/create')} >Start using free</Button>
  )
}

export default HeroButton