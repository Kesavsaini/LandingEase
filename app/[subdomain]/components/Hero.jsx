import Image from 'next/image';
import React from 'react'

const Hero = ({hero}) => {
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
    } = hero;
  return (
    <div className={`w-full h-screen  flex flex-col  ${!isLogo && 'justify-center'} relative`} style={{backgroundColor:backGroundColor!=="none" && backGroundColor,backgroundImage:isBackGroundImage ? `url(${bgImgSrc})`:null,backgroundSize:"cover"}}>
    {isLogo && <div className='w-fit p-4 h-12 flex items-center absolute top-4 left-0'>
     <Image src={logoSrc} width={100} height={80}/>
     </div>
    }
  <div className={`w-full h-full flex flex-col sm:flex-row ${isImage? 'justify-between':'justify-center' }  items-center`}>
     <div className={`w-full sm:w-1/2  h-1/2 sm:h-full  overflow-clip text-ellipsis p-4 flex justify-center items-center`}>
     <div className='flex justify-center flex-col items-center text-center'>
     <div className={`text-lg sm:text-4xl font-extrabold overflow-hidden`} style={{color:bigContentColor!=="none" && bigContentColor}}>{bigContent}</div>
     <div className={`text-base sm:text-2xl font-extralight`} style={{color:smallContentColor!=="none" && smallContentColor}}>{smallContent}</div>
     </div>
     </div>
    {isImage && <div className={`w-full sm:w-1/2 h-1/2 sm:h-full flex justify-center items-center`}>
       <Image src={imgSrc} width={1200} height={1200} unoptimized={true} className='w-full' style={{height:`${imgSize}%`,width:`${imgSize}%`}}/>
     </div>
     }
  </div>
 </div>
  )
}

export default Hero