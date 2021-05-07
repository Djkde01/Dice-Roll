import React, { useEffect } from "react";

import "@styles/components/Dice.css";
import Dot from "./Dot";

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach((die) => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Dice = (props) => {
  const { rowLimit = 6 } = props;
  /*{Array.from({ length: rowLimit }, (_, k) => (
    <tr key={k}>
      <td>{k + 1}</td>
    </tr>
  ))}
  */
  useEffect(() => {
    document.getElementById("roll-button").addEventListener("click", rollDice);
  }, []);
  return (
    <div>
      <div className="dice">
        <ol className="die-list even-roll" data-roll="1" id="die-1">
          <li className="die-item" data-side="1">
            <Dot />
          </li>
          <li className="die-item" data-side="2">
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="3">
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="4">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="5">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="6">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
        </ol>
        <ol className="die-list odd-roll" data-roll="1" id="die-2">
          <li className="die-item" data-side="1">
            <Dot />
          </li>
          <li className="die-item" data-side="2">
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="3">
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="4">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="5">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
          <li className="die-item" data-side="6">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </li>
        </ol>
      </div>
      <button type="button" id="roll-button">
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
