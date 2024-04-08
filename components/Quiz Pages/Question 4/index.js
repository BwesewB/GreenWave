import React from "react";
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";

export default function Question4({ handleQuizNext4Click }) {

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext4Click();
  };

  return (
    <div>
      <Questions questionText="How often do you take flights for leisure or business travel?" />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)'
        buttonColorPrimary='var(--green)'
        onClickHandlerSecondaryMainButton={handleContinueClick}
      />
    </div>
  );
}
