import Image from "./Image";
interface Props {
  title: string;
  content: string[];
  image: string;
}

const AUTextBlock1 = ({ title, content, image }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div
          className="flex-left-box"
          style={{ width: "175rem", margin: "2rem" }}
        >
          <Image image={image} border={false} height={"33rem"}></Image>
        </div>
        <div className="flex-right-box text-padding">
          <h1 className="center center-space">{title}</h1>
          {content.map((content) => {
            return <p>{content}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AUTextBlock1;
