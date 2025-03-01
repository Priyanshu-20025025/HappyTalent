import User from "../modals/userModal.js";
import bcrypt from "bcrypt";

// Add Sub-User Controller
export const addSubUser = async (req, res) => {
  try {
    const { name, fatherName, email, mobile, designation, dob, aadhar, address, city, occupation, status, profileImage } = req.body;
    console.log("reqheaders",req.headers)

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }
console.log("req",req.body)
return
    // Hash a default password for security (to be changed on first login)
    const defaultPassword = "password123";
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const newUser = new User({
      name,
      fatherName,
      email,
      password: hashedPassword,
      mobile,
      designation,
      dob,
      aadhar,
      address,
      city,
      occupation,
      status,
      profileImage,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("error",error )
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
