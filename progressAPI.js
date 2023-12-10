class Progress {
  constructor(parentNode, value, isAnimated, isHidden) {
    this._parentNode = parentNode;
    this._value = value;
    this._isAnimated = isAnimated;
    this._isHidden = isHidden;
  }

  getTemplate() {
    this._element = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    this._element.setAttribute('class', 'progress-ring');
    const progressRing = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    progressRing.setAttribute('class', 'progress-ring__circle');
    progressRing.setAttribute('cx', '55');
    progressRing.setAttribute('cy', '55');
    progressRing.setAttribute('r', '49');
    const progressRingShadow = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    progressRingShadow.setAttribute('class', 'progress-ring__circle_shadow');
    progressRingShadow.setAttribute('cx', '55');
    progressRingShadow.setAttribute('cy', '55');
    progressRingShadow.setAttribute('r', '49');
    this._element.append(progressRingShadow);
    this._element.append(progressRing);
    return this._element;
  }

  generateValue() {
    let progressRingCircle = this._element.querySelector('.progress-ring__circle');
    const radius = progressRingCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRingCircle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - this._value / 100 * circumference;
    progressRingCircle.style.strokeDashoffset = `${offset}`;
  }

  generateAnimate() {
    let progressRingCircle = this._element.querySelector('.progress-ring__circle');
    if (this._isAnimated) {
      progressRingCircle.style.animation = '2s linear 0s normal none infinite running rotation';
    } else {
      progressRingCircle.style.animation = '';
    }
  }

  generateHidden() {
    if (this._isHidden) {
      this._element.style.visibility = 'hidden';
    } else {
      this._element.style.visibility = 'visible';
    }
  }

  setValue(value) {
    if (value > 100) value = 100
    if (value < 0) value = 0
    this._value = value;
    this.generateValue();
  }

  setAnimated(isAnimated) {
    this._isAnimated = isAnimated;
    this.generateAnimate();
  }

  setHide(isHidden) {
    this._isHidden = isHidden;
    this.generateHidden();
  }

  render() {
    let progressElement = this.getTemplate();
    this.generateValue();
    this.generateValue();
    this.generateAnimate();
    document.querySelector(`${this._parentNode}`).append(this._element);
  }

  unmount() {
    this._element.remove();
  }
}