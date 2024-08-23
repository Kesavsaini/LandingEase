import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBase64, getFormData } from "@/lib/utilsFn";
import { UploadIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import {
  updateHero,
  updateFeatureSection,
  updateCard,
} from "@/lib/features/landingPage/pageSlice";
import { uploadFile } from "../action/uploadFile";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "./Icons";

export function FileInput({
  title,
  className,
  id,
  section,
  sectionType,
  upperSection,
  index,
}) {
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const handleFileInputChange = async (e) => {
    setUploading(true);
    const formData = await getFormData(e.target.files[0]);
    const res = await uploadFile(formData);
    setUploading(false);
    if (!res.done) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    switch (sectionType) {
      case "hero":
        dispatch(updateHero({ section, key: "src", value: res.Imageurl }));
        break;
      case "feature":
        dispatch(
          updateFeatureSection({
            feature: upperSection,
            section,
            key: "src",
            value: res.Imageurl,
          })
        );
        break;
      case "card":
        dispatch(
          updateCard({
            cardsSection: upperSection,
            section,
            index,
            key: "src",
            value: res.Imageurl,
          })
        );
        break;
      default:
        break;
    }
  };
  return (
    <div className={`flex w-full max-w-sm items-center gap-1.5 ${className}`}>
      <div>{title}</div>
      <Label
        htmlFor={id}
        className="border w-10 flex justify-center items-center p-2 rounded-lg"
      >
        {uploading ? <Spinner /> : <UploadIcon />}
      </Label>
      <Input
        id={id}
        type="file"
        placeholder="Choose file"
        className="hidden"
        onChange={handleFileInputChange}
        disabled={uploading}
      />
    </div>
  );
}
