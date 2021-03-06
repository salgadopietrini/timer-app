import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export default function Timedown() {
  const [time, setTime] = useState(0);
  const [input, setInput] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (condition && time > 0) {
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
      <h1>
        {condition
          ? timeFormat(time)
          : time > 0
          ? timeFormat(time)
          : timeFormat(input.hour * 36000 + input.min * 600 + input.sec * 10)}
      </h1>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="First name"
          type="number"
          onChange={handleTimer}
          name="hour"
          value={input.hour}
          max="99"
          min="0"
        />
        <FormControl
          aria-label="Last name"
          type="number"
          onChange={handleTimer}
          name="min"
          value={input.min}
          max="59"
          min="0"
        />
        <FormControl
          aria-label="Last name"
          type="number"
          onChange={handleTimer}
          name="sec"
          value={input.sec}
          max="59"
          min="0"
        />
      </InputGroup>
      {condition ? null : (
        <Button
          onClick={handleClick}
          variant="outline-secondary"
          size="lg"
          style={{ marginRight: "25px" }}
        >
          {condition ? "Restart!" : "Start!"}
        </Button>
      )}
      {condition ? null : time > 0 ? (
        <Button onClick={handleCondition} variant="outline-secondary" size="lg">
          Continue
        </Button>
      ) : null}
      {condition ? (
        <Button onClick={handleCondition} variant="outline-secondary" size="lg">
          Pause
        </Button>
      ) : null}
      <h3>{time === 0 && condition ? "Time over!!!" : null}</h3>
    </div>
  );
}
