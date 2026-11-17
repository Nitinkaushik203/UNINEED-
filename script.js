/* ---------- Data ---------- */
const categories = [
  { name: 'All items', icon: '✳', count: 'Everything', key: 'All' },
  { name: 'Food & drinks', icon: '🥪', count: 'Quick campus bites', key: 'Food' },
  { name: 'Books', icon: '📚', count: 'Read, learn, repeat', key: 'Books' },
  { name: 'Stationery', icon: '✏️', count: 'Notes & supplies', key: 'Stationery' },
  { name: 'Electronics', icon: '🎧', count: 'Tech essentials', key: 'Electronics' },
  { name: 'Accessories', icon: '🧢', count: 'Little extras', key: 'Accessories' },
  { name: 'Clothing', icon: '👕', count: 'Wear your vibe', key: 'Clothing' },
  { name: 'Sports', icon: '🏸', count: 'Play more', key: 'Sports' },
  { name: 'Art supplies', icon: '🎨', count: 'Make something', key: 'Art supplies' },
  { name: 'Lab equipment', icon: '🧪', count: 'Practical essentials', key: 'Lab equipment' },
  { name: 'Hostel essentials', icon: '🛏️', count: 'Room-ready basics', key: 'Hostel essentials' }
];

const products = [
  { id: 1, name: 'Masala Maggi Bowl', cat: 'Food', price: 45, emoji: '🍜', desc: 'A warm, spicy campus classic', tag: 'Student favourite' },
  { id: 2, name: 'Cold Coffee', cat: 'Food', price: 60, emoji: '🧋', desc: 'Chilled and ready for a study break', tag: 'Popular' },
  { id: 3, name: 'Veg Sandwich', cat: 'Food', price: 55, emoji: '🥪', desc: 'A quick bite between lectures', tag: 'Fresh pick' },
  { id: 4, name: 'Engineering Mathematics', cat: 'Books', price: 320, emoji: '📘', desc: 'Core semester study companion', tag: 'Study pick' },
  { id: 5, name: 'Programming in C', cat: 'Books', price: 280, emoji: '📗', desc: 'Build your coding foundations', tag: 'Bestseller' },
  { id: 6, name: 'Campus Notebook Set', cat: 'Stationery', price: 120, emoji: '📓', desc: 'Pack of three ruled notebooks', tag: 'Everyday essential' },
  { id: 7, name: 'Highlighter Pack', cat: 'Stationery', price: 85, emoji: '🖍️', desc: 'Five colours for cleaner notes', tag: 'Under ₹100' },
  { id: 8, name: 'Scientific Calculator', cat: 'Electronics', price: 650, emoji: '🧮', desc: 'For classes, labs and exams', tag: 'Study essential' },
  { id: 9, name: 'Wireless Earbuds', cat: 'Electronics', price: 899, emoji: '🎧', desc: 'Compact everyday audio', tag: 'Popular' },
  { id: 10, name: 'USB-C Fast Charger', cat: 'Electronics', price: 499, emoji: '🔌', desc: 'A spare charger for busy days', tag: 'Useful find' },
  { id: 11, name: 'Canvas Tote Bag', cat: 'Accessories', price: 199, emoji: '👜', desc: 'Carry books and daily essentials', tag: 'Campus style' },
  { id: 12, name: 'Steel Water Bottle', cat: 'Accessories', price: 249, emoji: '🥤', desc: 'Reusable bottle for long days', tag: 'Daily carry' },
  { id: 13, name: 'Everyday Hoodie', cat: 'Clothing', price: 599, emoji: '🧥', desc: 'Comfort for late-night study sessions', tag: 'Campus wear' },
  { id: 14, name: 'Sports T-shirt', cat: 'Clothing', price: 299, emoji: '👕', desc: 'Lightweight everyday activewear', tag: 'Easy fit' },
  { id: 15, name: 'Badminton Racket', cat: 'Sports', price: 750, emoji: '🏸', desc: 'For a quick game after class', tag: 'Game on' },
  { id: 16, name: 'Football', cat: 'Sports', price: 499, emoji: '⚽', desc: 'Take the match to the field', tag: 'Team pick' },
  { id: 17, name: 'Sketchbook & Pencils', cat: 'Art supplies', price: 180, emoji: '🎨', desc: 'A fresh page for every idea', tag: 'Creative pick' },
  { id: 18, name: 'Acrylic Colour Set', cat: 'Art supplies', price: 260, emoji: '🖌️', desc: 'Starter set for colourful projects', tag: 'Make something' },
  { id: 19, name: 'Lab Coat', cat: 'Lab equipment', price: 450, emoji: '🥼', desc: 'White coat for practical sessions', tag: 'Lab essential' },
  { id: 20, name: 'Safety Goggles', cat: 'Lab equipment', price: 150, emoji: '🥽', desc: 'Protective eyewear for lab work', tag: 'Practical pick' },
  { id: 21, name: 'Desk Organiser', cat: 'Hostel essentials', price: 160, emoji: '🗂️', desc: 'Keep your study corner tidy', tag: 'Room upgrade' },
  { id: 22, name: 'Laundry Basket', cat: 'Hostel essentials', price: 220, emoji: '🧺', desc: 'A simple hostel room essential', tag: 'Useful find' },
  { id: 23, name: 'LED Study Lamp', cat: 'Hostel essentials', price: 399, emoji: '💡', desc: 'Focused light for late study hours', tag: 'Study corner' },
  { id: 24, name: 'Pillow & Bedsheet Set', cat: 'Hostel essentials', price: 499, emoji: '🛏️', desc: 'A little comfort for your room', tag: 'Room essential' }
];

