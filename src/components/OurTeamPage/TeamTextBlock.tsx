import PhotoCard from "../PhotoCard";
import { useState, useEffect } from "react";
interface Props {
  language: string;
}
const TeamTextBlock = ({ language }: Props) => {
  const [data, setData] = useState<{
    people: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/OurTeamData.tsx`
        );
        setData(module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <h1 className="center center-space text-padding">
        {language === "en" ? "Our Team" : "我们的团队"}
      </h1>
      <div className="flex-container" style={{ margin: "0% 5%" }}>
        {data?.people.map((person: any) => (
          <div>
            <PhotoCard
              name={person.name}
              photo={person.image}
              language={language}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTextBlock;
