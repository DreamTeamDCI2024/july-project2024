import express from "express";
import { signUp, login, getAllUsers } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/allusers", verifyToken, getAllUsers);
router.post("/signup", userSignup);
router.post("/login", login);

export default router;
