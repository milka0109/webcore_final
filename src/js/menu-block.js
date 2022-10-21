const menuBlock = document.querySelector('.menu-block');
const burgerButton = document.querySelector('.burger-button');
const closeButton = document.querySelector('.close-button');

burgerButton.addEventListener('click', function () {
	menuBlock.classList.remove('menu-block--hidden');
	menuBlock.classList.add('menu-block--visible');
});

closeButton.addEventListener('click', function () {
	menuBlock.classList.remove('menu-block--visible');
	menuBlock.classList.add('menu-block--hidden');
});