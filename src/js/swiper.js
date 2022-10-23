// 1 СВАЙПЕР

import Swiper, { Pagination } from 'swiper';

const repairBrands = document.querySelector('.repair-brands__container');
let initBrands = false;
let sliderBrands;

function createSliderBrands () {
    if (window.innerWidth < 768) {
        if (!initBrands) {
            initBrands = true;
            sliderBrands = new Swiper(repairBrands, {
                modules: [ Pagination ],
                effect: 'slide',
                slidesPerView: 'auto',
                centeredSlides: true,
				centeredSlidesBounds: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    } else if (initBrands) {
        sliderBrands.destroy();
        initBrands = false;
    }
}

createSliderBrands();
window.addEventListener('resize', createSliderBrands);

// 2 СВАЙПЕР

const repairTechs = document.querySelector('.repair-techs__body');
let initTechs = false;
let sliderTechs;

function createSliderTechs () {
    if (window.innerWidth < 768) {
        if (!initTechs) {
            initTechs = true;
            sliderTechs = new Swiper(repairTechs, {
                modules: [ Pagination ],
                effect: 'slide',
                slidesPerView: 'auto',
                centeredSlides: true,
				centeredSlidesBounds: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    } else if (initTechs) {
        sliderTechs.destroy();
        initTechs = false;
    }
}

createSliderTechs();
window.addEventListener('resize', createSliderTechs);

// 3 СВАЙПЕР

const repairPrices = document.querySelector('.price__body');
let initPrices = false;
let sliderPrices;

function createSliderPrices () {
    if (window.innerWidth < 768) {
        if (!initPrices) {
            initPrices = true;
            sliderPrices = new Swiper(repairPrices, {
                modules: [ Pagination ],
                effect: 'slide',
                slidesPerView: 'auto',
                centeredSlides: true,
				centeredSlidesBounds: true,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    } else if (initPrices) {
        sliderPrices.destroy();
        initPrices = false;
    }
}

createSliderPrices();
window.addEventListener('resize', createSliderPrices);
