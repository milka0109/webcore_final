import Swiper, { Pagination } from 'swiper';

//Инициализация свайпера
let swiper;
let init = false;

function initSwiper() {
	if (window.innerWidth < 768) {
		if (!init) {
			init = true;
			swiper = new Swiper('.swiper', {
				modules: [Pagination],
				direction: 'horizontal',
				effect: 'slide',
				slidesPerView: 'auto',
				centeredSlides: true,
				centeredSlidesBounds: true,
				spaceBetween: 16,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
	} else if (init) {
		swiper.destroy();
		init = false;
	}
}

initSwiper();
window.addEventListener("resize", initSwiper);
