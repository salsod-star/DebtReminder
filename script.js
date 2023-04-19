const menu = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
