import React, { useState } from "react";

const ComplaintForm = () => {
  const firebaseURL = "https://sih2024-559e6-default-rtdb.firebaseio.com";

  const generateUniqueId = () => {
    // Generate a random 10-character alphanumeric string
    return Math.random().toString(36).substring(2, 12);
  };

  const [formData, setFormData] = useState({
    postOfficeName: "",
    postOfficeId: "",
    complaint: "",
    picture: null,
  });

  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, picture: file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { postOfficeName, postOfficeId, complaint, picture } = formData;

    if (!postOfficeName || !postOfficeId || !complaint || !picture) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const modelApiUrl = "https://your-model-api-endpoint.com/detect"; // Replace with ML API endpoint

    const formDataToSend = new FormData();
    formDataToSend.append("image", picture);

    try {
      setUploading(true);

      // Send image to ML model API
      const response = await fetch(modelApiUrl, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Error from ML model API");
      }

      const result = await response.json();

      // If garbage detected, generate an alert
      if (Object.keys(result).length > 0) {
        const alertId = generateUniqueId();
        const alertPath = `${firebaseURL}/postOffices/${postOfficeId}/alerts/pending/${alertId}.json`;

        await fetch(alertPath, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            complaint,
            status: "pending",
          }),
        });

        alert(`Alert generated successfully with ID: ${alertId}`);
      } else {
        alert("No garbage detected. Thank you for your submission.");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to process the form. Please try again.");
    } finally {
      setUploading(false);
      setFormData({
        postOfficeName: "",
        postOfficeId: "",
        complaint: "",
        picture: null,
      });
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>PostOffice Complaint Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* PostOffice Name */}
          <div style={styles.formGroup}>
            <label htmlFor="postOfficeName" style={styles.label}>
              PostOffice Name:
            </label>
            <input
              type="text"
              id="postOfficeName"
              name="postOfficeName"
              value={formData.postOfficeName}
              onChange={handleInputChange}
              placeholder="Enter PostOffice Name"
              style={styles.input}
              required
            />
          </div>

          {/* PostOffice ID */}
          <div style={styles.formGroup}>
            <label htmlFor="postOfficeId" style={styles.label}>
              PostOffice ID:
            </label>
            <input
              type="text"
              id="postOfficeId"
              name="postOfficeId"
              value={formData.postOfficeId}
              onChange={handleInputChange}
              placeholder="Enter PostOffice ID"
              style={styles.input}
              required
            />
          </div>

          {/* Complaint */}
          <div style={styles.formGroup}>
            <label htmlFor="complaint" style={styles.label}>
              Enter Your Complaint:
            </label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleInputChange}
              placeholder="Enter your complaint (50-75 characters)"
              maxLength="75"
              rows="4"
              style={styles.textarea}
              required
            />
          </div>

          {/* Upload Picture */}
          <div style={styles.formGroup}>
            <label htmlFor="picture" style={styles.label}>
              Upload Picture:
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              onChange={handleFileChange}
              style={styles.input}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton} disabled={uploading}>
            {uploading ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "30px",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    color: "#bd68f2",
    marginBottom: "20px",
    fontWeight: "650",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "8px",
    textAlign: "left",
    fontWeight: "600",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "5px",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginTop: "5px",
    width: "100%",
    boxSizing: "border-box",
    resize: "none",
  },
  submitButton: {
    padding: "12px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export  default ComplaintForm;
