import { useState } from "react";

function BattleButtonContainer() {
  const attackArray = ["Sword", "Arrow", "Fireball"];
  const defenseArray = ["Dodge", "Shield Block", "Frost Aura"];

  const [opponentHealth, setOpponentHealth] = useState(10);
  const [userHealth, setUserHealth] = useState(10);

  const [selectedAttack, setSelectedAttack] = useState(-1);
  const [selectedDefense, setSelectedDefense] = useState(-1);

  const [userHealthMessage, setUserHealthMessage] = useState("Alive");
  const [opponentHealthMessage, setOpponentHealthMessage] = useState("Alive");

  return (
    <>
      <h2>
        Opponent Health Status: {opponentHealth} {opponentHealthMessage}
      </h2>
      <h2>
        User Health Status: {userHealth} {userHealthMessage}
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
              setUserHealth(startUserRound(selectedDefense, userHealth));
              setOpponentHealth(
                startOpponentRound(selectedAttack, opponentHealth)
              );

              setOpponentHealthMessage(checkHealth(opponentHealth));
              setUserHealthMessage(checkHealth(userHealth));
              //THAT HAS A BUG DOESNT NOTICE DEATH UNTIL NEXT ATTACK
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

function startUserRound(defense: number, health: number) {
  const userDefense = defense;

  const opponentAttack = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  if (opponentAttack === userDefense) {
    //user takes no damage
  } else if (opponentAttack === 0) {
    if (userDefense === 1) {
      health--;
      //user takes 1 damage
    } else if (userDefense === 2) {
      //user takes 2 damage
      health -= 2;
    }
  } else if (opponentAttack === 1) {
    if (userDefense === 2) {
      //user takes 1 damage
      health--;
    } else if (userDefense === 0) {
      //user takes 2 damage
      health -= 2;
    }
  } else if (opponentAttack === 2) {
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

function startOpponentRound(attack: number, health: number) {
  const userAttack = attack;

  const opponentDefense = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

  if (userAttack === opponentDefense) {
    //opponent takes no damage
  } else if (userAttack === 0) {
    if (opponentDefense === 1) {
      //opponent takes 1 damage
      health--;
    } else if (opponentDefense === 2) {
      //opponent takes 2 damage
      health -= 2;
    }
  } else if (userAttack === 1) {
    if (opponentDefense === 2) {
      //opponent takes 1 damage
      health--;
    } else if (opponentDefense === 0) {
      //opponent takes 2 damage
      health -= 2;
    }
  } else if (userAttack === 2) {
    if (opponentDefense === 0) {
      //opponent takes 1 damage
      health--;
    } else if (opponentDefense === 1) {
      //opponent takes 2 damage
      health -= 2;
    }
  }

  return health;
}

export default BattleButtonContainer;
