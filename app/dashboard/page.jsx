import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../lib/features/couter/counterSlice'
import { Button } from '@/components/ui/button'
import PhoneMock from '../components/PhoneMock'
import Pageview from '../components/Pageview'
import RightBar from '../components/RightBar'
const DashBoard = () => {
  return (
    <div className='flex flex-col gap-10 lg:gap-0 justify-center items-center  lg:flex-row lg:justify-between w-full lg:items-stretch'>
      {/* <Pageview/>
      <RightBar/> */}
    </div>
  )
}

export default DashBoard