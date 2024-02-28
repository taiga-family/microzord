"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[200],{

/***/ 6700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5657);

class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .E {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    !subscription.closed && subscriber.next(this._value);
    return subscription;
  }
  getValue() {
    const {
      hasError,
      thrownError,
      _value
    } = this;
    if (hasError) {
      throw thrownError;
    }
    this._throwIfClosed();
    return _value;
  }
  next(value) {
    super.next(this._value = value);
  }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 5657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Subject)
});

// UNUSED EXPORTS: AnonymousSubject

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Observable.js
var Observable = __webpack_require__(3252);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/Subscription.js + 1 modules
var Subscription = __webpack_require__(6928);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/createErrorClass.js
var createErrorClass = __webpack_require__(4912);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js

const ObjectUnsubscribedError = (0,createErrorClass/* createErrorClass */.w)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/arrRemove.js
var arrRemove = __webpack_require__(1248);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/errorContext.js
var errorContext = __webpack_require__(2075);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/Subject.js





let Subject = /*#__PURE__*/(() => {
  class Subject extends Observable/* Observable */._ {
    constructor() {
      super();
      this.closed = false;
      this.currentObservers = null;
      this.observers = [];
      this.isStopped = false;
      this.hasError = false;
      this.thrownError = null;
    }
    lift(operator) {
      const subject = new AnonymousSubject(this, this);
      subject.operator = operator;
      return subject;
    }
    _throwIfClosed() {
      if (this.closed) {
        throw new ObjectUnsubscribedError();
      }
    }
    next(value) {
      (0,errorContext/* errorContext */.c)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          if (!this.currentObservers) {
            this.currentObservers = Array.from(this.observers);
          }
          for (const observer of this.currentObservers) {
            observer.next(value);
          }
        }
      });
    }
    error(err) {
      (0,errorContext/* errorContext */.c)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.hasError = this.isStopped = true;
          this.thrownError = err;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().error(err);
          }
        }
      });
    }
    complete() {
      (0,errorContext/* errorContext */.c)(() => {
        this._throwIfClosed();
        if (!this.isStopped) {
          this.isStopped = true;
          const {
            observers
          } = this;
          while (observers.length) {
            observers.shift().complete();
          }
        }
      });
    }
    unsubscribe() {
      this.isStopped = this.closed = true;
      this.observers = this.currentObservers = null;
    }
    get observed() {
      var _a;
      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    _trySubscribe(subscriber) {
      this._throwIfClosed();
      return super._trySubscribe(subscriber);
    }
    _subscribe(subscriber) {
      this._throwIfClosed();
      this._checkFinalizedStatuses(subscriber);
      return this._innerSubscribe(subscriber);
    }
    _innerSubscribe(subscriber) {
      const {
        hasError,
        isStopped,
        observers
      } = this;
      if (hasError || isStopped) {
        return Subscription/* EMPTY_SUBSCRIPTION */.au;
      }
      this.currentObservers = null;
      observers.push(subscriber);
      return new Subscription/* Subscription */.wH(() => {
        this.currentObservers = null;
        (0,arrRemove/* arrRemove */.k)(observers, subscriber);
      });
    }
    _checkFinalizedStatuses(subscriber) {
      const {
        hasError,
        thrownError,
        isStopped
      } = this;
      if (hasError) {
        subscriber.error(thrownError);
      } else if (isStopped) {
        subscriber.complete();
      }
    }
    asObservable() {
      const observable = new Observable/* Observable */._();
      observable.source = this;
      return observable;
    }
  }
  Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
  };
  return Subject;
})();
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription/* EMPTY_SUBSCRIPTION */.au;
  }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ 6040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony export combineLatestInit */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3252);
/* harmony import */ var _util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4300);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4496);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(528);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4187);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6624);
/* harmony import */ var _util_createObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7904);
/* harmony import */ var _operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7773);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9399);









function combineLatest(...args) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .e_)(args);
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popResultSelector */ .yu)(args);
  const {
    args: observables,
    keys
  } = (0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__/* .argsArgArrayOrObject */ .Q)(args);
  if (observables.length === 0) {
    return (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .Q)([], scheduler);
  }
  const result = new _Observable__WEBPACK_IMPORTED_MODULE_3__/* .Observable */ ._(combineLatestInit(observables, scheduler, keys ? values => (0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__/* .createObject */ .q)(keys, values) : _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .Z));
  return resultSelector ? result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__/* .mapOneOrManyArgs */ .j)(resultSelector)) : result;
}
function combineLatestInit(observables, scheduler, valueTransform = _util_identity__WEBPACK_IMPORTED_MODULE_5__/* .identity */ .Z) {
  return subscriber => {
    maybeSchedule(scheduler, () => {
      const {
        length
      } = observables;
      const values = new Array(length);
      let active = length;
      let remainingFirstValues = length;
      for (let i = 0; i < length; i++) {
        maybeSchedule(scheduler, () => {
          const source = (0,_from__WEBPACK_IMPORTED_MODULE_2__/* .from */ .Q)(observables[i], scheduler);
          let hasFirstValue = false;
          source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__/* .createOperatorSubscriber */ .e)(subscriber, value => {
            values[i] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, () => {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__/* .executeSchedule */ ._)(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 7228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ concat)
});

// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(267);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/operators/concatAll.js

function concatAll() {
  return (0,mergeAll/* mergeAll */.u)(1);
}
//# sourceMappingURL=concatAll.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/util/args.js
var util_args = __webpack_require__(6624);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm/internal/observable/from.js + 9 modules
var from = __webpack_require__(4496);
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm/internal/observable/concat.js



function concat(...args) {
  return concatAll()((0,from/* from */.Q)(args, (0,util_args/* popScheduler */.e_)(args)));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 1424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3252);
/* harmony import */ var _innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(560);


function defer(observableFactory) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ ._(subscriber => {
    (0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Uv)(observableFactory()).subscribe(subscriber);
  });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ 8960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ EMPTY)
/* harmony export */ });
/* unused harmony export empty */
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3252);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ ._(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new Observable(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ throwError)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3252);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8880);


function throwError(errorOrErrorFactory, scheduler) {
  const errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__/* .isFunction */ .m)(errorOrErrorFactory) ? errorOrErrorFactory : () => errorOrErrorFactory;
  const init = subscriber => subscriber.error(errorFactory());
  return new _Observable__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ ._(scheduler ? subscriber => scheduler.schedule(init, 0, subscriber) : init);
}
//# sourceMappingURL=throwError.js.map

/***/ }),

/***/ 9144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(560);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7773);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5448);



function catchError(selector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .i)((source, subscriber) => {
    let innerSub = null;
    let syncUnsub = false;
    let handledResult;
    innerSub = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__/* .createOperatorSubscriber */ .e)(subscriber, undefined, undefined, err => {
      handledResult = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__/* .innerFrom */ .Uv)(selector(err, catchError(selector)(source)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ mapTo)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4704);

function mapTo(value) {
  return (0,_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .k)(() => value);
}
//# sourceMappingURL=mapTo.js.map

/***/ }),

