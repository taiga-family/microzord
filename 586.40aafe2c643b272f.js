"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[586],{

/***/ 6328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ concatMap)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1631);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4674);


function concatMap(project, resultSelector) {
  return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(resultSelector) ? (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .z)(project, resultSelector, 1) : (0,_mergeMap__WEBPACK_IMPORTED_MODULE_1__/* .mergeMap */ .z)(project, 1);
}
//# sourceMappingURL=concatMap.js.map

/***/ }),

/***/ 3572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ defaultIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9360);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8251);


function defaultIfEmpty(defaultValue) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }
      subscriber.complete();
    }));
  });
}
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),

/***/ 1374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ first)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6973);
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2181);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8180);
/* harmony import */ var _defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3572);
/* harmony import */ var _throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3026);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2737);






function first(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,_filter__WEBPACK_IMPORTED_MODULE_0__/* .filter */ .h)((v, i) => predicate(v, i, source)) : _util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .y, (0,_take__WEBPACK_IMPORTED_MODULE_2__/* .take */ .q)(1), hasDefaultValue ? (0,_defaultIfEmpty__WEBPACK_IMPORTED_MODULE_3__/* .defaultIfEmpty */ .d)(defaultValue) : (0,_throwIfEmpty__WEBPACK_IMPORTED_MODULE_4__/* .throwIfEmpty */ .T)(() => new _util_EmptyError__WEBPACK_IMPORTED_MODULE_5__/* .EmptyError */ .K()));
}
//# sourceMappingURL=first.js.map

/***/ }),

/***/ 3026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ throwIfEmpty)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6973);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9360);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8251);



function throwIfEmpty(errorFactory = defaultErrorFactory) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .e)((source, subscriber) => {
    let hasValue = false;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ .x)(subscriber, value => {
      hasValue = true;
      subscriber.next(value);
    }, () => hasValue ? subscriber.complete() : subscriber.error(errorFactory())));
  });
}
function defaultErrorFactory() {
  return new _util_EmptyError__WEBPACK_IMPORTED_MODULE_2__/* .EmptyError */ .K();
}
//# sourceMappingURL=throwIfEmpty.js.map

/***/ }),

/***/ 6973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ EmptyError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2306);

const EmptyError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__/* .createErrorClass */ .d)(_super => function EmptyErrorImpl() {
  _super(this);
  this.name = 'EmptyError';
  this.message = 'no elements in sequence';
});
//# sourceMappingURL=EmptyError.js.map

/***/ }),

/***/ 7586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ActivatedRoute: () => (/* binding */ ActivatedRoute),
  ActivatedRouteSnapshot: () => (/* binding */ ActivatedRouteSnapshot),
  ActivationEnd: () => (/* binding */ ActivationEnd),
  ActivationStart: () => (/* binding */ ActivationStart),
  BaseRouteReuseStrategy: () => (/* binding */ BaseRouteReuseStrategy),
  ChildActivationEnd: () => (/* binding */ ChildActivationEnd),
  ChildActivationStart: () => (/* binding */ ChildActivationStart),
  ChildrenOutletContexts: () => (/* binding */ ChildrenOutletContexts),
  DefaultTitleStrategy: () => (/* binding */ DefaultTitleStrategy),
  DefaultUrlSerializer: () => (/* binding */ DefaultUrlSerializer),
  GuardsCheckEnd: () => (/* binding */ GuardsCheckEnd),
  GuardsCheckStart: () => (/* binding */ GuardsCheckStart),
  NavigationCancel: () => (/* binding */ NavigationCancel),
  NavigationEnd: () => (/* binding */ NavigationEnd),
  NavigationError: () => (/* binding */ NavigationError),
  NavigationSkipped: () => (/* binding */ NavigationSkipped),
  NavigationStart: () => (/* binding */ NavigationStart),
  NoPreloading: () => (/* binding */ NoPreloading),
  OutletContext: () => (/* binding */ OutletContext),
  PRIMARY_OUTLET: () => (/* binding */ PRIMARY_OUTLET),
  PreloadAllModules: () => (/* binding */ PreloadAllModules),
  PreloadingStrategy: () => (/* binding */ PreloadingStrategy),
  ROUTER_CONFIGURATION: () => (/* binding */ ROUTER_CONFIGURATION),
  ROUTER_INITIALIZER: () => (/* binding */ ROUTER_INITIALIZER),
  ROUTES: () => (/* binding */ ROUTES),
  ResolveEnd: () => (/* binding */ ResolveEnd),
  ResolveStart: () => (/* binding */ ResolveStart),
  RouteConfigLoadEnd: () => (/* binding */ RouteConfigLoadEnd),
  RouteConfigLoadStart: () => (/* binding */ RouteConfigLoadStart),
  RouteReuseStrategy: () => (/* binding */ RouteReuseStrategy),
  Router: () => (/* binding */ Router),
  RouterEvent: () => (/* binding */ RouterEvent),
  RouterLink: () => (/* binding */ RouterLink),
  RouterLinkActive: () => (/* binding */ RouterLinkActive),
  RouterLinkWithHref: () => (/* binding */ RouterLink),
  RouterModule: () => (/* binding */ RouterModule),
  RouterOutlet: () => (/* binding */ RouterOutlet),
  RouterPreloader: () => (/* binding */ RouterPreloader),
  RouterState: () => (/* binding */ RouterState),
  RouterStateSnapshot: () => (/* binding */ RouterStateSnapshot),
  RoutesRecognized: () => (/* binding */ RoutesRecognized),
  Scroll: () => (/* binding */ Scroll),
  TitleStrategy: () => (/* binding */ TitleStrategy),
  UrlHandlingStrategy: () => (/* binding */ UrlHandlingStrategy),
  UrlSegment: () => (/* binding */ UrlSegment),
  UrlSegmentGroup: () => (/* binding */ UrlSegmentGroup),
  UrlSerializer: () => (/* binding */ UrlSerializer),
  UrlTree: () => (/* binding */ UrlTree),
  VERSION: () => (/* binding */ VERSION),
  convertToParamMap: () => (/* binding */ convertToParamMap),
  createUrlTreeFromSnapshot: () => (/* binding */ createUrlTreeFromSnapshot),
  defaultUrlMatcher: () => (/* binding */ defaultUrlMatcher),
  mapToCanActivate: () => (/* binding */ mapToCanActivate),
  mapToCanActivateChild: () => (/* binding */ mapToCanActivateChild),
  mapToCanDeactivate: () => (/* binding */ mapToCanDeactivate),
  mapToCanMatch: () => (/* binding */ mapToCanMatch),
  mapToResolve: () => (/* binding */ mapToResolve),
  provideRouter: () => (/* binding */ provideRouter),
  provideRoutes: () => (/* binding */ provideRoutes),
  withComponentInputBinding: () => (/* binding */ withComponentInputBinding),
  withDebugTracing: () => (/* binding */ withDebugTracing),
  withDisabledInitialNavigation: () => (/* binding */ withDisabledInitialNavigation),
  withEnabledBlockingInitialNavigation: () => (/* binding */ withEnabledBlockingInitialNavigation),
  withHashLocation: () => (/* binding */ withHashLocation),
  withInMemoryScrolling: () => (/* binding */ withInMemoryScrolling),
  withNavigationErrorHandler: () => (/* binding */ withNavigationErrorHandler),
  withPreloading: () => (/* binding */ withPreloading),
  withRouterConfig: () => (/* binding */ withRouterConfig),
  withViewTransitions: () => (/* binding */ withViewTransitions),
  "ɵEmptyOutletComponent": () => (/* binding */ ɵEmptyOutletComponent),
  "ɵROUTER_PROVIDERS": () => (/* binding */ ROUTER_PROVIDERS),
  "ɵafterNextNavigation": () => (/* binding */ afterNextNavigation),
  "ɵloadChildren": () => (/* binding */ loadChildren)
});

// EXTERNAL MODULE: consume shared module (default) @angular/core@=17.0.3 (strict) (singleton) (fallback: ./node_modules/@angular/core/fesm2022/core.mjs)
var core_mjs_ = __webpack_require__(9796);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/isObservable.js
var isObservable = __webpack_require__(2664);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/from.js + 9 modules
var from = __webpack_require__(7715);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/of.js
var of = __webpack_require__(2096);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(5619);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/combineLatest.js
var combineLatest = __webpack_require__(2572);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/EmptyError.js
var EmptyError = __webpack_require__(6973);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/concat.js + 1 modules
var concat = __webpack_require__(5211);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/defer.js
var defer = __webpack_require__(4911);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/pipe.js
var pipe = __webpack_require__(8407);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/throwError.js
var observable_throwError = __webpack_require__(8504);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/empty.js
var empty = __webpack_require__(6232);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(5592);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(7394);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/lift.js
var lift = __webpack_require__(9360);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js
var OperatorSubscriber = __webpack_require__(8251);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/refCount.js


function refCount() {
  return (0,lift/* operate */.e)((source, subscriber) => {
    let connection = null;
    source._refCount++;
    const refCounter = (0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, undefined, undefined, undefined, () => {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }
      const sharedConnection = source._connection;
      const conn = connection;
      connection = null;
      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }
      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);
    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}
//# sourceMappingURL=refCount.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/observable/ConnectableObservable.js





class ConnectableObservable extends Observable/* Observable */.y {
  constructor(source, subjectFactory) {
    super();
    this.source = source;
    this.subjectFactory = subjectFactory;
    this._subject = null;
    this._refCount = 0;
    this._connection = null;
    if ((0,lift/* hasLift */.A)(source)) {
      this.lift = source.lift;
    }
  }
  _subscribe(subscriber) {
    return this.getSubject().subscribe(subscriber);
  }
  getSubject() {
    const subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  }
  _teardown() {
    this._refCount = 0;
    const {
      _connection
    } = this;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  }
  connect() {
    let connection = this._connection;
    if (!connection) {
      connection = this._connection = new Subscription/* Subscription */.w0();
      const subject = this.getSubject();
      connection.add(this.source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subject, undefined, () => {
        this._teardown();
        subject.complete();
      }, err => {
        this._teardown();
        subject.error(err);
      }, () => this._teardown())));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription/* Subscription */.w0.EMPTY;
      }
    }
    return connection;
  }
  refCount() {
    return refCount()(this);
  }
}
//# sourceMappingURL=ConnectableObservable.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js + 1 modules
var Subject = __webpack_require__(8645);
// EXTERNAL MODULE: consume shared module (default) @angular/common@=17.0.3 (strict) (singleton) (fallback: ./node_modules/@angular/common/fesm2022/common.mjs)
var common_mjs_ = __webpack_require__(2320);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/map.js
var map = __webpack_require__(7398);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/switchMap.js
var switchMap = __webpack_require__(4664);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/take.js
var take = __webpack_require__(8180);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/startWith.js
var startWith = __webpack_require__(7921);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/filter.js
var filter = __webpack_require__(2181);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mergeMap.js + 1 modules
var mergeMap = __webpack_require__(1631);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/first.js
var first = __webpack_require__(1374);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/concatMap.js
var concatMap = __webpack_require__(6328);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/tap.js
var tap = __webpack_require__(9397);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/catchError.js
var catchError = __webpack_require__(6306);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/scanInternals.js

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return (source, subscriber) => {
    let hasState = hasSeed;
    let state = seed;
    let index = 0;
    source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, value => {
      const i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && (() => {
      hasState && subscriber.next(state);
      subscriber.complete();
    })));
  };
}
//# sourceMappingURL=scanInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/scan.js


function scan(accumulator, seed) {
  return (0,lift/* operate */.e)(scanInternals(accumulator, seed, arguments.length >= 2, true));
}
//# sourceMappingURL=scan.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/defaultIfEmpty.js
var defaultIfEmpty = __webpack_require__(3572);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeLast.js



function takeLast(count) {
  return count <= 0 ? () => empty/* EMPTY */.E : (0,lift/* operate */.e)((source, subscriber) => {
    let buffer = [];
    source.subscribe((0,OperatorSubscriber/* createOperatorSubscriber */.x)(subscriber, value => {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, () => {
      for (const value of buffer) {
        subscriber.next(value);
      }
      subscriber.complete();
    }, undefined, () => {
      buffer = null;
    }));
  });
}
//# sourceMappingURL=takeLast.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/throwIfEmpty.js
var throwIfEmpty = __webpack_require__(3026);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/identity.js
var identity = __webpack_require__(2737);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/last.js






function last(predicate, defaultValue) {
  const hasDefaultValue = arguments.length >= 2;
  return source => source.pipe(predicate ? (0,filter/* filter */.h)((v, i) => predicate(v, i, source)) : identity/* identity */.y, takeLast(1), hasDefaultValue ? (0,defaultIfEmpty/* defaultIfEmpty */.d)(defaultValue) : (0,throwIfEmpty/* throwIfEmpty */.T)(() => new EmptyError/* EmptyError */.K()));
}
//# sourceMappingURL=last.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mapTo.js
var mapTo = __webpack_require__(975);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/finalize.js
var finalize = __webpack_require__(4716);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(9773);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(7537);
// EXTERNAL MODULE: ./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs
var platform_browser = __webpack_require__(6593);
;// CONCATENATED MODULE: ./node_modules/@angular/router/fesm2022/router.mjs
/**
 * @license Angular v17.0.3
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */









/**
 * The primary routing outlet.
 *
 * @publicApi
 */
const PRIMARY_OUTLET = 'primary';
/**
 * A private symbol used to store the value of `Route.title` inside the `Route.data` if it is a
 * static string or `Route.resolve` if anything else. This allows us to reuse the existing route
 * data/resolvers to support the title feature without new instrumentation in the `Router` pipeline.
 */
const RouteTitleKey = /* @__PURE__ */Symbol('RouteTitle');
class ParamsAsMap {
  constructor(params) {
    this.params = params || {};
  }
  has(name) {
    return Object.prototype.hasOwnProperty.call(this.params, name);
  }
  get(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v[0] : v;
    }
    return null;
  }
  getAll(name) {
    if (this.has(name)) {
      const v = this.params[name];
      return Array.isArray(v) ? v : [v];
    }
    return [];
  }
  get keys() {
    return Object.keys(this.params);
  }
}
/**
 * Converts a `Params` instance to a `ParamMap`.
 * @param params The instance to convert.
 * @returns The new map instance.
 *
 * @publicApi
 */
function convertToParamMap(params) {
  return new ParamsAsMap(params);
}
/**
 * Matches the route configuration (`route`) against the actual URL (`segments`).
 *
 * When no matcher is defined on a `Route`, this is the matcher used by the Router by default.
 *
 * @param segments The remaining unmatched segments in the current navigation
 * @param segmentGroup The current segment group being matched
 * @param route The `Route` to match against.
 *
 * @see {@link UrlMatchResult}
 * @see {@link Route}
 *
 * @returns The resulting match information or `null` if the `route` should not match.
 * @publicApi
 */
function defaultUrlMatcher(segments, segmentGroup, route) {
  const parts = route.path.split('/');
  if (parts.length > segments.length) {
    // The actual URL is shorter than the config, no match
    return null;
  }
  if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || parts.length < segments.length)) {
    // The config is longer than the actual URL but we are looking for a full match, return null
    return null;
  }
  const posParams = {};
  // Check each config part against the actual URL
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const segment = segments[index];
    const isParameter = part.startsWith(':');
    if (isParameter) {
      posParams[part.substring(1)] = segment;
    } else if (part !== segment.path) {
      // The actual URL part does not match the config, no match
      return null;
    }
  }
  return {
    consumed: segments.slice(0, parts.length),
    posParams
  };
}
function shallowEqualArrays(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (!shallowEqual(a[i], b[i])) return false;
  }
  return true;
}
function shallowEqual(a, b) {
  // While `undefined` should never be possible, it would sometimes be the case in IE 11
  // and pre-chromium Edge. The check below accounts for this edge case.
  const k1 = a ? getDataKeys(a) : undefined;
  const k2 = b ? getDataKeys(b) : undefined;
  if (!k1 || !k2 || k1.length != k2.length) {
    return false;
  }
  let key;
  for (let i = 0; i < k1.length; i++) {
    key = k1[i];
    if (!equalArraysOrString(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
/**
 * Gets the keys of an object, including `symbol` keys.
 */
function getDataKeys(obj) {
  return [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];
}
/**
 * Test equality for arrays of strings or a string.
 */
function equalArraysOrString(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    const aSorted = [...a].sort();
    const bSorted = [...b].sort();
    return aSorted.every((val, index) => bSorted[index] === val);
  } else {
    return a === b;
  }
}
/**
 * Return the last element of an array.
 */
function router_last(a) {
  return a.length > 0 ? a[a.length - 1] : null;
}
function wrapIntoObservable(value) {
  if ((0,isObservable/* isObservable */.b)(value)) {
    return value;
  }
  if ((0,core_mjs_["ɵisPromise"])(value)) {
    // Use `Promise.resolve()` to wrap promise-like instances.
    // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
    // change detection.
    return (0,from/* from */.D)(Promise.resolve(value));
  }
  return (0,of.of)(value);
}
const pathCompareMap = {
  'exact': equalSegmentGroups,
  'subset': containsSegmentGroup
};
const paramCompareMap = {
  'exact': equalParams,
  'subset': containsParams,
  'ignored': () => true
};
function containsTree(container, containee, options) {
  return pathCompareMap[options.paths](container.root, containee.root, options.matrixParams) && paramCompareMap[options.queryParams](container.queryParams, containee.queryParams) && !(options.fragment === 'exact' && container.fragment !== containee.fragment);
}
function equalParams(container, containee) {
  // TODO: This does not handle array params correctly.
  return shallowEqual(container, containee);
}
function equalSegmentGroups(container, containee, matrixParams) {
  if (!equalPath(container.segments, containee.segments)) return false;
  if (!matrixParamsMatch(container.segments, containee.segments, matrixParams)) {
    return false;
  }
  if (container.numberOfChildren !== containee.numberOfChildren) return false;
  for (const c in containee.children) {
    if (!container.children[c]) return false;
    if (!equalSegmentGroups(container.children[c], containee.children[c], matrixParams)) return false;
  }
  return true;
}
function containsParams(container, containee) {
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(key => equalArraysOrString(container[key], containee[key]));
}
function containsSegmentGroup(container, containee, matrixParams) {
  return containsSegmentGroupHelper(container, containee, containee.segments, matrixParams);
}
function containsSegmentGroupHelper(container, containee, containeePaths, matrixParams) {
  if (container.segments.length > containeePaths.length) {
    const current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    if (!matrixParamsMatch(current, containeePaths, matrixParams)) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!matrixParamsMatch(container.segments, containeePaths, matrixParams)) return false;
    for (const c in containee.children) {
      if (!container.children[c]) return false;
      if (!containsSegmentGroup(container.children[c], containee.children[c], matrixParams)) {
        return false;
      }
    }
    return true;
  } else {
    const current = containeePaths.slice(0, container.segments.length);
    const next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, current)) return false;
    if (!matrixParamsMatch(container.segments, current, matrixParams)) return false;
    if (!container.children[PRIMARY_OUTLET]) return false;
    return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next, matrixParams);
  }
}
function matrixParamsMatch(containerPaths, containeePaths, options) {
  return containeePaths.every((containeeSegment, i) => {
    return paramCompareMap[options](containerPaths[i].parameters, containeeSegment.parameters);
  });
}
/**
 * @description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class UrlTree {
  constructor( /** The root segment group of the URL tree */
  root = new UrlSegmentGroup([], {}), /** The query params of the URL */
  queryParams = {}, /** The fragment of the URL */
  fragment = null) {
    this.root = root;
    this.queryParams = queryParams;
    this.fragment = fragment;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (root.segments.length > 0) {
        throw new core_mjs_["ɵRuntimeError"](4015 /* RuntimeErrorCode.INVALID_ROOT_URL_SEGMENT */, 'The root `UrlSegmentGroup` should not contain `segments`. ' + 'Instead, these segments belong in the `children` so they can be associated with a named outlet.');
      }
    }
  }
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = convertToParamMap(this.queryParams);
    }
    return this._queryParamMap;
  }
  /** @docsNotRequired */
  toString() {
    return DEFAULT_SERIALIZER.serialize(this);
  }
}
/**
 * @description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * @publicApi
 */
class UrlSegmentGroup {
  constructor( /** The URL segments of this group. See `UrlSegment` for more information */
  segments, /** The list of children of this group */
  children) {
    this.segments = segments;
    this.children = children;
    /** The parent node in the url tree */
    this.parent = null;
    Object.values(children).forEach(v => v.parent = this);
  }
  /** Whether the segment has child segments */
  hasChildren() {
    return this.numberOfChildren > 0;
  }
  /** Number of child segments */
  get numberOfChildren() {
    return Object.keys(this.children).length;
  }
  /** @docsNotRequired */
  toString() {
    return serializePaths(this);
  }
}
/**
 * @description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class UrlSegment {
  constructor( /** The path part of a URL segment */
  path, /** The matrix parameters associated with a segment */
  parameters) {
    this.path = path;
    this.parameters = parameters;
  }
  get parameterMap() {
    if (!this._parameterMap) {
      this._parameterMap = convertToParamMap(this.parameters);
    }
    return this._parameterMap;
  }
  /** @docsNotRequired */
  toString() {
    return serializePath(this);
  }
}
function equalSegments(as, bs) {
  return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}
function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every((a, i) => a.path === bs[i].path);
}
function mapChildrenIntoArray(segment, fn) {
  let res = [];
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet === PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  Object.entries(segment.children).forEach(([childOutlet, child]) => {
    if (childOutlet !== PRIMARY_OUTLET) {
      res = res.concat(fn(child, childOutlet));
    }
  });
  return res;
}
/**
 * @description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * @publicApi
 */
let UrlSerializer = /*#__PURE__*/(() => {
  class UrlSerializer {
    static #_ = this.ɵfac = function UrlSerializer_Factory(t) {
      return new (t || UrlSerializer)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: UrlSerializer,
      factory: () => (() => new DefaultUrlSerializer())(),
      providedIn: 'root'
    });
  }
  return UrlSerializer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * @publicApi
 */
class DefaultUrlSerializer {
  /** Parses a url into a `UrlTree` */
  parse(url) {
    const p = new UrlParser(url);
    return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
  }
  /** Converts a `UrlTree` into a url */
  serialize(tree) {
    const segment = `/${serializeSegment(tree.root, true)}`;
    const query = serializeQueryParams(tree.queryParams);
    const fragment = typeof tree.fragment === `string` ? `#${encodeUriFragment(tree.fragment)}` : '';
    return `${segment}${query}${fragment}`;
  }
}
const DEFAULT_SERIALIZER = /*#__PURE__*/new DefaultUrlSerializer();
function serializePaths(segment) {
  return segment.segments.map(p => serializePath(p)).join('/');
}
function serializeSegment(segment, root) {
  if (!segment.hasChildren()) {
    return serializePaths(segment);
  }
  if (root) {
    const primary = segment.children[PRIMARY_OUTLET] ? serializeSegment(segment.children[PRIMARY_OUTLET], false) : '';
    const children = [];
    Object.entries(segment.children).forEach(([k, v]) => {
      if (k !== PRIMARY_OUTLET) {
        children.push(`${k}:${serializeSegment(v, false)}`);
      }
    });
    return children.length > 0 ? `${primary}(${children.join('//')})` : primary;
  } else {
    const children = mapChildrenIntoArray(segment, (v, k) => {
      if (k === PRIMARY_OUTLET) {
        return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
      }
      return [`${k}:${serializeSegment(v, false)}`];
    });
    // use no parenthesis if the only child is a primary outlet route
    if (Object.keys(segment.children).length === 1 && segment.children[PRIMARY_OUTLET] != null) {
      return `${serializePaths(segment)}/${children[0]}`;
    }
    return `${serializePaths(segment)}/(${children.join('//')})`;
  }
}
/**
 * Encodes a URI string with the default encoding. This function will only ever be called from
 * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
 * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
 * have to be encoded per https://url.spec.whatwg.org.
 */
function encodeUriString(s) {
  return encodeURIComponent(s).replace(/%40/g, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',');
}
/**
 * This function should be used to encode both keys and values in a query string key/value. In
 * the following URL, you need to call encodeUriQuery on "k" and "v":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriQuery(s) {
  return encodeUriString(s).replace(/%3B/gi, ';');
}
/**
 * This function should be used to encode a URL fragment. In the following URL, you need to call
 * encodeUriFragment on "f":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriFragment(s) {
  return encodeURI(s);
}
/**
 * This function should be run on any URI segment as well as the key and value in a key/value
 * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
 * "mk", and "mv":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 */
