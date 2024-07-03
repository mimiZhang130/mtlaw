import { useEffect, useState } from "react";
interface Props {
  language: string;
}
const EndBlock = ({ language }: Props) => {
  const [data, setData] = useState<{
    links: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../assets/${language}_data/EndBlockData.tsx`
        );
        setData(module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div>
      <nav
        className="navbar"
        style={{ backgroundColor: "#EDF6F9", color: "white" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              width="350"
              height="100"
              className="d-inline-block align-text-top"
            />
          </a>
          <span className="navbar-text">
            <div className="flex-container">
              <h2
                style={{ margin: "auto 5rem", color: "black" }}
                className="center center-space"
              >
                {language === "en" ? "Get Legal Help Now" : "立即获取法律帮助"}
              </h2>

              <a href="/en/contactus">
                <button className="footer-button btn btn-lg">
                  {language === "en" ? "Contact Us" : "联系我们"}
                </button>
              </a>
            </div>
          </span>
        </div>
      </nav>
      {/* links */}
      <div
        className="flex-container"
        style={{ backgroundColor: "#EDF6F9", color: "black" }}
      >
        <div className="text-padding left-flex-box">
          <h4>
            {language === "en" ? "MTLaw Headquarters" : "MTLaw 列克星敦 HQ"}
          </h4>
          <h5>430 Bedford Street, Suite 200, Lexington, MA, USA</h5>
          <p>+1 (800) 345 1899</p>
        </div>
        <div>
          <div className="text-padding flex-container">
            {data?.links.map((link: any) => (
              <ul className="expand-width" style={{ listStyleType: "none" }}>
                <li>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <a
                        style={{ color: "black", textDecoration: "underline" }}
                        href={link.head_link.route}
                      >
                        {link.head_link.value}
                      </a>
                    </div>
                    {link.other_links.length != 0 ? (
                      <ul style={{ listStyleType: "none" }}>
                        {link.other_links.map((other_link: any) => (
                          <li>
                            <a
                              style={{ color: "black" }}
                              href={"/en/legalservices/" + other_link.link}
                            >
                              {other_link.link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndBlock;
