const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Fix Mongo warning (removed deprecated options)
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Use only ONE properly configured CORS
app.use(cors({
  origin: [
    "https://triovex.onrender.com", // live frontend
    "http://localhost:5173"         // local frontend
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure 'uploads' folder exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
app.use("/uploads", express.static(uploadPath));

// EJS setup (optional)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api/career", require("./Routers/careersRouter"));
app.use("/api/contact", require("./Routers/contactRouter"));
app.use("/api/vacancy", require("./Routers/vacancyRouter"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
