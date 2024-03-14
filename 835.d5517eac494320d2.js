"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[835],{

/***/ 5835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ApplicationModule: () => (/* binding */ ApplicationModule)
});

// EXTERNAL MODULE: consume shared module (default) @angular/router@=17.3.0 (strict) (singleton) (fallback: ./node_modules/@angular/router/fesm2022/router.mjs)
var router_mjs_ = __webpack_require__(7688);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc.js
var taiga_ui_addon_doc = __webpack_require__(8508);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-utils.js + 76 modules
var taiga_ui_addon_doc_utils = __webpack_require__(1583);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-link.js
var taiga_ui_core_components_link = __webpack_require__(1974);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/core/fesm2015/taiga-ui-core-components-notification.js
var taiga_ui_core_components_notification = __webpack_require__(8821);
// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.3.0 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(1750);
// EXTERNAL MODULE: ./node_modules/@taiga-ui/addon-doc/fesm2015/taiga-ui-addon-doc-components.js + 85 modules
var taiga_ui_addon_doc_components = __webpack_require__(8024);
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/application/application.component.ts





function ApplicationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵelementStart"](0, "p")(1, "code");
    core_mjs_["ɵɵtext"](2, "Application");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](3, " is an abstract class that contains a set of properties and methods for imperative working with microzord child apps. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](4, "p");
    core_mjs_["ɵɵtext"](5, "It can give you more flexability in interaction between complex apps if needed.");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](6, "tui-notification", 3);
    core_mjs_["ɵɵtext"](7, " Be careful, if you need this in your not native application, something probably is going wrong. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](8, "section")(9, "h2");
    core_mjs_["ɵɵtext"](10, "How to get the entity");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](11, "p");
    core_mjs_["ɵɵtext"](12, " Every time you add microzord child app with ");
    core_mjs_["ɵɵelementStart"](13, "code");
    core_mjs_["ɵɵtext"](14, "bootstrapApp");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](15, " function or with any framework ideomatic component, you can get the application entity. ");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](16, "p");
    core_mjs_["ɵɵtext"](17, "See host guides of your framework:");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](18, "ul")(19, "li")(20, "a", 4);
    core_mjs_["ɵɵtext"](21, " Angular as a host ");
    core_mjs_["ɵɵelementEnd"]()();
    core_mjs_["ɵɵelementStart"](22, "li")(23, "a", 5);
    core_mjs_["ɵɵtext"](24, " React as a host ");
    core_mjs_["ɵɵelementEnd"]()()()();
    core_mjs_["ɵɵelementStart"](25, "section")(26, "h2");
    core_mjs_["ɵɵtext"](27, "See also");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵelementStart"](28, "a", 6);
    core_mjs_["ɵɵtext"](29, " Application class source code ");
    core_mjs_["ɵɵelementEnd"]()();
  }
}
function ApplicationComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Application was rendered at least once. ");
    core_mjs_["ɵɵelementStart"](1, "p")(2, "code");
    core_mjs_["ɵɵtext"](3, "false");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](4, " by default.");
    core_mjs_["ɵɵelementEnd"]();
  }
}
function ApplicationComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Application is not on the page. ");
    core_mjs_["ɵɵelementStart"](1, "p")(2, "code");
    core_mjs_["ɵɵtext"](3, "true");
    core_mjs_["ɵɵelementEnd"]();
    core_mjs_["ɵɵtext"](4, " by default.");
    core_mjs_["ɵɵelementEnd"]();
  }
}
function ApplicationComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " DOM element or selector string of DOM element with an application ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Readonly unique name of the application ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Register a callback to be called when an application gets a message ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Emit message to call all onMessage listeners ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Register a callback to be called when an application changes state emitting life cycle event ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Emit life cycle event of the application to call all onHook listeners ");
  }
}
function ApplicationComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵtext"](0, " Destroy an application, remove all listeners ");
  }
}
function ApplicationComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core_mjs_["ɵɵelementStart"](0, "tui-doc-documentation", 7);
    core_mjs_["ɵɵtemplate"](1, ApplicationComponent_ng_template_2_ng_template_1_Template, 5, 0, "ng-template", 8)(2, ApplicationComponent_ng_template_2_ng_template_2_Template, 5, 0, "ng-template", 9)(3, ApplicationComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 10)(4, ApplicationComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11)(5, ApplicationComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12)(6, ApplicationComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13)(7, ApplicationComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14)(8, ApplicationComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 15)(9, ApplicationComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    core_mjs_["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    core_mjs_["ɵɵproperty"]("showValues", false);
  }
}
let ApplicationComponent = /*#__PURE__*/(() => {
  class ApplicationComponent {
    static #_ = this.ɵfac = function ApplicationComponent_Factory(t) {
      return new (t || ApplicationComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/core_mjs_["ɵɵdefineComponent"]({
      type: ApplicationComponent,
      selectors: [["application"]],
      decls: 3,
      vars: 0,
      consts: [["header", "Application entity", "package", "CORE"], ["pageTab", "Description"], ["pageTab", "Props & methods"], ["status", "warning", 1, "tui-space_top-8"], ["tuiLink", "", "routerLink", "/angular-host"], ["tuiLink", "", "routerLink", "/react-host"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/taiga-family/microzord/blob/main/libs/core/src/lib/models/application.ts"], [3, "showValues"], ["documentationPropertyName", "isBootstrapped", "documentationPropertyMode", "property", "documentationPropertyType", "boolean"], ["documentationPropertyName", "isDestroyed", "documentationPropertyMode", "property", "documentationPropertyType", "boolean"], ["documentationPropertyName", "container", "documentationPropertyMode", "property", "documentationPropertyType", "Element | string"], ["documentationPropertyName", "name", "documentationPropertyMode", "property", "documentationPropertyType", "string"], ["documentationPropertyName", "onMessage(fn: Listener<MicrozordMessageEvent>)", "documentationPropertyMode", "method", "documentationPropertyType", "() => void"], ["documentationPropertyName", "emitMessage(event: MicrozordMessageEvent)", "documentationPropertyMode", "method", "documentationPropertyType", "void"], ["documentationPropertyName", "onHook(fn: Listener<MicrozordMessageEvent>)", "documentationPropertyMode", "method", "documentationPropertyType", "() => void"], ["documentationPropertyName", "emitHook(event: MicrozordMessageEvent)", "documentationPropertyMode", "method", "documentationPropertyType", "void"], ["documentationPropertyName", "destroy()", "documentationPropertyMode", "method", "documentationPropertyType", "void"]],
      template: function ApplicationComponent_Template(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵelementStart"](0, "tui-doc-page", 0);
          core_mjs_["ɵɵtemplate"](1, ApplicationComponent_ng_template_1_Template, 30, 0, "ng-template", 1)(2, ApplicationComponent_ng_template_2_Template, 10, 1, "ng-template", 2);
          core_mjs_["ɵɵelementEnd"]();
        }
      },
      dependencies: [taiga_ui_core_components_link/* TuiLinkComponent */.E, taiga_ui_addon_doc_components/* TuiDocDocumentationComponent */.c5, taiga_ui_addon_doc_components/* TuiDocDocumentationPropertyConnectorDirective */.WS, taiga_ui_addon_doc_components/* TuiDocPageComponent */.Pt, taiga_ui_addon_doc_components/* TuiDocPageTabConnectorDirective */.TD, taiga_ui_core_components_notification/* TuiNotificationComponent */.v, router_mjs_.RouterLink],
      changeDetection: 0
    });
  }
  return ApplicationComponent;
})();
;// CONCATENATED MODULE: ./apps/demo/src/app/modules/application/application.module.ts






let ApplicationModule = /*#__PURE__*/(() => {
  class ApplicationModule {
    static #_ = this.ɵfac = function ApplicationModule_Factory(t) {
      return new (t || ApplicationModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/core_mjs_["ɵɵdefineNgModule"]({
      type: ApplicationModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/core_mjs_["ɵɵdefineInjector"]({
      imports: [taiga_ui_core_components_link/* TuiLinkModule */.l, taiga_ui_addon_doc.TuiAddonDocModule, taiga_ui_core_components_notification/* TuiNotificationModule */.O, router_mjs_.RouterModule.forChild((0,taiga_ui_addon_doc_utils/* tuiGenerateRoutes */.CC)(ApplicationComponent))]
    });
  }
  return ApplicationModule;
})();

/***/ })

}]);