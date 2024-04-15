import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep }) => {
  const steps = 6;
  const progress = (currentStep / steps) * 100;

  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className={styles.svg}>
  <g filter="url(#filter0_d_592_2781)">
    <circle cx="16.5" cy="16.5" r="12.5" fill="#0BAA81"/>
  </g>
  <defs>
    <filter id="filter0_d_592_2781" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_592_2781"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_592_2781" result="shape"/>
    </filter>
  </defs>
</svg>
    </div>
  );
};

export default ProgressBar;
