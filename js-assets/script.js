document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Toggle (Hamburger Menu)
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navbar-full');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            navToggle.classList.toggle('open');
        });

        // Close menu when clicking any link inside
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-active');
                navToggle.classList.remove('open');
            });
        });
    }

    // 2. Dynamic Copyright Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Universal Lightbox Modal for All Site Images
    const siteImages = document.querySelectorAll('img');
    if (siteImages.length > 0) {
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        modal.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img class="lightbox-img" src="" alt="Zoomed View">
                <p class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(modal);

        const modalImg = modal.querySelector('.lightbox-img');
        const modalCaption = modal.querySelector('.lightbox-caption');
        const closeBtn = modal.querySelector('.lightbox-close');

        siteImages.forEach(img => {
            if (!img.classList.contains('logo-img')) {
                img.style.cursor = 'pointer';
                img.addEventListener('click', () => {
                    modalImg.src = img.src;
                    modalCaption.textContent = img.alt || 'Afro Crown Beauty Image';
                    modal.classList.add('show');
                });
            }
        });

        const closeModal = () => modal.classList.remove('show');
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 4. Services to Bookings Auto-Selection & Form Validation / Debrief
    if (window.location.pathname.includes('bookings.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const treatmentParam = urlParams.get('treatment');
        
        if (treatmentParam) {
            const serviceSelect = document.getElementById('service-select');
            if (serviceSelect) {
                serviceSelect.value = treatmentParam;
            }
        }

        const bookingForm = document.getElementById('booking-form');
        const summaryBox = document.getElementById('booking-summary');

        if (bookingForm && summaryBox) {
            bookingForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const clientName = document.getElementById('client-name').value.trim();
                const clientPhone = document.getElementById('client-phone').value.trim();
                const serviceSelect = document.getElementById('service-select');
                const selectedTreatmentText = serviceSelect.options[serviceSelect.selectedIndex].text;
                const bookingDate = document.getElementById('booking-date').value;

                // Simple validation check
                if (!clientName || !clientPhone || !bookingDate) {
                    alert('Please fill in all required fields.');
                    return;
                }

                // Render full appointment confirmation brief
                summaryBox.innerHTML = `
                    <div class="success-debrief-card" style="background-color: #242424; border: 2px solid #d3aa8e; padding: 20px; border-radius: 8px; color: #fff; text-align: left;">
                        <h3 style="color: #d3aa8e; margin-top: 0;">🎉 Appointment Request Confirmed!</h3>
                        <p><strong>Client Name:</strong> ${clientName}</p>
                        <p><strong>Phone Number:</strong> ${clientPhone}</p>
                        <p><strong>Booked Treatment:</strong> ${selectedTreatmentText}</p>
                        <p><strong>Preferred Date:</strong> ${bookingDate}</p>
                        <p style="margin-top: 15px; font-style: italic; color: #ccc;">We have received your appointment request and will contact you via phone or SMS to finalize your slot. Thank you for choosing Afro Crown Beauty!</p>
                    </div>
                `;

                summaryBox.scrollIntoView({ behavior: 'smooth' });
                bookingForm.reset();
            });
        }
    }
});

// 5. E-Commerce Shopping Cart & Checkout Logic (Shop Page)
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCartUI();
    alert(`${productName} has been added to your cart!`);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    if (cartCount) cartCount.textContent = cart.length;

    if (cartItemsList) {
        if (cart.length === 0) {
            cartItemsList.innerHTML = '<li>Your cart is currently empty.</li>';
        } else {
            cartItemsList.innerHTML = '';
            let total = 0;
            cart.forEach((item) => {
                total += item.price;
                cartItemsList.innerHTML += `<li>${item.productName} — R ${item.price.toFixed(2)}</li>`;
            });
            if (totalElement) totalElement.textContent = `R ${total.toFixed(2)}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    const successMsgDiv = document.getElementById('order-success-message');

    if (checkoutForm && successMsgDiv) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (cart.length === 0) {
                alert('Your cart is empty! Please add products before checking out.');
                return;
            }

            const name = document.getElementById('checkout-name').value.trim();
            const address = document.getElementById('checkout-address').value.trim();
            const payment = document.getElementById('payment-method').value;

            let total = cart.reduce((sum, item) => sum + item.price, 0);

            // Detailed order success brief
            let itemsSummary = cart.map(i => `<li>${i.productName} (R ${i.price.toFixed(2)})</li>`).join('');

            successMsgDiv.innerHTML = `
                <div style="background-color: #242424; color: #d3aa8e; padding: 20px; border-radius: 8px; border: 2px solid #d3aa8e; text-align: left;">
                    <h3 style="margin-top: 0; color: #fff;">🎉 Order Placed Successfully!</h3>
                    <p><strong>Recipient Name:</strong> ${name}</p>
                    <p><strong>Delivery Address:</strong> ${address}</p>
                    <p><strong>Payment Option:</strong> ${payment.toUpperCase()}</p>
                    <p><strong>Items Ordered:</strong></p>
                    <ul style="margin-left: 20px; margin-bottom: 10px;">${itemsSummary}</ul>
                    <p><strong>Total Amount Paid:</strong> R ${total.toFixed(2)}</p>
                    <p style="margin-bottom: 0; font-style: italic; color: #ccc;">Thank you for shopping with Afro Crown Beauty! Your order is being processed for delivery.</p>
                </div>
            `;

            cart = [];
            updateCartUI();
            checkoutForm.reset();
            successMsgDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
});