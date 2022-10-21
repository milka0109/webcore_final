//Expand button

const swiperContainerMain = document.querySelector('.brands-main');
const expandButton = swiperContainerMain.querySelector('.expand-button');
const swiperContainerList = swiperContainerMain.querySelector('.brands-list');

expandButton.addEventListener('click', function () {
	expandButton.classList.toggle('button-open');
	swiperContainerList.classList.toggle('brands-list--opened');
	
	if (expandButton.classList.contains('button-open')) {
		expandButton.textContent = 'Скрыть';
	} else {
		expandButton.textContent = 'Показать все';
	}
});