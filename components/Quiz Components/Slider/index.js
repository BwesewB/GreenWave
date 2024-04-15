import { useState } from 'react';
import styles from "./Slider.module.css";

const SliderComponent = () => {
  const [value, setValue] = useState(0); // State to hold the value of the slider

  const handleChange = (e) => {
    setValue(parseInt(e.target.value)); // Update the value as the slider moves
  };

  // Convert the slider value to kilometers
  const kilometers = Math.round((value / 100) * 800);

  // Adjust the gradient background accordingly
  const gradientBackground = `linear-gradient(to right, #0BAA81 0%, #0BAA81 ${value}%, var(--french-gray, #c9cad9) ${value}%, var(--french-gray, #c9cad9) 100%)`;

  return (
    <div className={styles.outerSliderContainer}>
      <div className={styles.sliderContainer} style={{ background: gradientBackground }}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValue}>{kilometers}km</div>
    </div>
  );
};

export default SliderComponent;
