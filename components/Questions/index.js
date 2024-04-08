import React from "react";
import styles from "./Questions.module.css";

export default function Questions({ questionText }) {
  return (
    <div className={styles.questionsContainer}>
      <p className={styles.questions}>Q: {questionText}</p>
    </div>
  );
}
