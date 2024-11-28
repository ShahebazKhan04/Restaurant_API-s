import express from "express";
import { isAdmin, isAuth } from "../middlewares/authMiddleware.js";
import {
  placeOrderController,
  updateStatusController,
} from "../controllers/orderController.js";
const orderRoute = express.Router();

orderRoute.post("/place-order", isAuth, placeOrderController);
orderRoute.put("/update-status/:id", isAuth, isAdmin, updateStatusController);

export default orderRoute;
