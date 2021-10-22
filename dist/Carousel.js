"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _CarouselModule = _interopRequireDefault(require("./Carousel.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Carousel = _ref => {
  let {
    images,
    delay,
    buttons,
    width,
    height
  } = _ref;
  const [newDelay, setNewDelay] = (0, _react.useState)(delay ? delay : 2000);
  const [count, setCount] = (0, _react.useState)(0);
  const translateRef = (0, _react.useRef)();
  const [timing, setTiming] = (0, _react.useState)('');
  const newButtons = buttons ? buttons : true;
  const newWidth = width ? width : 500;
  const newHeight = height ? height : 230;

  const handleClick = val => {
    setTiming(clearTimeout(timing));
    let newCount = count;

    if (val === 'forward') {
      newCount++;
      setCount(newCount);
    } else if (val === 'backward') {
      newCount--;
      setCount(newCount);
    }

    if (newCount === images.length) {
      setCount(0);
      translateRef.current.style.transform = 'translate(0)';
      return;
    }

    if (newCount === -1) {
      setCount(images.length - 1);
      translateRef.current.style.transform = "translate(-".concat((images.length - 1) * (100 / images.length), "%)");
      return;
    }

    translateRef.current.style.transform = "translate(-".concat(newCount * (100 / images.length), "%)");
  };

  const setTimer = () => {
    setTiming(clearTimeout(timing));
    setTiming(setTimeout(() => {
      setCount(count + 1);
      handleClick('forward');
    }, newDelay));
  };

  (0, _react.useEffect)(setTimer, [count]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _CarouselModule.default.main,
    style: {
      width: "".concat(newWidth, "px"),
      height: "".concat(newHeight, "px")
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _CarouselModule.default.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: translateRef,
    style: {
      display: 'flex',
      width: 'fit-content',
      height: '100%',
      transition: '.3s'
    }
  }, images === null || images === void 0 ? void 0 : images.map(image => /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: "".concat(newWidth, "px"),
      height: "".concat(newHeight, "px")
    },
    src: image,
    alt: ""
  }))), newButtons && /*#__PURE__*/_react.default.createElement("div", {
    className: _CarouselModule.default.buttons
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: _CarouselModule.default.leftBtn,
    onClick: () => handleClick('backward')
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-chevron-circle-left"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: _CarouselModule.default.rightBtn,
    onClick: () => handleClick('forward')
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: "fas fa-chevron-circle-right"
  })))));
};

var _default = Carousel;
exports.default = _default;