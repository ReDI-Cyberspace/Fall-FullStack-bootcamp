import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
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
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  }],
  totalPrice: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "In progress", "Completed", "Cancelled"], 
    default: "Pending" 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  shoppingAddress: {
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentMethod: { type: String },
  statusHistory: [{
    status: { 
      type: String, 
      enum: ["Pending", "In progress", "Completed", "Cancelled"], 
      required: true 
    },
    updatedAt: { type: Date, default: Date.now }
  }]
}, { versionKey: false });

const Order = mongoose.model("Order", orderSchema);

export default Order;
