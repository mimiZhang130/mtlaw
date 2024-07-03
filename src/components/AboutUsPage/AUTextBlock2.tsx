import Image from "../Image";
import { useEffect, useState } from "react";
interface Props {
  language: string;
}

const AUTextBlock2 = ({ language }: Props) => {
  const [data, setData] = useState<{
    about_us_why_us: any;
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
    <div className="flex-container">
      <div
        className="left-flex-box text-padding"
        style={{ backgroundColor: "#FFDDD2" }}
      >
        <h1>{data?.about_us_why_us.title}</h1>
        <br></br>
        <p>{data?.about_us_why_us.content}</p>
      </div>
      <div className="right-flex-box" style={{ margin: "2.5%" }}>
        <Image
          image={"/assets/aboutus3.jpg"}
          border={false}
          height={"400px"}
          color={"#FFDDD2"}
        ></Image>
      </div>
    </div>
  );
};

export default AUTextBlock2;
