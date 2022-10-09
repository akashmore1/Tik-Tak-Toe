import React, { useState } from "react";
import Main from "./components/Main";

import "./App.css";

function App() {
  const [gameArr, setGameArr] = useState(new Array(9).fill(""));
  const [isXPresent, setIsXPresent] = useState(false);
  const [winner, setWinner] = useState(null);

  const classes = `result ${winner ? "" : "display"}`;
  const playAgainFunc = () => {
    setGameArr(new Array(9).fill(""));
    setIsXPresent(false);
    setWinner(null);
  };
  return (
    <div className="main__wrapper">
      <h1>Tik Tac Toe</h1>
      <Main
        gameArr={gameArr}
        setGameArr={setGameArr}
        isXPresent={isXPresent}
        setIsXPresent={setIsXPresent}
        winner={winner}
        setWinner={setWinner}
      />

      <div className={classes}>
        {winner} wins!
        <button
          onClick={() => {
            playAgainFunc();
          }}
        >
          Play again?
        </button>
      </div>
    </div>
  );
}

export default App;
