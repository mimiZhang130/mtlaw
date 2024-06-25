import InfoBox from "../InfoBox";
import Carousel from "../Carousel";
import Image from "../Image";
const TextBlock3 = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-right-box">
          <div className="text-padding">
            <h1>Our Mission</h1>
            <h3>
              We are committed to providing high-quality comprehensive legal
              services to suit our clients' needs
            </h3>
          </div>
        </div>
        <div className="flex-left-box" style={{ position: "relative" }}>
          {/* <Image
            image={"src/assets/images/office.jpg"}
            border={false}
            height={"30rem"}
          /> */}
          {/* <div className="overlay-facts"> */}
          <Carousel />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TextBlock3;
