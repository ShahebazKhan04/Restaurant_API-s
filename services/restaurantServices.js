import restaurantModel from "../models/restaurntModel.js";

export const createRestaurantServices = async ({
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
}) => {
  try {
    const restaurant = await restaurantModel.create({
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
    return restaurant;
  } catch (error) {
    console.log("error while creating restaurant in services", error.message);
  }
};

export const getAllRestaurantsServices = async () => {
  try {
    const restaurants = await restaurantModel.find();
    return restaurants;
  } catch (error) {
    console.log(
      "error while getting all restaurant in services",
      error.message
    );
  }
};
export const getSingleRestaurantsServices = async (id) => {
  try {
    const restaurant = await restaurantModel.findById(id);
    return restaurant;
  } catch (error) {
    console.log(
      "error while getting single restaurant in services",
      error.message
    );
  }
};

export const deleteRestaurantsServices = async (id) => {
  try {
    const restaurant = await restaurantModel.findByIdAndDelete(id);
    return restaurant;
  } catch (error) {
    console.log(
      "error while deleting restaurant in services",
      error.message
    );
  }
};
