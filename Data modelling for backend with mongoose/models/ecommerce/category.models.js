import mongoose from 'mongoose';

// timestamp gives us createdAt() and updatedAt();
const category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
},{timestamps: true});

// db by default Category ko categorys store karega. usko plural banayega
// but if u store categories instead of category, then vo usko change nai karega. mongoose is intelligent is mamle mei
export const Category = mongoose.model("Category", category);