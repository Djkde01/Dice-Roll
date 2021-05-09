import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dice from "@components/Dice";
import "@styles/App.css";
import Menu from "@pages/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/game">
          <Dice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
