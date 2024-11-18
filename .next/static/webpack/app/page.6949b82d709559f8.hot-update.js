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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isMenuCollapsed, setIsMenuCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuItems = [\n        {\n            title: \"프로필\",\n            items: [\n                \"기본 정보\",\n                \"소개\",\n                \"연락처\"\n            ]\n        },\n        {\n            title: \"스킬\",\n            items: [\n                \"언어\",\n                \"프레임워크\",\n                \"도구\"\n            ]\n        },\n        {\n            title: \"프로젝트\",\n            items: [\n                \"주요 프로젝트\",\n                \"기여\",\n                \"저장소\"\n            ]\n        }\n    ];\n    const toggleMenu = (title)=>{\n        setActiveMenu(activeMenu === title ? null : title);\n    };\n    const toggleCollapse = ()=>{\n        setIsMenuCollapsed(!isMenuCollapsed);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(isMenuCollapsed ? \"w-16\" : \"w-64\", \" bg-white shadow-lg transition-all duration-300\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleCollapse,\n                            className: \"w-full flex justify-end mb-4 text-gray-500 hover:text-gray-700\",\n                            children: isMenuCollapsed ? \"▶\" : \"◀\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        !isMenuCollapsed && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold text-gray-800 mb-4\",\n                            children: \"프로필 생성기\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"space-y-2\",\n                            children: menuItems.map((section)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border rounded-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>toggleMenu(section.title),\n                                            className: \"w-full p-3 text-left hover:bg-gray-50 flex justify-between items-center\",\n                                            children: isMenuCollapsed ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"mx-auto\",\n                                                children: section.title.charAt(0)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 21\n                                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: section.title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: activeMenu === section.title ? \"▼\" : \"▶\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this),\n                                        !isMenuCollapsed && activeMenu === section.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"bg-gray-50 p-2\",\n                                            children: section.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md\",\n                                                    children: item\n                                                }, item, false, {\n                                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 23\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, section.title, true, {\n                                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-4rem)]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: \"콘텐츠 영역\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PyKDTOznvbvjl8s+fMbnUmgw1hc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFPbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTSxDQUFDSSxpQkFBaUJDLG1CQUFtQixHQUFHTCwrQ0FBUUEsQ0FBVTtJQUVoRSxNQUFNTSxZQUF1QjtRQUMzQjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQVM7Z0JBQU07YUFBTTtRQUMvQjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsT0FBTztnQkFBQztnQkFBTTtnQkFBUzthQUFLO1FBQzlCO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxPQUFPO2dCQUFDO2dCQUFXO2dCQUFNO2FBQU07UUFDakM7S0FDRDtJQUVELE1BQU1DLGFBQWEsQ0FBQ0Y7UUFDbEJKLGNBQWNELGVBQWVLLFFBQVEsT0FBT0E7SUFDOUM7SUFFQSxNQUFNRyxpQkFBaUI7UUFDckJMLG1CQUFtQixDQUFDRDtJQUN0QjtJQUVBLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQ0NDLFdBQVcsR0FFVixPQURDUixrQkFBa0IsU0FBUyxRQUM1QjswQkFFRCw0RUFBQ087b0JBQUlDLFdBQVU7O3NDQUViLDhEQUFDQzs0QkFDQ0MsU0FBU0o7NEJBQ1RFLFdBQVU7c0NBRVRSLGtCQUFrQixNQUFNOzs7Ozs7d0JBRzFCLENBQUNBLGlDQUNBLDhEQUFDVzs0QkFBR0gsV0FBVTtzQ0FBdUM7Ozs7OztzQ0FLdkQsOERBQUNJOzRCQUFJSixXQUFVO3NDQUNaTixVQUFVVyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2QsOERBQUNQO29DQUF3QkMsV0FBVTs7c0RBQ2pDLDhEQUFDQzs0Q0FDQ0MsU0FBUyxJQUFNTCxXQUFXUyxRQUFRWCxLQUFLOzRDQUN2Q0ssV0FBVTtzREFFVFIsZ0NBQ0MsOERBQUNlO2dEQUFLUCxXQUFVOzBEQUFXTSxRQUFRWCxLQUFLLENBQUNhLE1BQU0sQ0FBQzs7Ozs7cUVBRWhEOztrRUFDRSw4REFBQ0Q7a0VBQU1ELFFBQVFYLEtBQUs7Ozs7OztrRUFDcEIsOERBQUNZO2tFQUFNakIsZUFBZWdCLFFBQVFYLEtBQUssR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7O3dDQUlqRCxDQUFDSCxtQkFBbUJGLGVBQWVnQixRQUFRWCxLQUFLLGtCQUMvQyw4REFBQ0k7NENBQUlDLFdBQVU7c0RBQ1pNLFFBQVFWLEtBQUssQ0FBQ1MsR0FBRyxDQUFDLENBQUNJLHFCQUNsQiw4REFBQ1Y7b0RBRUNDLFdBQVU7OERBRVRTO21EQUhJQTs7Ozs7Ozs7Ozs7bUNBbEJMSCxRQUFRWCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBaUMvQiw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDVTt3QkFBR1YsV0FBVTtrQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakQ7R0E3RndCWDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXGRldlxcZ2VuZXJhdG9yLXByb2ZpbGVcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTWVudUl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNNZW51Q29sbGFwc2VkLCBzZXRJc01lbnVDb2xsYXBzZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IG1lbnVJdGVtczogTWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIu2UhOuhnO2VhFwiLFxuICAgICAgaXRlbXM6IFtcIuq4sOuzuCDsoJXrs7RcIiwgXCLshozqsJxcIiwgXCLsl7Drnb3ssphcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLsiqTtgqxcIixcbiAgICAgIGl0ZW1zOiBbXCLslrjslrRcIiwgXCLtlITroIjsnoTsm4ztgaxcIiwgXCLrj4TqtaxcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLtlITroZzsoJ3tirhcIixcbiAgICAgIGl0ZW1zOiBbXCLso7zsmpQg7ZSE66Gc7KCd7Yq4XCIsIFwi6riw7JesXCIsIFwi7KCA7J6l7IaMXCJdLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICh0aXRsZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgc2V0QWN0aXZlTWVudShhY3RpdmVNZW51ID09PSB0aXRsZSA/IG51bGwgOiB0aXRsZSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ29sbGFwc2UgPSAoKTogdm9pZCA9PiB7XG4gICAgc2V0SXNNZW51Q29sbGFwc2VkKCFpc01lbnVDb2xsYXBzZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMFwiPlxuICAgICAgey8qIOyZvOyqvSDrqZTribQg7Yyo64SQICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGlzTWVudUNvbGxhcHNlZCA/IFwidy0xNlwiIDogXCJ3LTY0XCJcbiAgICAgICAgfSBiZy13aGl0ZSBzaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwYH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICB7Lyog66mU64m0IOygkeq4sC/tjrzsuZjquLAg67KE7Yq8ICovfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1lbmQgbWItNCB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc01lbnVDb2xsYXBzZWQgPyBcIuKWtlwiIDogXCLil4BcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHshaXNNZW51Q29sbGFwc2VkICYmIChcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIG1iLTRcIj5cbiAgICAgICAgICAgICAg7ZSE66Gc7ZWEIOyDneyEseq4sFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChzZWN0aW9uOiBNZW51SXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17c2VjdGlvbi50aXRsZX0gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVNZW51KHNlY3Rpb24udGl0bGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyB0ZXh0LWxlZnQgaG92ZXI6YmctZ3JheS01MCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc01lbnVDb2xsYXBzZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LWF1dG9cIj57c2VjdGlvbi50aXRsZS5jaGFyQXQoMCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2VjdGlvbi50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2FjdGl2ZU1lbnUgPT09IHNlY3Rpb24udGl0bGUgPyBcIuKWvFwiIDogXCLilrZcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7IWlzTWVudUNvbGxhcHNlZCAmJiBhY3RpdmVNZW51ID09PSBzZWN0aW9uLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24uaXRlbXMubWFwKChpdGVtOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgaG92ZXI6YmctZ3JheS0xMDAgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIOyYpOuluOyqvSDsvZjthZDsuKAg7JiB7JetICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC02IG1pbi1oLVtjYWxjKDEwMHZoLTRyZW0pXVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+7L2Y7YWQ7LigIOyYgeyXrTwvaDI+XG4gICAgICAgICAgey8qIOyXrOq4sOyXkCDshKDtg53rkJwg66mU64m07JeQIOuUsOuluCDsvZjthZDsuKDqsIAg7ZGc7Iuc65CgIOyYiOyglSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsImlzTWVudUNvbGxhcHNlZCIsInNldElzTWVudUNvbGxhcHNlZCIsIm1lbnVJdGVtcyIsInRpdGxlIiwiaXRlbXMiLCJ0b2dnbGVNZW51IiwidG9nZ2xlQ29sbGFwc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJuYXYiLCJtYXAiLCJzZWN0aW9uIiwic3BhbiIsImNoYXJBdCIsIml0ZW0iLCJoMiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});