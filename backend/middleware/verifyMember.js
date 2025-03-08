import jwt from "jsonwebtoken"

export const verifyMember = (req,res,next) => {
 const token = req?.cookies?.userToken;

 if(!token){
  return res.status(401).json({ success: false, message: "Unauthorized" });
 }
 try {
  const decoded = jwt.verify(token , process.env.JWT_SECRET);
 
  req.user = decoded
  
  next();
  
 } catch (error) {
  
 }
}
