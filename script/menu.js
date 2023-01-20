const hamburger = document.querySelector(".nav__menu");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu--visible");
})