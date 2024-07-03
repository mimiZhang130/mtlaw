import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock1";
import IntroTextBlock from "../IntroTextBlock";
import { useState, useEffect } from "react";
import TeamTextBlock from "./TeamTextBlock";
import EndBlock from "../EndBlock";
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
      <div
        className="flex-container"
        style={{
          justifyContent: "flex-end",
          backgroundColor: "#006D77",
        }}
      >
        <a href="/en/ourteam" style={{ padding: ".5% 2%", color: "white" }}>
          English
        </a>
        <a href="/cn/ourteam" style={{ padding: ".5% 2%", color: "white" }}>
          简体中文
        </a>
      </div>
      <NavBar Active={["", "", "active", "", ""]} language={language} />
      <ImageBlock
        image={data?.image_block.image}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={data?.image_block.color}
      />
      <IntroTextBlock
        title={data?.our_team_introduction.title}
        content={data?.our_team_introduction.content}
        image={data?.our_team_introduction.image}
        backgroundColor={data?.our_team_introduction.color}
      />
      <TeamTextBlock language={language} />
      <EndBlock language={language} />
    </div>
  );
};

export default OurTeamPage;
