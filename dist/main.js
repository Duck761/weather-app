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

/***/ "./src/api_key.js":
/*!************************!*\
  !*** ./src/api_key.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiKey = \"ce74069a05af14cfb5fba6a999c4630a\";\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiKey);\n\n//# sourceURL=webpack://weather-app/./src/api_key.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_key */ \"./src/api_key.js\");\n\r\nconsole.log(_api_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\nconst input = document.querySelector(\"input\");\r\nconst button = document.querySelector(\"button\");\r\n\r\nasync function getCity(city) {\r\n    let response = await fetch(\r\n        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_api_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`\r\n    );\r\n    let data = await response.json();\r\n    const lat = data.coord.lat;\r\n    const lon = data.coord.lon;\r\n    response = await fetch(\r\n        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${_api_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]}`\r\n    );\r\n    data = await response.json();\r\n    return data;\r\n}\r\n\r\nfunction stripData(data) {\r\n    delete data.current.clouds;\r\n    delete data.current.rain;\r\n    delete data.current.snow;\r\n    delete data.current.wind;\r\n    delete data.current.sys;\r\n    delete data.current.dt;\r\n    delete data.current.timezone;\r\n    delete data.current.id;\r\n    delete data.current.name;\r\n    delete data.current.cod;\r\n    delete data.current.base;\r\n    delete data.current.dt;\r\n    delete data.minutely;\r\n    delete data.hourly;\r\n    delete data.daily;\r\n\r\n    return data;\r\n}\r\n\r\nfunction renderInformation(data) {\r\n    const temperature = document.createElement(\"p\");\r\n    temperature.innerHTML = `Temperature: ${data.current.temp}C`;\r\n    const humidity = document.createElement(\"p\");\r\n    humidity.innerHTML = `Humidity: ${data.current.humidity}`;\r\n    // Display the country name\r\n    const country = document.createElement(\"p\");\r\n    country.innerHTML = `Country: ${data.timezone}`;\r\n    const weatherContainer = document.querySelector(\".weather-container\");\r\n    weatherContainer.appendChild(temperature);\r\n    weatherContainer.appendChild(humidity);\r\n    weatherContainer.appendChild(country);\r\n    weatherContainer.style.padding = \"10px\";\r\n}\r\n\r\nbutton.addEventListener(\"click\", () => {\r\n    if (input.value === \"\") {\r\n        alert(\"Please enter a city\");\r\n        return;\r\n    }\r\n    // clear the weather container\r\n    const weatherContainer = document.querySelector(\".weather-container\");\r\n    weatherContainer.innerHTML = \"\";\r\n    getCity(input.value).then((data) => {\r\n        stripData(data);\r\n        console.log(data);\r\n        renderInformation(data);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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