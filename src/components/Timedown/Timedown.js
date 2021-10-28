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
    setCondition(!condition);
  };

  const handleTimer = (event) => {
    setInput((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  let hr = () => {
    let hr = Math.floor(time / 10 / 60 / 60);
    return hr < 1 ? "00" : hr < 10 ? "0" + hr : hr;
  };

  let min = () => {
    let min = Math.floor((time / 10 / 60) % 60);
    return min < 1 ? "00" : min < 10 ? "0" + min : min;
  };

  let sec = () => {
    let sec = Math.floor((time / 10) % 60);
    return sec < 1 ? "00" : sec < 10 ? "0" + sec : sec;
  };

  let dsec = time.toString().slice(-1);

  let timeFormat =
    time > 0 ? hr() + ":" + min() + ":" + sec() + ":" + dsec : "00:00:00:0";

  return (
    <div>
      <h3> {timeFormat}</h3>
      <input
        type="number"
        onChange={handleTimer}
        name="hour"
        value={input.hour}
      />
      <input
        type="number"
        onChange={handleTimer}
        name="min"
        value={input.min}
      />
      <input
        type="number"
        onChange={handleTimer}
        name="sec"
        value={input.sec}
      />
      <button onClick={handleClick}>Start!</button>
    </div>
  );
}
