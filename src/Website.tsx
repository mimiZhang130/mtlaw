import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import OurTeamPage from "./components/OurTeamPage/OurTeamPage";
import TeamSubPage from "./components/OurTeamPage/TeamSubPage";
import LawPage from "./components/LawPages/LawPage";
import LawSubPage from "./components/LawPages/LawSubPage";
import CareersPage from "./components/CareersPage/CareersPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import HeadLiner from "./components/HeadLiner";
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
                    <HeadLiner />
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
                      <HeadLiner />
                      <LawPage
                        image_block={law.image_block}
                        introduction={law.introduction}
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
                          <HeadLiner />
                          <LawSubPage
                            image_block={law.image_block}
                            item={item}
                            language={language}
                            subpage_image={law.subpage_image}
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
