import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

  
const getShowValue=(item)=>{
  if(item.startsWith('cards')){
   return "Cards Section "+item.substring(6)
  }else if(item.startsWith('feature')){
     return "Feature " + item.substr(8);
  }
}

const SelectFrom = ({list,onButtonClick,buttonContent,onValueChange,value,placeholder}) => {


  return (
<Select  onValueChange={onValueChange} value={value}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder={placeholder} />
  </SelectTrigger>
  <SelectContent>
    { 
        list.length>0 && list.map((item)=>{
            const text=getShowValue(item);
            return <SelectItem value={item}>{text}</SelectItem>
        })
    }
    <Button variant="outline" className="border-dashed flex gap-2 w-full" onClick={onButtonClick}>{buttonContent}</Button>
  </SelectContent>
</Select>

  )
}

export default SelectFrom