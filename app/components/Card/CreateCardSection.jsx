import React from 'react'
import SelectFrom from '../SelectFrom'
import { CreateIcon } from '../Icons'

const buttonContent=(<div className='flex gap-2'>
    Add Card Section
    <CreateIcon/>
    </div>
)

const CreateCardSection = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
         <SelectFrom buttonContent={buttonContent} list={[]} onButtonClick={()=>{}} onValueChange={()=>{}} value={undefined} placeholder={"Card Section"}/>
    </div>
  )
}

export default CreateCardSection