import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";


const Admin = ({setIsAdmin}) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
        setIsAdmin(true);
 
  //---------------------------------
 const [formData, setFormData] = useState([]); 
  const [loading, setLoading] = useState(false);

  
  const handleInputChange = (e) =>{
    const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }; 
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setLoading(true);
    console.log("Vor dem Setzen:", formData);
    try {
     
      axios
        .post(`${process.env.REACT_APP_API_URL}/admin`,formData )
        .then((result) => {
          console.log(result);
       
        })
        .finally(() => {

          setFormData ({
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
          setLoading(false);
          // set Modal alert
          setShowModal(true);
        });
    } catch (error) {
      console.error("AxiosError:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };
  //----------------------------------------------------//

  const CustomModal = ({ isOpen, handleClose }) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="mmodal">
          <h3>Congratulations!</h3>
          <p>You have successfully created a Product !</p>
          <button className="btn-form" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    );
  };
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
                    <label htmlFor="product_name" className="form-label">
                      Product-Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      name="product_name"
                      value={formData.product_name}
                      onChange={handleInputChange}
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

                    <select type="text" id="category" name="category"  
                    value={formData.category} 
                    onChange={handleInputChange} required>
                      <option value="">Please choose</option>
                      <option value="dried_herbs">Dried Herbs</option>
                      <option value="grains">Grains</option>
                      <option value="powder">Powders</option>
                      <option value="tea_blends">Tea Blends</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="product_description" className="form-label">
                      Product-Description:
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      className="form-control"
                      rows="7"
                      cols="50"
                      value={formData.product_description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company_name" className="form-label">
                      Company Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="manufactured"
                      className="form-label"
                    >
                      Manufactured :
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="manufactured"
                      name="manufactured"
                      value={formData.manufactured}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="best_before_date"
                      className="form-label"
                    >
                      Best-Before-Date:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="best_before_date"
                      name="best_before_date"
                      value={formData.best_before_date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <br />
                  <hr />
                  <div className="mb-3">
                    <label htmlFor="packaging" className="form-label">
                      Packaging Type:
                    </label>
                    <select
                      type="text"
                      id="packaging_type"
                      name="packaging"
                      value={formData.packaging}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Please choose</option>
                      <option value="plastic_bag">Plastic Bag</option>
                      <option value="paper_bag">Paper Bag</option>
                      <option value="in_a_paper_box">In a Paper Box</option>
                      <option value="individually_packed_in_a_box">
                        Individually packed in a Box
                      </option>
                      <option value="other_packaging">Other Packaging</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="weight" className="form-label">
                      Weight Unit:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      required
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
                      value={formData.origin}
                      onChange={handleInputChange}
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
                      value={formData.standard_price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="sale_price" className="form-label">
                      Sale-Price:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="sale_price"
                      name="sale_price"
                      value={formData.sale_price}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="imageURL" className="form-label">
                      Image URL:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="image_url"
                      name="imageURL"
                      value={formData.imageURL}
                      onChange={handleInputChange}
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
