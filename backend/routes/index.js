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
import { saveFilePathInDb } from "../controller/savingPathInDb.controller.js";
import multer from "multer";
import fs from 'fs'
const handleFolderStructure = () => {
  const  { org_id , module_type , subfolder} = req.body
  return `./uploads/Org_ ${org_id}/${module_type}/${subfolder}`
}

const storage = (filePath) => multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(`./uploads/${filePath}`)) {
      fs.mkdirSync(`./uploads/${filePath}`, { recursive: true });
    }
     cb(null, `./uploads/${filePath}`)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
    const fileName = file.fieldname + '-' + uniqueSuffix
    cb(null, fileName)
  }
})

// const uploadFiles = multer({ storage: storage })

const upload =(filePath) => multer({ storage: storage(filePath) })
// const upload = multer({ dest: 'uploads/' })  

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
router.post("/send-files", upload('suppliers/proofs').fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]),saveFilePathInDb)


export default router;
