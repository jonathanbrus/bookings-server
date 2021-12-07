import { Router } from "express";

import { hallsControllers } from "../controllers/halls.js";
import { bookingsControllers } from "../controllers/bookings.js";
import { usersControllers } from "../controllers/users.js";

const router = Router();

router.get("/halls/availability", hallsControllers.checkHallAvailability);

router.get("/bookings", bookingsControllers.getBookingsByUserId);

router.patch("/bookings/:id", bookingsControllers.cancelBooking);

router.post("/profile", usersControllers.updateUser);

router.patch("/profile", usersControllers.updateUser);

router.delete("/profile/:id", usersControllers.deleteUser);

export default router;
