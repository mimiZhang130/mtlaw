import Carousel from "../Carousel";
import { useState, useEffect } from "react";
interface Props {
  language: string;
}
const OurMission = ({ language }: Props) => {
  const [data, setData] = useState<{
    our_mission: any;
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
    <div>
      <div className="flex-container">
        <div className="right-flex-box">
          <div className="text-padding">
            <h1 className="center-space">{data?.our_mission.title}</h1>
            <p>{data?.our_mission.content}</p>
          </div>
        </div>
        <div className="left-flex-box-2" style={{ position: "relative" }}>
          <Carousel language={language} />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
