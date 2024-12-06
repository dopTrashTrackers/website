import React, { useState, useRef } from 'react';
import {nodemailer} from 'nodemailer';

const AlertSystem = () => {

  const sendEmail = () => {
    const email = import.meta.env.VITE_AlertMail;
    const subject = 'Trash Detected';
    const body = 'Your office has not cleaned trash for last 1hr. Please abide by the cleanliness norms.';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
      user: import.meta.env.VITE_SenderMail,
      pass: import.meta.env.VITE_EmailPassword
      }
    });

    const mailOptions = {
      from: 'yourEmail@gmail.com',
      to: email,
      subject: subject,
      text: body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
      return console.error('Failed to send email. Error:', error);
      }
      console.log('Email sent successfully!', info.response);
    });
  };

  return (
    <>
      <div className='flex justify-center'>
        <button
          onClick={()=>sendEmail()}  
          className="bg-green-200 text-black w-40 p-2 rounded-lg mb-12 hover:bg-green-700"
        >
          Generate Alert !!
        </button>
      </div>
    </>
  );
};

export default AlertSystem;
