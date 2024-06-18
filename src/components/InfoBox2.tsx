interface Props {
  title: string;
  text: string;
}
const InfoBox2 = ({ title, text }: Props) => {
  return (
    <div
      className="card overlay"
      style={{ width: "18rem", position: "absolute", opacity: ".50" }}
    >
      <div className="card-body">
        <div className="card-title">{title}</div>
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default InfoBox2;
