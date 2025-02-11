import express from "express"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv"
import cors from 'cors'


dotenv.config()


const app = express();

connectDB();

app.use(express.json())

app.use(
    cors({
      origin: [
        "https://product-store-app-tan.vercel.app",
        "https://product-store-app-udhaya-js-projects.vercel.app",
      ],
      credentials: true,
    })
  );



app.use("/api/products", productRoutes)


export default app;






