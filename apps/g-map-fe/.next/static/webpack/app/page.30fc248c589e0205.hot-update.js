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

/***/ "(app-client)/./app/components/map-libre-gl.tsx":
/*!*****************************************!*\
  !*** ./app/components/map-libre-gl.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! maplibre-gl */ \"(app-client)/../../node_modules/maplibre-gl/dist/maplibre-gl.js\");\n/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst MapLibre = (param)=>{\n    let { zoom =11 , pitch =32 , lng =26.145 , lat =44.715  } = param;\n    _s();\n    const mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mapInstance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mapContainer.current) {\n            const map = new (maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n                container: mapContainer.current,\n                pitch,\n                hash: true,\n                style: {\n                    version: 8,\n                    sources: {\n                        osm: {\n                            type: \"raster\",\n                            tiles: [\n                                \"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png\"\n                            ],\n                            tileSize: 256,\n                            attribution: \"&copy; OpenStreetMap Contributors\",\n                            maxzoom: 19\n                        },\n                        // Use a different source for terrain and hillshade layers, to improve render quality\n                        terrainSource: {\n                            type: \"raster-dem\",\n                            url: \"https://demotiles.maplibre.org/terrain-tiles/tiles.json\",\n                            tileSize: 256\n                        },\n                        hillshadeSource: {\n                            type: \"raster-dem\",\n                            url: \"https://demotiles.maplibre.org/terrain-tiles/tiles.json\",\n                            tileSize: 256\n                        }\n                    },\n                    layers: [\n                        {\n                            id: \"osm\",\n                            type: \"raster\",\n                            source: \"osm\"\n                        },\n                        {\n                            id: \"hills\",\n                            type: \"hillshade\",\n                            source: \"hillshadeSource\",\n                            layout: {\n                                visibility: \"visible\"\n                            },\n                            paint: {\n                                \"hillshade-shadow-color\": \"#473B24\"\n                            }\n                        }\n                    ],\n                    terrain: {\n                        source: \"terrainSource\",\n                        exaggeration: 1\n                    }\n                },\n                center: [\n                    lng,\n                    lat\n                ],\n                zoom\n            });\n            map.addControl(new (maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default().NavigationControl)({\n                visualizePitch: true,\n                showZoom: true,\n                showCompass: true\n            }));\n            map.addControl(new (maplibre_gl__WEBPACK_IMPORTED_MODULE_2___default().TerrainControl)({\n                source: \"terrainSource\",\n                exaggeration: 1\n            }));\n            mapInstance.current = map;\n            return ()=>{\n                if (mapInstance.current) {\n                    mapInstance.current.remove();\n                }\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mapContainer,\n        style: {\n            height: \"400px\",\n            width: \"100%\",\n            borderRadius: \"25%\",\n            margin: \"20px 0\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/nefa/Documents/Work/G-Map/apps/g-map-fe/app/components/map-libre-gl.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MapLibre, \"QXcr2GMt+uX8B+INCRY47rPynxI=\");\n_c = MapLibre;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapLibre);\nvar _c;\n$RefreshReg$(_c, \"MapLibre\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvbWFwLWxpYnJlLWdsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUUwQztBQUNlO0FBU3pELE1BQU1HLFdBQVcsU0FLSTtRQUxILEVBQ2hCQyxNQUFPLEdBQUUsRUFDVEMsT0FBUSxHQUFFLEVBQ1ZDLEtBQU0sT0FBTSxFQUNaQyxLQUFNLE9BQU0sRUFDRTs7SUFDZCxNQUFNQyxlQUFlUCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUNoRCxNQUFNUSxjQUFjUiw2Q0FBTUEsQ0FBbUIsSUFBSTtJQUVqREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLGFBQWFFLE9BQU8sRUFBRTtZQUN4QixNQUFNQyxNQUFNLElBQUlULHdEQUFZLENBQUM7Z0JBQzNCVyxXQUFXTCxhQUFhRSxPQUFPO2dCQUMvQkw7Z0JBQ0FTLE1BQU0sSUFBSTtnQkFDVkMsT0FBTztvQkFDTEMsU0FBUztvQkFDVEMsU0FBUzt3QkFDUEMsS0FBSzs0QkFDSEMsTUFBTTs0QkFDTkMsT0FBTztnQ0FBQzs2QkFBbUQ7NEJBQzNEQyxVQUFVOzRCQUNWQyxhQUFhOzRCQUNiQyxTQUFTO3dCQUNYO3dCQUNBLHFGQUFxRjt3QkFDckZDLGVBQWU7NEJBQ2JMLE1BQU07NEJBQ05NLEtBQUs7NEJBQ0xKLFVBQVU7d0JBQ1o7d0JBQ0FLLGlCQUFpQjs0QkFDZlAsTUFBTTs0QkFDTk0sS0FBSzs0QkFDTEosVUFBVTt3QkFDWjtvQkFDRjtvQkFDQU0sUUFBUTt3QkFDTjs0QkFDRUMsSUFBSTs0QkFDSlQsTUFBTTs0QkFDTlUsUUFBUTt3QkFDVjt3QkFDQTs0QkFDRUQsSUFBSTs0QkFDSlQsTUFBTTs0QkFDTlUsUUFBUTs0QkFDUkMsUUFBUTtnQ0FBRUMsWUFBWTs0QkFBVTs0QkFDaENDLE9BQU87Z0NBQUUsMEJBQTBCOzRCQUFVO3dCQUMvQztxQkFDRDtvQkFDREMsU0FBUzt3QkFDUEosUUFBUTt3QkFDUkssY0FBYztvQkFDaEI7Z0JBQ0Y7Z0JBQ0FDLFFBQVE7b0JBQUM3QjtvQkFBS0M7aUJBQUk7Z0JBQ2xCSDtZQUNGO1lBRUFPLElBQUl5QixVQUFVLENBQ1osSUFBSWxDLHNFQUEwQixDQUFDO2dCQUM3Qm9DLGdCQUFnQixJQUFJO2dCQUNwQkMsVUFBVSxJQUFJO2dCQUNkQyxhQUFhLElBQUk7WUFDbkI7WUFHRjdCLElBQUl5QixVQUFVLENBQ1osSUFBSWxDLG1FQUF1QixDQUFDO2dCQUMxQjJCLFFBQVE7Z0JBQ1JLLGNBQWM7WUFDaEI7WUFHRnpCLFlBQVlDLE9BQU8sR0FBR0M7WUFDdEIsT0FBTyxJQUFNO2dCQUNYLElBQUlGLFlBQVlDLE9BQU8sRUFBRTtvQkFDdkJELFlBQVlDLE9BQU8sQ0FBQ2dDLE1BQU07Z0JBQzVCLENBQUM7WUFDSDtRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFDQ0MsS0FBS3BDO1FBQ0xPLE9BQU87WUFDTDhCLFFBQVE7WUFDUkMsT0FBTztZQUNQQyxjQUFjO1lBQ2RDLFFBQVE7UUFDVjs7Ozs7O0FBR047R0EvRk03QztLQUFBQTtBQWlHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9tYXAtbGlicmUtZ2wudHN4P2VmMzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXBib3hnbCwgeyBNYXAgYXMgTWFwYm94TWFwIH0gZnJvbSAnbWFwbGlicmUtZ2wnO1xuXG5pbnRlcmZhY2UgTWFwTGlicmVQcm9wcyB7XG4gIHpvb206IG51bWJlcjtcbiAgbG5nOiBudW1iZXI7XG4gIGxhdDogbnVtYmVyO1xuICBwaXRjaDogbnVtYmVyO1xufVxuXG5jb25zdCBNYXBMaWJyZSA9ICh7XG4gIHpvb20gPSAxMSxcbiAgcGl0Y2ggPSAzMixcbiAgbG5nID0gMjYuMTQ1LFxuICBsYXQgPSA0NC43MTUsXG59OiBNYXBMaWJyZVByb3BzKSA9PiB7XG4gIGNvbnN0IG1hcENvbnRhaW5lciA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG1hcEluc3RhbmNlID0gdXNlUmVmPE1hcGJveE1hcCB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1hcENvbnRhaW5lci5jdXJyZW50KSB7XG4gICAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXIuY3VycmVudCxcbiAgICAgICAgcGl0Y2gsXG4gICAgICAgIGhhc2g6IHRydWUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdmVyc2lvbjogOCxcbiAgICAgICAgICBzb3VyY2VzOiB7XG4gICAgICAgICAgICBvc206IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3Jhc3RlcicsXG4gICAgICAgICAgICAgIHRpbGVzOiBbJ2h0dHBzOi8vYS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyddLFxuICAgICAgICAgICAgICB0aWxlU2l6ZTogMjU2LFxuICAgICAgICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwIENvbnRyaWJ1dG9ycycsXG4gICAgICAgICAgICAgIG1heHpvb206IDE5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIFVzZSBhIGRpZmZlcmVudCBzb3VyY2UgZm9yIHRlcnJhaW4gYW5kIGhpbGxzaGFkZSBsYXllcnMsIHRvIGltcHJvdmUgcmVuZGVyIHF1YWxpdHlcbiAgICAgICAgICAgIHRlcnJhaW5Tb3VyY2U6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3Jhc3Rlci1kZW0nLFxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RlbW90aWxlcy5tYXBsaWJyZS5vcmcvdGVycmFpbi10aWxlcy90aWxlcy5qc29uJyxcbiAgICAgICAgICAgICAgdGlsZVNpemU6IDI1NixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWxsc2hhZGVTb3VyY2U6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3Jhc3Rlci1kZW0nLFxuICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2RlbW90aWxlcy5tYXBsaWJyZS5vcmcvdGVycmFpbi10aWxlcy90aWxlcy5qc29uJyxcbiAgICAgICAgICAgICAgdGlsZVNpemU6IDI1NixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsYXllcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICdvc20nLFxuICAgICAgICAgICAgICB0eXBlOiAncmFzdGVyJyxcbiAgICAgICAgICAgICAgc291cmNlOiAnb3NtJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnaGlsbHMnLFxuICAgICAgICAgICAgICB0eXBlOiAnaGlsbHNoYWRlJyxcbiAgICAgICAgICAgICAgc291cmNlOiAnaGlsbHNoYWRlU291cmNlJyxcbiAgICAgICAgICAgICAgbGF5b3V0OiB7IHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9LFxuICAgICAgICAgICAgICBwYWludDogeyAnaGlsbHNoYWRlLXNoYWRvdy1jb2xvcic6ICcjNDczQjI0JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRlcnJhaW46IHtcbiAgICAgICAgICAgIHNvdXJjZTogJ3RlcnJhaW5Tb3VyY2UnLFxuICAgICAgICAgICAgZXhhZ2dlcmF0aW9uOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sIC8vIG9yICdodHRwczovL2RlbW90aWxlcy5tYXBsaWJyZS5vcmcvc3R5bGUuanNvbicsIC8vIEV4YW1wbGUgc3R5bGUgVVJMXG4gICAgICAgIGNlbnRlcjogW2xuZywgbGF0XSwgLy8gRXhhbXBsZSBjZW50ZXIgY29vcmRpbmF0ZXMgW2xuZywgbGF0XVxuICAgICAgICB6b29tLCAvLyBFeGFtcGxlIHpvb20gbGV2ZWxcbiAgICAgIH0pO1xuXG4gICAgICBtYXAuYWRkQ29udHJvbChcbiAgICAgICAgbmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sKHtcbiAgICAgICAgICB2aXN1YWxpemVQaXRjaDogdHJ1ZSxcbiAgICAgICAgICBzaG93Wm9vbTogdHJ1ZSxcbiAgICAgICAgICBzaG93Q29tcGFzczogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIG1hcC5hZGRDb250cm9sKFxuICAgICAgICBuZXcgbWFwYm94Z2wuVGVycmFpbkNvbnRyb2woe1xuICAgICAgICAgIHNvdXJjZTogJ3RlcnJhaW5Tb3VyY2UnLFxuICAgICAgICAgIGV4YWdnZXJhdGlvbjogMSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIG1hcEluc3RhbmNlLmN1cnJlbnQgPSBtYXA7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAobWFwSW5zdGFuY2UuY3VycmVudCkge1xuICAgICAgICAgIG1hcEluc3RhbmNlLmN1cnJlbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e21hcENvbnRhaW5lcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGhlaWdodDogJzQwMHB4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjUlJyxcbiAgICAgICAgbWFyZ2luOiAnMjBweCAwJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcExpYnJlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIm1hcGJveGdsIiwiTWFwTGlicmUiLCJ6b29tIiwicGl0Y2giLCJsbmciLCJsYXQiLCJtYXBDb250YWluZXIiLCJtYXBJbnN0YW5jZSIsImN1cnJlbnQiLCJtYXAiLCJNYXAiLCJjb250YWluZXIiLCJoYXNoIiwic3R5bGUiLCJ2ZXJzaW9uIiwic291cmNlcyIsIm9zbSIsInR5cGUiLCJ0aWxlcyIsInRpbGVTaXplIiwiYXR0cmlidXRpb24iLCJtYXh6b29tIiwidGVycmFpblNvdXJjZSIsInVybCIsImhpbGxzaGFkZVNvdXJjZSIsImxheWVycyIsImlkIiwic291cmNlIiwibGF5b3V0IiwidmlzaWJpbGl0eSIsInBhaW50IiwidGVycmFpbiIsImV4YWdnZXJhdGlvbiIsImNlbnRlciIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsInZpc3VhbGl6ZVBpdGNoIiwic2hvd1pvb20iLCJzaG93Q29tcGFzcyIsIlRlcnJhaW5Db250cm9sIiwicmVtb3ZlIiwiZGl2IiwicmVmIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/map-libre-gl.tsx\n"));

/***/ })

});