/***/ 267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ mergeAll)
/* harmony export */ });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7400);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(528);


function mergeAll(concurrent = Infinity) {
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__/* .mergeMap */ .O)(_util_identity__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .Z, concurrent);
}
//# sourceMappingURL=mergeAll.js.map

/***/ }),

/***/ 5568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ startWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7228);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6624);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5448);



function startWith(...values) {
  const scheduler = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__/* .popScheduler */ .e_)(values);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .i)((source, subscriber) => {
    (scheduler ? (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .W)(values, source, scheduler) : (0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .W)(values, source)).subscribe(subscriber);
  });
}
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ 3992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8960);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5448);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7773);



function take(count) {
  return count <= 0 ? () => _observable_empty__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY */ .k : (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__/* .operate */ .i)((source, subscriber) => {
    let seen = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .e)(subscriber, value => {
      if (++seen <= count) {
        subscriber.next(value);
        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 3616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5448);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7773);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(560);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(308);




function takeUntil(notifier) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__/* .operate */ .i)((source, subscriber) => {
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__/* .innerFrom */ .Uv)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__/* .createOperatorSubscriber */ .e)(subscriber, () => subscriber.complete(), _util_noop__WEBPACK_IMPORTED_MODULE_3__/* .noop */ .K));
    !subscriber.closed && source.subscribe(subscriber);
  });
}
//# sourceMappingURL=takeUntil.js.map

/***/ }),

/***/ 4300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ argsArgArrayOrObject)
/* harmony export */ });
const {
  isArray
} = Array;
const {
  getPrototypeOf,
  prototype: objectProto,
  keys: getKeys
} = Object;
function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    const first = args[0];
    if (isArray(first)) {
      return {
        args: first,
        keys: null
      };
    }
    if (isPOJO(first)) {
      const keys = getKeys(first);
      return {
        args: keys.map(key => first[key]),
        keys
      };
    }
  }
  return {
    args: args,
    keys: null
  };
}
function isPOJO(obj) {
  return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=argsArgArrayOrObject.js.map

/***/ }),

/***/ 7904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ createObject)
/* harmony export */ });
function createObject(keys, values) {
  return keys.reduce((result, key, i) => (result[key] = values[i], result), {});
}
//# sourceMappingURL=createObject.js.map

/***/ }),

/***/ 1116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ isObservable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3252);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8880);


function isObservable(obj) {
  return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ ._ || (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .m)(obj.lift) && (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__/* .isFunction */ .m)(obj.subscribe));
}
//# sourceMappingURL=isObservable.js.map

/***/ }),

/***/ 4187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4704);

const {
  isArray
} = Array;
function callOrApply(fn, args) {
  return isArray(args) ? fn(...args) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return (0,_operators_map__WEBPACK_IMPORTED_MODULE_0__/* .map */ .k)(args => callOrApply(fn, args));
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ 4476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OY: () => (/* binding */ Title),
/* harmony export */   ek: () => (/* binding */ EVENT_MANAGER_PLUGINS),
/* harmony export */   iE: () => (/* binding */ BrowserModule),
/* harmony export */   mI: () => (/* binding */ DomSanitizer),
/* harmony export */   o_: () => (/* binding */ platformBrowser),
/* harmony export */   q: () => (/* binding */ DomRendererFactory2)
/* harmony export */ });
/* unused harmony exports By, EventManager, EventManagerPlugin, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerModule, HydrationFeatureKind, Meta, REMOVE_STYLES_ON_COMPONENT_DESTROY, TransferState, VERSION, bootstrapApplication, createApplication, disableDebugTools, enableDebugTools, makeStateKey, provideClientHydration, provideProtractorTestingSupport, withHttpTransferCacheOptions, withNoHttpTransferCache, ɵBrowserDomAdapter, ɵBrowserGetTestability, ɵDomEventsPlugin, ɵDomSanitizerImpl, ɵHammerGesturesPlugin, ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS, ɵKeyEventsPlugin, ɵSharedStylesHost, ɵinitDomAdapter */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9996);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4380);
/**
 * @license Angular v17.2.3
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵDomAdapter"] {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵsetRootDomAdapter"])(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵparseCookieValue"])(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
function relativePath(url) {
  // The base URL doesn't really matter, we just need it so relative paths have something
  // to resolve against. In the browser `HTMLBaseElement.href` is always absolute.
  return new URL(url, document.baseURI).pathname;
}
class BrowserGetTestability {
  addToWindow(registry) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAngularTestability'] = (elem, findInAncestors = true) => {
      const testability = registry.findTestabilityInTree(elem, findInAncestors);
      if (testability == null) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5103 /* RuntimeErrorCode.TESTABILITY_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'Could not find testability for element.');
      }
      return testability;
    };
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities'] = () => registry.getAllTestabilities();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularRootElements'] = () => registry.getAllRootElements();
    const whenAllStable = callback => {
      const testabilities = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['getAllAngularTestabilities']();
      let count = testabilities.length;
      const decrement = function () {
        count--;
        if (count == 0) {
          callback();
        }
      };
      testabilities.forEach(testability => {
        testability.whenStable(decrement);
      });
    };
    if (!_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers']) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'] = [];
    }
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵglobal"]['frameworkStabilizers'].push(whenAllStable);
  }
  findTestabilityInTree(registry, elem, findInAncestors) {
    if (elem == null) {
      return null;
    }
    const t = registry.getTestability(elem);
    if (t != null) {
      return t;
    } else if (!findInAncestors) {
      return null;
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().isShadowRoot(elem)) {
      return this.findTestabilityInTree(registry, elem.host, true);
    }
    return this.findTestabilityInTree(registry, elem.parentElement, true);
  }
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
let BrowserXhr = /*#__PURE__*/(() => {
  class BrowserXhr {
    build() {
      return new XMLHttpRequest();
    }
    static #_ = this.ɵfac = function BrowserXhr_Factory(t) {
      return new (t || BrowserXhr)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BrowserXhr,
      factory: BrowserXhr.ɵfac
    });
  }
  return BrowserXhr;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The injection token for plugins of the `EventManager` service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'EventManagerPlugins' : '');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
