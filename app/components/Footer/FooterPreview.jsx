import React from "react";
import { SocialIcons } from "../SocialIcons";



const FooterPreview = ({ footer, isMobileView }) => {
  const {
    meta: { isFooter },
    adress: { isLogo, content, color: addressClr },
    background: { color: bgClr },
    socials: { socialArray },
  } = footer;
  return (
    <footer
      className={`max-w-full footer bg-neutral text-neutral-content ${isMobileView && "flex-col"} p-10 flex justify-around items-center`}
      style={{ backgroundColor: bgClr !== "none" && bgClr }}
    >
      {(content || isLogo) &&
      <aside className={`flex ${isMobileView && "flex"}`} style={{ color: addressClr !== "none" && addressClr }}>
        {isLogo && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      
        )}
        <p className="w-48">{content}</p>
      </aside>}
      {socialArray.length>0 &&
      <nav>
    <div className="flex gap-4 items-center max-w-44  flex-wrap">
          {socialArray.map((social,index) => {
            return (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                style={{color: social.color!=="none" && social.color}}
              >
                <SocialIcons type={social.type} />
              </a>
            );
          })}
        </div>
      </nav>
      }
    </footer>
  );
};

export default FooterPreview;
