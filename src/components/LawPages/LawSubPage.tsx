import ImageBlock from "../ImageBlock.tsx";
import IntroTextBlock from "../IntroTextBlock.tsx";
import EndBlock from "../EndBlock.tsx";

interface Props {
  image_block: any;
  item: any;
  language: string;
  subpage_image: string;
}
const LawSubPage = ({ image_block, item, language, subpage_image }: Props) => {
  return (
    <div>
      <ImageBlock
        image={image_block.image}
        title={image_block.title}
        text={image_block.text}
        color={image_block.color}
      />
      <IntroTextBlock
        title={item.value}
        content={item.content}
        image={subpage_image}
        backgroundColor={"white"}
      />
      <EndBlock language={language} />
    </div>
  );
};

export default LawSubPage;
