import express from "express";
import { getUser, getAllUsers } from "../controllers/general.js";

const router = express.Router();


router.get("/users", getAllUsers)
router.get("/user/:id", getUser);

export default router;
