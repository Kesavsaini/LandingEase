import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { CreateIcon } from '../Icons'
import { useDispatch, useSelector } from 'react-redux';
import { addFeatureSection } from "@/lib/features/landingPage/pageSlice";
import CreateFeatureSection from './CreateFeatureSection';
import SelectFrom from '../SelectFrom';

const buttonContent=(<div className='flex gap-2'>
Add Feature 
<CreateIcon/>
</div>)

const CreateFeature = () => {
    const allSections = useSelector((state) => state.page);
    let featuresKeysArray=Object.keys(allSections).filter((item)=>{
        return item.startsWith('feature')
    });

    const dispatch=useDispatch();
    const [featureValue,setFeatureValue]=useState();
    const onButtonClick=()=>{
        dispatch(addFeatureSection());
    }
   
    const onFeatureChange=(value)=>{
        setFeatureValue(value);
    }

    useEffect(()=>{
           setFeatureValue(featuresKeysArray.at(-1));
    },[featuresKeysArray.at(-1)])

    useEffect(()=>{
      if(!allSections[featureValue]){
        setFeatureValue(featuresKeysArray.at(-1));
      }
    },[allSections[featureValue]])

  return (
    <div className='w-full flex flex-col justify-center items-center'>
          <SelectFrom buttonContent={buttonContent} list={featuresKeysArray} onButtonClick={onButtonClick} onValueChange={onFeatureChange} value={featureValue} placeholder={"Feature"}/>
           {featureValue && allSections[featureValue] &&
                <CreateFeatureSection key={featureValue} featureValue={featureValue} index={parseInt(featureValue.substring(8))} feature={allSections[featureValue]}/>
           }
    </div>
  )
}

export default CreateFeature