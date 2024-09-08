interface Props {
  text: string;
  backgroundColor: string;
  color?: string;
}
const CaseStudy = ({ text, backgroundColor, color = "black" }: Props) => {
  return (
    <div
      className="small-text-padding"
      style={{
        backgroundColor: backgroundColor,
        margin: "1rem 1rem 1rem 0rem",
        color: color,
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default CaseStudy;
