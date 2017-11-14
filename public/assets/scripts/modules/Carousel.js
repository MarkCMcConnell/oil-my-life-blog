class Carousel {
  constructor(slide) {
    this.slide = slide;
    this.leftArrow = document.querySelector('fa-chevron-left');
    this.rightArrow = document.querySelector('fa-chevron-right');
  }

  events() {
    this.leftArrow.onclick = this.slideLeft.bind(this);
    this.rightArrow.onclick = this.slideRight.bind(this);
  }

  slideLeft() {

  }

  slideRight() {

  }

  autoPlay () {

  }

}
