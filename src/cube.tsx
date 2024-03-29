import React, { useState, useEffect } from "react";
import "./App.css";

//both min and max are inclusive
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Square() {
  const [num, setNum] = useState<number>(getRandomInt(12, 20));
  const [answer, setAnswer] = useState("");
  const [shake, setShake] = useState(true);
  useEffect(() => {
    if (num * num * num === parseInt(answer)) {
      window?.navigator?.vibrate?.(100);
      setNum(getRandomInt(12, 20));
      setAnswer("");
      setShake(true);
    }
  }, [answer]);
  useEffect(() => {
    if (shake) {
      setTimeout(() => setShake(false), 200);
    }
  }, [shake]);
  return (
    <div className={`test ${shake ? "shake" : ""}`}>
      <span>{num}</span>
      <sup className="sup">3</sup> = {}
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

export default Square;
