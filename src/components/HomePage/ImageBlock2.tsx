import Image from "../Image";

interface Props {
  image: string;
  title: string;
  content: string;
  button_content: string;
  language: string;
}

const ImageBlock2 = ({
  image,
  title,
  content,
  button_content,
  language,
}: Props) => {
  return (
    <div>
      <div className="fluid-container">
        <Image image={image} border={false} height={"auto"} color={"blue"} />
      </div>
      <div className="left-block-text">
        <h1>{title}</h1>
        <p>{content}</p>
        <a href={"/" + language + "/contactus"}>
          <button className="btn btn-light"> {button_content} </button>
        </a>
      </div>
    </div>
  );
};

export default ImageBlock2;
