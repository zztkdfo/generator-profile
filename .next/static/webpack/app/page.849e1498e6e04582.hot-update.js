"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const menuItems = [\n        {\n            title: \"소개\",\n            items: [\n                \"인사말\",\n                \"자기소개\",\n                \"연락처\"\n            ]\n        },\n        {\n            title: \"기술 스택\",\n            items: [\n                \"프론트엔드\",\n                \"백엔드\",\n                \"데브옵스\"\n            ]\n        },\n        {\n            title: \"연결하기\",\n            items: [\n                \"소셜 미디어\",\n                \"깃허브\",\n                \"블로그\"\n            ]\n        },\n        {\n            title: \"통계\",\n            items: [\n                \"깃허브 통계\",\n                \"방문자 수\",\n                \"최근 활동\"\n            ]\n        }\n    ];\n    const toggleMenu = (title)=>{\n        setActiveMenu(activeMenu === title ? null : title);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold text-center\",\n                    children: \"마크다운 프로필 생성기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4 flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3 bg-white rounded-lg shadow-lg p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-gray-700\",\n                                children: \"섹션\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: menuItems.map((menu)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border rounded-lg overflow-hidden\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>toggleMenu(menu.title),\n                                                className: \"w-full p-3 text-left bg-white hover:bg-gray-50 flex justify-between items-center border-l-4 border-transparent hover:border-purple-500\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-medium text-gray-700\",\n                                                        children: menu.title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"transform transition-transform duration-200 text-gray-500\",\n                                                        children: activeMenu === menu.title ? \"▼\" : \"▶\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 55,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this),\n                                            activeMenu === menu.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-2 bg-gray-50\",\n                                                children: menu.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"p-2 hover:bg-white cursor-pointer rounded transition-colors duration-200 text-gray-600 hover:text-purple-600\",\n                                                        children: item\n                                                    }, item, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, menu.title, true, {\n                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 bg-white rounded-lg shadow-lg p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-gray-700\",\n                                children: \"프리뷰\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border rounded-lg p-4 min-h-[500px] bg-gray-50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MocqPnwFqSmp7lBJG379qjRmafg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFFNUQsTUFBTUksWUFBWTtRQUNoQjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQU87Z0JBQVE7YUFBTTtRQUMvQjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsT0FBTztnQkFBQztnQkFBUztnQkFBTzthQUFPO1FBQ2pDO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxPQUFPO2dCQUFDO2dCQUFVO2dCQUFPO2FBQU07UUFDakM7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQVU7Z0JBQVM7YUFBUTtRQUNyQztLQUNEO0lBRUQsTUFBTUMsYUFBYSxDQUFDRjtRQUNsQkYsY0FBY0QsZUFBZUcsUUFBUSxPQUFPQTtJQUM5QztJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRTtvQkFBR0YsV0FBVTs4QkFBaUM7Ozs7Ozs7Ozs7OzBCQUtqRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUFHSCxXQUFVOzBDQUF1Qzs7Ozs7OzBDQUNyRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ1pMLFVBQVVTLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ047d0NBRUNDLFdBQVU7OzBEQUVWLDhEQUFDTTtnREFDQ0MsU0FBUyxJQUFNVCxXQUFXTyxLQUFLVCxLQUFLO2dEQUNwQ0ksV0FBVTs7a0VBRVYsOERBQUNRO3dEQUFLUixXQUFVO2tFQUNiSyxLQUFLVCxLQUFLOzs7Ozs7a0VBRWIsOERBQUNZO3dEQUFLUixXQUFVO2tFQUNiUCxlQUFlWSxLQUFLVCxLQUFLLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7OzRDQUd0Q0gsZUFBZVksS0FBS1QsS0FBSyxrQkFDeEIsOERBQUNHO2dEQUFJQyxXQUFVOzBEQUNaSyxLQUFLUixLQUFLLENBQUNPLEdBQUcsQ0FBQyxDQUFDSyxxQkFDZiw4REFBQ1Y7d0RBRUNDLFdBQVU7a0VBRVRTO3VEQUhJQTs7Ozs7Ozs7Ozs7dUNBbEJSSixLQUFLVCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2tDQWdDdkIsOERBQUNHO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQXVDOzs7Ozs7MENBQ3JELDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0dBbEZ3QlI7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxkZXZcXGdlbmVyYXRvci1wcm9maWxlXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIuyGjOqwnFwiLFxuICAgICAgaXRlbXM6IFtcIuyduOyCrOunkFwiLCBcIuyekOq4sOyGjOqwnFwiLCBcIuyXsOudveyymFwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIuq4sOyIoCDsiqTtg51cIixcbiAgICAgIGl0ZW1zOiBbXCLtlITroaDtirjsl5Trk5xcIiwgXCLrsLHsl5Trk5xcIiwgXCLrjbDruIzsmLXsiqRcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLsl7DqsrDtlZjquLBcIixcbiAgICAgIGl0ZW1zOiBbXCLshozshZwg66+465SU7Ja0XCIsIFwi6rmD7ZeI67iMXCIsIFwi67iU66Gc6re4XCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi7Ya16rOEXCIsXG4gICAgICBpdGVtczogW1wi6rmD7ZeI67iMIO2GteqzhFwiLCBcIuuwqeusuOyekCDsiJhcIiwgXCLstZzqt7wg7Zmc64+ZXCJdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XG4gICAgc2V0QWN0aXZlTWVudShhY3RpdmVNZW51ID09PSB0aXRsZSA/IG51bGwgOiB0aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMCBwLTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAg66eI7YGs64uk7Jq0IO2UhOuhnO2VhCDsg53shLHquLBcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNCBmbGV4IGdhcC00XCI+XG4gICAgICAgIHsvKiDsmbzsqr0g7Yyo64SQIC0gVUkg7Lu07Y+s64SM7Yq4IOyYgeyXrSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNCB0ZXh0LWdyYXktNzAwXCI+7IS57IWYPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnUpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17bWVudS50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlTWVudShtZW51LnRpdGxlKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTMgdGV4dC1sZWZ0IGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktNTAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJvcmRlci1sLTQgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1wdXJwbGUtNTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHttZW51LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVNZW51ID09PSBtZW51LnRpdGxlID8gXCLilrxcIiA6IFwi4pa2XCJ9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAge2FjdGl2ZU1lbnUgPT09IG1lbnUudGl0bGUgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVudS5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgaG92ZXI6Ymctd2hpdGUgY3Vyc29yLXBvaW50ZXIgcm91bmRlZCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LXB1cnBsZS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiDsmKTrpbjsqr0g7Yyo64SQIC0g66eI7YGs64uk7Jq0IO2UhOumrOu3sCDsmIHsl60gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTQgdGV4dC1ncmF5LTcwMFwiPu2UhOumrOu3sDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1sZyBwLTQgbWluLWgtWzUwMHB4XSBiZy1ncmF5LTUwXCI+XG4gICAgICAgICAgICB7Lyog7Jes6riw7JeQIOuniO2BrOuLpOyatCDrs4DtmZgg6rKw6rO86rCAIOuTpOyWtOqwiCDsmIjsoJUgKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiLCJtZW51SXRlbXMiLCJ0aXRsZSIsIml0ZW1zIiwidG9nZ2xlTWVudSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiaDIiLCJtYXAiLCJtZW51IiwiYnV0dG9uIiwib25DbGljayIsInNwYW4iLCJpdGVtIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});