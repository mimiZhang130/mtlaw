import FormattedText from "../FormattedText";
import Image from "../Image";
interface Props {
  title: string;
  content: any;
  image: string;
  language: string;
}

const TeamIntroBlock = ({ content, image }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box-3" style={{ margin: "2rem" }}>
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
        </div>
        <div
          className="right-flex-box-3 text-padding"
          style={{ backgroundColor: "lightgray" }}
        >
          <FormattedText content={content} content_id="profile" />
        </div>
      </div>
    </div>
  );
};

export default TeamIntroBlock;