let EventManager = /*#__PURE__*/(() => {
  class EventManager {
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins, _zone) {
      this._zone = _zone;
      this._eventNameToPlugin = new Map();
      plugins.forEach(plugin => {
        plugin.manager = this;
      });
      this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element, eventName, handler) {
      const plugin = this._findPluginFor(eventName);
      return plugin.addEventListener(element, eventName, handler);
    }
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone() {
      return this._zone;
    }
    /** @internal */
    _findPluginFor(eventName) {
      let plugin = this._eventNameToPlugin.get(eventName);
      if (plugin) {
        return plugin;
      }
      const plugins = this._plugins;
      plugin = plugins.find(plugin => plugin.supports(eventName));
      if (!plugin) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
      }
      this._eventNameToPlugin.set(eventName, plugin);
      return plugin;
    }
    static #_ = this.ɵfac = function EventManager_Factory(t) {
      return new (t || EventManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EVENT_MANAGER_PLUGINS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EventManager,
      factory: EventManager.ɵfac
    });
  }
  return EventManager;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * The plugin definition for the `EventManager` class
 *
 * It can be used as a base class to create custom manager plugins, i.e. you can create your own
 * class that extends the `EventManagerPlugin` one.
 *
 * @publicApi
 */
class EventManagerPlugin {
  // TODO: remove (has some usage in G3)
  constructor(_doc) {
    this._doc = _doc;
  }
}

/** The style elements attribute name used to set value of `APP_ID` token. */
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
let SharedStylesHost = /*#__PURE__*/(() => {
  class SharedStylesHost {
    constructor(doc, appId, nonce, platformId = {}) {
      this.doc = doc;
      this.appId = appId;
      this.nonce = nonce;
      this.platformId = platformId;
      // Maps all registered host nodes to a list of style nodes that have been added to the host node.
      this.styleRef = new Map();
      this.hostNodes = new Set();
      this.styleNodesInDOM = this.collectServerRenderedStyles();
      this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
      this.resetHostNodes();
    }
    addStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, 1);
        if (usageCount === 1) {
          this.onStyleAdded(style);
        }
      }
    }
    removeStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, -1);
        if (usageCount <= 0) {
          this.onStyleRemoved(style);
        }
      }
    }
    ngOnDestroy() {
      const styleNodesInDOM = this.styleNodesInDOM;
      if (styleNodesInDOM) {
        styleNodesInDOM.forEach(node => node.remove());
        styleNodesInDOM.clear();
      }
      for (const style of this.getAllStyles()) {
        this.onStyleRemoved(style);
      }
      this.resetHostNodes();
    }
    addHost(hostNode) {
      this.hostNodes.add(hostNode);
      for (const style of this.getAllStyles()) {
        this.addStyleToHost(hostNode, style);
      }
    }
    removeHost(hostNode) {
      this.hostNodes.delete(hostNode);
    }
    getAllStyles() {
      return this.styleRef.keys();
    }
    onStyleAdded(style) {
      for (const host of this.hostNodes) {
        this.addStyleToHost(host, style);
      }
    }
    onStyleRemoved(style) {
      const styleRef = this.styleRef;
      styleRef.get(style)?.elements?.forEach(node => node.remove());
      styleRef.delete(style);
    }
    collectServerRenderedStyles() {
      const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
      if (styles?.length) {
        const styleMap = new Map();
        styles.forEach(style => {
          if (style.textContent != null) {
            styleMap.set(style.textContent, style);
          }
        });
        return styleMap;
      }
      return null;
    }
    changeUsageCount(style, delta) {
      const map = this.styleRef;
      if (map.has(style)) {
        const styleRefValue = map.get(style);
        styleRefValue.usage += delta;
        return styleRefValue.usage;
      }
      map.set(style, {
        usage: delta,
        elements: []
      });
      return delta;
    }
    getStyleElement(host, style) {
      const styleNodesInDOM = this.styleNodesInDOM;
      const styleEl = styleNodesInDOM?.get(style);
      if (styleEl?.parentNode === host) {
        // `styleNodesInDOM` cannot be undefined due to the above `styleNodesInDOM?.get`.
        styleNodesInDOM.delete(style);
        styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // This attribute is solely used for debugging purposes.
          styleEl.setAttribute('ng-style-reused', '');
        }
        return styleEl;
      } else {
        const styleEl = this.doc.createElement('style');
        if (this.nonce) {
          styleEl.setAttribute('nonce', this.nonce);
        }
        styleEl.textContent = style;
        if (this.platformIsServer) {
          styleEl.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
        }
        host.appendChild(styleEl);
        return styleEl;
      }
    }
    addStyleToHost(host, style) {
      const styleEl = this.getStyleElement(host, style);
      const styleRef = this.styleRef;
      const styleElRef = styleRef.get(style)?.elements;
      if (styleElRef) {
        styleElRef.push(styleEl);
      } else {
        styleRef.set(style, {
          elements: [styleEl],
          usage: 1
        });
      }
    }
    resetHostNodes() {
      const hostNodes = this.hostNodes;
      hostNodes.clear();
      // Re-add the head element back since this is the default host.
      hostNodes.add(this.doc.head);
    }
    static #_ = this.ɵfac = function SharedStylesHost_Factory(t) {
      return new (t || SharedStylesHost)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedStylesHost,
      factory: SharedStylesHost.ɵfac
    });
  }
  return SharedStylesHost;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = true;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `true`.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(ngDevMode ? 'RemoveStylesOnCompDestroy' : '', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
let DomRendererFactory2 = /*#__PURE__*/(() => {
  class DomRendererFactory2 {
    constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.appId = appId;
      this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
      this.doc = doc;
      this.platformId = platformId;
      this.ngZone = ngZone;
      this.nonce = nonce;
      this.rendererByCompId = new Map();
      this.platformIsServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
      this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
    }
    createRenderer(element, type) {
      if (!element || !type) {
        return this.defaultRenderer;
      }
      if (this.platformIsServer && type.encapsulation === _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom) {
        // Domino does not support shadow DOM.
        type = {
          ...type,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated
        };
      }
      const renderer = this.getOrCreateRenderer(element, type);
      // Renderers have different logic due to different encapsulation behaviours.
      // Ex: for emulated, an attribute is added to the element.
      if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
        renderer.applyToHost(element);
      } else if (renderer instanceof NoneEncapsulationDomRenderer) {
        renderer.applyStyles();
      }
      return renderer;
    }
    getOrCreateRenderer(element, type) {
      const rendererByCompId = this.rendererByCompId;
      let renderer = rendererByCompId.get(type.id);
      if (!renderer) {
        const doc = this.doc;
        const ngZone = this.ngZone;
        const eventManager = this.eventManager;
        const sharedStylesHost = this.sharedStylesHost;
        const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
        const platformIsServer = this.platformIsServer;
        switch (type.encapsulation) {
          case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.Emulated:
            renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
            break;
          case _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.ShadowDom:
            return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
          default:
            renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
            break;
        }
        rendererByCompId.set(type.id, renderer);
      }
      return renderer;
    }
    ngOnDestroy() {
      this.rendererByCompId.clear();
    }
    static #_ = this.ɵfac = function DomRendererFactory2_Factory(t) {
      return new (t || DomRendererFactory2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SharedStylesHost), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](REMOVE_STYLES_ON_COMPONENT_DESTROY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.CSP_NONCE));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DomRendererFactory2,
      factory: DomRendererFactory2.ɵfac
    });
  }
  return DomRendererFactory2;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
