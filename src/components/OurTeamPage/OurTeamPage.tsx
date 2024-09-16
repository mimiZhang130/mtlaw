import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock";
// import IntroTextBlock from "../IntroTextBlock";
import { useState, useEffect } from "react";
import TeamTextBlock from "./TeamTextBlock";
import EndBlock from "../EndBlock";
import HeadLiner from "../HeadLiner";
interface Props {
  language: string;
}
const OurTeamPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    image_block: any;
    our_team_introduction: any;
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
      <div className="sticky-top">
        <HeadLiner></HeadLiner>
        <NavBar Active={["", "", "active", "", ""]} language={language} />
      </div>
      <ImageBlock
        image={data?.image_block.image}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={data?.image_block.color}
      />
      <TeamTextBlock language={language} />
      <EndBlock language={language} />
    </div>
  );
};

export default OurTeamPage;
