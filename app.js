/**
 * SREE POONGUZHALI COTTON MILLS – SMART TEXTILE MANAGEMENT SYSTEM
 * Sf No.41/ 1A, Gangapuram to sadaiyampalayam road, Gangapuram, Chithode, Erode - 638 102
 * GST IN: 33ADSFS4275Q1Z3 | Phone: 9965877007
 * CEO / Managing Director: C. Prabhu
 * Academic Collaboration: Kongu Engineering College Dept of CT-PG (Team 18)
 */

// ==========================================================================
// 1. Initial Product Catalog Data (Sree Poonguzhali Cotton Mills Looms & Yarns)
// ==========================================================================
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Poonguzhali Organic Combed Cotton",
    category: "Cotton",
    brand: "Sree Poonguzhali Cotton Mills",
    price: 380,
    stock: 420,
    gsm: "180 GSM",
    weave: "Plain Combed Weave",
    width: "44 inches",
    origin: "Gangapuram Looms, Chithode, Erode",
    image: "assets/organic_cotton_rolls.jpg",
    rating: 4.9,
    description: "100% GOTS certified Shankar-6 combed cotton woven in Sree Poonguzhali powerlooms. Superior breathability, wash fastness, and zero shrinkage guarantee."
  },
  {
    id: 2,
    name: "Poonguzhali Traditional Kanchipuram Silk",
    category: "Silk",
    brand: "Poonguzhali Silk Division",
    price: 1850,
    stock: 85,
    gsm: "120 GSM",
    weave: "Twill Interlock Jacquard",
    width: "48 inches",
    origin: "Chithode & Kanchipuram Silk Master Weavers",
    image: "assets/kanchipuram_silk.jpg",
    rating: 5.0,
    description: "Exquisite traditional pure mulberry silk with Silk Mark certification, woven with pure metallic gold zari border and rich magenta temple motifs."
  },
  {
    id: 3,
    name: "Poonguzhali Natural Flax Linen",
    category: "Linen",
    brand: "Poonguzhali Loomworks",
    price: 620,
    stock: 140,
    gsm: "210 GSM",
    weave: "Slub Linen Texture",
    width: "56 inches",
    origin: "Chithode / Erode Weaving Cluster",
    image: "assets/linen_fabric.jpg",
    rating: 4.8,
    description: "European long-staple flax yarn woven into breathable textured linen fabric with subtle sage and earthen color palette, AZO-free botanical dyed."
  },
  {
    id: 4,
    name: "Poonguzhali Royal Banarasi Brocade",
    category: "Brocade",
    brand: "Poonguzhali Heritage Looms",
    price: 2100,
    stock: 45,
    gsm: "240 GSM",
    weave: "Brocade Jacquard",
    width: "45 inches",
    origin: "Poonguzhali Jacquard Division",
    image: "assets/banarasi_brocade.jpg",
    rating: 5.0,
    description: "Opulent emerald green silk brocade embellished with dense metallic gold floral zari work for premium bridal couture and ceremonial attire."
  },
  {
    id: 5,
    name: "Poonguzhali Heavy Indigo Denim Twill",
    category: "Denim",
    brand: "Poonguzhali Denim Mills",
    price: 450,
    stock: 220,
    gsm: "380 GSM",
    weave: "3/1 Right Hand Twill",
    width: "58 inches",
    origin: "Gangapuram Industrial Facility, Chithode",
    image: "assets/textile_weaving_mill.jpg",
    rating: 4.7,
    description: "Sturdy ring-spun indigo cotton denim with durable twill weave, pre-shrunk for institutional utility garments, jackets, and bespoke jeans."
  },
  {
    id: 6,
    name: "Poonguzhali Fine Mulmul Chanderi",
    category: "Cotton",
    brand: "Poonguzhali Handloom Cell",
    price: 290,
    stock: 18, // Low Stock trigger
    gsm: "95 GSM",
    weave: "Sheer Gossamer Weave",
    width: "44 inches",
    origin: "Bhavani Looms, Erode",
    image: "assets/organic_cotton_rolls.jpg",
    rating: 4.6,
    description: "Ultra-lightweight featherweight sheer cotton yarn woven for breathable summer ethnic attire and traditional dupattas."
  },
  {
    id: 7,
    name: "Poonguzhali Pure Tussar Wild Silk",
    category: "Silk",
    brand: "Poonguzhali Silk Division",
    price: 1450,
    stock: 60,
    gsm: "135 GSM",
    weave: "Natural Slub Silk",
    width: "46 inches",
    origin: "Tamil Nadu Sericulture Looms",
    image: "assets/kanchipuram_silk.jpg",
    rating: 4.9,
    description: "Distinctive deep gold natural wild tussar silk texture with organic coarse slubs and rich earthy sheen, tested via ASTM D5430."
  },
  {
    id: 8,
    name: "Poonguzhali Combed Yarn Greige Weave",
    category: "Cotton",
    brand: "Poonguzhali Spinning Mill",
    price: 340,
    stock: 20, // Low Stock trigger
    gsm: "165 GSM",
    weave: "Calibrated 40s Greige",
    width: "54 inches",
    origin: "Gangapuram Central Facility, Chithode",
    image: "assets/textile_weaving_mill.jpg",
    rating: 4.8,
    description: "Mill-direct unbleached pure combed cotton greige fabric ready for institutional dying and custom industrial garment printing."
  }
];

