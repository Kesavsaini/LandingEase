'use server'
import { v2 as cloudinary } from 'cloudinary';

export const uploadImageToCloundinary=async(fileStream)=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    
return await new Promise((resolve, reject) => {
    cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        console.error("Error uploading to Cloudinary:", error);
      } else {                   
        console.log("File uploaded to Cloudinary:", result);
         resolve(result.secure_url);
      }
    })
    .end(fileStream);
})
    
};