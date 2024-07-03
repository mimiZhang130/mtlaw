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
    <div>
      <h1 className="center center-space text-padding">Our Team</h1>
      <div className="flex-container" style={{ margin: "0% 5%" }}>
        {data?.people.map((person: any) => (
          <PhotoCard
            name={person.name}
            photo={person.image}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamTextBlock;
