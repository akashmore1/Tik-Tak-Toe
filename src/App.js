import React, { useState } from "react";
import Main from "./components/Main";

import "./App.css";

function App() {
  const [winnerText, setWinnerText] = useState("");
  console.log("winnerText", winnerText);
  const classes = `result ${winnerText ? "" : "display"}`;
  return (
    <div className="main__wrapper">
      <h1>Tik Tac Toe</h1>
      <Main setWinnerText={setWinnerText} />

      <div className={classes}>
        {winnerText} wins! <button>Play again?</button>
      </div>
    </div>
  );
}

export default App;
