import NavBar from "../NavBar.tsx";
import ImageBlock from "../ImageBlock1.tsx";
import { image_block } from "../../assets/data/ImmigrationLaw.tsx";
import { immigration_introduction } from "../../assets/data/ImmigrationLaw.tsx";
import IntroTextBlock from "../IntroTextBlock.tsx";
const ImmigrationLaw = () => {
  return (
    <div>
      <NavBar
        Home="Home"
        AboutUs="About Us"
        OurTeam="Our Team"
        LegalServices="Legal Services"
        Active={["", "", "", "active"]}
      />
      <ImageBlock
        image={require("../../assets/images/" + image_block.image)}
        title={image_block.title}
        text={image_block.text}
      />
      <IntroTextBlock
        title={immigration_introduction.title}
        content={immigration_introduction.content}
        image={require("../../assets/images/" + immigration_introduction.image)}
      />
    </div>
  );
};

export default ImmigrationLaw;
