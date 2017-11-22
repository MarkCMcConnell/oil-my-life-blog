import MobileMenu from './modules/MobileMenu';
import Carousel from './modules/Carousel';

var mobileMenu = new MobileMenu();
var carousel = new Carousel();

// Add in auto hiding and showing navbar on scroll
window.onscroll = function() {
  navDisplayAtTop();
}

function navDisplayAtTop() {
  let navbarHeight = 122;
  let currentPos = document.body.scrollTop || document.documentElement.scrollTop;
  let aboutPos = document.getElementById('about').offsetTop - navbarHeight;
  let nav = document.getElementsByClassName('site-header')[0];

  if (currentPos >= aboutPos) {
      nav.style.top = '-82px';
  } else {
    nav.style.top = '0';
  }
}
