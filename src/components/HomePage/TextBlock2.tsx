import InfoBox5 from "../InfoBox5";
import { case_studies } from "../../assets/data/HomePageData";
const TextBlock2 = () => {
  return (
    <div className="container">
      <h1>Case Studies</h1>
      <br></br>
      {case_studies.map((case_study) => {
        return (
          <InfoBox5
            text={case_study.text}
            width="80%"
            backgroundColor="yellow"
          />
        );
      })}
    </div>
  );
};

export default TextBlock2;
