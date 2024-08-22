import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
   name:{type:String, required:true},
   email:{type:String, required:true,unique: true},
   role:{type:String, default:'user',enum : ['user','admin']},
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
export default mongoose.models.User || mongoose.model('User', userSchema);