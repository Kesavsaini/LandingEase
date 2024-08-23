import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import React from 'react'
import { themes } from '@/lib/ThemesArray'
import { useDispatch, useSelector } from 'react-redux'
import { themeChanger } from '@/lib/features/landingPage/pageSlice'
const ThemeSelector = () => {
    const dispatch=useDispatch();
    const theme=useSelector(state=>state.theme);
  return (
    <Select onValueChange={(value)=>{
        dispatch(themeChanger(value));
    }} data-theme={theme}>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Theme" className="text-xs"/>
  </SelectTrigger>
  <SelectContent>
    <div className="flex flex-col gap-2">
    {
        themes.length>0 && themes.map((item)=>{
            return <SelectItem value={item} data-theme={item} className="p-2">{item==="none"?"custom":item}</SelectItem>
        })
    }
    </div>
  </SelectContent>
</Select>
  )
}

export default ThemeSelector