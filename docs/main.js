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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#main-div {\n  background: #f6f6f6;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#list-container {\n  width: 500px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  padding-right: 30px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n#refresh-img {\n  width: 15px;\n  height: 15px;\n}\n\n#return-img {\n  width: 15px;\n  height: 15px;\n}\n\n#options-img {\n  width: 15px;\n  height: 15px;\n}\n\n.list-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: solid 1px #f6f6f6;\n}\n\n#list-items-div {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n#add-to-list-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n#list-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n#add-item-input {\n  width: 90%;\n  font-size: 18px;\n  border: none;\n}\n\n#add-item-input:focus {\n  color: black;\n  outline: none;\n}\n\n#list-footer-div {\n  color: grey;\n}\n\n#list-footer-div h4 {\n  color: red;\n  border: grey solid 1px;\n  padding: 2px;\n}\n\n#list-footer-div h4:hover {\n  color: white;\n  background-color: red;\n}\n\n.edit-input {\n  width: 500px;\n  border: none;\n  outline: none;\n  font-size: inherit;\n}\n\n.strikethrough {\n  text-decoration: line-through;\n  color: blue;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-starter/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-starter/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-starter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _imgs_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/refresh.png */ \"./src/imgs/refresh.png\");\n/* harmony import */ var _imgs_diskette_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/diskette.png */ \"./src/imgs/diskette.png\");\n/* harmony import */ var _modules_todoItems_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todoItems.js */ \"./src/modules/todoItems.js\");\n/* harmony import */ var _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domManipulation.js */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _modules_generateList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/generateList.js */ \"./src/modules/generateList.js\");\n/* harmony import */ var _modules_addItems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/addItems.js */ \"./src/modules/addItems.js\");\n/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/clearCompleted.js */ \"./src/modules/clearCompleted.js\");\n\n\n\n\n\n\n\n\n\nconst createComponent = () => {\n  const listContainer = document.getElementById('list-container');\n  const listTitleDiv = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createDiv('list-title-div');\n  const listFooterDiv = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createDiv('list-footer-div');\n  const addToListDiv = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createDiv('add-to-list-div');\n  const listItemsDiv = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createDiv('list-items-div');\n  const addItemInput = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createInput('add-item-input', 'text', 'Add to your list...');\n  const listTitle = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createHeading(\"Today's To Do\");\n  const listFooter = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createHeading('Clear all completed');\n  const refreshIcon = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createImage('refresh-img', _imgs_refresh_png__WEBPACK_IMPORTED_MODULE_1__);\n  const returnIcon = _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.createImage('return-img', _imgs_diskette_png__WEBPACK_IMPORTED_MODULE_2__);\n\n  const todoItems = (0,_modules_todoItems_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  (0,_modules_generateList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todoItems, listItemsDiv);\n\n  _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.appendChildren(listTitleDiv, listTitle, refreshIcon);\n  _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.appendChildren(addToListDiv, addItemInput, returnIcon);\n  _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.appendChildren(listFooterDiv, listFooter);\n  _modules_domManipulation_js__WEBPACK_IMPORTED_MODULE_4__.appendChildren(listContainer, listTitleDiv, addToListDiv, listItemsDiv, listFooterDiv);\n\n  returnIcon.addEventListener('click', () => (0,_modules_addItems_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(todoItems, listItemsDiv));\n\n  addItemInput.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n      (0,_modules_addItems_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(todoItems, listItemsDiv);\n    }\n  });\n\n  listFooter.addEventListener('click', () => {\n    (0,_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n  });\n};\n\ncreateComponent();\n\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./src/modules/addItems.js":
/*!*********************************!*\
  !*** ./src/modules/addItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateList.js */ \"./src/modules/generateList.js\");\n\n\nconst addItems = (items, listItemsDiv) => {\n  const addItemInput = document.getElementById('add-item-input');\n\n  if (addItemInput.value) {\n    const newItem = {\n      description: addItemInput.value,\n      complete: false,\n      index: items.length + 1,\n    };\n\n    items.push(newItem);\n\n    localStorage.setItem('todoItemsData', JSON.stringify(items));\n\n    (0,_generateList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items, listItemsDiv);\n\n    addItemInput.value = '';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItems);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/addItems.js?");

/***/ }),

/***/ "./src/modules/checkItem.js":
/*!**********************************!*\
  !*** ./src/modules/checkItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkItem = (item, items) => {\n  if (item.complete) {\n    item.complete = false;\n  } else {\n    item.complete = true;\n  }\n\n  localStorage.setItem('todoItemsData', JSON.stringify(items));\n  return items;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkItem);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/checkItem.js?");

/***/ }),

/***/ "./src/modules/clearCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/clearCompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generateList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateList.js */ \"./src/modules/generateList.js\");\n/* harmony import */ var _todoItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItems.js */ \"./src/modules/todoItems.js\");\n\n\n\nconst clearCompleted = () => {\n  const items = (0,_todoItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const filteredItems = items.filter((item) => item.complete === false);\n  localStorage.setItem('todoItemsData', JSON.stringify(filteredItems));\n\n  const listItemsDiv = document.getElementById('list-items-div');\n  (0,_generateList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(filteredItems, listItemsDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/clearCompleted.js?");

/***/ }),

