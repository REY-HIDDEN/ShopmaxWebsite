// Product Database - 40+ Products
let products = [];

async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products');
        products = await response.json();
        renderProducts(products);
        renderDealProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
        showToast('Failed to load products. Please make sure the server is running.');
    }
}

function renderDealProducts() {
    const dealsGrid = document.getElementById('dealsGrid');
    if (!dealsGrid) return;
    const dealProducts = products.filter(p => p.badge === 'sale' || p.badge === 'hot').slice(0, 6);

    dealsGrid.innerHTML = dealProducts.map(product => `
                <div class="deal-card">
                    <div class="deal-image">
                        <img src="${product.image}" alt="${product.name}">
                        ${product.originalPrice ? `<span class="deal-discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
                    </div>
                    <div class="deal-info">
                        <span class="product-category">${product.category || ''}</span>
                        <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                        <div class="product-rating">
                            ${renderStars(product.rating || 5)}
                            <span>(${product.reviews || 0})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">$${Number(product.price).toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="original-price">$${Number(product.originalPrice).toFixed(2)}</span>` : ''}
                        </div>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            `).join('');
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const clearSearch = document.getElementById('clearSearch');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const newsletterForm = document.getElementById('newsletterForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    updateCart();
    startDealTimer();

    // Check login status
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const userBtn = document.querySelector('.user-btn');
        if (userBtn) {
            const dashboardUrl = currentUser.role === 'admin' ? 'admin_dashboard.html' : 'user_dashboard.html';
            userBtn.innerHTML = `<a href="${dashboardUrl}" title="Go to Dashboard"><i class="fas fa-id-badge"></i></a>`;
        }
    }
});

// Render Products
function renderProducts(productsToRender, append = false) {
    if (!append) {
        productsGrid.innerHTML = '';
    }

    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;

        productCard.innerHTML = `
                    ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge.toUpperCase()}</span>` : ''}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-actions">
                            <button class="product-action-btn wishlist" onclick="addToWishlist(${product.id}, this)" title="Add to Wishlist">
                                <i class="far fa-heart"></i>
                            </button>
                            <button class="product-action-btn" onclick="quickView(${product.id})" title="Quick View">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="product-action-btn" onclick="addToCart(${product.id})" title="Add to Cart">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                    <div class="product-info">
                        <span class="product-category">${product.category_name || product.category || 'General'}</span>
                        <h3 class="product-name" onclick="showProductModal(${product.id})">${product.name}</h3>
                        <div class="product-rating">
                            ${renderStars(product.rating)}
                            <span>(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">$${Number(product.price).toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="original-price">$${Number(product.originalPrice).toFixed(2)}</span>` : ''}
                        </div>
                    </div>
                `;

        productsGrid.appendChild(productCard);
    });
}

// Render Stars
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filter Products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.filter;
        if (category === 'all') {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(p => (p.category == category) || (p.category_id == category));
            renderProducts(filteredProducts);
        }
    });
});

// Search Products
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    // Show/hide clear button
    if (searchTerm.length > 0) {
        clearSearch.style.display = 'block';
    } else {
        clearSearch.style.display = 'none';
        searchSuggestions.style.display = 'none';
        renderProducts(products); // Show all if cleared
        return;
    }

    // Filter products for suggestions
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    ).slice(0, 8); // Limit to 8 suggestions

    renderSearchSuggestions(filteredProducts, searchTerm);
});

function renderSearchSuggestions(suggestions, query) {
    if (suggestions.length === 0) {
        searchSuggestions.innerHTML = `<div class="no-results">No results found for "${query}"</div>`;
    } else {
        searchSuggestions.innerHTML = suggestions.map(product => `
                    <div class="suggestion-item" onclick="selectSuggestion('${product.name.replace(/'/g, "\\'")}')">
                        <img src="${product.image}" alt="${product.name}" class="suggestion-img">
                        <div class="suggestion-info">
                            <div class="suggestion-name">${product.name}</div>
                            <div class="suggestion-price">$${Number(product.price).toFixed(2)}</div>
                        </div>
                    </div>
                `).join('');
    }
    searchSuggestions.style.display = 'block';
}

function selectSuggestion(name) {
    searchInput.value = name;
    searchSuggestions.style.display = 'none';
    performSearch(name);
}

function performSearch(query) {
    const searchTerm = query.toLowerCase();
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);

    // Smooth scroll to products if on mobile or if search term is specific
    if (searchTerm.length > 0) {
        const productsSection = document.getElementById('products');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Clear Search
clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.style.display = 'none';
    searchSuggestions.style.display = 'none';
    renderProducts(products); // Reset to show all
});

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        searchSuggestions.style.display = 'none';
    }
});

// Handle enter key
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchInput.value);
        searchSuggestions.style.display = 'none';
    }
});

// Search button click
document.querySelector('.search-btn').addEventListener('click', () => {
    performSearch(searchInput.value);
    searchSuggestions.style.display = 'none';
});

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        showProductModal(productId);
    } else {
        console.error('Product not found for quickView:', productId);
    }
}

// Show Product Modal
function showProductModal(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        console.error('Product not found for modal:', productId);
        return;
    }

    // Handle JSON string or Array for sizes and colors
    let sizes = product.sizes;
    if (typeof sizes === 'string') {
        try { sizes = JSON.parse(sizes); } catch (e) { sizes = null; }
    }
    let colors = product.colors;
    if (typeof colors === 'string') {
        try { colors = JSON.parse(colors); } catch (e) { colors = null; }
    }

    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

    modalBody.innerHTML = `
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="modal-details">
                    <span class="product-category">${product.category}</span>
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        ${renderStars(product.rating)}
                        <span>(${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${Number(product.price).toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${Number(product.originalPrice).toFixed(2)}</span>` : ''}
                    </div>
                    <p>${product.description}</p>
                    
                    ${sizes && sizes.length > 0 ? `
                        <div class="modal-options">
                            <h4>Size</h4>
                            <div class="size-options">
                                ${sizes.map((size, index) => `<button class="size-option ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</button>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    ${colors && colors.length > 0 ? `
                        <div class="modal-options">
                            <h4>Color</h4>
                            <div class="color-options">
                                ${colors.map((color, index) => `<button class="color-option ${index === 0 ? 'active' : ''}" data-color="${color}" style="background-color: ${color}"></button>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="modal-quantity">
                        <h4>Quantity:</h4>
                        <div class="cart-item-quantity">
                            <button class="qty-btn" onclick="changeModalQty(-1)">-</button>
                            <span class="qty-value" id="modalQty">1</span>
                            <button class="qty-btn" onclick="changeModalQty(1)">+</button>
                        </div>
                    </div>
                    
                    <div class="modal-buttons">
                        <button class="btn btn-primary" onclick="addToCartWithQty(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn btn-outline" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i> Wishlist
                        </button>
                    </div>
                </div>
            `;

    productModal.classList.add('active');

    // Size and color selection
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.querySelectorAll('.color-option').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// Change Modal Quantity
let modalQuantity = 1;
function changeModalQty(change) {
    modalQuantity = Math.max(1, modalQuantity + change);
    document.getElementById('modalQty').textContent = modalQuantity;
}

// Add to Cart with Quantity
function addToCartWithQty(productId) {
    const product = products.find(p => p.id == productId);
    const selectedSize = document.querySelector('.size-option.active')?.dataset.size;
    const selectedColor = document.querySelector('.color-option.active')?.dataset.color;

    addToCart(productId, modalQuantity, selectedSize, selectedColor);
    modalQuantity = 1;
    productModal.classList.remove('active');
}

// Add to Cart
function addToCart(productId, quantity = 1, size = null, color = null) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    const existingItem = cart.find(item =>
        item.id === productId &&
        item.size === size &&
        item.color === color
    );

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
            size: size,
            color: color
        });
    }

    saveCart();
    updateCart();
    showToast(`${product.name} added to cart!`);
}

// Add to Wishlist
function addToWishlist(productId, btn = null) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist!`);
        if (btn) {
            btn.classList.add('added');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }
    } else {
        showToast(`${product.name} is already in wishlist!`);
    }
}

// Update Cart
function updateCart() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Your cart is empty</p>
                    </div>
                `;
    } else {
        cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <h4 class="cart-item-name">${item.name}</h4>
                            <span class="cart-item-price">$${Number(item.price).toFixed(2)}</span>
                            ${item.size ? `<span style="font-size: 12px; color: #64748b;">Size: ${item.size}</span>` : ''}
                            ${item.color ? `<span style="font-size: 12px; color: #64748b;">Color: <span style="display: inline-block; width: 16px; height: 16px; background: ${item.color}; border-radius: 50%; vertical-align: middle;"></span></span>` : ''}
                            <div class="cart-item-quantity">
                                <button class="qty-btn" onclick="updateCartItemQty(${item.id}, -1, '${item.size || ''}', '${item.color || ''}')">-</button>
                                <span class="qty-value">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateCartItemQty(${item.id}, 1, '${item.size || ''}', '${item.color || ''}')">+</button>
                            </div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size || ''}', '${item.color || ''}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('');
    }
}

