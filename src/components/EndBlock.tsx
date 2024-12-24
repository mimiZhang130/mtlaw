import { useEffect, useState } from "react";
import ContactUs from "./ContactUs";
import React from "react";

interface Props {
  language: string;
}
const EndBlock = ({ language }: Props) => {
  const [data, setData] = useState<{
    links: any;
    locations: any;
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
    <div style={{ borderTop: "solid #00467f .5rem" }}>
      <nav className="navbar" style={{ backgroundColor: "white" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/logo.png"
              alt="Logo"
              width="350"
              height="100"
              className="d-inline-block align-text-top"
            />
          </a>
          <span className="navbar-text">
            <div
              className="flex-container"
              style={{ alignItems: "center", flexDirection: "column" }}
            >
              <h2
                style={{ margin: "auto 5rem", color: "#00467f" }}
                className="center center-space"
              >
                {language === "en" ? "Get Legal Help Now" : "立即获取法律帮助"}
              </h2>
              <ContactUs
                language={language}
                backgroundColor={"white"}
                color={"#00467f"}
              />
            </div>
          </span>
        </div>
      </nav>
      {/* links */}
      <div
        className="flex-container"
        style={{
          backgroundColor: "white",
          color: "#00467f",
        }}
      >
        <div style={{ padding: "4rem 0 4rem 2rem" }}>
          <h4>
            {language === "en" ? "MT Law Headquarters" : "MT Law 列克星敦 HQ"}
          </h4>
          <h5>430 Bedford Street, Suite 200, Lexington, MA, USA</h5>
          <a href="tel:+18003451899" style={{ color: "var(--primary-color)" }}>
            <p>+1 (800) 345 1899</p>
          </a>
          <div className="flex-container">
            {data?.locations.map((location: any) => (
              <a style={{ color: "var(--primary-color)" }} href={location.link}>
                {location.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            className="flex-container"
            style={{ padding: "4rem 2rem 4rem 0rem" }}
          >
            {data?.links.map((link: any) => (
              <ul
                className="expand-width"
                style={{ listStyleType: "none", padding: ".5rem" }}
              >
                <li>
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <a
                        style={{
                          color: "#00467f",
                          textDecoration: "underline",
                        }}
                        href={link.head_link.route}
                      >
                        {link.head_link.value}
                      </a>
                    </div>
                    {link.other_links.length != 0 ? (
                      <ul style={{ listStyleType: "none", padding: "0" }}>
                        {link.other_links.map((other_link: any) =>
                          language === "en" ? (
                            <li>
                              <a
                                style={{ color: "#00467f" }}
                                href={"/en/legalservices/" + other_link.link}
                              >
                                {other_link.link}
                              </a>
                            </li>
                          ) : (
                            <li>
                              <a
                                style={{ color: "#00467f" }}
                                href={"/cn/legalservices/" + other_link.link}
                              >
                                {other_link.link}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    ) : null}
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "var(--primary-color)" }}>
        <p
          className="center"
          style={{ margin: "0", padding: ".5rem", color: "white" }}
        >
          COPYRIGHT © 2024 by MT Law LLC. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default EndBlock;
