import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js";
import userRoute from "./routes/userRoutes.js";
import restaurantRoute from './routes/restaurantRoutes.js'
import categoryRoute from "./routes/categoryRoutes.js";
import foodRouter from "./routes/foodRoutes.js";
import orderRoute from "./routes/orderRoute.js";
const app = express();
dotenv.config();
connectDb();
app.use(express.json())

app.use('/user', userRoute)
app.use('/restaurant', restaurantRoute)
app.use('/category', categoryRoute)
app.use('/food', foodRouter)
app.use('/order', orderRoute)

app.listen(process.env.PORT, () => {
  console.log(`server started at port number ${process.env.PORT}`);
});
