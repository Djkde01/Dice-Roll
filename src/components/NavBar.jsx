import React from "react";
import Button from "./Button";

import "@styles/components/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Button id="roll-button">Roll Dice</Button>
      <Button>Add/Remove Dices</Button>
      <Button>Next Turn</Button>
    </div>
  );
};

export default NavBar;
