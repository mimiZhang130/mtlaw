import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Website from "./Website";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/en"
          render={() => <Website language="en"></Website>}
        ></Route>
        <Route
          path="/cn"
          render={() => <Website language="cn"></Website>}
        ></Route>
      </Switch>
    </Router>
  );
};

export default App;
