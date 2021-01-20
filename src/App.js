import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
