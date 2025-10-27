import { books } from './data.js';
import { addToCart, cart } from './cart.js';
import { renderCart } from './ui.js';

export function displayBooks() {
  const bookContainer = document.getElementById('books');
  bookContainer.innerHTML = '';

  books.forEach((book, index) => {
    const cartItem = cart.find(item => item.title === book.title);
    const quantity = cartItem ? cartItem.quantity : 0;

    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Price:</strong> ₹${book.price}</p>
      <p><strong>Status:</strong> ${book.availability}</p>
      <div class="cart-controls">
        <button ${book.availability === 'out of stock' ? 'disabled' : ''} data-index="${index}">Add to Cart</button>
        <span class="quantity">${quantity > 0 ? quantity : ''}</span>
      </div>
    `;
    bookContainer.appendChild(bookDiv);
  });

  document.querySelectorAll('.book button').forEach(button => {
    button.addEventListener('click', e => {
      const bookIndex = e.target.dataset.index;
      addToCart(books[bookIndex]);
      renderCart();
      displayBooks();
    });
  });
}
