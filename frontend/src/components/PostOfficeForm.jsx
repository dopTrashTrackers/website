import React, { useState } from "react";

const PostOfficeForm = () => {
  const firebaseURL = "https://sih2024-559e6-default-rtdb.firebaseio.com";
  const postOfficeIDs = [
    "-O6AlggG6a7efBfMAB3z",
    "-O6AmQckL3MJ36SREqXE",
    "-O6An786QIBmDsJ3QEAP",
    "-O6Ao4tTkT4kyVzE1DP0",
    "-O6AojnmE__MgHoW-jTW",
    "-O6ApFneoDjs91SmDVMP",
    "-O6ApSE9BRJZXBcC0ehw",
    "-O6Apd0RABobdrWo8joQ",
    "-O6Apq_C1CJ69QGMQG1h",
    "-O6Aq-sPBIJniGY1Elej",
    "-O6BFhj6STc4KsNkSgBC",
    "-O6BZj9AKWj3skiLAUwk",
    "-O6B_N_5cUpJb1z5Vd7D",
    "-O9l-zRIiEM-9aVak3WZ",
  ];

  const [formData, setFormData] = useState({
    postOfficeName: "",
    postOfficeId: "",
    alertId: "",
    status: "unresolved",
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

    const { postOfficeId, alertId, picture } = formData;

    if (!postOfficeIDs.includes(postOfficeId)) {
      alert("Invalid Post Office ID.");
      return;
    }

    if (!alertId || !picture) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const modelApiUrl = "https://modelapi-pniz.onrender.com/detect-trash/"; // Replace with ML API endpoint

    const formDataToSend = new FormData();
    formDataToSend.append("file", picture);
    formDataToSend.append("place", "Manual");
    formDataToSend.append("postoffice_id", postOfficeId);   
    formDataToSend.append("time", new Date().toISOString().replace(/\.\d{3}Z$/, "Z"));

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

      // Check detection result
      const status = Object.keys(result).length > 0 ? "rejected" : "resolved";

      // Save result to Firebase Realtime Database
      const alertPath = `${firebaseURL}/postOffices/${postOfficeId}/alerts/${alertId}.json`;
      await fetch(alertPath, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      alert(`Thanks for submitting! Status updated to ${status}!`);
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to process the form. Please try again.");
    } finally {
      setUploading(false);
      setFormData({
        postOfficeName: "",
        postOfficeId: "",
        alertId: "",
        status: "unresolved",
        picture: null,
      });
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}>PostOffice Cleanup Verification Form</h2>
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

          {/* Alert ID */}
          <div style={styles.formGroup}>
            <label htmlFor="alertId" style={styles.label}>
              Alert ID:
            </label>
            <input
              type="text"
              id="alertId"
              name="alertId"
              value={formData.alertId}
              onChange={handleInputChange}
              placeholder="Enter Alert ID"
              style={styles.input}
              required
            />
          </div>

          {/* Status Dropdown */}
          <div style={styles.formGroup}>
            <label htmlFor="status" style={styles.label}>
              Status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="resolved">Resolved</option>
              <option value="unresolved">Unresolved</option>
            </select>
          </div>

          {/* Upload Picture */}
          <div style={styles.formGroup}>
            <label htmlFor="picture" style={styles.label}>
              Upload Picture to Verify:
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
    backgroundColor: "#f7f7f7", // Light grey background for the page
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Roboto', sans-serif", // Using a Google Font
  },
  formContainer: {
    backgroundColor: "#fff", // White background for the form
    padding: "30px",
    width: "100%",
    maxWidth: "600px",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    color: "#bd68f2", // Darker color for header
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
  submitButton: {
    padding: "12px",
    backgroundColor: "#4CAF50", // Green submit button
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#45a049", // Darker green on hover
  },
};

export default PostOfficeForm;