function encodeUriSegment(s) {
  return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
function decode(s) {
  return decodeURIComponent(s);
}
// Query keys/values should have the "+" replaced first, as "+" in a query string is " ".
// decodeURIComponent function will not decode "+" as a space.
function decodeQuery(s) {
  return decode(s.replace(/\+/g, '%20'));
}
function serializePath(path) {
  return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}
function serializeMatrixParams(params) {
  return Object.keys(params).map(key => `;${encodeUriSegment(key)}=${encodeUriSegment(params[key])}`).join('');
}
function serializeQueryParams(params) {
  const strParams = Object.keys(params).map(name => {
    const value = params[name];
    return Array.isArray(value) ? value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join('&') : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  }).filter(s => !!s);
  return strParams.length ? `?${strParams.join('&')}` : '';
}
const SEGMENT_RE = /^[^\/()?;#]+/;
function matchSegments(str) {
  const match = str.match(SEGMENT_RE);
  return match ? match[0] : '';
}
const MATRIX_PARAM_SEGMENT_RE = /^[^\/()?;=#]+/;
function matchMatrixKeySegments(str) {
  const match = str.match(MATRIX_PARAM_SEGMENT_RE);
  return match ? match[0] : '';
}
const QUERY_PARAM_RE = /^[^=?&#]+/;
// Return the name of the query param at the start of the string or an empty string
function matchQueryParams(str) {
  const match = str.match(QUERY_PARAM_RE);
  return match ? match[0] : '';
}
const QUERY_PARAM_VALUE_RE = /^[^&#]+/;
// Return the value of the query param at the start of the string or an empty string
function matchUrlQueryParamValue(str) {
  const match = str.match(QUERY_PARAM_VALUE_RE);
  return match ? match[0] : '';
}
class UrlParser {
  constructor(url) {
    this.url = url;
    this.remaining = url;
  }
  parseRootSegment() {
    this.consumeOptional('/');
    if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
      return new UrlSegmentGroup([], {});
    }
    // The root segment group never has segments
    return new UrlSegmentGroup([], this.parseChildren());
  }
  parseQueryParams() {
    const params = {};
    if (this.consumeOptional('?')) {
      do {
        this.parseQueryParam(params);
      } while (this.consumeOptional('&'));
    }
    return params;
  }
  parseFragment() {
    return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
  }
  parseChildren() {
    if (this.remaining === '') {
      return {};
    }
    this.consumeOptional('/');
    const segments = [];
    if (!this.peekStartsWith('(')) {
      segments.push(this.parseSegment());
    }
    while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
      this.capture('/');
      segments.push(this.parseSegment());
    }
    let children = {};
    if (this.peekStartsWith('/(')) {
      this.capture('/');
      children = this.parseParens(true);
    }
    let res = {};
    if (this.peekStartsWith('(')) {
      res = this.parseParens(false);
    }
    if (segments.length > 0 || Object.keys(children).length > 0) {
      res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
    }
    return res;
  }
  // parse a segment with its matrix parameters
  // ie `name;k1=v1;k2`
  parseSegment() {
    const path = matchSegments(this.remaining);
    if (path === '' && this.peekStartsWith(';')) {
      throw new core_mjs_["ɵRuntimeError"](4009 /* RuntimeErrorCode.EMPTY_PATH_WITH_PARAMS */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Empty path url segment cannot have parameters: '${this.remaining}'.`);
    }
    this.capture(path);
    return new UrlSegment(decode(path), this.parseMatrixParams());
  }
  parseMatrixParams() {
    const params = {};
    while (this.consumeOptional(';')) {
      this.parseParam(params);
    }
    return params;
  }
  parseParam(params) {
    const key = matchMatrixKeySegments(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = '';
    if (this.consumeOptional('=')) {
      const valueMatch = matchSegments(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    params[decode(key)] = decode(value);
  }
  // Parse a single query parameter `name[=value]`
  parseQueryParam(params) {
    const key = matchQueryParams(this.remaining);
    if (!key) {
      return;
    }
    this.capture(key);
    let value = '';
    if (this.consumeOptional('=')) {
      const valueMatch = matchUrlQueryParamValue(this.remaining);
      if (valueMatch) {
        value = valueMatch;
        this.capture(value);
      }
    }
    const decodedKey = decodeQuery(key);
    const decodedVal = decodeQuery(value);
    if (params.hasOwnProperty(decodedKey)) {
      // Append to existing values
      let currentVal = params[decodedKey];
      if (!Array.isArray(currentVal)) {
        currentVal = [currentVal];
        params[decodedKey] = currentVal;
      }
      currentVal.push(decodedVal);
    } else {
      // Create a new value
      params[decodedKey] = decodedVal;
    }
  }
  // parse `(a/b//outlet_name:c/d)`
  parseParens(allowPrimary) {
    const segments = {};
    this.capture('(');
    while (!this.consumeOptional(')') && this.remaining.length > 0) {
      const path = matchSegments(this.remaining);
      const next = this.remaining[path.length];
      // if is is not one of these characters, then the segment was unescaped
      // or the group was not closed
      if (next !== '/' && next !== ')' && next !== ';') {
        throw new core_mjs_["ɵRuntimeError"](4010 /* RuntimeErrorCode.UNPARSABLE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot parse url '${this.url}'`);
      }
      let outletName = undefined;
      if (path.indexOf(':') > -1) {
        outletName = path.slice(0, path.indexOf(':'));
        this.capture(outletName);
        this.capture(':');
      } else if (allowPrimary) {
        outletName = PRIMARY_OUTLET;
      }
      const children = this.parseChildren();
      segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] : new UrlSegmentGroup([], children);
      this.consumeOptional('//');
    }
    return segments;
  }
  peekStartsWith(str) {
    return this.remaining.startsWith(str);
  }
  // Consumes the prefix when it is present and returns whether it has been consumed
  consumeOptional(str) {
    if (this.peekStartsWith(str)) {
      this.remaining = this.remaining.substring(str.length);
      return true;
    }
    return false;
  }
  capture(str) {
    if (!this.consumeOptional(str)) {
      throw new core_mjs_["ɵRuntimeError"](4011 /* RuntimeErrorCode.UNEXPECTED_VALUE_IN_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Expected "${str}".`);
    }
  }
}
function createRoot(rootCandidate) {
  return rootCandidate.segments.length > 0 ? new UrlSegmentGroup([], {
    [PRIMARY_OUTLET]: rootCandidate
  }) : rootCandidate;
}
/**
 * Recursively
 * - merges primary segment children into their parents
 * - drops empty children (those which have no segments and no children themselves). This latter
 * prevents serializing a group into something like `/a(aux:)`, where `aux` is an empty child
 * segment.
 * - merges named outlets without a primary segment sibling into the children. This prevents
 * serializing a URL like `//(a:a)(b:b) instead of `/(a:a//b:b)` when the aux b route lives on the
 * root but the `a` route lives under an empty path primary route.
 */
function squashSegmentGroup(segmentGroup) {
  const newChildren = {};
  for (const childOutlet of Object.keys(segmentGroup.children)) {
    const child = segmentGroup.children[childOutlet];
    const childCandidate = squashSegmentGroup(child);
    // moves named children in an empty path primary child into this group
    if (childOutlet === PRIMARY_OUTLET && childCandidate.segments.length === 0 && childCandidate.hasChildren()) {
      for (const [grandChildOutlet, grandChild] of Object.entries(childCandidate.children)) {
        newChildren[grandChildOutlet] = grandChild;
      }
    } // don't add empty children
    else if (childCandidate.segments.length > 0 || childCandidate.hasChildren()) {
      newChildren[childOutlet] = childCandidate;
    }
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, newChildren);
  return mergeTrivialChildren(s);
}
/**
 * When possible, merges the primary outlet child into the parent `UrlSegmentGroup`.
 *
 * When a segment group has only one child which is a primary outlet, merges that child into the
 * parent. That is, the child segment group's segments are merged into the `s` and the child's
 * children become the children of `s`. Think of this like a 'squash', merging the child segment
 * group into the parent.
 */
function mergeTrivialChildren(s) {
  if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
    const c = s.children[PRIMARY_OUTLET];
    return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
  }
  return s;
}
function isUrlTree(v) {
  return v instanceof UrlTree;
}

/**
 * Creates a `UrlTree` relative to an `ActivatedRouteSnapshot`.
 *
 * @publicApi
 *
 *
 * @param relativeTo The `ActivatedRouteSnapshot` to apply the commands to
 * @param commands An array of URL fragments with which to construct the new URL tree.
 * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
 * segments, followed by the parameters for each segment.
 * The fragments are applied to the one provided in the `relativeTo` parameter.
 * @param queryParams The query parameters for the `UrlTree`. `null` if the `UrlTree` does not have
 *     any query parameters.
 * @param fragment The fragment for the `UrlTree`. `null` if the `UrlTree` does not have a fragment.
 *
 * @usageNotes
 *
 * ```
 * // create /team/33/user/11
 * createUrlTreeFromSnapshot(snapshot, ['/team', 33, 'user', 11]);
 *
 * // create /team/33;expand=true/user/11
 * createUrlTreeFromSnapshot(snapshot, ['/team', 33, {expand: true}, 'user', 11]);
 *
 * // you can collapse static segments like this (this works only with the first passed-in value):
 * createUrlTreeFromSnapshot(snapshot, ['/team/33/user', userId]);
 *
 * // If the first segment can contain slashes, and you do not want the router to split it,
 * // you can do the following:
 * createUrlTreeFromSnapshot(snapshot, [{segmentPath: '/one/two'}]);
 *
 * // create /team/33/(user/11//right:chat)
 * createUrlTreeFromSnapshot(snapshot, ['/team', 33, {outlets: {primary: 'user/11', right:
 * 'chat'}}], null, null);
 *
 * // remove the right secondary node
 * createUrlTreeFromSnapshot(snapshot, ['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
 *
 * // For the examples below, assume the current URL is for the `/team/33/user/11` and the
 * `ActivatedRouteSnapshot` points to `user/11`:
 *
 * // navigate to /team/33/user/11/details
 * createUrlTreeFromSnapshot(snapshot, ['details']);
 *
 * // navigate to /team/33/user/22
 * createUrlTreeFromSnapshot(snapshot, ['../22']);
 *
 * // navigate to /team/44/user/22
 * createUrlTreeFromSnapshot(snapshot, ['../../team/44/user/22']);
 * ```
 */
function createUrlTreeFromSnapshot(relativeTo, commands, queryParams = null, fragment = null) {
  const relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeTo);
  return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, queryParams, fragment);
}
function createSegmentGroupFromRoute(route) {
  let targetGroup;
  function createSegmentGroupFromRouteRecursive(currentRoute) {
    const childOutlets = {};
    for (const childSnapshot of currentRoute.children) {
      const root = createSegmentGroupFromRouteRecursive(childSnapshot);
      childOutlets[childSnapshot.outlet] = root;
    }
    const segmentGroup = new UrlSegmentGroup(currentRoute.url, childOutlets);
    if (currentRoute === route) {
      targetGroup = segmentGroup;
    }
    return segmentGroup;
  }
  const rootCandidate = createSegmentGroupFromRouteRecursive(route.root);
  const rootSegmentGroup = createRoot(rootCandidate);
  return targetGroup ?? rootSegmentGroup;
}
function createUrlTreeFromSegmentGroup(relativeTo, commands, queryParams, fragment) {
  let root = relativeTo;
  while (root.parent) {
    root = root.parent;
  }
  // There are no commands so the `UrlTree` goes to the same path as the one created from the
  // `UrlSegmentGroup`. All we need to do is update the `queryParams` and `fragment` without
  // applying any other logic.
  if (commands.length === 0) {
    return tree(root, root, root, queryParams, fragment);
  }
  const nav = computeNavigation(commands);
  if (nav.toRoot()) {
    return tree(root, root, new UrlSegmentGroup([], {}), queryParams, fragment);
  }
  const position = findStartingPositionForTargetGroup(nav, root, relativeTo);
  const newSegmentGroup = position.processChildren ? updateSegmentGroupChildren(position.segmentGroup, position.index, nav.commands) : updateSegmentGroup(position.segmentGroup, position.index, nav.commands);
  return tree(root, position.segmentGroup, newSegmentGroup, queryParams, fragment);
}
function isMatrixParams(command) {
  return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
/**
 * Determines if a given command has an `outlets` map. When we encounter a command
 * with an outlets k/v map, we need to apply each outlet individually to the existing segment.
 */
function isCommandWithOutlets(command) {
  return typeof command === 'object' && command != null && command.outlets;
}
function tree(oldRoot, oldSegmentGroup, newSegmentGroup, queryParams, fragment) {
  let qp = {};
  if (queryParams) {
    Object.entries(queryParams).forEach(([name, value]) => {
      qp[name] = Array.isArray(value) ? value.map(v => `${v}`) : `${value}`;
    });
  }
  let rootCandidate;
  if (oldRoot === oldSegmentGroup) {
    rootCandidate = newSegmentGroup;
  } else {
    rootCandidate = replaceSegment(oldRoot, oldSegmentGroup, newSegmentGroup);
  }
  const newRoot = createRoot(squashSegmentGroup(rootCandidate));
  return new UrlTree(newRoot, qp, fragment);
}
/**
 * Replaces the `oldSegment` which is located in some child of the `current` with the `newSegment`.
 * This also has the effect of creating new `UrlSegmentGroup` copies to update references. This
 * shouldn't be necessary but the fallback logic for an invalid ActivatedRoute in the creation uses
 * the Router's current url tree. If we don't create new segment groups, we end up modifying that
 * value.
 */
function replaceSegment(current, oldSegment, newSegment) {
  const children = {};
  Object.entries(current.children).forEach(([outletName, c]) => {
    if (c === oldSegment) {
      children[outletName] = newSegment;
    } else {
      children[outletName] = replaceSegment(c, oldSegment, newSegment);
    }
  });
  return new UrlSegmentGroup(current.segments, children);
}
class Navigation {
  constructor(isAbsolute, numberOfDoubleDots, commands) {
    this.isAbsolute = isAbsolute;
    this.numberOfDoubleDots = numberOfDoubleDots;
    this.commands = commands;
    if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
      throw new core_mjs_["ɵRuntimeError"](4003 /* RuntimeErrorCode.ROOT_SEGMENT_MATRIX_PARAMS */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Root segment cannot have matrix parameters');
    }
    const cmdWithOutlet = commands.find(isCommandWithOutlets);
    if (cmdWithOutlet && cmdWithOutlet !== router_last(commands)) {
      throw new core_mjs_["ɵRuntimeError"](4004 /* RuntimeErrorCode.MISPLACED_OUTLETS_COMMAND */, (typeof ngDevMode === 'undefined' || ngDevMode) && '{outlets:{}} has to be the last command');
    }
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
  }
}
/** Transforms commands to a normalized `Navigation` */
function computeNavigation(commands) {
  if (typeof commands[0] === 'string' && commands.length === 1 && commands[0] === '/') {
    return new Navigation(true, 0, commands);
  }
  let numberOfDoubleDots = 0;
  let isAbsolute = false;
  const res = commands.reduce((res, cmd, cmdIdx) => {
    if (typeof cmd === 'object' && cmd != null) {
      if (cmd.outlets) {
        const outlets = {};
        Object.entries(cmd.outlets).forEach(([name, commands]) => {
          outlets[name] = typeof commands === 'string' ? commands.split('/') : commands;
        });
        return [...res, {
          outlets
        }];
      }
      if (cmd.segmentPath) {
        return [...res, cmd.segmentPath];
      }
    }
    if (!(typeof cmd === 'string')) {
      return [...res, cmd];
    }
    if (cmdIdx === 0) {
      cmd.split('/').forEach((urlPart, partIndex) => {
        if (partIndex == 0 && urlPart === '.') {
          // skip './a'
        } else if (partIndex == 0 && urlPart === '') {
          //  '/a'
          isAbsolute = true;
        } else if (urlPart === '..') {
          //  '../a'
          numberOfDoubleDots++;
        } else if (urlPart != '') {
          res.push(urlPart);
        }
      });
      return res;
    }
    return [...res, cmd];
  }, []);
  return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
class Position {
  constructor(segmentGroup, processChildren, index) {
    this.segmentGroup = segmentGroup;
    this.processChildren = processChildren;
    this.index = index;
  }
}
function findStartingPositionForTargetGroup(nav, root, target) {
  if (nav.isAbsolute) {
    return new Position(root, true, 0);
  }
  if (!target) {
    // `NaN` is used only to maintain backwards compatibility with incorrectly mocked
    // `ActivatedRouteSnapshot` in tests. In prior versions of this code, the position here was
    // determined based on an internal property that was rarely mocked, resulting in `NaN`. In
    // reality, this code path should _never_ be touched since `target` is not allowed to be falsey.
    return new Position(root, false, NaN);
  }
  if (target.parent === null) {
    return new Position(target, true, 0);
  }
  const modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
  const index = target.segments.length - 1 + modifier;
  return createPositionApplyingDoubleDots(target, index, nav.numberOfDoubleDots);
}
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
  let g = group;
  let ci = index;
  let dd = numberOfDoubleDots;
  while (dd > ci) {
    dd -= ci;
    g = g.parent;
    if (!g) {
      throw new core_mjs_["ɵRuntimeError"](4005 /* RuntimeErrorCode.INVALID_DOUBLE_DOTS */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Invalid number of \'../\'');
    }
    ci = g.segments.length;
  }
  return new Position(g, false, ci - dd);
}
function getOutlets(commands) {
  if (isCommandWithOutlets(commands[0])) {
    return commands[0].outlets;
  }
  return {
    [PRIMARY_OUTLET]: commands
  };
}
function updateSegmentGroup(segmentGroup, startIndex, commands) {
  if (!segmentGroup) {
    segmentGroup = new UrlSegmentGroup([], {});
  }
  if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
    return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
  }
  const m = prefixedWith(segmentGroup, startIndex, commands);
  const slicedCommands = commands.slice(m.commandIndex);
  if (m.match && m.pathIndex < segmentGroup.segments.length) {
    const g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
    g.children[PRIMARY_OUTLET] = new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
    return updateSegmentGroupChildren(g, 0, slicedCommands);
  } else if (m.match && slicedCommands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else if (m.match && !segmentGroup.hasChildren()) {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  } else if (m.match) {
    return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
  } else {
    return createNewSegmentGroup(segmentGroup, startIndex, commands);
  }
}
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
  if (commands.length === 0) {
    return new UrlSegmentGroup(segmentGroup.segments, {});
  } else {
    const outlets = getOutlets(commands);
    const children = {};
    // If the set of commands applies to anything other than the primary outlet and the child
    // segment is an empty path primary segment on its own, we want to apply the commands to the
    // empty child path rather than here. The outcome is that the empty primary child is effectively
    // removed from the final output UrlTree. Imagine the following config:
    //
    // {path: '', children: [{path: '**', outlet: 'popup'}]}.
    //
    // Navigation to /(popup:a) will activate the child outlet correctly Given a follow-up
    // navigation with commands
    // ['/', {outlets: {'popup': 'b'}}], we _would not_ want to apply the outlet commands to the
    // root segment because that would result in
    // //(popup:a)(popup:b) since the outlet command got applied one level above where it appears in
    // the `ActivatedRoute` rather than updating the existing one.
    //
    // Because empty paths do not appear in the URL segments and the fact that the segments used in
    // the output `UrlTree` are squashed to eliminate these empty paths where possible
    // https://github.com/angular/angular/blob/13f10de40e25c6900ca55bd83b36bd533dacfa9e/packages/router/src/url_tree.ts#L755
    // it can be hard to determine what is the right thing to do when applying commands to a
    // `UrlSegmentGroup` that is created from an "unsquashed"/expanded `ActivatedRoute` tree.
    // This code effectively "squashes" empty path primary routes when they have no siblings on
    // the same level of the tree.
    if (Object.keys(outlets).some(o => o !== PRIMARY_OUTLET) && segmentGroup.children[PRIMARY_OUTLET] && segmentGroup.numberOfChildren === 1 && segmentGroup.children[PRIMARY_OUTLET].segments.length === 0) {
      const childrenOfEmptyChild = updateSegmentGroupChildren(segmentGroup.children[PRIMARY_OUTLET], startIndex, commands);
      return new UrlSegmentGroup(segmentGroup.segments, childrenOfEmptyChild.children);
    }
    Object.entries(outlets).forEach(([outlet, commands]) => {
      if (typeof commands === 'string') {
        commands = [commands];
      }
      if (commands !== null) {
        children[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
      }
    });
    Object.entries(segmentGroup.children).forEach(([childOutlet, child]) => {
      if (outlets[childOutlet] === undefined) {
        children[childOutlet] = child;
      }
    });
    return new UrlSegmentGroup(segmentGroup.segments, children);
  }
}
function prefixedWith(segmentGroup, startIndex, commands) {
  let currentCommandIndex = 0;
  let currentPathIndex = startIndex;
  const noMatch = {
    match: false,
    pathIndex: 0,
    commandIndex: 0
  };
  while (currentPathIndex < segmentGroup.segments.length) {
    if (currentCommandIndex >= commands.length) return noMatch;
    const path = segmentGroup.segments[currentPathIndex];
    const command = commands[currentCommandIndex];
    // Do not try to consume command as part of the prefixing if it has outlets because it can
    // contain outlets other than the one being processed. Consuming the outlets command would
    // result in other outlets being ignored.
    if (isCommandWithOutlets(command)) {
      break;
    }
    const curr = `${command}`;
    const next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
    if (currentPathIndex > 0 && curr === undefined) break;
    if (curr && next && typeof next === 'object' && next.outlets === undefined) {
      if (!compare(curr, next, path)) return noMatch;
      currentCommandIndex += 2;
    } else {
      if (!compare(curr, {}, path)) return noMatch;
      currentCommandIndex++;
    }
    currentPathIndex++;
  }
  return {
    match: true,
    pathIndex: currentPathIndex,
    commandIndex: currentCommandIndex
  };
}
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
  const paths = segmentGroup.segments.slice(0, startIndex);
  let i = 0;
  while (i < commands.length) {
    const command = commands[i];
    if (isCommandWithOutlets(command)) {
      const children = createNewSegmentChildren(command.outlets);
      return new UrlSegmentGroup(paths, children);
    }
    // if we start with an object literal, we need to reuse the path part from the segment
    if (i === 0 && isMatrixParams(commands[0])) {
      const p = segmentGroup.segments[startIndex];
      paths.push(new UrlSegment(p.path, stringify(commands[0])));
      i++;
      continue;
    }
    const curr = isCommandWithOutlets(command) ? command.outlets[PRIMARY_OUTLET] : `${command}`;
    const next = i < commands.length - 1 ? commands[i + 1] : null;
    if (curr && next && isMatrixParams(next)) {
      paths.push(new UrlSegment(curr, stringify(next)));
      i += 2;
    } else {
      paths.push(new UrlSegment(curr, {}));
      i++;
    }
  }
  return new UrlSegmentGroup(paths, {});
}
function createNewSegmentChildren(outlets) {
  const children = {};
  Object.entries(outlets).forEach(([outlet, commands]) => {
    if (typeof commands === 'string') {
      commands = [commands];
    }
    if (commands !== null) {
      children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
    }
  });
  return children;
}
function stringify(params) {
  const res = {};
  Object.entries(params).forEach(([k, v]) => res[k] = `${v}`);
  return res;
}
function compare(path, params, segment) {
  return path == segment.path && shallowEqual(params, segment.parameters);
}
const IMPERATIVE_NAVIGATION = 'imperative';
/**
 * Base for events the router goes through, as opposed to events tied to a specific
 * route. Fired one time for any given navigation.
 *
 * The following code shows how a class subscribes to router events.
 *
 * ```ts
 * import {Event, RouterEvent, Router} from '@angular/router';
 *
 * class MyService {
 *   constructor(public router: Router) {
 *     router.events.pipe(
 *        filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent)
 *     ).subscribe((e: RouterEvent) => {
 *       // Do something
 *     });
 *   }
 * }
 * ```
 *
 * @see {@link Event}
 * @see [Router events summary](guide/router-reference#router-events)
 * @publicApi
 */
class RouterEvent {
  constructor( /** A unique ID that the router assigns to every router navigation. */
  id, /** The URL that is the destination for this navigation. */
  url) {
    this.id = id;
    this.url = url;
  }
}
/**
 * An event triggered when a navigation starts.
 *
 * @publicApi
 */
class NavigationStart extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  navigationTrigger = 'imperative', /** @docsNotRequired */
  restoredState = null) {
    super(id, url);
    this.type = 0 /* EventType.NavigationStart */;
    this.navigationTrigger = navigationTrigger;
    this.restoredState = restoredState;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
  }
}
/**
 * An event triggered when a navigation ends successfully.
 *
 * @see {@link NavigationStart}
 * @see {@link NavigationCancel}
 * @see {@link NavigationError}
 *
 * @publicApi
 */
class NavigationEnd extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.type = 1 /* EventType.NavigationEnd */;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
  }
}
/**
 * An event triggered when a navigation is canceled, directly or indirectly.
 * This can happen for several reasons including when a route guard
 * returns `false` or initiates a redirect by returning a `UrlTree`.
 *
 * @see {@link NavigationStart}
 * @see {@link NavigationEnd}
 * @see {@link NavigationError}
 *
 * @publicApi
 */
class NavigationCancel extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url,
  /**
   * A description of why the navigation was cancelled. For debug purposes only. Use `code`
   * instead for a stable cancellation reason that can be used in production.
   */
  reason,
  /**
   * A code to indicate why the navigation was canceled. This cancellation code is stable for
   * the reason and can be relied on whereas the `reason` string could change and should not be
   * used in production.
   */
  code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = 2 /* EventType.NavigationCancel */;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
  }
}
/**
 * An event triggered when a navigation is skipped.
 * This can happen for a couple reasons including onSameUrlHandling
 * is set to `ignore` and the navigation URL is not different than the
 * current state.
 *
 * @publicApi
 */
class NavigationSkipped extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url,
  /**
   * A description of why the navigation was skipped. For debug purposes only. Use `code`
   * instead for a stable skipped reason that can be used in production.
   */
  reason,
  /**
   * A code to indicate why the navigation was skipped. This code is stable for
   * the reason and can be relied on whereas the `reason` string could change and should not be
   * used in production.
   */
  code) {
    super(id, url);
    this.reason = reason;
    this.code = code;
    this.type = 16 /* EventType.NavigationSkipped */;
  }
}
/**
 * An event triggered when a navigation fails due to an unexpected error.
 *
 * @see {@link NavigationStart}
 * @see {@link NavigationEnd}
 * @see {@link NavigationCancel}
 *
 * @publicApi
 */
class NavigationError extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  error,
  /**
   * The target of the navigation when the error occurred.
   *
   * Note that this can be `undefined` because an error could have occurred before the
   * `RouterStateSnapshot` was created for the navigation.
   */
  target) {
    super(id, url);
    this.error = error;
    this.target = target;
    this.type = 3 /* EventType.NavigationError */;
  }
  /** @docsNotRequired */
  toString() {
    return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
  }
}
/**
 * An event triggered when routes are recognized.
 *
 * @publicApi
 */
class RoutesRecognized extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects, /** @docsNotRequired */
  state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 4 /* EventType.RoutesRecognized */;
  }
  /** @docsNotRequired */
  toString() {
    return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
/**
 * An event triggered at the start of the Guard phase of routing.
 *
 * @see {@link GuardsCheckEnd}
 *
 * @publicApi
 */
class GuardsCheckStart extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects, /** @docsNotRequired */
  state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 7 /* EventType.GuardsCheckStart */;
  }

  toString() {
    return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
/**
 * An event triggered at the end of the Guard phase of routing.
 *
 * @see {@link GuardsCheckStart}
 *
 * @publicApi
 */
class GuardsCheckEnd extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects, /** @docsNotRequired */
  state, /** @docsNotRequired */
  shouldActivate) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.shouldActivate = shouldActivate;
    this.type = 8 /* EventType.GuardsCheckEnd */;
  }

  toString() {
    return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
  }
}
/**
 * An event triggered at the start of the Resolve phase of routing.
 *
 * Runs in the "resolve" phase whether or not there is anything to resolve.
 * In future, may change to only run when there are things to be resolved.
 *
 * @see {@link ResolveEnd}
 *
 * @publicApi
 */
class ResolveStart extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects, /** @docsNotRequired */
  state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 5 /* EventType.ResolveStart */;
  }

  toString() {
    return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
/**
 * An event triggered at the end of the Resolve phase of routing.
 * @see {@link ResolveStart}
 *
 * @publicApi
 */
class ResolveEnd extends RouterEvent {
  constructor( /** @docsNotRequired */
  id, /** @docsNotRequired */
  url, /** @docsNotRequired */
  urlAfterRedirects, /** @docsNotRequired */
  state) {
    super(id, url);
    this.urlAfterRedirects = urlAfterRedirects;
    this.state = state;
    this.type = 6 /* EventType.ResolveEnd */;
  }

  toString() {
    return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
  }
}
/**
 * An event triggered before lazy loading a route configuration.
 *
 * @see {@link RouteConfigLoadEnd}
 *
 * @publicApi
 */
class RouteConfigLoadStart {
  constructor( /** @docsNotRequired */
  route) {
    this.route = route;
    this.type = 9 /* EventType.RouteConfigLoadStart */;
  }

  toString() {
    return `RouteConfigLoadStart(path: ${this.route.path})`;
  }
}
/**
 * An event triggered when a route has been lazy loaded.
 *
 * @see {@link RouteConfigLoadStart}
 *
 * @publicApi
 */
class RouteConfigLoadEnd {
  constructor( /** @docsNotRequired */
  route) {
    this.route = route;
    this.type = 10 /* EventType.RouteConfigLoadEnd */;
  }

  toString() {
    return `RouteConfigLoadEnd(path: ${this.route.path})`;
  }
}
/**
 * An event triggered at the start of the child-activation
 * part of the Resolve phase of routing.
 * @see {@link ChildActivationEnd}
 * @see {@link ResolveStart}
 *
 * @publicApi
 */
class ChildActivationStart {
  constructor( /** @docsNotRequired */
  snapshot) {
    this.snapshot = snapshot;
    this.type = 11 /* EventType.ChildActivationStart */;
  }

  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
    return `ChildActivationStart(path: '${path}')`;
  }
}
/**
 * An event triggered at the end of the child-activation part
 * of the Resolve phase of routing.
 * @see {@link ChildActivationStart}
 * @see {@link ResolveStart}
 * @publicApi
 */
class ChildActivationEnd {
  constructor( /** @docsNotRequired */
  snapshot) {
    this.snapshot = snapshot;
    this.type = 12 /* EventType.ChildActivationEnd */;
  }

  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
    return `ChildActivationEnd(path: '${path}')`;
  }
}
/**
 * An event triggered at the start of the activation part
 * of the Resolve phase of routing.
 * @see {@link ActivationEnd}
 * @see {@link ResolveStart}
 *
 * @publicApi
 */
class ActivationStart {
  constructor( /** @docsNotRequired */
  snapshot) {
    this.snapshot = snapshot;
    this.type = 13 /* EventType.ActivationStart */;
  }

  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
    return `ActivationStart(path: '${path}')`;
  }
}
/**
 * An event triggered at the end of the activation part
 * of the Resolve phase of routing.
 * @see {@link ActivationStart}
 * @see {@link ResolveStart}
 *
 * @publicApi
 */
class ActivationEnd {
  constructor( /** @docsNotRequired */
  snapshot) {
    this.snapshot = snapshot;
    this.type = 14 /* EventType.ActivationEnd */;
  }

  toString() {
    const path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
    return `ActivationEnd(path: '${path}')`;
  }
}
/**
 * An event triggered by scrolling.
 *
 * @publicApi
 */
class Scroll {
  constructor( /** @docsNotRequired */
  routerEvent, /** @docsNotRequired */
  position, /** @docsNotRequired */
  anchor) {
    this.routerEvent = routerEvent;
    this.position = position;
    this.anchor = anchor;
    this.type = 15 /* EventType.Scroll */;
  }

