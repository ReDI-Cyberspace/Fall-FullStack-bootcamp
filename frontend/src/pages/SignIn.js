import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authService";

import Advetreising from "../components/Advetreising";
import CustomModal from "../components/CustomModal";

const SingIn = ({ handleLogin, isAdmin, setIsAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  //---------------------------------
  const [formData, setFormData] = useState([]);
  const [signInData, setSignInData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);

  //----------------------------------------------------//
  //Change event handler for input
  /* const handleInputChange = (e) =>{
    const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        };  */
  //----------------------------------------------------//

  //Submit Event Handler on Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setLoading(true);

    // Füge den Token dem Header einer HTTP-Anfrage hinzu
    try {
      const response = await fetch("http://localhost:3001/my-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log("could not login");
        setToken(null);
        localStorage.removeItem("token");
        return;
      }

      const json = await response.json();
      console.log(json.token);
      setToken(json.token);
      localStorage.setItem("token", token);
      handleLogin(token, json.role);
      if (json.role === "admin") {
        setIsAdmin(true);
        navigate("/admin");
      } else {
        navigate("/product-list");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //----------------------------------------------------//
  //close the Modal
  /* const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');

  }; */

  //----------------------------------------------------//
  const goToSingUpForm = () => {
    navigate(`${location.pathname}/signupform`);
  };

  return (
    <div>
      <Advetreising />
      <h4 className="contactTitle"> Login or Ragister now </h4>
      <div className="line1"></div>
      <div className="singIn-site">
        <div className="formContainer-contact">
          <form onSubmit={handleSubmit}>
            <div className="contact">
              <h4>I'm already a Customer </h4>

              <hr />

              <div>
                <p className="singin-info">
                  {" "}
                  Please sing in with your E-Mail and Password
                </p>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label" required>
                    Your E-Mail :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" required>
                    Your Password :
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>

                <button type="submit" className="btn-form">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="formContainer-contact">
          <div className="contact">
            <h4> Register</h4>

            <hr />
            <div>
              <div className="mb-3">
                <p>- Save your data und delivery addresses</p>
                <p>- Overview of your orders and shipping information</p>
                <p>- Checking the order status</p>
                <p>- Discount and Special promotions</p>
              </div>

              <button
                type="button"
                onClick={goToSingUpForm}
                className="btn-form"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default SingIn;
