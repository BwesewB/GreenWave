import React from "react";
import Questions from "@/components/Questions";
import ButtonAndBack from "@/components/ButtonAndBack";
import YesNoButton from "@/components/Quiz Components/YesNoButton";

export default function Question3({ handleQuizNext3Click }) {

  const handleContinueClick = () => {
    console.log("Continue button clicked");
    handleQuizNext3Click();
  };

  const handleYes = () => {
    console.log("Yes button clicked");
    // You can add your logic here for when Yes is clicked
  };

  const handleNo = () => {
    console.log("No button clicked");
    // You can add your logic here for when No is clicked
  };

  return (
    <div>
      <Questions questionText="Do you compost organic waste?" />
      <YesNoButton onYes={handleYes} onNo={handleNo} />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)'
        buttonColorPrimary='var(--green)'
        onClickHandlerSecondaryMainButton={handleContinueClick}
        nextQuestionHandler={handleQuizNext3Click}


      />
    </div>
  );
}