  toString() {
    const pos = this.position ? `${this.position[0]}, ${this.position[1]}` : null;
    return `Scroll(anchor: '${this.anchor}', position: '${pos}')`;
  }
}
class BeforeActivateRoutes {}
class RedirectRequest {
  constructor(url) {
    this.url = url;
  }
}
function stringifyEvent(routerEvent) {
  switch (routerEvent.type) {
    case 14 /* EventType.ActivationEnd */:
      return `ActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ''}')`;
    case 13 /* EventType.ActivationStart */:
      return `ActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ''}')`;
    case 12 /* EventType.ChildActivationEnd */:
      return `ChildActivationEnd(path: '${routerEvent.snapshot.routeConfig?.path || ''}')`;
    case 11 /* EventType.ChildActivationStart */:
      return `ChildActivationStart(path: '${routerEvent.snapshot.routeConfig?.path || ''}')`;
    case 8 /* EventType.GuardsCheckEnd */:
      return `GuardsCheckEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state}, shouldActivate: ${routerEvent.shouldActivate})`;
    case 7 /* EventType.GuardsCheckStart */:
      return `GuardsCheckStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case 2 /* EventType.NavigationCancel */:
      return `NavigationCancel(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case 16 /* EventType.NavigationSkipped */:
      return `NavigationSkipped(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case 1 /* EventType.NavigationEnd */:
      return `NavigationEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}')`;
    case 3 /* EventType.NavigationError */:
      return `NavigationError(id: ${routerEvent.id}, url: '${routerEvent.url}', error: ${routerEvent.error})`;
    case 0 /* EventType.NavigationStart */:
      return `NavigationStart(id: ${routerEvent.id}, url: '${routerEvent.url}')`;
    case 6 /* EventType.ResolveEnd */:
      return `ResolveEnd(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case 5 /* EventType.ResolveStart */:
      return `ResolveStart(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case 10 /* EventType.RouteConfigLoadEnd */:
      return `RouteConfigLoadEnd(path: ${routerEvent.route.path})`;
    case 9 /* EventType.RouteConfigLoadStart */:
      return `RouteConfigLoadStart(path: ${routerEvent.route.path})`;
    case 4 /* EventType.RoutesRecognized */:
      return `RoutesRecognized(id: ${routerEvent.id}, url: '${routerEvent.url}', urlAfterRedirects: '${routerEvent.urlAfterRedirects}', state: ${routerEvent.state})`;
    case 15 /* EventType.Scroll */:
      const pos = routerEvent.position ? `${routerEvent.position[0]}, ${routerEvent.position[1]}` : null;
      return `Scroll(anchor: '${routerEvent.anchor}', position: '${pos}')`;
  }
}

/**
 * Store contextual information about a `RouterOutlet`
 *
 * @publicApi
 */
class OutletContext {
  constructor() {
    this.outlet = null;
    this.route = null;
    this.injector = null;
    this.children = new ChildrenOutletContexts();
    this.attachRef = null;
  }
}
/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * @publicApi
 */
let ChildrenOutletContexts = /*#__PURE__*/(() => {
  class ChildrenOutletContexts {
    constructor() {
      // contexts for child outlets, by name.
      this.contexts = new Map();
    }
    /** Called when a `RouterOutlet` directive is instantiated */
    onChildOutletCreated(childName, outlet) {
      const context = this.getOrCreateContext(childName);
      context.outlet = outlet;
      this.contexts.set(childName, context);
    }
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    onChildOutletDestroyed(childName) {
      const context = this.getContext(childName);
      if (context) {
        context.outlet = null;
        context.attachRef = null;
      }
    }
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    onOutletDeactivated() {
      const contexts = this.contexts;
      this.contexts = new Map();
      return contexts;
    }
    onOutletReAttached(contexts) {
      this.contexts = contexts;
    }
    getOrCreateContext(childName) {
      let context = this.getContext(childName);
      if (!context) {
        context = new OutletContext();
        this.contexts.set(childName, context);
      }
      return context;
    }
    getContext(childName) {
      return this.contexts.get(childName) || null;
    }
    static #_ = this.ɵfac = function ChildrenOutletContexts_Factory(t) {
      return new (t || ChildrenOutletContexts)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: ChildrenOutletContexts,
      factory: ChildrenOutletContexts.ɵfac,
      providedIn: 'root'
    });
  }
  return ChildrenOutletContexts;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class Tree {
  constructor(root) {
    this._root = root;
  }
  get root() {
    return this._root.value;
  }
  /**
   * @internal
   */
  parent(t) {
    const p = this.pathFromRoot(t);
    return p.length > 1 ? p[p.length - 2] : null;
  }
  /**
   * @internal
   */
  children(t) {
    const n = findNode(t, this._root);
    return n ? n.children.map(t => t.value) : [];
  }
  /**
   * @internal
   */
  firstChild(t) {
    const n = findNode(t, this._root);
    return n && n.children.length > 0 ? n.children[0].value : null;
  }
  /**
   * @internal
   */
  siblings(t) {
    const p = findPath(t, this._root);
    if (p.length < 2) return [];
    const c = p[p.length - 2].children.map(c => c.value);
    return c.filter(cc => cc !== t);
  }
  /**
   * @internal
   */
  pathFromRoot(t) {
    return findPath(t, this._root).map(s => s.value);
  }
}
// DFS for the node matching the value
function findNode(value, node) {
  if (value === node.value) return node;
  for (const child of node.children) {
    const node = findNode(value, child);
    if (node) return node;
  }
  return null;
}
// Return the path to the node with the given value using DFS
function findPath(value, node) {
  if (value === node.value) return [node];
  for (const child of node.children) {
    const path = findPath(value, child);
    if (path.length) {
      path.unshift(node);
      return path;
    }
  }
  return [];
}
class TreeNode {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
}
// Return the list of T indexed by outlet name
function nodeChildrenAsMap(node) {
  const map = {};
  if (node) {
    node.children.forEach(child => map[child.value.outlet] = child);
  }
  return map;
}

/**
 * Represents the state of the router as a tree of activated routes.
 *
 * @usageNotes
 *
 * Every node in the route tree is an `ActivatedRoute` instance
 * that knows about the "consumed" URL segments, the extracted parameters,
 * and the resolved data.
 * Use the `ActivatedRoute` properties to traverse the tree from any node.
 *
 * The following fragment shows how a component gets the root node
 * of the current state to establish its own route tree:
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @see {@link ActivatedRoute}
 * @see [Getting route information](guide/router#getting-route-information)
 *
 * @publicApi
 */
class RouterState extends Tree {
  /** @internal */
  constructor(root, /** The current snapshot of the router state */
  snapshot) {
    super(root);
    this.snapshot = snapshot;
    setRouterState(this, root);
  }
  toString() {
    return this.snapshot.toString();
  }
}
function createEmptyState(urlTree, rootComponent) {
  const snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
  const emptyUrl = new BehaviorSubject/* BehaviorSubject */.X([new UrlSegment('', {})]);
  const emptyParams = new BehaviorSubject/* BehaviorSubject */.X({});
  const emptyData = new BehaviorSubject/* BehaviorSubject */.X({});
  const emptyQueryParams = new BehaviorSubject/* BehaviorSubject */.X({});
  const fragment = new BehaviorSubject/* BehaviorSubject */.X('');
  const activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
  activated.snapshot = snapshot.root;
  return new RouterState(new TreeNode(activated, []), snapshot);
}
function createEmptyStateSnapshot(urlTree, rootComponent) {
  const emptyParams = {};
  const emptyData = {};
  const emptyQueryParams = {};
  const fragment = '';
  const activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, {});
  return new RouterStateSnapshot('', new TreeNode(activated, []));
}
/**
 * Provides access to information about a route associated with a component
 * that is loaded in an outlet.
 * Use to traverse the `RouterState` tree and extract information from nodes.
 *
 * The following example shows how to construct a component using information from a
 * currently activated route.
 *
 * Note: the observables in this class only emit when the current and previous values differ based
 * on shallow equality. For example, changing deeply nested properties in resolved `data` will not
 * cause the `ActivatedRoute.data` `Observable` to emit a new value.
 *
 * {@example router/activated-route/module.ts region="activated-route"
 *     header="activated-route.component.ts"}
 *
 * @see [Getting route information](guide/router#getting-route-information)
 *
 * @publicApi
 */
class ActivatedRoute {
  /** @internal */
  constructor( /** @internal */
  urlSubject, /** @internal */
  paramsSubject, /** @internal */
  queryParamsSubject, /** @internal */
  fragmentSubject, /** @internal */
  dataSubject, /** The outlet name of the route, a constant. */
  outlet, /** The component of the route, a constant. */
  component, futureSnapshot) {
    this.urlSubject = urlSubject;
    this.paramsSubject = paramsSubject;
    this.queryParamsSubject = queryParamsSubject;
    this.fragmentSubject = fragmentSubject;
    this.dataSubject = dataSubject;
    this.outlet = outlet;
    this.component = component;
    this._futureSnapshot = futureSnapshot;
    this.title = this.dataSubject?.pipe((0,map/* map */.U)(d => d[RouteTitleKey])) ?? (0,of.of)(undefined);
    // TODO(atscott): Verify that these can be changed to `.asObservable()` with TGP.
    this.url = urlSubject;
    this.params = paramsSubject;
    this.queryParams = queryParamsSubject;
    this.fragment = fragmentSubject;
    this.data = dataSubject;
  }
  /** The configuration used to match this route. */
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  /** The root of the router state. */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree. */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree. */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree. */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route. */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  /**
   * An Observable that contains a map of the required and optional parameters
   * specific to the route.
   * The map supports retrieving single and multiple values from the same parameter.
   */
  get paramMap() {
    if (!this._paramMap) {
      this._paramMap = this.params.pipe((0,map/* map */.U)(p => convertToParamMap(p)));
    }
    return this._paramMap;
  }
  /**
   * An Observable that contains a map of the query parameters available to all routes.
   * The map supports retrieving single and multiple values from the query parameter.
   */
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = this.queryParams.pipe((0,map/* map */.U)(p => convertToParamMap(p)));
    }
    return this._queryParamMap;
  }
  toString() {
    return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
  }
}
/**
 * Returns the inherited params, data, and resolve for a given route.
 *
 * By default, we do not inherit parent data unless the current route is path-less or the parent
 * route is component-less.
 */
function getInherited(route, parent, paramsInheritanceStrategy = 'emptyOnly') {
  let inherited;
  const {
    routeConfig
  } = route;
  if (parent !== null && (paramsInheritanceStrategy === 'always' ||
  // inherit parent data if route is empty path
  routeConfig?.path === '' ||
  // inherit parent data if parent was componentless
  !parent.component && !parent.routeConfig?.loadComponent)) {
    inherited = {
      params: {
        ...parent.params,
        ...route.params
      },
      data: {
        ...parent.data,
        ...route.data
      },
      resolve: {
        // Snapshots are created with data inherited from parent and guards (i.e. canActivate) can
        // change data because it's not frozen...
        // This first line could be deleted chose to break/disallow mutating the `data` object in
        // guards.
        // Note that data from parents still override this mutated data so anyone relying on this
        // might be surprised that it doesn't work if parent data is inherited but otherwise does.
        ...route.data,
        // Ensure inherited resolved data overrides inherited static data
        ...parent.data,
        // static data from the current route overrides any inherited data
        ...routeConfig?.data,
        // resolved data from current route overrides everything
        ...route._resolvedData
      }
    };
  } else {
    inherited = {
      params: route.params,
      data: route.data,
      resolve: {
        ...route.data,
        ...(route._resolvedData ?? {})
      }
    };
  }
  if (routeConfig && hasStaticTitle(routeConfig)) {
    inherited.resolve[RouteTitleKey] = routeConfig.title;
  }
  return inherited;
}
/**
 * @description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * The following example initializes a component with route information extracted
 * from the snapshot of the root node at the time of creation.
 *
 * ```
 * @Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class ActivatedRouteSnapshot {
  /** The resolved route title */
  get title() {
    // Note: This _must_ be a getter because the data is mutated in the resolvers. Title will not be
    // available at the time of class instantiation.
    return this.data?.[RouteTitleKey];
  }
  /** @internal */
  constructor( /** The URL segments matched by this route */
  url,
  /**
   *  The matrix parameters scoped to this route.
   *
   *  You can compute all params (or data) in the router state or to get params outside
   *  of an activated component by traversing the `RouterState` tree as in the following
   *  example:
   *  ```
   *  collectRouteParams(router: Router) {
   *    let params = {};
   *    let stack: ActivatedRouteSnapshot[] = [router.routerState.snapshot.root];
   *    while (stack.length > 0) {
   *      const route = stack.pop()!;
   *      params = {...params, ...route.params};
   *      stack.push(...route.children);
   *    }
   *    return params;
   *  }
   *  ```
   */
  params, /** The query parameters shared by all the routes */
  queryParams, /** The URL fragment shared by all the routes */
  fragment, /** The static and resolved data of this route */
  data, /** The outlet name of the route */
  outlet, /** The component of the route */
  component, routeConfig, resolve) {
    this.url = url;
    this.params = params;
    this.queryParams = queryParams;
    this.fragment = fragment;
    this.data = data;
    this.outlet = outlet;
    this.component = component;
    this.routeConfig = routeConfig;
    this._resolve = resolve;
  }
  /** The root of the router state */
  get root() {
    return this._routerState.root;
  }
  /** The parent of this route in the router state tree */
  get parent() {
    return this._routerState.parent(this);
  }
  /** The first child of this route in the router state tree */
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  /** The children of this route in the router state tree */
  get children() {
    return this._routerState.children(this);
  }
  /** The path from the root of the router state tree to this route */
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    if (!this._paramMap) {
      this._paramMap = convertToParamMap(this.params);
    }
    return this._paramMap;
  }
  get queryParamMap() {
    if (!this._queryParamMap) {
      this._queryParamMap = convertToParamMap(this.queryParams);
    }
    return this._queryParamMap;
  }
  toString() {
    const url = this.url.map(segment => segment.toString()).join('/');
    const matched = this.routeConfig ? this.routeConfig.path : '';
    return `Route(url:'${url}', path:'${matched}')`;
  }
}
/**
 * @description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * The following example shows how a component is initialized with information
 * from the snapshot of the root node's state at the time of creation.
 *
 * ```
 * @Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class RouterStateSnapshot extends Tree {
  /** @internal */
  constructor( /** The url from which this snapshot was created */
  url, root) {
    super(root);
    this.url = url;
    setRouterState(this, root);
  }
  toString() {
    return serializeNode(this._root);
  }
}
function setRouterState(state, node) {
  node.value._routerState = state;
  node.children.forEach(c => setRouterState(state, c));
}
function serializeNode(node) {
  const c = node.children.length > 0 ? ` { ${node.children.map(serializeNode).join(', ')} } ` : '';
  return `${node.value}${c}`;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 */
function advanceActivatedRoute(route) {
  if (route.snapshot) {
    const currentSnapshot = route.snapshot;
    const nextSnapshot = route._futureSnapshot;
    route.snapshot = nextSnapshot;
    if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
      route.queryParamsSubject.next(nextSnapshot.queryParams);
    }
    if (currentSnapshot.fragment !== nextSnapshot.fragment) {
      route.fragmentSubject.next(nextSnapshot.fragment);
    }
    if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
      route.paramsSubject.next(nextSnapshot.params);
    }
    if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
      route.urlSubject.next(nextSnapshot.url);
    }
    if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
      route.dataSubject.next(nextSnapshot.data);
    }
  } else {
    route.snapshot = route._futureSnapshot;
    // this is for resolved data
    route.dataSubject.next(route._futureSnapshot.data);
  }
}
function equalParamsAndUrlSegments(a, b) {
  const equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
  const parentsMismatch = !a.parent !== !b.parent;
  return equalUrlParams && !parentsMismatch && (!a.parent || equalParamsAndUrlSegments(a.parent, b.parent));
}
function hasStaticTitle(config) {
  return typeof config.title === 'string' || config.title === null;
}

/**
 * @description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * Each outlet can have a unique name, determined by the optional `name` attribute.
 * The name cannot be set or changed dynamically. If not set, default value is "primary".
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * Named outlets can be the targets of secondary routes.
 * The `Route` object for a secondary route has an `outlet` property to identify the target outlet:
 *
 * `{path: <base-path>, component: <component>, outlet: <target_outlet_name>}`
 *
 * Using named outlets and secondary routes, you can target multiple outlets in
 * the same `RouterLink` directive.
 *
 * The router keeps track of separate branches in a navigation tree for each named outlet and
 * generates a representation of that tree in the URL.
 * The URL for a secondary route uses the following syntax to specify both the primary and secondary
 * routes at the same time:
 *
 * `http://base-path/primary-route-path(outlet-name:route-path)`
 *
 * A router outlet emits an activate event when a new component is instantiated,
 * deactivate event when a component is destroyed.
 * An attached event emits when the `RouteReuseStrategy` instructs the outlet to reattach the
 * subtree, and the detached event emits when the `RouteReuseStrategy` instructs the outlet to
 * detach the subtree.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'
 *   (attach)='onAttach($event)'
 *   (detach)='onDetach($event)'></router-outlet>
 * ```
 *
 * @see [Routing tutorial](guide/router-tutorial-toh#named-outlets "Example of a named
 * outlet and secondary route configuration").
 * @see {@link RouterLink}
 * @see {@link Route}
 * @ngModule RouterModule
 *
 * @publicApi
 */
let RouterOutlet = /*#__PURE__*/(() => {
  class RouterOutlet {
    constructor() {
      this.activated = null;
      this._activatedRoute = null;
      /**
       * The name of the outlet
       *
       * @see [named outlets](guide/router-tutorial-toh#displaying-multiple-routes-in-named-outlets)
       */
      this.name = PRIMARY_OUTLET;
      this.activateEvents = new core_mjs_.EventEmitter();
      this.deactivateEvents = new core_mjs_.EventEmitter();
      /**
       * Emits an attached component instance when the `RouteReuseStrategy` instructs to re-attach a
       * previously detached subtree.
       **/
      this.attachEvents = new core_mjs_.EventEmitter();
      /**
       * Emits a detached component instance when the `RouteReuseStrategy` instructs to detach the
       * subtree.
       */
      this.detachEvents = new core_mjs_.EventEmitter();
      this.parentContexts = (0,core_mjs_.inject)(ChildrenOutletContexts);
      this.location = (0,core_mjs_.inject)(core_mjs_.ViewContainerRef);
      this.changeDetector = (0,core_mjs_.inject)(core_mjs_.ChangeDetectorRef);
      this.environmentInjector = (0,core_mjs_.inject)(core_mjs_.EnvironmentInjector);
      this.inputBinder = (0,core_mjs_.inject)(INPUT_BINDER, {
        optional: true
      });
      /** @nodoc */
      this.supportsBindingToComponentInputs = true;
    }
    /** @internal */
    get activatedComponentRef() {
      return this.activated;
    }
    /** @nodoc */
    ngOnChanges(changes) {
      if (changes['name']) {
        const {
          firstChange,
          previousValue
        } = changes['name'];
        if (firstChange) {
          // The first change is handled by ngOnInit. Because ngOnChanges doesn't get called when no
          // input is set at all, we need to centrally handle the first change there.
          return;
        }
        // unregister with the old name
        if (this.isTrackedInParentContexts(previousValue)) {
          this.deactivate();
          this.parentContexts.onChildOutletDestroyed(previousValue);
        }
        // register the new name
        this.initializeOutletWithName();
      }
    }
    /** @nodoc */
    ngOnDestroy() {
      // Ensure that the registered outlet is this one before removing it on the context.
      if (this.isTrackedInParentContexts(this.name)) {
        this.parentContexts.onChildOutletDestroyed(this.name);
      }
      this.inputBinder?.unsubscribeFromRouteData(this);
    }
    isTrackedInParentContexts(outletName) {
      return this.parentContexts.getContext(outletName)?.outlet === this;
    }
    /** @nodoc */
    ngOnInit() {
      this.initializeOutletWithName();
    }
    initializeOutletWithName() {
      this.parentContexts.onChildOutletCreated(this.name, this);
      if (this.activated) {
        return;
      }
      // If the outlet was not instantiated at the time the route got activated we need to populate
      // the outlet when it is initialized (ie inside a NgIf)
      const context = this.parentContexts.getContext(this.name);
      if (context?.route) {
        if (context.attachRef) {
          // `attachRef` is populated when there is an existing component to mount
          this.attach(context.attachRef, context.route);
        } else {
          // otherwise the component defined in the configuration is created
          this.activateWith(context.route, context.injector);
        }
      }
    }
    get isActivated() {
      return !!this.activated;
    }
    /**
     * @returns The currently activated component instance.
     * @throws An error if the outlet is not activated.
     */
    get component() {
      if (!this.activated) throw new core_mjs_["ɵRuntimeError"](4012 /* RuntimeErrorCode.OUTLET_NOT_ACTIVATED */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Outlet is not activated');
      return this.activated.instance;
    }
    get activatedRoute() {
      if (!this.activated) throw new core_mjs_["ɵRuntimeError"](4012 /* RuntimeErrorCode.OUTLET_NOT_ACTIVATED */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Outlet is not activated');
      return this._activatedRoute;
    }
    get activatedRouteData() {
      if (this._activatedRoute) {
        return this._activatedRoute.snapshot.data;
      }
      return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach() {
      if (!this.activated) throw new core_mjs_["ɵRuntimeError"](4012 /* RuntimeErrorCode.OUTLET_NOT_ACTIVATED */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Outlet is not activated');
      this.location.detach();
      const cmp = this.activated;
      this.activated = null;
      this._activatedRoute = null;
      this.detachEvents.emit(cmp.instance);
      return cmp;
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(ref, activatedRoute) {
      this.activated = ref;
      this._activatedRoute = activatedRoute;
      this.location.insert(ref.hostView);
      this.inputBinder?.bindActivatedRouteToOutletComponent(this);
      this.attachEvents.emit(ref.instance);
    }
    deactivate() {
      if (this.activated) {
        const c = this.component;
        this.activated.destroy();
        this.activated = null;
        this._activatedRoute = null;
        this.deactivateEvents.emit(c);
      }
    }
    activateWith(activatedRoute, environmentInjector) {
      if (this.isActivated) {
        throw new core_mjs_["ɵRuntimeError"](4013 /* RuntimeErrorCode.OUTLET_ALREADY_ACTIVATED */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Cannot activate an already activated outlet');
      }
      this._activatedRoute = activatedRoute;
      const location = this.location;
      const snapshot = activatedRoute.snapshot;
      const component = snapshot.component;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const injector = new OutletInjector(activatedRoute, childContexts, location.injector);
      this.activated = location.createComponent(component, {
        index: location.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      // Calling `markForCheck` to make sure we will run the change detection when the
      // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
      this.changeDetector.markForCheck();
      this.inputBinder?.bindActivatedRouteToOutletComponent(this);
      this.activateEvents.emit(this.activated.instance);
    }
    static #_ = this.ɵfac = function RouterOutlet_Factory(t) {
      return new (t || RouterOutlet)();
    };
    static #_2 = this.ɵdir = /* @__PURE__ */core_mjs_["ɵɵdefineDirective"]({
      type: RouterOutlet,
      selectors: [["router-outlet"]],
      inputs: {
        name: "name"
      },
      outputs: {
        activateEvents: "activate",
        deactivateEvents: "deactivate",
        attachEvents: "attach",
        detachEvents: "detach"
      },
      exportAs: ["outlet"],
      standalone: true,
      features: [core_mjs_["ɵɵNgOnChangesFeature"]]
    });
  }
  return RouterOutlet;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class OutletInjector {
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
}
const INPUT_BINDER = /*#__PURE__*/new core_mjs_.InjectionToken('');
/**
 * Injectable used as a tree-shakable provider for opting in to binding router data to component
 * inputs.
 *
 * The RouterOutlet registers itself with this service when an `ActivatedRoute` is attached or
 * activated. When this happens, the service subscribes to the `ActivatedRoute` observables (params,
 * queryParams, data) and sets the inputs of the component using `ComponentRef.setInput`.
 * Importantly, when an input does not have an item in the route data with a matching key, this
 * input is set to `undefined`. If it were not done this way, the previous information would be
 * retained if the data got removed from the route (i.e. if a query parameter is removed).
 *
 * The `RouterOutlet` should unregister itself when destroyed via `unsubscribeFromRouteData` so that
 * the subscriptions are cleaned up.
 */
let RoutedComponentInputBinder = /*#__PURE__*/(() => {
  class RoutedComponentInputBinder {
    constructor() {
      this.outletDataSubscriptions = new Map();
    }
    bindActivatedRouteToOutletComponent(outlet) {
      this.unsubscribeFromRouteData(outlet);
      this.subscribeToRouteData(outlet);
    }
    unsubscribeFromRouteData(outlet) {
      this.outletDataSubscriptions.get(outlet)?.unsubscribe();
      this.outletDataSubscriptions.delete(outlet);
    }
    subscribeToRouteData(outlet) {
      const {
        activatedRoute
      } = outlet;
      const dataSubscription = (0,combineLatest/* combineLatest */.a)([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe((0,switchMap/* switchMap */.w)(([queryParams, params, data], index) => {
        data = {
          ...queryParams,
          ...params,
          ...data
        };
        // Get the first result from the data subscription synchronously so it's available to
        // the component as soon as possible (and doesn't require a second change detection).
        if (index === 0) {
          return (0,of.of)(data);
        }
        // Promise.resolve is used to avoid synchronously writing the wrong data when
        // two of the Observables in the `combineLatest` stream emit one after
        // another.
        return Promise.resolve(data);
      })).subscribe(data => {
        // Outlet may have been deactivated or changed names to be associated with a different
        // route
        if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
          this.unsubscribeFromRouteData(outlet);
          return;
        }
        const mirror = (0,core_mjs_.reflectComponentType)(activatedRoute.component);
        if (!mirror) {
          this.unsubscribeFromRouteData(outlet);
          return;
        }
        for (const {
          templateName
        } of mirror.inputs) {
          outlet.activatedComponentRef.setInput(templateName, data[templateName]);
        }
      });
      this.outletDataSubscriptions.set(outlet, dataSubscription);
    }
    static #_ = this.ɵfac = function RoutedComponentInputBinder_Factory(t) {
      return new (t || RoutedComponentInputBinder)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: RoutedComponentInputBinder,
      factory: RoutedComponentInputBinder.ɵfac
    });
  }
  return RoutedComponentInputBinder;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function createRouterState(routeReuseStrategy, curr, prevState) {
  const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
  return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
  // reuse an activated route that is currently displayed on the screen
  if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
    const value = prevState.value;
    value._futureSnapshot = curr.value;
    const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
    return new TreeNode(value, children);
  } else {
    if (routeReuseStrategy.shouldAttach(curr.value)) {
      // retrieve an activated route that is used to be displayed, but is not currently displayed
      const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
      if (detachedRouteHandle !== null) {
        const tree = detachedRouteHandle.route;
        tree.value._futureSnapshot = curr.value;
        tree.children = curr.children.map(c => createNode(routeReuseStrategy, c));
        return tree;
      }
    }
    const value = createActivatedRoute(curr.value);
    const children = curr.children.map(c => createNode(routeReuseStrategy, c));
    return new TreeNode(value, children);
  }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
  return curr.children.map(child => {
    for (const p of prevState.children) {
      if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
        return createNode(routeReuseStrategy, child, p);
      }
    }
    return createNode(routeReuseStrategy, child);
  });
}
function createActivatedRoute(c) {
  return new ActivatedRoute(new BehaviorSubject/* BehaviorSubject */.X(c.url), new BehaviorSubject/* BehaviorSubject */.X(c.params), new BehaviorSubject/* BehaviorSubject */.X(c.queryParams), new BehaviorSubject/* BehaviorSubject */.X(c.fragment), new BehaviorSubject/* BehaviorSubject */.X(c.data), c.outlet, c.component, c);
}
const NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
function redirectingNavigationError(urlSerializer, redirect) {
  const {
    redirectTo,
    navigationBehaviorOptions
  } = isUrlTree(redirect) ? {
    redirectTo: redirect,
    navigationBehaviorOptions: undefined
  } : redirect;
  const error = navigationCancelingError(ngDevMode && `Redirecting to "${urlSerializer.serialize(redirectTo)}"`, 0 /* NavigationCancellationCode.Redirect */, redirect);
  error.url = redirectTo;
  error.navigationBehaviorOptions = navigationBehaviorOptions;
  return error;
}
function navigationCancelingError(message, code, redirectUrl) {
  const error = new Error('NavigationCancelingError: ' + (message || ''));
  error[NAVIGATION_CANCELING_ERROR] = true;
  error.cancellationCode = code;
  if (redirectUrl) {
    error.url = redirectUrl;
  }
  return error;
}
function isRedirectingNavigationCancelingError$1(error) {
  return isNavigationCancelingError$1(error) && isUrlTree(error.url);
}
function isNavigationCancelingError$1(error) {
  return error && error[NAVIGATION_CANCELING_ERROR];
}

/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
let ɵEmptyOutletComponent = /*#__PURE__*/(() => {
  class ɵEmptyOutletComponent {
    static #_ = this.ɵfac = function ɵEmptyOutletComponent_Factory(t) {
      return new (t || ɵEmptyOutletComponent)();
    };
    static #_2 = this.ɵcmp = /* @__PURE__ */core_mjs_["ɵɵdefineComponent"]({
      type: ɵEmptyOutletComponent,
      selectors: [["ng-component"]],
      standalone: true,
      features: [core_mjs_["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function ɵEmptyOutletComponent_Template(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [RouterOutlet],
      encapsulation: 2
    });
  }
  return ɵEmptyOutletComponent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Creates an `EnvironmentInjector` if the `Route` has providers and one does not already exist
 * and returns the injector. Otherwise, if the `Route` does not have `providers`, returns the
 * `currentInjector`.
 *
 * @param route The route that might have providers
 * @param currentInjector The parent injector of the `Route`
 */
function getOrCreateRouteInjectorIfNeeded(route, currentInjector) {
  if (route.providers && !route._injector) {
    route._injector = (0,core_mjs_.createEnvironmentInjector)(route.providers, currentInjector, `Route: ${route.path}`);
  }
  return route._injector ?? currentInjector;
}
function getLoadedRoutes(route) {
  return route._loadedRoutes;
}
function getLoadedInjector(route) {
  return route._loadedInjector;
}
function getLoadedComponent(route) {
  return route._loadedComponent;
}
function getProvidersInjector(route) {
  return route._injector;
}
function validateConfig(config, parentPath = '', requireStandaloneComponents = false) {
  // forEach doesn't iterate undefined values
  for (let i = 0; i < config.length; i++) {
    const route = config[i];
    const fullPath = getFullPath(parentPath, route);
    validateNode(route, fullPath, requireStandaloneComponents);
  }
}
function assertStandalone(fullPath, component) {
  if (component && (0,core_mjs_["ɵisNgModule"])(component)) {
    throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}'. You are using 'loadComponent' with a module, ` + `but it must be used with standalone components. Use 'loadChildren' instead.`);
  } else if (component && !(0,core_mjs_.isStandalone)(component)) {
    throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}'. The component must be standalone.`);
  }
}
function validateNode(route, fullPath, requireStandaloneComponents) {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (!route) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `
      Invalid configuration of route '${fullPath}': Encountered undefined route.
      The reason might be an extra comma.

      Example:
      const routes: Routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: DashboardComponent },, << two commas
        { path: 'detail/:id', component: HeroDetailComponent }
      ];
    `);
    }
    if (Array.isArray(route)) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': Array cannot be specified`);
    }
    if (!route.redirectTo && !route.component && !route.loadComponent && !route.children && !route.loadChildren && route.outlet && route.outlet !== PRIMARY_OUTLET) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': a componentless route without children or loadChildren cannot have a named outlet set`);
    }
    if (route.redirectTo && route.children) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': redirectTo and children cannot be used together`);
    }
    if (route.redirectTo && route.loadChildren) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': redirectTo and loadChildren cannot be used together`);
    }
    if (route.children && route.loadChildren) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': children and loadChildren cannot be used together`);
    }
    if (route.redirectTo && (route.component || route.loadComponent)) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': redirectTo and component/loadComponent cannot be used together`);
    }
    if (route.component && route.loadComponent) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': component and loadComponent cannot be used together`);
    }
    if (route.redirectTo && route.canActivate) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': redirectTo and canActivate cannot be used together. Redirects happen before activation ` + `so canActivate will never be executed.`);
    }
    if (route.path && route.matcher) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': path and matcher cannot be used together`);
    }
    if (route.redirectTo === void 0 && !route.component && !route.loadComponent && !route.children && !route.loadChildren) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}'. One of the following must be provided: component, loadComponent, redirectTo, children or loadChildren`);
    }
    if (route.path === void 0 && route.matcher === void 0) {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': routes must have either a path or a matcher specified`);
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '${fullPath}': path cannot start with a slash`);
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
      const exp = `The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`;
      throw new core_mjs_["ɵRuntimeError"](4014 /* RuntimeErrorCode.INVALID_ROUTE_CONFIG */, `Invalid configuration of route '{path: "${fullPath}", redirectTo: "${route.redirectTo}"}': please provide 'pathMatch'. ${exp}`);
    }
    if (requireStandaloneComponents) {
      assertStandalone(fullPath, route.component);
    }
  }
  if (route.children) {
    validateConfig(route.children, fullPath, requireStandaloneComponents);
  }
}
function getFullPath(parentPath, currentRoute) {
  if (!currentRoute) {
    return parentPath;
  }
  if (!parentPath && !currentRoute.path) {
    return '';
  } else if (parentPath && !currentRoute.path) {
    return `${parentPath}/`;
  } else if (!parentPath && currentRoute.path) {
    return currentRoute.path;
  } else {
    return `${parentPath}/${currentRoute.path}`;
  }
}
/**
 * Makes a copy of the config and adds any default required properties.
 */
function standardizeConfig(r) {
  const children = r.children && r.children.map(standardizeConfig);
  const c = children ? {
    ...r,
    children
  } : {
    ...r
  };
  if (!c.component && !c.loadComponent && (children || c.loadChildren) && c.outlet && c.outlet !== PRIMARY_OUTLET) {
    c.component = ɵEmptyOutletComponent;
  }
  return c;
}
/** Returns the `route.outlet` or PRIMARY_OUTLET if none exists. */
function getOutlet(route) {
  return route.outlet || PRIMARY_OUTLET;
}
/**
 * Sorts the `routes` such that the ones with an outlet matching `outletName` come first.
 * The order of the configs is otherwise preserved.
 */
function sortByMatchingOutlets(routes, outletName) {
  const sortedConfig = routes.filter(r => getOutlet(r) === outletName);
  sortedConfig.push(...routes.filter(r => getOutlet(r) !== outletName));
  return sortedConfig;
}
/**
 * Gets the first injector in the snapshot's parent tree.
 *
 * If the `Route` has a static list of providers, the returned injector will be the one created from
 * those. If it does not exist, the returned injector may come from the parents, which may be from a
 * loaded config or their static providers.
 *
 * Returns `null` if there is neither this nor any parents have a stored injector.
 *
 * Generally used for retrieving the injector to use for getting tokens for guards/resolvers and
 * also used for getting the correct injector to use for creating components.
 */
function getClosestRouteInjector(snapshot) {
  if (!snapshot) return null;
  // If the current route has its own injector, which is created from the static providers on the
  // route itself, we should use that. Otherwise, we start at the parent since we do not want to
  // include the lazy loaded injector from this route.
  if (snapshot.routeConfig?._injector) {
    return snapshot.routeConfig._injector;
  }
  for (let s = snapshot.parent; s; s = s.parent) {
    const route = s.routeConfig;
    // Note that the order here is important. `_loadedInjector` stored on the route with
    // `loadChildren: () => NgModule` so it applies to child routes with priority. The `_injector`
    // is created from the static providers on that parent route, so it applies to the children as
    // well, but only if there is no lazy loaded NgModuleRef injector.
    if (route?._loadedInjector) return route._loadedInjector;
    if (route?._injector) return route._injector;
  }
  return null;
}
let warnedAboutUnsupportedInputBinding = false;
const activateRoutes = (rootContexts, routeReuseStrategy, forwardEvent, inputBindingEnabled) => (0,map/* map */.U)(t => {
  new ActivateRoutes(routeReuseStrategy, t.targetRouterState, t.currentRouterState, forwardEvent, inputBindingEnabled).activate(rootContexts);
  return t;
});
class ActivateRoutes {
  constructor(routeReuseStrategy, futureState, currState, forwardEvent, inputBindingEnabled) {
    this.routeReuseStrategy = routeReuseStrategy;
    this.futureState = futureState;
    this.currState = currState;
    this.forwardEvent = forwardEvent;
    this.inputBindingEnabled = inputBindingEnabled;
  }
  activate(parentContexts) {
    const futureRoot = this.futureState._root;
    const currRoot = this.currState ? this.currState._root : null;
    this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
    advanceActivatedRoute(this.futureState.root);
    this.activateChildRoutes(futureRoot, currRoot, parentContexts);
  }
  // De-activate the child route that are not re-used for the future state
  deactivateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    // Recurse on the routes active in the future state to de-activate deeper children
    futureNode.children.forEach(futureChild => {
      const childOutletName = futureChild.value.outlet;
      this.deactivateRoutes(futureChild, children[childOutletName], contexts);
      delete children[childOutletName];
    });
    // De-activate the routes that will not be re-used
    Object.values(children).forEach(v => {
      this.deactivateRouteAndItsChildren(v, contexts);
    });
  }
  deactivateRoutes(futureNode, currNode, parentContext) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    if (future === curr) {
      // Reusing the node, check to see if the children need to be de-activated
      if (future.component) {
        // If we have a normal route, we need to go through an outlet.
        const context = parentContext.getContext(future.outlet);
        if (context) {
          this.deactivateChildRoutes(futureNode, currNode, context.children);
        }
      } else {
        // if we have a componentless route, we recurse but keep the same outlet map.
        this.deactivateChildRoutes(futureNode, currNode, parentContext);
      }
    } else {
      if (curr) {
        // Deactivate the current route which will not be re-used
        this.deactivateRouteAndItsChildren(currNode, parentContext);
      }
    }
  }
  deactivateRouteAndItsChildren(route, parentContexts) {
    // If there is no component, the Route is never attached to an outlet (because there is no
    // component to attach).
    if (route.value.component && this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
      this.detachAndStoreRouteSubtree(route, parentContexts);
    } else {
      this.deactivateRouteAndOutlet(route, parentContexts);
    }
  }
  detachAndStoreRouteSubtree(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const childOutlet of Object.keys(children)) {
      this.deactivateRouteAndItsChildren(children[childOutlet], contexts);
    }
    if (context && context.outlet) {
      const componentRef = context.outlet.detach();
      const contexts = context.children.onOutletDeactivated();
      this.routeReuseStrategy.store(route.value.snapshot, {
        componentRef,
        route,
        contexts
      });
    }
  }
  deactivateRouteAndOutlet(route, parentContexts) {
    const context = parentContexts.getContext(route.value.outlet);
    // The context could be `null` if we are on a componentless route but there may still be
    // children that need deactivating.
    const contexts = context && route.value.component ? context.children : parentContexts;
    const children = nodeChildrenAsMap(route);
    for (const childOutlet of Object.keys(children)) {
      this.deactivateRouteAndItsChildren(children[childOutlet], contexts);
    }
    if (context) {
      if (context.outlet) {
        // Destroy the component
        context.outlet.deactivate();
        // Destroy the contexts for all the outlets that were in the component
        context.children.onOutletDeactivated();
      }
      // Clear the information about the attached component on the context but keep the reference to
      // the outlet. Clear even if outlet was not yet activated to avoid activating later with old
      // info
      context.attachRef = null;
      context.route = null;
    }
  }
  activateChildRoutes(futureNode, currNode, contexts) {
    const children = nodeChildrenAsMap(currNode);
    futureNode.children.forEach(c => {
      this.activateRoutes(c, children[c.value.outlet], contexts);
      this.forwardEvent(new ActivationEnd(c.value.snapshot));
    });
    if (futureNode.children.length) {
      this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
    }
  }
  activateRoutes(futureNode, currNode, parentContexts) {
    const future = futureNode.value;
    const curr = currNode ? currNode.value : null;
    advanceActivatedRoute(future);
    // reusing the node
    if (future === curr) {
      if (future.component) {
        // If we have a normal route, we need to go through an outlet.
        const context = parentContexts.getOrCreateContext(future.outlet);
        this.activateChildRoutes(futureNode, currNode, context.children);
      } else {
        // if we have a componentless route, we recurse but keep the same outlet map.
        this.activateChildRoutes(futureNode, currNode, parentContexts);
      }
    } else {
      if (future.component) {
        // if we have a normal route, we need to place the component into the outlet and recurse.
        const context = parentContexts.getOrCreateContext(future.outlet);
        if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
          const stored = this.routeReuseStrategy.retrieve(future.snapshot);
          this.routeReuseStrategy.store(future.snapshot, null);
          context.children.onOutletReAttached(stored.contexts);
          context.attachRef = stored.componentRef;
          context.route = stored.route.value;
          if (context.outlet) {
            // Attach right away when the outlet has already been instantiated
            // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
            context.outlet.attach(stored.componentRef, stored.route.value);
          }
          advanceActivatedRoute(stored.route.value);
          this.activateChildRoutes(futureNode, null, context.children);
        } else {
          const injector = getClosestRouteInjector(future.snapshot);
          context.attachRef = null;
          context.route = future;
          context.injector = injector;
          if (context.outlet) {
            // Activate the outlet when it has already been instantiated
            // Otherwise it will get activated from its `ngOnInit` when instantiated
            context.outlet.activateWith(future, context.injector);
          }
          this.activateChildRoutes(futureNode, null, context.children);
        }
      } else {
        // if we have a componentless route, we recurse but keep the same outlet map.
        this.activateChildRoutes(futureNode, null, parentContexts);
      }
    }
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const context = parentContexts.getOrCreateContext(future.outlet);
      const outlet = context.outlet;
      if (outlet && this.inputBindingEnabled && !outlet.supportsBindingToComponentInputs && !warnedAboutUnsupportedInputBinding) {
        console.warn(`'withComponentInputBinding' feature is enabled but ` + `this application is using an outlet that may not support binding to component inputs.`);
        warnedAboutUnsupportedInputBinding = true;
      }
    }
  }
}
class CanActivate {
  constructor(path) {
    this.path = path;
    this.route = this.path[this.path.length - 1];
  }
}
class CanDeactivate {
  constructor(component, route) {
    this.component = component;
    this.route = route;
  }
}
function getAllRouteGuards(future, curr, parentContexts) {
  const futureRoot = future._root;
  const currRoot = curr ? curr._root : null;
  return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
function getCanActivateChild(p) {
  const canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
  if (!canActivateChild || canActivateChild.length === 0) return null;
  return {
    node: p,
    guards: canActivateChild
  };
}
function getTokenOrFunctionIdentity(tokenOrFunction, injector) {
  const NOT_FOUND = Symbol();
  const result = injector.get(tokenOrFunction, NOT_FOUND);
  if (result === NOT_FOUND) {
    if (typeof tokenOrFunction === 'function' && !(0,core_mjs_["ɵisInjectable"])(tokenOrFunction)) {
      // We think the token is just a function so return it as-is
      return tokenOrFunction;
    } else {
      // This will throw the not found error
      return injector.get(tokenOrFunction);
    }
  }
  return result;
}
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const prevChildren = nodeChildrenAsMap(currNode);
  // Process the children of the future route
  futureNode.children.forEach(c => {
    getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
    delete prevChildren[c.value.outlet];
  });
  // Process any children left from the current route (not active for the future route)
  Object.entries(prevChildren).forEach(([k, v]) => deactivateRouteAndItsChildren(v, contexts.getContext(k), checks));
  return checks;
}
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks = {
  canDeactivateChecks: [],
  canActivateChecks: []
}) {
  const future = futureNode.value;
  const curr = currNode ? currNode.value : null;
  const context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
  // reusing the node
  if (curr && future.routeConfig === curr.routeConfig) {
    const shouldRun = shouldRunGuardsAndResolvers(curr, future, future.routeConfig.runGuardsAndResolvers);
    if (shouldRun) {
      checks.canActivateChecks.push(new CanActivate(futurePath));
    } else {
      // we need to set the data
      future.data = curr.data;
      future._resolvedData = curr._resolvedData;
    }
    // If we have a component, we need to go through an outlet.
    if (future.component) {
      getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
      // if we have a componentless route, we recurse but keep the same outlet map.
    } else {
      getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
    }
    if (shouldRun && context && context.outlet && context.outlet.isActivated) {
      checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, curr));
    }
  } else {
    if (curr) {
      deactivateRouteAndItsChildren(currNode, context, checks);
    }
    checks.canActivateChecks.push(new CanActivate(futurePath));
    // If we have a component, we need to go through an outlet.
    if (future.component) {
      getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
      // if we have a componentless route, we recurse but keep the same outlet map.
    } else {
      getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
    }
  }
  return checks;
}
function shouldRunGuardsAndResolvers(curr, future, mode) {
  if (typeof mode === 'function') {
    return mode(curr, future);
  }
  switch (mode) {
    case 'pathParamsChange':
      return !equalPath(curr.url, future.url);
    case 'pathParamsOrQueryParamsChange':
      return !equalPath(curr.url, future.url) || !shallowEqual(curr.queryParams, future.queryParams);
    case 'always':
      return true;
    case 'paramsOrQueryParamsChange':
      return !equalParamsAndUrlSegments(curr, future) || !shallowEqual(curr.queryParams, future.queryParams);
    case 'paramsChange':
    default:
      return !equalParamsAndUrlSegments(curr, future);
  }
}
function deactivateRouteAndItsChildren(route, context, checks) {
  const children = nodeChildrenAsMap(route);
  const r = route.value;
  Object.entries(children).forEach(([childName, node]) => {
    if (!r.component) {
      deactivateRouteAndItsChildren(node, context, checks);
    } else if (context) {
      deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
    } else {
      deactivateRouteAndItsChildren(node, null, checks);
    }
  });
  if (!r.component) {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  } else if (context && context.outlet && context.outlet.isActivated) {
    checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
  } else {
    checks.canDeactivateChecks.push(new CanDeactivate(null, r));
  }
}

/**
 * Simple function check, but generic so type inference will flow. Example:
 *
 * function product(a: number, b: number) {
 *   return a * b;
 * }
 *
 * if (isFunction<product>(fn)) {
 *   return fn(1, 2);
 * } else {
 *   throw "Must provide the `product` function";
 * }
 */
function isFunction(v) {
  return typeof v === 'function';
}
function isBoolean(v) {
  return typeof v === 'boolean';
}
function isCanLoad(guard) {
  return guard && isFunction(guard.canLoad);
}
function isCanActivate(guard) {
  return guard && isFunction(guard.canActivate);
}
function isCanActivateChild(guard) {
  return guard && isFunction(guard.canActivateChild);
}
function isCanDeactivate(guard) {
  return guard && isFunction(guard.canDeactivate);
}
function isCanMatch(guard) {
  return guard && isFunction(guard.canMatch);
}
function isRedirectingNavigationCancelingError(error) {
  return isNavigationCancelingError(error) && isUrlTree(error.url);
}
function isNavigationCancelingError(error) {
  return error && error[NAVIGATION_CANCELING_ERROR];
}
function isEmptyError(e) {
  return e instanceof EmptyError/* EmptyError */.K || e?.name === 'EmptyError';
}
const INITIAL_VALUE = /* @__PURE__ */Symbol('INITIAL_VALUE');
function prioritizedGuardValue() {
  return (0,switchMap/* switchMap */.w)(obs => {
    return (0,combineLatest/* combineLatest */.a)(obs.map(o => o.pipe((0,take/* take */.q)(1), (0,startWith/* startWith */.O)(INITIAL_VALUE)))).pipe((0,map/* map */.U)(results => {
      for (const result of results) {
        if (result === true) {
          // If result is true, check the next one
          continue;
        } else if (result === INITIAL_VALUE) {
          // If guard has not finished, we need to stop processing.
          return INITIAL_VALUE;
        } else if (result === false || result instanceof UrlTree) {
          // Result finished and was not true. Return the result.
          // Note that we only allow false/UrlTree. Other values are considered invalid and
          // ignored.
          return result;
        }
      }
      // Everything resolved to true. Return true.
      return true;
    }), (0,filter/* filter */.h)(item => item !== INITIAL_VALUE), (0,take/* take */.q)(1));
  });
}
function checkGuards(injector, forwardEvent) {
  return (0,mergeMap/* mergeMap */.z)(t => {
    const {
      targetSnapshot,
      currentSnapshot,
      guards: {
        canActivateChecks,
        canDeactivateChecks
      }
    } = t;
    if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
      return (0,of.of)({
        ...t,
        guardsResult: true
      });
    }
    return runCanDeactivateChecks(canDeactivateChecks, targetSnapshot, currentSnapshot, injector).pipe((0,mergeMap/* mergeMap */.z)(canDeactivate => {
      return canDeactivate && isBoolean(canDeactivate) ? runCanActivateChecks(targetSnapshot, canActivateChecks, injector, forwardEvent) : (0,of.of)(canDeactivate);
    }), (0,map/* map */.U)(guardsResult => ({
      ...t,
      guardsResult
    })));
  });
}
function runCanDeactivateChecks(checks, futureRSS, currRSS, injector) {
  return (0,from/* from */.D)(checks).pipe((0,mergeMap/* mergeMap */.z)(check => runCanDeactivate(check.component, check.route, currRSS, futureRSS, injector)), (0,first/* first */.P)(result => {
    return result !== true;
  }, true));
}
function runCanActivateChecks(futureSnapshot, checks, injector, forwardEvent) {
  return (0,from/* from */.D)(checks).pipe((0,concatMap/* concatMap */.b)(check => {
    return (0,concat/* concat */.z)(fireChildActivationStart(check.route.parent, forwardEvent), fireActivationStart(check.route, forwardEvent), runCanActivateChild(futureSnapshot, check.path, injector), runCanActivate(futureSnapshot, check.route, injector));
  }), (0,first/* first */.P)(result => {
    return result !== true;
  }, true));
}
/**
 * This should fire off `ActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 */
function fireActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ActivationStart(snapshot));
  }
  return (0,of.of)(true);
}
/**
 * This should fire off `ChildActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 */
