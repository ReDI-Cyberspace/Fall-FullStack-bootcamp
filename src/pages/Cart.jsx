import { useState,useEffect } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti'

export default function Cart(props) {
  const cartItems = props.cart;
  const [orderSummary, setOrderSummary] = useState([]);
  const [orderTotalAmout,setOrderTotalAmount] = useState(0)

  const [showSummary, setShowSummary] = useState(false);

  const { width, height } = useWindowSize();
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleDecrease = (productId) => {
    props.decreaseQuantity(productId);
  };

  const handleIncrease = (productId) => {
    props.increaseQuantity(productId);
  };

  const handleDelete = (productId) => {
    props.removeFromCart(productId);
  };

  const handlePayment = () => {
    setOrderSummary([...cartItems]);
    setOrderTotalAmount(totalAmount)
    setShowSummary(true);
    props.clearCart();
    setPaymentCompleted(true);

  };

  useEffect(() => {
    if (paymentCompleted) {
     
      setTimeout(() => {
        setPaymentCompleted(false);
      }, 6000); 
    }
  }, [paymentCompleted]);

  if (showSummary) {
    return (
      <div className="container">
        {paymentCompleted && <Confetti width={width} height={height} />}
        <h1>Order Summary</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderSummary.map((item) => (
              <tr key={item.product.id}>
                <td>{item.product.title}</td>
                <td>{item.product.description}</td>
                <td>{item.quantity}</td>
                <td>{item.product.price * item.quantity} €</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end">
                Total Amount:
              </td>
              <td>{orderTotalAmout}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="carItems col-sm-9 mb-3 p-1">
          {cartItems.map((item) => (
            <div key={item.product.id} className=" mb-3">
              <div className="card flex-row">
                
                  <img
                    src={item.product.image}
                    className="card-img-top w-50 h-25"
                    alt={item.product.title}
                  />
                
                <div className="card-body p-0">
                  <h5 className="card-title">{item.product.title}</h5>
                  <p className="card-text">{item.product.description}</p>
                  <p className="card-text">
                    Unit Price: {item.product.price} €
                  </p>
                  <p className="card-text">
                    Total Price: {item.product.price * item.quantity} €
                  </p>
                  <p className="card-text">
                    Quantity:{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDecrease(item.product.id)}
                    >
                      -
                    </button>{" "}
                    {item.quantity}{" "}
                    <button
                      className="btn btn-success"
                      onClick={() => handleIncrease(item.product.id)}
                    >
                      +
                    </button>
                  </p>
                  <div className="container d-flex flex-row-reverse">
                    <button
                      className="btn btn-danger mb-2"
                      onClick={() => handleDelete(item.product.id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalAmount === 0 ? (
          <h1 className="text-center">Your Cart is empty</h1>
        ) : (
          <div className="col-sm-3 p-1 mb-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Amount</h5>
                <h4>{totalAmount} €</h4>
              </div>
              <button className="btn btn-primary" onClick={handlePayment}>
                Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
