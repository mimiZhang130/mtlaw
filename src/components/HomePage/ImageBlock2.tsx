import Image from "../Image";
interface Props {
  image: string;
  title: string;
  content: string;
  button_content: string;
}

const ImageBlock2 = ({ image, title, content, button_content }: Props) => {
  return (
    <div>
      <div className="fluid-container">
        <Image image={image} border={false} height={"auto"} />
      </div>
      <div className="left-block-text">
        <h1>{title}</h1>
        <p>{content}</p>
        <button className="btn btn-light"> {button_content} </button>
      </div>
    </div>
  );
};

export default ImageBlock2;
