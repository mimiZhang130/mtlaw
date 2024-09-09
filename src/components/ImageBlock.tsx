import Image from "./Image";
import ImageTextBox from "./ImageTextBox";

interface Props {
  image: string;
  title: string;
  text: string;
  color: string;
  textColor: string;
}
const ImageBlock = ({ image, title, text, color, textColor }: Props) => {
  return (
    <div>
      <div className="fluid-container" style={{ position: "relative" }}>
        <div className={"underline-blue"}>
          <div>
            <Image
              image={image}
              border={false}
              height={"400px"}
              color={color}
            />
          </div>
        </div>
        <ImageTextBox title={title} text={text} textColor={textColor} />
      </div>
    </div>
  );
};

export default ImageBlock;
