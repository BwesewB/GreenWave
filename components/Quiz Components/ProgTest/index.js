import React from 'react';
import styles from './ProgTest.module.css';// Import CSS module for styling

const ProgressBar = ({ currentQuestion }) => {
  const circlePosition = {
    left: `${((currentQuestion - 1) / 5) * (100 - (25 / 280 * 100))}%`, // Adjusted calculation
  };

  const progressBarWidth = {
    width: `${((currentQuestion - 1) / 5) * 100}%`, // Updated calculation
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={progressBarWidth}></div>
      <div className={styles.circle} style={circlePosition}>{currentQuestion}</div>
    </div>
  );
};

export default ProgressBar;
