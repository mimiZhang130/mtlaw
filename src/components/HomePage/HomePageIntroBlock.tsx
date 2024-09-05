import Image from "../Image";
import { useEffect } from "react";

interface Props {
  title: string;
  content: any;
  image: string;
  backgroundColor: string;
  button_content: string;
  language: string;
}

const HomePageIntroBlock = ({
  title,
  content,
  image,
  backgroundColor,
  button_content,
  language,
}: Props) => {
  useEffect(() => {
    const outputElement = document.getElementById("output");
    if (outputElement && content) {
      outputElement.innerHTML = content.replace(/\n/g, "<br>");
    }
  }, [content]);

  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box" style={{ margin: "2.5%" }}>
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
          <h1 className="center center-space">{title}</h1>
          <div style={{ margin: "0 0 2rem 0" }} id="output"></div>
          <div className="center center-space">
            <a href={"/" + language + "/contactus"}>
              <button className="btn btn-dark"> {button_content} </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntroBlock;
