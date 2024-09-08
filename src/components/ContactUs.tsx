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
          }}
        >
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default ContactUs;
