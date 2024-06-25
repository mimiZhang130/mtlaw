interface Props {
  title: string;
  text: string;
}
const InfoBox4 = ({ title, text }: Props) => {
  return (
    <div>
      <div className="fact-box">
        <h1 style={{ fontSize: "6rem", textAlign: "center" }}>{title}</h1>
        <h2 style={{ fontSize: "2rem", textAlign: "center" }}>{text}</h2>
      </div>
    </div>
  );
};

export default InfoBox4;
