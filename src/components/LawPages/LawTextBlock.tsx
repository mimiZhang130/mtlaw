import ImmigrationList from "../ImmigrationList";
interface Props {
  links: any;
  law_subpage_title: string;
  law_title: string;
  law_linked: boolean;
  language: string;
}

const LawTextBlock = ({
  links,
  law_subpage_title,
  law_title,
  law_linked,
  language,
}: Props) => {
  return (
    <div>
      <h1 className="center center-space" style={{ marginTop: "3rem" }}>
        {law_subpage_title}
      </h1>
      <hr
        className="center center-space"
        style={{ borderColor: "black", marginLeft: "20%", marginRight: "20%" }}
      ></hr>
      <div
        className="flex-container"
        style={{
          margin: "4%",
          marginTop: "0",
          justifyContent: "space-around",
        }}
      >
        {links.map((link: { title: any; items: any }) => (
          <ImmigrationList
            title={link.title}
            items={link.items}
            law_title={law_title}
            law_linked={law_linked}
            number={links.length}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default LawTextBlock;
