import restaurantModel from "../models/restaurntModel.js";
import {
  createRestaurantServices,
  deleteRestaurantsServices,
  getAllRestaurantsServices,
  getSingleRestaurantsServices,
} from "../services/restaurantServices.js";

export const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingConut,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      res.status(404).json({
        success: false,
        message: "please provide Title and Address",
      });
    }
    const restaurant = await createRestaurantServices({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingConut,
      code,
      coords,
    });
    res.status(201).json({
      success: true,
      message: "New Restaurant created successsfully",
      restaurant: restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while creating restaurant",
      error: error.message,
    });
  }
};

export const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await getAllRestaurantsServices();
    if (!restaurants) {
      return res.status(404).json({
        success: false,
        message: "No Restaurants available",
      });
    }
    res.status(200).json({
      success: true,
      message: "got all Restaurants",
      TotalRestaurants: restaurants.length,
      restaurants: restaurants,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting all restaurants",
      error: error.message,
    });
  }
};

export const getSingleRestaurantsController = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await getSingleRestaurantsServices(id);
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "No Restaurant available",
      });
    }
    res.status(200).json({
      success: true,
      message: "got all Restaurants",
      restaurant: restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting single restaurants",
      error: error.message,
    });
  }
};

export const deleteRestaurantController = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await deleteRestaurantsServices(id)
    if (!restaurant) {
      return res.status(404).json({
        success : false,
        message : "No Restaurant found"
      })
    }
    res.status(200).json({
      success : true,
      message : "Restaurant deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while deleting restaurants",
      error: error.message,
    });
  }
};
