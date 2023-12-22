const burgerBtn = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
const navItemsList = document.querySelector(".nav-bar__list");
const header = document.querySelector(".header");
const navlinks = document.querySelectorAll(".navlink");
const contactSection = document.getElementById("contact");
const actualYear = document.querySelector(".year");

const handleNav = () => {
	navbar.classList.toggle("show-nav");
	navItemsList.classList.toggle("show-list");
};

const closeNav = () => {
	navbar.classList.remove("show-nav");
	navItemsList.classList.remove("show-list");
};

const scrollToContact = () => {
	if (contactSection) {
		contactSection.scrollIntoView({ behavior: "smooth" });
	}
};

const setCurrentYear = () => {
	const currentYear = new Date().getFullYear();
	actualYear.textContent = currentYear;
};

navlinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});
burgerBtn.addEventListener("click", handleNav);
window.addEventListener("load", setCurrentYear);
