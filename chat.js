var chat =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chat.js":
/*!*****************!*\
  !*** ./chat.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_display_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/display.css */ \"./css/display.css\");\n/* harmony import */ var _css_display_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_display_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/form.css */ \"./css/form.css\");\n/* harmony import */ var _css_form_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_form_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_cap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/cap.css */ \"./css/cap.css\");\n/* harmony import */ var _css_cap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_cap_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_rendering_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/rendering_messages.js */ \"./js/rendering_messages.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./chat.js?");

/***/ }),

/***/ "./css/cap.css":
/*!*********************!*\
  !*** ./css/cap.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./css/cap.css?");

/***/ }),

/***/ "./css/display.css":
/*!*************************!*\
  !*** ./css/display.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./css/display.css?");

/***/ }),

/***/ "./css/form.css":
/*!**********************!*\
  !*** ./css/form.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./css/form.css?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./index.css?");

/***/ }),

/***/ "./js/local_storage.js":
/*!*****************************!*\
  !*** ./js/local_storage.js ***!
  \*****************************/
/*! exports provided: MaxIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MaxIndex\", function() { return MaxIndex; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar MaxIndex = /*#__PURE__*/function () {\n  function MaxIndex() {\n    _classCallCheck(this, MaxIndex);\n\n    if (localStorage.getItem(\"max_index\")) {\n      this._index = localStorage.getItem(\"max_index\");\n    } else {\n      this.index = \"-1\";\n    }\n  }\n\n  _createClass(MaxIndex, [{\n    key: \"index\",\n    get: function get() {\n      return this._index;\n    },\n    set: function set(value) {\n      localStorage.setItem(\"max_index\", value);\n      this._index = value;\n    }\n  }]);\n\n  return MaxIndex;\n}();\n\n//# sourceURL=webpack://%5Bname%5D/./js/local_storage.js?");

/***/ }),

/***/ "./js/rendering_messages.js":
/*!**********************************!*\
  !*** ./js/rendering_messages.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./js/local_storage.js\");\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar display = document.querySelector('.display');\nvar max_index = new _local_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"MaxIndex\"]();\nvar index = '0';\n\nfunction rendering_messages(message, time) {\n  var new_speech = document.createElement('div');\n  new_speech.className = \"speech\";\n  var new_message = document.createElement('p');\n  new_message.className = \"message\";\n  new_message.textContent = message;\n  new_speech.append(new_message);\n  var new_time = document.createElement('p');\n  new_time.className = \"small_message\";\n  new_time.textContent = time;\n  new_speech.append(new_time);\n  var new_tip = document.createElement('span');\n  new_tip.className = 'tip';\n  new_speech.append(new_tip);\n  display.append(new_speech);\n  var new_break = document.createElement('div');\n  new_break.className = \"break\";\n  display.append(new_break);\n  display.scrollTo(0, display.scrollHeight);\n}\n\nwhile (parseInt(index) <= parseInt(max_index.index)) {\n  rendering_messages(JSON.parse(localStorage.getItem(index)).message, JSON.parse(localStorage.getItem(index)).time_loc);\n  index = (parseInt(index) + 1).toString();\n}\n\nform.addEventListener('keypress', handleKeyPress.bind(undefined));\n\nfunction handleSubmit(event) {\n  max_index.index = index;\n  event.preventDefault();\n  var now = new Date();\n  rendering_messages(input.value, now.toLocaleTimeString().slice(0, -3));\n  var loc = {\n    sender: 'sender',\n    time_loc: now.toLocaleTimeString().slice(0, -3),\n    message: input.value\n  };\n  localStorage.setItem(index, JSON.stringify(loc));\n  index = (parseInt(index) + 1).toString();\n  input.value = \"\";\n}\n\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    handleSubmit(event);\n  }\n}\n\n//# sourceURL=webpack://%5Bname%5D/./js/rendering_messages.js?");

/***/ })

/******/ });