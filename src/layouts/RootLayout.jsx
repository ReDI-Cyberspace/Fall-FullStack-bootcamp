import { NavLink, Outlet } from "react-router-dom";
import Logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faHouse, faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink className="navbar-brand p-0" to="/">
              <img src={Logo} alt="firma logo" />
              
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
                  <NavLink className="nav-link" to="form">
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
                    <FontAwesomeIcon icon={faCartShopping} size="lg" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
