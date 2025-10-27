import { cart, removeFromCart, updateQuantity, getCartTotal } from './cart.js';
import { displayBooks } from './books.js';

export function renderCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '<h2>Shopping Cart</h2>';

  if(cart.length === 0) {
    cartContainer.innerHTML += '<p>Your cart is empty</p>';
    return;
  }

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <p>${item.title} - ₹${item.price} x ${item.quantity}</p>
      <div class="cart-buttons">
        <button class="increase" data-title="${item.title}">+</button>
        <button class="decrease" data-title="${item.title}">-</button>
        <button class="remove" data-title="${item.title}">🗑️</button>
      </div>
    `;
    cartContainer.appendChild(cartItem);
  });

  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', e => {
      updateQuantity(e.target.dataset.title, 1);
      renderCart();
      displayBooks();
    });
  });

  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', e => {
      updateQuantity(e.target.dataset.title, -1);
      renderCart();
      displayBooks();
    });
  });

  document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', e => {
      removeFromCart(e.target.dataset.title);
      renderCart();
      displayBooks();
    });
  });

  const totalDiv = document.createElement('div');
  totalDiv.className = 'cart-total';
  totalDiv.innerHTML = `<h4>Total: ₹${getCartTotal()}</h4>`;
  cartContainer.appendChild(totalDiv);

  const buyBtn = document.createElement('button');
  buyBtn.id = 'buy-now';
  buyBtn.className = 'buy-now-btn';
  buyBtn.innerText = 'Buy Now';
  buyBtn.addEventListener('click', () => {
    if(cart.length === 0) alert('Your cart is empty!');
    else window.location.href = 'purchase.html';
  });
  cartContainer.appendChild(buyBtn);
}
