import React, { useEffect, useState } from "react";

import authService from "../firebaseMethods/auth";
import "./alertcard.css";
import { useParams } from "react-router-dom";

const Alertcard = () => {
  const [alertCount, setAlertCount] = useState(0);
  const {slug} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        authService.getData(`postOffices/${slug}/alert`).then((data) => {
          if (data) {
            setAlertCount(data);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="alert-card">
      <div className="alert-content">
        <h2>Total Alerts</h2>
        <p>{alertCount}</p>
      </div>
    </div>
  );
};

export default Alertcard;
