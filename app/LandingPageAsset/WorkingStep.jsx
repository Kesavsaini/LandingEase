import React from 'react'
import Image from 'next/image'
// import dashboardSs from '../../public/dashboardSs.png'
import { PaperPlaneIcon } from '@radix-ui/react-icons'


const Step=({step})=>{
    return (
        <li className="flex items-baseline mb-2 gap-1">
            {/* <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg> */}
            <div>
            <PaperPlaneIcon className='text-[#2a6a74]'/>
            </div>
            <span className='text-base'>{step}</span>
          </li>
    )
}

const WorkingStep = ({title,description,steps,tag,image,tilt}) => {
  return (
    <div className="md:flex md:gap-6 items-center">
    {/* Image */}
    <div className={`max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0   ${tilt? "rtl" :"md:order-1"}`} data-aos="fade-up">
      <Image className="max-w-full mx-auto md:max-w-none h-auto" src={image} width={540} height={405} alt="Features 01" />
    </div>
    {/* Content */}
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
      <div className="md:pr-4 lg:pr-12 xl:pr-16">
        <div className="dancing-script text-xl text-orange-600 mb-2">{tag}</div>
        <h3 className="h3 mb-3  text-2xl sm:text-4xl font-bold">{title}</h3>
        <p className="text-xl text-gray-400 mb-4">{description}</p>
        <ul className="text-lg text-[#8c7a6b] -mb-2">
            {
                steps && steps.map((step, index) => <Step key={index} step={step}/>)
            }
        </ul>
      </div>
    </div>
  </div>
  )
}

export default WorkingStep