import { useState } from "react";

import "./App.css";

import BattleButtonContainer from "./components/BattleButtonContainer.tsx";
import OpponentStatusContainer from "./components/OpponentStatusContainer.tsx";

function App() {
  return (
    <>
      <div></div>

      <div className="card"></div>
      <OpponentStatusContainer />
      <BattleButtonContainer />
    </>
  );
}

export default App;
