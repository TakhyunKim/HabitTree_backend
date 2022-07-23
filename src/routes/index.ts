import express from "express";

import userRouter from "./user";
import habitRouter from "./habit";

const router = express.Router();

router.use("/user", userRouter);
router.use("/habit", habitRouter);

export default router;
