interface Props {
  title: string;
  subgroups: string[];
}
const InfoBox = ({ title, subgroups }: Props) => {
  return (
    <div className="center info-box-1">
      <div className="top-card flip">
        <h4>{title}</h4>
        <ul>
          {subgroups.map((subgroup, index) => (
            <li key={index}>{subgroup}</li>
          ))}
        </ul>
        <button className="btn btn-light">Learn More</button>
      </div>
      <div className="bottom-card flip-back flip">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default InfoBox;
