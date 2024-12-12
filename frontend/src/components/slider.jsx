// // CardSlider.jsx
// import React, { useState } from "react";
// import "./Slider.css";

// const CardSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slideLeft = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const slideRight = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="slider-container">
//       <button className="arrow left-arrow" onClick={slideLeft}>
//         &#8249;
//       </button>
//       <div className="slider-wrapper">
//         {images.map((image, index) => (
//           <div
//             className={`slide ${index === currentIndex ? "active" : ""}`}
//             key={index}
//             style={{ backgroundImage: `url(${image})` }}
//           ></div>
//         ))}
//       </div>
//       <button className="arrow right-arrow" onClick={slideRight}>
//         &#8250;
//       </button>
//     </div>
//   );
// };

// export default Slider;

// /* CardSlider.css */


// /* App.jsx */
// import React from "react";
// import CardSlider from "./CardSlider";

// const App = () => {
//   const images = [
//     "https://via.placeholder.com/800x300",
//     "https://via.placeholder.com/800x300/ff7f7f",
//     "https://via.placeholder.com/800x300/50b3a2",
//     "https://via.placeholder.com/800x300/d2a6ff",
//   ];

//   return (
//     <div>
//       <h1>Homepage</h1>
//       <CardSlider images={images} />
//     </div>
//   );
// };

// export default App;
