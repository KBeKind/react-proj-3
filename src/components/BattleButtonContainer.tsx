import { useState } from "react";

function BattleButtonContainer() {
  const attackArray = ["Sword", "Arrow", "Fireball"];
  const defenseArray = ["Dodge", "Shield Block", "Frost Aura"];

  const [opponentHealth, setOpponentHealth] = useState(10);
  const [userHealth, setUserHealth] = useState(10);

  const [selectedAttack, setSelectedAttack] = useState(-1);
  const [selectedDefense, setSelectedDefense] = useState(-1);

  const [lastOpponentAttack, setLastOpponentAttack] = useState(-1);
  const [lastOpponentDefense, setLastOpponentDefense] = useState(-1);

  const [lastUserAttack, setLastUserAttack] = useState(-1);
  const [lastUserDefense, setLastUserDefense] = useState(-1);

  const [userHealthMessage, setUserHealthMessage] = useState("Alive");
  const [opponentHealthMessage, setOpponentHealthMessage] = useState("Alive");

  return (
    <>
      <h2>
        Opponent Health Status: {opponentHealth} {opponentHealthMessage}
        <br />
        Opponent Actions:
        <br />
        attack:{attackArray[lastOpponentAttack]}
        <br />
        defense:{defenseArray[lastOpponentDefense]}
      </h2>
      <h2>
        User Health Status: {userHealth} {userHealthMessage}
        <br />
        User Actions:
        <br />
        attack:{attackArray[lastUserAttack]}
        <br />
        defense:{defenseArray[lastUserDefense]}
      </h2>
      <h1 className="text-center">Pick Your Next Moves</h1>
      <div className="container text-center border border-secondary border-3 rounded p-3 ">
        <div className="row">
          {" "}
          ⚔️
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
        <hr />
        <div className="row">
          🛡
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
      <div className="container">
        <div className="row p-2">
          <button
            className="btn btn-success"
            onClick={() => {
              setLastUserAttack(selectedAttack);
              setLastUserDefense(selectedDefense);
              setLastOpponentAttack(Math.floor(Math.random() * (2 - 0 + 1)));
              setLastOpponentDefense(Math.floor(Math.random() * (2 - 0 + 1)));
              setUserHealth(
                startUserRound(selectedDefense, userHealth, lastOpponentAttack)
              );
              setOpponentHealth(
                startOpponentRound(
                  selectedAttack,
                  opponentHealth,
                  lastOpponentDefense
                )
              );

              setOpponentHealthMessage(checkHealth(opponentHealth));
              setUserHealthMessage(checkHealth(userHealth));
            }}
          >
            Ready
          </button>
        </div>
      </div>
    </>
  );
}

function checkHealth(health: number) {
  if (health <= 0) {
    return "You dead";
  }
  return "Alive";
}

function startUserRound(defense: number, health: number, attack: number) {
  const userDefense = defense;

  if (attack === userDefense) {
    //user takes no damage
  } else if (attack === 0) {
    if (userDefense === 1) {
      health--;
      //user takes 1 damage
    } else if (userDefense === 2) {
      //user takes 2 damage
      health -= 2;
    }
  } else if (attack === 1) {
    if (userDefense === 2) {
      //user takes 1 damage
      health--;
    } else if (userDefense === 0) {
      //user takes 2 damage
      health -= 2;
    }
  } else if (attack === 2) {
    if (userDefense === 0) {
      //user takes 1 damage
      health--;
    } else if (userDefense === 1) {
      //user takes 2 damage
      health -= 2;
    }
  }

  return health;
}

function startOpponentRound(attack: number, health: number, defense: number) {
  const userAttack = attack;

  if (userAttack === defense) {
    //opponent takes no damage
  } else if (userAttack === 0) {
    if (defense === 1) {
      //opponent takes 1 damage
      health--;
    } else if (defense === 2) {
      //opponent takes 2 damage
      health -= 2;
    }
  } else if (userAttack === 1) {
    if (defense === 2) {
      //opponent takes 1 damage
      health--;
    } else if (defense === 0) {
      //opponent takes 2 damage
      health -= 2;
    }
  } else if (userAttack === 2) {
    if (defense === 0) {
      //opponent takes 1 damage
      health--;
    } else if (defense === 1) {
      //opponent takes 2 damage
      health -= 2;
    }
  }

  return health;
}

export default BattleButtonContainer;
