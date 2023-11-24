import { useState,useEffect } from "react";

const buttons = [
  { id: "business", text: "Business Laptops" },
  { id: "gaming", text: "Gaming Laptops" },
  { id: "increasePrice", text: "Increasing Price" },
  { id: "decreasePrice", text: "Decreasing Price" },
  { id: "reset", text: "All Laptops" },
];

export default function Products(props) {
  const initialProducts = props.initialProducts;

  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [productQuantities, setProductQuantities] = useState({});

  const handleQuantityChange = (e, productId) => {
    const value = e.target.value;
    setProductQuantities((prevState) => ({
      ...prevState,
      [productId]: value,
    }));

    
  };

  useEffect(() => {
    console.log(productQuantities);
  }, [productQuantities]);

  const filterProducts = (category) => {
    if (category === "reset") {
      setFilteredProducts(initialProducts);
    } else if (category === "increasePrice") {
      const increasedPriceProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      setFilteredProducts(increasedPriceProducts);
    } else if (category === "decreasePrice") {
      const decreasedPriceProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
      setFilteredProducts(decreasedPriceProducts);
    } else {
      const filtered = initialProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const renderCards = () => {
    return filteredProducts.map((item) => (
      <div key={item.id} className="col-sm-4 d-flex align-items-center justify-content-center mb-5">
        <div className="card">
          <div className="cardimage d-flex justify-content-center">
            <img src={item.image} className="card-img-top w-50" alt={item.description} />
          </div>
          <div className="card-body p-1">
            <div className="d-flex">
              <h5 className="card-title text-truncate ">{item.title}</h5>
            </div>
            <div className="d-flex">
              <p className="card-text text-truncate">{item.description}</p>
            </div>
            <div className="d-flex justify-content-end">
              <p className="card-text fs-3 text-danger">{item.price} €</p>
            </div>
            <form className="d-flex flex-column">
              <input
                className="w-25 align-self-center fs-3 text-center"
                type="number"
                name="number"
                min="1"
                value={productQuantities[item.id] !== undefined ? productQuantities[item.id] : 1}

                onChange={(e) => handleQuantityChange(e, item.id)}
                id={`productQuantity-${item.id}`}
                
              /> 
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={() => props.addToCart(item.id, parseInt(productQuantities[item.id] || 1))}
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="m-3">
      <div className="container p-0 mb-2">
        <div className="row justify-content-center">
          {buttons.map((button) => (
            <div
              key={button.id}
              className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <button
                className="btn btn-primary btn-block my-2"
                id={button.id}
                onClick={() => filterProducts(button.id)}
              >
                {button.text}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="container mb-2">
          <div className="row">{renderCards()}</div>
        </div>
      </div>
    </div>
  );
}
