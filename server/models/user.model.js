const { lowerCase } = require('lodash');
const {Schema , model} = require('mongoose');

const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required"],
    minLength: [5, "Name must be atleast 5 characters"],
    maxLength: [50, "Name must be less than 50 characters"],
    lowerCase: true,
    trime: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowerCase: true,
    trime: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please fill in a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true,'Password is required'],
    minLength: [8, 'Password must be atleast 8 characters'],
    select: false
  },
  role :{
    type: String,
    enum: ['USER','ADMIN'],
    default: 'USER'
  },
  avatar:{
    public_id: {
        type: String
    },
    secure_url:{
        type: String
    }
  },
  forgotPasswordToken : String,
  forgotPasswordExpiry: Date
},{
    timestamps:true
});

const User = model('User' , userSchema);
module.exports = User;