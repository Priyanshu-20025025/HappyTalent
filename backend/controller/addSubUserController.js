import User from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
// Add Sub-User Controller
export const addSubUser = async (req, res) => {
  try {
    const { name, fatherName, email, mobile, designation, dob, aadhar, address, city, occupation, status, profileImage, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    let NewPassword; // Declare NewPassword outside the if block
    if (!password) {
      NewPassword = '123456'; // Use default password if password from req.body is missing or falsy
    } else {
      NewPassword = password; // Use password from req.body if it's provided
    }

    const hashedPassword = await bcrypt.hash(NewPassword, 10);

    const newUser = new User({
      name,
      fatherName,
      email,
      password: hashedPassword,
      // mobile,
      // designation,
      // dob,
      // aadhar,
      // address,
      // city,
      // occupation,
      // status,
      // profileImage,
    });

    await newUser.save();
    res.status(201).json({ success: true, message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};


export const getSubUser = async (req, res) => {
  try {
 
    const users = await User.find({}, "-password").sort({ createdAt: -1 }).lean(); // Exclude passwords from response

    if (!users.length) {
      return res.status(404).json({ success: false, message: "No users found" });
    }
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


export const updateStatus = async (req,res) => {
  
}


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existedUser = await User.findOne({ email });
    if (!existedUser) return res.status(404).json({ message: "User not found!" });
    const isMatch = await bcrypt.compare(password, existedUser.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect Password" });
    const token = jwt.sign({ id: existedUser._id, role: "USER" }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.cookie("userToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: "Logged In Successfully!" });

  } catch (error) {
    console.error("Error during login:", error); // Log the error for debugging (important!)
    res.status(500).json({success: false,  message: "Login failed. Please try again later." }); // Send a generic error response to the client
  }
};