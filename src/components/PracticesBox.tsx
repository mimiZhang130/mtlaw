interface Props {
  title: string;
  language: string;
  icon: string;
}
const PracticesBox = ({ title, language, icon }: Props) => {
  return (
    <div className="practice-box">
      <img
        className="image-color-white"
        style={{ width: "64px", height: "64px" }}
        src={icon}
      ></img>
      <div style={{ padding: "1rem 1rem 0 1rem" }}>
        <a href={"/" + language + "/legalservices/" + title}>
          <h4>{title}</h4>
        </a>
      </div>
    </div>
  );
};

export default PracticesBox;
