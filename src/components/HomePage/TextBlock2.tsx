import InfoBox3 from "../InfoBox3";
const TextBlock2 = () => {
  return (
    <div className="container">
      <h1 className="center center-space">The MT Law Advantage</h1>
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        <InfoBox3 />
        <InfoBox3 />
        <InfoBox3 />
      </div>
    </div>
  );
};

export default TextBlock2;
