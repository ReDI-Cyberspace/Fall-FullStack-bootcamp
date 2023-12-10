import { NavLink, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faHouse, faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";

export default function RootLayout(props) {

  //console.log("root quantity",props.totalQuantity)
 

  return (
    <div className="root-layout">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container navbarContainer">
            <NavLink className="navbar-brand p-0" to="/">
              <img id="logo" src={Logo} alt="firma logo" />
              
            </NavLink>
            <h1>Creative Tech</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <FontAwesomeIcon icon={faHouse} size="lg" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="contact">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="products">
                    <FontAwesomeIcon icon={faShop} size="lg" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="cart">
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />{props.totalQuantity >0 && <span className="ms-2 text-success">{props.totalQuantity}</span>}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="dashboard">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="mb-5">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
