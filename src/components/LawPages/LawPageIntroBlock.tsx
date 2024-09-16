import FormattedText from "../FormattedText";
import { useState, useEffect } from "react";
interface Props {
  title: string;
  content: any;
  backgroundColor: string;
  language: string;
}

const LawPageIntroBlock = ({
  title,
  content,
  backgroundColor,
  language,
}: Props) => {
  const [data, setData] = useState<{
    law_data: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const module = await import(
          `../../assets/${language}_data/LawData.tsx`
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
      <div className="flex-container">
        <div
          className="left-flex-box-3 disappear-when-small"
          style={{ backgroundColor: "white" }}
        >
          <div className="law-types-btn-container">
            {data?.law_data.map((law_type: any) => (
              <a
                className="law-types-btn"
                href={"/" + language + "/legalservices/" + law_type.title}
                style={{ color: "white", textDecoration: "none" }}
              >
                <button className="law-types-btn">{law_type.title} </button>
              </a>
            ))}
          </div>
        </div>
        <div
          className="right-flex-box-3 text-padding"
          style={{ backgroundColor: backgroundColor, color: "black" }}
        >
          <h1
            className="center-space"
            style={{ color: "var(--primary-color)" }}
          >
            {title}
          </h1>
          <FormattedText content={content} content_id="introtextblock" />
        </div>
      </div>
    </div>
  );
};

export default LawPageIntroBlock;
