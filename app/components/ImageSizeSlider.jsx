import React from 'react'
import { Slider } from "@/components/ui/slider"
import { useDispatch } from "react-redux";
import { updateHero } from "@/lib/features/landingPage/pageSlice";


const ImageSizeSlider = ({section,datakey}) => {
    const dispatch = useDispatch();
  return (
    <div className='flex justify-between'>
      <div className='w-full'>Image Size</div>
    <Slider defaultValue={[100]} max={100} min={60} step={1} onValueChange={(value)=>{
        console.log('values', value[0])  // for debugging purposes
        dispatch(updateHero({ section, key:datakey, value:value[0]}))
    }}
    
/>
</div>
  )
}

export default ImageSizeSlider