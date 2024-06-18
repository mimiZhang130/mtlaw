const InfoBox3 = () => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "16rem",
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "1rem",
        }}
      >
        <img
          src="src/assets/images/nightlake.jpeg"
          className="card-img-top"
          alt="..."
          style={{ height: "12rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox3;
