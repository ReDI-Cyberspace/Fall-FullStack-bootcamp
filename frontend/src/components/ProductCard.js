import React from 'react'
import { Link} from 'react-router-dom';
import Heart from './../details/Heart';
import './ProductCardStyle.css'

const ProductCard = ({product}) => {
   
  return (
   
        <div>
                 <div className="card" >
                    <div className='product-heart'>
                        <Heart product={product}/>
                    </div>
                    <img src={product.imageURL} className="card-img-top img-thumbnail" alt="..."/>
                        <div className="card-body">
                            
                            <h6 className="card-title fst-italic fw-bolder">{product.product_name.substring(0,15)}</h6>
                            <h5><span className="badge bg-color">{product.standard_price} €</span></h5>
                            <p className="card-text"><small>{product.category}</small></p>
                            <Link  className="btn btn-primary" to="/product-details">Learn more</Link>
                        </div>
                </div>
            </div>
      
    )
}

export default ProductCard