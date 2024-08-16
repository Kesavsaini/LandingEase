"use client"
import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import ThemeSelector from './ThemeSelector'


const NavBar = () => {
  
  return (
    <div className='p-4 flex justify-between items-center'>
        <div className='flex items-center justify-center gap-4'>
     <div className='lg:hidden'>
       <MobileMenu/>
     </div>
     <div className='text-2xl sm:text-4xl font-extrabold'>Landing
        <span className='text-orange-500 text-2xl font-extrabold'>Ease</span>
        </div>
        </div>
        <div>
          <div className='w-full flex flex-col justify-center items-center'>
          <ThemeSelector/>
          </div>
        </div>
    </div>
  )
}

export default NavBar