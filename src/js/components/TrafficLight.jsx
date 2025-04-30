import { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="wrapper d-flex flex-column justify-content-start align-items-center">
      <div className="hanger bg-dark"></div>
      <div className="light-container bg-dark rounded d-flex flex-column justify-content-evenly align-items-center pb-4">
        // <div className="light rounded-circle light-r"></div>
        // <div className="light rounded-circle light-y"></div>
        // <div className="light rounded-circle light-g"></div>
      </div>
    </div>
  );
};

export default TrafficLight;
