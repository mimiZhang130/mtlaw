import InfoBox from "../InfoBox.tsx";
import { text_block1 } from "../../assets/data/HomePageData.tsx";

const TextBlock = () => {
  return (
    <div className="container">
      <h2 className="center center-space">{text_block1.title}</h2>
      {/*<p className="paragraph-text">{text_block1.content}</p> */}
      <div
        className="center"
        style={{
          flexDirection: "row",
        }}
      >
        {text_block1.law_types.map(
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
        {text_block1.law_types.map(
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
