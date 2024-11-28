import userModel from "../models/userModel.js";

export const registerUserServices = async ({
  name,
  email,
  password,
  address,
  phone,
}) => {
  try {
    const isExist = userModel.findOne({ email });
    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Email is already exist",
      });
    }
    const user = await userModel.create({
      name,
      email,
      password,
      address,
      phone,
    });
    return user;
  } catch (error) {
    console.log("error while registering user in servics" + error.message);
  }
};

export const loginUserServices = async ({ email, password }) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    user.password = undefined;
    return user;
  } catch (error) {
    console.log("error while logging user in servics" + error.message);
  }
};

export const getProfileServices = async (id) => {
  try {
    const user = await userModel.findById(id); // {_id : 0} for hiding id
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    // this line hides password
    user.password = undefined;
    return user;
  } catch (error) {
    console.log("error while getting profile in servics" + error.message);
  }
};

export const updatePasswordServices = async (id, { newPassword }) => {
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const isMatch = await user.comparePassword(newPassword);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Old Password",
      });
    }
    user.password = newPassword;
    await user.save();
    return user;
  } catch (error) {
    console.log("error while updating password in servics" + error.message);
  }
};

export const resetPasswordServices = async ({answer, newPassword}) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (answer !== user.answer) {
      return res.status(404).json({
        success: false,
        message: "Answer is not correct",
      });
    } else {
      user.password = newPassword;
      await user.save();
    }
    return user;
  } catch (error) {
    console.log("error while reseting password in servics" + error.message);
  }
};

export const deleteUserServices = async (id) => {
  try {
    const deleteUser = await userModel.findByIdAndDelete(id);
    return deleteUser;
  } catch (error) {
    console.log("error while deleting user in servics" + error.message);
  }
}