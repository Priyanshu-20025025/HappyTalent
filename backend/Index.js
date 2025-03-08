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

// ✅ Secure CORS Configuration
app.use(
  cors({
    origin: process.env.DOMAIN_URL, // ✅ React frontend ka URL (No '*')
    credentials: true, // ✅ Allow cookies/tokens in requests
  })
);
app.use(cookieParser()); // ✅ Required to read cookies
// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // ✅ Handle form data

connectDB();
app.use("/api", router);


// Start Server
app.listen(PORT, () => {
  console.log("Server is listening on Port", PORT);
});
