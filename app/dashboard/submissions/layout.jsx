import React from 'react'
import Inbox from './components/Inbox'

const layout = ({children}) => {
  return (
    <div className='px-4 w-full flex gap-2'>
     <Inbox/>
     {children}
   </div>
  )
}

export default layout