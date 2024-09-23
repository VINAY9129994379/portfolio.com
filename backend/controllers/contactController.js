// controllers/contactController.js
const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  const { name, email,phone, message } = req.body;

  try {
    const contact = new Contact({ name, email,phone, message });
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Failed to submit the form.' });
  }
};
