import React, { useState, useEffect } from "react";
import "./App.css";

//both min and max are inclusive
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Square(props: { isLong: boolean }) {
  const [num, setNum] = useState<number>(props.isLong ? getRandomInt(31, 99) : getRandomInt(12, 30));
  const [answer, setAnswer] = useState("");
  const [shake, setShake] = useState(true);
  useEffect(() => {
    if (num * num === parseInt(answer)) {
      window?.navigator?.vibrate?.(100);
      setNum(props.isLong ? getRandomInt(31, 99) : getRandomInt(12, 30));
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
      <sup className="sup">2</sup> = {}
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
