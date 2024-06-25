interface Props {
  image: string;
  border: boolean;
  height: string;
}
const Image = ({ image, border, height }: Props) => {
  return (
    <div>
      <img
        className={border ? "underline" : ""}
        style={{
          width: "100%",
          height: height,
        }}
        src={image}
      ></img>
    </div>
  );
};

export default Image;
