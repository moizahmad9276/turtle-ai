import dotenv from "dotenv";
dotenv.config()

import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import translationsRoute from "./routes/translations.route";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/translations", translationsRoute);

// Health check
app.get("/health", (_req, res) =>
  res.json({ status: "ok", service: "TurtleAI API" }),
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🐢 TurtleAI API running on http://localhost:${PORT}`);
});