function fireChildActivationStart(snapshot, forwardEvent) {
  if (snapshot !== null && forwardEvent) {
    forwardEvent(new ChildActivationStart(snapshot));
  }
  return (0,of.of)(true);
}
function runCanActivate(futureRSS, futureARS, injector) {
  const canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
  if (!canActivate || canActivate.length === 0) return (0,of.of)(true);
  const canActivateObservables = canActivate.map(canActivate => {
    return (0,defer/* defer */.P)(() => {
      const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
      const guard = getTokenOrFunctionIdentity(canActivate, closestInjector);
      const guardVal = isCanActivate(guard) ? guard.canActivate(futureARS, futureRSS) : closestInjector.runInContext(() => guard(futureARS, futureRSS));
      return wrapIntoObservable(guardVal).pipe((0,first/* first */.P)());
    });
  });
  return (0,of.of)(canActivateObservables).pipe(prioritizedGuardValue());
}
function runCanActivateChild(futureRSS, path, injector) {
  const futureARS = path[path.length - 1];
  const canActivateChildGuards = path.slice(0, path.length - 1).reverse().map(p => getCanActivateChild(p)).filter(_ => _ !== null);
  const canActivateChildGuardsMapped = canActivateChildGuards.map(d => {
    return (0,defer/* defer */.P)(() => {
      const guardsMapped = d.guards.map(canActivateChild => {
        const closestInjector = getClosestRouteInjector(d.node) ?? injector;
        const guard = getTokenOrFunctionIdentity(canActivateChild, closestInjector);
        const guardVal = isCanActivateChild(guard) ? guard.canActivateChild(futureARS, futureRSS) : closestInjector.runInContext(() => guard(futureARS, futureRSS));
        return wrapIntoObservable(guardVal).pipe((0,first/* first */.P)());
      });
      return (0,of.of)(guardsMapped).pipe(prioritizedGuardValue());
    });
  });
  return (0,of.of)(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
function runCanDeactivate(component, currARS, currRSS, futureRSS, injector) {
  const canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
  if (!canDeactivate || canDeactivate.length === 0) return (0,of.of)(true);
  const canDeactivateObservables = canDeactivate.map(c => {
    const closestInjector = getClosestRouteInjector(currARS) ?? injector;
    const guard = getTokenOrFunctionIdentity(c, closestInjector);
    const guardVal = isCanDeactivate(guard) ? guard.canDeactivate(component, currARS, currRSS, futureRSS) : closestInjector.runInContext(() => guard(component, currARS, currRSS, futureRSS));
    return wrapIntoObservable(guardVal).pipe((0,first/* first */.P)());
  });
  return (0,of.of)(canDeactivateObservables).pipe(prioritizedGuardValue());
}
function runCanLoadGuards(injector, route, segments, urlSerializer) {
  const canLoad = route.canLoad;
  if (canLoad === undefined || canLoad.length === 0) {
    return (0,of.of)(true);
  }
  const canLoadObservables = canLoad.map(injectionToken => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanLoad(guard) ? guard.canLoad(route, segments) : injector.runInContext(() => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return (0,of.of)(canLoadObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
function redirectIfUrlTree(urlSerializer) {
  return (0,pipe/* pipe */.z)((0,tap/* tap */.b)(result => {
    if (!isUrlTree(result)) return;
    throw redirectingNavigationError(urlSerializer, result);
  }), (0,map/* map */.U)(result => result === true));
}
function runCanMatchGuards(injector, route, segments, urlSerializer) {
  const canMatch = route.canMatch;
  if (!canMatch || canMatch.length === 0) return (0,of.of)(true);
  const canMatchObservables = canMatch.map(injectionToken => {
    const guard = getTokenOrFunctionIdentity(injectionToken, injector);
    const guardVal = isCanMatch(guard) ? guard.canMatch(route, segments) : injector.runInContext(() => guard(route, segments));
    return wrapIntoObservable(guardVal);
  });
  return (0,of.of)(canMatchObservables).pipe(prioritizedGuardValue(), redirectIfUrlTree(urlSerializer));
}
class NoMatch {
  constructor(segmentGroup) {
    this.segmentGroup = segmentGroup || null;
  }
}
class AbsoluteRedirect extends Error {
  constructor(urlTree) {
    super();
    this.urlTree = urlTree;
  }
}
function noMatch$1(segmentGroup) {
  return (0,observable_throwError/* throwError */._)(new NoMatch(segmentGroup));
}
function absoluteRedirect(newTree) {
  return throwError(new AbsoluteRedirect(newTree));
}
function namedOutletsRedirect(redirectTo) {
  return (0,observable_throwError/* throwError */._)(new core_mjs_["ɵRuntimeError"](4000 /* RuntimeErrorCode.NAMED_OUTLET_REDIRECT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Only absolute redirects can have named outlets. redirectTo: '${redirectTo}'`));
}
function canLoadFails(route) {
  return (0,observable_throwError/* throwError */._)(navigationCancelingError((typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot load children because the guard of the route "path: '${route.path}'" returned false`, 3 /* NavigationCancellationCode.GuardRejected */));
}

class ApplyRedirects {
  constructor(urlSerializer, urlTree) {
    this.urlSerializer = urlSerializer;
    this.urlTree = urlTree;
  }
  noMatchError(e) {
    return new core_mjs_["ɵRuntimeError"](4002 /* RuntimeErrorCode.NO_MATCH */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
  }
  lineralizeSegments(route, urlTree) {
    let res = [];
    let c = urlTree.root;
    while (true) {
      res = res.concat(c.segments);
      if (c.numberOfChildren === 0) {
        return (0,of.of)(res);
      }
      if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
        return namedOutletsRedirect(route.redirectTo);
      }
      c = c.children[PRIMARY_OUTLET];
    }
  }
  applyRedirectCommands(segments, redirectTo, posParams) {
    const newTree = this.applyRedirectCreateUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    if (redirectTo.startsWith('/')) {
      throw new AbsoluteRedirect(newTree);
    }
    return newTree;
  }
  applyRedirectCreateUrlTree(redirectTo, urlTree, segments, posParams) {
    const newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
    return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
  }
  createQueryParams(redirectToParams, actualParams) {
    const res = {};
    Object.entries(redirectToParams).forEach(([k, v]) => {
      const copySourceValue = typeof v === 'string' && v.startsWith(':');
      if (copySourceValue) {
        const sourceName = v.substring(1);
        res[k] = actualParams[sourceName];
      } else {
        res[k] = v;
      }
    });
    return res;
  }
  createSegmentGroup(redirectTo, group, segments, posParams) {
    const updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
    let children = {};
    Object.entries(group.children).forEach(([name, child]) => {
      children[name] = this.createSegmentGroup(redirectTo, child, segments, posParams);
    });
    return new UrlSegmentGroup(updatedSegments, children);
  }
  createSegments(redirectTo, redirectToSegments, actualSegments, posParams) {
    return redirectToSegments.map(s => s.path.startsWith(':') ? this.findPosParam(redirectTo, s, posParams) : this.findOrReturn(s, actualSegments));
  }
  findPosParam(redirectTo, redirectToUrlSegment, posParams) {
    const pos = posParams[redirectToUrlSegment.path.substring(1)];
    if (!pos) throw new core_mjs_["ɵRuntimeError"](4001 /* RuntimeErrorCode.MISSING_REDIRECT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot redirect to '${redirectTo}'. Cannot find '${redirectToUrlSegment.path}'.`);
    return pos;
  }
  findOrReturn(redirectToUrlSegment, actualSegments) {
    let idx = 0;
    for (const s of actualSegments) {
      if (s.path === redirectToUrlSegment.path) {
        actualSegments.splice(idx);
        return s;
      }
      idx++;
    }
    return redirectToUrlSegment;
  }
}
const noMatch = {
  matched: false,
  consumedSegments: [],
  remainingSegments: [],
  parameters: {},
  positionalParamSegments: {}
};
function matchWithChecks(segmentGroup, route, segments, injector, urlSerializer) {
  const result = match(segmentGroup, route, segments);
  if (!result.matched) {
    return (0,of.of)(result);
  }
  // Only create the Route's `EnvironmentInjector` if it matches the attempted
  // navigation
  injector = getOrCreateRouteInjectorIfNeeded(route, injector);
  return runCanMatchGuards(injector, route, segments, urlSerializer).pipe((0,map/* map */.U)(v => v === true ? result : {
    ...noMatch
  }));
}
function match(segmentGroup, route, segments) {
  if (route.path === '') {
    if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
      return {
        ...noMatch
      };
    }
    return {
      matched: true,
      consumedSegments: [],
      remainingSegments: segments,
      parameters: {},
      positionalParamSegments: {}
    };
  }
  const matcher = route.matcher || defaultUrlMatcher;
  const res = matcher(segments, segmentGroup, route);
  if (!res) return {
    ...noMatch
  };
  const posParams = {};
  Object.entries(res.posParams ?? {}).forEach(([k, v]) => {
    posParams[k] = v.path;
  });
  const parameters = res.consumed.length > 0 ? {
    ...posParams,
    ...res.consumed[res.consumed.length - 1].parameters
  } : posParams;
  return {
    matched: true,
    consumedSegments: res.consumed,
    remainingSegments: segments.slice(res.consumed.length),
    // TODO(atscott): investigate combining parameters and positionalParamSegments
    parameters,
    positionalParamSegments: res.posParams ?? {}
  };
}
function split(segmentGroup, consumedSegments, slicedSegments, config) {
  if (slicedSegments.length > 0 && containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
    const s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
    return {
      segmentGroup: s,
      slicedSegments: []
    };
  }
  if (slicedSegments.length === 0 && containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
    const s = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children));
    return {
      segmentGroup: s,
      slicedSegments
    };
  }
  const s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
  return {
    segmentGroup: s,
    slicedSegments
  };
}
function addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, routes, children) {
  const res = {};
  for (const r of routes) {
    if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return {
    ...children,
    ...res
  };
}
function createChildrenForEmptyPaths(routes, primarySegment) {
  const res = {};
  res[PRIMARY_OUTLET] = primarySegment;
  for (const r of routes) {
    if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
      const s = new UrlSegmentGroup([], {});
      res[getOutlet(r)] = s;
    }
  }
  return res;
}
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
  return routes.some(r => emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet(r) !== PRIMARY_OUTLET);
}
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
  return routes.some(r => emptyPathMatch(segmentGroup, slicedSegments, r));
}
function emptyPathMatch(segmentGroup, slicedSegments, r) {
  if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
    return false;
  }
  return r.path === '';
}
/**
 * Determines if `route` is a path match for the `rawSegment`, `segments`, and `outlet` without
 * verifying that its children are a full match for the remainder of the `rawSegment` children as
 * well.
 */
function isImmediateMatch(route, rawSegment, segments, outlet) {
  // We allow matches to empty paths when the outlets differ so we can match a url like `/(b:b)` to
  // a config like
  // * `{path: '', children: [{path: 'b', outlet: 'b'}]}`
  // or even
  // * `{path: '', outlet: 'a', children: [{path: 'b', outlet: 'b'}]`
  //
  // The exception here is when the segment outlet is for the primary outlet. This would
  // result in a match inside the named outlet because all children there are written as primary
  // outlets. So we need to prevent child named outlet matches in a url like `/b` in a config like
  // * `{path: '', outlet: 'x' children: [{path: 'b'}]}`
  // This should only match if the url is `/(x:b)`.
  if (getOutlet(route) !== outlet && (outlet === PRIMARY_OUTLET || !emptyPathMatch(rawSegment, segments, route))) {
    return false;
  }
  if (route.path === '**') {
    return true;
  }
  return match(rawSegment, route, segments).matched;
}
function noLeftoversInUrl(segmentGroup, segments, outlet) {
  return segments.length === 0 && !segmentGroup.children[outlet];
}

/**
 * Class used to indicate there were no additional route config matches but that all segments of
 * the URL were consumed during matching so the route was URL matched. When this happens, we still
 * try to match child configs in case there are empty path children.
 */
class NoLeftoversInUrl {}
function recognize$1(injector, configLoader, rootComponentType, config, urlTree, urlSerializer, paramsInheritanceStrategy = 'emptyOnly') {
  return new Recognizer(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer).recognize();
}
const MAX_ALLOWED_REDIRECTS = 31;
class Recognizer {
  constructor(injector, configLoader, rootComponentType, config, urlTree, paramsInheritanceStrategy, urlSerializer) {
    this.injector = injector;
    this.configLoader = configLoader;
    this.rootComponentType = rootComponentType;
    this.config = config;
    this.urlTree = urlTree;
    this.paramsInheritanceStrategy = paramsInheritanceStrategy;
    this.urlSerializer = urlSerializer;
    this.applyRedirects = new ApplyRedirects(this.urlSerializer, this.urlTree);
    this.absoluteRedirectCount = 0;
    this.allowRedirects = true;
  }
  noMatchError(e) {
    return new core_mjs_["ɵRuntimeError"](4002 /* RuntimeErrorCode.NO_MATCH */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Cannot match any routes. URL Segment: '${e.segmentGroup}'`);
  }
  recognize() {
    const rootSegmentGroup = split(this.urlTree.root, [], [], this.config).segmentGroup;
    return this.match(rootSegmentGroup).pipe((0,map/* map */.U)(children => {
      // Use Object.freeze to prevent readers of the Router state from modifying it outside
      // of a navigation, resulting in the router being out of sync with the browser.
      const root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze({
        ...this.urlTree.queryParams
      }), this.urlTree.fragment, {}, PRIMARY_OUTLET, this.rootComponentType, null, {});
      const rootNode = new TreeNode(root, children);
      const routeState = new RouterStateSnapshot('', rootNode);
      const tree = createUrlTreeFromSnapshot(root, [], this.urlTree.queryParams, this.urlTree.fragment);
      // https://github.com/angular/angular/issues/47307
      // Creating the tree stringifies the query params
      // We don't want to do this here so reassign them to the original.
      tree.queryParams = this.urlTree.queryParams;
      routeState.url = this.urlSerializer.serialize(tree);
      this.inheritParamsAndData(routeState._root, null);
      return {
        state: routeState,
        tree
      };
    }));
  }
  match(rootSegmentGroup) {
    const expanded$ = this.processSegmentGroup(this.injector, this.config, rootSegmentGroup, PRIMARY_OUTLET);
    return expanded$.pipe((0,catchError/* catchError */.K)(e => {
      if (e instanceof AbsoluteRedirect) {
        this.urlTree = e.urlTree;
        return this.match(e.urlTree.root);
      }
      if (e instanceof NoMatch) {
        throw this.noMatchError(e);
      }
      throw e;
    }));
  }
  inheritParamsAndData(routeNode, parent) {
    const route = routeNode.value;
    const i = getInherited(route, parent, this.paramsInheritanceStrategy);
    route.params = Object.freeze(i.params);
    route.data = Object.freeze(i.data);
    routeNode.children.forEach(n => this.inheritParamsAndData(n, route));
  }
  processSegmentGroup(injector, config, segmentGroup, outlet) {
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
      return this.processChildren(injector, config, segmentGroup);
    }
    return this.processSegment(injector, config, segmentGroup, segmentGroup.segments, outlet, true).pipe((0,map/* map */.U)(child => child instanceof TreeNode ? [child] : []));
  }
  /**
   * Matches every child outlet in the `segmentGroup` to a `Route` in the config. Returns `null` if
   * we cannot find a match for _any_ of the children.
   *
   * @param config - The `Routes` to match against
   * @param segmentGroup - The `UrlSegmentGroup` whose children need to be matched against the
   *     config.
   */
  processChildren(injector, config, segmentGroup) {
    // Expand outlets one at a time, starting with the primary outlet. We need to do it this way
    // because an absolute redirect from the primary outlet takes precedence.
    const childOutlets = [];
    for (const child of Object.keys(segmentGroup.children)) {
      if (child === 'primary') {
        childOutlets.unshift(child);
      } else {
        childOutlets.push(child);
      }
    }
    return (0,from/* from */.D)(childOutlets).pipe((0,concatMap/* concatMap */.b)(childOutlet => {
      const child = segmentGroup.children[childOutlet];
      // Sort the config so that routes with outlets that match the one being activated
      // appear first, followed by routes for other outlets, which might match if they have
      // an empty path.
      const sortedConfig = sortByMatchingOutlets(config, childOutlet);
      return this.processSegmentGroup(injector, sortedConfig, child, childOutlet);
    }), scan((children, outletChildren) => {
      children.push(...outletChildren);
      return children;
    }), (0,defaultIfEmpty/* defaultIfEmpty */.d)(null), last(), (0,mergeMap/* mergeMap */.z)(children => {
      if (children === null) return noMatch$1(segmentGroup);
      // Because we may have matched two outlets to the same empty path segment, we can have
      // multiple activated results for the same outlet. We should merge the children of
      // these results so the final return value is only one `TreeNode` per outlet.
      const mergedChildren = mergeEmptyPathMatches(children);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        // This should really never happen - we are only taking the first match for each
        // outlet and merge the empty path matches.
        checkOutletNameUniqueness(mergedChildren);
      }
      sortActivatedRouteSnapshots(mergedChildren);
      return (0,of.of)(mergedChildren);
    }));
  }
  processSegment(injector, routes, segmentGroup, segments, outlet, allowRedirects) {
    return (0,from/* from */.D)(routes).pipe((0,concatMap/* concatMap */.b)(r => {
      return this.processSegmentAgainstRoute(r._injector ?? injector, routes, r, segmentGroup, segments, outlet, allowRedirects).pipe((0,catchError/* catchError */.K)(e => {
        if (e instanceof NoMatch) {
          return (0,of.of)(null);
        }
        throw e;
      }));
    }), (0,first/* first */.P)(x => !!x), (0,catchError/* catchError */.K)(e => {
      if (isEmptyError(e)) {
        if (noLeftoversInUrl(segmentGroup, segments, outlet)) {
          return (0,of.of)(new NoLeftoversInUrl());
        }
        return noMatch$1(segmentGroup);
      }
      throw e;
    }));
  }
  processSegmentAgainstRoute(injector, routes, route, rawSegment, segments, outlet, allowRedirects) {
    if (!isImmediateMatch(route, rawSegment, segments, outlet)) return noMatch$1(rawSegment);
    if (route.redirectTo === undefined) {
      return this.matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet);
    }
    if (this.allowRedirects && allowRedirects) {
      return this.expandSegmentAgainstRouteUsingRedirect(injector, rawSegment, routes, route, segments, outlet);
    }
    return noMatch$1(rawSegment);
  }
  expandSegmentAgainstRouteUsingRedirect(injector, segmentGroup, routes, route, segments, outlet) {
    const {
      matched,
      consumedSegments,
      positionalParamSegments,
      remainingSegments
    } = route.path === '**' ? createWildcardMatchResult(segments) : match(segmentGroup, route, segments);
    if (!matched) return noMatch$1(segmentGroup);
    // TODO(atscott): Move all of this under an if(ngDevMode) as a breaking change and allow stack
    // size exceeded in production
    if (route.redirectTo.startsWith('/')) {
      this.absoluteRedirectCount++;
      if (this.absoluteRedirectCount > MAX_ALLOWED_REDIRECTS) {
        if (ngDevMode) {
          throw new core_mjs_["ɵRuntimeError"](4016 /* RuntimeErrorCode.INFINITE_REDIRECT */, `Detected possible infinite redirect when redirecting from '${this.urlTree}' to '${route.redirectTo}'.\n` + `This is currently a dev mode only error but will become a` + ` call stack size exceeded error in production in a future major version.`);
        }
        this.allowRedirects = false;
      }
    }
    const newTree = this.applyRedirects.applyRedirectCommands(consumedSegments, route.redirectTo, positionalParamSegments);
    return this.applyRedirects.lineralizeSegments(route, newTree).pipe((0,mergeMap/* mergeMap */.z)(newSegments => {
      return this.processSegment(injector, routes, segmentGroup, newSegments.concat(remainingSegments), outlet, false);
    }));
  }
  matchSegmentAgainstRoute(injector, rawSegment, route, segments, outlet) {
    let matchResult;
    if (route.path === '**') {
      matchResult = (0,of.of)(createWildcardMatchResult(segments));
      // Prior versions of the route matching algorithm would stop matching at the wildcard route.
      // We should investigate a better strategy for any existing children. Otherwise, these
      // child segments are silently dropped from the navigation.
      // https://github.com/angular/angular/issues/40089
      rawSegment.children = {};
    } else {
      matchResult = matchWithChecks(rawSegment, route, segments, injector, this.urlSerializer);
    }
    return matchResult.pipe((0,switchMap/* switchMap */.w)(result => {
      if (!result.matched) {
        return noMatch$1(rawSegment);
      }
      // If the route has an injector created from providers, we should start using that.
      injector = route._injector ?? injector;
      return this.getChildConfig(injector, route, segments).pipe((0,switchMap/* switchMap */.w)(({
        routes: childConfig
      }) => {
        const childInjector = route._loadedInjector ?? injector;
        const {
          consumedSegments,
          remainingSegments,
          parameters
        } = result;
        const snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze({
          ...this.urlTree.queryParams
        }), this.urlTree.fragment, getData(route), getOutlet(route), route.component ?? route._loadedComponent ?? null, route, getResolve(route));
        const {
          segmentGroup,
          slicedSegments
        } = split(rawSegment, consumedSegments, remainingSegments, childConfig);
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
          return this.processChildren(childInjector, childConfig, segmentGroup).pipe((0,map/* map */.U)(children => {
            if (children === null) {
              return null;
            }
            return new TreeNode(snapshot, children);
          }));
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
          return (0,of.of)(new TreeNode(snapshot, []));
        }
        const matchedOnOutlet = getOutlet(route) === outlet;
        // If we matched a config due to empty path match on a different outlet, we need to
        // continue passing the current outlet for the segment rather than switch to PRIMARY.
        // Note that we switch to primary when we have a match because outlet configs look like
        // this: {path: 'a', outlet: 'a', children: [
        //  {path: 'b', component: B},
        //  {path: 'c', component: C},
        // ]}
        // Notice that the children of the named outlet are configured with the primary outlet
        return this.processSegment(childInjector, childConfig, segmentGroup, slicedSegments, matchedOnOutlet ? PRIMARY_OUTLET : outlet, true).pipe((0,map/* map */.U)(child => {
          return new TreeNode(snapshot, child instanceof TreeNode ? [child] : []);
        }));
      }));
    }));
  }
  getChildConfig(injector, route, segments) {
    if (route.children) {
      // The children belong to the same module
      return (0,of.of)({
        routes: route.children,
        injector
      });
    }
    if (route.loadChildren) {
      // lazy children belong to the loaded module
      if (route._loadedRoutes !== undefined) {
        return (0,of.of)({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      return runCanLoadGuards(injector, route, segments, this.urlSerializer).pipe((0,mergeMap/* mergeMap */.z)(shouldLoadResult => {
        if (shouldLoadResult) {
          return this.configLoader.loadChildren(injector, route).pipe((0,tap/* tap */.b)(cfg => {
            route._loadedRoutes = cfg.routes;
            route._loadedInjector = cfg.injector;
          }));
        }
        return canLoadFails(route);
      }));
    }
    return (0,of.of)({
      routes: [],
      injector
    });
  }
}
function sortActivatedRouteSnapshots(nodes) {
  nodes.sort((a, b) => {
    if (a.value.outlet === PRIMARY_OUTLET) return -1;
    if (b.value.outlet === PRIMARY_OUTLET) return 1;
    return a.value.outlet.localeCompare(b.value.outlet);
  });
}
function hasEmptyPathConfig(node) {
  const config = node.value.routeConfig;
  return config && config.path === '';
}
/**
 * Finds `TreeNode`s with matching empty path route configs and merges them into `TreeNode` with
 * the children from each duplicate. This is necessary because different outlets can match a
 * single empty path route config and the results need to then be merged.
 */
function mergeEmptyPathMatches(nodes) {
  const result = [];
  // The set of nodes which contain children that were merged from two duplicate empty path nodes.
  const mergedNodes = new Set();
  for (const node of nodes) {
    if (!hasEmptyPathConfig(node)) {
      result.push(node);
      continue;
    }
    const duplicateEmptyPathNode = result.find(resultNode => node.value.routeConfig === resultNode.value.routeConfig);
    if (duplicateEmptyPathNode !== undefined) {
      duplicateEmptyPathNode.children.push(...node.children);
      mergedNodes.add(duplicateEmptyPathNode);
    } else {
      result.push(node);
    }
  }
  // For each node which has children from multiple sources, we need to recompute a new `TreeNode`
  // by also merging those children. This is necessary when there are multiple empty path configs
  // in a row. Put another way: whenever we combine children of two nodes, we need to also check
  // if any of those children can be combined into a single node as well.
  for (const mergedNode of mergedNodes) {
    const mergedChildren = mergeEmptyPathMatches(mergedNode.children);
    result.push(new TreeNode(mergedNode.value, mergedChildren));
  }
  return result.filter(n => !mergedNodes.has(n));
}
function checkOutletNameUniqueness(nodes) {
  const names = {};
  nodes.forEach(n => {
    const routeWithSameOutletName = names[n.value.outlet];
    if (routeWithSameOutletName) {
      const p = routeWithSameOutletName.url.map(s => s.toString()).join('/');
      const c = n.value.url.map(s => s.toString()).join('/');
      throw new core_mjs_["ɵRuntimeError"](4006 /* RuntimeErrorCode.TWO_SEGMENTS_WITH_SAME_OUTLET */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Two segments cannot have the same outlet name: '${p}' and '${c}'.`);
    }
    names[n.value.outlet] = n.value;
  });
}
function getData(route) {
  return route.data || {};
}
function getResolve(route) {
  return route.resolve || {};
}
function createWildcardMatchResult(segments) {
  return {
    matched: true,
    parameters: segments.length > 0 ? router_last(segments).parameters : {},
    consumedSegments: segments,
    remainingSegments: [],
    positionalParamSegments: {}
  };
}
function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
  return (0,mergeMap/* mergeMap */.z)(t => recognize$1(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe((0,map/* map */.U)(({
    state: targetSnapshot,
    tree: urlAfterRedirects
  }) => {
    return {
      ...t,
      targetSnapshot,
      urlAfterRedirects
    };
  })));
}
function resolveData(paramsInheritanceStrategy, injector) {
  return (0,mergeMap/* mergeMap */.z)(t => {
    const {
      targetSnapshot,
      guards: {
        canActivateChecks
      }
    } = t;
    if (!canActivateChecks.length) {
      return (0,of.of)(t);
    }
    const routesWithResolversToRun = canActivateChecks.map(check => check.route);
    const routesWithResolversSet = new Set(routesWithResolversToRun);
    const routesNeedingDataUpdates =
    // List all ActivatedRoutes in an array, starting from the parent of the first route to run
    // resolvers. We go from the parent because the first route might have siblings that also
    // run resolvers.
    flattenRouteTree(routesWithResolversToRun[0].parent)
    // Remove the parent from the list -- we do not need to recompute its inherited data
    // because no resolvers at or above it run.
    .slice(1);
    let routesProcessed = 0;
    return (0,from/* from */.D)(routesNeedingDataUpdates).pipe((0,concatMap/* concatMap */.b)(route => {
      if (routesWithResolversSet.has(route)) {
        return runResolve(route, targetSnapshot, paramsInheritanceStrategy, injector);
      } else {
        route.data = getInherited(route, route.parent, paramsInheritanceStrategy).resolve;
        return (0,of.of)(void 0);
      }
    }), (0,tap/* tap */.b)(() => routesProcessed++), takeLast(1), (0,mergeMap/* mergeMap */.z)(_ => routesProcessed === routesNeedingDataUpdates.length ? (0,of.of)(t) : empty/* EMPTY */.E));
  });
}
/**
 *  Returns the `ActivatedRouteSnapshot` tree as an array, using DFS to traverse the route tree.
 */
