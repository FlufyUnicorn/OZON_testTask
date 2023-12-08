const circle = document.querySelector('.progress-ring__circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;
const inputPercent = document.querySelector('.progress__percent')

inputPercent.addEventListener('change',function () {
  setProgress(inputPercent.value);
})
function setProgress(percent) {
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = `${offset}`;
}

const checkboxAnimate = document.querySelector('#progress__animate')
const progressRing = document.querySelector('.progress-ring')
function checkAnimate() {
  if (checkboxAnimate.checked) {
    progressRing.style.animation = '2s linear 0s normal none infinite running rotation';
  }
  else {
    progressRing.style.animation=''
  }
}

const checkboxHide = document.querySelector('#progress__hide')
function checkHide() {
  if (checkboxHide.checked) {
    progressRing.style.visibility = 'hidden'
  }
  else {
    progressRing.style.visibility='visible'
  }
}
