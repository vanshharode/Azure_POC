// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this as needed)
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        // Here you can add code to send the form data to your server
    } else {
        alert("Please fill out all fields.");
    }
}

// Attach the form submit event listener
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});
