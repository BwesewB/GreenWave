// pages/index.js

import React, { useState } from 'react';
import styles from "@/styles/Quiz.module.css"
import ProgressF from '@/components/Quiz Components/Progress F';
import Question1 from '@/components/Quiz Pages/Question 1';
import Question2 from '@/components/Quiz Pages/Question 2';
import Question3 from '@/components/Quiz Pages/Question 3';
import Question4 from '@/components/Quiz Pages/Question 4';
import Question5 from '@/components/Quiz Pages/Question 5';
import Answers1 from '@/components/Quiz Components/Radio Answers/Answers 1';

export default function Home() {
    
return (
    <div className={styles.mainQuiz}>
        <style jsx global>{`
                body {
                    margin: 0px;
                }
                `}
                </style>
                {/* <Question1/> */}
                <Question2/>
                {/* <Question4/> */}
                {/* <Question5/> */}
      <img src='/images/quizbackground.jpeg' alt='Outer Space Image' width={430} height={932}  className={styles.space}></img>
    </div>
  );
};

