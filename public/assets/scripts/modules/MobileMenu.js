class MobileMenu {
  constructor() {
    this.primaryNav = document.getElementsByClassName('primary-nav')[0];
    this.menuIcon = document.getElementsByClassName('site-header__btn')[0];
    this.menuContent = document.getElementById('menu-content');
    // Make toggleMenu available on load
    this.events();
  }

  events() {
    this.menuIcon.onclick = this.toggleMenu.bind(this);
    console.log('boo');
  }

  toggleMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.primaryNav.classList.toggle('site-header--is-expanded');
    this.menuIcon.classList.toggle('site-header__btn--close-x');
  }
}

export default MobileMenu;
