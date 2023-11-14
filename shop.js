let shoppingList =[];
let shoppingCart =[];

function addItemToList(item){
    shoppingList.push(item);
    displayList();
}

function addItemToCart(item){
    shoppingList.push(item);
    displayCart();
}

function removeItemFromCart(item){
    const idex = shoppingCart.indexOf(item);
    if (idex > -1){
        shoppingCart.splice(index, 1);
    }
    displayCart();
}

function displayList(){
    const list=document.getElementById("shoppingList");
    list.innerHTML ="";
    shoppingList.forEach((item)=>{
const li=document.createElement("li");
li.textContent=item;
list.appendChild(li);
    });

}


function displayCart(){
    const cart=document.getElementById("shoppingCart");
    cart.innerHTML ="";
    shoppingCart.forEach(()=>{
        const li =document.createElement("li");
        li.textContent=item;
        cart.appendChild(li);
    });
}

addItemToList("Apples");
addItemToList("Bananas");
addItemToList("Milk");

