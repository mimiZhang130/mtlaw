interface Props {
  name: string;
  photo: string;
  language: string;
  position: string;
}

const PhotoCard = ({ name, position, photo, language }: Props) => {
  return (
    <div>
      <a href={"/" + language + "/" + name} style={{ textDecoration: "none" }}>
        <div className="photo-card">
          <img
            src={photo}
            className="card-img-top"
            alt="..."
            style={{
              height: "15rem",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <p className="photo-text">
            {name}
            <br />
            {position}
          </p>
          <p></p>
        </div>
      </a>
    </div>
  );
};

export default PhotoCard;
