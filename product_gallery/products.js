const array = [
  {
    id: 1,
    title: "ASUS TUF Gaming F17 (FX706HM-HX004W), Gaming-Notebook",
    price: 1069,
    description:
      "Volle Kraft voraus auf großem Display: Das TUF Gaming F17 (FX706HM-HX004) ist ein leistungsfähiges Gaming-Notebook mit üppiger Display-Diagonale.",
    category: "gaming laptop",
    image:
      "https://www.alternate.de/p/o/1/3/ASUS_TUF_Gaming_F17__FX706HM_HX004W___Gaming_Notebook@@100003431.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Lenovo IdeaPad 5 Pro 16ARH7 (82SN007SGE), Notebook",
    price: 1049,
    description:
      " Angetrieben von einem AMD Ryzen 7 6800HS Creator Edition Prozessor, 16 Gigabyte LPDDR5 Arbeitsspeicher und einer NVIDIA GeForce RTX 3050 Ti ",
    category: "gaming laptop",
    image:
      "https://www.alternate.de/p/o/8/1/Lenovo_IdeaPad_5_Pro_16ARH7__82SN007SGE___Notebook@@1864218.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Lenovo Legion 5 15ARH7H (82RD001MGE), Gaming-Notebook",
    price: 1249,
    description:
      " Mit seinem AMD Ryzen 7 6800H Prozessor, 16 GB DDR5-RAM und einer NVIDIA GeForce RTX 3070 Ti Grafikkarte liefert das Legion 5 reichlich Leistung für moderne",
    category: "gaming laptop",
    image:
      "https://www.alternate.de/p/o/4/0/Lenovo_Legion_5_15ARH7H__82RD001MGE___Gaming_Notebook@@1868204.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Lenovo IdeaPad Gaming 3 (82SA000AGE), Gaming-Notebook",
    price: 1079,
    description:
      "Dieses Notebook hat mit einem Intel® Core™ i7-12650H Prozessor, 16 Gigabyte DDR4-RAM und einer ein Teragabyte großen M.2 PCIe-SSD reichlich Leistungsreserven",
    category: "gaming laptop",
    image:
      "https://www.alternate.de/p/600x600/6/8/Lenovo_IdeaPad_Gaming_3__82SA000AGE___Gaming_Notebook@@1868186.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "GIGABYTE AORUS 15 BSF-73DE754SH, Gaming-Notebook",
    price: 1699,
    description:
      "Ein Intel® Core™ i5-13700H mit 16 Kernen gibt den Takt vor, hinzu kommen 16 Gigabyte DDR5-Arbeitsspeicher mit 4800 MHz und eine blitzschnelle, ein Terabyte",
    category: "gaming laptop",
    image:
      "https://www.alternate.de/p/o/5/6/GIGABYTE_AORUS_15_BSF_73DE754SH__Gaming_Notebook@@1904065.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "LG gram 16Z90R-G.AD7CG, Notebook",
    price: 1699,
    description:
      "Das Herzstück des Notebooks im 16-Zoll-Format ist ein Intel® Core™ Prozessor der 13. Generation mit integrierter Intel® Iris® Xe Grafiklösung. ",
    category: "business laptop",
    image:
      "https://www.alternate.de/p/600x600/0/9/LG_gram_16Z90R_G_AD7CG__Notebook@@1906090.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "HP 255 G9 (7N0T0ES), Notebook",
    price: 619,
    description:
      "Eine Kombination aus 16 Gigabyte DDR4-RAM und einer 512 Gigabyte großen M.2 PCIe-SSD liefert schnelle Zugriffszeiten  Hardware an  Hardware an. ",
    category: "business laptop",
    image:
      "https://www.alternate.de/p/o/4/4/HP_255_G9__7N0T0ES___Notebook@@1910644.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "HP 17-cp2157ng, Notebook",
    price: 469,
    description:
      "Mit einem AMD Ryzen 5 7520U Prozessor, 16 Gigabyte LPDDR5-Arbeitsspeicher und einer schnellen, 512 Gigabyte großen M.2 PCIe NVMe-SSD ist flotte",
    category: "business laptop",
    image:
      "https://www.alternate.de/p/600x600/0/7/HP_17_cp2157ng__Notebook@@100003470.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "HP 15-fc0174ng, Notebook ",
    price: 499,
    description:
      "Mit einem AMD Ryzen 7 7730U Achtkern-Prozessor, 16 Gigabyte DDR4-Arbeitsspeicher und einer schnellen, 512 Gigabyte großen M.2 PCIe NVMe-SSD ist flotte",
    category: "business laptop",
    image:
      "https://www.alternate.de/p/600x600/6/0/HP_15_fc0174ng__Notebook@@1903906.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
];
 
// Function to create and populate cards
function createCards() {
  const cardContainer = document.getElementById("card-container");

  array.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "col-sm-4 d-flex align-items-center justify-content-center mb-4";
    cardDiv.innerHTML = `
      <div class="card" style="width: 20rem">
        <div class="cardimage d-flex justify-content-center">
          <img src="${item.image}" class="card-img-top w-50" alt="..." />
        </div>
        <div class="card-body p-1">
          <div class="d-flex">
            <h5 class="card-title text-truncate ">${item.title}</h5>
          </div>
          <div class="d-flex">
            <p class="card-text text-truncate">${item.description}</p>
          </div>
          
          
          <div class="d-flex justify-content-end">
            <p class="card-text fs-3 text-danger">${item.price} €</p>
          </div>

          <form class="d-flex flex-column">
          <input class="w-25 align-self-center fs-3 text-center" type="number" name="number" min="1" value="1" id="productQuantity-${item.id}">
          <button type="button" class="btn btn-primary mt-2" onclick="addToCart(${item.id})">Add to Cart</button>
        </form>
        </div>
      </div>
    `;

    cardContainer.appendChild(cardDiv);
  });
}

