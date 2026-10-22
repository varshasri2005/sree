APPENDIX 1 -SAMPLE CODE 
const API_URL = '/api/products'; 
let products = []; 
let cart = [] 
document.addEventListener('DOMContentLoaded', () => { 
    const savedTheme = localStorage.getItem('sreeTheme') || 'light'; 
    document.documentElement.setAttribute('data-theme', savedTheme) 
    const savedCart = localStorage.getItem('sreeCart'); 
    if (savedCart) { cart = JSON.parse(savedCart); updateCartIcon(); } 
    initParticles(); 
}) 
function toggleTheme() { 
    const current = document.documentElement.getAttribute('data-theme'); 
    const target = current === 'light' ? 'dark' : 'light'; 
    document.documentElement.setAttribute('data-theme', target); 
    localStorage.setItem('sreeTheme', target); 
    showToast(`Switched to ${target} mode`); 
}function initParticles() { 
    const canvas = document.getElementById('particleCanvas'); 
    if (!canvas) return; 
    const ctx = canvas.getContext('2d'); 
    canvas.width = window.innerWidth; 
    canvas.height = canvas.parentElement.offsetHeight; 
=== PAGE 38 ===
27 
 
    let particlesArray = []; 
    const numberOfParticles = 60; 
    class Particle { 
        constructor() { 
            this.x = Math.random() * canvas.width; 
            this.y = Math.random() * canvas.height; 
            this.size = Math.random() * 3 + 1; 
            this.speedX = Math.random() * 1 - 0.5; 
            this.speedY = Math.random() * 1 - 0.5; 
        } 
        update() { 
            this.x += this.speedX; 
            this.y += this.speedY; 
            if (this.size > 0.2) this.size -= 0.005; 
            if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX; 
            if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY; 
        } 
        draw() { 
            ctx.fillStyle = 'rgba(255, 159, 28, 0.4)'; 
            ctx.beginPath(); 
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); 
            ctx.fill() 
    function init() { 
        for (let i = 0; i < numberOfParticles; i++) { 
=== PAGE 39 ===
28 
 
            particlesArray.push(new Particle()); 
        } 
    } 
    function animate() { 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        for (let i = 0; i < particlesArray.length; i++) { 
            particlesArray[i].update(); 
            particlesArray[i].draw(); 
        } 
        requestAnimationFrame(animate); 
    } 
    init(); animate() 
    window.addEventListener('resize', () => { 
        canvas.width = window.innerWidth; 
        canvas.height = canvas.parentElement.offsetHeight; 
    }); 
// Intersection Observer for scroll animations 
function initScrollReveal() { 
    const elements = document.querySelectorAll('.reveal'); 
    const observer = new IntersectionObserver((entries) => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) { 
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target); 
=== PAGE 40 ===
29 
 
            } 
        }); 
    }, { threshold: 0.1 }); 
    elements.forEach(el => observer.observe(el)); 
