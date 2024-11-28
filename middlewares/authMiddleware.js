import jwt from "jsonwebtoken";
import userModel from '../models/userModel.js'

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "token not found",
      });
    }
    const decodeData = await jwt.verify(token, process.env.SECRETE_KEY);
    req.user = decodeData;
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in Auth Middleware",
      error: error.message,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id)
    if (user.userType !== "admin") {
      return res.status(401).json({
        success: false,
        message: "only Admin access",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "error in Admin Middleware",
      error: error.message,
    });
  }
};

// import jwt from "jsonwebtoken";

// export const isAuth = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"].split(" ")[1];
//     jwt.verify(token, process.env.SECRETE_KEY, (error, decode) => {
//       if (error) {
//         return res.status(404).json({
//           success: false,
//           message: "Un-Authorized User",
//         });
//       } else {
//         req.user = decode._id;
//         next()
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "error in Auth Middleware",
//       error: error.message,
//     });
//   }
// };
