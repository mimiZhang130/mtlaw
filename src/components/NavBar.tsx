import { useState } from "react";
import { useEffect } from "react";

interface Props {
  Active: string[];
  language: string;
}

const NavBar = ({ Active, language }: Props) => {
  const [LawData, setLawData] = useState<{
    law_data: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const law_module = await import(
          `../assets/${language}_data/LawData.tsx`
        );
        setLawData(law_module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div>
      {/*NavBar*/}
      <nav
        className="navbar navbar-expand-lg white-background"
        style={{ borderBottom: "solid 2px var(--primary-color)" }}
      >
        <div className="container-fluid">
          {/*MTLaw Logo */}
          <a className="navbar-brand" href="/">
            <img src="/assets/logo.png" alt="Logo" width="350" height="100" />
          </a>
          {/*NavBar Links */}
          {/* NavBar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* NavBar Items */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul
              className="navbar-nav nav-underline"
              style={{ paddingRight: "2rem" }}
            >
              {/* Home */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[0]}
                  aria-current="page"
                  href={"/" + language}
                >
                  {language === "en" ? "Home" : "主页"}
                </a>
              </li>
              {/* About Use */}
              <li className="nav-item">
                <a
                  className={"nav-link" + Active[1]}
                  href={"/" + language + "/aboutus"}
                >
                  {language === "en" ? "About Us" : "关于我们"}
                </a>
              </li>
              {/* Our Team */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[2]}
                  href={"/" + language + "/ourteam"}
                >
                  {language === "en" ? "Our Team" : "我们的团队"}
                </a>
              </li>
              {/* Legal Services */}
              <li className="nav-item dropdown">
                <a
                  className={"nav-link dropdown-toggle " + Active[3]}
                  href={"/" + language + "/legalservices"}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {language === "en" ? "Legal Services" : "法律服务"}
                </a>
                {/* Dropdown Menu */}
                <ul className="dropdown-menu">
                  {LawData?.law_data.map((law: any) => (
                    <li>
                      <a
                        className="dropdown-item custom-nav-bar"
                        href={"/" + language + "/legalservices/" + law.title}
                      >
                        {law.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              {/* Careers */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[4]}
                  href={"/" + language + "/careers"}
                >
                  {language === "en" ? "Careers" : "职业"}
                </a>
              </li>
              {/* Payments */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[5]}
                  href={"/" + language + "/payment"}
                >
                  {language === "en" ? "Payment" : "职业"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
