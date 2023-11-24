export default function Cart(props) {
  const cartItems = props.cart;

  // Sepetteki tüm ürünlerin fiyatlarını topla
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="row">
        <div className="carItems col-sm-9 mb-3 p-1">
          {cartItems.map((item) => (
            <div key={item.product.id} className=" mb-3">
              <div className="card">
                <img
                  src={item.product.image}
                  className="card-img-top"
                  alt={item.product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.product.title}</h5>
                  <p className="card-text">{item.product.description}</p>
                  <p className="card-text">
                    Unit Price: {item.product.price} €
                  </p>
                  <p className="card-text">
                    Total Price: {item.product.price * item.quantity} €
                  </p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-sm-3 p-1">
          <div className="card">
            <div className="card-body">
              {/* Toplam fiyat */}
              <h5 className="card-title">Total Amount</h5>
              <h4>{totalAmount} €</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
