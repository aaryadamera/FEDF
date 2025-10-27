const paymentMethod = document.getElementById('payment-method');
const paymentDetails = document.getElementById('payment-details');
const form = document.getElementById('purchase-form');

paymentMethod.addEventListener('change', () => {
  const method = paymentMethod.value;
  paymentDetails.innerHTML = '';

  if (method === 'gpay' || method === 'phonepay') {
    const qr = document.createElement('img');
    qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PayHere';
    qr.alt = 'Scan QR to pay';
    paymentDetails.appendChild(qr);
  } else if (method === 'credit' || method === 'debit') {
    const cardInput = document.createElement('input');
    cardInput.type = 'text';
    cardInput.name = 'card';
    cardInput.placeholder = 'Card Number';
    cardInput.required = true;
    paymentDetails.appendChild(cardInput);

    const cvvInput = document.createElement('input');
    cvvInput.type = 'text';
    cvvInput.name = 'cvv';
    cvvInput.placeholder = 'CVV';
    cvvInput.required = true;
    paymentDetails.appendChild(cvvInput);
  } else if (method === 'netbanking') {
    const bankInput = document.createElement('input');
    bankInput.type = 'text';
    bankInput.name = 'bank';
    bankInput.placeholder = 'Bank Name';
    bankInput.required = true;
    paymentDetails.appendChild(bankInput);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Order placed successfully!');
  window.location.href = 'index.html';
});
