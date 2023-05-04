import { useState, useEffect } from "react";

import BattleButton from "./BattleButton";

function BattleButtonContainer() {
  const actionArray = ["at1", "at2", "at3", "df1", "df2", "df3"];
  const [actionIndex, setActionIndex] = useState<number>(0);

  return (
    <>
      <h1>Pick Your Next Moves</h1>
      <div className="card">
        {actionArray.map((action, i) => (
          <BattleButton key={i} actionIndex={actionIndex}>
            {action}
          </BattleButton>
        ))}
        <p></p>
      </div>
    </>
  );
}

export default BattleButtonContainer;
