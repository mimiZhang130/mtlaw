import FormattedText from "./FormattedText";
import Image from "./Image";

interface Props {
  title: string;
  content: any;
  image: string;
  backgroundColor: string;
}

const IntroTextBlock = ({ title, content, image, backgroundColor }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box">
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
        </div>
        <div
          className="right-flex-box text-padding"
          style={{ backgroundColor: backgroundColor, color: "#00467f" }}
        >
          <h1 className="center center-space">{title}</h1>
          {/* <div id="output"></div> */}
          <FormattedText content={content} content_id="introtextblock" />
        </div>
      </div>
    </div>
  );
};

export default IntroTextBlock;
