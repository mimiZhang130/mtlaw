import Image from "../Image";
import FormattedText from "../FormattedText";
import LearnMoreButton from "../LearnMoreButton";

interface Props {
  title: string;
  content: string;
  image: string;
  language: string;
}

const Careers = ({ language, title, content, image }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="right-flex-box text-padding">
          <h1 className="center center-space">{title}</h1>
          <FormattedText content={content} content_id="careers" />
          <div className="learn-more-button">
            <LearnMoreButton
              language={language}
              backgroundColor={"white"}
              color={"black"}
              page={"careers"}
            />
          </div>
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
