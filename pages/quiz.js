// pages/index.js

import React, { useState } from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Car', value: 'option1' },
  { label: 'Public Transit', value: 'option2' },
  { label: 'Walking', value: 'option3' },
  { label: 'Biking', value: 'option4' }, // Added fourth option
];

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
        <style jsx global>{`
                body {
                    margin: 0px;
                }
                `}
                </style>
      <Radio options={options} onSelect={handleOptionSelect} />
      <img src='/images/quizbackground.jpeg' alt='Outer Space Image' width={430} height={932}></img>
    </div>
  );
};

export default Home;
