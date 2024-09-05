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
        className="left-flex-box text-padding"
        style={{ backgroundColor: "#00467f", color: "white" }}
      >
        <h1>{data?.work_with_us.title}</h1>
        <br></br>
        <p>{data?.work_with_us.content}</p>
        <div style={{ marginTop: "2rem" }}>
          <a href={"/" + language + "/ourteam"}>
            <button className="btn btn-light">Contact Us</button>
          </a>
        </div>
      </div>
      <div className="right-flex-box" style={{ margin: "2.5%" }}>
        <Image
          image={"/assets/AboutUsPage/WorkWithUs.jpg"}
          border={false}
          height={"400px"}
          color={"#FFDDD2"}
        ></Image>
      </div>
    </div>
  );
};

export default WorkWithUs;
