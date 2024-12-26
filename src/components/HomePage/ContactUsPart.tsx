import Image from "../Image";
import FormattedText from "../FormattedText";
import LearnMoreButton from "../LearnMoreButton";

interface Props {
  title: string;
  content: string;
  image: string;
  language: string;
}

const ContactUsPart = ({ language, title, content, image }: Props) => {
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
        <div
          className="right-flex-box text-padding"
          style={{ backgroundColor: "var(--accent-color)", color: "white" }}
        >
          <h1 className="center center-space">{title}</h1>
          <FormattedText content={content} content_id="contact_us" />
          <div className="learn-more-button">
            <LearnMoreButton
              language={language}
              backgroundColor={"white"}
              color={"var(--accent-color)"}
              page={"contactus"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPart;
