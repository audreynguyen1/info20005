document.addEventListener('DOMContentLoaded', function() {
    displayOrderNumber();
});

function displayOrderNumber() {
    var orderNumber = generateOrderNumber();
    var orderNumberElement = document.getElementById('order-number');
    orderNumberElement.textContent = orderNumber;
}

function generateOrderNumber() {
    // Generate a random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
