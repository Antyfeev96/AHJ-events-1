/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ \"./src/css/styles.scss\");\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController(gameplay) {\n    _classCallCheck(this, GameController);\n\n    this.gamePlay = gameplay;\n    this.goblin = document.createElement('img');\n    this.goblin.src = 'src/images/goblin.png';\n    this.goblin.alt = 'goblin';\n    this.gamePlay.renderBoard();\n    this.gamePlay.renderScores();\n    this.cells = Array.from(document.getElementsByClassName('board__cell'));\n    this.scoresEl = this.gamePlay.getScorePoints();\n    this.failsEl = +this.gamePlay.getScoreFails();\n  }\n\n  _createClass(GameController, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.interval = setInterval(function () {\n        return _this.changeImg();\n      }, 1000);\n      this.gamePlay.body.addEventListener('click', function (event) {\n        return _this.playerClickEvent(event);\n      });\n    }\n  }, {\n    key: \"changeImg\",\n    value: function changeImg() {\n      var filteredCells = this.cells.filter(function (cell) {\n        return cell.getElementsByTagName('img').length === 0;\n      });\n      var newGoblinCell = Math.floor(Math.random() * filteredCells.length);\n      filteredCells[newGoblinCell].append(this.goblin);\n    }\n  }, {\n    key: \"increasePoints\",\n    value: function increasePoints() {\n      this.scoresEl += 1;\n      this.gamePlay.body.querySelector('.scores__points').textContent = this.scoresEl;\n    }\n  }, {\n    key: \"increaseFails\",\n    value: function increaseFails() {\n      this.failsEl += 1;\n      this.gamePlay.body.querySelector('.scores__count').textContent = this.failsEl;\n    }\n  }, {\n    key: \"playerClickEvent\",\n    value: function playerClickEvent(event) {\n      if (this.failsEl === 5) {\n        return;\n      }\n\n      if (event.target.closest('.board__cell') === this.gamePlay.body.querySelector('img').closest('.board__cell')) {\n        this.increasePoints();\n      } else {\n        this.increaseFails();\n\n        if (this.failsEl === 5) {\n          this.endGame();\n        }\n      }\n    }\n  }, {\n    key: \"endGame\",\n    value: function endGame() {\n      alert('You lose!');\n      this.gamePlay.setPointsToZero();\n      clearInterval(this.interval);\n      this.goblin.remove();\n      return false;\n    }\n  }]);\n\n  return GameController;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GamePlay = /*#__PURE__*/function () {\n  function GamePlay() {\n    _classCallCheck(this, GamePlay);\n\n    this.body = document.body;\n  }\n\n  _createClass(GamePlay, [{\n    key: \"renderBoard\",\n    value: function renderBoard() {\n      this.body.innerHTML = \"\\n    <div class=\\\"board\\\">\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n        <div class=\\\"board__cell\\\"></div>\\n    </div>\";\n    }\n  }, {\n    key: \"renderScores\",\n    value: function renderScores() {\n      this.body.innerHTML += \"\\n        <div class=\\\"scores\\\">\\n            <div class=\\\"scores__title\\\">Scores</div>\\n            <div class=\\\"scores__points\\\">0</div>\\n            <div class=\\\"scores__fails\\\">fails</div>\\n            <div class=\\\"scores__count\\\">0</div>\\n        </div>\\n        \";\n    }\n  }, {\n    key: \"getScorePoints\",\n    value: function getScorePoints() {\n      return +this.body.querySelector('.scores__points').textContent;\n    }\n  }, {\n    key: \"getScoreFails\",\n    value: function getScoreFails() {\n      return +this.body.querySelector('.scores__count').textContent;\n    }\n  }, {\n    key: \"setPointsToZero\",\n    value: function setPointsToZero() {\n      this.body.querySelector('.scores__points').textContent = 0;\n      this.body.querySelector('.scores__count').textContent = 0;\n    }\n  }]);\n\n  return GamePlay;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n\n\nvar gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__.default();\nvar game = new _GameController__WEBPACK_IMPORTED_MODULE_1__.default(gamePlay);\ngame.init();\n\n//# sourceURL=webpack://my-webpack-project/./src/js/app.js?");

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;