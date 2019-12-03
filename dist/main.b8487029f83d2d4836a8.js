(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/components/Body/Body.jsx":
/*!**************************************!*\
  !*** ./src/components/Body/Body.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./body.scss */ \"./src/components/Body/body.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Body = function (_React$Component) {\n    _inherits(Body, _React$Component);\n\n    function Body() {\n        _classCallCheck(this, Body);\n\n        return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));\n    }\n\n    _createClass(Body, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'body' },\n                'Body module'\n            );\n        }\n    }]);\n\n    return Body;\n}(_react2.default.Component);\n\nexports.default = Body;\n\n//# sourceURL=webpack:///./src/components/Body/Body.jsx?");

/***/ }),

/***/ "./src/components/Body/body.scss":
/*!***************************************!*\
  !*** ./src/components/Body/body.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Body/body.scss?");

/***/ }),

/***/ "./src/components/Head/Head.jsx":
/*!**************************************!*\
  !*** ./src/components/Head/Head.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n\n__webpack_require__(/*! ./head.scss */ \"./src/components/Head/head.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Head = function (_React$Component) {\n    _inherits(Head, _React$Component);\n\n    function Head() {\n        _classCallCheck(this, Head);\n\n        return _possibleConstructorReturn(this, (Head.__proto__ || Object.getPrototypeOf(Head)).apply(this, arguments));\n    }\n\n    _createClass(Head, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'head' },\n                'head module',\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/' },\n                    '\\u9996\\u9875'\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/list' },\n                    '\\u5217\\u8868'\n                )\n            );\n        }\n    }]);\n\n    return Head;\n}(_react2.default.Component);\n\nexports.default = Head;\n\n//# sourceURL=webpack:///./src/components/Head/Head.jsx?");

/***/ }),

/***/ "./src/components/Head/head.scss":
/*!***************************************!*\
  !*** ./src/components/Head/head.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/Head/head.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/_react-dom@16.12.0@react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _router = __webpack_require__(/*! ./router */ \"./src/router/index.jsx\");\n\nvar _router2 = _interopRequireDefault(_router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_router2.default, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/page lazy recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./src/page lazy ^\.\/.*$ namespace object ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": [\n\t\t\"./src/page/index.jsx\"\n\t],\n\t\"./index\": [\n\t\t\"./src/page/index.jsx\"\n\t],\n\t\"./index.jsx\": [\n\t\t\"./src/page/index.jsx\"\n\t],\n\t\"./list\": [\n\t\t\"./src/page/list.jsx\",\n\t\t0\n\t],\n\t\"./list.jsx\": [\n\t\t\"./src/page/list.jsx\",\n\t\t0\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {\n\t\treturn __webpack_require__.t(id, 7);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./src/page lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./src/page_lazy_^\\.\\/.*$_namespace_object?");

/***/ }),

/***/ "./src/page/index.jsx":
/*!****************************!*\
  !*** ./src/page/index.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Head = __webpack_require__(/*! ../components/Head/Head */ \"./src/components/Head/Head.jsx\");\n\nvar _Head2 = _interopRequireDefault(_Head);\n\nvar _Body = __webpack_require__(/*! ../components/Body/Body */ \"./src/components/Body/Body.jsx\");\n\nvar _Body2 = _interopRequireDefault(_Body);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_React$Component) {\n    _inherits(Index, _React$Component);\n\n    function Index() {\n        _classCallCheck(this, Index);\n\n        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));\n    }\n\n    _createClass(Index, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'index' },\n                'index page',\n                _react2.default.createElement(_Head2.default, null),\n                _react2.default.createElement(_Body2.default, null)\n            );\n        }\n    }]);\n\n    return Index;\n}(_react2.default.Component);\n\nexports.default = Index;\n\n//# sourceURL=webpack:///./src/page/index.jsx?");

/***/ }),

/***/ "./src/router/index.jsx":
/*!******************************!*\
  !*** ./src/router/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/_react@16.12.0@react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n\nvar _path = __webpack_require__(/*! ./path */ \"./src/router/path.js\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(/*! ./../page/index */ \"./src/page/index.jsx\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// {\n//     routers.map((item,index) => (\n//         item.exact ? \n//         <Route key={index} exact path={item.path} render={item.component}/>\n//         :\n//         <Route key={index} path={item.path} render={item.component}/>\n//     ))\n// }\n\nvar BaseRouter = function (_React$Component) {\n    _inherits(BaseRouter, _React$Component);\n\n    function BaseRouter() {\n        _classCallCheck(this, BaseRouter);\n\n        return _possibleConstructorReturn(this, (BaseRouter.__proto__ || Object.getPrototypeOf(BaseRouter)).apply(this, arguments));\n    }\n\n    _createClass(BaseRouter, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _reactRouterDom.BrowserRouter,\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Switch,\n                    null,\n                    _path2.default.map(function (item, index) {\n                        return item.exact ? _react2.default.createElement(_reactRouterDom.Route, { key: index, exact: true, path: item.path, component: item.component }) : _react2.default.createElement(_reactRouterDom.Route, { key: index, path: item.path, component: item.component });\n                    })\n                )\n            );\n        }\n    }]);\n\n    return BaseRouter;\n}(_react2.default.Component);\n\nexports.default = BaseRouter;\n\n//# sourceURL=webpack:///./src/router/index.jsx?");

/***/ }),

/***/ "./src/router/path.js":
/*!****************************!*\
  !*** ./src/router/path.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"./node_modules/_react-loadable@5.5.0@react-loadable/lib/index.js\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//标记： 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，这是经常需要做的行为。\n// 详情请参考这一篇文章：https://blog.csdn.net/China_Guanq/article/details/82194928#loadable\nvar loadable = function loadable(filename) {\n    return (0, _reactLoadable2.default)({\n        loader: function loader() {\n            return __webpack_require__(\"./src/page lazy recursive ^\\\\.\\\\/.*$\")(\"./\" + filename);\n        },\n        loading: function loading() {\n            return '';\n        }\n    });\n};\n\n//路由配置对象\nvar routers = [{\n    path: '/',\n    exact: true,\n    component: loadable('index')\n}, {\n    path: '/list',\n    component: loadable('list')\n}];\n\nexports.default = routers;\n\n//# sourceURL=webpack:///./src/router/path.js?");

/***/ })

},[["./src/main.js","manifest","vendors~main"]]]);