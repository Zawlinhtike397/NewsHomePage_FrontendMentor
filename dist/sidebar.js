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
  // document.querySelector("main").style.opacity = "0.7";
  // document.querySelector(".navigationBar").style.opacity = "0.3";
});

exitBtn.addEventListener("click", () => {
  navBar.classList.remove("mobile-menu");
  overlay.style.display = "none";
  // document.querySelector("main").style.opacity = "1";
  // document.querySelector(".navigationBar").style.opacity = "1";
});

// function MenuOverlay() {
//   const body_Overlay = document.querySelector(".all-Class");
//   if (navBar.classList.contains("mobile-menu")) {
//     // navBar.classList.add("mobileNavi");
//     const mOverlay = document.querySelector(".MobileNavi");
//     body_Overlay.style.opacity = "0.5";
//     body_Overlay.style.backgroundColor = "hsl(233, 8%, 79%)";
//     mOverlay.style.opacity = "1";
//     mOverlay.style.backgroundColor = "white";
//   } else {
//     body_Overlay.style.opacity = "1";
//     body_Overlay.style.backgroundColor = "hsl(36, 100%, 99%)";
//   }
//Still get the error,how can i only leave the mobilenav unaffected from reduce opacity??
// When i overlay the body, i can make all of the background black. When all-Class div overlay,
//  i get the desired effect on mobile navbar but not on underlying body?How can i mix these twos?
// should i use backdrop tailwind??
// }
