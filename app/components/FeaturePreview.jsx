import Image from 'next/image';
import React from 'react'

const FeaturePreview = ({feature,theme}) => {
  const {
    image: { isImage, imageOnLeft, src: imgSrc,size:imgSize },
    title: { content: titleContent, color: titleClr },
    description: { content: descriptionContent, color: descriptionClr },
    background: { color: bgClr, isBgImage, src: bgSrc },
  } = feature;
  const isThemeApplied=theme!=="none";
  return (
    <div className='h-44 sm:h-96 w-full' style={{backgroundColor:bgClr,backgroundImage:isBgImage ? `url(${bgSrc})`:null,backgroundSize:"cover"}}>
       <div className={`h-full w-full flex ${!isImage && 'justify-center'} ${!imageOnLeft && "flex-row-reverse"}`}>
          {
            isImage && (
              <div className={`w-1/2 h-full flex justify-center items-center`}>
                <Image src={imgSrc} width={100} height={100} className='w-full h-full' style={{height:`${imgSize}%`,width:`${imgSize}%`}}/>
              </div>
            )
          }
          <div className='w-1/2 flex flex-col justify-center items-center p-4'>
          <div className='scale-50 sm:scale-100'>
            <div className='text-sm sm:text-2xl font-extrabold w-full flex justify-center' style={{color:titleClr}}>{titleContent}</div>
            <div className={`text-xs sm:text-sm font-extralight`} style={{color:descriptionClr}}>{descriptionContent}</div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default FeaturePreview