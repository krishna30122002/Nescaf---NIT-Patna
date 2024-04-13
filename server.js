import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import colors from "colors";
import connectDatabase from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome To Nescafe NIT Patna</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log(
        `Server is running on ${process.env.DEV} on port ${PORT}`.bgCyan.white
    );
});