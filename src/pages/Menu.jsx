import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "@styles/Menu.css";

const Menu = () => {
  const [dices, onChangeDices] = useState(1);
  const [players, onChangePlayers] = useState(1);

  let history = useHistory();

  const setValues = (e) => {
    e.preventDefault();
    const values = {
      dices: e.target.diceAmount.value,
      players: e.target.playersAmount.value,
    };
    console.log(values);
    const json = JSON.stringify(values);
    localStorage.setItem("gameInfo", json);
    history.push("/game");
  };

  return (
    <form onSubmit={setValues}>
      <h1>
        <span role="img" aria-label="dice">
          🎲
        </span>
        {" Dices game "}
        <span role="img" aria-label="dice">
          🎲
        </span>
      </h1>
      <div className="slider-parent">
        <div>
          <label>Dices Amount</label>
          <input
            type="range"
            min="1"
            max="6"
            value={dices}
            name="diceAmount"
            onChange={({ target: { value: radius } }) => {
              onChangeDices(radius);
            }}
          />
        </div>
        <div>
          <div className="bubble">{dices}</div>
          <div className="pointer"></div>
        </div>
      </div>
      <div className="slider-parent">
        <div>
          <label>Players Amount</label>
          <input
            type="range"
            min="1"
            max="6"
            value={players}
            name="playersAmount"
            onChange={({ target: { value: radius } }) => {
              onChangePlayers(radius);
            }}
          />
        </div>
        <div>
          <div className="bubble">{players}</div>
          <div className="pointer"></div>
        </div>
      </div>
      <input type="Submit" defaultValue="Play" className="submit-form" />
    </form>
  );
};

export default Menu;
