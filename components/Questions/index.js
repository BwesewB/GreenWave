import React from "react";
import styles from "./Questions.module.css";
import { useState } from "react";

export default function Questions({ 
  questionText, 
  tabbingQuestion,
}) {

  
  return (
    <>
      <div className={styles.questionsContainer} tabIndex="1">
        <p className={styles.questions}>Q: {questionText}</p>
      </div>
    </>
  );
}
