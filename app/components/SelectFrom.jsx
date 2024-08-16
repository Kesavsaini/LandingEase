import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

  
const SelectFrom = ({list,onButtonClick,buttonContent,onValueChange,value}) => {
  return (
<Select  onValueChange={onValueChange} value={value}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Features" />
  </SelectTrigger>
  <SelectContent>
    {
        list.length>0 && list.map((item)=>{
            return <SelectItem value={item}>{"Feature " + item.substr(8)}</SelectItem>
        })
    }
    <Button variant="outline" className="border-dashed flex gap-2 w-full" onClick={onButtonClick}>{buttonContent}</Button>
  </SelectContent>
</Select>

  )
}

export default SelectFrom