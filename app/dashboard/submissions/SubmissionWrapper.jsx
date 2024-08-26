'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Inbox from './components/Inbox';

const SubmissionWrapper = ({children}) => {
    const pathname=usePathname();
    const isDynamicPath=pathname.startsWith('dashboard/submissions/')
  return (
    <div className='px-4 w-full flex'>
    <Inbox/>
    {children}
  </div>
  )
}

export default SubmissionWrapper