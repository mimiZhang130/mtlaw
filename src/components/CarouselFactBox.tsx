interface Props {
  title: string;
  text: string;
}
const CarouselFactBox = ({ title, text }: Props) => {
  return (
    <div>
      <div className="carousel-fact-box">
        <h1>{title}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default CarouselFactBox;
