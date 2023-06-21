let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let siteList = document.querySelector('.site-list');
const mediaQuery = window.matchMedia('(min-width: 768px)');

navMain.classList.remove('main-nav--nojs');
siteList.classList.add('site-list--hide');
document.querySelector('.site-list').classList.remove('site-list--no-js');
document.querySelector('.nav').classList.remove('header__nav--no-js');
document.querySelector('.nav-info').classList.remove('nav-info--no-js');

navToggle.addEventListener('click', () => {
  siteList.classList.toggle('site-list--hide');
})

if (mediaQuery.matches) {
  siteList.classList.remove('site-list--hide');
}

export {mediaQuery};
