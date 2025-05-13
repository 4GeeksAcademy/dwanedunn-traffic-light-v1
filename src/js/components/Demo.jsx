import React, { useState } from 'react';
import './TrafficLight.css'; // Create this CSS file for custom styles

const Demo = () => {
  const [selectedColor, setSelectedColor] = useState('');

  // This function handles the click event on the lights
  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="traffic-light">
           
      <div
        className={`light red ${selectedColor === 'red' ? 'glow' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
           
      <div
        className={`light yellow ${selectedColor === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
           
      <div
        className={`light green ${selectedColor === 'green' ? 'glow' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
         
    </div>
  );
};

export default Demo;
