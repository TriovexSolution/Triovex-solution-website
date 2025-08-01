// models/Vacancy.js
const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: String, required: true },
  skills: [String],
  // isRemote: { type: Boolean, default: false },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Vacancy", vacancySchema);
  