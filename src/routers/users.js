import { Router } from "express";

const router = Router();

router.get("/", (req, res, nex) => {
  res.send("Hi");
});

export default router;
