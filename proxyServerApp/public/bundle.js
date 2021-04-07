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

/***/ "./client/components/footerApp.jsx":
/*!*****************************************!*\
  !*** ./client/components/footerApp.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar FooterWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  background: #171a21;\\n  border-style: none;\\n  margin: 0px;\\n  padding: 0px;\\n  display:grid;\\n  width: 940;\\n  height: 230;\\n  grid-template-columns: 100px 750px 90px;\\n  gird-template-rows: 30px auto auto auto auto;\\n  justify-content: center;\\n\"])));\nvar EmptyRow = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  grid-column-start: 1;\\n  grid-row-start: 1;\\n  padding-top: 25px;\\n\"])));\nvar FooterFirstRow = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  grid-column-start: 1;\\n  grid-row-start: 2;\\n  display: flex;\\n  grid-column-end: span 2;\\n  padding-bottom: 25px;\\n\\n\\n\"])));\nvar AboutSteam = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  background-color: rgb(64, 100, 126)\\n  padding: 0 15px;\\n  font-size: 12px;\\n  line-height: 20px;\\n  border-radius: 2px;\\n  display: block;\\n  color: #969eab !important;\\n  cursor: pointer;\\n  padding-right: 10px;\\n\"])));\nvar AboutValve = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\nbackground-color: rgb(64, 100, 126)\\n  padding: 0 15px;\\n  font-size: 12px;\\n  line-height: 20px;\\n  border-radius: 2px;\\n  display: block;\\n  color: #969eab !important;\\n  cursor: pointer;\\n  padding-right: 10px;\\n\"])));\nvar Help = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\nbackground-color: rgb(64, 100, 126)\\n  padding: 0 15px;\\n  font-size: 12px;\\n  line-height: 20px;\\n  border-radius: 2px;\\n  display: block;\\n  color: #969eab !important;\\n  cursor: pointer;\\n  padding-right: 10px;\\n\"])));\nvar NewsFeeds = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\nbackground-color: rgb(64, 100, 126)\\n  padding: 0 15px;\\n  font-size: 12px;\\n  line-height: 20px;\\n  border-radius: 2px;\\n  display: block;\\n  color: #969eab !important;\\n  cursor: pointer;\\n  padding-right: 10px;\\n\"])));\nvar LegalText = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([\"\\n  grid-column-start: 2;\\n  grid-row-start: 3;\\n  color: #8F98A0;\\n    font-size: 12px;\\n    line-height: 16px;\\n\"])));\nvar ValveLogo = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([\"\\n  grid-column-start: 1;\\n  grid-row-start: 3;\\n  grid-row-end: span 2;\\n\"])));\nvar FooterRow = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([\"\\n  grid-column-start: 2;\\n  grid-row-start: 4;\\n  display: flex;\\n  grid-column-end: span 2;\\n\"])));\nvar PrivacyPolicy = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar PriceInfo = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([\"\\n  color: #8F98A0;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\\n\"])));\nvar Legal = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar SubInfo = styled.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar Refunds = styled.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar SteamLogoFooter = styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral([\"\\n  grid-column-start: 3;\\n  grid-row-start: 3;\\n  grid-row-end: span 2;\\n\"])));\nvar LastFooterRow = styled.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([\"\\n  grid-column-start: 1;\\n  grid-row-start: 5;\\n  display: flex;\\n  grid-column-end: span 2;\\n  padding-bottom: 50px;\\n  padding-top: 20px;\\n\"])));\nvar FooterAbout = styled.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar FooterSteamworks = styled.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar FooterJobs = styled.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar FooterDist = styled.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar FooterGiftCards = styled.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n  padding-right: 10px;\\n\"])));\nvar FBcontainer = styled.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  padding-right: 10px;\\n\"])));\nvar TwitterContainer = styled.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  padding-right: 10px;\\n\"])));\nvar FB = styled.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n\"])));\nvar Twitter = styled.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral([\"\\n  color: #C6D4DF;\\n  font-size: 12px;\\n  line-height: 16px;\\n\"])));\n\nvar FooterApp = function FooterApp(props) {\n  return /*#__PURE__*/React.createElement(FooterWrapper, null, /*#__PURE__*/React.createElement(EmptyRow, null, \"\\xA0\"), /*#__PURE__*/React.createElement(FooterFirstRow, null, /*#__PURE__*/React.createElement(AboutSteam, null, \"ABOUT STEAM\"), /*#__PURE__*/React.createElement(AboutValve, null, \"ABOUT VALVE\"), /*#__PURE__*/React.createElement(Help, null, \"HELP\"), /*#__PURE__*/React.createElement(NewsFeeds, null, \"NEWS FEEDS\")), /*#__PURE__*/React.createElement(LegalText, null, \"\\xA9 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.\"), /*#__PURE__*/React.createElement(ValveLogo, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/footerLogo_valve_new.png\",\n    height: \"25\",\n    width: \"88\"\n  })), /*#__PURE__*/React.createElement(FooterRow, null, /*#__PURE__*/React.createElement(PriceInfo, null, \"VAT included in all prices where applicable.\"), /*#__PURE__*/React.createElement(PrivacyPolicy, null, \"Privacy Policy\"), /*#__PURE__*/React.createElement(Legal, null, \"Legal\"), /*#__PURE__*/React.createElement(SubInfo, null, \"Steam Subscriber Agreement\"), /*#__PURE__*/React.createElement(Refunds, null, \"Refunds\")), /*#__PURE__*/React.createElement(SteamLogoFooter, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam_footer.png\"\n  })), /*#__PURE__*/React.createElement(LastFooterRow, null, /*#__PURE__*/React.createElement(FooterAbout, null, \"About Valve\"), /*#__PURE__*/React.createElement(FooterSteamworks, null, \"Steamworks\"), /*#__PURE__*/React.createElement(FooterJobs, null, \"Jobs\"), /*#__PURE__*/React.createElement(FooterDist, null, \"Steam Distribution\"), /*#__PURE__*/React.createElement(FooterGiftCards, null, \"Gift Cards\"), /*#__PURE__*/React.createElement(FBcontainer, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/ico_facebook.gif\"\n  }), /*#__PURE__*/React.createElement(FB, null, \"Steam\")), /*#__PURE__*/React.createElement(TwitterContainer, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/ico_twitter.gif\"\n  }), /*#__PURE__*/React.createElement(Twitter, null, \"@steam\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterApp);\n\n//# sourceURL=webpack://ProxyServerFEC/./client/components/footerApp.jsx?");

/***/ }),

