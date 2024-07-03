interface Props {
  text: string;
  backgroundColor: string;
  color?: string;
}
const InfoBox5 = ({ text, backgroundColor, color = "black" }: Props) => {
  return (
    <div
      className="small-text-padding"
      style={{
        backgroundColor: backgroundColor,
        opacity: "0.8",
        margin: "1rem 1rem 1rem 0rem",
        borderRadius: "10px",
        color: color,
      }}
    >
      <h5>{text}</h5>
    </div>
  );
};

export default InfoBox5;
