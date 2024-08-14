import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getBase64 } from "@/lib/utilsFn";
import { UploadIcon } from "@radix-ui/react-icons"
import { useDispatch } from "react-redux";
import { updateHero } from "@/lib/features/landingPage/pageSlice";

export function FileInput({title,className,id,section}) {
     const dispatch = useDispatch();
     const handleFileInputChange =async e => {
         const base64=await getBase64(e.target.files[0]);
         dispatch(
            updateHero({ section, key: "src", value: base64 })
          );
      };
  return (
    <div className={`flex w-full max-w-sm items-center gap-1.5 ${className}`}>
        <div>{title}</div>
        <Label htmlFor={id} className="border w-10 flex justify-center items-center p-2 rounded-lg">
          <UploadIcon/>
        </Label>
      <Input id={id} type="file" placeholder="Choose file" className="hidden" onChange={handleFileInputChange}/>
    </div>
  )
}
