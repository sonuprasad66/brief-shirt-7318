import React from "react";
import {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";


let fixTime = (time) => (time < 10 ? "0" + time : time);

let getTime = (time) => {
  let secound = time % 60;
  let min = Math.floor(time / 60) % 60;
  let hours = Math.floor(time / 3600) % 60;

  return `${fixTime(hours)}:${fixTime(min)}:${fixTime(secound)}`;
};

function Timer() {
  const [timer, setTimer] = useState(0);
  let ref = useRef(null);

  let handleStart = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  let handlePause = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  let handleReset = () => {
    handlePause();
    setTimer(70);
  };

  useEffect(() => {
    return () => {
      handlePause();
    };
  }, []);

  return (
    <div className={styles.Container}>
      <h1>TIMER</h1>
      <h2>HH : MM : SS</h2>
      <div >{getTime(timer)}</div>
      <button className="Start" onClick={handleStart}>
        START
      </button>
      <button className="Pause" onClick={handlePause}>
        PAUSE
      </button>
      <button className="Reset" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}
