import React, { useState } from 'react';

const ProduktDashboard = ({ initialProducts }) => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });
  
  const [editingProduct, setEditingProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });
  

  const addProduct = async (event) => {
    event.preventDefault();
    if (
      newProduct.title &&
      newProduct.price &&
      newProduct.description &&
      newProduct.category &&
      newProduct.image
    ) {
      const newProductWithId = {
        ...newProduct,
        id: products.length,
      };
  
      // Send a POST request to your API endpoint
      try {
        const response = await fetch("http://localhost:3000/products", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProductWithId),
        });
  
        if (response.ok) {
          // If the POST request is successful, update the state with the new product
          setProducts([...products, newProductWithId]);
  
          // Reset the form fields
          setNewProduct({
            title: '',
            price: 0,
            description: '',
            category: '',
            image: '',
          });
        } else {
          console.error('Failed to add product. Server returned an error.');
        }
      } catch (error) {
        console.error('Error sending POST request:', error);
      }
    }
  };
  

  const deleteProduct = async (productId) => {
    // Send a DELETE request to your API endpoint
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // If the DELETE request is successful, update the state to reflect the deletion
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      } else {
        console.error('Failed to delete product. Server returned an error.');
      }
    } catch (error) {
      console.error('Error sending DELETE request:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct((prevEditingProduct) => ({
        ...prevEditingProduct,
        [name]: value,
      }));
    } else {
      setNewProduct((prevNewProduct) => ({
        ...prevNewProduct,
        [name]: value,
      }));
    }
  };
  

  const handleEditProduct = (product) => {
    setEditingProduct({...product});
    
  };

  const updateProduct = async () => {
    // Send a PUT or PATCH request to your API endpoint
    try {
      const response = await fetch(`http://localhost:3000/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct),
      });
  
      if (response.ok) {
        // If the PUT request is successful, update the state to reflect the changes
        const updatedProducts = products.map((product) =>
          product.id === editingProduct.id ? editingProduct : product
        );
        console.log(updatedProducts)
        setProducts(updatedProducts);
        setEditingProduct(null);
        
      } else {
        console.error('Failed to update product. Server returned an error.');
      }
    } catch (error) {
      console.error('Error sending PUT/PATCH request:', error);
    }
  };
  

  return (
    <div className="container mt-4">
      <form  onSubmit={addProduct}>
        <div className="col mb-2">
            <label htmlFor="title" className="form-label text-success"> Title</label>
          <input id="title" className="form-control" type="text" name="title" placeholder="Title" value={editingProduct ? editingProduct.title : newProduct.title} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="price" className="form-label text-success">Price</label>
          <input id='price' className="form-control" type="number" name="price" placeholder="Price" value={editingProduct ? editingProduct.price : newProduct.price} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="description" className="form-label text-success">Description</label>
          <input id='description' className="form-control" type="text" name="description" placeholder="Description" value={editingProduct ? editingProduct.description : newProduct.description} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="category" className="form-label text-success">Category</label>
          <select id='category' className="form-select" name="category" value={editingProduct ? editingProduct.category : newProduct.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="business">Business</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>
        <div className="col mb-2">
            <label htmlFor="image" className="form-label text-success">Image</label>
          <input id='image' className="form-control" type="text" name="image" placeholder="Image URL" value={editingProduct ? editingProduct.image : newProduct.image} onChange={handleInputChange} />
        </div>
        <div className="col d-flex justify-content-center mt-3">
          <button className="btn btn-primary me-2" type="submit">Add Product</button>
          {editingProduct && <button className="btn btn-primary" onClick={updateProduct}>Save Changes</button>}
        </div>
      </form>

      <div className="row mt-4">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-3">
            <div className="card">
              <div className="card-body">
              <div className="cardimage d-flex justify-content-center">
            <img src={product.image} className="card-img-top w-50" alt={product.description} />
          </div>
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-text">{product.category}</p>
                <button className="btn btn-danger me-2" onClick={() => deleteProduct(product.id)}>Delete</button>
                <button className="btn btn-primary" onClick={() => handleEditProduct(product)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProduktDashboard;