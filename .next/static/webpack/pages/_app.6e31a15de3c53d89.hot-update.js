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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n  box-shadow: 5px 1px lightgrey;\\n}\\n\\n.article {\\n  background-color: white;\\n\\n  padding: 20px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 25px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px auto 0px auto;\\n}\\n\\n.article--date {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px auto 0px auto;\\n}\\n\\n.form--wrapper {\\n  padding: 5px 20px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,uBAAuB;EACvB,WAAW;EACX,gEAAgE;AAClE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,uBAAuB;;EAEvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA0GG\",\"sourcesContent\":[\"body {\\n  background-color: white;\\n  margin: 0px;\\n  font-family: nyt-imperial, georgia,'times new roman',times,serif;\\n}\\n\\nnav {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 10px;\\n  align-items: center;\\n  box-shadow: 5px 1px lightgrey;\\n}\\n\\n.article {\\n  background-color: white;\\n\\n  padding: 20px;\\n}\\n\\n.nav--menu {\\n  height: 50px;\\n  margin-right: auto;\\n  margin-left: 5px;\\n  background-color: white;\\n}\\n\\n.nav--title {\\n  padding: 0px;\\n  display: flex;\\n  font-weight: 700;\\n  font-size: 25px;\\n  margin: 30px;\\n}\\n\\n.nav--help {\\n  height: 50px;\\n  margin-left: auto;\\n}\\n\\n.article--title {\\n  font-weight: 700;\\n  font-size: 1.9375rem;\\n  font-style: italic;\\n  line-height: 2.25rem; \\n  margin: 0px auto 0px auto;\\n}\\n\\n.article--date {\\n  font-weight: 300;\\n  font-size: 1.25rem;\\n  margin: 0px auto 0px auto;\\n}\\n\\n.form--wrapper {\\n  padding: 5px 20px;\\n}\\n\\n/* :root {\\n  --max-width: 1100px;\\n  --border-radius: 12px;\\n  --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',\\n    'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',\\n    'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;\\n\\n  --foreground-rgb: 0, 0, 0;\\n  --background-start-rgb: 214, 219, 220;\\n  --background-end-rgb: 255, 255, 255;\\n\\n  --primary-glow: conic-gradient(\\n    from 180deg at 50% 50%,\\n    #16abff33 0deg,\\n    #0885ff33 55deg,\\n    #54d6ff33 120deg,\\n    #0071ff33 160deg,\\n    transparent 360deg\\n  );\\n  --secondary-glow: radial-gradient(\\n    rgba(255, 255, 255, 1),\\n    rgba(255, 255, 255, 0)\\n  );\\n\\n  --tile-start-rgb: 239, 245, 249;\\n  --tile-end-rgb: 228, 232, 233;\\n  --tile-border: conic-gradient(\\n    #00000080,\\n    #00000040,\\n    #00000030,\\n    #00000020,\\n    #00000010,\\n    #00000010,\\n    #00000080\\n  );\\n\\n  --callout-rgb: 238, 240, 241;\\n  --callout-border-rgb: 172, 175, 176;\\n  --card-rgb: 180, 185, 188;\\n  --card-border-rgb: 131, 134, 135;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  :root {\\n    --foreground-rgb: 255, 255, 255;\\n    --background-start-rgb: 0, 0, 0;\\n    --background-end-rgb: 0, 0, 0;\\n\\n    --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));\\n    --secondary-glow: linear-gradient(\\n      to bottom right,\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0),\\n      rgba(1, 65, 255, 0.3)\\n    );\\n\\n    --tile-start-rgb: 2, 13, 46;\\n    --tile-end-rgb: 2, 5, 19;\\n    --tile-border: conic-gradient(\\n      #ffffff80,\\n      #ffffff40,\\n      #ffffff30,\\n      #ffffff20,\\n      #ffffff10,\\n      #ffffff10,\\n      #ffffff80\\n    );\\n\\n    --callout-rgb: 20, 20, 20;\\n    --callout-border-rgb: 108, 108, 108;\\n    --card-rgb: 100, 100, 100;\\n    --card-border-rgb: 200, 200, 200;\\n  }\\n}\\n\\n* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nhtml,\\nbody {\\n  max-width: 100vw;\\n  overflow-x: hidden;\\n}\\n\\nbody {\\n  color: rgb(var(--foreground-rgb));\\n  background: linear-gradient(\\n      to bottom,\\n      transparent,\\n      rgb(var(--background-end-rgb))\\n    )\\n    rgb(var(--background-start-rgb));\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZlsxMV0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzExXS51c2VbMl0hLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzJIO0FBQzNILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSxnREFBZ0QsNEJBQTRCLGdCQUFnQixxRUFBcUUsR0FBRyxTQUFTLGtCQUFrQix3QkFBd0Isd0JBQXdCLHdCQUF3QixrQ0FBa0MsR0FBRyxjQUFjLDRCQUE0QixvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixxQkFBcUIsNEJBQTRCLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0IscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixHQUFHLHFCQUFxQixxQkFBcUIseUJBQXlCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEdBQUcsb0JBQW9CLHFCQUFxQix1QkFBdUIsOEJBQThCLEdBQUcsb0JBQW9CLHNCQUFzQixHQUFHLGNBQWMsd0JBQXdCLDBCQUEwQix3TkFBd04sZ0NBQWdDLDBDQUEwQyx3Q0FBd0MseUxBQXlMLHFHQUFxRyxzQ0FBc0Msa0NBQWtDLHVKQUF1SixtQ0FBbUMsd0NBQXdDLDhCQUE4QixxQ0FBcUMsR0FBRyx5Q0FBeUMsV0FBVyxzQ0FBc0Msc0NBQXNDLG9DQUFvQyxvRkFBb0YsNkpBQTZKLG9DQUFvQywrQkFBK0IseUtBQXlLLGtDQUFrQywwQ0FBMEMsZ0NBQWdDLHVDQUF1QyxLQUFLLEdBQUcsT0FBTywyQkFBMkIsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLHFCQUFxQix1QkFBdUIsR0FBRyxVQUFVLHNDQUFzQywwSkFBMEosR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyx5Q0FBeUMsVUFBVSx5QkFBeUIsS0FBSyxJQUFJLFdBQVcsdUZBQXVGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyw4R0FBOEcsZ0NBQWdDLDRCQUE0QixnQkFBZ0IscUVBQXFFLEdBQUcsU0FBUyxrQkFBa0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isa0NBQWtDLEdBQUcsY0FBYyw0QkFBNEIsb0JBQW9CLEdBQUcsZ0JBQWdCLGlCQUFpQix1QkFBdUIscUJBQXFCLDRCQUE0QixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxxQkFBcUIscUJBQXFCLHlCQUF5Qix1QkFBdUIsMEJBQTBCLDhCQUE4QixHQUFHLG9CQUFvQixxQkFBcUIsdUJBQXVCLDhCQUE4QixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxjQUFjLHdCQUF3QiwwQkFBMEIsd05BQXdOLGdDQUFnQywwQ0FBMEMsd0NBQXdDLHlMQUF5TCxxR0FBcUcsc0NBQXNDLGtDQUFrQyx1SkFBdUosbUNBQW1DLHdDQUF3Qyw4QkFBOEIscUNBQXFDLEdBQUcseUNBQXlDLFdBQVcsc0NBQXNDLHNDQUFzQyxvQ0FBb0Msb0ZBQW9GLDZKQUE2SixvQ0FBb0MsK0JBQStCLHlLQUF5SyxrQ0FBa0MsMENBQTBDLGdDQUFnQyx1Q0FBdUMsS0FBSyxHQUFHLE9BQU8sMkJBQTJCLGVBQWUsY0FBYyxHQUFHLGlCQUFpQixxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxzQ0FBc0MsMEpBQTBKLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcseUNBQXlDLFVBQVUseUJBQXlCLEtBQUssSUFBSSx1QkFBdUI7QUFDN2dPO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz82ZjYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogbnl0LWltcGVyaWFsLCBnZW9yZ2lhLCd0aW1lcyBuZXcgcm9tYW4nLHRpbWVzLHNlcmlmO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCAxcHggbGlnaHRncmV5O1xcbn1cXG5cXG4uYXJ0aWNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uYXYtLW1lbnUge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2LS10aXRsZSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbjogMzBweDtcXG59XFxuXFxuLm5hdi0taGVscCB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFydGljbGUtLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuOTM3NXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtOyBcXG4gIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XFxufVxcblxcbi5hcnRpY2xlLS1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbn1cXG5cXG4uZm9ybS0td3JhcHBlciB7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG59XFxuXFxuLyogOnJvb3Qge1xcbiAgLS1tYXgtd2lkdGg6IDExMDBweDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIC0tZm9udC1tb25vOiB1aS1tb25vc3BhY2UsIE1lbmxvLCBNb25hY28sICdDYXNjYWRpYSBNb25vJywgJ1NlZ29lIFVJIE1vbm8nLFxcbiAgICAnUm9ib3RvIE1vbm8nLCAnT3h5Z2VuIE1vbm8nLCAnVWJ1bnR1IE1vbm9zcGFjZScsICdTb3VyY2UgQ29kZSBQcm8nLFxcbiAgICAnRmlyYSBNb25vJywgJ0Ryb2lkIFNhbnMgTW9ubycsICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcXG5cXG4gIC0tZm9yZWdyb3VuZC1yZ2I6IDAsIDAsIDA7XFxuICAtLWJhY2tncm91bmQtc3RhcnQtcmdiOiAyMTQsIDIxOSwgMjIwO1xcbiAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuXFxuICAtLXByaW1hcnktZ2xvdzogY29uaWMtZ3JhZGllbnQoXFxuICAgIGZyb20gMTgwZGVnIGF0IDUwJSA1MCUsXFxuICAgICMxNmFiZmYzMyAwZGVnLFxcbiAgICAjMDg4NWZmMzMgNTVkZWcsXFxuICAgICM1NGQ2ZmYzMyAxMjBkZWcsXFxuICAgICMwMDcxZmYzMyAxNjBkZWcsXFxuICAgIHRyYW5zcGFyZW50IDM2MGRlZ1xcbiAgKTtcXG4gIC0tc2Vjb25kYXJ5LWdsb3c6IHJhZGlhbC1ncmFkaWVudChcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKVxcbiAgKTtcXG5cXG4gIC0tdGlsZS1zdGFydC1yZ2I6IDIzOSwgMjQ1LCAyNDk7XFxuICAtLXRpbGUtZW5kLXJnYjogMjI4LCAyMzIsIDIzMztcXG4gIC0tdGlsZS1ib3JkZXI6IGNvbmljLWdyYWRpZW50KFxcbiAgICAjMDAwMDAwODAsXFxuICAgICMwMDAwMDA0MCxcXG4gICAgIzAwMDAwMDMwLFxcbiAgICAjMDAwMDAwMjAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDEwLFxcbiAgICAjMDAwMDAwODBcXG4gICk7XFxuXFxuICAtLWNhbGxvdXQtcmdiOiAyMzgsIDI0MCwgMjQxO1xcbiAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDE3MiwgMTc1LCAxNzY7XFxuICAtLWNhcmQtcmdiOiAxODAsIDE4NSwgMTg4O1xcbiAgLS1jYXJkLWJvcmRlci1yZ2I6IDEzMSwgMTM0LCAxMzU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIDpyb290IHtcXG4gICAgLS1mb3JlZ3JvdW5kLXJnYjogMjU1LCAyNTUsIDI1NTtcXG4gICAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMCwgMCwgMDtcXG4gICAgLS1iYWNrZ3JvdW5kLWVuZC1yZ2I6IDAsIDAsIDA7XFxuXFxuICAgIC0tcHJpbWFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQocmdiYSgxLCA2NSwgMjU1LCAwLjQpLCByZ2JhKDEsIDY1LCAyNTUsIDApKTtcXG4gICAgLS1zZWNvbmRhcnktZ2xvdzogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMCksXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwLjMpXFxuICAgICk7XFxuXFxuICAgIC0tdGlsZS1zdGFydC1yZ2I6IDIsIDEzLCA0NjtcXG4gICAgLS10aWxlLWVuZC1yZ2I6IDIsIDUsIDE5O1xcbiAgICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgICAjZmZmZmZmODAsXFxuICAgICAgI2ZmZmZmZjQwLFxcbiAgICAgICNmZmZmZmYzMCxcXG4gICAgICAjZmZmZmZmMjAsXFxuICAgICAgI2ZmZmZmZjEwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmODBcXG4gICAgKTtcXG5cXG4gICAgLS1jYWxsb3V0LXJnYjogMjAsIDIwLCAyMDtcXG4gICAgLS1jYWxsb3V0LWJvcmRlci1yZ2I6IDEwOCwgMTA4LCAxMDg7XFxuICAgIC0tY2FyZC1yZ2I6IDEwMCwgMTAwLCAxMDA7XFxuICAgIC0tY2FyZC1ib3JkZXItcmdiOiAyMDAsIDIwMCwgMjAwO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogcmdiKHZhcigtLWZvcmVncm91bmQtcmdiKSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKVxcbiAgICApXFxuICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYikpO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBodG1sIHtcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgfVxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0VBQWdFO0FBQ2xFOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1Qjs7RUFFdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwR0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IG55dC1pbXBlcmlhbCwgZ2VvcmdpYSwndGltZXMgbmV3IHJvbWFuJyx0aW1lcyxzZXJpZjtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiA1cHggMXB4IGxpZ2h0Z3JleTtcXG59XFxuXFxuLmFydGljbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmF2LS1tZW51IHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdi0tdGl0bGUge1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW46IDMwcHg7XFxufVxcblxcbi5uYXYtLWhlbHAge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hcnRpY2xlLS10aXRsZSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjkzNzVyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTsgXFxuICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbn1cXG5cXG4uYXJ0aWNsZS0tZGF0ZSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG59XFxuXFxuLmZvcm0tLXdyYXBwZXIge1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxufVxcblxcbi8qIDpyb290IHtcXG4gIC0tbWF4LXdpZHRoOiAxMTAwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAtLWZvbnQtbW9ubzogdWktbW9ub3NwYWNlLCBNZW5sbywgTW9uYWNvLCAnQ2FzY2FkaWEgTW9ubycsICdTZWdvZSBVSSBNb25vJyxcXG4gICAgJ1JvYm90byBNb25vJywgJ094eWdlbiBNb25vJywgJ1VidW50dSBNb25vc3BhY2UnLCAnU291cmNlIENvZGUgUHJvJyxcXG4gICAgJ0ZpcmEgTW9ubycsICdEcm9pZCBTYW5zIE1vbm8nLCAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XFxuXFxuICAtLWZvcmVncm91bmQtcmdiOiAwLCAwLCAwO1xcbiAgLS1iYWNrZ3JvdW5kLXN0YXJ0LXJnYjogMjE0LCAyMTksIDIyMDtcXG4gIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAyNTUsIDI1NSwgMjU1O1xcblxcbiAgLS1wcmltYXJ5LWdsb3c6IGNvbmljLWdyYWRpZW50KFxcbiAgICBmcm9tIDE4MGRlZyBhdCA1MCUgNTAlLFxcbiAgICAjMTZhYmZmMzMgMGRlZyxcXG4gICAgIzA4ODVmZjMzIDU1ZGVnLFxcbiAgICAjNTRkNmZmMzMgMTIwZGVnLFxcbiAgICAjMDA3MWZmMzMgMTYwZGVnLFxcbiAgICB0cmFuc3BhcmVudCAzNjBkZWdcXG4gICk7XFxuICAtLXNlY29uZGFyeS1nbG93OiByYWRpYWwtZ3JhZGllbnQoXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSksXFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMClcXG4gICk7XFxuXFxuICAtLXRpbGUtc3RhcnQtcmdiOiAyMzksIDI0NSwgMjQ5O1xcbiAgLS10aWxlLWVuZC1yZ2I6IDIyOCwgMjMyLCAyMzM7XFxuICAtLXRpbGUtYm9yZGVyOiBjb25pYy1ncmFkaWVudChcXG4gICAgIzAwMDAwMDgwLFxcbiAgICAjMDAwMDAwNDAsXFxuICAgICMwMDAwMDAzMCxcXG4gICAgIzAwMDAwMDIwLFxcbiAgICAjMDAwMDAwMTAsXFxuICAgICMwMDAwMDAxMCxcXG4gICAgIzAwMDAwMDgwXFxuICApO1xcblxcbiAgLS1jYWxsb3V0LXJnYjogMjM4LCAyNDAsIDI0MTtcXG4gIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxNzIsIDE3NSwgMTc2O1xcbiAgLS1jYXJkLXJnYjogMTgwLCAxODUsIDE4ODtcXG4gIC0tY2FyZC1ib3JkZXItcmdiOiAxMzEsIDEzNCwgMTM1O1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICA6cm9vdCB7XFxuICAgIC0tZm9yZWdyb3VuZC1yZ2I6IDI1NSwgMjU1LCAyNTU7XFxuICAgIC0tYmFja2dyb3VuZC1zdGFydC1yZ2I6IDAsIDAsIDA7XFxuICAgIC0tYmFja2dyb3VuZC1lbmQtcmdiOiAwLCAwLCAwO1xcblxcbiAgICAtLXByaW1hcnktZ2xvdzogcmFkaWFsLWdyYWRpZW50KHJnYmEoMSwgNjUsIDI1NSwgMC40KSwgcmdiYSgxLCA2NSwgMjU1LCAwKSk7XFxuICAgIC0tc2Vjb25kYXJ5LWdsb3c6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICB0byBib3R0b20gcmlnaHQsXFxuICAgICAgcmdiYSgxLCA2NSwgMjU1LCAwKSxcXG4gICAgICByZ2JhKDEsIDY1LCAyNTUsIDApLFxcbiAgICAgIHJnYmEoMSwgNjUsIDI1NSwgMC4zKVxcbiAgICApO1xcblxcbiAgICAtLXRpbGUtc3RhcnQtcmdiOiAyLCAxMywgNDY7XFxuICAgIC0tdGlsZS1lbmQtcmdiOiAyLCA1LCAxOTtcXG4gICAgLS10aWxlLWJvcmRlcjogY29uaWMtZ3JhZGllbnQoXFxuICAgICAgI2ZmZmZmZjgwLFxcbiAgICAgICNmZmZmZmY0MCxcXG4gICAgICAjZmZmZmZmMzAsXFxuICAgICAgI2ZmZmZmZjIwLFxcbiAgICAgICNmZmZmZmYxMCxcXG4gICAgICAjZmZmZmZmMTAsXFxuICAgICAgI2ZmZmZmZjgwXFxuICAgICk7XFxuXFxuICAgIC0tY2FsbG91dC1yZ2I6IDIwLCAyMCwgMjA7XFxuICAgIC0tY2FsbG91dC1ib3JkZXItcmdiOiAxMDgsIDEwOCwgMTA4O1xcbiAgICAtLWNhcmQtcmdiOiAxMDAsIDEwMCwgMTAwO1xcbiAgICAtLWNhcmQtYm9yZGVyLXJnYjogMjAwLCAyMDAsIDIwMDtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IHJnYih2YXIoLS1mb3JlZ3JvdW5kLXJnYikpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIHRvIGJvdHRvbSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1lbmQtcmdiKSlcXG4gICAgKVxcbiAgICByZ2IodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpKTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG59ICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[11].use[2]!./src/styles/globals.css\n"));

/***/ })

});