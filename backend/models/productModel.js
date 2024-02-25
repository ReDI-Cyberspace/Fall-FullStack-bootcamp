//ProductModel.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  /* id: { 
    type: mongoose.Schema.Types.ObjectId 
  }, */
  product_name: {
    type: String,
    required: true,
    // index: true
  },
  /* slug: {
    type: String,
    required: true
  }, */
  category: {
    type: String,
    required: true,
  },
  product_description: {
    type: String,
    required: true
  },
  
  /* category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  }, */
 /*  material: {
    type: String
  }, */

  company_name:{
    type: String,
    required: true
  },
  manufactured: {
    type: Date,
    required: true
  },
  best_before_date: {
    type: Date,
    required: true
  },
  packaging: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },

  /* condition: {
    type: String,
    enum: ["New/Unused", "Used/Excellent", "Used/Good", "Used/Fair", "Poor"],
    required: true,
  }, */
  /* dimensions: {
    type: {
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    },
  }, */
  origin: { 
    type: String,
    required: true 
  },
  standard_price: {
    type: Number,
    required: true,
  },
  sale_price: {
    type: Number,
    default: null,
  },
  imageURL: {
    type: String,
    default: null,


  },
  flagged:{
    type: Boolean,
    default: false,
  }
  /* product_gallery: [String],
  is_default: {
    type: Boolean,
    default: false
  }, */
  /* hasProvenanceDocumentation: {
    type: Boolean,
    required: true,
    default: false } */
}, { versionKey: false });



const ProductModel=mongoose.model('Product', productSchema);
module.exports = ProductModel;

