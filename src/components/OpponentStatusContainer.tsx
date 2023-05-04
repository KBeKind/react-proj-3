import { useState } from "react";

function OpponentStatusContainer() {
  const attackArray = ["Sword", "Arrow", "Fireball"];
  const defenseArray = ["Dodge", "Shield Block", "Frost Aura"];

  const [opponentHealth, setOpponentHealth] = useState(10);
  const [opponentAttack, setOpponentAttack] = useState("ready");
  const [opponentDefense, setOpponentDefense] = useState("ready");

  return (
    <>
      <h1 className="text-center">Opponent Status</h1>
      <div className="container text-center border border-secondary border-3 rounded p-3 ">
        <div className="row">Opponent Health: {opponentHealth}</div>
        <hr />
        <div className="row">
          Opponent Actions: ⚔️: {opponentAttack} 🛡: {opponentDefense}
        </div>
      </div>
    </>
  );
}

export default OpponentStatusContainer;
