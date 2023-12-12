import React from 'react'
import {useState} from 'react';

/* const ProductList = (props) => {
    const herbs = props.herbs;
    const title = props.title;
     */
  const ProductList = ({herbs, title}) => {  
  
    return (
    <div className="container">
    <h2 className="products-list">{title}</h2>
    <div className="row herbs">
    {herbs.map((herb)=>(
       
          <div className = 'col-md-6 col-lg-3 d-flex align-items-center justify-content-center mb-5' key={herb.id} >
            <div className="card product-card h-100 d-flex justify-content-center" >
                <img className="card-img-top img-thumbnail" src= {herb.image} alt = "product"/>
                <div className="card-body" >
                    <h5 className="card-title">{herb.name}</h5>
                    <p className="card-text" >BBD {herb.best_before_date}</p>
                    <p className="card-price">{herb.price} € </p>
                    <a className="btn btn-primary" href="/">Learn more</a>
                </div>                 
            </div>               
          </div>
    
       )
    )}
    </div>
    </div>
  )
}

export default ProductList