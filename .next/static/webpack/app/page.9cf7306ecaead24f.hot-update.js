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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [activeMenu, setActiveMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const menuItems = [\n        {\n            title: \"소개\",\n            items: [\n                \"인사말\",\n                \"자기소개\",\n                \"연락처\"\n            ]\n        },\n        {\n            title: \"기술 스택\",\n            items: [\n                \"프론트엔드\",\n                \"백엔드\",\n                \"데브옵스\"\n            ]\n        },\n        {\n            title: \"연결하기\",\n            items: [\n                \"소셜 미디어\",\n                \"깃허브\",\n                \"블로그\"\n            ]\n        },\n        {\n            title: \"통계\",\n            items: [\n                \"깃허브 통계\",\n                \"방문자 수\",\n                \"최근 활동\"\n            ]\n        }\n    ];\n    const toggleMenu = (title)=>{\n        setActiveMenu(activeMenu === title ? null : title);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-screen bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: \"마크다운 프로필 생성기\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto p-4 flex gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3 bg-white rounded-lg shadow-lg p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-gray-700\",\n                                children: \"섹션\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: menuItems.map((menu)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"border rounded-lg overflow-hidden\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>toggleMenu(menu.title),\n                                                className: \"w-full p-3 text-left bg-white hover:bg-gray-50 flex justify-between items-center border-l-4 border-transparent hover:border-purple-500\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"font-medium text-gray-700\",\n                                                        children: menu.title\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"transform transition-transform duration-200 text-gray-500\",\n                                                        children: activeMenu === menu.title ? \"▼\" : \"▶\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, this),\n                                            activeMenu === menu.title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"p-2 bg-gray-50\",\n                                                children: menu.items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"p-2 hover:bg-white cursor-pointer rounded transition-colors duration-200 text-gray-600 hover:text-purple-600\",\n                                                        children: item\n                                                    }, item, false, {\n                                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, menu.title, true, {\n                                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-2/3 bg-white rounded-lg shadow-lg p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4 text-gray-700\",\n                                children: \"프리뷰\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border rounded-lg p-4 min-h-[500px] bg-gray-50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\dev\\\\generator-profile\\\\app\\\\page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"MocqPnwFqSmp7lBJG379qjRmafg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBZ0I7SUFFNUQsTUFBTUksWUFBWTtRQUNoQjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQU87Z0JBQVE7YUFBTTtRQUMvQjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsT0FBTztnQkFBQztnQkFBUztnQkFBTzthQUFPO1FBQ2pDO1FBQ0E7WUFDRUQsT0FBTztZQUNQQyxPQUFPO2dCQUFDO2dCQUFVO2dCQUFPO2FBQU07UUFDakM7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQVU7Z0JBQVM7YUFBUTtRQUNyQztLQUNEO0lBRUQsTUFBTUMsYUFBYSxDQUFDRjtRQUNsQkYsY0FBY0QsZUFBZUcsUUFBUSxPQUFPQTtJQUM5QztJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7MENBQXVDOzs7Ozs7MENBQ3JELDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWkwsVUFBVVEsR0FBRyxDQUFDLENBQUNDLHFCQUNkLDhEQUFDTDt3Q0FFQ0MsV0FBVTs7MERBRVYsOERBQUNLO2dEQUNDQyxTQUFTLElBQU1SLFdBQVdNLEtBQUtSLEtBQUs7Z0RBQ3BDSSxXQUFVOztrRUFFViw4REFBQ087d0RBQUtQLFdBQVU7a0VBQ2JJLEtBQUtSLEtBQUs7Ozs7OztrRUFFYiw4REFBQ1c7d0RBQUtQLFdBQVU7a0VBQ2JQLGVBQWVXLEtBQUtSLEtBQUssR0FBRyxNQUFNOzs7Ozs7Ozs7Ozs7NENBR3RDSCxlQUFlVyxLQUFLUixLQUFLLGtCQUN4Qiw4REFBQ0c7Z0RBQUlDLFdBQVU7MERBQ1pJLEtBQUtQLEtBQUssQ0FBQ00sR0FBRyxDQUFDLENBQUNLLHFCQUNmLDhEQUFDVDt3REFFQ0MsV0FBVTtrRUFFVFE7dURBSElBOzs7Ozs7Ozs7Ozt1Q0FsQlJKLEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBZ0N2Qiw4REFBQ0c7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBdUM7Ozs7OzswQ0FDckQsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekI7R0EvRXdCUjtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXGRldlxcZ2VuZXJhdG9yLXByb2ZpbGVcXGFwcFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwi7IaM6rCcXCIsXG4gICAgICBpdGVtczogW1wi7J247IKs66eQXCIsIFwi7J6Q6riw7IaM6rCcXCIsIFwi7Jew65297LKYXCJdLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwi6riw7IigIOyKpO2DnVwiLFxuICAgICAgaXRlbXM6IFtcIu2UhOuhoO2KuOyXlOuTnFwiLCBcIuuwseyXlOuTnFwiLCBcIuuNsOu4jOyYteyKpFwiXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIuyXsOqysO2VmOq4sFwiLFxuICAgICAgaXRlbXM6IFtcIuyGjOyFnCDrr7jrlJTslrRcIiwgXCLquYPtl4jruIxcIiwgXCLruJTroZzqt7hcIl0sXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCLthrXqs4RcIixcbiAgICAgIGl0ZW1zOiBbXCLquYPtl4jruIwg7Ya16rOEXCIsIFwi67Cp66y47J6QIOyImFwiLCBcIuy1nOq3vCDtmZzrj5lcIl0sXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcbiAgICBzZXRBY3RpdmVNZW51KGFjdGl2ZU1lbnUgPT09IHRpdGxlID8gbnVsbCA6IHRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTUwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBwLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPuuniO2BrOuLpOyatCDtlITroZztlYQg7IOd7ISx6riwPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBwLTQgZmxleCBnYXAtNFwiPlxuICAgICAgICB7Lyog7Jm87Kq9IO2MqOuEkCAtIFVJIOy7tO2PrOuEjO2KuCDsmIHsl60gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzMgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC00XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTQgdGV4dC1ncmF5LTcwMFwiPuyEueyFmDwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChtZW51KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e21lbnUudGl0bGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1lbnUobWVudS50aXRsZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zIHRleHQtbGVmdCBiZy13aGl0ZSBob3ZlcjpiZy1ncmF5LTUwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXItbC00IGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItcHVycGxlLTUwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVudS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlTWVudSA9PT0gbWVudS50aXRsZSA/IFwi4pa8XCIgOiBcIuKWtlwifVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHthY3RpdmVNZW51ID09PSBtZW51LnRpdGxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAge21lbnUuaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGhvdmVyOmJnLXdoaXRlIGN1cnNvci1wb2ludGVyIHJvdW5kZWQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1wdXJwbGUtNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7Lyog7Jik66W47Kq9IO2MqOuEkCAtIOuniO2BrOuLpOyatCDtlITrpqzrt7Ag7JiB7JetICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00IHRleHQtZ3JheS03MDBcIj7tlITrpqzrt7A8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgcC00IG1pbi1oLVs1MDBweF0gYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgey8qIOyXrOq4sOyXkCDrp4jtgazri6TsmrQg67OA7ZmYIOqysOqzvOqwgCDrk6TslrTqsIgg7JiI7KCVICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwibWVudUl0ZW1zIiwidGl0bGUiLCJpdGVtcyIsInRvZ2dsZU1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwibWVudSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiaXRlbSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});