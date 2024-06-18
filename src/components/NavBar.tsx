interface Props {
  Home: string;
  AboutUs: string;
  OurTeam: string;
  LegalServices: string;
  Active: string[];
  SetActive: (value: string[]) => void;
}

const NavBar = ({
  Home,
  AboutUs,
  OurTeam,
  LegalServices,
  Active,
  SetActive,
}: Props) => {
  const AddUnderline0 = () => {
    SetActive(["active", "", "", ""]);
  };
  const AddUnderline1 = () => {
    SetActive(["", "active", "", ""]);
  };
  const AddUnderline2 = () => {
    SetActive(["", "", "active", ""]);
  };
  const AddUnderline3 = () => {
    SetActive(["", "", "", "active"]);
  };

  return (
    <div>
      {/*NavBar*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/*MTLaw Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="src/assets/images/logo.png"
              alt="Logo"
              width="350"
              height="100"
            />
          </a>
          {/*NavBar Links */}
          {/* NavBar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* NavBar Items */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul
              className="navbar-nav nav-underline"
              style={{ paddingRight: "2rem" }}
            >
              {/* Home */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[0]}
                  aria-current="page"
                  href="/"
                  onClick={AddUnderline0}
                >
                  {Home}
                </a>
              </li>
              {/* About Use */}
              <li className="nav-item">
                <a
                  className={"nav-link" + Active[1]}
                  href="/aboutus"
                  onClick={AddUnderline1}
                >
                  {AboutUs}
                </a>
              </li>
              {/* Our Team */}
              <li className="nav-item">
                <a
                  className={"nav-link " + Active[2]}
                  href="/ourteam"
                  onClick={AddUnderline2}
                >
                  {OurTeam}
                </a>
              </li>
              {/* Legal Services */}
              <li
                className={"nav-item dropdown " + Active[3]}
                onClick={AddUnderline3}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="/legalservices"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {LegalServices}
                </a>
                {/* Dropdown Menu */}
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/immigrationlaw">
                      Immigration Law
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
