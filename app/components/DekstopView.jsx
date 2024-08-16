"use client"
import React from 'react'
import Hero from './Hero'
import { useSelector } from 'react-redux';
import FeaturePreview from './FeaturePreview';

const DekstopView = () => {
  const allSections = useSelector((state) => state.page);
  const {hero,theme,...otherSections}=allSections;
  return (
    <div className='w-full' data-theme={theme}>
    <div className='h-full'>
      <Hero theme={theme}/>
      </div>
      {
        Object.keys(otherSections).map((sectionKey)=>{
           if(sectionKey.startsWith('feature')){
             return <FeaturePreview key={sectionKey} feature={allSections[sectionKey]} theme={theme}/>
           }
        })
      }
    </div>
  )
}

export default DekstopView