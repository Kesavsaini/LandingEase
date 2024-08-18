import React from 'react'
import { Slider } from "@/components/ui/slider"
import { useDispatch } from "react-redux";
import { updateCard, updateFeatureSection, updateHero } from "@/lib/features/landingPage/pageSlice";


const ImageSizeSlider = ({section,datakey,sectionType,upperSection,defaultValue,index}) => {
    const dispatch = useDispatch();
    const handleChange =value => {
      switch (sectionType) {
       case "hero":
          dispatch(updateHero({ section, key:datakey, value:value[0]}))
         break;
      case "feature":
       dispatch(
         updateFeatureSection({ feature:upperSection, section, key:datakey, value: value[0] })
       );
       break;
       case "card":
        dispatch(
          updateCard({cardsSection:upperSection, section ,index, key:datakey, value:value[0]})
       );
       break;
       default:
         break;
      }
      
   };
  return (
    <div className='flex justify-between'>
      <div className='w-full'>Image Size</div>
    <Slider defaultValue={[defaultValue]} max={100} min={0} step={1} onValueChange={handleChange}
    
/>
</div>
  )
}

export default ImageSizeSlider