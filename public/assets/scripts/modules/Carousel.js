class Carousel {
  constructor() {
    this.leftArrow = document.querySelector('.fa-chevron-circle-left');
    this.rightArrow = document.querySelector('.fa-chevron-circle-right');
    this.container = document.getElementsByClassName('carousel__container')[0];
    this.slides = document.getElementsByClassName('carousel__card');
    this.current = 1;
    this.interval;

    this.events();
  }

  events() {
    this.leftArrow.onclick = this.slideLeft.bind(this);
    this.leftArrow.onmouseenter = this.pause.bind(this);
    this.leftArrow.onmouseleave = this.play.bind(this);
    this.rightArrow.onclick = this.slideRight.bind(this);
    this.rightArrow.onmouseenter = this.pause.bind(this);
    this.rightArrow.onmouseleave = this.play.bind(this);
    this.container.onmouseenter = this.pause.bind(this);
    this.container.onmouseleave = this.play.bind(this);

    this.play();
  }

  changeSlides() {
    this.slides[this.current].style.left = '-100%';
    this.slides[this.current].nextElementSibling.style.left = '0';
    this.container.appendChild(this.container.firstChild);
    this.container.lastElementChild.style.left = '100%';
  }

  slideLeft() {
    if(this.slides[this.current].style.left === '-100%') {
      this.slides[this.current].style.left = '0';
      this.slides[this.current].nextElementSibling.style.left = '100%';
    } else {
      this.container.insertBefore(this.container.lastChild, this.container.firstChild);
      this.container.firstElementChild.style.left = '-100%';
      this.container.firstElementChild.style.left = '0';
      this.container.firstElementChild.nextElementSibling.style.left = '100%';
    }
  }

  slideRight() {
    this.changeSlides();
  }

  play() {
    this.interval = setInterval(function() {
      this.changeSlides();
    }.bind(this), 3000);
  }

  pause() {
    clearInterval(this.interval);
  }
}

export default Carousel;