class DefaultDomRenderer2 {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = Object.create(null);
    /**
     * By default this renderer throws when encountering synthetic properties
     * This can be disabled for example by the AsyncAnimationRendererFactory
     */
    this.throwOnSyntheticProps = true;
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (_angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase | _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    if (el == null) {
      return;
    }
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && this.throwOnSyntheticProps && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle
    // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
    // unwrap the listener (see below).
    return event => {
      // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
      // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
      // debug_node can inspect the listener toString contents for the existence of this special
      // token. Because the token is a string literal, it is ensured to not be modified by compiled
      // code.
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      // Run the event handler inside the ngZone because event handlers are not patched
      // by Zone on the server. This is required only for tests.
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = /*#__PURE__*/(() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
let DomEventsPlugin = /*#__PURE__*/(() => {
  class DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
      super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
      return true;
    }
    addEventListener(element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
      return () => this.removeEventListener(element, eventName, handler);
    }
    removeEventListener(target, eventName, callback) {
      return target.removeEventListener(eventName, callback);
    }
    static #_ = this.ɵfac = function DomEventsPlugin_Factory(t) {
      return new (t || DomEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DomEventsPlugin,
      factory: DomEventsPlugin.ɵfac
    });
  }
  return DomEventsPlugin;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * A browser plug-in that provides support for handling of key events in Angular.
 */
let KeyEventsPlugin = /*#__PURE__*/(() => {
  class KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc) {
      super(doc);
    }
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName) {
      return KeyEventsPlugin.parseEventName(eventName) != null;
    }
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element, eventName, handler) {
      const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
      const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
      return this.manager.getZone().runOutsideAngular(() => {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
      });
    }
    /**
     * Parses the user provided full keyboard event definition and normalizes it for
     * later internal use. It ensures the string is all lowercase, converts special
     * characters to a standard spelling, and orders all the values consistently.
     *
     * @param eventName The name of the key event to listen for.
     * @returns an object with the full, normalized string, and the dom event name
     * or null in the case when the event doesn't match a keyboard event.
     */
    static parseEventName(eventName) {
      const parts = eventName.toLowerCase().split('.');
      const domEventName = parts.shift();
      if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
        return null;
      }
      const key = KeyEventsPlugin._normalizeKey(parts.pop());
      let fullKey = '';
      let codeIX = parts.indexOf('code');
      if (codeIX > -1) {
        parts.splice(codeIX, 1);
        fullKey = 'code.';
      }
      MODIFIER_KEYS.forEach(modifierName => {
        const index = parts.indexOf(modifierName);
        if (index > -1) {
          parts.splice(index, 1);
          fullKey += modifierName + '.';
        }
      });
      fullKey += key;
      if (parts.length != 0 || key.length === 0) {
        // returning null instead of throwing to let another plugin process the event
        return null;
      }
      // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
      //       The code must remain in the `result['domEventName']` form.
      // return {domEventName, fullKey};
      const result = {};
      result['domEventName'] = domEventName;
      result['fullKey'] = fullKey;
      return result;
    }
    /**
     * Determines whether the actual keys pressed match the configured key code string.
     * The `fullKeyCode` event is normalized in the `parseEventName` method when the
     * event is attached to the DOM during the `addEventListener` call. This is unseen
     * by the end user and is normalized for internal consistency and parsing.
     *
     * @param event The keyboard event.
     * @param fullKeyCode The normalized user defined expected key event string
     * @returns boolean.
     */
    static matchEventFullKeyCode(event, fullKeyCode) {
      let keycode = _keyMap[event.key] || event.key;
      let key = '';
      if (fullKeyCode.indexOf('code.') > -1) {
        keycode = event.code;
        key = 'code.';
      }
      // the keycode could be unidentified so we have to check here
      if (keycode == null || !keycode) return false;
      keycode = keycode.toLowerCase();
      if (keycode === ' ') {
        keycode = 'space'; // for readability
      } else if (keycode === '.') {
        keycode = 'dot'; // because '.' is used as a separator in event names
      }
      MODIFIER_KEYS.forEach(modifierName => {
        if (modifierName !== keycode) {
          const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
          if (modifierGetter(event)) {
            key += modifierName + '.';
          }
        }
      });
      key += keycode;
      return key === fullKeyCode;
    }
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
      return event => {
        if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
          zone.runGuarded(() => handler(event));
        }
      };
    }
    /** @internal */
    static _normalizeKey(keyName) {
      return keyName === 'esc' ? 'escape' : keyName;
    }
    static #_ = this.ɵfac = function KeyEventsPlugin_Factory(t) {
      return new (t || KeyEventsPlugin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: KeyEventsPlugin,
      factory: KeyEventsPlugin.ɵfac
    });
  }
  return KeyEventsPlugin;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return ɵinternalCreateApplication({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
/**
 * Create an instance of an Angular application without bootstrapping any components. This is useful
 * for the situation where one wants to decouple application environment creation (a platform and
 * associated injectors) from rendering components on a screen. Components can be subsequently
 * bootstrapped on the returned `ApplicationRef`.
 *
 * @param options Extra configuration for the application environment, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function createApplication(options) {
  return ɵinternalCreateApplication(createProvidersConfig(options));
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
/**
 * Returns a set of providers required to setup [Testability](api/core/Testability) for an
 * application bootstrapped using the `bootstrapApplication` function. The set of providers is
 * needed to support testing an application with Protractor (which relies on the Testability APIs
 * to be present).
 *
 * @returns An array of providers required to setup Testability for an application and make it
 *     available for testing using Protractor.
 *
 * @publicApi
 */
function provideProtractorTestingSupport() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideProtractorTestingSupport` call results in app
  // code.
  return [...TESTABILITY_PROVIDERS];
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler();
}
function _document() {
  // Tell ivy about the global document
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetDocument"])(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,
  useValue: _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵPLATFORM_BROWSER_ID"]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,
  useFactory: _document,
  deps: []
}];
/**
 * A factory function that returns a `PlatformRef` instance associated with browser service
 * providers.
 *
 * @publicApi
 */
const platformBrowser = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 590 == __webpack_require__.j ? ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.platformCore, 'browser', INTERNAL_BROWSER_PLATFORM_PROVIDERS)) : null);
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
const TESTABILITY_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"],
  useClass: BrowserGetTestability,
  deps: []
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY"],
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  // Also provide as `Testability` for backwards-compatibility.
  useClass: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Testability,
  deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TestabilityRegistry, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵTESTABILITY_GETTER"]]
}];
const BROWSER_MODULE_PROVIDERS = [{
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"],
  useValue: 'root'
}, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone, _angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__.XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];
/**
 * Exports required infrastructure for all Angular apps.
 * Included by default in all Angular apps created with the CLI
 * `new` command.
 * Re-exports `CommonModule` and `ApplicationModule`, making their
 * exports and providers available to all apps.
 *
 * @publicApi
 */
let BrowserModule = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 590 == __webpack_require__.j ? ((() => {
  class BrowserModule {
    constructor(providersAlreadyPresent) {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && providersAlreadyPresent) {
        throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5100 /* RuntimeErrorCode.BROWSER_MODULE_ALREADY_LOADED */, `Providers from the \`BrowserModule\` have already been loaded. If you need access ` + `to common directives such as NgIf and NgFor, import the \`CommonModule\` instead.`);
      }
    }
    /**
     * Configures a browser-based app to transition from a server-rendered app, if
     * one is present on the page.
     *
     * @param params An object containing an identifier for the app to transition.
     * The ID must match between the client and server versions of the app.
     * @returns The reconfigured `BrowserModule` to import into the app's root `AppModule`.
     *
     * @deprecated Use {@link APP_ID} instead to set the application ID.
     */
    static withServerTransition(params) {
      return {
        ngModule: BrowserModule,
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.APP_ID,
          useValue: params.appId
        }]
      };
    }
    static #_ = this.ɵfac = function BrowserModule_Factory(t) {
      return new (t || BrowserModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BROWSER_MODULE_PROVIDERS_MARKER, 12));
    };
    static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BrowserModule
    });
    static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [...BROWSER_MODULE_PROVIDERS, ...TESTABILITY_PROVIDERS],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationModule]
    });
  }
  return BrowserModule;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * A service for managing HTML `<meta>` tags.
 *
 * Properties of the `MetaDefinition` object match the attributes of the
 * HTML `<meta>` tag. These tags define document metadata that is important for
 * things like configuring a Content Security Policy, defining browser compatibility
 * and security settings, setting HTTP Headers, defining rich content for social sharing,
 * and Search Engine Optimization (SEO).
 *
 * To identify specific `<meta>` tags in a document, use an attribute selection
 * string in the format `"tag_attribute='value string'"`.
 * For example, an `attrSelector` value of `"name='description'"` matches a tag
 * whose `name` attribute has the value `"description"`.
 * Selectors are used with the `querySelector()` Document method,
 * in the format `meta[{attrSelector}]`.
 *
 * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
 * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
 *
 *
 * @publicApi
 */
