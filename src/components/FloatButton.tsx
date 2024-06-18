interface Props {
  top: number;
  left: number;
}
const FloatButton = ({ top, left }: Props) => {
  return (
    <div style={{ position: "absolute", top: top + "%", left: left + "%" }}>
      <button>hello</button>
    </div>
  );
};

export default FloatButton;
