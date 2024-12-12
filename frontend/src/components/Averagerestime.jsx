import React, { useEffect, useState } from "react";
import authService from "../firebaseMethods/auth"; // Make sure you have authService set up
import "./alertcard.css";
import { useParams } from "react-router-dom";

const AvgResponseTimeCard = () => {
  const [avgResponseTime, setAvgResponseTime] = useState(0);
  const { slug } = useParams(); // Get the post office ID from the URL parameter

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching average response time data from the database using authService
        authService.getData(`postOffices/${slug}/avg_res_time`).then((data) => {
          if (data) {
            setAvgResponseTime(data); // Set the average response time value
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]); // Fetch new data if the `slug` changes

  return (
    <div className="alert-card">
      <div className="alert-content">
        <h2>Average Response Time</h2>
        <p>{avgResponseTime ? `${avgResponseTime} mins` : "Loading..."}</p> {/* Display response time */}
      </div>
    </div>
  );
};

export default AvgResponseTimeCard;
