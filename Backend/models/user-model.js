import {Schema,model} from "mongoose";

const UserSchema = new Schema({
    phone: {type: String, required: true, unique: true},
activated: {type: Boolean, default: false, required:false},
        otp: String,      
    otpExpires: Number 

}, {timestamps: true});


const UserModel = model('User', UserSchema);
export default UserModel;