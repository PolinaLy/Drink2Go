import './menu.js';
import './swiper.js';
import './nouislider.js'
import './range-slider.js';
import './select.js';
import './pagination.js';
import './map.js'

document.querySelector('.slider-no-js').style.display = 'none';
document.querySelector('.map__map-no-js').classList.add('visually-hidden');
document.querySelector('.select').style.display = 'block';
document.querySelector('.products__select-no-js').classList.add('visually-hidden');
document.querySelector('.select__header').classList.remove('visually-hidden');
document.querySelectorAll('.swiper__button').forEach(btn => {btn.classList.remove('visually-hidden');})
