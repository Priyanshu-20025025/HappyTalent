import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Username must be unique
  password: { type: String, required: true }, // Store password hash, NOT plain text
  role: {
    type: String,
    default : 'GENERAL'
  },
  createdAt: { type: Date, default: Date.now }
},{
  timestamps : true
});

const adminModal = mongoose.model("admin",adminSchema)
export default adminModal;