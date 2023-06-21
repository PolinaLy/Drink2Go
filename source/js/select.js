let selectHeader = document.querySelector('.select__header');
let select = document.querySelector('.select');
let selectIcon = document.querySelector('.select__icon');

let selectItem = document.querySelectorAll('.select__item');

selectHeader.addEventListener('click', function () {
  select.classList.toggle('select--is-active');
  if (select.classList.contains('select--is-active')) {
    selectIcon.style.transform = 'rotate(180deg)';
  } else {
    selectIcon.style.transform = 'rotate(0deg)';
  }
})

selectItem.forEach((el) => {
  el.addEventListener('click', () => {
    selectItem.forEach((item) => {
      item.classList.remove('select__item--current');
    })
    el.classList.add('select__item--current');
    let text = el.innerHTML,
    currentText = el.closest('.select').querySelector('.select__current');
    currentText.innerHTML = text;
    select.classList.remove('select--is-active');
    selectIcon.style.transform = 'rotate(0deg)';
  })
})
