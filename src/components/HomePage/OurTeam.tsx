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

const OurTeam = ({
  title,
  content,
  image,
  backgroundColor,
  language,
}: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div
          className="right-flex-box text-padding"
          style={{ backgroundColor: backgroundColor }}
        >
          <h1 className="center center-space" style={{ color: "white" }}>
            {title}
          </h1>
          <div
            style={{
              margin: "0 0 2rem 0",
              color: "white",
              justifyContent: "center",
            }}
          >
            <FormattedText content={content} content_id="homeourteam" />
          </div>
          <div className="center center-space">
            <ContactUs
              language={language}
              backgroundColor="#00467f"
              color="white"
            />
          </div>
        </div>
        <div className="left-flex-box">
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
