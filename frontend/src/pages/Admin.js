import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';


// import { isAuthenticated } from '../services/authService';
import "../App.css";
import CustomModal from "../components/CustomModal";

const Admin = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  /*  const location = useLocation(); */
  //---------------------------------
  const [formData, setFormData] = useState();
  
  /* const [token, setToken]=useState(localStorage.getItem('token'));*/
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setLoading(true);
    console.log("Vor dem Setzen:", formData);
try{
    // fetch(`${process.env.REACT_APP_API_URL}/login`, {
   axios.post("http://localhost:3001/admin", data)
    .then((result) => {
      console.log(result)
     
      setFormData = ({
        product_name: '',
        category: '',
        product_description: '',
        company_name: '',
        manufactured: '',
        best_before_date: '',
        packaging: '',
        weight: '',
        origin: '',
        standard_price: '',
        sale_price: '',
        imageURL: '',
      });
      console.log("Nach dem Setzen:", formData);
      
    })
    .finally(() => {
      setLoading(false);
      // set Modal alert
    setShowModal(true);
     
    });
  }catch (error) {
    console.error('AxiosError:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
  }
      /* .then((res) => {
        console.log(res)
        if (!res.ok) {
          // error logging code e.g. Sentry
          console.error("could not save product");
          return;
        }
      }) */
      

  };
  //----------------------------------------------------//
  //close the Modal
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/admin");
  };

  //----------------------------------------------------//

  return (
    <>
      <div>
        <h4 className="contactTitle"> Admin Workspace</h4>
        <div className="line1"></div>
        <div className="singIn-site">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <h4> Create a New Product</h4>
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="product_name" 
                    className="form-label">
                      Product-Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="product_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="category"
                      className="form-label"
                      style={{ marginRight: "15px" }}
                    >
                      Category:
                    </label>

                    <select type="text" id="category" name="category" required>
                      <option value="">Please choose</option>
                      <option value="dried_herbs">Dried Herbs</option>
                      <option value="grains">Grains</option>
                      <option value="powder">Powders</option>
                      <option value="tea_blends">Tea Blends</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product_description" 
                    className="form-label">
                      Product-Description:
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      className="form-control"
                      rows="7"
                      cols="50"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company_name" 
                    className="form-label">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company_name"
                      name="company_name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="manufactured"
                      className="form-label"
                      required
                    >
                      Manufactured :
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="manufactured"
                      name="manufactured"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="best_before_date"
                      className="form-label"
                      required
                    >
                      Best-Before-Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="best_before_date"
                      name="best_before_date"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  {/* <h4> Your Address</h4> */}
                  <br />
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="packaging" 
                    className="form-label">
                      Packaging Type:
                    </label>
                    <select type="text" id="packaging_type" name="packaging" required>
                      <option value="">Please choose</option>
                      <option value="plastic_bag">Plastic Bag</option>
                      <option value="paper_bag">Paper Bag</option>
                      <option value="in_a_paper_box">In a Paper Box</option>
                      <option value="individually_packed_in_a_box">Individually packed in a Box</option>
                      <option value="other_packaging">Other Packaging</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="weight" 
                    className="form-label">
                      Weight Unit:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="weight"
                      name="weight"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="origin" className="form-label">
                      Origin:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="origin"
                      name="origin"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="standard_price" className="form-label">
                      Standard-Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="standard_price"
                      name="standard_price"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="sale_price" 
                    className="form-label">
                      Sale-Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="sale_price"
                      name="sale_price"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="imageURL" 
                    className="form-label">
                      Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="image_url"
                      name="imageURL"
                  
                    />
                  </div>
                  <br />

                  <button type="submit" className="btn-form">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {/* The notification is displayed here when the form has been submitted */}
            <CustomModal isOpen={showModal} handleClose={handleCloseModal} />
          </div>
        </div>
        <div className="line2"></div>
      </div>
    </>
  );
};

export default Admin;
