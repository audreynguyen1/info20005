function incrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function decrementQuantity() {
    var quantityInput = document.getElementById('quantity');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

function addToCart() {
    // Retrieve product details dynamically from the current page
    var productName = document.querySelector('.product-details h1').textContent.trim();
    var productPriceText = document.querySelector('.product-details p.price').textContent.trim();
    var productPrice = parseFloat(productPriceText.replace('AU $', '')); // Parse price from text
    var quantity = parseInt(document.getElementById('quantity').value);

    // Prepare item object
    var item = {
        name: productName,
        price: productPrice,
        quantity: quantity
    };

    // Retrieve existing cart items from localStorage or initialize empty array
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    var existingItem = cartItems.find(function(cartItem) {
        return cartItem.name === productName;
    });

    if (existingItem) {
        // If product already exists, update the quantity
        existingItem.quantity += quantity;
    } else {
        // Otherwise, add the new item to the cart
        cartItems.push(item);
    }

    // Save updated cart items back to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optionally, provide feedback to the user (e.g., toast message, alert)
    alert('Item added to cart!');

    // Redirect to the shopping cart page
    window.location.href = 'shoppingcart.html';
}

