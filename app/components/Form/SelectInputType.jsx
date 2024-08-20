import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  const inputTypes=[
    "text",
    "number",
    "email",
    "textarea",
  ]

const SelectInputType = ({onValueChange,value}) => {
  return (
    <Select  value={value} onValueChange={onValueChange}>
  <SelectTrigger className="w-28">
    <SelectValue placeholder="Input Type" />
  </SelectTrigger>
  <SelectContent>
    {
        inputTypes.map((type, index) => (
            <SelectItem key={index} value={type}>{type}</SelectItem>
        ))
    }
  </SelectContent>
</Select>

  )
}

export default SelectInputType