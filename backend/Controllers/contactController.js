const Contact = require("../Models/contactModel");
const axios = require("axios");

exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, message, privacy } = req.body;

    const acceptedPrivacy = Boolean(privacy);

    // Save to MongoDB
    const contact = new Contact({
      firstName,
      lastName,
      email,
      message,
      acceptedPrivacy,
    });

    await contact.save();

    // Send to Google Sheet
    await axios.post(
      "https://script.google.com/macros/s/AKfycbyG8jp0p_pVMpx5_M8UHYxM9kvgymceTN9FDxjptCMXB3DOCbAbaf7GQHz7QmQsn9o9/exec",
      {
        firstName,
        lastName,
        email,
        message,
        acceptedPrivacy,
      }
    );

    res.status(200).json({
  success: true,
  message: "Your message has been sent successfully.",
});

  } catch (err) {
    console.error("Error submitting contact form:", err.message);
    res.status(500).send("Server error");
  }
};
