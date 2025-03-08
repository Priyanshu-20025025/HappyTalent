import express from "express";
import contactFormController from "../controller/contactFormController.js";
import adminRegisterController from "../controller/adminRegisterController.js";
import AdminLoginController from "../controller/adminLoginController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { adminLogoutController } from "../controller/adminLogoutController.js";
import adminContactQueries from "../controller/contactQueries.js";
import { addSubUser, loginUser } from "../controller/addSubUserController.js";
import userRoutes from "./userRoutes.js"
import { verifyMember } from "../middleware/verifyMember.js";
const router = express.Router();


// general routes
router.post("/user/signup",addSubUser)
router.post("/user/login",loginUser)


router.post("/contact", contactFormController);
router.post("/admin/register",adminRegisterController)
router.post("/admin/login",AdminLoginController)
router.get("/admin/auth-check",verifyAdmin,(req, res) => {
  res.json({ success: true, admin: req.admin });})
  router.get("/user/auth-check",verifyMember,(req, res) => {
    res.json({ success: true, user: req.user });})
router.post("/admin/logout",adminLogoutController)
router.get("/admin/contact",verifyAdmin,adminContactQueries)
// router.get("/admin/add-user",addSubUser)
router.use("/user",verifyAdmin,userRoutes)



export default router;
