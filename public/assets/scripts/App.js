import MobileMenu from './modules/MobileMenu';
import Accordion from './modules/Accordion';
import NavDisplay from './modules/NavDisplay';
import Carousel from './modules/Carousel';

var mobileMenu = new MobileMenu();
// var carousel = new Carousel();

// window.onload = function() {
//   Accordion();
// }

// Add in auto hiding and showing navbar on scroll
window.onscroll = function() {
  NavDisplay();
}
