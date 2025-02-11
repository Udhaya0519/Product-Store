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
        "https://mern-auth-app-pi.vercel.app",
        "https://mern-auth-app-udhaya-js-projects.vercel.app",
      ],
      credentials: true,
    })
  );

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://mern-auth-app-pi.vercel.app");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


app.use("/api/products", productRoutes)






