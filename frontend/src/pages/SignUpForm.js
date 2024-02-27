import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../components/CustomModal";
import "./SignUpFormStyle.css";
import axios from "axios";

//SingIn Form Component
const SingUpForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [customer_type, setCustomerType] = useState();
  const [salutation, setSalutation] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [date_of_birth, setDateOfBirth] = useState();
  const [country, setCountry] = useState();
  const [street, setStreet] = useState();
  const [street_number, setStreetNumber] = useState();
  const [city, setCity] = useState();
  const [zipcode, setZipcode] = useState();

  const navigate = useNavigate();

  //----------------------------------------------------//
  //Submit Event Handler on Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/my-account/signupform`, {
        customer_type,
        salutation,
        first_name,
        last_name,
        email,
        password,
        phone,
        date_of_birth,
        country,
        street,
        street_number,
        city,
        zipcode,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    // set Modal alert
    setShowModal(true);
  };

  //----------------------------------------------------//
  //close the Modal
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/my-account");
  };

  //----------------------------------------------------//
  return (
    <>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <h4> I'm a new Customer</h4>
              <hr />
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  You are a Private Customer or Company:
                </label>
                <select
                  type="text"
                  id="customer_type"
                  name="customer_type"
                  onChange={(e) => setCustomerType(e.target.value)}
                  required
                >
                  <option value="">Please choose</option>
                  <option value="customer">Private Customer</option>
                  <option value="company">Company</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  You are Mr. or Ms.:
                </label>
                <select
                  type="text"
                  id="salutation"
                  name="salutation"
                  onChange={(e) => setSalutation(e.target.value)}
                  required
                >
                  <option value="">Please choose</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your First Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="first_name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Last Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="last_name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" required>
                  Your E-Mail :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" required>
                  Your Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Your Phone:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date_of_birth" className="form-label">
                  Your Date of Birth:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date_of_birth"
                  name="date_of_birth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4> Your Address</h4>
              <hr />
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Your Country:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div className="row g-2">
                <div className="col-md-8 mb-3">
                  <label htmlFor="street" className="form-label">
                    Your Street Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    onChange={(e) => setStreet(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="street_number" className="form-label">
                    Str. No:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="street_number"
                    name="street_number"
                    onChange={(e) => setStreetNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row g-2">
                <div className="col-md-8 mb-3">
                  <label htmlFor="city" className="form-label">
                    Your City:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="zipcode" className="form-label">
                    Zipcode:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="zipcode"
                    name="zipcode"
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn-form">
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* The notification is displayed here when the form has been submitted */}
        <CustomModal isOpen={showModal} handleClose={handleCloseModal} />
      </div>
    </>
  );
};

export default SingUpForm;
