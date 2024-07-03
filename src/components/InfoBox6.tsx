interface Props {
  title: string;
  items: any;
  law_title: string;
  law_linked: boolean;
  number: number;
  language: string;
}
const InfoBox6 = ({
  title,
  items,
  law_title,
  law_linked,
  number,
  language,
}: Props) => {
  return (
    <div className={"law-list-" + number} style={{ marginTop: "2rem" }}>
      <h3 className="center center-space" style={{ marginLeft: "3%" }}>
        {title}
      </h3>

      <ul className="list-group list-group-flush" style={{ marginLeft: "3%" }}>
        {items.map((item: any) => (
          <li className="list-group-item">
            {law_linked ? (
              <a href={"/" + language + "/" + law_title + "/" + item.value}>
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBox6;
