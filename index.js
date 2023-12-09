const initialValue = 20;
const initialIsAnimated = true;
const initialIsHide = false;
const progress = new Progress('#parent', initialValue, initialIsAnimated, initialIsHide);
progress.render();

const inputPercent = document.querySelector('#progress__percent');
inputPercent.value = initialValue;
const inputAnimate = document.querySelector('#progress__animate');
inputAnimate.checked = initialIsAnimated;
const inputHide = document.querySelector('#progress__hide');
inputHide.checked = initialIsHide;

inputPercent.addEventListener('change', function () {
  progress.setValue(inputPercent.value);
})

inputAnimate.addEventListener('change', function (evt) {
  progress.setAnimated(evt.target.checked);
})

inputHide.addEventListener('change', function (evt) {
  progress.setHide(evt.target.checked);
})

const form = document.querySelector('.progress__form');
form.addEventListener('submit', (evt)=>evt.preventDefault())

