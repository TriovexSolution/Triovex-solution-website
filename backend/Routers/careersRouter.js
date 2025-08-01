const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const careerController = require("../Controllers/careersController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", (req, res) => {
  res.render("form");
});

router.post(
  "/submit",
  upload.fields([
    { name: "resume", maxCount: 1 },
    { name: "portfolio", maxCount: 1 },
  ]),
  careerController.submitForm
);

module.exports = router;
