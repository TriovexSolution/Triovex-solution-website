const ConsultantForm = require("../Models/consultantModel");
const axios = require("axios");

// Submit consultant form
const submitForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      preferredMethod,
      preferredDate,
      preferredTime,
      serviceInterest,
      projectDetails,
      agreement,
      otherService
    } = req.body;

    // Save to MongoDB
    const form = new ConsultantForm({
      fullName,
      email,
      phone,
      preferredMethod,
      preferredDate,
      preferredTime,
      serviceInterest,
      projectDetails,
      agreement,
      otherService
    });

    const savedForm = await form.save();

    // Send to Google Sheet
    await axios.post(
      "https://script.google.com/macros/s/AKfycbzWGE792GSmu4OhrNbpe4K9uHpixyfBNULo-8U_7fUz-mkbbvvCx05iRotxkskSFnX1/exec", // replace with your Google Apps Script URL
      {
        fullName,
        email,
        phone,
        preferredMethod,
        preferredDate,
        preferredTime,
        serviceInterest,
        projectDetails,
        agreement,
        otherService
      }
    );

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: savedForm
    });
  } catch (error) {
    console.error("Error submitting consultant form:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all submissions
const getForms = async (req, res) => {
  try {
    const forms = await ConsultantForm.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitForm, getForms };
