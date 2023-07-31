import React, { useState } from "react";
import { useSpring, useTransition, animated as a } from "react-spring";
import "./styles/MoralDescriptors.css";

const MoralDescriptors = ({
  moralDescriptors,
  handleNextCards,
  setMoralChoices,
  selectedCard,
}) => {
  const [currentDescriptorIndex, setCurrentDescriptorIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({
    yes: null,
    no: null,
  });

  const handleAnswerSelection = (selectedAnswer) => {
    if (selectedAnswer === "yes") {
      setSelectedAnswers({
        ...selectedAnswers,
        yes: moralDescriptors[currentDescriptorIndex],
      });
    } else if (selectedAnswer === "no") {
      setSelectedAnswers({
        ...selectedAnswers,
        no: moralDescriptors[currentDescriptorIndex],
      });
    }

    if (currentDescriptorIndex === moralDescriptors.length - 1) {
      handleNextCards();
    } else {
      setCurrentDescriptorIndex(currentDescriptorIndex + 1);
    }
  };

  const getQuestion = (descriptor) => {
    switch (descriptor) {
      case "Authority":
        return [
          "This technology ",
          <strong key="1">respects authority</strong>,
          " and aligns with societal norms",
        ];
      case "Fair":
        return [
          "This technology operates in a ",
          <strong key="2">fair</strong>,
          " and just way",
        ];
      case "Loyalty":
        return [
          "This technology promotes ",
          <strong key="3">loyalty</strong>,
          " and unity",
        ];
      case "Harm":
        return [
          "This technology ",
          <strong key="4">avoids causing harm</strong>,
          " or pain to individuals",
        ];
      case "Purity":
        return [
          "This technology is ",
          <strong key="5">pure</strong>,
          " and does not contaminate or corrupt",
        ];
      default:
        return "";
    }
  };

  const currentDescriptor = moralDescriptors[currentDescriptorIndex];
  const currentQuestion = getQuestion(currentDescriptor);

  // setup transition for questions
  const transitions = useTransition(currentDescriptorIndex, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    config: { tension: 210, friction: 20 },
  });

  // setup spring for button
  const [buttonProps, setButtonProps] = useSpring(() => ({
    scale: 1,
    config: { tension: 210, friction: 20 },
  }));

  const handleButtonClick = (selectedAnswer) => {
    setButtonProps({ scale: 1.1 });
    handleAnswerSelection(selectedAnswer);
    setMoralChoices((prevChoices) => ({
      ...prevChoices,
      [selectedCard.ID]: {
        ...(prevChoices[selectedCard.ID] || {}),
        [currentDescriptor]: selectedAnswer,
      },
    }));

    // Reset the button scale after a short period of time
    setTimeout(() => setButtonProps({ scale: 1 }), 150);
  };

  return (
    <div className="moral-descriptors">
      <h3
        style={{
          fontSize: "calc(.8rem + 1vw)",
          fontWeight: "normal",
          letterSpacing: "0.02em",
        }}
      >
        {currentQuestion}
      </h3>{" "}
      <div className="questions-container">
        {transitions((style, item) => (
          <a.div style={style} className="question-wrapper">
            <div className="answers-wrapper">
              <a.button
                style={buttonProps}
                onClick={() => handleButtonClick("yes")}
                className={
                  "answer-button"
                  // selectedAnswers.yes === moralDescriptors[item]
                  //   ? "answer-selected"
                  //   : ""
                }
              >
                Yes
              </a.button>
              <a.button
                style={buttonProps}
                onClick={() => handleButtonClick("no")}
                className={
                  "answer-button"
                  // selectedAnswers.yes === moralDescriptors[item]
                  //   ? "answer-selected"
                  //   : ""
                }
              >
                No
              </a.button>
              <button
                className="unsure-button"
                onClick={() => handleAnswerSelection("unsure")}
              >
                Unsure
              </button>
            </div>
          </a.div>
        ))}
      </div>
    </div>
  );
};

export default MoralDescriptors;
