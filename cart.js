document.addEventListener("DOMContentLoaded", () => {
  const showChosenItemsContainer = document.querySelector(".show-chosen-items");
  const totalBillElement = document.querySelector(".total-bill span");
  const clearCartButton = document.querySelector(".clear-cart");
  const backHomeButton = document.querySelector(".back-home");
  // const totalPriceElement = document.getElementById("totalPrice");
  const currText = document.querySelector(".cart-items");

  // Retrieve cart items from localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let totalPrice = 0;

  showChosenItemsContainer.innerHTML = "";

  // Render the chosen items inside the .show-chosen-items container

  function renderCartItems() {}

  cartItems.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    // Add product details to itemElement

    itemElement.innerHTML = ` <img src="${item.imageSrc}" alt="${item.title}" width="50px" />
      <div>
        <h3> ${item.title}</h3>
        <p class="item-price">${item.price}$</p>
      </div>`;

    // Append item to the container

    showChosenItemsContainer.appendChild(itemElement);

    // Add the item's price to the total price

    const itemPrice = parseFloat(item.price.replace("$", "").trim());
    totalPrice += itemPrice;

    // Display total price in the total-bill element

    totalBillElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  });

  if (cartItems.length === 0) {
    currText.innerHTML = "Nothing to show";
  } else {
    currText.innerHTML = "Currently on Cart";
  }

  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cartItems");
    showChosenItemsContainer.innerHTML = "";
    totalBillElement.textContent = "$0.00";
    currText.innerHTML = "Nothing to show";
  });

  // Navigate back to home page
  backHomeButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
