import React, { useState } from "react";
import "./Row.css";

const Row = ({ setIsXPresent }) => {
  const [cell1_clicked, setCell1_Clicked] = useState(false);
  const [cell2_clicked, setCell2_Clicked] = useState(false);
  const [cell3_clicked, setCell3_Clicked] = useState(false);
  let cellValue = "X";
  return (
    <div className="row">
      <div
        className="cell"
        onClick={() => {
          setCell1_Clicked(true);
        }}
      >
        {cell1_clicked && cellValue}
      </div>
      <div
        className="cell"
        onClick={() => {
          setCell2_Clicked(true);
        }}
      >
        {cell2_clicked && cellValue}
      </div>
      <div
        className="cell"
        onClick={() => {
          setCell3_Clicked(true);
        }}
      >
        {cell3_clicked && cellValue}
      </div>
    </div>
  );
};

export default Row;
