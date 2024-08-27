import React from 'react'
import Inbox from './components/Inbox'
import { InBoxIllustrator } from '@/app/components/Icons'

const page = () => {
  return (
    <div className='w-full hidden sm:flex flex-col justify-center items-center border rounded-lg'>
      <InBoxIllustrator/>
       <div>Click on a Message to see</div>
    </div>
  )
}

export default page