// Call the createCards function to populate the cards
createCards();

// Add to Cart function
function addToCart(productId) {
 
  // success notification
// Shorthand for:
// alertify.notify( message, 'success', [wait, callback]);
alertify.success('Product added to cart');



  const quantityInput = document.getElementById(`productQuantity-${productId}`);
  const quantity = parseInt(quantityInput.value);

  if (quantity > 0) {
    // Check if the product is already in localStorage
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      // Update the quantity if the product is already in the cart
      existingItem.quantity += quantity;
    } else {
      // Add the product to the cart if it's not already there
      const product = array.find(item => item.id === productId);
      cartItems.push({ id: productId, quantity, title: product.title, price: product.price,image:product.image });
    }

    // Save the updated cartItems to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

}

// reseting button
document.getElementById("reset").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear the cards
  createCards();
});

// "Business Laptops" button
document.getElementById("business").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear the cards

  array.forEach((item) => {
    if (item.category === "business laptop") {
      const cardDiv = document.createElement("div");
      cardDiv.className =
        "col-sm-4 d-flex align-items-center justify-content-center mb-4";
      cardDiv.innerHTML = `
  <div class="card" style="width: 20rem">
    <div class="cardimage d-flex justify-content-center">
      <img src="${item.image}" class="card-img-top w-50" alt="..." />
    </div>
    <div class="card-body p-1">
      <div class="d-flex">
        <h5 class="card-title text-truncate ">${item.title}</h5>
      </div>
      <div class="d-flex">
        <p class="card-text text-truncate">${item.description}</p>
      </div>
      
      <div class="d-flex justify-content-end">
        <p class="card-text fs-3 text-danger">${item.price} €</p>
      </div>
      <form class="d-flex flex-column">
          <input class="w-25 align-self-center fs-3 text-center" type="number" name="number" min="1" value="1" id="productQuantity-${item.id}">
          <button type="button" class="btn btn-primary mt-2" onclick="addToCart(${item.id})">Add to Cart</button>
        </form>
    </div>
  </div>
`;

      cardContainer.appendChild(cardDiv);
    }
  });
});

