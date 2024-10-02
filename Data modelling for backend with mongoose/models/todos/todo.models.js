import mongoose from 'mongoose';

const todoschema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    // means ab mai reference dene wali hu kisi aur schema ka
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo",
    }
  ] // array of sub-todos
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoschema);
