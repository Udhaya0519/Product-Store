import express from "express"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv"
// import cors from 'cors'


dotenv.config()


const app = express();

connectDB();

app.use(express.json())



app.use("/api/products", productRoutes)


export default app;






