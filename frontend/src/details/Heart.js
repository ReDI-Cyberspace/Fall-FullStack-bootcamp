import React, { useState , useEffect} from 'react';
import { AiOutlineHeart} from "react-icons/ai";
import { FaHeart } from 'react-icons/fa';
import './HeartStyles.css';

import axios from 'axios'

const Heart = ({product, onRemove}) => {

  const [isFavorited, setIsFavorited] = useState(product.flagged);

  //------------------------------------------------
  const toggleFavorite = () => {

    const newFlag = !isFavorited;
          setIsFavorited(newFlag);
    updateProductInLocalStorage(product._id,newFlag)

    if (!newFlag && onRemove) {
      onRemove(product._id);
    }
  
  };
  
  //----------------------------------------------
  const updateProductInLocalStorage =(productId, flag)=>{ 

      let  products = JSON.parse(localStorage.getItem('favoriteProducts')) ;
      const productIndex = products.findIndex(item=> item._id === product._id)
    
        products[productIndex].flagged = flag;
        localStorage.setItem('favoriteProducts', JSON.stringify(products));
      
    };

  return (
    <div className="heart-container">
       <span className="favorite-icon" onClick={toggleFavorite}>
       {isFavorited ? <FaHeart style={{ color: 'red' }}/> : <AiOutlineHeart style={{ color: 'red' }} />  } 
      </span>    
    </div>
  )
}

export default Heart