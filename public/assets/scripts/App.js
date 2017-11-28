import MobileMenu from './modules/MobileMenu';
import Carousel from './modules/Carousel';
import Accordion from './modules/Accordion';
import NavDisplay from './modules/NavDisplay';

var mobileMenu = new MobileMenu();
var carousel = new Carousel();

// Add in auto hiding and showing navbar on scroll
window.onscroll = function() {
  NavDisplay();
}

window.onload = function() {
  Accordion();
}
