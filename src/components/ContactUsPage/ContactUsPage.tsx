import EndBlock from "../EndBlock";
import HeadLiner from "../HeadLiner";
import NavBar from "../NavBar";
import { useEffect, useState } from "react";

interface Props {
  language: string;
}
const ContactUsPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    contact_us_data: any;
    contact_us: any;
    locate_us: any;
    locate_us_data: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/ContactUsData.tsx`
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
      <div className="sticky-top">
        <HeadLiner></HeadLiner>
        <NavBar Active={["", "", "", "", ""]} language={language} />
      </div>
      <div className="text-padding">
        <h1 style={{ color: "var(--primary-color)" }}>
          {data?.contact_us.title}
        </h1>
        <div className="flex-container" style={{ justifyContent: "center" }}>
          {data?.contact_us_data.map((contact: any) => (
            <a href={contact.link} className="contact-us-card">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div className="contact-us-content">
                  <h5 className="card-title">{contact.title}</h5>
                  <p className="card-text">{contact.content}</p>
                </div>
                <img
                  className={"contact-us-icon"}
                  src={contact.icon}
                  alt={contact.title}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-padding">
        <h1 style={{ color: "var(--primary-color)" }}>
          {data?.locate_us.title}
        </h1>
        <div className="flex-container" style={{ justifyContent: "center" }}>
          {data?.locate_us_data.map((contact: any) => (
            <a href={contact.link} className="locate-us-card">
              <h5 className="card-title">{contact.title}</h5>
              <p className="card-text">{contact.content}</p>
            </a>
          ))}
        </div>
      </div>
      <EndBlock language={language} />
    </div>
  );
};

export default ContactUsPage;
