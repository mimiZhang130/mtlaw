interface Props {
  text: string;
  width: string;
  backgroundColor: string;
}
const InfoBox5 = ({ text, width, backgroundColor }: Props) => {
  return (
    <div
      className="small-text-padding"
      style={{
        width: width,
        height: "6rem",
        backgroundColor: backgroundColor,
        opacity: "0.8",
        margin: "1rem 1rem 1rem 0rem",
      }}
    >
      <h5>{text}</h5>
    </div>
  );
};

export default InfoBox5;
