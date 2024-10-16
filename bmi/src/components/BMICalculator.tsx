import React, { useState } from 'react';
import './BMICalculator.css';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<number | string>('');
  const [height, setHeight] = useState<number | string>('');
  const [bmi, setBmi] = useState<number | string | null>(null);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height as string) / 100;
    const bmiValue = parseFloat(weight as string) / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <h2>Your BMI: {bmi}</h2>}
    </div>
  );
};

export default BMICalculator;
