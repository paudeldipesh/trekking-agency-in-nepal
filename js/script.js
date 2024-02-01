const hamburgerIcon = document.getElementById("bar-icon");
const mobileNavbar = document.getElementById("nav-items");

hamburgerIcon.addEventListener("click", () => {
  if (mobileNavbar.style.display !== "block") {
    mobileNavbar.style.display = "block";
  } else {
    mobileNavbar.style.display = "none";
  }
});

document.querySelector(".trekking").addEventListener("click", () => {
  document.querySelector(".sub-trekking").classList.toggle("hidden");
});

document.querySelector(".manaslu").addEventListener("click", () => {
  document.querySelector(".sub-manaslu").classList.toggle("hidden");
});

document.querySelector(".everest").addEventListener("click", () => {
  document.querySelector(".sub-everest").classList.toggle("hidden");
});

document.querySelector(".annapurna").addEventListener("click", () => {
  document.querySelector(".sub-annapurna").classList.toggle("hidden");
});

document.querySelector(".langtang").addEventListener("click", () => {
  document.querySelector(".sub-langtang").classList.toggle("hidden");
});

document.querySelector(".dolpa").addEventListener("click", () => {
  document.querySelector(".sub-dolpa").classList.toggle("hidden");
});

document.querySelector(".climbing").addEventListener("click", () => {
  document.querySelector(".sub-climbing").classList.toggle("hidden");
});

document.querySelector(".tour").addEventListener("click", () => {
  document.querySelector(".sub-tour").classList.toggle("hidden");
});

document.querySelector(".helicopter").addEventListener("click", () => {
  document.querySelector(".sub-helicopter").classList.toggle("hidden");
});
