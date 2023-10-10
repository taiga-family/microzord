"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([[592],{

/***/ 5773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ HostChildWarningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
if (179 == __webpack_require__.j) {
	/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885);
}


let HostChildWarningComponent = /*#__PURE__*/(/* runtime-dependent pure expression or super */ 179 == __webpack_require__.j ? ((() => {
  class HostChildWarningComponent {}
  HostChildWarningComponent.ɵfac = function HostChildWarningComponent_Factory(t) {
    return new (t || HostChildWarningComponent)();
  };
  HostChildWarningComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HostChildWarningComponent,
    selectors: [["host-child-warning"]],
    decls: 2,
    vars: 0,
    template: function HostChildWarningComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The application can be a host and a child at the same time\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    directives: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .TuiNotificationComponent */ .Ls],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n}"],
    changeDetection: 0
  });
  return HostChildWarningComponent;
})()) : null);

/***/ }),

/***/ 6215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ BehaviorSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9765);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7971);


class BehaviorSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__/* .Subject */ .xQ {
  constructor(_value) {
    super();
    this._value = _value;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(subscriber) {
    const subscription = super._subscribe(subscriber);
    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }
    return subscription;
  }
  getValue() {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__/* .ObjectUnsubscribedError */ .N();
    } else {
      return this._value;
    }
  }
  next(value) {
    super.next(this._value = value);
  }
}
//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ 5197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ OuterSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);

class OuterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .Subscriber */ .L {
  notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  }
  notifyError(error, innerSub) {
    this.destination.error(error);
  }
  notifyComplete(innerSub) {
    this.destination.complete();
  }
}
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ 9112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aj: () => (/* binding */ combineLatest)
/* harmony export */ });
/* unused harmony exports CombineLatestOperator, CombineLatestSubscriber */
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9796);
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5197);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(509);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6693);





const NONE = {};
function combineLatest(...observables) {
  let resultSelector = undefined;
  let scheduler = undefined;
  if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .K)(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }
  if (observables.length === 1 && (0,_util_isArray__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .k)(observables[0])) {
    observables = observables[0];
  }
  return (0,_fromArray__WEBPACK_IMPORTED_MODULE_2__/* .fromArray */ .n)(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
class CombineLatestOperator {
  constructor(resultSelector) {
    this.resultSelector = resultSelector;
  }
  call(subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  }
}
class CombineLatestSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__/* .OuterSubscriber */ .L {
  constructor(destination, resultSelector) {
    super(destination);
    this.resultSelector = resultSelector;
    this.active = 0;
    this.values = [];
    this.observables = [];
  }
  _next(observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  }
  _complete() {
    const observables = this.observables;
    const len = observables.length;
    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;
      for (let i = 0; i < len; i++) {
        const observable = observables[i];
        this.add((0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__/* .subscribeToResult */ .D)(this, observable, undefined, i));
      }
    }
  }
  notifyComplete(unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  }
  notifyNext(_outerValue, innerValue, outerIndex) {
    const values = this.values;
    const oldVal = values[outerIndex];
    const toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;
    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  }
  _tryResultSelector(values) {
    let result;
    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 8071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ concat)
});

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(5917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(3282);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/operators/concatAll.js

function concatAll() {
  return (0,mergeAll/* mergeAll */.J)(1);
}
//# sourceMappingURL=concatAll.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/observable/concat.js


function concat(...observables) {
  return concatAll()((0,of.of)(...observables));
}
//# sourceMappingURL=concat.js.map

/***/ }),

/***/ 1439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ defer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8891);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4402);
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9193);



function defer(observableFactory) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .y(subscriber => {
    let input;
    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
    const source = input ? (0,_from__WEBPACK_IMPORTED_MODULE_1__/* .from */ .D)(input) : (0,_empty__WEBPACK_IMPORTED_MODULE_2__/* .empty */ .c)();
    return source.subscribe(subscriber);
  });
}
//# sourceMappingURL=defer.js.map

/***/ }),

/***/ 9193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ EMPTY),
/* harmony export */   c: () => (/* binding */ empty)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8891);

const EMPTY = new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .y(subscriber => subscriber.complete());
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .y(subscriber => scheduler.schedule(() => subscriber.complete()));
}
//# sourceMappingURL=empty.js.map

/***/ }),

/***/ 6682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ merge)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8891);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3282);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6693);




function merge(...observables) {
  let concurrent = Number.POSITIVE_INFINITY;
  let scheduler = null;
  let last = observables[observables.length - 1];
  if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .K)(last)) {
    scheduler = observables.pop();
    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }
  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .y) {
    return observables[0];
  }
  return (0,_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__/* .mergeAll */ .J)(concurrent)((0,_fromArray__WEBPACK_IMPORTED_MODULE_3__/* .fromArray */ .n)(observables, scheduler));
}
//# sourceMappingURL=merge.js.map

/***/ }),

/***/ 5917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   of: () => (/* binding */ of)
/* harmony export */ });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6693);
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4087);



