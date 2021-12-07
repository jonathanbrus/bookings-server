import { Router } from "express";

import { hallsControllers } from "../controllers/halls.js";
import { bookingsControllers } from "../controllers/bookings.js";
import { adminControllers } from "../controllers/admins.js";

const router = Router();

router.post("/halls", hallsControllers.createHall);

router.patch("/halls", hallsControllers.updateHall);

router.delete("/halls/:id", hallsControllers.deleteHall);

router.get("/bookings", bookingsControllers.getAllBookings);

router.patch("/bookings/:id", bookingsControllers.cancelBooking);

router.post("/profile", adminControllers.updateAdmin);

router.patch("/profile", adminControllers.updateAdmin);

router.patch("/profile/roles", adminControllers.assignAdminRole);

router.delete("/profile/:id", adminControllers.deleteAdmin);

router.get("/insights");

export default router;
