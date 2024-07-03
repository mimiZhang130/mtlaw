import { useEffect } from "react";
interface Props {
  content: string;
  id: number;
}
const FormattedText = ({ content, id }: Props) => {
  useEffect(() => {
    const outputElement = document.getElementById("formatted" + id);
    if (outputElement) {
      //   outputElement.innerHTML = content.replace(/\n/g, "<br>");
      outputElement.innerHTML = content
        .replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
    }
  }, [content]);
  return (
    <div>
      <div id={"formatted" + id}></div>
    </div>
  );
};

export default FormattedText;
