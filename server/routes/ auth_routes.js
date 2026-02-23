import express from "express";
import {
  registerUser,
  loginUser,
//   logoutUser,
} from "../controllers/auth_controller.js";

// import { protect } from "../middlewares/auth_middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/logout", protect, logoutUser);

export default router;