let incrementBtn = document.getElementsByClassName("plus");
let decrementBtn = document.getElementsByClassName("minus");
let counter = document.getElementsByClassName("counter");
let initialCount = 0;
let totalCount = 0;
let counterDot = document.getElementsByClassName("dot");

// For Increment Functionality

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let initialCount = parseInt(counter[i].textContent);
    initialCount++;
    totalCount++;
    counter[i].textContent = initialCount;
    counterDot[0].textContent = totalCount;
  });
}

// For Decrement Functionality

for (let i = 0; i < decrementBtn.length; i++) {
  decrementBtn[i].addEventListener("click", function () {
    let initialCount = parseInt(counter[i].textContent);
    if (initialCount > 0) {
      initialCount--;
      totalCount--;
      counter[i].textContent = initialCount;
      counterDot[0].textContent = totalCount;
    }
  });
}

// Opens  Pages

document.addEventListener("DOMContentLoaded", () => {
  const cartIcon = document.getElementById("cart-icon");

  // Navigate to  Pages

  if (cartIcon) {
    cartIcon.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".plus");

  plusButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const product = e.target.closest(
        ".image-1, .image-2, .image-3, .image-4, .image-5, .image-6, .image-7, .image-8, .image-9, .image-10, .image-11, .image-12"
      );

      const imgElement = product ? product.querySelector("img") : null;

      // Ensure image element is found
      if (imgElement) {
        const imageSrc = imgElement.src;
        const title = product.querySelector("h2")
          ? product.querySelector("h2").textContent
          : "No title";
        const price = product.querySelector(".price span:last-child")
          ? product.querySelector(".price span:last-child").textContent
          : "No price";

        // capturing values
        console.log("Image: ", imageSrc);
        console.log("Title: ", title);
        console.log("Price: ", price);

        // Get the existing cart items from localStorage or create an empty array
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Check if the item already exists in the cart
        const existingItem = cartItems.find(
          (item) => item.imageSrc === imageSrc
        );

        if (!existingItem) {
          // Push the current product to the cart array if it doesn't exist
          cartItems.push({ imageSrc, title, price });

          // Save updated cart to localStorage
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } else {
          console.log("Item already in cart");
        }
      }
    });
  });
});
