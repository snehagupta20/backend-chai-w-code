import mongoose from "mongoose";

//timestamp gives 2 fields : createdAt(), and updatedAt()
const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {timestamps: true});

export const User = mongoose.model("User", user);