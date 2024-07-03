interface Props {
  name: string;
  photo: string;
  language: string;
}

const PhotoCard = ({ name, photo, language }: Props) => {
  return (
    <div>
      <a href={"/" + language + "/" + name}>
        <div className="card" style={{ width: "12rem", margin: "1rem auto" }}>
          <img
            src={photo}
            className="card-img-top"
            alt="..."
            style={{ height: "9rem" }}
          />
          <p className="photo-text">{name}</p>
        </div>
      </a>
    </div>
  );
};

export default PhotoCard;
