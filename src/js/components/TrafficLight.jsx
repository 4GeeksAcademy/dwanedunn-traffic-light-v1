import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div className="wrapper d-flex flex-column justify-content-start align-items-center">
        <div className="hanger bg-dark"></div>
        <div className="light-container bg-dark rounded d-flex flex-column justify-content-evenly align-items-center pb-4">
          <div
            className="light red"
            onClick={() => {
              setColor("red");
            }}
          ></div>
          <div
            className="light yellow"
            onClick={() => {
              setColor("Yellow");
            }}
          ></div>

          <div
            className="light green"
            onClick={() => {
              setColor("green");
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
