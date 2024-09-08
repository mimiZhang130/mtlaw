import Image from "./Image";
import InfoBox2 from "./InfoBox2";

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
          <div style={{ opacity: ".5" }}>
            <Image
              image={image}
              border={false}
              height={"400px"}
              color={color}
            />
          </div>
        </div>
        <InfoBox2 title={title} text={text} textColor={textColor} />
      </div>
    </div>
  );
};

export default ImageBlock;
