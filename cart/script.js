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
  
    // Eğer cartItems varsa ve içinde ürünler varsa, HTML'e ekle
    if (cartItems && cartItems.length > 0) {
      var cartItemsContainer = document.getElementById("cartItemsContainer");
  
      // Temizleme işlemi
      cartItemsContainer.innerHTML = "";
  
      // Her ürün için döngü oluştur
      cartItems.forEach(function (item) {
        // Yeni bir cart item oluştur
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
  
        // Oluşturulan cart item'i container'a ekle
        cartItemsContainer.appendChild(cartItemDiv);
      });
    } else {
      // Eğer cartItems boş ise, sepeti temizle
      var cartItemsContainer = document.getElementById("cartItemsContainer");
      cartItemsContainer.innerHTML = "";
    }
  }
  
  
  
  renderItems(); // İlk başta sayfa yüklenirken sepeti render etmek için



  function deleteCartItem(itemId) {

     // error notification
  // Shorthand for:
  // alertify.notify( message, 'error', [wait, callback]);
  alertify.error('Product deleted');

    // localStorage'dan cartItems'ı al
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
    // Silinecek ürünün index'ini bul
    var indexToRemove = cartItems.findIndex((item) => item.id === itemId);
  
    // Eğer index bulundu ise, ürünü cartItems dizisinden ve localStorage'dan kaldır
    if (indexToRemove !== -1) {
      cartItems.splice(indexToRemove, 1); // Diziden kaldır
      localStorage.setItem("cartItems", JSON.stringify(cartItems)); // localStorage güncelle
  
      // Sepeti güncelle
      renderItems();
    }
  }
  