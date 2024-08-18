import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

const FeaturePreview = ({feature,theme,isMobileView}) => {
  const {
    image: { isImage, imageOnLeft, src: imgSrc,size:imgSize },
    title: { content: titleContent, color: titleClr },
    description: { content: descriptionContent, color: descriptionClr },
    background: { color: bgClr, isBgImage, src: bgSrc },
  } = feature;
  const isThemeApplied=theme!=="none";
  return (
    <div className='h-96 w-full' style={{backgroundColor:bgClr!=="none" && bgClr,backgroundImage:isBgImage ? `url(${bgSrc})`:null,backgroundSize:"cover"}}>
       <div className={`h-full w-full flex ${!isImage && 'justify-center'} ${isMobileView ? "flex-col":"flex-row"} ${!imageOnLeft && "flex-row-reverse"} ${(!imageOnLeft && isMobileView) && "flex-col-reverse"}`}>
          {
            isImage && (
              <div className={`${isMobileView ?"h-1/2":"h-full"} ${isMobileView ?"w-full":"w-1/2"}  flex justify-center items-center`}>
                <Image src={imgSrc} width={100} height={100} className='w-full h-full' style={{height:`${imgSize}%`,width:`${imgSize}%`}}/>
              </div>
            )
          }
          <div className={`${isMobileView ?"h-1/2":"h-full"} ${isMobileView ?"w-full":"w-1/2"} flex flex-col justify-center items-center p-4`}>
          <div className=''>
            <div className='text-sm sm:text-2xl font-extrabold w-full flex justify-center' style={{color:titleClr!=="none" && titleClr}}>{titleContent}</div>
            <div className={`text-xs sm:text-sm font-extralight`} style={{color:descriptionClr!=="none" &&  descriptionClr}}>{descriptionContent}</div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default FeaturePreview