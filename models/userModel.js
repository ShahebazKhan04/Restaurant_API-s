import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is requied"],
    },
    email: {
      type: String,
      required: [true, "email is requied"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is requied"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone is requied"],
    },
    userType: {
      type: String,
      required: [true, "user type is required"],
      enum: ["client", "admin", "vendor", "driver"],
      default: "client",
    },
    profilePic: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s",
    },
    answer : {
      type : String,
      required : [true, "answer is required"]
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this.id }, process.env.SECRETE_KEY, {
    expiresIn: "7d",
  });
};

const userModel = await mongoose.model("Users", userSchema);
export default userModel;
