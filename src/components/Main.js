import React, { useState } from "react";
import Cell from "./Cell";
import "./Main.css";

const Main = () => {
  const [gameArr, setGameArr] = useState(new Array(9).fill(""));
  const [isXPresent, setIsXPresent] = useState(false);

  return (
    <div className="main">
      <div className="row">
        <Cell
          num={0}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={1}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={2}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
      </div>
      <div className="row">
        <Cell
          num={3}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={4}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={5}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
      </div>
      <div className="row">
        <Cell
          num={6}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={7}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
        <Cell
          num={8}
          setGameArr={setGameArr}
          gameArr={gameArr}
          isXPresent={isXPresent}
          setIsXPresent={setIsXPresent}
        ></Cell>
      </div>
    </div>
  );
};

export default Main;