// Initial Raw Material Suppliers (Module 2: Supplier and Purchase Module)
const DEFAULT_SUPPLIERS = [
  { id: 1, name: "Sree Vinayaka Cotton Ginning Mills", location: "Tirupur, Tamil Nadu", material: "Raw Shankar-6 Cotton Bales", phone: "+91 98421 11223", rating: "4.9 / 5.0", gstin: "33AABCS4421R1Z2" },
  { id: 2, name: "Bhavani Natural Dyes & Chemical Auxiliaries", location: "Bhavani, Erode", material: "AZO-Free Botanical Reactive Dyes", phone: "+91 98422 33445", rating: "4.8 / 5.0", gstin: "33AACPB9941Q1Z4" },
  { id: 3, name: "Kanchi Mulberry Sericulture Society", location: "Kanchipuram, Tamil Nadu", material: "Pure Mulberry Raw Silk Yarn (20/22D)", phone: "+91 94433 55667", rating: "5.0 / 5.0", gstin: "33AAATK1289P1Z9" },
  { id: 4, name: "Kongu European Flax Importers", location: "Perundurai, Erode", material: "Unbleached Long-Staple Flax Fibers", phone: "+91 98424 77889", rating: "4.7 / 5.0", gstin: "33AABFE7712M1Z0" }
];

// Initial Purchase Orders (Module 2: Purchase Order Tracking)
const DEFAULT_PURCHASE_ORDERS = [
  { poNo: "PO-SPCM-2026-101", supplier: "Sree Vinayaka Cotton Ginning Mills", material: "Shankar-6 Organic Cotton Bales", qty: "500 Bales", amount: 450000, status: "Delivered" },
  { poNo: "PO-SPCM-2026-102", supplier: "Bhavani Natural Dyes & Auxiliaries", material: "Botanical Indigo & Madder Root Dyes", qty: "120 kg", amount: 84000, status: "In Transit" },
  { poNo: "PO-SPCM-2026-103", supplier: "Kanchi Mulberry Sericulture Society", material: "20/22D Pure Mulberry Raw Silk", qty: "60 kg", amount: 390000, status: "Loom Processing" },
  { poNo: "PO-SPCM-2026-104", supplier: "Kongu European Flax Importers", material: "Natural Long-Staple Flax Fiber Bales", qty: "200 Bales", amount: 210000, status: "Dispatched" }
];

// Initial Customer Reviews
const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: "Ananya Couture Studio (Mumbai)",
    fabric: "Poonguzhali Traditional Kanchipuram Silk",
    rating: 5,
    comment: "The Sree Poonguzhali Kanchipuram silk luster and pure gold zari density exceeded our bridal collection requirements. Shrinkage test after finishing was exactly 0%."
  },
  {
    id: 2,
    name: "Erode Garment Export Hub",
    fabric: "Poonguzhali Organic Combed Cotton",
    rating: 5,
    comment: "Poonguzhali organic combed cotton is remarkably soft, uniform in yarn count, and holds natural dye fastness even after industrial stone-washing."
  },
  {
    id: 3,
    name: "Salem Handloom Boutique",
    fabric: "Poonguzhali Natural Flax Linen",
    rating: 5,
    comment: "Poonguzhali natural flax linen has that crisp, artisanal European feel while being woven ethically right here in Tamil Nadu. Our boutique clients adore it."
  }
];

// ==========================================================================
// 2. State Variables
// ==========================================================================
let products = [];
let cart = [];
let reviews = [];
let suppliers = [];
let purchaseOrders = [];
let currentCategory = "All";
let couponDiscount = 0; // 0.10 for 10%
let activeOperatorRole = "admin";

// ==========================================================================
// 3. Application Lifecycle
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Theme Setup (Supporting sreeTheme, poongodiTheme, texmart_theme)
  const savedTheme = localStorage.getItem('sreeTheme') || localStorage.getItem('poongodiTheme') || localStorage.getItem('texmart_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Load Products (Prefer Sree Poonguzhali Mill Catalog)
  const storedProds = localStorage.getItem('poonguzhali_products') || localStorage.getItem('poongodi_products');
  if (storedProds) {
    try {
      const parsed = JSON.parse(storedProds);
      // Migrate if older Poongodi names exist
      if (parsed.length > 0 && parsed[0].name.includes("Poongodi")) {
        products = DEFAULT_PRODUCTS;
      } else {
        products = parsed;
      }
    } catch (e) {
      products = DEFAULT_PRODUCTS;
    }
  } else {
    products = DEFAULT_PRODUCTS;
  }
  saveProducts();

  // Load Cart
  const storedCart = localStorage.getItem('poonguzhali_cart') || localStorage.getItem('poongodi_cart') || localStorage.getItem('sreeCart') || localStorage.getItem('texmart_cart');
  cart = storedCart ? JSON.parse(storedCart) : [];

  // Load Reviews
  const storedReviews = localStorage.getItem('poonguzhali_reviews') || localStorage.getItem('poongodi_reviews') || localStorage.getItem('texmart_reviews');
  reviews = storedReviews ? JSON.parse(storedReviews) : DEFAULT_REVIEWS;

  // Load Suppliers & Purchase Orders (Module 2)
  const storedSuppliers = localStorage.getItem('poonguzhali_suppliers') || localStorage.getItem('poongodi_suppliers');
  suppliers = storedSuppliers ? JSON.parse(storedSuppliers) : DEFAULT_SUPPLIERS;

  const storedPos = localStorage.getItem('poonguzhali_pos') || localStorage.getItem('poongodi_pos');
  purchaseOrders = storedPos ? JSON.parse(storedPos) : DEFAULT_PURCHASE_ORDERS;

  // Initialize Elements
  initParticles();
  renderFabrics();
  renderReviews();
  populateReviewDropdown();
  updateCartBadge();
  renderSuppliers();
  renderPurchaseOrders();
  populatePoSupplierSelect();
  initScrollToTop();
});

