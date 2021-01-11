const selectElement = (element) => document.querySelector(element);
selectElement(".mobile__menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});
