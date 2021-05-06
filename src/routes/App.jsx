import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dice from "@components/Dice";
import "@styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dice />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
