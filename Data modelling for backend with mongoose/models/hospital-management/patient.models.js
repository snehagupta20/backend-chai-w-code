import mongoose from "mongoose";

const patient = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  diagnosedWith: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  bloogGroup: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER"],
    required: true,
  },
  admittedIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  }

},{timestamps:true});

export const Patient = mongoose.model("Patient", patient);