let Meta = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class Meta {
    constructor(_doc) {
      this._doc = _doc;
      this._dom = ɵgetDOM();
    }
    /**
     * Retrieves or creates a specific `<meta>` tag element in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * If an existing element is found, it is returned and is not modified in any way.
     * @param tag The definition of a `<meta>` element to match or create.
     * @param forceCreation True to create a new element without checking whether one already exists.
     * @returns The existing element with the same attributes and values if found,
     * the new element if no match is found, or `null` if the tag parameter is not defined.
     */
    addTag(tag, forceCreation = false) {
      if (!tag) return null;
      return this._getOrCreateElement(tag, forceCreation);
    }
    /**
     * Retrieves or creates a set of `<meta>` tag elements in the current HTML document.
     * In searching for an existing tag, Angular attempts to match the `name` or `property` attribute
     * values in the provided tag definition, and verifies that all other attribute values are equal.
     * @param tags An array of tag definitions to match or create.
     * @param forceCreation True to create new elements without checking whether they already exist.
     * @returns The matching elements if found, or the new elements.
     */
    addTags(tags, forceCreation = false) {
      if (!tags) return [];
      return tags.reduce((result, tag) => {
        if (tag) {
          result.push(this._getOrCreateElement(tag, forceCreation));
        }
        return result;
      }, []);
    }
    /**
     * Retrieves a `<meta>` tag element in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching element, if any.
     */
    getTag(attrSelector) {
      if (!attrSelector) return null;
      return this._doc.querySelector(`meta[${attrSelector}]`) || null;
    }
    /**
     * Retrieves a set of `<meta>` tag elements in the current HTML document.
     * @param attrSelector The tag attribute and value to match against, in the format
     * `"tag_attribute='value string'"`.
     * @returns The matching elements, if any.
     */
    getTags(attrSelector) {
      if (!attrSelector) return [];
      const list /*NodeList*/ = this._doc.querySelectorAll(`meta[${attrSelector}]`);
      return list ? [].slice.call(list) : [];
    }
    /**
     * Modifies an existing `<meta>` tag element in the current HTML document.
     * @param tag The tag description with which to replace the existing tag content.
     * @param selector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     * If not supplied, matches a tag with the same `name` or `property` attribute value as the
     * replacement tag.
     * @return The modified element.
     */
    updateTag(tag, selector) {
      if (!tag) return null;
      selector = selector || this._parseSelector(tag);
      const meta = this.getTag(selector);
      if (meta) {
        return this._setMetaElementAttributes(tag, meta);
      }
      return this._getOrCreateElement(tag, true);
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param attrSelector A tag attribute and value to match against, to identify
     * an existing tag. A string in the format `"tag_attribute=`value string`"`.
     */
    removeTag(attrSelector) {
      this.removeTagElement(this.getTag(attrSelector));
    }
    /**
     * Removes an existing `<meta>` tag element from the current HTML document.
     * @param meta The tag definition to match against to identify an existing tag.
     */
    removeTagElement(meta) {
      if (meta) {
        this._dom.remove(meta);
      }
    }
    _getOrCreateElement(meta, forceCreation = false) {
      if (!forceCreation) {
        const selector = this._parseSelector(meta);
        // It's allowed to have multiple elements with the same name so it's not enough to
        // just check that element with the same name already present on the page. We also need to
        // check if element has tag attributes
        const elem = this.getTags(selector).filter(elem => this._containsAttributes(meta, elem))[0];
        if (elem !== undefined) return elem;
      }
      const element = this._dom.createElement('meta');
      this._setMetaElementAttributes(meta, element);
      const head = this._doc.getElementsByTagName('head')[0];
      head.appendChild(element);
      return element;
    }
    _setMetaElementAttributes(tag, el) {
      Object.keys(tag).forEach(prop => el.setAttribute(this._getMetaKeyMap(prop), tag[prop]));
      return el;
    }
    _parseSelector(tag) {
      const attr = tag.name ? 'name' : 'property';
      return `${attr}="${tag[attr]}"`;
    }
    _containsAttributes(tag, elem) {
      return Object.keys(tag).every(key => elem.getAttribute(this._getMetaKeyMap(key)) === tag[key]);
    }
    _getMetaKeyMap(prop) {
      return META_KEYS_MAP[prop] || prop;
    }
    static #_ = this.ɵfac = function Meta_Factory(t) {
      return new (t || Meta)(i0.ɵɵinject(DOCUMENT));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
      token: Meta,
      factory: Meta.ɵfac,
      providedIn: 'root'
    });
  }
  return Meta;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Mapping for MetaDefinition properties with their correct meta attribute names
 */
