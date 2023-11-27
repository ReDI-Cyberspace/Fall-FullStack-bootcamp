// array of objects //
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");
  const resetButton = document.getElementById("resetButton");
  
  // Sample product data
  const products = [
      {
          name: "Jana ",
          price: 100,
          color: "Red",
          type:  "Dress",
          image: "images/reddress.jpeg",
      },
      {
          name: "Gucci",
          price: 500,
          color: "Green",
          type:  "Dress",
          image: "images/greendress.jpeg",
      },
      {
          name: "Debby",
          price: 400,
          color: "Black",
          type:  "Dress",
          image: "images/blackdress.jpeg",
      },

      {
        name: "Tutu top",
        price: 400,
        color: "Black",
        type: "Top",
        image: "images/top2.jpeg",
    },
    {
      name: "Armless ",
      price: 200,
      color: "red",
      type:  "Top",
      image: "images/top1.jpeg",
  },

  {
    name: "YAS ",
    price: 200,
    color: "Black",
    type:  "Dress",
    image: "images/black short.jpeg",
},

      // Add more products as needed
  ];

    function displayProducts(productList) {
        gallery.innerHTML = ""; // Clear the gallery

        productList.forEach((product) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const productImage = document.createElement("img");
            productImage.src = product.image;

            const productName = document.createElement("h2");
            productName.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = "Price: $" + product.price;

            const productColor = document.createElement("p");
            productColor.textContent = "Color: " + product.color;

            const productType = document.createElement("p");
            productType.textContent = "Type: " + product.type;

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productColor);
            productCard.appendChild(productType);

            gallery.appendChild(productCard);
        });
    }
    displayProducts(products); 

    // Add the reset button to the page
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', () => {
      displayProducts(products); // Reset the display to show all products

    });
    document.getElementById('sortByPrice').addEventListener('click', () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => a.price - b.price);
        displayProducts(sortedProducts);
    });

    document.getElementById('sortByName').addEventListener('click', () => {
        const sortedProducts = [...products];
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        displayProducts(sortedProducts);
    });

    document.getElementById('filterByDress').addEventListener('click', () => {
        const filteredProducts = products.filter(product => product.type === 'Dress');
        displayProducts(filteredProducts);
    });

    document.getElementById('filterByTop').addEventListener('click', () => {
        const filteredProducts = products.filter(product => product.type === 'Top');
        displayProducts(filteredProducts);
    });
});