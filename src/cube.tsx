import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//both min and max are inclusive
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Square() {
  const [num, setNum] = useState<number>(getRandomInt(12, 20));
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    if (num * num * num === parseInt(answer)) {
      setNum(getRandomInt(12, 20));
      setAnswer("");
    }
  }, [answer]);
  return (
    <div className="test">
      <span>{num}</span>
      <sup>3</sup>=<input onChange={(e) => setAnswer(e.target.value)} value={answer} autoFocus></input>
    </div>
  );
}

export default Square;
