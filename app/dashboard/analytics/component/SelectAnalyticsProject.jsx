import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const SelectAnalyticsProject = ({selected, setSelected,projectsArray}) => {
  return (
    <div className="font-semibold">
    <Select value={selected} onValueChange={(value)=>setSelected(value)}>
    <SelectTrigger className="w-[140px]">
      <SelectValue placeholder="Project"/>
    </SelectTrigger>
    <SelectContent>
      {
        projectsArray.map((project, index) => (
          <SelectItem key={index} value={"/"+project.subdomain}>{project.name}</SelectItem>
        ))
      }
    </SelectContent>
  </Select>
  </div>
  )
}

export default SelectAnalyticsProject