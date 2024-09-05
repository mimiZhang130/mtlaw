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
    <div className="container">
      <h1 className="center center-space" style={{ color: "white" }}>
        {data?.practices.title}
      </h1>
      {/*<p className="paragraph-text">{text_block1.content}</p> */}
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        {data?.practices.law_types.map(
          (law_type: any) =>
            law_type.id <= 2 && (
              <PracticesBox
                key={law_type.id}
                title={law_type.title}
                subgroups={law_type.subgroups}
                language={language}
              />
            )
        )}
      </div>
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        {data?.practices.law_types.map(
          (law_type: any) =>
            law_type.id > 2 && (
              <PracticesBox
                key={law_type.id}
                title={law_type.title}
                subgroups={law_type.subgroups}
                language={language}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Practices;
