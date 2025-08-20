const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  preferredMethod: { type: String },
  preferredDate: { type: Date, required: true },
  preferredTime: { type: String, required: true },
  serviceInterest: { type: String, required: true },
  projectDetails: { type: String, required: true },
  agreement: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("ConsultantForm", consultantSchema);
