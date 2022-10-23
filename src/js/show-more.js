const repairBrands = document.querySelector('.repair-brands');
const showMoreBrands = repairBrands.querySelector('.show-more-btn');
const brandsList = document.querySelector('.repair-brands__container'); 

showMoreBrands.addEventListener('click', function () {
    brandsList.classList.toggle('repair-brands--overflow--hidden');
    brandsList.classList.toggle('repair-brands--overflow--visible');

    showMoreBrands.classList.toggle('show-more--clicked');
    if (showMoreBrands.classList.contains('show-more--clicked')) {
        showMoreBrands.textContent = 'Скрыть';
    } else {
        showMoreBrands.textContent = 'Показать все';
    }
})