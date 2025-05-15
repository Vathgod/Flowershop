function addToCart(productName) {
  const cartLog = document.getElementById("cart-log");
  const li = document.createElement("li");
  li.textContent = `🛒 ${productName}`;
  cartLog.appendChild(li);
}

function buyNow(productName) {
  const buyLog = document.getElementById("buy-log");
  const li = document.createElement("li");
  li.textContent = `💰 ${productName}`;
  buyLog.appendChild(li);
}
