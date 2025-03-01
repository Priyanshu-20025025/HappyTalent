import express from "express";
import contactFormController from "../controller/contactFormController.js";
import adminRegisterController from "../controller/adminRegisterController.js";
import AdminLoginController from "../controller/adminLoginController.js";
// import authMiddleware from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import { adminLogoutController } from "../controller/adminLogoutController.js";
import adminContactQueries from "../controller/contactQueries.js";
import { addSubUser } from "../controller/addSubUserController.js";
import userRoutes from "./userRoutes.js"
const router = express.Router();

router.post("/contact", contactFormController);
router.post("/admin/register",adminRegisterController)
router.post("/admin/login",AdminLoginController)
router.get("/admin/auth-check",verifyAdmin,(req, res) => {
  res.json({ success: true, admin: req.admin });})
router.post("/admin/logout",adminLogoutController)
router.get("/admin/contact",verifyAdmin,adminContactQueries)
// router.get("/admin/add-user",addSubUser)
router.use("/user",verifyAdmin,userRoutes)
export default router;