// Update Cart Item Quantity
function updateCartItemQty(productId, change, size, color) {
    const item = cart.find(i => i.id === productId && i.size === size && i.color === color);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        if (item.quantity <= 0) {
            removeFromCart(productId, size, color);
        } else {
            saveCart();
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(productId, size, color) {
    cart = cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
    saveCart();
    updateCart();
    showToast('Item removed from cart');
}

// Clear Cart
clearCartBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCart();
        showToast('Cart cleared!');
    }
});

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Cart Sidebar Toggle
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', closeCartSidebar);
cartOverlay.addEventListener('click', closeCartSidebar);

function closeCartSidebar() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    closeCartSidebar();
    window.location.href = 'checkout.html';
});


// Product Modal Close
closeModal.addEventListener('click', () => {
    productModal.classList.remove('active');
});

modalOverlay.addEventListener('click', () => {
    productModal.classList.remove('active');
});

// Toast Notification
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Deal Timer
function startDealTimer() {
    // Set end date to 2 days from now
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endDate.getTime() - now;

        if (distance < 0) {
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

// Newsletter Form
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    showToast(`Thank you for subscribing! ${email}`);
    e.target.reset();
});

// Deal Products are rendered via fetchProducts()

// Load More Products
let productsLoaded = 8;
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    const moreProducts = products.slice(productsLoaded, productsLoaded + 8);
    if (moreProducts.length > 0) {
        renderProducts(moreProducts, true);
        productsLoaded += 8;
        if (productsLoaded >= products.length) {
            document.getElementById('loadMoreBtn').style.display = 'none';
        }
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.querySelector('.nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '100%';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#fff';
    nav.style.flexDirection = 'column';
    nav.style.padding = '20px';
    nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Category Click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const category = card.dataset.category;
        filterBtns.forEach(btn => {
            if (btn.dataset.filter === category) {
                btn.click();
            }
        });
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});
