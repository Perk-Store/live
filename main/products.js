document.addEventListener('DOMContentLoaded', function () {
    // 🔍 Product Filtering Logic
    const filterButtons = document.querySelectorAll('.filter');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                if (category === "All" || card.dataset.category === category) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Modal Logic: Opening and closing checkout modal
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.getElementById("closeBtn");

    // Open modal when purchase button is clicked
    productCards.forEach(card => {
        const purchaseBtn = card.querySelector('.purchase-btn');
        const productInfo = card.querySelector('h2').textContent; // Get product name
        const productPrice = card.querySelector('.price').textContent; // Get product price
        const productDetails = card.getAttribute('data-info'); // Get product-specific info from the data-info attribute

        purchaseBtn.addEventListener('click', () => {
            // Set the modal content dynamically
            const productContent = `
                <h2>Checkout</h2>
                <p><strong>Product:</strong> ${productInfo}</p>
                <p><strong>Price:</strong> ${productPrice}</p>
                <p><strong>Info:</strong> ${productDetails}</p>  <!-- Display dynamic product info -->
                <button class="buy-ltc-btn">
                    <img src="pics/ltc.png" alt="LTC" class="ltc-icon">
                    Buy with LTC
                </button>
            `;
            
            // Set modal content
            modal.querySelector('.modal-content').innerHTML = productContent + modal.querySelector('.modal-content').innerHTML;

            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close the modal when the close button (X) is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });
});
