const menuBtn = document.querySelector(".mobile-menu-btn");
const navBar = document.querySelector("nav");
const exitBtn = document.querySelector(".mobile-exitIcon");

// menuBtn.addEventListener("click", () => {
//   navBar.classList.toggle("hidden");

// });

// exitBtn.addEventListener("click", () => {
//   navBar.classList.toggle("hidden");
// });

// Another way
menuBtn.addEventListener("click", () => {
  navBar.classList.add("mobile-menu");
  MenuOverlay();
  document.querySelector("main").style.opacity = "0.7";
  document.querySelector(".navigationBar").style.opacity = "0.3";
  //the thing i want is overlay (not opacity)
});

exitBtn.addEventListener("click", () => {
  navBar.classList.remove("mobile-menu");
  document.querySelector("main").style.opacity = "1";
  document.querySelector(".navigationBar").style.opacity = "1";
});

function MenuOverlay() {
  if (navBar.classList.contains("mobile-menu")) {
    const mOverlay = document.querySelector("body");
    mOverlay.style.opacity = "0.5";
    mOverlay.style.backgroundColor = "hsl(233, 8%, 79%)";
  }
  //Still get the error,how can i only leave the mobilenav unaffected from reduce opacity??
  // else {
  // }
}
