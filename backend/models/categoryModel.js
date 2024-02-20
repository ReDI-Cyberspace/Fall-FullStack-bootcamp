import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
  },
  description: { 
    type: String, 
    required: true 
  },
  related_products: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product" 
  }],
  meta_tags: [{
    type: String
  }], // keywords for SEO
  images: [{ 
    type: String 
  }],
  parent_category: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category" 
  },
  product_count: { 
    type: Number,
    default: 0 
  },
}, { versionKey: false });

const Category = mongoose.model("Category", categorySchema);

export default Category;
