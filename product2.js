// Function to increment the quantity value
function incrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

// Function to decrement the quantity value
function decrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// Function to add items into cart
function addToCart() {
    // Retrieve product details dynamically from the current page
    var productName = document.querySelector('.product-details h1').textContent.trim();
    var productPriceText = document.querySelector('.product-details p.price').textContent.trim();
    var productPrice = parseFloat(productPriceText.replace('AU $', '')); 
    var quantity = parseInt(document.getElementById('quantity').value);
    var item = {
        name: productName,
        price: productPrice,
        quantity: quantity
    };
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if the product is already in the cart
    var existingItem = cartItems.find(function(cartItem) {
        return cartItem.name === productName;
    });

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cartItems.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Item added to cart!');
    window.location.href = 'shoppingcart.html';
}

