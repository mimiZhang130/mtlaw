const SideNavBar = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}>Hello</h2>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item" style={{ marginBottom: "1rem" }}>
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item" style={{ marginBottom: "1rem" }}>
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
        <li className="nav-item" style={{ marginBottom: "1rem" }}>
          <a className="nav-link active" aria-current="page" href="#">
            Active
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavBar;
