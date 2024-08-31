import React from "react";
import Card from "./Card";

const CardsSectionPreview = ({ isMobileView, cardSection }) => {
  

  const {
    title: { content: titleContent, color: titleClr },
    background: { color: bgClr },
    cards,
  } = cardSection;

  return (<div className="w-full min-h-40 p-4" style={{backgroundColor:bgClr!=="none" && bgClr}}>
      <div className="flex w-full text-2xl font-extrabold justify-center items-center" style={{color:titleClr!=="none" && titleClr}}>
         {titleContent}
      </div>
      <div className="flex flex-wrap gap-4 p-2 justify-center items-center">
      {
        cards.map((card,index)=>{
            return <Card key={index} card={card} isMobileView={isMobileView}/>
        })
      }
      </div>
  </div>);
};

export default CardsSectionPreview;
