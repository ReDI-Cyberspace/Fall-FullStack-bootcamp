export default function Cart(props) {
  const cartItems = props.cart;

  return (
    <div className="container">
      <div className="row">
        {cartItems.map((item) => (
          <div key={item.product.id} className="col-md-12 mb-3">
            <div className="card">
              <img src={item.product.image} className="card-img-top " alt={item.product.title} />
              <div className="card-body">
                <h5 className="card-title">{item.product.title}</h5>
                <p className="card-text">{item.product.description}</p>
                <p className="card-text">Unit Price:{item.product.price} €</p>
                <p className="card-text">Total Price:{item.product.price*item.quantity} €</p>
                <p className="card-text">Quantity: {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
