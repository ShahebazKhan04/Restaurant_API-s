import userModel from "../models/userModel.js";
import {
  deleteUserServices,
  getProfileServices,
  loginUserServices,
  registerUserServices,
  resetPasswordServices,
  updatePasswordServices,
} from "../services/userServices.js";

export const registerUserController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;
    if (!name || !email || !password || !address || !phone) {
      return res.status(404).json({
        success: false,
        message: "all fields are required",
      });
    }
    const user = await registerUserServices({
      name,
      email,
      password,
      address,
      phone,
    });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while registering user",
      error: error.message,
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "email and password is required",
      });
    }
    const user = await loginUserServices({ email, password });
    const token = user.generateToken();
    res.status(200).json({
      success: true,
      message: "user logged successfully",
      user: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while logging user",
      error: error.message,
    });
  }
};

export const getProfileController = async (req, res) => {
  try {
    const id = req.user._id;
    const user = await getProfileServices(id);
    res.status(200).json({
      success: true,
      message: "user got",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while getting profile",
      error: error.message,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    if (!name || !address || !phone) {
      return res.status(404).json({
        success: false,
        message: "all fields are required",
      });
    }
    const user = await userModel.findByIdAndUpdate(
      req.user._id,
      { name, address, phone },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    res.status(201).json({
      success: true,
      message: "profile updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating user",
      error: error.message,
    });
  }
};

export const updatePasswordController = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(404).json({
        success: false,
        message: "please enter Old Password and New Password",
      });
    }
    const id = req.user._id;
    await updatePasswordServices(id, {
      oldPassword,
      newPassword,
    });
    res.status(201).json({
      success: true,
      message: "password updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating password",
      error: error.message,
    });
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      return res.status(404).json({
        success: false,
        message: "please provide Answer and Password",
      });
    }
    await resetPasswordServices({ answer, newPassword });
    res.status(200).json({
      success: true,
      message: "password has reset successfully ",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating password",
      error: error.message,
    });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id
    await deleteUserServices(id)
    res.status(200).json({
      success : true,
      message : "user deleted successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error while updating password",
      error: error.message,
    });
  }
};
