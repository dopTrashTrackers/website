const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

// Middleware to parse JSON
app.use(express.json());

const sendEmail = async (data) => {
  const { email, subject, body } = data;

  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SenderMail, 
      pass: process.env.EmailPassword,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.SenderMail,
    to: email,
    subject: subject,
    text: body,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!", info.response);
    return true;
  } catch (error) {
    console.error("Error occurred:", error.message);
    return false;
  }
};

// Controller to handle email sending
exports.sendAlert = async (req, res) => {
  const { email, subject, body } = req.body;

  if (!email || !subject || !body) {
    return res.status(400).send("Missing required fields: email, subject, or body.");
  }

  try {
    const emailSent = await sendEmail({ email, subject, body });
    if (emailSent) {
      return res.status(200).send("Email sent successfully");
    } else {
      return res.status(500).send("Error sending email");
    }
  } catch (error) {
    console.error("Unexpected error:", error.message);
    return res.status(500).send("Internal server error");
  }
};
