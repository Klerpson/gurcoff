const menuIcon = document.querySelector(".hamburguer-menu");
const navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});
