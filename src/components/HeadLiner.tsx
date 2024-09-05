const HeadLiner = () => {
  return (
    <div
      className="flex-container"
      style={{
        justifyContent: "flex-end",
        backgroundColor: "#00467f",
      }}
    >
      <a href="/en" style={{ padding: ".5% 2%", color: "white" }}>
        English
      </a>
      <a href="/cn" style={{ padding: ".5% 2%", color: "white" }}>
        简体中文
      </a>
    </div>
  );
};

export default HeadLiner;
