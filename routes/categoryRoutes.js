import express from 'express';
import { isAuth } from '../middlewares/authMiddleware.js';
import { createCategoryController, deleteCategoryController, getAllCategoryController, updateCategoryController } from '../controllers/categoryController.js';
const categoryRoute = express.Router();

categoryRoute.post('/create', isAuth, createCategoryController);
categoryRoute.put('/update/:id', isAuth, updateCategoryController);
categoryRoute.delete('/delete/:id', isAuth, deleteCategoryController);
categoryRoute.get('/all', getAllCategoryController)

export default categoryRoute;