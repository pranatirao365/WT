// --- 1. Product Data ---
// Reusing book data structure from Week 3 assignments
const products = [
    {
        id: "b1",
        title: "The Web Basics",
        price: 399,
        image: "📘"
    },
    {
        id: "b2",
        title: "HTML in Practice",
        price: 499,
        image: "📙"
    },
    {
        id: "b3",
        title: "CSS Essentials",
        price: 459,
        image: "📗"
    },
    {
        id: "b4",
        title: "JavaScript for Web",
        price: 549,
        image: "📒"
    },
    {
        id: "b5",
        title: "The Science of Everything",
        price: 699,
        image: "📔"
    },
    {
        id: "b6",
        title: "Fiction Nights",
        price: 299,
        image: "📕"
    }
];

// --- 2. State Management ---
// Load cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem('shopping_cart')) || [];

// --- 3. DOM Elements ---
const booksContainer = document.getElementById('books-container');
const cartContainer = document.getElementById('cart-container');
const cartCounter = document.getElementById('cart-counter');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// --- 4. Core Functions ---

// Render the list of products on the page
function renderProducts() {
    booksContainer.innerHTML = '';
    
    products.forEach(product => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-image" style="font-size: 4rem;">${product.image}</div>
            <h3 class="book-title">${product.title}</h3>
            <div class="book-price">₹${product.price}</div>
            <button class="btn" onclick="addToCart('${product.id}')">Add to Cart</button>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}

// Render the cart items
function renderCart() {
    cartContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty.</div>';
        checkoutBtn.disabled = true;
    } else {
        cart.forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            
            cartItemEl.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span class="item-qty">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')" title="Remove">✕</button>
                </div>
            `;
            
            cartContainer.appendChild(cartItemEl);
        });
        checkoutBtn.disabled = false;
    }
    
    updateSummary();
    saveCart();
}

// Add an item to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: 1
        });
    }
    
    renderCart();
}

// Update quantity of a cart item
function updateQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        
        // Remove item if quantity goes below 1
        if (cart[itemIndex].quantity < 1) {
            cart.splice(itemIndex, 1);
        }
        
        renderCart();
    }
}

// Completely remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}

// Update the cart total and counter indicators
function updateSummary() {
    // Calculate total items and price
    let totalItems = 0;
    let totalPrice = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += (item.price * item.quantity);
    });
    
    // Update DOM
    cartCounter.textContent = totalItems;
    cartTotal.textContent = `₹${totalPrice}`;
}

// Save cart data to localStorage
function saveCart() {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

// Handle the checkout process
function checkout() {
    if (cart.length === 0) return;
    
    const confirmCheckout = confirm("Are you sure you want to place this order?");
    
    if (confirmCheckout) {
        alert("Order placed successfully! Thank you for shopping with Online Bookstore.");
        cart = []; // Empty the cart
        renderCart(); // Re-render to clear display and save
    }
}

// --- 5. Event Listeners & Initialization ---

// Attach checkout handler
checkoutBtn.addEventListener('click', checkout);

// Initial render
renderProducts();
renderCart();