function flattenRouteTree(route) {
  const descendants = route.children.map(child => flattenRouteTree(child)).flat();
  return [route, ...descendants];
}
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, injector) {
  const config = futureARS.routeConfig;
  const resolve = futureARS._resolve;
  if (config?.title !== undefined && !hasStaticTitle(config)) {
    resolve[RouteTitleKey] = config.title;
  }
  return resolveNode(resolve, futureARS, futureRSS, injector).pipe((0,map/* map */.U)(resolvedData => {
    futureARS._resolvedData = resolvedData;
    futureARS.data = getInherited(futureARS, futureARS.parent, paramsInheritanceStrategy).resolve;
    return null;
  }));
}
function resolveNode(resolve, futureARS, futureRSS, injector) {
  const keys = getDataKeys(resolve);
  if (keys.length === 0) {
    return (0,of.of)({});
  }
  const data = {};
  return (0,from/* from */.D)(keys).pipe((0,mergeMap/* mergeMap */.z)(key => getResolver(resolve[key], futureARS, futureRSS, injector).pipe((0,first/* first */.P)(), (0,tap/* tap */.b)(value => {
    data[key] = value;
  }))), takeLast(1), (0,mapTo/* mapTo */.h)(data), (0,catchError/* catchError */.K)(e => isEmptyError(e) ? empty/* EMPTY */.E : (0,observable_throwError/* throwError */._)(e)));
}
function getResolver(injectionToken, futureARS, futureRSS, injector) {
  const closestInjector = getClosestRouteInjector(futureARS) ?? injector;
  const resolver = getTokenOrFunctionIdentity(injectionToken, closestInjector);
  const resolverValue = resolver.resolve ? resolver.resolve(futureARS, futureRSS) : closestInjector.runInContext(() => resolver(futureARS, futureRSS));
  return wrapIntoObservable(resolverValue);
}

/**
 * Perform a side effect through a switchMap for every emission on the source Observable,
 * but return an Observable that is identical to the source. It's essentially the same as
 * the `tap` operator, but if the side effectful `next` function returns an ObservableInput,
 * it will wait before continuing with the original value.
 */
function switchTap(next) {
  return (0,switchMap/* switchMap */.w)(v => {
    const nextResult = next(v);
    if (nextResult) {
      return (0,from/* from */.D)(nextResult).pipe((0,map/* map */.U)(() => v));
    }
    return (0,of.of)(v);
  });
}

/**
 * Provides a strategy for setting the page title after a router navigation.
 *
 * The built-in implementation traverses the router state snapshot and finds the deepest primary
 * outlet with `title` property. Given the `Routes` below, navigating to
 * `/base/child(popup:aux)` would result in the document title being set to "child".
 * ```
 * [
 *   {path: 'base', title: 'base', children: [
 *     {path: 'child', title: 'child'},
 *   ],
 *   {path: 'aux', outlet: 'popup', title: 'popupTitle'}
 * ]
 * ```
 *
 * This class can be used as a base class for custom title strategies. That is, you can create your
 * own class that extends the `TitleStrategy`. Note that in the above example, the `title`
 * from the named outlet is never used. However, a custom strategy might be implemented to
 * incorporate titles in named outlets.
 *
 * @publicApi
 * @see [Page title guide](guide/router#setting-the-page-title)
 */
let TitleStrategy = /*#__PURE__*/(() => {
  class TitleStrategy {
    /**
     * @returns The `title` of the deepest primary route.
     */
    buildTitle(snapshot) {
      let pageTitle;
      let route = snapshot.root;
      while (route !== undefined) {
        pageTitle = this.getResolvedTitleForRoute(route) ?? pageTitle;
        route = route.children.find(child => child.outlet === PRIMARY_OUTLET);
      }
      return pageTitle;
    }
    /**
     * Given an `ActivatedRouteSnapshot`, returns the final value of the
     * `Route.title` property, which can either be a static string or a resolved value.
     */
    getResolvedTitleForRoute(snapshot) {
      return snapshot.data[RouteTitleKey];
    }
    static #_ = this.ɵfac = function TitleStrategy_Factory(t) {
      return new (t || TitleStrategy)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: TitleStrategy,
      factory: () => (() => (0,core_mjs_.inject)(DefaultTitleStrategy))(),
      providedIn: 'root'
    });
  }
  return TitleStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The default `TitleStrategy` used by the router that updates the title using the `Title` service.
 */
let DefaultTitleStrategy = /*#__PURE__*/(() => {
  class DefaultTitleStrategy extends TitleStrategy {
    constructor(title) {
      super();
      this.title = title;
    }
    /**
     * Sets the title of the browser to the given value.
     *
     * @param title The `pageTitle` from the deepest primary route.
     */
    updateTitle(snapshot) {
      const title = this.buildTitle(snapshot);
      if (title !== undefined) {
        this.title.setTitle(title);
      }
    }
    static #_ = this.ɵfac = function DefaultTitleStrategy_Factory(t) {
      return new (t || DefaultTitleStrategy)(core_mjs_["ɵɵinject"](platform_browser/* Title */.Dx));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: DefaultTitleStrategy,
      factory: DefaultTitleStrategy.ɵfac,
      providedIn: 'root'
    });
  }
  return DefaultTitleStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * A [DI token](guide/glossary/#di-token) for the router service.
 *
 * @publicApi
 */
const ROUTER_CONFIGURATION = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'router config' : '', {
  providedIn: 'root',
  factory: () => ({})
});

/**
 * The [DI token](guide/glossary/#di-token) for a router configuration.
 *
 * `ROUTES` is a low level API for router configuration via dependency injection.
 *
 * We recommend that in almost all cases to use higher level APIs such as `RouterModule.forRoot()`,
 * `provideRouter`, or `Router.resetConfig()`.
 *
 * @publicApi
 */
const ROUTES = /*#__PURE__*/new core_mjs_.InjectionToken('ROUTES');
let RouterConfigLoader = /*#__PURE__*/(() => {
  class RouterConfigLoader {
    constructor() {
      this.componentLoaders = new WeakMap();
      this.childrenLoaders = new WeakMap();
      this.compiler = (0,core_mjs_.inject)(core_mjs_.Compiler);
    }
    loadComponent(route) {
      if (this.componentLoaders.get(route)) {
        return this.componentLoaders.get(route);
      } else if (route._loadedComponent) {
        return (0,of.of)(route._loadedComponent);
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(route);
      }
      const loadRunner = wrapIntoObservable(route.loadComponent()).pipe((0,map/* map */.U)(maybeUnwrapDefaultExport), (0,tap/* tap */.b)(component => {
        if (this.onLoadEndListener) {
          this.onLoadEndListener(route);
        }
        (typeof ngDevMode === 'undefined' || ngDevMode) && assertStandalone(route.path ?? '', component);
        route._loadedComponent = component;
      }), (0,finalize/* finalize */.x)(() => {
        this.componentLoaders.delete(route);
      }));
      // Use custom ConnectableObservable as share in runners pipe increasing the bundle size too much
      const loader = new ConnectableObservable(loadRunner, () => new Subject/* Subject */.x()).pipe(refCount());
      this.componentLoaders.set(route, loader);
      return loader;
    }
    loadChildren(parentInjector, route) {
      if (this.childrenLoaders.get(route)) {
        return this.childrenLoaders.get(route);
      } else if (route._loadedRoutes) {
        return (0,of.of)({
          routes: route._loadedRoutes,
          injector: route._loadedInjector
        });
      }
      if (this.onLoadStartListener) {
        this.onLoadStartListener(route);
      }
      const moduleFactoryOrRoutes$ = loadChildren(route, this.compiler, parentInjector, this.onLoadEndListener);
      const loadRunner = moduleFactoryOrRoutes$.pipe((0,finalize/* finalize */.x)(() => {
        this.childrenLoaders.delete(route);
      }));
      // Use custom ConnectableObservable as share in runners pipe increasing the bundle size too much
      const loader = new ConnectableObservable(loadRunner, () => new Subject/* Subject */.x()).pipe(refCount());
      this.childrenLoaders.set(route, loader);
      return loader;
    }
    static #_ = this.ɵfac = function RouterConfigLoader_Factory(t) {
      return new (t || RouterConfigLoader)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: RouterConfigLoader,
      factory: RouterConfigLoader.ɵfac,
      providedIn: 'root'
    });
  }
  return RouterConfigLoader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Executes a `route.loadChildren` callback and converts the result to an array of child routes and
 * an injector if that callback returned a module.
 *
 * This function is used for the route discovery during prerendering
 * in @angular-devkit/build-angular. If there are any updates to the contract here, it will require
 * an update to the extractor.
 */
function loadChildren(route, compiler, parentInjector, onLoadEndListener) {
  return wrapIntoObservable(route.loadChildren()).pipe((0,map/* map */.U)(maybeUnwrapDefaultExport), (0,mergeMap/* mergeMap */.z)(t => {
    if (t instanceof core_mjs_.NgModuleFactory || Array.isArray(t)) {
      return (0,of.of)(t);
    } else {
      return (0,from/* from */.D)(compiler.compileModuleAsync(t));
    }
  }), (0,map/* map */.U)(factoryOrRoutes => {
    if (onLoadEndListener) {
      onLoadEndListener(route);
    }
    // This injector comes from the `NgModuleRef` when lazy loading an `NgModule`. There is
    // no injector associated with lazy loading a `Route` array.
    let injector;
    let rawRoutes;
    let requireStandaloneComponents = false;
    if (Array.isArray(factoryOrRoutes)) {
      rawRoutes = factoryOrRoutes;
      requireStandaloneComponents = true;
    } else {
      injector = factoryOrRoutes.create(parentInjector).injector;
      // When loading a module that doesn't provide `RouterModule.forChild()` preloader
      // will get stuck in an infinite loop. The child module's Injector will look to
      // its parent `Injector` when it doesn't find any ROUTES so it will return routes
      // for it's parent module instead.
      rawRoutes = injector.get(ROUTES, [], {
        optional: true,
        self: true
      }).flat();
    }
    const routes = rawRoutes.map(standardizeConfig);
    (typeof ngDevMode === 'undefined' || ngDevMode) && validateConfig(routes, route.path, requireStandaloneComponents);
    return {
      routes,
      injector
    };
  }));
}
function isWrappedDefaultExport(value) {
  // We use `in` here with a string key `'default'`, because we expect `DefaultExport` objects to be
  // dynamically imported ES modules with a spec-mandated `default` key. Thus we don't expect that
  // `default` will be a renamed property.
  return value && typeof value === 'object' && 'default' in value;
}
function maybeUnwrapDefaultExport(input) {
  // As per `isWrappedDefaultExport`, the `default` key here is generated by the browser and not
  // subject to property renaming, so we reference it with bracket access.
  return isWrappedDefaultExport(input) ? input['default'] : input;
}

/**
 * @description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * @publicApi
 */
let UrlHandlingStrategy = /*#__PURE__*/(() => {
  class UrlHandlingStrategy {
    static #_ = this.ɵfac = function UrlHandlingStrategy_Factory(t) {
      return new (t || UrlHandlingStrategy)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: UrlHandlingStrategy,
      factory: () => (() => (0,core_mjs_.inject)(DefaultUrlHandlingStrategy))(),
      providedIn: 'root'
    });
  }
  return UrlHandlingStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @publicApi
 */
let DefaultUrlHandlingStrategy = /*#__PURE__*/(() => {
  class DefaultUrlHandlingStrategy {
    shouldProcessUrl(url) {
      return true;
    }
    extract(url) {
      return url;
    }
    merge(newUrlPart, wholeUrl) {
      return newUrlPart;
    }
    static #_ = this.ɵfac = function DefaultUrlHandlingStrategy_Factory(t) {
      return new (t || DefaultUrlHandlingStrategy)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: DefaultUrlHandlingStrategy,
      factory: DefaultUrlHandlingStrategy.ɵfac,
      providedIn: 'root'
    });
  }
  return DefaultUrlHandlingStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/// <reference types="@types/dom-view-transitions" />
const CREATE_VIEW_TRANSITION = /*#__PURE__*/new core_mjs_.InjectionToken(ngDevMode ? 'view transition helper' : '');
const VIEW_TRANSITION_OPTIONS = /*#__PURE__*/new core_mjs_.InjectionToken(ngDevMode ? 'view transition options' : '');
/**
 * A helper function for using browser view transitions. This function skips the call to
 * `startViewTransition` if the browser does not support it.
 *
 * @returns A Promise that resolves when the view transition callback begins.
 */
function createViewTransition(injector, from, to) {
  const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
  const document = injector.get(common_mjs_.DOCUMENT);
  // Create promises outside the Angular zone to avoid causing extra change detections
  return injector.get(core_mjs_.NgZone).runOutsideAngular(() => {
    if (!document.startViewTransition || transitionOptions.skipNextTransition) {
      transitionOptions.skipNextTransition = false;
      return Promise.resolve();
    }
    let resolveViewTransitionStarted;
    const viewTransitionStarted = new Promise(resolve => {
      resolveViewTransitionStarted = resolve;
    });
    const transition = document.startViewTransition(() => {
      resolveViewTransitionStarted();
      // We don't actually update dom within the transition callback. The resolving of the above
      // promise unblocks the Router navigation, which synchronously activates and deactivates
      // routes (the DOM update). This view transition waits for the next change detection to
      // complete (below), which includes the update phase of the routed components.
      return createRenderPromise(injector);
    });
    const {
      onViewTransitionCreated
    } = transitionOptions;
    if (onViewTransitionCreated) {
      (0,core_mjs_.runInInjectionContext)(injector, () => onViewTransitionCreated({
        transition,
        from,
        to
      }));
    }
    return viewTransitionStarted;
  });
}
/**
 * Creates a promise that resolves after next render.
 */
