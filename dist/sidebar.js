// const { white } = require("color-name");
const menuBtn = document.querySelector(".mobile-menu-btn");
const navBar = document.querySelector("nav");
const exitBtn = document.querySelector(".mobile-exitIcon");
const overlay = document.querySelector(".mobile-Overlay");
// menuBtn.addEventListener("click", () => {
//   navBar.classList.toggle("hidden");

// });

// exitBtn.addEventListener("click", () => {
//   navBar.classList.toggle("hidden");
// });

// Another way
menuBtn.addEventListener("click", () => {
  navBar.classList.add("mobile-menu");
  overlay.style.display = "block";
});

exitBtn.addEventListener("click", () => {
  navBar.classList.remove("mobile-menu");
  overlay.style.display = "none";
});
