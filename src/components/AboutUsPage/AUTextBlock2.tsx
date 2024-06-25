import Image from "../Image";

const AUTextBlock2 = () => {
  return (
    <div className="flex-container">
      <div className="flex-left-box text-padding">
        <h1>Why Choose Us</h1>
        <h5>
          We strive to make the complex world of legal matters as smooth and
          approachable as possible, with a promise to uphold the highest
          standards of integrity and professionalism in all that we do.{" "}
        </h5>
      </div>
      <div className="flex-right-box" style={{ width: "100rem" }}>
        <Image
          image={"src/assets/images/aboutus3.jpg"}
          border={false}
          height={"30rem"}
        ></Image>
      </div>
    </div>
  );
};

export default AUTextBlock2;
