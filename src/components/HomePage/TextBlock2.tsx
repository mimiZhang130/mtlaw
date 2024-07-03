import InfoBox5 from "../InfoBox5";
import { useEffect, useState } from "react";
interface Props {
  language: string;
}
const TextBlock2 = ({ language }: Props) => {
  const [data, setData] = useState<{
    case_studies: any;
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
    <div className="container">
      {language === "en" ? <h1>Case Studies</h1> : <h1>成功案例</h1>}
      <br></br>
      <div className="flex-container">
        {data?.case_studies.map((case_study: any) => {
          return <InfoBox5 text={case_study.text} backgroundColor="#FFDDD2" />;
        })}
      </div>
    </div>
  );
};

export default TextBlock2;
