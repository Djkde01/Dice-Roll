import React from "react";
import Button from "./Button";

import "@styles/components/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Button type="button" id="roll-button">
        Roll Dice
      </Button>
      <Button type="button">Next Turn</Button>
      <a href="/">
        <Button type="button">Add/Remove Dices</Button>
      </a>
    </div>
  );
};

export default NavBar;
