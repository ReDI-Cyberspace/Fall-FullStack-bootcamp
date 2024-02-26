import { useState, useEffect } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProduktDashboard from "./pages/ProduktDashboard";

import RootLayout from "./layouts/RootLayout";


function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        //console.log(data)
        setInitialProducts(data);
        console.log(initialProducts)
      } catch (error) {
        console.error("There was a problem fetching the data: ", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (productId, quantity) => {
    const productToAdd = initialProducts.find(
      (product) => product._id === productId
    );
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find((item) => item._id === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        updatedCart.push({
          _id: productId,
          quantity: quantity,
          product: productToAdd,
        });
      }

      alertify.success(productToAdd.title + " added to cart");
      return updatedCart;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item._id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      return updatedCart;
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    alertify.error("Product deleted");
  };

  const clearCart = () => {
    setCart([]);
    alertify.success("The order was placed successfully");
  };

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout totalQuantity={totalQuantity} />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        {initialProducts.length > 0 && (
          <Route
            path="products"
            element={
              <Products
                initialProducts={initialProducts}
                addToCart={addToCart}
              />
            }
          />
        )}
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="dashboard" element={<ProduktDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