function createRenderPromise(injector) {
  return new Promise(resolve => {
    (0,core_mjs_.afterNextRender)(resolve, {
      injector
    });
  });
}
let NavigationTransitions = /*#__PURE__*/(() => {
  class NavigationTransitions {
    get hasRequestedNavigation() {
      return this.navigationId !== 0;
    }
    constructor() {
      this.currentNavigation = null;
      this.currentTransition = null;
      this.lastSuccessfulNavigation = null;
      /**
       * These events are used to communicate back to the Router about the state of the transition. The
       * Router wants to respond to these events in various ways. Because the `NavigationTransition`
       * class is not public, this event subject is not publicly exposed.
       */
      this.events = new Subject/* Subject */.x();
      /**
       * Used to abort the current transition with an error.
       */
      this.transitionAbortSubject = new Subject/* Subject */.x();
      this.configLoader = (0,core_mjs_.inject)(RouterConfigLoader);
      this.environmentInjector = (0,core_mjs_.inject)(core_mjs_.EnvironmentInjector);
      this.urlSerializer = (0,core_mjs_.inject)(UrlSerializer);
      this.rootContexts = (0,core_mjs_.inject)(ChildrenOutletContexts);
      this.location = (0,core_mjs_.inject)(common_mjs_.Location);
      this.inputBindingEnabled = (0,core_mjs_.inject)(INPUT_BINDER, {
        optional: true
      }) !== null;
      this.titleStrategy = (0,core_mjs_.inject)(TitleStrategy);
      this.options = (0,core_mjs_.inject)(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || 'emptyOnly';
      this.urlHandlingStrategy = (0,core_mjs_.inject)(UrlHandlingStrategy);
      this.createViewTransition = (0,core_mjs_.inject)(CREATE_VIEW_TRANSITION, {
        optional: true
      });
      this.navigationId = 0;
      /**
       * Hook that enables you to pause navigation after the preactivation phase.
       * Used by `RouterModule`.
       *
       * @internal
       */
      this.afterPreactivation = () => (0,of.of)(void 0);
      /** @internal */
      this.rootComponentType = null;
      const onLoadStart = r => this.events.next(new RouteConfigLoadStart(r));
      const onLoadEnd = r => this.events.next(new RouteConfigLoadEnd(r));
      this.configLoader.onLoadEndListener = onLoadEnd;
      this.configLoader.onLoadStartListener = onLoadStart;
    }
    complete() {
      this.transitions?.complete();
    }
    handleNavigationRequest(request) {
      const id = ++this.navigationId;
      this.transitions?.next({
        ...this.transitions.value,
        ...request,
        id
      });
    }
    setupNavigations(router, initialUrlTree, initialRouterState) {
      this.transitions = new BehaviorSubject/* BehaviorSubject */.X({
        id: 0,
        currentUrlTree: initialUrlTree,
        currentRawUrl: initialUrlTree,
        extractedUrl: this.urlHandlingStrategy.extract(initialUrlTree),
        urlAfterRedirects: this.urlHandlingStrategy.extract(initialUrlTree),
        rawUrl: initialUrlTree,
        extras: {},
        resolve: null,
        reject: null,
        promise: Promise.resolve(true),
        source: IMPERATIVE_NAVIGATION,
        restoredState: null,
        currentSnapshot: initialRouterState.snapshot,
        targetSnapshot: null,
        currentRouterState: initialRouterState,
        targetRouterState: null,
        guards: {
          canActivateChecks: [],
          canDeactivateChecks: []
        },
        guardsResult: null
      });
      return this.transitions.pipe((0,filter/* filter */.h)(t => t.id !== 0),
      // Extract URL
      (0,map/* map */.U)(t => ({
        ...t,
        extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl)
      })),
      // Using switchMap so we cancel executing navigations when a new one comes in
      (0,switchMap/* switchMap */.w)(overallTransitionState => {
        this.currentTransition = overallTransitionState;
        let completed = false;
        let errored = false;
        return (0,of.of)(overallTransitionState).pipe(
        // Store the Navigation object
        (0,tap/* tap */.b)(t => {
          this.currentNavigation = {
            id: t.id,
            initialUrl: t.rawUrl,
            extractedUrl: t.extractedUrl,
            trigger: t.source,
            extras: t.extras,
            previousNavigation: !this.lastSuccessfulNavigation ? null : {
              ...this.lastSuccessfulNavigation,
              previousNavigation: null
            }
          };
        }), (0,switchMap/* switchMap */.w)(t => {
          const urlTransition = !router.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl();
          const onSameUrlNavigation = t.extras.onSameUrlNavigation ?? router.onSameUrlNavigation;
          if (!urlTransition && onSameUrlNavigation !== 'reload') {
            const reason = typeof ngDevMode === 'undefined' || ngDevMode ? `Navigation to ${t.rawUrl} was ignored because it is the same as the current Router URL.` : '';
            this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.rawUrl), reason, 0 /* NavigationSkippedCode.IgnoredSameUrlNavigation */));
            t.resolve(null);
            return empty/* EMPTY */.E;
          }
          if (this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) {
            return (0,of.of)(t).pipe(
            // Fire NavigationStart event
            (0,switchMap/* switchMap */.w)(t => {
              const transition = this.transitions?.getValue();
              this.events.next(new NavigationStart(t.id, this.urlSerializer.serialize(t.extractedUrl), t.source, t.restoredState));
              if (transition !== this.transitions?.getValue()) {
                return empty/* EMPTY */.E;
              }
              // This delay is required to match old behavior that forced
              // navigation to always be async
              return Promise.resolve(t);
            }),
            // Recognize
            recognize(this.environmentInjector, this.configLoader, this.rootComponentType, router.config, this.urlSerializer, this.paramsInheritanceStrategy),
            // Update URL if in `eager` update mode
            (0,tap/* tap */.b)(t => {
              overallTransitionState.targetSnapshot = t.targetSnapshot;
              overallTransitionState.urlAfterRedirects = t.urlAfterRedirects;
              this.currentNavigation = {
                ...this.currentNavigation,
                finalUrl: t.urlAfterRedirects
              };
              // Fire RoutesRecognized
              const routesRecognized = new RoutesRecognized(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
              this.events.next(routesRecognized);
            }));
          } else if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(t.currentRawUrl)) {
            /* When the current URL shouldn't be processed, but the previous one
             * was, we handle this "error condition" by navigating to the
             * previously successful URL, but leaving the URL intact.*/
            const {
              id,
              extractedUrl,
              source,
              restoredState,
              extras
            } = t;
            const navStart = new NavigationStart(id, this.urlSerializer.serialize(extractedUrl), source, restoredState);
            this.events.next(navStart);
            const targetSnapshot = createEmptyState(extractedUrl, this.rootComponentType).snapshot;
            this.currentTransition = overallTransitionState = {
              ...t,
              targetSnapshot,
              urlAfterRedirects: extractedUrl,
              extras: {
                ...extras,
                skipLocationChange: false,
                replaceUrl: false
              }
            };
            this.currentNavigation.finalUrl = extractedUrl;
            return (0,of.of)(overallTransitionState);
          } else {
            /* When neither the current or previous URL can be processed, do
             * nothing other than update router's internal reference to the
             * current "settled" URL. This way the next navigation will be coming
             * from the current URL in the browser.
             */
            const reason = typeof ngDevMode === 'undefined' || ngDevMode ? `Navigation was ignored because the UrlHandlingStrategy` + ` indicated neither the current URL ${t.currentRawUrl} nor target URL ${t.rawUrl} should be processed.` : '';
            this.events.next(new NavigationSkipped(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, 1 /* NavigationSkippedCode.IgnoredByUrlHandlingStrategy */));
            t.resolve(null);
            return empty/* EMPTY */.E;
          }
        }),
        // --- GUARDS ---
        (0,tap/* tap */.b)(t => {
          const guardsStart = new GuardsCheckStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
          this.events.next(guardsStart);
        }), (0,map/* map */.U)(t => {
          this.currentTransition = overallTransitionState = {
            ...t,
            guards: getAllRouteGuards(t.targetSnapshot, t.currentSnapshot, this.rootContexts)
          };
          return overallTransitionState;
        }), checkGuards(this.environmentInjector, evt => this.events.next(evt)), (0,tap/* tap */.b)(t => {
          overallTransitionState.guardsResult = t.guardsResult;
          if (isUrlTree(t.guardsResult)) {
            throw redirectingNavigationError(this.urlSerializer, t.guardsResult);
          }
          const guardsEnd = new GuardsCheckEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
          this.events.next(guardsEnd);
        }), (0,filter/* filter */.h)(t => {
          if (!t.guardsResult) {
            this.cancelNavigationTransition(t, '', 3 /* NavigationCancellationCode.GuardRejected */);
            return false;
          }
          return true;
        }),
        // --- RESOLVE ---
        switchTap(t => {
          if (t.guards.canActivateChecks.length) {
            return (0,of.of)(t).pipe((0,tap/* tap */.b)(t => {
              const resolveStart = new ResolveStart(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
              this.events.next(resolveStart);
            }), (0,switchMap/* switchMap */.w)(t => {
              let dataResolved = false;
              return (0,of.of)(t).pipe(resolveData(this.paramsInheritanceStrategy, this.environmentInjector), (0,tap/* tap */.b)({
                next: () => dataResolved = true,
                complete: () => {
                  if (!dataResolved) {
                    this.cancelNavigationTransition(t, typeof ngDevMode === 'undefined' || ngDevMode ? `At least one route resolver didn't emit any value.` : '', 2 /* NavigationCancellationCode.NoDataFromResolver */);
                  }
                }
              }));
            }), (0,tap/* tap */.b)(t => {
              const resolveEnd = new ResolveEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects), t.targetSnapshot);
              this.events.next(resolveEnd);
            }));
          }
          return undefined;
        }),
        // --- LOAD COMPONENTS ---
        switchTap(t => {
          const loadComponents = route => {
            const loaders = [];
            if (route.routeConfig?.loadComponent && !route.routeConfig._loadedComponent) {
              loaders.push(this.configLoader.loadComponent(route.routeConfig).pipe((0,tap/* tap */.b)(loadedComponent => {
                route.component = loadedComponent;
              }), (0,map/* map */.U)(() => void 0)));
            }
            for (const child of route.children) {
              loaders.push(...loadComponents(child));
            }
            return loaders;
          };
          return (0,combineLatest/* combineLatest */.a)(loadComponents(t.targetSnapshot.root)).pipe((0,defaultIfEmpty/* defaultIfEmpty */.d)(), (0,take/* take */.q)(1));
        }), switchTap(() => this.afterPreactivation()), (0,switchMap/* switchMap */.w)(() => {
          const {
            currentSnapshot,
            targetSnapshot
          } = overallTransitionState;
          const viewTransitionStarted = this.createViewTransition?.(this.environmentInjector, currentSnapshot.root, targetSnapshot.root);
          // If view transitions are enabled, block the navigation until the view
          // transition callback starts. Otherwise, continue immediately.
          return viewTransitionStarted ? (0,from/* from */.D)(viewTransitionStarted).pipe((0,map/* map */.U)(() => overallTransitionState)) : (0,of.of)(overallTransitionState);
        }), (0,map/* map */.U)(t => {
          const targetRouterState = createRouterState(router.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
          this.currentTransition = overallTransitionState = {
            ...t,
            targetRouterState
          };
          this.currentNavigation.targetRouterState = targetRouterState;
          return overallTransitionState;
        }), (0,tap/* tap */.b)(() => {
          this.events.next(new BeforeActivateRoutes());
        }), activateRoutes(this.rootContexts, router.routeReuseStrategy, evt => this.events.next(evt), this.inputBindingEnabled),
        // Ensure that if some observable used to drive the transition doesn't
        // complete, the navigation still finalizes This should never happen, but
        // this is done as a safety measure to avoid surfacing this error (#49567).
        (0,take/* take */.q)(1), (0,tap/* tap */.b)({
          next: t => {
            completed = true;
            this.lastSuccessfulNavigation = this.currentNavigation;
            this.events.next(new NavigationEnd(t.id, this.urlSerializer.serialize(t.extractedUrl), this.urlSerializer.serialize(t.urlAfterRedirects)));
            this.titleStrategy?.updateTitle(t.targetRouterState.snapshot);
            t.resolve(true);
          },
          complete: () => {
            completed = true;
          }
        }),
        // There used to be a lot more logic happening directly within the
        // transition Observable. Some of this logic has been refactored out to
        // other places but there may still be errors that happen there. This gives
        // us a way to cancel the transition from the outside. This may also be
        // required in the future to support something like the abort signal of the
        // Navigation API where the navigation gets aborted from outside the
        // transition.
        (0,takeUntil/* takeUntil */.R)(this.transitionAbortSubject.pipe((0,tap/* tap */.b)(err => {
          throw err;
        }))), (0,finalize/* finalize */.x)(() => {
          /* When the navigation stream finishes either through error or success,
           * we set the `completed` or `errored` flag. However, there are some
           * situations where we could get here without either of those being set.
           * For instance, a redirect during NavigationStart. Therefore, this is a
           * catch-all to make sure the NavigationCancel event is fired when a
           * navigation gets cancelled but not caught by other means. */
          if (!completed && !errored) {
            const cancelationReason = typeof ngDevMode === 'undefined' || ngDevMode ? `Navigation ID ${overallTransitionState.id} is not equal to the current navigation id ${this.navigationId}` : '';
            this.cancelNavigationTransition(overallTransitionState, cancelationReason, 1 /* NavigationCancellationCode.SupersededByNewNavigation */);
          }
          // Only clear current navigation if it is still set to the one that
          // finalized.
          if (this.currentNavigation?.id === overallTransitionState.id) {
            this.currentNavigation = null;
          }
        }), (0,catchError/* catchError */.K)(e => {
          errored = true;
          /* This error type is issued during Redirect, and is handled as a
           * cancellation rather than an error. */
          if (isNavigationCancelingError$1(e)) {
            this.events.next(new NavigationCancel(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e.message, e.cancellationCode));
            // When redirecting, we need to delay resolving the navigation
            // promise and push it to the redirect navigation
            if (!isRedirectingNavigationCancelingError$1(e)) {
              overallTransitionState.resolve(false);
            } else {
              this.events.next(new RedirectRequest(e.url));
            }
            /* All other errors should reset to the router's internal URL reference
             * to the pre-error state. */
          } else {
            this.events.next(new NavigationError(overallTransitionState.id, this.urlSerializer.serialize(overallTransitionState.extractedUrl), e, overallTransitionState.targetSnapshot ?? undefined));
            try {
              overallTransitionState.resolve(router.errorHandler(e));
            } catch (ee) {
              overallTransitionState.reject(ee);
            }
          }
          return empty/* EMPTY */.E;
        }));
        // casting because `pipe` returns observable({}) when called with 8+ arguments
      }));
    }

    cancelNavigationTransition(t, reason, code) {
      const navCancel = new NavigationCancel(t.id, this.urlSerializer.serialize(t.extractedUrl), reason, code);
      this.events.next(navCancel);
      t.resolve(false);
    }
    /**
     * @returns Whether we're navigating to somewhere that is not what the Router is
     * currently set to.
     */
    isUpdatingInternalState() {
      // TODO(atscott): The serializer should likely be used instead of
      // `UrlTree.toString()`. Custom serializers are often written to handle
      // things better than the default one (objects, for example will be
      // [Object object] with the custom serializer and be "the same" when they
      // aren't).
      // (Same for isUpdatedBrowserUrl)
      return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString();
    }
    /**
     * @returns Whether we're updating the browser URL to something new (navigation is going
     * to somewhere not displayed in the URL bar and we will update the URL
     * bar if navigation succeeds).
     */
    isUpdatedBrowserUrl() {
      // The extracted URL is the part of the URL that this application cares about. `extract` may
      // return only part of the browser URL and that part may have not changed even if some other
      // portion of the URL did.
      const extractedBrowserUrl = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(true)));
      return extractedBrowserUrl.toString() !== this.currentTransition?.extractedUrl.toString() && !this.currentTransition?.extras.skipLocationChange;
    }
    static #_ = this.ɵfac = function NavigationTransitions_Factory(t) {
      return new (t || NavigationTransitions)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: NavigationTransitions,
      factory: NavigationTransitions.ɵfac,
      providedIn: 'root'
    });
  }
  return NavigationTransitions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function isBrowserTriggeredNavigation(source) {
  return source !== IMPERATIVE_NAVIGATION;
}

/**
 * @description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * @publicApi
 */
let RouteReuseStrategy = /*#__PURE__*/(() => {
  class RouteReuseStrategy {
    static #_ = this.ɵfac = function RouteReuseStrategy_Factory(t) {
      return new (t || RouteReuseStrategy)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: RouteReuseStrategy,
      factory: () => (() => (0,core_mjs_.inject)(DefaultRouteReuseStrategy))(),
      providedIn: 'root'
    });
  }
  return RouteReuseStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @description
 *
 * This base route reuse strategy only reuses routes when the matched router configs are
 * identical. This prevents components from being destroyed and recreated
 * when just the route parameters, query parameters or fragment change
 * (that is, the existing component is _reused_).
 *
 * This strategy does not store any routes for later reuse.
 *
 * Angular uses this strategy by default.
 *
 *
 * It can be used as a base class for custom route reuse strategies, i.e. you can create your own
 * class that extends the `BaseRouteReuseStrategy` one.
 * @publicApi
 */
class BaseRouteReuseStrategy {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   * */
  shouldDetach(route) {
    return false;
  }
  /**
   * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
   */
  store(route, detachedTree) {}
  /** Returns `false`, meaning the route (and its subtree) is never reattached */
  shouldAttach(route) {
    return false;
  }
  /** Returns `null` because this strategy does not store routes for later re-use. */
  retrieve(route) {
    return null;
  }
  /**
   * Determines if a route should be reused.
   * This strategy returns `true` when the future route config and current route config are
   * identical.
   */
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
}
let DefaultRouteReuseStrategy = /*#__PURE__*/(() => {
  class DefaultRouteReuseStrategy extends BaseRouteReuseStrategy {
    static #_ = this.ɵfac = /* @__PURE__ */(() => {
      let ɵDefaultRouteReuseStrategy_BaseFactory;
      return function DefaultRouteReuseStrategy_Factory(t) {
        return (ɵDefaultRouteReuseStrategy_BaseFactory || (ɵDefaultRouteReuseStrategy_BaseFactory = core_mjs_["ɵɵgetInheritedFactory"](DefaultRouteReuseStrategy)))(t || DefaultRouteReuseStrategy);
      };
    })();
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: DefaultRouteReuseStrategy,
      factory: DefaultRouteReuseStrategy.ɵfac,
      providedIn: 'root'
    });
  }
  return DefaultRouteReuseStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let StateManager = /*#__PURE__*/(() => {
  class StateManager {
    static #_ = this.ɵfac = function StateManager_Factory(t) {
      return new (t || StateManager)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: StateManager,
      factory: () => (() => (0,core_mjs_.inject)(HistoryStateManager))(),
      providedIn: 'root'
    });
  }
  return StateManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let HistoryStateManager = /*#__PURE__*/(() => {
  class HistoryStateManager extends StateManager {
    constructor() {
      super(...arguments);
      this.location = (0,core_mjs_.inject)(common_mjs_.Location);
      this.urlSerializer = (0,core_mjs_.inject)(UrlSerializer);
      this.options = (0,core_mjs_.inject)(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.canceledNavigationResolution = this.options.canceledNavigationResolution || 'replace';
      this.urlHandlingStrategy = (0,core_mjs_.inject)(UrlHandlingStrategy);
      this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      this.currentUrlTree = new UrlTree();
      this.rawUrlTree = this.currentUrlTree;
      /**
       * The id of the currently active page in the router.
       * Updated to the transition's target id on a successful navigation.
       *
       * This is used to track what page the router last activated. When an attempted navigation fails,
       * the router can then use this to compute how to restore the state back to the previously active
       * page.
       */
      this.currentPageId = 0;
      this.lastSuccessfulId = -1;
      this.routerState = createEmptyState(this.currentUrlTree, null);
      this.stateMemento = this.createStateMemento();
    }
    getCurrentUrlTree() {
      return this.currentUrlTree;
    }
    getRawUrlTree() {
      return this.rawUrlTree;
    }
    restoredState() {
      return this.location.getState();
    }
    /**
     * The ɵrouterPageId of whatever page is currently active in the browser history. This is
     * important for computing the target page id for new navigations because we need to ensure each
     * page id in the browser history is 1 more than the previous entry.
     */
    get browserPageId() {
      if (this.canceledNavigationResolution !== 'computed') {
        return this.currentPageId;
      }
      return this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
    }
    getRouterState() {
      return this.routerState;
    }
    createStateMemento() {
      return {
        rawUrlTree: this.rawUrlTree,
        currentUrlTree: this.currentUrlTree,
        routerState: this.routerState
      };
    }
    registerNonRouterCurrentEntryChangeListener(listener) {
      return this.location.subscribe(event => {
        if (event['type'] === 'popstate') {
          listener(event['url'], event.state);
        }
      });
    }
    handleRouterEvent(e, currentTransition) {
      if (e instanceof NavigationStart) {
        this.stateMemento = this.createStateMemento();
      } else if (e instanceof NavigationSkipped) {
        this.rawUrlTree = currentTransition.initialUrl;
      } else if (e instanceof RoutesRecognized) {
        if (this.urlUpdateStrategy === 'eager') {
          if (!currentTransition.extras.skipLocationChange) {
            const rawUrl = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
            this.setBrowserUrl(rawUrl, currentTransition);
          }
        }
      } else if (e instanceof BeforeActivateRoutes) {
        this.currentUrlTree = currentTransition.finalUrl;
        this.rawUrlTree = this.urlHandlingStrategy.merge(currentTransition.finalUrl, currentTransition.initialUrl);
        this.routerState = currentTransition.targetRouterState;
        if (this.urlUpdateStrategy === 'deferred') {
          if (!currentTransition.extras.skipLocationChange) {
            this.setBrowserUrl(this.rawUrlTree, currentTransition);
          }
        }
      } else if (e instanceof NavigationCancel && (e.code === 3 /* NavigationCancellationCode.GuardRejected */ || e.code === 2 /* NavigationCancellationCode.NoDataFromResolver */)) {
        this.restoreHistory(currentTransition);
      } else if (e instanceof NavigationError) {
        this.restoreHistory(currentTransition, true);
      } else if (e instanceof NavigationEnd) {
        this.lastSuccessfulId = e.id;
        this.currentPageId = this.browserPageId;
      }
    }
    setBrowserUrl(url, transition) {
      const path = this.urlSerializer.serialize(url);
      if (this.location.isCurrentPathEqualTo(path) || !!transition.extras.replaceUrl) {
        // replacements do not update the target page
        const currentBrowserPageId = this.browserPageId;
        const state = {
          ...transition.extras.state,
          ...this.generateNgRouterState(transition.id, currentBrowserPageId)
        };
        this.location.replaceState(path, '', state);
      } else {
        const state = {
          ...transition.extras.state,
          ...this.generateNgRouterState(transition.id, this.browserPageId + 1)
        };
        this.location.go(path, '', state);
      }
    }
    /**
     * Performs the necessary rollback action to restore the browser URL to the
     * state before the transition.
     */
    restoreHistory(navigation, restoringFromCaughtError = false) {
      if (this.canceledNavigationResolution === 'computed') {
        const currentBrowserPageId = this.browserPageId;
        const targetPagePosition = this.currentPageId - currentBrowserPageId;
        if (targetPagePosition !== 0) {
          this.location.historyGo(targetPagePosition);
        } else if (this.currentUrlTree === navigation.finalUrl && targetPagePosition === 0) {
          // We got to the activation stage (where currentUrlTree is set to the navigation's
          // finalUrl), but we weren't moving anywhere in history (skipLocationChange or replaceUrl).
          // We still need to reset the router state back to what it was when the navigation started.
          this.resetState(navigation);
          this.resetUrlToCurrentUrlTree();
        } else {
          // The browser URL and router state was not updated before the navigation cancelled so
          // there's no restoration needed.
        }
      } else if (this.canceledNavigationResolution === 'replace') {
        // TODO(atscott): It seems like we should _always_ reset the state here. It would be a no-op
        // for `deferred` navigations that haven't change the internal state yet because guards
        // reject. For 'eager' navigations, it seems like we also really should reset the state
        // because the navigation was cancelled. Investigate if this can be done by running TGP.
        if (restoringFromCaughtError) {
          this.resetState(navigation);
        }
        this.resetUrlToCurrentUrlTree();
      }
    }
    resetState(navigation) {
      this.routerState = this.stateMemento.routerState;
      this.currentUrlTree = this.stateMemento.currentUrlTree;
      // Note here that we use the urlHandlingStrategy to get the reset `rawUrlTree` because it may be
      // configured to handle only part of the navigation URL. This means we would only want to reset
      // the part of the navigation handled by the Angular router rather than the whole URL. In
      // addition, the URLHandlingStrategy may be configured to specifically preserve parts of the URL
      // when merging, such as the query params so they are not lost on a refresh.
      this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, navigation.finalUrl ?? this.rawUrlTree);
    }
    resetUrlToCurrentUrlTree() {
      this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId));
    }
    generateNgRouterState(navigationId, routerPageId) {
      if (this.canceledNavigationResolution === 'computed') {
        return {
          navigationId,
          ɵrouterPageId: routerPageId
        };
      }
      return {
        navigationId
      };
    }
    static #_ = this.ɵfac = /* @__PURE__ */(() => {
      let ɵHistoryStateManager_BaseFactory;
      return function HistoryStateManager_Factory(t) {
        return (ɵHistoryStateManager_BaseFactory || (ɵHistoryStateManager_BaseFactory = core_mjs_["ɵɵgetInheritedFactory"](HistoryStateManager)))(t || HistoryStateManager);
      };
    })();
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: HistoryStateManager,
      factory: HistoryStateManager.ɵfac,
      providedIn: 'root'
    });
  }
  return HistoryStateManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var NavigationResult = /*#__PURE__*/function (NavigationResult) {
  NavigationResult[NavigationResult["COMPLETE"] = 0] = "COMPLETE";
  NavigationResult[NavigationResult["FAILED"] = 1] = "FAILED";
  NavigationResult[NavigationResult["REDIRECTING"] = 2] = "REDIRECTING";
  return NavigationResult;
}(NavigationResult || {});
/**
 * Performs the given action once the router finishes its next/current navigation.
 *
 * The navigation is considered complete under the following conditions:
 * - `NavigationCancel` event emits and the code is not `NavigationCancellationCode.Redirect` or
 * `NavigationCancellationCode.SupersededByNewNavigation`. In these cases, the
 * redirecting/superseding navigation must finish.
 * - `NavigationError`, `NavigationEnd`, or `NavigationSkipped` event emits
 */
function afterNextNavigation(router, action) {
  router.events.pipe((0,filter/* filter */.h)(e => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError || e instanceof NavigationSkipped), (0,map/* map */.U)(e => {
    if (e instanceof NavigationEnd || e instanceof NavigationSkipped) {
      return NavigationResult.COMPLETE;
    }
    const redirecting = e instanceof NavigationCancel ? e.code === 0 /* NavigationCancellationCode.Redirect */ || e.code === 1 /* NavigationCancellationCode.SupersededByNewNavigation */ : false;
    return redirecting ? NavigationResult.REDIRECTING : NavigationResult.FAILED;
  }), (0,filter/* filter */.h)(result => result !== NavigationResult.REDIRECTING), (0,take/* take */.q)(1)).subscribe(() => {
    action();
  });
}
function defaultErrorHandler(error) {
  throw error;
}
/**
 * The equivalent `IsActiveMatchOptions` options for `Router.isActive` is called with `true`
 * (exact = true).
 */
const exactMatchOptions = {
  paths: 'exact',
  fragment: 'ignored',
  matrixParams: 'ignored',
  queryParams: 'exact'
};
/**
 * The equivalent `IsActiveMatchOptions` options for `Router.isActive` is called with `false`
 * (exact = false).
 */
