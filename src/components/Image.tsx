interface Props {
  image: string;
  border: boolean;
}
const Image = ({ image, border }: Props) => {
  return (
    <div>
      <img
        className={border ? "underline" : ""}
        style={{
          width: "100%",
          height: "400px",
        }}
        src={image}
      ></img>
    </div>
  );
};

export default Image;
