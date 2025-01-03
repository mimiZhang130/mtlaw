import Image from "../Image";
import FormattedText from "../FormattedText";
import LearnMoreButton from "../LearnMoreButton";
interface Props {
  language: string;
  title: string;
  content: any;
  image: string;
}

const HomePageIntroBlock = ({ title, content, image, language }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box">
          <Image
            image={image}
            border={false}
            height={"450px"}
            color="blue"
          ></Image>
        </div>
        <div className="right-flex-box text-padding primary-background">
          <h1 className="center center-space">{title}</h1>
          <FormattedText content={content} content_id="homepageintro" />
          <div className="learn-more-button">
            <LearnMoreButton
              language={language}
              backgroundColor={"white"}
              color={"var(--primary-color)"}
              page={"aboutus"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntroBlock;
