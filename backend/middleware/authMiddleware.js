import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.adminToken; // 🛑 Read token from cookies

  if (!token) return res.status(401).json({ message: "Unauthorized Access!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // ✅ Attach user data to request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token!" });
  }
};

export default authMiddleware;
