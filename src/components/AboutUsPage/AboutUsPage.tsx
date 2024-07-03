import IntroTextBlock from "../IntroTextBlock";
import AUTextBlock2 from "./AUTextBlock2";
import NavBar from "../NavBar";
import ImageBlock from "../ImageBlock1";
import EndBlock from "../EndBlock";
import { useEffect, useState } from "react";
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
      <div
        className="flex-container"
        style={{
          justifyContent: "flex-end",
          backgroundColor: "#006D77",
        }}
      >
        <a href="/en/aboutus" style={{ padding: ".5% 2%", color: "white" }}>
          English
        </a>
        <a href="/cn/aboutus" style={{ padding: ".5% 2%", color: "white" }}>
          简体中文
        </a>
      </div>
      <NavBar Active={["", " active", "", "", ""]} language={language} />

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

      <AUTextBlock2 language={language} />
      <EndBlock language={language} />
    </div>
  );
};

export default AboutUsPage;
