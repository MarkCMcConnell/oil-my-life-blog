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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _MobileMenu = __webpack_require__(1);

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _Carousel = __webpack_require__(2);

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();
var carousel = new _Carousel2.default();

/***/ }),
/* 1 */
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
    this.menuContent = document.getElementById('menu-content');
    this.listItem = document.getElementsByClassName('primary-nav__list-item');
    // Make toggleMenu available on load
    this.events();
  }

  _createClass(MobileMenu, [{
    key: 'events',
    value: function events() {
      this.menuIcon.onclick = this.toggleMenu.bind(this);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    this.leftArrow = document.querySelector('.fa-chevron-left');
    this.rightArrow = document.querySelector('.fa-chevron-right');
    this.slides = document.getElementsByClassName('carousel__card');
    this.container = document.querySelector('.carousel');
    this.total = this.slides.length - 1;
    this.current = 0;
    this.interval;

    this.events();
  }

  _createClass(Carousel, [{
    key: 'events',
    value: function events() {
      this.leftArrow.onclick = this.slideLeft.bind(this);
      this.leftArrow.onmouseenter = this.pause.bind(this);
      this.leftArrow.onmouseleave = this.play.bind(this);
      this.rightArrow.onclick = this.slideRight.bind(this);
      this.rightArrow.onmouseenter = this.pause.bind(this);
      this.rightArrow.onmouseleave = this.play.bind(this);
      this.container.onmouseenter = this.pause.bind(this);
      this.container.onmouseleave = this.play.bind(this);

      this.play();
    }
  }, {
    key: 'slideLeft',
    value: function slideLeft() {
      this.slides[this.current].classList.remove('carousel__card--visible');
      this.current === 0 ? this.current = this.total : this.current = this.current - 1;
      this.slides[this.current].classList.add('carousel__card--visible');
    }
  }, {
    key: 'slideRight',
    value: function slideRight() {
      this.slides[this.current].classList.remove('carousel__card--visible');
      this.current === this.total ? this.current = 0 : this.current = this.current + 1;
      this.slides[this.current].classList.add('carousel__card--visible');
    }
  }, {
    key: 'play',
    value: function play() {
      this.interval = setInterval(function () {
        var _this = this;

        this.slides[this.current].classList.remove('carousel__card--visible');
        this.current === this.total ? this.current = 0 : this.current = this.current + 1;
        setTimeout(function () {
          _this.slides[_this.current].classList.add('carousel__card--visible');
        }, 1000);
      }.bind(this), 6000);
    }
  }, {
    key: 'pause',
    value: function pause() {
      clearInterval(this.interval);
    }
  }]);

  return Carousel;
}();

exports.default = Carousel;

/***/ })
/******/ ]);