const subsetMatchOptions = {
  paths: 'subset',
  fragment: 'ignored',
  matrixParams: 'ignored',
  queryParams: 'subset'
};
/**
 * @description
 *
 * A service that provides navigation among views and URL manipulation capabilities.
 *
 * @see {@link Route}
 * @see [Routing and Navigation Guide](guide/router).
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
let Router = /*#__PURE__*/(() => {
  class Router {
    get currentUrlTree() {
      return this.stateManager.getCurrentUrlTree();
    }
    get rawUrlTree() {
      return this.stateManager.getRawUrlTree();
    }
    /**
     * An event stream for routing events.
     */
    get events() {
      // TODO(atscott): This _should_ be events.asObservable(). However, this change requires internal
      // cleanup: tests are doing `(route.events as Subject<Event>).next(...)`. This isn't
      // allowed/supported but we still have to fix these or file bugs against the teams before making
      // the change.
      return this._events;
    }
    /**
     * The current state of routing in this NgModule.
     */
    get routerState() {
      return this.stateManager.getRouterState();
    }
    constructor() {
      this.disposed = false;
      this.isNgZoneEnabled = false;
      this.console = (0,core_mjs_.inject)(core_mjs_["ɵConsole"]);
      this.stateManager = (0,core_mjs_.inject)(StateManager);
      this.options = (0,core_mjs_.inject)(ROUTER_CONFIGURATION, {
        optional: true
      }) || {};
      this.pendingTasks = (0,core_mjs_.inject)(core_mjs_["ɵInitialRenderPendingTasks"]);
      this.urlUpdateStrategy = this.options.urlUpdateStrategy || 'deferred';
      this.navigationTransitions = (0,core_mjs_.inject)(NavigationTransitions);
      this.urlSerializer = (0,core_mjs_.inject)(UrlSerializer);
      this.location = (0,core_mjs_.inject)(common_mjs_.Location);
      this.urlHandlingStrategy = (0,core_mjs_.inject)(UrlHandlingStrategy);
      /**
       * The private `Subject` type for the public events exposed in the getter. This is used internally
       * to push events to. The separate field allows us to expose separate types in the public API
       * (i.e., an Observable rather than the Subject).
       */
      this._events = new Subject/* Subject */.x();
      /**
       * A handler for navigation errors in this NgModule.
       *
       * @deprecated Subscribe to the `Router` events and watch for `NavigationError` instead.
       *   `provideRouter` has the `withNavigationErrorHandler` feature to make this easier.
       * @see {@link withNavigationErrorHandler}
       */
      this.errorHandler = this.options.errorHandler || defaultErrorHandler;
      /**
       * True if at least one navigation event has occurred,
       * false otherwise.
       */
      this.navigated = false;
      /**
       * A strategy for re-using routes.
       *
       * @deprecated Configure using `providers` instead:
       *   `{provide: RouteReuseStrategy, useClass: MyStrategy}`.
       */
      this.routeReuseStrategy = (0,core_mjs_.inject)(RouteReuseStrategy);
      /**
       * How to handle a navigation request to the current URL.
       *
       *
       * @deprecated Configure this through `provideRouter` or `RouterModule.forRoot` instead.
       * @see {@link withRouterConfig}
       * @see {@link provideRouter}
       * @see {@link RouterModule}
       */
      this.onSameUrlNavigation = this.options.onSameUrlNavigation || 'ignore';
      this.config = (0,core_mjs_.inject)(ROUTES, {
        optional: true
      })?.flat() ?? [];
      /**
       * Indicates whether the application has opted in to binding Router data to component inputs.
       *
       * This option is enabled by the `withComponentInputBinding` feature of `provideRouter` or
       * `bindToComponentInputs` in the `ExtraOptions` of `RouterModule.forRoot`.
       */
      this.componentInputBindingEnabled = !!(0,core_mjs_.inject)(INPUT_BINDER, {
        optional: true
      });
      this.eventsSubscription = new Subscription/* Subscription */.w0();
      this.isNgZoneEnabled = (0,core_mjs_.inject)(core_mjs_.NgZone) instanceof core_mjs_.NgZone && core_mjs_.NgZone.isInAngularZone();
      this.resetConfig(this.config);
      this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe({
        error: e => {
          this.console.warn(ngDevMode ? `Unhandled Navigation Error: ${e}` : e);
        }
      });
      this.subscribeToNavigationEvents();
    }
    subscribeToNavigationEvents() {
      const subscription = this.navigationTransitions.events.subscribe(e => {
        try {
          const currentTransition = this.navigationTransitions.currentTransition;
          const currentNavigation = this.navigationTransitions.currentNavigation;
          if (currentTransition !== null && currentNavigation !== null) {
            this.stateManager.handleRouterEvent(e, currentNavigation);
            if (e instanceof NavigationCancel && e.code !== 0 /* NavigationCancellationCode.Redirect */ && e.code !== 1 /* NavigationCancellationCode.SupersededByNewNavigation */) {
              // It seems weird that `navigated` is set to `true` when the navigation is rejected,
              // however it's how things were written initially. Investigation would need to be done
              // to determine if this can be removed.
              this.navigated = true;
            } else if (e instanceof NavigationEnd) {
              this.navigated = true;
            } else if (e instanceof RedirectRequest) {
              const mergedTree = this.urlHandlingStrategy.merge(e.url, currentTransition.currentRawUrl);
              const extras = {
                skipLocationChange: currentTransition.extras.skipLocationChange,
                // The URL is already updated at this point if we have 'eager' URL
                // updates or if the navigation was triggered by the browser (back
                // button, URL bar, etc). We want to replace that item in history
                // if the navigation is rejected.
                replaceUrl: this.urlUpdateStrategy === 'eager' || isBrowserTriggeredNavigation(currentTransition.source)
              };
              this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras, {
                resolve: currentTransition.resolve,
                reject: currentTransition.reject,
                promise: currentTransition.promise
              });
            }
          }
          // Note that it's important to have the Router process the events _before_ the event is
          // pushed through the public observable. This ensures the correct router state is in place
          // before applications observe the events.
          if (isPublicRouterEvent(e)) {
            this._events.next(e);
          }
        } catch (e) {
          this.navigationTransitions.transitionAbortSubject.next(e);
        }
      });
      this.eventsSubscription.add(subscription);
    }
    /** @internal */
    resetRootComponentType(rootComponentType) {
      // TODO: vsavkin router 4.0 should make the root component set to null
      // this will simplify the lifecycle of the router.
      this.routerState.root.component = rootComponentType;
      this.navigationTransitions.rootComponentType = rootComponentType;
    }
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    initialNavigation() {
      this.setUpLocationChangeListener();
      if (!this.navigationTransitions.hasRequestedNavigation) {
        this.navigateToSyncWithBrowser(this.location.path(true), IMPERATIVE_NAVIGATION, this.stateManager.restoredState());
      }
    }
    /**
     * Sets up the location change listener. This listener detects navigations triggered from outside
     * the Router (the browser back/forward buttons, for example) and schedules a corresponding Router
     * navigation so that the correct events, guards, etc. are triggered.
     */
    setUpLocationChangeListener() {
      // Don't need to use Zone.wrap any more, because zone.js
      // already patch onPopState, so location change callback will
      // run into ngZone
      if (!this.nonRouterCurrentEntryChangeSubscription) {
        this.nonRouterCurrentEntryChangeSubscription = this.stateManager.registerNonRouterCurrentEntryChangeListener((url, state) => {
          // The `setTimeout` was added in #12160 and is likely to support Angular/AngularJS
          // hybrid apps.
          setTimeout(() => {
            this.navigateToSyncWithBrowser(url, 'popstate', state);
          }, 0);
        });
      }
    }
    /**
     * Schedules a router navigation to synchronize Router state with the browser state.
     *
     * This is done as a response to a popstate event and the initial navigation. These
     * two scenarios represent times when the browser URL/state has been updated and
     * the Router needs to respond to ensure its internal state matches.
     */
    navigateToSyncWithBrowser(url, source, state) {
      const extras = {
        replaceUrl: true
      };
      // TODO: restoredState should always include the entire state, regardless
      // of navigationId. This requires a breaking change to update the type on
      // NavigationStart’s restoredState, which currently requires navigationId
      // to always be present. The Router used to only restore history state if
      // a navigationId was present.
      // The stored navigationId is used by the RouterScroller to retrieve the scroll
      // position for the page.
      const restoredState = state?.navigationId ? state : null;
      // Separate to NavigationStart.restoredState, we must also restore the state to
      // history.state and generate a new navigationId, since it will be overwritten
      if (state) {
        const stateCopy = {
          ...state
        };
        delete stateCopy.navigationId;
        delete stateCopy.ɵrouterPageId;
        if (Object.keys(stateCopy).length !== 0) {
          extras.state = stateCopy;
        }
      }
      const urlTree = this.parseUrl(url);
      this.scheduleNavigation(urlTree, source, restoredState, extras);
    }
    /** The current URL. */
    get url() {
      return this.serializeUrl(this.currentUrlTree);
    }
    /**
     * Returns the current `Navigation` object when the router is navigating,
     * and `null` when idle.
     */
    getCurrentNavigation() {
      return this.navigationTransitions.currentNavigation;
    }
    /**
     * The `Navigation` object of the most recent navigation to succeed and `null` if there
     *     has not been a successful navigation yet.
     */
    get lastSuccessfulNavigation() {
      return this.navigationTransitions.lastSuccessfulNavigation;
    }
    /**
     * Resets the route configuration used for navigation and generating links.
     *
     * @param config The route array for the new configuration.
     *
     * @usageNotes
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    resetConfig(config) {
      (typeof ngDevMode === 'undefined' || ngDevMode) && validateConfig(config);
      this.config = config.map(standardizeConfig);
      this.navigated = false;
    }
    /** @nodoc */
    ngOnDestroy() {
      this.dispose();
    }
    /** Disposes of the router. */
    dispose() {
      this.navigationTransitions.complete();
      if (this.nonRouterCurrentEntryChangeSubscription) {
        this.nonRouterCurrentEntryChangeSubscription.unsubscribe();
        this.nonRouterCurrentEntryChangeSubscription = undefined;
      }
      this.disposed = true;
      this.eventsSubscription.unsubscribe();
    }
    /**
     * Appends URL segments to the current URL tree to create a new URL tree.
     *
     * @param commands An array of URL fragments with which to construct the new URL tree.
     * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
     * segments, followed by the parameters for each segment.
     * The fragments are applied to the current URL tree or the one provided  in the `relativeTo`
     * property of the options object, if supplied.
     * @param navigationExtras Options that control the navigation strategy.
     * @returns The new URL tree.
     *
     * @usageNotes
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it,
     * // you can do the following:
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     *
     * Note that a value of `null` or `undefined` for `relativeTo` indicates that the
     * tree should be created relative to the root.
     * ```
     */
    createUrlTree(commands, navigationExtras = {}) {
      const {
        relativeTo,
        queryParams,
        fragment,
        queryParamsHandling,
        preserveFragment
      } = navigationExtras;
      const f = preserveFragment ? this.currentUrlTree.fragment : fragment;
      let q = null;
      switch (queryParamsHandling) {
        case 'merge':
          q = {
            ...this.currentUrlTree.queryParams,
            ...queryParams
          };
          break;
        case 'preserve':
          q = this.currentUrlTree.queryParams;
          break;
        default:
          q = queryParams || null;
      }
      if (q !== null) {
        q = this.removeEmptyProps(q);
      }
      let relativeToUrlSegmentGroup;
      try {
        const relativeToSnapshot = relativeTo ? relativeTo.snapshot : this.routerState.snapshot.root;
        relativeToUrlSegmentGroup = createSegmentGroupFromRoute(relativeToSnapshot);
      } catch (e) {
        // This is strictly for backwards compatibility with tests that create
        // invalid `ActivatedRoute` mocks.
        // Note: the difference between having this fallback for invalid `ActivatedRoute` setups and
        // just throwing is ~500 test failures. Fixing all of those tests by hand is not feasible at
        // the moment.
        if (typeof commands[0] !== 'string' || !commands[0].startsWith('/')) {
          // Navigations that were absolute in the old way of creating UrlTrees
          // would still work because they wouldn't attempt to match the
          // segments in the `ActivatedRoute` to the `currentUrlTree` but
          // instead just replace the root segment with the navigation result.
          // Non-absolute navigations would fail to apply the commands because
          // the logic could not find the segment to replace (so they'd act like there were no
          // commands).
          commands = [];
        }
        relativeToUrlSegmentGroup = this.currentUrlTree.root;
      }
      return createUrlTreeFromSegmentGroup(relativeToUrlSegmentGroup, commands, q, f ?? null);
    }
    /**
     * Navigates to a view using an absolute route path.
     *
     * @param url An absolute path for a defined route. The function does not apply any delta to the
     *     current URL.
     * @param extras An object containing properties that modify the navigation strategy.
     *
     * @returns A Promise that resolves to 'true' when navigation succeeds,
     * to 'false' when navigation fails, or is rejected on error.
     *
     * @usageNotes
     *
     * The following calls request navigation to an absolute path.
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * @see [Routing and Navigation guide](guide/router)
     *
     */
    navigateByUrl(url, extras = {
      skipLocationChange: false
    }) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (this.isNgZoneEnabled && !core_mjs_.NgZone.isInAngularZone()) {
          this.console.warn(`Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?`);
        }
      }
      const urlTree = isUrlTree(url) ? url : this.parseUrl(url);
      const mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
      return this.scheduleNavigation(mergedTree, IMPERATIVE_NAVIGATION, null, extras);
    }
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * @param commands An array of URL fragments with which to construct the target URL.
     * If the path is static, can be the literal URL string. For a dynamic path, pass an array of path
     * segments, followed by the parameters for each segment.
     * The fragments are applied to the current URL or the one provided  in the `relativeTo` property
     * of the options object, if supplied.
     * @param extras An options object that determines how the URL should be constructed or
     *     interpreted.
     *
     * @returns A Promise that resolves to `true` when navigation succeeds, to `false` when navigation
     *     fails,
     * or is rejected on error.
     *
     * @usageNotes
     *
     * The following calls request navigation to a dynamic route path relative to the current URL.
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL, overriding the default behavior
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * @see [Routing and Navigation guide](guide/router)
     *
     */
    navigate(commands, extras = {
      skipLocationChange: false
    }) {
      validateCommands(commands);
      return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    }
    /** Serializes a `UrlTree` into a string */
    serializeUrl(url) {
      return this.urlSerializer.serialize(url);
    }
    /** Parses a string into a `UrlTree` */
    parseUrl(url) {
      try {
        return this.urlSerializer.parse(url);
      } catch {
        return this.urlSerializer.parse('/');
      }
    }
    isActive(url, matchOptions) {
      let options;
      if (matchOptions === true) {
        options = {
          ...exactMatchOptions
        };
      } else if (matchOptions === false) {
        options = {
          ...subsetMatchOptions
        };
      } else {
        options = matchOptions;
      }
      if (isUrlTree(url)) {
        return containsTree(this.currentUrlTree, url, options);
      }
      const urlTree = this.parseUrl(url);
      return containsTree(this.currentUrlTree, urlTree, options);
    }
    removeEmptyProps(params) {
      return Object.keys(params).reduce((result, key) => {
        const value = params[key];
        if (value !== null && value !== undefined) {
          result[key] = value;
        }
        return result;
      }, {});
    }
    scheduleNavigation(rawUrl, source, restoredState, extras, priorPromise) {
      if (this.disposed) {
        return Promise.resolve(false);
      }
      let resolve;
      let reject;
      let promise;
      if (priorPromise) {
        resolve = priorPromise.resolve;
        reject = priorPromise.reject;
        promise = priorPromise.promise;
      } else {
        promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
      }
      // Indicate that the navigation is happening.
      const taskId = this.pendingTasks.add();
      afterNextNavigation(this, () => {
        // Remove pending task in a microtask to allow for cancelled
        // initial navigations and redirects within the same task.
        queueMicrotask(() => this.pendingTasks.remove(taskId));
      });
      this.navigationTransitions.handleNavigationRequest({
        source,
        restoredState,
        currentUrlTree: this.currentUrlTree,
        currentRawUrl: this.currentUrlTree,
        rawUrl,
        extras,
        resolve,
        reject,
        promise,
        currentSnapshot: this.routerState.snapshot,
        currentRouterState: this.routerState
      });
      // Make sure that the error is propagated even though `processNavigations` catch
      // handler does not rethrow
      return promise.catch(e => {
        return Promise.reject(e);
      });
    }
    static #_ = this.ɵfac = function Router_Factory(t) {
      return new (t || Router)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: Router,
      factory: Router.ɵfac,
      providedIn: 'root'
    });
  }
  return Router;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function validateCommands(commands) {
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd == null) {
      throw new core_mjs_["ɵRuntimeError"](4008 /* RuntimeErrorCode.NULLISH_COMMAND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The requested path contains ${cmd} segment at index ${i}`);
    }
  }
}
function isPublicRouterEvent(e) {
  return !(e instanceof BeforeActivateRoutes) && !(e instanceof RedirectRequest);
}

/**
 * @description
 *
 * When applied to an element in a template, makes that element a link
 * that initiates navigation to a route. Navigation opens one or more routed components
 * in one or more `<router-outlet>` locations on the page.
 *
 * Given a route configuration `[{ path: 'user/:name', component: UserCmp }]`,
 * the following creates a static link to the route:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * You can use dynamic values to generate the link.
 * For a dynamic link, pass an array of path segments,
 * followed by the params for each segment.
 * For example, `['/team', teamId, 'user', userName, {details: true}]`
 * generates a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one term and combined with dynamic segments.
 * For example, `['/team/11/user', userName, {details: true}]`
 *
 * The input that you provide to the link is treated as a delta to the current URL.
 * For instance, suppose the current URL is `/user/(box//aux:team)`.
 * The link `<a [routerLink]="['/user/jim']">Jim</a>` creates the URL
 * `/user/(jim//aux:team)`.
 * See {@link Router#createUrlTree} for more information.
 *
 * @usageNotes
 *
 * You can use absolute or relative paths in a link, set query parameters,
 * control how parameters are handled, and keep a history of navigation states.
 *
 * ### Relative link paths
 *
 * The first segment name can be prepended with `/`, `./`, or `../`.
 * * If the first segment begins with `/`, the router looks up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router
 *   looks in the children of the current activated route.
 * * If the first segment begins with `../`, the router goes up one level in the route tree.
 *
 * ### Setting and handling query params and fragments
 *
 * The following link adds a query parameter and a fragment to the generated URL:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * By default, the directive constructs the new URL using the given query parameters.
 * The example generates the link: `/user/bob?debug=true#education`.
 *
 * You can instruct the directive to handle query parameters differently
 * by specifying the `queryParamsHandling` option in the link.
 * Allowed values are:
 *
 *  - `'merge'`: Merge the given `queryParams` into the current query params.
 *  - `'preserve'`: Preserve the current query params.
 *
 * For example:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * See {@link UrlCreationOptions#queryParamsHandling}.
 *
 * ### Preserving navigation history
 *
 * You can provide a `state` value to be persisted to the browser's
 * [`History.state` property](https://developer.mozilla.org/en-US/docs/Web/API/History#Properties).
 * For example:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [state]="{tracingId: 123}">
 *   link to user component
 * </a>
 * ```
 *
 * Use {@link Router#getCurrentNavigation} to retrieve a saved
 * navigation-state value. For example, to capture the `tracingId` during the `NavigationStart`
 * event:
 *
 * ```
 * // Get NavigationStart events
 * router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
 *   const navigation = router.getCurrentNavigation();
 *   tracingService.trace({id: navigation.extras.state.tracingId});
 * });
 * ```
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
let RouterLink = /*#__PURE__*/(() => {
  class RouterLink {
    constructor(router, route, tabIndexAttribute, renderer, el, locationStrategy) {
      this.router = router;
      this.route = route;
      this.tabIndexAttribute = tabIndexAttribute;
      this.renderer = renderer;
      this.el = el;
      this.locationStrategy = locationStrategy;
      /**
       * Represents an `href` attribute value applied to a host element,
       * when a host element is `<a>`. For other tags, the value is `null`.
       */
      this.href = null;
      this.commands = null;
      /** @internal */
      this.onChanges = new Subject/* Subject */.x();
      /**
       * Passed to {@link Router#createUrlTree} as part of the
       * `UrlCreationOptions`.
       * @see {@link UrlCreationOptions#preserveFragment}
       * @see {@link Router#createUrlTree}
       */
      this.preserveFragment = false;
      /**
       * Passed to {@link Router#navigateByUrl} as part of the
       * `NavigationBehaviorOptions`.
       * @see {@link NavigationBehaviorOptions#skipLocationChange}
       * @see {@link Router#navigateByUrl}
       */
      this.skipLocationChange = false;
      /**
       * Passed to {@link Router#navigateByUrl} as part of the
       * `NavigationBehaviorOptions`.
       * @see {@link NavigationBehaviorOptions#replaceUrl}
       * @see {@link Router#navigateByUrl}
       */
      this.replaceUrl = false;
      const tagName = el.nativeElement.tagName?.toLowerCase();
      this.isAnchorElement = tagName === 'a' || tagName === 'area';
      if (this.isAnchorElement) {
        this.subscription = router.events.subscribe(s => {
          if (s instanceof NavigationEnd) {
            this.updateHref();
          }
        });
      } else {
        this.setTabIndexIfNotOnNativeEl('0');
      }
    }
    /**
     * Modifies the tab index if there was not a tabindex attribute on the element during
     * instantiation.
     */
    setTabIndexIfNotOnNativeEl(newTabIndex) {
      if (this.tabIndexAttribute != null /* both `null` and `undefined` */ || this.isAnchorElement) {
        return;
      }
      this.applyAttributeValue('tabindex', newTabIndex);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      if (this.isAnchorElement) {
        this.updateHref();
      }
      // This is subscribed to by `RouterLinkActive` so that it knows to update when there are changes
      // to the RouterLinks it's tracking.
      this.onChanges.next(this);
    }
    /**
     * Commands to pass to {@link Router#createUrlTree}.
     *   - **array**: commands to pass to {@link Router#createUrlTree}.
     *   - **string**: shorthand for array of commands with just the string, i.e. `['/route']`
     *   - **null|undefined**: effectively disables the `routerLink`
     * @see {@link Router#createUrlTree}
     */
    set routerLink(commands) {
      if (commands != null) {
        this.commands = Array.isArray(commands) ? commands : [commands];
        this.setTabIndexIfNotOnNativeEl('0');
      } else {
        this.commands = null;
        this.setTabIndexIfNotOnNativeEl(null);
      }
    }
    /** @nodoc */
    onClick(button, ctrlKey, shiftKey, altKey, metaKey) {
      if (this.urlTree === null) {
        return true;
      }
      if (this.isAnchorElement) {
        if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
          return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
          return true;
        }
      }
      const extras = {
        skipLocationChange: this.skipLocationChange,
        replaceUrl: this.replaceUrl,
        state: this.state
      };
      this.router.navigateByUrl(this.urlTree, extras);
      // Return `false` for `<a>` elements to prevent default action
      // and cancel the native behavior, since the navigation is handled
      // by the Router.
      return !this.isAnchorElement;
    }
    /** @nodoc */
    ngOnDestroy() {
      this.subscription?.unsubscribe();
    }
    updateHref() {
      this.href = this.urlTree !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
      const sanitizedValue = this.href === null ? null :
      // This class represents a directive that can be added to both `<a>` elements,
      // as well as other elements. As a result, we can't define security context at
      // compile time. So the security context is deferred to runtime.
      // The `ɵɵsanitizeUrlOrResourceUrl` selects the necessary sanitizer function
      // based on the tag and property names. The logic mimics the one from
      // `packages/compiler/src/schema/dom_security_schema.ts`, which is used at compile time.
      //
      // Note: we should investigate whether we can switch to using `@HostBinding('attr.href')`
      // instead of applying a value via a renderer, after a final merge of the
      // `RouterLinkWithHref` directive.
      (0,core_mjs_["ɵɵsanitizeUrlOrResourceUrl"])(this.href, this.el.nativeElement.tagName.toLowerCase(), 'href');
      this.applyAttributeValue('href', sanitizedValue);
    }
    applyAttributeValue(attrName, attrValue) {
      const renderer = this.renderer;
      const nativeElement = this.el.nativeElement;
      if (attrValue !== null) {
        renderer.setAttribute(nativeElement, attrName, attrValue);
      } else {
        renderer.removeAttribute(nativeElement, attrName);
      }
    }
    get urlTree() {
      if (this.commands === null) {
        return null;
      }
      return this.router.createUrlTree(this.commands, {
        // If the `relativeTo` input is not defined, we want to use `this.route` by default.
        // Otherwise, we should use the value provided by the user in the input.
        relativeTo: this.relativeTo !== undefined ? this.relativeTo : this.route,
        queryParams: this.queryParams,
        fragment: this.fragment,
        queryParamsHandling: this.queryParamsHandling,
        preserveFragment: this.preserveFragment
      });
    }
    static #_ = this.ɵfac = function RouterLink_Factory(t) {
      return new (t || RouterLink)(core_mjs_["ɵɵdirectiveInject"](Router), core_mjs_["ɵɵdirectiveInject"](ActivatedRoute), core_mjs_["ɵɵinjectAttribute"]('tabindex'), core_mjs_["ɵɵdirectiveInject"](core_mjs_.Renderer2), core_mjs_["ɵɵdirectiveInject"](core_mjs_.ElementRef), core_mjs_["ɵɵdirectiveInject"](common_mjs_.LocationStrategy));
    };
    static #_2 = this.ɵdir = /* @__PURE__ */core_mjs_["ɵɵdefineDirective"]({
      type: RouterLink,
      selectors: [["", "routerLink", ""]],
      hostVars: 1,
      hostBindings: function RouterLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          core_mjs_["ɵɵlistener"]("click", function RouterLink_click_HostBindingHandler($event) {
            return ctx.onClick($event.button, $event.ctrlKey, $event.shiftKey, $event.altKey, $event.metaKey);
          });
        }
        if (rf & 2) {
          core_mjs_["ɵɵattribute"]("target", ctx.target);
        }
      },
      inputs: {
        target: "target",
        queryParams: "queryParams",
        fragment: "fragment",
        queryParamsHandling: "queryParamsHandling",
        state: "state",
        relativeTo: "relativeTo",
        preserveFragment: ["preserveFragment", "preserveFragment", core_mjs_.booleanAttribute],
        skipLocationChange: ["skipLocationChange", "skipLocationChange", core_mjs_.booleanAttribute],
        replaceUrl: ["replaceUrl", "replaceUrl", core_mjs_.booleanAttribute],
        routerLink: "routerLink"
      },
      standalone: true,
      features: [core_mjs_["ɵɵInputTransformsFeature"], core_mjs_["ɵɵNgOnChangesFeature"]]
    });
  }
  return RouterLink;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 *
 * @description
 *
 * Tracks whether the linked route of an element is currently active, and allows you
 * to specify one or more CSS classes to add to the element when the linked route
 * is active.
 *
 * Use this directive to create a visual distinction for elements associated with an active route.
 * For example, the following code highlights the word "Bob" when the router
 * activates the associated route:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * Whenever the URL is either '/user' or '/user/bob', the "active-link" class is
 * added to the anchor tag. If the URL changes, the class is removed.
 *
 * You can set more than one class using a space-separated string or an array.
 * For example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * To add the classes only when the URL matches the link exactly, add the option `exact: true`:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * To directly check the `isActive` status of the link, assign the `RouterLinkActive`
 * instance to a template variable.
 * For example, the following checks the status without assigning any CSS classes:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * You can apply the `RouterLinkActive` directive to an ancestor of linked elements.
 * For example, the following sets the active-link class on the `<div>`  parent tag
 * when the URL is either '/user/jim' or '/user/bob'.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * The `RouterLinkActive` directive can also be used to set the aria-current attribute
 * to provide an alternative distinction for active elements to visually impaired users.
 *
 * For example, the following code adds the 'active' class to the Home Page link when it is
 * indeed active and in such case also sets its aria-current attribute to 'page':
 *
 * ```
 * <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home Page</a>
 * ```
 *
 * @ngModule RouterModule
 *
 * @publicApi
 */
let RouterLinkActive = /*#__PURE__*/(() => {
  class RouterLinkActive {
    get isActive() {
      return this._isActive;
    }
    constructor(router, element, renderer, cdr, link) {
      this.router = router;
      this.element = element;
      this.renderer = renderer;
      this.cdr = cdr;
      this.link = link;
      this.classes = [];
      this._isActive = false;
      /**
       * Options to configure how to determine if the router link is active.
       *
       * These options are passed to the `Router.isActive()` function.
       *
       * @see {@link Router#isActive}
       */
      this.routerLinkActiveOptions = {
        exact: false
      };
      /**
       *
       * You can use the output `isActiveChange` to get notified each time the link becomes
       * active or inactive.
       *
       * Emits:
       * true  -> Route is active
       * false -> Route is inactive
       *
       * ```
       * <a
       *  routerLink="/user/bob"
       *  routerLinkActive="active-link"
       *  (isActiveChange)="this.onRouterLinkActive($event)">Bob</a>
       * ```
       */
      this.isActiveChange = new core_mjs_.EventEmitter();
      this.routerEventsSubscription = router.events.subscribe(s => {
        if (s instanceof NavigationEnd) {
          this.update();
        }
      });
    }
    /** @nodoc */
    ngAfterContentInit() {
      // `of(null)` is used to force subscribe body to execute once immediately (like `startWith`).
      (0,of.of)(this.links.changes, (0,of.of)(null)).pipe((0,mergeAll/* mergeAll */.J)()).subscribe(_ => {
        this.update();
        this.subscribeToEachLinkOnChanges();
      });
    }
    subscribeToEachLinkOnChanges() {
      this.linkInputChangesSubscription?.unsubscribe();
      const allLinkChanges = [...this.links.toArray(), this.link].filter(link => !!link).map(link => link.onChanges);
      this.linkInputChangesSubscription = (0,from/* from */.D)(allLinkChanges).pipe((0,mergeAll/* mergeAll */.J)()).subscribe(link => {
        if (this._isActive !== this.isLinkActive(this.router)(link)) {
          this.update();
        }
      });
    }
    set routerLinkActive(data) {
      const classes = Array.isArray(data) ? data : data.split(' ');
      this.classes = classes.filter(c => !!c);
    }
    /** @nodoc */
    ngOnChanges(changes) {
      this.update();
    }
    /** @nodoc */
    ngOnDestroy() {
      this.routerEventsSubscription.unsubscribe();
      this.linkInputChangesSubscription?.unsubscribe();
    }
    update() {
      if (!this.links || !this.router.navigated) return;
      queueMicrotask(() => {
        const hasActiveLinks = this.hasActiveLinks();
        if (this._isActive !== hasActiveLinks) {
          this._isActive = hasActiveLinks;
          this.cdr.markForCheck();
          this.classes.forEach(c => {
            if (hasActiveLinks) {
              this.renderer.addClass(this.element.nativeElement, c);
            } else {
              this.renderer.removeClass(this.element.nativeElement, c);
            }
          });
          if (hasActiveLinks && this.ariaCurrentWhenActive !== undefined) {
            this.renderer.setAttribute(this.element.nativeElement, 'aria-current', this.ariaCurrentWhenActive.toString());
          } else {
            this.renderer.removeAttribute(this.element.nativeElement, 'aria-current');
          }
          // Emit on isActiveChange after classes are updated
          this.isActiveChange.emit(hasActiveLinks);
        }
      });
    }
    isLinkActive(router) {
      const options = isActiveMatchOptions(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions :
      // While the types should disallow `undefined` here, it's possible without strict inputs
      this.routerLinkActiveOptions.exact || false;
      return link => link.urlTree ? router.isActive(link.urlTree, options) : false;
    }
    hasActiveLinks() {
      const isActiveCheckFn = this.isLinkActive(this.router);
      return this.link && isActiveCheckFn(this.link) || this.links.some(isActiveCheckFn);
    }
    static #_ = this.ɵfac = function RouterLinkActive_Factory(t) {
      return new (t || RouterLinkActive)(core_mjs_["ɵɵdirectiveInject"](Router), core_mjs_["ɵɵdirectiveInject"](core_mjs_.ElementRef), core_mjs_["ɵɵdirectiveInject"](core_mjs_.Renderer2), core_mjs_["ɵɵdirectiveInject"](core_mjs_.ChangeDetectorRef), core_mjs_["ɵɵdirectiveInject"](RouterLink, 8));
    };
    static #_2 = this.ɵdir = /* @__PURE__ */core_mjs_["ɵɵdefineDirective"]({
      type: RouterLinkActive,
      selectors: [["", "routerLinkActive", ""]],
      contentQueries: function RouterLinkActive_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          core_mjs_["ɵɵcontentQuery"](dirIndex, RouterLink, 5);
        }
        if (rf & 2) {
          let _t;
          core_mjs_["ɵɵqueryRefresh"](_t = core_mjs_["ɵɵloadQuery"]()) && (ctx.links = _t);
        }
      },
      inputs: {
        routerLinkActiveOptions: "routerLinkActiveOptions",
        ariaCurrentWhenActive: "ariaCurrentWhenActive",
        routerLinkActive: "routerLinkActive"
      },
      outputs: {
        isActiveChange: "isActiveChange"
      },
      exportAs: ["routerLinkActive"],
      standalone: true,
      features: [core_mjs_["ɵɵNgOnChangesFeature"]]
    });
  }
  return RouterLinkActive;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Use instead of `'paths' in options` to be compatible with property renaming
 */
function isActiveMatchOptions(options) {
  return !!options.paths;
}

/**
 * @description
 *
 * Provides a preloading strategy.
 *
 * @publicApi
 */
class PreloadingStrategy {}
/**
 * @description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * @publicApi
 */
let PreloadAllModules = /*#__PURE__*/(() => {
  class PreloadAllModules {
    preload(route, fn) {
      return fn().pipe((0,catchError/* catchError */.K)(() => (0,of.of)(null)));
    }
    static #_ = this.ɵfac = function PreloadAllModules_Factory(t) {
      return new (t || PreloadAllModules)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: PreloadAllModules,
      factory: PreloadAllModules.ɵfac,
      providedIn: 'root'
    });
  }
  return PreloadAllModules;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * @publicApi
 */
let NoPreloading = /*#__PURE__*/(() => {
  class NoPreloading {
    preload(route, fn) {
      return (0,of.of)(null);
    }
    static #_ = this.ɵfac = function NoPreloading_Factory(t) {
      return new (t || NoPreloading)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: NoPreloading,
      factory: NoPreloading.ɵfac,
      providedIn: 'root'
    });
  }
  return NoPreloading;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * @publicApi
 */
