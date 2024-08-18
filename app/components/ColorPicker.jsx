import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { ThreeDost } from './Icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



const ColorPicker = ({label,id,defaultValue,onChange, onThemeSelect}) => {
  return (
  <div className='w-full flex justify-between items-center'>
    <div >{label}</div>
    <div className='flex items-center gap-2'>
    {/* <Input type="color" className="rounded-lg w-10 p-1" id={id} defaultValue={defaultValue} title="Choose your color" onChange={onChange}/>  */}
     {/* <Button variant="outline" className="text-xs p-1">
       <ThreeDost/>
     </Button> */}
     <Popover>
  <PopoverTrigger><ThreeDost/></PopoverTrigger>
  <PopoverContent className="w-36 flex flex-col gap-2 mx-4">
  <Input type="color" className="w-full rounded-lg p-1" id={id} defaultValue={defaultValue} title="Choose your color" onChange={onChange}/> 
  <Button variant="outline" className="text-xs p-1" onClick={onThemeSelect}>
      Use Theme color
     </Button>
  </PopoverContent>
  </Popover>

    </div>
   </div>
  )
}

export default ColorPicker