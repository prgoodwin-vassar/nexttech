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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 20px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 25px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--header{\\n  display: flex;\\n  flex-direction: column;\\n  padding-bottom: 25px;\\n  box-shadow: 5px 1px lightgrey;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px auto 0px auto;\\n}\\n\\n.article--date {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px auto 0px auto;\\n}\\n\\n.form--wrapper {\\n  padding: 5px 20px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,uBAAuB;EACvB,WAAW;EACX,gEAAgE;AAClE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,6BAA6B;AAC/B;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n}\\n\\n.article {\\n  background-color: white;\\n  padding: 20px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 25px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--header{\\n  display: flex;\\n  flex-direction: column;\\n  padding-bottom: 25px;\\n  box-shadow: 5px 1px lightgrey;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px auto 0px auto;\\n}\\n\\n.article--date {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px auto 0px auto;\\n}\\n\\n.form--wrapper {\\n  padding: 5px 20px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3QixHQUFHLGNBQWMsNEJBQTRCLGtCQUFrQixHQUFHLGdCQUFnQixpQkFBaUIsdUJBQXVCLHFCQUFxQiw0QkFBNEIsR0FBRyxpQkFBaUIsaUJBQWlCLGtCQUFrQixxQkFBcUIsb0JBQW9CLGlCQUFpQixHQUFHLGdCQUFnQixpQkFBaUIsc0JBQXNCLEdBQUcscUJBQXFCLGtCQUFrQiwyQkFBMkIseUJBQXlCLGtDQUFrQyxHQUFHLHFCQUFxQixxQkFBcUIseUJBQXlCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEdBQUcsb0JBQW9CLHFCQUFxQix1QkFBdUIsOEJBQThCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGNBQWMsd0JBQXdCLDBCQUEwQix3TkFBd04sZ0NBQWdDLDBDQUEwQyx3Q0FBd0MseUxBQXlMLHFHQUFxRyxzQ0FBc0Msa0NBQWtDLHVKQUF1SixtQ0FBbUMsd0NBQXdDLDhCQUE4QixxQ0FBcUMsR0FBRyx5Q0FBeUMsV0FBVyxzQ0FBc0Msc0NBQXNDLG9DQUFvQyxvRkFBb0YsNkpBQTZKLG9DQUFvQywrQkFBK0IseUtBQXlLLGtDQUFrQywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHNDQUFzQywwSkFBMEosR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxJQUFJLFdBQVcsdUZBQXVGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sOEdBQThHLGdDQUFnQyw0QkFBNEIsZ0JBQWdCLHFFQUFxRSxHQUFHLFNBQVMsa0JBQWtCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLEdBQUcsY0FBYyw0QkFBNEIsa0JBQWtCLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIscUJBQXFCLDRCQUE0QixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQix5QkFBeUIsa0NBQWtDLEdBQUcscUJBQXFCLHFCQUFxQix5QkFBeUIsdUJBQXVCLDBCQUEwQiw4QkFBOEIsR0FBRyxvQkFBb0IscUJBQXFCLHVCQUF1Qiw4QkFBOEIsR0FBRyxvQkFBb0Isc0JBQXNCLEdBQUcsY0FBYyx3QkFBd0IsMEJBQTBCLHdOQUF3TixnQ0FBZ0MsMENBQTBDLHdDQUF3Qyx5TEFBeUwscUdBQXFHLHNDQUFzQyxrQ0FBa0MsdUpBQXVKLG1DQUFtQyx3Q0FBd0MsOEJBQThCLHFDQUFxQyxHQUFHLHlDQUF5QyxXQUFXLHNDQUFzQyxzQ0FBc0Msb0NBQW9DLG9GQUFvRiw2SkFBNkosb0NBQW9DLCtCQUErQix5S0FBeUssa0NBQWtDLDBDQUEwQyxnQ0FBZ0MsdUNBQXVDLEtBQUssR0FBRyxPQUFPLDJCQUEyQixlQUFlLGNBQWMsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDBKQUEwSixHQUFHLE9BQU8sbUJBQW1CLDBCQUEwQixHQUFHLHlDQUF5QyxVQUFVLHlCQUF5QixLQUFLLElBQUksdUJBQXVCO0FBQ252TztBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/NmY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IG55dC1pbXBlcmlhbCwgZ2VvcmdpYSwndGltZXMgbmV3IHJvbWFuJyx0aW1lcyxzZXJpZjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdi0tbWVudSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4ubmF2LS1oZWxwIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYXJ0aWNsZS0taGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggbGlnaHRncmV5O1xcbn1cXG5cXG4uYXJ0aWNsZS0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS45Mzc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07IFxcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG59XFxuXFxuLmFydGljbGUtLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XFxufVxcblxcbi5mb3JtLS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IG55dC1pbXBlcmlhbCwgZ2VvcmdpYSwndGltZXMgbmV3IHJvbWFuJyx0aW1lcyxzZXJpZjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcnRpY2xlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5hdi0tbWVudSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5uYXYtLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luOiAzMHB4O1xcbn1cXG5cXG4ubmF2LS1oZWxwIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYXJ0aWNsZS0taGVhZGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggbGlnaHRncmV5O1xcbn1cXG5cXG4uYXJ0aWNsZS0tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS45Mzc1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07IFxcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG59XFxuXFxuLmFydGljbGUtLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XFxufVxcblxcbi5mb3JtLS13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbn1cXG5cXG4vKiA6cm9vdCB7XFxuICAtLW1heC13aWR0aDogMTEwMHB4O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgLS1mb250LW1vbm86IHVpLW1vbm9zcGFjZSwgTWVubG8sIE1vbmFjbywgJ0Nhc2NhZGlhIE1vbm8nLCAnU2Vnb2UgVUkgTW9ubycsXFxuICAgICdSb2JvdG8gTW9ubycsICdPeHlnZW4gTW9ubycsICdVYnVudHUgTW9ub3NwYWNlJywgJ1NvdXJjZSBDb2RlIFBybycsXFxuICAgICdGaXJhIE1vbm8nLCAnRHJvaWQgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xcblxcbiAgLS1mb3JlZ3JvdW5kLXJnYjogMCwgMCwgMDtcXG4gIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDIxNCwgMjE5LCAyMjA7XFxuICAtLWJhY2tncm91bmQtZW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG5cXG4gIC0tcHJpbWFyeS1nbG93OiBjb25pYy1ncmFkaWVudChcXG4gICAgZnJvbSAxODBkZWcgYXQgNTAlIDUwJSxcXG4gICAgIzE2YWJmZjMzIDBkZWcsXFxuICAgICMwODg1ZmYzMyA1NWRlZyxcXG4gICAgIzU0ZDZmZjMzIDEyMGRlZyxcXG4gICAgIzAwNzFmZjMzIDE2MGRlZyxcXG4gICAgdHJhbnNwYXJlbnQgMzYwZGVnXFxuICApO1xcbiAgLS1zZWNvbmRhcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpLFxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXFxuICApO1xcblxcbiAgLS10aWxlLXN0YXJ0LXJnYjogMjM5LCAyNDUsIDI0OTtcXG4gIC0tdGlsZS1lbmQtcmdiOiAyMjgsIDIzMiwgMjMzO1xcbiAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICMwMDAwMDA4MCxcXG4gICAgIzAwMDAwMDQwLFxcbiAgICAjMDAwMDAwMzAsXFxuICAgICMwMDAwMDAyMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDA4MFxcbiAgKTtcXG5cXG4gIC0tY2FsbG91dC1yZ2I6IDIzOCwgMjQwLCAyNDE7XFxuICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTcyLCAxNzUsIDE3NjtcXG4gIC0tY2FyZC1yZ2I6IDE4MCwgMTg1LCAxODg7XFxuICAtLWNhcmQtYm9yZGVyLXJnYjogMTMxLCAxMzQsIDEzNTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgOnJvb3Qge1xcbiAgICAtLWZvcmVncm91bmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcbiAgICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAwLCAwLCAwO1xcbiAgICAtLWJhY2tncm91bmQtZW5kLXJnYjogMCwgMCwgMDtcXG5cXG4gICAgLS1wcmltYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDEsIDY1LCAyNTUsIDAuNCksIHJnYmEoMSwgNjUsIDI1NSwgMCkpO1xcbiAgICAtLXNlY29uZGFyeS1nbG93OiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tIHJpZ2h0LFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDAuMylcXG4gICAgKTtcXG5cXG4gICAgLS10aWxlLXN0YXJ0LXJnYjogMiwgMTMsIDQ2O1xcbiAgICAtLXRpbGUtZW5kLXJnYjogMiwgNSwgMTk7XFxuICAgIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAgICNmZmZmZmY4MCxcXG4gICAgICAjZmZmZmZmNDAsXFxuICAgICAgI2ZmZmZmZjMwLFxcbiAgICAgICNmZmZmZmYyMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmY4MFxcbiAgICApO1xcblxcbiAgICAtLWNhbGxvdXQtcmdiOiAyMCwgMjAsIDIwO1xcbiAgICAtLWNhbGxvdXQtYm9yZGVyLXJnYjogMTA4LCAxMDgsIDEwODtcXG4gICAgLS1jYXJkLXJnYjogMTAwLCAxMDAsIDEwMDtcXG4gICAgLS1jYXJkLWJvcmRlci1yZ2I6IDIwMCwgMjAwLCAyMDA7XFxuICB9XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiByZ2IodmFyKC0tZm9yZWdyb3VuZC1yZ2IpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20sXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgcmdiKHZhcigtLWJhY2tncm91bmQtZW5kLXJnYikpXFxuICAgIClcXG4gICAgcmdiKHZhcigtLWJhY2tncm91bmQtc3RhcnQtcmdiKSk7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxufSAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css\n"));

/***/ })

});