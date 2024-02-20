// ReviewModel.js
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  product: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product", 
    required: true 
  },
  stars: { 
    type: Number, 
    required: true, 
    min: 1, 
    max: 5 
  },
  comment: { 
    type: String 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
}, { versionKey: false });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
