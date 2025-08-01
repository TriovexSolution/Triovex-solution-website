// routes/vacancyRoutes.js
const express = require("express");
const router = express.Router();
const {
  createVacancy,
  getAllVacancies,
  deleteVacancy,
} = require("../Controllers/vacancyController");

router.post("/create", createVacancy);
router.get("/all", getAllVacancies);
router.delete("/delete/:id", deleteVacancy);

module.exports = router;
