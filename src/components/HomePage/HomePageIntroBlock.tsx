import Image from "../Image";
import ContactUs from "../ContactUs";
import FormattedText from "../FormattedText";
interface Props {
  title: string;
  content: any;
  image: string;
  backgroundColor: string;
  language: string;
}

const HomePageIntroBlock = ({
  title,
  content,
  image,
  backgroundColor,
  language,
}: Props) => {
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
          style={{ backgroundColor: backgroundColor }}
        >
          <h1 className="center center-space center-title">{title}</h1>
          <FormattedText content={content} content_id="homepageintro" />
          <div style={{ margin: "2rem 0 0 0" }} className="center center-space">
            <ContactUs
              language={language}
              backgroundColor="white"
              color="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntroBlock;
