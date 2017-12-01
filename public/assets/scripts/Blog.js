import MobileMenu from './modules/MobileMenu';
import NavDisplay from './modules/NavDisplay';

var mobileMenu = new MobileMenu();

// Add in auto hiding and showing navbar on scroll
window.onscroll = function() {
  NavDisplay();
}
