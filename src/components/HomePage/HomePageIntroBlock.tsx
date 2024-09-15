import Image from "../Image";
// import ContactUs from "../ContactUs";
import FormattedText from "../FormattedText";
interface Props {
  title: string;
  content: any;
  image: string;
}

const HomePageIntroBlock = ({ title, content, image }: Props) => {
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
        </div>
      </div>
    </div>
  );
};

export default HomePageIntroBlock;
