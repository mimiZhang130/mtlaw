interface Props {
  text: string;
  backgroundColor: string;
  color?: string;
}
const InfoBox5 = ({ text, backgroundColor, color = "white" }: Props) => {
  return (
    <div
      className="small-text-padding"
      style={{
        backgroundColor: backgroundColor,
        margin: "1rem 1rem 1rem 0rem",
        color: color,
      }}
    >
      <h5>{text}</h5>
    </div>
  );
};

export default InfoBox5;
