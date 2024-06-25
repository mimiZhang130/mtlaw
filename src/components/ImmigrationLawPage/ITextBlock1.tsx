import Image from "../Image";
interface Props {
  title: string;
  content: string[];
}

const ITextBlock1 = ({ title, content }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div
          className="flex-left-box"
          style={{ width: "175rem", margin: "0rem" }}
        >
          <Image
            image={"src/assets/images/aboutus2.jpg"}
            border={false}
            height={"33rem"}
          ></Image>
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

export default ITextBlock1;
