import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Food title is required"],
  },
  description: {
    type: String,
    required: [true, "Food Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Food price is required"],
  },
  imageUrl: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0hqEoqH_Nwgv0ZA7QfnOnAOi2Zq7aqcJhg&s",
  },
  foodTags: {
    ttpe: String,
  },
  category: {
    type: String,
  },
  code: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  rating: {
    type: Number,
    default: 5,
    min: 1,
    max: 5,
  },
  ratingCount: {
    type: String,
  },
});

const foodModel = mongoose.model("Food", foodSchema);
export default foodModel;
