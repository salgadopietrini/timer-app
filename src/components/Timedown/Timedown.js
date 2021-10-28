import React, { useState, useEffect } from "react";

export default function Timedown() {
  const [time, setTime] = useState(0);
  const [input, setInput] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (condition) {
      setTimeout(() => setTime((time) => time - 1), 100);
    }
  });

  const handleClick = () => {
    setTime(input.hour * 36000 + input.min * 600 + input.sec * 10);
    if (time > 0 || input.hour + input.min + input.sec > 0) {
      setCondition(!condition);
    }
  };

  const handleCondition = () => {
    setCondition(!condition);
  };

  const handleTimer = (event) => {
    setCondition(false);
    setInput((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const hr = (time) => {
    const hr = Math.floor(time / 10 / 60 / 60);
    return hr < 1 ? "00" : hr < 10 ? "0" + hr : hr;
  };

  const min = (time) => {
    const min = Math.floor((time / 10 / 60) % 60);
    return min < 1 ? "00" : min < 10 ? "0" + min : min;
  };

  const sec = (time) => {
    const sec = Math.floor((time / 10) % 60);
    return sec < 1 ? "00" : sec < 10 ? "0" + sec : sec;
  };

  const dsec = (time) => time.toString().slice(-1);

  const timeFormat = (time) => {
    return time > 0
      ? hr(time) + ":" + min(time) + ":" + sec(time) + ":" + dsec(time)
      : "00:00:00:0";
  };

  return (
    <div>
      <h3>
        {" "}
        {condition
          ? timeFormat(time)
          : timeFormat(input.hour * 36000 + input.min * 600 + input.sec * 10)}
      </h3>
      <input
        type="number"
        onChange={handleTimer}
        name="hour"
        value={input.hour}
        max="99"
        min="0"
      />
      <input
        type="number"
        onChange={handleTimer}
        name="min"
        value={input.min}
        max="59"
        min="0"
      />
      <input
        type="number"
        onChange={handleTimer}
        name="sec"
        value={input.sec}
        max="59"
        min="0"
      />
      <button onClick={handleClick}>{condition ? "Restart!" : "Start!"}</button>
      {condition ? <button onClick={handleCondition}>"Pause" </button> : null}
      <h3>{time < 0 ? "Time over!!!" : null}</h3>
    </div>
  );
}
