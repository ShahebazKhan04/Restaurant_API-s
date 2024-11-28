import express from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { createRestaurantController, deleteRestaurantController, getAllRestaurantsController, getSingleRestaurantsController } from '../controllers/restaurantController.js';

const restaurantRoute = express.Router();

restaurantRoute.post('/create', isAuth, createRestaurantController)
restaurantRoute.get('/all-resaturants', getAllRestaurantsController)
restaurantRoute.get('/single-resaturants/:id', getSingleRestaurantsController)
restaurantRoute.delete('/delete/:id', isAuth, deleteRestaurantController)

export default restaurantRoute