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

var _Accordion = __webpack_require__(3);

var _Accordion2 = _interopRequireDefault(_Accordion);

var _NavDisplay = __webpack_require__(4);

var _NavDisplay2 = _interopRequireDefault(_NavDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileMenu = new _MobileMenu2.default();
var carousel = new _Carousel2.default();

// Add in auto hiding and showing navbar on scroll
window.onscroll = function () {
  (0, _NavDisplay2.default)();
};

window.onload = function () {
  (0, _Accordion2.default)();
};

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

    this.leftArrow = document.querySelector('.fa-chevron-circle-left');
    this.rightArrow = document.querySelector('.fa-chevron-circle-right');
    this.container = document.getElementsByClassName('carousel__container')[0];
    this.slides = document.getElementsByClassName('carousel__card');
    this.numberOfSlides = this.slides.length;
    this.width = this.slides[0].offsetWidth;
    this.current = 0;
    this.currentPos = [];
    this.transitionCompleted = true;
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

      this.setCurrentPos();
      this.play();
    }
  }, {
    key: 'setCurrentPos',
    value: function setCurrentPos() {
      for (var i = 0; i < this.numberOfSlides; i++) {
        this.currentPos[i] = -this.width;
      }
    }
  }, {
    key: 'animationComplete',
    value: function animationComplete() {
      this.transitionCompleted = true;
    }
  }, {
    key: 'changeSlides',
    value: function changeSlides() {
      // Force check to see if the translate is complete to prevent multiple translates at once
      if (this.transitionCompleted === true) {
        this.transitionCompleted = false;

        // Set current slide index
        this.current--;
        if (this.current == -1) {
          this.current = this.numberOfSlides - 1;
        }

        // Iterate through the slides and move them one position to the right
        for (var i = 0; i < this.numberOfSlides; i++) {
          this.slides[i].style.opacity = '1';
          this.slides[i].style.transform = 'translate(' + (this.currentPos[i] + this.width) + 'px)';

          // Set new position
          this.currentPos[i] = this.currentPos[i] + this.width;
        }

        // Get the index of the right most slide
        var lastIndex = this.current % this.numberOfSlides;

        // Move the last slide to the left of the current slide
        this.slides[lastIndex].style.opacity = '0';
        this.slides[lastIndex].style.transform = 'translate(' + (this.currentPos[lastIndex] - this.width * this.numberOfSlides) + 'px)';
        this.currentPos[lastIndex] = this.currentPos[lastIndex] - this.width * this.numberOfSlides;

        this.animationComplete();
      }
    }
  }, {
    key: 'slideLeft',
    value: function slideLeft() {
      if (this.transitionCompleted === true) {
        this.transitionCompleted = false;

        this.current++;

        // Iterate through the slides and move them one position left
        for (var i = 0; i < this.numberOfSlides; i++) {
          this.slides[i].style.opacity = '1';
          this.slides[i].style.transform = 'translate(' + (this.currentPos[i] - this.width) + 'px)';
          this.currentPos[i] = this.currentPos[i] - this.width;
        }

        // Set the index of the previous slide
        var lastIndex = (this.current - 1) % this.numberOfSlides;
        // Move the previous slide to the end of the row
        this.slides[lastIndex].style.opacity = '0';
        this.slides[lastIndex].style.transform = 'translate(' + (this.currentPos[lastIndex] + this.width * this.numberOfSlides) + 'px)';

        this.currentPos[lastIndex] = this.currentPos[lastIndex] + this.width * this.numberOfSlides;
        // Check to allow animations to complete
        this.animationComplete();
      }
    }
  }, {
    key: 'slideRight',
    value: function slideRight() {
      this.changeSlides();
    }
  }, {
    key: 'play',
    value: function play() {
      this.interval = setInterval(function () {
        this.changeSlides();
      }.bind(this), 3000);
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Accordion;
function Accordion() {
  var accordion = document.getElementsByClassName('mobile-starter-kit__name');
  var accordionExpand = document.getElementsByClassName('mobile-starter-kit__expand')[0];
  var accordionCollapse = document.getElementsByClassName('mobile-starter-kit__collapse')[0];

  for (var i = 0; i < accordion.length; i++) {
    accordion[i].onclick = function () {
      this.classList.toggle('mobile-starter-kit__name--active');

      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    };
  }

  if (accordionExpand) {
    accordionExpand.addEventListener('click', function () {
      for (var _i = 0; _i < accordion.length; _i++) {
        accordion[_i].classList.add('mobile-starter-kit__name--active');
        accordion[_i].nextElementSibling.style.maxHeight = accordion[_i].nextElementSibling.scrollHeight + 'px';
      }
    });
  }

  if (accordionCollapse) {
    accordionCollapse.addEventListener('click', function () {
      for (var _i2 = 0; _i2 < accordion.length; _i2++) {
        accordion[_i2].classList.remove('mobile-starter-kit__name--active');
        accordion[_i2].nextElementSibling.style.maxHeight = null;
      }
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavDisplay;
function NavDisplay() {
  var navbarHeight = 122;
  var currentPos = document.body.scrollTop || document.documentElement.scrollTop;
  var aboutPos = document.getElementById('about').offsetTop - navbarHeight;
  var nav = document.getElementsByClassName('site-header')[0];
  var menu = document.getElementsByClassName('primary-nav__list')[0];

  if (currentPos >= aboutPos) {
    nav.style.top = '-82px';
    menu.style.opacity = '.8';
  } else {
    nav.style.top = '0';
    menu.style.opacity = '1';
  }
}

/***/ })
/******/ ]);