const META_KEYS_MAP = {
  httpEquiv: 'http-equiv'
};

/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @publicApi
 */
let Title = /*#__PURE__*/(() => {
  class Title {
    constructor(_doc) {
      this._doc = _doc;
    }
    /**
     * Get the title of the current HTML document.
     */
    getTitle() {
      return this._doc.title;
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */
    setTitle(newTitle) {
      this._doc.title = newTitle || '';
    }
    static #_ = this.ɵfac = function Title_Factory(t) {
      return new (t || Title)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: Title,
      factory: Title.ɵfac,
      providedIn: 'root'
    });
  }
  return Title;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Exports the value under a given `name` in the global property `ng`. For example `ng.probe` if
 * `name` is `'probe'`.
 * @param name Name under which it will be exported. Keep in mind this will be a property of the
 * global `ng` object.
 * @param value The value to export.
 */
function exportNgVar(name, value) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for angularJS (via `goog.provide('ng....')`).
    const ng = ɵglobal['ng'] = ɵglobal['ng'] || {};
    ng[name] = value;
  }
}
class ChangeDetectionPerfRecord {
  constructor(msPerTick, numTicks) {
    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
  }
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
class AngularProfiler {
  constructor(ref) {
    this.appRef = ref.injector.get(ApplicationRef);
  }
  // tslint:disable:no-console
  /**
   * Exercises change detection in a loop and then prints the average amount of
   * time in milliseconds how long a single round of change detection takes for
   * the current state of the UI. It runs a minimum of 5 rounds for a minimum
   * of 500 milliseconds.
   *
   * Optionally, a user may pass a `config` parameter containing a map of
   * options. Supported options are:
   *
   * `record` (boolean) - causes the profiler to record a CPU profile while
   * it exercises the change detector. Example:
   *
   * ```
   * ng.profiler.timeChangeDetection({record: true})
   * ```
   */
  timeChangeDetection(config) {
    const record = config && config['record'];
    const profileName = 'Change Detection';
    // Profiler is not available in Android browsers without dev tools opened
    if (record && 'profile' in console && typeof console.profile === 'function') {
      console.profile(profileName);
    }
    const start = performance.now();
    let numTicks = 0;
    while (numTicks < 5 || performance.now() - start < 500) {
      this.appRef.tick();
      numTicks++;
    }
    const end = performance.now();
    if (record && 'profileEnd' in console && typeof console.profileEnd === 'function') {
      console.profileEnd(profileName);
    }
    const msPerTick = (end - start) / numTicks;
    console.log(`ran ${numTicks} change detection cycles`);
    console.log(`${msPerTick.toFixed(2)} ms per check`);
    return new ChangeDetectionPerfRecord(msPerTick, numTicks);
  }
}
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
function enableDebugTools(ref) {
  exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
  return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
function disableDebugTools() {
  exportNgVar(PROFILER_GLOBAL_NAME, null);
}

/**
 * Predicates for use with {@link DebugElement}'s query functions.
 *
 * @publicApi
 */
class By {
  /**
   * Match all nodes.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
   */
  static all() {
    return () => true;
  }
  /**
   * Match elements by the given CSS selector.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
   */
  static css(selector) {
    return debugElement => {
      return debugElement.nativeElement != null ? elementMatches(debugElement.nativeElement, selector) : false;
    };
  }
  /**
   * Match nodes that have the given directive present.
   *
   * @usageNotes
   * ### Example
   *
   * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
   */
  static directive(type) {
    return debugNode => debugNode.providerTokens.indexOf(type) !== -1;
  }
}
function elementMatches(n, selector) {
  if (ɵgetDOM().isElementNode(n)) {
    return n.matches && n.matches(selector) || n.msMatchesSelector && n.msMatchesSelector(selector) || n.webkitMatchesSelector && n.webkitMatchesSelector(selector);
  }
  return false;
}

/**
 * Supported HammerJS recognizer event names.
 */
const EVENT_NAMES = {
  // pan
  'pan': true,
  'panstart': true,
  'panmove': true,
  'panend': true,
  'pancancel': true,
  'panleft': true,
  'panright': true,
  'panup': true,
  'pandown': true,
  // pinch
  'pinch': true,
  'pinchstart': true,
  'pinchmove': true,
  'pinchend': true,
  'pinchcancel': true,
  'pinchin': true,
  'pinchout': true,
  // press
  'press': true,
  'pressup': true,
  // rotate
  'rotate': true,
  'rotatestart': true,
  'rotatemove': true,
  'rotateend': true,
  'rotatecancel': true,
  // swipe
  'swipe': true,
  'swipeleft': true,
  'swiperight': true,
  'swipeup': true,
  'swipedown': true,
  // tap
  'tap': true,
  'doubletap': true
};
/**
 * DI token for providing [HammerJS](https://hammerjs.github.io/) support to Angular.
 * @see {@link HammerGestureConfig}
 *
 * @ngModule HammerModule
 * @publicApi
 */
const HAMMER_GESTURE_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerGestureConfig');
/**
 * Injection token used to provide a {@link HammerLoader} to Angular.
 *
 * @publicApi
 */
const HAMMER_LOADER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('HammerLoader');
/**
 * An injectable [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
 * for gesture recognition. Configures specific event recognition.
 * @publicApi
 */
let HammerGestureConfig = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class HammerGestureConfig {
    constructor() {
      /**
       * A set of supported event names for gestures to be used in Angular.
       * Angular supports all built-in recognizers, as listed in
       * [HammerJS documentation](https://hammerjs.github.io/).
       */
      this.events = [];
      /**
       * Maps gesture event names to a set of configuration options
       * that specify overrides to the default values for specific properties.
       *
       * The key is a supported event name to be configured,
       * and the options object contains a set of properties, with override values
       * to be applied to the named recognizer event.
       * For example, to disable recognition of the rotate event, specify
       *  `{"rotate": {"enable": false}}`.
       *
       * Properties that are not present take the HammerJS default values.
       * For information about which properties are supported for which events,
       * and their allowed and default values, see
       * [HammerJS documentation](https://hammerjs.github.io/).
       *
       */
      this.overrides = {};
    }
    /**
     * Creates a [HammerJS Manager](https://hammerjs.github.io/api/#hammermanager)
     * and attaches it to a given HTML element.
     * @param element The element that will recognize gestures.
     * @returns A HammerJS event-manager object.
     */
    buildHammer(element) {
      const mc = new Hammer(element, this.options);
      mc.get('pinch').set({
        enable: true
      });
      mc.get('rotate').set({
        enable: true
      });
      for (const eventName in this.overrides) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
      return mc;
    }
    static #_ = this.ɵfac = function HammerGestureConfig_Factory(t) {
      return new (t || HammerGestureConfig)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
      token: HammerGestureConfig,
      factory: HammerGestureConfig.ɵfac
    });
  }
  return HammerGestureConfig;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Event plugin that adds Hammer support to an application.
 *
 * @ngModule HammerModule
 */
