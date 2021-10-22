import { Router } from "express";

import admin from "./admin.js";
import users from "./users.js";

const router = Router();

router.use("/admin", admin);
router.use("/users", users);

export default router;
