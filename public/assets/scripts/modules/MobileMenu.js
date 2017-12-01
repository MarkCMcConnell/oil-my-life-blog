class MobileMenu {
  constructor() {
    this.primaryNav = document.getElementsByClassName('primary-nav')[0];
    this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
    this.closeIcon = document.getElementsByClassName('site-header__menu-icon--close-x')[0];
    this.menuContent = document.getElementById('menu-content');
    this.listItem = document.getElementsByClassName('primary-nav__list-item');
    this.dropdown = document.getElementsByClassName('dropdown__link');
    // Make toggleMenu available on load
    this.events();
  }

  events() {
    this.menuIcon.onclick = this.toggleMenu.bind(this);
    this.listItem.onclick = this.toggleMenu.bind(this);
    this.dropdown.onclick = this.toggleMenu.bind(this);

    this.closeMenuBind();
  }

  closeMenuBind() {
    // Add listener to close menu when single links are clicked
    // Prevent closing menu when a dropdown menu is selected
    if(document.documentElement.clientWidth < 800 || window.innerWidth < 800){
      for(let i = 0; i < this.listItem.length; i++) {
        if(!this.listItem[i].classList.contains('dropdown')) {
          this.listItem[i].addEventListener('click', () => this.toggleMenu());
        }
      }
    }
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
