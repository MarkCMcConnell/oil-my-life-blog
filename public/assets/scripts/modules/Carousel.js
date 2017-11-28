class Carousel {
  constructor() {
    this.leftArrow = document.querySelector('.fa-chevron-circle-left');
    this.rightArrow = document.querySelector('.fa-chevron-circle-right');
    this.container = document.getElementsByClassName('carousel__container')[0];
    this.slides = document.getElementsByClassName('carousel__card');
    this.numberOfSlides = this.slides.length;
    this.width = this.slides[0].offsetWidth;
    this.current = 0;
    this.currentPos = [];
    this.transitionCompleted = true;
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

    this.setCurrentPos();
    this.play();
  }

  setCurrentPos() {
    for (let i = 0; i < this.numberOfSlides; i++) {
      this.currentPos[i] = -this.width;
    }
  }

  animationComplete() {
    this.transitionCompleted = true;
  }

  changeSlides() {
    // Force check to see if the translate is complete to prevent multiple translates at once
    if(this.transitionCompleted === true) {
      this.transitionCompleted = false;

      // Set current slide index
      this.current--;
      if (this.current == -1) {
        this.current = this.numberOfSlides - 1;
      }

      // Iterate through the slides and move them one position to the right
      for(let i = 0; i < this.numberOfSlides; i++) {
        this.slides[i].style.opacity = '1';
        this.slides[i].style.transform = 'translate(' + (this.currentPos[i] + this.width) + 'px)';

        // Set new position
        this.currentPos[i] = this.currentPos[i] + this.width;
      }

      // Get the index of the right most slide
      let lastIndex = this.current % this.numberOfSlides;

      // Move the last slide to the left of the current slide
      this.slides[lastIndex].style.opacity = '0';
      this.slides[lastIndex].style.transform = 'translate(' + (this.currentPos[lastIndex] - this.width * this.numberOfSlides) + 'px)';
      this.currentPos[lastIndex] = this.currentPos[lastIndex] - (this.width * this.numberOfSlides);

      this.animationComplete();
    }
  }

  slideLeft() {
    if(this.transitionCompleted === true) {
      this.transitionCompleted = false;

      this.current++;

      // Iterate through the slides and move them one position left
      for(let i = 0; i < this.numberOfSlides; i++) {
        this.slides[i].style.opacity = '1';
        this.slides[i].style.transform = 'translate(' + (this.currentPos[i] - this.width) + 'px)';
        this.currentPos[i] = this.currentPos[i] - this.width;
      }

      // Set the index of the previous slide
      let lastIndex = (this.current - 1) % this.numberOfSlides;
      // Move the previous slide to the end of the row
      this.slides[lastIndex].style.opacity = '0';
      this.slides[lastIndex].style.transform = 'translate(' + (this.currentPos[lastIndex] + (this.width * this.numberOfSlides)) + 'px)';

      this.currentPos[lastIndex] = this.currentPos[lastIndex] + (this.width * this.numberOfSlides);
      // Check to allow animations to complete
      this.animationComplete();
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
