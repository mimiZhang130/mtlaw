import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import OurTeamPage from "./components/OurTeamPage/OurTeamPage";
import TeamSubPage from "./components/OurTeamPage/TeamSubPage";
import LawPage from "./components/LawPages/LawPage";
import LawSubPage from "./components/LawPages/LawSubPage";
import CareersPage from "./components/CareersPage/CareersPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import { useState, useEffect } from "react";
interface Props {
  language: string;
}
const Website = ({ language }: Props) => {
  const [LawData, setLawData] = useState<{
    law_data: any;
  } | null>(null);
  const [PeopleInfo, setPeopleInfo] = useState<{
    people_info: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const law_module = await import(
          `./assets/${language}_data/LawData.tsx`
        );
        const people_module = await import(
          `./assets/${language}_data/OurTeamData.tsx`
        );
        setLawData(law_module);
        setPeopleInfo(people_module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path={"/" + language}
              render={() => <HomePage language={language} />}
            />
            <Route
              path={"/" + language + "/aboutus"}
              render={() => <AboutUsPage language={language} />}
            />
            <Route
              path={"/" + language + "/ourteam"}
              render={() => <OurTeamPage language={language} />}
            />
            {/* Our Team Subpages */}
            {PeopleInfo?.people_info.map((people: any) => (
              <Route
                path={"/" + language + "/" + people.name}
                render={() => (
                  <div>
                    <div
                      className="flex-container"
                      style={{
                        justifyContent: "flex-end",
                        backgroundColor: "#006D77",
                      }}
                    >
                      <a
                        href="/en"
                        style={{ padding: ".5% 2%", color: "white" }}
                      >
                        English
                      </a>
                      <a
                        href="/cn"
                        style={{ padding: ".5% 2%", color: "white" }}
                      >
                        简体中文
                      </a>
                    </div>
                    <TeamSubPage
                      name={people.name}
                      info={people.info}
                      language={language}
                    />
                  </div>
                )}
              />
            ))}
            <Route path={"/" + language + "/legalservices"}>
              {LawData?.law_data.map((law: any) => (
                <Route
                  key={law.title}
                  path={"/" + language + "/legalservices/" + law.title}
                  render={() => (
                    <div>
                      <div
                        className="flex-container"
                        style={{
                          justifyContent: "flex-end",
                          backgroundColor: "#006D77",
                        }}
                      >
                        <a
                          href="/en"
                          style={{ padding: ".5% 2%", color: "white" }}
                        >
                          English
                        </a>
                        <a
                          href="/cn"
                          style={{ padding: ".5% 2%", color: "white" }}
                        >
                          简体中文
                        </a>
                      </div>
                      <LawPage
                        image_block={law.image_block}
                        introduction={law.introduction}
                        linked_pages={law.linked_pages}
                        subpages={law.subpages}
                        title={law.title}
                        language={language}
                      />
                    </div>
                  )}
                />
              ))}
            </Route>
            {/*Legal Services Subpages*/}
            {LawData?.law_data.map((law: any) => (
              <Route path={"/" + language + "/" + law.title}>
                {law.link_info &&
                  law.link_info.map((item: any) => (
                    <Route
                      key={item.value}
                      path={"/" + language + "/" + law.title + "/" + item.value}
                      render={() => (
                        <div>
                          <div
                            className="flex-container"
                            style={{
                              justifyContent: "flex-end",
                              backgroundColor: "#006D77",
                            }}
                          >
                            <a
                              href="/en"
                              style={{ padding: ".5% 2%", color: "white" }}
                            >
                              English
                            </a>
                            <a
                              href="/cn"
                              style={{ padding: ".5% 2%", color: "white" }}
                            >
                              简体中文
                            </a>
                          </div>
                          <LawSubPage
                            image_block={law.image_block}
                            item={item}
                            language={language}
                          />
                        </div>
                      )}
                    />
                  ))}
              </Route>
            ))}
            <Route
              path={"/" + language + "/careers"}
              render={() => <CareersPage language={language} />}
            />
            <Route
              path={"/" + language + "/contactus"}
              render={() => <ContactUsPage language={language} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Website;
