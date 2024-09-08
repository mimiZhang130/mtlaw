import HomePageIntroBlock from "./HomePageIntroBlock";
import OurTeam from "./OurTeam";
import ImageBlock from "../ImageBlock";
import Practices from "./Practices";
import CaseStudies from "./CaseStudies";
import Locations from "./Locations";
import NavBar from "../NavBar";
import OurMission from "./OurMission";
import EndBlock from "../EndBlock";
import HeadLiner from "../HeadLiner";
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
      <HeadLiner />
      <div>
        <NavBar Active={["active", "", "", "", ""]} language={language} />

        <ImageBlock
          image={data?.image_block.image}
          title={data?.image_block.title}
          text={data?.image_block.text}
          color={data?.image_block.color}
          textColor={data?.image_block.textColor}
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
            <Practices language={language} />
          </div>
        </div>

        <div style={{ padding: "2rem" }}>
          <CaseStudies language={language} />
        </div>
        <div style={{ position: "relative" }}>
          <Locations
            image={data?.locations.image}
            title={data?.locations.title}
            language={language}
          />
        </div>
        <OurMission language={language} />

        <div>
          <OurTeam
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
