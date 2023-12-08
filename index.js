class Progress {
  constructor(parentNode, value, isAnimated, isHidden) {
    this._parentNode = parentNode;
    this._value = value;
    this._isAnimated = isAnimated;
    this._isHidden = isHidden;
  }

  getTemplate() {
    this._element = document.querySelector('.progress-template').content.querySelector('.progress-ring').cloneNode(true);
  }

  generateProgress() {
    let progressRingCircle = this._element.querySelector('.progress-ring__circle');
    if (this._isAnimated) {
      progressRingCircle.style.animation = '2s linear 0s normal none infinite running rotation';
    } else {
      progressRingCircle.style.animation = '';
    }
    if (this._isHidden) {
      this._element.style.visibility = 'hidden';
    } else {
      this._element.style.visibility = 'visible';
    }
    const radius = progressRingCircle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRingCircle.style.strokeDashoffset = `${circumference}`;
    const offset = circumference - this._value / 100 * circumference;
    progressRingCircle.style.strokeDashoffset = `${offset}`;
    return this._element;
  }

  setValue(value) {
    this._value = value;
    this.generateProgress();
  }

  onToggleAnimated() {
    this._isAnimated = !this._isAnimated;
    this.generateProgress();
  }

  onToggleHide() {
    this._isHidden = !this._isHidden;
    this.generateProgress();
  }

  render() {
    this.getTemplate()
    let progressElement = this.generateProgress();
    document.querySelector(`${this._parentNode}`).append(progressElement);
  }
}

const secondProgress = new Progress('#root', 20, true, false);
secondProgress.render();
