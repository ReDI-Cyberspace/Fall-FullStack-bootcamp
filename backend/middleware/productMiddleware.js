const express = require("express");
const asyncHandler= require('express-async-handler');
const Product = require('../models/productModel');

const getProduct = asyncHandler(async(req, res, next) => {
   
        let product;
        try {
          product = await Product.findById(req.params.id);
          if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
          }
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      
        res.product = product;
        next();
      })

module.exports = {getProduct}

