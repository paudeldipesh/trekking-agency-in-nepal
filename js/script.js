document.getElementById("bar-icon").addEventListener("click", () => {
  document.getElementById("nav-items").classList.toggle("hidden");
});

document.querySelectorAll(".parent-element").forEach((element) => {
  element.addEventListener("click", (element) => {
    element.currentTarget.nextElementSibling.classList.toggle("hidden");
  });
});
