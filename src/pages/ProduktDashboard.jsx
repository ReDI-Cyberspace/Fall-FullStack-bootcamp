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
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (event) => {
    event.preventDefault();
    if (newProduct.title && newProduct.price && newProduct.description && newProduct.category && newProduct.image) {
      const newProductWithId = {
        ...newProduct,
        id: products.length,
      };
      setProducts([...products, newProductWithId]);
      setNewProduct({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
      });
    }
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({ ...product });
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === newProduct.id ? newProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
    setNewProduct({
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
    });
  };

  return (
    <div className="container mt-4">
      <form  onSubmit={addProduct}>
        <div className="col mb-2">
            <label htmlFor="title" className="form-label text-success"> Title</label>
          <input id="title" className="form-control" type="text" name="title" placeholder="Title" value={newProduct.title} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="price" className="form-label text-success">Price</label>
          <input id='price' className="form-control" type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="description" className="form-label text-success">Description</label>
          <input id='description' className="form-control" type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
        </div>
        <div className="col mb-2">
            <label htmlFor="category" className="form-label text-success">Category</label>
          <select id='category' className="form-select" name="category" value={newProduct.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            <option value="business">Business</option>
            <option value="gaming">Gaming</option>
          </select>
        </div>
        <div className="col mb-2">
            <label htmlFor="image" className="form-label text-success">Image</label>
          <input id='image' className="form-control" type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} />
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
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
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
