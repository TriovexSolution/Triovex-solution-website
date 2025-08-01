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

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure 'uploads' folder exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
app.use("/uploads", express.static(uploadPath));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Optional if views in root

// Routes
const careerRoutes = require("./Routers/careersRouter");
app.use("/api/career", careerRoutes);

const contactRoutes = require("./Routers/contactRouter");
app.use("/api/contact", contactRoutes);

const vacancyRoutes =  require("./Routers/vacancyRouter");
app.use("/api/vacancy",vacancyRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
