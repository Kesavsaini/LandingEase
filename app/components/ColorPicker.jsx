import { Input } from '@/components/ui/input'
import React from 'react'

const ColorPicker = ({label,id,defaultValue,onChange}) => {
  return (
  <div className='flex justify-between items-center'>
    <div >{label}</div>
    <Input type="color" className="rounded-lg w-10 p-1" id={id} defaultValue={defaultValue} title="Choose your color" onChange={onChange}/> 
   </div>
  )
}

export default ColorPicker