/***/ "./client/components/headerApp.jsx":
/*!*****************************************!*\
  !*** ./client/components/headerApp.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar HeaderWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  background: #171a21;\\n  border-style: none;\\n  margin: 0px;\\n  padding: 0px;\\n  display:grid;\\n  width: 940;\\n  grid-template-columns: 700px 240px;\\n  gird-template-rows: 30px auto;\\n  justify-content: center;\\n\"])));\nvar Row1 = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  grid-column-start: 2;\\n  grid-row-start: 1;\\n  display: flex;\\n\"])));\nvar Row2 = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  grid-column-start: 1;\\n  grid-row-start: 2;\\n  display: flex;\\n  padding-bottom: 20px;\\n\"])));\nvar Install = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n      color: #e5e4dc;\\n    font-weight: normal;\\n  font-size: 11px;\\n  background-color: #5c7e10;\\n  padding-top: 5px;\\n  padding-bottom: 5px;\\n  padding-left: 10px;\\n  padding-right: 10px;\\n}\\n\\n\\n\"])));\nvar Login = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  color: #b8b6b4;\\n    font-size: 11px;\\n  padding-left: 10px;\\n  padding-top: 5px;\\n\\n\"])));\nvar Language = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  color: #b8b6b4;\\n    font-size: 11px;\\n    padding-left: 10px;\\n    padding-top: 5px;\\n\"])));\nvar Logo = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n\\n\"])));\nvar Store = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([\"\\n  font-size: 14px;\\n  color: #b8b6b4;\\n  text-transform: uppercase;\\n  padding-top: 17px;\\n  padding-left: 15px;\\n\\n\"])));\nvar Community = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral([\"\\n    font-size: 14px;\\n    color: #b8b6b4;\\n    text-transform: uppercase;\\n    padding-top: 17px;\\n    padding-left: 15px;\\n\"])));\nvar About = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([\"\\n      font-size: 14px;\\n    color: #b8b6b4;\\n    text-transform: uppercase;\\n    padding-top: 17px;\\n    padding-left: 15px;\\n\"])));\nvar Support = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([\"\\n    font-size: 14px;\\n    color: #b8b6b4;\\n    text-transform: uppercase;\\n    padding-top: 17px;\\n    padding-left: 15px;\\n\\n\"])));\n\nvar HeaderApp = function HeaderApp(props) {\n  return /*#__PURE__*/React.createElement(HeaderWrapper, null, /*#__PURE__*/React.createElement(Row1, null, /*#__PURE__*/React.createElement(Install, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/downloadIco.png\"\n  }), \"\\xA0\\xA0Install Steam\"), /*#__PURE__*/React.createElement(Login, null, \"login\"), /*#__PURE__*/React.createElement(\"div\", null, \"\\xA0|\\xA0\"), /*#__PURE__*/React.createElement(Language, null, \"language\")), /*#__PURE__*/React.createElement(Row2, null, /*#__PURE__*/React.createElement(Logo, null, /*#__PURE__*/React.createElement(\"img\", {\n    src: \"https://gifbucket.s3-us-west-1.amazonaws.com/logo_steam.svg\",\n    width: \"160\",\n    height: \"50\"\n  })), /*#__PURE__*/React.createElement(Store, null, \"Store\"), /*#__PURE__*/React.createElement(Community, null, \"Community\"), /*#__PURE__*/React.createElement(About, null, \"About\"), /*#__PURE__*/React.createElement(Support, null, \"Support\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderApp);\n\n//# sourceURL=webpack://ProxyServerFEC/./client/components/headerApp.jsx?");

/***/ }),

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_headerApp_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/headerApp.jsx */ \"./client/components/headerApp.jsx\");\n/* harmony import */ var _components_footerApp_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footerApp.jsx */ \"./client/components/footerApp.jsx\");\n\n\nconsole.log('running the proxy bundle');\nwindow.HeaderApp = _components_headerApp_jsx__WEBPACK_IMPORTED_MODULE_0__.default;\nwindow.FooterApp = _components_footerApp_jsx__WEBPACK_IMPORTED_MODULE_1__.default;\n\n//# sourceURL=webpack://ProxyServerFEC/./client/index.jsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/index.jsx");
/******/ 	
/******/ })()
;