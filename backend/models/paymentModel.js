import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  paymentMethod: {
    type: String,
    enum: ["Creditcard", "Paypal", "Stripe", "Bitcoin"],
    required: true,
  },
  transactionDate: { 
    type: Date, 
    default: Date.now 
  },
  transactionStatus: {
    type: String,
    enum: ["Pending", "Completed", "Cancelled"],
    default: "Pending"
  }
}, { versionKey: false });

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
