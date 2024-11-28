import {
  createFoodServices,
  getAllFoodServices,
  getFoodByRestaurantServices,
  getSingleFoodServices,
  updateFoodServices,
  deleteFoodServices,
} from "../services/foodServices.js";

export const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    } = req.body;
    if (!title || !description || !price || !restaurant) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }
    const food = await createFoodServices({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    });
    res.status(201).json({
      success: true,
      message: "Food ceated successfully",
      food: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while creating food",
      error: error.message,
    });
  }
};

export const getAllFoodController = async (req, res) => {
  try {
    const foods = await getAllFoodServices();
    if (!foods) {
      return res.status(404).json({
        success: false,
        message: "No foods found",
      });
    }
    res.status(200).json({
      success: true,
      totalFoods: foods.length,
      foods: foods,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting all foods",
      error: error.message,
    });
  }
};
export const getSingleFoodController = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await getSingleFoodServices(id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "No food found with this id",
      });
    }
    res.status(200).json({
      success: true,
      foods: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting single foods",
      error: error.message,
    });
  }
};

export const getFoodByRestaurantController = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await getFoodByRestaurantServices(id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "No food found with this Restaurant id",
      });
    }
    res.status(200).json({
      success: true,
      foods: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting single foods",
      error: error.message,
    });
  }
};

export const updateFoodController = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    } = req.body;
    const food = await updateFoodServices(id, {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvailable,
      restaurant,
      rating,
    });
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Invalid Id for updating food",
      });
    }
    res.status(201).json({
      success: true,
      message: "Food updated successfully",
      UpdatedFood: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating foods",
      error: error.message,
    });
  }
};

export const deleteFoodController = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await deleteFoodServices(id);
    if (!food) {
      return res.status(404).json({
        success: false,
        message: "No food found with this Restaura",
      });
    }
    res.status(200).json({
      success: true,
      message: "Food deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid Id for deleting food",
      error: error.message,
    });
  }
};
