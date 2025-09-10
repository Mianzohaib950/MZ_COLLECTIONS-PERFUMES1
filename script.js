// Navbar toggle
// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Product Filter
function filterProducts(category) {
  let products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    if (category === "all" || product.classList.contains(category)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
// Filter Logic
function applyFilters() {
  let filtered = products.filter(p => {
    let priceMatch = true;
    let ownerMatch = true;

    // Price Filter
    if (priceFilter.value === "low") priceMatch = p.price < 4;
    if (priceFilter.value === "mid") priceMatch = p.price >= 5 && p.price <= 4;
    if (priceFilter.value === "high") priceMatch = p.price > 4;

    // Owner Filter
    if (ownerFilter.value !== "all") ownerMatch = p.owner === ownerFilter.value;

    return priceMatch && ownerMatch;
  });
  displayProducts(filtered);
}