const hostels = [
  { name: 'Campus Nest Rooms', type: 'Shared / twin sharing', price: 'From ₹5,500 / month', emoji: '🏢', detail: 'Sample listing • Ask provider to confirm amenities and availability' },
  { name: 'Greenview Student Stay', type: 'Single and double rooms', price: 'From ₹7,000 / month', emoji: '🏡', detail: 'Sample listing • Verify distance, rules and deposit before booking' },
  { name: 'StudySpace Residence', type: 'Shared student accommodation', price: 'From ₹6,000 / month', emoji: '🛌', detail: 'Sample listing • Contact and availability are not verified' }
];

/* ---------- State ---------- */
let activeCategory = 'All';
let cart = JSON.parse(localStorage.getItem('unineedCart') || '{}');

/* ---------- Helpers ---------- */
function money(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

/* ---------- Rendering ---------- */
function renderCategories() {
  document.getElementById('categoryGrid').innerHTML = categories.map(c => `
    <button class="category ${activeCategory === c.key ? 'active' : ''}" onclick="setCategory('${c.key}')">
      <span class="emoji">${c.icon}</span><b>${c.name}</b><small>${c.count}</small>
    </button>`).join('');
}

function setCategory(key) {
  activeCategory = key;
  renderCategories();
  renderProducts();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function renderProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  let list = products.filter(p =>
    (activeCategory === 'All' || p.cat === activeCategory) &&
    `${p.name} ${p.cat} ${p.desc}`.toLowerCase().includes(q)
  );

  const sort = document.getElementById('sortSelect').value;
  if (sort === 'low') list.sort((a, b) => a.price - b.price);
  if (sort === 'high') list.sort((a, b) => b.price - a.price);

  document.getElementById('productGrid').innerHTML = list.length
    ? list.map(p => `
      <article class="product">
        <div class="product-art"><span class="tag">${p.tag}</span>${p.emoji}</div>
        <div class="product-info">
          <small>${p.cat}</small>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <div class="product-bottom">
            <span class="price">${money(p.price)}</span>
            <button class="add" onclick="addToCart(${p.id})">＋ Add</button>
          </div>
        </div>
      </article>`).join('')
    : '<div class="empty" style="grid-column:1/-1"><span>🔎</span>No matching items. Try another search.</div>';
}

function renderHostels() {
  document.getElementById('hostelCards').innerHTML = hostels.map(h => `
    <article class="hostel-card">
      <span style="font-size:28px">${h.emoji}</span>
      <b>${h.name}</b>
      <p>${h.type}</p>
      <strong>${h.price}</strong>
      <p style="margin-top:9px">${h.detail}</p>
    </article>`).join('');
}

/* ---------- Cart ---------- */
function saveCart() {
  localStorage.setItem('unineedCart', JSON.stringify(cart));
  updateCount();
}

function updateCount() {
  document.getElementById('cartCount').textContent = Object.values(cart).reduce((a, b) => a + b, 0);
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  toast('Added to your bag ✳');
}

function changeQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function cartItems() {
  return Object.entries(cart)
    .map(([id, qty]) => ({ product: products.find(p => p.id === Number(id)), qty }))
    .filter(x => x.product);
}

function cartTotal() {
  return cartItems().reduce((sum, x) => sum + x.product.price * x.qty, 0);
}

function renderCart() {
  const items = cartItems();
  const el = document.getElementById('cartContents');

  if (!items.length) {
    el.innerHTML = '<div class="empty"><span>🛍️</span>Your bag is taking a break.<br>Add something you need.</div>';
    return;
  }

  el.innerHTML = items.map(x => `
    <div class="cart-row">
      <div class="cart-emoji">${x.product.emoji}</div>
      <div><b>${x.product.name}</b><small>${money(x.product.price)} each</small></div>
      <div class="qty">
        <button onclick="changeQty(${x.product.id},-1)">−</button>
        <b>${x.qty}</b>
        <button onclick="changeQty(${x.product.id},1)">+</button>
      </div>
    </div>`).join('') + `
    <div class="total"><span>Total</span><span>${money(cartTotal())}</span></div>
    <button class="primary" style="width:100%" onclick="openCheckout()">Continue to checkout ↗</button>`;
}

/* ---------- Modals & toast ---------- */
function openCart() {
  renderCart();
  document.getElementById('cartModal').classList.add('show');
}

function openCheckout() {
  if (!cartItems().length) return;
  closeModal('cartModal');
  document.getElementById('checkoutTotal').innerHTML =
    `<span>Order total</span><span>${money(cartTotal())}</span>`;
  document.getElementById('checkoutModal').classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

function backdropClose(e, id) {
  if (e.target.id === id) closeModal(id);
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2100);
}

/* ---------- Checkout ---------- */
document.getElementById('checkoutForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!cartItems().length) return;

  const data = Object.fromEntries(new FormData(e.target).entries());
  const order = {
    id: 'UNI' + Date.now().toString().slice(-7),
    date: new Date().toLocaleString('en-IN'),
    customer: data,
    items: cartItems(),
    total: cartTotal()
  };

  const orders = JSON.parse(localStorage.getItem('unineedOrders') || '[]');
  orders.push(order);
  localStorage.setItem('unineedOrders', JSON.stringify(orders));

  cart = {};
  saveCart();
  closeModal('checkoutModal');
  e.target.reset();

  alert(`Demo order placed!\nOrder ID: ${order.id}\nTotal: ${money(order.total)}\nPayment preference: ${data.payment}\n\nThis is a browser-only demo. No payment was collected.`);
});

/* ---------- Init ---------- */
renderCategories();
renderProducts();
renderHostels();
updateCount();