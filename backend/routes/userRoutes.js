import express from 'express'
import { addSubUser } from '../controller/addSubUserController.js';
const router = express.Router();

router.post("/add",addSubUser)

export default router