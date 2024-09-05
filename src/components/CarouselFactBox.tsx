interface Props {
  title: string;
  text: string;
}
const CarouselFactBox = ({ title, text }: Props) => {
  return (
    <div>
      <div className="carousel-fact-box">
        <h1 style={{ fontSize: "7vw", textAlign: "center" }}>{title}</h1>
        <h2 style={{ fontSize: "2.5vw", textAlign: "center" }}>{text}</h2>
      </div>
    </div>
  );
};

export default CarouselFactBox;