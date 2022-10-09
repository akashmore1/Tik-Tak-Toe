import React, { useEffect, useState } from "react";
import "./Cell.css";

const Cell = ({
  num,
  setGameArr,
  gameArr,
  isXPresent,
  setIsXPresent,
  winner,
  winnerCollection,
}) => {
  const [isClassAdded, setIsClassAdded] = useState(false);

  useEffect(() => {
    setIsClassAdded(winnerCollection.includes(num));
  }, [winnerCollection]);

  useEffect(() => {
    return () => {
      setIsClassAdded(false);
    };
  });

  const onCellClick = () => {
    if (winner) return;
    const tempGameArray = [...gameArr];
    tempGameArray[num] = isXPresent ? "O" : "X";
    setGameArr(tempGameArray);
    setIsXPresent(!isXPresent);
  };

  const classes = `${isClassAdded ? "cell red" : "cell"}`;
  return (
    <div className={classes} onClick={onCellClick}>
      {gameArr[num]}
    </div>
  );
};

export default Cell;
