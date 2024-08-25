import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { InputIcon } from './Icons'
import { Input } from '@/components/ui/input'

const PopOver = ({onChange,value,placeholder}) => {
    return(
      <Popover>
    <PopoverTrigger className='hover:bg-zinc-50 p-1 rounded-lg'>
      <InputIcon/>
    </PopoverTrigger>
    <PopoverContent>
    <Input
      type="text"
      placeholder={placeholder}
      className="w-full"
      onChange={onChange}
      value={value}
    />
    </PopoverContent>
    </Popover>
  )
}

export default PopOver