// gaming laptops
document.getElementById("gaming").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear the cards

  array.forEach((item) => {
    if (item.category === "gaming laptop") {
      const cardDiv = document.createElement("div");
      cardDiv.className =
        "col-sm-4 d-flex align-items-center justify-content-center mb-4";
      cardDiv.innerHTML = `
  <div class="card" style="width: 20rem">
    <div class="cardimage d-flex justify-content-center">
      <img src="${item.image}" class="card-img-top w-50" alt="..." />
    </div>
    <div class="card-body p-1">
      <div class="d-flex">
        <h5 class="card-title text-truncate ">${item.title}</h5>
      </div>
      <div class="d-flex">
        <p class="card-text text-truncate">${item.description}</p>
      </div>
      
      <div class="d-flex justify-content-end">
        <p class="card-text fs-3 text-danger">${item.price} €</p>
      </div>
      <form class="d-flex flex-column">
          <input class="w-25 align-self-center fs-3 text-center" type="number" name="number" min="1" value="1" id="productQuantity-${item.id}">
          <button type="button" class="btn btn-primary mt-2" onclick="addToCart(${item.id})">Add to Cart</button>
        </form>
    </div>
  </div>
`;

      cardContainer.appendChild(cardDiv);
    }
  });
});
// "Increasing Price" button
document.getElementById("increasePrice").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Önce mevcut kartları temizle

  // sorting the array
  const sortedArray = array.slice().sort((a, b) => a.price - b.price);

  // clear the cardContainer'
  cardContainer.innerHTML = "";

  sortedArray.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "col-sm-4 d-flex align-items-center justify-content-center mb-4";
    cardDiv.innerHTML = `
<div class="card" style="width: 20rem">
  <div class="cardimage d-flex justify-content-center">
    <img src="${item.image}" class="card-img-top w-50" alt="..." />
  </div>
  <div class="card-body p-1">
    <div class="d-flex">
      <h5 class="card-title text-truncate ">${item.title}</h5>
    </div>
    <div class="d-flex">
      <p class="card-text text-truncate">${item.description}</p>
    </div>
    
    <div class="d-flex justify-content-end">
      <p class="card-text fs-3 text-danger">${item.price} €</p>
    </div>
    <form class="d-flex flex-column">
          <input class="w-25 align-self-center fs-3 text-center" type="number" name="number" min="1" value="1" id="productQuantity-${item.id}">
          <button type="button" class="btn btn-primary mt-2" onclick="addToCart(${item.id})">Add to Cart</button>
        </form>
  </div>
</div>
`;

    cardContainer.appendChild(cardDiv);
  });
});
// "Decreasing Price" button
document.getElementById("decreasePrice").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // clear the card

  // sorting array
  const sortedArray = array.slice().sort((a, b) => b.price - a.price);

  // clear the cardContainer
  cardContainer.innerHTML = "";

  sortedArray.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "col-sm-4 d-flex align-items-center justify-content-center mb-4";
    cardDiv.innerHTML = `
<div class="card" style="width: 20rem">
  <div class="cardimage d-flex justify-content-center">
    <img src="${item.image}" class="card-img-top w-50" alt="..." />
  </div>
  <div class="card-body p-1">
    <div class="d-flex">
      <h5 class="card-title text-truncate ">${item.title}</h5>
    </div>
    <div class="d-flex">
      <p class="card-text text-truncate">${item.description}</p>
    </div>
    
    <div class="d-flex justify-content-end">
      <p class="card-text fs-3 text-danger">${item.price} €</p>
    </div>
    <form class="d-flex flex-column">
          <input class="w-25 align-self-center fs-3 text-center" type="number" name="number" min="1" value="1" id="productQuantity-${item.id}">
          <button type="button" class="btn btn-primary mt-2" onclick="addToCart(${item.id})">Add to Cart</button>
        </form>
  </div>
</div>
`;

    cardContainer.appendChild(cardDiv);
  });
});



  
    

