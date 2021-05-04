import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InitialComponent from "@components/InitialComponent";
import "@styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <InitialComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
