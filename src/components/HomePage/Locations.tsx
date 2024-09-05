import Image from "../Image";
import { useEffect, useState } from "react";
interface Props {
  image: string;
  title: string;
  language: string;
}

const ImageBlock2 = ({ image, title, language }: Props) => {
  const [data, setData] = useState<{
    location_data: any;
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
      <div className="fluid-container">
        <Image image={image} border={false} height={"auto"} color={"blue"} />
      </div>
      <div className="left-block-text">
        <h1>{title}</h1>
        <div className="flex-container">
          {data?.location_data.map(
            (location: any) =>
              location.id <= 2 && (
                <div style={{ width: "15rem", margin: "3rem 1rem 0rem 1rem" }}>
                  <div
                    className="card-body"
                    style={{
                      border: "1px solid white",
                      height: "8rem",
                      padding: "1rem",
                      backgroundColor: "#00467f",
                    }}
                  >
                    <h5 className="card-title">{location.title}</h5>
                    <p className="card-text">{location.content}</p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="flex-container">
          {data?.location_data.map(
            (location: any) =>
              location.id > 2 && (
                <div style={{ width: "15rem", margin: "3rem 1rem 0rem 1rem" }}>
                  <div
                    className="card-body"
                    style={{
                      border: "1px solid white",
                      height: "8rem",
                      padding: "1rem",
                      backgroundColor: "#00467f",
                    }}
                  >
                    <h5 className="card-title">{location.title}</h5>
                    <p className="card-text">{location.content}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageBlock2;
