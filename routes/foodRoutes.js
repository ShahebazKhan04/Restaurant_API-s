import express from "express";
const foodRouter = express.Router();
import { isAuth } from "../middlewares/authMiddleware.js";
import { createFoodController, getAllFoodController, getSingleFoodController, getFoodByRestaurantController, updateFoodController, deleteFoodController } from "../controllers/foodController.js";

foodRouter.post("/create", isAuth, createFoodController);;
foodRouter.get('/all', getAllFoodController);
foodRouter.get('/single/:id', getSingleFoodController);
foodRouter.get('/singleByRestaurant/:id', getFoodByRestaurantController);
foodRouter.put('/update/:id', isAuth, updateFoodController)
foodRouter.delete('/delete/:id', isAuth, deleteFoodController)

export default foodRouter;