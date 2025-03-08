import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser";
import adminModal from "../modals/adminModal.js";
dotenv.config();

 const AdminLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const existedUser = await adminModal.findOne({ email });

    if (!existedUser) return res.status(404).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, existedUser.password);
    if (!isMatch) return res.status(400).json({ message: "Incorrect Password" });

    const token = jwt.sign({ id: existedUser._id, role: "ADMIN" }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.cookie("adminToken", token, {
      httpOnly: true, // ❌ JavaScript cannot access this cookie
      secure: true, // ✅ Only works on HTTPS
      sameSite: "strict", // ✅ Protects against CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    });

    res.status(200).json({ success: true, message: "Logged In Successfully!" });
  } catch (error) {
    console.log("error",error)
    res.status(500).json({ message: "Server Error", error });
  }
};

export default AdminLoginController