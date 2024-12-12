import React, { useEffect, useState } from "react";
import authService from "../firebaseMethods/auth";
import "./alertcard.css"; // Using the same CSS file for styling
import { useParams } from "react-router-dom";

const PerformanceCard = () => {
  const [performance, setPerformance] = useState(0);
  const { slug } = useParams(); // Get the post office ID from the URL parameter

  useEffect(() => {
    const fetchData = async () => {
      try {
        authService.getData(`postOffices/${slug}/perf`).then((data) => {
          if (data) {
            if(data=='avg') data='Average';
            setPerformance(data); // Set the performance data
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
        <h2>Performance</h2>
        <p>{performance ? `${performance}` : "Loading..."}</p> {/* Display performance as percentage */}
      </div>
    </div>
  );
};

export default PerformanceCard;

