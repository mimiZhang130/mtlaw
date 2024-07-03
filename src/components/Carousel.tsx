import InfoBox4 from "./InfoBox4";
import { useState, useEffect } from "react";
interface Props {
  language: string;
}
const Carousel = ({ language }: Props) => {
  const [data, setData] = useState<{
    facts: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Dynamically import the JSON file based on the language prop
        const module = await import(
          `../../assets/${language}_data/HomePageData.tsx`
        );
        setData(module); // Pass the module's default value to setData
      } catch (error) {
        console.error("Error loading JSON file:", error);
      }
    };
    loadData();
  }, [language]);
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={{ marginBottom: "1vw" }}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ width: "3vw" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ width: "3vw" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ width: "3vw" }}
          ></button>
        </div>
        <div className="carousel-inner slide-container">
          {data?.facts.map((fact: any) => (
            <div className="carousel-item active" data-bs-interval="1500">
              <InfoBox4 title={fact.big_text} text={fact.small_text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
