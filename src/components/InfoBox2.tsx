interface Props {
  title: string;
  text: string;
}
const InfoBox2 = ({ title, text }: Props) => {
  return (
    <div className="overlay background-fill">
      <h3 className="image-text">{title}</h3>
      <h2 className="image-text">
        <strong>{text}</strong>
      </h2>
    </div>
  );
};

export default InfoBox2;
