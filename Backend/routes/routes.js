import { Router } from "express";
import AuthController from "../controller/auth-controller.js";
const router=   Router();
 
router.post('/send-otp',AuthController.sendOTP); // http://localhost:5500/api/send-otp});
router.post('/verify-otp',AuthController.verifyOTP); // http://localhost:5500/api/verify-otp});
router




export default router;