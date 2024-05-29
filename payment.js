document.addEventListener('DOMContentLoaded', function() {
    displayOrderSummary();
    
    document.getElementById('signup-button').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        if (email) {
            alert('Signed up for rewards program with email: ' + email);
        } else {
            alert('Please enter your email.');
        }
    });

    document.getElementById('apply-discount-button').addEventListener('click', function() {
        var discountCode = document.getElementById('discount-code').value;
        applyDiscount(discountCode);
    });

    document.getElementById('pay-now-button').addEventListener('click', function() {
        processPayment();
    });
});

function displayOrderSummary() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var orderSummaryContent = document.getElementById('order-summary-content');
    var totalAmount = 0;
    
    orderSummaryContent.innerHTML = ''; // Clear previous content

    cartItems.forEach(function(item) {
        var itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - AU $${item.price.toFixed(2)} x ${item.quantity}`;
        orderSummaryContent.appendChild(itemElement);

        totalAmount += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = 'AU $' + totalAmount.toFixed(2);
}

function applyDiscount(discountCode) {
    var totalAmountElement = document.getElementById('total-amount');
    var totalAmount = parseFloat(totalAmountElement.textContent.replace('AU $', ''));
    
    // Example: Apply a 10% discount for a specific code
    if (discountCode === 'DISCOUNT10') {
        var discountAmount = totalAmount * 0.10;
        totalAmount -= discountAmount;
        totalAmountElement.textContent = 'AU $' + totalAmount.toFixed(2);
        alert('Discount applied!');
    } else {
        alert('Invalid discount code.');
    }
}

function processPayment() {
    var contactForm = document.getElementById('contact-form');
    var deliveryForm = document.getElementById('delivery-form');
    var paymentForm = document.getElementById('payment-form');

    if (deliveryForm.checkValidity() && paymentForm.checkValidity()) {
        alert('Payment processed successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'success.html'; // Redirect to a success page
    } else {
        alert('Please fill out all required fields in Delivery and Payment sections.');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var inputFields = document.querySelectorAll('.input-with-label');

    inputFields.forEach(function(input) {
        var placeholderText = input.getAttribute('placeholder');

        input.addEventListener('focus', function() {
            if (input.value === '') {
                input.placeholder = '';
            }
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                input.placeholder = placeholderText;
            }
        });
    });
});
