import Image from "../Image";
import FormattedText from "../FormattedText";

interface Props {
  title: string;
  content: string;
  image: string;
}

const ContactUs = ({ title, content, image }: Props) => {
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
          style={{ backgroundColor: "var(--accent-color)" }}
        >
          <h1 className="center center-space">{title}</h1>
          <FormattedText content={content} content_id="contact_us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
