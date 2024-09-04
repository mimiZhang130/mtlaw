import HomePageIntroBlock from "./HomePageIntroBlock";
import HomePageTeam from "./HomePageTeam";
import ImageBlock from "../ImageBlock1";
import TextBlock1 from "./TextBlock1";
import TextBlock2 from "./TextBlock2";
import ImageBlock2 from "./ImageBlock2";
import NavBar from "../NavBar";
import TextBlock3 from "./TextBlock3";
import EndBlock from "../EndBlock";
import { useState } from "react";
import { useEffect } from "react";
interface Props {
  language: string;
}
const HomePage = ({ language }: Props) => {
  const [data, setData] = useState<{
    locations: any;
    home_introduction: any;
    image_block?: any;
    our_team_introduction: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/HomePageData.tsx`
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
      <div>
        <div
          className="flex-container"
          style={{
            justifyContent: "flex-end",
            backgroundColor: "#006D77",
          }}
        >
          <a href="/en" style={{ padding: ".5% 2%", color: "white" }}>
            English
          </a>
          <a href="/cn" style={{ padding: ".5% 2%", color: "white" }}>
            简体中文
          </a>
        </div>
        <NavBar Active={["active", "", "", "", ""]} language={language} />

        <ImageBlock
          image={data?.image_block.image}
          title={data?.image_block.title}
          text={data?.image_block.text}
          color={data?.image_block.color}
        />

        <div>
          <HomePageIntroBlock
            title={data?.home_introduction.title}
            content={data?.home_introduction.content}
            image={data?.home_introduction.image}
            backgroundColor={data?.home_introduction.color}
            button_content={data?.home_introduction.button_content}
            language={language}
          />
        </div>

        <div style={{ backgroundColor: "#00467f" }}>
          <div style={{ padding: "2rem 0rem" }}>
            <TextBlock1 language={language} />
          </div>
        </div>

        <div style={{ padding: "2rem" }}>
          <TextBlock2 language={language} />
        </div>
        <div style={{ position: "relative" }}>
          <ImageBlock2
            image={data?.locations.image}
            title={data?.locations.title}
            language={language}
          />
        </div>
        <TextBlock3 language={language} />

        <div>
          <HomePageTeam
            title={data?.our_team_introduction.title}
            content={data?.our_team_introduction.content}
            image={data?.our_team_introduction.image}
            backgroundColor={data?.our_team_introduction.color}
            button_content={data?.our_team_introduction.button_content}
            language={language}
          />
        </div>

        <EndBlock language={language} />
      </div>
    </div>
  );
};

export default HomePage;
