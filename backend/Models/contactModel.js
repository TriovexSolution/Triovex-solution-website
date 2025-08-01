const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
  acceptedPrivacy: Boolean,
});

module.exports = mongoose.model("Contact", contactSchema);
