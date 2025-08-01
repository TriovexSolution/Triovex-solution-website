const express = require("express");
const router = express.Router();
const contactController = require("../Controllers/contactController");

router.get("/show", (req, res) => {
  res.render("contactForm");
});

router.post("/submit", contactController.submitContactForm);

module.exports = router;