// ==========================================================================
// 4. Floating Ambient Particle Canvas
// ==========================================================================
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = 40;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.2 + 0.8;
      this.vx = Math.random() * 0.6 - 0.3;
      this.vy = Math.random() * 0.6 - 0.3;
      this.color = Math.random() > 0.5 ? 'rgba(225, 29, 72, 0.45)' : 'rgba(245, 158, 11, 0.4)';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

// ==========================================================================
// 5. Theme Toggler
// ==========================================================================
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const target = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', target);
  localStorage.setItem('poongodiTheme', target);
  localStorage.setItem('sreeTheme', target);
  localStorage.setItem('texmart_theme', target);
  updateThemeIcon(target);
  showToast(`Switched to ${target} mode`);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
}

// ==========================================================================
// 5b. Mobile Navigation Drawer Toggle
// ==========================================================================
function toggleMobileNav() {
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (drawer && backdrop) {
    const isActive = drawer.classList.toggle('active');
    backdrop.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
  }
}

// ==========================================================================
// 6. Fabric Catalog Rendering & Filtering
// ==========================================================================
function renderFabrics() {
  const container = document.getElementById('fabricsGridContainer');
  if (!container) return;

  const filteredItems = getFilteredFabrics();
  container.innerHTML = '';

  if (filteredItems.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <i class="fa-solid fa-shirt" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 16px;"></i>
        <h4 style="font-size: 1.3rem;">No fabrics found in this selection</h4>
        <p style="color: var(--text-secondary); margin-top: 6px;">Try adjusting your keyword search or select "All Fabrics".</p>
      </div>
    `;
    return;
  }

  filteredItems.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'fabric-card';
    card.id = `fabricCard_${prod.id}`;

    const isLow = prod.stock <= 25;
    const stockTag = isLow
      ? `<span class="tag-stock-status low-stock"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock (${prod.stock}m)</span>`
      : `<span class="tag-stock-status in-stock"><i class="fa-solid fa-check"></i> In Stock (${prod.stock}m)</span>`;

    const starsHtml = renderStarRatingHtml(prod.rating || 5);

    card.innerHTML = `
      <div class="fabric-thumb-wrapper">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        ${stockTag}
        <span class="tag-category-pill">${prod.category}</span>
      </div>
      <div class="fabric-info-body">
        <div class="fabric-mill-origin">${prod.brand} • ${prod.origin}</div>
        <h4 class="fabric-item-title">${prod.name}</h4>
        <p class="fabric-item-desc">${prod.description}</p>
        
        <div class="fabric-spec-badges">
          <span class="spec-badge"><i class="fa-solid fa-weight-scale"></i> ${prod.gsm}</span>
          <span class="spec-badge"><i class="fa-solid fa-ruler-horizontal"></i> ${prod.width || '44"'}</span>
          <span class="spec-badge">${starsHtml}</span>
        </div>

        <div class="fabric-card-footer">
          <div class="price-container">
            <span class="price-main">₹${prod.price.toLocaleString('en-IN')}</span>
            <span class="price-unit">per meter (excl. 5% GST)</span>
          </div>
          <div class="card-action-group">
            <button class="btn-quick-preview" onclick="openQuickViewDialog(${prod.id})" title="Fabric Details & Drape">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn-add-to-cart" onclick="addToCart(${prod.id})">
              <i class="fa-solid fa-bag-shopping"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function getFilteredFabrics() {
  const query = (document.getElementById('fabricSearchInput')?.value || '').toLowerCase().trim();
  const sortMode = document.getElementById('catalogSortSelect')?.value || 'featured';

  let list = products.filter(p => {
    const matchCat = (currentCategory === "All") || (p.category.toLowerCase() === currentCategory.toLowerCase());
    const matchQuery = !query || 
      p.name.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query);
    return matchCat && matchQuery;
  });

  if (sortMode === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortMode === 'rating') {
    list.sort((a, b) => (b.rating || 5) - (a.rating || 5));
  }

  return list;
}

function setCategoryFilter(cat) {
  currentCategory = cat;
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => {
    if (p.textContent.includes(cat) || (cat === 'All' && p.textContent === 'All Fabrics')) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
  renderFabrics();
}

function filterCategoryFromCard(cat) {
  setCategoryFilter(cat);
  const target = document.getElementById('catalogSection');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

function handleCatalogSearch() {
  renderFabrics();
}

function handleCatalogSort() {
  renderFabrics();
}

function renderStarRatingHtml(val) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(val)) {
      stars += '<i class="fa-solid fa-star" style="color: #f59e0b; font-size: 0.72rem;"></i>';
    } else {
      stars += '<i class="fa-regular fa-star" style="color: #f59e0b; font-size: 0.72rem;"></i>';
    }
  }
  return stars;
}

