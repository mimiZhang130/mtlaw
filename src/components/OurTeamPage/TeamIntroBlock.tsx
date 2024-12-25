import FormattedText from "../FormattedText";
import Image from "../Image";
interface Props {
  title: string;
  content: any;
  contact_info: any;
  image: string;
  language: string;
}

const TeamIntroBlock = ({ contact_info, content, image }: Props) => {
  return (
    <div>
      <div className="flex-container-dynamic-wrap">
        <div className="left-flex-box-3" style={{ margin: "2rem" }}>
          <Image
            image={image}
            border={false}
            height={"auto"}
            color="blue"
          ></Image>
          <div style={{ margin: "1rem", color: "var(--primary-color)" }}>
            <h5>
              <b>Email: </b>
              {contact_info.email}
            </h5>
            <h5>
              <b>Wechat ID: </b>
              {contact_info.wechat}
            </h5>
            <h5>
              <b>Phone Number: </b>
              {contact_info.phone_number}
            </h5>
          </div>
        </div>
        <div className="right-flex-box-4 text-padding">
          <FormattedText content={content} content_id="profile" />
        </div>
      </div>
    </div>
  );
};

export default TeamIntroBlock;
