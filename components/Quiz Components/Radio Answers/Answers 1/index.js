// pages/index.js

import React, { useState } from 'react';
import Radio from '@/components/Radio';

const Answers1 = () => {

  const options = [
    { label: 'Car', value: 'option1' },
    { label: 'Public Transit', value: 'option2' },
    { label: 'Walking', value: 'option3' },
    { label: 'Biking', value: 'option4' }, // Added fourth option
  ];
  
  const Answers1 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionSelect = (value) => {
      setSelectedOption(value);
    };
  
    return (
      <div style={{zIndex: '4', position: 'absolute', top: '0px', left: '0px', overflow: 'hidden'}}>
        <Radio options={options} onSelect={handleOptionSelect} />
      </div>
    );
  };
  

}

export default Answers1;
