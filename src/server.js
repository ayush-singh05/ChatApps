import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.route.js";
import { connceDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is runnig ${PORT}`);
  connceDB();
});
