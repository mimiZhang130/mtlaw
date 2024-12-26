import Image from "../Image";
import FormattedText from "../FormattedText";

interface Props {
  title: string;
  content: string;
  image: string;
}

const Careers = ({ title, content, image }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="right-flex-box text-padding">
          <h1 className="center center-space">{title}</h1>
          <FormattedText content={content} content_id="careers" />
        </div>
        <div className="left-flex-box">
          <Image
            image={image}
            border={false}
            height={"450px"}
            color="blue"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Careers;
