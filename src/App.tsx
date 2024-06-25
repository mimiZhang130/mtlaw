import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import PhotoCard from "./components/PhotoCard";
import ImmigrationLaw from "./components/ImmigrationLawPage/ImmigrationLaw";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <hr style={{ borderColor: "cornflowerblue", borderWidth: "1rem" }}></hr>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/aboutus" component={AboutUsPage} />
          <Route path="/ourteam" component={PhotoCard} />
          <Route path="/legalservices">
            <Route
              path="/legalservices/immigrationlaw"
              component={ImmigrationLaw}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
