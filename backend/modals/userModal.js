import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    fatherName: { type: String  },
    email: { type: String, required: true, unique: true },
    mobile: { type: String },
    designation: { type: String},
    dob: { type: Date},
    aadhar: { type: String ,unique: true,
      sparse: true},
    address: { type: String },
    city: { type: String },
    occupation: { type: String},
    status: { type: String, enum: ["Active", "Inactive"], default: "Inactive" },
    profilePicture: { type: String }, // Store image URL or file path
    password: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
