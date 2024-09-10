import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// Example function to simulate your ML model
const runMLModel = () => {
  // Simulating model output (e.g., this could be replaced with your model's result)
  return Math.random() > 0.5; // Simulating true/false output
};

const AlertSystem = () => {
  const [modelOutput, setModelOutput] = useState(null); // To store model's output
  const [alertSent, setAlertSent] = useState(false);
  const form = useRef(); // Using a ref for the form

  // Function to handle sending alert
  const sendAlert = () => {
    const timestamp = new Date().toISOString();
    console.log(`Alert sent at: ${timestamp}`);
    setAlertSent(true);
    sendEmail(); // Call sendEmail here
  };

  const sendEmail = () => {
    // Prevent form submission behavior if form submission is involved
    emailjs
      .sendForm(import.meta.env.VITE_EServiceID, import.meta.env.VITE_ETemplateId, form.current, {
        publicKey: import.meta.env.VITE_EPublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Alert sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="invisible h-1">
        <form ref={form} onSubmit={
          (e) => {
            e.preventDefault();
            sendEmail();
          }
          }>
          <label>Name</label>
          {/* Using defaultValue instead of value for static values */}
          <input type="text" name="user_name" defaultValue="ram" />

          <label>Email</label>
          <input type="email" name="user_email" defaultValue={import.meta.env.VITE_AlertMail} />

          <label>Message</label>
          <textarea name="message" defaultValue="test" />

          <input type="submit" value="Send" />
        </form>
      </div>

      <div className='-ml-16'>
        <button
          onClick={()=>sendEmail()}  
          className="bg-green-200 text-black w-40 p-2 rounded-lg ml-[625px] mb-12 hover:bg-green-700"
        >
          Generate Alert !!
        </button>
      </div>
    </>
  );
};

export default AlertSystem;
