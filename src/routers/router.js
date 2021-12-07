import { Router } from "express";

import adminsRouter from "./admins.js";
import usersRouter from "./users.js";

import { otpControllers } from "../controllers/otp.js";
import { hallsControllers } from "../controllers/halls.js";

const router = Router();

router.post("/otp", otpControllers.sendOtp);

router.get("/otp", otpControllers.verifyOtp);

router.get("/halls", hallsControllers.getAllHalls);

router.use("/admins", adminsRouter);

router.use("/users", usersRouter);

export default router;
