export default function NavDisplay() {
  let navbarHeight = 122;
  let currentPos = document.body.scrollTop || document.documentElement.scrollTop;
  let nav = document.getElementsByClassName('site-header')[0];
  let menu = document.getElementsByClassName('primary-nav__list')[0];

  // Determine which menu is being used based on page url
  // Then determine when to hide title
  if(window.location.href.indexOf('blog') <= 0 &&
      window.location.href.indexOf('faq') <=0) {
    let aboutPos = document.getElementById('about').offsetTop - navbarHeight;

    if(screen.width >= 800) {
      if (currentPos >= aboutPos) {
        nav.style.top = '-82px';
      } else {
        nav.style.top = '0';
      }
    }
  } else {
    if(screen.width >= 800) {
      if (currentPos >= 100) {
        nav.style.top = '-82px';
      } else {
        nav.style.top = '0';
      }
    }
  }
}
