document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.getElementById('total-price');

  items.forEach(item => {
    const increaseBtn = item.querySelector('.increase');
    const decreaseBtn = item.querySelector('.decrease');
    const deleteBtn = item.querySelector('.delete');
    const likeBtn = item.querySelector('.like');
    const quantityEl = item.querySelector('.quantity');
    const priceEl = item.querySelector('.item-price');

    increaseBtn.addEventListener('click', () => {
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });

    decreaseBtn.addEventListener('click', () => {
      if (parseInt(quantityEl.textContent) > 1) {
        quantityEl.textContent = parseInt(quantityEl.textContent) - 1;
        updateTotal();
      }u
    });

    deleteBtn.addEventListener('click', () => {
      item.remove();
      updateTotal();
    });

    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('liked');
    });
  });

  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').textContent);
      const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
      total += quantity * price;
    });
    totalPriceEl.textContent = total.toFixed(2);
  }
});
