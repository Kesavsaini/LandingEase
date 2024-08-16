import React from 'react'
import DekstopView from './DekstopView'
import BrowserPreview from './BrowserPreview'
import PhoneMock from './PhoneMock'
import MockSelector from './MockSelector'

const Pageview = () => {
  return (
    <div className='h-[40rem] lg:h-[37rem] p-2 w-full flex justify-center'>
        {/* <DekstopView/> */}
        {/* <BrowserPreview/> */}
        {/* <PhoneMock/> */}
        <MockSelector/>
    </div>
  )
}

export default Pageview