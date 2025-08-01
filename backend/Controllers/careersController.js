const Career = require("../Models/careersModel");
const axios = require("axios");

exports.submitForm = async (req, res) => {

  try {
    const {
      firstName,
      email,
      phone,
      currentPosition,
      experience,
      preferredLocation,
      description,
    } = req.body;

    const resumeFile = req.files?.resume?.[0]?.filename || "";
    const portfolioFile = req.files?.portfolio?.[0]?.filename || "";

    const baseURL = "http://localhost:5000/uploads"; // ⬅️ Replace with your actual domain

    const resume = resumeFile ? `${baseURL}/${resumeFile}` : "";
    const portfolio = portfolioFile ? `${baseURL}/${portfolioFile}` : "";

    // Save to MongoDB
    const career = new Career({
      firstName,
      email,
      phone,
      currentPosition,
      experience,
      preferredLocation,
      resume: resumeFile, // Save only filename in DB
      portfolio: portfolioFile, // Save only filename in DB
      description,
    });

    await career.save();

    // Send to Google Sheet
    await axios.post(
      "https://script.google.com/macros/s/AKfycbxwdxvB-DwQ80oS5ldGIyRBCgzJBZwx6Ivud708nEmvCtgOv-NKYWc7kHJMPknhOKXE/exec",
      {
        firstName,
        email,
        phone,
        currentPosition,
        experience,
        preferredLocation,
        resume, // Full public URL sent to sheet
        portfolio, // Full public URL sent to sheet
        description,
      }
    );

    res.send("Application submitted successfully.");
  } catch (error) {
    console.error("Error submitting form:", error.message);
    res.status(500).send("Server Error");
  }
};
