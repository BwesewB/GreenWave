import React from 'react';
import Radio from '@/components/Radio';
import styles from '@/components/Radio/Radio.module.css';

const options = [
  { label: 'Yes', value: 'option1' },
  { label: 'Occasionally', value: 'option2' },
  { label: 'Rarely', value: 'option3' },
  { label: 'Not at all', value: 'option4' }, // Added fourth option
];

const Answers5 = ({ customRadioStyle }) => {
  const handleOptionSelect = (value) => {
    // Handle selected option logic if needed
  };

  return (
    <div>
      {/* Use the Radio component with custom styles */}
      <Radio options={options} onSelect={handleOptionSelect} customRadioStyle={customRadioStyle} />
    </div>
  );
};

export default Answers5;
