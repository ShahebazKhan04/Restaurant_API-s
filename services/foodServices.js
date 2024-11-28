import foodModel from "../models/foodModel.js";

export const createFoodServices = async ({
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
}) => {
  try {
    const food = await foodModel.create({
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
    return food;
  } catch (error) {
    console.log("error while creating food in Services", error.message);
  }
};

export const getAllFoodServices = async () => {
  try {
    const foods = await foodModel.find();
    return foods;
  } catch (error) {
    console.log("error while getting all food in Services", error.message);
  }
};
export const getSingleFoodServices = async (id) => {
  try {
    const food = await foodModel.findById(id);
    return food;
  } catch (error) {
    console.log("error while getting single food in Services", error.message);
  }
};

export const getFoodByRestaurantServices = async (id) => {
  try {
    const food = await foodModel.find({ restaurant: id });
    return food;
  } catch (error) {
    console.log(
      "error while getting food by Restaurant in Services",
      error.message
    );
  }
};

export const updateFoodServices = async (
  id,
  {
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
  }
) => {
  try {
    const UpdatedFood = await foodModel.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );
    return UpdatedFood;
  } catch (error) {
    console.log("error while updating food in Services", error.message);
  }
};

export const deleteFoodServices = async (id) => {
  try {
    const deletedFood = await foodModel.findByIdAndDelete(id);
    return deletedFood;
  } catch (error) {
    console.log("error while deleting food in Services", error.message);
  }
};
