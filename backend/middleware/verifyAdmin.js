import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies?.adminToken; // ✅ Secure JWT from httpOnly cookie
console.log("verify token",token)
  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    
    console.log("decoded",decoded)
    console.log("req.admin",req.admin)
    next();
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid Token" });
  }
};