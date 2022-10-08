import React, { useState } from "react";
import Row from "./Row";
import "./Main.css";

const Main = () => {
  const [isXPresent, setIsXPresent] = useState(false);
  let cellValue1 = isXPresent ? "O" : "X";
  let cellValue2 = isXPresent ? "O" : "X";
  let cellValue3 = isXPresent ? "O" : "X";

  return (
    <div className="main">
      <Row
        setIsXPresent={setIsXPresent}
        isXPresent={isXPresent}
        cellValue1={cellValue1}
        cellValue2={cellValue2}
        cellValue3={cellValue3}
      />
      <Row
        setIsXPresent={setIsXPresent}
        isXPresent={isXPresent}
        cellValue1={cellValue1}
        cellValue2={cellValue2}
        cellValue3={cellValue3}
      />
      <Row
        setIsXPresent={setIsXPresent}
        isXPresent={isXPresent}
        cellValue1={cellValue1}
        cellValue2={cellValue2}
        cellValue3={cellValue3}
      />
    </div>
  );
};

export default Main;
