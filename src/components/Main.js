import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import "./Main.css";

const Main = ({
  gameArr,
  setGameArr,
  isXPresent,
  setIsXPresent,
  winner,
  setWinner,
}) => {
  const row1 = [gameArr[0], gameArr[1], gameArr[2]];
  const row2 = [gameArr[3], gameArr[4], gameArr[5]];
  const row3 = [gameArr[6], gameArr[7], gameArr[8]];

  const column1 = [gameArr[0], gameArr[3], gameArr[6]];
  const column2 = [gameArr[1], gameArr[4], gameArr[7]];
  const column3 = [gameArr[2], gameArr[5], gameArr[8]];

  const diagonal1 = [gameArr[0], gameArr[4], gameArr[8]];
  const diagonal2 = [gameArr[2], gameArr[4], gameArr[6]];

  useEffect(() => {
    const row1Set = [...new Set(row1)];
    if (row1Set.length === 1 && row1Set[0] !== "") {
      setWinner(row1Set[0]);
    }

    const row2Set = [...new Set(row2)];
    if (row2Set.length === 1 && row2Set[0] !== "") {
      setWinner(row2Set[0]);
    }

    const row3Set = [...new Set(row3)];
    if (row3Set.length === 1 && row3Set[0] !== "") {
      setWinner(row3Set[0]);
    }

    const column1Set = [...new Set(column1)];
    if (column1Set.length === 1 && column1Set[0] !== "") {
      setWinner(column1Set[0]);
    }

    const column2Set = [...new Set(column2)];
    if (column2Set.length === 1 && column2Set[0] !== "") {
      setWinner(column2Set[0]);
    }

    const column3Set = [...new Set(column3)];
    if (column3Set.length === 1 && column3Set[0] !== "") {
      setWinner(column3Set[0]);
    }

    const diagonal1Set = [...new Set(diagonal1)];
    if (diagonal1Set.length === 1 && diagonal1Set[0] !== "") {
      setWinner(diagonal1Set[0]);
    }

    const diagonal2Set = [...new Set(diagonal2)];
    if (diagonal2Set.length === 1 && diagonal2Set[0] !== "") {
      setWinner(diagonal2Set[0]);
    }
  }, [gameArr, winner]);

  return (
    <div className="main">
      <div className="row">
        <Cell
          num={0}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={1}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={2}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
      </div>
      <div className="row">
        <Cell
          num={3}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={4}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={5}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
      </div>
      <div className="row">
        <Cell
          num={6}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={7}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
        <Cell
          num={8}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
          winner={winner}
        ></Cell>
      </div>
    </div>
  );
};

export default Main;
