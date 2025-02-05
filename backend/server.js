import express from "express"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import dotenv from "dotenv"
import path from "path"


dotenv.config()


const app = express();
const PORT = 4000
const __dirname = path.resolve()

app.use(express.json())


app.use("/api/products", productRoutes)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist"))
    })
}


app.listen(PORT,() => {

    connectDB();

    console.log("server is running on port",PORT);
    
})


