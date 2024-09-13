import { useEffect } from "react";
interface Props {
  content: string;
  content_id: string;
}
const FormattedText = ({ content, content_id }: Props) => {
  useEffect(() => {
    const outputElement = document.getElementById(content_id);
    if (outputElement && content) {
      outputElement.innerHTML = content
        .replace(/list_start([^]*?)\n/g, "<ul>$1")
        .replace(/- ([^]*?)\n/g, "<li>$1</li>")
        .replace(/list_end\n/g, "</ul>")
        // .replace(/link:(http[^\s/]+)_([^\/]+)\n/g, "<a  href='$1'>$2</a>")
        .replace(
          /link:(\/[^\s\n]+)_([^\n]+)\n/g,
          "<a style='color: #0269be' href='$1'>$2</a>"
        )
        .replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
    }
  }, [content]);
  return (
    <div>
      <div id={content_id}></div>
    </div>
  );
};

export default FormattedText;
