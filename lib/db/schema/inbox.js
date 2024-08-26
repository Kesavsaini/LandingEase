import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema=new mongoose.Schema({
    subdomain:{ type: String,ref:'Page',required: true},
    formName:{type:String,required:true},
    message:{type:Schema.Types.Mixed,default:{}}
},
{
    timestamps:{
        createdAt: 'created_at',
    }
}
)
export default mongoose.models.Message || mongoose.model('Message', messageSchema);