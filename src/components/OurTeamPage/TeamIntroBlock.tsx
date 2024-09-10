import FormattedText from "../FormattedText";
import Image from "../Image";
interface Props {
  title: string;
  content: any;
  image: string;
  language: string;
}

const TeamIntroBlock = ({ content, image }: Props) => {
  return (
    <div>
      <div className="flex-container">
        <div className="left-flex-box-3" style={{ margin: "2rem" }}>
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
        </div>
        <div
          className="right-flex-box-3 text-padding"
          style={{ backgroundColor: "lightgray" }}
        >
          <FormattedText content={content} content_id="profile" />
          {/* <p>
            <strong>{language === "en" ? "Name: " : "名字："}</strong>
            {title}
          </p>
          <p>
            <strong>{language === "en" ? "Position: " : "职位："}</strong>
            {content.position}
          </p>
          <p>
            <strong>{language === "en" ? "Email: " : "电子邮件："}</strong>
            {content.email}
          </p>
          <p>
            <strong>{language === "en" ? "Education: " : "教育背景："}</strong>
            {content.educations.map((education: any) => (
              <li style={{ marginLeft: "1rem" }}>{education.school}</li>
            ))}
          </p>
          <p>
            <strong>{language === "en" ? "Admissions:" : "准许："}</strong>
            {content.admissions.map((admission: any) => (
              <li style={{ marginLeft: "1rem" }}>{admission.state}</li>
            ))}
          </p>
          <p>
            <strong>{language === "en" ? "Profile:" : "简介："}</strong>
            <div id="output"></div>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default TeamIntroBlock;
