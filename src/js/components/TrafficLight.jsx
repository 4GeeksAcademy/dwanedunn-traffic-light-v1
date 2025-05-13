import { useEffect, useState } from 'react';

const TrafficLight = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="wrapper d-flex flex-column justify-content-start align-items-center">
        <div className="hanger bg-dark"></div>
        <div className="light-container bg-dark rounded d-flex flex-column justify-content-evenly align-items-center pb-4">
          <div
            className={`light red ${selectedColor === 'red' ? 'selected' : ''}`}
            onClick={() => handleClick('red')}
          ></div>
          <div
            className={`light yellow ${
              selectedColor === 'yellow' ? 'selected' : ''
            }`}
            onClick={() => handleClick('yellow')}
          ></div>

          <div
            className={`light green ${
              selectedColor === 'green' ? 'selected' : ''
            }`}
            onClick={() => handleClick('green')}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
