interface Props {
  title: string;
  subgroups: string[];
}
const InfoBox = ({ title, subgroups }: Props) => {
  return (
    <div className="card" style={{ width: "16rem", margin: "1rem" }}>
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        {title == "Immigration Law" && <br /> /* adds better spacing */}
        {subgroups.map((subgroup) => (
          /* loop through and show each subgroup */
          <div>
            <a className="card-text">{subgroup}</a>
            <br />
          </div>
        ))}
        <br />
        <a href="/aboutus" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default InfoBox;
