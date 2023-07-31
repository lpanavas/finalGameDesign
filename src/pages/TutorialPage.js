import React, { useState } from "react";
import "../components/styles/TutorialPage.css";
import image1 from "../images/1.svg";
import image2 from "../images/2.svg";
import image3 from "../images/3.svg";
import image4 from "../images/4.svg";
import image5 from "../images/5.svg";
import image6 from "../images/6.svg";
import image7 from "../images/7.svg";
import image8 from "../images/8.svg";

function TutorialPage({ onEndTutorial }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]; // Replace with your actual image paths.
  const texts = ["Text 1", "Text 2", "Text 3"]; // These would be the tutorial texts corresponding to each image.

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      onEndTutorial();
    }
  };

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="tutorialBackgroud">
      <div className="tutorialHeader">
        <h1>Tutorial</h1>
      </div>

      <div className="tutorialImageContainer">
        <img
          className="tutorialImage"
          src={images[currentImageIndex]}
          alt="tutorial step"
        />
      </div>
      <div className="tutorialButtons">
        <div>
          {currentImageIndex > 0 && (
            <button className="previousTutorialButton" onClick={handlePrevious}>
              Previous
            </button>
          )}
        </div>
        <div>
          {currentImageIndex === images.length - 1 ? (
            <button className="startTutorialButton" onClick={onEndTutorial}>
              Start Game
            </button>
          ) : (
            <button className="nextTutorialButton" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TutorialPage;
