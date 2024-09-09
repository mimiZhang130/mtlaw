import Image from "./Image";
import { useEffect } from "react";

interface Props {
  title: string;
  content: any;
  image: string;
  backgroundColor: string;
}

const IntroTextBlock = ({ title, content, image, backgroundColor }: Props) => {
  useEffect(() => {
    const outputElement = document.getElementById("output");
    if (outputElement && content) {
      outputElement.innerHTML = content.replace(/\n/g, "<br>");
    }
  }, [content]);

  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box">
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
        </div>
        <div
          className="right-flex-box text-padding"
          style={{ backgroundColor: backgroundColor, color: "#00467f" }}
        >
          <h1 className="center center-space">{title}</h1>
          <div id="output"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroTextBlock;
