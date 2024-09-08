interface Props {
  title: string;
  subgroups: string[];
  language: string;
}
const PracticesBox = ({ title, subgroups, language }: Props) => {
  return (
    <div className="center info-box-1">
      <div className="top-card flip">
        <h4>{title}</h4>
        <ul>
          {subgroups.map((subgroup, index) => (
            <li key={index}>{subgroup}</li>
          ))}
        </ul>
        <a href={"/" + language + "/legalservices/" + title}>
          {language === "en" ? (
            <button
              style={{
                padding: ".2rem 1rem",
                borderColor: "#00467f",
                color: "#00467f",
                backgroundColor: "white",
              }}
            >
              Learn More
            </button>
          ) : (
            <button
              style={{
                padding: ".2rem 1rem",
                borderColor: "#00467f",
                color: "#00467f",
                backgroundColor: "white",
              }}
            >
              读更多
            </button>
          )}
        </a>
      </div>
      <div
        className="bottom-card flip-back flip hide-on-small-screen"
        style={{ position: "relative", textAlign: "center" }}
      >
        <h3 style={{ paddingBottom: ".5rem" }}>{title}</h3>
        <img src="/assets/HomePage/PracticesIcons/immigration.png"></img>
        <div
          className="center"
          style={{ position: "absolute", bottom: "15px", left: "47%" }}
        >
          <img className="image-color-white" src="/assets/uparrow.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default PracticesBox;
