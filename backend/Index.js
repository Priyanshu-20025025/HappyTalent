import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Secure CORS Configuration
const allowedOrigins = [
  process.env.DOMAIN_URL,  // Your primary frontend URL from .env
  "https://happy-talent-foundation.vercel.app", // ✅ Added
  "https://happy-talent-frontend.vercel.app",   // Staging frontend
  "http://localhost:3000",  // Local development
];

app.use(
  
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Database Connection
connectDB();

// ✅ Routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Server Start
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
