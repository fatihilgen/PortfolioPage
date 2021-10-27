/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("// const exports = require(\"webpack\");\r\n\r\n// const deneme =()=>{\r\n//     console.log(\"deneme\");\r\n// }\r\n\r\n// export {\r\n//     deneme\r\n// }\n\n//# sourceURL=webpack://app/./js/app.js?");

/***/ }),

/***/ "./js/initApp.js":
/*!***********************!*\
  !*** ./js/initApp.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/comment */ \"./js/modules/comment.js\");\n\r\n\r\n\r\n$(function(){\r\n    (0,_modules_comment__WEBPACK_IMPORTED_MODULE_0__.deleteComment)();\r\n    (0,_modules_comment__WEBPACK_IMPORTED_MODULE_0__.addComment)();\r\n    (0,_modules_comment__WEBPACK_IMPORTED_MODULE_0__.loadComment)();\r\n    (0,_modules_comment__WEBPACK_IMPORTED_MODULE_0__.collapse)();\r\n})\r\n\n\n//# sourceURL=webpack://app/./js/initApp.js?");

/***/ }),

/***/ "./js/modules/comment.js":
/*!*******************************!*\
  !*** ./js/modules/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteComment\": () => (/* binding */ deleteComment),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"loadComment\": () => (/* binding */ loadComment),\n/* harmony export */   \"collapse\": () => (/* binding */ collapse)\n/* harmony export */ });\nconst temp={\r\n    deleteButton:\".remove_comment\",\r\n    name:\"#name\",\r\n    email:\"#email\",\r\n    sendComment:\"#sendComment\",\r\n    comment:\"#comment\",\r\n    commentForm :\"#commentForm\"\r\n    \r\n}\r\n\r\nconst deleteComment =()=>{\r\n    $(temp.deleteButton).on(\"click\",function(e){\r\n        $(this).parents(\".comment\").first().remove();\r\n    })\r\n}\r\n\r\nconst addComment=()=>{\r\n    $(temp.sendComment).on(\"click\",function(e){\r\n        var form = $(temp.commentForm)[0];\r\n        var isValid =form.checkValidity();\r\n        var currentDate = new Date();\r\n        var now =currentDate.getDate()+'/'+(currentDate.getMonth()+1)+'/'+currentDate.getFullYear() +' '+currentDate.getHours()+':'+currentDate.getMinutes();\r\n\r\n        var adSoyad=$(document).find(temp.name);\r\n        var mail=$(document).find(temp.email);\r\n        var yorum=$(document).find(temp.comment);\r\n        console.log(isValid);\r\n        if(isValid){\r\n            var item =\r\n            `\r\n            <div class=\"comment\">\r\n                <ul class=\"timeline\">\r\n                    <li class=\"timeline-item\">\r\n                        <div class=\"timeline-arrow\"></div>\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <div class=\"row \">\r\n                                    <div class=\"col-md-4 col-sm-3\">\r\n                                        <span class=\"kisi fa fa-user pull-left\">&numsp;\r\n                                            ${adSoyad.val()}\r\n                                        </span>    \r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-sm-7 \">\r\n                                        <span class=\"email fa fa-envelope pull-left\">&numsp;\r\n                                            ${mail.val()}\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-2 col-sm-2\">\r\n                                        <button  class=\" remove_comment btn btn-danger btn-sm pull-right\"><i class=\"fa fa-trash\"></i></button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-body\">\r\n                                ${yorum.val()}\r\n                            </div>\r\n                            <div class=\"card-footer text-muted \">\r\n                                <label class=\"pull-right fa fa-clock-o\">&numsp;${now}</label>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                </ul>                    \r\n            </div>\r\n            `;\r\n            $(document).find(\".yorum_list\").append(item)\r\n            $(\".yorum_list\").scrollTop($(document).height())\r\n            adSoyad.val('');\r\n            mail.val('');\r\n            yorum.val('');\r\n            form.classList.remove(\"was-validated\");\r\n        }else{\r\n            form.classList.add('was-validated');\r\n        }\r\n\r\n        deleteComment();\r\n    })\r\n}\r\n\r\nconst loadComment=()=>{ //document ready olunca bir kaynaktan yorumların alınması gerekiyor.\r\n    $(document).ready(function(e){\r\n        console.log(\"document is ready\");\r\n        $.ajax({\r\n            method:\"GET\",\r\n            url:$(\".yorum_list\").data(\"url\"),\r\n            success:function(data){\r\n                console.log(data.comments[1]);\r\n                console.log(data.comments.length);\r\n                for(var i =0; i<data.comments.length;i++){\r\n                    var item =\r\n                        `\r\n                        <div class=\"comment\">\r\n                            <ul class=\"timeline\">\r\n                                <li class=\"timeline-item\">\r\n                                    <div class=\"timeline-arrow\"></div>\r\n                                    <div class=\"card\">\r\n                                        <div class=\"card-header\">\r\n                                            <div class=\"row \">\r\n                                                <div class=\"col-md-4 col-sm-3\">\r\n                                                    <span class=\"kisi fa fa-user pull-left\">&numsp;\r\n                                                        ${data.comments[i].name}\r\n                                                    </span>    \r\n                                                </div>\r\n                                                <div class=\"col-md-6 col-sm-7\">\r\n                                                    <span class=\"email fa fa-envelope pull-left\">&numsp;\r\n                                                        ${data.comments[i].mail}\r\n                                                    </span>\r\n                                                </div>\r\n                                                <div class=\"col-md-2 col-sm-2\">\r\n                                                    <button  class=\" remove_comment btn btn-danger btn-sm pull-right\"><i class=\"fa fa-trash\"></i></button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card-body\">\r\n                                            ${data.comments[i].comment}\r\n                                        </div>\r\n                                        <div class=\"card-footer text-muted \">\r\n                                            <label class=\"pull-right fa fa-clock-o\"> &numsp; ${data.comments[i].date}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>                    \r\n                        </div>\r\n                        `;\r\n                        $(document).find(\".yorum_list\").append(item)\r\n                }\r\n                deleteComment();\r\n            }\r\n            \r\n        })\r\n    })\r\n}\r\nconst collapse =()=>{\r\n    $(document).on(\"click\",function(){\r\n        if($(document).find(\"#navbarText\").hasClass(\"show\")){\r\n            $(document).find(\"#navbarText\").removeClass(\"show\")\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://app/./js/modules/comment.js?");

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
/******/ 	__webpack_require__("./js/initApp.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;