export default function NavDisplay() {
  let navbarHeight = 122;
  let currentPos = document.body.scrollTop || document.documentElement.scrollTop;
  let aboutPos = document.getElementById('about').offsetTop - navbarHeight;
  let nav = document.getElementsByClassName('site-header')[0];
  let menu = document.getElementsByClassName('primary-nav__list')[0];

  if (currentPos >= aboutPos) {
      nav.style.top = '-82px';
      menu.style.opacity = '.8';
  } else {
    nav.style.top = '0';
    menu.style.opacity = '1';
  }
}
