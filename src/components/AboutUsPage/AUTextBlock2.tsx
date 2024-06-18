import InfoBox3 from "../InfoBox3";
const AUTextBlock2 = () => {
  return (
    <div>
      <div>
        <h1 className="center center-space">The MT Law Advantage</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nunc id aliquam ultricies, nisl nunc aliquet
          nunc, vitae tincidunt nunc nunc vitae nunc. Sed euismod, nunc id
          aliquam ultricies, nisl nunc aliquet nunc, vitae tincidunt nunc nunc
          vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla facilisi. Sed euismod, nunc id aliquam ultricies, nisl nunc
          aliquet nunc, vitae tincidunt nunc nunc vitae nunc. Sed euismod, nunc
          id aliquam ultricies, nisl nunc aliquet nunc, vitae tincidunt nunc
          nunc vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla facilisi. Sed euismod, nunc id aliquam ultricies, nisl
          nunc aliquet nunc, vitae tincidunt nunc nunc vitae nunc. Sed euismod,
          nunc id aliquam ultricies, nisl nunc aliquet nunc, vitae tincidunt
          nunc nunc vitae nunc.
        </p>
      </div>
      <hr style={{ borderWidth: ".5rem", color: "blue" }}></hr>
      <h1 className="center center-space">Core Values</h1>
      <div className="center" style={{ flexDirection: "row" }}>
        <InfoBox3 />
        <InfoBox3 />
        <InfoBox3 />
      </div>
    </div>
  );
};

export default AUTextBlock2;
