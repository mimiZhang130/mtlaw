import { useEffect } from "react";
interface Props {
  content: string;
  content_id: string;
}
const TextBlockAny = ({ content, content_id }: Props) => {
  useEffect(() => {
    const outputElement = document.getElementById(content_id);
    if (outputElement && content) {
      outputElement.innerHTML = content
        .replace(/list_start([^]*?)(?=\n|list_end)/g, "<ul>$1</ul>")
        .replace(/- ([^]*?)(?=\n|end_bullet)/g, "<li>$1</li>")
        .replace(/end_bullet/g, "")
        .replace(/link:(http[^\s]+)_([^\/]+)/g, "<a href='$1'>$2</a>")
        .replace(/\n/g, "<br>");
    }
  }, [content]);
  return (
    <div>
      <div id={content_id}></div>
    </div>
  );
};

export default TextBlockAny;
