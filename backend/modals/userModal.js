import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true },
    designation: { type: String, required: true },
    dob: { type: Date, required: true },
    aadhar: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    occupation: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" },
    profilePicture: { type: String }, // Store image URL or file path
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
