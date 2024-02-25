// controller/productController.js

const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');


//create a new Product
const createProduct = asyncHandler(async(req,res) => {
  const {product_name,category, product_description, company_name,manufactured,
    best_before_date, packaging, weight, origin, standard_price, sale_price,imageURL} = req.body;

/* if (!product_name || !category || !product_description || !company_name || !manufactured
   || !best_before_date || !packaging || !weight || 
  !origin || !standard_price || !imageURL ){
   res.status(400)
   throw new Error('Please add all fields')   
  } */
  

const product = await Product.create({
  product_name,category, product_description, company_name,manufactured,
    best_before_date, packaging,weight,origin, standard_price, sale_price,imageURL
})

if(product){
   res.status(201).json({
      _id: product.id,
      product_name: product.product_name,
      category: product.category,
      product_description: product.product_description,
      company_name: product.company_name,
      manufactured: product.manufactured, 
      best_before_date: product.best_before_date,
      packaging: product.packaging,
      weight: product.weight,
      origin: product.origin,
      standard_price: product.standard_price,
      sale_price: product.sale_price,
      imageURL: product.imageURL,
      
     
   })
}else{
  res.status(400)
  throw new Error('Invalid product data')
}
});

// Delete a Product with  ID...
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'Product successful deleted' });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});
 

// GET alle Produkte
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// PUT (Update) ein Produkt nach ID
const updateProduct = asyncHandler(async (req, res) => {
  try {
    const updatedProduct = await res.product.set(req.body);
    await updatedProduct.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});


//---------------------------------
/* const ProductController = {
  // GET ALL
  getAllProducts: async (req, res) => {
    try {
      const productList = await Product.find({});
      res.status(200).json(productList); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failure`});
    }
  },

  // GET:ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json(product); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product request failure`});
    }
  },

  // POST
  createProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);  
      res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product registration failure` });  
    }
  },

  // PUT
  updateProduct: async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product update failure`});
    }
  },

  // DELETE
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found." });
      }
      res.status(200).json({ message: "Product deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - product delete failure`});
    }
  },

  // Listing products by category
  listingProductsByCategory: async (req, res) => {
    const category = req.query.category;
    try {
      const productsByCategory = await category.find({ category: category });
      res.status(200).json(productsByCategory);
    }
    catch (error) {
      res.status(500).json({ message: `${error.message} - product category failure`});
    }
  }
};
 */
module.exports= { createProduct,
                  getAllProducts,
                  deleteProduct,
                  updateProduct
                };
