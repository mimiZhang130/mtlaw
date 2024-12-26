interface Props {
  language: string;
  backgroundColor: string;
  color: string;
  page: string;
}
const LearnMoreButton = ({ language, backgroundColor, color, page }: Props) => {
  return (
    <div>
      <a href={"/" + language + "/" + page}>
        <button
          style={{
            padding: ".25rem 4rem",
            backgroundColor: backgroundColor,
            color: color,
            borderColor: color,
            width: "100%",
          }}
        >
          {language === "en" ? "Learn More" : "更多细节"}
        </button>
      </a>
    </div>
  );
};

export default LearnMoreButton;
