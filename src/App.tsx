import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Website from "./Website";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/en" component={() => <Website language="en" />} />
        <Route path="/cn" component={() => <Website language="cn" />} />
      </Switch>
    </Router>
  );
};

export default App;
