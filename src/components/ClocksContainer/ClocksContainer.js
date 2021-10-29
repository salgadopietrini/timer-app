import React, { useState } from "react";
import DigitalClock from "../DigitalClock/DigitalClock";
import Timedown from "../Timedown/Timedown";
import Timestop from "../Timestop/Timestop";
import "../../styles/styles.css";
import { ButtonGroup, Button } from "react-bootstrap";

export default function ClocksContainer() {
  const [show, setShow] = useState({
    digitalClock: false,
    timedown: false,
    timestop: false,
  });

  const handleClick = (event) => {
    const name = event.target.name;
    setShow((prevValue) => ({
      [name]: !prevValue[name],
    }));
  };

  return (
    <div>
      <div className="custom-container">
        <ButtonGroup aria-label="Timer options" style={{ marginTop: "50px" }}>
          <Button
            onClick={handleClick}
            name="digitalClock"
            variant="secondary"
            size="lg"
          >
            Digital Clock
          </Button>
          <Button
            onClick={handleClick}
            name="timedown"
            variant="secondary"
            size="lg"
          >
            Timedown
          </Button>
          <Button
            onClick={handleClick}
            name="timestop"
            variant="secondary"
            size="lg"
          >
            Timestop
          </Button>
        </ButtonGroup>
      </div>
      <div className="clocks-container">
        {show.digitalClock && <DigitalClock />}
        {show.timedown && <Timedown />}
        {show.timestop && <Timestop />}
      </div>
    </div>
  );
}
