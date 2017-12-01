/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MobileMenu = function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.primaryNav = document.getElementsByClassName('primary-nav')[0];
    this.menuIcon = document.getElementsByClassName('site-header__menu-icon')[0];
    this.closeIcon = document.getElementsByClassName('site-header__menu-icon--close-x')[0];
    this.menuContent = document.getElementById('menu-content');
    this.listItem = document.getElementsByClassName('primary-nav__list-item');
    this.dropdown = document.getElementsByClassName('dropdown__link');
    // Make toggleMenu available on load
    this.events();
  }

  _createClass(MobileMenu, [{
    key: 'events',
    value: function events() {
      this.menuIcon.onclick = this.toggleMenu.bind(this);
      this.listItem.onclick = this.toggleMenu.bind(this);
      this.dropdown.onclick = this.toggleMenu.bind(this);

      this.closeMenuBind();
    }
  }, {
    key: 'closeMenuBind',
    value: function closeMenuBind() {
      var _this = this;

      // Add listener to close menu when single links are clicked
      // Prevent closing menu when a dropdown menu is selected
      if (document.documentElement.clientWidth < 800 || window.innerWidth < 800) {
        for (var i = 0; i < this.listItem.length; i++) {
          if (!this.listItem[i].classList.contains('dropdown')) {
            this.listItem[i].addEventListener('click', function () {
              return _this.toggleMenu();
            });
          }
        }
      }
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.menuContent.classList.toggle('site-header__menu-content--is-visible');
      this.primaryNav.classList.toggle('primary-nav--is-expanded');
      this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
      for (var i = 0; i < this.listItem.length; i++) {
        this.listItem[i].classList.toggle('primary-nav__list-item--is-visible');
      }
    }
  }]);

  return MobileMenu;
}();

exports.default = MobileMenu;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavDisplay;
function NavDisplay() {
  var navbarHeight = 122;
  var currentPos = document.body.scrollTop || document.documentElement.scrollTop;
  var nav = document.getElementsByClassName('site-header')[0];
  var menu = document.getElementsByClassName('primary-nav__list')[0];

  // Determine which menu is being used based on page url
  // Then determine when to hide title
  if (window.location.href.indexOf('blog') <= 0 && window.location.href.indexOf('faq') <= 0) {
    var aboutPos = document.getElementById('about').offsetTop - navbarHeight;

    if (screen.width >= 800) {
      if (currentPos >= aboutPos) {
        nav.style.top = '-82px';
      } else {
        nav.style.top = '0';
      }
    }
  } else {
    if (screen.width >= 800) {
      if (currentPos >= 100) {
        nav.style.top = '-82px';
      } else {
        nav.style.top = '0';
      }
    }
  }
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(0);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _NavDisplay = __webpack_require__(1);

var _NavDisplay2 = _interopRequireDefault(_NavDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();

// Add in auto hiding and showing navbar on scroll
window.onscroll = function () {
  (0, _NavDisplay2.default)();
};

/***/ })
/******/ ]);