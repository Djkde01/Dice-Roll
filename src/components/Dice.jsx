import React, { useEffect } from "react";

import "@styles/components/Dice.css";
import DiceFace from "./DiceFace";

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

const Dice = () => {
  useEffect(() => {
    document.getElementById("roll-button").addEventListener("click", rollDice);
  }, []);
  return (
    <div>
      <div className="dice">
        <ol className="die-list even-roll" data-roll="1" id="die-1">
          {[...Array(6)].map((value, index) => (
            <DiceFace faceSide={index + 1} key={index} />
          ))}
        </ol>
        <ol className="die-list odd-roll" data-roll="1" id="die-2">
          {[...Array(6)].map((value, index) => (
            <DiceFace faceSide={index + 1} key={index} />
          ))}
        </ol>
      </div>
      <button type="button" id="roll-button">
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;
