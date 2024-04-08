// pages/index.js

import React, { useState } from 'react';
import Radio from '@/components/Radio';

export default function Answers4() {
  const options = [
    { label: 'Never', value: 'option1' },
    { label: 'Rarely', value: 'option2' },
    { label: 'Occasionally', value: 'option3' },
    { label: 'Often', value: 'option4' }, // Added fourth option
  ];
  
  const Answers4 = () => {
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

