export let cart = [];

export function addToCart(book) {
  const existing = cart.find(item => item.title === book.title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }
}

export function removeFromCart(title) {
  cart = cart.filter(item => item.title !== title);
}

export function updateQuantity(title, change) {
  const item = cart.find(book => book.title === title);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) removeFromCart(title);
}

export function getCartTotal() {
  return cart.reduce((total, book) => total + book.price * book.quantity, 0);
}
