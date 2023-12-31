import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  isSeller: {
    type: Boolean,
    default:false
  },
  skills:{
    type:[String],
    required:false
  },
  languages:{
    type:[String],
    required:false
  },
  },{
  timestamps:true
});

export default mongoose.model("User", userSchema)