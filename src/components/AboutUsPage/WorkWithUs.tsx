import FormattedText from "../FormattedText";
import Image from "../Image";
import { useEffect, useState } from "react";
interface Props {
  language: string;
}

const WorkWithUs = ({ language }: Props) => {
  const [data, setData] = useState<{
    work_with_us: any;
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
        className="right-flex-box text-padding"
        style={{ backgroundColor: "#00467f", color: "white" }}
      >
        <h1 className="center-space">{data?.work_with_us.title}</h1>
        <FormattedText
          content={data?.work_with_us.content}
          content_id="workwithus"
        />
        <br></br>
      </div>
      <div className="left-flex-box">
        <Image
          image={data?.work_with_us.image}
          border={false}
          height={"400px"}
          color={"blue"}
        ></Image>
      </div>
    </div>
  );
};

export default WorkWithUs;
