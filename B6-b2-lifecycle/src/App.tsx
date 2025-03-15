import { useState, useEffect } from "react";
import Child from "./Child";

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(false);

  const handleTimer = () => {
    setTime(new Date().toLocaleTimeString());
    console.log("Thời gian: ", time);
  };

  const handleToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("State updated");
    console.log("State after update:", time);
  }, [time]);

  return (
    <div className="box">
      <h2>Đồng hồ</h2>
      <p>Thời gian hiện tại: {time}</p>
      <button onClick={handleTimer}>Get time</button>
      <button onClick={handleToggle}>Hiden</button>
      {show && <Child />}
    </div>
  );
};

