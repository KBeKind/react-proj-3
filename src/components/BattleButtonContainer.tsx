//import { useState } from "react";
import BattleButton from "./BattleButton";

function BattleButtonContainer() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <h1>Pick Your Next Moves</h1>
      <div className="card">
        <BattleButton />
        <BattleButton />
        <p></p>
      </div>
    </>
  );
}

export default BattleButtonContainer;
