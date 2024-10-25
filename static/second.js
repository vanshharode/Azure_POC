// Function to add a product to the cart
function addToCart(product) {
    alert(product + " has been added to your cart!");
}

// Attach event listeners for add to cart buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('button[onclick^="addToCart"]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            addToCart(product);
        });
    });
});
