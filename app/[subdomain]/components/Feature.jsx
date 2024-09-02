import Image from 'next/image';
import React from 'react'

const Feature = ({feature}) => {
    const {
        image: { isImage, imageOnLeft, src: imgSrc,size:imgSize,radius:imgRadius},
        title: { content: titleContent, color: titleClr },
        description: { content: descriptionContent, color: descriptionClr },
        background: { color: bgClr, isBgImage, src: bgSrc },
      } = feature;
      return (
        <div className='h-[40rem] w-full' style={{backgroundColor:bgClr!=="none" && bgClr,backgroundImage:isBgImage ? `url(${bgSrc})`:null,backgroundSize:"cover"}}>
           <div className={`h-full w-full flex ${!isImage && 'justify-center'}  flex-col sm:flex-row ${!imageOnLeft && "sm:flex-row-reverse"}`}>
              {
                isImage && (
                  <div className={`h-1/2 sm:h-full w-full sm:w-1/2  flex justify-center items-center`}>
                    <Image src={imgSrc} width={1200} height={1200} className='w-full h-full' style={{height:`${imgSize}%`,width:`${imgSize}%`,borderRadius:`${imgRadius}%`}}/>
                  </div>
                )
              }
              <div className={`h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-center items-center p-4`}>
              <div className='text-center'>
                <div className='text-lg sm:text-2xl font-extrabold w-full flex justify-center' style={{color:titleClr!=="none" && titleClr}}>{titleContent}</div>
                <div className={`text-sm sm:text-xl font-extralight`} style={{color:descriptionClr!=="none" &&  descriptionClr}}>{descriptionContent}</div>
              </div>
              </div>
           </div>
        </div>
      )
}

export default Feature