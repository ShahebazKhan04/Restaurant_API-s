import { placeOrderServices, updateStatusServices } from "../services/orderServices.js";

export const placeOrderController = async (req, res) => {
  try {
    const user = req.user._id;
    const cart = req.body.cart
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "please provide cart",
      });
    }
    let totalAmount = 0;
    cart.map((i) => {
      totalAmount += i.price;
    });
    const order = await placeOrderServices({
      foods: cart,
      payment: totalAmount,
      buyer: user,
    });
    res.status(201).json({
      success: true,
      message: "order placed successfully",
      order: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while placing order",
      error: error.message,
    });
  }
};

export const updateStatusController = async (req, res) => {
  try {
    const id = req.params.id;
    const {status} = req.body;
    const order = await updateStatusServices(id, {status})
    if(!order) {
      return res.status(404).json({
        success : false,
        message : "Invalid order Id"
      })
    }
    res.status(200).json({
      success: true,
      message :"status updated successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating order status",
      error: error.message,
    });
  }
}