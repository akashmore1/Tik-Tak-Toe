import React, { useState } from "react";
import "./Cell.css";

const Cell = ({
  num,
  setGameArr,
  gameArr,
  isXPresent,
  setIsXPresent,
  winner,
}) => {
  const onCellClick = () => {
    if (winner) return;
    const tempGameArray = [...gameArr];
    tempGameArray[num] = isXPresent ? "O" : "X";
    setGameArr(tempGameArray);
    setIsXPresent(!isXPresent);
  };

  return (
    <div className="cell" onClick={onCellClick}>
      {gameArr[num]}
    </div>
  );
};

export default Cell;
