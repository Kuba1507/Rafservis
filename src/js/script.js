const burgerBtn = document.querySelector('.hamburger')
const navbar = document.querySelector('.nav-bar')
const navItemsList = document.querySelector('.nav-bar__list')

const handleNav = () => {
	navbar.classList.toggle('show-nav')
	navItemsList.classList.toggle('show-list')
}

burgerBtn.addEventListener('click', handleNav)
