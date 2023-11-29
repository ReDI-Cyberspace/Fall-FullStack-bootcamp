// Gallery.js

import React, { useState } from 'react';



const Gallery = () => {
  // Sample product data
  const initialProducts = [
    {
      name: "Jana",
      price: 100,
      color: "Red",
      type: "Dress",
      image: "images/reddress.jpeg",
    },
    {
      name: "Gucci",
      price: 500,
      color: "Green",
      type: "Dress",
      image: "images/greendress.jpeg",
    },
    {
      name: "Debby",
      price: 400,
      color: "Black",
      type: "Dress",
      image: "images/blackdress.jpeg",
    },
    {
      name: "Tutu top",
      price: 400,
      color: "Black",
      type: "Top",
      image: "images/top2.jpeg",
    },
    {
      name: "Armless",
      price: 200,
      color: "Red",
      type: "Top",
      image: "images/top1.jpeg",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  // Function to reset products to initial state
  const resetProducts = () => {
    setProducts(initialProducts);
  };

  // Function to sort products by price
  const sortByPrice = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  // Function to sort products by name
  const sortByName = () => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedProducts);
  };

  // Function to filter products by dress type
  const filterByDress = () => {
    const filteredProducts = products.filter((product) => product.type === 'Dress');
    setProducts(filteredProducts);
  };

  // Function to filter products by top type
  const filterByTop = () => {
    const filteredProducts = products.filter((product) => product.type === 'Top');
    setProducts(filteredProducts);
  };

  return (
    <div className="container">
      <h1>Gallery</h1>
      <div id="gallery">
        <button onClick={resetProducts}>Reset</button>
        {/* Product items will be appended here */}
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Color: {product.color}</p>
            <p>Type: {product.type}</p>
          </div>
        ))}
      </div>
      <button onClick={sortByPrice}>Sort by price</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={filterByDress}>Filter by Dress</button>
      <button onClick={filterByTop}>Filter by Top</button>

    </div>
  );
};

export default Gallery;
