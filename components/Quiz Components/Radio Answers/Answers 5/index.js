// pages/index.js

import React, { useState } from 'react';
import Radio from '@/components/Radio';

export default function Answers5() {
  const options = [
    { label: 'Yes', value: 'option1' },
    { label: 'Occasionally', value: 'option2' },
    { label: 'Rarely', value: 'option3' },
    { label: 'Not At All', value: 'option4' }, // Added fourth option
  ];
  
  const Answers5 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionSelect = (value) => {
      setSelectedOption(value);
    };
  
    return (
      <div>
        <Radio options={options} onSelect={handleOptionSelect} />
      </div>
    );
  };
  
}



