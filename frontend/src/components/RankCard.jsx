import React, { useEffect, useState } from "react";
import authService from "../firebaseMethods/auth";
import "./alertcard.css"; // Using the same CSS file for styling
import { useParams } from "react-router-dom";

const RankCard = () => {
  const [rank, setRank] = useState(null);
  const { slug } = useParams(); // Get the post office ID from the URL parameter

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching rank data from the database using authService
        authService.getData(`postOffices/${slug}/rank`).then((data) => {
          if (data) {
            setRank(data); // Set the rank value
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
        <h2>Rank</h2>
        <p>{rank !== null ? `Rank: ${rank}` : "Loading..."}</p> {/* Display rank */}
      </div>
    </div>
  );
};

export default RankCard;


