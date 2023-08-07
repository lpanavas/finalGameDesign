import React, { useEffect, useState } from "react";
import axios from "axios";
import Rankings from "../components/Rankings";
import "../components/styles/ResultsPage.css";

const ResultsPage = ({
  onRestartGame,
  outputData,
  selectedCards,
  hasSeenTutorial,
}) => {
  return (
    <div className="results-page">
      <Rankings
        outputData={outputData}
        selectedCards={selectedCards}
        onRestartGame={onRestartGame}
        hasSeenTutorial={hasSeenTutorial}
      />
      {/* <button className="restart-game" onClick={onRestartGame}>
        Restart Game
      </button> */}
    </div>
  );
};

export default ResultsPage;
