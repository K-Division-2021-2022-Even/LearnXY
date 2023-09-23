import mongoose from "mongoose";
import validator from 'validator';
const schema = new mongoose.Schema({
    name : {
        type : 'String',
        required : [true, "Please enter your name"],
    },
    email : {
        type : 'String',
        required : [true, "Please enter your email"],
        unique : true,
        validator : validator.isEmail,
    },
    password : {
        type : 'String',
        required : [true, "Please enter your password"],
        minLength : [0, "Password must be at least 8 characters"],
        select : false,
    },
    role : {
        type : 'String',
        enum : ["admin", "user"],
        default : "user",
    },
    avatar : {
        public_id : {
            type : 'String',
            required : true,
        },
        url : {
            type : 'String',
            required : true,
        }
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },

    ResetPasswordToken : String,
    ResetPasswordExpire : String,
});

export const User = mongoose.model("User",schema);