// ==========================================================================
// 7. Quick View Dialog
// ==========================================================================
function openQuickViewDialog(id) {
  const prod = products.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('modalFabricName').textContent = prod.name;
  const content = document.getElementById('modalFabricContent');
  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; align-items: start;">
      <div style="border-radius: var(--radius-md); overflow: hidden; height: 280px; background: #0f172a;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div>
        <div style="display: flex; gap: 8px; margin-bottom: 8px;">
          <span class="tag-category-pill" style="position: static;">${prod.category}</span>
          <span class="spec-badge">${prod.brand}</span>
        </div>
        <h4 style="font-size: 1.35rem; margin-bottom: 8px; color: var(--text-main);">${prod.name}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
          ${prod.description}
        </p>

        <div style="background: var(--bg-surface); padding: 14px; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 18px; font-size: 0.84rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="color: var(--text-muted);">Fabric Weight:</span>
            <strong>${prod.gsm}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="color: var(--text-muted);">Weave Structure:</span>
            <strong>${prod.weave}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span style="color: var(--text-muted);">Roll Width:</span>
            <strong>${prod.width || '44 inches'}</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Available Mill Stock:</span>
            <strong class="${prod.stock <= 25 ? 'text-accent' : 'text-emerald'}">${prod.stock} meters</strong>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 1.5rem; font-weight: 800; color: var(--text-main);">₹${prod.price.toLocaleString('en-IN')}</span>
            <span style="font-size: 0.78rem; color: var(--text-muted);">/ meter</span>
          </div>
          <button class="btn-primary-hero" onclick="addToCart(${prod.id}); closeModalWindow('quickViewDialog');">
            <i class="fa-solid fa-cart-plus"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;

  openModalWindow('quickViewDialog');
}

// ==========================================================================
// 8. Slide-over Shopping Cart & Automated Tax Invoice Engine
// ==========================================================================
function toggleCartDrawer() {
  const panel = document.getElementById('cartSlidePanel');
  const backdrop = document.getElementById('cartBackdrop');
  if (panel.classList.contains('active')) {
    panel.classList.remove('active');
    backdrop.classList.remove('active');
  } else {
    renderCartDrawerUI();
    panel.classList.add('active');
    backdrop.classList.add('active');
  }
}

function addToCart(productId, meters = 1) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    if (existing.quantity + meters > prod.stock) {
      showToast(`Cannot add more meters. Mill stock limit is ${prod.stock}m.`);
      return;
    }
    existing.quantity += meters;
  } else {
    cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.price,
      image: prod.image,
      gsm: prod.gsm,
      quantity: meters
    });
  }

  saveCart();
  updateCartBadge();
  showToast(`Added ${prod.name} (${meters}m) to Cart`);
}

function changeCartQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  const prod = products.find(p => p.id === id);
  if (!item) return;

  const nextQty = item.quantity + delta;
  if (nextQty <= 0) {
    cart = cart.filter(i => i.id !== id);
  } else {
    if (prod && nextQty > prod.stock) {
      showToast(`Cannot exceed current available stock of ${prod.stock}m.`);
      return;
    }
    item.quantity = nextQty;
  }

  saveCart();
  updateCartBadge();
  renderCartDrawerUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartBadge();
  renderCartDrawerUI();
  showToast("Fabric removed from shopping bag");
}

function saveCart() {
  localStorage.setItem('poongodi_cart', JSON.stringify(cart));
  localStorage.setItem('sreeCart', JSON.stringify(cart));
  localStorage.setItem('texmart_cart', JSON.stringify(cart));
}

function updateCartBadge() {
  const badge = document.getElementById('cartCountBadge');
  const totalMeters = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (badge) badge.textContent = totalMeters;
}

