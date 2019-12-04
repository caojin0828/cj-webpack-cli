(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["head"],{

/***/ "./src/components/Head/Head.jsx":
/*!**************************************!*\
  !*** ./src/components/Head/Head.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n\n__webpack_require__(/*! ./head.scss */ \"./src/components/Head/head.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Head = function (_React$Component) {\n    _inherits(Head, _React$Component);\n\n    function Head() {\n        _classCallCheck(this, Head);\n\n        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));\n    }\n\n    _createClass(Head, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'head' },\n                'head module',\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/' },\n                    '\\u9996\\u9875'\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/list' },\n                    '\\u5217\\u8868'\n                )\n            );\n        }\n    }]);\n\n    return Head;\n}(_react2.default.Component);\n\nexports.default = Head;\n\n//# sourceURL=webpack:///./src/components/Head/Head.jsx?");

/***/ }),

/***/ "./src/components/Head/head.scss":
/*!***************************************!*\
  !*** ./src/components/Head/head.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Head/head.scss?");

/***/ })

},[["./src/components/Head/Head.jsx","manifest","vendors~head~main"]]]);
});