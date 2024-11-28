import orderModel from "../models/orderModel.js";

export const placeOrderServices = async ({ foods, payment, buyer }) => {
  try {
    const order = await orderModel.create({
      foods,
      payment,
      buyer,
    });
    return order;
  } catch (error) {
    console.log("error while plecing order in services" + error.message);
  }
};

export const updateStatusServices = async (id, {status}) => {
  try {
    const order = await orderModel.findByIdAndUpdate(id, {status}, {new : true})
    return order
  } catch (error) {
    console.log("error while updatind order ststus in services" + error.message);
  }
}