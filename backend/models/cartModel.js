// CartModel.js
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true 
  },
  products: [{
    product: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Product", 
      required: true 
    },
    quantity: { 
      type: Number, 
      required: true,
      min: 1 
    },
  }],
  created_at: { 
    type: Date, 
    default: Date.now 
  }
}, { versionKey: false });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
