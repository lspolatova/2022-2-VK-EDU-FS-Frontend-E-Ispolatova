var index =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/cap.css":
/*!*********************!*\
  !*** ./css/cap.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./css/cap.css?");

/***/ }),

/***/ "./css/list_chats.css":
/*!****************************!*\
  !*** ./css/list_chats.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./css/list_chats.css?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_cap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/cap.css */ \"./css/cap.css\");\n/* harmony import */ var _css_cap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_cap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_list_chats_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/list_chats.css */ \"./css/list_chats.css\");\n/* harmony import */ var _css_list_chats_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_list_chats_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_make_chat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/make_chat.js */ \"./js/make_chat.js\");\n\n\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./index.js?");

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

/***/ "./js/make_chat.js":
/*!*************************!*\
  !*** ./js/make_chat.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./js/local_storage.js\");\n\nvar max_index = new _local_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"MaxIndex\"]();\n\nfunction rendering_chat(last_message, last_time, colvo) {\n  var list_chats = document.querySelector('.list_chats');\n  var chat = document.createElement('article');\n  chat.className = \"chat\";\n\n  chat.onclick = function (event) {\n    window.location.href = './chat.html';\n  };\n\n  var avatar = document.createElement('div');\n  avatar.className = \"avatar\";\n  var icons = document.createElement('div');\n  icons.className = \"material-icons\";\n  icons.style = \"font-size: 3.5rem;\";\n  icons.textContent = \"account_circle\";\n  avatar.append(icons);\n  chat.append(avatar);\n  var info_chat = document.createElement('div');\n  info_chat.className = \"info_chat\";\n  var info_text = document.createElement('div');\n  var name_user = document.createElement('div');\n  name_user.textContent = \"Дженнифер\";\n  info_text.append(name_user);\n  var new_line = document.createElement('div');\n  new_line.className = \"break\";\n  info_text.append(new_line);\n  var message = document.createElement('div');\n  message.className = \"small_message\";\n  message.textContent = last_message;\n  info_text.append(message);\n  info_chat.append(info_text);\n  var indicators = document.createElement('div');\n  indicators.className = \"indicators\";\n  var time = document.createElement('div');\n  time.className = \"small_message\";\n  time.textContent = last_time;\n  indicators.append(time);\n  indicators.append(new_line);\n  var not_read = document.createElement('div');\n  not_read.className = \"not_read\";\n  not_read.textContent = colvo;\n  indicators.append(not_read);\n  info_chat.append(indicators);\n  chat.append(info_chat);\n  list_chats.append(chat);\n}\n\nfor (var i = 0; i < 20; i++) {\n  if (localStorage.getItem(max_index.index)) {\n    rendering_chat(JSON.parse(localStorage.getItem(max_index.index)).message, JSON.parse(localStorage.getItem(max_index.index)).time_loc, (parseInt(max_index.index) + 1).toString());\n  } else {\n    rendering_chat(\" \", \" \", (parseInt(max_index.index) + 1).toString());\n  }\n}\n\n//# sourceURL=webpack://%5Bname%5D/./js/make_chat.js?");

/***/ })

/******/ });