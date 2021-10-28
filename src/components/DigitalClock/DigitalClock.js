import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => setClock(new Date().toLocaleTimeString()), 1000);
  });

  return <div>{clock}</div>;
}
