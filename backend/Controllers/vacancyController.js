// controllers/vacancyController.js
const Vacancy = require("../Models/vacancyModel");

// Create
exports.createVacancy = async (req, res) => {
  try {
    const vacancy = new Vacancy(req.body);
    await vacancy.save();
    res.status(201).json({ success: true, vacancy });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get All
exports.getAllVacancies = async (req, res) => {
  try {
    const vacancies = await Vacancy.find().sort({ postedAt: -1 });
    res.status(200).json({ success: true, vacancies });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete
exports.deleteVacancy = async (req, res) => {
  try {
    await Vacancy.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Vacancy deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
