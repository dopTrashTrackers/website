import React, { useState, useEffect } from "react";
import Joyride from "react-joyride";

function NavigationGuide() {
  const [run, setRun] = useState(true);

  // Ensuring the Joyride starts after the components are rendered
  useEffect(() => {
    setRun(true); // You can programmatically start the tour once elements are ready
  }, []);

  const steps = [
    {
      target: ".nav-links", // Navigation links in the header
      content: "Use these links to navigate across the site.",
      styles: {
        options: {
          zIndex: 1000,
        },
      },
    },
    {
      target: ".card-slider", // CardSlider component
      content: "Here you can see highlights in the Card Slider.",
    },
    {
      target: ".office-list", // OfficeList component
      content: "Here is the list of offices. You can sort and filter the data.",
    },
    {
      target: ".garbage-detection-map", // GarbageDetectionMap component
      content: "This map shows real-time garbage detection areas.",
    },
    {
      target: ".faq-link", // FAQ link
      content: "Visit the FAQ section to find answers to common questions.",
    },
    {
      target: ".register-link", // Register link
      content: "Use this link to register as a new user.",
    },
    {
      target: ".add-admin-link", // Add_Admin link for super admins
      content: "If you’re a Super Admin, you can add a new admin here.",
    },
    {
      target: ".sort-button", // Sort button in the OfficeList component
      content: "Click here to sort the post offices by their compliance scores.",
    },
    {
      target: ".officelistcard", // Office list card
      content: "Click on the card to view the details of the Post office.",
    },
    {
      target: ".map", // Map component
      content: "Click on the map to view the details of the Post office on the map.",
    },
    {
      target: ".chat", // Chat component
      content: "Firstpass is the chat box for instant communication. Give it a try!",
    },
    {
      target: ".logout-button", // Logout button
      content: "Use this button to log out securely.",
    },
  ];

  // CSS for blinking cursor effect
  const cursorStyle = {
    animation: "blink 1s step-start 0s infinite",
  };

  return (
    <>
      <Joyride
        steps={steps}
        run={run}
        continuous={true}
        showSkipButton={true}
        styles={{
          options: {
            primaryColor: "#5e72e4",
            zIndex: 1000,
          },
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") {
            setRun(false);
          }
        }}
      />
      <div style={{ position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)", ...cursorStyle }}>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#5e72e4" }}>
          &#128073; Click here to navigate!
        </p>
      </div>
    </>
  );
}

export default NavigationGuide;
