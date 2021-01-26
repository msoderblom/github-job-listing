import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailPage from "./pages/JobDetailPage";

function App() {
  return (
    <div>
      <h1 style={{ color: "#fcfbfc", textAlign: "center" }}>GitHub Jobs</h1>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/jobs/:id" component={JobDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
