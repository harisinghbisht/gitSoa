"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/weekly-activity/route";
exports.ids = ["app/api/weekly-activity/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fweekly-activity%2Froute&page=%2Fapi%2Fweekly-activity%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweekly-activity%2Froute.ts&appDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fweekly-activity%2Froute&page=%2Fapi%2Fweekly-activity%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweekly-activity%2Froute.ts&appDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_haris_Desktop_gitSoa_app_api_weekly_activity_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/weekly-activity/route.ts */ \"(rsc)/./app/api/weekly-activity/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/weekly-activity/route\",\n        pathname: \"/api/weekly-activity\",\n        filename: \"route\",\n        bundlePath: \"app/api/weekly-activity/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\haris\\\\Desktop\\\\gitSoa\\\\app\\\\api\\\\weekly-activity\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_haris_Desktop_gitSoa_app_api_weekly_activity_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/weekly-activity/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWVrbHktYWN0aXZpdHklMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRndlZWtseS1hY3Rpdml0eSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRndlZWtseS1hY3Rpdml0eSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNoYXJpcyU1Q0Rlc2t0b3AlNUNnaXRTb2ElNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2hhcmlzJTVDRGVza3RvcCU1Q2dpdFNvYSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDc0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb2FyIFRhc2svP2U4YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcaGFyaXNcXFxcRGVza3RvcFxcXFxnaXRTb2FcXFxcYXBwXFxcXGFwaVxcXFx3ZWVrbHktYWN0aXZpdHlcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3dlZWtseS1hY3Rpdml0eS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3dlZWtseS1hY3Rpdml0eVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvd2Vla2x5LWFjdGl2aXR5L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcaGFyaXNcXFxcRGVza3RvcFxcXFxnaXRTb2FcXFxcYXBwXFxcXGFwaVxcXFx3ZWVrbHktYWN0aXZpdHlcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3dlZWtseS1hY3Rpdml0eS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fweekly-activity%2Froute&page=%2Fapi%2Fweekly-activity%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweekly-activity%2Froute.ts&appDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/weekly-activity/route.ts":
/*!******************************************!*\
  !*** ./app/api/weekly-activity/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nfunction getRandomValue(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nasync function GET() {\n    const minDeposit = 100;\n    const maxDeposit = 500;\n    const minWithdraw = 200;\n    const maxWithdraw = 600;\n    const weekDays = [\n        \"Mon\",\n        \"Tue\",\n        \"Wed\",\n        \"Thu\",\n        \"Fri\",\n        \"Sat\",\n        \"Sun\"\n    ];\n    const weeklyActivity = weekDays.map((name)=>({\n            name,\n            deposit: getRandomValue(minDeposit, maxDeposit),\n            withdraw: getRandomValue(minWithdraw, maxWithdraw)\n        }));\n    const response = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(weeklyActivity);\n    response.headers.set(\"Cache-Control\", \"no-store\");\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlZWtseS1hY3Rpdml0eS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUUxQyxTQUFTQyxlQUFlQyxHQUFXLEVBQUVDLEdBQVc7SUFDOUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQU1ILENBQUFBLE1BQU1ELE1BQU0sTUFBTUE7QUFDdkQ7QUFFTyxlQUFlSztJQUNwQixNQUFNQyxhQUFhO0lBQ25CLE1BQU1DLGFBQWE7SUFDbkIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxjQUFjO0lBRXBCLE1BQU1DLFdBQVc7UUFBQztRQUFPO1FBQU87UUFBTztRQUFPO1FBQU87UUFBTztLQUFNO0lBRWxFLE1BQU1DLGlCQUFpQkQsU0FBU0UsR0FBRyxDQUFDQyxDQUFBQSxPQUFTO1lBQzNDQTtZQUNBQyxTQUFTZixlQUFlTyxZQUFZQztZQUNwQ1EsVUFBVWhCLGVBQWVTLGFBQWFDO1FBQ3hDO0lBRUEsTUFBTU8sV0FBV2xCLHFEQUFZQSxDQUFDbUIsSUFBSSxDQUFDTjtJQUNuQ0ssU0FBU0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCO0lBRXRDLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Tb2FyIFRhc2svLi9hcHAvYXBpL3dlZWtseS1hY3Rpdml0eS9yb3V0ZS50cz80MmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWUobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBtaW5EZXBvc2l0ID0gMTAwXHJcbiAgY29uc3QgbWF4RGVwb3NpdCA9IDUwMFxyXG4gIGNvbnN0IG1pbldpdGhkcmF3ID0gMjAwXHJcbiAgY29uc3QgbWF4V2l0aGRyYXcgPSA2MDBcclxuXHJcbiAgY29uc3Qgd2Vla0RheXMgPSBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JywgJ1N1biddXHJcblxyXG4gIGNvbnN0IHdlZWtseUFjdGl2aXR5ID0gd2Vla0RheXMubWFwKG5hbWUgPT4gKHtcclxuICAgIG5hbWUsXHJcbiAgICBkZXBvc2l0OiBnZXRSYW5kb21WYWx1ZShtaW5EZXBvc2l0LCBtYXhEZXBvc2l0KSxcclxuICAgIHdpdGhkcmF3OiBnZXRSYW5kb21WYWx1ZShtaW5XaXRoZHJhdywgbWF4V2l0aGRyYXcpLFxyXG4gIH0pKVxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKHdlZWtseUFjdGl2aXR5KVxyXG4gIHJlc3BvbnNlLmhlYWRlcnMuc2V0KCdDYWNoZS1Db250cm9sJywgJ25vLXN0b3JlJylcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRSYW5kb21WYWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIkdFVCIsIm1pbkRlcG9zaXQiLCJtYXhEZXBvc2l0IiwibWluV2l0aGRyYXciLCJtYXhXaXRoZHJhdyIsIndlZWtEYXlzIiwid2Vla2x5QWN0aXZpdHkiLCJtYXAiLCJuYW1lIiwiZGVwb3NpdCIsIndpdGhkcmF3IiwicmVzcG9uc2UiLCJqc29uIiwiaGVhZGVycyIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/weekly-activity/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fweekly-activity%2Froute&page=%2Fapi%2Fweekly-activity%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweekly-activity%2Froute.ts&appDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charis%5CDesktop%5CgitSoa&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();