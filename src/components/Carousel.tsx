import InfoBox4 from "./InfoBox4";
import { facts } from "../assets/data/HomePageData";
const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner slide-container">
          {facts.map((fact) => (
            <div className="carousel-item active" data-bs-interval="3000">
              {" "}
              <InfoBox4 title={fact.big_text} text={fact.small_text} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
