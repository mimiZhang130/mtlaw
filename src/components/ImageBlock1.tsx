import Image from "./Image";
import InfoBox2 from "./InfoBox2";

interface Props {
  image: string;
  title: string;
  text: string;
  color: string;
}
const ImageBlock = ({ image, title, text, color }: Props) => {
  return (
    <div>
      <div className="fluid-container" style={{ position: "relative" }}>
        <Image image={image} border={true} height={"400px"} color={color} />
        <InfoBox2 title={title} text={text} />
      </div>
    </div>
  );
};

export default ImageBlock;
