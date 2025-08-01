const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  firstName: String,
  email: String,
  phone: String,
  currentPosition: String,
  experience: String,
  preferredLocation: String,
  resume: String,
  portfolio: String,
  description: String,
});

module.exports = mongoose.model("Career", careerSchema);
