"use client"
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'


const NavBar = () => {
  
  return (
    <div className='p-4 flex'>
        <div className='flex items-center justify-center gap-4'>
     <div className='lg:hidden'>
       <MobileMenu/>
     </div>
     <div className='text-4xl font-extrabold'>Landing
        <span className='text-orange-500 text-2xl font-extrabold'>Ease</span>
        </div>
        </div>
    </div>
  )
}

export default NavBar