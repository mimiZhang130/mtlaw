interface Props {
  title: string;
  subgroups: string[];
  language: string;
}
const InfoBox = ({ title, subgroups, language }: Props) => {
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
            <button className="btn btn-light">Learn More</button>
          ) : (
            <button className="btn btn-light">读更多</button>
          )}
        </a>
      </div>
    </div>
  );
};

export default InfoBox;