let HammerGesturesPlugin = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class HammerGesturesPlugin extends EventManagerPlugin {
    constructor(doc, _config, console, loader) {
      super(doc);
      this._config = _config;
      this.console = console;
      this.loader = loader;
      this._loaderPromise = null;
    }
    supports(eventName) {
      if (!EVENT_NAMES.hasOwnProperty(eventName.toLowerCase()) && !this.isCustomEvent(eventName)) {
        return false;
      }
      if (!window.Hammer && !this.loader) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          this.console.warn(`The "${eventName}" event cannot be bound because Hammer.JS is not ` + `loaded and no custom loader has been specified.`);
        }
        return false;
      }
      return true;
    }
    addEventListener(element, eventName, handler) {
      const zone = this.manager.getZone();
      eventName = eventName.toLowerCase();
      // If Hammer is not present but a loader is specified, we defer adding the event listener
      // until Hammer is loaded.
      if (!window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || zone.runOutsideAngular(() => this.loader());
        // This `addEventListener` method returns a function to remove the added listener.
        // Until Hammer is loaded, the returned function needs to *cancel* the registration rather
        // than remove anything.
        let cancelRegistration = false;
        let deregister = () => {
          cancelRegistration = true;
        };
        zone.runOutsideAngular(() => this._loaderPromise.then(() => {
          // If Hammer isn't actually loaded when the custom loader resolves, give up.
          if (!window.Hammer) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              this.console.warn(`The custom HAMMER_LOADER completed, but Hammer.JS is not present.`);
            }
            deregister = () => {};
            return;
          }
          if (!cancelRegistration) {
            // Now that Hammer is loaded and the listener is being loaded for real,
            // the deregistration function changes from canceling registration to
            // removal.
            deregister = this.addEventListener(element, eventName, handler);
          }
        }).catch(() => {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            this.console.warn(`The "${eventName}" event cannot be bound because the custom ` + `Hammer.JS loader failed.`);
          }
          deregister = () => {};
        }));
        // Return a function that *executes* `deregister` (and not `deregister` itself) so that we
        // can change the behavior of `deregister` once the listener is added. Using a closure in
        // this way allows us to avoid any additional data structures to track listener removal.
        return () => {
          deregister();
        };
      }
      return zone.runOutsideAngular(() => {
        // Creating the manager bind events, must be done outside of angular
        const mc = this._config.buildHammer(element);
        const callback = function (eventObj) {
          zone.runGuarded(function () {
            handler(eventObj);
          });
        };
        mc.on(eventName, callback);
        return () => {
          mc.off(eventName, callback);
          // destroy mc to prevent memory leak
          if (typeof mc.destroy === 'function') {
            mc.destroy();
          }
        };
      });
    }
    isCustomEvent(eventName) {
      return this._config.events.indexOf(eventName) > -1;
    }
    static #_ = this.ɵfac = function HammerGesturesPlugin_Factory(t) {
      return new (t || HammerGesturesPlugin)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(HAMMER_GESTURE_CONFIG), i0.ɵɵinject(i0.ɵConsole), i0.ɵɵinject(HAMMER_LOADER, 8));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
      token: HammerGesturesPlugin,
      factory: HammerGesturesPlugin.ɵfac
    });
  }
  return HammerGesturesPlugin;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Adds support for HammerJS.
 *
 * Import this module at the root of your application so that Angular can work with
 * HammerJS to detect gesture events.
 *
 * Note that applications still need to include the HammerJS script itself. This module
 * simply sets up the coordination layer between HammerJS and Angular's `EventManager`.
 *
 * @publicApi
 */
let HammerModule = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class HammerModule {
    static #_ = this.ɵfac = function HammerModule_Factory(t) {
      return new (t || HammerModule)();
    };
    static #_2 = this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
      type: HammerModule
    });
    static #_3 = this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({
      providers: [{
        provide: EVENT_MANAGER_PLUGINS,
        useClass: HammerGesturesPlugin,
        multi: true,
        deps: [DOCUMENT, HAMMER_GESTURE_CONFIG, ɵConsole, [new Optional(), HAMMER_LOADER]]
      }, {
        provide: HAMMER_GESTURE_CONFIG,
        useClass: HammerGestureConfig,
        deps: []
      }]
    });
  }
  return HammerModule;
})()));
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 *
 * @security Calling any of the `bypassSecurityTrust...` APIs disables Angular's built-in
 * sanitization for the value passed in. Carefully check and audit all values and code paths going
 * into this call. Make sure any user data is appropriately escaped for this security context.
 * For more detail, see the [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
let DomSanitizer = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 590 == __webpack_require__.j ? ((() => {
  class DomSanitizer {
    static #_ = this.ɵfac = function DomSanitizer_Factory(t) {
      return new (t || DomSanitizer)();
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DomSanitizer,
      factory: function DomSanitizer_Factory(t) {
        let r = null;
        if (t) {
          r = new (t || DomSanitizer)();
        } else {
          r = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DomSanitizerImpl);
        }
        return r;
      },
      providedIn: 'root'
    });
  }
  return DomSanitizer;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let DomSanitizerImpl = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 590 == __webpack_require__.j ? ((() => {
  class DomSanitizerImpl extends DomSanitizer {
    constructor(_doc) {
      super();
      this._doc = _doc;
    }
    sanitize(ctx, value) {
      if (value == null) return null;
      switch (ctx) {
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.NONE:
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "HTML" /* BypassType.Html */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeHtml"])(this._doc, String(value)).toString();
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.STYLE:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Style" /* BypassType.Style */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
          }
          return value;
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.SCRIPT:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "Script" /* BypassType.Script */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
          }
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5200 /* RuntimeErrorCode.SANITIZATION_UNSAFE_SCRIPT */, (typeof ngDevMode === 'undefined' || ngDevMode) && 'unsafe value used in a script context');
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "URL" /* BypassType.Url */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
          }
          return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵ_sanitizeUrl"])(String(value));
        case _angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL:
          if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵallowSanitizationBypassAndThrow"])(value, "ResourceURL" /* BypassType.ResourceUrl */)) {
            return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunwrapSafeValue"])(value);
          }
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5201 /* RuntimeErrorCode.SANITIZATION_UNSAFE_RESOURCE_URL */, (typeof ngDevMode === 'undefined' || ngDevMode) && `unsafe value used in a resource URL context (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
        default:
          throw new _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵRuntimeError"](5202 /* RuntimeErrorCode.SANITIZATION_UNEXPECTED_CTX */, (typeof ngDevMode === 'undefined' || ngDevMode) && `Unexpected SecurityContext ${ctx} (see ${_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵXSS_SECURITY_URL"]})`);
      }
    }
    bypassSecurityTrustHtml(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustHtml"])(value);
    }
    bypassSecurityTrustStyle(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustStyle"])(value);
    }
    bypassSecurityTrustScript(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustScript"])(value);
    }
    bypassSecurityTrustUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustUrl"])(value);
    }
    bypassSecurityTrustResourceUrl(value) {
      return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵbypassSanitizationTrustResourceUrl"])(value);
    }
    static #_ = this.ɵfac = function DomSanitizerImpl_Factory(t) {
      return new (t || DomSanitizerImpl)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
    };
    static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DomSanitizerImpl,
      factory: DomSanitizerImpl.ɵfac,
      providedIn: 'root'
    });
  }
  return DomSanitizerImpl;
})()) : null);
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The list of features as an enum to uniquely type each `HydrationFeature`.
 * @see {@link HydrationFeature}
 *
 * @publicApi
 */
