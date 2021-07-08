webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: \"아민\"\n    },\n    content: \"첫 번째 게시글 #해시태그 # 익스프레스\",\n    Images: [{\n      src: \"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MDFfMTUg%2FMDAxNjI1MTE3MjY2NTgx.OWcyyjzjwEbXAITwROfEtSAR3c_3nwxAevS20PctNsgg.UK0xaxSiFeHEK-Fny5sKY7Cdv7yEOJCJ1-4NS4S_5VAg.PNG.hyup_365%2Fimage.png&type=a340\"\n    }, {\n      src: \"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjlfNSAg%2FMDAxNjI0OTE2NjY1NDYz.zTYsJ2hiH43VwiR-oOTeNQc02L0gAtkOSoq3d4t_1Cwg.C3bHEXUT76chFki9OrXYf_6Tb8-D4C3DZlc-1sX1lNUg.PNG.dorun_lab%2FContents_Frame%25281080X1080%2529.png&type=a340\"\n    }, {\n      src: \"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160328_76%2F1eunnue_1459164099849AijQI_JPEG%2F%25C4%25B3%25B8%25AF%25C5%25CD_%25289%2529.jpg&type=sc960_832\"\n    }],\n    Comments: [{\n      User: {\n        nickname: \"amin\"\n      },\n      content: \"우와 신기하다\"\n    }, {\n      User: {\n        nickname: \"am\"\n      },\n      content: \"우와 수요일\"\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = \"ADD_POST\"; //오타 방지\n\nvar addPost = {\n  type: ADD_POST\n};\nvar dummpyPost = {\n  id: 2,\n  User: {\n    id: 2,\n    nickname: \"더미\"\n  },\n  content: \"더미 데이터 게시글 #해시태그 #익스프레스\",\n  Images: [{\n    src: \"https://postfiles.pstatic.net/MjAyMTAyMTZfMTE4/MDAxNjEzNDAxNDI0MDQ3.wE85KV2Oj0qDsCQcLzzkUX0te85iu9axBfv-u29f6Ggg.ZrCK2gsHTidwlEdGRNnLYeJf8T8td1CXwL7EgvHu6Uog.JPEG.zcjswkz0812/IMG_2683.jpg?type=w966\"\n  }, {\n    src: \"https://postfiles.pstatic.net/MjAyMTAyMTZfMzAg/MDAxNjEzNDAxNDIyMjYy.iF1C2Htw4K1x70_BAubG32fodXAgY2GFdw3udMjlS5Eg.xsrMd6c9NqrpnMus02PkjtcSAvhTs8mWfv20BVlpTuEg.JPEG.zcjswkz0812/IMG_2640.jpg?type=w966\"\n  }, {\n    src: \"https://postfiles.pstatic.net/MjAyMTAyMTZfMjM1/MDAxNjEzNDAxNDIxNTE4.x3yaMnKDCl0ZQ-7YNrxrF8RgqyhkkuU7DR5gDV_FF-Yg.c6EsGYqzXzMvEKM_vHbAbc7A0MeBIcLfC76wYvZz0t8g.JPEG.zcjswkz0812/IMG_2642.jpg?type=w966\"\n  }],\n  Comments: [{\n    User: {\n      nickname: \"amin\"\n    },\n    content: \"더미신기하다\"\n  }, {\n    User: {\n      nickname: \"am\"\n    },\n    content: \"더미 수요일\"\n  }]\n};\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummpyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1tcHlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLFdBQVMsRUFBRSxDQUNUO0FBQ0VDLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZSO0FBTUVDLFdBQU8sRUFBRSx3QkFOWDtBQU9FQyxVQUFNLEVBQUUsQ0FDTjtBQUNFQyxTQUFHLEVBQ0Q7QUFGSixLQURNLEVBS047QUFDRUEsU0FBRyxFQUNEO0FBRkosS0FMTSxFQVNOO0FBQ0VBLFNBQUcsRUFDRDtBQUZKLEtBVE0sQ0FQVjtBQXFCRUMsWUFBUSxFQUFFLENBQ1I7QUFDRUwsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURSO0FBSUVDLGFBQU8sRUFBRTtBQUpYLEtBRFEsRUFPUjtBQUNFRixVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRTtBQUROLE9BRFI7QUFJRUMsYUFBTyxFQUFFO0FBSlgsS0FQUTtBQXJCWixHQURTLENBRGU7QUF1QzFCSSxZQUFVLEVBQUUsRUF2Q2M7QUF3QzFCQyxXQUFTLEVBQUU7QUF4Q2UsQ0FBckI7QUEyQ1AsSUFBTUMsUUFBUSxHQUFHLFVBQWpCLEMsQ0FBNkI7O0FBRXRCLElBQU1DLE9BQU8sR0FBRztBQUNyQkMsTUFBSSxFQUFFRjtBQURlLENBQWhCO0FBSVAsSUFBTUcsVUFBVSxHQUFHO0FBQ2pCWixJQUFFLEVBQUUsQ0FEYTtBQUVqQkMsTUFBSSxFQUFFO0FBQ0pELE1BQUUsRUFBRSxDQURBO0FBRUpFLFlBQVEsRUFBRTtBQUZOLEdBRlc7QUFNakJDLFNBQU8sRUFBRSx5QkFOUTtBQU9qQkMsUUFBTSxFQUFFLENBQ047QUFDRUMsT0FBRyxFQUNEO0FBRkosR0FETSxFQUtOO0FBQ0VBLE9BQUcsRUFDRDtBQUZKLEdBTE0sRUFTTjtBQUNFQSxPQUFHLEVBQ0Q7QUFGSixHQVRNLENBUFM7QUFxQmpCQyxVQUFRLEVBQUUsQ0FDUjtBQUNFTCxRQUFJLEVBQUU7QUFDSkMsY0FBUSxFQUFFO0FBRE4sS0FEUjtBQUlFQyxXQUFPLEVBQUU7QUFKWCxHQURRLEVBT1I7QUFDRUYsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRFI7QUFJRUMsV0FBTyxFQUFFO0FBSlgsR0FQUTtBQXJCTyxDQUFuQjs7QUFxQ0EsSUFBTVUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEIsWUFBeUI7QUFBQSxNQUFYaUIsTUFBVzs7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNFLDZDQUNLSyxLQURMO0FBRUVmLGlCQUFTLEdBQUdhLFVBQUgsc0dBQWtCRSxLQUFLLENBQUNmLFNBQXhCLEVBRlg7QUFHRVMsaUJBQVMsRUFBRTtBQUhiOztBQUtGO0FBQ0UsYUFBT00sS0FBUDtBQVJKO0FBVUQsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbWFpblBvc3RzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBVc2VyOiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuaWNrbmFtZTogXCLslYTrr7xcIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggIyDsnbXsiqTtlITroIjsiqRcIixcbiAgICAgIEltYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgXCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEEzTURGZk1UVWclMkZNREF4TmpJMU1URTNNalkyTlRneC5PV2N5eWp6andFYlhBSVR3Uk9mRXRTQVIzY18zbnd4QWV2UzIwUGN0TnNnZy5VSzB4YXhTaUZlSEVLLUZueTVzS1k3Q2R2N3lFT0pDSjEtNE5TNFNfNVZBZy5QTkcuaHl1cF8zNjUlMkZpbWFnZS5wbmcmdHlwZT1hMzQwXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6XG4gICAgICAgICAgICBcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQTJNamxmTlNBZyUyRk1EQXhOakkwT1RFMk5qWTFORFl6LnpUWXNKMmhpSDQzVndpUi1vT1RlTlFjMDJMMGdBdGtPU29xM2Q0dF8xQ3dnLkMzYkhFWFVUNzZjaEZraTlPclhZZl82VGI4LUQ0QzNEWmxjLTFzWDFsTlVnLlBORy5kb3J1bl9sYWIlMkZDb250ZW50c19GcmFtZSUyNTI4MTA4MFgxMDgwJTI1MjkucG5nJnR5cGU9YTM0MFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOlxuICAgICAgICAgICAgXCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRjIwMTYwMzI4Xzc2JTJGMWV1bm51ZV8xNDU5MTY0MDk5ODQ5QWlqUUlfSlBFRyUyRiUyNUM0JTI1QjMlMjVCOCUyNUFGJTI1QzUlMjVDRF8lMjUyODklMjUyOS5qcGcmdHlwZT1zYzk2MF84MzJcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBDb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgbmlja25hbWU6IFwiYW1pblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogXCLsmrDsmYAg7Iug6riw7ZWY64ukXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBuaWNrbmFtZTogXCJhbVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDogXCLsmrDsmYAg7IiY7JqU7J28XCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gIGltYWdlUGF0aHM6IFtdLFxuICBwb3N0QWRkZWQ6IGZhbHNlLFxufTtcblxuY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUXCI7IC8v7Jik7YOAIOuwqeyngFxuXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgdHlwZTogQUREX1BPU1QsXG59O1xuXG5jb25zdCBkdW1tcHlQb3N0ID0ge1xuICBpZDogMixcbiAgVXNlcjoge1xuICAgIGlkOiAyLFxuICAgIG5pY2tuYW1lOiBcIuuNlOuvuFwiLFxuICB9LFxuICBjb250ZW50OiBcIuuNlOuvuCDrjbDsnbTthLAg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFwiLFxuICBJbWFnZXM6IFtcbiAgICB7XG4gICAgICBzcmM6XG4gICAgICAgIFwiaHR0cHM6Ly9wb3N0ZmlsZXMucHN0YXRpYy5uZXQvTWpBeU1UQXlNVFpmTVRFNC9NREF4TmpFek5EQXhOREkwTURRMy53RTg1S1YyT2owcURzQ1FjTHp6a1VYMHRlODVpdTlheEJmdi11MjlmNkdnZy5ackNLMmdzSFRpZHdsRWRHUk5uTFllSmY4VDh0ZDFDWHdMN0Vndkh1NlVvZy5KUEVHLnpjanN3a3owODEyL0lNR18yNjgzLmpwZz90eXBlPXc5NjZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzpcbiAgICAgICAgXCJodHRwczovL3Bvc3RmaWxlcy5wc3RhdGljLm5ldC9NakF5TVRBeU1UWmZNekFnL01EQXhOakV6TkRBeE5ESXlNall5LmlGMUMySHR3NEsxeDcwX0JBdWJHMzJmb2RYQWdZMkdGZHczdWRNamxTNUVnLnhzck1kNmM5TnFycG5NdXMwMlBranRjU0F2aFRzOG1XZnYyMEJWbHBUdUVnLkpQRUcuemNqc3drejA4MTIvSU1HXzI2NDAuanBnP3R5cGU9dzk2NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOlxuICAgICAgICBcImh0dHBzOi8vcG9zdGZpbGVzLnBzdGF0aWMubmV0L01qQXlNVEF5TVRaZk1qTTEvTURBeE5qRXpOREF4TkRJeE5URTQueDN5YU1uS0RDbDBaUS03WU5yeHJGOFJncXloa2t1VTdEUjVnRFZfRkYtWWcuYzZFc0dZcXpYek12RUtNX3ZIYkFiYzdBME1lQkljTGZDNzZ3WXZaejB0OGcuSlBFRy56Y2pzd2t6MDgxMi9JTUdfMjY0Mi5qcGc/dHlwZT13OTY2XCIsXG4gICAgfSxcbiAgXSxcbiAgQ29tbWVudHM6IFtcbiAgICB7XG4gICAgICBVc2VyOiB7XG4gICAgICAgIG5pY2tuYW1lOiBcImFtaW5cIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiBcIuuNlOuvuOyLoOq4sO2VmOuLpFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgVXNlcjoge1xuICAgICAgICBuaWNrbmFtZTogXCJhbVwiLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6IFwi642U66+4IOyImOyalOydvFwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXB5UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})