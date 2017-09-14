class MobileMenu {
  constructor() {
    this.primaryNav = document.getElementsByClassName('primary-nav')[0];
    this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
    this.menuContent = document.getElementById('menu-content');
    this.listItem = document.getElementsByClassName('primary-nav__list-item');
    // Make toggleMenu available on load
    this.events();
  }

  events() {
    this.menuIcon.onclick = this.toggleMenu.bind(this);
    console.log('boo');
  }

  toggleMenu() {
    this.menuContent.classList.toggle('site-header__menu-content--is-visible');
    this.primaryNav.classList.toggle('primary-nav--is-expanded');
    this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    for (var i = 0; i < this.listItem.length; i++) {
      this.listItem[i].classList.toggle('primary-nav__list-item--is-visible');
    }
  }
}

export default MobileMenu;
