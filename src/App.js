import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/jobs/:id" component={JobDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
