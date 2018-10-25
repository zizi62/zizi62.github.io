"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

+function () {
  var Slider =
  /*#__PURE__*/
  function () {
    function Slider(classNameImg, imgBox, sliderBtn) {
      _classCallCheck(this, Slider);

      this.classNameImg = document.querySelectorAll(classNameImg), this.sliderBtn = document.querySelectorAll(sliderBtn), this.imgBox = document.querySelector(imgBox), this.index = 0, this.quantityImg = null, this.marginImg = null;
    }

    _createClass(Slider, [{
      key: "classQuantityImg",
      value: function classQuantityImg(quantityImg) {
        this.quantityImg = quantityImg;
      }
    }, {
      key: "classMarginImg",
      value: function classMarginImg(marginImg) {
        this.marginImg = marginImg;
      }
    }, {
      key: "leghtImgBox",
      value: function leghtImgBox(temp, marginImg, classNameImg) {
        var a = classNameImg.length;
        var line;
        return line = (temp.offsetWidth + marginImg * 2) * a;
      }
    }, {
      key: "makeIndex",
      value: function makeIndex(temp, marginImg) {
        var index = temp.offsetWidth + marginImg * 2;
        return index;
      }
    }, {
      key: "btn",
      value: function btn(e, index, slipImg) {
        if (e.dataset.target === "prev") {
          slipImg += index;
        } else if (e.dataset.target === "next") {
          slipImg -= index;
        }

        return slipImg;
      }
    }, {
      key: "start",
      value: function start() {
        var imgBox = this.imgBox;
        var btn = this.btn;
        var slipImg = 0;
        var index = this.index;
        var classNameImg = this.classNameImg;
        var makeIndex = this.makeIndex;
        var marginImg = this.marginImg;
        var sliderBtn = this.sliderBtn;
        var temp = classNameImg[0];
        var quantityImg = this.quantityImg;
        var leghtImgBox = this.leghtImgBox;

        function move() {
          var x = 0;
          var a = leghtImgBox(temp, marginImg, classNameImg);

          if (this.dataset.target === "next" && slipImg === -a + index * quantityImg || this.dataset.target === "prev" && slipImg === 0) {
            return;
          } else {
            index = makeIndex(temp, marginImg);
            x = btn(this, index, slipImg);
            slipImg = x;
            imgBox.style.marginLeft = x + 'px';
          }
        }

        for (var i = 0; i < this.sliderBtn.length; i++) {
          this.sliderBtn[i].addEventListener('click', move);
        }
      }
    }]);

    return Slider;
  }();

  var DobleDotsSlider =
  /*#__PURE__*/
  function (_Slider) {
    _inherits(DobleDotsSlider, _Slider);

    function DobleDotsSlider(classNameImg, imgBox, sliderBtn, sliderDots) {
      var _this;

      _classCallCheck(this, DobleDotsSlider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DobleDotsSlider).call(this, classNameImg, imgBox, sliderBtn)), _this.sliderDots = document.querySelectorAll(sliderDots), _this.activeClass = null;
      return _this;
    }

    _createClass(DobleDotsSlider, [{
      key: "addActiveClassDots",
      value: function addActiveClassDots(activeClass) {
        this.activeClass = activeClass;
      }
    }, {
      key: "dots",
      value: function dots(e) {
        var num = e.dataset.target;
        return num;
      }
    }, {
      key: "start",
      value: function start() {
        var imgBox = this.imgBox;
        var btn = this.btn;
        var slipImg = 0;
        var index = this.index;
        var classNameImg = this.classNameImg;
        var makeIndex = this.makeIndex;
        var marginImg = this.marginImg;
        var sliderBtn = this.sliderBtn;
        var temp = classNameImg[0];
        var quantityImg = this.quantityImg;
        var leghtImgBox = this.leghtImgBox;
        var sliderDots = this.sliderDots;
        var activeClass = this.activeClass;
        var dots = this.dots;
        var x = 0;
        index = makeIndex(temp, marginImg);

        function move() {
          for (var i = 0; i < sliderDots.length; i++) {
            sliderDots[i].classList.remove(activeClass);
          }

          var a = leghtImgBox(temp, marginImg, classNameImg);

          if (this.dataset.target === "next" && slipImg === -a + index * quantityImg || this.dataset.target === "prev" && slipImg === 0) {
            return;
          } else {
            x = btn(this, index, slipImg);
            slipImg = x;
            imgBox.style.marginLeft = x + 'px';
          }

          return slipImg;
        }

        function moveDots() {
          var num = dots(this);
          x = btn(this, index, slipImg);
          x = -(index * num);
          imgBox.style.marginLeft = x + 'px';

          for (var i = 0; i < sliderDots.length; i++) {
            sliderDots[i].classList.remove(activeClass);
          }

          sliderDots[num].classList.add(activeClass);
          return x;
        }

        for (var i = 0; i < this.sliderBtn.length; i++) {
          this.sliderBtn[i].addEventListener('click', move);
        }

        for (var _i = 0; _i < this.sliderDots.length; _i++) {
          this.sliderDots[_i].addEventListener('click', moveDots);
        }
      }
    }]);

    return DobleDotsSlider;
  }(Slider);

  var levelSlider = new DobleDotsSlider('.slider__img', '.slider__box', '.btn', '.slider__button-dots');
  levelSlider.classQuantityImg(1);
  levelSlider.classMarginImg(0);
  levelSlider.addActiveClassDots('slider__button-dots_active');
  levelSlider.start();
}();