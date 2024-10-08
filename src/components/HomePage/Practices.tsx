import PracticesBox from "../PracticesBox.tsx";
import { useEffect, useState } from "react";

interface Props {
  language: string;
}
const Practices = ({ language }: Props) => {
  const [data, setData] = useState<{
    practices: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Dynamically import the JSON file based on the language prop
        const module = await import(
          `../../assets/${language}_data/HomePageData.tsx`
        );
        setData(module); // Pass the module's default value to setData
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div className="flex-container" style={{ flexDirection: "row-reverse" }}>
      <div
        className="left-flex-box text-padding"
        style={{ backgroundColor: "white" }}
      >
        <h1 style={{ color: "var(--accent-color)" }}>
          {language === "en" ? "Practices hahaha" : "业务范围 hahahah"}
        </h1>
      </div>
      <div className="right-flex-box">
        <div
          className="practices"
          style={{ backgroundColor: "var(--accent-color)", padding: "2rem" }}
        >
          <div className="center" style={{ flexDirection: "row" }}>
            {data?.practices.law_types.map((law_type: any) => (
              <PracticesBox
                title={law_type.title}
                language={language}
                icon={law_type.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practices;
