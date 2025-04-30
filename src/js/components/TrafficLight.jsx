import { useState } from "react";

const TrafficLight = () => {
  const [state, setState] = useState("");

  return (
    <div className="wrapper d-flex flex-column justify-content-start align-items-center">
      <div className="hanger bg-dark"></div>
      <div className="light-container bg-dark rounded d-flex flex-column justify-content-evenly align-items-center pb-4">
        <div className="light rounded-circle red"></div>
        <div className="light rounded-circle yellow"></div>

        <div className="light rounded-circle green"></div>
      </div>
    </div>
  );
};

export default TrafficLight;
