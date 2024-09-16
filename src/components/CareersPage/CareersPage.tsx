import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock";
import IntroTextBlock from "../IntroTextBlock";
import { useState, useEffect } from "react";
import CareersTextBlock1 from "./CareersTextBlock1";
import HeadLiner from "../HeadLiner";
import EndBlock from "../EndBlock";
interface Props {
  language: string;
}
const CareersPage = ({ language }: Props) => {
  const [data, setData] = useState<{
    careers_introduction: any;
    image_block?: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/CareersData.tsx`
        );
        setData(module);
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);

  console.log(data?.careers_introduction.title);
  return (
    <div>
      <div className="sticky-top">
        <HeadLiner></HeadLiner>
        <NavBar Active={["", "", "", "", " active"]} language={language} />
      </div>

      <ImageBlock
        image={data?.image_block.image}
        title={data?.image_block.title}
        text={data?.image_block.text}
        color={data?.image_block.color}
      />
      <div>
        <IntroTextBlock
          title={data?.careers_introduction.title}
          content={data?.careers_introduction.content}
          image={data?.careers_introduction.image}
          backgroundColor={data?.careers_introduction.color}
        />
      </div>
      <div
        style={{
          backgroundColor: "#00467f",
          paddingBottom: "3%",
          color: "white",
        }}
      >
        <h1 className="center center-space text-padding">
          {language === "en" ? "Jobs" : "工作机会"}
        </h1>
        <CareersTextBlock1 language={language} />
      </div>
      <EndBlock language={language} />
    </div>
  );
};

export default CareersPage;
