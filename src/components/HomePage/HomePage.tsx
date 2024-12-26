import HomePageIntroBlock from "./HomePageIntroBlock";
import OurTeam from "./OurTeam";
import ImageBlock from "../ImageBlock";
import Practices from "./Practices";
import NavBar from "../NavBar";
import OurMission from "./OurMission";
import EndBlock from "../EndBlock";
import HeadLiner from "../HeadLiner";
import { useState } from "react";
import { useEffect } from "react";
import Careers from "./Careers";
import ContactUsPart from "./ContactUsPart";
interface Props {
  language: string;
}
const HomePage = ({ language }: Props) => {
  const [data, setData] = useState<{
    locations: any;
    home_introduction: any;
    image_block?: any;
    our_team_introduction: any;
    careers: any;
    contact_us: any;
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
        <div className="sticky-top">
          <HeadLiner />
          <NavBar Active={["active", "", "", "", ""]} language={language} />
        </div>

        <ImageBlock
          image={data?.image_block.image}
          title={data?.image_block.title}
          text={data?.image_block.text}
          color={data?.image_block.color}
        />

        <OurMission language={language} />

        <div>
          <HomePageIntroBlock
            language={language}
            title={data?.home_introduction.title}
            content={data?.home_introduction.content}
            image={data?.home_introduction.image}
          />
        </div>

        <Practices language={language} />

        <div>
          <OurTeam
            title={data?.our_team_introduction.title}
            content={data?.our_team_introduction.content}
            image={data?.our_team_introduction.image}
            backgroundColor={data?.our_team_introduction.color}
            language={language}
          />
        </div>

        {/* <div style={{ padding: "2rem" }}>
          <CaseStudies language={language} />
        </div> */}
        <Careers
          title={data?.careers.title}
          content={data?.careers.content}
          image={data?.careers.image}
          language={language}
        />
        <ContactUsPart
          title={data?.contact_us.title}
          content={data?.contact_us.content}
          image={data?.contact_us.image}
          language={language}
        />

        <EndBlock language={language} />
      </div>
    </div>
  );
};

export default HomePage;
