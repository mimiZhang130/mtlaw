import ImageBlock from "../ImageBlock1";
import TextBlock1 from "./TextBlock1";
import TextBlock2 from "./TextBlock2";
import Form from "../Form";
import ImageBlock2 from "./ImageBlock2";
import { image_block } from "../../assets/data/HomePageData";
import { locations } from "../../assets/data/HomePageData";
import NavBar from "../NavBar";
import TextBlock3 from "./TextBlock3";

const HomePage = () => {
  return (
    <div>
      <div>
        <NavBar
          Home="Home"
          AboutUs="About Us"
          OurTeam="Our Team"
          LegalServices="Legal Services"
          Active={["active", "", "", ""]}
        />
        <ImageBlock
          image={image_block.image}
          title={image_block.title}
          text={image_block.text}
        />
        <div
          style={{ margin: "2rem", marginLeft: "6rem", marginRight: "6rem" }}
        >
          <TextBlock1 />
        </div>
        <div style={{ padding: "2rem", backgroundColor: "cornflowerblue" }}>
          <TextBlock2 />
        </div>
        <div style={{ position: "relative" }}>
          {" "}
          {/* Set up position ancestor*/}
          <ImageBlock2
            image={locations.image}
            title={locations.title}
            content={locations.content}
            button_content={locations.button_content}
          />
        </div>
        <div style={{}}>
          <TextBlock3 />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default HomePage;
