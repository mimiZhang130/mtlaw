interface Props {
  language: string;
  backgroundColor: string;
  color: string;
}
const ContactUs = ({ language, backgroundColor, color }: Props) => {
  return (
    <div>
      <a href={"/" + language + "/contactus"}>
        <button
          style={{
            padding: ".25rem 4rem",
            backgroundColor: backgroundColor,
            color: color,
            borderColor: color,
            width: "100%",
          }}
        >
          {language === "en" ? "Contact Us" : "联系我们"}
        </button>
      </a>
    </div>
  );
};

export default ContactUs;
