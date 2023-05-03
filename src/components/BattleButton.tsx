import { useState } from "react";

const actionArray = ["at1", "at2", "at3", "df1", "df2", "df3"];

let actionIndex = 0;
function listNextAction() {
  if (actionIndex < 5) {
    actionIndex++;
    return actionArray[actionIndex];
  } else {
    actionIndex = 0;
    return actionArray[actionIndex];
  }
}

function BattleButton() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("action");

  return (
    <>
      <button onClick={() => setAction(listNextAction())}>
        {action} {count}
      </button>
    </>
  );
}

export default BattleButton;
