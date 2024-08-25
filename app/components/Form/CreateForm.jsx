import { Input } from '@/components/ui/input';
import React from 'react'
import ColorPicker from '../ColorPicker';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CreateIcon, DeleteIcon, InputIcon } from '../Icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import MyAlertDialog from '../MyAlertDialog';
import { useDispatch } from 'react-redux';
import { addInputsToForm, deleteFormSection, deletFormInput, updateFormInput, updateFormSection } from '@/lib/features/landingPage/pageSlice';
import SelectInputType from './SelectInputType';

import PopOver from '../PopOver';
// import {InputIcon } from '@radix-ui/react-icons';


const CreateForm = ({index,form,formValue}) => {
    const { 
        title:{
           content:titleContent,
           color:titleClr
        },
        description:{
            content:descriptionContent,
            color:descriptionClr
         },
         background:{
            color:bgClr
         },
         button:{
            color:btnClr,
            content:btnContent
          },
          form:{
            color:formBgClr,
            inputs
          }
      
      }=form;
      const dispatch=useDispatch();
  return (
    
    <div className="flex flex-col gap-2 w-11/12">
       <ScrollArea className="">
       <div className='flex flex-col gap-2 w-full h-[23rem] p-2'>
  <Input
    type="text"
    placeholder="Enter Your Form title here"
    className="w-full h-full"
    onChange={(e) => {
      dispatch(
       updateFormSection({formSection:formValue, section:"title", key:"content", value:e.target.value})
      );
    }}
    value={titleContent}
  />
   <ColorPicker
    label="Title Color"
    id={"formTitleColor"+index}
    defaultValue={titleClr}
    onChange={(e) => {
      dispatch(
        updateFormSection({formSection:formValue, section:"title", key:"color", value:e.target.value})
      );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"title", key:"color", value:"none"})
          );
    }}
  />
  <Textarea
    placeholder="Enter form description here..."
    onChange={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"description", key:"content", value:e.target.value})
        );
    }}
    value={descriptionContent}
  />
  <ColorPicker
    label="Description Color"
    id={"formDescriptionColor"+index}
    defaultValue={descriptionClr}
    onChange={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"description", key:"color", value:e.target.value})
          );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"description", key:"color", value:"none"})
          );
    }}
  />
  <ColorPicker
    label="Background Color"
    id={"formBgColor"+index}
    defaultValue={bgClr}
    onChange={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"background", key:"color", value:e.target.value})
        );
    }}

    onThemeSelect={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"background", key:"color", value:"none"})
        );
    }}
  />
   
  <ColorPicker
    label="Form BG Color"
    id={"formCardBgColor"+index}
    defaultValue={formBgClr}
    onChange={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"form", key:"color", value:e.target.value})
        );
    }}

    onThemeSelect={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"form", key:"color", value:"none"})
        );
    }}
  />
  <Input
    type="text"
    placeholder="Enter Your Button name here..."
    className="w-full"
    onChange={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section:"button", key:"content", value:e.target.value})
        );
    }}
    value={btnContent}
  />
   <ColorPicker
    label="Button Color"
    id={"formButtonColor"+index}
    defaultValue={btnClr}
    onChange={(e) => {
      dispatch(
        updateFormSection({ formSection:formValue, section: "button", key: "color", value: e.target.value })
      );
    }}
    onThemeSelect={(e) => {
        dispatch(
            updateFormSection({formSection:formValue, section: "button", key: "color", value: "none" })
          );
    }}
  />
  <Button
        variant="outline"
        className="border-dashed"
        onClick={() => {
          dispatch(addInputsToForm({formSection:formValue}));
        }}
      > <CreateIcon />
        Add Input</Button>
        {
          inputs.map((input, i) => (
            <InputWidget key={formValue+i} index={i} formValue={formValue} input={input}/>
          ))
        }
        </div>
        </ScrollArea>
 <MyAlertDialog type="delete" name={"Form-"+index} onClick={()=>{
    dispatch(deleteFormSection(index));
  }}>
  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-full">Delete section</Button>
  </MyAlertDialog>
</div>
)
}

export default CreateForm

const InputWidget=({index,formValue,input})=>{
  const dispatch = useDispatch();
        return (
            <div className="w-full flex justify-between items-center">
                <SelectInputType onValueChange={(value)=>{
                  dispatch(
                    updateFormInput({ formSection:formValue, index, key:"type", value:value })
                 );
                }} value={input.type}/>
                <PopOver onChange={(e)=>{
                     dispatch(
                      updateFormInput({ formSection:formValue, index, key:"placeholder", value:e.target.value })
                   );
                }}
                 value={input.placeholder}
                 placeholder={"Enter placeholder"}
                />
              <div className="flex items-center">
                <MyAlertDialog
                  type="delete"
                  name={"Card "+index}
                  onClick={() => {
                    dispatch(deletFormInput({formSection:formValue,index}));
                  }}
                >
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <DeleteIcon />
                  </Button>
                </MyAlertDialog>
              </div>
            </div>
          );
}
