import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    status: {
      type: String,
      enum: ["Preparing", "Prepare", "On the way", "Delivered"],
      default: "Preparing",
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Orders", orderSchema);
export default orderModel;
