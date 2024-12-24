import React from "react";

interface Props {
  name: string;
  photo: string;
  language: string;
}

const PhotoCard = ({ name, photo, language }: Props) => {
  return (
    <div>
      <a href={"/" + language + "/" + name} style={{ textDecoration: "none" }}>
        <div className="photo-card">
          <img
            src={photo}
            className="card-img-top"
            alt="..."
            style={{
              height: "14rem",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <p className="photo-text">{name}</p>
        </div>
      </a>
    </div>
  );
};

export default PhotoCard;
