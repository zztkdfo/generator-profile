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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"editor\"); // 'editor' 또는 'preview'\n    // ... menuItems 코드는 그대로 유지 ...\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-gradient-to-r from-purple-600 to-blue-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold text-center text-white py-3\",\n                            children: \"마크다운 프로필 생성기\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex space-x-1 px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setActiveTab(\"editor\"),\n                                    className: \"px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200\\n                \".concat(activeTab === \"editor\" ? \"bg-gray-50 text-gray-800\" : \"bg-transparent text-white hover:bg-white/10\"),\n                                    children: \"에디터\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setActiveTab(\"preview\"),\n                                    className: \"px-4 py-2 rounded-t-lg text-sm font-medium transition-colors duration-200\\n                \".concat(activeTab === \"preview\" ? \"bg-gray-50 text-gray-800\" : \"bg-transparent text-white hover:bg-white/10\"),\n                                    children: \"프리뷰\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-grow\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors duration-200\",\n                                    onClick: ()=>{\n                                    /* 복사 기능 구현 예정 */ },\n                                    children: \"복사하기\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-white text-purple-600 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200\",\n                                    onClick: ()=>{\n                                    /* 다운로드 기능 구현 예정 */ },\n                                    children: \"다운로드\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4 flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3 bg-white rounded-lg shadow-lg p-4 \".concat(activeTab === \"preview\" ? \"hidden md:block\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 bg-white rounded-lg shadow-lg p-4 \".concat(activeTab === \"editor\" ? \"hidden md:block\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"dbNXZMfWK5guhGnXa90QXaWo8xc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTSxDQUFDSSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDLFdBQVcsd0JBQXdCO0lBRTlFLCtCQUErQjtJQUUvQixxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOzBCQUNoQiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBaUQ7Ozs7OztzQ0FJL0QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQ0NDLFNBQVMsSUFBTU4sYUFBYTtvQ0FDNUJFLFdBQVcsOEZBS1IsT0FIQ0gsY0FBYyxXQUNWLDZCQUNBOzhDQUVUOzs7Ozs7OENBR0QsOERBQUNNO29DQUNDQyxTQUFTLElBQU1OLGFBQWE7b0NBQzVCRSxXQUFXLDhGQUtSLE9BSENILGNBQWMsWUFDViw2QkFDQTs4Q0FFVDs7Ozs7OzhDQUdELDhEQUFDRTtvQ0FBSUMsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRztvQ0FDQ0gsV0FBVTtvQ0FDVkksU0FBUztvQ0FDUCxlQUFlLEdBQ2pCOzhDQUNEOzs7Ozs7OENBR0QsOERBQUNEO29DQUNDSCxXQUFVO29DQUNWSSxTQUFTO29DQUNQLGlCQUFpQixHQUNuQjs4Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT1AsOERBQUNMO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQ0NDLFdBQVcsMkNBRVYsT0FEQ0gsY0FBYyxZQUFZLG9CQUFvQjs7Ozs7O2tDQU1sRCw4REFBQ0U7d0JBQ0NDLFdBQVcsMkNBRVYsT0FEQ0gsY0FBYyxXQUFXLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpEO0dBOUV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIkM6XFxkZXZcXGdlbmVyYXRvci1wcm9maWxlXFxhcHBcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcImVkaXRvclwiKTsgLy8gJ2VkaXRvcicg65iQ64qUICdwcmV2aWV3J1xuXG4gIC8vIC4uLiBtZW51SXRlbXMg7L2U65Oc64qUIOq3uOuMgOuhnCDsnKDsp4AgLi4uXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1zY3JlZW4gYmctZ3JheS01MFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tcHVycGxlLTYwMCB0by1ibHVlLTUwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHB5LTNcIj5cbiAgICAgICAgICAgIOuniO2BrOuLpOyatCDtlITroZztlYQg7IOd7ISx6riwXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICB7Lyog66mU64m067CUIOy2lOqwgCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0xIHB4LTRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKFwiZWRpdG9yXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC10LWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJlZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctZ3JheS01MCB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUvMTBcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDsl5DrlJTthLBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJwcmV2aWV3XCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZC10LWxnIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwXG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJwcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWdyYXktNTAgdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg7ZSE66as67ewXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwIHJvdW5kZWQtbGcgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgLyog67O17IKsIOq4sOuKpSDqtaztmIQg7JiI7KCVICovXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOuzteyCrO2VmOq4sFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy13aGl0ZSB0ZXh0LXB1cnBsZS02MDAgcm91bmRlZC1sZyB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAvKiDri6TsmrTroZzrk5wg6riw64qlIOq1rO2YhCDsmIjsoJUgKi9cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg64uk7Jq066Gc65OcXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTQgZmxleCBnYXAtNFwiPlxuICAgICAgICB7Lyog66qo67CU7J287JeQ7ISc64qUIO2DreyXkCDrlLDrnbwg67O07Jes7KeIIOy7qO2FkOy4oCAqL31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHctMS8zIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNCAke1xuICAgICAgICAgICAgYWN0aXZlVGFiID09PSBcInByZXZpZXdcIiA/IFwiaGlkZGVuIG1kOmJsb2NrXCIgOiBcIlwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7Lyog6riw7KG0IOyZvOyqvSDtjKjrhJAg64K07JqpICovfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgdy0yLzMgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC00ICR7XG4gICAgICAgICAgICBhY3RpdmVUYWIgPT09IFwiZWRpdG9yXCIgPyBcImhpZGRlbiBtZDpibG9ja1wiIDogXCJcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIOq4sOyhtCDsmKTrpbjsqr0g7Yyo64SQIOuCtOyaqSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});