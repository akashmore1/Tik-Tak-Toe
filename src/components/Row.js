import React, { useState } from "react";
import "./Row.css";

const Row = ({
  setIsXPresent,
  isXPresent,
  cellValue1,
  cellValue2,
  cellValue3,
}) => {
  const [cell1_clicked, setCell1_Clicked] = useState(false);
  const [cell2_clicked, setCell2_Clicked] = useState(false);
  const [cell3_clicked, setCell3_Clicked] = useState(false);

  return (
    <div className="row">
      <div
        className="cell"
        onClick={() => {
          setCell1_Clicked(true);
          setIsXPresent(!isXPresent);
        }}
      >
        {cell1_clicked && cellValue1}
      </div>
      <div
        className="cell"
        onClick={() => {
          setCell2_Clicked(true);
          setIsXPresent(!isXPresent);
        }}
      >
        {cell2_clicked && cellValue2}
      </div>
      <div
        className="cell"
        onClick={() => {
          setCell3_Clicked(true);
          setIsXPresent(!isXPresent);
        }}
      >
        {cell3_clicked && cellValue3}
      </div>
    </div>
  );
};

export default Row;
