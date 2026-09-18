"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[254],{

/***/ 254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AngularInstallationModule: () => (/* binding */ AngularInstallationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(3010);
// EXTERNAL MODULE: ./apps/demo/src/app/shared/host-child-warning/host-child-warning.module.ts
var host_child_warning_module = __webpack_require__(16);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=19.2.9 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1316);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-link.mjs
var taiga_ui_core_components_link = __webpack_require__(4724);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2022/taiga-ui-addon-doc-components.mjs + 101 modules
var taiga_ui_addon_doc_components = __webpack_require__(3358);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2022/taiga-ui-core-components-notification.mjs + 1 modules
var taiga_ui_core_components_notification = __webpack_require__(5331);
;// ./apps/demo/src/app/shared/host-child-warning/host-child-warning.component.ts


let HostChildWarningComponent = /*#__PURE__*/(() => {
  var _HostChildWarningComponent;
  class HostChildWarningComponent {}
  _HostChildWarningComponent = HostChildWarningComponent;
  _HostChildWarningComponent.ɵfac = function HostChildWarningComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostChildWarningComponent)();
  };
  _HostChildWarningComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _HostChildWarningComponent,
    selectors: [["host-child-warning"]],
    standalone: false,
    decls: 2,
    vars: 0,
    consts: [["size", "m", "tuiNotification", ""]],
    template: function HostChildWarningComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "div", 0);
        core_mjs_["ɵɵtext"](1, " The application can be a host and a child at the same time\n");
        core_mjs_["ɵɵelementEnd"]();
      }
    },
    dependencies: [taiga_ui_core_components_notification/* TuiNotificationDirective */.xb],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}"],
    changeDetection: 0
  });
  return HostChildWarningComponent;
})();
;// ./apps/demo/src/app/modules/angular-installation/angular-installation.component.ts





let AngularInstallationComponent = /*#__PURE__*/(() => {
  var _AngularInstallationComponent;
  class AngularInstallationComponent {}
  _AngularInstallationComponent = AngularInstallationComponent;
  _AngularInstallationComponent.ɵfac = function AngularInstallationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularInstallationComponent)();
  };
  _AngularInstallationComponent.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
    type: _AngularInstallationComponent,
    selectors: [["angular-installation"]],
    standalone: false,
    decls: 34,
    vars: 0,
    consts: [["header", "Angular Installation"], ["routerLink", "/angular-host", "tuiLink", ""], ["routerLink", "/angular-child", "tuiLink", ""], [1, "tui-space_top-4"], ["href", "https://github.com/taiga-family/microzord/tree/main/libs/angular", "target", "_blank", "tuiLink", ""]],
    template: function AngularInstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0)(1, "p")(2, "strong");
        core_mjs_["ɵɵtext"](3, "microzord");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵtext"](4, " has a great semantic integration with Angular framework. ");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](5, "section")(6, "h2");
        core_mjs_["ɵɵtext"](7, "Package installation");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](8, "p");
        core_mjs_["ɵɵtext"](9, "Install the core package if you do not have it yet:");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](10, "code");
        core_mjs_["ɵɵtext"](11, "npm i @microzord/core");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](12, "p");
        core_mjs_["ɵɵtext"](13, "Install Angular package for ideomatic working with Angular (supported versions are 11 and later):");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](14, "code");
        core_mjs_["ɵɵtext"](15, "npm i @microzord/angular");
        core_mjs_["ɵɵelementEnd"]()();
        core_mjs_["ɵɵelementStart"](16, "section")(17, "h2");
        core_mjs_["ɵɵtext"](18, "What is next");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](19, "p");
        core_mjs_["ɵɵtext"](20, "You can use microzord with Angular both ways:");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](21, "ul")(22, "li")(23, "a", 1);
        core_mjs_["ɵɵtext"](24, " As a host to insert other application in Angular app ");
        core_mjs_["ɵɵelementEnd"]()();
        core_mjs_["ɵɵelementStart"](25, "li")(26, "a", 2);
        core_mjs_["ɵɵtext"](27, " As a child to prepare application to be inserted in another app ");
        core_mjs_["ɵɵelementEnd"]()()();
        core_mjs_["ɵɵelement"](28, "host-child-warning", 3);
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](29, "section")(30, "h2");
        core_mjs_["ɵɵtext"](31, "See also");
        core_mjs_["ɵɵelementEnd"]();
        core_mjs_["ɵɵelementStart"](32, "a", 4);
        core_mjs_["ɵɵtext"](33, " Angular library source code ");
        core_mjs_["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [taiga_ui_core_components_link/* TuiLink */.Jc, taiga_ui_addon_doc_components/* TuiDocPage */.e3, HostChildWarningComponent, router_mjs_.RouterLink],
    encapsulation: 2,
    changeDetection: 0
  });
  return AngularInstallationComponent;
})();
;// ./apps/demo/src/app/modules/angular-installation/angular-installation.module.ts







let AngularInstallationModule = /*#__PURE__*/(() => {
  var _AngularInstallationModule;
  class AngularInstallationModule {}
  _AngularInstallationModule = AngularInstallationModule;
  _AngularInstallationModule.ɵfac = function AngularInstallationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularInstallationModule)();
  };
  _AngularInstallationModule.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
    type: _AngularInstallationModule
  });
  _AngularInstallationModule.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
    imports: [taiga_ui_addon_doc_components/* TuiDocAPI */.mh, taiga_ui_addon_doc_components/* TuiDocAPIItem */.sN, taiga_ui_addon_doc_components/* TuiDocCopy */.ye, taiga_ui_addon_doc_components/* TuiDocTab */.mg, taiga_ui_addon_doc_components/* TuiDocDemo */.aD, taiga_ui_addon_doc_components/* TuiDocCode */.MN, taiga_ui_addon_doc_components/* TuiDocExample */.FS, taiga_ui_addon_doc_components/* TuiDocPage */.e3, taiga_ui_addon_doc_components/* TuiDocNavigation */.pz, taiga_ui_addon_doc_components/* TuiDocMain */.gf, host_child_warning_module/* HostChildWarningModule */.T, router_mjs_.RouterModule.forChild([{
      path: '',
      component: AngularInstallationComponent
    }])]
  });
  return AngularInstallationModule;
})();

/***/ })

}]);