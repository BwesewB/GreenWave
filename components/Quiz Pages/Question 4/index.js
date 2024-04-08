import React from "react";
import Questions from "@/components/Questions";
import Answers4 from "@/components/Quiz Components/Radio Answers/Answers 4";
import ButtonAndBack from "@/components/ButtonAndBack";

export default function Question4() {
  return (
    <div>
      <Questions questionText="How often do you take flights for leisure or business travel?" />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)'
        buttonColorPrimary='var(--green)'


      />
      <Answers4/>
    </div>
  );
}