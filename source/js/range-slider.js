import { mediaQuery } from "./menu.js";
const rangeSlider = document.querySelector('.catalog-price__slider');

if (rangeSlider) {
  if (mediaQuery.matches) {
    noUiSlider.create(rangeSlider, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [980]
      }
    })} else {
    noUiSlider.create(rangeSlider, {
      start: [0, 123],
      connect: true,
      step: 1,
      range: {
          'min': [0],
          'max': [130]
      }
  })}


  const inputMin = document.querySelector('.catalog-price__input--min');
  const inputMax = document.querySelector('.catalog-price__input--max');
  const inputs = [inputMin, inputMax];

  rangeSlider.noUiSlider.on('update', function(values, handle) {
    inputs[handle].value = Math.round(values[handle])
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    })
  })
}
