// CardSlider.jsx
import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={slideLeft}>
        &#8249;
      </button>
      <div className="slider-wrapper">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={slideRight}>
        &#8250;
      </button>
    </div>
  );
};

export default Slider;