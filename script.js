//toggle untuk hamburger menu
const navbar = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

// toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-buttons").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//out element

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-buttons");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !searchForm.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// toggle clas active untuk class form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// MODAL BOX
const itemDetailModel = document.querySelector("#item-detail-model");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModel.style.display = "flex";
    e.preventDefault();
  };
});

itemDetailButton.onclick = (e) => {
  itemDetailModel.style.display = "flex";
  e.preventDefault();
};

// tombol close

document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModel.style.display = "none";
  e.preventDefault();
};

// diluar modal

window.onclick = (e) => {
  if (e.target === itemDetailModel) {
    itemDetailModel.style.display = "none";
  }
};
