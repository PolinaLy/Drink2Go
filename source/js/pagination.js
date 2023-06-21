import { mediaQuery } from "./menu.js";
let paginationItem = document.querySelectorAll('.pagination__item');
let paginationBtn = document.querySelectorAll('.pagination__button');

let btnShow = () => {
  paginationBtn.forEach(btn => {
    btn.style.visibility = 'inherit';
  });
}

let btnClick = (id, value) => {
  btnShow();
  paginationItem.forEach(el => {
    if (el.classList.contains('pagination__item--current')) {
      if (el.id == 2) {
        el.classList.remove('pagination__item--current');
        paginationItem[Number(el.id) - value].classList.add('pagination__item--current');
        btnShow();
        paginationBtn[id].style.visibility = 'hidden';
      }
      el.classList.remove('pagination__item--current');
      paginationItem[Number(el.id) - value].classList.add('pagination__item--current');
    }}
  )
}

paginationItem.forEach(el => {
  el.addEventListener('click', () => {
    paginationItem.forEach(item => item.classList.remove('pagination__item--current'));
    el.classList.add('pagination__item--current');

  if (mediaQuery.matches) {
    if (el.id == 1) {
      btnShow();
      paginationBtn[0].style.visibility = 'hidden';
    } else if (el.id == 3) {
      btnShow();
      paginationBtn[1].style.visibility = 'hidden';
    }
    else {
      btnShow();
    }
  }
  })
})

paginationBtn[0].addEventListener('click', () => {
  btnClick(0, 2);
})

paginationBtn[1].addEventListener('click', () => {
  btnClick(1, 0);
  })
