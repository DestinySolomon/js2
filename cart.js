let cart = [];
// empty array at first

//normal function - add item(with quantity)
function addItem(name, price){
//check if item already exists in cart
let found = cart.find((item) => item.name === name);
if(found){
    found.quantity +=1; // increase quantity
}else{
    cart.push({name:name, price:price, quantity:1});
}
showCart();
}

//normal function - remove item (one quantity at a time)
function removeItem(index){
    if(cart[index].quantity > 1){
        cart[index].quantity -= 1; // decrease quantity
    }else{
        cart.splice(index, 1); //remove completely
    }
    showCart();
}
// Arrow function - calculate Total

const calculateTotal = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// Arrow function - Display Cart

const showCart = () => {
    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach((item, index) =>{
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`;

        //Remove button

        let btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = () => removeItem(index);

        li.appendChild(btn);
        list.appendChild(li);

    });
    document.getElementById("total").textContent = calculateTotal();

   

}
 //normal function - clear cart
  function clearCart(){
        cart = [];
        showCart();
    }

// ARRAYS AND BASIC ARRAY METHODS 