function of(...args) {
  let scheduler = args[args.length - 1];
  if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .K)(scheduler)) {
    args.pop();
    return (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_1__/* .scheduleArray */ .r)(args, scheduler);
  } else {
    return (0,_fromArray__WEBPACK_IMPORTED_MODULE_2__/* .fromArray */ .n)(args);
  }
}
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 5304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ catchError)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5345);

function catchError(selector) {
  return function catchErrorOperatorFunction(source) {
    const operator = new CatchOperator(selector);
    const caught = source.lift(operator);
    return operator.caught = caught;
  };
}
class CatchOperator {
  constructor(selector) {
    this.selector = selector;
  }
  call(subscriber, source) {
    return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
  }
}
class CatchSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__/* .SimpleOuterSubscriber */ .Ds {
  constructor(destination, selector, caught) {
    super(destination);
    this.selector = selector;
    this.caught = caught;
  }
  error(err) {
    if (!this.isStopped) {
      let result;
      try {
        result = this.selector(err, this.caught);
      } catch (err2) {
        super.error(err2);
        return;
      }
      this._unsubscribeAndRecycle();
      const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__/* .SimpleInnerSubscriber */ .IY(this);
      this.add(innerSubscriber);
      const innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__/* .innerSubscribe */ .ft)(result, innerSubscriber);
      if (innerSubscription !== innerSubscriber) {
        this.add(innerSubscription);
      }
    }
  }
}
//# sourceMappingURL=catchError.js.map

/***/ }),

/***/ 5435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);

function filter(predicate, thisArg) {
  return function filterOperatorFunction(source) {
    return source.lift(new FilterOperator(predicate, thisArg));
  };
}
class FilterOperator {
  constructor(predicate, thisArg) {
    this.predicate = predicate;
    this.thisArg = thisArg;
  }
  call(subscriber, source) {
    return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
  }
}
class FilterSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .Subscriber */ .L {
  constructor(destination, predicate, thisArg) {
    super(destination);
    this.predicate = predicate;
    this.thisArg = thisArg;
    this.count = 0;
  }
  _next(value) {
    let result;
    try {
      result = this.predicate.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    if (result) {
      this.destination.next(value);
    }
  }
}
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 8819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ share)
});

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/ConnectableObservable.js
var ConnectableObservable = __webpack_require__(2441);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/operators/multicast.js

function multicast(subjectOrSubjectFactory, selector) {
  return function multicastOperatorFunction(source) {
    let subjectFactory;
    if (typeof subjectOrSubjectFactory === 'function') {
      subjectFactory = subjectOrSubjectFactory;
    } else {
      subjectFactory = function subjectFactory() {
        return subjectOrSubjectFactory;
      };
    }
    if (typeof selector === 'function') {
      return source.lift(new MulticastOperator(subjectFactory, selector));
    }
    const connectable = Object.create(source, ConnectableObservable/* connectableObservableDescriptor */.N);
    connectable.source = source;
    connectable.subjectFactory = subjectFactory;
    return connectable;
  };
}
class MulticastOperator {
  constructor(subjectFactory, selector) {
    this.subjectFactory = subjectFactory;
    this.selector = selector;
  }
  call(subscriber, source) {
    const {
      selector
    } = this;
    const subject = this.subjectFactory();
    const subscription = selector(subject).subscribe(subscriber);
    subscription.add(source.subscribe(subject));
    return subscription;
  }
}
//# sourceMappingURL=multicast.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/refCount.js
var refCount = __webpack_require__(1307);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(9765);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/operators/share.js



function shareSubjectFactory() {
  return new Subject/* Subject */.xQ();
}
function share() {
  return source => (0,refCount/* refCount */.x)()(multicast(shareSubjectFactory)(source));
}
//# sourceMappingURL=share.js.map

/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ startWith)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8071);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4869);


function startWith(...array) {
  const scheduler = array[array.length - 1];
  if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__/* .isScheduler */ .K)(scheduler)) {
    array.pop();
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_1__/* .concat */ .z)(array, source, scheduler);
  } else {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_1__/* .concat */ .z)(array, source);
  }
}
//# sourceMappingURL=startWith.js.map

/***/ }),

/***/ 3190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8002);
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4402);
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5345);



