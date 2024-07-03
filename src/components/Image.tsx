interface Props {
  image: string;
  border: boolean;
  height: string;
  color: string;
}
const Image = ({ image, border, height, color }: Props) => {
  return (
    <div>
      <img
        className={border ? "underline-" + color : ""}
        style={{
          width: "100%",
          height: height,
          minHeight: "500px",
          objectFit: "cover",
        }}
        src={image}
      ></img>
    </div>
  );
};

export default Image;
