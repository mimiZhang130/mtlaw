import IntroTextBlock from "../IntroTextBlock";
import WorkWithUs from "./WorkWithUs";
import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock";
import EndBlock from "../EndBlock";
import { useEffect, useState } from "react";
import HeadLiner from "../HeadLiner";
interface Props {
  language: string;
}
const AboutUsPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    about_us_introduction: any;
    image_block?: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/AboutUsData.tsx`
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
        <NavBar Active={["", " active", "", "", ""]} language={language} />
      </div>

      <ImageBlock
        image={data?.image_block.image}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={data?.image_block.color}
      />

      <div>
        <IntroTextBlock
          title={data?.about_us_introduction.title}
          content={data?.about_us_introduction.content}
          image={data?.about_us_introduction.image}
          backgroundColor={data?.about_us_introduction.color}
        />
      </div>

      <WorkWithUs language={language} />
      <EndBlock language={language} />
    </div>
  );
};

export default AboutUsPage;
