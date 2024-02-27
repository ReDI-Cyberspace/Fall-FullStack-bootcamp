import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./AllProductsListStyle.css";
import Categories from "../components/Categories";

const AllProductsList = () => {
  const [items, setItems] = useState([]);
  //-----------------------------------------

  useEffect(() => {
    let lsProducts = JSON.parse(localStorage.getItem("favoriteProducts"));
    if (lsProducts.length === 0) {
      fetchData();
    } else {
      setItems(lsProducts);
    }
  }, []);

  //------------------------------------------

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product-list`);

      localStorage.setItem("favoriteProducts", JSON.stringify(response.data));
      const lsProducts = JSON.parse(localStorage.getItem("favoriteProducts"));
      setItems(lsProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //-------------------------------------------

  return (
    <>
      <h4 className="contactTitle"> C a t e g o r i e s</h4>
      <Categories />
      <div className="product-list">
        <div className="container mt-5">
          <div className="container">
            <div className="row">
              {items.map((item) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3">
                  <div key={item._id}>
                    <ProductCard product={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsList;