let RouterPreloader = /*#__PURE__*/(() => {
  class RouterPreloader {
    constructor(router, compiler, injector, preloadingStrategy, loader) {
      this.router = router;
      this.injector = injector;
      this.preloadingStrategy = preloadingStrategy;
      this.loader = loader;
    }
    setUpPreloading() {
      this.subscription = this.router.events.pipe((0,filter/* filter */.h)(e => e instanceof NavigationEnd), (0,concatMap/* concatMap */.b)(() => this.preload())).subscribe(() => {});
    }
    preload() {
      return this.processRoutes(this.injector, this.router.config);
    }
    /** @nodoc */
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    processRoutes(injector, routes) {
      const res = [];
      for (const route of routes) {
        if (route.providers && !route._injector) {
          route._injector = (0,core_mjs_.createEnvironmentInjector)(route.providers, injector, `Route: ${route.path}`);
        }
        const injectorForCurrentRoute = route._injector ?? injector;
        const injectorForChildren = route._loadedInjector ?? injectorForCurrentRoute;
        // Note that `canLoad` is only checked as a condition that prevents `loadChildren` and not
        // `loadComponent`. `canLoad` guards only block loading of child routes by design. This
        // happens as a consequence of needing to descend into children for route matching immediately
        // while component loading is deferred until route activation. Because `canLoad` guards can
        // have side effects, we cannot execute them here so we instead skip preloading altogether
        // when present. Lastly, it remains to be decided whether `canLoad` should behave this way
        // at all. Code splitting and lazy loading is separate from client-side authorization checks
        // and should not be used as a security measure to prevent loading of code.
        if (route.loadChildren && !route._loadedRoutes && route.canLoad === undefined || route.loadComponent && !route._loadedComponent) {
          res.push(this.preloadConfig(injectorForCurrentRoute, route));
        }
        if (route.children || route._loadedRoutes) {
          res.push(this.processRoutes(injectorForChildren, route.children ?? route._loadedRoutes));
        }
      }
      return (0,from/* from */.D)(res).pipe((0,mergeAll/* mergeAll */.J)());
    }
    preloadConfig(injector, route) {
      return this.preloadingStrategy.preload(route, () => {
        let loadedChildren$;
        if (route.loadChildren && route.canLoad === undefined) {
          loadedChildren$ = this.loader.loadChildren(injector, route);
        } else {
          loadedChildren$ = (0,of.of)(null);
        }
        const recursiveLoadChildren$ = loadedChildren$.pipe((0,mergeMap/* mergeMap */.z)(config => {
          if (config === null) {
            return (0,of.of)(void 0);
          }
          route._loadedRoutes = config.routes;
          route._loadedInjector = config.injector;
          // If the loaded config was a module, use that as the module/module injector going
          // forward. Otherwise, continue using the current module/module injector.
          return this.processRoutes(config.injector ?? injector, config.routes);
        }));
        if (route.loadComponent && !route._loadedComponent) {
          const loadComponent$ = this.loader.loadComponent(route);
          return (0,from/* from */.D)([recursiveLoadChildren$, loadComponent$]).pipe((0,mergeAll/* mergeAll */.J)());
        } else {
          return recursiveLoadChildren$;
        }
      });
    }
    static #_ = this.ɵfac = function RouterPreloader_Factory(t) {
      return new (t || RouterPreloader)(core_mjs_["ɵɵinject"](Router), core_mjs_["ɵɵinject"](core_mjs_.Compiler), core_mjs_["ɵɵinject"](core_mjs_.EnvironmentInjector), core_mjs_["ɵɵinject"](PreloadingStrategy), core_mjs_["ɵɵinject"](RouterConfigLoader));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: RouterPreloader,
      factory: RouterPreloader.ɵfac,
      providedIn: 'root'
    });
  }
  return RouterPreloader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const ROUTER_SCROLLER = /*#__PURE__*/new core_mjs_.InjectionToken('');
let RouterScroller = /*#__PURE__*/(() => {
  class RouterScroller {
    /** @nodoc */
    constructor(urlSerializer, transitions, viewportScroller, zone, options = {}) {
      this.urlSerializer = urlSerializer;
      this.transitions = transitions;
      this.viewportScroller = viewportScroller;
      this.zone = zone;
      this.options = options;
      this.lastId = 0;
      this.lastSource = 'imperative';
      this.restoredId = 0;
      this.store = {};
      // Default both options to 'disabled'
      options.scrollPositionRestoration = options.scrollPositionRestoration || 'disabled';
      options.anchorScrolling = options.anchorScrolling || 'disabled';
    }
    init() {
      // we want to disable the automatic scrolling because having two places
      // responsible for scrolling results race conditions, especially given
      // that browser don't implement this behavior consistently
      if (this.options.scrollPositionRestoration !== 'disabled') {
        this.viewportScroller.setHistoryScrollRestoration('manual');
      }
      this.routerEventsSubscription = this.createScrollEvents();
      this.scrollEventsSubscription = this.consumeScrollEvents();
    }
    createScrollEvents() {
      return this.transitions.events.subscribe(e => {
        if (e instanceof NavigationStart) {
          // store the scroll position of the current stable navigations.
          this.store[this.lastId] = this.viewportScroller.getScrollPosition();
          this.lastSource = e.navigationTrigger;
          this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
        } else if (e instanceof NavigationEnd) {
          this.lastId = e.id;
          this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment);
        } else if (e instanceof NavigationSkipped && e.code === 0 /* NavigationSkippedCode.IgnoredSameUrlNavigation */) {
          this.lastSource = undefined;
          this.restoredId = 0;
          this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment);
        }
      });
    }
    consumeScrollEvents() {
      return this.transitions.events.subscribe(e => {
        if (!(e instanceof Scroll)) return;
        // a popstate event. The pop state event will always ignore anchor scrolling.
        if (e.position) {
          if (this.options.scrollPositionRestoration === 'top') {
            this.viewportScroller.scrollToPosition([0, 0]);
          } else if (this.options.scrollPositionRestoration === 'enabled') {
            this.viewportScroller.scrollToPosition(e.position);
          }
          // imperative navigation "forward"
        } else {
          if (e.anchor && this.options.anchorScrolling === 'enabled') {
            this.viewportScroller.scrollToAnchor(e.anchor);
          } else if (this.options.scrollPositionRestoration !== 'disabled') {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }
      });
    }
    scheduleScrollEvent(routerEvent, anchor) {
      this.zone.runOutsideAngular(() => {
        // The scroll event needs to be delayed until after change detection. Otherwise, we may
        // attempt to restore the scroll position before the router outlet has fully rendered the
        // component by executing its update block of the template function.
        setTimeout(() => {
          this.zone.run(() => {
            this.transitions.events.next(new Scroll(routerEvent, this.lastSource === 'popstate' ? this.store[this.restoredId] : null, anchor));
          });
        }, 0);
      });
    }
    /** @nodoc */
    ngOnDestroy() {
      this.routerEventsSubscription?.unsubscribe();
      this.scrollEventsSubscription?.unsubscribe();
    }
    static #_ = this.ɵfac = function RouterScroller_Factory(t) {
      core_mjs_["ɵɵinvalidFactory"]();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */core_mjs_["ɵɵdefineInjectable"]({
      token: RouterScroller,
      factory: RouterScroller.ɵfac
    });
  }
  return RouterScroller;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Sets up providers necessary to enable `Router` functionality for the application.
 * Allows to configure a set of routes as well as extra features that should be enabled.
 *
 * @usageNotes
 *
 * Basic example of how you can add a Router to your application:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent, {
 *   providers: [provideRouter(appRoutes)]
 * });
 * ```
 *
 * You can also enable optional features in the Router by adding functions from the `RouterFeatures`
 * type:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes,
 *         withDebugTracing(),
 *         withRouterConfig({paramsInheritanceStrategy: 'always'}))
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link RouterFeatures}
 *
 * @publicApi
 * @param routes A set of `Route`s to use for the application routing table.
 * @param features Optional features to configure additional router behaviors.
 * @returns A set of providers to setup a Router.
 */
function provideRouter(routes, ...features) {
  return (0,core_mjs_.makeEnvironmentProviders)([{
    provide: ROUTES,
    multi: true,
    useValue: routes
  }, typeof ngDevMode === 'undefined' || ngDevMode ? {
    provide: ROUTER_IS_PROVIDED,
    useValue: true
  } : [], {
    provide: ActivatedRoute,
    useFactory: rootRoute,
    deps: [Router]
  }, {
    provide: core_mjs_.APP_BOOTSTRAP_LISTENER,
    multi: true,
    useFactory: getBootstrapListener
  }, features.map(feature => feature.ɵproviders)]);
}
function rootRoute(router) {
  return router.routerState.root;
}
/**
 * Helper function to create an object that represents a Router feature.
 */
function routerFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
/**
 * An Injection token used to indicate whether `provideRouter` or `RouterModule.forRoot` was ever
 * called.
 */
const ROUTER_IS_PROVIDED = /*#__PURE__*/new core_mjs_.InjectionToken('', {
  providedIn: 'root',
  factory: () => false
});
const routerIsProvidedDevModeCheck = {
  provide: core_mjs_.ENVIRONMENT_INITIALIZER,
  multi: true,
  useFactory() {
    return () => {
      if (!(0,core_mjs_.inject)(ROUTER_IS_PROVIDED)) {
        console.warn('`provideRoutes` was called without `provideRouter` or `RouterModule.forRoot`. ' + 'This is likely a mistake.');
      }
    };
  }
};
/**
 * Registers a [DI provider](guide/glossary#provider) for a set of routes.
 * @param routes The route configuration to provide.
 *
 * @usageNotes
 *
 * ```
 * @NgModule({
 *   providers: [provideRoutes(ROUTES)]
 * })
 * class LazyLoadedChildModule {}
 * ```
 *
 * @deprecated If necessary, provide routes using the `ROUTES` `InjectionToken`.
 * @see {@link ROUTES}
 * @publicApi
 */
function provideRoutes(routes) {
  return [{
    provide: ROUTES,
    multi: true,
    useValue: routes
  }, typeof ngDevMode === 'undefined' || ngDevMode ? routerIsProvidedDevModeCheck : []];
}
/**
 * Enables customizable scrolling behavior for router navigations.
 *
 * @usageNotes
 *
 * Basic example of how you can enable scrolling feature:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withInMemoryScrolling())
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 * @see {@link ViewportScroller}
 *
 * @publicApi
 * @param options Set of configuration parameters to customize scrolling behavior, see
 *     `InMemoryScrollingOptions` for additional information.
 * @returns A set of providers for use with `provideRouter`.
 */
function withInMemoryScrolling(options = {}) {
  const providers = [{
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = (0,core_mjs_.inject)(common_mjs_.ViewportScroller);
      const zone = (0,core_mjs_.inject)(core_mjs_.NgZone);
      const transitions = (0,core_mjs_.inject)(NavigationTransitions);
      const urlSerializer = (0,core_mjs_.inject)(UrlSerializer);
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, options);
    }
  }];
  return routerFeature(4 /* RouterFeatureKind.InMemoryScrollingFeature */, providers);
}
function getBootstrapListener() {
  const injector = (0,core_mjs_.inject)(core_mjs_.Injector);
  return bootstrappedComponentRef => {
    const ref = injector.get(core_mjs_.ApplicationRef);
    if (bootstrappedComponentRef !== ref.components[0]) {
      return;
    }
    const router = injector.get(Router);
    const bootstrapDone = injector.get(BOOTSTRAP_DONE);
    if (injector.get(INITIAL_NAVIGATION) === 1 /* InitialNavigation.EnabledNonBlocking */) {
      router.initialNavigation();
    }
    injector.get(ROUTER_PRELOADER, null, core_mjs_.InjectFlags.Optional)?.setUpPreloading();
    injector.get(ROUTER_SCROLLER, null, core_mjs_.InjectFlags.Optional)?.init();
    router.resetRootComponentType(ref.componentTypes[0]);
    if (!bootstrapDone.closed) {
      bootstrapDone.next();
      bootstrapDone.complete();
      bootstrapDone.unsubscribe();
    }
  };
}
/**
 * A subject used to indicate that the bootstrapping phase is done. When initial navigation is
 * `enabledBlocking`, the first navigation waits until bootstrapping is finished before continuing
 * to the activation phase.
 */
const BOOTSTRAP_DONE = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'bootstrap done indicator' : '', {
  factory: () => {
    return new Subject/* Subject */.x();
  }
});
const INITIAL_NAVIGATION = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'initial navigation' : '', {
  providedIn: 'root',
  factory: () => 1 /* InitialNavigation.EnabledNonBlocking */
});
/**
 * Configures initial navigation to start before the root component is created.
 *
 * The bootstrap is blocked until the initial navigation is complete. This value is required for
 * [server-side rendering](guide/ssr) to work.
 *
 * @usageNotes
 *
 * Basic example of how you can enable this navigation behavior:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 *
 * @publicApi
 * @returns A set of providers for use with `provideRouter`.
 */
function withEnabledBlockingInitialNavigation() {
  const providers = [{
    provide: INITIAL_NAVIGATION,
    useValue: 0 /* InitialNavigation.EnabledBlocking */
  }, {
    provide: core_mjs_.APP_INITIALIZER,
    multi: true,
    deps: [core_mjs_.Injector],
    useFactory: injector => {
      const locationInitialized = injector.get(common_mjs_.LOCATION_INITIALIZED, Promise.resolve());
      return () => {
        return locationInitialized.then(() => {
          return new Promise(resolve => {
            const router = injector.get(Router);
            const bootstrapDone = injector.get(BOOTSTRAP_DONE);
            afterNextNavigation(router, () => {
              // Unblock APP_INITIALIZER in case the initial navigation was canceled or errored
              // without a redirect.
              resolve(true);
            });
            injector.get(NavigationTransitions).afterPreactivation = () => {
              // Unblock APP_INITIALIZER once we get to `afterPreactivation`. At this point, we
              // assume activation will complete successfully (even though this is not
              // guaranteed).
              resolve(true);
              return bootstrapDone.closed ? (0,of.of)(void 0) : bootstrapDone;
            };
            router.initialNavigation();
          });
        });
      };
    }
  }];
  return routerFeature(2 /* RouterFeatureKind.EnabledBlockingInitialNavigationFeature */, providers);
}
/**
 * Disables initial navigation.
 *
 * Use if there is a reason to have more control over when the router starts its initial navigation
 * due to some complex initialization logic.
 *
 * @usageNotes
 *
 * Basic example of how you can disable initial navigation:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withDisabledInitialNavigation())
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 *
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withDisabledInitialNavigation() {
  const providers = [{
    provide: core_mjs_.APP_INITIALIZER,
    multi: true,
    useFactory: () => {
      const router = (0,core_mjs_.inject)(Router);
      return () => {
        router.setUpLocationChangeListener();
      };
    }
  }, {
    provide: INITIAL_NAVIGATION,
    useValue: 2 /* InitialNavigation.Disabled */
  }];

  return routerFeature(3 /* RouterFeatureKind.DisabledInitialNavigationFeature */, providers);
}
/**
 * Enables logging of all internal navigation events to the console.
 * Extra logging might be useful for debugging purposes to inspect Router event sequence.
 *
 * @usageNotes
 *
 * Basic example of how you can enable debug tracing:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withDebugTracing())
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 *
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withDebugTracing() {
  let providers = [];
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    providers = [{
      provide: core_mjs_.ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const router = (0,core_mjs_.inject)(Router);
        return () => router.events.subscribe(e => {
          // tslint:disable:no-console
          console.group?.(`Router Event: ${e.constructor.name}`);
          console.log(stringifyEvent(e));
          console.log(e);
          console.groupEnd?.();
          // tslint:enable:no-console
        });
      }
    }];
  } else {
    providers = [];
  }
  return routerFeature(1 /* RouterFeatureKind.DebugTracingFeature */, providers);
}
const ROUTER_PRELOADER = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'router preloader' : '');
/**
 * Allows to configure a preloading strategy to use. The strategy is configured by providing a
 * reference to a class that implements a `PreloadingStrategy`.
 *
 * @usageNotes
 *
 * Basic example of how you can configure preloading:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withPreloading(PreloadAllModules))
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 *
 * @param preloadingStrategy A reference to a class that implements a `PreloadingStrategy` that
 *     should be used.
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withPreloading(preloadingStrategy) {
  const providers = [{
    provide: ROUTER_PRELOADER,
    useExisting: RouterPreloader
  }, {
    provide: PreloadingStrategy,
    useExisting: preloadingStrategy
  }];
  return routerFeature(0 /* RouterFeatureKind.PreloadingFeature */, providers);
}
/**
 * Allows to provide extra parameters to configure Router.
 *
 * @usageNotes
 *
 * Basic example of how you can provide extra configuration options:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withRouterConfig({
 *          onSameUrlNavigation: 'reload'
 *       }))
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 *
 * @param options A set of parameters to configure Router, see `RouterConfigOptions` for
 *     additional information.
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withRouterConfig(options) {
  const providers = [{
    provide: ROUTER_CONFIGURATION,
    useValue: options
  }];
  return routerFeature(5 /* RouterFeatureKind.RouterConfigurationFeature */, providers);
}
/**
 * Provides the location strategy that uses the URL fragment instead of the history API.
 *
 * @usageNotes
 *
 * Basic example of how you can use the hash location option:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withHashLocation())
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link provideRouter}
 * @see {@link HashLocationStrategy}
 *
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withHashLocation() {
  const providers = [{
    provide: common_mjs_.LocationStrategy,
    useClass: common_mjs_.HashLocationStrategy
  }];
  return routerFeature(6 /* RouterFeatureKind.RouterHashLocationFeature */, providers);
}
/**
 * Subscribes to the Router's navigation events and calls the given function when a
 * `NavigationError` happens.
 *
 * This function is run inside application's [injection context](guide/dependency-injection-context)
 * so you can use the [`inject`](api/core/inject) function.
 *
 * @usageNotes
 *
 * Basic example of how you can use the error handler option:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withNavigationErrorHandler((e: NavigationError) =>
 * inject(MyErrorTracker).trackError(e)))
 *     ]
 *   }
 * );
 * ```
 *
 * @see {@link NavigationError}
 * @see {@link core/inject}
 * @see {@link runInInjectionContext}
 *
 * @returns A set of providers for use with `provideRouter`.
 *
 * @publicApi
 */
function withNavigationErrorHandler(fn) {
  const providers = [{
    provide: core_mjs_.ENVIRONMENT_INITIALIZER,
    multi: true,
    useValue: () => {
      const injector = (0,core_mjs_.inject)(core_mjs_.EnvironmentInjector);
      (0,core_mjs_.inject)(Router).events.subscribe(e => {
        if (e instanceof NavigationError) {
          injector.runInContext(() => fn(e));
        }
      });
    }
  }];
  return routerFeature(7 /* RouterFeatureKind.NavigationErrorHandlerFeature */, providers);
}
/**
 * Enables binding information from the `Router` state directly to the inputs of the component in
 * `Route` configurations.
 *
 * @usageNotes
 *
 * Basic example of how you can enable the feature:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withComponentInputBinding())
 *     ]
 *   }
 * );
 * ```
 *
 * @returns A set of providers for use with `provideRouter`.
 */
function withComponentInputBinding() {
  const providers = [RoutedComponentInputBinder, {
    provide: INPUT_BINDER,
    useExisting: RoutedComponentInputBinder
  }];
  return routerFeature(8 /* RouterFeatureKind.ComponentInputBindingFeature */, providers);
}
/**
 * Enables view transitions in the Router by running the route activation and deactivation inside of
 * `document.startViewTransition`.
 *
 * Note: The View Transitions API is not available in all browsers. If the browser does not support
 * view transitions, the Router will not attempt to start a view transition and continue processing
 * the navigation as usual.
 *
 * @usageNotes
 *
 * Basic example of how you can enable the feature:
 * ```
 * const appRoutes: Routes = [];
 * bootstrapApplication(AppComponent,
 *   {
 *     providers: [
 *       provideRouter(appRoutes, withViewTransitions())
 *     ]
 *   }
 * );
 * ```
 *
 * @returns A set of providers for use with `provideRouter`.
 * @see https://developer.chrome.com/docs/web-platform/view-transitions/
 * @see https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API
 * @experimental
 */
function withViewTransitions(options) {
  const providers = [{
    provide: CREATE_VIEW_TRANSITION,
    useValue: createViewTransition
  }, {
    provide: VIEW_TRANSITION_OPTIONS,
    useValue: {
      skipNextTransition: !!options?.skipInitialTransition,
      ...options
    }
  }];
  return routerFeature(9 /* RouterFeatureKind.ViewTransitionsFeature */, providers);
}

/**
 * The directives defined in the `RouterModule`.
 */
const ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkActive, ɵEmptyOutletComponent];
/**
 * @docsNotRequired
 */
const ROUTER_FORROOT_GUARD = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'router duplicate forRoot guard' : 'ROUTER_FORROOT_GUARD');
// TODO(atscott): All of these except `ActivatedRoute` are `providedIn: 'root'`. They are only kept
// here to avoid a breaking change whereby the provider order matters based on where the
// `RouterModule`/`RouterTestingModule` is imported. These can/should be removed as a "breaking"
// change in a major version.
const ROUTER_PROVIDERS = [common_mjs_.Location, {
  provide: UrlSerializer,
  useClass: DefaultUrlSerializer
}, Router, ChildrenOutletContexts, {
  provide: ActivatedRoute,
  useFactory: rootRoute,
  deps: [Router]
}, RouterConfigLoader,
// Only used to warn when `provideRoutes` is used without `RouterModule` or `provideRouter`. Can
// be removed when `provideRoutes` is removed.
typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: ROUTER_IS_PROVIDED,
  useValue: true
} : []];
/**
 * @description
 *
 * Adds directives and providers for in-app navigation among views defined in an application.
 * Use the Angular `Router` service to declaratively specify application states and manage state
 * transitions.
 *
 * You can import this NgModule multiple times, once for each lazy-loaded bundle.
 * However, only one `Router` service can be active.
 * To ensure this, there are two ways to register routes when importing this module:
 *
 * * The `forRoot()` method creates an `NgModule` that contains all the directives, the given
 * routes, and the `Router` service itself.
 * * The `forChild()` method creates an `NgModule` that contains all the directives and the given
 * routes, but does not include the `Router` service.
 *
 * @see [Routing and Navigation guide](guide/router) for an
 * overview of how the `Router` service should be used.
 *
 * @publicApi
 */
let RouterModule = /*#__PURE__*/(() => {
  class RouterModule {
    constructor(guard) {}
    /**
     * Creates and configures a module with all the router providers and directives.
     * Optionally sets up an application listener to perform an initial navigation.
     *
     * When registering the NgModule at the root, import as follows:
     *
     * ```
     * @NgModule({
     *   imports: [RouterModule.forRoot(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @param routes An array of `Route` objects that define the navigation paths for the application.
     * @param config An `ExtraOptions` configuration object that controls how navigation is performed.
     * @return The new `NgModule`.
     *
     */
    static forRoot(routes, config) {
      return {
        ngModule: RouterModule,
        providers: [ROUTER_PROVIDERS, typeof ngDevMode === 'undefined' || ngDevMode ? config?.enableTracing ? withDebugTracing().ɵproviders : [] : [], {
          provide: ROUTES,
          multi: true,
          useValue: routes
        }, {
          provide: ROUTER_FORROOT_GUARD,
          useFactory: provideForRootGuard,
          deps: [[Router, new core_mjs_.Optional(), new core_mjs_.SkipSelf()]]
        }, {
          provide: ROUTER_CONFIGURATION,
          useValue: config ? config : {}
        }, config?.useHash ? provideHashLocationStrategy() : providePathLocationStrategy(), provideRouterScroller(), config?.preloadingStrategy ? withPreloading(config.preloadingStrategy).ɵproviders : [], config?.initialNavigation ? provideInitialNavigation(config) : [], config?.bindToComponentInputs ? withComponentInputBinding().ɵproviders : [], config?.enableViewTransitions ? withViewTransitions().ɵproviders : [], provideRouterInitializer()]
      };
    }
    /**
     * Creates a module with all the router directives and a provider registering routes,
     * without creating a new Router service.
     * When registering for submodules and lazy-loaded submodules, create the NgModule as follows:
     *
     * ```
     * @NgModule({
     *   imports: [RouterModule.forChild(ROUTES)]
     * })
     * class MyNgModule {}
     * ```
     *
     * @param routes An array of `Route` objects that define the navigation paths for the submodule.
     * @return The new NgModule.
     *
     */
    static forChild(routes) {
      return {
        ngModule: RouterModule,
        providers: [{
          provide: ROUTES,
          multi: true,
          useValue: routes
        }]
      };
    }
    static #_ = this.ɵfac = function RouterModule_Factory(t) {
      return new (t || RouterModule)(core_mjs_["ɵɵinject"](ROUTER_FORROOT_GUARD, 8));
    };
    static #_2 = this.ɵmod = /* @__PURE__ */core_mjs_["ɵɵdefineNgModule"]({
      type: RouterModule
    });
    static #_3 = this.ɵinj = /* @__PURE__ */core_mjs_["ɵɵdefineInjector"]({});
  }
  return RouterModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * For internal use by `RouterModule` only. Note that this differs from `withInMemoryRouterScroller`
 * because it reads from the `ExtraOptions` which should not be used in the standalone world.
 */
function provideRouterScroller() {
  return {
    provide: ROUTER_SCROLLER,
    useFactory: () => {
      const viewportScroller = (0,core_mjs_.inject)(common_mjs_.ViewportScroller);
      const zone = (0,core_mjs_.inject)(core_mjs_.NgZone);
      const config = (0,core_mjs_.inject)(ROUTER_CONFIGURATION);
      const transitions = (0,core_mjs_.inject)(NavigationTransitions);
      const urlSerializer = (0,core_mjs_.inject)(UrlSerializer);
      if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
      }
      return new RouterScroller(urlSerializer, transitions, viewportScroller, zone, config);
    }
  };
}
// Note: For internal use only with `RouterModule`. Standalone setup via `provideRouter` should
// provide hash location directly via `{provide: LocationStrategy, useClass: HashLocationStrategy}`.
function provideHashLocationStrategy() {
  return {
    provide: common_mjs_.LocationStrategy,
    useClass: common_mjs_.HashLocationStrategy
  };
}
// Note: For internal use only with `RouterModule`. Standalone setup via `provideRouter` does not
// need this at all because `PathLocationStrategy` is the default factory for `LocationStrategy`.
function providePathLocationStrategy() {
  return {
    provide: common_mjs_.LocationStrategy,
    useClass: common_mjs_.PathLocationStrategy
  };
}
function provideForRootGuard(router) {
  if ((typeof ngDevMode === 'undefined' || ngDevMode) && router) {
    throw new core_mjs_["ɵRuntimeError"](4007 /* RuntimeErrorCode.FOR_ROOT_CALLED_TWICE */, `The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector.` + ` Lazy loaded modules should use RouterModule.forChild() instead.`);
  }
  return 'guarded';
}
// Note: For internal use only with `RouterModule`. Standalone router setup with `provideRouter`
// users call `withXInitialNavigation` directly.
function provideInitialNavigation(config) {
  return [config.initialNavigation === 'disabled' ? withDisabledInitialNavigation().ɵproviders : [], config.initialNavigation === 'enabledBlocking' ? withEnabledBlockingInitialNavigation().ɵproviders : []];
}
// TODO(atscott): This should not be in the public API
/**
 * A [DI token](guide/glossary/#di-token) for the router initializer that
 * is called after the app is bootstrapped.
 *
 * @publicApi
 */
const ROUTER_INITIALIZER = /*#__PURE__*/new core_mjs_.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'Router Initializer' : '');
function provideRouterInitializer() {
  return [
  // ROUTER_INITIALIZER token should be removed. It's public API but shouldn't be. We can just
  // have `getBootstrapListener` directly attached to APP_BOOTSTRAP_LISTENER.
  {
    provide: ROUTER_INITIALIZER,
    useFactory: getBootstrapListener
  }, {
    provide: core_mjs_.APP_BOOTSTRAP_LISTENER,
    multi: true,
    useExisting: ROUTER_INITIALIZER
  }];
}

/**
 * Maps an array of injectable classes with canMatch functions to an array of equivalent
 * `CanMatchFn` for use in a `Route` definition.
 *
 * Usage {@example router/utils/functional_guards.ts region='CanActivate'}
 *
 * @publicApi
 * @see {@link Route}
 */
function mapToCanMatch(providers) {
  return providers.map(provider => (...params) => (0,core_mjs_.inject)(provider).canMatch(...params));
}
/**
 * Maps an array of injectable classes with canActivate functions to an array of equivalent
 * `CanActivateFn` for use in a `Route` definition.
 *
 * Usage {@example router/utils/functional_guards.ts region='CanActivate'}
 *
 * @publicApi
 * @see {@link Route}
 */
function mapToCanActivate(providers) {
  return providers.map(provider => (...params) => (0,core_mjs_.inject)(provider).canActivate(...params));
}
/**
 * Maps an array of injectable classes with canActivateChild functions to an array of equivalent
 * `CanActivateChildFn` for use in a `Route` definition.
 *
 * Usage {@example router/utils/functional_guards.ts region='CanActivate'}
 *
 * @publicApi
 * @see {@link Route}
 */
function mapToCanActivateChild(providers) {
  return providers.map(provider => (...params) => (0,core_mjs_.inject)(provider).canActivateChild(...params));
}
/**
 * Maps an array of injectable classes with canDeactivate functions to an array of equivalent
 * `CanDeactivateFn` for use in a `Route` definition.
 *
 * Usage {@example router/utils/functional_guards.ts region='CanActivate'}
 *
 * @publicApi
 * @see {@link Route}
 */
function mapToCanDeactivate(providers) {
  return providers.map(provider => (...params) => (0,core_mjs_.inject)(provider).canDeactivate(...params));
}
/**
 * Maps an injectable class with a resolve function to an equivalent `ResolveFn`
 * for use in a `Route` definition.
 *
 * Usage {@example router/utils/functional_guards.ts region='Resolve'}
 *
 * @publicApi
 * @see {@link Route}
 */
function mapToResolve(provider) {
  return (...params) => (0,core_mjs_.inject)(provider).resolve(...params);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the router package.
 */
/**
 * @publicApi
 */
const VERSION = /*#__PURE__*/new core_mjs_.Version('17.0.3');

/**
 * @module
 * @description
 * Entry point for all public APIs of this package.
 */
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=router.mjs.map

/***/ })

}]);