import NavBar from "../NavBar.tsx";
import ImageBlock from "../ImageBlock1.tsx";
import IntroTextBlock from "../IntroTextBlock.tsx";
import EndBlock from "../EndBlock.tsx";

interface Props {
  image_block: any;
  item: any;
  language: string;
}
const LawSubPage = ({ image_block, item, language }: Props) => {
  return (
    <div>
      <NavBar Active={["", "", "", "active", ""]} language={language} />
      <ImageBlock
        image={image_block.image}
        title={image_block.title}
        text={image_block.text}
        color={image_block.color}
      />
      <IntroTextBlock
        title={item.value}
        content={item.content}
        image="/src/assets/images/immigrantVisa.jpg"
        backgroundColor={"#FFDDD2"}
      />
      <EndBlock language={language} />
    </div>
  );
};

export default LawSubPage;
