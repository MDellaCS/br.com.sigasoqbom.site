"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --bg: #ffffcc;\\r\\n\\r\\n  --float: float .3s cubic-bezier(0.15, 0.75, 0.55, 1.25) infinite;\\r\\n  --appear: appear .3s cubic-bezier(0.15, 0.75, 0.55, 1.25) forwards;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n\\r\\n  :root {\\r\\n    --bg: #000033;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes float {\\r\\n\\r\\n  0%,\\r\\n  100% {\\r\\n      transform: translateY(0);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n      transform: translateY(-15px);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes appear {\\r\\n\\r\\n  0% {\\r\\n      transform: translate(-50%, 100%);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n      transform: translate(-50%, -50%);\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--bg);\\r\\n}\\r\\n\\r\\na {\\r\\n  animation: var(--float);\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;;EAEb,gEAAgE;EAChE,kEAAkE;AACpE;;AAEA;EACE;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;;EAEE;;MAEI,wBAAwB;EAC5B;;EAEA;MACI,4BAA4B;EAChC;AACF;;AAEA;;EAEE;MACI,gCAAgC;EACpC;;EAEA;MACI,gCAAgC;EACpC;AACF;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;EACvB,cAAc;EACd,qBAAqB;AACvB\",\"sourcesContent\":[\":root {\\r\\n  --bg: #ffffcc;\\r\\n\\r\\n  --float: float .3s cubic-bezier(0.15, 0.75, 0.55, 1.25) infinite;\\r\\n  --appear: appear .3s cubic-bezier(0.15, 0.75, 0.55, 1.25) forwards;\\r\\n}\\r\\n\\r\\n@media (prefers-color-scheme: dark) {\\r\\n  html {\\r\\n    color-scheme: dark;\\r\\n  }\\r\\n\\r\\n  :root {\\r\\n    --bg: #000033;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes float {\\r\\n\\r\\n  0%,\\r\\n  100% {\\r\\n      transform: translateY(0);\\r\\n  }\\r\\n\\r\\n  50% {\\r\\n      transform: translateY(-15px);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes appear {\\r\\n\\r\\n  0% {\\r\\n      transform: translate(-50%, 100%);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n      transform: translate(-50%, -50%);\\r\\n  }\\r\\n}\\r\\n\\r\\n* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  max-width: 100vw;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--bg);\\r\\n}\\r\\n\\r\\na {\\r\\n  animation: var(--float);\\r\\n  color: inherit;\\r\\n  text-decoration: none;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzEzXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxpREFBaUQsb0JBQW9CLDJFQUEyRSx5RUFBeUUsS0FBSyw2Q0FBNkMsWUFBWSwyQkFBMkIsT0FBTyxpQkFBaUIsc0JBQXNCLE9BQU8sS0FBSywwQkFBMEIseUJBQXlCLG1DQUFtQyxPQUFPLGVBQWUsdUNBQXVDLE9BQU8sS0FBSywyQkFBMkIsY0FBYywyQ0FBMkMsT0FBTyxnQkFBZ0IsMkNBQTJDLE9BQU8sS0FBSyxXQUFXLDZCQUE2QixpQkFBaUIsZ0JBQWdCLEtBQUssdUJBQXVCLHVCQUF1Qix5QkFBeUIsS0FBSyxjQUFjLGtDQUFrQyxLQUFLLFdBQVcsOEJBQThCLHFCQUFxQiw0QkFBNEIsS0FBSyxPQUFPLHVGQUF1RixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksaUNBQWlDLG9CQUFvQiwyRUFBMkUseUVBQXlFLEtBQUssNkNBQTZDLFlBQVksMkJBQTJCLE9BQU8saUJBQWlCLHNCQUFzQixPQUFPLEtBQUssMEJBQTBCLHlCQUF5QixtQ0FBbUMsT0FBTyxlQUFlLHVDQUF1QyxPQUFPLEtBQUssMkJBQTJCLGNBQWMsMkNBQTJDLE9BQU8sZ0JBQWdCLDJDQUEyQyxPQUFPLEtBQUssV0FBVyw2QkFBNkIsaUJBQWlCLGdCQUFnQixLQUFLLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssY0FBYyxrQ0FBa0MsS0FBSyxXQUFXLDhCQUE4QixxQkFBcUIsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ2w0RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MDZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iZzogI2ZmZmZjYztcXHJcXG5cXHJcXG4gIC0tZmxvYXQ6IGZsb2F0IC4zcyBjdWJpYy1iZXppZXIoMC4xNSwgMC43NSwgMC41NSwgMS4yNSkgaW5maW5pdGU7XFxyXFxuICAtLWFwcGVhcjogYXBwZWFyIC4zcyBjdWJpYy1iZXppZXIoMC4xNSwgMC43NSwgMC41NSwgMS4yNSkgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tYmc6ICMwMDAwMzM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXQge1xcclxcblxcclxcbiAgMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXHJcXG5cXHJcXG4gIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1mbG9hdCk7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhOztFQUViLGdFQUFnRTtFQUNoRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOztFQUVFOztNQUVJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLDRCQUE0QjtFQUNoQztBQUNGOztBQUVBOztFQUVFO01BQ0ksZ0NBQWdDO0VBQ3BDOztFQUVBO01BQ0ksZ0NBQWdDO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iZzogI2ZmZmZjYztcXHJcXG5cXHJcXG4gIC0tZmxvYXQ6IGZsb2F0IC4zcyBjdWJpYy1iZXppZXIoMC4xNSwgMC43NSwgMC41NSwgMS4yNSkgaW5maW5pdGU7XFxyXFxuICAtLWFwcGVhcjogYXBwZWFyIC4zcyBjdWJpYy1iZXppZXIoMC4xNSwgMC43NSwgMC41NSwgMS4yNSkgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tYmc6ICMwMDAwMzM7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxvYXQge1xcclxcblxcclxcbiAgMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYXBwZWFyIHtcXHJcXG5cXHJcXG4gIDAlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgYW5pbWF0aW9uOiB2YXIoLS1mbG9hdCk7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[13].use[2]!./src/styles/globals.css\n"));

/***/ })

});