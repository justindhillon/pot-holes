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

/***/ "(app-pages-browser)/./components/ui/ButtonWithFileUpload.tsx":
/*!************************************************!*\
  !*** ./components/ui/ButtonWithFileUpload.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ButtonWithFileUpload: function() { return /* binding */ ButtonWithFileUpload; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-icons */ \"(app-pages-browser)/./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ButtonWithFileUpload() {\n    _s();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = (event)=>{\n        const file = event.target.files[0];\n        if (file) {\n            setSelectedFile(file);\n            console.log(file); // For demonstration; remove or replace with appropriate handling\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \"image/*\",\n                onChange: handleFileChange,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/ButtonWithFileUpload.tsx\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                as: \"span\",\n                role: \"button\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.File, {\n                        className: \"mr-2 h-4 w-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/ButtonWithFileUpload.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, this),\n                    \"Upload Image\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/ButtonWithFileUpload.tsx\",\n                lineNumber: 24,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/teddym/hackathon/pot-holes/components/ui/ButtonWithFileUpload.tsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n}\n_s(ButtonWithFileUpload, \"cz3B5sQOxlrekAnUFUPeMaA2gqY=\");\n_c = ButtonWithFileUpload;\nvar _c;\n$RefreshReg$(_c, \"ButtonWithFileUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvQnV0dG9uV2l0aEZpbGVVcGxvYWQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ1k7QUFDRztBQUV6QyxTQUFTRzs7SUFDZixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFNTSxtQkFBbUIsQ0FBQ0M7UUFDekIsTUFBTUMsT0FBT0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUNsQyxJQUFJRixNQUFNO1lBQ1RILGdCQUFnQkc7WUFDaEJHLFFBQVFDLEdBQUcsQ0FBQ0osT0FBTyxpRUFBaUU7UUFDckY7SUFDRDtJQUVBLHFCQUNDLDhEQUFDSzs7MEJBQ0EsOERBQUNDO2dCQUNBQyxNQUFLO2dCQUNMQyxRQUFPO2dCQUNQQyxVQUFVWDtnQkFDVlksT0FBTztvQkFBRUMsU0FBUztnQkFBTzs7Ozs7OzBCQUUxQiw4REFBQ2pCLHlEQUFNQTtnQkFBQ2tCLElBQUc7Z0JBQU9DLE1BQUs7O2tDQUN0Qiw4REFBQ3BCLHVEQUFJQTt3QkFBQ3FCLFdBQVU7Ozs7OztvQkFBaUI7Ozs7Ozs7Ozs7Ozs7QUFLckM7R0F6QmdCbkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9CdXR0b25XaXRoRmlsZVVwbG9hZC50c3g/ODE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlsZSB9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtaWNvbnNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25XaXRoRmlsZVVwbG9hZCgpIHtcblx0Y29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cdGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcblx0XHRjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXHRcdGlmIChmaWxlKSB7XG5cdFx0XHRzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XG5cdFx0XHRjb25zb2xlLmxvZyhmaWxlKTsgLy8gRm9yIGRlbW9uc3RyYXRpb247IHJlbW92ZSBvciByZXBsYWNlIHdpdGggYXBwcm9wcmlhdGUgaGFuZGxpbmdcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8bGFiZWw+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0dHlwZT1cImZpbGVcIlxuXHRcdFx0XHRhY2NlcHQ9XCJpbWFnZS8qXCJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG5cdFx0XHRcdHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG5cdFx0XHQvPlxuXHRcdFx0PEJ1dHRvbiBhcz1cInNwYW5cIiByb2xlPVwiYnV0dG9uXCI+XG5cdFx0XHRcdDxGaWxlIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XG5cdFx0XHRcdFVwbG9hZCBJbWFnZVxuXHRcdFx0PC9CdXR0b24+XG5cdFx0PC9sYWJlbD5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZpbGUiLCJCdXR0b24iLCJCdXR0b25XaXRoRmlsZVVwbG9hZCIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJkaXNwbGF5IiwiYXMiLCJyb2xlIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/ButtonWithFileUpload.tsx\n"));

/***/ })

});