import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = 8080;

// ✅ Secure CORS Configuration with multiple origins
const allowedOrigins = [
  process.env.DOMAIN_URL, // Your primary frontend URL (e.g., from .env)
  "https://happy-talent-frontend.vercel.app", // Example staging frontend
  "http://localhost:3000",       // Example local development frontend
  // Add more origins as needed
];

app.use(
  cors({
    origin: allowedOrigins, // ✅ Array of allowed origins
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});