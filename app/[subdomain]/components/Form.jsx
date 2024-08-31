'use client'
import { sentMessage } from '@/app/action/pageJson';
import React, { useState } from 'react'
import { toast } from 'sonner';

const Form = ({formSection,subdomain,formName}) => {
    const {
        title: { content: titleContent, color: titleClr },
        description: { content: descriptionContent, color: descriptionClr },
        background: { color: bgClr },
        button: { color: btnClr, content: btnContent },
        form: { color: formBgClr, inputs },
      } = formSection;
      const [formBody,setFormBody] = useState({})

      const handleSubmit=async(e)=>{
          e.preventDefault();
          let message={};
          Object.keys(formBody).forEach(key=>{
            const idxPosition = key.lastIndexOf('idx');
            const numericPart = parseInt(key.slice(idxPosition + 3));
             message[key]={name:inputs[numericPart].placeholder,value:formBody[key]};
          })
          const res=await sentMessage({subdomain,formName,message});
          if(res.done){
            toast.success(res.message);
          }else toast.error(res.message);
      }
    
      return (
        <div
          className="w-full min-h-screen p-4 flex justify-center items-center"
          style={{ backgroundColor: bgClr !== "none" && bgClr }}
        >
          
          <div
            className={`h-full w-full flex 
              flex-col sm:flex-row
             justify-center items-center`}
          >
            {(titleContent || descriptionContent) &&  <div
              className={`h-1/2 sm:h-full
                w-full sm:w-1/2
              flex flex-col justify-center items-center text-center`}
            >
              <div className="flex flex-col justify-center items-center h-full">
                <div
                  className="text-lg sm:text-4xl font-extrabold w-full flex justify-center"
                  style={{ color: titleClr !== "none" && titleClr }}
                >
                  {titleContent}
                </div>
                <div
                  className={`text-sm sm:text-xl font-extralight`}
                  style={{ color: descriptionClr !== "none" && descriptionClr }}
                >
                  {descriptionContent}
                </div>
              </div>
            </div> }
            <div className={`h-1/2 sm:h-full w-full sm:w-1/2  flex  justify-center items-center`}>
            <div
              className={`card bg-base-100 
                w-full sm:w-96 shadow-xl`}
              style={{ backgroundColor: formBgClr !== "none" && formBgClr }}
            > 
              <div className="card-body">
                <div className="flex flex-col gap-2 w-full">
                {inputs.map(({ type, name, placeholder, required, value },index) =>
                  type === "textarea" ? (
                    <textarea className="textarea textarea-bordered" name={formName+"idx"+index}
                    id={formName+"idx"+index} key={formName+"idx"+index}  placeholder={placeholder} style={{ backgroundColor: formBgClr !== "none" && formBgClr }}
                    onChange={(e)=>setFormBody(prev=>({...prev,[e.target.name]:e.target.value}))}
                    ></textarea>
                  ) : (
                    <input
                      type={type}
                      name={formName+"idx"+index}
                      id={formName+"idx"+index}
                      key={formName+"idx"+index}
                      placeholder={placeholder}
                      required={required}
                      value={value}
                      className="input input-bordered w-full max-w-xs"
                      style={{ backgroundColor: formBgClr !== "none" && formBgClr }}
                      onChange={(e)=>setFormBody(prev=>({...prev,[e.target.name]:e.target.value}))}
                    />
                  )
                )}
                </div>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary border-none"
                    style={{ backgroundColor: btnClr !== "none" && btnClr }}
                    type='submit'
                    onClick={handleSubmit}
                  >
                    {btnContent}
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      );
}

export default Form