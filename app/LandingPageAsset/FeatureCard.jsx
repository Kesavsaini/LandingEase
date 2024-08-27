import React from 'react'

 // <rect
// className="fill-current text-orange-600"
// width="64"
// height="64"
// rx="12"
// />

const FeatureCard = ({title,description,icon}) => {
  return (
    <div
    className="relative flex flex-col items-center border p-4 rounded-lg glassMorphic text-black h-60 gap-4"
  >
    <div className='w-16 h-16 rounded-full bg-orange-600 flex justify-center items-center text-white'>
    {
        icon
    }
    </div>
    <div className='flex flex-col justify-center items-center'>
    <h4 className="h4 mb-2 text-2xl font-bold">{title}</h4>
    <p className="text-sm  text-center">
     {description}
    </p>
    </div>
  </div>
  )
}

export default FeatureCard