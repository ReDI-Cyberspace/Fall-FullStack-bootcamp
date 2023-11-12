function renderItems() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
  
    console.log(cartItems);
  
    var totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].quantity;
    }
    console.log(totalPrice);
  
    var totalPriceDiv = document.getElementById("totalPrice");
    totalPriceDiv.textContent = totalPrice + "€";
  
    //If you have cartItems and there are products in it, add it to the HTML
    if (cartItems && cartItems.length > 0) {
      var cartItemsContainer = document.getElementById("cartItemsContainer");
  
      // Cleaning process
      cartItemsContainer.innerHTML = "";
  
      // Loop for each product
      cartItems.forEach(function (item) {
        // Create a new cart item
        var cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item d-flex justify-content-between";
        cartItemDiv.innerHTML = `
            
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <h6 class="m-1">${item.title}</h6>
            <p class="m-1">Unit Price: ${item.price.toFixed(2)}€</p>
            <p class="m-1">Piece: ${item.quantity}</p>
            <p class="m-1 fs-4 text">Price: ${item.quantity * item.price}€</p>
          </div>
          <form class="d-flex align-items-end">          
            <button type="button" class="btn btn-danger btn-sm" onclick="deleteCartItem(${item.id})">Delete</button>
          </form>
        `;
  
        // Add the created cart item to the container
        cartItemsContainer.appendChild(cartItemDiv);
      });
    } else {
      // If cartItems is empty, clear cart
      var cartItemsContainer = document.getElementById("cartItemsContainer");
      cartItemsContainer.innerHTML = "";
    }
  }
  
  
  
  renderItems(); // To initially render the cart when the page loads



  function deleteCartItem(itemId) {

     // error notification
  // Shorthand for:
  // alertify.notify( message, 'error', [wait, callback]);
  alertify.error('Product deleted');

    // takes cartItems from localStorage
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // find the index of deleted ıtem
    var indexToRemove = cartItems.findIndex((item) => item.id === itemId);
  
    // If index found, remove item from cartItems array and localStorage
    if (indexToRemove !== -1) {
      cartItems.splice(indexToRemove, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
  
      // Update cart
      renderItems();
    }
  }
  