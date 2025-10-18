import {Schema,model} from "mongoose";

const refreshSchema = new Schema({
    token: {type: String, required: true},
    userId:{type:Schema.Types.ObjectId,ref:"User"},
activated: {type: Boolean, default: false, required:false},
        otp: String,      
    otpExpires: Number 

}, {timestamps: true});


const RefreshModel = model('tokens', refreshSchema);
export default RefreshModel;