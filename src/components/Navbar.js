import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light home-header">
      <a className="navbar-brand" href="../index.html">
        <img src={logo} width="45" height="45" alt="" />
        LITTLE PAWS
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto home-list">
          <li className="nav-item">
            <a className="nav-link navbar-link" href="/">
              About us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-link" href="../contact/index.html">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link navbar-link activeTab" href="/">
              Our Pets
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
