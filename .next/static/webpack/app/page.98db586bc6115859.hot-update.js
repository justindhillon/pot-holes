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

/***/ "(app-pages-browser)/./components/ui/plusButton.tsx":
/*!**************************************!*\
  !*** ./components/ui/plusButton.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Minus,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Minus,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/minus.js\");\n// app/components/ui/plusButton.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst PlusButton = ()=>{\n    _s();\n    const [isClicked, setIsClicked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setIsClicked(true);\n    };\n    const handleReset = ()=>{\n        setIsClicked(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-x-0 bottom-0 p-4\",\n        children: !isClicked ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n            variant: \"primary\",\n            size: \"icon\",\n            className: \"bg-black text-white rounded-full w-full flex justify-center items-center\",\n            onClick: handleClick,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"w-6 h-6\"\n            }, void 0, false, {\n                fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n                lineNumber: 28,\n                columnNumber: 6\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black text-white w-full p-4 rounded-t-lg flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"primary\",\n                    className: \"flex-1 mr-2\",\n                    onClick: handlePlaceMarker,\n                    children: \"Place marker\"\n                }, void 0, false, {\n                    fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"secondary\",\n                    size: \"icon\",\n                    className: \"rounded-full\",\n                    onClick: handleReset,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Minus_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"w-6 h-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 6\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/plusButton.tsx\",\n        lineNumber: 20,\n        columnNumber: 3\n    }, undefined);\n};\n_s(PlusButton, \"+2jvnzgqyS4sm44z1s1whgWD4Tg=\");\n_c = PlusButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlusButton);\nvar _c;\n$RefreshReg$(_c, \"PlusButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvcGx1c0J1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG1DQUFtQzs7O0FBR0Y7QUFDZTtBQUNMO0FBRTNDLE1BQU1JLGFBQWE7O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNTyxjQUFjO1FBQ25CRCxhQUFhO0lBQ2Q7SUFFQSxNQUFNRSxjQUFjO1FBQ25CRixhQUFhO0lBQ2Q7SUFFQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYixDQUFDTCwwQkFDRCw4REFBQ0oseURBQU1BO1lBQ05VLFNBQVE7WUFDUkMsTUFBSztZQUNMRixXQUFVO1lBQ1ZHLFNBQVNOO3NCQUVULDRFQUFDTCxzRkFBSUE7Z0JBQUNRLFdBQVU7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDRDtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ1QseURBQU1BO29CQUNOVSxTQUFRO29CQUNSRCxXQUFVO29CQUNWRyxTQUFTQzs4QkFDVDs7Ozs7OzhCQUdELDhEQUFDYix5REFBTUE7b0JBQ05VLFNBQVE7b0JBQ1JDLE1BQUs7b0JBQ0xGLFdBQVU7b0JBQ1ZHLFNBQVNMOzhCQUVULDRFQUFDTCxzRkFBS0E7d0JBQUNPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0EzQ01OO0tBQUFBO0FBNkNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdWkvcGx1c0J1dHRvbi50c3g/Nzc3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAvY29tcG9uZW50cy91aS9wbHVzQnV0dG9uLnRzeFxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgUGx1cywgTWludXMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5cbmNvbnN0IFBsdXNCdXR0b24gPSAoKSA9PiB7XG5cdGNvbnN0IFtpc0NsaWNrZWQsIHNldElzQ2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0c2V0SXNDbGlja2VkKHRydWUpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuXHRcdHNldElzQ2xpY2tlZChmYWxzZSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCBib3R0b20tMCBwLTRcIj5cblx0XHRcdHshaXNDbGlja2VkID8gKFxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dmFyaWFudD1cInByaW1hcnlcIlxuXHRcdFx0XHRcdHNpemU9XCJpY29uXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFBsdXMgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB0ZXh0LXdoaXRlIHctZnVsbCBwLTQgcm91bmRlZC10LWxnIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJwcmltYXJ5XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXgtMSBtci0yXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVBsYWNlTWFya2VyfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFBsYWNlIG1hcmtlclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0c2l6ZT1cImljb25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxNaW51cyBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGx1c0J1dHRvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlBsdXMiLCJNaW51cyIsIlBsdXNCdXR0b24iLCJpc0NsaWNrZWQiLCJzZXRJc0NsaWNrZWQiLCJoYW5kbGVDbGljayIsImhhbmRsZVJlc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInNpemUiLCJvbkNsaWNrIiwiaGFuZGxlUGxhY2VNYXJrZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/plusButton.tsx\n"));

/***/ })

});