import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";

dotenv.config();

const app = express();

app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://ecommerce-fullstack-design-client.vercel.app",
      "https://ecommerce-fullstack-design-admin.vercel.app",
    ],
    credentials: true,
  })
);

// Preflight
app.options("*", cors({
  origin: [
    "https://ecommerce-fullstack-design-client.vercel.app",
    "https://ecommerce-fullstack-design-admin.vercel.app",
  ],
  credentials: true,
}));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/product", productRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

connectDB();

export default app;
