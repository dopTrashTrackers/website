import React from "react";
import "./Table.css"; // Assume we have a CSS file for custom styling

const initiativesData = [
  {
    serial: 1,
    initiative: "Plantation Drive",
    timestamp: "2024-12-11 10:30 AM",
    geotag: "23.2599° N, 77.4126° E Bhagalpur sadar",
    image: "https://www.gnms.co.in/wp-content/uploads/2015/09/image_64834412.jpg",
  },
  {
    serial: 2,
    initiative: "Adopting Healthy Food Systems",
    timestamp: "2024-12-09 03:45 PM",
    geotag: "28.7041° N, 77.1025° E Kahalgaon",
    image: "https://domf5oio6qrcr.cloudfront.net/medialibrary/9545/conversions/healthy-superfoods-thumb.jpg",
  },
  {
    serial: 3,
    initiative: "LED Bulbs Installed",
    timestamp: "2024-12-08 11:00 AM",
    geotag: "19.0760° N, 72.8777° E Adampur B.O",
    image: "https://content.jdmagicbox.com/comp/thrissur/b5/9999px487.x487.171014050030.c2b5/catalogue/led-world-thrissur-i70ljkurtw.jpg",
  },
  {
    serial: 4,
    initiative: "Water Conservation Practices",
    timestamp: "2024-12-07 01:15 PM",
    geotag: "13.0827° N, 80.2707° E Abhiabazar B.O",
    image: "https://indiabookofrecords.in/wp-content/uploads/2022/07/Largest-water-conservation-awareness-campaign.jpg",
  },
  {
    serial: 5,
    initiative: "Using Cloth Bags",
    timestamp: "2024-12-06 09:50 AM",
    geotag: "22.5726° N, 88.3639° E  Alinagar Rajpur B.O",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuPUQ8hspyl3NzEypYBEpJZ342hQgx-yelQ&s",
  },
  {
    serial: 6,
    initiative: "Promoting Bamboo Toothbrushes",
    timestamp: "2024-12-05 04:30 PM",
    geotag: "26.9124° N, 75.7873° E Agarpur B.O",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEu6HL0nKA5e-JsWi8SkfqZEsfRCyy_70Cg&s",
  },
];

const Table = () => {
  return (
    <div className="container">
      <h1 className="title">Community Initiatives</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Community Initiative</th>
            <th>Timestamp</th>
            <th>Geotag</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {initiativesData.map((initiative, index) => (
            <tr
              key={initiative.serial}
              className={index % 2 === 0 ? "row-east" : "row-west"}
            >
              <td>{initiative.serial}</td>
              <td>{initiative.initiative}</td>
              <td>{initiative.timestamp}</td>
              <td>{initiative.geotag}</td>
              <td>
                <img
                  src={initiative.image}
                  alt={initiative.initiative}
                  className="initiative-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;