async function fetchProducts(isShop = true, isIndex = false) { 
    try { 
        const res = await fetch(API_URL); 
        products = await res.json() 
        if (isIndex) { 
            renderCarousel(products); 
        } else { 
            populateCategories(); 
            if (isShop) { renderShop(products); } 
            else { renderInventory(products); updateDashboardStats(); } 
        } 
    } catch (error) { 
        showToast('Failed to load products'); 
    } 
} 
function getStockBadge(stock) { 
    if (stock > 20) return `<span style="font-size:0.85rem; color:var(--primary-light); font-
weight:700;">⬤ In Stock</span>`; 
    else if (stock > 0) return `<span style="font-size:0.85rem; color:#fca311; font-
weight:700;">⬤ Low Stock (${stock})</span>`; 
=== PAGE 41 ===
30 
 
    return `<span style="font-size:0.85rem; color:#ff4d6d; font-weight:700;">⬤ Out of 
Stock</span>`; 
function getRatingHTML() { 
    const stars = Math.floor(Math.random() * 2) + 4; // 4 or 5 
    const reviews = Math.floor(Math.random() * 300) + 20; 
    let html = '<div class="rating">'; 
    for (let i = 0; i < 5; i++) { html += i < stars ? '★' : '☆'; } 
    html += `<span>(${reviews})</span></div>`; 
    return html; 
// Render Featured Carousel (Index page) 
function renderCarousel(data) { 
    const container = document.getElementById('featured-carousel'); 
    if (!container) return; 
    const features = data.slice(0, 4); 
    container.innerHTML = ''; 
    features.forEach((p, idx) => { 
        const wrapper = document.createElement('div'); 
        wrapper.className = 'carousel-card tilt-card reveal'; 
        wrapper.style.transitionDelay = `${idx * 0.1}s`; 
        wrapper.innerHTML = ` 
      <div class="product-card" onclick="window.location.href='shop.html'"> 
        <div class="ribbon-wrapper"><div class="ribbon">Top Seller</div></div> 
        <div class="img-container"> 
          <img src="${p.imageUrl}" alt="${p.name}" class="product-image"> 
=== PAGE 42 ===
31 
 
        </div> 
        <div class="product-info"> 
          ${getRatingHTML()} 
          <h3 class="product-title">${p.name}</h3> 
          <p class="product-price" style="font-size: 1.4rem;">$${p.price.toFixed(2)}</p> 
        </div> 
      </div> 
        container.appendChild(wrapper); 
    }); 
    initScrollReveal(); 
function renderShop(data) { 
    const container = document.getElementById('product-list'); 
    if (!container) return; 
    container.innerHTML = ''; 
    if (data.length === 0) { 
        container.innerHTML = '<p class="reveal" style="grid-column: 1/-1; text-align: center; 
color: var(--text-light); font-size: 1.2rem; padding: 3rem;">No products found.</p>'; 
        initScrollReveal(); return; 
    } 
    data.forEach((p, idx) => { 
        const wrapper = document.createElement('div'); 
        wrapper.className = 'tilt-card reveal'; 
        wrapper.style.transitionDelay = `${(idx % 4) * 0.1}s`; 
        const ribbonHTML = (p.stock > 100) ? `<div class="ribbon-wrapper"><div 
class="ribbon">Bestseller</div></div>` : (p.price > 100) ? `<div class="ribbon-
=== PAGE 43 ===
32 
 
wrapper"><div class="ribbon" style="background:var(--
primary);color:#fff;">Premium</div></div>` : '' 
        wrapper.innerHTML = ` 
      <div class="product-card" onclick="openQuickView('${p._id}')"> 
        ${ribbonHTML} 
        <div class="img-container"> 
          <img src="${p.imageUrl}" alt="${p.name}" class="product-image"> 
          <div class="img-overlay-btn">    Quick View</div> 
        </div> 
        <div class="product-info"> 
          <span class="category-tag">${p.category}</span> 
          <h3 class="product-title">${p.name}</h3> 
          ${getRatingHTML()} 
          <p class="product-desc">${p.description.substring(0, 75)}...</p> 
          <div class="product-footer"> 
            <div> 
              <div class="product-price">$${p.price.toFixed(2)}</div> 
              ${getStockBadge(p.stock)} 
            </div> 
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); 
addToCart('${p._id}')" ${p.stock <= 0 ? 'disabled style="background:#ccc;cursor:not-
allowed;"' : ''}> 
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" 
y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> 
            </button> 
=== PAGE 44 ===
33 
 
          </div> 
        </div> 
      </div> 
        container.appendChild(wrapper); 
    }); 
    initScrollReveal(); 
// Render Inventory Table 
function renderInventory(data) { 
    const tbody = document.getElementById('inventory-list'); 
    if (!tbody) return; 
    tbody.innerHTML = ''; 
    if (data.length === 0) { 
        tbody.innerHTML = '<tr class="reveal"><td colspan="5" style="text-align: center; 
padding:2rem;">No items match criteria.</td></tr>'; 
        initScrollReveal(); return; 
    } 
    data.forEach((p, idx) => { 
        const tr = document.createElement('tr'); 
        tr.className = 'reveal'; 
        tr.style.transitionDelay = `${(idx % 10) * 0.05}s`; 
        tr.innerHTML = ` 
      <td><img src="${p.imageUrl}" alt="${p.name}" style="width: 65px; height: 65px; 
object-fit: cover; border-radius: 10px; box-shadow:var(--shadow-sm);"></td> 
      <td> 
        <strong style="font-size:1.1rem; color:var(--dark);">${p.name}</strong><br> 
=== PAGE 45 ===
34 
 
        <span class="category-tag" style="margin-top:0.4rem; font-
size:0.7rem;">${p.category}</span> 
      </td> 
      <td style="font-weight:900; color:var(--primary); font-
size:1.1rem;">$${p.price.toFixed(2)}</td> 
      <td>${getStockBadge(p.stock)}</td> 
      <td> 
        <div class="action-btns"> 
          <button class="btn-icon" onclick="editProduct('${p._id}')" title="Edit">     </button> 
          <button class="btn-icon delete" onclick="deleteProduct('${p._id}')" 
title="Delete">   </button> 
        </div> 
      </td> 
        tbody.appendChild(tr); 
    }); 
    initScrollReveal(); 
} 
function openQuickView(id) { 
    const p = products.find(x => x._id === id); 
    if (!p) return; 
    const modal = document.getElementById('quickViewModal'); 
    const details = document.getElementById('qvDetails'); 
    details.innerHTML = ` 
    <h2 style="font-size: 2.5rem; font-weight:900; margin-bottom:0.5rem; color:var(--dark); 
line-height:1.2;">${p.name}</h2> 
=== PAGE 46 ===
35 
 
    <span class="category-tag" style="margin-bottom:1rem;">${p.category}</span> 
    ${getRatingHTML()} 
    <p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem; line-height: 
1.8;">${p.description}</p> 
    <div style="font-size: 3rem; font-weight:900; color:var(--primary); margin-
bottom:0.5rem;">$${p.price.toFixed(2)}</div> 
    <div style="margin-bottom:2.5rem;">${getStockBadge(p.stock)}</div> 
    <button class="btn-primary" style="width:100%; padding:1.2rem; font-size:1.2rem; letter-
spacing:1px;" onclick="addToCart('${p._id}'); closeQuickView();" ${p.stock <= 0 ? 
'disabled' : ''}> 
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" style="vertical-align:bottom; margin-right:8px;"><path d="M3 3h2l.4 2M7 
13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 
0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg> 
      Add to Shopping Cart 
    </button 
    document.getElementById('qvImage').src = p.imageUrl; 
    modal.classList.add('active'); 
} 
function closeQuickView() { 
document.getElementById('quickViewModal').classList.remove('active'); } 
function populateCategories() { 
    const select = document.getElementById('categoryFilter'); 
    if (!select) return; 
    const categories = [...new Set(products.map(p => p.category))]; 
    select.innerHTML = '<option value="All">All Categories</option>'; 
    categories.forEach(c => select.innerHTML += `<option value="${c}">${c}</option>`); 
=== PAGE 47 ===
36 
 
} 
function handleSearch() { 
    const term = document.getElementById('searchInput') ? 
document.getElementById('searchInput').value.toLowerCase() : ''; 
    const cat = document.getElementById('categoryFilter') ? 
document.getElementById('categoryFilter').value : 'All'; 
    const sort = document.getElementById('sortFilter') ? 
document.getElementById('sortFilter').value : 'default'; 
    let filtered = products.filter(p => { return (p.name.toLowerCase().includes(term) || 
p.description.toLowerCase().includes(term)) && (cat === 'All' || p.category === cat); }); 
    if (sort === 'priceLow') { filtered.sort((a, b) => a.price - b.price); } 
    else if (sort === 'priceHigh') { filtered.sort((a, b) => b.price - a.price); } 
    else if (sort === 'nameAZ') { filtered.sort((a, b) => a.name.localeCompare(b.name)); } 
    renderShop(filtered); 
} 
function handleInventorySearch() { 
    const term = document.getElementById('inventorySearch').value.toLowerCase(); 
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || 
p.category.toLowerCase().includes(term)); 
    renderInventory(filtered); 
} 
function updateDashboardStats() { 
    if (!document.getElementById('statsGrid')) return; 
    document.getElementById('statTotalProducts').innerText = products.length; 
    document.getElementById('statLowStock').innerText = `${products.filter(p => p.stock > 0 
&& p.stock <= 10).length} Low / ${products.filter(p => p.stock === 0).length} Out`; 
=== PAGE 48 ===
37 
 
    document.getElementById('statTotalValue').innerText = `$${products.reduce((sum, p) => 
sum + (p.price * p.stock), 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}`; 
} 
function toggleCart() { 
    document.getElementById('cartSidebar').classList.toggle('active'); 
    document.getElementById('cartOverlay').classList.toggle('active'); 
    renderCart(); 
} 
function addToCart(id) { 
    const p = products.find(x => x._id === id); 
    if (!p || p.stock <= 0) return; 
    const existing = cart.find(item => item.product._id === id); 
    if (existing) { 
        if (existing.quantity < p.stock) { existing.quantity++; showToast('Quantity increased'); } 
        else { showToast('Not enough physical stock!', true); } 
    } else { cart.push({ product: p, quantity: 1 }); showToast('Added to cart successfully!'); } 
    saveCart(); updateCartIcon(); 
    if (document.getElementById('cartSidebar').classList.contains('active')) renderCart(); 
} 
function updateCartIcon() { 
    const badge = document.getElementById('cartCount'); 
    if (badge) badge.innerText = cart.reduce((sum, item) => sum + item.quantity, 0); 
} 
function saveCart() { localStorage.setItem('sreeCart', JSON.stringify(cart)); } 
function changeQuantity(id, delta) { 
=== PAGE 49 ===
38 
 
    const item = cart.find(x => x.product._id === id); 
    if (item) { 
        if (delta > 0 && item.quantity >= item.product.stock) { showToast('Max stock reached', 
true); return; } 
        item.quantity += delta; 
        if (item.quantity <= 0) cart = cart.filter(x => x.product._id !== id); 
        saveCart(); updateCartIcon(); renderCart(); 
    } 
} 
function renderCart() { 
    const container = document.getElementById('cartItems'); 
    const totalEl = document.getElementById('cartTotal'); 
    if (!container) return; 
    container.innerHTML = ''; 
    if (cart.length === 0) { 
        container.innerHTML = '<p class="reveal active" style="text-align:center; margin-
top:2rem; font-size:1.2rem; color:var(--text-light);">Your cart is feeling a bit empty!</p>'; 
        totalEl.innerText = '0.00'; return; 
    } 
    let total = 0; 
    cart.forEach((item, idx) => { 
        total += item.product.price * item.quantity; 
        container.innerHTML += ` 
      <div class="cart-item reveal active" style="transition-delay:${idx * 0.05}s"> 
        <img src="${item.product.imageUrl}" alt="img"> 
=== PAGE 50 ===
39 
 
        <div class="cart-item-info"> 
          <div class="cart-item-title">${item.product.name}</div> 
          <div class="cart-item-price">$${(item.product.price * 
item.quantity).toFixed(2)}</div> 
          <div class="quantity-ctrl"> 
            <button class="quantity-btn" onclick="changeQuantity('${item.product._id}', -1)">-
</button> 
            <span>${item.quantity}</span> 
            <button class="quantity-btn" onclick="changeQuantity('${item.product._id}', 
1)">+</button> 
          </div> 
        </div> 
      </div> 
    }); 
    totalEl.innerText = total.toLocaleString(undefined, { minimumFractionDigits: 2 }); 
} 
function checkout() { 
    if (cart.length === 0) { showToast('Cart is empty', true); return; } 
    const itemsContainer = document.getElementById('cartMainContent'); 
    const loader = document.getElementById('checkoutLoader'); 
    const success = document.getElementById('checkoutSuccess'); 
    itemsContainer.style.display = 'none'; 
    loader.classList.add('active'); 
    setTimeout(() => { 
        loader.classList.remove('active'); 
=== PAGE 51 ===
40 
 
        success.classList.add('active'); 
        cart = []; saveCart(); updateCartIcon() 
        setTimeout(() => { 
            toggleCart(); 
                     setTimeout(() => { 
                itemsContainer.style.display = 'block'; 
                success.classList.remove('active'); 
                renderCart(); 
            }, 500); 
        }, 2500); 
    }, 2000); 
} 
function openModal(isEdit = false) { 
    document.getElementById('productModal').classList.add('active'); 
    const title = document.getElementById('modalTitle'); 
    if (!isEdit) { 
        title.innerText = 'Add New Product'; document.getElementById('productForm').reset(); 
document.getElementById('productId').value = ''; 
    } else { title.innerText = 'Edit Product'; } 
} 
function closeModal() { 
document.getElementById('productModal').classList.remove('active'); } 
async function saveProduct(e) { 
    e.preventDefault(); 
    const id = document.getElementById('productId').value; 
=== PAGE 52 ===
41 
 
    const productData = { 
        name: document.getElementById('name').value, category: 
document.getElementById('category').value, 
        description: document.getElementById('description').value, price: 
parseFloat(document.getElementById('price').value), 
        stock: parseInt(document.getElementById('stock').value), imageUrl: 
document.getElementById('imageUrl').value || 'https://images.unsplash.com/photo-
1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80' 
    }; 
    const method = id ? 'PUT' : 'POST'; 
    const url = id ? `${API_URL}/${id}` : API_URL; 
    try { 
        const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, 
body: JSON.stringify(productData) }); 
        if (res.ok) { closeModal(); showToast(id ? 'Product updated!' : 'Product added!'); 
fetchProducts(false); } 
        else { const err = await res.json(); showToast('Error: ' + err.message, true); } 
    } catch (error) { } 
} 
function editProduct(id) { 
    const p = products.find(prod => prod._id === id); 
    if (p) { 
        document.getElementById('productId').value = p._id; 
document.getElementById('name').value = p.name; 
        document.getElementById('category').value = p.category; 
document.getElementById('description').value = p.description; 
=== PAGE 53 ===
42 
 
        document.getElementById('price').value = p.price; 
document.getElementById('stock').value = p.stock; 
        document.getElementById('imageUrl').value = p.imageUrl; openModal(true); 
    } 
} 
async function deleteProduct(id) { 
    if (confirm('Delete this product permanently?')) { 
        try { const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' }); if (res.ok) { 
showToast('Product deleted'); fetchProducts(false); } } catch (error) { } 
    } 
} 
function showToast(message, isError = false) { 
    let container = document.getElementById('toastWrapper'); 
    if (!container) { 
        container = document.createElement('div'); container.id = 'toastWrapper'; 
container.className = 'toast-container'; document.body.appendChild(container); 
    } 
    const t = document.createElement('div'); 
    t.className = 'toast'; 
    if (isError) t.style.borderLeftColor = '#ff4d6d'; 
    const icon = isError ? 
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff4d6d" 
stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" 
y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>` : 
=== PAGE 54 ===
43 
 
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" style="color:var(--primary);"><path d="M22 11.08V12a10 10 0 1 1-5.93-
9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`; 
    t.innerHTML = `${icon} ${message}`; 
    const bar = document.createElement('div'); 
    bar.style.cssText = `position:absolute; bottom:0; left:0; height:4px; width:100%; 
background:${isError ? '#ff4d6d' : 'var(--primary)'}; animation:shrink 3s linear forwards;`; 
    t.appendChild(bar) 
    container.appendChild(t); 
    setTimeout(() => { 
        t.style.animation = 'slideOutRight 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'; 
        setTimeout(() => t.remove(), 500); 
    }, 3000); 
} 
function initGlobalFeatures() { 
    const newsletterBtns = document.querySelectorAll('.newsletter-form button'); 
    newsletterBtns.forEach(btn => { 
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); 
            const input = e.target.previousElementSibling; 
            if (!input) return; 
            if (input.value.includes('@')) { 
                showToast('Subscribed to VIP Newsletter successfully!'); 
                input.value = ''; 
            } else { 
=== PAGE 55 ===
44 
 
                showToast('Please enter a valid email address.', true); 
            } 
    const currentFileName = window.location.pathname.split('/').pop() || 'index.html'; 
    document.querySelectorAll('.nav-links a').forEach(link => { 
        if (link.getAttribute('href') === currentFileName) { 
            link.classList.add('active'); 
        } else { 
            link.classList.remove('active'); 
        } 
    }); 
    const scrollTopBtn = document.createElement('button'); 
    scrollTopBtn.innerHTML = '↑'; 
    scrollTopBtn.title = 'Scroll To Top'; 
    scrollTopBtn.style.cssText = 'position:fixed; bottom:30px; left:30px; width:50px; 
height:50px; border-radius:50%; background:var(--primary); color:#fff; border:none; 
cursor:pointer; font-size:1.8rem; font-weight:900; box-shadow:var(--shadow-lg); opacity:0; 
transition:all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); z-index:2000; pointer-events:none; 
display:flex; justify-content:center; align-items:center; transform:translateY(20px); border: 
2px solid var(--bg-color);'; 
    scrollTopBtn.addEventListener('mouseover', () => { scrollTopBtn.style.transform = 
'translateY(-5px) scale(1.1)'; }); 
    scrollTopBtn.addEventListener('mouseout', () => { scrollTopBtn.style.transform = 
'translateY(0) scale(1)'; }); 
    document.body.appendChild(scrollTopBtn); 
indow.addEventListener('scroll', () => { 
        if (window.scrollY > 400) { 
=== PAGE 56 ===
45 
 
            scrollTopBtn.style.opacity = '1'; 
            scrollTopBtn.style.pointerEvents = 'all'; 
            if (!scrollTopBtn.matches(':hover')) scrollTopBtn.style.transform = 'translateY(0) 
scale(1)'; 
        } else { 
            scrollTopBtn.style.opacity = '0'; 
            scrollTopBtn.style.pointerEvents = 'none'; 
            scrollTopBtn.style.transform = 'translateY(20px) scale(0.9)'; 
        } 
    }); 
    scrollTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 
'smooth' }); }); 
document.addEventListener('DOMContentLoaded', () => { initGlobalFeatures(); }); 
 
 
 
 
 
 
 
 
 
 
 
 
=== PAGE 57 ===
46 
 
