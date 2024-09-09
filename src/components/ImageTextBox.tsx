interface Props {
  title: string;
  text: string;
  textColor: string;
}
const ImageTextBox = ({ title, text, textColor }: Props) => {
  return (
    <div className="overlay image-text-background">
      <h2 className="image-text" style={{ color: textColor }}>
        {title}
      </h2>
      <h1 className="image-text" style={{ color: textColor }}>
        <strong>{text}</strong>
      </h1>
    </div>
  );
};

export default ImageTextBox;
