import React, { useState, useEffect, useRef } from 'react';
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
  const sendAlert = (timestamp) => {
    console.log(`Alert sent at: ${timestamp}`);
    setAlertSent(true);
    sendEmail();
  };

  const sendEmail = (e) => {
    if(e){
    e.preventDefault(); // Prevent form submission behavior
    }

    emailjs
      .sendForm('service_9qvtp58', 'template_wqpnjf4', form.current, {
        publicKey: 'SDDNbHMTZaEETfVR6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    // Simulate model running and setting its output
    const output = runMLModel();
    setModelOutput(output);

    if (output === true) {
      const timestamp = new Date().toLocaleString(); // Get the current time
      sendAlert(timestamp); // Trigger alert with the current time
    }
  }, [modelOutput]); // Re-run the effect when `modelOutput` changes

  return (
    <div className="hidden">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        {/* Using defaultValue instead of value for static values */}
        <input type="text" name="user_name" defaultValue="ram" />

        <label>Email</label>
        <input type="email" name="user_email" defaultValue="sihbgp2024@gmail.com" />

        <label>Message</label>
        <textarea name="message" defaultValue="test" />

        <input type="submit" value="Send" />
      </form>

      {modelOutput === true && alertSent && (
        alert("Alert sent successfully!")
      )}
    </div>
  );
};

export default AlertSystem;

