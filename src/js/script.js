const burgerBtn = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const navItemsList = document.querySelector(".nav-bar__list");
const header = document.querySelector(".header");
const navlinks = document.querySelectorAll(".navlink");

const handleNav = () => {
	navbar.classList.toggle("show-nav");
	navItemsList.classList.toggle("show-list");
};

const closeNav = () => {
	navbar.classList.remove("show-nav");
	navItemsList.classList.remove("show-list");
};

navlinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});
burgerBtn.addEventListener("click", handleNav);
