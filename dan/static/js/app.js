(self["webpackChunkpython_webpack_boilerplate"] = self["webpackChunkpython_webpack_boilerplate"] || []).push([["app"],{

/***/ "./src/application/app.js":
/*!********************************!*\
  !*** ./src/application/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! htmx.org/dist/htmx */ "./node_modules/htmx.org/dist/htmx.js");
/* harmony import */ var htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/module.esm.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_sidebar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_drop_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/drop_lang.js */ "./src/components/drop_lang.js");
// This is the scss entry file


 // import Clipboard from "@ryangjchandler/alpine-clipboard";

 // We can import other JS file as we like


 // import axios from '../components/axiosFactory';
// import { detect } from 'detect-browser';

window.htmx = (htmx_org_dist_htmx__WEBPACK_IMPORTED_MODULE_1___default()); // const browser = detect();

window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready 1");
}); // Alpine.plugin(Clipboard);

window.Alpine = alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"];
alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].data('lang_drop', _components_drop_lang_js__WEBPACK_IMPORTED_MODULE_5__["default"]); // Alpine.data('playlistToggle', playlistToggle);

alpinejs__WEBPACK_IMPORTED_MODULE_2__["default"].start();
window.Swiper = swiper__WEBPACK_IMPORTED_MODULE_3__["default"];

if (true) {
  // enable logging for htmx in development server
  window.htmx.logAll();
}

/***/ }),

