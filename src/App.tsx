import NavBar from "./components/NavBar";
import Image from "./components/Image";
import TextBlock1 from "./components/HomePage/TextBlock1";
import TextBlock2 from "./components/HomePage/TextBlock2";
import InfoBox2 from "./components/InfoBox2";
import FloatButton from "./components/FloatButton";
import Form from "./components/Form";
import AUTextBlock1 from "./components/AboutUsPage/AUTextBlock1";
import AUTextBlock2 from "./components/AboutUsPage/AUTextBlock2";
import PhotoCard from "./components/PhotoCard";
import { useState } from "react";
const home = "Home";
const aboutus = "About Us";
const ourteam = "Our Team";
const legalservices = "Legal Services";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [active, setActive] = useState(["", "", "", ""]);

  return (
    <Router>
      <div>
        <hr style={{ borderColor: "cornflowerblue", borderWidth: "1rem" }}></hr>
        <NavBar
          Home={home}
          AboutUs={aboutus}
          OurTeam={ourteam}
          LegalServices={legalservices}
          Active={active}
          SetActive={setActive}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <div>
                <div className="fluid-container">
                  <Image
                    image="src/assets/images/citylights.jpg"
                    border={true}
                  />
                  <InfoBox2 title="hi" text="hello" />
                </div>
                <div style={{ margin: "2rem" }}>
                  <TextBlock1 />
                </div>
                <div
                  style={{ padding: "2rem", backgroundColor: "cornflowerblue" }}
                >
                  <TextBlock2 />
                </div>
                <div style={{ position: "relative" }}>
                  {" "}
                  {/* Set up position ancestor*/}
                  <Image image="src/assets/images/sunset.jpeg" border={false} />
                  <FloatButton top={25} left={10} />
                </div>
                <Form />
              </div>
            )}
          />
          <Route
            path="/aboutus"
            component={() => (
              <div>
                <div className="fluid-container">
                  <Image image="src/assets/images/sunset.jpeg" border={true} />
                  <InfoBox2 title="hee" text="hello" />
                </div>
                <div>
                  <div
                    style={{ float: "left", width: "20%", margin: "0rem 2rem" }}
                  >
                    <AUTextBlock1 />
                  </div>
                  <div
                    style={{
                      float: "right",
                      width: "70%",
                      marginRight: "2rem",
                      marginTop: "2rem",
                    }}
                  >
                    <AUTextBlock2 />
                  </div>
                </div>
              </div>
            )}
          />
          <Route
            path="/ourteam"
            component={() => (
              <div>
                <PhotoCard />
              </div>
            )}
          />
          <Route
            path="/legalservices"
            component={() => <div>{legalservices}</div>}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
