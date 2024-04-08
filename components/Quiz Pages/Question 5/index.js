import React from "react";
import Questions from "@/components/Questions";
import ButtonColoured from "@/components/mainButton";
import styles from '@/components/MainPageComponents/EnterName/EnterName.module.css'

export default function Question5() {
  return (
    <div>
      <Questions questionText="Do you actively try to conserve energy at home (turning off lights, unplugging devices, etc.)?" />
      <div className={styles.EnterNamePageButton}>
        {/* This is just from the enterName to copy the css from there */}
        <ButtonColoured
          href="/quizComplete"
          text="FINISH"
        />
      </div>

    </div>
  );
}
