"use client"
import React, { useEffect, useRef } from 'react'
import Hero from './Hero/Hero'
import { useSelector } from 'react-redux';
import FeaturePreview from './Feature/FeaturePreview';
import CardsSectionPreview from './Card/CardsSectionPreview';
import FormPreview from './Form/FormPreview';

const DekstopView = () => {
  const allSections = useSelector((state) => state.page);
  const {hero,theme,...otherSections}=allSections;
  const view=useSelector(state=>state.other.view);
  const ref=useRef(null);
  const isMobileView=view==="mobile";
  // const pleaseScrollTo=()=>{
  //   ref.current?.scrollIntoView({ behavior: 'smooth',block: 'nearest'});
  // }
  return (
    <>
    <div className='w-full' data-theme={theme}>
    <div className='h-full'>
      <Hero myRef={ref} theme={theme} isMobileView={isMobileView}/>
      </div>
      {
        Object.keys(otherSections).map((sectionKey)=>{
           if(sectionKey.startsWith('feature')){
             return <FeaturePreview key={sectionKey} feature={allSections[sectionKey]} theme={theme} isMobileView={isMobileView}/>
           }else if(sectionKey.startsWith('cards')){
            return <CardsSectionPreview key={sectionKey} cardSection={allSections[sectionKey]} isMobileView={isMobileView}/>
            }else if(sectionKey.startsWith('form')){
              return <FormPreview key={sectionKey} formSection={allSections[sectionKey]} isMobileView={isMobileView}/>
            }
        })
      }
    </div>
    </>
  )
}

export default DekstopView