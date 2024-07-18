import express from "express";
import dotenv from "dotenv";
import db from "./db.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Iinitialized Database Configuration
db();
app.use(express.json());


// Root Entry
app.get("/", (req, res) => {
  res.send("Welcome");
});

// Listened to the PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