/***/ "./src/components/drop_lang.js":
/*!*************************************!*\
  !*** ./src/components/drop_lang.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ langDropdownMenu)
/* harmony export */ });
function langDropdownMenu() {
  return {
    openMenu: false,
    deposit: false,
    lang: false,
    copy: false,

    toggleOpen() {
      this.openMenu = !this.openMenu;
      const menu = document.getElementById("lang");
      const icon = document.getElementById("lang_icon");
      menu.classList.toggle("hidden");
      icon.classList.toggle("mt-2");
    },

    toggleClose() {
      const menu = document.getElementById("lang");
      const icon = document.getElementById("lang_icon");
      menu.classList.add("hidden");
      icon.classList.toggle("mt-0");
      return this.openMenu = false;
    },

    open() {
      this.deposit = !this.deposit;
      const menu = document.getElementById("depo");
      menu.classList.toggle("hidden");
    },

    close() {
      const menu = document.getElementById("depo");
      menu.classList.add("hidden");
      return this.deposit = false;
    },

    wdropen() {
      this.deposit = !this.deposit;
      const menu = document.getElementById("wdr");
      menu.classList.toggle("hidden");
    },

    wdrclose() {
      const menu = document.getElementById("wdr");
      menu.classList.add("hidden");
      return this.deposit = false;
    },

    wopen() {
      this.deposit = !this.deposit;
      const menu = document.getElementById("wdepo");
      const old = document.getElementById("depo");
      old.classList.add("hidden");
      menu.classList.toggle("hidden");
    },

    wclose() {
      const menu = document.getElementById("wdepo");
      menu.classList.add("hidden");
      return this.deposit = false;
    },

    cookiesClose() {
      const cookie = document.getElementById("cookie");
      cookie.classList.remove("md:flex", "md:items-center");
      cookie.classList.add("hidden", "md:hidden");
      return this.lang = true;
    }

  };
}

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ (() => {

window.console.log("sidebar is loaded");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1656169836848
      var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_alpinejs_dist_module_esm_js-node_modules_htmx_org_dist_htmx_js-node_modu-8e5da0"], () => (__webpack_exec__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=9091&pathname=%2Fws&logging=info&reconnect=10"), __webpack_exec__("./node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./src/application/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vc3JjL2FwcGxpY2F0aW9uL2FwcC5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL2Ryb3BfbGFuZy5qcyIsIndlYnBhY2s6Ly9weXRob24td2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcHl0aG9uLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpcyB0aGUgc2NzcyBlbnRyeSBmaWxlXG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGh0bXggZnJvbSAnaHRteC5vcmcvZGlzdC9odG14JztcbmltcG9ydCBBbHBpbmUgZnJvbSAnYWxwaW5lanMnO1xuLy8gaW1wb3J0IENsaXBib2FyZCBmcm9tIFwiQHJ5YW5namNoYW5kbGVyL2FscGluZS1jbGlwYm9hcmRcIjtcblxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xuXG4vLyBXZSBjYW4gaW1wb3J0IG90aGVyIEpTIGZpbGUgYXMgd2UgbGlrZVxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XG5pbXBvcnQgbGFuZ0Ryb3Bkb3duTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9kcm9wX2xhbmcuanNcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tICcuLi9jb21wb25lbnRzL2F4aW9zRmFjdG9yeSc7XG4vLyBpbXBvcnQgeyBkZXRlY3QgfSBmcm9tICdkZXRlY3QtYnJvd3Nlcic7XG5cbndpbmRvdy5odG14ID0gaHRteDtcbi8vIGNvbnN0IGJyb3dzZXIgPSBkZXRlY3QoKTtcblxud2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgd2luZG93LmNvbnNvbGUubG9nKFwiZG9tIHJlYWR5IDFcIik7XG59KTtcblxuLy8gQWxwaW5lLnBsdWdpbihDbGlwYm9hcmQpO1xud2luZG93LkFscGluZSA9IEFscGluZTtcbkFscGluZS5kYXRhKCdsYW5nX2Ryb3AnLCBsYW5nRHJvcGRvd25NZW51KTtcbi8vIEFscGluZS5kYXRhKCdwbGF5bGlzdFRvZ2dsZScsIHBsYXlsaXN0VG9nZ2xlKTtcbkFscGluZS5zdGFydCgpO1xuXG53aW5kb3cuU3dpcGVyID0gU3dpcGVyO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIC8vIGVuYWJsZSBsb2dnaW5nIGZvciBodG14IGluIGRldmVsb3BtZW50IHNlcnZlclxuICB3aW5kb3cuaHRteC5sb2dBbGwoKTtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFuZ0Ryb3Bkb3duTWVudSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGVuTWVudTogZmFsc2UsXG4gICAgICAgIGRlcG9zaXQ6IGZhbHNlLFxuICAgICAgICBsYW5nOiBmYWxzZSxcbiAgICAgICAgY29weTogZmFsc2UsXG5cbiAgICAgICAgdG9nZ2xlT3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMub3Blbk1lbnUgPSAhdGhpcy5vcGVuTWVudTtcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmdcIik7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYW5nX2ljb25cIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoXCJtdC0yXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZUNsb3NlKCkge1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZ1wiKTtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhbmdfaWNvblwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZShcIm10LTBcIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuTWVudSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9wZW4oKSB7XG4gICAgICAgICAgICB0aGlzLmRlcG9zaXQgPSAhdGhpcy5kZXBvc2l0O1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVwb1wiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9cIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXBvc2l0ID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Ryb3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuZGVwb3NpdCA9ICF0aGlzLmRlcG9zaXQ7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZHJcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2RyY2xvc2UoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZHJcIik7XG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZXBvc2l0ID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd29wZW4oKSB7XG4gICAgICAgICAgICB0aGlzLmRlcG9zaXQgPSAhdGhpcy5kZXBvc2l0O1xuICAgICAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2RlcG9cIik7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcG9cIik7XG4gICAgICAgICAgICBvbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICB3Y2xvc2UoKSB7XG4gICAgICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZGVwb1wiKTtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlcG9zaXQgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb29raWVzQ2xvc2UoKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZVwiKTtcbiAgICAgICAgICAgIGNvb2tpZS5jbGFzc0xpc3QucmVtb3ZlKFwibWQ6ZmxleFwiLCBcIm1kOml0ZW1zLWNlbnRlclwiKTtcbiAgICAgICAgICAgIGNvb2tpZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIsIFwibWQ6aGlkZGVuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZyA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICB9O1xufVxuIiwid2luZG93LmNvbnNvbGUubG9nKFwic2lkZWJhciBpcyBsb2FkZWRcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjU2MTY5ODM2ODQ4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6WyJodG14IiwiQWxwaW5lIiwiU3dpcGVyIiwibGFuZ0Ryb3Bkb3duTWVudSIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic3RhcnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJsb2dBbGwiLCJvcGVuTWVudSIsImRlcG9zaXQiLCJsYW5nIiwiY29weSIsInRvZ2dsZU9wZW4iLCJtZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJpY29uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidG9nZ2xlQ2xvc2UiLCJhZGQiLCJvcGVuIiwiY2xvc2UiLCJ3ZHJvcGVuIiwid2RyY2xvc2UiLCJ3b3BlbiIsIm9sZCIsIndjbG9zZSIsImNvb2tpZXNDbG9zZSIsImNvb2tpZSIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=