function renderCartDrawerUI() {
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('bagSubtotal');
  const gstEl = document.getElementById('bagGst');
  const discountEl = document.getElementById('bagDiscount');
  const grandTotalEl = document.getElementById('bagGrandTotal');

  if (!list) return;
  list.innerHTML = '';

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="empty-cart-view">
        <i class="fa-solid fa-basket-shopping"></i>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Explore our fabric catalog and order handloom fabrics by the meter.</p>
      </div>
    `;
    subtotalEl.textContent = '₹0.00';
    gstEl.textContent = '₹0.00';
    discountEl.textContent = '-₹0.00';
    grandTotalEl.textContent = '₹0.00';
    return;
  }

  let subtotal = 0;
  cart.forEach(item => {
    const itemCost = item.price * item.quantity;
    subtotal += itemCost;

    const row = document.createElement('div');
    row.className = 'cart-product-row';
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-thumb-img">
      <div class="cart-prod-details">
        <h4>${item.name}</h4>
        <span class="cart-prod-unit-price">₹${item.price.toLocaleString('en-IN')} / m</span>
        <div class="meter-stepper-ctrl">
          <button class="btn-step" onclick="changeCartQuantity(${item.id}, -1)">-</button>
          <span class="stepper-val">${item.quantity}m</span>
          <button class="btn-step" onclick="changeCartQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 800; font-size: 0.95rem;">₹${itemCost.toLocaleString('en-IN')}</div>
        <button class="btn-remove-cart-item" onclick="removeFromCart(${item.id})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    list.appendChild(row);
  });

  const discount = subtotal * couponDiscount;
  const taxable = subtotal - discount;
  const gst = taxable * 0.05; // 5% Textile GST
  const grandTotal = taxable + gst;

  subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  discountEl.textContent = `-₹${discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  gstEl.textContent = `₹${gst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  grandTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
}

function applyCartCoupon() {
  const code = (document.getElementById('billCouponCode')?.value || '').trim().toUpperCase();
  if (code === 'POONGUZHALI10' || code === 'POONGODI10' || code === 'TEXMART10') {
    couponDiscount = 0.10;
    renderCartDrawerUI();
    showToast("Coupon applied! 10% Festive Mill Discount granted.");
  } else if (code === 'WEAVER20') {
    couponDiscount = 0.20;
    renderCartDrawerUI();
    showToast("Coupon 'WEAVER20' applied! 20% Direct Loom Discount granted.");
  } else {
    couponDiscount = 0;
    renderCartDrawerUI();
    showToast("Invalid coupon. Try 'POONGUZHALI10'.");
  }
}

function openCheckoutDialog() {
  if (cart.length === 0) {
    showToast("Shopping bag is empty. Add fabric rolls first.");
    return;
  }
  openModalWindow('checkoutDialog');
}

function handleInvoiceGeneration(event) {
  event.preventDefault();
  const name = document.getElementById('billCustomerName').value.trim();
  const email = document.getElementById('billCustomerEmail').value.trim();
  const phone = document.getElementById('billCustomerPhone').value.trim();
  const address = document.getElementById('billShippingAddress').value.trim();

  let subtotal = 0;
  cart.forEach(i => subtotal += i.price * i.quantity);
  const discount = subtotal * couponDiscount;
  const taxable = subtotal - discount;
  const cgst = taxable * 0.025;
  const sgst = taxable * 0.025;
  const total = taxable + cgst + sgst;

  const receiptNo = `SPCM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleString();

  // Deduct stock in real-time
  cart.forEach(item => {
    const p = products.find(prod => prod.id === item.id);
    if (p) p.stock = Math.max(0, p.stock - item.quantity);
  });
  saveProducts();

  const invObj = {
    receiptNo: receiptNo,
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    customerAddress: address,
    date: dateStr,
    items: [...cart],
    subtotal: subtotal,
    discount: discount,
    cgst: cgst,
    sgst: sgst,
    total: total
  };

  renderInvoiceSheet(invObj);

  // Clear cart
  cart = [];
  saveCart();
  updateCartBadge();

  closeModalWindow('checkoutDialog');
  toggleCartDrawer();
  openModalWindow('invoicePaperDialog');
  renderFabrics();
  renderStoreManagerTable();
  showToast(`Tax Invoice #${receiptNo} generated for ${name}!`);
}

function renderInvoiceSheet(inv) {
  const paper = document.getElementById('invoiceSheetPaper');
  if (!paper) return;

  let rows = '';
  inv.items.forEach((item, idx) => {
    const rowCost = item.price * item.quantity;
    rows += `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${item.name}</strong><br><span style="font-size: 0.76rem; color: #64748b;">${item.gsm || ''} • Origin: Gangapuram, Chithode, Erode</span></td>
        <td>${item.quantity} meters</td>
        <td>₹${item.price.toLocaleString('en-IN')}</td>
        <td style="text-align: right;">₹${rowCost.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</td>
      </tr>
    `;
  });

  paper.innerHTML = `
    <div class="inv-masthead">
      <div class="inv-brand-info">
        <h2>SREE POONGUZHALI COTTON MILLS</h2>
        <p>Premier Textile Industry • Spinning & Powerloom Weaving Facility</p>
        <p>Sf No.41/ 1A, Gangapuram to sadaiyampalayam road, Gangapuram, Chithode, Erode - 638 102</p>
        <p><strong>GST IN: 33ADSFS4275Q1Z3</strong> • Phone: <strong>9965877007</strong></p>
      </div>
      <div class="inv-receipt-meta">
        <h4>TAX INVOICE</h4>
        <p><strong>Receipt #:</strong> ${inv.receiptNo}</p>
        <p><strong>Date:</strong> ${inv.date}</p>
        <p><strong>HSN Category:</strong> 5208 (Cotton) / 5007 (Silk)</p>
      </div>
    </div>

    <div class="inv-customer-box">
      <strong>Billed & Shipped To:</strong><br>
      <strong>${inv.customerName}</strong><br>
      ${inv.customerAddress}<br>
      <span>Email: ${inv.customerEmail} | Phone: ${inv.customerPhone}</span>
    </div>

    <table class="inv-items-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Fabric Description & Weave</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th style="text-align: right;">Amount (INR)</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>

    <div class="inv-calc-summary">
      <div class="inv-calc-row">
        <span>Subtotal:</span>
        <span>₹${inv.subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
      </div>
      ${inv.discount > 0 ? `
      <div class="inv-calc-row" style="color: #059669;">
        <span>Promo Discount:</span>
        <span>-₹${inv.discount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
      </div>` : ''}
      <div class="inv-calc-row">
        <span>CGST (2.5%):</span>
        <span>₹${inv.cgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
      </div>
      <div class="inv-calc-row">
        <span>SGST (2.5%):</span>
        <span>₹${inv.sgst.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
      </div>
      <div class="inv-calc-row final-due">
        <span>Total Payable:</span>
        <span>₹${inv.total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
      </div>
    </div>

    <div class="inv-auth-footer">
      <div>
        <p><strong>Certification:</strong> 100% genuine pure yarn certified under ASTM D5430 standards.</p>
        <p style="font-size: 0.72rem; color: #94a3b8;">Generated via Sree Poonguzhali Cotton Mills Smart Textile Management System.</p>
      </div>
      <div class="inv-official-stamp">
        SREE POONGUZHALI COTTON MILLS<br>CHITHODE, ERODE • AUTHORIZED SIGNATORY<br><span style="font-size:0.65rem;">CEO / MD: C. PRABHU</span>
      </div>
    </div>
  `;
}

function renderSampleTaxInvoice() {
  const sampleInv = {
    receiptNo: "SPCM-2026-9042",
    customerName: "M/s. Sri Velavan Silks & Apparels",
    customerEmail: "velavansilks.erode@gmail.com",
    customerPhone: "+91 98427 45890",
    customerAddress: "Plot 14-B, SIPCOT Industrial Growth Estate, Perundurai, Erode – 638052",
    date: new Date().toLocaleString(),
    items: [
      { name: "Poonguzhali Traditional Kanchipuram Silk", gsm: "120 GSM", quantity: 20, price: 1850 },
      { name: "Poonguzhali Organic Combed Cotton", gsm: "180 GSM", quantity: 60, price: 380 },
      { name: "Poonguzhali Natural Flax Linen", gsm: "210 GSM", quantity: 25, price: 620 }
    ],
    subtotal: 75300,
    discount: 7530,
    cgst: 1694.25,
    sgst: 1694.25,
    total: 71158.50
  };
  renderInvoiceSheet(sampleInv);
}

function openInvoiceModal() {
  const paper = document.getElementById('invoiceSheetPaper');
  if (!paper || !paper.innerHTML.trim()) {
    renderSampleTaxInvoice();
  }
  openModalWindow('invoicePaperDialog');
}

function printTaxInvoice() {
  const paper = document.getElementById('invoiceSheetPaper');
  if (!paper || !paper.innerHTML.trim()) {
    renderSampleTaxInvoice();
  }
  openModalWindow('invoicePaperDialog');
  setTimeout(() => {
    window.print();
  }, 100);
}

// ==========================================================================
// 9. Sree Poonguzhali Cotton Mills Management Portal & Multi-Module Logic
// ==========================================================================
function openStoreManagerModal() {
  renderStoreManagerTable();
  renderSuppliers();
  renderPurchaseOrders();
  openModalWindow('storeManagerDialog');
}

function switchPortalTab(tabId) {
  const tabs = [
    { id: 'tabDashboard', btn: 'tabBtnDashboard', pane: 'paneDashboard' },
    { id: 'tabStock', btn: 'tabBtnStock', pane: 'paneStock' },
    { id: 'tabSuppliers', btn: 'tabBtnSuppliers', pane: 'paneSuppliers' },
    { id: 'tabLicenses', btn: 'tabBtnLicenses', pane: 'paneLicenses' },
    { id: 'tabDatabase', btn: 'tabBtnDatabase', pane: 'paneDatabase' },
    { id: 'tabConsultancy', btn: 'tabBtnConsultancy', pane: 'paneConsultancy' }
  ];

  tabs.forEach(t => {
    const btn = document.getElementById(t.btn);
    const pane = document.getElementById(t.pane);
    if (t.id === tabId) {
      btn?.classList.add('active');
      pane?.classList.add('active');
    } else {
      btn?.classList.remove('active');
      pane?.classList.remove('active');
    }
  });

  if (tabId === 'tabStock') renderStoreManagerTable();
  if (tabId === 'tabSuppliers') {
    renderSuppliers();
    renderPurchaseOrders();
  }
}

function handleRoleSwitch() {
  const role = document.getElementById('portalRoleSelector')?.value || 'admin';
  activeOperatorRole = role;
  const badge = document.getElementById('roleAccessBadge');
  if (role === 'admin') {
    badge.className = 'pill-badge green';
    badge.innerHTML = '<i class="fa-solid fa-lock-open"></i> Full SuperAdmin Access';
    showToast("Operator switched: C. Prabhu (CEO & Mill Admin)");
  } else if (role === 'storekeeper') {
    badge.className = 'pill-badge gold';
    badge.innerHTML = '<i class="fa-solid fa-warehouse"></i> Store & Weave Master Access';
    showToast("Operator switched: Store & Weave Master");
  } else if (role === 'purchase') {
    badge.className = 'pill-badge gold';
    badge.innerHTML = '<i class="fa-solid fa-truck"></i> Procurement Officer Access';
    showToast("Operator switched: Procurement Officer");
  } else {
    badge.className = 'pill-badge green';
    badge.innerHTML = '<i class="fa-solid fa-microscope"></i> Quality Inspector Access';
    showToast("Operator switched: Quality Assurance Inspector");
  }
}

function exportStockAuditReport() {
  let csv = "SKU Code,Fabric Name,Category,GSM,Stock (Meters),Price (INR),Total Value (INR),Origin\n";
  products.forEach(p => {
    csv += `SKU-${1000 + p.id},"${p.name}","${p.category}","${p.gsm}",${p.stock},${p.price},${p.stock * p.price},"${p.origin}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Sree_Poonguzhali_Cotton_Mills_Stock_Audit_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Sree Poonguzhali Cotton Mills Stock Audit CSV exported successfully!");
}

function renderSuppliers() {
  const container = document.getElementById('suppliersListContainer');
  if (!container) return;
  container.innerHTML = '';

  suppliers.forEach(s => {
    const div = document.createElement('div');
    div.className = 'supplier-item-card';
    div.innerHTML = `
      <h5><i class="fa-solid fa-industry text-accent"></i> ${s.name}</h5>
      <p class="sup-meta"><i class="fa-solid fa-location-dot"></i> ${s.location} • Rating: <strong class="text-emerald">${s.rating}</strong></p>
      <p style="font-size: 0.82rem; color: var(--text-main); margin-bottom: 8px;">Supplies: <strong>${s.material}</strong></p>
      <div class="sup-tags">
        <span class="pill-badge green"><i class="fa-solid fa-circle-check"></i> ${s.gstin}</span>
        <span class="pill-badge gold"><i class="fa-solid fa-phone"></i> ${s.phone}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderPurchaseOrders() {
  const tbody = document.getElementById('poTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  purchaseOrders.forEach(po => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><code>${po.poNo}</code></td>
      <td><strong>${po.supplier}</strong></td>
      <td>${po.material}</td>
      <td><span class="spec-badge">${po.qty}</span></td>
      <td><strong>₹${po.amount.toLocaleString('en-IN')}</strong></td>
      <td><span class="tag-stock-status in-stock" style="position:static;"><i class="fa-solid fa-clock"></i> ${po.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function populatePoSupplierSelect() {
  const select = document.getElementById('poSupplierSelect');
  if (!select) return;
  select.innerHTML = '';
  suppliers.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.name;
    opt.textContent = `${s.name} (${s.location})`;
    select.appendChild(opt);
  });
}

function openNewPoFormDialog() {
  populatePoSupplierSelect();
  openModalWindow('newPoDialog');
}

function handleCreatePurchaseOrder(event) {
  event.preventDefault();
  const supplier = document.getElementById('poSupplierSelect').value;
  const material = document.getElementById('poMaterialDesc').value.trim();
  const qty = parseInt(document.getElementById('poQuantity').value);
  const unitPrice = parseFloat(document.getElementById('poUnitPrice').value);
  const delivDate = document.getElementById('poDeliveryDate').value;

  const total = qty * unitPrice;
  const poCode = `PO-SPCM-2026-${Math.floor(100 + Math.random() * 900)}`;

  const newPo = {
    poNo: poCode,
    supplier: supplier,
    material: material,
    qty: `${qty} Units`,
    amount: total,
    status: "Dispatched",
    date: delivDate
  };

  purchaseOrders.unshift(newPo);
  localStorage.setItem('poonguzhali_pos', JSON.stringify(purchaseOrders));
  localStorage.setItem('poongodi_pos', JSON.stringify(purchaseOrders));

  renderPurchaseOrders();
  closeModalWindow('newPoDialog');
  document.getElementById('newPoForm').reset();
  showToast(`Purchase Order #${poCode} issued to ${supplier}!`);
}

function renderStoreManagerTable() {
  const tbody = document.getElementById('storeManagerTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  let totalMeters = 0;
  let lowStockCount = 0;
  let totalVal = 0;

  products.forEach(p => {
    totalMeters += p.stock;
    totalVal += (p.price * p.stock);
    if (p.stock <= 25) lowStockCount++;

    const tr = document.createElement('tr');
    const isLow = p.stock <= 25;
    const statusHtml = isLow
      ? `<span class="tag-stock-status low-stock" style="position: static;"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock</span>`
      : `<span class="tag-stock-status in-stock" style="position: static;"><i class="fa-solid fa-check"></i> Healthy</span>`;

    tr.innerHTML = `
      <td><code>SKU-${1000 + p.id}</code></td>
      <td><strong>${p.name}</strong><br><span style="font-size: 0.76rem; color: var(--text-muted);">${p.brand} • ${p.gsm}</span></td>
      <td><span class="spec-badge">${p.category}</span></td>
      <td><strong class="${isLow ? 'text-accent' : 'text-emerald'}">${p.stock} m</strong></td>
      <td>₹${p.price.toLocaleString('en-IN')}</td>
      <td>${statusHtml}</td>
      <td>
        <div style="display: flex; gap: 6px;">
          <button class="btn-step" onclick="adjustStock(${p.id}, 10)" title="Add 10m roll stock">+10m</button>
          <button class="btn-step" onclick="adjustStock(${p.id}, -10)" title="Deduct 10m roll stock">-10m</button>
          <button class="btn-remove-cart-item" onclick="deleteFabricSku(${p.id})" title="Remove Fabric" style="margin-left: 8px;">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const skusEl = document.getElementById('portalTotalSkus');
  if (skusEl) skusEl.textContent = products.length;
  const metersEl = document.getElementById('portalTotalMeters');
  if (metersEl) metersEl.textContent = `${totalMeters.toLocaleString('en-IN')} m`;
  const alertsEl = document.getElementById('portalLowStockAlerts');
  if (alertsEl) alertsEl.textContent = lowStockCount;
  const valEl = document.getElementById('portalInventoryVal');
  if (valEl) valEl.textContent = `₹${totalVal.toLocaleString('en-IN')}`;
}

function adjustStock(id, delta) {
  const p = products.find(item => item.id === id);
  if (!p) return;
  p.stock = Math.max(0, p.stock + delta);
  saveProducts();
  renderStoreManagerTable();
  renderFabrics();
  showToast(`Updated stock of ${p.name} to ${p.stock}m`);
}

function deleteFabricSku(id) {
  if (confirm("Remove this fabric SKU from live catalog?")) {
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderStoreManagerTable();
    renderFabrics();
    populateReviewDropdown();
    showToast("Fabric SKU removed from catalog");
  }
}

function openAddFabricSkuDialog() {
  openModalWindow('newFabricSkuDialog');
}

function handleAddNewFabricSku(event) {
  event.preventDefault();
  const name = document.getElementById('newFabName').value.trim();
  const category = document.getElementById('newFabCategory').value;
  const brand = document.getElementById('newFabBrand').value.trim();
  const gsm = document.getElementById('newFabGsm').value.trim();
  const price = parseFloat(document.getElementById('newFabPrice').value);
  const stock = parseInt(document.getElementById('newFabStock').value);
  const desc = document.getElementById('newFabDesc').value.trim();

  let img = 'assets/organic_cotton_rolls.jpg';
  if (category === 'Silk') img = 'assets/kanchipuram_silk.jpg';
  if (category === 'Linen') img = 'assets/linen_fabric.jpg';
  if (category === 'Brocade') img = 'assets/banarasi_brocade.jpg';
  if (category === 'Denim') img = 'assets/textile_weaving_mill.jpg';

  const newSku = {
    id: Date.now(),
    name: name,
    category: category,
    brand: brand,
    gsm: gsm,
    price: price,
    stock: stock,
    description: desc,
    image: img,
    origin: "Tamil Nadu Weaving Cluster",
    rating: 5.0
  };

  products.unshift(newSku);
  saveProducts();

  closeModalWindow('newFabricSkuDialog');
  document.getElementById('newFabricForm').reset();
  renderFabrics();
  renderStoreManagerTable();
  populateReviewDropdown();
  showToast(`New fabric "${name}" registered into live inventory!`);
}

function saveProducts() {
  localStorage.setItem('poonguzhali_products', JSON.stringify(products));
  localStorage.setItem('sreepoonguzhali_products', JSON.stringify(products));
  localStorage.setItem('poongodi_products', JSON.stringify(products));
  localStorage.setItem('texmart_products', JSON.stringify(products));
}

// ==========================================================================
// 10. B2B Wholesale Quote Calculator
// ==========================================================================
function handleB2bSubmit(event) {
  event.preventDefault();
  const company = document.getElementById('b2bCompanyName').value.trim();
  const fabric = document.getElementById('b2bFabricType').value;
  const meters = parseInt(document.getElementById('b2bMeters').value);
  const email = document.getElementById('b2bEmail').value.trim();

  const estTotal = meters * 340;
  showToast(`Wholesale Quote for ${meters}m ${fabric} dispatched to ${email}!`);
  document.getElementById('b2bInquiryForm').reset();
}

// ==========================================================================
// 11. Customer Reviews Subsystem
// ==========================================================================
function populateReviewDropdown() {
  const select = document.getElementById('rvFabricPurchased');
  if (!select) return;
  select.innerHTML = '';
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.name;
    opt.textContent = `${p.name} (${p.brand})`;
    select.appendChild(opt);
  });
}

function selectStarRating(num) {
  document.getElementById('selectedStarVal').value = num;
  const stars = document.querySelectorAll('#starRatingSelector i');
  stars.forEach((s, idx) => {
    s.className = (idx < num) ? 'fa-solid fa-star' : 'fa-regular fa-star';
  });
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('rvCustomerName').value.trim();
  const fabric = document.getElementById('rvFabricPurchased').value;
  const rating = parseInt(document.getElementById('selectedStarVal').value);
  const comment = document.getElementById('rvComment').value.trim();

  const newRv = {
    id: Date.now(),
    name: name,
    fabric: fabric,
    rating: rating,
    comment: comment
  };

  reviews.unshift(newRv);
  localStorage.setItem('texmart_reviews', JSON.stringify(reviews));

  renderReviews();
  document.getElementById('writeReviewForm').reset();
  selectStarRating(5);
  showToast("Your fabric review has been posted!");
}

function renderReviews() {
  const grid = document.getElementById('customerReviewsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  reviews.forEach(rv => {
    const starsHtml = renderStarRatingHtml(rv.rating);
    const card = document.createElement('div');
    card.className = 'review-bubble-card';
    card.innerHTML = `
      <div>
        <div class="review-stars-bar">${starsHtml}</div>
        <p class="review-quote-text">"${rv.comment}"</p>
      </div>
      <div class="reviewer-meta">
        <div>
          <strong>${rv.name}</strong><br>
          <span>Verified Buyer</span>
        </div>
        <span class="spec-badge">${rv.fabric}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 12. Modal & Toast Helpers
// ==========================================================================
function openModalWindow(id) {
  document.getElementById(id)?.classList.add('active');
}

function closeModalWindow(id) {
  document.getElementById(id)?.classList.remove('active');
}

function showToast(msg) {
  const anchor = document.getElementById('toastAnchor');
  if (!anchor) return;

  const toast = document.createElement('div');
  toast.className = 'app-toast-item';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald"></i> <span>${msg}</span>`;
  anchor.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// 13. Global Features & Scroll-To-Top (Report Appendix 1)
// ==========================================================================
function initScrollToTop() {
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scrollTopBtn';
  scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  scrollTopBtn.title = 'Scroll to Top';
  scrollTopBtn.className = 'btn-scroll-top';
  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
