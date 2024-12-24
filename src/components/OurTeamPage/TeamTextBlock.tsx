import PhotoCard from "../PhotoCard";
import { useState, useEffect } from "react";
interface Props {
  language: string;
}
const TeamTextBlock = ({ language }: Props) => {
  const [data, setData] = useState<{
    people: any;
    partners_and_principal_text: string;
    our_team_text: string;
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
      <h1
        className="center center-space text-padding"
        style={{ paddingBottom: "1rem" }}
      >
        {language === "en" ? "Partners and Principal CPA" : "我们的团队"}
      </h1>
      <div className="center">
        <h5>{data?.partners_and_principal_text}</h5>
      </div>
      <div
        className="flex-container"
        style={{
          margin: "0% 5%",
          justifyContent: "center",
        }}
      >
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
      <h1
        className="center center-space text-padding"
        style={{ paddingBottom: "1rem" }}
      >
        {language === "en" ? "Our Team" : "我们的团队"}
      </h1>
      <div className="center">
        <h5>{data?.our_team_text}</h5>
      </div>
      <div className="center" style={{ marginTop: "2rem" }}>
        <img
          src="/assets/OurTeamPage/MTLawTeam.jpeg"
          style={{ height: "30rem" }}
        ></img>
      </div>
    </div>
  );
};

export default TeamTextBlock;
