import React from "react";
import Questions from "@/components/Questions";
import { useState } from "react";
import ButtonAndBack from "@/components/ButtonAndBack";
import Answers1 from "@/components/Quiz Components/Radio Answers/Answers 1";

export default function Question1() {
  return (
    <div>
      <Questions questionText="What is your primary mode of transportation for commuting?" />
      <ButtonAndBack
        linking=''
        buttonText='CONTINUE'
        buttonColorBg='var(--white)'
        buttonColorPrimary='var(--green)'


      />
      <Answers1 />
    </div>

  );
}
