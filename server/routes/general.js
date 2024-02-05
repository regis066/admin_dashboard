import express from "express";
import {
  getUser,
  getAllUsers,
  getDashboardStats,
} from "../controllers/general.js";

const router = express.Router();


router.get("/users", getAllUsers)
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
