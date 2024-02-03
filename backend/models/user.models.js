import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    }
})

export const User = mongoose.model("User",UserSchema)