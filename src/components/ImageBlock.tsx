import Image from "./Image";
import ImageTextBox from "./ImageTextBox";

interface Props {
  image: string;
  title: string;
  text: string;
  color: string;
}
const ImageBlock = ({ image, title, text, color }: Props) => {
  return (
    <div>
      <div
        className={"fluid-container " + "underline-" + color}
        style={{ position: "relative" }}
      >
        <div>
          <div>
            <Image
              image={image}
              border={false}
              height={"400px"}
              color={color}
            />
            <ImageTextBox title={title} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
