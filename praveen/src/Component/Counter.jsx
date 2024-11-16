import React, { useState } from "react";
import Adam from "./button";
const Counter = () => {
  const [currentState, setCurrentState] = useState(0);
  function add() {
    setCurrentState(currentState + 1);
  }
  function sub() {
    setCurrentState(currentState - 1);
  }
  return (
    <div>
      <p>{currentState}</p>
      <button onClick={add}>add</button>
      <button onClick={sub}>sub</button>
    </div>
  );
};

export default Counter;
