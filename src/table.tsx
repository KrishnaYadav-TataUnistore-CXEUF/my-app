import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

//both min and max are inclusive
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Table() {
  const [num1, setNum1] = useState<number>(getRandomInt(12, 19));
  const [num2, setNum2] = useState<number>(getRandomInt(2, 9));
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    if (num1 * num2 === parseInt(answer)) {
      window?.navigator?.vibrate?.(100);
      setNum1(getRandomInt(12, 19));
      setNum2(getRandomInt(2, 9));
      setAnswer("");
    }
  }, [answer]);
  return (
    <div className="test">
      <span>{num1}</span> X <span>{num2}</span> = {}
      <input
        type={"tel"}
        className="ipTest"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        autoFocus
      ></input>
    </div>
  );
}

export default Table;