/***/ "./src/modules/domManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/domManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendChildren: () => (/* binding */ appendChildren),\n/* harmony export */   createCheckbox: () => (/* binding */ createCheckbox),\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createHeading: () => (/* binding */ createHeading),\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   createInput: () => (/* binding */ createInput),\n/* harmony export */   createParagraph: () => (/* binding */ createParagraph)\n/* harmony export */ });\nconst createDiv = (id) => {\n  const div = document.createElement('div');\n  div.id = id;\n  return div;\n};\n\nconst createInput = (id, type, placeholder) => {\n  const input = document.createElement('input');\n  input.id = id;\n  input.type = type;\n  input.placeholder = placeholder;\n  return input;\n};\n\nconst createHeading = (text) => {\n  const heading = document.createElement('h4');\n  heading.textContent = text;\n  return heading;\n};\n\nconst createImage = (id, src) => {\n  const image = document.createElement('img');\n  image.id = id;\n  image.src = src;\n  return image;\n};\n\nconst createCheckbox = () => {\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  return checkbox;\n};\n\nconst createParagraph = (text) => {\n  const paragraph = document.createElement('p');\n  paragraph.textContent = text;\n  return paragraph;\n};\n\nconst appendChildren = (parent, ...children) => {\n  children.forEach((child) => parent.appendChild(child));\n};\n\n//# sourceURL=webpack://webpack-starter/./src/modules/domManipulation.js?");

/***/ }),

/***/ "./src/modules/editItem.js":
/*!*********************************!*\
  !*** ./src/modules/editItem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst editItem = (item, newDescription, items) => {\n  item.description = newDescription;\n  return items;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editItem);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/editItem.js?");

/***/ }),

/***/ "./src/modules/generateList.js":
/*!*************************************!*\
  !*** ./src/modules/generateList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation.js */ \"./src/modules/domManipulation.js\");\n/* harmony import */ var _imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/delete.png */ \"./src/imgs/delete.png\");\n/* harmony import */ var _removeItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeItems.js */ \"./src/modules/removeItems.js\");\n/* harmony import */ var _editItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editItem.js */ \"./src/modules/editItem.js\");\n/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkItem.js */ \"./src/modules/checkItem.js\");\n\n\n\n\n\n\nconst generateList = (items, listItemsDiv) => {\n  listItemsDiv.innerHTML = '';\n\n  items.forEach((item) => {\n    const listItem = document.createElement('li');\n    listItem.className = 'list-item';\n    const listItemCheck = _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createCheckbox();\n    const descriptionInput = document.createElement('input');\n    descriptionInput.type = 'text';\n    const itemIndex = _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createParagraph(`${item.index}.`);\n    descriptionInput.value = item.description;\n    descriptionInput.className = 'edit-input';\n    const deleteIcon = _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.createImage('options-img', _imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__);\n\n    if (item.complete) {\n      descriptionInput.classList.add('strikethrough');\n    } else {\n      descriptionInput.classList.remove('strikethrough');\n    }\n\n    _domManipulation_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren(listItem, listItemCheck, itemIndex, descriptionInput, deleteIcon);\n    listItemsDiv.appendChild(listItem);\n\n    deleteIcon.addEventListener('click', () => {\n      (0,_removeItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.index - 1, items);\n      generateList(items, listItemsDiv);\n    });\n\n    descriptionInput.addEventListener('click', (event) => {\n      event.stopPropagation();\n    });\n\n    descriptionInput.addEventListener('blur', () => {\n      (0,_editItem_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(item, descriptionInput.value, items);\n      localStorage.setItem('todoItemsData', JSON.stringify(items));\n      generateList(items, listItemsDiv);\n    });\n\n    listItemCheck.addEventListener('click', () => {\n      (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(item, items, descriptionInput);\n      generateList(items, listItemsDiv);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateList);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/generateList.js?");

/***/ }),

/***/ "./src/modules/removeItems.js":
/*!************************************!*\
  !*** ./src/modules/removeItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeItems = (indexToRemove, itemsArray) => {\n  if (indexToRemove >= 0 && indexToRemove < itemsArray.length) {\n    itemsArray[indexToRemove].complete = false;\n\n    for (let i = indexToRemove + 1; i < itemsArray.length; i += 1) {\n      itemsArray[i].index = i;\n    }\n\n    itemsArray.splice(indexToRemove, 1);\n\n    localStorage.setItem('todoItemsData', JSON.stringify(itemsArray));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeItems);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/removeItems.js?");

/***/ }),

/***/ "./src/modules/todoItems.js":
/*!**********************************!*\
  !*** ./src/modules/todoItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getStoredTodoItems = () => {\n  const storedToDoItemsJSON = localStorage.getItem('todoItemsData');\n\n  if (storedToDoItemsJSON !== null) {\n    const storedToDoItems = JSON.parse(storedToDoItemsJSON);\n    return storedToDoItems;\n  }\n  return [];\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStoredTodoItems);\n\n\n//# sourceURL=webpack://webpack-starter/./src/modules/todoItems.js?");

/***/ }),

/***/ "./src/imgs/delete.png":
/*!*****************************!*\
  !*** ./src/imgs/delete.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce1f523c16f7af7ecc0.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/imgs/delete.png?");

/***/ }),

/***/ "./src/imgs/diskette.png":
/*!*******************************!*\
  !*** ./src/imgs/diskette.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b3b344faf03b154e316b.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/imgs/diskette.png?");

/***/ }),

/***/ "./src/imgs/refresh.png":
/*!******************************!*\
  !*** ./src/imgs/refresh.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d2c6e57a9a230291813.png\";\n\n//# sourceURL=webpack://webpack-starter/./src/imgs/refresh.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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