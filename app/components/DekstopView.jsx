import React from 'react'
import Hero from './Hero'

const DekstopView = () => {
  return (
    <div className='h-full border w-full overflow-y-scroll'>
    <div className='h-64 sm:h-96'>
      <Hero/>
      </div>
    </div>
  )
}

export default DekstopView