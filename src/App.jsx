import { useState } from "react";
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

import RootLayout from "./layouts/RootLayout";

const initialProducts = [
  {
    id: 0,
    title: "ASUS TUF Gaming F17 (FX706HM-HX004W), Gaming-Notebook",
    price: 1069,
    description:
      "Volle Kraft voraus auf großem Display: Das TUF Gaming F17 (FX706HM-HX004) ist ein leistungsfähiges Gaming-Notebook mit üppiger Display-Diagonale.",
    category: "gaming",
    image:
      "https://www.alternate.de/p/o/1/3/ASUS_TUF_Gaming_F17__FX706HM_HX004W___Gaming_Notebook@@100003431.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 1,
    title: "Lenovo IdeaPad 5 Pro 16ARH7 (82SN007SGE), Notebook",
    price: 1049,
    description:
      " Angetrieben von einem AMD Ryzen 7 6800HS Creator Edition Prozessor, 16 Gigabyte LPDDR5 Arbeitsspeicher und einer NVIDIA GeForce RTX 3050 Ti ",
    category: "gaming",
    image:
      "https://www.alternate.de/p/o/8/1/Lenovo_IdeaPad_5_Pro_16ARH7__82SN007SGE___Notebook@@1864218.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 2,
    title: "Lenovo Legion 5 15ARH7H (82RD001MGE), Gaming-Notebook",
    price: 1249,
    description:
      " Mit seinem AMD Ryzen 7 6800H Prozessor, 16 GB DDR5-RAM und einer NVIDIA GeForce RTX 3070 Ti Grafikkarte liefert das Legion 5 reichlich Leistung für moderne",
    category: "gaming",
    image:
      "https://www.alternate.de/p/o/4/0/Lenovo_Legion_5_15ARH7H__82RD001MGE___Gaming_Notebook@@1868204.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 3,
    title: "Lenovo IdeaPad Gaming 3 (82SA000AGE), Gaming-Notebook",
    price: 1079,
    description:
      "Dieses Notebook hat mit einem Intel® Core™ i7-12650H Prozessor, 16 Gigabyte DDR4-RAM und einer ein Teragabyte großen M.2 PCIe-SSD reichlich Leistungsreserven",
    category: "gaming",
    image:
      "https://www.alternate.de/p/600x600/6/8/Lenovo_IdeaPad_Gaming_3__82SA000AGE___Gaming_Notebook@@1868186.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 4,
    title: "GIGABYTE AORUS 15 BSF-73DE754SH, Gaming-Notebook",
    price: 1699,
    description:
      "Ein Intel® Core™ i5-13700H mit 16 Kernen gibt den Takt vor, hinzu kommen 16 Gigabyte DDR5-Arbeitsspeicher mit 4800 MHz und eine blitzschnelle, ein Terabyte",
    category: "gaming",
    image:
      "https://www.alternate.de/p/o/5/6/GIGABYTE_AORUS_15_BSF_73DE754SH__Gaming_Notebook@@1904065.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 5,
    title: "LG gram 16Z90R-G.AD7CG, Notebook",
    price: 1699,
    description:
      "Das Herzstück des Notebooks im 16-Zoll-Format ist ein Intel® Core™ Prozessor der 13. Generation mit integrierter Intel® Iris® Xe Grafiklösung. ",
    category: "business",
    image:
      "https://www.alternate.de/p/600x600/0/9/LG_gram_16Z90R_G_AD7CG__Notebook@@1906090.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 6,
    title: "HP 255 G9 (7N0T0ES), Notebook",
    price: 619,
    description:
      "Eine Kombination aus 16 Gigabyte DDR4-RAM und einer 512 Gigabyte großen M.2 PCIe-SSD liefert schnelle Zugriffszeiten  Hardware an  Hardware an. ",
    category: "business",
    image:
      "https://www.alternate.de/p/o/4/4/HP_255_G9__7N0T0ES___Notebook@@1910644.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 7,
    title: "HP 17-cp2157ng, Notebook",
    price: 469,
    description:
      "Mit einem AMD Ryzen 5 7520U Prozessor, 16 Gigabyte LPDDR5-Arbeitsspeicher und einer schnellen, 512 Gigabyte großen M.2 PCIe NVMe-SSD ist flotte",
    category: "business",
    image:
      "https://www.alternate.de/p/600x600/0/7/HP_17_cp2157ng__Notebook@@100003470.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 8,
    title: "HP 15-fc0174ng, Notebook ",
    price: 499,
    description:
      "Mit einem AMD Ryzen 7 7730U Achtkern-Prozessor, 16 Gigabyte DDR4-Arbeitsspeicher und einer schnellen, 512 Gigabyte großen M.2 PCIe NVMe-SSD ist flotte",
    category: "business",
    image:
      "https://www.alternate.de/p/600x600/6/0/HP_15_fc0174ng__Notebook@@1903906.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId, quantity) => {
    const productToAdd = initialProducts.find(
      (product) => product.id === productId
    );
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart.find((item) => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        updatedCart.push({
          id: productId,
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
          if (item.id === productId) {
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
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    alertify.error("Product deleted");
  };

  const clearCart =() => {
    setCart([]); // Sepeti boş bir dizi olarak güncelle
    alertify.success("The order was placed successfully");
  }

  const totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout totalQuantity={totalQuantity} />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="products"
          element={
            <Products initialProducts={initialProducts} addToCart={addToCart} />
          }
        />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
