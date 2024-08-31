"use server"
import { uploadImageToCloundinary } from "@/lib/cloudinaryUpload";

export const uploadFile=async(formData)=>{
    try{
        const file=await formData.get('file');
        const fileBuffer = await file.arrayBuffer();
        const fileStream = Buffer.from(fileBuffer);
         const Imageurl=await uploadImageToCloundinary(fileStream);
        return {message:"Uploaded",done:true,Imageurl};
    }catch(e){
       return {message:"Image Upload failed",done:false};;
    }
}