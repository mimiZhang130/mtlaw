import InfoBox from "../InfoBox.tsx";
import { law_types } from "../../data.tsx";
const TextBlock = () => {
  return (
    <div className="container">
      <h1 className="center center-space">The MT Law Advantage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        Sed euismod, nunc id aliquam ultricies, nisl nunc aliquet nunc, vitae
        tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam ultricies,
        nisl nunc aliquet nunc, vitae tincidunt nunc nunc vitae nunc. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed
        euismod, nunc id aliquam ultricies, nisl nunc aliquet nunc, vitae
        tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam ultricies,
        nisl nunc aliquet nunc, vitae tincidunt nunc nunc vitae nunc. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed
        euismod, nunc id aliquam ultricies, nisl nunc aliquet nunc, vitae
        tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam ultricies,
        nisl nunc aliquet nunc, vitae tincidunt nunc nunc vitae nunc.
      </p>
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        {law_types.map(
          (law_type) =>
            law_type.id <= 2 && (
              <InfoBox
                key={law_type.id}
                title={law_type.title}
                subgroups={law_type.subgroups}
              />
            )
        )}
      </div>
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        {law_types.map(
          (law_type) =>
            law_type.id > 2 && (
              <InfoBox
                key={law_type.id}
                title={law_type.title}
                subgroups={law_type.subgroups}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TextBlock;
