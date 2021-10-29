import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "../../styles/styles.css";

export default function Timestop() {
  const [stop, setStop] = useState(0);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    if (condition) {
      setTimeout(() => setStop((stop) => stop + 1), 100);
    }
  });

  const handleClick = () => {
    setCondition(!condition);
  };

  const handleRestart = () => {
    setStop(0);
  };

  let hr = () => {
    let hr = Math.floor(stop / 10 / 60 / 60);
    return hr < 1 ? "00" : hr < 10 ? "0" + hr : hr;
  };

  let min = () => {
    let min = Math.floor((stop / 10 / 60) % 60);
    return min < 1 ? "00" : min < 10 ? "0" + min : min;
  };

  let sec = () => {
    let sec = Math.floor((stop / 10) % 60);
    return sec < 1 ? "00" : sec < 10 ? "0" + sec : sec;
  };

  let dsec = stop.toString().slice(-1);

  let stopFormat =
    stop < 3600000
      ? hr() + ":" + min() + ":" + sec() + ":" + dsec
      : "99:59:59:9";

  return (
    <div style={{ width: "200px" }}>
      <h1>{stopFormat}</h1>
      <Button
        onClick={handleClick}
        variant="outline-secondary"
        size="lg"
        style={{ marginRight: "25px" }}
      >
        {condition ? "Pause" : "Start"}
      </Button>

      {condition === false && stop > 0 ? (
        <Button onClick={handleRestart} variant="outline-secondary" size="lg">
          Restart
        </Button>
      ) : null}
    </div>
  );
}
