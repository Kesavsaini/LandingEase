import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const SelectInboxProject = ({selected, setSelected,projectsArray}) => {
  //  const [projectsArray, setProjectsArray] =useState([]);
  //  const getPages=async()=>{
  //   const projects=await getPagesByUser();
  //   const projectsArr=projects.map((page)=>{
  //      return {name:page.name,id:page.id,subdomain:page.subdomain};
  //   })
  //   setProjectsArray(projectsArr);
  //   console.log("ProjectsArray",projectsArray);
  //  }
  //  useEffect(()=>{
  //     getPages();
  //   },[])
  return (
    <div className="font-semibold">
    <Select value={selected} onValueChange={(value)=>setSelected(value)}>
    <SelectTrigger className="w-[140px]">
      <SelectValue placeholder="Project"/>
    </SelectTrigger>
    <SelectContent>
    <SelectItem key={'all'} value={"all"}>All</SelectItem>
      {
        projectsArray.map((project, index) => (
          <SelectItem key={index} value={project.subdomain}>{project.name}</SelectItem>
        ))
      }
    </SelectContent>
  </Select>
  </div>
  )
}

export default SelectInboxProject