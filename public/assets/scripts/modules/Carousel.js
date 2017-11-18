class Carousel {
  constructor() {
    this.leftArrow = document.querySelector('.fa-chevron-left');
    this.rightArrow = document.querySelector('.fa-chevron-right');
    this.slides = document.getElementsByClassName('carousel__card');
    this.container = document.querySelector('.carousel');
    this.total = this.slides.length - 1;
    this.current = 0;
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

  slideLeft() {
    this.slides[this.current].classList.remove('carousel__card--visible');
    this.current === 0 ? this.current = this.total : this.current = this.current - 1;
    this.slides[this.current].classList.add('carousel__card--visible');
  }

  slideRight() {
    this.slides[this.current].classList.remove('carousel__card--visible');
    this.current === this.total ? this.current = 0 : this.current = this.current + 1;
    this.slides[this.current].classList.add('carousel__card--visible');
  }

  play() {
      this.interval = setInterval(function() {
      this.slides[this.current].classList.remove('carousel__card--visible');
      this.current === this.total ? this.current = 0 : this.current = this.current + 1;
      setTimeout(() => {this.slides[this.current].classList.add('carousel__card--visible')}, 1000);
    }.bind(this), 6000);
  }

  pause() {
    clearInterval(this.interval);
  }
}

export default Carousel;
