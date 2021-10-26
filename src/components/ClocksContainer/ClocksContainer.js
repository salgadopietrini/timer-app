import React, { useState } from "react";
import DigitalClock from "../DigitalClock/DigitalClock";
import Timedown from "../Timedown/Timedown";
import Timestop from "../Timestop/Timestop";

export default function ClocksContainer() {
  const [show, setShow] = useState({
    digitalClock: false,
    timedown: false,
    timestop: false,
  });

  const handleClick = (event) => {
    const name = event.target.name;
    setShow((prevValue) => ({
      ...prevValue,
      [name]: !prevValue[name],
    }));
  };

  return (
    <div>
      <button onClick={handleClick} name="digitalClock">
        Digital Clock
      </button>
      <button onClick={handleClick} name="timedown">
        Timedown
      </button>
      <button onClick={handleClick} name="timestop">
        Timestop
      </button>
      {show.digitalClock && <DigitalClock />}
      {show.timedown && <Timedown />}
      {show.timestop && <Timestop />}
    </div>
  );
}