function switchMap(project, resultSelector) {
  if (typeof resultSelector === 'function') {
    return source => source.pipe(switchMap((a, i) => (0,_observable_from__WEBPACK_IMPORTED_MODULE_0__/* .from */ .D)(project(a, i)).pipe((0,_map__WEBPACK_IMPORTED_MODULE_1__/* .map */ .U)((b, ii) => resultSelector(a, b, i, ii)))));
  }
  return source => source.lift(new SwitchMapOperator(project));
}
class SwitchMapOperator {
  constructor(project) {
    this.project = project;
  }
  call(subscriber, source) {
    return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
  }
}
class SwitchMapSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__/* .SimpleOuterSubscriber */ .Ds {
  constructor(destination, project) {
    super(destination);
    this.project = project;
    this.index = 0;
  }
  _next(value) {
    let result;
    const index = this.index++;
    try {
      result = this.project(value, index);
    } catch (error) {
      this.destination.error(error);
      return;
    }
    this._innerSub(result);
  }
  _innerSub(result) {
    const innerSubscription = this.innerSubscription;
    if (innerSubscription) {
      innerSubscription.unsubscribe();
    }
    const innerSubscriber = new _innerSubscribe__WEBPACK_IMPORTED_MODULE_2__/* .SimpleInnerSubscriber */ .IY(this);
    const destination = this.destination;
    destination.add(innerSubscriber);
    this.innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_2__/* .innerSubscribe */ .ft)(result, innerSubscriber);
    if (this.innerSubscription !== innerSubscriber) {
      destination.add(this.innerSubscription);
    }
  }
  _complete() {
    const {
      innerSubscription
    } = this;
    if (!innerSubscription || innerSubscription.closed) {
      super._complete();
    }
    this.unsubscribe();
  }
  _unsubscribe() {
    this.innerSubscription = undefined;
  }
  notifyComplete() {
    this.innerSubscription = undefined;
    if (this.isStopped) {
      super._complete();
    }
  }
  notifyNext(innerValue) {
    this.destination.next(innerValue);
  }
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 5257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ take)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7393);
/* harmony import */ var _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7108);
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9193);



function take(count) {
  return source => {
    if (count === 0) {
      return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_0__/* .empty */ .c)();
    } else {
      return source.lift(new TakeOperator(count));
    }
  };
}
class TakeOperator {
  constructor(total) {
    this.total = total;
    if (this.total < 0) {
      throw new _util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_1__/* .ArgumentOutOfRangeError */ .W();
    }
  }
  call(subscriber, source) {
    return source.subscribe(new TakeSubscriber(subscriber, this.total));
  }
}
class TakeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_2__/* .Subscriber */ .L {
  constructor(destination, total) {
    super(destination);
    this.total = total;
    this.count = 0;
  }
  _next(value) {
    const total = this.total;
    const count = ++this.count;
    if (count <= total) {
      this.destination.next(value);
      if (count === total) {
        this.destination.complete();
        this.unsubscribe();
      }
    }
  }
}
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 8307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7393);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8640);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9105);



function tap(nextOrObserver, error, complete) {
  return function tapOperatorFunction(source) {
    return source.lift(new DoOperator(nextOrObserver, error, complete));
  };
}
class DoOperator {
  constructor(nextOrObserver, error, complete) {
    this.nextOrObserver = nextOrObserver;
    this.error = error;
    this.complete = complete;
  }
  call(subscriber, source) {
    return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
  }
}
class TapSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__/* .Subscriber */ .L {
  constructor(destination, observerOrNext, error, complete) {
    super(destination);
    this._tapNext = _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    this._tapError = _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    this._tapComplete = _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    this._tapError = error || _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    this._tapComplete = complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__/* .isFunction */ .m)(observerOrNext)) {
      this._context = this;
      this._tapNext = observerOrNext;
    } else if (observerOrNext) {
      this._context = observerOrNext;
      this._tapNext = observerOrNext.next || _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
      this._tapError = observerOrNext.error || _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
      this._tapComplete = observerOrNext.complete || _util_noop__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .Z;
    }
  }
  _next(value) {
    try {
      this._tapNext.call(this._context, value);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(value);
  }
  _error(err) {
    try {
      this._tapError.call(this._context, err);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.error(err);
  }
  _complete() {
    try {
      this._tapComplete.call(this._context);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    return this.destination.complete();
  }
}
//# sourceMappingURL=tap.js.map

/***/ }),

/***/ 7108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ ArgumentOutOfRangeError)
/* harmony export */ });
const ArgumentOutOfRangeErrorImpl = (() => {
  function ArgumentOutOfRangeErrorImpl() {
    Error.call(this);
    this.message = 'argument out of range';
    this.name = 'ArgumentOutOfRangeError';
    return this;
  }
  ArgumentOutOfRangeErrorImpl.prototype = Object.create(Error.prototype);
  return ArgumentOutOfRangeErrorImpl;
})();
const ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ 8640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ subscribeToResult)
});

// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subscriber.js
var Subscriber = __webpack_require__(7393);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/InnerSubscriber.js

class InnerSubscriber extends Subscriber/* Subscriber */.L {
  constructor(parent, outerValue, outerIndex) {
    super();
    this.parent = parent;
    this.outerValue = outerValue;
    this.outerIndex = outerIndex;
    this.index = 0;
  }
  _next(value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  }
  _error(error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  }
  _complete() {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  }
}
//# sourceMappingURL=InnerSubscriber.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/util/subscribeTo.js + 3 modules
var subscribeTo = __webpack_require__(7444);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Observable.js + 2 modules
var Observable = __webpack_require__(8891);
;// CONCATENATED MODULE: ./node_modules/rxjs/_esm2015/internal/util/subscribeToResult.js



function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber = new InnerSubscriber(outerSubscriber, outerValue, outerIndex)) {
  if (innerSubscriber.closed) {
    return undefined;
  }
  if (result instanceof Observable/* Observable */.y) {
    return result.subscribe(innerSubscriber);
  }
  return (0,subscribeTo/* subscribeTo */.s)(result)(innerSubscriber);
}
//# sourceMappingURL=subscribeToResult.js.map

/***/ })

}]);