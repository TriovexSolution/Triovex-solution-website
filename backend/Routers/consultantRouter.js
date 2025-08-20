const express = require("express");
const router = express.Router();
const { submitForm, getForms } = require("../Controllers/consultantController");

router.post("/submit", submitForm);
router.get("/all", getForms);

module.exports = router;
