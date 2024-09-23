// routes/contact.js
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS  // Your email password
        }
    });

    // Set up email data
    let mailOptions = {
        from: email, // sender address (form submitter)
        to: process.env.EMAIL_USER, // Your email address (receiver)
        subject: 'New Contact Form Submission', // Subject line
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        ` // plain text body
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to submit the form.' });
    }
});

module.exports = router;
