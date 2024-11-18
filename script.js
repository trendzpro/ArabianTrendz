// code for fin
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el) => {
      el.style.opacity = "1";
    });
  });

// code for buy
function buyProduct(productName, productPrice) {
    alert(`You have purchased ${productName} for ${productPrice} SAR.`);
}
// code for thank u noti...
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const successMessage = document.createElement('div');
    successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    successMessage.className = 'success-message fade-in';
    document.querySelector('.contact-form').appendChild(successMessage);

    this.reset();
});
