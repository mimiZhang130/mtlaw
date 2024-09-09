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
    contact_us_top: any;
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
      <HeadLiner />
      <NavBar Active={["", "", "", "", ""]} language={language} />
      <div className="text-padding">
        <h5>{data?.contact_us_top.title}</h5>
        <h1>{data?.contact_us_top.content}</h1>
        <div className="flex-container">
          {data?.contact_us_data.map((contact: any) => (
            <div className="card" style={{ width: "30rem", marginTop: "2rem" }}>
              <div className="card-body">
                <h5 className="card-title">{contact.title}</h5>
                <p className="card-text">{contact.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EndBlock language={language} />
    </div>
  );
};

export default ContactUsPage;
