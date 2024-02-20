//ProductModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { 
    type: mongoose.Schema.Types.ObjectId 
  },
  product_name: {
    type: String,
    required: true,
    index: true
  },
  slug: {
    type: String,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  material: {
    type: String
  },
  manufactured: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    enum: ["New/Unused", "Used/Excellent", "Used/Good", "Used/Fair", "Poor"],
    required: true,
  },
  dimensions: {
    type: {
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    },
  },
  origin: { 
    type: String,
    required: true 
  },
  original_price: {
    type: Number,
  },
  sale_price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
  },
  product_gallery: [String],
  is_default: {
    type: Boolean,
    default: false
  },
  hasProvenanceDocumentation: {
    type: Boolean,
    required: true,
    default: false }
}, { versionKey: false });

const Product = mongoose.model("Product", productSchema);

export default Product;
