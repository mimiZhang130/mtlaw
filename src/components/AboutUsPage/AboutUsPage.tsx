import InfoBox2 from "../InfoBox2";
import IntroTextBlock from "../IntroTextBlock";
import AUTextBlock2 from "./AUTextBlock2";
import NavBar from "../NavBar";
import { image_block } from "../../assets/data/AboutUsData";
import ImageBlock from "../ImageBlock1";
import { about_us_introduction } from "../../assets/data/AboutUsData";
const AboutUsPage = () => {
  return (
    <div>
      <NavBar
        Home="Home"
        AboutUs="About Us"
        OurTeam="Our Team"
        LegalServices="Legal Services"
        Active={["", " active", "", ""]}
      />
      <ImageBlock
        image={image_block.image}
        title={image_block.title}
        text={image_block.text}
      />
      <div>
        <IntroTextBlock
          title={about_us_introduction.title}
          content={about_us_introduction.content}
          image={about_us_introduction.image}
        />
      </div>
      <AUTextBlock2 />
    </div>
  );
};

export default AboutUsPage;
