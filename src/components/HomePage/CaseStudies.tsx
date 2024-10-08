import CaseStudy from "../CaseStudy";
import { useEffect, useState } from "react";
interface Props {
  language: string;
}
const CaseStudies = ({ language }: Props) => {
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
      {data?.case_studies.map((case_study: any) => {
        return <CaseStudy text={case_study.text} backgroundColor="lightgray" />;
      })}
    </div>
  );
};

export default CaseStudies;
