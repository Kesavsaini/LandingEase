"use client"
import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {colorVariants} from '@/lib/tailwindConfig.js'


const Hero = ({theme,isMobileView,myRef}) => {
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
    const isThemeApplied=theme!=="none";
  return (
    <div className={`w-full ${isMobileView ? "h-[36rem]":"h-[28rem]"}  flex flex-col  ${!isLogo && 'justify-center'} relative`} style={{backgroundColor:backGroundColor!=="none" && backGroundColor,backgroundImage:isBackGroundImage ? `url(${bgImgSrc})`:null,backgroundSize:"cover"}} ref={myRef}>
       {isLogo && <div className='w-fit p-0 sm:p-4 h-12 flex items-center absolute top-0 sm:top-4 left-0 scale-50 sm:scale-100'>
        <Image src={logoSrc} width={100} height={80}/>
        </div>
       }
     <div className={`w-full h-full flex ${isImage? 'justify-between':'justify-center' }  items-center ${isMobileView && "flex-col"}`}>
        <div className={`${isMobileView? "w-full":"w-1/2"} ${isMobileView? "h-1/2":"h-full"}  overflow-clip text-ellipsis p-4 flex justify-center items-center`}>
        <div className='flex justify-center flex-col items-center text-center'>
        <div className={`${isMobileView? "text-sm":"text-2xl"} font-extrabold overflow-hidden`} style={{color:bigContentColor!=="none" && bigContentColor}}>{bigContent}</div>
        <div className={`${isMobileView? "text-xs":"text-lg"} font-extralight`} style={{color:smallContentColor!=="none" && smallContentColor}}>{smallContent}</div>
        </div>
        </div>
       {isImage && <div className={`${isMobileView? "w-full":"w-1/2"} ${isMobileView? "h-1/2":"h-full"} flex justify-center items-center`}>
          <Image src={imgSrc} width={600} height={600} className='w-full' style={{height:`${imgSize}%`,width:`${imgSize}%`}}/>
        </div>
        }
     </div>
    </div>
  )
}

export default Hero