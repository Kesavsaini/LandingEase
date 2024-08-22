import mongoose from "mongoose";
import { Schema } from "mongoose";

const pageSchema=new mongoose.Schema({
    userId:{ type: Schema.Types.ObjectId, ref: 'User',required: true},
    published:{type:Boolean,default:false},
    subdomain:{type:String,unique:true},
    name:String,
    state:{type:Schema.Types.Mixed,default:{}}
},
{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
)
export default mongoose.models.Page || mongoose.model('Page', pageSchema);