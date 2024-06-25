import Image from "./Image";
import InfoBox2 from "./InfoBox2";

interface Props {
  image: string;
  title: string;
  text: string;
}
const ImageBlock = ({ image, title, text }: Props) => {
  return (
    <div>
      <div className="fluid-container">
        <Image image={image} border={true} height={"400px"} />
        <InfoBox2 title={title} text={text} />
      </div>
    </div>
  );
};

export default ImageBlock;
