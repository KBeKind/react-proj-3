import { useState } from "react";

import BattleButton from "./BattleButton";

function BattleButtonContainer() {
  const attackArray = ["Sword", "Arrow", "Fireball"];
  const defenseArray = ["Dodge", "Shield Block", "Frost Aura"];

  const [selectedAttack, setSelectedAttack] = useState(-1);
  const [selectedDefense, setSelectedDefense] = useState(-1);

  return (
    <>
      <h1>Pick Your Next Moves</h1>
      <div className="container text-center">
        <div className="row">
          {attackArray.map((action, index) => (
            <div className="col">
              <button
                className={
                  selectedAttack === index
                    ? "btn btn-danger "
                    : "btn btn-secondary"
                }
                onClick={() => setSelectedAttack(index)}
                key={action}
              >
                {action}
              </button>
            </div>
          ))}
        </div>
        <div className="row">
          {defenseArray.map((action, index) => (
            <div className="col">
              <button
                className={
                  selectedDefense === index
                    ? "btn btn-danger"
                    : "btn btn-secondary"
                }
                onClick={() => setSelectedDefense(index)}
                key={action}
              >
                {action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BattleButtonContainer;
