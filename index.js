const progress = new Progress('#parent', 20, true, false);
progress.render();

const inputPercent = document.querySelector('#progress__percent');
inputPercent.value = progress._value;
const inputAnimate = document.querySelector('#progress__animate');
inputAnimate.checked = progress._isAnimated;
const inputHide = document.querySelector('#progress__hide');
inputHide.checked = progress._isHidden;

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

