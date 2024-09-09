import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock";
import { useState, useEffect } from "react";
import TeamIntroBlock from "./TeamIntroBlock";
import EndBlock from "../EndBlock";

interface Props {
  name: string;
  info: any;
  language: string;
}
const TeamSubPage = ({ name, info, language }: Props) => {
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
      <NavBar Active={["", "", "active", "", ""]} language={language} />
      <ImageBlock
        image={"/assets/ourteam3.jpg"}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={"blue"}
        textColor={data?.image_block.textColor}
      />
      <TeamIntroBlock
        title={name}
        content={info}
        image={info.image}
        language={language}
      />
      <EndBlock language={language} />
    </div>
  );
};

export default TeamSubPage;
