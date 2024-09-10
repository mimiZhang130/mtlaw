import NavBar from "../NavBar.tsx";
import ImageBlock from "../ImageBlock.tsx";
import IntroTextBlock from "../IntroTextBlock.tsx";
import LawTextBlock from "../LawPages/LawTextBlock.tsx";
import InfoBox5 from "../CaseStudy.tsx";
import EndBlock from "../EndBlock.tsx";
import FormattedText from "../FormattedText.tsx";
interface Props {
  image_block: any;
  introduction: any;
  subpages: any;
  title: string;
  language: string;
}
const LawPage = ({
  image_block,
  introduction,
  subpages,
  title,
  language,
}: Props) => {
  return (
    <div>
      <NavBar Active={["", "", "", "active", ""]} language={language} />

      <ImageBlock
        image={image_block.image}
        title={image_block.title}
        text={image_block.text}
        color={image_block.color}
        textColor={image_block.textColor}
      />
      <IntroTextBlock
        title={introduction.title}
        content={introduction.content}
        image={introduction.image}
        backgroundColor={introduction.color}
      />
      <FormattedText
        content={`hi
        list_start
        - hi bye end_bullet 
        - hi end_bullet
        list_end
        link:http://localhost:5173/en/legalservices/Immigration%20Law_Name hi
        <b>hi</b>
        hi`}
        content_id={"hi_id"}
      />
      {subpages.map((subpage: any) => {
        if (subpage.subpage_type === "links") {
          return (
            <LawTextBlock
              links={subpage.links}
              law_subpage_title={subpage.subpage_title}
              law_title={title}
              law_linked={subpage.linked_pages}
              language={language}
            />
          );
        } else if (subpage.subpage_type === "cases") {
          return (
            <div
              style={{
                backgroundColor: "#83C5BE",
                paddingTop: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div className="container">
                <h1 style={{ color: "white" }}>
                  {language === "en" ? "Cases" : "案件"}
                </h1>
                <div className="flex-container">
                  {subpage.cases.map((item: any) => {
                    return (
                      <InfoBox5
                        text={item.text}
                        backgroundColor="#006D77"
                        color="white"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}
      <EndBlock language={language} />
    </div>
  );
};

export default LawPage;
