import { useState } from "react";

import actionArray from "./BattleButtonContainer";

function BattleButton() {
  const [action, setAction] = useState<string>(actionArray[0]);

  return (
    <>
      <button onClick={() => setAction(actionArray[actionIndex])}>
        {action}
      </button>
    </>
  );
}

export default BattleButton;
