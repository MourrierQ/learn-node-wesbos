/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:141:35\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:142:10)\n    at moduleFactory.create (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/Compilation.js:424:9)\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:242:4\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /home/quentin/Documents/Projects/dang-thats-delicious/node_modules/tapable/lib/Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/tapable/lib/Tapable.js:208:13)\n    at onDoneResolving (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/home/quentin/Documents/Projects/dang-thats-delicious/node_modules/webpack/lib/NormalModuleFactory.js:189:6)\n    at _combinedTickCallback (internal/process/next_tick.js:95:7)\n    at process._tickCallback (internal/process/next_tick.js:161:9)");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _bling = __webpack_require__(0);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map