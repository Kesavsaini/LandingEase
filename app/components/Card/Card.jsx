import Image from "next/image";
import React from "react";

const Card = ({ card,isMobileView }) => {
  const {
    image: { isImage, isBottom, src: imgSrc, size: imgSize },
    title: { content: titleContent, color: titleClr },
    description: { content: descriptionContent, color: descriptionClr },
    button: { isButton, content: buttonContent, color: btnClr, link: btnLink },
  } = card;
  return (
    <div className={`card bg-base-100 ${isMobileView? "w-full":"w-72"} h-[28rem] shadow-xl ${isBottom && "flex-col-reverse"} ${!isImage && "h-[14rem]"} ${!isButton && "h-[24rem]"}  ${!isButton && !isImage && "h-[10rem]"}`}>
       {isImage && <figure className={`w-full h-1/2 ${isBottom && "rounded-t-none"}`}>
        <Image src={imgSrc} alt="img" width={100} height={100} className={`${isBottom && "rounded-b-lg"} ${isBottom && "rounded-t-none"}`} style={{height:`${imgSize}%`,width:`${imgSize}%`}} />
      </figure>
      }
      <div className="card-body h-1/2 overflow-hidden">
        <h2 className="card-title text-base font-bold" style={{color:titleClr!=="none" && titleClr}}>{titleContent}</h2>
        <p className="text-sm font-light" style={{color:descriptionClr!=="none" && descriptionClr}}>{descriptionContent}</p>
        {isButton && <div className="card-actions justify-center">
          <button className="btn btn-primary border-none" style={{backgroundColor:btnClr!=="none" && btnClr}} onClick={()=>{
            
          }}>{buttonContent}</button>
        </div>}
      </div>
    </div>
  );
};

export default Card;
