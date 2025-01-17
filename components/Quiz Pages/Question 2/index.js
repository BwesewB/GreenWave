import React from "react";
import Questions from "@/components/Questions";
import SliderComponent from "@/components/Quiz Components/Slider";
import ButtonAndBack from "@/components/ButtonAndBack";

export default function Question2({ handleQuizNext2Click, handleUserAnswer }) {
  const handleSliderChange = (sliderValue) => {
    const kilometers = Math.round((sliderValue / 100) * 800);
    const score = 3.5 - (3.5 * kilometers) / 800;
    console.log("Selected kilometers:", kilometers);
    console.log("Score for question 2:", score);
    
    // Pass the calculated score as the user's answer
    handleUserAnswer(2, score.toFixed(1));
  };



  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext2Click();
  };

  return (
    <div>
      <Questions questionText="How many kilometers do you typically drive per week?" />
      <SliderComponent onChange={handleSliderChange} />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        onClickHandlerSecondaryMainButton={handleContinueClick}
      />
    </div>
  );
}
