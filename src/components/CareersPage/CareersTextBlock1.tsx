import FormattedText from "../FormattedText.tsx";
import { useEffect, useState } from "react";
interface Props {
  language: string;
}
const CareersTextBlock1 = ({ language }: Props) => {
  const [data, setData] = useState<{
    job_openings: any;
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

  return (
    <div style={{ margin: "0 5% 5% 5%" }}>
      <div className="accordion custom-accordian" id="accordionExample">
        {data?.job_openings.length != 0 ? (
          data?.job_openings.map((job: any) => (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + job.id}
                  aria-expanded="true"
                  aria-controls={"collapse" + job.id}
                >
                  {job.job_title + " - " + job.location}
                </button>
              </h2>
              <div
                id={"collapse" + job.id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div style={{ margin: "3%" }}>
                  <FormattedText content={job.content} content_id={job.id} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="center center-space text-padding">
            {language === "en"
              ? "There are currently no jobs available. Please check back at a later time."
              : "目前没有可用的职位。请稍后再查看。"}
          </h5>
        )}
      </div>
    </div>
  );
};

export default CareersTextBlock1;
