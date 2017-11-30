import MobileMenu from './modules/MobileMenu';
import Accordion from './modules/Accordion';
import NavDisplay from './modules/NavDisplay';
import Carousel from './modules/Carousel';

const urlTest = 'blog';

var mobileMenu = new MobileMenu();

// Determine if current page is within the blog site
// If it is not, run the below functions
if(window.location.href.indexOf(urlTest) <= 0) {
  var carousel = new Carousel();

  window.onload = function() {
    Accordion();
  }
}

// Add in auto hiding and showing navbar on scroll
window.onscroll = function() {
  NavDisplay();
}
