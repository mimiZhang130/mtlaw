interface Props {
  title: string;
  text: string;
  textColor: string;
}
const InfoBox2 = ({ title, text, textColor }: Props) => {
  return (
    <div className="overlay background-fill">
      <h2 className="image-text" style={{ color: textColor }}>
        {title}
      </h2>
      <h1 className="image-text" style={{ color: textColor }}>
        <strong>{text}</strong>
      </h1>
    </div>
  );
};

export default InfoBox2;
