document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();

    var continueButton = document.querySelector('.continue-button');
    if (continueButton) {
        continueButton.addEventListener('click', function() {
            window.location.href = 'payment.html';
        });
    }
});

// Function to display items in cart
function displayCartItems() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartItemsContainer = document.getElementById('cart-items');
    var totalBox = document.getElementById('total-amount');
    cartItemsContainer.innerHTML = ''; 

    var totalAmount = 0;

    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        var itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemElement.appendChild(itemName);

        var itemPrice = document.createElement('p');
        itemPrice.textContent = 'Price: AU $' + item.price.toFixed(2);
        itemElement.appendChild(itemPrice);

        var itemQuantity = document.createElement('p');
        itemQuantity.textContent = 'Quantity: ' + item.quantity;
        itemElement.appendChild(itemQuantity);

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.setAttribute('data-name', item.name); 
        removeButton.addEventListener('click', function() {
            removeFromCart(item.name);
        });

        itemElement.appendChild(removeButton);
        cartItemsContainer.appendChild(itemElement);


        totalAmount += item.price * item.quantity;
    });


    totalBox.textContent = 'AU $' + totalAmount.toFixed(2);

    if (cartItems.length === 0) {
        var emptyCartMessage = document.createElement('p');
        emptyCartMessage.textContent = 'Your cart is empty.';
        cartItemsContainer.appendChild(emptyCartMessage);
    }
}

// Function to remove item from cart
function removeFromCart(itemName) {
    console.log('Removing item:', itemName); 
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCartItems = cartItems.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    displayCartItems();
}


// Function to add item from cart
function addToCart(item) {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        item.quantity = 1;
        cartItems.push(item);
    }
    
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}
