import FormattedText from "./FormattedText";

interface Props {
  title: string;
  text: string;
}
const ImageTextBox = ({ title, text }: Props) => {
  return (
    <div className="image-text-background">
      <div className="image-text">
        <h1>{title}</h1>
        <h4>
          <FormattedText
            content={text}
            content_id="title_image_text"
          ></FormattedText>
        </h4>
      </div>
    </div>
  );
};

export default ImageTextBox;
