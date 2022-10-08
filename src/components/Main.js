import React, { useState } from "react";
import Row from "./Row";
import "./Main.css";

const Main = () => {
  const [isXPresent, setIsXPresent] = useState(false);
  return (
    <div className="main">
      <Row setIsXPresent={setIsXPresent} isXPresent={isXPresent} />
      <Row setIsXPresent={setIsXPresent} isXPresent={isXPresent} />
      <Row setIsXPresent={setIsXPresent} isXPresent={isXPresent} />
    </div>
  );
};

export default Main;
