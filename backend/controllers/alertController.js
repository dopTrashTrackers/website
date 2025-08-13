const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables
const accountSid = process.env.AccountSid;
const authToken = process.env.AuthToken ; 
const client = require("twilio")(accountSid, authToken);

// Middleware to parse JSON
app.use(express.json());

const sendEmail = async (data) => {
  const { email, subject, html } = data;

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
    html: html,
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

// const sendSMS = async (data) => {
//   const { phone, body } = data;
//   try {
//     const message = await client.messages.create({
//       body: body,
//       messagingServiceSid: process.env.MessagingServiceSid,
//       to: phone
//     });
//     console.log("SMS sent successfully!", message.sid);
//     return true;
//   }
//   catch (error) {
//     console.error("Error occurred:", error.message);
//     return false;
//   }
// };

// Controller to handle email sending
exports.sendAlert = async (req, res) => {
  const { email, subject, body, html, phone } = req.body;

  if (!email || !subject || !body || !phone) {
    return res.status(400).send("Missing required fields: email, subject, phone or body.");
  }

  try {
    const emailSent = await sendEmail({ email, subject, html });
    if (!emailSent) {
      return res.status(500).send("Error sending email");
    }
  } catch (error) {
    console.error("Unexpected error:", error.message);
    return res.status(500).send("Internal server error");
  }

  // try {
  //   const smsSent = await sendSMS({ phone, body });
  //   if (!smsSent) {
  //     return res.status(500).send("Error sending SMS");
  //   }
  // } catch (error) {
  //   console.error("Unexpected error:", error.message);
  //   return res.status(500).send("Internal server error");
  // }
  return res.status(200).send("Alert sent successfully!");
};
