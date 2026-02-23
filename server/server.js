import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import auth_routes from './routes/ auth_routes.js';
import todo_routes from "./routes/ todo_routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

// Routes
app.use("/api/auth", auth_routes);
app.use("/api/todos", todo_routes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    const PORT = process.env.PORT;
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err.message);
  });