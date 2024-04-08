import React from "react";
import Questions from "@/components/Questions";
import Answers5 from "@/components/Quiz Components/Radio Answers/Answers 5";

export default function Question5() {
  const customRadioStyle = {
    marginTop: '427px',
  };

  return (
    <div>
      <Questions questionText="Do you actively try to conserve energy at home (turning off lights, unplugging devices, etc.)?" />
      <Answers5 customRadioStyle={customRadioStyle} />
    </div>
  );
}
