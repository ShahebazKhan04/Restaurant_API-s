import express from "express";
import {
  getProfileController,
  loginUserController,
  registerUserController,
  resetPasswordController,
  updatePasswordController,
  updateUserController,
  deleteUserController
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddleware.js";
const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/login", loginUserController);
userRoute.get("/get-profile", isAuth, getProfileController);
userRoute.put("/update-profile", isAuth, updateUserController);
userRoute.put("/update-password", isAuth, updatePasswordController);
userRoute.put("/reset-password", isAuth, resetPasswordController);
userRoute.delete("/delete/:id", isAuth, deleteUserController);

export default userRoute;
