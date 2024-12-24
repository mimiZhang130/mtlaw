import ImageBlock from "../ImageBlock.tsx";
// import LawTextBlock from "../LawPages/LawTextBlock.tsx";
// import CaseStudy from "../CaseStudy.tsx";
import EndBlock from "../EndBlock.tsx";
import LawPageIntroBlock from "./LawPageIntroBlock.tsx";

interface Props {
  image_block: any;
  introduction: any;
  // subpages: any;
  // title: string;
  language: string;
}
const LawPage = ({
  image_block,
  introduction,
  // subpages,
  // title,
  language,
}: Props) => {
  return (
    <div>
      <ImageBlock
        image={image_block.image}
        title={image_block.title}
        text={image_block.text}
        color={image_block.color}
      />
      <LawPageIntroBlock
        title={introduction.title}
        content={introduction.content}
        backgroundColor={introduction.color}
        language={language}
      />
      <EndBlock language={language} />
    </div>
  );
};

export default LawPage;
