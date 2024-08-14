"use client"
import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {colorVariants} from '@/lib/tailwindConfig.js'


const Hero = () => {
    const{
        logo:{
            isLogo,
            src:logoSrc
        },
        bigText:{
            content:bigContent,
            color:bigContentColor
        },
        smallText:{
            content:smallContent,
            color:smallContentColor
        },
        backGroundImage:{
            isBackGroundImage,
            src:bgImgSrc,
            backGroundColor,
        },
        image:{
            isImage,
            src:imgSrc,
            size:imgSize
        }
    } = useSelector((state) => state.page.hero);

    console.log("Height",imgSize)
  return (
    <div className={`w-full h-full flex flex-col  ${!isLogo && 'justify-center'} relative`} style={{backgroundColor:backGroundColor,backgroundImage:isBackGroundImage ? `url(${bgImgSrc})`:null,backgroundSize:"cover"}}>
       {isLogo && <div className='w-fit p-4 h-12 flex items-center absolute top-4 left-0'>
        <Image src={logoSrc} width={100} height={50}/>
        </div>
       }
     <div className={`w-full h-full flex ${isImage? 'justify-between':'justify-center'}  items-center`}>
        <div className='w-1/2  overflow-clip text-ellipsis p-4'>
        <div className={`text-sm sm:text-4xl  font-extrabold overflow-hidden`} style={{color:bigContentColor}}>{bigContent}</div>
        <div className={`text-xs sm:text-sm font-extralight`} style={{color:smallContentColor}}>{smallContent}</div>
        </div>
       {isImage && <div className='w-1/2 h-full flex justify-center items-center'>
          <Image src={imgSrc} width={280} height={280} className='w-full' style={{height:`${imgSize}%`,width:`${imgSize}%`}}/>
        </div>
        }
     </div>
    </div>
  )
}

export default Hero