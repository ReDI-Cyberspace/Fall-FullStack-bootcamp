import React, {useState, useEffect} from 'react';

import ProductCard from '../components/ProductCard';
import './AllProductsListStyle.css'

const WishList = () => {
 
  const [wishlist, setWishlist] = useState([]);
 //---------------------------------------------------- 
  useEffect(() => {
    
    // Beim Laden der Komponente die Wishlist-Daten aus dem Local Storage abrufen
    const wishlistData = getWishlistFromLocalStorage();

    setWishlist(wishlistData);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    // Aktualisieren Sie Ihren State, um das Produkt zu entfernen
    setWishlist(wishlist.filter(item => item._id !== productId));
  };
//----------------------------------------------
  const getWishlistFromLocalStorage = () => {
    const  wishlist = JSON.parse(localStorage.getItem('favoriteProducts'));
    
       return  wishlist.filter(item => item.flagged === true);
      }
  return (
    <div className='product-list'>
        <h1>Your Wishlist</h1>
       
        <div className='container mt-5'>
            <div className="container">
                <div className='row'>
                {wishlist.map((item) => (
                <div className='col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-3'>
                  <ProductCard product={item} onRemove={handleRemoveFromWishlist}/>
                </div>
              ))}
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default WishList






   
  
   
    
    

  

