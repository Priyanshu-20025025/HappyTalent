import express from 'express'
import { addSubUser, getSubUser } from '../controller/addSubUserController.js';
import multer from "multer";
const storage = multer.memoryStorage(); // or use diskStorage if needed
const upload = multer({ storage });
const router = express.Router();

router.post("/add",upload.none(),addSubUser)
router.get('/get',getSubUser)
export default router