var HydrationFeatureKind = /*#__PURE__*/function (HydrationFeatureKind) {
  HydrationFeatureKind[HydrationFeatureKind["NoHttpTransferCache"] = 0] = "NoHttpTransferCache";
  HydrationFeatureKind[HydrationFeatureKind["HttpTransferCacheOptions"] = 1] = "HttpTransferCacheOptions";
  return HydrationFeatureKind;
}(HydrationFeatureKind || {});
/**
 * Helper function to create an object that represents a Hydration feature.
 */
function hydrationFeature(ɵkind, ɵproviders = [], ɵoptions = {}) {
  return {
    ɵkind,
    ɵproviders
  };
}
/**
 * Disables HTTP transfer cache. Effectively causes HTTP requests to be performed twice: once on the
 * server and other one on the browser.
 *
 * @publicApi
 */
function withNoHttpTransferCache() {
  // This feature has no providers and acts as a flag that turns off
  // HTTP transfer cache (which otherwise is turned on by default).
  return hydrationFeature(HydrationFeatureKind.NoHttpTransferCache);
}
/**
 * The function accepts a an object, which allows to configure cache parameters,
 * such as which headers should be included (no headers are included by default),
 * wether POST requests should be cached or a callback function to determine if a
 * particular request should be cached.
 *
 * @publicApi
 */
function withHttpTransferCacheOptions(options) {
  // This feature has no providers and acts as a flag to pass options to the HTTP transfer cache.
  return hydrationFeature(HydrationFeatureKind.HttpTransferCacheOptions, ɵwithHttpTransferCache(options));
}
/**
 * Returns an `ENVIRONMENT_INITIALIZER` token setup with a function
 * that verifies whether compatible ZoneJS was used in an application
 * and logs a warning in a console if it's not the case.
 */
function provideZoneJsCompatibilityDetector() {
  return [{
    provide: ENVIRONMENT_INITIALIZER,
    useValue: () => {
      const ngZone = inject(NgZone);
      // Checking `ngZone instanceof NgZone` would be insufficient here,
      // because custom implementations might use NgZone as a base class.
      if (ngZone.constructor !== NgZone) {
        const console = inject(ɵConsole);
        const message = ɵformatRuntimeError(-5000 /* RuntimeErrorCode.UNSUPPORTED_ZONEJS_INSTANCE */, 'Angular detected that hydration was enabled for an application ' + 'that uses a custom or a noop Zone.js implementation. ' + 'This is not yet a fully supported configuration.');
        // tslint:disable-next-line:no-console
        console.warn(message);
      }
    },
    multi: true
  }];
}
/**
 * Sets up providers necessary to enable hydration functionality for the application.
 *
 * By default, the function enables the recommended set of features for the optimal
 * performance for most of the applications. It includes the following features:
 *
 * * Reconciling DOM hydration. Learn more about it [here](guide/hydration).
 * * [`HttpClient`](api/common/http/HttpClient) response caching while running on the server and
 * transferring this cache to the client to avoid extra HTTP requests. Learn more about data caching
 * [here](/guide/ssr#caching-data-when-using-httpclient).
 *
 * These functions allow you to disable some of the default features or configure features
 * * {@link withNoHttpTransferCache} to disable HTTP transfer cache
 * * {@link withHttpTransferCacheOptions} to configure some HTTP transfer cache options
 *
 * @usageNotes
 *
 * Basic example of how you can enable hydration in your application when
 * `bootstrapApplication` function is used:
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [provideClientHydration()]
 * });
 * ```
 *
 * Alternatively if you are using NgModules, you would add `provideClientHydration`
 * to your root app module's provider list.
 * ```
 * @NgModule({
 *   declarations: [RootCmp],
 *   bootstrap: [RootCmp],
 *   providers: [provideClientHydration()],
 * })
 * export class AppModule {}
 * ```
 *
 * @see {@link withNoHttpTransferCache}
 * @see {@link withHttpTransferCacheOptions}
 *
 * @param features Optional features to configure additional router behaviors.
 * @returns A set of providers to enable hydration.
 *
 * @publicApi
 */
function provideClientHydration(...features) {
  const providers = [];
  const featuresKind = new Set();
  const hasHttpTransferCacheOptions = featuresKind.has(HydrationFeatureKind.HttpTransferCacheOptions);
  for (const {
    ɵproviders,
    ɵkind
  } of features) {
    featuresKind.add(ɵkind);
    if (ɵproviders.length) {
      providers.push(ɵproviders);
    }
  }
  if (typeof ngDevMode !== 'undefined' && ngDevMode && featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) && hasHttpTransferCacheOptions) {
    // TODO: Make this a runtime error
    throw new Error('Configuration error: found both withHttpTransferCacheOptions() and withNoHttpTransferCache() in the same call to provideClientHydration(), which is a contradiction.');
  }
  return makeEnvironmentProviders([typeof ngDevMode !== 'undefined' && ngDevMode ? provideZoneJsCompatibilityDetector() : [], ɵwithDomHydration(), featuresKind.has(HydrationFeatureKind.NoHttpTransferCache) || hasHttpTransferCacheOptions ? [] : ɵwithHttpTransferCache({}), providers]);
}

/**
 * @module
 * @description
 * Entry point for all public APIs of the platform-browser package.
 */
/**
 * @publicApi
 */
const VERSION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('17.2.3');

// Re-export TransferState to the public API of the `platform-browser` for backwards-compatibility.
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 * @deprecated `makeStateKey` has moved, please import `makeStateKey` from `@angular/core` instead.
 */
// The below is a workaround to add a deprecated message.
const makeStateKey = (/* unused pure expression or super */ null && (makeStateKey$1));
// The below type is needed for G3 due to JSC_CONFORMANCE_VIOLATION.
const TransferState = (/* unused pure expression or super */ null && (TransferState$1));

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


//# sourceMappingURL=platform-browser.mjs.map

/***/ })

}]);