(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var qo =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Kl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Np = { exports: {} },
  Si = {},
  Hp = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oo = Symbol.for("react.element"),
  vg = Symbol.for("react.portal"),
  yg = Symbol.for("react.fragment"),
  wg = Symbol.for("react.strict_mode"),
  kg = Symbol.for("react.profiler"),
  xg = Symbol.for("react.provider"),
  Sg = Symbol.for("react.context"),
  Cg = Symbol.for("react.forward_ref"),
  Eg = Symbol.for("react.suspense"),
  bg = Symbol.for("react.memo"),
  Tg = Symbol.for("react.lazy"),
  fc = Symbol.iterator;
function Ag(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (fc && e[fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Up = Object.assign,
  Qp = {};
function Sr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qp),
    (this.updater = n || Fp);
}
Sr.prototype.isReactComponent = {};
Sr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qp() {}
qp.prototype = Sr.prototype;
function Yl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Qp),
    (this.updater = n || Fp);
}
var Vl = (Yl.prototype = new qp());
Vl.constructor = Yl;
Up(Vl, Sr.prototype);
Vl.isPureReactComponent = !0;
var hc = Array.isArray,
  Xp = Object.prototype.hasOwnProperty,
  Zl = { current: null },
  Wp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Xp.call(t, r) && !Wp.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Oo,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Zl.current,
  };
}
function Ig(e, t) {
  return {
    $$typeof: Oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Oo;
}
function Pg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mc = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Pg("" + e.key)
    : t.toString(36);
}
function bs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Oo:
          case vg:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Wi(i, 0) : r),
      hc(o)
        ? ((n = ""),
          e != null && (n = e.replace(mc, "$&/") + "/"),
          bs(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (Jl(o) &&
            (o = Ig(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(mc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), hc(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + Wi(s, a);
      i += bs(s, t, n, l, o);
    }
  else if (((l = Ag(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Wi(s, a++)), (i += bs(s, t, n, l, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Xo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    bs(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Rg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var je = { current: null },
  Ts = { transition: null },
  _g = {
    ReactCurrentDispatcher: je,
    ReactCurrentBatchConfig: Ts,
    ReactCurrentOwner: Zl,
  };
function Kp() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Xo,
  forEach: function (e, t, n) {
    Xo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Sr;
q.Fragment = yg;
q.Profiler = kg;
q.PureComponent = Yl;
q.StrictMode = wg;
q.Suspense = Eg;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _g;
q.act = Kp;
q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Up({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Zl.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Xp.call(t, l) &&
        !Wp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Oo, type: e.type, key: o, ref: s, props: r, _owner: i };
};
q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xg, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Gp;
q.createFactory = function (e) {
  var t = Gp.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: Cg, render: e };
};
q.isValidElement = Jl;
q.lazy = function (e) {
  return { $$typeof: Tg, _payload: { _status: -1, _result: e }, _init: Rg };
};
q.memo = function (e, t) {
  return { $$typeof: bg, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
q.unstable_act = Kp;
q.useCallback = function (e, t) {
  return je.current.useCallback(e, t);
};
q.useContext = function (e) {
  return je.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return je.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return je.current.useEffect(e, t);
};
q.useId = function () {
  return je.current.useId();
};
q.useImperativeHandle = function (e, t, n) {
  return je.current.useImperativeHandle(e, t, n);
};
q.useInsertionEffect = function (e, t) {
  return je.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return je.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return je.current.useMemo(e, t);
};
q.useReducer = function (e, t, n) {
  return je.current.useReducer(e, t, n);
};
q.useRef = function (e) {
  return je.current.useRef(e);
};
q.useState = function (e) {
  return je.current.useState(e);
};
q.useSyncExternalStore = function (e, t, n) {
  return je.current.useSyncExternalStore(e, t, n);
};
q.useTransition = function () {
  return je.current.useTransition();
};
q.version = "18.3.1";
Hp.exports = q;
var E = Hp.exports;
const Yp = Kl(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg = E,
  Bg = Symbol.for("react.element"),
  Og = Symbol.for("react.fragment"),
  Mg = Object.prototype.hasOwnProperty,
  zg = Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vp(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Mg.call(t, r) && !$g.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Bg,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: zg.current,
  };
}
Si.Fragment = Og;
Si.jsx = Vp;
Si.jsxs = Vp;
Np.exports = Si;
var A = Np.exports,
  Da = {},
  Zp = { exports: {} },
  nt = {},
  Jp = { exports: {} },
  ef = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, L) {
    var O = R.length;
    R.push(L);
    e: for (; 0 < O; ) {
      var N = (O - 1) >>> 1,
        H = R[N];
      if (0 < o(H, L)) (R[N] = L), (R[O] = H), (O = N);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var L = R[0],
      O = R.pop();
    if (O !== L) {
      R[0] = O;
      e: for (var N = 0, H = R.length, K = H >>> 1; N < K; ) {
        var Te = 2 * (N + 1) - 1,
          V = R[Te],
          ee = Te + 1,
          Ge = R[ee];
        if (0 > o(V, O))
          ee < H && 0 > o(Ge, V)
            ? ((R[N] = Ge), (R[ee] = O), (N = ee))
            : ((R[N] = V), (R[Te] = O), (N = Te));
        else if (ee < H && 0 > o(Ge, O)) (R[N] = Ge), (R[ee] = O), (N = ee);
        else break e;
      }
    }
    return L;
  }
  function o(R, L) {
    var O = R.sortIndex - L.sortIndex;
    return O !== 0 ? O : R.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    f = null,
    d = 3,
    m = !1,
    g = !1,
    p = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= R)
        r(c), (L.sortIndex = L.expirationTime), t(l, L);
      else break;
      L = n(c);
    }
  }
  function k(R) {
    if (((p = !1), y(R), !g))
      if (n(l) !== null) (g = !0), fe(x);
      else {
        var L = n(c);
        L !== null && G(k, L.startTime - R);
      }
  }
  function x(R, L) {
    (g = !1), p && ((p = !1), v(C), (C = -1)), (m = !0);
    var O = d;
    try {
      for (
        y(L), f = n(l);
        f !== null && (!(f.expirationTime > L) || (R && !D()));

      ) {
        var N = f.callback;
        if (typeof N == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var H = N(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof H == "function" ? (f.callback = H) : f === n(l) && r(l),
            y(L);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var K = !0;
      else {
        var Te = n(c);
        Te !== null && G(k, Te.startTime - L), (K = !1);
      }
      return K;
    } finally {
      (f = null), (d = O), (m = !1);
    }
  }
  var S = !1,
    b = null,
    C = -1,
    I = 5,
    P = -1;
  function D() {
    return !(e.unstable_now() - P < I);
  }
  function B() {
    if (b !== null) {
      var R = e.unstable_now();
      P = R;
      var L = !0;
      try {
        L = b(!0, R);
      } finally {
        L ? z() : ((S = !1), (b = null));
      }
    } else S = !1;
  }
  var z;
  if (typeof h == "function")
    z = function () {
      h(B);
    };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(),
      W = j.port2;
    (j.port1.onmessage = B),
      (z = function () {
        W.postMessage(null);
      });
  } else
    z = function () {
      w(B, 0);
    };
  function fe(R) {
    (b = R), S || ((S = !0), z());
  }
  function G(R, L) {
    C = w(function () {
      R(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || m || ((g = !0), fe(x));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = d;
      }
      var O = d;
      d = L;
      try {
        return R();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, L) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var O = d;
      d = R;
      try {
        return L();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (R, L, O) {
      var N = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? N + O : N))
          : (O = N),
        R)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = O + H),
        (R = {
          id: u++,
          callback: L,
          priorityLevel: R,
          startTime: O,
          expirationTime: H,
          sortIndex: -1,
        }),
        O > N
          ? ((R.sortIndex = O),
            t(c, R),
            n(l) === null &&
              R === n(c) &&
              (p ? (v(C), (C = -1)) : (p = !0), G(k, O - N)))
          : ((R.sortIndex = H), t(l, R), g || m || ((g = !0), fe(x))),
        R
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (R) {
      var L = d;
      return function () {
        var O = d;
        d = L;
        try {
          return R.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(ef);
Jp.exports = ef;
var Dg = Jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jg = E,
  tt = Dg;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var tf = new Set(),
  mo = {};
function zn(e, t) {
  mr(e, t), mr(e + "Capture", t);
}
function mr(e, t) {
  for (mo[e] = t, e = 0; e < t.length; e++) tf.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ja = Object.prototype.hasOwnProperty,
  Ng =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gc = {},
  vc = {};
function Hg(e) {
  return ja.call(vc, e)
    ? !0
    : ja.call(gc, e)
    ? !1
    : Ng.test(e)
    ? (vc[e] = !0)
    : ((gc[e] = !0), !1);
}
function Fg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ug(e, t, n, r) {
  if (t === null || typeof t > "u" || Fg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var eu = /[\-:]([a-z])/g;
function tu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    Pe[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(eu, tu);
    Pe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(eu, tu);
  Pe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nu(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ug(t, n, o, r) && (n = null),
    r || o === null
      ? Hg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = jg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wo = Symbol.for("react.element"),
  Xn = Symbol.for("react.portal"),
  Wn = Symbol.for("react.fragment"),
  ru = Symbol.for("react.strict_mode"),
  Na = Symbol.for("react.profiler"),
  nf = Symbol.for("react.provider"),
  rf = Symbol.for("react.context"),
  ou = Symbol.for("react.forward_ref"),
  Ha = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  su = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  of = Symbol.for("react.offscreen"),
  yc = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yc && e[yc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Gi;
function Wr(e) {
  if (Gi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gi = (t && t[1]) || "";
    }
  return (
    `
` +
    Gi +
    e
  );
}
var Ki = !1;
function Yi(e, t) {
  if (!e || Ki) return "";
  Ki = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && o[i] !== s[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== s[a])) {
                var l =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ki = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wr(e) : "";
}
function Qg(e) {
  switch (e.tag) {
    case 5:
      return Wr(e.type);
    case 16:
      return Wr("Lazy");
    case 13:
      return Wr("Suspense");
    case 19:
      return Wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yi(e.type, !1)), e;
    case 11:
      return (e = Yi(e.type.render, !1)), e;
    case 1:
      return (e = Yi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wn:
      return "Fragment";
    case Xn:
      return "Portal";
    case Na:
      return "Profiler";
    case ru:
      return "StrictMode";
    case Ha:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rf:
        return (e.displayName || "Context") + ".Consumer";
      case nf:
        return (e._context.displayName || "Context") + ".Provider";
      case ou:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case su:
        return (
          (t = e.displayName || null), t !== null ? t : Ua(e.type) || "Memo"
        );
      case qt:
        (t = e._payload), (e = e._init);
        try {
          return Ua(e(t));
        } catch {}
    }
  return null;
}
function qg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ua(t);
    case 8:
      return t === ru ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function an(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function sf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Xg(e) {
  var t = sf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Go(e) {
  e._valueTracker || (e._valueTracker = Xg(e));
}
function af(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ns(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Qa(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = an(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lf(e, t) {
  (t = t.checked), t != null && nu(e, "checked", t, !1);
}
function qa(e, t) {
  lf(e, t);
  var n = an(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xa(e, t.type, an(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function kc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xa(e, t, n) {
  (t !== "number" || Ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Gr = Array.isArray;
function ar(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + an(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Gr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: an(n) };
}
function uf(e, t) {
  var n = an(t.value),
    r = an(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Sc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ga(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ko,
  df = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ko = Ko || document.createElement("div"),
          Ko.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ko.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function go(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Wg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jr).forEach(function (e) {
  Wg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jr[t] = Jr[e]);
  });
});
function pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jr.hasOwnProperty(e) && Jr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ff(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Gg = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ka(e, t) {
  if (t) {
    if (Gg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Ya(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Va = null;
function iu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Za = null,
  lr = null,
  ur = null;
function Cc(e) {
  if ((e = $o(e))) {
    if (typeof Za != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Ai(t)), Za(e.stateNode, e.type, t));
  }
}
function hf(e) {
  lr ? (ur ? ur.push(e) : (ur = [e])) : (lr = e);
}
function mf() {
  if (lr) {
    var e = lr,
      t = ur;
    if (((ur = lr = null), Cc(e), t)) for (e = 0; e < t.length; e++) Cc(t[e]);
  }
}
function gf(e, t) {
  return e(t);
}
function vf() {}
var Vi = !1;
function yf(e, t, n) {
  if (Vi) return e(t, n);
  Vi = !0;
  try {
    return gf(e, t, n);
  } finally {
    (Vi = !1), (lr !== null || ur !== null) && (vf(), mf());
  }
}
function vo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ai(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Ja = !1;
if (Dt)
  try {
    var Br = {};
    Object.defineProperty(Br, "passive", {
      get: function () {
        Ja = !0;
      },
    }),
      window.addEventListener("test", Br, Br),
      window.removeEventListener("test", Br, Br);
  } catch {
    Ja = !1;
  }
function Kg(e, t, n, r, o, s, i, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var eo = !1,
  Hs = null,
  Fs = !1,
  el = null,
  Yg = {
    onError: function (e) {
      (eo = !0), (Hs = e);
    },
  };
function Vg(e, t, n, r, o, s, i, a, l) {
  (eo = !1), (Hs = null), Kg.apply(Yg, arguments);
}
function Zg(e, t, n, r, o, s, i, a, l) {
  if ((Vg.apply(this, arguments), eo)) {
    if (eo) {
      var c = Hs;
      (eo = !1), (Hs = null);
    } else throw Error(_(198));
    Fs || ((Fs = !0), (el = c));
  }
}
function $n(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ec(e) {
  if ($n(e) !== e) throw Error(_(188));
}
function Jg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $n(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Ec(o), e;
        if (s === r) return Ec(o), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function kf(e) {
  return (e = Jg(e)), e !== null ? xf(e) : null;
}
function xf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sf = tt.unstable_scheduleCallback,
  bc = tt.unstable_cancelCallback,
  ev = tt.unstable_shouldYield,
  tv = tt.unstable_requestPaint,
  ge = tt.unstable_now,
  nv = tt.unstable_getCurrentPriorityLevel,
  au = tt.unstable_ImmediatePriority,
  Cf = tt.unstable_UserBlockingPriority,
  Us = tt.unstable_NormalPriority,
  rv = tt.unstable_LowPriority,
  Ef = tt.unstable_IdlePriority,
  Ci = null,
  At = null;
function ov(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : av,
  sv = Math.log,
  iv = Math.LN2;
function av(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sv(e) / iv) | 0)) | 0;
}
var Yo = 64,
  Vo = 4194304;
function Kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Qs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = Kr(a)) : ((s &= i), s !== 0 && (r = Kr(s)));
  } else (i = n & ~o), i !== 0 ? (r = Kr(i)) : s !== 0 && (r = Kr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function lv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - yt(s),
      a = 1 << i,
      l = o[i];
    l === -1
      ? (!(a & n) || a & r) && (o[i] = lv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function tl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bf() {
  var e = Yo;
  return (Yo <<= 1), !(Yo & 4194240) && (Yo = 64), e;
}
function Zi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function cv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Y = 0;
function Tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Af,
  uu,
  If,
  Pf,
  Rf,
  nl = !1,
  Zo = [],
  Zt = null,
  Jt = null,
  en = null,
  yo = new Map(),
  wo = new Map(),
  Wt = [],
  dv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Tc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      yo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wo.delete(t.pointerId);
  }
}
function Or(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = $o(t)), t !== null && uu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function pv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Zt = Or(Zt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Jt = Or(Jt, e, t, n, r, o)), !0;
    case "mouseover":
      return (en = Or(en, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return yo.set(s, Or(yo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), wo.set(s, Or(wo.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function _f(e) {
  var t = bn(e.target);
  if (t !== null) {
    var n = $n(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wf(n)), t !== null)) {
          (e.blockedOn = t),
            Rf(e.priority, function () {
              If(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function As(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Va = r), n.target.dispatchEvent(r), (Va = null);
    } else return (t = $o(n)), t !== null && uu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ac(e, t, n) {
  As(e) && n.delete(t);
}
function fv() {
  (nl = !1),
    Zt !== null && As(Zt) && (Zt = null),
    Jt !== null && As(Jt) && (Jt = null),
    en !== null && As(en) && (en = null),
    yo.forEach(Ac),
    wo.forEach(Ac);
}
function Mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nl ||
      ((nl = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, fv)));
}
function ko(e) {
  function t(o) {
    return Mr(o, e);
  }
  if (0 < Zo.length) {
    Mr(Zo[0], e);
    for (var n = 1; n < Zo.length; n++) {
      var r = Zo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && Mr(Zt, e),
      Jt !== null && Mr(Jt, e),
      en !== null && Mr(en, e),
      yo.forEach(t),
      wo.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    _f(n), n.blockedOn === null && Wt.shift();
}
var cr = Ft.ReactCurrentBatchConfig,
  qs = !0;
function hv(e, t, n, r) {
  var o = Y,
    s = cr.transition;
  cr.transition = null;
  try {
    (Y = 1), cu(e, t, n, r);
  } finally {
    (Y = o), (cr.transition = s);
  }
}
function mv(e, t, n, r) {
  var o = Y,
    s = cr.transition;
  cr.transition = null;
  try {
    (Y = 4), cu(e, t, n, r);
  } finally {
    (Y = o), (cr.transition = s);
  }
}
function cu(e, t, n, r) {
  if (qs) {
    var o = rl(e, t, n, r);
    if (o === null) la(e, t, r, Xs, n), Tc(e, r);
    else if (pv(o, e, t, n, r)) r.stopPropagation();
    else if ((Tc(e, r), t & 4 && -1 < dv.indexOf(e))) {
      for (; o !== null; ) {
        var s = $o(o);
        if (
          (s !== null && Af(s),
          (s = rl(e, t, n, r)),
          s === null && la(e, t, r, Xs, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else la(e, t, r, null, n);
  }
}
var Xs = null;
function rl(e, t, n, r) {
  if (((Xs = null), (e = iu(r)), (e = bn(e)), e !== null))
    if (((t = $n(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xs = e), null;
}
function Lf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nv()) {
        case au:
          return 1;
        case Cf:
          return 4;
        case Us:
        case rv:
          return 16;
        case Ef:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  du = null,
  Is = null;
function Bf() {
  if (Is) return Is;
  var e,
    t = du,
    n = t.length,
    r,
    o = "value" in Yt ? Yt.value : Yt.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Is = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ps(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Jo() {
  return !0;
}
function Ic() {
  return !1;
}
function rt(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Jo
        : Ic),
      (this.isPropagationStopped = Ic),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Jo));
      },
      persist: function () {},
      isPersistent: Jo,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pu = rt(Cr),
  zo = pe({}, Cr, { view: 0, detail: 0 }),
  gv = rt(zo),
  Ji,
  ea,
  zr,
  Ei = pe({}, zo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zr &&
            (zr && e.type === "mousemove"
              ? ((Ji = e.screenX - zr.screenX), (ea = e.screenY - zr.screenY))
              : (ea = Ji = 0),
            (zr = e)),
          Ji);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ea;
    },
  }),
  Pc = rt(Ei),
  vv = pe({}, Ei, { dataTransfer: 0 }),
  yv = rt(vv),
  wv = pe({}, zo, { relatedTarget: 0 }),
  ta = rt(wv),
  kv = pe({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xv = rt(kv),
  Sv = pe({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Cv = rt(Sv),
  Ev = pe({}, Cr, { data: 0 }),
  Rc = rt(Ev),
  bv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Av = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Iv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Av[e]) ? !!t[e] : !1;
}
function fu() {
  return Iv;
}
var Pv = pe({}, zo, {
    key: function (e) {
      if (e.key) {
        var t = bv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ps(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function (e) {
      return e.type === "keypress" ? Ps(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ps(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rv = rt(Pv),
  _v = pe({}, Ei, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _c = rt(_v),
  Lv = pe({}, zo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu,
  }),
  Bv = rt(Lv),
  Ov = pe({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mv = rt(Ov),
  zv = pe({}, Ei, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $v = rt(zv),
  Dv = [9, 13, 27, 32],
  hu = Dt && "CompositionEvent" in window,
  to = null;
Dt && "documentMode" in document && (to = document.documentMode);
var jv = Dt && "TextEvent" in window && !to,
  Of = Dt && (!hu || (to && 8 < to && 11 >= to)),
  Lc = " ",
  Bc = !1;
function Mf(e, t) {
  switch (e) {
    case "keyup":
      return Dv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gn = !1;
function Nv(e, t) {
  switch (e) {
    case "compositionend":
      return zf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Bc = !0), Lc);
    case "textInput":
      return (e = t.data), e === Lc && Bc ? null : e;
    default:
      return null;
  }
}
function Hv(e, t) {
  if (Gn)
    return e === "compositionend" || (!hu && Mf(e, t))
      ? ((e = Bf()), (Is = du = Yt = null), (Gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Of && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Oc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fv[e.type] : t === "textarea";
}
function $f(e, t, n, r) {
  hf(r),
    (t = Ws(t, "onChange")),
    0 < t.length &&
      ((n = new pu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var no = null,
  xo = null;
function Uv(e) {
  Gf(e, 0);
}
function bi(e) {
  var t = Vn(e);
  if (af(t)) return e;
}
function Qv(e, t) {
  if (e === "change") return t;
}
var Df = !1;
if (Dt) {
  var na;
  if (Dt) {
    var ra = "oninput" in document;
    if (!ra) {
      var Mc = document.createElement("div");
      Mc.setAttribute("oninput", "return;"),
        (ra = typeof Mc.oninput == "function");
    }
    na = ra;
  } else na = !1;
  Df = na && (!document.documentMode || 9 < document.documentMode);
}
function zc() {
  no && (no.detachEvent("onpropertychange", jf), (xo = no = null));
}
function jf(e) {
  if (e.propertyName === "value" && bi(xo)) {
    var t = [];
    $f(t, xo, e, iu(e)), yf(Uv, t);
  }
}
function qv(e, t, n) {
  e === "focusin"
    ? (zc(), (no = t), (xo = n), no.attachEvent("onpropertychange", jf))
    : e === "focusout" && zc();
}
function Xv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return bi(xo);
}
function Wv(e, t) {
  if (e === "click") return bi(t);
}
function Gv(e, t) {
  if (e === "input" || e === "change") return bi(t);
}
function Kv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : Kv;
function So(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ja.call(t, o) || !kt(e[o], t[o])) return !1;
  }
  return !0;
}
function $c(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = $c(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = $c(n);
  }
}
function Nf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Hf() {
  for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ns(e.document);
  }
  return t;
}
function mu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yv(e) {
  var t = Hf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && mu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Dc(n, s));
        var i = Dc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Vv = Dt && "documentMode" in document && 11 >= document.documentMode,
  Kn = null,
  ol = null,
  ro = null,
  sl = !1;
function jc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  sl ||
    Kn == null ||
    Kn !== Ns(r) ||
    ((r = Kn),
    "selectionStart" in r && mu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ro && So(ro, r)) ||
      ((ro = r),
      (r = Ws(ol, "onSelect")),
      0 < r.length &&
        ((t = new pu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kn))));
}
function es(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yn = {
    animationend: es("Animation", "AnimationEnd"),
    animationiteration: es("Animation", "AnimationIteration"),
    animationstart: es("Animation", "AnimationStart"),
    transitionend: es("Transition", "TransitionEnd"),
  },
  oa = {},
  Ff = {};
Dt &&
  ((Ff = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  "TransitionEvent" in window || delete Yn.transitionend.transition);
function Ti(e) {
  if (oa[e]) return oa[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ff) return (oa[e] = t[n]);
  return e;
}
var Uf = Ti("animationend"),
  Qf = Ti("animationiteration"),
  qf = Ti("animationstart"),
  Xf = Ti("transitionend"),
  Wf = new Map(),
  Nc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function un(e, t) {
  Wf.set(e, t), zn(t, [e]);
}
for (var sa = 0; sa < Nc.length; sa++) {
  var ia = Nc[sa],
    Zv = ia.toLowerCase(),
    Jv = ia[0].toUpperCase() + ia.slice(1);
  un(Zv, "on" + Jv);
}
un(Uf, "onAnimationEnd");
un(Qf, "onAnimationIteration");
un(qf, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(Xf, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
zn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
zn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
zn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
zn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function Hc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zg(r, t, void 0, e), (e.currentTarget = null);
}
function Gf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && o.isPropagationStopped())) break e;
          Hc(o, a, c), (s = l);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && o.isPropagationStopped())
          )
            break e;
          Hc(o, a, c), (s = l);
        }
    }
  }
  if (Fs) throw ((e = el), (Fs = !1), (el = null), e);
}
function re(e, t) {
  var n = t[cl];
  n === void 0 && (n = t[cl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Kf(t, e, 2, !1), n.add(r));
}
function aa(e, t, n) {
  var r = 0;
  t && (r |= 4), Kf(n, e, r, t);
}
var ts = "_reactListening" + Math.random().toString(36).slice(2);
function Co(e) {
  if (!e[ts]) {
    (e[ts] = !0),
      tf.forEach(function (n) {
        n !== "selectionchange" && (ey.has(n) || aa(n, !1, e), aa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ts] || ((t[ts] = !0), aa("selectionchange", !1, t));
  }
}
function Kf(e, t, n, r) {
  switch (Lf(t)) {
    case 1:
      var o = hv;
      break;
    case 4:
      o = mv;
      break;
    default:
      o = cu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ja ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function la(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var l = i.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = i.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = bn(a)), i === null)) return;
          if (((l = i.tag), l === 5 || l === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  yf(function () {
    var c = s,
      u = iu(n),
      f = [];
    e: {
      var d = Wf.get(e);
      if (d !== void 0) {
        var m = pu,
          g = e;
        switch (e) {
          case "keypress":
            if (Ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Rv;
            break;
          case "focusin":
            (g = "focus"), (m = ta);
            break;
          case "focusout":
            (g = "blur"), (m = ta);
            break;
          case "beforeblur":
          case "afterblur":
            m = ta;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Pc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = yv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Bv;
            break;
          case Uf:
          case Qf:
          case qf:
            m = xv;
            break;
          case Xf:
            m = Mv;
            break;
          case "scroll":
            m = gv;
            break;
          case "wheel":
            m = $v;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Cv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = _c;
        }
        var p = (t & 4) !== 0,
          w = !p && e === "scroll",
          v = p ? (d !== null ? d + "Capture" : null) : d;
        p = [];
        for (var h = c, y; h !== null; ) {
          y = h;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              v !== null && ((k = vo(h, v)), k != null && p.push(Eo(h, k, y)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < p.length &&
          ((d = new m(d, g, null, n, u)), f.push({ event: d, listeners: p }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Va &&
            (g = n.relatedTarget || n.fromElement) &&
            (bn(g) || g[jt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((g = n.relatedTarget || n.toElement),
              (m = c),
              (g = g ? bn(g) : null),
              g !== null &&
                ((w = $n(g)), g !== w || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((m = null), (g = c)),
          m !== g)
        ) {
          if (
            ((p = Pc),
            (k = "onMouseLeave"),
            (v = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((p = _c),
              (k = "onPointerLeave"),
              (v = "onPointerEnter"),
              (h = "pointer")),
            (w = m == null ? d : Vn(m)),
            (y = g == null ? d : Vn(g)),
            (d = new p(k, h + "leave", m, n, u)),
            (d.target = w),
            (d.relatedTarget = y),
            (k = null),
            bn(u) === c &&
              ((p = new p(v, h + "enter", g, n, u)),
              (p.target = y),
              (p.relatedTarget = w),
              (k = p)),
            (w = k),
            m && g)
          )
            t: {
              for (p = m, v = g, h = 0, y = p; y; y = Qn(y)) h++;
              for (y = 0, k = v; k; k = Qn(k)) y++;
              for (; 0 < h - y; ) (p = Qn(p)), h--;
              for (; 0 < y - h; ) (v = Qn(v)), y--;
              for (; h--; ) {
                if (p === v || (v !== null && p === v.alternate)) break t;
                (p = Qn(p)), (v = Qn(v));
              }
              p = null;
            }
          else p = null;
          m !== null && Fc(f, d, m, p, !1),
            g !== null && w !== null && Fc(f, w, g, p, !0);
        }
      }
      e: {
        if (
          ((d = c ? Vn(c) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var x = Qv;
        else if (Oc(d))
          if (Df) x = Gv;
          else {
            x = Xv;
            var S = qv;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = Wv);
        if (x && (x = x(e, c))) {
          $f(f, x, n, u);
          break e;
        }
        S && S(e, d, c),
          e === "focusout" &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === "number" &&
            Xa(d, "number", d.value);
      }
      switch (((S = c ? Vn(c) : window), e)) {
        case "focusin":
          (Oc(S) || S.contentEditable === "true") &&
            ((Kn = S), (ol = c), (ro = null));
          break;
        case "focusout":
          ro = ol = Kn = null;
          break;
        case "mousedown":
          sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (sl = !1), jc(f, n, u);
          break;
        case "selectionchange":
          if (Vv) break;
        case "keydown":
        case "keyup":
          jc(f, n, u);
      }
      var b;
      if (hu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Gn
          ? Mf(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Of &&
          n.locale !== "ko" &&
          (Gn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Gn && (b = Bf())
            : ((Yt = u),
              (du = "value" in Yt ? Yt.value : Yt.textContent),
              (Gn = !0))),
        (S = Ws(c, C)),
        0 < S.length &&
          ((C = new Rc(C, e, null, n, u)),
          f.push({ event: C, listeners: S }),
          b ? (C.data = b) : ((b = zf(n)), b !== null && (C.data = b)))),
        (b = jv ? Nv(e, n) : Hv(e, n)) &&
          ((c = Ws(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Rc("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = b)));
    }
    Gf(f, t);
  });
}
function Eo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ws(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = vo(e, n)),
      s != null && r.unshift(Eo(e, s, o)),
      (s = vo(e, t)),
      s != null && r.push(Eo(e, s, o))),
      (e = e.return);
  }
  return r;
}
function Qn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fc(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      o
        ? ((l = vo(n, s)), l != null && i.unshift(Eo(n, l, a)))
        : o || ((l = vo(n, s)), l != null && i.push(Eo(n, l, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var ty = /\r\n?/g,
  ny = /\u0000|\uFFFD/g;
function Uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ty,
      `
`
    )
    .replace(ny, "");
}
function ns(e, t, n) {
  if (((t = Uc(t)), Uc(e) !== t && n)) throw Error(_(425));
}
function Gs() {}
var il = null,
  al = null;
function ll(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ul = typeof setTimeout == "function" ? setTimeout : void 0,
  ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qc = typeof Promise == "function" ? Promise : void 0,
  oy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qc < "u"
      ? function (e) {
          return Qc.resolve(null).then(e).catch(sy);
        }
      : ul;
function sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function ua(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ko(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ko(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Er = Math.random().toString(36).slice(2),
  Tt = "__reactFiber$" + Er,
  bo = "__reactProps$" + Er,
  jt = "__reactContainer$" + Er,
  cl = "__reactEvents$" + Er,
  iy = "__reactListeners$" + Er,
  ay = "__reactHandles$" + Er;
function bn(e) {
  var t = e[Tt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jt] || n[Tt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qc(e); e !== null; ) {
          if ((n = e[Tt])) return n;
          e = qc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $o(e) {
  return (
    (e = e[Tt] || e[jt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Ai(e) {
  return e[bo] || null;
}
var dl = [],
  Zn = -1;
function cn(e) {
  return { current: e };
}
function se(e) {
  0 > Zn || ((e.current = dl[Zn]), (dl[Zn] = null), Zn--);
}
function te(e, t) {
  Zn++, (dl[Zn] = e.current), (e.current = t);
}
var ln = {},
  Oe = cn(ln),
  Qe = cn(!1),
  _n = ln;
function gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ln;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ks() {
  se(Qe), se(Oe);
}
function Xc(e, t, n) {
  if (Oe.current !== ln) throw Error(_(168));
  te(Oe, t), te(Qe, n);
}
function Yf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, qg(e) || "Unknown", o));
  return pe({}, n, r);
}
function Ys(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (_n = Oe.current),
    te(Oe, e),
    te(Qe, Qe.current),
    !0
  );
}
function Wc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Yf(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Qe),
      se(Oe),
      te(Oe, e))
    : se(Qe),
    te(Qe, n);
}
var _t = null,
  Ii = !1,
  ca = !1;
function Vf(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function ly(e) {
  (Ii = !0), Vf(e);
}
function dn() {
  if (!ca && _t !== null) {
    ca = !0;
    var e = 0,
      t = Y;
    try {
      var n = _t;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_t = null), (Ii = !1);
    } catch (o) {
      throw (_t !== null && (_t = _t.slice(e + 1)), Sf(au, dn), o);
    } finally {
      (Y = t), (ca = !1);
    }
  }
  return null;
}
var Jn = [],
  er = 0,
  Vs = null,
  Zs = 0,
  ot = [],
  st = 0,
  Ln = null,
  Bt = 1,
  Ot = "";
function vn(e, t) {
  (Jn[er++] = Zs), (Jn[er++] = Vs), (Vs = e), (Zs = t);
}
function Zf(e, t, n) {
  (ot[st++] = Bt), (ot[st++] = Ot), (ot[st++] = Ln), (Ln = e);
  var r = Bt;
  e = Ot;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - yt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Bt = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Ot = s + e);
  } else (Bt = (1 << s) | (n << o) | r), (Ot = e);
}
function gu(e) {
  e.return !== null && (vn(e, 1), Zf(e, 1, 0));
}
function vu(e) {
  for (; e === Vs; )
    (Vs = Jn[--er]), (Jn[er] = null), (Zs = Jn[--er]), (Jn[er] = null);
  for (; e === Ln; )
    (Ln = ot[--st]),
      (ot[st] = null),
      (Ot = ot[--st]),
      (ot[st] = null),
      (Bt = ot[--st]),
      (ot[st] = null);
}
var et = null,
  Je = null,
  le = !1,
  ht = null;
function Jf(e, t) {
  var n = it(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (et = e), (Je = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (et = e), (Je = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Bt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = it(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (et = e),
            (Je = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fl(e) {
  if (le) {
    var t = Je;
    if (t) {
      var n = t;
      if (!Gc(e, t)) {
        if (pl(e)) throw Error(_(418));
        t = tn(n.nextSibling);
        var r = et;
        t && Gc(e, t)
          ? Jf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (et = e));
      }
    } else {
      if (pl(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (et = e);
    }
  }
}
function Kc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  et = e;
}
function rs(e) {
  if (e !== et) return !1;
  if (!le) return Kc(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ll(e.type, e.memoizedProps))),
    t && (t = Je))
  ) {
    if (pl(e)) throw (eh(), Error(_(418)));
    for (; t; ) Jf(e, t), (t = tn(t.nextSibling));
  }
  if ((Kc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Je = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Je = null;
    }
  } else Je = et ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function eh() {
  for (var e = Je; e; ) e = tn(e.nextSibling);
}
function vr() {
  (Je = et = null), (le = !1);
}
function yu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var uy = Ft.ReactCurrentBatchConfig;
function $r(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yc(e) {
  var t = e._init;
  return t(e._payload);
}
function th(e) {
  function t(v, h) {
    if (e) {
      var y = v.deletions;
      y === null ? ((v.deletions = [h]), (v.flags |= 16)) : y.push(h);
    }
  }
  function n(v, h) {
    if (!e) return null;
    for (; h !== null; ) t(v, h), (h = h.sibling);
    return null;
  }
  function r(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling);
    return v;
  }
  function o(v, h) {
    return (v = sn(v, h)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, h, y) {
    return (
      (v.index = y),
      e
        ? ((y = v.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((v.flags |= 2), h) : y)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    );
  }
  function i(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, h, y, k) {
    return h === null || h.tag !== 6
      ? ((h = va(y, v.mode, k)), (h.return = v), h)
      : ((h = o(h, y)), (h.return = v), h);
  }
  function l(v, h, y, k) {
    var x = y.type;
    return x === Wn
      ? u(v, h, y.props.children, k, y.key)
      : h !== null &&
        (h.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === qt &&
            Yc(x) === h.type))
      ? ((k = o(h, y.props)), (k.ref = $r(v, h, y)), (k.return = v), k)
      : ((k = zs(y.type, y.key, y.props, null, v.mode, k)),
        (k.ref = $r(v, h, y)),
        (k.return = v),
        k);
  }
  function c(v, h, y, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = ya(y, v.mode, k)), (h.return = v), h)
      : ((h = o(h, y.children || [])), (h.return = v), h);
  }
  function u(v, h, y, k, x) {
    return h === null || h.tag !== 7
      ? ((h = Rn(y, v.mode, k, x)), (h.return = v), h)
      : ((h = o(h, y)), (h.return = v), h);
  }
  function f(v, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = va("" + h, v.mode, y)), (h.return = v), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Wo:
          return (
            (y = zs(h.type, h.key, h.props, null, v.mode, y)),
            (y.ref = $r(v, null, h)),
            (y.return = v),
            y
          );
        case Xn:
          return (h = ya(h, v.mode, y)), (h.return = v), h;
        case qt:
          var k = h._init;
          return f(v, k(h._payload), y);
      }
      if (Gr(h) || Lr(h))
        return (h = Rn(h, v.mode, y, null)), (h.return = v), h;
      os(v, h);
    }
    return null;
  }
  function d(v, h, y, k) {
    var x = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return x !== null ? null : a(v, h, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Wo:
          return y.key === x ? l(v, h, y, k) : null;
        case Xn:
          return y.key === x ? c(v, h, y, k) : null;
        case qt:
          return (x = y._init), d(v, h, x(y._payload), k);
      }
      if (Gr(y) || Lr(y)) return x !== null ? null : u(v, h, y, k, null);
      os(v, y);
    }
    return null;
  }
  function m(v, h, y, k, x) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (v = v.get(y) || null), a(h, v, "" + k, x);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Wo:
          return (v = v.get(k.key === null ? y : k.key) || null), l(h, v, k, x);
        case Xn:
          return (v = v.get(k.key === null ? y : k.key) || null), c(h, v, k, x);
        case qt:
          var S = k._init;
          return m(v, h, y, S(k._payload), x);
      }
      if (Gr(k) || Lr(k)) return (v = v.get(y) || null), u(h, v, k, x, null);
      os(h, k);
    }
    return null;
  }
  function g(v, h, y, k) {
    for (
      var x = null, S = null, b = h, C = (h = 0), I = null;
      b !== null && C < y.length;
      C++
    ) {
      b.index > C ? ((I = b), (b = null)) : (I = b.sibling);
      var P = d(v, b, y[C], k);
      if (P === null) {
        b === null && (b = I);
        break;
      }
      e && b && P.alternate === null && t(v, b),
        (h = s(P, h, C)),
        S === null ? (x = P) : (S.sibling = P),
        (S = P),
        (b = I);
    }
    if (C === y.length) return n(v, b), le && vn(v, C), x;
    if (b === null) {
      for (; C < y.length; C++)
        (b = f(v, y[C], k)),
          b !== null &&
            ((h = s(b, h, C)), S === null ? (x = b) : (S.sibling = b), (S = b));
      return le && vn(v, C), x;
    }
    for (b = r(v, b); C < y.length; C++)
      (I = m(b, v, C, y[C], k)),
        I !== null &&
          (e && I.alternate !== null && b.delete(I.key === null ? C : I.key),
          (h = s(I, h, C)),
          S === null ? (x = I) : (S.sibling = I),
          (S = I));
    return (
      e &&
        b.forEach(function (D) {
          return t(v, D);
        }),
      le && vn(v, C),
      x
    );
  }
  function p(v, h, y, k) {
    var x = Lr(y);
    if (typeof x != "function") throw Error(_(150));
    if (((y = x.call(y)), y == null)) throw Error(_(151));
    for (
      var S = (x = null), b = h, C = (h = 0), I = null, P = y.next();
      b !== null && !P.done;
      C++, P = y.next()
    ) {
      b.index > C ? ((I = b), (b = null)) : (I = b.sibling);
      var D = d(v, b, P.value, k);
      if (D === null) {
        b === null && (b = I);
        break;
      }
      e && b && D.alternate === null && t(v, b),
        (h = s(D, h, C)),
        S === null ? (x = D) : (S.sibling = D),
        (S = D),
        (b = I);
    }
    if (P.done) return n(v, b), le && vn(v, C), x;
    if (b === null) {
      for (; !P.done; C++, P = y.next())
        (P = f(v, P.value, k)),
          P !== null &&
            ((h = s(P, h, C)), S === null ? (x = P) : (S.sibling = P), (S = P));
      return le && vn(v, C), x;
    }
    for (b = r(v, b); !P.done; C++, P = y.next())
      (P = m(b, v, C, P.value, k)),
        P !== null &&
          (e && P.alternate !== null && b.delete(P.key === null ? C : P.key),
          (h = s(P, h, C)),
          S === null ? (x = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        b.forEach(function (B) {
          return t(v, B);
        }),
      le && vn(v, C),
      x
    );
  }
  function w(v, h, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Wn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Wo:
          e: {
            for (var x = y.key, S = h; S !== null; ) {
              if (S.key === x) {
                if (((x = y.type), x === Wn)) {
                  if (S.tag === 7) {
                    n(v, S.sibling),
                      (h = o(S, y.props.children)),
                      (h.return = v),
                      (v = h);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === qt &&
                    Yc(x) === S.type)
                ) {
                  n(v, S.sibling),
                    (h = o(S, y.props)),
                    (h.ref = $r(v, S, y)),
                    (h.return = v),
                    (v = h);
                  break e;
                }
                n(v, S);
                break;
              } else t(v, S);
              S = S.sibling;
            }
            y.type === Wn
              ? ((h = Rn(y.props.children, v.mode, k, y.key)),
                (h.return = v),
                (v = h))
              : ((k = zs(y.type, y.key, y.props, null, v.mode, k)),
                (k.ref = $r(v, h, y)),
                (k.return = v),
                (v = k));
          }
          return i(v);
        case Xn:
          e: {
            for (S = y.key; h !== null; ) {
              if (h.key === S)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(v, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = v),
                    (v = h);
                  break e;
                } else {
                  n(v, h);
                  break;
                }
              else t(v, h);
              h = h.sibling;
            }
            (h = ya(y, v.mode, k)), (h.return = v), (v = h);
          }
          return i(v);
        case qt:
          return (S = y._init), w(v, h, S(y._payload), k);
      }
      if (Gr(y)) return g(v, h, y, k);
      if (Lr(y)) return p(v, h, y, k);
      os(v, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(v, h.sibling), (h = o(h, y)), (h.return = v), (v = h))
          : (n(v, h), (h = va(y, v.mode, k)), (h.return = v), (v = h)),
        i(v))
      : n(v, h);
  }
  return w;
}
var yr = th(!0),
  nh = th(!1),
  Js = cn(null),
  ei = null,
  tr = null,
  wu = null;
function ku() {
  wu = tr = ei = null;
}
function xu(e) {
  var t = Js.current;
  se(Js), (e._currentValue = t);
}
function hl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  (ei = e),
    (wu = tr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tr === null)) {
      if (ei === null) throw Error(_(308));
      (tr = e), (ei.dependencies = { lanes: 0, firstContext: e });
    } else tr = tr.next = e;
  return t;
}
var Tn = null;
function Su(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function rh(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Su(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Cu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Su(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function Rs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
function Vc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ti(e, t, n, r) {
  var o = e.updateQueue;
  Xt = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), i === null ? (s = c) : (i.next = c), (i = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== i &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = o.baseState;
    (i = 0), (u = c = l = null), (a = s);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            p = a;
          switch (((d = t), (m = n), p.tag)) {
            case 1:
              if (((g = p.payload), typeof g == "function")) {
                f = g.call(m, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = p.payload),
                (d = typeof g == "function" ? g.call(m, f, d) : g),
                d == null)
              )
                break e;
              f = pe({}, f, d);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = m), (l = f)) : (u = u.next = m),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = f),
      (o.baseState = l),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (On |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Zc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var Do = {},
  It = cn(Do),
  To = cn(Do),
  Ao = cn(Do);
function An(e) {
  if (e === Do) throw Error(_(174));
  return e;
}
function Eu(e, t) {
  switch ((te(Ao, t), te(To, e), te(It, Do), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ga(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ga(t, e));
  }
  se(It), te(It, t);
}
function wr() {
  se(It), se(To), se(Ao);
}
function sh(e) {
  An(Ao.current);
  var t = An(It.current),
    n = Ga(t, e.type);
  t !== n && (te(To, e), te(It, n));
}
function bu(e) {
  To.current === e && (se(It), se(To));
}
var ce = cn(0);
function ni(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var da = [];
function Tu() {
  for (var e = 0; e < da.length; e++)
    da[e]._workInProgressVersionPrimary = null;
  da.length = 0;
}
var _s = Ft.ReactCurrentDispatcher,
  pa = Ft.ReactCurrentBatchConfig,
  Bn = 0,
  de = null,
  we = null,
  Ee = null,
  ri = !1,
  oo = !1,
  Io = 0,
  cy = 0;
function _e() {
  throw Error(_(321));
}
function Au(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function Iu(e, t, n, r, o, s) {
  if (
    ((Bn = s),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_s.current = e === null || e.memoizedState === null ? hy : my),
    (e = n(r, o)),
    oo)
  ) {
    s = 0;
    do {
      if (((oo = !1), (Io = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (Ee = we = null),
        (t.updateQueue = null),
        (_s.current = gy),
        (e = n(r, o));
    } while (oo);
  }
  if (
    ((_s.current = oi),
    (t = we !== null && we.next !== null),
    (Bn = 0),
    (Ee = we = de = null),
    (ri = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function Pu() {
  var e = Io !== 0;
  return (Io = 0), e;
}
function Et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (de.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function ct() {
  if (we === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Ee === null ? de.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (we = e);
  else {
    if (e === null) throw Error(_(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Ee === null ? (de.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function Po(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fa(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var a = (i = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((Bn & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (i = r)) : (l = l.next = f),
          (de.lanes |= u),
          (On |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (i = r) : (l.next = a),
      kt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (de.lanes |= s), (On |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ha(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    kt(s, t.memoizedState) || (Ue = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function ih() {}
function ah(e, t) {
  var n = de,
    r = ct(),
    o = t(),
    s = !kt(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    Ru(ch.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ro(9, uh.bind(null, n, r, o, t), void 0, null),
      be === null)
    )
      throw Error(_(349));
    Bn & 30 || lh(n, t, o);
  }
  return o;
}
function lh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), dh(t) && ph(e);
}
function ch(e, t, n) {
  return n(function () {
    dh(t) && ph(e);
  });
}
function dh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function ph(e) {
  var t = Nt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Jc(e) {
  var t = Et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Po,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fy.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Ro(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fh() {
  return ct().memoizedState;
}
function Ls(e, t, n, r) {
  var o = Et();
  (de.flags |= e),
    (o.memoizedState = Ro(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
  var o = ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (we !== null) {
    var i = we.memoizedState;
    if (((s = i.destroy), r !== null && Au(r, i.deps))) {
      o.memoizedState = Ro(t, n, s, r);
      return;
    }
  }
  (de.flags |= e), (o.memoizedState = Ro(1 | t, n, s, r));
}
function ed(e, t) {
  return Ls(8390656, 8, e, t);
}
function Ru(e, t) {
  return Pi(2048, 8, e, t);
}
function hh(e, t) {
  return Pi(4, 2, e, t);
}
function mh(e, t) {
  return Pi(4, 4, e, t);
}
function gh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function vh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Pi(4, 4, gh.bind(null, t, e), n)
  );
}
function _u() {}
function yh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Au(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kh(e, t, n) {
  return Bn & 21
    ? (kt(n, t) || ((n = bf()), (de.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function dy(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = pa.transition;
  pa.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (pa.transition = r);
  }
}
function xh() {
  return ct().memoizedState;
}
function py(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sh(e))
  )
    Ch(t, n);
  else if (((n = rh(e, t, n, r)), n !== null)) {
    var o = De();
    wt(n, e, r, o), Eh(n, t, r);
  }
}
function fy(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sh(e)) Ch(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), kt(a, i))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Su(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = rh(e, t, o, r)),
      n !== null && ((o = De()), wt(n, e, r, o), Eh(n, t, r));
  }
}
function Sh(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function Ch(e, t) {
  oo = ri = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Eh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
var oi = {
    readContext: ut,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1,
  },
  hy = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: ed,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ls(4194308, 4, gh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ls(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ls(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Et();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = py.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Jc,
    useDebugValue: _u,
    useDeferredValue: function (e) {
      return (Et().memoizedState = e);
    },
    useTransition: function () {
      var e = Jc(!1),
        t = e[0];
      return (e = dy.bind(null, e[1])), (Et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        o = Et();
      if (le) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), be === null)) throw Error(_(349));
        Bn & 30 || lh(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        ed(ch.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ro(9, uh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Et(),
        t = be.identifierPrefix;
      if (le) {
        var n = Ot,
          r = Bt;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Io++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  my = {
    readContext: ut,
    useCallback: yh,
    useContext: ut,
    useEffect: Ru,
    useImperativeHandle: vh,
    useInsertionEffect: hh,
    useLayoutEffect: mh,
    useMemo: wh,
    useReducer: fa,
    useRef: fh,
    useState: function () {
      return fa(Po);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = ct();
      return kh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(Po)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: ih,
    useSyncExternalStore: ah,
    useId: xh,
    unstable_isNewReconciler: !1,
  },
  gy = {
    readContext: ut,
    useCallback: yh,
    useContext: ut,
    useEffect: Ru,
    useImperativeHandle: vh,
    useInsertionEffect: hh,
    useLayoutEffect: mh,
    useMemo: wh,
    useReducer: ha,
    useRef: fh,
    useState: function () {
      return ha(Po);
    },
    useDebugValue: _u,
    useDeferredValue: function (e) {
      var t = ct();
      return we === null ? (t.memoizedState = e) : kh(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ha(Po)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: ih,
    useSyncExternalStore: ah,
    useId: xh,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ml(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ri = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $n(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = on(e),
      s = $t(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = nn(e, s, o)),
      t !== null && (wt(t, e, o, r), Rs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      o = on(e),
      s = $t(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = nn(e, s, o)),
      t !== null && (wt(t, e, o, r), Rs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = on(e),
      o = $t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = nn(e, o, r)),
      t !== null && (wt(t, e, r, n), Rs(t, e, r));
  },
};
function td(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !So(n, r) || !So(o, s)
      : !0
  );
}
function bh(e, t, n) {
  var r = !1,
    o = ln,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((o = qe(t) ? _n : Oe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? gr(e, o) : ln)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ri),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function nd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ri.enqueueReplaceState(t, t.state, null);
}
function gl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Cu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = ut(s))
    : ((s = qe(t) ? _n : Oe.current), (o.context = gr(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ml(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ri.enqueueReplaceState(o, o.state, null),
      ti(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ma(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vy = typeof WeakMap == "function" ? WeakMap : Map;
function Th(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ii || ((ii = !0), (Al = r)), vl(e, t);
    }),
    n
  );
}
function Ah(e, t, n) {
  (n = $t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        vl(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        vl(e, t),
          typeof r != "function" &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function rd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = _y.bind(null, e, t, n)), t.then(e, e));
}
function od(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $t(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yy = Ft.ReactCurrentOwner,
  Ue = !1;
function ze(e, t, n, r) {
  t.child = e === null ? nh(t, null, n, r) : yr(t, e.child, n, r);
}
function id(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    dr(t, o),
    (r = Iu(e, t, n, r, s, o)),
    (n = Pu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ht(e, t, o))
      : (le && n && gu(t), (t.flags |= 1), ze(e, t, r, o), t.child)
  );
}
function ad(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ju(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Ih(e, t, s, r, o))
      : ((e = zs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : So), n(i, r) && e.ref === t.ref)
    )
      return Ht(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = sn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ih(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (So(s, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Ht(e, t, o);
  }
  return yl(e, t, n, r, o);
}
function Ph(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(rr, Ye),
        (Ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          te(rr, Ye),
          (Ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        te(rr, Ye),
        (Ye |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(rr, Ye),
      (Ye |= r);
  return ze(e, t, o, n), t.child;
}
function Rh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yl(e, t, n, r, o) {
  var s = qe(n) ? _n : Oe.current;
  return (
    (s = gr(t, s)),
    dr(t, o),
    (n = Iu(e, t, n, r, s, o)),
    (r = Pu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ht(e, t, o))
      : (le && r && gu(t), (t.flags |= 1), ze(e, t, n, o), t.child)
  );
}
function ld(e, t, n, r, o) {
  if (qe(n)) {
    var s = !0;
    Ys(t);
  } else s = !1;
  if ((dr(t, o), t.stateNode === null))
    Bs(e, t), bh(t, n, r), gl(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var l = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ut(c))
      : ((c = qe(n) ? _n : Oe.current), (c = gr(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && nd(t, i, r, c)),
      (Xt = !1);
    var d = t.memoizedState;
    (i.state = d),
      ti(t, r, i, o),
      (l = t.memoizedState),
      a !== r || d !== l || Qe.current || Xt
        ? (typeof u == "function" && (ml(t, n, u, r), (l = t.memoizedState)),
          (a = Xt || td(t, n, a, r, d, l, c))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (i.props = r),
          (i.state = l),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      oh(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : pt(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (d = i.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = qe(n) ? _n : Oe.current), (l = gr(t, l)));
    var m = n.getDerivedStateFromProps;
    (u =
      typeof m == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && nd(t, i, r, l)),
      (Xt = !1),
      (d = t.memoizedState),
      (i.state = d),
      ti(t, r, i, o);
    var g = t.memoizedState;
    a !== f || d !== g || Qe.current || Xt
      ? (typeof m == "function" && (ml(t, n, m, r), (g = t.memoizedState)),
        (c = Xt || td(t, n, c, r, d, g, l) || !1)
          ? (u ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, g, l),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, g, l)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (i.props = r),
        (i.state = g),
        (i.context = l),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return wl(e, t, n, r, s, o);
}
function wl(e, t, n, r, o, s) {
  Rh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Wc(t, n, !1), Ht(e, t, s);
  (r = t.stateNode), (yy.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = yr(t, e.child, null, s)), (t.child = yr(t, null, a, s)))
      : ze(e, t, a, s),
    (t.memoizedState = r.state),
    o && Wc(t, n, !0),
    t.child
  );
}
function _h(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xc(e, t.context, !1),
    Eu(e, t.containerInfo);
}
function ud(e, t, n, r, o) {
  return vr(), yu(o), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
function xl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lh(e, t, n) {
  var r = t.pendingProps,
    o = ce.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    te(ce, o & 1),
    e === null)
  )
    return (
      fl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Bi(i, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = xl(n)),
              (t.memoizedState = kl),
              e)
            : Lu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return wy(e, t, i, r, a, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = sn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (s = sn(a, s)) : ((s = Rn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? xl(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = kl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = sn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Lu(e, t) {
  return (
    (t = Bi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ss(e, t, n, r) {
  return (
    r !== null && yu(r),
    yr(t, e.child, null, n),
    (e = Lu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function wy(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ma(Error(_(422)))), ss(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = Bi({ mode: "visible", children: r.children }, o, 0, null)),
        (s = Rn(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, i),
        (t.child.memoizedState = xl(i)),
        (t.memoizedState = kl),
        s);
  if (!(t.mode & 1)) return ss(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(_(419))), (r = ma(s, r, void 0)), ss(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ue || a)) {
    if (((r = be), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Nt(e, o), wt(r, e, o, -1));
    }
    return Du(), (r = ma(Error(_(421)))), ss(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ly.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Je = tn(o.nextSibling)),
      (et = t),
      (le = !0),
      (ht = null),
      e !== null &&
        ((ot[st++] = Bt),
        (ot[st++] = Ot),
        (ot[st++] = Ln),
        (Bt = e.id),
        (Ot = e.overflow),
        (Ln = t)),
      (t = Lu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hl(e.return, t, n);
}
function ga(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Bh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((ze(e, t, r.children, n), (r = ce.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cd(e, n, t);
        else if (e.tag === 19) cd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((te(ce, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ni(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ga(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ni(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ga(t, !0, n, null, s);
        break;
      case "together":
        ga(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ky(e, t, n) {
  switch (t.tag) {
    case 3:
      _h(t), vr();
      break;
    case 5:
      sh(t);
      break;
    case 1:
      qe(t.type) && Ys(t);
      break;
    case 4:
      Eu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      te(Js, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ce, ce.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Lh(e, t, n)
          : (te(ce, ce.current & 1),
            (e = Ht(e, t, n)),
            e !== null ? e.sibling : null);
      te(ce, ce.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        te(ce, ce.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ph(e, t, n);
  }
  return Ht(e, t, n);
}
var Oh, Sl, Mh, zh;
Oh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sl = function () {};
Mh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), An(It.current);
    var s = null;
    switch (n) {
      case "input":
        (o = Qa(e, o)), (r = Qa(e, r)), (s = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = Wa(e, o)), (r = Wa(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gs);
    }
    Ka(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var a = o[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (mo.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (l && l.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in l)
              l.hasOwnProperty(i) &&
                a[i] !== l[i] &&
                (n || (n = {}), (n[i] = l[i]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (mo.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && re("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
zh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xy(e, t, n) {
  var r = t.pendingProps;
  switch ((vu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return qe(t.type) && Ks(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wr(),
        se(Qe),
        se(Oe),
        Tu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (rs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (Rl(ht), (ht = null)))),
        Sl(e, t),
        Le(t),
        null
      );
    case 5:
      bu(t);
      var o = An(Ao.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Le(t), null;
        }
        if (((e = An(It.current)), rs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Tt] = t), (r[bo] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yr.length; o++) re(Yr[o], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              wc(r, s), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              xc(r, s), re("invalid", r);
          }
          Ka(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ns(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ns(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : mo.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              Go(r), kc(r, s, !0);
              break;
            case "textarea":
              Go(r), Sc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Tt] = t),
            (e[bo] = r),
            Oh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ya(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yr.length; o++) re(Yr[o], e);
                o = r;
                break;
              case "source":
                re("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (o = r);
                break;
              case "details":
                re("toggle", e), (o = r);
                break;
              case "input":
                wc(e, r), (o = Qa(e, r)), re("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                xc(e, r), (o = Wa(e, r)), re("invalid", e);
                break;
              default:
                o = r;
            }
            Ka(n, o), (a = o);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? ff(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && df(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && go(e, l)
                    : typeof l == "number" && go(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (mo.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && re("scroll", e)
                      : l != null && nu(e, s, l, i));
              }
            switch (n) {
              case "input":
                Go(e), kc(e, r, !1);
                break;
              case "textarea":
                Go(e), Sc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + an(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? ar(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      ar(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Gs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) zh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = An(Ao.current)), An(It.current), rs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Tt] = t),
            (s = r.nodeValue !== n) && ((e = et), e !== null))
          )
            switch (e.tag) {
              case 3:
                ns(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ns(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Tt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (se(ce),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Je !== null && t.mode & 1 && !(t.flags & 128))
          eh(), vr(), (t.flags |= 98560), (s = !1);
        else if (((s = rs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(_(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(_(317));
            s[Tt] = t;
          } else
            vr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (s = !1);
        } else ht !== null && (Rl(ht), (ht = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ce.current & 1 ? ke === 0 && (ke = 3) : Du())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        wr(), Sl(e, t), e === null && Co(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return xu(t.type._context), Le(t), null;
    case 17:
      return qe(t.type) && Ks(), Le(t), null;
    case 19:
      if ((se(ce), (s = t.memoizedState), s === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Dr(s, !1);
        else {
          if (ke !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ni(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Dr(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(ce, (ce.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ge() > xr &&
            ((t.flags |= 128), (r = !0), Dr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ni(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !le)
            )
              return Le(t), null;
          } else
            2 * ge() - s.renderingStartTime > xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ge()),
          (t.sibling = null),
          (n = ce.current),
          te(ce, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        $u(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ye & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function Sy(e, t) {
  switch ((vu(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && Ks(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wr(),
        se(Qe),
        se(Oe),
        Tu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if (
        (se(ce), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        vr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(ce), null;
    case 4:
      return wr(), null;
    case 10:
      return xu(t.type._context), null;
    case 22:
    case 23:
      return $u(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var is = !1,
  Be = !1,
  Cy = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function Cl(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var dd = !1;
function Ey(e, t) {
  if (((il = qs), (e = Hf()), mu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === o && (a = i),
                d === s && ++u === r && (l = i),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (al = { focusedElem: e, selectionRange: n }, qs = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var p = g.memoizedProps,
                    w = g.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? p : pt(t.type, p),
                      w
                    );
                  v.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (k) {
          he(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (g = dd), (dd = !1), g;
}
function so(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && Cl(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function _i(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function El(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $h(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $h(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Tt], delete t[bo], delete t[cl], delete t[iy], delete t[ay])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; ) bl(e, t, n), (e = e.sibling);
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
var Ae = null,
  ft = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) jh(e, t, n), (n = n.sibling);
}
function jh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(Ci, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Be || nr(n, t);
    case 6:
      var r = Ae,
        o = ft;
      (Ae = null),
        Qt(e, t, n),
        (Ae = r),
        (ft = o),
        Ae !== null &&
          (ft
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (ft
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? ua(e.parentNode, n)
              : e.nodeType === 1 && ua(e, n),
            ko(e))
          : ua(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (o = ft),
        (Ae = n.stateNode.containerInfo),
        (ft = !0),
        Qt(e, t, n),
        (Ae = r),
        (ft = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Cl(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Be &&
        (nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Be = (r = Be) || n.memoizedState !== null), Qt(e, t, n), (Be = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function fd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Cy()),
      t.forEach(function (r) {
        var o = By.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (ft = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (ft = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (ft = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(_(160));
        jh(s, i, o), (Ae = null), (ft = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (c) {
        he(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling);
}
function Nh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dt(t, e), xt(e), r & 4)) {
        try {
          so(3, e, e.return), _i(3, e);
        } catch (p) {
          he(e, e.return, p);
        }
        try {
          so(5, e, e.return);
        } catch (p) {
          he(e, e.return, p);
        }
      }
      break;
    case 1:
      dt(t, e), xt(e), r & 512 && n !== null && nr(n, n.return);
      break;
    case 5:
      if (
        (dt(t, e),
        xt(e),
        r & 512 && n !== null && nr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          go(o, "");
        } catch (p) {
          he(e, e.return, p);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && lf(o, s),
              Ya(a, i);
            var c = Ya(a, s);
            for (i = 0; i < l.length; i += 2) {
              var u = l[i],
                f = l[i + 1];
              u === "style"
                ? ff(o, f)
                : u === "dangerouslySetInnerHTML"
                ? df(o, f)
                : u === "children"
                ? go(o, f)
                : nu(o, u, f, c);
            }
            switch (a) {
              case "input":
                qa(o, s);
                break;
              case "textarea":
                uf(o, s);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? ar(o, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? ar(o, !!s.multiple, s.defaultValue, !0)
                      : ar(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[bo] = s;
          } catch (p) {
            he(e, e.return, p);
          }
      }
      break;
    case 6:
      if ((dt(t, e), xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (p) {
          he(e, e.return, p);
        }
      }
      break;
    case 3:
      if (
        (dt(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ko(t.containerInfo);
        } catch (p) {
          he(e, e.return, p);
        }
      break;
    case 4:
      dt(t, e), xt(e);
      break;
    case 13:
      dt(t, e),
        xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Mu = ge())),
        r & 4 && fd(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Be = (c = Be) || u), dt(t, e), (Be = c)) : dt(t, e),
        xt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (M = e, u = e.child; u !== null; ) {
            for (f = M = u; M !== null; ) {
              switch (((d = M), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  so(4, d, d.return);
                  break;
                case 1:
                  nr(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (p) {
                      he(r, n, p);
                    }
                  }
                  break;
                case 5:
                  nr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    md(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (M = m)) : md(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (o = f.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (i =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = pf("display", i)));
              } catch (p) {
                he(e, e.return, p);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (p) {
                he(e, e.return, p);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      dt(t, e), xt(e), r & 4 && fd(e);
      break;
    case 21:
      break;
    default:
      dt(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (go(o, ""), (r.flags &= -33));
          var s = pd(e);
          Tl(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = pd(e);
          bl(e, a, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      he(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function by(e, t, n) {
  (M = e), Hh(e);
}
function Hh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || is;
      if (!i) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Be;
        a = is;
        var c = Be;
        if (((is = i), (Be = l) && !c))
          for (M = o; M !== null; )
            (i = M),
              (l = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? gd(o)
                : l !== null
                ? ((l.return = i), (M = l))
                : gd(o);
        for (; s !== null; ) (M = s), Hh(s), (s = s.sibling);
        (M = o), (is = a), (Be = c);
      }
      hd(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (M = s)) : hd(e);
  }
}
function hd(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Be || _i(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Be)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Zc(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && ko(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Be || (t.flags & 512 && El(t));
      } catch (d) {
        he(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function md(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function gd(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _i(4, t);
          } catch (l) {
            he(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              he(t, o, l);
            }
          }
          var s = t.return;
          try {
            El(t);
          } catch (l) {
            he(t, s, l);
          }
          break;
        case 5:
          var i = t.return;
          try {
            El(t);
          } catch (l) {
            he(t, i, l);
          }
      }
    } catch (l) {
      he(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var Ty = Math.ceil,
  si = Ft.ReactCurrentDispatcher,
  Bu = Ft.ReactCurrentOwner,
  lt = Ft.ReactCurrentBatchConfig,
  X = 0,
  be = null,
  ve = null,
  Ie = 0,
  Ye = 0,
  rr = cn(0),
  ke = 0,
  _o = null,
  On = 0,
  Li = 0,
  Ou = 0,
  io = null,
  Fe = null,
  Mu = 0,
  xr = 1 / 0,
  Pt = null,
  ii = !1,
  Al = null,
  rn = null,
  as = !1,
  Vt = null,
  ai = 0,
  ao = 0,
  Il = null,
  Os = -1,
  Ms = 0;
function De() {
  return X & 6 ? ge() : Os !== -1 ? Os : (Os = ge());
}
function on(e) {
  return e.mode & 1
    ? X & 2 && Ie !== 0
      ? Ie & -Ie
      : uy.transition !== null
      ? (Ms === 0 && (Ms = bf()), Ms)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lf(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < ao) throw ((ao = 0), (Il = null), Error(_(185)));
  Mo(e, n, r),
    (!(X & 2) || e !== be) &&
      (e === be && (!(X & 2) && (Li |= n), ke === 4 && Gt(e, Ie)),
      Xe(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((xr = ge() + 500), Ii && dn()));
}
function Xe(e, t) {
  var n = e.callbackNode;
  uv(e, t);
  var r = Qs(e, e === be ? Ie : 0);
  if (r === 0)
    n !== null && bc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bc(n), t === 1))
      e.tag === 0 ? ly(vd.bind(null, e)) : Vf(vd.bind(null, e)),
        oy(function () {
          !(X & 6) && dn();
        }),
        (n = null);
    else {
      switch (Tf(r)) {
        case 1:
          n = au;
          break;
        case 4:
          n = Cf;
          break;
        case 16:
          n = Us;
          break;
        case 536870912:
          n = Ef;
          break;
        default:
          n = Us;
      }
      n = Kh(n, Fh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Fh(e, t) {
  if (((Os = -1), (Ms = 0), X & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (pr() && e.callbackNode !== n) return null;
  var r = Qs(e, e === be ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = li(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var s = Qh();
    (be !== e || Ie !== t) && ((Pt = null), (xr = ge() + 500), Pn(e, t));
    do
      try {
        Py();
        break;
      } catch (a) {
        Uh(e, a);
      }
    while (!0);
    ku(),
      (si.current = s),
      (X = o),
      ve !== null ? (t = 0) : ((be = null), (Ie = 0), (t = ke));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = tl(e)), o !== 0 && ((r = o), (t = Pl(e, o)))), t === 1)
    )
      throw ((n = _o), Pn(e, 0), Gt(e, r), Xe(e, ge()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ay(o) &&
          ((t = li(e, r)),
          t === 2 && ((s = tl(e)), s !== 0 && ((r = s), (t = Pl(e, s)))),
          t === 1))
      )
        throw ((n = _o), Pn(e, 0), Gt(e, r), Xe(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          yn(e, Fe, Pt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Mu + 500 - ge()), 10 < t))
          ) {
            if (Qs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ul(yn.bind(null, e, Fe, Pt), t);
            break;
          }
          yn(e, Fe, Pt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - yt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ty(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ul(yn.bind(null, e, Fe, Pt), r);
            break;
          }
          yn(e, Fe, Pt);
          break;
        case 5:
          yn(e, Fe, Pt);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Xe(e, ge()), e.callbackNode === n ? Fh.bind(null, e) : null;
}
function Pl(e, t) {
  var n = io;
  return (
    e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256),
    (e = li(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && Rl(t)),
    e
  );
}
function Rl(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Ay(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!kt(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~Ou,
      t &= ~Li,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vd(e) {
  if (X & 6) throw Error(_(327));
  pr();
  var t = Qs(e, 0);
  if (!(t & 1)) return Xe(e, ge()), null;
  var n = li(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tl(e);
    r !== 0 && ((t = r), (n = Pl(e, r)));
  }
  if (n === 1) throw ((n = _o), Pn(e, 0), Gt(e, t), Xe(e, ge()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yn(e, Fe, Pt),
    Xe(e, ge()),
    null
  );
}
function zu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((xr = ge() + 500), Ii && dn());
  }
}
function Mn(e) {
  Vt !== null && Vt.tag === 0 && !(X & 6) && pr();
  var t = X;
  X |= 1;
  var n = lt.transition,
    r = Y;
  try {
    if (((lt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (lt.transition = n), (X = t), !(X & 6) && dn();
  }
}
function $u() {
  (Ye = rr.current), se(rr);
}
function Pn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ry(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((vu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ks();
          break;
        case 3:
          wr(), se(Qe), se(Oe), Tu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          se(ce);
          break;
        case 19:
          se(ce);
          break;
        case 10:
          xu(r.type._context);
          break;
        case 22:
        case 23:
          $u();
      }
      n = n.return;
    }
  if (
    ((be = e),
    (ve = e = sn(e.current, null)),
    (Ie = Ye = t),
    (ke = 0),
    (_o = null),
    (Ou = Li = On = 0),
    (Fe = io = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Uh(e, t) {
  do {
    var n = ve;
    try {
      if ((ku(), (_s.current = oi), ri)) {
        for (var r = de.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ri = !1;
      }
      if (
        ((Bn = 0),
        (Ee = we = de = null),
        (oo = !1),
        (Io = 0),
        (Bu.current = null),
        n === null || n.return === null)
      ) {
        (ke = 1), (_o = t), (ve = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          l = t;
        if (
          ((t = Ie),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var m = od(i);
          if (m !== null) {
            (m.flags &= -257),
              sd(m, i, a, s, t),
              m.mode & 1 && rd(s, c, t),
              (t = m),
              (l = c);
            var g = t.updateQueue;
            if (g === null) {
              var p = new Set();
              p.add(l), (t.updateQueue = p);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rd(s, c, t), Du();
              break e;
            }
            l = Error(_(426));
          }
        } else if (le && a.mode & 1) {
          var w = od(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              sd(w, i, a, s, t),
              yu(kr(l, a));
            break e;
          }
        }
        (s = l = kr(l, a)),
          ke !== 4 && (ke = 2),
          io === null ? (io = [s]) : io.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = Th(s, l, t);
              Vc(s, v);
              break e;
            case 1:
              a = l;
              var h = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (rn === null || !rn.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var k = Ah(s, a, t);
                Vc(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Xh(n);
    } catch (x) {
      (t = x), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qh() {
  var e = si.current;
  return (si.current = oi), e === null ? oi : e;
}
function Du() {
  (ke === 0 || ke === 3 || ke === 2) && (ke = 4),
    be === null || (!(On & 268435455) && !(Li & 268435455)) || Gt(be, Ie);
}
function li(e, t) {
  var n = X;
  X |= 2;
  var r = Qh();
  (be !== e || Ie !== t) && ((Pt = null), Pn(e, t));
  do
    try {
      Iy();
      break;
    } catch (o) {
      Uh(e, o);
    }
  while (!0);
  if ((ku(), (X = n), (si.current = r), ve !== null)) throw Error(_(261));
  return (be = null), (Ie = 0), ke;
}
function Iy() {
  for (; ve !== null; ) qh(ve);
}
function Py() {
  for (; ve !== null && !ev(); ) qh(ve);
}
function qh(e) {
  var t = Gh(e.alternate, e, Ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xh(e) : (ve = t),
    (Bu.current = null);
}
function Xh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sy(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ke = 6), (ve = null);
        return;
      }
    } else if (((n = xy(n, t, Ye)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  ke === 0 && (ke = 5);
}
function yn(e, t, n) {
  var r = Y,
    o = lt.transition;
  try {
    (lt.transition = null), (Y = 1), Ry(e, t, n, r);
  } finally {
    (lt.transition = o), (Y = r);
  }
  return null;
}
function Ry(e, t, n, r) {
  do pr();
  while (Vt !== null);
  if (X & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (cv(e, s),
    e === be && ((ve = be = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      as ||
      ((as = !0),
      Kh(Us, function () {
        return pr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = lt.transition), (lt.transition = null);
    var i = Y;
    Y = 1;
    var a = X;
    (X |= 4),
      (Bu.current = null),
      Ey(e, n),
      Nh(n, e),
      Yv(al),
      (qs = !!il),
      (al = il = null),
      (e.current = n),
      by(n),
      tv(),
      (X = a),
      (Y = i),
      (lt.transition = s);
  } else e.current = n;
  if (
    (as && ((as = !1), (Vt = e), (ai = o)),
    (s = e.pendingLanes),
    s === 0 && (rn = null),
    ov(n.stateNode),
    Xe(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ii) throw ((ii = !1), (e = Al), (Al = null), e);
  return (
    ai & 1 && e.tag !== 0 && pr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Il ? ao++ : ((ao = 0), (Il = e))) : (ao = 0),
    dn(),
    null
  );
}
function pr() {
  if (Vt !== null) {
    var e = Tf(ai),
      t = lt.transition,
      n = Y;
    try {
      if (((lt.transition = null), (Y = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (ai = 0), X & 6)) throw Error(_(331));
        var o = X;
        for (X |= 4, M = e.current; M !== null; ) {
          var s = M,
            i = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (M = c; M !== null; ) {
                  var u = M;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      so(8, u, s);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (M = f);
                  else
                    for (; M !== null; ) {
                      u = M;
                      var d = u.sibling,
                        m = u.return;
                      if (($h(u), u === c)) {
                        M = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (M = d);
                        break;
                      }
                      M = m;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var p = g.child;
                if (p !== null) {
                  g.child = null;
                  do {
                    var w = p.sibling;
                    (p.sibling = null), (p = w);
                  } while (p !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (M = i);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    so(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (M = v);
                break e;
              }
              M = s.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          i = M;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (M = y);
          else
            e: for (i = h; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _i(9, a);
                  }
                } catch (x) {
                  he(a, a.return, x);
                }
              if (a === i) {
                M = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (M = k);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((X = o), dn(), At && typeof At.onPostCommitFiberRoot == "function")
        )
          try {
            At.onPostCommitFiberRoot(Ci, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (lt.transition = t);
    }
  }
  return !1;
}
function yd(e, t, n) {
  (t = kr(n, t)),
    (t = Th(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = De()),
    e !== null && (Mo(e, 1, t), Xe(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) yd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = kr(n, e)),
            (e = Ah(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = De()),
            t !== null && (Mo(t, 1, e), Xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _y(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    be === e &&
      (Ie & n) === n &&
      (ke === 4 || (ke === 3 && (Ie & 130023424) === Ie && 500 > ge() - Mu)
        ? Pn(e, 0)
        : (Ou |= n)),
    Xe(e, t);
}
function Wh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vo), (Vo <<= 1), !(Vo & 130023424) && (Vo = 4194304))
      : (t = 1));
  var n = De();
  (e = Nt(e, t)), e !== null && (Mo(e, t, n), Xe(e, n));
}
function Ly(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wh(e, n);
}
function By(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Wh(e, n);
}
var Gh;
Gh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), ky(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && Zf(t, Zs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bs(e, t), (e = t.pendingProps);
      var o = gr(t, Oe.current);
      dr(t, n), (o = Iu(null, t, r, e, o, n));
      var s = Pu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((s = !0), Ys(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Cu(t),
            (o.updater = Ri),
            (t.stateNode = o),
            (o._reactInternals = t),
            gl(t, r, e, n),
            (t = wl(null, t, r, !0, s, n)))
          : ((t.tag = 0), le && s && gu(t), ze(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = My(r)),
          (e = pt(r, e)),
          o)
        ) {
          case 0:
            t = yl(null, t, r, e, n);
            break e;
          case 1:
            t = ld(null, t, r, e, n);
            break e;
          case 11:
            t = id(null, t, r, e, n);
            break e;
          case 14:
            t = ad(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        yl(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        ld(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((_h(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          oh(e, t),
          ti(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = kr(Error(_(423)), t)), (t = ud(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = kr(Error(_(424)), t)), (t = ud(e, t, r, n, o));
            break e;
          } else
            for (
              Je = tn(t.stateNode.containerInfo.firstChild),
                et = t,
                le = !0,
                ht = null,
                n = nh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((vr(), r === o)) {
            t = Ht(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sh(t),
        e === null && fl(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ll(r, o) ? (i = null) : s !== null && ll(r, s) && (t.flags |= 32),
        Rh(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && fl(t), null;
    case 13:
      return Lh(e, t, n);
    case 4:
      return (
        Eu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        id(e, t, r, o, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          te(Js, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (kt(s.value, i)) {
            if (s.children === o.children && !Qe.current) {
              t = Ht(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = $t(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      hl(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  hl(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        ze(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (o = ut(o)),
        (r = r(o)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pt(r, t.pendingProps)),
        (o = pt(r.type, o)),
        ad(e, t, r, o, n)
      );
    case 15:
      return Ih(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Bs(e, t),
        (t.tag = 1),
        qe(r) ? ((e = !0), Ys(t)) : (e = !1),
        dr(t, n),
        bh(t, r, o),
        gl(t, r, o, n),
        wl(null, t, r, !0, e, n)
      );
    case 19:
      return Bh(e, t, n);
    case 22:
      return Ph(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Kh(e, t) {
  return Sf(e, t);
}
function Oy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function it(e, t, n, r) {
  return new Oy(e, t, n, r);
}
function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function My(e) {
  if (typeof e == "function") return ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ou)) return 11;
    if (e === su) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zs(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) ju(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Wn:
        return Rn(n.children, o, s, t);
      case ru:
        (i = 8), (o |= 8);
        break;
      case Na:
        return (
          (e = it(12, n, t, o | 2)), (e.elementType = Na), (e.lanes = s), e
        );
      case Ha:
        return (e = it(13, n, t, o)), (e.elementType = Ha), (e.lanes = s), e;
      case Fa:
        return (e = it(19, n, t, o)), (e.elementType = Fa), (e.lanes = s), e;
      case of:
        return Bi(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nf:
              i = 10;
              break e;
            case rf:
              i = 9;
              break e;
            case ou:
              i = 11;
              break e;
            case su:
              i = 14;
              break e;
            case qt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = it(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Rn(e, t, n, r) {
  return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function Bi(e, t, n, r) {
  return (
    (e = it(22, e, r, t)),
    (e.elementType = of),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function va(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function ya(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zi(0)),
    (this.expirationTimes = Zi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Nu(e, t, n, r, o, s, i, a, l) {
  return (
    (e = new zy(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = it(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cu(s),
    e
  );
}
function $y(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Yh(e) {
  if (!e) return ln;
  e = e._reactInternals;
  e: {
    if ($n(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Yf(e, n, t);
  }
  return t;
}
function Vh(e, t, n, r, o, s, i, a, l) {
  return (
    (e = Nu(n, r, !0, e, o, s, i, a, l)),
    (e.context = Yh(null)),
    (n = e.current),
    (r = De()),
    (o = on(n)),
    (s = $t(r, o)),
    (s.callback = t ?? null),
    nn(n, s, o),
    (e.current.lanes = o),
    Mo(e, o, r),
    Xe(e, r),
    e
  );
}
function Oi(e, t, n, r) {
  var o = t.current,
    s = De(),
    i = on(o);
  return (
    (n = Yh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $t(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(o, t, i)),
    e !== null && (wt(e, o, i, s), Rs(e, o, i)),
    i
  );
}
function ui(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  wd(e, t), (e = e.alternate) && wd(e, t);
}
function Dy() {
  return null;
}
var Zh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fu(e) {
  this._internalRoot = e;
}
Mi.prototype.render = Fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Oi(e, t, null, null);
};
Mi.prototype.unmount = Fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      Oi(null, e, null, null);
    }),
      (t[jt] = null);
  }
};
function Mi(e) {
  this._internalRoot = e;
}
Mi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Pf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && _f(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function kd() {}
function jy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ui(i);
        s.call(c);
      };
    }
    var i = Vh(t, r, e, 0, null, !1, !1, "", kd);
    return (
      (e._reactRootContainer = i),
      (e[jt] = i.current),
      Co(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = ui(l);
      a.call(c);
    };
  }
  var l = Nu(e, 0, !1, null, null, !1, !1, "", kd);
  return (
    (e._reactRootContainer = l),
    (e[jt] = l.current),
    Co(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      Oi(t, l, n, r);
    }),
    l
  );
}
function $i(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = ui(i);
        a.call(l);
      };
    }
    Oi(t, i, e, o);
  } else i = jy(n, t, e, o, r);
  return ui(i);
}
Af = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kr(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), Xe(t, ge()), !(X & 6) && ((xr = ge() + 500), dn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var o = De();
          wt(r, e, 1, o);
        }
      }),
        Hu(e, 1);
  }
};
uu = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = De();
      wt(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = De();
      wt(n, e, t, r);
    }
    Hu(e, t);
  }
};
Pf = function () {
  return Y;
};
Rf = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
Za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ai(r);
            if (!o) throw Error(_(90));
            af(r), qa(r, o);
          }
        }
      }
      break;
    case "textarea":
      uf(e, n);
      break;
    case "select":
      (t = n.value), t != null && ar(e, !!n.multiple, t, !1);
  }
};
gf = zu;
vf = Mn;
var Ny = { usingClientEntryPoint: !1, Events: [$o, Vn, Ai, hf, mf, zu] },
  jr = {
    findFiberByHostInstance: bn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hy = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || Dy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ls.isDisabled && ls.supportsFiber)
    try {
      (Ci = ls.inject(Hy)), (At = ls);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(_(200));
  return $y(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(_(299));
  var n = !1,
    r = "",
    o = Zh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Nu(e, 1, !1, null, null, n, !1, r, o)),
    (e[jt] = t.current),
    Co(e.nodeType === 8 ? e.parentNode : e),
    new Fu(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = kf(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return Mn(e);
};
nt.hydrate = function (e, t, n) {
  if (!zi(t)) throw Error(_(200));
  return $i(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Zh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Vh(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[jt] = t.current),
    Co(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Mi(t);
};
nt.render = function (e, t, n) {
  if (!zi(t)) throw Error(_(200));
  return $i(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!zi(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (Mn(function () {
        $i(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = zu;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zi(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return $i(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function Jh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jh);
    } catch (e) {
      console.error(e);
    }
}
Jh(), (Zp.exports = nt);
var Fy = Zp.exports,
  xd = Fy;
(Da.createRoot = xd.createRoot), (Da.hydrateRoot = xd.hydrateRoot);
var Uy = Object.defineProperty,
  us = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? Uy(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
class Kt extends Error {
  constructor(t = {}) {
    super(t.message),
      us(this, "exceptionId"),
      us(this, "message"),
      us(this, "source"),
      us(this, "type"),
      (this.message = t.message ?? ""),
      (this.source = t.source),
      (this.type = this.constructor.name),
      (this.exceptionId = t.exceptionId);
  }
}
class wn extends Kt {}
class ci extends Kt {}
const $e = (e) => {
    typeof e != "string"
      ? e && typeof e.toString == "function"
        ? console.warn(`[nlux] ${e.toString()}`)
        : console.warn("[nlux]")
      : console.warn(`[nlux] ${e}`);
  },
  Sd = [],
  _l = (e) => {
    Sd.includes(e) || (Sd.push(e), $e(e));
  },
  em = class $s {
    static register(t) {
      const n = t.__compId;
      n
        ? $s.componentDefs.get(n) === void 0 &&
          (t.__renderer && t.__updater
            ? $s.componentDefs.set(n, {
                id: n,
                model: t,
                render: t.__renderer,
                update: t.__updater,
              })
            : $e(`Component with id "${n}" missing renderer or updater`))
        : $e("Component definition missing valid id");
    }
    static retrieve(t) {
      const n = $s.componentDefs.get(t);
      if (n) return n;
      $e(`Component with id "${t}" not registered`);
    }
  };
em.componentDefs = new Map();
let tm = em;
btoa("sectionsRegistered") + "";
const bt = (e) => {
    const t = requestAnimationFrame(() => {
      e();
    });
    return () => {
      cancelAnimationFrame(t);
    };
  },
  Lo = (e) => {
    e.replaceChildren();
  },
  mt = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const t = (16 * Math.random()) | 0;
      return (e == "x" ? t : (3 & t) | 8).toString(16);
    });
class at {
  constructor(t, n) {
    (this.subComponentElementIds = new Map()),
      (this.subComponents = new Map()),
      (this.__context = null),
      (this.__destroyed = !1),
      (this.__status = "unmounted"),
      (this.actionsOnDomReady = []),
      (this.compEventGetter = (i) => {
        if (this.destroyed) return () => {};
        const a = this.rendererEventListeners.get(i);
        if (!a)
          throw new Kt({
            source: this.constructor.name,
            message: `Unable to call renderer event "${i}" because no matching event listener was found. Make sure that the event listener is registered using @CompEventListener() decorator in the component model class, and use class methods instead of arrow function attributes.`,
          });
        return a;
      });
    const r = Object.getPrototypeOf(this).constructor.__compId;
    if (!r)
      throw new wn({
        source: this.constructor.name,
        message:
          "Unable to instantiate component: missing compId in implementation. Component should be annotated using @Model() to set compId before iy can be instantiated.",
      });
    if (((this.def = tm.retrieve(r) ?? null), !this.def))
      throw new wn({
        source: this.constructor.name,
        message: `Unable to instantiate component "${r}" because it's not registered. Component should be registered using CompRegistry.register(ComponentClass) before instantiating a component.`,
      });
    (this.__instanceId = mt()),
      (this.__destroyed = !1),
      (this.__context = t),
      (this.renderedDom = null),
      (this.renderingRoot = null),
      (this.props = n);
    const o = n ? Object.entries(n) : [];
    (this.elementProps = new Map(o)), (this.rendererEventListeners = new Map());
    const s = this.constructor.__compEventListeners;
    s &&
      s.forEach((i, a) => {
        i.forEach((l) => {
          const c = Object.getPrototypeOf(this)[l];
          typeof c == "function"
            ? this.addRendererEventListener(a, c.bind(this))
            : $e(
                `Unable to set event listener "${a}" because method "${l}" cannot be found on component "${this.constructor.name} at runtime!"`
              );
        });
      }),
      (this.rendererProps = Object.freeze(n));
  }
  get destroyed() {
    return this.__destroyed;
  }
  get id() {
    return this.__instanceId;
  }
  get rendered() {
    return this.renderedDom !== null;
  }
  get root() {
    return (
      this.throwIfDestroyed(),
      this.renderedDom && this.renderingRoot ? this.renderingRoot : null
    );
  }
  get status() {
    return this.__status;
  }
  get context() {
    if (!this.__context)
      throw new wn({
        source: this.constructor.name,
        message: "Unable to get context because it's not set",
      });
    return this.__context;
  }
  destroy() {
    this.destroyComponent();
  }
  destroyListItemComponent() {
    this.destroyComponent(!0);
  }
  getProp(t) {
    return this.throwIfDestroyed(), this.elementProps.get(t) ?? null;
  }
  render(t, n) {
    var i;
    if (!this.def) return;
    if (this.destroyed)
      return void $e(
        `Unable to render component "${
          (i = this.def) == null ? void 0 : i.id
        }" because it is already destroyed`
      );
    if (this.rendered || this.renderedDom)
      return void $e(
        `Unable to render component "${this.def.id}" because it is already rendered`
      );
    const r = document.createDocumentFragment(),
      o = Object.getPrototypeOf(this).constructor.__compId,
      s = this.executeRenderer(r);
    if (!s)
      throw new Kt({
        source: this.constructor.name,
        message: `Unable to render component "${o}" because renderer returned null`,
      });
    this.renderedDom = s;
    for (const [, a] of this.subComponents) {
      const l = this.getSubComponentPortal(a.id);
      l && this.mountSubComponentToPortal(a.id, l);
    }
    bt(() => {
      this.destroyed ||
        (n ? t.insertBefore(r, n) : t.append(r), (this.renderingRoot = t));
    });
  }
  updateSubComponent(t, n, r) {
    this.throwIfDestroyed();
    const o = this.subComponents.get(t);
    o && !o.destroyed && o.setProp(n, r);
  }
  addSubComponent(t, n, r) {
    if ((this.throwIfDestroyed(), this.subComponents.has(t)))
      throw new wn({
        source: this.constructor.name,
        message: `Unable to add sub-component "${t}" because it already exists`,
      });
    if (
      (this.subComponents.set(t, n),
      r && this.subComponentElementIds.set(t, r),
      this.renderedDom)
    ) {
      const o = this.getSubComponentPortal(t);
      o && this.mountSubComponentToPortal(t, o);
    }
  }
  executeDomAction(t, ...n) {
    if ((this.throwIfDestroyed(), !this.renderedDom))
      return void this.actionsOnDomReady.push(() =>
        this.executeDomAction(t, ...n)
      );
    if (!this.renderingRoot)
      throw new Kt({
        source: this.constructor.name,
        message:
          "Unable to execute DOM action because renderingRoot is not set",
      });
    const r = this.renderedDom.actions[t];
    if (!r)
      throw new Kt({
        source: this.constructor.name,
        message: `Unable to execute DOM action "${String(
          t
        )}" because it does not exist`,
      });
    return bt(() => r(...n));
  }
  executeRenderer(t) {
    var o;
    const n = (o = this.def) == null ? void 0 : o.render;
    if (!n) return null;
    if (this.renderingRoot)
      throw new Kt({
        source: this.constructor.name,
        message:
          "Unable to render component because renderingRoot is already set",
      });
    const r = n({
      appendToRoot: (s) => {
        t.append(s), this.runDomActionsQueue();
      },
      compEvent: this.compEventGetter,
      props: this.rendererProps,
      context: this.context,
    });
    return r && (this.renderingRoot = t), r;
  }
  removeSubComponent(t) {
    this.throwIfDestroyed(),
      bt(() => {
        const n = this.subComponents.get(t);
        n &&
          ((n.renderingRoot = null), n.destroy(), this.subComponents.delete(t));
      });
  }
  runDomActionsQueue() {
    if (this.actionsOnDomReady.length > 0 && this.rendered) {
      const t = this.actionsOnDomReady;
      this.actionsOnDomReady = [];
      for (const n of t) bt(() => n());
    }
  }
  setProp(t, n) {
    this.destroyed
      ? $e(
          `Unable to set prop "${String(t)}" because component "${
            this.constructor.name
          }" is destroyed`
        )
      : this.elementProps.has(t)
      ? (this.schedulePropUpdate(t, this.elementProps.get(t), n),
        (this.props = Object.freeze(Object.fromEntries(this.elementProps))),
        this.elementProps.set(t, n))
      : $e(
          `Unable to set prop "${String(
            t
          )}" because it does not exist in the component props`
        );
  }
  throwIfDestroyed() {
    if (this.__destroyed)
      throw new wn({
        source: this.constructor.name,
        message: "Unable to call method on destroyed component",
      });
  }
  addRendererEventListener(t, n) {
    if ((this.throwIfDestroyed(), this.rendererEventListeners.has(t)))
      throw new wn({
        source: this.constructor.name,
        message: `Unable to add event listener to rendererEvents "${t}" because it already exists`,
      });
    this.rendererEventListeners.set(t, n);
  }
  destroyComponent(t = !1) {
    if (
      (this.throwIfDestroyed(),
      this.subComponents.forEach((n) => {
        n.destroy();
      }),
      this.renderedDom)
    ) {
      this.renderedDom.elements && (this.renderedDom.elements = void 0),
        this.renderedDom.actions && (this.renderedDom.actions = void 0),
        this.renderedDom.onDestroy && this.renderedDom.onDestroy();
      const n = this.renderingRoot;
      bt(() => {
        var r;
        if (n)
          if (n instanceof DocumentFragment)
            for (; n.firstChild; ) n.removeChild(n.firstChild);
          else t ? (r = n.parentElement) == null || r.removeChild(n) : Lo(n);
      }),
        (this.renderedDom = null),
        (this.renderingRoot = null);
    }
    (this.__destroyed = !0),
      (this.__context = null),
      (this.props = void 0),
      this.elementProps.clear(),
      this.rendererEventListeners.clear(),
      this.subComponents.clear();
  }
  getSubComponentPortal(t) {
    var s;
    const n = this.subComponents.get(t),
      r = this.subComponentElementIds.get(t);
    if (!n || !r) return null;
    const o = ((s = this.renderedDom) == null ? void 0 : s.elements)[r];
    return o instanceof HTMLElement ? o : null;
  }
  mountSubComponentToPortal(t, n) {
    const r = this.subComponents.get(t);
    r == null || r.render(n);
  }
  schedulePropUpdate(t, n, r) {
    var a;
    if (!this.renderedDom || !((a = this.def) != null && a.update)) return;
    const o = this.renderedDom,
      s = this.renderingRoot,
      i = this.def.update;
    s &&
      bt(() => {
        i({
          propName: t,
          currentValue: n,
          newValue: r,
          dom: { root: s, elements: o.elements, actions: o.actions },
          updateSubComponent: this.updateSubComponent,
        });
      });
  }
}
(at.__compEventListeners = null),
  (at.__compId = null),
  (at.__renderer = null),
  (at.__updater = null);
const pn = (e, t, n) => (r) => {
    (r.__compId = e), (r.__renderer = t), (r.__updater = n);
  },
  vt = (e) => (t, n) => {
    const r = t;
    if (typeof r.constructor != "function")
      throw new wn({
        source: "CallbackFor",
        message: "@CallbackFor can only be used on methods of a class!",
      });
    (r.constructor.hasOwnProperty("__compEventListeners") &&
      r.constructor.__compEventListeners !== null) ||
      (r.constructor.__compEventListeners = new Map());
    const o = r.constructor.__compEventListeners,
      s = o.get(e);
    s ? s.push(n) : o.set(e, [n]);
  };
function Qy() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
let Dn = {
  async: !1,
  breaks: !1,
  extensions: null,
  gfm: !0,
  hooks: null,
  pedantic: !1,
  renderer: null,
  silent: !1,
  tokenizer: null,
  walkTokens: null,
};
function Cd(e) {
  Dn = e;
}
var qy = Object.defineProperty,
  nm = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? qy(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
let lo = class {
  constructor(t) {
    nm(this, "options"), (this.options = t || Dn);
  }
  postprocess(t) {
    return t;
  }
  preprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
};
nm(
  lo,
  "passThroughHooks",
  new Set(["preprocess", "postprocess", "processAllTokens"])
);
const rm = /[&<>"']/,
  Xy = new RegExp(rm.source, "g"),
  om = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  Wy = new RegExp(om.source, "g"),
  Gy = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  Ed = (e) => Gy[e];
function Ve(e, t) {
  if (t) {
    if (rm.test(e)) return e.replace(Xy, Ed);
  } else if (om.test(e)) return e.replace(Wy, Ed);
  return e;
}
const Ky = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function Yy(e) {
  return e.replace(Ky, (t, n) =>
    (n = n.toLowerCase()) === "colon"
      ? ":"
      : n.charAt(0) === "#"
      ? n.charAt(1) === "x"
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1))
      : ""
  );
}
const Vy = /(^|[^\[])\^/g;
function Z(e, t) {
  let n = typeof e == "string" ? e : e.source;
  t = t || "";
  const r = {
    replace: (o, s) => {
      let i = typeof s == "string" ? s : s.source;
      return (i = i.replace(Vy, "$1")), (n = n.replace(o, i)), r;
    },
    getRegex: () => new RegExp(n, t),
  };
  return r;
}
function bd(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
const uo = { exec: () => null };
function Td(e, t) {
  const n = e
    .replace(/\|/g, (o, s, i) => {
      let a = !1,
        l = s;
      for (; --l >= 0 && i[l] === "\\"; ) a = !a;
      return a ? "|" : " |";
    })
    .split(/ \|/);
  let r = 0;
  if (
    (n[0].trim() || n.shift(),
    n.length > 0 && !n[n.length - 1].trim() && n.pop(),
    t)
  )
    if (n.length > t) n.splice(t);
    else for (; n.length < t; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
  return n;
}
function cs(e, t, n) {
  const r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r; ) {
    const s = e.charAt(r - o - 1);
    if (s !== t || n) {
      if (s === t || !n) break;
      o++;
    } else o++;
  }
  return e.slice(0, r - o);
}
const jo = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  sm = /(?:[*+-]|\d{1,9}[.)])/,
  im = Z(
    /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
  )
    .replace(/bull/g, sm)
    .replace(/blockCode/g, / {4}/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .getRegex(),
  Qu =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  qu = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  Zy = Z(
    /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
  )
    .replace("label", qu)
    .replace(
      "title",
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    )
    .getRegex(),
  Jy = Z(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, sm)
    .getRegex(),
  Di =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  Xu = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  e0 = Z(
    "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    "i"
  )
    .replace("comment", Xu)
    .replace("tag", Di)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex(),
  Ad = Z(Qu)
    .replace("hr", jo)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", Di)
    .getRegex(),
  Wu = {
    blockquote: Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", Ad)
      .getRegex(),
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    def: Zy,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    hr: jo,
    html: e0,
    lheading: im,
    list: Jy,
    newline: /^(?: *(?:\n|$))+/,
    paragraph: Ad,
    table: uo,
    text: /^[^\n]+/,
  },
  Id = Z(
    "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  )
    .replace("hr", jo)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", Di)
    .getRegex(),
  t0 = {
    ...Wu,
    table: Id,
    paragraph: Z(Qu)
      .replace("hr", jo)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("table", Id)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", Di)
      .getRegex(),
  },
  n0 = {
    ...Wu,
    html: Z(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    )
      .replace("comment", Xu)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: uo,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: Z(Qu)
      .replace("hr", jo)
      .replace(
        "heading",
        ` *#{1,6} *[^
]`
      )
      .replace("lheading", im)
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .replace("|tag", "")
      .getRegex(),
  },
  am = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  lm = /^( {2,}|\\)\n(?!\s*$)/,
  No = "\\p{P}\\p{S}",
  r0 = Z(/^((?![*_])[\spunctuation])/, "u")
    .replace(/punctuation/g, No)
    .getRegex(),
  o0 = Z(
    /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    "u"
  )
    .replace(/punct/g, No)
    .getRegex(),
  s0 = Z(
    "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
    "gu"
  )
    .replace(/punct/g, No)
    .getRegex(),
  i0 = Z(
    "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
    "gu"
  )
    .replace(/punct/g, No)
    .getRegex(),
  a0 = Z(/\\([punct])/, "gu")
    .replace(/punct/g, No)
    .getRegex(),
  l0 = Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      "email",
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
    )
    .getRegex(),
  u0 = Z(Xu).replace("(?:-->|$)", "-->").getRegex(),
  c0 = Z(
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
  )
    .replace("comment", u0)
    .replace(
      "attribute",
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
    )
    .getRegex(),
  di = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  d0 = Z(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace("label", di)
    .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace(
      "title",
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
    )
    .getRegex(),
  Pd = Z(/^!?\[(label)\]\[(ref)\]/)
    .replace("label", di)
    .replace("ref", qu)
    .getRegex(),
  Rd = Z(/^!?\[(ref)\](?:\[\])?/)
    .replace("ref", qu)
    .getRegex(),
  Gu = {
    _backpedal: uo,
    anyPunctuation: a0,
    autolink: l0,
    blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
    br: lm,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    del: uo,
    emStrongLDelim: o0,
    emStrongRDelimAst: s0,
    emStrongRDelimUnd: i0,
    escape: am,
    link: d0,
    nolink: Rd,
    punctuation: r0,
    reflink: Pd,
    reflinkSearch: Z("reflink|nolink(?!\\()", "g")
      .replace("reflink", Pd)
      .replace("nolink", Rd)
      .getRegex(),
    tag: c0,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    url: uo,
  },
  p0 = {
    ...Gu,
    link: Z(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", di)
      .getRegex(),
    reflink: Z(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", di)
      .getRegex(),
  },
  Ll = {
    ...Gu,
    escape: Z(am).replace("])", "~|])").getRegex(),
    url: Z(
      /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      "i"
    )
      .replace(
        "email",
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  f0 = {
    ...Ll,
    br: Z(lm).replace("{2,}", "*").getRegex(),
    text: Z(Ll.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  },
  ds = { normal: Wu, gfm: t0, pedantic: n0 },
  Nr = { normal: Gu, gfm: Ll, breaks: f0, pedantic: p0 };
var h0 = Object.defineProperty,
  wa = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? h0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
function _d(e, t, n, r) {
  const o = t.href,
    s = t.title ? Ve(t.title) : null,
    i = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: o,
      title: s,
      text: i,
      tokens: r.inlineTokens(i),
    };
    return (r.state.inLink = !1), a;
  }
  return { type: "image", raw: n, href: o, title: s, text: Ve(i) };
}
let pi = class {
  constructor(t) {
    wa(this, "lexer"),
      wa(this, "options"),
      wa(this, "rules"),
      (this.options = t || Dn);
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let r, o;
      return (
        n[2] === "@"
          ? ((r = Ve(n[1])), (o = "mailto:" + r))
          : ((r = Ve(n[1])), (o = r)),
        {
          type: "link",
          raw: n[0],
          text: r,
          href: o,
          tokens: [{ type: "text", raw: r, text: r }],
        }
      );
    }
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let r = n[0].replace(
        /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        `
    $1`
      );
      r = cs(
        r.replace(/^ *>[ \t]?/gm, ""),
        `
`
      );
      const o = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(r);
      return (
        (this.lexer.state.top = o),
        { type: "blockquote", raw: n[0], tokens: s, text: r }
      );
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n) return { type: "br", raw: n[0] };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic
          ? r
          : cs(
              r,
              `
`
            ),
      };
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(/\n/g, " ");
      const o = /[^ ]/.test(r),
        s = /^ /.test(r) && / $/.test(r);
      return (
        o && s && (r = r.substring(1, r.length - 1)),
        (r = Ve(r, !0)),
        { type: "codespan", raw: n[0], text: r }
      );
    }
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const r = n[1].toLowerCase().replace(/\s+/g, " "),
        o = n[2]
          ? n[2]
              .replace(/^<(.*)>$/, "$1")
              .replace(this.rules.inline.anyPunctuation, "$1")
          : "",
        s = n[3]
          ? n[3]
              .substring(1, n[3].length - 1)
              .replace(this.rules.inline.anyPunctuation, "$1")
          : n[3];
      return { type: "def", tag: r, raw: n[0], href: o, title: s };
    }
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2]),
      };
  }
  emStrong(t, n, r = "") {
    let o = this.rules.inline.emStrongLDelim.exec(t);
    if (
      o &&
      !(o[3] && r.match(/[\p{L}\p{N}]/u)) &&
      (!(o[1] || o[2]) || !r || this.rules.inline.punctuation.exec(r))
    ) {
      const s = [...o[0]].length - 1;
      let i,
        a,
        l = s,
        c = 0;
      const u =
        o[0][0] === "*"
          ? this.rules.inline.emStrongRDelimAst
          : this.rules.inline.emStrongRDelimUnd;
      for (
        u.lastIndex = 0, n = n.slice(-1 * t.length + s);
        (o = u.exec(n)) != null;

      ) {
        if (((i = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !i)) continue;
        if (((a = [...i].length), o[3] || o[4])) {
          l += a;
          continue;
        }
        if ((o[5] || o[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (((l -= a), l > 0)) continue;
        a = Math.min(a, a + l + c);
        const f = [...o[0]][0].length,
          d = t.slice(0, s + o.index + f + a);
        if (Math.min(s, a) % 2) {
          const g = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: g,
            tokens: this.lexer.inlineTokens(g),
          };
        }
        const m = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: m,
          tokens: this.lexer.inlineTokens(m),
        };
      }
    }
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n) return { type: "escape", raw: n[0], text: Ve(n[1]) };
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0],
        o = (function (s, i) {
          const a = s.match(/^(\s+)(?:```)/);
          if (a === null) return i;
          const l = a[1];
          return i
            .split(
              `
`
            )
            .map((c) => {
              const u = c.match(/^\s+/);
              if (u === null) return c;
              const [f] = u;
              return f.length >= l.length ? c.slice(l.length) : c;
            }).join(`
`);
        })(r, n[3] || "");
      return {
        type: "code",
        raw: r,
        lang: n[2]
          ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
          : n[2],
        text: o,
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (/#$/.test(r)) {
        const o = cs(r, "#");
        this.options.pedantic
          ? (r = o.trim())
          : (o && !/ $/.test(o)) || (r = o.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n) return { type: "hr", raw: n[0] };
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0],
      };
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      let r;
      return (
        (r = this.lexer.state.inRawBlock ? n[0] : Ve(n[0])),
        { type: "text", raw: n[0], text: r }
      );
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return;
        const i = cs(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 == 0) return;
      } else {
        const i = (function (a, l) {
          if (a.indexOf(l[1]) === -1) return -1;
          let c = 0;
          for (let u = 0; u < a.length; u++)
            if (a[u] === "\\") u++;
            else if (a[u] === l[0]) c++;
            else if (a[u] === l[1] && (c--, c < 0)) return u;
          return -1;
        })(n[2], "()");
        if (i > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + i;
          (n[2] = n[2].substring(0, i)),
            (n[0] = n[0].substring(0, a).trim()),
            (n[3] = "");
        }
      }
      let o = n[2],
        s = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
        i && ((o = i[1]), (s = i[3]));
      } else s = n[3] ? n[3].slice(1, -1) : "";
      return (
        (o = o.trim()),
        /^</.test(o) &&
          (o =
            this.options.pedantic && !/>$/.test(r)
              ? o.slice(1)
              : o.slice(1, -1)),
        _d(
          n,
          {
            href: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
            title: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
          },
          n[0],
          this.lexer
        )
      );
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const o = r.length > 1,
        s = {
          type: "list",
          raw: "",
          ordered: o,
          start: o ? +r.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
        this.options.pedantic && (r = o ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "",
        l = "",
        c = !1;
      for (; t; ) {
        let u = !1;
        if (!(n = i.exec(t)) || this.rules.block.hr.test(t)) break;
        (a = n[0]), (t = t.substring(a.length));
        let f = n[2]
            .split(
              `
`,
              1
            )[0]
            .replace(/^\t+/, (v) => " ".repeat(3 * v.length)),
          d = t.split(
            `
`,
            1
          )[0],
          m = 0;
        this.options.pedantic
          ? ((m = 2), (l = f.trimStart()))
          : ((m = n[2].search(/[^ ]/)),
            (m = m > 4 ? 1 : m),
            (l = f.slice(m)),
            (m += n[1].length));
        let g = !1;
        if (
          (!f &&
            /^ *$/.test(d) &&
            ((a +=
              d +
              `
`),
            (t = t.substring(d.length + 1)),
            (u = !0)),
          !u)
        ) {
          const v = new RegExp(
              `^ {0,${Math.min(
                3,
                m - 1
              )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
            h = new RegExp(
              `^ {0,${Math.min(
                3,
                m - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`),
            k = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; t; ) {
            const x = t.split(
              `
`,
              1
            )[0];
            if (
              ((d = x),
              this.options.pedantic &&
                (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
              y.test(d) || k.test(d) || v.test(d) || h.test(t))
            )
              break;
            if (d.search(/[^ ]/) >= m || !d.trim())
              l +=
                `
` + d.slice(m);
            else {
              if (
                g ||
                f.search(/[^ ]/) >= 4 ||
                y.test(f) ||
                k.test(f) ||
                h.test(f)
              )
                break;
              l +=
                `
` + d;
            }
            g || d.trim() || (g = !0),
              (a +=
                x +
                `
`),
              (t = t.substring(x.length + 1)),
              (f = d.slice(m));
          }
        }
        s.loose || (c ? (s.loose = !0) : /\n *\n *$/.test(a) && (c = !0));
        let p,
          w = null;
        this.options.gfm &&
          ((w = /^\[[ xX]\] /.exec(l)),
          w && ((p = w[0] !== "[ ] "), (l = l.replace(/^\[[ xX]\] +/, "")))),
          s.items.push({
            type: "list_item",
            raw: a,
            task: !!w,
            checked: p,
            loose: !1,
            text: l,
            tokens: [],
          }),
          (s.raw += a);
      }
      (s.items[s.items.length - 1].raw = a.trimEnd()),
        (s.items[s.items.length - 1].text = l.trimEnd()),
        (s.raw = s.raw.trimEnd());
      for (let u = 0; u < s.items.length; u++)
        if (
          ((this.lexer.state.top = !1),
          (s.items[u].tokens = this.lexer.blockTokens(s.items[u].text, [])),
          !s.loose)
        ) {
          const f = s.items[u].tokens.filter((m) => m.type === "space"),
            d = f.length > 0 && f.some((m) => /\n.*\n/.test(m.raw));
          s.loose = d;
        }
      if (s.loose)
        for (let u = 0; u < s.items.length; u++) s.items[u].loose = !0;
      return s;
    }
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const r =
        n[1].charAt(n[1].length - 1) ===
        `
`
          ? n[1].slice(0, -1)
          : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  reflink(t, n) {
    let r;
    if (
      (r = this.rules.inline.reflink.exec(t)) ||
      (r = this.rules.inline.nolink.exec(t))
    ) {
      const o = n[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!o) {
        const s = r[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return _d(r, o, r[0], this.lexer);
    }
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0) return { type: "space", raw: n[0] };
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (!n || !/[:|]/.test(n[2])) return;
    const r = Td(n[1]),
      o = n[2].replace(/^\||\| *$/g, "").split("|"),
      s =
        n[3] && n[3].trim()
          ? n[3].replace(/\n[ \t]*$/, "").split(`
`)
          : [],
      i = { type: "table", raw: n[0], header: [], align: [], rows: [] };
    if (r.length === o.length) {
      for (const a of o)
        /^ *-+: *$/.test(a)
          ? i.align.push("right")
          : /^ *:-+: *$/.test(a)
          ? i.align.push("center")
          : /^ *:-+ *$/.test(a)
          ? i.align.push("left")
          : i.align.push(null);
      for (const a of r)
        i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of s)
        i.rows.push(
          Td(a, i.header.length).map((l) => ({
            text: l,
            tokens: this.lexer.inline(l),
          }))
        );
      return i;
    }
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return (
        !this.lexer.state.inLink && /^<a /i.test(n[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(n[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: "html",
          raw: n[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: n[0],
        }
      );
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0]),
      };
  }
  url(t) {
    var r;
    let n;
    if ((n = this.rules.inline.url.exec(t))) {
      let o, s;
      if (n[2] === "@") (o = Ve(n[0])), (s = "mailto:" + o);
      else {
        let i;
        do
          (i = n[0]),
            (n[0] =
              ((r = this.rules.inline._backpedal.exec(n[0])) == null
                ? void 0
                : r[0]) ?? "");
        while (i !== n[0]);
        (o = Ve(n[0])), (s = n[1] === "www." ? "http://" + n[0] : n[0]);
      }
      return {
        type: "link",
        raw: n[0],
        text: o,
        href: s,
        tokens: [{ type: "text", raw: o, text: o }],
      };
    }
  }
};
var m0 = Object.defineProperty,
  Hr = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? m0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
let or = class Bl {
  constructor(t) {
    Hr(this, "options"),
      Hr(this, "state"),
      Hr(this, "tokens"),
      Hr(this, "inlineQueue"),
      Hr(this, "tokenizer"),
      (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || Dn),
      (this.options.tokenizer = this.options.tokenizer || new pi()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const n = { block: ds.normal, inline: Nr.normal };
    this.options.pedantic
      ? ((n.block = ds.pedantic), (n.inline = Nr.pedantic))
      : this.options.gfm &&
        ((n.block = ds.gfm),
        this.options.breaks ? (n.inline = Nr.breaks) : (n.inline = Nr.gfm)),
      (this.tokenizer.rules = n);
  }
  static get rules() {
    return { block: ds, inline: Nr };
  }
  static lex(t, n) {
    return new Bl(n).lex(t);
  }
  static lexInline(t, n) {
    return new Bl(n).inlineTokens(t);
  }
  blockTokens(t, n = []) {
    let r, o, s, i;
    for (
      t = this.options.pedantic
        ? t.replace(/\t/g, "    ").replace(/^ +$/gm, "")
        : t.replace(/^( *)(\t+)/gm, (a, l, c) => l + "    ".repeat(c.length));
      t;

    )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some(
            (a) =>
              !!(r = a.call({ lexer: this }, t, n)) &&
              ((t = t.substring(r.raw.length)), n.push(r), !0)
          )
        )
      )
        if ((r = this.tokenizer.space(t)))
          (t = t.substring(r.raw.length)),
            r.raw.length === 1 && n.length > 0
              ? (n[n.length - 1].raw += `
`)
              : n.push(r);
        else if ((r = this.tokenizer.code(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            !o || (o.type !== "paragraph" && o.type !== "text")
              ? n.push(r)
              : ((o.raw +=
                  `
` + r.raw),
                (o.text +=
                  `
` + r.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = o.text));
        else if ((r = this.tokenizer.fences(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.heading(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.hr(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.blockquote(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.list(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.html(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.def(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            !o || (o.type !== "paragraph" && o.type !== "text")
              ? this.tokens.links[r.tag] ||
                (this.tokens.links[r.tag] = { href: r.href, title: r.title })
              : ((o.raw +=
                  `
` + r.raw),
                (o.text +=
                  `
` + r.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = o.text));
        else if ((r = this.tokenizer.table(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.lheading(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else {
          if (
            ((s = t),
            this.options.extensions && this.options.extensions.startBlock)
          ) {
            let a = 1 / 0;
            const l = t.slice(1);
            let c;
            this.options.extensions.startBlock.forEach((u) => {
              (c = u.call({ lexer: this }, l)),
                typeof c == "number" && c >= 0 && (a = Math.min(a, c));
            }),
              a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
          }
          if (this.state.top && (r = this.tokenizer.paragraph(s)))
            (o = n[n.length - 1]),
              i && o.type === "paragraph"
                ? ((o.raw +=
                    `
` + r.raw),
                  (o.text +=
                    `
` + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = o.text))
                : n.push(r),
              (i = s.length !== t.length),
              (t = t.substring(r.raw.length));
          else if ((r = this.tokenizer.text(t)))
            (t = t.substring(r.raw.length)),
              (o = n[n.length - 1]),
              o && o.type === "text"
                ? ((o.raw +=
                    `
` + r.raw),
                  (o.text +=
                    `
` + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = o.text))
                : n.push(r);
          else if (t) {
            const a = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent) {
              console.error(a);
              break;
            }
            throw new Error(a);
          }
        }
    return (this.state.top = !0), n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let r,
      o,
      s,
      i,
      a,
      l,
      c = t;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (
          ;
          (i = this.tokenizer.rules.inline.reflinkSearch.exec(c)) != null;

        )
          u.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) &&
            (c =
              c.slice(0, i.index) +
              "[" +
              "a".repeat(i[0].length - 2) +
              "]" +
              c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(c)) != null; )
      c =
        c.slice(0, i.index) +
        "[" +
        "a".repeat(i[0].length - 2) +
        "]" +
        c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(c)) != null; )
      c =
        c.slice(0, i.index) +
        "++" +
        c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (
        (a || (l = ""),
        (a = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some(
            (u) =>
              !!(r = u.call({ lexer: this }, t, n)) &&
              ((t = t.substring(r.raw.length)), n.push(r), !0)
          )
        ))
      )
        if ((r = this.tokenizer.escape(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.tag(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            o && r.type === "text" && o.type === "text"
              ? ((o.raw += r.raw), (o.text += r.text))
              : n.push(r);
        else if ((r = this.tokenizer.link(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.reflink(t, this.tokens.links)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            o && r.type === "text" && o.type === "text"
              ? ((o.raw += r.raw), (o.text += r.text))
              : n.push(r);
        else if ((r = this.tokenizer.emStrong(t, c, l)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.codespan(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.br(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.del(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.autolink(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if (this.state.inLink || !(r = this.tokenizer.url(t))) {
          if (
            ((s = t),
            this.options.extensions && this.options.extensions.startInline)
          ) {
            let u = 1 / 0;
            const f = t.slice(1);
            let d;
            this.options.extensions.startInline.forEach((m) => {
              (d = m.call({ lexer: this }, f)),
                typeof d == "number" && d >= 0 && (u = Math.min(u, d));
            }),
              u < 1 / 0 && u >= 0 && (s = t.substring(0, u + 1));
          }
          if ((r = this.tokenizer.inlineText(s)))
            (t = t.substring(r.raw.length)),
              r.raw.slice(-1) !== "_" && (l = r.raw.slice(-1)),
              (a = !0),
              (o = n[n.length - 1]),
              o && o.type === "text"
                ? ((o.raw += r.raw), (o.text += r.text))
                : n.push(r);
          else if (t) {
            const u = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent) {
              console.error(u);
              break;
            }
            throw new Error(u);
          }
        } else (t = t.substring(r.raw.length)), n.push(r);
    return n;
  }
  lex(t) {
    (t = t.replace(
      /\r\n|\r/g,
      `
`
    )),
      this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return (this.inlineQueue = []), this.tokens;
  }
};
var g0 = Object.defineProperty,
  v0 = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? g0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, t + "", n);
let fi = class {
    constructor(t) {
      v0(this, "options"), (this.options = t || Dn);
    }
    blockquote(t) {
      return `<blockquote>
${t}</blockquote>
`;
    }
    br() {
      return "<br>";
    }
    checkbox(t) {
      return (
        "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
      );
    }
    code(t, n, r) {
      var s;
      const o = (s = (n || "").match(/^\S*/)) == null ? void 0 : s[0];
      return (
        (t =
          t.replace(/\n$/, "") +
          `
`),
        o
          ? '<pre><code class="language-' +
            Ve(o) +
            '">' +
            (r ? t : Ve(t, !0)) +
            `</code></pre>
`
          : "<pre><code>" +
            (r ? t : Ve(t, !0)) +
            `</code></pre>
`
      );
    }
    codespan(t) {
      return `<code>${t}</code>`;
    }
    del(t) {
      return `<del>${t}</del>`;
    }
    em(t) {
      return `<em>${t}</em>`;
    }
    heading(t, n, r) {
      return `<h${n}>${t}</h${n}>
`;
    }
    hr() {
      return `<hr>
`;
    }
    html(t, n) {
      return t;
    }
    image(t, n, r) {
      const o = bd(t);
      if (o === null) return r;
      let s = `<img src="${(t = o)}" alt="${r}"`;
      return n && (s += ` title="${n}"`), (s += ">"), s;
    }
    link(t, n, r) {
      const o = bd(t);
      if (o === null) return r;
      let s = '<a href="' + (t = o) + '"';
      return n && (s += ' title="' + n + '"'), (s += ">" + r + "</a>"), s;
    }
    list(t, n, r) {
      const o = n ? "ol" : "ul";
      return (
        "<" +
        o +
        (n && r !== 1 ? ' start="' + r + '"' : "") +
        `>
` +
        t +
        "</" +
        o +
        `>
`
      );
    }
    listitem(t, n, r) {
      return `<li>${t}</li>
`;
    }
    paragraph(t) {
      return `<p>${t}</p>
`;
    }
    strong(t) {
      return `<strong>${t}</strong>`;
    }
    table(t, n) {
      return (
        n && (n = `<tbody>${n}</tbody>`),
        `<table>
<thead>
` +
          t +
          `</thead>
` +
          n +
          `</table>
`
      );
    }
    tablecell(t, n) {
      const r = n.header ? "th" : "td";
      return (
        (n.align ? `<${r} align="${n.align}">` : `<${r}>`) +
        t +
        `</${r}>
`
      );
    }
    tablerow(t) {
      return `<tr>
${t}</tr>
`;
    }
    text(t) {
      return t;
    }
  },
  Ku = class {
    strong(t) {
      return t;
    }
    em(t) {
      return t;
    }
    codespan(t) {
      return t;
    }
    del(t) {
      return t;
    }
    html(t) {
      return t;
    }
    text(t) {
      return t;
    }
    link(t, n, r) {
      return "" + r;
    }
    image(t, n, r) {
      return "" + r;
    }
    br() {
      return "";
    }
  };
var y0 = Object.defineProperty,
  ka = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? y0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
let sr = class Ol {
  constructor(t) {
    ka(this, "options"),
      ka(this, "renderer"),
      ka(this, "textRenderer"),
      (this.options = t || Dn),
      (this.options.renderer = this.options.renderer || new fi()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new Ku());
  }
  static parse(t, n) {
    return new Ol(n).parse(t);
  }
  static parseInline(t, n) {
    return new Ol(n).parseInline(t);
  }
  parse(t, n = !0) {
    let r = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[s.type]
      ) {
        const i = s,
          a = this.options.extensions.renderers[i.type].call(
            { parser: this },
            i
          );
        if (
          a !== !1 ||
          ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text",
          ].includes(i.type)
        ) {
          r += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const i = s;
          r += this.renderer.heading(
            this.parseInline(i.tokens),
            i.depth,
            Yy(this.parseInline(i.tokens, this.textRenderer))
          );
          continue;
        }
        case "code": {
          const i = s;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = s;
          let a = "",
            l = "";
          for (let u = 0; u < i.header.length; u++)
            l += this.renderer.tablecell(this.parseInline(i.header[u].tokens), {
              header: !0,
              align: i.align[u],
            });
          a += this.renderer.tablerow(l);
          let c = "";
          for (let u = 0; u < i.rows.length; u++) {
            const f = i.rows[u];
            l = "";
            for (let d = 0; d < f.length; d++)
              l += this.renderer.tablecell(this.parseInline(f[d].tokens), {
                header: !1,
                align: i.align[d],
              });
            c += this.renderer.tablerow(l);
          }
          r += this.renderer.table(a, c);
          continue;
        }
        case "blockquote": {
          const i = s,
            a = this.parse(i.tokens);
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = s,
            a = i.ordered,
            l = i.start,
            c = i.loose;
          let u = "";
          for (let f = 0; f < i.items.length; f++) {
            const d = i.items[f],
              m = d.checked,
              g = d.task;
            let p = "";
            if (d.task) {
              const w = this.renderer.checkbox(!!m);
              c
                ? d.tokens.length > 0 && d.tokens[0].type === "paragraph"
                  ? ((d.tokens[0].text = w + " " + d.tokens[0].text),
                    d.tokens[0].tokens &&
                      d.tokens[0].tokens.length > 0 &&
                      d.tokens[0].tokens[0].type === "text" &&
                      (d.tokens[0].tokens[0].text =
                        w + " " + d.tokens[0].tokens[0].text))
                  : d.tokens.unshift({ type: "text", text: w + " " })
                : (p += w + " ");
            }
            (p += this.parse(d.tokens, c)),
              (u += this.renderer.listitem(p, g, !!m));
          }
          r += this.renderer.list(u, a, l);
          continue;
        }
        case "html": {
          const i = s;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = s;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = s,
            a = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            (i = t[++o]),
              (a +=
                `
` + (i.tokens ? this.parseInline(i.tokens) : i.text));
          r += n ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          const i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let r = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[s.type]
      ) {
        const i = this.options.extensions.renderers[s.type].call(
          { parser: this },
          s
        );
        if (
          i !== !1 ||
          ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text",
          ].includes(s.type)
        ) {
          r += i || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          const i = s;
          r += n.text(i.text);
          break;
        }
        case "html": {
          const i = s;
          r += n.html(i.text);
          break;
        }
        case "link": {
          const i = s;
          r += n.link(i.href, i.title, this.parseInline(i.tokens, n));
          break;
        }
        case "image": {
          const i = s;
          r += n.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = s;
          r += n.strong(this.parseInline(i.tokens, n));
          break;
        }
        case "em": {
          const i = s;
          r += n.em(this.parseInline(i.tokens, n));
          break;
        }
        case "codespan": {
          const i = s;
          r += n.codespan(i.text);
          break;
        }
        case "br":
          r += n.br();
          break;
        case "del": {
          const i = s;
          r += n.del(this.parseInline(i.tokens, n));
          break;
        }
        case "text": {
          const i = s;
          r += n.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
};
var co,
  Ld,
  Ml,
  w0 = Object.defineProperty,
  um = (e) => {
    throw TypeError(e);
  },
  St = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? w0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n),
  zl = (e, t, n) => (
    ((r, o, s) => {
      o.has(r) || um("Cannot " + s);
    })(e, t, "access private method"),
    n
  );
(co = new WeakSet()),
  (Ld = function (e, t) {
    return (n) => {
      if (
        ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
        e)
      ) {
        const r =
          "<p>An error occurred:</p><pre>" + Ve(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }),
  (Ml = function (e, t) {
    return (n, r) => {
      const o = { ...r },
        s = { ...this.defaults, ...o };
      this.defaults.async === !0 &&
        o.async === !1 &&
        (s.silent ||
          console.warn(
            "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
          ),
        (s.async = !0));
      const i = zl(this, co, Ld).call(this, !!s.silent, !!s.async);
      if (n == null)
        return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return i(
          new Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(n) +
              ", string expected"
          )
        );
      if ((s.hooks && (s.hooks.options = s), s.async))
        return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n)
          .then((a) => e(a, s))
          .then((a) => (s.hooks ? s.hooks.processAllTokens(a) : a))
          .then((a) =>
            s.walkTokens
              ? Promise.all(this.walkTokens(a, s.walkTokens)).then(() => a)
              : a
          )
          .then((a) => t(a, s))
          .then((a) => (s.hooks ? s.hooks.postprocess(a) : a))
          .catch(i);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let a = e(n, s);
        s.hooks && (a = s.hooks.processAllTokens(a)),
          s.walkTokens && this.walkTokens(a, s.walkTokens);
        let l = t(a, s);
        return s.hooks && (l = s.hooks.postprocess(l)), l;
      } catch (a) {
        return i(a);
      }
    };
  });
const kn = new (class {
  constructor(...e) {
    var t, n, r;
    (t = this),
      (n = co).has(t)
        ? um("Cannot add the same private member more than once")
        : n instanceof WeakSet
        ? n.add(t)
        : n.set(t, r),
      St(this, "Hooks", lo),
      St(this, "Lexer", or),
      St(this, "Parser", sr),
      St(this, "Renderer", fi),
      St(this, "TextRenderer", Ku),
      St(this, "Tokenizer", pi),
      St(this, "defaults", {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
      }),
      St(this, "options", this.setOptions),
      St(this, "parse", zl(this, co, Ml).call(this, or.lex, sr.parse)),
      St(
        this,
        "parseInline",
        zl(this, co, Ml).call(this, or.lexInline, sr.parseInline)
      ),
      this.use(...e);
  }
  lexer(e, t) {
    return or.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return sr.parse(e, t ?? this.defaults);
  }
  setOptions(e) {
    return (this.defaults = { ...this.defaults, ...e }), this;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      e.forEach((n) => {
        const r = { ...n };
        if (
          ((r.async = this.defaults.async || r.async || !1),
          n.extensions &&
            (n.extensions.forEach((o) => {
              if (!o.name) throw new Error("extension name required");
              if ("renderer" in o) {
                const s = t.renderers[o.name];
                t.renderers[o.name] = s
                  ? function (...i) {
                      let a = o.renderer.apply(this, i);
                      return a === !1 && (a = s.apply(this, i)), a;
                    }
                  : o.renderer;
              }
              if ("tokenizer" in o) {
                if (!o.level || (o.level !== "block" && o.level !== "inline"))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                const s = t[o.level];
                s ? s.unshift(o.tokenizer) : (t[o.level] = [o.tokenizer]),
                  o.start &&
                    (o.level === "block"
                      ? t.startBlock
                        ? t.startBlock.push(o.start)
                        : (t.startBlock = [o.start])
                      : o.level === "inline" &&
                        (t.startInline
                          ? t.startInline.push(o.start)
                          : (t.startInline = [o.start])));
              }
              "childTokens" in o &&
                o.childTokens &&
                (t.childTokens[o.name] = o.childTokens);
            }),
            (r.extensions = t)),
          n.renderer)
        ) {
          const o = this.defaults.renderer || new fi(this.defaults);
          for (const s in n.renderer) {
            if (!(s in o)) throw new Error(`renderer '${s}' does not exist`);
            if (s === "options") continue;
            const i = s,
              a = n.renderer[i],
              l = o[i];
            o[i] = (...c) => {
              let u = a.apply(o, c);
              return u === !1 && (u = l.apply(o, c)), u || "";
            };
          }
          r.renderer = o;
        }
        if (n.tokenizer) {
          const o = this.defaults.tokenizer || new pi(this.defaults);
          for (const s in n.tokenizer) {
            if (!(s in o)) throw new Error(`tokenizer '${s}' does not exist`);
            if (["options", "rules", "lexer"].includes(s)) continue;
            const i = s,
              a = n.tokenizer[i],
              l = o[i];
            o[i] = (...c) => {
              let u = a.apply(o, c);
              return u === !1 && (u = l.apply(o, c)), u;
            };
          }
          r.tokenizer = o;
        }
        if (n.hooks) {
          const o = this.defaults.hooks || new lo();
          for (const s in n.hooks) {
            if (!(s in o)) throw new Error(`hook '${s}' does not exist`);
            if (s === "options") continue;
            const i = s,
              a = n.hooks[i],
              l = o[i];
            lo.passThroughHooks.has(s)
              ? (o[i] = (c) => {
                  if (this.defaults.async)
                    return Promise.resolve(a.call(o, c)).then((f) =>
                      l.call(o, f)
                    );
                  const u = a.call(o, c);
                  return l.call(o, u);
                })
              : (o[i] = (...c) => {
                  let u = a.apply(o, c);
                  return u === !1 && (u = l.apply(o, c)), u;
                });
          }
          r.hooks = o;
        }
        if (n.walkTokens) {
          const o = this.defaults.walkTokens,
            s = n.walkTokens;
          r.walkTokens = function (i) {
            let a = [];
            return (
              a.push(s.call(this, i)), o && (a = a.concat(o.call(this, i))), a
            );
          };
        }
        this.defaults = { ...this.defaults, ...r };
      }),
      this
    );
  }
  walkTokens(e, t) {
    var r, o;
    let n = [];
    for (const s of e)
      switch (((n = n.concat(t.call(this, s))), s.type)) {
        case "table": {
          const i = s;
          for (const a of i.header) n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of i.rows)
            for (const l of a) n = n.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const i = s;
          n = n.concat(this.walkTokens(i.items, t));
          break;
        }
        default: {
          const i = s;
          (o =
            (r = this.defaults.extensions) == null ? void 0 : r.childTokens) !=
            null && o[i.type]
            ? this.defaults.extensions.childTokens[i.type].forEach((a) => {
                const l = i[a].flat(1 / 0);
                n = n.concat(this.walkTokens(l, t));
              })
            : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
        }
      }
    return n;
  }
})();
function ie(e, t) {
  return kn.parse(e, t);
}
(ie.options = ie.setOptions =
  function (e) {
    return kn.setOptions(e), (ie.defaults = kn.defaults), Cd(ie.defaults), ie;
  }),
  (ie.getDefaults = Qy),
  (ie.defaults = Dn),
  (ie.use = function (...e) {
    return kn.use(...e), (ie.defaults = kn.defaults), Cd(ie.defaults), ie;
  }),
  (ie.walkTokens = function (e, t) {
    return kn.walkTokens(e, t);
  }),
  (ie.parseInline = kn.parseInline),
  (ie.Parser = sr),
  (ie.parser = sr.parse),
  (ie.Renderer = fi),
  (ie.TextRenderer = Ku),
  (ie.Lexer = or),
  (ie.lexer = or.lex),
  (ie.Tokenizer = pi),
  (ie.Hooks = lo),
  (ie.parse = ie);
const cm = (e, t) => {
    const {
        showCodeBlockCopyButton: n,
        markdownLinkTarget: r,
        syntaxHighlighter: o,
        htmlSanitizer: s,
      } = t || {},
      i = ie(e, { async: !1, breaks: !0 });
    if (typeof i != "string") throw new Error("Markdown parsing failed");
    const a = document.createElement("div");
    return (
      (a.innerHTML = s ? s(i) : i),
      a.querySelectorAll("pre").forEach((l) => {
        const c = document.createElement("div");
        c.className = "code-block";
        const u = l.querySelector("code");
        if (!u) {
          const g = l.innerHTML;
          return (c.innerHTML = s ? s(g) : g), void l.replaceWith(c);
        }
        let f;
        for (let g = 0; g < u.classList.length; g++) {
          const p = u.classList[g];
          if (p.startsWith("language-")) {
            f = p.slice(9);
            break;
          }
        }
        const d = document.createElement("pre"),
          m = "<div>" + u.innerHTML + "</div>";
        if (
          ((d.innerHTML =
            t != null && t.htmlSanitizer ? t.htmlSanitizer(m) : m),
          f && (d.setAttribute("data-language", f), o))
        ) {
          const g =
            "<div>" + o.createHighlighter()(u.textContent || "", f) + "</div>";
          (d.innerHTML = s ? s(g) : g), (d.className = "highlighter-dark");
        }
        Lo(c), c.appendChild(d), l.replaceWith(c);
      }),
      n !== !1 &&
        a.querySelectorAll(".code-block").forEach((l) => {
          var d;
          if (
            !l.querySelector("pre") ||
            ((d = l.previousElementSibling) != null &&
              d.classList.contains("nlux-comp-copyButton"))
          )
            return;
          const c = "Copy code block to clipboard",
            u = document.createElement("button");
          u.classList.add("nlux-comp-copyButton"),
            u.setAttribute("aria-label", c),
            u.setAttribute("title", c);
          const f = document.createElement("span");
          f.classList.add("icon-copy"), u.appendChild(f), l.appendChild(u);
        }),
      r !== "self" &&
        a.querySelectorAll("a").forEach((l) => {
          l.setAttribute("target", "_blank");
        }),
      a.innerHTML
    );
  },
  Bd = (e) => {
    if (
      !(e instanceof HTMLButtonElement) ||
      e.dataset.clickListenerSet === "true"
    )
      return;
    let t = !1;
    const n = e.nextElementSibling;
    e.addEventListener("click", () => {
      if (t || !n) return;
      const r = n.innerText;
      navigator.clipboard.writeText(r ?? ""),
        (t = !0),
        e.classList.add("clicked"),
        setTimeout(() => {
          (t = !1), e.classList.remove("clicked");
        }, 1e3);
    }),
      (e.dataset.clickListenerSet = "true");
  },
  dm = (e) => {
    const t = "nlux-comp-copyButton";
    e instanceof HTMLButtonElement && e.classList.contains(t)
      ? Bd(e)
      : e.querySelectorAll(`.${t}`).forEach(Bd);
  },
  k0 = (e, t) => {
    let n = !1;
    const { onComplete: r } = t || {},
      o = [],
      s =
        (t != null && t.skipStreamingAnimation
          ? "timeout"
          : "animationFrame") == "timeout"
          ? (f) => setTimeout(f, 0)
          : (f) => requestAnimationFrame(f),
      i = document.createElement("div");
    i.classList.add("md-in-progress"), e.append(i);
    const a = () => {
        for (; i.firstChild; ) {
          const f = i.firstChild;
          f instanceof HTMLElement && dm(f), i.before(f);
        }
      },
      l =
        !(t != null && t.skipStreamingAnimation) &&
        t != null &&
        t.streamingAnimationSpeed &&
        t.streamingAnimationSpeed >= 0
          ? t.streamingAnimationSpeed
          : t != null && t.skipStreamingAnimation
          ? 0
          : 8,
      c = {
        timeSinceLastProcessing: new Date().getTime(),
        currentMarkdown: "",
        previousHtml: void 0,
      };
    let u = setInterval(() => {
      const f = new Date().getTime(),
        d = (t == null ? void 0 : t.waitTimeBeforeStreamCompletion) !== "never";
      if (o.length === 0 && d) {
        const g =
          typeof (t == null ? void 0 : t.waitTimeBeforeStreamCompletion) ==
          "number"
            ? t.waitTimeBeforeStreamCompletion
            : 2e3;
        return void (
          (n || f - c.timeSinceLastProcessing > g) &&
          ((n = !0),
          u && (clearInterval(u), (u = void 0)),
          a(),
          i.remove(),
          r == null ? void 0 : r())
        );
      }
      c.timeSinceLastProcessing = f;
      const m = o.shift();
      m !== void 0 &&
        typeof m == "string" &&
        s(() => {
          const g = c.currentMarkdown + m,
            p = cm(g, t).trim();
          if (typeof p != "string")
            return (
              (c.currentMarkdown = c.currentMarkdown.slice(0, -m.length)),
              void $e("Markdown parsing failed")
            );
          if (
            c.previousHtml &&
            p.length > c.previousHtml.length &&
            p.startsWith(c.previousHtml)
          ) {
            a();
            const w = p.slice(c.previousHtml.length).trim();
            (i.innerHTML =
              t != null && t.htmlSanitizer ? t.htmlSanitizer(w) : w),
              (c.currentMarkdown = m),
              (c.previousHtml = void 0);
          } else
            (i.innerHTML =
              t != null && t.htmlSanitizer ? t.htmlSanitizer(p) : p),
              (c.currentMarkdown = g),
              (c.previousHtml = p);
        });
    }, l);
    return {
      next: (f) => {
        if (n) $e("Stream is already complete. No more chunks can be added");
        else for (const d of f) o.push(d);
      },
      complete: () => {
        o.push(`
`),
          (n = !0);
      },
      cancel: () => {
        u && (clearInterval(u), (u = void 0)), (n = !0), i.remove();
      },
      error: () => {
        n = !0;
      },
    };
  },
  pm = (e, t) => {
    const n = document.createElement("div");
    if ((n.classList.add("nlux-comp-avatarContainer"), e)) {
      const r = document.createElement("div");
      r.classList.add("nlux-comp-avatarPicture"),
        (r.style.backgroundImage = `url("${encodeURI(e)}")`),
        n.append(r);
    }
    return n;
  },
  Yu = "nlux-comp-avatar",
  Vu = (e) => {
    const t = document.createElement("div");
    return (
      t.classList.add(Yu),
      e.avatar || e.name
        ? (e.name && (t.title = e.name),
          e.avatar && e.avatar instanceof HTMLElement
            ? (t.append(e.avatar.cloneNode(!0)), t)
            : (t.append(pm(e.avatar)), t))
        : t
    );
  },
  ps = { received: "nlux_msg_received", sent: "nlux_msg_sent" },
  fm = (e, t) => {
    Object.keys(ps).forEach((n) => {
      e.classList.remove(ps[n]);
    }),
      ps[t] && e.classList.add(ps[t]);
  },
  Vr = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" },
  hm = (e, t) => {
    Object.keys(Vr).forEach((n) => {
      e.classList.remove(Vr[n]);
    }),
      Vr[t] && e.classList.add(Vr[t]);
  },
  mm = (e, t = "text", n) => {
    if (t === "markdown") {
      const r = document.createElement("div"),
        o = cm(e, n);
      (r.innerHTML = n != null && n.htmlSanitizer ? n.htmlSanitizer(o) : o),
        dm(r);
      const s = document.createDocumentFragment();
      for (; r.firstChild; ) s.appendChild(r.firstChild);
      return s;
    }
    return document.createTextNode(e);
  },
  gm = "nlux-comp-message",
  fs = {
    received: "nlux-comp-chatItem--received",
    sent: "nlux-comp-chatItem--sent",
  },
  vm = (e, t) => {
    Object.keys(fs).forEach((n) => {
      e.classList.remove(fs[n]);
    }),
      fs[t] && e.classList.add(fs[t]);
  },
  hs = {
    bubbles: "nlux-comp-chatItem--bubblesLayout",
    list: "nlux-comp-chatItem--listLayout",
  },
  ym = (e, t) => {
    Object.keys(hs).forEach((n) => {
      e.classList.remove(hs[n]);
    }),
      hs[t] && e.classList.add(hs[t]);
  },
  wm = "nlux-comp-chatItem-participantInfo",
  km = "nlux-comp-chatItem-participantName",
  x0 = (e) => {
    const t = document.createElement("div");
    t.classList.add("nlux-comp-chatItem");
    const n = {
      direction: e.direction,
      status: e.status,
      message: e.message,
      htmlSanitizer: e.htmlSanitizer,
    };
    let r;
    if (e.avatar !== void 0) {
      const i = { name: e.name, avatar: e.avatar };
      r = Vu(i);
    }
    const o = document.createElement("span");
    o.classList.add(km), (o.textContent = e.name);
    {
      const i = document.createElement("div");
      i.classList.add(wm),
        r !== void 0 && i.append(r),
        i.append(o),
        t.append(i);
    }
    vm(t, e.direction), ym(t, e.layout);
    const s = ((i) => {
      const a = document.createElement("div");
      a.classList.add(gm);
      const l = i.status ? i.status : "complete";
      return hm(a, l), fm(a, i.direction), a;
    })(n);
    return t.append(s), t;
  },
  Od = (e, t, n) => {
    if (t.name !== n.name && typeof n.avatar == "string") {
      const r = n.name && n.name.length > 0 ? n.name[0].toUpperCase() : "",
        o = e.querySelector("* > .nlux-comp-avatarContainer > .avtr_ltr");
      o == null || o.replaceChildren(r);
    }
  },
  xm = (e, t, n) => {
    (t.avatar === n.avatar && t.name === n.name) ||
      (t.avatar !== n.avatar &&
        ((r, o, s) => {
          if (o.avatar !== s.avatar)
            if (typeof s.avatar == "string" && typeof o.avatar == "string") {
              const i = r.querySelector(
                "* > .nlux-comp-avatarContainer > .nlux-comp-avatarPicture"
              );
              i !== null &&
                (i.style.backgroundImage = `url("${encodeURI(s.avatar)}")`);
            } else if (typeof s.avatar == "string") {
              const i = pm(s.avatar);
              r.replaceChildren(i);
            } else s.avatar ? r.replaceChildren(s.avatar.cloneNode(!0)) : Lo(r);
        })(e, t, n),
      n.name
        ? t.name !== n.name && ((e.title = n.name), Od(e, t, n))
        : ((e.title = ""), Od(e, t, n)));
  },
  S0 = (e, t, n) => {
    if (
      (t.message === n.message &&
        t.status === n.status &&
        t.direction === n.direction) ||
      !n ||
      (!n.hasOwnProperty("message") &&
        !n.hasOwnProperty("status") &&
        !n.hasOwnProperty("direction"))
    )
      return;
    t.direction !== n.direction && fm(e, n.direction);
    const r = n.status;
    if (t.status !== r)
      return (
        hm(e, n.status),
        void ((o, s, i) => {
          const a = i.status;
          if (a !== "streaming" && a === "complete") {
            const l = i.message ? i.message : "",
              c = document.createTextNode(l);
            o.classList.add(Vr[a]), Lo(o), o.append(c);
          }
        })(e, 0, n)
      );
    r === "complete" &&
      ((t.message === n.message && t.format === n.format) ||
        ((o, s, i) => {
          (s.message === i.message && s.format === i.format) ||
            (Lo(o),
            o.append(
              mm(i.message ?? "", i.format, { htmlSanitizer: i.htmlSanitizer })
            ));
        })(e, t, n));
  },
  Md = "dom/getElement";
var C0 = Object.defineProperty,
  E0 = Object.getOwnPropertyDescriptor,
  zd = (e, t, n, r) => {
    for (
      var o, s = r > 1 ? void 0 : r ? E0(t, n) : t, i = e.length - 1;
      i >= 0;
      i--
    )
      (o = e[i]) && (s = (r ? o(t, n, s) : o(s)) || s);
    return r && s && C0(t, n, s), s;
  };
let Ds = class extends at {
  constructor(t, n) {
    super(t, n),
      (this.serverResponse = []),
      (this.stringContent = ""),
      n.domProps.message !== void 0 &&
        (this.stringContent = n.domProps.message);
  }
  addChunk(t, n) {
    this.throwIfDestroyed(),
      this.executeDomAction("processStreamedChunk", t),
      typeof t == "string" && (this.stringContent += t),
      this.serverResponse.push(n);
  }
  commitChunks() {
    this.throwIfDestroyed(), this.executeDomAction("commitStreamedChunks");
  }
  getChatSegmentItem() {
    return this.getProp("domProps").direction === "received"
      ? {
          uid: this.props.uid,
          participantRole: "assistant",
          content: this.getItemContent(),
          serverResponse: this.serverResponse,
          status: "complete",
          dataTransferMode: "batch",
          time: new Date(),
        }
      : {
          uid: this.props.uid,
          participantRole: "user",
          content: this.getItemContent(),
          status: "complete",
          time: new Date(),
        };
  }
  getItemContent() {
    return this.aiMessageContent ?? this.stringContent;
  }
  updateDomProps(t) {
    const n = this.getProp("domProps"),
      r = { ...n, ...t };
    this.setProp("domProps", r), this.executeDomAction("updateDomProps", n, r);
  }
  updateMarkdownStreamRenderer(t, n) {
    if ((this.setProp(t, n), t === "syntaxHighlighter")) {
      const r = n;
      this.executeDomAction("updateMarkdownStreamRenderer", {
        syntaxHighlighter: r,
      });
    }
    if (t === "htmlSanitizer") {
      const r = n;
      this.executeDomAction("updateMarkdownStreamRenderer", {
        htmlSanitizer: r,
      });
    }
  }
  onMarkdownStreamComplete(t) {
    this.context.emit("messageRendered", { uid: this.props.uid });
  }
};
zd(
  [vt("markdown-stream-complete")],
  Ds.prototype,
  "onMarkdownStreamComplete",
  1
),
  (Ds = zd(
    [
      pn(
        "chatItem",
        ({ props: e, appendToRoot: t, compEvent: n }) => {
          const r = x0({
              ...e.domProps,
              htmlSanitizer: e.htmlSanitizer,
              message: void 0,
            }),
            o = ((u, f) => {
              const d = u.querySelector(f);
              if (!d)
                throw new ci({
                  source: Md,
                  message: `Could not find element with query "${f}". Make sure the query provided matches an element that exists in the root element.`,
                });
              if (!(d instanceof HTMLElement))
                throw new ci({
                  source: Md,
                  message: `Element with query "${f}" is not a valid HTMLElement.`,
                });
              return d;
            })(r, ".nlux-comp-message");
          if (!o) throw new Error("Message container not found");
          const s = document.createElement("div");
          s.classList.add("nlux-markdownStream-root");
          const i = document.createElement("div");
          if (
            (i.classList.add("nlux-markdown-container"),
            i.setAttribute("nlux-message-id", e.uid),
            s.append(i),
            o.append(s),
            e.domProps.message)
          ) {
            const u = mm(e.domProps.message ?? "", "markdown", {
              markdownLinkTarget: e.markdownLinkTarget,
              syntaxHighlighter: e.syntaxHighlighter,
              htmlSanitizer: e.htmlSanitizer,
            });
            i.append(u);
          }
          let a;
          t(r);
          let l = { ...e };
          const c = (u) =>
            ((f, d) => {
              const m = k0(f, {
                syntaxHighlighter: d == null ? void 0 : d.syntaxHighlighter,
                htmlSanitizer: d == null ? void 0 : d.htmlSanitizer,
                markdownLinkTarget: d == null ? void 0 : d.markdownLinkTarget,
                showCodeBlockCopyButton:
                  d == null ? void 0 : d.showCodeBlockCopyButton,
                skipStreamingAnimation:
                  d == null ? void 0 : d.skipStreamingAnimation,
                streamingAnimationSpeed:
                  d == null ? void 0 : d.streamingAnimationSpeed,
                waitTimeBeforeStreamCompletion:
                  d == null ? void 0 : d.waitTimeBeforeStreamCompletion,
                onComplete: d == null ? void 0 : d.onComplete,
              });
              return {
                next(g) {
                  m.next(g);
                },
                complete() {
                  m.complete();
                },
              };
            })(i, {
              syntaxHighlighter: u.syntaxHighlighter,
              htmlSanitizer: u.htmlSanitizer,
              markdownLinkTarget: u.markdownLinkTarget,
              showCodeBlockCopyButton: u.showCodeBlockCopyButton,
              skipStreamingAnimation: u.skipStreamingAnimation,
              streamingAnimationSpeed: u.streamingAnimationSpeed,
              onComplete: () => n("markdown-stream-complete"),
            });
          return {
            elements: { chatItemContainer: r },
            actions: {
              focus: () => {
                r.focus();
              },
              processStreamedChunk: (u) => {
                a || (a = c(l)), a.next(u);
              },
              commitStreamedChunks: () => {
                a && a.complete();
              },
              updateMarkdownStreamRenderer: (u) => {
                (l = { ...l, ...u }), c(l);
              },
              updateDomProps: (u, f) => {
                ((d, m, g) => {
                  if (
                    (m.direction !== g.direction ||
                      m.layout !== g.layout ||
                      m.status !== g.status ||
                      m.message !== g.message ||
                      m.name !== g.name ||
                      m.avatar !== g.avatar) &&
                    g &&
                    (g.hasOwnProperty("direction") ||
                      g.hasOwnProperty("layout") ||
                      g.hasOwnProperty("status") ||
                      g.hasOwnProperty("message") ||
                      g.hasOwnProperty("loader") ||
                      g.hasOwnProperty("name") ||
                      g.hasOwnProperty("avatar"))
                  ) {
                    if (
                      (m.direction !== g.direction && vm(d, g.direction),
                      m.layout !== g.layout && ym(d, g.layout),
                      m.direction !== g.direction ||
                        m.status !== g.status ||
                        m.message !== g.message)
                    ) {
                      const p = d.querySelector(`.${gm}`);
                      p &&
                        S0(
                          p,
                          {
                            direction: m.direction,
                            status: m.status,
                            message: m.message,
                            htmlSanitizer: m.htmlSanitizer,
                          },
                          {
                            direction: g.direction,
                            status: g.status,
                            message: g.message,
                            htmlSanitizer: m.htmlSanitizer,
                          }
                        );
                    }
                    if (m.name !== g.name || m.avatar !== g.avatar) {
                      const p = d.querySelector(`.${Yu}`);
                      if (!g.name && !g.avatar)
                        return void (p == null ? void 0 : p.remove());
                      if (p)
                        xm(
                          p,
                          { name: m.name, avatar: m.avatar },
                          { name: g.name, avatar: g.avatar }
                        );
                      else if (g.name !== void 0 || g.avatar !== void 0) {
                        const w = { name: g.name, avatar: g.avatar },
                          v = Vu(w),
                          h = d.querySelector(`.${wm}`);
                        h && h.prepend(v);
                      }
                    }
                    if (m.name !== g.name) {
                      const p = d.querySelector(`.${km}`);
                      p && (p.textContent = g.name || "");
                    }
                  }
                })(r, u, f);
              },
            },
            onDestroy: () => {
              r.remove(), (a = void 0);
            },
          };
        },
        ({ propName: e, newValue: t, dom: n }) => {
          var r;
          switch (e) {
            case "markdownLinkTarget":
            case "skipStreamingAnimation":
            case "syntaxHighlighter":
            case "htmlSanitizer":
            case "showCodeBlockCopyButton":
            case "streamingAnimationSpeed":
              (r = n.actions) == null ||
                r.updateMarkdownStreamRenderer({ [e]: t });
          }
        }
      ),
    ],
    Ds
  ));
const b0 = (e, t) => {
    let n,
      r = t,
      o = e,
      s = !0;
    const i = ((p, w) => {
        let v = !1;
        if (typeof p != "function")
          throw new Kt({
            source: "x/throttle",
            message: "Callback must be a function",
          });
        return (...h) => {
          v ||
            (p.apply(void 0, h),
            (v = !0),
            setTimeout(function () {
              v = !1;
            }, w));
        };
      })(
        ((p) => {
          let w, v;
          return (h) => {
            const y = h.target;
            if (!(y instanceof HTMLElement)) return;
            const { scrollTop: k, clientHeight: x, scrollHeight: S } = y,
              b = S - 30,
              C = Math.ceil(k + x) >= b,
              I =
                w === void 0 || v === void 0
                  ? void 0
                  : k > w && v === S
                  ? "down"
                  : k < w && v === S
                  ? "up"
                  : void 0;
            (v = S), (w = k), p({ scrolledToBottom: C, scrollDirection: I });
          };
        })(({ scrolledToBottom: p, scrollDirection: w }) => {
          s ? w === "up" && (s = !1) : w === "down" && p && (s = !0);
        }),
        50
      ),
      a = (p) => {
        p.addEventListener("scroll", i);
      },
      l = (p) => {
        p == null || p.removeEventListener("scroll", i);
      },
      c = (p) => {
        (n == null ? void 0 : n.uid) === p &&
          (u == null || u.disconnect(),
          f == null || f.disconnect(),
          (n = void 0),
          (u = void 0),
          (f = void 0));
      };
    let u, f;
    const d = () => {
        o == null || o.scrollTo({ top: 5e4, behavior: "instant" });
      },
      m = () => {
        o && r && s && d();
      },
      g = () => {
        m();
      };
    return (
      a(o),
      {
        updateConversationContainer: (p) => {
          l(o), a(p), (o = p);
        },
        updateProps: ({ autoScroll: p }) => {
          r = p;
        },
        handleNewChatSegmentAdded: (p, w) => {
          n && (u == null || u.disconnect(), f == null || f.disconnect()),
            (n = { uid: p, container: w }),
            (u = new ResizeObserver(m)),
            u.observe(w),
            (f = new MutationObserver(g)),
            f.observe(w, { childList: !0, subtree: !0, characterData: !0 }),
            r && d();
        },
        handleChatSegmentRemoved: (p) => c(p),
        handleChatSegmentComplete: (p) => c(p),
        destroy: () => {
          n && (c(n.uid), (n = void 0)), l(o), (o = void 0);
        },
      }
    );
  },
  fr = (e) => {
    var r;
    const t = typeof e == "function" ? e.__compId : void 0;
    if (!t)
      throw new Error(
        "Invalid compClass! Component should be registered before using"
      );
    const n = (r = tm.retrieve(t)) == null ? void 0 : r.model;
    if (!n || typeof n != "function")
      throw new Error(`Component "${t}" is not registered`);
    return {
      withContext: (o) => ({
        create: () => new n(o, {}),
        withProps: (s) => ({ create: () => new n(o, s) }),
      }),
    };
  },
  T0 = (e) => {
    const t = ["adapter", "events"],
      n = Object.keys(e).filter((o) => !t.includes(o)),
      r = {};
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      r[s] = e[s];
    }
    return r;
  },
  Sm = () => {
    const e = document.createElement("div");
    e.classList.add("nlux-comp-messageLoader");
    const t = document.createElement("span");
    t.classList.add("spinning-loader");
    const n = document.createElement("div");
    return (
      n.classList.add("nlux-comp-loaderContainer"),
      n.appendChild(t),
      e.appendChild(n),
      e
    );
  },
  $d = (e) => {
    const t = "nlux-chatSegment";
    return e === "complete"
      ? `${t} nlux-chatSegment--complete`
      : e === "error"
      ? `${t} nlux-chatSegment--error`
      : `${t} nlux-chatSegment--active`;
  },
  ms = (e, t) => {
    var n, r;
    return e === "assistant"
      ? ((n = t == null ? void 0 : t.assistant) == null ? void 0 : n.name) ??
          "Assistant"
      : e === "user"
      ? ((r = t == null ? void 0 : t.user) == null ? void 0 : r.name) ?? "User"
      : "";
  },
  A0 = "bubbles";
var I0 = Object.defineProperty,
  P0 = Object.getOwnPropertyDescriptor,
  gs = (e, t, n, r) => {
    for (
      var o, s = r > 1 ? void 0 : r ? P0(t, n) : t, i = e.length - 1;
      i >= 0;
      i--
    )
      (o = e[i]) && (s = (r ? o(t, n, s) : o(s)) || s);
    return r && s && I0(t, n, s), s;
  };
let qn = class extends at {
  constructor(t, n) {
    super(t, n),
      (this.chatItemCompIdsByIndex = []),
      (this.chatItemComponentsById = new Map());
  }
  addChatItem(t) {
    var o, s;
    if ((this.throwIfDestroyed(), this.chatItemComponentsById.has(t.uid)))
      throw new Error(
        `CompChatSegment: chat item with id "${t.uid}" already exists`
      );
    const n = ((i, a, l, c) => {
      const u = a ?? A0;
      if (i.participantRole === "assistant") {
        const d = i.status === "complete" ? "complete" : "streaming";
        return i.dataTransferMode === "stream"
          ? {
              status: d,
              layout: u,
              direction: "received",
              name: ms("assistant", { assistant: c }),
              avatar: c == null ? void 0 : c.avatar,
            }
          : i.status === "complete"
          ? {
              status: d,
              layout: u,
              direction: "received",
              name: ms("assistant", { assistant: c }),
              avatar: c == null ? void 0 : c.avatar,
              message:
                ((f = i.content),
                typeof f == "string"
                  ? f
                  : typeof f == "object"
                  ? `${f}`
                  : f == null
                  ? ""
                  : typeof f.toString == "function"
                  ? f.toString()
                  : JSON.stringify(f)),
            }
          : {
              status: d,
              layout: u,
              direction: "received",
              name: ms("assistant", { assistant: c }),
              avatar: c == null ? void 0 : c.avatar,
            };
      }
      var f;
      return {
        status: "complete",
        layout: u,
        direction: "sent",
        message: i.content,
        name: ms("user", { user: l }),
        avatar: l == null ? void 0 : l.avatar,
      };
    })(
      t,
      this.getProp("conversationLayout"),
      this.getProp("userPersona"),
      this.getProp("assistantPersona")
    );
    if (!n)
      throw new Error(
        `CompChatSegment: chat item with id "${t.uid}" has invalid props`
      );
    const r = fr(Ds)
      .withContext(this.context)
      .withProps({
        uid: t.uid,
        domProps: n,
        markdownLinkTarget: this.getProp("markdownLinkTarget"),
        showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"),
        skipStreamingAnimation: this.getProp("skipStreamingAnimation"),
        syntaxHighlighter: this.getProp("syntaxHighlighter"),
        htmlSanitizer: this.getProp("htmlSanitizer"),
        streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"),
      })
      .create();
    this.chatItemComponentsById.set(t.uid, r),
      this.chatItemCompIdsByIndex.push(t.uid),
      this.rendered &&
        ((s = (o = this.renderedDom) == null ? void 0 : o.elements) != null &&
        s.chatSegmentContainer
          ? r.render(
              this.renderedDom.elements.chatSegmentContainer,
              this.renderedDom.elements.loaderContainer
            )
          : _l("CompChatSegment: chatSegmentContainer is not available"));
  }
  addChunk(t, n, r) {
    if (this.destroyed) return;
    const o = this.chatItemComponentsById.get(t);
    if (!o)
      throw new Error(`CompChatSegment: chat item with id "${t}" not found`);
    o.addChunk(n, r);
  }
  complete() {
    this.throwIfDestroyed(),
      this.chatItemComponentsById.forEach((t) => t.commitChunks()),
      this.setProp("status", "complete");
  }
  destroy() {
    this.chatItemComponentsById.forEach((t) => t.destroy()),
      this.chatItemComponentsById.clear(),
      (this.chatItemCompIdsByIndex = []),
      super.destroy();
  }
  getChatItems() {
    return this.chatItemCompIdsByIndex
      .map((t) => this.chatItemComponentsById.get(t))
      .filter((t) => !!t);
  }
  setAssistantPersona(t) {
    this.setProp("assistantPersona", t);
    const n = {
      name: t == null ? void 0 : t.name,
      avatar: t == null ? void 0 : t.avatar,
    };
    this.chatItemComponentsById.forEach((r) => {
      r.getChatSegmentItem().participantRole === "assistant" &&
        r.updateDomProps(n);
    });
  }
  setLayout(t) {
    this.setProp("conversationLayout", t),
      this.chatItemComponentsById.forEach((n) => {
        n.updateDomProps({ layout: t });
      });
  }
  setUserPersona(t) {
    this.setProp("userPersona", t);
    const n = {
      name: t == null ? void 0 : t.name,
      avatar: t == null ? void 0 : t.avatar,
    };
    this.chatItemComponentsById.forEach((r) => {
      r.getChatSegmentItem().participantRole === "user" && r.updateDomProps(n);
    });
  }
  updateMarkdownStreamRenderer(t, n) {
    this.setProp(t, n);
  }
  onLoaderShown(t) {
    var n;
    (n = this.renderedDom) != null &&
      n.elements &&
      (this.renderedDom.elements.loaderContainer = t);
  }
  setProp(t, n) {
    super.setProp(t, n),
      (t !== "markdownLinkTarget" &&
        t !== "syntaxHighlighter" &&
        t !== "htmlSanitizer" &&
        t !== "skipStreamingAnimation" &&
        t !== "streamingAnimationSpeed") ||
        this.chatItemComponentsById.forEach((r) => {
          r.updateMarkdownStreamRenderer(t, n);
        });
  }
  onChatSegmentReady() {
    bt(() => {
      var n, r, o, s;
      if (
        !(
          (r = (n = this.renderedDom) == null ? void 0 : n.elements) != null &&
          r.chatSegmentContainer
        )
      )
        return;
      const t =
        (s = (o = this.renderedDom) == null ? void 0 : o.elements) == null
          ? void 0
          : s.chatSegmentContainer;
      this.chatItemComponentsById.forEach((i) => {
        i.rendered || i.render(t);
      });
    });
  }
  onLoaderHidden() {
    var t;
    (t = this.renderedDom) != null &&
      t.elements &&
      (this.renderedDom.elements.loaderContainer = void 0);
  }
};
gs([vt("loader-shown")], qn.prototype, "onLoaderShown", 1),
  gs([vt("chat-segment-ready")], qn.prototype, "onChatSegmentReady", 1),
  gs([vt("loader-hidden")], qn.prototype, "onLoaderHidden", 1),
  (qn = gs(
    [
      pn(
        "chatSegment",
        ({ props: e, compEvent: t, appendToRoot: n }) => {
          let r;
          const o = document.createElement("div");
          o.className = $d(e.status);
          const s = () => {
            if (!r) {
              (r = document.createElement("div")),
                (r.className = "nlux-chatSegment-loader-container");
              const i = Sm();
              r.appendChild(i), o.appendChild(r), t("loader-shown")(r);
            }
          };
          return (
            e.status === "active" && s(),
            n(o),
            t("chat-segment-ready")(),
            {
              elements: { chatSegmentContainer: o, loaderContainer: r },
              actions: {
                showLoader: s,
                hideLoader: () => {
                  r && (r.remove(), (r = void 0), t("loader-hidden")());
                },
              },
              onDestroy: () => {
                o.remove();
              },
            }
          );
        },
        ({ propName: e, newValue: t, dom: n }) => {
          var r, o, s;
          if (e === "status") {
            const i =
              (r = n.elements) == null ? void 0 : r.chatSegmentContainer;
            if (!i) return;
            const a = t;
            (i.className = $d(a)),
              a === "active"
                ? (o = n.actions) == null || o.showLoader()
                : (s = n.actions) == null || s.hideLoader();
          }
        }
      ),
    ],
    qn
  ));
let $l = class extends at {
  constructor(t, n) {
    super(t, n),
      (this.chatSegmentCompIdsByIndex = []),
      (this.chatSegmentComponentsById = new Map()),
      n.messages &&
        n.messages.length > 0 &&
        this.addChatSegment("complete", n.messages);
  }
  addChatItem(t, n) {
    const r = this.chatSegmentComponentsById.get(t);
    if (!r)
      throw new Error(
        `CompConversation: chat segment with id "${t}" not found`
      );
    r.destroyed
      ? _l(
          `CompConversation: chat segment with id "${t}" is destroyed and cannot be used`
        )
      : r.addChatItem(n);
  }
  addChatSegment(t = "active", n) {
    this.throwIfDestroyed();
    const r = mt(),
      o = fr(qn)
        .withContext(this.context)
        .withProps({
          uid: r,
          status: t,
          conversationLayout: this.getProp("conversationLayout"),
          userPersona: this.getProp("userPersona"),
          assistantPersona: this.getProp("assistantPersona"),
          markdownLinkTarget: this.getProp("markdownLinkTarget"),
          showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"),
          skipStreamingAnimation: this.getProp("skipStreamingAnimation"),
          syntaxHighlighter: this.getProp("syntaxHighlighter"),
          htmlSanitizer: this.getProp("htmlSanitizer"),
          streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"),
        })
        .create();
    if (n)
      for (const i of n)
        i.role === "assistant"
          ? o.addChatItem({
              uid: mt(),
              participantRole: "assistant",
              time: new Date(),
              dataTransferMode: "batch",
              status: "complete",
              content: i.message,
              serverResponse: i.serverResponse,
              contentType: "text",
            })
          : i.role === "user" &&
            o.addChatItem({
              uid: mt(),
              participantRole: "user",
              time: new Date(),
              status: "complete",
              content: i.message,
              contentType: "text",
            });
    this.chatSegmentComponentsById.set(r, o),
      this.chatSegmentCompIdsByIndex.push(r);
    const s = o.id;
    return (
      this.addSubComponent(s, o, "segmentsContainer"),
      this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length),
      r
    );
  }
  addChunk(t, n, r, o) {
    const s = this.chatSegmentComponentsById.get(t);
    if (!s)
      throw new Error(
        `CompConversation: chat segment with id "${t}" not found`
      );
    s.addChunk(n, r, o);
  }
  completeChatSegment(t) {
    const n = this.chatSegmentComponentsById.get(t);
    if (!n)
      throw new Error(
        `CompConversation: chat segment with id "${t}" not found`
      );
    n.destroyed || n.complete();
  }
  getChatSegmentContainer(t) {
    const n = this.chatSegmentComponentsById.get(t);
    if ((n == null ? void 0 : n.root) instanceof HTMLElement) return n.root;
  }
  getConversationContentForAdapter(t = "max") {
    if (typeof t == "number" && t < 0)
      return void _l(
        `Invalid value provided for 'historyPayloadSize' : "${t}"! Value must be a positive integer or 'max'.`
      );
    if (t === 0) return;
    const n = ((r) => {
      const o = [];
      return (
        r.forEach((s) => {
          s.items.forEach((i) => {
            if (i.status === "complete") {
              if (i.participantRole === "assistant")
                o.push({ role: "assistant", message: i.content });
              else if (i.participantRole === "user")
                return o.push({ role: "user", message: i.content });
            }
          });
        }),
        o
      );
    })(
      this.chatSegmentCompIdsByIndex
        .map((r) => this.chatSegmentComponentsById.get(r))
        .filter((r) => r !== void 0)
        .map((r) => ({
          uid: r.id,
          status: "complete",
          items: r.getChatItems().map((o) => o.getChatSegmentItem()),
        }))
    );
    return t === "max" ? n : n.slice(-t);
  }
  removeChatSegment(t) {
    const n = this.chatSegmentComponentsById.get(t);
    if (!n) return;
    const r = n.id;
    this.subComponents.has(r) && this.removeSubComponent(r),
      this.chatSegmentComponentsById.delete(n.id);
    const o = this.chatSegmentCompIdsByIndex.indexOf(t);
    o >= 0 && this.chatSegmentCompIdsByIndex.splice(o, 1),
      this.notifyAboutSegmentCountChange(this.chatSegmentCompIdsByIndex.length);
  }
  setAssistantPersona(t) {
    this.setProp("assistantPersona", t),
      this.chatSegmentComponentsById.forEach((n) => {
        n.setAssistantPersona(t);
      });
  }
  setConversationLayout(t) {
    this.setProp("conversationLayout", t),
      this.chatSegmentComponentsById.forEach((n) => {
        n.setLayout(t);
      });
  }
  setUserPersona(t) {
    this.setProp("userPersona", t),
      this.chatSegmentComponentsById.forEach((n) => {
        n.setUserPersona(t);
      });
  }
  updateMarkdownStreamRenderer(t, n) {
    this.setProp(t, n);
  }
  setProp(t, n) {
    if (
      (super.setProp(t, n),
      t === "markdownLinkTarget" ||
        t === "syntaxHighlighter" ||
        t === "htmlSanitizer" ||
        t === "skipStreamingAnimation" ||
        t === "streamingAnimationSpeed" ||
        t === "showCodeBlockCopyButton")
    ) {
      const r = t,
        o = n;
      this.chatSegmentComponentsById.forEach((s) => {
        s.updateMarkdownStreamRenderer(r, o);
      });
    }
  }
  notifyAboutSegmentCountChange(t) {
    const n = this.getProp("onSegmentCountChange");
    n && n(t);
  }
};
$l = ((e, t, n, r) => {
  for (var o, s = t, i = e.length - 1; i >= 0; i--)
    (o = e[i]) && (s = o(s) || s);
  return s;
})(
  [
    pn(
      "conversation",
      ({ appendToRoot: e }) => {
        const t = document.createElement("div");
        return (
          t.classList.add("nlux-chatSegments-container"),
          e(t),
          { elements: { segmentsContainer: t }, actions: {} }
        );
      },
      () => {}
    ),
  ],
  $l
);
const xa = {
    typing: "nlux-composer--typing",
    "submitting-prompt": "nlux-composer--submitting",
    "submitting-conversation-starter": "nlux-composer--submitting",
    waiting: "nlux-composer--waiting",
  },
  Cm = (e, t) => {
    Object.keys(xa).forEach((n) => {
      e.classList.remove(xa[n]);
    }),
      e.classList.add(xa[t]);
  },
  R0 = (e) => {
    const t = document.createElement("div");
    t.classList.add("nlux-comp-composer");
    const n = document.createElement("textarea");
    (n.placeholder = e.placeholder ?? ""),
      (n.value = e.message ?? ""),
      e.autoFocus && (n.autofocus = !0);
    const r = document.createElement("button");
    return (
      r.append(
        (() => {
          const o = document.createElement("div");
          o.classList.add("nlux-comp-sendIcon");
          const s = document.createElement("div");
          return (
            s.classList.add("nlux-comp-sendIcon-container"), o.appendChild(s), o
          );
        })()
      ),
      r.append(Sm()),
      t.append(n),
      t.append(r),
      Cm(t, e.status),
      (e.status !== "submitting-conversation-starter" &&
        e.status !== "submitting-prompt") ||
        ((n.disabled = !0), (r.disabled = !0)),
      e.status === "waiting" && (r.disabled = !0),
      e.status === "typing" &&
        (r.disabled = e.disableSubmitButton ?? n.value === ""),
      t
    );
  },
  hi = (e, t) => {
    let n = !1;
    const r = t ? e.querySelector(t) : e,
      o = r instanceof HTMLElement ? r : void 0;
    if (!o)
      throw new ci({
        source: "dom/listenTo",
        message: `Could not find element with query "${t}". Make sure the query provided matches an element that exists in the root element.`,
      });
    const s = new Map(),
      i = new Map(),
      a = () => {
        o &&
          (s.forEach((c, u) => {
            o.removeEventListener(u, c);
          }),
          s.clear(),
          i.clear());
      },
      l = {
        on: (c, u) => {
          if (!u || !o) return l;
          if (!s.has(c)) {
            const f = (d) => {
              var m;
              (m = i.get(c)) == null || m.forEach((g) => g(d));
            };
            s.set(c, f), o.addEventListener(c, f);
          }
          return i.has(c) || i.set(c, new Set()), i.get(c).add(u), l;
        },
        get: () => {
          if (n) throw new Error("listenTo().get() can only be used once!");
          return (n = !0), [o, a];
        },
      };
    return l;
  };
var _0 = Object.defineProperty,
  L0 = Object.getOwnPropertyDescriptor,
  Fr = (e, t, n, r) => {
    for (
      var o, s = r > 1 ? void 0 : r ? L0(t, n) : t, i = e.length - 1;
      i >= 0;
      i--
    )
      (o = e[i]) && (s = (r ? o(t, n, s) : o(s)) || s);
    return r && s && _0(t, n, s), s;
  };
let xn = class extends at {
  constructor(t, { props: n, eventListeners: r }) {
    super(t, n), (this.userEventListeners = r);
  }
  focusTextInput() {
    this.executeDomAction("focusTextInput");
  }
  handleCommandEnterKeyPressed(t) {
    var r;
    ((r = this.getProp("domCompProps")) == null ? void 0 : r.submitShortcut) ===
      "CommandEnter" &&
      (this.handleSendButtonClick(), t == null || t.preventDefault());
  }
  handleEnterKeyPressed(t) {
    var r;
    const n =
      (r = this.getProp("domCompProps")) == null ? void 0 : r.submitShortcut;
    (n && (n !== "Enter" || (t != null && t.isComposing))) ||
      (this.handleSendButtonClick(), t == null || t.preventDefault());
  }
  handleSendButtonClick() {
    var o;
    const t = this.getProp("domCompProps");
    if (
      (t != null && t.disableSubmitButton) ||
      !(t == null ? void 0 : t.message)
    )
      return;
    const r = (o = this.userEventListeners) == null ? void 0 : o.onSubmit;
    r && r();
  }
  handleTextChange(t) {
    var o;
    const n = (o = this.userEventListeners) == null ? void 0 : o.onTextUpdated;
    n && n(t);
    const r = this.getProp("domCompProps");
    this.setDomProps({ ...r, message: t });
  }
  handleTextInputUpdated(t) {
    const n = t.target;
    n instanceof HTMLTextAreaElement && this.handleTextChange(n.value);
  }
  setDomProps(t) {
    this.setProp("domCompProps", t);
  }
};
Fr(
  [vt("command-enter-key-pressed")],
  xn.prototype,
  "handleCommandEnterKeyPressed",
  1
),
  Fr([vt("enter-key-pressed")], xn.prototype, "handleEnterKeyPressed", 1),
  Fr([vt("send-message-clicked")], xn.prototype, "handleSendButtonClick", 1),
  Fr([vt("text-updated")], xn.prototype, "handleTextInputUpdated", 1),
  (xn = Fr(
    [
      pn(
        "composer",
        ({ appendToRoot: e, props: t, compEvent: n }) => {
          const r = R0(t.domCompProps);
          e(r);
          const [o, s] = hi(r, ":scope > textarea")
              .on("input", n("text-updated"))
              .on("keydown", (u) => {
                const f = u.key === "Enter" && !u.isComposing,
                  d = u.altKey || u.ctrlKey || u.metaKey || u.shiftKey;
                if (f && !d) return void n("enter-key-pressed")(u);
                const m = u.getModifierState("Meta") && u.key === "Enter",
                  g = u.getModifierState("Control") && u.key === "Enter";
                (m || g) && n("command-enter-key-pressed")(u);
              })
              .get(),
            [i, a] = hi(r, ":scope > button")
              .on("click", n("send-message-clicked"))
              .get();
          if (!(i instanceof HTMLButtonElement))
            throw new Error("Expected a button element");
          if (!(o instanceof HTMLTextAreaElement))
            throw new ci({
              source: ((l = "composer"), (c = "render"), `#${l}/${c}`),
              message: "Expected a textarea element",
            });
          var l, c;
          return {
            elements: { root: r, textInput: o, sendButton: i },
            actions: {
              focusTextInput: () =>
                bt(() => {
                  o.focus(),
                    o.setSelectionRange(o.value.length, o.value.length);
                }),
            },
            onDestroy: () => {
              s(), a();
            },
          };
        },
        ({ propName: e, currentValue: t, newValue: n, dom: r }) => {
          var o;
          e === "domCompProps" &&
            (o = r.elements) != null &&
            o.root &&
            ((s, i, a) => {
              if (
                i.status === a.status &&
                i.message === a.message &&
                i.placeholder === a.placeholder &&
                i.autoFocus === a.autoFocus &&
                i.disableSubmitButton === a.disableSubmitButton
              )
                return;
              if (i.status !== a.status)
                return (
                  Cm(s, a.status),
                  void ((c, u, f) => {
                    if (u.status === f.status) return;
                    const d = c.querySelector("* > textarea");
                    (f.status !== "typing" && f.status !== "waiting") ||
                    !d.disabled
                      ? (f.status !== "submitting-prompt" &&
                          f.status !== "submitting-conversation-starter") ||
                        d.disabled ||
                        (d.disabled = !0)
                      : (d.disabled = !1);
                    const m = c.querySelector("* > button");
                    if (f.status === "typing") {
                      const g =
                        (u.disableSubmitButton !== f.disableSubmitButton
                          ? f.disableSubmitButton
                          : u.disableSubmitButton) ?? d.value === "";
                      m.disabled !== g && (m.disabled = g);
                    } else
                      (f.status !== "waiting" &&
                        f.status !== "submitting-prompt" &&
                        f.status !== "submitting-conversation-starter") ||
                        m.disabled ||
                        (m.disabled = !0);
                    u.placeholder !== f.placeholder &&
                      (d.placeholder = f.placeholder ?? ""),
                      u.message !== f.message && (d.value = f.message ?? ""),
                      u.autoFocus !== f.autoFocus &&
                        (d.autofocus = f.autoFocus ?? !1);
                  })(s, i, a)
                );
              const l = s.querySelector("* > textarea");
              if (
                (i.placeholder !== a.placeholder &&
                  (l.placeholder = a.placeholder ?? ""),
                i.autoFocus !== a.autoFocus &&
                  (l.autofocus = a.autoFocus ?? !1),
                i.message !== a.message && (l.value = a.message ?? ""),
                i.status === "typing")
              ) {
                const c = s.querySelector("* > button"),
                  u =
                    (i.disableSubmitButton !== a.disableSubmitButton
                      ? a.disableSubmitButton
                      : i.disableSubmitButton) ?? l.value === "";
                c.disabled !== u && (c.disabled = u);
              }
            })(r.elements.root, t, n);
        }
      ),
    ],
    xn
  ));
const Dl = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = e;
    return (
      (typeof t.streamText == "function" || typeof t.batchText == "function") &&
      ["stream", "batch"].includes(t.dataTransferMode) &&
      typeof t.id == "string" &&
      typeof t.info == "object" &&
      t.info !== null &&
      typeof t.preProcessAiBatchedMessage == "function" &&
      typeof t.preProcessAiStreamedChunk == "function"
    );
  },
  Se = (e, t = 1) => {
    setTimeout(() => {
      e();
    }, t);
  },
  B0 = (e, t, n, r, o, s, i, a, l) =>
    new Promise((c) => {
      const u = mt(),
        f = [],
        d = [];
      let m = !1,
        g = !1,
        p = !1;
      const w = Dl(n),
        v = {
          next: (h) => {
            if (g || p) return;
            let y, k;
            if (w) {
              const x = h,
                S = n.preProcessAiStreamedChunk(x, r);
              S != null && ((y = S), (k = x), f.push(y), d.push(k));
            } else (y = h), f.push(y);
            y != null
              ? (m ||
                  m ||
                  ((m = !0),
                  Se(() => {
                    o.forEach((x) => {
                      x({
                        uid: u,
                        status: "streaming",
                        time: new Date(),
                        participantRole: "assistant",
                        dataTransferMode: "stream",
                      });
                    });
                  })),
                Se(() => {
                  i.forEach((x) => {
                    x({ chunk: y, messageId: u, serverResponse: k });
                  });
                }))
              : $e(
                  "Adapter returned an undefined or null value from streamText. This chunk will be ignored."
                );
          },
          complete: () => {
            g ||
              p ||
              ((p = !0),
              Se(() => {
                const h = {
                  uid: u,
                  status: "complete",
                  content: f,
                  contentType: "text",
                  serverResponse: void 0,
                  time: new Date(),
                  participantRole: "assistant",
                  dataTransferMode: "stream",
                };
                s.forEach((y) => {
                  y(h);
                }),
                  c();
              }),
              Se(() => {
                const h = {
                  uid: e,
                  status: "complete",
                  items: [
                    t,
                    {
                      uid: u,
                      status: "complete",
                      contentType: "text",
                      content: f,
                      serverResponse: d,
                      time: new Date(),
                      participantRole: "assistant",
                      dataTransferMode: "stream",
                    },
                  ],
                };
                a.forEach((y) => {
                  y(h);
                });
              }));
          },
          error: (h) => {
            g ||
              p ||
              ((g = !0),
              Se(() => {
                l.forEach((y) => {
                  y("failed-to-stream-content", h);
                }),
                  c();
              }));
          },
        };
      n.streamText(t.content, v, r);
    }),
  O0 = (e, t, n) => {
    if (!e)
      return (() => {
        const h = new Set(),
          y = mt(),
          k = { uid: y, status: "complete", items: [] };
        return (
          Se(() => {
            h.forEach((x) => {
              x(k);
            }),
              h.clear();
          }),
          {
            segment: k,
            observable: {
              on: (x, S) => {
                x === "complete" && h.add(S);
              },
              removeListener: (x, S) => {
                h.delete(S);
              },
              destroy: () => {
                h.clear();
              },
              get segmentId() {
                return y;
              },
            },
            dataTransferMode: "batch",
          }
        );
      })();
    const r = t;
    if (
      r.streamText === void 0 &&
      r.batchText === void 0 &&
      r.streamServerComponent === void 0
    )
      return ((h) => {
        const y = new Set(),
          k = mt(),
          x = { uid: k, status: "error", items: [] };
        return (
          Se(() => {
            y.forEach((S) => S(h)), y.clear();
          }),
          {
            segment: x,
            dataTransferMode: "stream",
            observable: {
              on: (S, b) => {
                S === "error" && y.add(b);
              },
              removeListener: (S, b) => {
                y.delete(b);
              },
              destroy: () => {
                y.clear();
              },
              get segmentId() {
                return k;
              },
            },
          }
        );
      })("no-data-transfer-mode-supported");
    const o = mt(),
      s = ((h) => ({
        uid: mt(),
        time: new Date(),
        status: "complete",
        participantRole: "user",
        content: h,
        contentType: "text",
      }))(e);
    let i,
      a,
      l,
      c,
      u,
      f,
      d = new Set(),
      m = new Set(),
      g = new Set();
    Se(() => {
      d != null &&
        d.size &&
        (d.forEach((h) => {
          h(s);
        }),
        d.clear(),
        (d = void 0));
    });
    const p = ((h) => {
      const y = [],
        k = h,
        x = h;
      ((k == null ? void 0 : k.streamText) === void 0 &&
        (x == null ? void 0 : x.streamServerComponent) === void 0) ||
        y.push("stream"),
        (k == null ? void 0 : k.batchText) !== void 0 && y.push("batch");
      const S = Dl(h) ? h : void 0,
        b = (S == null ? void 0 : S.dataTransferMode) ?? void 0,
        C = y.length === 1 ? y[0] : "stream";
      return b ?? C;
    })(t);
    ((h) => ("streamServerComponent" in h ? "server-component" : "text"))(t) ===
    "server-component"
      ? ((l = new Set()),
        (a = new Set()),
        ((h, y, k, x, S, b, C, I) =>
          new Promise((P, D) => {
            try {
              const B = y.content,
                z = mt(),
                j = "assistant",
                W = "streaming",
                fe = new Date(),
                G = "stream";
              let R, L;
              const O = () => {
                  Se(() => {
                    b.forEach((K) => {
                      R && L && K({ ...R, content: L, status: "complete" });
                    });
                  }, 20);
                  const H = { uid: h, status: "complete", items: [y, R] };
                  Se(() => {
                    C.forEach((K) => {
                      K(H);
                    }),
                      P();
                  }, 20);
                },
                N = () => {
                  I.forEach((H) => {
                    H(
                      "failed-to-stream-server-component",
                      new Error("Failed to load content")
                    );
                  });
                };
              (L = k.streamServerComponent(B, x, {
                onServerComponentReceived: O,
                onError: N,
              })),
                (R = {
                  uid: z,
                  content: L,
                  contentType: "server-component",
                  participantRole: j,
                  status: W,
                  time: fe,
                  dataTransferMode: G,
                }),
                Se(() => {
                  S.forEach((H) => {
                    H(R);
                  });
                }, 10);
            } catch (B) {
              $e(B);
              const z =
                B instanceof Error
                  ? B
                  : typeof B == "string"
                  ? new Error(B)
                  : new Error("Unknown error");
              Se(() => {
                I.forEach((j) => j("failed-to-load-content", z));
              });
            }
          }))(o, s, t, n, a, l, m, g).finally(() => {
          Se(() => v());
        }))
      : p === "batch"
      ? ((i = new Set()),
        (async (h, y, k, x, S, b, C) => {
          try {
            const I = y.content,
              P = Dl(k) ? k : void 0,
              D = P !== void 0,
              B = mt(),
              z = "assistant",
              j = "complete",
              W = new Date(),
              fe = "batch";
            let G;
            if (D) {
              const O = await P.batchText(I, x),
                N = P.preProcessAiBatchedMessage(O, x);
              N != null &&
                (G = {
                  uid: B,
                  content: N,
                  contentType: "text",
                  serverResponse: O,
                  participantRole: z,
                  status: j,
                  time: W,
                  dataTransferMode: fe,
                });
            } else
              G = {
                uid: B,
                content: await k.batchText(I, x),
                contentType: "text",
                serverResponse: void 0,
                participantRole: z,
                status: j,
                time: W,
                dataTransferMode: fe,
              };
            if (!G)
              throw new Error(
                "Response from adapter was undefined or cannot be processed"
              );
            const R = G;
            Se(() => {
              S.forEach((O) => {
                O(R);
              });
            });
            const L = { uid: h, status: "complete", items: [y, G] };
            Se(() => {
              b.forEach((O) => {
                O(L);
              });
            });
          } catch (I) {
            $e(I);
            const P =
              I instanceof Error
                ? I
                : typeof I == "string"
                ? new Error(I)
                : new Error("Unknown error");
            Se(() => {
              C.forEach((D) => D("failed-to-load-content", P));
            });
          }
        })(o, s, t, n, i, m, g).finally(() => {
          Se(() => v());
        }))
      : ((c = new Set()),
        (u = new Set()),
        (f = new Set()),
        B0(o, s, t, n, c, u, f, m, g).finally(() => {
          Se(() => v());
        }));
    const v = () => {
      d == null || d.clear(),
        (d = void 0),
        i == null || i.clear(),
        (i = void 0),
        a == null || a.clear(),
        (a = void 0),
        l == null || l.clear(),
        (l = void 0),
        c == null || c.clear(),
        (c = void 0),
        u == null || u.clear(),
        (u = void 0),
        f == null || f.clear(),
        (f = void 0),
        m == null || m.clear(),
        (m = void 0),
        g == null || g.clear(),
        (g = void 0);
    };
    return {
      segment: { status: "active", uid: o, items: [] },
      dataTransferMode: p,
      observable: {
        get segmentId() {
          return o;
        },
        on: (h, y) => {
          h === "userMessageReceived" && d
            ? d.add(y)
            : h === "aiMessageReceived" && i
            ? i.add(y)
            : h === "aiServerComponentStreamStarted" && a
            ? a.add(y)
            : h === "aiServerComponentStreamed" && l
            ? l.add(y)
            : h === "aiMessageStreamStarted" && c
            ? c.add(y)
            : h === "aiMessageStreamed" && u
            ? u.add(y)
            : h === "aiChunkReceived" && f
            ? f.add(y)
            : h === "complete" && m
            ? m.add(y)
            : h === "error" && g && g.add(y);
        },
        removeListener: (h, y) => {
          h !== "userMessageReceived"
            ? h !== "aiMessageReceived"
              ? h !== "aiMessageStreamStarted"
                ? h !== "aiMessageStreamed"
                  ? h !== "aiChunkReceived"
                    ? h !== "complete"
                      ? h !== "error" || g == null || g.delete(y)
                      : m == null || m.delete(y)
                    : f == null || f.delete(y)
                  : u == null || u.delete(y)
                : c == null || c.delete(y)
              : i == null || i.delete(y)
            : d == null || d.delete(y);
        },
        destroy: () => v(),
      },
    };
  },
  M0 = {
    "data-transfer-mode-not-supported":
      "Requested data transfer mode is not supported",
    "no-data-transfer-mode-supported":
      "Adapter does not support any valid data transfer modes",
    "connection-error": "Connection error",
    "invalid-credentials": "Invalid credentials",
    "invalid-api-key": "Invalid API key",
    "http-server-side-error": "HTTP server side error",
    "http-client-side-error": "HTTP client side error",
    "failed-to-load-content": "Failed to load content",
    "failed-to-stream-content": "Failed to stream content",
    "failed-to-stream-server-component": "Failed to stream server component",
    "failed-to-render-content": "Failed to display content",
  },
  jl = (e, t) =>
    (e !== void 0 && e.length > 0) || (t !== void 0 && t > 0)
      ? "active"
      : "starting",
  Dd = "nlux-comp-welcomeMessage-text",
  Em = (e, t) => {
    const n = e.querySelector(`.${Dd}`);
    if (t !== "" && t !== void 0)
      if (n) n.textContent = t;
      else {
        const r = document.createElement("div");
        r.classList.add(Dd), (r.textContent = t), e.appendChild(r);
      }
    else n == null || n.remove();
  },
  bm = "nlux-comp-welcomeMessage-personaName",
  Nl = (e) => {
    const t = document.createElement("div");
    t.classList.add("nlux-comp-welcomeMessage");
    const n = Vu({ name: e.name, avatar: e.avatar });
    t.append(n);
    const r = document.createElement("div"),
      o = document.createTextNode(e.name);
    return r.append(o), r.classList.add(bm), t.append(r), Em(t, e.message), t;
  },
  jd = () =>
    Nl({
      name: "",
      avatar:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC",
    });
var z0 = Object.defineProperty,
  $0 = Object.getOwnPropertyDescriptor,
  Nd = (e, t, n, r) => {
    for (
      var o, s = r > 1 ? void 0 : r ? $0(t, n) : t, i = e.length - 1;
      i >= 0;
      i--
    )
      (o = e[i]) && (s = (r ? o(t, n, s) : o(s)) || s);
    return r && s && z0(t, n, s), s;
  };
let js = class extends at {
  constructor(e, t) {
    super(e, t), (this.updateConversationStarters = (n) => {});
  }
  conversationStarterClicked(e) {
    this.getProp("onConversationStarterSelected")(e);
  }
};
Nd(
  [vt("conversation-starter-selected")],
  js.prototype,
  "conversationStarterClicked",
  1
),
  (js = Nd(
    [
      pn(
        "conversationStarters",
        ({ appendToRoot: e, props: t, compEvent: n }) => {
          const r = ((s) => {
            const i = document.createElement("div");
            return (
              i.classList.add("nlux-comp-conversationStarters"),
              s.forEach((a, l) => {
                const c = document.createElement("button");
                c.classList.add("nlux-comp-conversationStarter");
                let u = document.createElement("div");
                a.icon &&
                  (typeof a.icon == "string"
                    ? ((u = document.createElement("img")),
                      u.setAttribute("src", a.icon),
                      u.setAttribute("width", "16px"))
                    : ((u.className =
                        "nlux-comp-conversationStarter-icon-container"),
                      u.appendChild(a.icon)));
                const f = document.createElement("span");
                f.classList.add("nlux-comp-conversationStarter-prompt"),
                  (f.textContent = a.label ?? a.prompt),
                  c.appendChild(u),
                  c.appendChild(f),
                  i.appendChild(c);
              }),
              i
            );
          })(t.conversationStarters);
          e(r);
          let o = [];
          return (
            t.conversationStarters.forEach((s, i) => {
              const [a, l] = hi(r, `:scope > :nth-child(${i + 1})`)
                .on("click", () => {
                  n("conversation-starter-selected")(s);
                })
                .get();
              o.push(l);
            }),
            {
              elements: {},
              actions: {},
              onDestroy: () => {
                o.forEach((s) => s()), (o = []), r.remove();
              },
            }
          );
        },
        ({}) => {}
      ),
    ],
    js
  ));
let Hl = class extends at {
  constructor(e, t) {
    super(e, t), this.setConversationStarters(t.conversationStarters);
  }
  setConversationStarters(e) {
    var t;
    if (e || this.conversationStartersComp) {
      if (e && !this.conversationStartersComp) {
        const n = this.getProp("onConversationStarterSelected");
        return (
          (this.conversationStartersComp = fr(js)
            .withContext(this.context)
            .withProps({
              conversationStarters: e,
              onConversationStarterSelected: n,
            })
            .create()),
          void this.addSubComponent(
            this.conversationStartersComp.id,
            this.conversationStartersComp,
            "conversationStartersContainer"
          )
        );
      }
      !e && this.conversationStartersComp
        ? (this.removeSubComponent(this.conversationStartersComp.id),
          (this.conversationStartersComp = void 0))
        : (t = this.conversationStartersComp) == null ||
          t.updateConversationStarters(e);
    }
  }
  setShowGreeting(e) {
    this.setProp("showGreeting", e), this.executeDomAction("resetGreeting", e);
  }
  setAssistantPersona(e) {
    this.setProp("assistantPersona", e),
      this.executeDomAction("updateAssistantPersona", e);
  }
  resetConversationStarters() {
    const e = this.getProp("conversationStarters");
    this.setConversationStarters(e);
  }
};
Hl = ((e, t, n, r) => {
  for (var o, s = t, i = e.length - 1; i >= 0; i--)
    (o = e[i]) && (s = o(s) || s);
  return s;
})(
  [
    pn(
      "launchPad",
      ({ appendToRoot: e, props: t }) => {
        const n = {
          assistantPersona: t.assistantPersona,
          conversationStarters: t.conversationStarters,
          showGreeting: t.showGreeting !== !1,
        };
        let r;
        if (n.showGreeting)
          if (t.assistantPersona) {
            const i = t.assistantPersona;
            r = Nl({ name: i.name, avatar: i.avatar, message: i.tagline });
          } else r = jd();
        r && (e(r), (n.greetingElement = r));
        const o = document.createElement("div");
        o.classList.add("nlux-conversationStarters-container"), e(o);
        const s = (i = !0) => {
          (n.showGreeting = i),
            n.greetingElement &&
              (n.greetingElement.remove(), (n.greetingElement = void 0)),
            i &&
              ((n.greetingElement = n.assistantPersona
                ? Nl({
                    name: n.assistantPersona.name,
                    avatar: n.assistantPersona.avatar,
                    message: n.assistantPersona.tagline,
                  })
                : jd()),
              n.greetingElement &&
                o.insertAdjacentElement("beforebegin", n.greetingElement));
        };
        return {
          elements: { conversationStartersContainer: o },
          actions: {
            resetGreeting: (i = !0) => {
              s(i);
            },
            updateAssistantPersona: (i) => {
              const a = n.assistantPersona;
              (n.assistantPersona = i),
                (a || i) &&
                  n.showGreeting &&
                  (i && a
                    ? ((l, c, u) => {
                        if (
                          c.message !== u.message ||
                          c.name !== u.name ||
                          c.avatar !== u.avatar
                        ) {
                          if (
                            (c.message !== u.message && Em(l, u.message),
                            c.name !== u.name)
                          ) {
                            const f = l.querySelector(`.${bm}`);
                            if (f) {
                              const d = document.createTextNode(u.name);
                              f.replaceChildren(d);
                            }
                          }
                          if (c.avatar !== u.avatar || c.name !== u.name) {
                            const f = l.querySelector(`.${Yu}`);
                            f &&
                              xm(
                                f,
                                { name: c.name, avatar: c.avatar },
                                { name: u.name, avatar: u.avatar }
                              );
                          }
                        }
                      })(
                        n.greetingElement,
                        {
                          name: a == null ? void 0 : a.name,
                          avatar: a == null ? void 0 : a.avatar,
                          message: a == null ? void 0 : a.tagline,
                        },
                        { name: i.name, avatar: i.avatar, message: i.tagline }
                      )
                    : s());
            },
          },
          onDestroy: () => {
            var i;
            (i = n.greetingElement) == null || i.remove(), o.remove();
          },
        };
      },
      ({}) => {}
    ),
  ],
  Hl
);
var D0 = Object.defineProperty,
  j0 = Object.getOwnPropertyDescriptor,
  Sa = (e, t, n, r) => {
    for (
      var o, s = r > 1 ? void 0 : r ? j0(t, n) : t, i = e.length - 1;
      i >= 0;
      i--
    )
      (o = e[i]) && (s = (r ? o(t, n, s) : o(s)) || s);
    return r && s && D0(t, n, s), s;
  };
let vs = class extends at {
  constructor(
    e,
    {
      conversationLayout: t,
      autoScroll: n,
      streamingAnimationSpeed: r,
      visible: o = !0,
      composer: s,
      assistantPersona: i,
      userPersona: a,
      showGreeting: l,
      conversationStarters: c,
      initialConversationContent: u,
      syntaxHighlighter: f,
      htmlSanitizer: d,
      markdownLinkTarget: m,
      showCodeBlockCopyButton: g,
      skipStreamingAnimation: p,
    }
  ) {
    if (
      (super(e, {
        conversationLayout: t,
        visible: o,
        autoScroll: n,
        streamingAnimationSpeed: r,
        assistantPersona: i,
        userPersona: a,
        conversationStarters: c,
        showGreeting: l,
        initialConversationContent: u,
        composer: s,
        syntaxHighlighter: f,
        htmlSanitizer: d,
        markdownLinkTarget: m,
        showCodeBlockCopyButton: g,
        skipStreamingAnimation: p,
      }),
      (this.prompt = ""),
      (this.handleConversationStarterClick = (w) => {
        this.composer.setDomProps({
          status: "submitting-conversation-starter",
        }),
          this.composer.handleTextChange(w.prompt),
          this.composer.handleSendButtonClick();
      }),
      (this.handleSegmentCountChange = (w) => {
        var h, y;
        if (this.segmentCount === w) return;
        this.segmentCount = w;
        const v = jl(
          this.getProp("initialConversationContent") || void 0,
          this.segmentCount
        );
        this.chatRoomStatus !== v &&
          ((this.chatRoomStatus = v),
          this.executeDomAction("updateChatRoomStatus", this.chatRoomStatus),
          this.chatRoomStatus === "active"
            ? (h = this.launchPad) != null &&
              h.id &&
              (this.removeSubComponent(
                (y = this.launchPad) == null ? void 0 : y.id
              ),
              (this.launchPad = void 0))
            : this.addLaunchPad(
                this.getProp("showGreeting") ?? !0,
                this.getProp("assistantPersona"),
                this.getProp("conversationStarters"),
                this.handleConversationStarterClick
              ));
      }),
      (this.segmentCount = u && u.length > 0 ? 1 : 0),
      (this.chatRoomStatus = jl(u, this.segmentCount)),
      this.chatRoomStatus === "starting" &&
        this.addLaunchPad(l, i, c, this.handleConversationStarterClick),
      this.addConversation(i, a, u),
      this.addComposer(
        s == null ? void 0 : s.placeholder,
        s == null ? void 0 : s.autoFocus,
        s == null ? void 0 : s.disableSubmitButton,
        s == null ? void 0 : s.submitShortcut
      ),
      !this.conversation || !this.composer)
    )
      throw new Error(
        "Chat room not initialized â€” An error occurred while initializing key components."
      );
  }
  getConversationContentForAdapter(e = "max") {
    return this.conversation.getConversationContentForAdapter(e);
  }
  hide() {
    this.setProp("visible", !1);
  }
  messagesContainerClicked() {
    var e;
    (e = this.composer) == null || e.focusTextInput();
  }
  onChatRoomReady() {
    bt(() => {
      var t, n;
      const e =
        (n = (t = this.renderedDom) == null ? void 0 : t.elements) == null
          ? void 0
          : n.conversationContainer;
      if (e instanceof HTMLElement) {
        this.autoScrollController = b0(e, this.getProp("autoScroll") ?? !0);
        let r = 0;
        const o = 20,
          s = () => {
            e.scrollHeight > e.clientHeight &&
              (e.scrollTo({ behavior: "smooth", top: 5e4 }), clearInterval(i));
          },
          i = setInterval(() => {
            r >= o ? clearInterval(i) : (s(), r++);
          }, 10);
      }
      this.context.emit("ready", { aiChatProps: T0(this.context.aiChatProps) });
    });
  }
  setProps(e) {
    var t, n, r, o, s, i, a;
    if (e.hasOwnProperty("autoScroll")) {
      const l = e.autoScroll;
      (t = this.autoScrollController) == null ||
        t.updateProps({ autoScroll: l });
    }
    if (
      (e.hasOwnProperty("conversationLayout") &&
        ((n = this.conversation) == null ||
          n.setConversationLayout(e.conversationLayout)),
      e.hasOwnProperty("syntaxHighlighter") &&
        this.setProp("syntaxHighlighter", e.syntaxHighlighter),
      e.hasOwnProperty("htmlSanitizer") &&
        this.setProp("htmlSanitizer", e.htmlSanitizer),
      e.hasOwnProperty("markdownLinkTarget") &&
        this.setProp("markdownLinkTarget", e.markdownLinkTarget),
      e.hasOwnProperty("skipStreamingAnimation") &&
        this.setProp("skipStreamingAnimation", e.skipStreamingAnimation),
      e.hasOwnProperty("streamingAnimationSpeed") &&
        this.setProp("streamingAnimationSpeed", e.streamingAnimationSpeed),
      e.hasOwnProperty("assistantPersona") &&
        ((r = this.conversation) == null ||
          r.setAssistantPersona(e.assistantPersona ?? void 0),
        (o = this.launchPad) == null ||
          o.setAssistantPersona(e.assistantPersona ?? void 0)),
      e.hasOwnProperty("userPersona") &&
        ((s = this.conversation) == null ||
          s.setUserPersona(e.userPersona ?? void 0)),
      e.hasOwnProperty("showGreeting") &&
        ((i = this.launchPad) == null ||
          i.setShowGreeting(e.showGreeting ?? !0)),
      e.hasOwnProperty("conversationStarters") &&
        ((a = this.launchPad) == null ||
          a.setConversationStarters(e.conversationStarters)),
      e.hasOwnProperty("composer") && this.composer)
    ) {
      const l = { ...this.composer.getProp("domCompProps"), ...e.composer };
      this.composer.setDomProps(l);
    }
  }
  show() {
    this.setProp("visible", !0);
  }
  setProp(e, t) {
    if (
      (super.setProp(e, t),
      e === "markdownLinkTarget" ||
        e === "syntaxHighlighter" ||
        e === "htmlSanitizer" ||
        e === "skipStreamingAnimation" ||
        e === "streamingAnimationSpeed")
    ) {
      const n = e,
        r = t;
      this.conversation.updateMarkdownStreamRenderer(n, r);
    }
  }
  addLaunchPad(e, t, n, r) {
    (this.launchPad = fr(Hl)
      .withContext(this.context)
      .withProps({
        showGreeting: e,
        assistantPersona: t,
        conversationStarters: n,
        onConversationStarterSelected: r,
      })
      .create()),
      this.addSubComponent(
        this.launchPad.id,
        this.launchPad,
        "launchPadContainer"
      );
  }
  addConversation(e, t, n) {
    (this.conversation = fr($l)
      .withContext(this.context)
      .withProps({
        assistantPersona: e,
        userPersona: t,
        messages: n,
        conversationLayout: this.getProp("conversationLayout"),
        markdownLinkTarget: this.getProp("markdownLinkTarget"),
        showCodeBlockCopyButton: this.getProp("showCodeBlockCopyButton"),
        skipStreamingAnimation: this.getProp("skipStreamingAnimation"),
        streamingAnimationSpeed: this.getProp("streamingAnimationSpeed"),
        syntaxHighlighter: this.getProp("syntaxHighlighter"),
        htmlSanitizer: this.getProp("htmlSanitizer"),
        onSegmentCountChange: this.handleSegmentCountChange,
      })
      .create()),
      this.addSubComponent(
        this.conversation.id,
        this.conversation,
        "conversationContainer"
      );
  }
  addComposer(e, t, n, r) {
    (this.composer = fr(xn)
      .withContext(this.context)
      .withProps({
        props: {
          domCompProps: {
            status: "typing",
            placeholder: e,
            autoFocus: t,
            disableSubmitButton: n,
            submitShortcut: r,
          },
        },
        eventListeners: {
          onTextUpdated: (o) => this.handleComposerTextChange(o),
          onSubmit: () => this.handleComposerSubmit(),
        },
      })
      .create()),
      this.addSubComponent(
        this.composer.id,
        this.composer,
        "composerContainer"
      );
  }
  handleComposerSubmit() {
    const e = this.props.composer;
    (
      ({
        context: t,
        composerInstance: n,
        conversation: r,
        autoScrollController: o,
        messageToSend: s,
        resetComposer: i,
        setComposerAsWaiting: a,
      }) =>
      () => {
        var c, u;
        const l = r.addChatSegment();
        try {
          const f = n.getProp("domCompProps");
          n.setDomProps({ ...f, status: "submitting-prompt" });
          const d = {
              aiChatProps: t.aiChatProps,
              conversationHistory: r.getConversationContentForAdapter(
                (u =
                  (c = t.aiChatProps) == null
                    ? void 0
                    : c.conversationOptions) == null
                  ? void 0
                  : u.historyPayloadSize
              ),
            },
            m = O0(s, t.adapter, d);
          m.observable.on("error", (g, p) => {
            r.removeChatSegment(l),
              o == null || o.handleChatSegmentRemoved(l),
              i(!1),
              t.exception(g),
              t.emit("error", { errorId: g, message: M0[g], errorObject: p });
          }),
            m.observable.on("userMessageReceived", (g) => {
              r.addChatItem(l, g),
                t.emit("messageSent", { uid: g.uid, message: g.content }),
                bt(() => {
                  if (o) {
                    const p = r.getChatSegmentContainer(l);
                    p && o.handleNewChatSegmentAdded(l, p);
                  }
                });
            }),
            m.dataTransferMode === "batch"
              ? m.observable.on("aiMessageReceived", (g) => {
                  const p = typeof g.content == "string",
                    w = { ...g, content: p ? "" : g.content };
                  r.addChatItem(l, w),
                    p && r.addChunk(l, w.uid, g.content, g.serverResponse),
                    r.completeChatSegment(l),
                    t.emit("messageReceived", {
                      uid: g.uid,
                      message: g.content,
                    }),
                    i(!0);
                })
              : (m.observable.on("aiMessageStreamStarted", (g) => {
                  r.addChatItem(l, g),
                    a(),
                    t.emit("messageStreamStarted", { uid: g.uid });
                }),
                m.observable.on("aiChunkReceived", (g) => {
                  const { messageId: p, chunk: w, serverResponse: v } = g;
                  r.addChunk(l, p, w, v);
                }),
                m.observable.on("aiMessageStreamed", (g) => {
                  g.status === "complete" &&
                    t.emit("messageReceived", {
                      uid: g.uid,
                      message: g.content,
                    });
                }),
                m.observable.on("aiServerComponentStreamStarted", (g) => {
                  r.addChatItem(l, g),
                    a(),
                    t.emit("messageStreamStarted", { uid: g.uid });
                }),
                m.observable.on("aiServerComponentStreamed", (g) => {
                  g.status === "complete" &&
                    t.emit("messageReceived", {
                      uid: g.uid,
                      message: g.content,
                    });
                }),
                m.observable.on("complete", () => {
                  r.completeChatSegment(l), i(!1);
                }));
        } catch (f) {
          $e(f), i(!1);
        }
      }
    )({
      context: this.context,
      composerInstance: this.composer,
      conversation: this.conversation,
      messageToSend: this.prompt,
      autoScrollController: this.autoScrollController,
      resetComposer: (t) => {
        this.destroyed ||
          this.resetComposer(t, e == null ? void 0 : e.autoFocus);
      },
      setComposerAsWaiting: () => {
        this.destroyed || this.composer.setDomProps({ status: "waiting" });
      },
    })();
  }
  handleComposerTextChange(e) {
    this.prompt = e;
  }
  resetComposer(e = !1, t = !1) {
    if (!this.composer) return;
    const n = { ...this.composer.getProp("domCompProps"), status: "typing" };
    e && (n.message = ""),
      this.composer.setDomProps(n),
      t && this.composer.focusTextInput();
  }
};
Sa(
  [vt("conversation-container-clicked")],
  vs.prototype,
  "messagesContainerClicked",
  1
),
  Sa([vt("chat-room-ready")], vs.prototype, "onChatRoomReady", 1),
  (vs = Sa(
    [
      pn(
        "chatRoom",
        ({ appendToRoot: e, compEvent: t, props: n }) => {
          const r = document.createElement("div");
          r.classList.add("nlux-conversation-container");
          const o = document.createElement("div");
          o.classList.add("nlux-composer-container");
          const s = document.createElement("div");
          s.classList.add("nlux-launchPad-container");
          const i = document.createDocumentFragment();
          i.appendChild(s), i.appendChild(r), i.appendChild(o);
          const a = n.visible ?? !0,
            l = document.createElement("div"),
            c = (d) => {
              l.classList.remove("nlux-chatRoom-starting"),
                l.classList.remove("nlux-chatRoom-active"),
                l.classList.add(`nlux-chatRoom-${d}`);
            };
          l.classList.add("nlux-chatRoom-container"),
            c(jl(n.initialConversationContent)),
            l.append(i),
            (l.style.display = a ? "" : "none");
          const [u, f] = hi(l, ":scope > .nlux-conversation-container")
            .on("click", t("conversation-container-clicked"))
            .get();
          return (
            e(l),
            t("chat-room-ready")(),
            {
              elements: {
                composerContainer: o,
                conversationContainer: r,
                launchPadContainer: s,
              },
              actions: {
                updateChatRoomStatus: (d) => {
                  c(d);
                },
              },
              onDestroy: () => {
                f();
              },
            }
          );
        },
        ({ propName: e, newValue: t, dom: { elements: n } }) => {}
      ),
    ],
    vs
  ));
const N0 = (e) => {
  const t = new Set();
  let n = !1,
    r = null,
    o = null;
  const s = () => {
      if (n || t.size === 0) return;
      n = !0;
      const a = t.values().next().value;
      t.delete(a),
        (r = (({ message: l }) => {
          const c = document.createElement("div");
          c.classList.add("nlux-comp-exceptionItem");
          const u = document.createElement("span");
          return (
            u.classList.add("nlux-comp-exp_itm_msg"),
            u.append(document.createTextNode(l)),
            c.append(u),
            c
          );
        })(a)),
        e.append(r),
        (o = setTimeout(i, 3e3));
    },
    i = () => {
      r == null || r.classList.add("nlux-comp-exceptionItem--hiding"),
        (o = setTimeout(() => {
          (n = !1), r == null || r.remove(), (r = null), s();
        }, 500));
    };
  return {
    displayException: (a) => {
      t.add({ message: a }), n || s();
    },
    destroy: () => {
      t.clear(), r == null || r.remove(), o && clearTimeout(o);
    },
  };
};
let Hd = class extends at {
  constructor(e, t) {
    super(e, t);
  }
  destroy() {
    super.destroy();
  }
  showAlert(e, t) {
    this.executeDomAction("displayException", t);
  }
};
Hd = ((e, t, n, r) => {
  for (var o, s = t, i = e.length - 1; i >= 0; i--)
    (o = e[i]) && (s = o(s) || s);
  return s;
})(
  [
    pn(
      "exceptionsBox",
      ({ props: e, appendToRoot: t }) => {
        const n = (() => {
          const o = document.createElement("div");
          return o.classList.add("nlux-comp-exceptionBox"), o;
        })();
        t(n);
        let r = N0(n);
        return {
          elements: { root: n },
          actions: {
            displayException: (o) => {
              r == null || r.displayException(o);
            },
          },
          onDestroy: () => {
            r == null || r.destroy(), n.remove(), (r = void 0);
          },
        };
      },
      () => {}
    ),
  ],
  Hd
);
const H0 = (e) => {
    const t = new Set();
    let n = !1,
      r = null,
      o = null;
    const s = () => {
        if (n || t.size === 0) return;
        n = !0;
        const a = t.values().next().value;
        t.delete(a),
          (r = (({ message: l }) => {
            const c = document.createElement("div");
            c.classList.add("nlux-comp-exceptionItem");
            const u = document.createElement("span");
            return (
              u.classList.add("nlux-comp-exp_itm_msg"),
              u.append(document.createTextNode(l)),
              c.append(u),
              c
            );
          })(a)),
          e.append(r),
          (o = setTimeout(i, 3e3));
      },
      i = () => {
        r == null || r.classList.add("nlux-comp-exceptionItem--hiding"),
          (o = setTimeout(() => {
            (n = !1), r == null || r.remove(), (r = null), s();
          }, 500));
      };
    return {
      displayException: (a) => {
        t.add({ message: a }), n || s();
      },
      destroy: () => {
        t.clear(), r == null || r.remove(), o && clearTimeout(o);
      },
    };
  },
  Lt = () =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
      const t = (16 * Math.random()) | 0;
      return (e == "x" ? t : (3 & t) | 8).toString(16);
    }),
  We = (e) => {
    typeof e != "string"
      ? e && typeof e.toString == "function"
        ? console.warn(`[nlux] ${e.toString()}`)
        : console.warn("[nlux]")
      : console.warn(`[nlux] ${e}`);
  },
  Fd = [],
  Bo = (e) => {
    Fd.includes(e) || (Fd.push(e), We(e));
  },
  F0 = (e) => {
    const t = "nlux-chatSegment";
    return e === "complete"
      ? `${t} nlux-chatSegment--complete`
      : e === "error"
      ? `${t} nlux-chatSegment--error`
      : `${t} nlux-chatSegment--active`;
  },
  Fl = { received: "nlux_msg_received", sent: "nlux_msg_sent" },
  Ul = { streaming: "nlux_msg_streaming", complete: "nlux_msg_complete" },
  Ud = (e) => {
    if (
      !(e instanceof HTMLButtonElement) ||
      e.dataset.clickListenerSet === "true"
    )
      return;
    let t = !1;
    const n = e.nextElementSibling;
    e.addEventListener("click", () => {
      if (t || !n) return;
      const r = n.innerText;
      navigator.clipboard.writeText(r ?? ""),
        (t = !0),
        e.classList.add("clicked"),
        setTimeout(() => {
          (t = !1), e.classList.remove("clicked");
        }, 1e3);
    }),
      (e.dataset.clickListenerSet = "true");
  },
  Tm = (e) => {
    const t = "nlux-comp-copyButton";
    e instanceof HTMLButtonElement && e.classList.contains(t)
      ? Ud(e)
      : e.querySelectorAll(`.${t}`).forEach(Ud);
  };
function U0() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  };
}
let jn = {
  async: !1,
  breaks: !1,
  extensions: null,
  gfm: !0,
  hooks: null,
  pedantic: !1,
  renderer: null,
  silent: !1,
  tokenizer: null,
  walkTokens: null,
};
function Qd(e) {
  jn = e;
}
var Q0 = Object.defineProperty,
  Am = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? Q0(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
class po {
  constructor(t) {
    Am(this, "options"), (this.options = t || jn);
  }
  postprocess(t) {
    return t;
  }
  preprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
}
Am(
  po,
  "passThroughHooks",
  new Set(["preprocess", "postprocess", "processAllTokens"])
);
const Im = /[&<>"']/,
  q0 = new RegExp(Im.source, "g"),
  Pm = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  X0 = new RegExp(Pm.source, "g"),
  W0 = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
  qd = (e) => W0[e];
function Ze(e, t) {
  if (t) {
    if (Im.test(e)) return e.replace(q0, qd);
  } else if (Pm.test(e)) return e.replace(X0, qd);
  return e;
}
const G0 = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function K0(e) {
  return e.replace(G0, (t, n) =>
    (n = n.toLowerCase()) === "colon"
      ? ":"
      : n.charAt(0) === "#"
      ? n.charAt(1) === "x"
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1))
      : ""
  );
}
const Y0 = /(^|[^\[])\^/g;
function J(e, t) {
  let n = typeof e == "string" ? e : e.source;
  t = t || "";
  const r = {
    replace: (o, s) => {
      let i = typeof s == "string" ? s : s.source;
      return (i = i.replace(Y0, "$1")), (n = n.replace(o, i)), r;
    },
    getRegex: () => new RegExp(n, t),
  };
  return r;
}
function Xd(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
const fo = { exec: () => null };
function Wd(e, t) {
  const n = e
    .replace(/\|/g, (o, s, i) => {
      let a = !1,
        l = s;
      for (; --l >= 0 && i[l] === "\\"; ) a = !a;
      return a ? "|" : " |";
    })
    .split(/ \|/);
  let r = 0;
  if (
    (n[0].trim() || n.shift(),
    n.length > 0 && !n[n.length - 1].trim() && n.pop(),
    t)
  )
    if (n.length > t) n.splice(t);
    else for (; n.length < t; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
  return n;
}
function ys(e, t, n) {
  const r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r; ) {
    const s = e.charAt(r - o - 1);
    if (s !== t || n) {
      if (s === t || !n) break;
      o++;
    } else o++;
  }
  return e.slice(0, r - o);
}
const Ho = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  Rm = /(?:[*+-]|\d{1,9}[.)])/,
  _m = J(
    /^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/
  )
    .replace(/bull/g, Rm)
    .replace(/blockCode/g, / {4}/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .getRegex(),
  Zu =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  Ju = /(?!\s*\])(?:\\.|[^\[\]\\])+/,
  V0 = J(
    /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/
  )
    .replace("label", Ju)
    .replace(
      "title",
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
    )
    .getRegex(),
  Z0 = J(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, Rm)
    .getRegex(),
  ji =
    "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
  ec = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  J0 = J(
    "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    "i"
  )
    .replace("comment", ec)
    .replace("tag", ji)
    .replace(
      "attribute",
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
    )
    .getRegex(),
  Gd = J(Zu)
    .replace("hr", Ho)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("|lheading", "")
    .replace("|table", "")
    .replace("blockquote", " {0,3}>")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", ji)
    .getRegex(),
  tc = {
    blockquote: J(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
      .replace("paragraph", Gd)
      .getRegex(),
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    def: V0,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    hr: Ho,
    html: J0,
    lheading: _m,
    list: Z0,
    newline: /^(?: *(?:\n|$))+/,
    paragraph: Gd,
    table: fo,
    text: /^[^\n]+/,
  },
  Kd = J(
    "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  )
    .replace("hr", Ho)
    .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
    .replace("blockquote", " {0,3}>")
    .replace("code", " {4}[^\\n]")
    .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
    .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
    .replace(
      "html",
      "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
    )
    .replace("tag", ji)
    .getRegex(),
  e1 = {
    ...tc,
    table: Kd,
    paragraph: J(Zu)
      .replace("hr", Ho)
      .replace("heading", " {0,3}#{1,6}(?:\\s|$)")
      .replace("|lheading", "")
      .replace("table", Kd)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", ji)
      .getRegex(),
  },
  t1 = {
    ...tc,
    html: J(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    )
      .replace("comment", ec)
      .replace(
        /tag/g,
        "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: fo,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: J(Zu)
      .replace("hr", Ho)
      .replace(
        "heading",
        ` *#{1,6} *[^
]`
      )
      .replace("lheading", _m)
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("|fences", "")
      .replace("|list", "")
      .replace("|html", "")
      .replace("|tag", "")
      .getRegex(),
  },
  Lm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  Bm = /^( {2,}|\\)\n(?!\s*$)/,
  Fo = "\\p{P}\\p{S}",
  n1 = J(/^((?![*_])[\spunctuation])/, "u")
    .replace(/punctuation/g, Fo)
    .getRegex(),
  r1 = J(
    /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,
    "u"
  )
    .replace(/punct/g, Fo)
    .getRegex(),
  o1 = J(
    "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])",
    "gu"
  )
    .replace(/punct/g, Fo)
    .getRegex(),
  s1 = J(
    "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])",
    "gu"
  )
    .replace(/punct/g, Fo)
    .getRegex(),
  i1 = J(/\\([punct])/, "gu")
    .replace(/punct/g, Fo)
    .getRegex(),
  a1 = J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      "email",
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
    )
    .getRegex(),
  l1 = J(ec).replace("(?:-->|$)", "-->").getRegex(),
  u1 = J(
    "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
  )
    .replace("comment", l1)
    .replace(
      "attribute",
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/
    )
    .getRegex(),
  mi = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,
  c1 = J(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/)
    .replace("label", mi)
    .replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/)
    .replace(
      "title",
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/
    )
    .getRegex(),
  Yd = J(/^!?\[(label)\]\[(ref)\]/)
    .replace("label", mi)
    .replace("ref", Ju)
    .getRegex(),
  Vd = J(/^!?\[(ref)\](?:\[\])?/)
    .replace("ref", Ju)
    .getRegex(),
  nc = {
    _backpedal: fo,
    anyPunctuation: i1,
    autolink: a1,
    blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,
    br: Bm,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    del: fo,
    emStrongLDelim: r1,
    emStrongRDelimAst: o1,
    emStrongRDelimUnd: s1,
    escape: Lm,
    link: c1,
    nolink: Vd,
    punctuation: n1,
    reflink: Yd,
    reflinkSearch: J("reflink|nolink(?!\\()", "g")
      .replace("reflink", Yd)
      .replace("nolink", Vd)
      .getRegex(),
    tag: u1,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    url: fo,
  },
  d1 = {
    ...nc,
    link: J(/^!?\[(label)\]\((.*?)\)/)
      .replace("label", mi)
      .getRegex(),
    reflink: J(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace("label", mi)
      .getRegex(),
  },
  Ql = {
    ...nc,
    escape: J(Lm).replace("])", "~|])").getRegex(),
    url: J(
      /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      "i"
    )
      .replace(
        "email",
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
  },
  p1 = {
    ...Ql,
    br: J(Bm).replace("{2,}", "*").getRegex(),
    text: J(Ql.text)
      .replace("\\b_", "\\b_| {2,}\\n")
      .replace(/\{2,\}/g, "*")
      .getRegex(),
  },
  ws = { normal: tc, gfm: e1, pedantic: t1 },
  Ur = { normal: nc, gfm: Ql, breaks: p1, pedantic: d1 };
var f1 = Object.defineProperty,
  Ca = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? f1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
function Zd(e, t, n, r) {
  const o = t.href,
    s = t.title ? Ze(t.title) : null,
    i = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = {
      type: "link",
      raw: n,
      href: o,
      title: s,
      text: i,
      tokens: r.inlineTokens(i),
    };
    return (r.state.inLink = !1), a;
  }
  return { type: "image", raw: n, href: o, title: s, text: Ze(i) };
}
class gi {
  constructor(t) {
    Ca(this, "lexer"),
      Ca(this, "options"),
      Ca(this, "rules"),
      (this.options = t || jn);
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let r, o;
      return (
        n[2] === "@"
          ? ((r = Ze(n[1])), (o = "mailto:" + r))
          : ((r = Ze(n[1])), (o = r)),
        {
          type: "link",
          raw: n[0],
          text: r,
          href: o,
          tokens: [{ type: "text", raw: r, text: r }],
        }
      );
    }
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let r = n[0].replace(
        /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
        `
    $1`
      );
      r = ys(
        r.replace(/^ *>[ \t]?/gm, ""),
        `
`
      );
      const o = this.lexer.state.top;
      this.lexer.state.top = !0;
      const s = this.lexer.blockTokens(r);
      return (
        (this.lexer.state.top = o),
        { type: "blockquote", raw: n[0], tokens: s, text: r }
      );
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n) return { type: "br", raw: n[0] };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic
          ? r
          : ys(
              r,
              `
`
            ),
      };
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(/\n/g, " ");
      const o = /[^ ]/.test(r),
        s = /^ /.test(r) && / $/.test(r);
      return (
        o && s && (r = r.substring(1, r.length - 1)),
        (r = Ze(r, !0)),
        { type: "codespan", raw: n[0], text: r }
      );
    }
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const r = n[1].toLowerCase().replace(/\s+/g, " "),
        o = n[2]
          ? n[2]
              .replace(/^<(.*)>$/, "$1")
              .replace(this.rules.inline.anyPunctuation, "$1")
          : "",
        s = n[3]
          ? n[3]
              .substring(1, n[3].length - 1)
              .replace(this.rules.inline.anyPunctuation, "$1")
          : n[3];
      return { type: "def", tag: r, raw: n[0], href: o, title: s };
    }
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2]),
      };
  }
  emStrong(t, n, r = "") {
    let o = this.rules.inline.emStrongLDelim.exec(t);
    if (
      o &&
      !(o[3] && r.match(/[\p{L}\p{N}]/u)) &&
      (!(o[1] || o[2]) || !r || this.rules.inline.punctuation.exec(r))
    ) {
      const s = [...o[0]].length - 1;
      let i,
        a,
        l = s,
        c = 0;
      const u =
        o[0][0] === "*"
          ? this.rules.inline.emStrongRDelimAst
          : this.rules.inline.emStrongRDelimUnd;
      for (
        u.lastIndex = 0, n = n.slice(-1 * t.length + s);
        (o = u.exec(n)) != null;

      ) {
        if (((i = o[1] || o[2] || o[3] || o[4] || o[5] || o[6]), !i)) continue;
        if (((a = [...i].length), o[3] || o[4])) {
          l += a;
          continue;
        }
        if ((o[5] || o[6]) && s % 3 && !((s + a) % 3)) {
          c += a;
          continue;
        }
        if (((l -= a), l > 0)) continue;
        a = Math.min(a, a + l + c);
        const f = [...o[0]][0].length,
          d = t.slice(0, s + o.index + f + a);
        if (Math.min(s, a) % 2) {
          const g = d.slice(1, -1);
          return {
            type: "em",
            raw: d,
            text: g,
            tokens: this.lexer.inlineTokens(g),
          };
        }
        const m = d.slice(2, -2);
        return {
          type: "strong",
          raw: d,
          text: m,
          tokens: this.lexer.inlineTokens(m),
        };
      }
    }
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n) return { type: "escape", raw: n[0], text: Ze(n[1]) };
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0],
        o = (function (s, i) {
          const a = s.match(/^(\s+)(?:```)/);
          if (a === null) return i;
          const l = a[1];
          return i
            .split(
              `
`
            )
            .map((c) => {
              const u = c.match(/^\s+/);
              if (u === null) return c;
              const [f] = u;
              return f.length >= l.length ? c.slice(l.length) : c;
            }).join(`
`);
        })(r, n[3] || "");
      return {
        type: "code",
        raw: r,
        lang: n[2]
          ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1")
          : n[2],
        text: o,
      };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (/#$/.test(r)) {
        const o = ys(r, "#");
        this.options.pedantic
          ? (r = o.trim())
          : (o && !/ $/.test(o)) || (r = o.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n) return { type: "hr", raw: n[0] };
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0],
      };
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      let r;
      return (
        (r = this.lexer.state.inRawBlock ? n[0] : Ze(n[0])),
        { type: "text", raw: n[0], text: r }
      );
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1]),
      };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r)) return;
        const i = ys(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 == 0) return;
      } else {
        const i = (function (a, l) {
          if (a.indexOf(l[1]) === -1) return -1;
          let c = 0;
          for (let u = 0; u < a.length; u++)
            if (a[u] === "\\") u++;
            else if (a[u] === l[0]) c++;
            else if (a[u] === l[1] && (c--, c < 0)) return u;
          return -1;
        })(n[2], "()");
        if (i > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + i;
          (n[2] = n[2].substring(0, i)),
            (n[0] = n[0].substring(0, a).trim()),
            (n[3] = "");
        }
      }
      let o = n[2],
        s = "";
      if (this.options.pedantic) {
        const i = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
        i && ((o = i[1]), (s = i[3]));
      } else s = n[3] ? n[3].slice(1, -1) : "";
      return (
        (o = o.trim()),
        /^</.test(o) &&
          (o =
            this.options.pedantic && !/>$/.test(r)
              ? o.slice(1)
              : o.slice(1, -1)),
        Zd(
          n,
          {
            href: o && o.replace(this.rules.inline.anyPunctuation, "$1"),
            title: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
          },
          n[0],
          this.lexer
        )
      );
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const o = r.length > 1,
        s = {
          type: "list",
          raw: "",
          ordered: o,
          start: o ? +r.slice(0, -1) : "",
          loose: !1,
          items: [],
        };
      (r = o ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
        this.options.pedantic && (r = o ? r : "[*+-]");
      const i = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "",
        l = "",
        c = !1;
      for (; t; ) {
        let u = !1;
        if (!(n = i.exec(t)) || this.rules.block.hr.test(t)) break;
        (a = n[0]), (t = t.substring(a.length));
        let f = n[2]
            .split(
              `
`,
              1
            )[0]
            .replace(/^\t+/, (v) => " ".repeat(3 * v.length)),
          d = t.split(
            `
`,
            1
          )[0],
          m = 0;
        this.options.pedantic
          ? ((m = 2), (l = f.trimStart()))
          : ((m = n[2].search(/[^ ]/)),
            (m = m > 4 ? 1 : m),
            (l = f.slice(m)),
            (m += n[1].length));
        let g = !1;
        if (
          (!f &&
            /^ *$/.test(d) &&
            ((a +=
              d +
              `
`),
            (t = t.substring(d.length + 1)),
            (u = !0)),
          !u)
        ) {
          const v = new RegExp(
              `^ {0,${Math.min(
                3,
                m - 1
              )}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`
            ),
            h = new RegExp(
              `^ {0,${Math.min(
                3,
                m - 1
              )}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`
            ),
            y = new RegExp(`^ {0,${Math.min(3, m - 1)}}(?:\`\`\`|~~~)`),
            k = new RegExp(`^ {0,${Math.min(3, m - 1)}}#`);
          for (; t; ) {
            const x = t.split(
              `
`,
              1
            )[0];
            if (
              ((d = x),
              this.options.pedantic &&
                (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
              y.test(d) || k.test(d) || v.test(d) || h.test(t))
            )
              break;
            if (d.search(/[^ ]/) >= m || !d.trim())
              l +=
                `
` + d.slice(m);
            else {
              if (
                g ||
                f.search(/[^ ]/) >= 4 ||
                y.test(f) ||
                k.test(f) ||
                h.test(f)
              )
                break;
              l +=
                `
` + d;
            }
            g || d.trim() || (g = !0),
              (a +=
                x +
                `
`),
              (t = t.substring(x.length + 1)),
              (f = d.slice(m));
          }
        }
        s.loose || (c ? (s.loose = !0) : /\n *\n *$/.test(a) && (c = !0));
        let p,
          w = null;
        this.options.gfm &&
          ((w = /^\[[ xX]\] /.exec(l)),
          w && ((p = w[0] !== "[ ] "), (l = l.replace(/^\[[ xX]\] +/, "")))),
          s.items.push({
            type: "list_item",
            raw: a,
            task: !!w,
            checked: p,
            loose: !1,
            text: l,
            tokens: [],
          }),
          (s.raw += a);
      }
      (s.items[s.items.length - 1].raw = a.trimEnd()),
        (s.items[s.items.length - 1].text = l.trimEnd()),
        (s.raw = s.raw.trimEnd());
      for (let u = 0; u < s.items.length; u++)
        if (
          ((this.lexer.state.top = !1),
          (s.items[u].tokens = this.lexer.blockTokens(s.items[u].text, [])),
          !s.loose)
        ) {
          const f = s.items[u].tokens.filter((m) => m.type === "space"),
            d = f.length > 0 && f.some((m) => /\n.*\n/.test(m.raw));
          s.loose = d;
        }
      if (s.loose)
        for (let u = 0; u < s.items.length; u++) s.items[u].loose = !0;
      return s;
    }
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const r =
        n[1].charAt(n[1].length - 1) ===
        `
`
          ? n[1].slice(0, -1)
          : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: r,
        tokens: this.lexer.inline(r),
      };
    }
  }
  reflink(t, n) {
    let r;
    if (
      (r = this.rules.inline.reflink.exec(t)) ||
      (r = this.rules.inline.nolink.exec(t))
    ) {
      const o = n[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!o) {
        const s = r[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return Zd(r, o, r[0], this.lexer);
    }
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0) return { type: "space", raw: n[0] };
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (!n || !/[:|]/.test(n[2])) return;
    const r = Wd(n[1]),
      o = n[2].replace(/^\||\| *$/g, "").split("|"),
      s =
        n[3] && n[3].trim()
          ? n[3].replace(/\n[ \t]*$/, "").split(`
`)
          : [],
      i = { type: "table", raw: n[0], header: [], align: [], rows: [] };
    if (r.length === o.length) {
      for (const a of o)
        /^ *-+: *$/.test(a)
          ? i.align.push("right")
          : /^ *:-+: *$/.test(a)
          ? i.align.push("center")
          : /^ *:-+ *$/.test(a)
          ? i.align.push("left")
          : i.align.push(null);
      for (const a of r)
        i.header.push({ text: a, tokens: this.lexer.inline(a) });
      for (const a of s)
        i.rows.push(
          Wd(a, i.header.length).map((l) => ({
            text: l,
            tokens: this.lexer.inline(l),
          }))
        );
      return i;
    }
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return (
        !this.lexer.state.inLink && /^<a /i.test(n[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(n[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(n[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: "html",
          raw: n[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: !1,
          text: n[0],
        }
      );
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0]),
      };
  }
  url(t) {
    var r;
    let n;
    if ((n = this.rules.inline.url.exec(t))) {
      let o, s;
      if (n[2] === "@") (o = Ze(n[0])), (s = "mailto:" + o);
      else {
        let i;
        do
          (i = n[0]),
            (n[0] =
              ((r = this.rules.inline._backpedal.exec(n[0])) == null
                ? void 0
                : r[0]) ?? "");
        while (i !== n[0]);
        (o = Ze(n[0])), (s = n[1] === "www." ? "http://" + n[0] : n[0]);
      }
      return {
        type: "link",
        raw: n[0],
        text: o,
        href: s,
        tokens: [{ type: "text", raw: o, text: o }],
      };
    }
  }
}
var h1 = Object.defineProperty,
  Qr = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? h1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
class Mt {
  constructor(t) {
    Qr(this, "options"),
      Qr(this, "state"),
      Qr(this, "tokens"),
      Qr(this, "inlineQueue"),
      Qr(this, "tokenizer"),
      (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = t || jn),
      (this.options.tokenizer = this.options.tokenizer || new gi()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const n = { block: ws.normal, inline: Ur.normal };
    this.options.pedantic
      ? ((n.block = ws.pedantic), (n.inline = Ur.pedantic))
      : this.options.gfm &&
        ((n.block = ws.gfm),
        this.options.breaks ? (n.inline = Ur.breaks) : (n.inline = Ur.gfm)),
      (this.tokenizer.rules = n);
  }
  static get rules() {
    return { block: ws, inline: Ur };
  }
  static lex(t, n) {
    return new Mt(n).lex(t);
  }
  static lexInline(t, n) {
    return new Mt(n).inlineTokens(t);
  }
  blockTokens(t, n = []) {
    let r, o, s, i;
    for (
      t = this.options.pedantic
        ? t.replace(/\t/g, "    ").replace(/^ +$/gm, "")
        : t.replace(/^( *)(\t+)/gm, (a, l, c) => l + "    ".repeat(c.length));
      t;

    )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some(
            (a) =>
              !!(r = a.call({ lexer: this }, t, n)) &&
              ((t = t.substring(r.raw.length)), n.push(r), !0)
          )
        )
      )
        if ((r = this.tokenizer.space(t)))
          (t = t.substring(r.raw.length)),
            r.raw.length === 1 && n.length > 0
              ? (n[n.length - 1].raw += `
`)
              : n.push(r);
        else if ((r = this.tokenizer.code(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            !o || (o.type !== "paragraph" && o.type !== "text")
              ? n.push(r)
              : ((o.raw +=
                  `
` + r.raw),
                (o.text +=
                  `
` + r.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = o.text));
        else if ((r = this.tokenizer.fences(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.heading(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.hr(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.blockquote(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.list(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.html(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.def(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            !o || (o.type !== "paragraph" && o.type !== "text")
              ? this.tokens.links[r.tag] ||
                (this.tokens.links[r.tag] = { href: r.href, title: r.title })
              : ((o.raw +=
                  `
` + r.raw),
                (o.text +=
                  `
` + r.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = o.text));
        else if ((r = this.tokenizer.table(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.lheading(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else {
          if (
            ((s = t),
            this.options.extensions && this.options.extensions.startBlock)
          ) {
            let a = 1 / 0;
            const l = t.slice(1);
            let c;
            this.options.extensions.startBlock.forEach((u) => {
              (c = u.call({ lexer: this }, l)),
                typeof c == "number" && c >= 0 && (a = Math.min(a, c));
            }),
              a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
          }
          if (this.state.top && (r = this.tokenizer.paragraph(s)))
            (o = n[n.length - 1]),
              i && o.type === "paragraph"
                ? ((o.raw +=
                    `
` + r.raw),
                  (o.text +=
                    `
` + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = o.text))
                : n.push(r),
              (i = s.length !== t.length),
              (t = t.substring(r.raw.length));
          else if ((r = this.tokenizer.text(t)))
            (t = t.substring(r.raw.length)),
              (o = n[n.length - 1]),
              o && o.type === "text"
                ? ((o.raw +=
                    `
` + r.raw),
                  (o.text +=
                    `
` + r.text),
                  this.inlineQueue.pop(),
                  (this.inlineQueue[this.inlineQueue.length - 1].src = o.text))
                : n.push(r);
          else if (t) {
            const a = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent) {
              console.error(a);
              break;
            }
            throw new Error(a);
          }
        }
    return (this.state.top = !0), n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let r,
      o,
      s,
      i,
      a,
      l,
      c = t;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (
          ;
          (i = this.tokenizer.rules.inline.reflinkSearch.exec(c)) != null;

        )
          u.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) &&
            (c =
              c.slice(0, i.index) +
              "[" +
              "a".repeat(i[0].length - 2) +
              "]" +
              c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(c)) != null; )
      c =
        c.slice(0, i.index) +
        "[" +
        "a".repeat(i[0].length - 2) +
        "]" +
        c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(c)) != null; )
      c =
        c.slice(0, i.index) +
        "++" +
        c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (
        (a || (l = ""),
        (a = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some(
            (u) =>
              !!(r = u.call({ lexer: this }, t, n)) &&
              ((t = t.substring(r.raw.length)), n.push(r), !0)
          )
        ))
      )
        if ((r = this.tokenizer.escape(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.tag(t)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            o && r.type === "text" && o.type === "text"
              ? ((o.raw += r.raw), (o.text += r.text))
              : n.push(r);
        else if ((r = this.tokenizer.link(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.reflink(t, this.tokens.links)))
          (t = t.substring(r.raw.length)),
            (o = n[n.length - 1]),
            o && r.type === "text" && o.type === "text"
              ? ((o.raw += r.raw), (o.text += r.text))
              : n.push(r);
        else if ((r = this.tokenizer.emStrong(t, c, l)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.codespan(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.br(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.del(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if ((r = this.tokenizer.autolink(t)))
          (t = t.substring(r.raw.length)), n.push(r);
        else if (this.state.inLink || !(r = this.tokenizer.url(t))) {
          if (
            ((s = t),
            this.options.extensions && this.options.extensions.startInline)
          ) {
            let u = 1 / 0;
            const f = t.slice(1);
            let d;
            this.options.extensions.startInline.forEach((m) => {
              (d = m.call({ lexer: this }, f)),
                typeof d == "number" && d >= 0 && (u = Math.min(u, d));
            }),
              u < 1 / 0 && u >= 0 && (s = t.substring(0, u + 1));
          }
          if ((r = this.tokenizer.inlineText(s)))
            (t = t.substring(r.raw.length)),
              r.raw.slice(-1) !== "_" && (l = r.raw.slice(-1)),
              (a = !0),
              (o = n[n.length - 1]),
              o && o.type === "text"
                ? ((o.raw += r.raw), (o.text += r.text))
                : n.push(r);
          else if (t) {
            const u = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent) {
              console.error(u);
              break;
            }
            throw new Error(u);
          }
        } else (t = t.substring(r.raw.length)), n.push(r);
    return n;
  }
  lex(t) {
    (t = t.replace(
      /\r\n|\r/g,
      `
`
    )),
      this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return (this.inlineQueue = []), this.tokens;
  }
}
var m1 = Object.defineProperty,
  g1 = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? m1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, t + "", n);
class vi {
  constructor(t) {
    g1(this, "options"), (this.options = t || jn);
  }
  blockquote(t) {
    return `<blockquote>
${t}</blockquote>
`;
  }
  br() {
    return "<br>";
  }
  checkbox(t) {
    return (
      "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">'
    );
  }
  code(t, n, r) {
    var s;
    const o = (s = (n || "").match(/^\S*/)) == null ? void 0 : s[0];
    return (
      (t =
        t.replace(/\n$/, "") +
        `
`),
      o
        ? '<pre><code class="language-' +
          Ze(o) +
          '">' +
          (r ? t : Ze(t, !0)) +
          `</code></pre>
`
        : "<pre><code>" +
          (r ? t : Ze(t, !0)) +
          `</code></pre>
`
    );
  }
  codespan(t) {
    return `<code>${t}</code>`;
  }
  del(t) {
    return `<del>${t}</del>`;
  }
  em(t) {
    return `<em>${t}</em>`;
  }
  heading(t, n, r) {
    return `<h${n}>${t}</h${n}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  html(t, n) {
    return t;
  }
  image(t, n, r) {
    const o = Xd(t);
    if (o === null) return r;
    let s = `<img src="${(t = o)}" alt="${r}"`;
    return n && (s += ` title="${n}"`), (s += ">"), s;
  }
  link(t, n, r) {
    const o = Xd(t);
    if (o === null) return r;
    let s = '<a href="' + (t = o) + '"';
    return n && (s += ' title="' + n + '"'), (s += ">" + r + "</a>"), s;
  }
  list(t, n, r) {
    const o = n ? "ol" : "ul";
    return (
      "<" +
      o +
      (n && r !== 1 ? ' start="' + r + '"' : "") +
      `>
` +
      t +
      "</" +
      o +
      `>
`
    );
  }
  listitem(t, n, r) {
    return `<li>${t}</li>
`;
  }
  paragraph(t) {
    return `<p>${t}</p>
`;
  }
  strong(t) {
    return `<strong>${t}</strong>`;
  }
  table(t, n) {
    return (
      n && (n = `<tbody>${n}</tbody>`),
      `<table>
<thead>
` +
        t +
        `</thead>
` +
        n +
        `</table>
`
    );
  }
  tablecell(t, n) {
    const r = n.header ? "th" : "td";
    return (
      (n.align ? `<${r} align="${n.align}">` : `<${r}>`) +
      t +
      `</${r}>
`
    );
  }
  tablerow(t) {
    return `<tr>
${t}</tr>
`;
  }
  text(t) {
    return t;
  }
}
class rc {
  strong(t) {
    return t;
  }
  em(t) {
    return t;
  }
  codespan(t) {
    return t;
  }
  del(t) {
    return t;
  }
  html(t) {
    return t;
  }
  text(t) {
    return t;
  }
  link(t, n, r) {
    return "" + r;
  }
  image(t, n, r) {
    return "" + r;
  }
  br() {
    return "";
  }
}
var v1 = Object.defineProperty,
  Ea = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? v1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
class zt {
  constructor(t) {
    Ea(this, "options"),
      Ea(this, "renderer"),
      Ea(this, "textRenderer"),
      (this.options = t || jn),
      (this.options.renderer = this.options.renderer || new vi()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new rc());
  }
  static parse(t, n) {
    return new zt(n).parse(t);
  }
  static parseInline(t, n) {
    return new zt(n).parseInline(t);
  }
  parse(t, n = !0) {
    let r = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[s.type]
      ) {
        const i = s,
          a = this.options.extensions.renderers[i.type].call(
            { parser: this },
            i
          );
        if (
          a !== !1 ||
          ![
            "space",
            "hr",
            "heading",
            "code",
            "table",
            "blockquote",
            "list",
            "html",
            "paragraph",
            "text",
          ].includes(i.type)
        ) {
          r += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr":
          r += this.renderer.hr();
          continue;
        case "heading": {
          const i = s;
          r += this.renderer.heading(
            this.parseInline(i.tokens),
            i.depth,
            K0(this.parseInline(i.tokens, this.textRenderer))
          );
          continue;
        }
        case "code": {
          const i = s;
          r += this.renderer.code(i.text, i.lang, !!i.escaped);
          continue;
        }
        case "table": {
          const i = s;
          let a = "",
            l = "";
          for (let u = 0; u < i.header.length; u++)
            l += this.renderer.tablecell(this.parseInline(i.header[u].tokens), {
              header: !0,
              align: i.align[u],
            });
          a += this.renderer.tablerow(l);
          let c = "";
          for (let u = 0; u < i.rows.length; u++) {
            const f = i.rows[u];
            l = "";
            for (let d = 0; d < f.length; d++)
              l += this.renderer.tablecell(this.parseInline(f[d].tokens), {
                header: !1,
                align: i.align[d],
              });
            c += this.renderer.tablerow(l);
          }
          r += this.renderer.table(a, c);
          continue;
        }
        case "blockquote": {
          const i = s,
            a = this.parse(i.tokens);
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          const i = s,
            a = i.ordered,
            l = i.start,
            c = i.loose;
          let u = "";
          for (let f = 0; f < i.items.length; f++) {
            const d = i.items[f],
              m = d.checked,
              g = d.task;
            let p = "";
            if (d.task) {
              const w = this.renderer.checkbox(!!m);
              c
                ? d.tokens.length > 0 && d.tokens[0].type === "paragraph"
                  ? ((d.tokens[0].text = w + " " + d.tokens[0].text),
                    d.tokens[0].tokens &&
                      d.tokens[0].tokens.length > 0 &&
                      d.tokens[0].tokens[0].type === "text" &&
                      (d.tokens[0].tokens[0].text =
                        w + " " + d.tokens[0].tokens[0].text))
                  : d.tokens.unshift({ type: "text", text: w + " " })
                : (p += w + " ");
            }
            (p += this.parse(d.tokens, c)),
              (u += this.renderer.listitem(p, g, !!m));
          }
          r += this.renderer.list(u, a, l);
          continue;
        }
        case "html": {
          const i = s;
          r += this.renderer.html(i.text, i.block);
          continue;
        }
        case "paragraph": {
          const i = s;
          r += this.renderer.paragraph(this.parseInline(i.tokens));
          continue;
        }
        case "text": {
          let i = s,
            a = i.tokens ? this.parseInline(i.tokens) : i.text;
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            (i = t[++o]),
              (a +=
                `
` + (i.tokens ? this.parseInline(i.tokens) : i.text));
          r += n ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          const i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let r = "";
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (
        this.options.extensions &&
        this.options.extensions.renderers &&
        this.options.extensions.renderers[s.type]
      ) {
        const i = this.options.extensions.renderers[s.type].call(
          { parser: this },
          s
        );
        if (
          i !== !1 ||
          ![
            "escape",
            "html",
            "link",
            "image",
            "strong",
            "em",
            "codespan",
            "br",
            "del",
            "text",
          ].includes(s.type)
        ) {
          r += i || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          const i = s;
          r += n.text(i.text);
          break;
        }
        case "html": {
          const i = s;
          r += n.html(i.text);
          break;
        }
        case "link": {
          const i = s;
          r += n.link(i.href, i.title, this.parseInline(i.tokens, n));
          break;
        }
        case "image": {
          const i = s;
          r += n.image(i.href, i.title, i.text);
          break;
        }
        case "strong": {
          const i = s;
          r += n.strong(this.parseInline(i.tokens, n));
          break;
        }
        case "em": {
          const i = s;
          r += n.em(this.parseInline(i.tokens, n));
          break;
        }
        case "codespan": {
          const i = s;
          r += n.codespan(i.text);
          break;
        }
        case "br":
          r += n.br();
          break;
        case "del": {
          const i = s;
          r += n.del(this.parseInline(i.tokens, n));
          break;
        }
        case "text": {
          const i = s;
          r += n.text(i.text);
          break;
        }
        default: {
          const i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
}
var ho,
  Jd,
  ql,
  y1 = Object.defineProperty,
  Om = (e) => {
    throw TypeError(e);
  },
  Ct = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? y1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n),
  Xl = (e, t, n) => (
    ((r, o, s) => {
      o.has(r) || Om("Cannot " + s);
    })(e, t, "access private method"),
    n
  );
(ho = new WeakSet()),
  (Jd = function (e, t) {
    return (n) => {
      if (
        ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
        e)
      ) {
        const r =
          "<p>An error occurred:</p><pre>" + Ze(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }),
  (ql = function (e, t) {
    return (n, r) => {
      const o = { ...r },
        s = { ...this.defaults, ...o };
      this.defaults.async === !0 &&
        o.async === !1 &&
        (s.silent ||
          console.warn(
            "marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."
          ),
        (s.async = !0));
      const i = Xl(this, ho, Jd).call(this, !!s.silent, !!s.async);
      if (n == null)
        return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return i(
          new Error(
            "marked(): input parameter is of type " +
              Object.prototype.toString.call(n) +
              ", string expected"
          )
        );
      if ((s.hooks && (s.hooks.options = s), s.async))
        return Promise.resolve(s.hooks ? s.hooks.preprocess(n) : n)
          .then((a) => e(a, s))
          .then((a) => (s.hooks ? s.hooks.processAllTokens(a) : a))
          .then((a) =>
            s.walkTokens
              ? Promise.all(this.walkTokens(a, s.walkTokens)).then(() => a)
              : a
          )
          .then((a) => t(a, s))
          .then((a) => (s.hooks ? s.hooks.postprocess(a) : a))
          .catch(i);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let a = e(n, s);
        s.hooks && (a = s.hooks.processAllTokens(a)),
          s.walkTokens && this.walkTokens(a, s.walkTokens);
        let l = t(a, s);
        return s.hooks && (l = s.hooks.postprocess(l)), l;
      } catch (a) {
        return i(a);
      }
    };
  });
const Sn = new (class {
  constructor(...e) {
    var t, n, r;
    (t = this),
      (n = ho).has(t)
        ? Om("Cannot add the same private member more than once")
        : n instanceof WeakSet
        ? n.add(t)
        : n.set(t, r),
      Ct(this, "Hooks", po),
      Ct(this, "Lexer", Mt),
      Ct(this, "Parser", zt),
      Ct(this, "Renderer", vi),
      Ct(this, "TextRenderer", rc),
      Ct(this, "Tokenizer", gi),
      Ct(this, "defaults", {
        async: !1,
        breaks: !1,
        extensions: null,
        gfm: !0,
        hooks: null,
        pedantic: !1,
        renderer: null,
        silent: !1,
        tokenizer: null,
        walkTokens: null,
      }),
      Ct(this, "options", this.setOptions),
      Ct(this, "parse", Xl(this, ho, ql).call(this, Mt.lex, zt.parse)),
      Ct(
        this,
        "parseInline",
        Xl(this, ho, ql).call(this, Mt.lexInline, zt.parseInline)
      ),
      this.use(...e);
  }
  lexer(e, t) {
    return Mt.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return zt.parse(e, t ?? this.defaults);
  }
  setOptions(e) {
    return (this.defaults = { ...this.defaults, ...e }), this;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return (
      e.forEach((n) => {
        const r = { ...n };
        if (
          ((r.async = this.defaults.async || r.async || !1),
          n.extensions &&
            (n.extensions.forEach((o) => {
              if (!o.name) throw new Error("extension name required");
              if ("renderer" in o) {
                const s = t.renderers[o.name];
                t.renderers[o.name] = s
                  ? function (...i) {
                      let a = o.renderer.apply(this, i);
                      return a === !1 && (a = s.apply(this, i)), a;
                    }
                  : o.renderer;
              }
              if ("tokenizer" in o) {
                if (!o.level || (o.level !== "block" && o.level !== "inline"))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                const s = t[o.level];
                s ? s.unshift(o.tokenizer) : (t[o.level] = [o.tokenizer]),
                  o.start &&
                    (o.level === "block"
                      ? t.startBlock
                        ? t.startBlock.push(o.start)
                        : (t.startBlock = [o.start])
                      : o.level === "inline" &&
                        (t.startInline
                          ? t.startInline.push(o.start)
                          : (t.startInline = [o.start])));
              }
              "childTokens" in o &&
                o.childTokens &&
                (t.childTokens[o.name] = o.childTokens);
            }),
            (r.extensions = t)),
          n.renderer)
        ) {
          const o = this.defaults.renderer || new vi(this.defaults);
          for (const s in n.renderer) {
            if (!(s in o)) throw new Error(`renderer '${s}' does not exist`);
            if (s === "options") continue;
            const i = s,
              a = n.renderer[i],
              l = o[i];
            o[i] = (...c) => {
              let u = a.apply(o, c);
              return u === !1 && (u = l.apply(o, c)), u || "";
            };
          }
          r.renderer = o;
        }
        if (n.tokenizer) {
          const o = this.defaults.tokenizer || new gi(this.defaults);
          for (const s in n.tokenizer) {
            if (!(s in o)) throw new Error(`tokenizer '${s}' does not exist`);
            if (["options", "rules", "lexer"].includes(s)) continue;
            const i = s,
              a = n.tokenizer[i],
              l = o[i];
            o[i] = (...c) => {
              let u = a.apply(o, c);
              return u === !1 && (u = l.apply(o, c)), u;
            };
          }
          r.tokenizer = o;
        }
        if (n.hooks) {
          const o = this.defaults.hooks || new po();
          for (const s in n.hooks) {
            if (!(s in o)) throw new Error(`hook '${s}' does not exist`);
            if (s === "options") continue;
            const i = s,
              a = n.hooks[i],
              l = o[i];
            po.passThroughHooks.has(s)
              ? (o[i] = (c) => {
                  if (this.defaults.async)
                    return Promise.resolve(a.call(o, c)).then((f) =>
                      l.call(o, f)
                    );
                  const u = a.call(o, c);
                  return l.call(o, u);
                })
              : (o[i] = (...c) => {
                  let u = a.apply(o, c);
                  return u === !1 && (u = l.apply(o, c)), u;
                });
          }
          r.hooks = o;
        }
        if (n.walkTokens) {
          const o = this.defaults.walkTokens,
            s = n.walkTokens;
          r.walkTokens = function (i) {
            let a = [];
            return (
              a.push(s.call(this, i)), o && (a = a.concat(o.call(this, i))), a
            );
          };
        }
        this.defaults = { ...this.defaults, ...r };
      }),
      this
    );
  }
  walkTokens(e, t) {
    var r, o;
    let n = [];
    for (const s of e)
      switch (((n = n.concat(t.call(this, s))), s.type)) {
        case "table": {
          const i = s;
          for (const a of i.header) n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of i.rows)
            for (const l of a) n = n.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const i = s;
          n = n.concat(this.walkTokens(i.items, t));
          break;
        }
        default: {
          const i = s;
          (o =
            (r = this.defaults.extensions) == null ? void 0 : r.childTokens) !=
            null && o[i.type]
            ? this.defaults.extensions.childTokens[i.type].forEach((a) => {
                const l = i[a].flat(1 / 0);
                n = n.concat(this.walkTokens(l, t));
              })
            : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
        }
      }
    return n;
  }
})();
function ae(e, t) {
  return Sn.parse(e, t);
}
(ae.options = ae.setOptions =
  function (e) {
    return Sn.setOptions(e), (ae.defaults = Sn.defaults), Qd(ae.defaults), ae;
  }),
  (ae.getDefaults = U0),
  (ae.defaults = jn),
  (ae.use = function (...e) {
    return Sn.use(...e), (ae.defaults = Sn.defaults), Qd(ae.defaults), ae;
  }),
  (ae.walkTokens = function (e, t) {
    return Sn.walkTokens(e, t);
  }),
  (ae.parseInline = Sn.parseInline),
  (ae.Parser = zt),
  (ae.parser = zt.parse),
  (ae.Renderer = vi),
  (ae.TextRenderer = rc),
  (ae.Lexer = Mt),
  (ae.lexer = Mt.lex),
  (ae.Tokenizer = gi),
  (ae.Hooks = po),
  (ae.parse = ae);
const Mm = (e, t) => {
    const {
        showCodeBlockCopyButton: n,
        markdownLinkTarget: r,
        syntaxHighlighter: o,
        htmlSanitizer: s,
      } = t || {},
      i = ae(e, { async: !1, breaks: !0 });
    if (typeof i != "string") throw new Error("Markdown parsing failed");
    const a = document.createElement("div");
    return (
      (a.innerHTML = s ? s(i) : i),
      a.querySelectorAll("pre").forEach((l) => {
        const c = document.createElement("div");
        c.className = "code-block";
        const u = l.querySelector("code");
        if (!u) {
          const g = l.innerHTML;
          return (c.innerHTML = s ? s(g) : g), void l.replaceWith(c);
        }
        let f;
        for (let g = 0; g < u.classList.length; g++) {
          const p = u.classList[g];
          if (p.startsWith("language-")) {
            f = p.slice(9);
            break;
          }
        }
        const d = document.createElement("pre"),
          m = "<div>" + u.innerHTML + "</div>";
        if (
          ((d.innerHTML =
            t != null && t.htmlSanitizer ? t.htmlSanitizer(m) : m),
          f && (d.setAttribute("data-language", f), o))
        ) {
          const g =
            "<div>" + o.createHighlighter()(u.textContent || "", f) + "</div>";
          (d.innerHTML = s ? s(g) : g), (d.className = "highlighter-dark");
        }
        ((g) => {
          g.replaceChildren();
        })(c),
          c.appendChild(d),
          l.replaceWith(c);
      }),
      n !== !1 &&
        a.querySelectorAll(".code-block").forEach((l) => {
          var d;
          if (
            !l.querySelector("pre") ||
            ((d = l.previousElementSibling) != null &&
              d.classList.contains("nlux-comp-copyButton"))
          )
            return;
          const c = "Copy code block to clipboard",
            u = document.createElement("button");
          u.classList.add("nlux-comp-copyButton"),
            u.setAttribute("aria-label", c),
            u.setAttribute("title", c);
          const f = document.createElement("span");
          f.classList.add("icon-copy"), u.appendChild(f), l.appendChild(u);
        }),
      r !== "self" &&
        a.querySelectorAll("a").forEach((l) => {
          l.setAttribute("target", "_blank");
        }),
      a.innerHTML
    );
  },
  zm = "nlux-comp-message",
  ep = {
    received: "nlux-comp-chatItem--received",
    sent: "nlux-comp-chatItem--sent",
  },
  w1 = "nlux-comp-chatItem--bubblesLayout",
  k1 = "nlux-comp-chatItem--listLayout",
  x1 = (e, t) => {
    let n = !1;
    const { onComplete: r } = t || {},
      o = [],
      s =
        (t != null && t.skipStreamingAnimation
          ? "timeout"
          : "animationFrame") == "timeout"
          ? (f) => setTimeout(f, 0)
          : (f) => requestAnimationFrame(f),
      i = document.createElement("div");
    i.classList.add("md-in-progress"), e.append(i);
    const a = () => {
        for (; i.firstChild; ) {
          const f = i.firstChild;
          f instanceof HTMLElement && Tm(f), i.before(f);
        }
      },
      l =
        !(t != null && t.skipStreamingAnimation) &&
        t != null &&
        t.streamingAnimationSpeed &&
        t.streamingAnimationSpeed >= 0
          ? t.streamingAnimationSpeed
          : t != null && t.skipStreamingAnimation
          ? 0
          : 8,
      c = {
        timeSinceLastProcessing: new Date().getTime(),
        currentMarkdown: "",
        previousHtml: void 0,
      };
    let u = setInterval(() => {
      const f = new Date().getTime(),
        d = (t == null ? void 0 : t.waitTimeBeforeStreamCompletion) !== "never";
      if (o.length === 0 && d) {
        const g =
          typeof (t == null ? void 0 : t.waitTimeBeforeStreamCompletion) ==
          "number"
            ? t.waitTimeBeforeStreamCompletion
            : 2e3;
        return void (
          (n || f - c.timeSinceLastProcessing > g) &&
          ((n = !0),
          u && (clearInterval(u), (u = void 0)),
          a(),
          i.remove(),
          r == null ? void 0 : r())
        );
      }
      c.timeSinceLastProcessing = f;
      const m = o.shift();
      m !== void 0 &&
        typeof m == "string" &&
        s(() => {
          const g = c.currentMarkdown + m,
            p = Mm(g, t).trim();
          if (typeof p != "string")
            return (
              (c.currentMarkdown = c.currentMarkdown.slice(0, -m.length)),
              void We("Markdown parsing failed")
            );
          if (
            c.previousHtml &&
            p.length > c.previousHtml.length &&
            p.startsWith(c.previousHtml)
          ) {
            a();
            const w = p.slice(c.previousHtml.length).trim();
            (i.innerHTML =
              t != null && t.htmlSanitizer ? t.htmlSanitizer(w) : w),
              (c.currentMarkdown = m),
              (c.previousHtml = void 0);
          } else
            (i.innerHTML =
              t != null && t.htmlSanitizer ? t.htmlSanitizer(p) : p),
              (c.currentMarkdown = g),
              (c.previousHtml = p);
        });
    }, l);
    return {
      next: (f) => {
        if (n) We("Stream is already complete. No more chunks can be added");
        else for (const d of f) o.push(d);
      },
      complete: () => {
        o.push(`
`),
          (n = !0);
      },
      cancel: () => {
        u && (clearInterval(u), (u = void 0)), (n = !0), i.remove();
      },
      error: () => {
        n = !0;
      },
    };
  },
  S1 = function (e, t) {
    const {
        uid: n,
        status: r,
        responseRenderer: o,
        markdownOptions: s,
        initialMarkdownMessage: i,
        markdownContainersController: a,
      } = e,
      [l, c] = E.useState([]),
      u = E.useRef(null),
      f = E.useRef(null),
      d = E.useRef(null),
      m = E.useRef(null),
      [g, p] = E.useState();
    E.useEffect(() => {
      u.current !== f.current &&
        ((f.current = u.current), p(u.current || void 0));
    }),
      E.useEffect(() => {
        if (g) {
          const v = a.getStreamingDomElement(n);
          g.append(v);
        }
      }, [g]),
      E.useEffect(() => {
        m.current = (v) => {
          c((h) => [...h, v]);
        };
      }, [c]),
      E.useEffect(() => {
        const v = a.getStreamingDomElement(n);
        return (
          (d.current = x1(v, {
            syntaxHighlighter: s == null ? void 0 : s.syntaxHighlighter,
            htmlSanitizer: s == null ? void 0 : s.htmlSanitizer,
            markdownLinkTarget: s == null ? void 0 : s.markdownLinkTarget,
            showCodeBlockCopyButton:
              s == null ? void 0 : s.showCodeBlockCopyButton,
            skipStreamingAnimation:
              s == null ? void 0 : s.skipStreamingAnimation,
            streamingAnimationSpeed:
              s == null ? void 0 : s.streamingAnimationSpeed,
            waitTimeBeforeStreamCompletion:
              s == null ? void 0 : s.waitTimeBeforeStreamCompletion,
            onComplete: s == null ? void 0 : s.onStreamComplete,
          })),
          i && d.current.next(i),
          () => {
            a.deleteStreamingDomElement(n);
          }
        );
      }, []),
      E.useEffect(
        () => () => {
          (f.current = null), (d.current = null), (m.current = null), p(void 0);
        },
        []
      ),
      E.useImperativeHandle(
        t,
        () => ({
          streamChunk: (v) => {
            var h, y;
            m.current && ((h = m.current) == null || h.call(m, v)),
              typeof v == "string" && ((y = d.current) == null || y.next(v));
          },
          completeStream: () => {
            var v;
            (v = d.current) == null || v.complete();
          },
          cancelStream: () => {
            var v;
            (v = d.current) == null || v.cancel();
          },
        }),
        []
      );
    const w = o || void 0;
    return A.jsxs("div", {
      className: `${zm} ${Ul[r]} ${Fl.received}`,
      children: [
        w &&
          A.jsx(w, {
            uid: n,
            status: r,
            containerRef: u,
            content: l,
            contentType: "text",
            serverResponse: [],
            dataTransferMode: "stream",
          }),
        !w && A.jsx("div", { className: "nlux-markdownStream-root", ref: u }),
      ],
    });
  },
  $m = (e, t) => {
    if (!t || t === "Enter") {
      const n = e.key === "Enter" && !e.nativeEvent.isComposing,
        r = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
      return n && !r;
    }
    return !!(
      t === "CommandEnter" &&
      e.key === "Enter" &&
      (e.getModifierState("Control") || e.getModifierState("Meta"))
    );
  },
  C1 = (e) => {
    const { markdownOptions: t } = e,
      n = E.useRef(null),
      r = E.useMemo(
        () =>
          e.content
            ? Mm(e.content, {
                syntaxHighlighter: t == null ? void 0 : t.syntaxHighlighter,
                htmlSanitizer: t == null ? void 0 : t.htmlSanitizer,
                markdownLinkTarget: t == null ? void 0 : t.markdownLinkTarget,
                showCodeBlockCopyButton:
                  t == null ? void 0 : t.showCodeBlockCopyButton,
              })
            : "",
        [
          e.content,
          t == null ? void 0 : t.markdownLinkTarget,
          t == null ? void 0 : t.syntaxHighlighter,
          t == null ? void 0 : t.htmlSanitizer,
          t == null ? void 0 : t.showCodeBlockCopyButton,
        ]
      );
    E.useEffect(() => {
      n.current &&
        (t == null ? void 0 : t.showCodeBlockCopyButton) !== !1 &&
        Tm(n.current);
    }, [r, n.current, t == null ? void 0 : t.showCodeBlockCopyButton]);
    const o = E.useMemo(
        () => (t != null && t.htmlSanitizer ? t.htmlSanitizer(r) : r),
        [r, t == null ? void 0 : t.htmlSanitizer]
      ),
      s = E.useCallback(
        (c) => {
          if (!e.canResubmit) return;
          const u = c.currentTarget.textContent;
          return u
            ? $m(c, e.submitShortcutKey)
              ? (c.preventDefault(), void (e.onResubmit && e.onResubmit(u)))
              : void (
                  c.key === "Escape" &&
                  (c.preventDefault(),
                  (c.currentTarget.textContent = e.content),
                  c.currentTarget.blur())
                )
            : void 0;
        },
        [e.canResubmit, e.onResubmit, e.content]
      ),
      i = E.useCallback(
        (c) => {
          e.canResubmit &&
            (c.preventDefault(),
            (c.currentTarget.textContent = e.content),
            c.currentTarget.blur());
        },
        [e.canResubmit, e.content]
      ),
      a = E.useCallback(
        (c) => {
          if (!e.canResubmit) return;
          c.preventDefault();
          const u = document.createRange();
          u.selectNodeContents(c.currentTarget);
          const f = window.getSelection();
          f == null || f.removeAllRanges(), f == null || f.addRange(u);
        },
        [e.canResubmit]
      ),
      l = e.canResubmit ? "editable-markdown-container" : "";
    return A.jsx(Dm, {
      children: A.jsx("div", {
        className: "nlux-markdownStream-root" + (l ? ` ${l}` : ""),
        children: A.jsx("div", {
          className: "nlux-markdown-container",
          ref: n,
          dangerouslySetInnerHTML: { __html: o },
          contentEditable: e.canResubmit,
          onKeyDown: s,
          onBlur: i,
          onFocus: a,
        }),
      }),
    });
  };
class Dm extends E.Component {
  constructor() {
    super(...arguments), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(t) {
    We(
      "Markdown rendering error occurred. This could be due to a malformed markdown content, or it could be because the page requires an HTML sanitizer. Please check the error message for more details and consider configuring NLUX with a compatible sanitizer."
    ),
      this.props.onMarkdownRenderingError &&
        this.props.onMarkdownRenderingError(t);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
const tp = (e) => A.jsx(Dm, { children: A.jsx(C1, { ...e }) }),
  jm = (e) => {
    const t = typeof e.avatar == "string",
      n = !t && E.isValidElement(e.avatar);
    return A.jsxs("div", {
      className: "nlux-comp-avatar",
      children: [
        n && e.avatar,
        !n &&
          t &&
          A.jsx("div", {
            className: "nlux-comp-avatarContainer",
            children:
              e.avatar &&
              A.jsx("div", {
                className: "nlux-comp-avatarPicture",
                style: { backgroundImage: `url("${encodeURI(e.avatar)}")` },
              }),
          }),
      ],
    });
  },
  E1 = function (e, t) {
    var v, h, y, k, x, S, b, C;
    const n = E.useRef(null);
    E.useImperativeHandle(
      t,
      () => ({
        streamChunk: (I) =>
          setTimeout(() => {
            var P;
            return (P = n == null ? void 0 : n.current) == null
              ? void 0
              : P.streamChunk(I);
          }),
        completeStream: () =>
          setTimeout(() => {
            var I;
            return (I = n == null ? void 0 : n.current) == null
              ? void 0
              : I.completeStream();
          }),
        cancelStream: () => {
          var I;
          return (I = n == null ? void 0 : n.current) == null
            ? void 0
            : I.cancelStream();
        },
      }),
      []
    );
    const r = e.contentType === "server-component",
      o = e.direction === "received",
      s = e.direction === "sent",
      i = e.dataTransferMode === "stream",
      a = e.isPartOfInitialSegment,
      l = E.useCallback(() => {
        var I;
        return (I = e.onMarkdownStreamRendered) == null
          ? void 0
          : I.call(e, e.uid);
      }, [e.uid]);
    E.useEffect(() => {
      var I;
      i ||
        r ||
        a ||
        (I = e.onMarkdownStreamRendered) == null ||
        I.call(e, e.uid);
    }, []);
    const c = (function (I) {
        const {
          uid: P,
          status: D,
          dataTransferMode: B,
          contentType: z,
          fetchedContent: j,
          streamedContent: W,
          streamedServerResponse: fe,
          fetchedServerResponse: G,
          direction: R,
          messageOptions: L,
        } = I;
        if ((L == null ? void 0 : L.responseRenderer) !== void 0) {
          if (B === "stream") {
            const H = {
              uid: P,
              status: D,
              dataTransferMode: B,
              contentType: z,
              content: W ?? [],
              serverResponse: fe ?? [],
            };
            return () => {
              const K = L.responseRenderer;
              return A.jsx(K, { ...H });
            };
          }
          const O = E.isValidElement(j),
            N = {
              uid: P,
              status: "complete",
              dataTransferMode: B,
              contentType: z,
              content: j ? (O ? [] : [j]) : [],
              serverComponent: O ? j : void 0,
              serverResponse: G ? [G] : [],
            };
          return () => {
            const H = L.responseRenderer;
            return A.jsx(H, { ...N });
          };
        }
        if (R === "sent") {
          if (typeof j == "string") {
            const O = j;
            return () => A.jsx(A.Fragment, { children: O });
          }
          return () => "";
        }
        if (typeof j == "string") {
          const O = j;
          return () =>
            A.jsx(tp, {
              messageUid: P,
              content: O,
              markdownOptions: {
                syntaxHighlighter: L == null ? void 0 : L.syntaxHighlighter,
                htmlSanitizer: L == null ? void 0 : L.htmlSanitizer,
                markdownLinkTarget: L == null ? void 0 : L.markdownLinkTarget,
                showCodeBlockCopyButton:
                  L == null ? void 0 : L.showCodeBlockCopyButton,
                skipStreamingAnimation:
                  L == null ? void 0 : L.skipStreamingAnimation,
              },
            });
        }
        return E.isValidElement(j)
          ? () => A.jsx(A.Fragment, { children: j })
          : () => "";
      })(e),
      u = (function (I) {
        var P;
        return E.useCallback(() => {
          var B, z, j;
          if (
            ((B = I.messageOptions) == null ? void 0 : B.promptRenderer) ===
            void 0
          )
            return A.jsx(tp, {
              messageUid: I.uid,
              content: I.fetchedContent,
              markdownOptions: {
                htmlSanitizer:
                  (z = I.messageOptions) == null ? void 0 : z.htmlSanitizer,
              },
              canResubmit:
                (j = I.messageOptions) == null
                  ? void 0
                  : j.editableUserMessages,
              submitShortcutKey: I.submitShortcutKey,
              onResubmit: (W) => {
                I.onPromptResubmit && I.onPromptResubmit(W);
              },
            });
          const D = I.messageOptions.promptRenderer;
          return A.jsx(D, {
            uid: I.uid,
            prompt: I.fetchedContent,
            onResubmit: (W) => {
              I.onPromptResubmit && I.onPromptResubmit(W);
            },
          });
        }, [
          (P = I.messageOptions) == null ? void 0 : P.promptRenderer,
          I.fetchedContent,
          I.uid,
        ]);
      })(e),
      f = E.useMemo(() => E.forwardRef(S1), []),
      d = (function (I) {
        const P = E.useMemo(
          () =>
            A.jsxs("div", {
              className: "nlux-comp-chatItem-participantInfo",
              children: [
                I.avatar !== void 0 &&
                  A.jsx(jm, { name: I.name, avatar: I.avatar }),
                A.jsx("span", {
                  className: "nlux-comp-chatItem-participantName",
                  children: I.name,
                }),
              ],
            }),
          [I.avatar, I.name]
        );
        return () => A.jsx(A.Fragment, { children: P });
      })(e),
      m = `nlux-comp-chatItem ${e.direction ? ep[e.direction] : ep.received} ${
        e.layout === "bubbles" ? w1 : k1
      }`,
      g = e.status ? Ul[e.status] : Ul.rendered,
      p = e.direction ? Fl[e.direction] : Fl.received,
      w = `${zm} ${g} ${p}`;
    return A.jsxs("div", {
      className: m,
      children: [
        A.jsx(d, {}),
        o &&
          i &&
          !r &&
          A.jsx(
            f,
            {
              uid: e.uid,
              status: e.status,
              ref: n,
              direction: e.direction,
              responseRenderer:
                (v = e.messageOptions) == null ? void 0 : v.responseRenderer,
              markdownContainersController: e.markdownContainersController,
              markdownOptions: {
                syntaxHighlighter:
                  (h = e.messageOptions) == null ? void 0 : h.syntaxHighlighter,
                htmlSanitizer:
                  (y = e.messageOptions) == null ? void 0 : y.htmlSanitizer,
                markdownLinkTarget:
                  (k = e.messageOptions) == null
                    ? void 0
                    : k.markdownLinkTarget,
                showCodeBlockCopyButton:
                  (x = e.messageOptions) == null
                    ? void 0
                    : x.showCodeBlockCopyButton,
                skipStreamingAnimation:
                  (S = e.messageOptions) == null
                    ? void 0
                    : S.skipStreamingAnimation,
                streamingAnimationSpeed:
                  (b = e.messageOptions) == null
                    ? void 0
                    : b.streamingAnimationSpeed,
                waitTimeBeforeStreamCompletion:
                  (C = e.messageOptions) == null
                    ? void 0
                    : C.waitTimeBeforeStreamCompletion,
                onStreamComplete: l,
              },
            },
            "do-not-change"
          ),
        o &&
          i &&
          r &&
          A.jsx("div", { className: w, children: e.fetchedContent }),
        o && !i && A.jsx("div", { className: w, children: A.jsx(c, {}) }),
        s && A.jsx("div", { className: w, children: A.jsx(u, {}) }),
      ],
    });
  },
  np = (e) =>
    typeof e == "string" ||
    typeof e == "number" ||
    typeof e == "boolean" ||
    e == null,
  ks = (e, t) => {
    var n, r;
    return e === "assistant"
      ? ((n = t == null ? void 0 : t.assistant) == null ? void 0 : n.name) ??
          "Assistant"
      : e === "user"
      ? ((r = t == null ? void 0 : t.user) == null ? void 0 : r.name) ?? "User"
      : "";
  },
  xs = (e, t) => {
    var n, r;
    return e === "assistant"
      ? (n = t == null ? void 0 : t.assistant) == null
        ? void 0
        : n.avatar
      : e === "user"
      ? (r = t == null ? void 0 : t.user) == null
        ? void 0
        : r.avatar
      : void 0;
  },
  b1 = function (e, t) {
    const { chatSegment: n, containerRef: r } = e,
      [o, s] = E.useState(!1),
      i = E.useMemo(() => new Map(), []),
      a = E.useMemo(() => new Map(), []),
      l = E.useRef(new Map()),
      c = E.useRef(new Map());
    ((m, g, p, w) => {
      E.useEffect(() => {
        if (m.length === 0)
          return w.clear(), g.current.clear(), void p.current.clear();
        const v = new Set(w.keys()),
          h = new Set(m.map((y) => y.uid));
        v.forEach((y) => {
          h.has(y) || w.delete(y);
        }),
          new Set(g.current.keys()).forEach((y) => {
            h.has(y) || (g.current.delete(y), p.current.delete(y));
          });
      }, [m]);
    })(n.items, l, c, i),
      E.useImperativeHandle(
        t,
        () => ({
          streamChunk: (m, g) => {
            const p = i.get(m);
            if (p != null && p.current) {
              const w = p.current.streamChunk;
              (a.get(m) ?? []).forEach((v) => {
                w(v);
              }),
                a.delete(m),
                w(g);
            } else {
              const w = a.get(m) ?? [];
              a.set(m, [...w, g]);
            }
          },
          completeStream: (m) => {
            const g = i.get(m);
            g != null && g.current
              ? (g.current.completeStream(), i.delete(m))
              : s(!0);
          },
          cancelStreams: () => {
            a.clear(),
              i.forEach((m) => {
                var g;
                (g = m.current) == null || g.cancelStream();
              });
          },
        }),
        []
      ),
      E.useEffect(() => {
        a.size > 0 &&
          a.forEach((m, g) => {
            const p = i.get(g);
            p != null &&
              p.current &&
              (m.forEach((w) => {
                var v;
                (v = p == null ? void 0 : p.current) == null ||
                  v.streamChunk(w);
              }),
              a.delete(g),
              o && (p.current.completeStream(), s(!1)));
          });
      });
    const u = E.useMemo(
        () =>
          n.status !== "active"
            ? null
            : A.jsx("div", {
                className: "nlux-chatSegment-loader-container",
                children: e.Loader,
              }),
        [n.status, e.Loader]
      ),
      f = E.useMemo(() => E.forwardRef(E1), []),
      d = E.useCallback((m) => {
        var g;
        (g = e.onMarkdownStreamRendered) == null || g.call(e, n.uid, m);
      }, []);
    return n.items.length === 0
      ? null
      : A.jsxs("div", {
          ref: r,
          className: F0(n.status),
          children: [n.items.map((m) => T1(e, f, n, m, i, c, l, d)), u],
        });
  },
  T1 = function (e, t, n, r, o, s, i, a) {
    var d;
    const l = e.isInitialSegment;
    let c = o.get(r.uid);
    c || ((c = E.createRef()), o.set(r.uid, c));
    let u = r.content,
      f = "text";
    if (typeof u == "function") {
      const m = s.current.get(r.uid),
        g = i.current.get(r.uid);
      if (m && g) (u = g), (f = "server-component");
      else {
        i.current.delete(r.uid), s.current.delete(r.uid);
        try {
          const p = u;
          if (((u = A.jsx(p, {})), !u || !Yp.isValidElement(u)))
            throw new Error(
              "Invalid React element returned from the AI chat content function."
            );
          (f = "server-component"),
            i.current.set(r.uid, u),
            s.current.set(r.uid, p);
        } catch {
          return (
            We(`The type of the AI chat content is an invalid function.
If you're looking to render a React Server Components, please refer to docs.nlkit.com/nlux for more information.
`),
            null
          );
        }
      }
    }
    if (r.participantRole === "user")
      return r.status !== "complete"
        ? (Bo(
            `User chat item should be always be in complete state â€” Current status: ${r.status} â€” Segment UID: ${n.uid}`
          ),
          null)
        : np(u)
        ? A.jsx(
            t,
            {
              ref: c,
              uid: r.uid,
              status: "complete",
              direction: "sent",
              contentType: f,
              dataTransferMode: "batch",
              fetchedContent: r.content,
              markdownContainersController: e.markdownContainersController,
              layout: e.layout,
              messageOptions: e.messageOptions,
              isPartOfInitialSegment: l,
              name: ks(r.participantRole, e.personaOptions),
              avatar: xs(r.participantRole, e.personaOptions),
              submitShortcutKey: e.submitShortcutKey,
              onPromptResubmit: (m) =>
                e.onPromptResubmit(e.chatSegment.uid, r.uid, m),
            },
            r.uid
          )
        : (Bo(
            `User chat item should have primitive content (string, number, boolean, null) â€” Current content: ${JSON.stringify(
              u
            )} â€” Segment UID: ${n.uid}`
          ),
          null);
    if (r.status === "complete")
      return r.dataTransferMode === "stream"
        ? A.jsx(
            t,
            {
              ref: c,
              uid: r.uid,
              status: r.status,
              direction: "received",
              contentType: f,
              dataTransferMode: r.dataTransferMode,
              markdownContainersController: e.markdownContainersController,
              onMarkdownStreamRendered: a,
              streamedContent: u,
              streamedServerResponse: r.serverResponse,
              layout: e.layout,
              messageOptions: e.messageOptions,
              isPartOfInitialSegment: l,
              name: ks(r.participantRole, e.personaOptions),
              avatar: xs(r.participantRole, e.personaOptions),
            },
            r.uid
          )
        : f !== "text" ||
          np(u) ||
          ((d = e.messageOptions) != null && d.responseRenderer)
        ? A.jsx(
            t,
            {
              ref: c,
              uid: r.uid,
              status: "complete",
              direction: "received",
              contentType: f,
              dataTransferMode: r.dataTransferMode,
              markdownContainersController: e.markdownContainersController,
              onMarkdownStreamRendered: a,
              fetchedContent: u,
              fetchedServerResponse: r.serverResponse,
              layout: e.layout,
              messageOptions: e.messageOptions,
              isPartOfInitialSegment: l,
              name: ks(r.participantRole, e.personaOptions),
              avatar: xs(r.participantRole, e.personaOptions),
            },
            r.uid
          )
        : (We(
            `When the type of the AI chat content is not primitive (object or array), a custom renderer must be provided â€” Current content: ${JSON.stringify(
              u
            )} â€” Segment UID: ${n.uid}`
          ),
          null);
    if (r.status === "streaming") {
      const m = f === "server-component" && E.isValidElement(u) ? u : void 0;
      return A.jsx(
        t,
        {
          ref: c,
          uid: r.uid,
          status: "streaming",
          direction: "received",
          contentType: f,
          dataTransferMode: r.dataTransferMode,
          markdownContainersController: e.markdownContainersController,
          onMarkdownStreamRendered: a,
          fetchedContent: m,
          layout: e.layout,
          messageOptions: e.messageOptions,
          isPartOfInitialSegment: l,
          name: ks(r.participantRole, e.personaOptions),
          avatar: xs(r.participantRole, e.personaOptions),
        },
        r.uid
      );
    }
  },
  A1 = function (e, t) {
    const {
        segments: n,
        personaOptions: r,
        conversationOptions: o,
        onLastActiveSegmentChange: s,
      } = e,
      i = E.createRef();
    (function (u, f, d) {
      const m = E.useMemo(() => {
          const p = u.length > 0 ? u[u.length - 1] : void 0;
          return (p == null ? void 0 : p.status) === "active" ? p.uid : void 0;
        }, [u]),
        g = E.useRef(void 0);
      E.useEffect(() => {
        if (!d) return;
        const p = g.current;
        if (
          m === (p == null ? void 0 : p.uid) &&
          f.current === (p == null ? void 0 : p.div)
        )
          return;
        const w = m && f.current ? { uid: m, div: f.current } : void 0;
        (w || g.current) && (d(w), (g.current = w));
      });
    })(n, i, s);
    const a = (function (u) {
        const f = E.useMemo(() => new Map(), []);
        return (
          E.useEffect(() => {
            if (u.length === 0) return void f.clear();
            const d = new Set(f.keys()),
              m = new Set(u.map((g) => g.uid));
            d.forEach((g) => {
              m.has(g) || f.delete(g);
            });
          }, [u]),
          {
            get: (d) => {
              var m;
              return (m = f.get(d)) == null ? void 0 : m.current;
            },
            getRef: (d) => f.get(d),
            set: (d, m) => {
              f.set(d, m);
            },
            remove: (d) => {
              f.delete(d);
            },
          }
        );
      })(n),
      l = ((u) =>
        E.useMemo(() => {
          return (f = u == null ? void 0 : u.layout), f ?? "bubbles";
        }, [u == null ? void 0 : u.layout]))(o);
    E.useImperativeHandle(
      t,
      () => ({
        streamChunk: (u, f, d) => {
          const m = a.get(u);
          m == null || m.streamChunk(f, d);
        },
        completeStream: (u, f) => {
          const d = a.get(u);
          d == null || d.completeStream(f);
        },
        cancelSegmentStreams: (u) => {
          const f = a.get(u);
          f == null || f.cancelStreams();
        },
      }),
      []
    );
    const c = E.useMemo(() => E.forwardRef(b1), []);
    return A.jsx("div", {
      className: "nlux-chatSegments-container",
      children: n.map((u, f) => {
        const d = f === n.length - 1,
          m = u.uid === "initial";
        let g = a.getRef(u.uid);
        return (
          g || ((g = E.createRef()), a.set(u.uid, g)),
          A.jsx(
            c,
            {
              ref: g,
              containerRef: d ? i : void 0,
              markdownContainersController: e.markdownContainersController,
              chatSegment: u,
              isInitialSegment: m,
              layout: l,
              personaOptions: r,
              messageOptions: e.messageOptions,
              Loader: e.Loader,
              submitShortcutKey: e.submitShortcutKey,
              onPromptResubmit: e.onPromptResubmit,
              onMarkdownStreamRendered: e.onMarkdownStreamRendered,
            },
            u.uid
          )
        );
      }),
    });
  },
  I1 = {
    typing: "nlux-composer--typing",
    "submitting-prompt": "nlux-composer--submitting",
    "submitting-conversation-starter": "nlux-composer--submitting",
    waiting: "nlux-composer--waiting",
  },
  P1 = () =>
    A.jsx("div", {
      className: "nlux-comp-cancelIcon",
      children: A.jsx("div", { className: "nlux-comp-cancelIcon-container" }),
    }),
  R1 = () =>
    A.jsx("div", {
      className: "nlux-comp-sendIcon",
      children: A.jsx("div", { className: "nlux-comp-sendIcon-container" }),
    }),
  ba = [
    "submitting-prompt",
    "submitting-edit",
    "submitting-conversation-starter",
    "submitting-external-message",
  ],
  _1 = (e) => {
    const t = `nlux-comp-composer ${I1[e.status] || ""}`,
      n = ba.includes(e.status),
      r = !e.hasValidInput || e.status === "waiting" || ba.includes(e.status),
      o = e.status === "typing" || e.status === "waiting",
      s =
        e.hideStopButton !== !0 &&
        (ba.includes(e.status) || e.status === "waiting"),
      i = E.useRef(null);
    E.useEffect(() => {
      e.status === "typing" && e.autoFocus && i.current && i.current.focus();
    }, [e.status, e.autoFocus, i.current]);
    const a = E.useMemo(
        () => (u) => {
          var f;
          (f = e.onChange) == null || f.call(e, u.target.value);
        },
        [e.onChange]
      ),
      l = E.useMemo(
        () => () => {
          var u;
          (u = e.onSubmit) == null || u.call(e);
        },
        [e.onSubmit]
      ),
      c = E.useMemo(
        () => (u) => {
          $m(u, e.submitShortcut) && (u.preventDefault(), l());
        },
        [l, e.submitShortcut]
      );
    return A.jsxs("div", {
      className: t,
      children: [
        A.jsx("textarea", {
          tabIndex: 0,
          ref: i,
          disabled: n,
          placeholder: e.placeholder,
          value: e.prompt,
          onChange: a,
          onKeyDown: c,
        }),
        !s &&
          A.jsxs("button", {
            tabIndex: 0,
            disabled: r,
            onClick: () => e.onSubmit(),
            children: [o && A.jsx(R1, {}), !o && e.Loader],
          }),
        s &&
          A.jsx("button", {
            tabIndex: 0,
            onClick: e.onCancel,
            children: A.jsx(P1, {}),
          }),
      ],
    });
  },
  Wl = (e) => {
    var r;
    const t = {},
      n = Object.keys(e);
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      s !== "personaOptions" &&
        s !== "messageOptions" &&
        s !== "adapter" &&
        s !== "events" &&
        Object.assign(t, { [s]: e[s] });
    }
    return (
      e.personaOptions &&
        ((t.personaOptions = {}),
        e.personaOptions.assistant &&
          (t.personaOptions.assistant = {
            name: e.personaOptions.assistant.name,
            avatar:
              typeof e.personaOptions.assistant.avatar == "string"
                ? e.personaOptions.assistant.avatar
                : "<REACT ELEMENT />",
            tagline: e.personaOptions.assistant.tagline,
          }),
        e.personaOptions.user &&
          (t.personaOptions.user = {
            name: e.personaOptions.user.name,
            avatar:
              typeof e.personaOptions.user.avatar == "string"
                ? e.personaOptions.user.avatar
                : "<REACT ELEMENT />",
          })),
      e.messageOptions &&
        (t.messageOptions = {
          ...e.messageOptions,
          responseRenderer: e.messageOptions.responseRenderer
            ? () => null
            : void 0,
          promptRenderer: e.messageOptions.promptRenderer ? () => null : void 0,
        }),
      (r = e.conversationOptions) != null &&
        r.conversationStarters &&
        (t.conversationOptions = {
          ...e.conversationOptions,
          conversationStarters: e.conversationOptions.conversationStarters.map(
            (o) => ({ ...o, icon: o.icon ? "<REACT ELEMENT />" : void 0 })
          ),
        }),
      t
    );
  };
var L1 = Object.defineProperty,
  Ss = (e, t, n) =>
    ((r, o, s) =>
      o in r
        ? L1(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
        : (r[o] = s))(e, typeof t != "symbol" ? t + "" : t, n);
class B1 extends Error {
  constructor(t = {}) {
    super(t.message),
      Ss(this, "exceptionId"),
      Ss(this, "message"),
      Ss(this, "source"),
      Ss(this, "type"),
      (this.message = t.message ?? ""),
      (this.source = t.source),
      (this.type = this.constructor.name),
      (this.exceptionId = t.exceptionId);
  }
}
const O1 = (e, t) => {
    let n,
      r = t,
      o = e,
      s = !0;
    const i = ((p, w) => {
        let v = !1;
        if (typeof p != "function")
          throw new B1({
            source: "x/throttle",
            message: "Callback must be a function",
          });
        return (...h) => {
          v ||
            (p.apply(void 0, h),
            (v = !0),
            setTimeout(function () {
              v = !1;
            }, w));
        };
      })(
        ((p) => {
          let w, v;
          return (h) => {
            const y = h.target;
            if (!(y instanceof HTMLElement)) return;
            const { scrollTop: k, clientHeight: x, scrollHeight: S } = y,
              b = S - 30,
              C = Math.ceil(k + x) >= b,
              I =
                w === void 0 || v === void 0
                  ? void 0
                  : k > w && v === S
                  ? "down"
                  : k < w && v === S
                  ? "up"
                  : void 0;
            (v = S), (w = k), p({ scrolledToBottom: C, scrollDirection: I });
          };
        })(({ scrolledToBottom: p, scrollDirection: w }) => {
          s ? w === "up" && (s = !1) : w === "down" && p && (s = !0);
        }),
        50
      ),
      a = (p) => {
        p.addEventListener("scroll", i);
      },
      l = (p) => {
        p == null || p.removeEventListener("scroll", i);
      },
      c = (p) => {
        (n == null ? void 0 : n.uid) === p &&
          (u == null || u.disconnect(),
          f == null || f.disconnect(),
          (n = void 0),
          (u = void 0),
          (f = void 0));
      };
    let u, f;
    const d = () => {
        o == null || o.scrollTo({ top: 5e4, behavior: "instant" });
      },
      m = () => {
        o && r && s && d();
      },
      g = () => {
        m();
      };
    return (
      a(o),
      {
        updateConversationContainer: (p) => {
          l(o), a(p), (o = p);
        },
        updateProps: ({ autoScroll: p }) => {
          r = p;
        },
        handleNewChatSegmentAdded: (p, w) => {
          n && (u == null || u.disconnect(), f == null || f.disconnect()),
            (n = { uid: p, container: w }),
            (u = new ResizeObserver(m)),
            u.observe(w),
            (f = new MutationObserver(g)),
            f.observe(w, { childList: !0, subtree: !0, characterData: !0 }),
            r && d();
        },
        handleChatSegmentRemoved: (p) => c(p),
        handleChatSegmentComplete: (p) => c(p),
        destroy: () => {
          n && (c(n.uid), (n = void 0)), l(o), (o = void 0);
        },
      }
    );
  },
  rp = !0,
  yi = (e) => {
    if (typeof e != "object" || e === null) return !1;
    const t = e;
    return (
      (typeof t.streamText == "function" || typeof t.batchText == "function") &&
      ["stream", "batch"].includes(t.dataTransferMode) &&
      typeof t.id == "string" &&
      typeof t.info == "object" &&
      t.info !== null &&
      typeof t.preProcessAiBatchedMessage == "function" &&
      typeof t.preProcessAiStreamedChunk == "function"
    );
  },
  Ce = (e, t = 1) => {
    setTimeout(() => {
      e();
    }, t);
  },
  M1 = (e, t, n, r, o, s, i, a, l) =>
    new Promise((c) => {
      const u = Lt(),
        f = [],
        d = [];
      let m = !1,
        g = !1,
        p = !1;
      const w = yi(n),
        v = {
          next: (h) => {
            if (g || p) return;
            let y, k;
            if (w) {
              const x = h,
                S = n.preProcessAiStreamedChunk(x, r);
              S != null && ((y = S), (k = x), f.push(y), d.push(k));
            } else (y = h), f.push(y);
            y != null
              ? (m ||
                  m ||
                  ((m = !0),
                  Ce(() => {
                    o.forEach((x) => {
                      x({
                        uid: u,
                        status: "streaming",
                        time: new Date(),
                        participantRole: "assistant",
                        dataTransferMode: "stream",
                      });
                    });
                  })),
                Ce(() => {
                  i.forEach((x) => {
                    x({ chunk: y, messageId: u, serverResponse: k });
                  });
                }))
              : We(
                  "Adapter returned an undefined or null value from streamText. This chunk will be ignored."
                );
          },
          complete: () => {
            g ||
              p ||
              ((p = !0),
              Ce(() => {
                const h = {
                  uid: u,
                  status: "complete",
                  content: f,
                  contentType: "text",
                  serverResponse: void 0,
                  time: new Date(),
                  participantRole: "assistant",
                  dataTransferMode: "stream",
                };
                s.forEach((y) => {
                  y(h);
                }),
                  c();
              }),
              Ce(() => {
                const h = {
                  uid: e,
                  status: "complete",
                  items: [
                    t,
                    {
                      uid: u,
                      status: "complete",
                      contentType: "text",
                      content: f,
                      serverResponse: d,
                      time: new Date(),
                      participantRole: "assistant",
                      dataTransferMode: "stream",
                    },
                  ],
                };
                a.forEach((y) => {
                  y(h);
                });
              }));
          },
          error: (h) => {
            g ||
              p ||
              ((g = !0),
              Ce(() => {
                l.forEach((y) => {
                  y("failed-to-stream-content", h);
                }),
                  c();
              }));
          },
        };
      n.streamText(t.content, v, r);
    }),
  z1 = (e, t, n) => {
    if (!e)
      return (() => {
        const h = new Set(),
          y = Lt(),
          k = { uid: y, status: "complete", items: [] };
        return (
          Ce(() => {
            h.forEach((x) => {
              x(k);
            }),
              h.clear();
          }),
          {
            segment: k,
            observable: {
              on: (x, S) => {
                x === "complete" && h.add(S);
              },
              removeListener: (x, S) => {
                h.delete(S);
              },
              destroy: () => {
                h.clear();
              },
              get segmentId() {
                return y;
              },
            },
            dataTransferMode: "batch",
          }
        );
      })();
    const r = t;
    if (
      r.streamText === void 0 &&
      r.batchText === void 0 &&
      r.streamServerComponent === void 0
    )
      return ((h) => {
        const y = new Set(),
          k = Lt(),
          x = { uid: k, status: "error", items: [] };
        return (
          Ce(() => {
            y.forEach((S) => S(h)), y.clear();
          }),
          {
            segment: x,
            dataTransferMode: "stream",
            observable: {
              on: (S, b) => {
                S === "error" && y.add(b);
              },
              removeListener: (S, b) => {
                y.delete(b);
              },
              destroy: () => {
                y.clear();
              },
              get segmentId() {
                return k;
              },
            },
          }
        );
      })("no-data-transfer-mode-supported");
    const o = Lt(),
      s = ((h) => ({
        uid: Lt(),
        time: new Date(),
        status: "complete",
        participantRole: "user",
        content: h,
        contentType: "text",
      }))(e);
    let i,
      a,
      l,
      c,
      u,
      f,
      d = new Set(),
      m = new Set(),
      g = new Set();
    Ce(() => {
      d != null &&
        d.size &&
        (d.forEach((h) => {
          h(s);
        }),
        d.clear(),
        (d = void 0));
    });
    const p = ((h) => {
      const y = [],
        k = h,
        x = h;
      ((k == null ? void 0 : k.streamText) === void 0 &&
        (x == null ? void 0 : x.streamServerComponent) === void 0) ||
        y.push("stream"),
        (k == null ? void 0 : k.batchText) !== void 0 && y.push("batch");
      const S = yi(h) ? h : void 0,
        b = (S == null ? void 0 : S.dataTransferMode) ?? void 0,
        C = y.length === 1 ? y[0] : "stream";
      return b ?? C;
    })(t);
    ((h) => ("streamServerComponent" in h ? "server-component" : "text"))(t) ===
    "server-component"
      ? ((l = new Set()),
        (a = new Set()),
        ((h, y, k, x, S, b, C, I) =>
          new Promise((P, D) => {
            try {
              const B = y.content,
                z = Lt(),
                j = "assistant",
                W = "streaming",
                fe = new Date(),
                G = "stream";
              let R, L;
              const O = () => {
                  Ce(() => {
                    b.forEach((K) => {
                      R && L && K({ ...R, content: L, status: "complete" });
                    });
                  }, 20);
                  const H = { uid: h, status: "complete", items: [y, R] };
                  Ce(() => {
                    C.forEach((K) => {
                      K(H);
                    }),
                      P();
                  }, 20);
                },
                N = () => {
                  I.forEach((H) => {
                    H(
                      "failed-to-stream-server-component",
                      new Error("Failed to load content")
                    );
                  });
                };
              (L = k.streamServerComponent(B, x, {
                onServerComponentReceived: O,
                onError: N,
              })),
                (R = {
                  uid: z,
                  content: L,
                  contentType: "server-component",
                  participantRole: j,
                  status: W,
                  time: fe,
                  dataTransferMode: G,
                }),
                Ce(() => {
                  S.forEach((H) => {
                    H(R);
                  });
                }, 10);
            } catch (B) {
              We(B);
              const z =
                B instanceof Error
                  ? B
                  : typeof B == "string"
                  ? new Error(B)
                  : new Error("Unknown error");
              Ce(() => {
                I.forEach((j) => j("failed-to-load-content", z));
              });
            }
          }))(o, s, t, n, a, l, m, g).finally(() => {
          Ce(() => v());
        }))
      : p === "batch"
      ? ((i = new Set()),
        (async (h, y, k, x, S, b, C) => {
          try {
            const I = y.content,
              P = yi(k) ? k : void 0,
              D = P !== void 0,
              B = Lt(),
              z = "assistant",
              j = "complete",
              W = new Date(),
              fe = "batch";
            let G;
            if (D) {
              const O = await P.batchText(I, x),
                N = P.preProcessAiBatchedMessage(O, x);
              N != null &&
                (G = {
                  uid: B,
                  content: N,
                  contentType: "text",
                  serverResponse: O,
                  participantRole: z,
                  status: j,
                  time: W,
                  dataTransferMode: fe,
                });
            } else
              G = {
                uid: B,
                content: await k.batchText(I, x),
                contentType: "text",
                serverResponse: void 0,
                participantRole: z,
                status: j,
                time: W,
                dataTransferMode: fe,
              };
            if (!G)
              throw new Error(
                "Response from adapter was undefined or cannot be processed"
              );
            const R = G;
            Ce(() => {
              S.forEach((O) => {
                O(R);
              });
            });
            const L = { uid: h, status: "complete", items: [y, G] };
            Ce(() => {
              b.forEach((O) => {
                O(L);
              });
            });
          } catch (I) {
            We(I);
            const P =
              I instanceof Error
                ? I
                : typeof I == "string"
                ? new Error(I)
                : new Error("Unknown error");
            Ce(() => {
              C.forEach((D) => D("failed-to-load-content", P));
            });
          }
        })(o, s, t, n, i, m, g).finally(() => {
          Ce(() => v());
        }))
      : ((c = new Set()),
        (u = new Set()),
        (f = new Set()),
        M1(o, s, t, n, c, u, f, m, g).finally(() => {
          Ce(() => v());
        }));
    const v = () => {
      d == null || d.clear(),
        (d = void 0),
        i == null || i.clear(),
        (i = void 0),
        a == null || a.clear(),
        (a = void 0),
        l == null || l.clear(),
        (l = void 0),
        c == null || c.clear(),
        (c = void 0),
        u == null || u.clear(),
        (u = void 0),
        f == null || f.clear(),
        (f = void 0),
        m == null || m.clear(),
        (m = void 0),
        g == null || g.clear(),
        (g = void 0);
    };
    return {
      segment: { status: "active", uid: o, items: [] },
      dataTransferMode: p,
      observable: {
        get segmentId() {
          return o;
        },
        on: (h, y) => {
          h === "userMessageReceived" && d
            ? d.add(y)
            : h === "aiMessageReceived" && i
            ? i.add(y)
            : h === "aiServerComponentStreamStarted" && a
            ? a.add(y)
            : h === "aiServerComponentStreamed" && l
            ? l.add(y)
            : h === "aiMessageStreamStarted" && c
            ? c.add(y)
            : h === "aiMessageStreamed" && u
            ? u.add(y)
            : h === "aiChunkReceived" && f
            ? f.add(y)
            : h === "complete" && m
            ? m.add(y)
            : h === "error" && g && g.add(y);
        },
        removeListener: (h, y) => {
          h !== "userMessageReceived"
            ? h !== "aiMessageReceived"
              ? h !== "aiMessageStreamStarted"
                ? h !== "aiMessageStreamed"
                  ? h !== "aiChunkReceived"
                    ? h !== "complete"
                      ? h !== "error" || g == null || g.delete(y)
                      : m == null || m.delete(y)
                    : f == null || f.delete(y)
                  : u == null || u.delete(y)
                : c == null || c.delete(y)
              : i == null || i.delete(y)
            : d == null || d.delete(y);
        },
        destroy: () => v(),
      },
    };
  },
  $1 = {
    "data-transfer-mode-not-supported":
      "Requested data transfer mode is not supported",
    "no-data-transfer-mode-supported":
      "Adapter does not support any valid data transfer modes",
    "connection-error": "Connection error",
    "invalid-credentials": "Invalid credentials",
    "invalid-api-key": "Invalid API key",
    "http-server-side-error": "HTTP server side error",
    "http-client-side-error": "HTTP client side error",
    "failed-to-load-content": "Failed to load content",
    "failed-to-stream-content": "Failed to stream content",
    "failed-to-stream-server-component": "Failed to stream server component",
    "failed-to-render-content": "Failed to display content",
  },
  D1 = (e) => {
    var y;
    const {
        aiChatProps: t,
        adapterToUse: n,
        prompt: r,
        composerOptions: o,
        showException: s,
        initialSegment: i,
        newSegments: a,
        cancelledSegmentIds: l,
        cancelledMessageIds: c,
        setChatSegments: u,
        setComposerStatus: f,
        setPrompt: d,
        conversationRef: m,
      } = e,
      g = E.useMemo(() => r.length > 0, [r]),
      p = E.useRef(r);
    p.current = r;
    const w = E.useRef({
        newSegments: a,
        cancelledSegmentIds: l,
        cancelledMessageIds: c,
        setChatSegments: u,
        setComposerStatus: f,
        showException: s,
        setPrompt: d,
      }),
      v = E.useRef({});
    E.useEffect(() => {
      w.current = {
        newSegments: a,
        cancelledSegmentIds: l,
        cancelledMessageIds: c,
        setChatSegments: u,
        setComposerStatus: f,
        showException: s,
        setPrompt: d,
      };
    }, [a, l, c, u, f, s, d]);
    const h = ((k, x, S) =>
      E.useMemo(() => {
        const b = ((I) => {
            const P = [];
            return (
              I.forEach((D) => {
                D.items.forEach((B) => {
                  if (B.status === "complete") {
                    if (B.participantRole === "assistant")
                      P.push({ role: "assistant", message: B.content });
                    else if (B.participantRole === "user")
                      return P.push({ role: "user", message: B.content });
                  }
                });
              }),
              P
            );
          })(x),
          C = S === "max" || S === void 0 ? b : S > 0 ? b.slice(-S) : void 0;
        return { aiChatProps: Wl(k), conversationHistory: C };
      }, [k, x, S]))(
      t,
      i ? [i, ...a] : a,
      (y = t.conversationOptions) == null ? void 0 : y.historyPayloadSize
    );
    return (
      E.useEffect(() => {
        v.current = t.events || {};
      }, [t.events]),
      E.useCallback(() => {
        if (!n)
          return void We("No valid adapter was provided to AiChat component");
        if (!g || (o != null && o.disableSubmitButton)) return;
        f("submitting-prompt");
        const k = r,
          x = new Set(),
          S = yi(n)
            ? n
            : n.streamServerComponent
            ? { streamServerComponent: n.streamServerComponent }
            : { batchText: n.batchText, streamText: n.streamText },
          { segment: b, observable: C } = z1(k, S, h);
        if (b.status === "error")
          return (
            We("Error occurred while submitting prompt"),
            s("Error occurred while submitting prompt"),
            f("typing"),
            void (p.current === "" && d(k))
          );
        const I = (P) => {
          const D = w.current.newSegments.map((B) =>
            B.uid !== C.segmentId ? B : { ...B, items: [...B.items, { ...P }] }
          );
          w.current.setChatSegments(D);
        };
        C.on("userMessageReceived", (P) => {
          var D, B;
          ((D = w.current) != null && D.cancelledMessageIds.includes(P.uid)) ||
            (I(P),
            (B = v.current) != null &&
              B.messageSent &&
              v.current.messageSent({ uid: P.uid, message: P.content }));
        }),
          C.on("aiMessageStreamStarted", (P) => {
            var D, B;
            ((D = w.current) != null &&
              D.cancelledMessageIds.includes(P.uid)) ||
              (I(P),
              w.current.setComposerStatus("waiting"),
              p.current === k && w.current.setPrompt(""),
              x.add(P.uid),
              (B = v.current) != null &&
                B.messageStreamStarted &&
                v.current.messageStreamStarted({ uid: P.uid }));
          }),
          C.on("aiServerComponentStreamStarted", (P) => {
            var D, B, z;
            ((D = w.current) != null &&
              D.cancelledMessageIds.includes(P.uid)) ||
              (I(P),
              w.current.setComposerStatus("waiting"),
              p.current === k && w.current.setPrompt(""),
              x.add(P.uid),
              (B = v.current) != null &&
                B.serverComponentStreamStarted &&
                ((z = v.current) == null ||
                  z.serverComponentStreamStarted({ uid: P.uid })));
          }),
          C.on("aiServerComponentStreamed", (P) => {
            var D, B, z;
            ((D = w.current) != null &&
              D.cancelledMessageIds.includes(P.uid)) ||
              ((B = v.current) != null &&
                B.serverComponentRendered &&
                !w.current.cancelledMessageIds.includes(P.uid) &&
                ((z = v.current) == null ||
                  z.serverComponentRendered({ uid: P.uid })));
          }),
          C.on("aiMessageReceived", (P) => {
            var B, z;
            if (
              (B = w.current) != null &&
              B.cancelledMessageIds.includes(P.uid)
            )
              return;
            const D = w.current.newSegments.map((j) =>
              j.uid !== C.segmentId
                ? j
                : { ...j, items: [...j.items, { ...P }] }
            );
            w.current.setChatSegments(D),
              (z = v.current) != null &&
                z.messageReceived &&
                v.current.messageReceived({ uid: P.uid, message: P.content });
          }),
          C.on("complete", (P) => {
            var B;
            if (
              (B = w.current) != null &&
              B.cancelledMessageIds.includes(P.uid)
            )
              return;
            w.current.setComposerStatus("typing");
            const D = w.current.newSegments.map((z) =>
              z.uid !== C.segmentId ? z : { ...P }
            );
            w.current.setChatSegments(D),
              p.current === k && d(""),
              x.size > 0 &&
                (x.forEach((z) => {
                  requestAnimationFrame(() => {
                    var j;
                    (j = m.current) == null || j.completeStream(C.segmentId, z);
                  });
                }),
                x.clear());
          }),
          C.on("aiChunkReceived", ({ messageId: P, chunk: D }) => {
            var B, z;
            ((B = w.current) != null && B.cancelledMessageIds.includes(P)) ||
              (z = m.current) == null ||
              z.streamChunk(b.uid, P, D);
          }),
          C.on("aiMessageStreamed", (P) => {
            var D, B, z;
            ((D = w.current) != null &&
              D.cancelledMessageIds.includes(P.uid)) ||
              ((B = v.current) != null &&
                B.messageReceived &&
                ((z = v.current) == null ||
                  z.messageReceived({ uid: P.uid, message: P.content })));
          }),
          C.on("error", (P, D) => {
            var j;
            const B = w.current.newSegments.filter((W) => W.uid !== b.uid),
              z = $1[P];
            w.current.setChatSegments(B),
              w.current.setComposerStatus("typing"),
              w.current.showException(z),
              p.current === "" && d(k),
              (j = v.current) != null &&
                j.error &&
                v.current.error({ errorId: P, message: z, errorObject: D });
          }),
          w.current.setChatSegments([...w.current.newSegments, b]);
      }, [r, n, h, s, w, o == null ? void 0 : o.disableSubmitButton])
    );
  },
  Nm = "nlux-comp-welcomeMessage",
  Hm = (e) =>
    A.jsxs("div", {
      className: Nm,
      children: [
        A.jsx(jm, { avatar: e.avatar, name: e.name }),
        A.jsx("div", {
          className: "nlux-comp-welcomeMessage-personaName",
          children: e.name,
        }),
        e.message &&
          A.jsx("div", {
            className: "nlux-comp-welcomeMessage-text",
            children: e.message,
          }),
      ],
    }),
  op = ({ children: e }) => A.jsx("div", { className: Nm, children: e }),
  j1 = () => {
    const e = E.useMemo(
      () =>
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAAewgAAHsIAXgkHaEAABj0SURBVHic7Z13vBxV2ce/Z29ugEQMEAICQUBAkBqqlCiRKqC0gApKE14poh8VUCmihv4SCB2CVAtFQBR9UZpCaMIL0ouAGIIEQgsJya27e/zjmb117+yUc+bM7J7v53Nys3dnzjx3dn9z2nOeR2mt8Xg89Sm5NsDjyTNeIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCKNsVdwzY4Ktqgej+v6RHwpQ8lqr2jFD3q+9UAPrGHDcwN8F6JD3hr1m0LHjgYnAWsAqwGrA8sDKwNLAOGAMsCTQPuDkMtANdAALgUXAPOBtYC4wB5gNvI5m7gBLhxjOiK8VwMAdpQOPrf1eD31PD/5dcJwa8lr+P+D4Ie8pCxtZ249/z3id1gTSoowHNgEmBWUDNGsBYy1eswy8BrwIPAs8BTyBiMeTEi+QdCwFfA6YAmwLbAaMHf7Ytsoo4NNB2XPA758GHgHuB2bBwFbGExUvkPisAOwK7ALsAKyQrR4is3FQjgR6EaH8CfgL8E+HdhUKL5BoLAHsBUwFdkczxq05sWkHdgwKiFhuBm7DtyyheIGEsyFwMHCA0nol18YYZLugnAfcAlwD3OPUopziBVKf3dEcCXzJtSGWGQ0cEJTHgV8A1wI9Dm3KFX4dZDD7A48iffVmF8dQNgdmAv8CTkCmoFseLxDhq8CTaH09Wm+J1rRwmYjWZyBC+TEy/mpZWl0gOwEPorkRzaT+BS1f0ExAcybwKvCtNDe5yLSqQNYAbkZzF5ptc/BlzHOZiGYm0vXcKukNLyqtKJD9gRdB7+v6m1ewsiXoR4CTE931gtJKAvkEcAua69Es4f77VthyKuLOsk3cD6CItIpADgReRjM1B1+wZigbo3kIOCPm51A4mn0dZDRwFVp/w7UhTcoJyETHQYizZNPRzALZXMGNwJquDWlyNgeeAw5DFhmbimYVyBHA5WjXZrQMJcRdZUvgaMe2GKUZBXIZWh/p2ogW5SjEf20v4H23ppiheQSiWBL4E5odXJvS4kxGNm7tiuxJKTTNIpBV0PwNWNu1IR4AVkKmgr8I3OnWlHTYE8iwfdqGGD6uWA/0LGS7qydf/AX4BvAb14YkxZ5AqtZqFkSAWwctR0s71OWcXwPLAhe7NiQJ1gSiKnamkHTf0qaaDDxg5SIe01yErEmd59qQuBR1DLI1WntxFItzkX7F+Y7tiEURXU0mAQ+5NsKTiBnIGlVhKFYLolgDzcPYmwLw2Ody4EPgJsd2RMKeQLThMYji42j+riQWlafY3Ai8hWaWa0MaYVEgButSgOYBJCaVpzn4G7AWmn+7NiSMYnSxNLcBG7k2w2OUEjKWXJ0cR1HJdxdLRho/Q3x7PM3HSsDdwHZ5dSzNexdrd+CnRmry5JXPA+eiOda1IfXIcxdrRTS3uzbCkwk/QMKh5u7zznMX6y7ys07TDTwJvAC8gkxTdiIxb5dGIqtvCHyWfD908sxtwIqA+SQfKcjrh3kG+RiU3wr8DvgrkrimEasAOyN74L9g0a5mpATcgWy6yg1Km16vCOg9bdlkJyq2AB4zakx8LgQuQPFaorPllu4AnIL0sT3ROREJWBeb9pPnm7bFpkCWSXimmovMbrjgLuBYFM+JKQlr0YP+fwzirOeJjP400pWNRfvJHxq3xJ43bzLdzQBnaQaO04pzLXixXKy0noUExF7VdOVNyu+QMZ1z7A2C48daWg/N9xzEeOpGxg3n2roVwDPARmieyUFMqyKUDYDvxD7PAnmZJQL4rYNrfoCkKbvb6lWkUfoQ2AIRi6cRmguBZVybYXFHYQxJK74JrG/Nlvp8BGyGUrMzvGYPmm1Av4qEQvWEcxWaqS4NyMM07yh05tsxe4FtUBmkShZHSyT3BgCLgc+h+Sf5asHzyD7AlmjtbFYzDwuF15O1C7tSnwee6/vijrK4vaQKDN9+/CqyK/JRexduGn4PrOzq4m4H6dL/38+aDfX5X+Dvfa+0li9wnC5hFJSITpUrUvfwTE6PAd81e9GmZCXgOFcXt7YOUj7l41EOewAJNJYVz1JvhV4H/7S3oUeV+lu/NA2LVqieClSrfWIZgUfJ2epxDukAxgHlsINGTVto/MIWW5C6T82BZXM0kzOePtwtdHqwtwrlavqlkJJClatSH6qRTfvlYFo172UMmh81/E5ZwGUXa3rGySm/D/o/oTe3qlFdZekShT/1R6ZNich6ysHdbXgj5qD12TlI3pn3ciKattBbaQFrAlHhZX0F2zU4xlzRvAicH3oTNX0th+pJ2IoooKIpdVZQOrh2NULRnKA0CzO7H8UsYxR8O+wYG7hqQX6eaRMNBygNkYpSqN4qqrsCpRi3XQFKUeqsyKBfqThPNQ0cl4OuTN7LSVRhxGIBFwuFy6MyXfy5AQmkHAvVXUGPLolIosxwlRSqqwK9gbDi94l/Afwcd46aRWAFYE80f8jqgi4WquL72KRrPY6JbaECtKbUUZaWoNF4pKRQZY3qLMvJye09PgdP6byXE8I/DLO4WCj8trVrDmc6Wn2Q7FQFPRXU4l70Um2hhwHQ0SstTRs1YSbhN8DZyMYrT30+i+zgfDmLi2XdguxKdmkKysApqR5XJYVa3CuD9lEj3KpSCdVZ7h+zJBdHjT+mrqH5OSqrC2U9SD86w6b4TDSdqetpK6E6yjJ1O6qEbh9QlmiDSlXeL5VM2X1dDroxeS8Ho1HDfm+BLMP+LIuE8cmCHpShHN4KEUFXBb0UlDrL/X9bSUFZB+MUI1cD+DuapxE3HE99at+lP9m+UJZjkP2wN109lIuArtS1aEQEo0qU3u/qdx3RA94f3UZ13GgRibmcKGcjTpyekTmQDARizRerctyYob/6K9lF+hiPbIZKR5uCKqiPumWMoZT8TiHiCFoXVElEMrpNumIm0HyAPCk99elA7k9f2NK26R3GL5LVIH05shPHLzEljrKm9GGXiGNUqV8c0P+zTZwbSx92oxb3BouLqaZ6ay3UL1L/Dc3NGCRJqFUsBm0Y1DLtYes6wy/M6anO14gYequoBd39r8MIFgbVRz3Sooxtly5musb5YuCHqWpofqZiORpjVi3IbhldZxaal1M9uUvB+seCbqmxLeKwSclYRXWUUYuClqTWFUvGG0gYIs/IHASMtXmBLGaxSsCO1q4zmNNSnd2mpOVY2CNf7ji+WDVGlaBLnBX12HZx8EouknOQiCue+jyI5YmfLGaxtiCbweabpIlO0iZOiiwMxnxJxDGgLrrK4q84ph10NalI7kH+Lr+yPpw7Ucr6GCSLhcLtM1o8ujDxuUoG5OqjQBxRu1VhtJVQnRXZX5J0b4kwIwcLc3krj5DBAB2yGYN8LoNraGBmorMCb93Sop7+1yZQoEsKtbgsriqlxDNbM7HmzF1I3gCmZHUx212sNsS5zDa3AgtinzVQHBUtU7YmCcYxalEP+mPt0F5Kspi4CHFiPNCscYVkIRIMvAcN8gTB6ijEdhdrPTTLZdDkxu+GBDaqjl5xFzHVcgwlqLa0qBd6ddKW5MwcdGtcl/mI+83sure5104ja3sWaxNr9ffzGoqHY59VKqG6yqjuqt24WNDfUnX0Uh07WkQTxHOIyItoHgK2tWVizqkAW1EaIA5N315b1V016eYzCIuRFTVoJtmrP0BxOTrOF1ye4qqnIhucbLUcQwkcG1VHL3rMKLEj3kPvdCTBTCuyA6iX++5XTRwaiR5TrprvHgfYTn9gP4S95ur+PlMEFBK9pKPc/zoralPJXRX0Um2oeE+9PwNzgE/aMS63HKPh/mEPFI3cv4rF7jH2u1jrWqtf+APwfuSjg8AKqm/3X5bqCCgp8e1qU0kG7afSWj5aN6G4pO6nVNVSLM/D2pzFmghMtFY/gFKXRD5WB0+anir0OBIH9LVYqrOMVu3yAVc1kZoyxVVoPR2JMtjsvIlSX6vbOdBBy5HBR2hTf2tYrBs089D67khBx6rBzawEgeEcaaOPUuBG31Vm0JRaoyJ7E9I5YxYBzUJgu4afZwbYnOZdzeq0H1wZ41gg6NpUcC8QkDvfq2UGRsWa+p2BpisH0662ygfApsC/6t63kUMwrTDSG2mwGZt3ouVQlDMjH6tA9VZkHSIkQEnmlIDuqtgWhBqKUMpoPS0HoUBtlPlonUQce6D1LTY+IpuDdJsOdg8iLgeNCWat6DYQlNo0NXtqrUh09/izgROBj1myzAWdwBYoXq/7blWH3ZvrgCVsGGWzizXeYvcqRkYqJb5Q8t/8URu091Ti3IMqmhNz0B0y+ZluS1jLUR3x3IPRLIO2EyfL5iyWrRx8H4G6OdKRqraQpNM+ClZFgpWtDiyP7HlfEom99T4wF3gJeE7si4kCKuIuodtV1FX2i9CcBKwY+3p5Q7ELWj0JBGIZ0lSMHDehDbg0+P9oG6bZzFG4jKV6f43Wjdega12r3sTi2BHYE/FG3pBaLeFdoPlI9+92xIFyfuSrlZBZthLo6AHo/gfLW04z4BDCdk6GBxU5A9mbzoCfRrEW1YTD214C1jFer2JD5EndmLIeeUpwYCyrvp9qLBK175vAZ1JaugC4EjgXrd8C+r/0mvofvAZKSJariCjNw8DW6Ux1g4afopgmr4Z/SCr8u7kcgxeJ53Jlxfi412YXy4ai/4FWjcVRaz3izZcfjdanYK7LMg44FjgamAac1fCMwIlRlXWchcz90Xp2Qhtdcp1Salq/BgaLQdXrag1m6HqQlS6WzUH6khYGchdGOjCeONZDciVegmZFCwPQpYAzkVyEjVulmrgrVSJOjb4O/Mz5IDtemQUcgtaoEYr8bSOePwHNkUN+Z+Vhb3Ml3bSiO9HcEOkDiJ6x9lDgeWq5Em0hdm2JdA2/2vD42nTvyDM3Q8vPySjauQFepVGMtMafxU/q/M7Kd9nmOohpg69hQBS9kOs2RlqWc9CZpxcuATcis2LTGx6tNTH6iLshX748Mx/YhjBH/8af3xJIt3UoVibxXeQHSYbiVGN1aW4H/WVj9cXnHMTT+fCGR0YXyb9A7wnZZV+KySsodgb1LlBfCHqkNwZxJhn6Q7jIMJWE69G8Ham70Zg7AJfiqHEYkadoo3buuZ1sExRF5U0k/NPs8MMafoAfA75vwqCo2BRIxWBd6QLC9fN7JIlPXvgycJnhOi9FotvnhbeBzYAFouOQCYfGhInfyqZ0mwJpPF6IxqPAiwbq+SWy8Jc3jgS+Y7jO75KP9An/RuISzDNUX1jrYfKB3IdNgXQaquenBuo4j3yHzbkQ2MpwnV9HwgW54lFgEtKCmGB3wteoyoauMwibAllsoI5XgDtT1nEsGfdbE3IX5j1SvwFcYLjOKPwKEfxCg3U2mnE01WMZhE2BmMhmcnLK8/chynRqPlga8d8yzfeQblwWaCTt9kGG612dxtEUew1fE7ArkPdSnv8f4Lcpzt8CO184m+yORA40zUyku/OQhbpr3IF4JUSPExCdKDNzprr0g7ApkHdSnv+DFOeuBNyf8vqusNUlehqYDByBhA8yxYPIbNzuiMu/DQ6LcExLCeQ1INqej+G0Aw8DS6W4vksmIW7strgCWBNZpLwvYR2vI+GHvoBsB7CZTHNvoqXPiL8PJwI294P8J8W5ab4g9yF91iJzGeKSYuVDR2Z8rgrK2siXfAuki7QyMh6qBUjtQB52s4EngVnIDJVN77WBRJ0Cf9fGxfMokPuRjLhJuBXx9Sk6bci44YAMrvVKUK4e8Luao6nG0uA3IqsQPfnrXBsG2OxizU54XtL1iiuQWatmYX+yCN1an56guBQHwLdiHFt/P3tKbArkNeLf4FOIGq1kMNOx2293xTWuDXBMY2fOfl6zYYBNgcwnnvv1C5DIY/cMZDGwGdmMfPmOZckUZDwUFSszaLa9eeMYnSTn3HnACQnOKxKXuzbAEXH80+Yhfl/GsS2QZyIety/xu1anUwwXkrR8EvGraiXGIdO7UXmWAnrzAjwV4ZgTib/iPSU4r1U4z7UBGXMg8XYIPm3LENsCeaLB+6cjO8TisAytl2lpBeINWIvOUTGP/4cVK7AvkDcYeXbheJI5I/6V4q6Sp+EM1wZkxKbIgmUcHrNhCGSz5XZogs1XgZ1I5mV7A9kkBs0jE4jmk1R04m4ZnoPFYBVZCOTR4OdLSKuxDnBPgnpmAF8zZVRBMbX1OK+MRhZI4zDLhiE1bLqa1LgJmc1K84eciexraHU+gQxgf+XaEEscSPzuc1K3pEhk0YK8SzpxnAz82JAtzUAzp2BLMm2fpDcSmbyH/TmQZKvrzcyqNJfPWY1JwPoxz3meZK5JkcmzQL6ERCLxDOds1wZYIEmUyz8at2IIeRXIXmTwxxeYtYCdXRthkKVJ5tpvJS/hQPIokKOA21wbUQDOcW2AQY4gfmzdN2i8EJ2avAnkMvpTannC2Qg7AR5ckKR7lSagR2TyIpDtkdQAWYWnaRaaYSyyD8mSFl1n2pB6uBbIpsje63uJP4PhkeBsm7s2IiVJImc+j3jwWieLhcKhrI3sG/8KktPCk44ZSNCFIrIt0lWMy0zThoyEC4HcgOyU85hhMtISW/NotUiSLmIVuNawHSPioot1rYNrNjs2ohnaZiOkBYnL9dgLhzQMFwK5BLNBjT0yFpns2oiYJI0gmenEhAuBaNxEHG92MuuXG2ATGgejrsdjyGxnZriaxZpOdpH5WoX1kImPIpBUzJkH6HAlkIW0brQOm1zs2oAIfBEJcxqXl7Hs2l4Pl+sgJjJHeQYzAZjm2ogGXJnwPCexz1wK5F2KOfuSd36CpH/IIyci8Xbj8hJ2I8iPiOuV9JMcX79ZudG1AXWYQPLNXseYNCQOrgWygNYI/pY1n0cy3eaJPyc8707EFckJrgUCcD7iW+MxywXILr08cDXJvSf2NWlIXPIgEJBsrB7z/J9rAxBv3UMTnns8sMigLbHJi0CeonkjdbhkZdzmSl+d5IlU55CDDMV5EQhIfg8riRhbnAOQHXtZsyTwQIrz9zNlSBryJJBukmeX8oRzOdmnpnsAmJjw3KuwGE40DnkSCEhznHS2wxPOfcCnMrxW0o1cH5CjbGF5EwjIrEW3ayOakHYkDGzSp3oUPg48AmyXoo69yJGfXh4F0kG85Cme6CyPbKxa00LdmyHbYLdKUce5pBu3GCePAgHpZnk3FDtMQBLOTDFY57HA40g2rKQ8T7LoJlbJq0BA3Asy2ZjfgowF/gb8KGU9OyHpLdJOx+qgrtyRZ4EA7Ijk6/bY4SzgIeQ+R2UMkobiXuAuYGsDduwBvGWgHuO4CNoQh3eQ/QOZ7wNoIbYB7gYeRIKxPYBkjF0MLAGMR+JWbYhET9kNSQlnip/hyFM3CkprSxMGh8SNJBnKMcBFJiv0hLIAcfFYElgWez2NWzC5IHit+e9y3rtYNS6mGLvlmoVxyL6N8dj7jjxBTlbLwyiKQEASy//OtREeI8yhIHGFiyQQgKlYzknnsc6HyFpJh2M7IlE0gYCs0j7u2ghPIjqBz5LTGat6FFEgIFOLT7o2whOLbkQcL7s2JA5FFUgZudn/79oQTySqyOdVuIXfogoEoBe56fe7NsTTkMMR95bCUWSBgLgoTAF+79YMTwhzgGtcG5GUogukxt5I+jZP/rCax9w2zSIQgKOBH7o2wjMMp0EX0tJMAgHJ/LoX3sExT6zu2oA0NJtAAP4AbIBESvG4J0mKtdzQjAIBeAXJQXGFa0M8rI6EHyokzSqQGkcgQekWuzakxVnPtQFJaXaBgAROWwfpenncsIFrA5LSCgIBeBMZvB+Gz4/oAi+QgnA18GkkYrgnOz7j2oCktJpAAOYh23gPBd5wbEursC4Sl6twtKJAalwLrI1kZPLdLrssB6zl2ogktLJAQFywT0MCqZ1FwVd9c866rg1IQqsLpMZ7SIrhNZEkmPPcmtOUFHLB0AtkMO8g2Xc/BXwbCSzQClSwvwW2kGshXiD16QAuRSKUb4+MVz5yaZAl7gC+DqwBrIbs1DwBO6kHxlio0zpFiYuVB8YjEQD3BnYBRrs1JzGPALche2heCTlucySC4lTMOBxegu1stRbiYnmBJGMlYGckZOcU7KYUSMsiZNflX5C9GS8lqGNP4CtBSRqNczIS5tQeXiC5pA3Z+jsZCWezKdJdccX7wDNILpCHkODSHxiqe1Xgm4hQ4owp7iVe/N9keIEUhvWBjZF4tusgawCfRCIWmqILeB2YDfwTCYjwNPAC2Thn7oDkP9wLWecYiReALTOxyQuk0IxDumYrBz+XRRLajEeCRI9GVptLyF77XmTjVw8SbO09pCWYB8wF3kZm3VwzDhHJVMTnanlkVuwtxKXneCQKjX0KJRCPpwnw07weTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwheIB5PCF4gHk8IXiAeTwj/Ba/47FkhCYEqAAAAAElFTkSuQmCC",
      []
    );
    return A.jsx(Hm, { avatar: e, name: "" });
  },
  N1 = (e) => {
    const { onConversationStarterSelected: t } = e;
    return A.jsx("div", {
      className: "nlux-comp-conversationStarters",
      children: e.items.map((n, r) =>
        A.jsxs(
          "button",
          {
            className: "nlux-comp-conversationStarter",
            onClick: () => t(n),
            children: [
              A.jsx(H1, { icon: n.icon }),
              A.jsx("span", {
                className: "nlux-comp-conversationStarter-prompt",
                children: n.label ?? n.prompt,
              }),
            ],
          },
          r
        )
      ),
    });
  },
  H1 = ({ icon: e }) =>
    e
      ? typeof e == "string"
        ? A.jsx("img", { src: e, width: 16 })
        : A.jsx("div", {
            className: "nlux-comp-conversationStarter-icon-container",
            children: e,
          })
      : null,
  F1 = (e) => {
    const {
        segments: t,
        personaOptions: n,
        conversationOptions: r,
        userDefinedGreeting: o,
      } = e,
      s = E.useMemo(() => t.some((f) => f.items.length > 0), [t]),
      i = E.useMemo(
        () =>
          !o &&
          !s &&
          (n == null ? void 0 : n.assistant) === void 0 &&
          (r == null ? void 0 : r.showWelcomeMessage) !== !1,
        [
          s,
          n == null ? void 0 : n.assistant,
          r == null ? void 0 : r.showWelcomeMessage,
          o,
        ]
      ),
      a = E.useMemo(
        () =>
          !o &&
          !s &&
          (n == null ? void 0 : n.assistant) !== void 0 &&
          (r == null ? void 0 : r.showWelcomeMessage) !== !1,
        [
          o,
          s,
          n == null ? void 0 : n.assistant,
          r == null ? void 0 : r.showWelcomeMessage,
        ]
      ),
      l = E.useMemo(
        () =>
          !s &&
          (r == null ? void 0 : r.conversationStarters) &&
          (r == null ? void 0 : r.conversationStarters.length) > 0,
        [s, r == null ? void 0 : r.conversationStarters]
      ),
      c = E.useMemo(
        () =>
          o !== void 0 && (r == null ? void 0 : r.showWelcomeMessage) !== !1,
        [o]
      );
    E.useEffect(() => {
      o &&
        (r == null ? void 0 : r.showWelcomeMessage) === !1 &&
        Bo(
          "Configuration conflict: The greeting UI override provided via <AiChatUI.Greeting> will not be shown because conversationOptions.showWelcomeMessage is set to false."
        );
    }, [r == null ? void 0 : r.showWelcomeMessage, o]);
    const u = !(i || a || c || s);
    return A.jsxs(A.Fragment, {
      children: [
        i && A.jsx(j1, {}),
        a &&
          A.jsx(Hm, {
            name: n.assistant.name,
            avatar: n.assistant.avatar,
            message: n.assistant.tagline,
          }),
        c && A.jsx(op, { children: o }),
        u && A.jsx(op, { children: null }),
        A.jsx("div", {
          className: "nlux-conversationStarters-container",
          children:
            l &&
            A.jsx(N1, {
              items: r.conversationStarters ?? [],
              onConversationStarterSelected: e.onConversationStarterSelected,
            }),
        }),
      ],
    });
  },
  sp = () =>
    A.jsx("div", {
      className: "nlux-comp-messageLoader",
      children: A.jsx("div", {
        className: "nlux-comp-loaderContainer",
        children: A.jsx("span", { className: "spinning-loader" }),
      }),
    }),
  ip = {
    Loader: (e) => A.jsx(A.Fragment, { children: e.children }),
    Greeting: (e) => A.jsx(A.Fragment, { children: e.children }),
  },
  ap = E.createContext({}),
  U1 = function (e) {
    var Ut, Fn, _r, cc, dc;
    const {
        adapter: t,
        className: n,
        initialConversation: r,
        conversationOptions: o,
        composerOptions: s,
        displayOptions: i,
      } = e,
      { themeId: a, colorScheme: l } = i ?? {},
      c = E.useRef(null),
      u = E.useRef(null),
      f = E.useRef(void 0),
      d = E.useRef(null),
      m = ((T, $) => {
        const [F, ue] = E.useState(),
          [xe, me] = E.useState(),
          ne = E.useRef(F),
          Re = E.useRef($);
        return (
          E.useEffect(() => {
            const Me = T.current || void 0;
            Me !== xe && me(Me);
          }),
          E.useEffect(() => {
            xe
              ? ne.current
                ? ne.current.updateConversationContainer(xe)
                : ((ne.current = O1(xe, Re.current ?? rp)), ue(ne.current))
              : ne.current &&
                (ne.current.destroy(), ue(void 0), (ne.current = void 0));
          }, [xe]),
          E.useEffect(() => {
            (Re.current = $),
              ne.current && ne.current.updateProps({ autoScroll: $ ?? rp });
          }, [$]),
          F
        );
      })(u, o == null ? void 0 : o.autoScroll),
      g = E.useMemo(() => (d.current ? H0(d.current) : void 0), [d.current]),
      p = (() => {
        const T = {},
          $ = new Set();
        return E.useMemo(
          () => ({
            getStreamingDomElement: (F) => {
              if (($.has(F) && $.delete(F), T[F] === void 0)) {
                const ue = document.createElement("div");
                ue.setAttribute("nlux-message-id", F),
                  (ue.className = "nlux-markdown-container"),
                  (T[F] = ue);
              }
              return T[F];
            },
            deleteStreamingDomElement: (F) => {
              $.add(F),
                setTimeout(() => {
                  $.forEach((ue) => {
                    T[ue] && (T[ue].remove(), delete T[ue]);
                  }),
                    $.clear();
                }, 1e3);
            },
          }),
          []
        );
      })(),
      { PrimitivesContextProvider: w } = (function (T) {
        var ue, xe, me, ne, Re, Me, fn, Un, hn;
        const [$, F] = E.useState(T);
        return (
          E.useEffect(() => {
            F(T);
          }, [
            (ue = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : ue.htmlSanitizer,
            (xe = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : xe.syntaxHighlighter,
            (me = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : me.markdownLinkTarget,
            (ne = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : ne.showCodeBlockCopyButton,
            (Re = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : Re.skipStreamingAnimation,
            (Me = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : Me.streamingAnimationSpeed,
            (fn = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : fn.waitTimeBeforeStreamCompletion,
            (Un = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : Un.responseRenderer,
            (hn = T == null ? void 0 : T.messageOptions) == null
              ? void 0
              : hn.promptRenderer,
          ]),
          {
            PrimitivesContextProvider: E.useMemo(
              () =>
                ({ children: Xi }) =>
                  A.jsx(ap.Provider, { value: $, children: Xi }),
              [$]
            ),
            primitivesContext: ap,
          }
        );
      })({ messageOptions: e.messageOptions }),
      [v, h] = E.useState(""),
      [y, k] = E.useState("typing"),
      [x, S] = E.useState(),
      [b, C] = E.useState([]),
      [I, P] = E.useState([]),
      [D, B] = E.useState([]),
      z = E.useMemo(() => (x ? [x, ...b] : b), [x, b]),
      j = E.useMemo(
        () =>
          ((T) => {
            const $ = T;
            if (typeof ($ == null ? void 0 : $.create) == "function")
              return $.create();
            if (
              typeof ($ == null ? void 0 : $.batchText) == "function" ||
              typeof ($ == null ? void 0 : $.streamText) == "function" ||
              typeof ($ == null ? void 0 : $.streamServerComponent) ==
                "function"
            )
              return T;
            We(
              "Unable to determine the type of the adapter! Missing batchText or streamText method."
            );
          })(t),
        [t]
      ),
      W = ((T) =>
        E.useMemo(() => {
          const $ = { minWidth: "280px", minHeight: "280px" };
          return (
            T != null && T.width && ($.width = T.width),
            T != null && T.height && ($.height = T.height),
            $
          );
        }, [T == null ? void 0 : T.width, T == null ? void 0 : T.height]))(i),
      fe = E.useMemo(
        () =>
          ((T) => {
            const $ = ["nlux-AiChat-root"],
              F = `nlux-theme-${T.themeId || "nova"}`;
            return $.push(F), T.className && $.push(T.className), $;
          })({ className: n, themeId: a }).join(" "),
        [n, a]
      ),
      G = E.useMemo(() => {
        var T;
        return l !== "auto" && l
          ? l
          : typeof globalThis !== void 0 &&
            globalThis.matchMedia &&
            (T = globalThis.matchMedia("(prefers-color-scheme: dark)")) !=
              null &&
            T.matches
          ? "dark"
          : "light";
      }, [l]),
      R = E.useCallback(
        (T) => (g == null ? void 0 : g.displayException(T)),
        [g]
      ),
      L = (function (T, $, F, ue, xe, me, ne, Re) {
        return E.useCallback(() => {
          var fn;
          const Me = T.length > 0 ? T[T.length - 1] : void 0;
          (Me == null ? void 0 : Me.status) === "active" &&
            (ue(T.slice(0, -1)),
            xe([...$, Me.uid]),
            me([...F, ...Me.items.map((Un) => Un.uid)]),
            (fn = ne.current) == null || fn.cancelSegmentStreams(Me.uid)),
            Re("typing");
        }, [T, $, F, ue, xe, me, ne, Re]);
      })(b, I, D, C, P, B, c, k),
      O = E.useCallback((T) => h(T), [h]),
      N = D1({
        aiChatProps: e,
        adapterToUse: j,
        conversationRef: c,
        initialSegment: x,
        newSegments: b,
        cancelledMessageIds: D,
        cancelledSegmentIds: I,
        prompt: v,
        composerOptions: s,
        showException: R,
        setChatSegments: C,
        setComposerStatus: k,
        setPrompt: h,
      }),
      H = ((T, $, F, ue, xe, me) =>
        E.useCallback(
          (ne, Re, Me) => {
            if (ne === "initial" && T) {
              const hn = [];
              for (const pc of T.items) {
                if (pc.uid === Re) break;
                hn.push(pc);
              }
              const Xi = { ...T, items: hn };
              return $(Xi), ue([]), xe(Me), void me("submitting-edit");
            }
            const fn = F.findIndex((hn) => hn.uid === ne),
              Un = F.slice(0, fn);
            ue(Un), xe(Me), me("submitting-edit");
          },
          [F, ue, T, $, xe, me]
        ))(x, S, b, C, h, k),
      K = E.useCallback((T, $) => {
        var F;
        (F = e.events) != null &&
          F.messageRendered &&
          e.events.messageRendered({ uid: $ });
      }, []),
      Te = E.useCallback(
        (T) => {
          h(T.prompt), k("submitting-conversation-starter");
        },
        [h, k]
      ),
      V = ((T, $) =>
        E.useCallback(
          (F) => {
            T &&
              F &&
              (($.current = F.uid), T.handleNewChatSegmentAdded(F.uid, F.div));
          },
          [T]
        ))(m, f);
    E.useEffect(() => {
      (y !== "submitting-conversation-starter" &&
        y !== "submitting-external-message" &&
        y !== "submitting-edit") ||
        N();
    }, [y, N]),
      E.useEffect(
        () =>
          S(
            r
              ? {
                  uid: "initial",
                  status: "complete",
                  items: r
                    .map((T, $) => {
                      if (T.role === "assistant" || T.role === "user")
                        return T.role === "user"
                          ? typeof T.message != "string"
                            ? void We(
                                `Invalid message type for item at index ${$} in initial conversation: When role is "user", message must be a string`
                              )
                            : {
                                uid: Lt(),
                                time: new Date(),
                                status: "complete",
                                participantRole: "user",
                                content: T.message,
                              }
                          : {
                              uid: Lt(),
                              time: new Date(),
                              status: "complete",
                              participantRole: "assistant",
                              content: T.message,
                              serverResponse: T.serverResponse,
                              dataTransferMode: "batch",
                            };
                      We(
                        `Invalid role for item at index ${$} in initial conversation: Role must be "assistant" or "user"`
                      );
                    })
                    .filter((T) => T !== void 0),
                }
              : void 0
          ),
        [r]
      ),
      E.useEffect(() => {
        var T;
        x &&
          ((T = u.current) == null ||
            T.scrollTo({ behavior: "smooth", top: 5e4 }));
      }, [x]);
    const ee = E.useRef(void 0);
    E.useEffect(() => {
      const T = e.api;
      (ee.current = T),
        typeof (T == null ? void 0 : T.__setHost) == "function"
          ? T.__setHost({
              sendMessage: ($) => {
                h($), k("submitting-external-message");
              },
              resetConversation: () => {
                C([]), S(void 0);
              },
              cancelLastMessageRequest: L,
            })
          : Bo(`API object passed was is not compatible with AiChat.
Only use API objects created by the useAiChatApi() hook.`);
    }, [e.api, L, h, k, C, S]),
      E.useEffect(
        () => () => {
          var T;
          typeof ((T = ee.current) == null ? void 0 : T.__unsetHost) ==
            "function" && (ee.current.__unsetHost(), (ee.current = void 0));
        },
        []
      ),
      ((T) => {
        E.useEffect(() => {
          var F;
          const $ = (F = T.events) == null ? void 0 : F.ready;
          $ && $({ aiChatProps: Wl(T) });
        }, []);
      })(e),
      ((T, $) => {
        var xe;
        const F = E.useRef(),
          ue = E.useRef();
        E.useEffect(() => {
          F.current = () => {
            const me = [];
            return (
              $.forEach((ne) => {
                ne.items &&
                  ne.items.length !== 0 &&
                  ne.items.forEach((Re) => {
                    Re.status === "complete" &&
                      (Re.participantRole !== "assistant"
                        ? Re.participantRole === "user" &&
                          me.push({ role: "user", message: Re.content })
                        : me.push({ role: "assistant", message: Re.content }));
                  });
              }),
              me
            );
          };
        }, [$]),
          E.useEffect(() => {
            var me;
            ue.current = (me = T.events) == null ? void 0 : me.preDestroy;
          }, [(xe = T.events) == null ? void 0 : xe.preDestroy]),
          E.useEffect(
            () => () => {
              var ne;
              const me = ue.current;
              me &&
                (me({
                  aiChatProps: Wl(T),
                  conversationHistory:
                    ((ne = F.current) == null ? void 0 : ne.call(F)) ?? [],
                }),
                (F.current = void 0));
            },
            []
          );
      })(e, z);
    const Ge = E.useMemo(() => E.forwardRef(A1), []),
      Hn = ((T) => {
        const $ = E.useMemo(
          () =>
            T.children
              ? Array.isArray(T.children)
                ? T.children
                : [T.children]
              : [],
          [T.children]
        );
        return {
          Loader: E.useMemo(
            () =>
              $.length === 0
                ? A.jsx(sp, {})
                : $.find((F) => F.type === ip.Loader) || A.jsx(sp, {}),
            [$]
          ),
          Greeting: E.useMemo(() => {
            if ($.length !== 0) return $.find((F) => F.type === ip.Greeting);
          }, [$]),
        };
      })(e),
      Rr = v.length > 0,
      Qo = z.length === 0 ? "nlux-chatRoom-starting" : "nlux-chatRoom-active";
    return j
      ? A.jsx(w, {
          children: A.jsxs("div", {
            className: fe,
            style: W,
            "data-color-scheme": G,
            children: [
              A.jsx("div", { className: "nlux-comp-exceptionBox", ref: d }),
              A.jsxs("div", {
                className: `nlux-chatRoom-container ${Qo}`,
                children: [
                  A.jsx("div", {
                    className: "nlux-launchPad-container",
                    children: A.jsx(F1, {
                      segments: z,
                      onConversationStarterSelected: Te,
                      conversationOptions: o,
                      personaOptions: e.personaOptions,
                      userDefinedGreeting: Hn.Greeting,
                    }),
                  }),
                  A.jsx("div", {
                    className: "nlux-conversation-container",
                    ref: u,
                    children: A.jsx(Ge, {
                      ref: c,
                      segments: z,
                      conversationOptions: e.conversationOptions,
                      personaOptions: e.personaOptions,
                      messageOptions: e.messageOptions,
                      onLastActiveSegmentChange: V,
                      Loader: Hn.Loader,
                      markdownContainersController: p,
                      submitShortcutKey:
                        (Ut = e.composerOptions) == null
                          ? void 0
                          : Ut.submitShortcut,
                      onPromptResubmit: H,
                      onMarkdownStreamRendered: K,
                    }),
                  }),
                  A.jsx("div", {
                    className: "nlux-composer-container",
                    children: A.jsx(_1, {
                      status: y,
                      prompt: v,
                      hasValidInput: Rr,
                      placeholder:
                        (Fn = e.composerOptions) == null
                          ? void 0
                          : Fn.placeholder,
                      autoFocus:
                        (_r = e.composerOptions) == null
                          ? void 0
                          : _r.autoFocus,
                      submitShortcut:
                        (cc = e.composerOptions) == null
                          ? void 0
                          : cc.submitShortcut,
                      hideStopButton:
                        (dc = e.composerOptions) == null
                          ? void 0
                          : dc.hideStopButton,
                      onChange: O,
                      onSubmit: N,
                      onCancel: L,
                      Loader: Hn.Loader,
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : (Bo(
          "AiChat: No valid adapter provided. The component will not render."
        ),
        A.jsx(A.Fragment, {}));
  },
  Q1 = () => {
    const e = E.useRef(null),
      t = E.useRef(
        ((n = () => {}) => ({
          composer: {
            send: (r) => {
              throw new Error(
                "AiChatApi is not connected to a host <AiChat /> component."
              );
            },
            cancel: () => {
              throw new Error(
                "AiChatApi is not connected to a host <AiChat /> component."
              );
            },
          },
          conversation: {
            reset: () => {
              throw new Error(
                "AiChatApi is not connected to a host <AiChat /> component."
              );
            },
          },
          __setHost: (r) => {
            n(r);
          },
          __unsetHost: () => {},
        }))()
      );
    return (
      (t.current.composer.send = (n) => {
        if (!e.current)
          throw new Error(
            "AiChatApi is not connected to a host <AiChat /> component."
          );
        e.current.sendMessage(n);
      }),
      (t.current.composer.cancel = () => {
        if (!e.current)
          throw new Error(
            "AiChatApi is not connected to a host <AiChat /> component."
          );
        e.current.cancelLastMessageRequest();
      }),
      (t.current.conversation.reset = () => {
        if (!e.current)
          throw new Error(
            "AiChatApi is not connected to a host <AiChat /> component."
          );
        e.current.resetConversation();
      }),
      (t.current.__setHost = (n) => {
        e.current = n;
      }),
      (t.current.__unsetHost = () => {
        e.current = null;
      }),
      t.current
    );
  },
  q1 = function (e, t) {
    return E.useMemo(() => ({ streamText: e }), t ?? [{}]);
  };
sessionStorage.removeItem("chatSessionId");
let Cs;
function X1(e) {
  let t = "",
    n = null;
  return (
    e
      .split(
        `
id`
      )
      .forEach((r) => {
        let o = r.split(`HTTP_STATUS/200
data:`)[1];
        try {
          (o = JSON.parse(o)), (n = o.output.session_id), (t += o.output.text);
        } catch (s) {
          throw s;
        }
      }),
    [t, n]
  );
}
const W1 = function (e) {
  return [
    async (n, r) => {
      var a;
      (a = window.CHATBOT_CONFIG.dataProcessor) != null &&
        a.rewritePrompt &&
        (n = window.CHATBOT_CONFIG.dataProcessor.rewritePrompt(n));
      const o = {
          sessionId: sessionStorage.getItem("chatSessionId"),
          prompt: n,
        },
        s = await fetch(window.CHATBOT_CONFIG.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (s.status !== 200) {
        r.error(new Error("Failed to connect to the server"));
        return;
      }
      if (!s.body) return;
      Cs = s.body.getReader();
      const i = new TextDecoder();
      for (;;) {
        const { value: l, done: c } = await Cs.read();
        if ((c || e(!0), c)) break;
        const u = i.decode(l);
        if (u) {
          const f = window.CHATBOT_CONFIG.dataProcessor.processChunk || X1;
          try {
            const [d, m] = f(u);
            sessionStorage.setItem("chatSessionId", m), r.next(d);
          } catch (d) {
            console.warn("Parse content failed: " + u, d),
              r.error(new Error("Parse content failed"));
          }
        }
      }
      e(!1), r.complete();
    },
    () => {
      Cs && Cs.cancel();
    },
  ];
};
function G1() {
  (this.__data__ = []), (this.size = 0);
}
var K1 = G1;
function Y1(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ni = Y1,
  V1 = Ni;
function Z1(e, t) {
  for (var n = e.length; n--; ) if (V1(e[n][0], t)) return n;
  return -1;
}
var Hi = Z1,
  J1 = Hi,
  ew = Array.prototype,
  tw = ew.splice;
function nw(e) {
  var t = this.__data__,
    n = J1(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : tw.call(t, n, 1), --this.size, !0;
}
var rw = nw,
  ow = Hi;
function sw(e) {
  var t = this.__data__,
    n = ow(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var iw = sw,
  aw = Hi;
function lw(e) {
  return aw(this.__data__, e) > -1;
}
var uw = lw,
  cw = Hi;
function dw(e, t) {
  var n = this.__data__,
    r = cw(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var pw = dw,
  fw = K1,
  hw = rw,
  mw = iw,
  gw = uw,
  vw = pw;
function br(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
br.prototype.clear = fw;
br.prototype.delete = hw;
br.prototype.get = mw;
br.prototype.has = gw;
br.prototype.set = vw;
var Fi = br,
  yw = Fi;
function ww() {
  (this.__data__ = new yw()), (this.size = 0);
}
var kw = ww;
function xw(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var Sw = xw;
function Cw(e) {
  return this.__data__.get(e);
}
var Ew = Cw;
function bw(e) {
  return this.__data__.has(e);
}
var Tw = bw,
  Aw = typeof qo == "object" && qo && qo.Object === Object && qo,
  Fm = Aw,
  Iw = Fm,
  Pw = typeof self == "object" && self && self.Object === Object && self,
  Rw = Iw || Pw || Function("return this")(),
  Tr = Rw,
  _w = Tr,
  Lw = _w.Symbol,
  Um = Lw,
  lp = Um,
  Qm = Object.prototype,
  Bw = Qm.hasOwnProperty,
  Ow = Qm.toString,
  qr = lp ? lp.toStringTag : void 0;
function Mw(e) {
  var t = Bw.call(e, qr),
    n = e[qr];
  try {
    e[qr] = void 0;
    var r = !0;
  } catch {}
  var o = Ow.call(e);
  return r && (t ? (e[qr] = n) : delete e[qr]), o;
}
var zw = Mw,
  $w = Object.prototype,
  Dw = $w.toString;
function jw(e) {
  return Dw.call(e);
}
var Nw = jw,
  up = Um,
  Hw = zw,
  Fw = Nw,
  Uw = "[object Null]",
  Qw = "[object Undefined]",
  cp = up ? up.toStringTag : void 0;
function qw(e) {
  return e == null
    ? e === void 0
      ? Qw
      : Uw
    : cp && cp in Object(e)
    ? Hw(e)
    : Fw(e);
}
var Ui = qw;
function Xw(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Nn = Xw,
  Ww = Ui,
  Gw = Nn,
  Kw = "[object AsyncFunction]",
  Yw = "[object Function]",
  Vw = "[object GeneratorFunction]",
  Zw = "[object Proxy]";
function Jw(e) {
  if (!Gw(e)) return !1;
  var t = Ww(e);
  return t == Yw || t == Vw || t == Kw || t == Zw;
}
var oc = Jw,
  ek = Tr,
  tk = ek["__core-js_shared__"],
  nk = tk,
  Ta = nk,
  dp = (function () {
    var e = /[^.]+$/.exec((Ta && Ta.keys && Ta.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function rk(e) {
  return !!dp && dp in e;
}
var ok = rk,
  sk = Function.prototype,
  ik = sk.toString;
function ak(e) {
  if (e != null) {
    try {
      return ik.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var lk = ak,
  uk = oc,
  ck = ok,
  dk = Nn,
  pk = lk,
  fk = /[\\^$.*+?()[\]{}|]/g,
  hk = /^\[object .+?Constructor\]$/,
  mk = Function.prototype,
  gk = Object.prototype,
  vk = mk.toString,
  yk = gk.hasOwnProperty,
  wk = RegExp(
    "^" +
      vk
        .call(yk)
        .replace(fk, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function kk(e) {
  if (!dk(e) || ck(e)) return !1;
  var t = uk(e) ? wk : hk;
  return t.test(pk(e));
}
var xk = kk;
function Sk(e, t) {
  return e == null ? void 0 : e[t];
}
var Ck = Sk,
  Ek = xk,
  bk = Ck;
function Tk(e, t) {
  var n = bk(e, t);
  return Ek(n) ? n : void 0;
}
var sc = Tk,
  Ak = sc,
  Ik = Tr,
  Pk = Ak(Ik, "Map"),
  qm = Pk,
  Rk = sc,
  _k = Rk(Object, "create"),
  Qi = _k,
  pp = Qi;
function Lk() {
  (this.__data__ = pp ? pp(null) : {}), (this.size = 0);
}
var Bk = Lk;
function Ok(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Mk = Ok,
  zk = Qi,
  $k = "__lodash_hash_undefined__",
  Dk = Object.prototype,
  jk = Dk.hasOwnProperty;
function Nk(e) {
  var t = this.__data__;
  if (zk) {
    var n = t[e];
    return n === $k ? void 0 : n;
  }
  return jk.call(t, e) ? t[e] : void 0;
}
var Hk = Nk,
  Fk = Qi,
  Uk = Object.prototype,
  Qk = Uk.hasOwnProperty;
function qk(e) {
  var t = this.__data__;
  return Fk ? t[e] !== void 0 : Qk.call(t, e);
}
var Xk = qk,
  Wk = Qi,
  Gk = "__lodash_hash_undefined__";
function Kk(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Wk && t === void 0 ? Gk : t),
    this
  );
}
var Yk = Kk,
  Vk = Bk,
  Zk = Mk,
  Jk = Hk,
  ex = Xk,
  tx = Yk;
function Ar(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ar.prototype.clear = Vk;
Ar.prototype.delete = Zk;
Ar.prototype.get = Jk;
Ar.prototype.has = ex;
Ar.prototype.set = tx;
var nx = Ar,
  fp = nx,
  rx = Fi,
  ox = qm;
function sx() {
  (this.size = 0),
    (this.__data__ = {
      hash: new fp(),
      map: new (ox || rx)(),
      string: new fp(),
    });
}
var ix = sx;
function ax(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var lx = ax,
  ux = lx;
function cx(e, t) {
  var n = e.__data__;
  return ux(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var qi = cx,
  dx = qi;
function px(e) {
  var t = dx(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var fx = px,
  hx = qi;
function mx(e) {
  return hx(this, e).get(e);
}
var gx = mx,
  vx = qi;
function yx(e) {
  return vx(this, e).has(e);
}
var wx = yx,
  kx = qi;
function xx(e, t) {
  var n = kx(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var Sx = xx,
  Cx = ix,
  Ex = fx,
  bx = gx,
  Tx = wx,
  Ax = Sx;
function Ir(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ir.prototype.clear = Cx;
Ir.prototype.delete = Ex;
Ir.prototype.get = bx;
Ir.prototype.has = Tx;
Ir.prototype.set = Ax;
var Ix = Ir,
  Px = Fi,
  Rx = qm,
  _x = Ix,
  Lx = 200;
function Bx(e, t) {
  var n = this.__data__;
  if (n instanceof Px) {
    var r = n.__data__;
    if (!Rx || r.length < Lx - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new _x(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var Ox = Bx,
  Mx = Fi,
  zx = kw,
  $x = Sw,
  Dx = Ew,
  jx = Tw,
  Nx = Ox;
function Pr(e) {
  var t = (this.__data__ = new Mx(e));
  this.size = t.size;
}
Pr.prototype.clear = zx;
Pr.prototype.delete = $x;
Pr.prototype.get = Dx;
Pr.prototype.has = jx;
Pr.prototype.set = Nx;
var Hx = Pr,
  Fx = sc,
  Ux = (function () {
    try {
      var e = Fx(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  Xm = Ux,
  hp = Xm;
function Qx(e, t, n) {
  t == "__proto__" && hp
    ? hp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var ic = Qx,
  qx = ic,
  Xx = Ni;
function Wx(e, t, n) {
  ((n !== void 0 && !Xx(e[t], n)) || (n === void 0 && !(t in e))) &&
    qx(e, t, n);
}
var Wm = Wx;
function Gx(e) {
  return function (t, n, r) {
    for (var o = -1, s = Object(t), i = r(t), a = i.length; a--; ) {
      var l = i[e ? a : ++o];
      if (n(s[l], l, s) === !1) break;
    }
    return t;
  };
}
var Kx = Gx,
  Yx = Kx,
  Vx = Yx(),
  Zx = Vx,
  wi = { exports: {} };
wi.exports;
(function (e, t) {
  var n = Tr,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    s = o && o.exports === r,
    i = s ? n.Buffer : void 0,
    a = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u) return c.slice();
    var f = c.length,
      d = a ? a(f) : new c.constructor(f);
    return c.copy(d), d;
  }
  e.exports = l;
})(wi, wi.exports);
var Jx = wi.exports,
  eS = Tr,
  tS = eS.Uint8Array,
  nS = tS,
  mp = nS;
function rS(e) {
  var t = new e.constructor(e.byteLength);
  return new mp(t).set(new mp(e)), t;
}
var oS = rS,
  sS = oS;
function iS(e, t) {
  var n = t ? sS(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var aS = iS;
function lS(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var uS = lS,
  cS = Nn,
  gp = Object.create,
  dS = (function () {
    function e() {}
    return function (t) {
      if (!cS(t)) return {};
      if (gp) return gp(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  pS = dS;
function fS(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var hS = fS,
  mS = hS,
  gS = mS(Object.getPrototypeOf, Object),
  Gm = gS,
  vS = Object.prototype;
function yS(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || vS;
  return e === n;
}
var Km = yS,
  wS = pS,
  kS = Gm,
  xS = Km;
function SS(e) {
  return typeof e.constructor == "function" && !xS(e) ? wS(kS(e)) : {};
}
var CS = SS;
function ES(e) {
  return e != null && typeof e == "object";
}
var Uo = ES,
  bS = Ui,
  TS = Uo,
  AS = "[object Arguments]";
function IS(e) {
  return TS(e) && bS(e) == AS;
}
var PS = IS,
  vp = PS,
  RS = Uo,
  Ym = Object.prototype,
  _S = Ym.hasOwnProperty,
  LS = Ym.propertyIsEnumerable,
  BS = vp(
    (function () {
      return arguments;
    })()
  )
    ? vp
    : function (e) {
        return RS(e) && _S.call(e, "callee") && !LS.call(e, "callee");
      },
  Vm = BS,
  OS = Array.isArray,
  Zm = OS,
  MS = 9007199254740991;
function zS(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= MS;
}
var Jm = zS,
  $S = oc,
  DS = Jm;
function jS(e) {
  return e != null && DS(e.length) && !$S(e);
}
var ac = jS,
  NS = ac,
  HS = Uo;
function FS(e) {
  return HS(e) && NS(e);
}
var US = FS,
  ki = { exports: {} };
function QS() {
  return !1;
}
var qS = QS;
ki.exports;
(function (e, t) {
  var n = Tr,
    r = qS,
    o = t && !t.nodeType && t,
    s = o && !0 && e && !e.nodeType && e,
    i = s && s.exports === o,
    a = i ? n.Buffer : void 0,
    l = a ? a.isBuffer : void 0,
    c = l || r;
  e.exports = c;
})(ki, ki.exports);
var eg = ki.exports,
  XS = Ui,
  WS = Gm,
  GS = Uo,
  KS = "[object Object]",
  YS = Function.prototype,
  VS = Object.prototype,
  tg = YS.toString,
  ZS = VS.hasOwnProperty,
  JS = tg.call(Object);
function eC(e) {
  if (!GS(e) || XS(e) != KS) return !1;
  var t = WS(e);
  if (t === null) return !0;
  var n = ZS.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && tg.call(n) == JS;
}
var tC = eC,
  nC = Ui,
  rC = Jm,
  oC = Uo,
  sC = "[object Arguments]",
  iC = "[object Array]",
  aC = "[object Boolean]",
  lC = "[object Date]",
  uC = "[object Error]",
  cC = "[object Function]",
  dC = "[object Map]",
  pC = "[object Number]",
  fC = "[object Object]",
  hC = "[object RegExp]",
  mC = "[object Set]",
  gC = "[object String]",
  vC = "[object WeakMap]",
  yC = "[object ArrayBuffer]",
  wC = "[object DataView]",
  kC = "[object Float32Array]",
  xC = "[object Float64Array]",
  SC = "[object Int8Array]",
  CC = "[object Int16Array]",
  EC = "[object Int32Array]",
  bC = "[object Uint8Array]",
  TC = "[object Uint8ClampedArray]",
  AC = "[object Uint16Array]",
  IC = "[object Uint32Array]",
  oe = {};
oe[kC] =
  oe[xC] =
  oe[SC] =
  oe[CC] =
  oe[EC] =
  oe[bC] =
  oe[TC] =
  oe[AC] =
  oe[IC] =
    !0;
oe[sC] =
  oe[iC] =
  oe[yC] =
  oe[aC] =
  oe[wC] =
  oe[lC] =
  oe[uC] =
  oe[cC] =
  oe[dC] =
  oe[pC] =
  oe[fC] =
  oe[hC] =
  oe[mC] =
  oe[gC] =
  oe[vC] =
    !1;
function PC(e) {
  return oC(e) && rC(e.length) && !!oe[nC(e)];
}
var RC = PC;
function _C(e) {
  return function (t) {
    return e(t);
  };
}
var LC = _C,
  xi = { exports: {} };
xi.exports;
(function (e, t) {
  var n = Fm,
    r = t && !t.nodeType && t,
    o = r && !0 && e && !e.nodeType && e,
    s = o && o.exports === r,
    i = s && n.process,
    a = (function () {
      try {
        var l = o && o.require && o.require("util").types;
        return l || (i && i.binding && i.binding("util"));
      } catch {}
    })();
  e.exports = a;
})(xi, xi.exports);
var BC = xi.exports,
  OC = RC,
  MC = LC,
  yp = BC,
  wp = yp && yp.isTypedArray,
  zC = wp ? MC(wp) : OC,
  ng = zC;
function $C(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var rg = $C,
  DC = ic,
  jC = Ni,
  NC = Object.prototype,
  HC = NC.hasOwnProperty;
function FC(e, t, n) {
  var r = e[t];
  (!(HC.call(e, t) && jC(r, n)) || (n === void 0 && !(t in e))) && DC(e, t, n);
}
var UC = FC,
  QC = UC,
  qC = ic;
function XC(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var a = t[s],
      l = r ? r(n[a], e[a], a, n, e) : void 0;
    l === void 0 && (l = e[a]), o ? qC(n, a, l) : QC(n, a, l);
  }
  return n;
}
var WC = XC;
function GC(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var KC = GC,
  YC = 9007199254740991,
  VC = /^(?:0|[1-9]\d*)$/;
function ZC(e, t) {
  var n = typeof e;
  return (
    (t = t ?? YC),
    !!t &&
      (n == "number" || (n != "symbol" && VC.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var og = ZC,
  JC = KC,
  eE = Vm,
  tE = Zm,
  nE = eg,
  rE = og,
  oE = ng,
  sE = Object.prototype,
  iE = sE.hasOwnProperty;
function aE(e, t) {
  var n = tE(e),
    r = !n && eE(e),
    o = !n && !r && nE(e),
    s = !n && !r && !o && oE(e),
    i = n || r || o || s,
    a = i ? JC(e.length, String) : [],
    l = a.length;
  for (var c in e)
    (t || iE.call(e, c)) &&
      !(
        i &&
        (c == "length" ||
          (o && (c == "offset" || c == "parent")) ||
          (s && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          rE(c, l))
      ) &&
      a.push(c);
  return a;
}
var lE = aE;
function uE(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var cE = uE,
  dE = Nn,
  pE = Km,
  fE = cE,
  hE = Object.prototype,
  mE = hE.hasOwnProperty;
function gE(e) {
  if (!dE(e)) return fE(e);
  var t = pE(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !mE.call(e, r))) || n.push(r);
  return n;
}
var vE = gE,
  yE = lE,
  wE = vE,
  kE = ac;
function xE(e) {
  return kE(e) ? yE(e, !0) : wE(e);
}
var sg = xE,
  SE = WC,
  CE = sg;
function EE(e) {
  return SE(e, CE(e));
}
var bE = EE,
  kp = Wm,
  TE = Jx,
  AE = aS,
  IE = uS,
  PE = CS,
  xp = Vm,
  Sp = Zm,
  RE = US,
  _E = eg,
  LE = oc,
  BE = Nn,
  OE = tC,
  ME = ng,
  Cp = rg,
  zE = bE;
function $E(e, t, n, r, o, s, i) {
  var a = Cp(e, n),
    l = Cp(t, n),
    c = i.get(l);
  if (c) {
    kp(e, n, c);
    return;
  }
  var u = s ? s(a, l, n + "", e, t, i) : void 0,
    f = u === void 0;
  if (f) {
    var d = Sp(l),
      m = !d && _E(l),
      g = !d && !m && ME(l);
    (u = l),
      d || m || g
        ? Sp(a)
          ? (u = a)
          : RE(a)
          ? (u = IE(a))
          : m
          ? ((f = !1), (u = TE(l, !0)))
          : g
          ? ((f = !1), (u = AE(l, !0)))
          : (u = [])
        : OE(l) || xp(l)
        ? ((u = a), xp(a) ? (u = zE(a)) : (!BE(a) || LE(a)) && (u = PE(l)))
        : (f = !1);
  }
  f && (i.set(l, u), o(u, l, r, s, i), i.delete(l)), kp(e, n, u);
}
var DE = $E,
  jE = Hx,
  NE = Wm,
  HE = Zx,
  FE = DE,
  UE = Nn,
  QE = sg,
  qE = rg;
function ig(e, t, n, r, o) {
  e !== t &&
    HE(
      t,
      function (s, i) {
        if ((o || (o = new jE()), UE(s))) FE(e, t, i, n, ig, r, o);
        else {
          var a = r ? r(qE(e, i), s, i + "", e, t, o) : void 0;
          a === void 0 && (a = s), NE(e, i, a);
        }
      },
      QE
    );
}
var XE = ig;
function WE(e) {
  return e;
}
var ag = WE;
function GE(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var KE = GE,
  YE = KE,
  Ep = Math.max;
function VE(e, t, n) {
  return (
    (t = Ep(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, o = -1, s = Ep(r.length - t, 0), i = Array(s);
        ++o < s;

      )
        i[o] = r[t + o];
      o = -1;
      for (var a = Array(t + 1); ++o < t; ) a[o] = r[o];
      return (a[t] = n(i)), YE(e, this, a);
    }
  );
}
var ZE = VE;
function JE(e) {
  return function () {
    return e;
  };
}
var eb = JE,
  tb = eb,
  bp = Xm,
  nb = ag,
  rb = bp
    ? function (e, t) {
        return bp(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: tb(t),
          writable: !0,
        });
      }
    : nb,
  ob = rb,
  sb = 800,
  ib = 16,
  ab = Date.now;
function lb(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = ab(),
      o = ib - (r - n);
    if (((n = r), o > 0)) {
      if (++t >= sb) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var ub = lb,
  cb = ob,
  db = ub,
  pb = db(cb),
  fb = pb,
  hb = ag,
  mb = ZE,
  gb = fb;
function vb(e, t) {
  return gb(mb(e, t, hb), e + "");
}
var yb = vb,
  wb = Ni,
  kb = ac,
  xb = og,
  Sb = Nn;
function Cb(e, t, n) {
  if (!Sb(n)) return !1;
  var r = typeof t;
  return (r == "number" ? kb(n) && xb(t, n.length) : r == "string" && t in n)
    ? wb(n[t], e)
    : !1;
}
var Eb = Cb,
  bb = yb,
  Tb = Eb;
function Ab(e) {
  return bb(function (t, n) {
    var r = -1,
      o = n.length,
      s = o > 1 ? n[o - 1] : void 0,
      i = o > 2 ? n[2] : void 0;
    for (
      s = e.length > 3 && typeof s == "function" ? (o--, s) : void 0,
        i && Tb(n[0], n[1], i) && ((s = o < 3 ? void 0 : s), (o = 1)),
        t = Object(t);
      ++r < o;

    ) {
      var a = n[r];
      a && e(t, a, r, s);
    }
    return t;
  });
}
var Ib = Ab,
  Pb = XE,
  Rb = Ib,
  _b = Rb(function (e, t, n) {
    Pb(e, t, n);
  }),
  Lb = _b;
const Bb = Kl(Lb),
  Ob = { height: 600, width: 400, colorScheme: "light" },
  Mb = {
    personaOptions: {
      assistant: {
        name: "ä½ å¥½ï¼Œæˆ‘æ˜¯ä½ çš„ AI åŠ©æ‰‹",
        avatar:
          "https://img.alicdn.com/imgextra/i2/O1CN01Pda9nq1YDV0mnZ31H_!!6000000003025-54-tps-120-120.apng",
        tagline: "æ‚¨å¯ä»¥å°è¯•ç‚¹å‡»ä¸‹æ–¹çš„å¿«æ·å…¥å£å¼€å¯ä½“éªŒï¼",
      },
      user: {
        name: "You",
        avatar:
          "https://img.alicdn.com/tfs/TB1YeRbaSRRMKJjy0FlXXXFepXa-166-166.png",
      },
    },
    displayOptions: Ob,
    composerOptions: {
      placeholder: "è¯·è¾“å…¥æ‚¨çš„é—®é¢˜ï¼Œä½¿ç”¨ Shift + Enter æ¢è¡Œã€‚",
      hideStopButton: !0,
    },
  },
  lg = () =>
    Bb(
      {},
      Mb,
      window.CHATBOT_CONFIG.aiChatOptions || window.CHATBOT_CONFIG.options
    ),
  zb = "_stopButton_a3xkj_1",
  $b = { stopButton: zb },
  Db = A.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    children: [
      A.jsx("circle", {
        cx: "13.5",
        cy: "13",
        r: "12",
        strokeWidth: "1",
        fill: "none",
        stroke: "#999",
      }),
      A.jsx("rect", {
        x: "8",
        y: "7.5",
        width: "11",
        height: "11",
        fill: "#666",
      }),
    ],
  }),
  jb = A.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    children: A.jsx("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",
    }),
  }),
  Nb = A.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    children: [
      A.jsx("path", {
        d: "M18 6 6 18",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      A.jsx("path", {
        d: "M6 6 18 18",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  }),
  Hb = E.forwardRef((e, t) => {
    const n = lg(),
      r = Q1(),
      [o, s] = E.useState(!1),
      [i, a] = W1(s),
      l = q1(i, []),
      c = () => {
        a();
      };
    return (
      E.useImperativeHandle(t, () => ({
        resetConversation: () => {
          a(), r.conversation.reset(), r.composer.cancel();
        },
      })),
      A.jsxs(A.Fragment, {
        children: [
          A.jsx(U1, { api: r, adapter: l, ...n }),
          o &&
            A.jsx("div", {
              className: $b.stopButton,
              children: A.jsx("button", { onClick: c, children: Db }),
            }),
        ],
      })
    );
  }),
  Fb = "_title_z6174_21",
  Ub = "_bubbleTip_z6174_31",
  Qb = "_chatBoxContainer_z6174_46",
  qb = "_toolbar_z6174_56",
  Xb = "_chatBoxVisible_z6174_63",
  Wb = "_closeButton_z6174_83",
  Gb = "_refreshButton_z6174_88",
  mn = {
    title: Fb,
    bubbleTip: Ub,
    chatBoxContainer: Qb,
    toolbar: qb,
    chatBoxVisible: Xb,
    closeButton: Wb,
    refreshButton: Gb,
  },
  Kb = () => {
    const e = lg(),
      [t, n] = E.useState(window.CHATBOT_CONFIG.displayByDefault || !1),
      r = E.useRef(null),
      o = () => {
        n(!t);
      },
      s = () => {
        r.current.resetConversation(),
          sessionStorage.removeItem("chatSessionId");
      };
    return A.jsxs(A.Fragment, {
      children: [
        A.jsx("div", {
          className: "webchat-bubble-tip " + mn.bubbleTip,
          style: {
            backgroundImage: `url(${e.personaOptions.assistant.avatar})`,
          },
          onClick: o,
        }),
        A.jsxs("div", {
          className: `webchat-container ${mn.chatBoxContainer} ${
            t ? mn.chatBoxVisible : ""
          }`,
          children: [
            A.jsxs("div", {
              className: "webchat-container-toolbar " + mn.toolbar,
              children: [
                A.jsx("span", { className: mn.title, children: "AI åŠ©æ‰‹" }),
                A.jsx("button", {
                  className: mn.refreshButton,
                  onClick: s,
                  children: jb,
                }),
                A.jsx("button", {
                  className: mn.closeButton,
                  onClick: () => n(!1),
                  children: Nb,
                }),
              ],
            }),
            A.jsx(Hb, { ref: r }),
          ],
        }),
      ],
    });
  };
var ug = { exports: {} },
  cg = { exports: {} };
Date.now =
  Date.now ||
  function () {
    return new Date().getTime();
  };
var Yb = Date.now(),
  Gl = function () {},
  Vb = function () {
    var e = typeof console == "object" ? console.warn : Gl;
    try {
      var t = { warn: e };
      t.warn.call(t);
    } catch {
      return Gl;
    }
    return e;
  },
  Zb = {
    noop: Gl,
    warn: Vb(),
    key: "__bl",
    selfErrKey: "ARMS_SDK_ERROR",
    selfErrPage: "ARMSSDK",
    win: typeof window == "object" && window.document ? window : void 0,
    regionMap: {
      cn: "https://arms-retcode.aliyuncs.com/r.png?",
      sg: "https://arms-retcode-sg.aliyuncs.com/r.png?",
      sg_2: "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
      daily: "http://arms-retcode-daily.alibaba.net/r.png?",
      daily_2: "https://arms-retcode-daily.alibaba.net/r.png?",
      daily_3: "http://arms-retcode-daily.aliyun.test/r.png?",
      us: "https://retcode-us-west-1.arms.aliyuncs.com/r.png?",
      tw: "https://arms-retcode.orientalgame.com.tw/r.png?",
      tw_sg: "https://arms-retcode-sg.orientalgame.com.tw/r.png?",
      hz_finance: "https://arms-retcode-hz-finance.aliyuncs.com/r.png?",
    },
    defaultImgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
    createObject: function (e) {
      if (Object.create) return Object.create(e);
      var t = function () {};
      return (t.prototype = e), new t();
    },
    each: function (e, t) {
      var n = 0,
        r = e.length;
      if (this.T(e, "Array"))
        for (; n < r && t.call(e[n], e[n], n) !== !1; n++);
      else for (n in e) if (t.call(e[n], e[n], n) === !1) break;
      return e;
    },
    safetyCall: function (e, t, n) {
      if (typeof e != "function") return n;
      try {
        return e.apply(this, t);
      } catch {
        return n;
      }
    },
    T: function (e, t) {
      var n = Object.prototype.toString.call(e).substring(8).replace("]", "");
      return t ? n === t : n;
    },
    duration: function () {
      var e = Date;
      try {
        performance && this.T(performance.now, "Function") && (e = performance);
      } catch {
        e = Date;
      }
      var t = e.now();
      return function () {
        return Math.round(e.now() - t);
      };
    },
    filterByRule: function () {
      var e = [].slice.call(arguments),
        t = e.length;
      if (t < 2) return e[0];
      var n = e[t - 1],
        r = e[0];
      if (!r) return "";
      if (!n) return r;
      var o = this,
        s = o.T(n),
        i = e.slice(0, t - 1);
      return s === "Function"
        ? o.safetyCall(n, i, r)
        : s === "Array"
        ? (this.each(n, function (a) {
            i[0] = r = o.filterByRule.apply(o, [].concat(i, a));
          }),
          r)
        : s === "Object"
        ? r.replace(n.rule, n.target || "")
        : r.replace(n, "");
    },
    ignoreByRule: function (e, t) {
      if (!e || !t) return !1;
      if (
        ((this.isString(t) || t.source || this.T(t) === "Function") &&
          (t = [t]),
        !this.isArray(t))
      )
        return (
          this.warn(
            "[arms] invalid rules of ignore config, (list of) String/RegExp/Funcitons are available"
          ),
          !1
        );
      for (var n, r = [], o = 0, s = t.length; o < s; o++)
        if (((n = t[o]), this.isString(n)))
          r.push(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"));
        else if (n && n.source) r.push(n.source);
        else if (
          n &&
          this.T(n) === "Function" &&
          this.safetyCall(n, [e], !1) === !0
        )
          return !0;
      var i = new RegExp(r.join("|"), "i");
      return !!(r.length && i.test && i.test(e));
    },
    J: function (e) {
      if (!e || typeof e != "string") return e;
      var t = null;
      try {
        t = JSON.parse(e);
      } catch {}
      return t;
    },
    pick: function (e) {
      return e === 1 || Math.ceil(Math.random() * e) === 1;
    },
    verifyConfig: function (e) {
      if ("sample" in e) {
        var t = e.sample,
          n = t;
        t && /^\d+(\.\d+)?%$/.test(t) && (n = parseInt(100 / parseFloat(t))),
          0 < n && 1 > n && (n = parseInt(1 / n)),
          n >= 1 && n <= 100 ? (e.sample = n) : delete e.sample;
      }
      return e;
    },
    on: function (e, t, n, r, o) {
      return (
        e.addEventListener
          ? ((o = o || !1),
            e.addEventListener(
              t,
              function s(i) {
                r && e.removeEventListener(t, s, o), n.call(this, i);
              },
              o
            ))
          : e.attachEvent &&
            e.attachEvent("on" + t, function s(i) {
              r && e.detachEvent("on" + t, s), n.call(this, i);
            }),
        this
      );
    },
    off: function (e, t, n) {
      return n
        ? (e.removeEventListener
            ? e.removeEventListener(t, n)
            : e.detachEvent && e.detachEvent(t, n),
          this)
        : this;
    },
    delay: function (e, t) {
      return t === -1 ? (e(), null) : setTimeout(e, t || 0);
    },
    ext: function (e) {
      for (var t = 1, n = arguments.length; t < n; t++) {
        var r = arguments[t];
        for (var o in r)
          Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }
      return e;
    },
    sub: function (e, t) {
      var n = {};
      return (
        this.each(e, function (r, o) {
          t.indexOf(o) !== -1 && (n[o] = r);
        }),
        n
      );
    },
    uu: function () {
      for (
        var e,
          t,
          n = 20,
          r = new Array(n),
          o = Date.now().toString(36).split("");
        n-- > 0;

      )
        (t = (e = (36 * Math.random()) | 0).toString(36)),
          (r[n] = e % 3 ? t : t.toUpperCase());
      for (var s = 0; s < 8; s++) r.splice(3 * s + 2, 0, o[s]);
      return r.join("");
    },
    guid: function () {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (16 * Math.random()) | 0;
          return (e === "x" ? t : (3 & t) | 8).toString(16);
        }
      );
    },
    seq: function () {
      return (Yb++).toString(36);
    },
    decode: function (e) {
      try {
        e = decodeURIComponent(e);
      } catch {}
      return e;
    },
    encode: function (e, t) {
      try {
        e = t
          ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29")
          : encodeURIComponent(e);
      } catch {}
      return e;
    },
    serialize: function (e) {
      e = e || {};
      var t = [];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) &&
          e[n] !== void 0 &&
          t.push(n + "=" + this.encode(e[n], n === "msg"));
      return t.join("&");
    },
    checkAPI: function (e, t) {
      if (!e || typeof e != "string") return !1;
      var n = /arms-retcode[\w-]*\.aliyuncs/.test(e);
      return !n && t && (n = /(alicdn\.com)|(mmstat\.com)/.test(e)), !n;
    },
    checkAutoError: function (e) {
      return !(!e || !e.message) && !/failed[\w\s]+fetch/i.test(e.message);
    },
    cutUrlSearch: function (e) {
      return e && typeof e == "string"
        ? e.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "")
        : "";
    },
    removeUrlSearch: function (e) {
      return e && typeof e == "string" ? e.replace(/\?.*$/, "") : "";
    },
    createFakeToString: function (e) {
      return function () {
        return e + "() { [native code] }";
      };
    },
    checkSameOrigin: function (e, t) {
      if (!t || !e) return !1;
      var n = "//" + t.split("/")[2];
      return (
        e === t ||
        e.slice(0, t.length + 1) === t + "/" ||
        e === n ||
        e.slice(0, n.length + 1) === n + "/" ||
        !/^(\/\/|http:|https:).*/.test(e)
      );
    },
    getRandIP: function () {
      for (var e = [], t = 0; t < 4; t++) {
        var n = Math.floor(256 * Math.random());
        e[t] = (n > 15 ? "" : "0") + n.toString(16);
      }
      return e.join("").replace(/^0/, "1");
    },
    getSortNum: function (e) {
      return e
        ? (e += 1) >= 1e3 && e <= 9999
          ? e
          : e < 1e3
          ? e + 1e3
          : (e % 1e4) + 1e3
        : 1e3;
    },
    getRandNum: function (e) {
      return e && typeof e == "string"
        ? e.length < 5
          ? this.getNum(5)
          : e.substring(e.length - 5)
        : this.getNum(5);
    },
    getNum: function (e) {
      for (var t = [], n = 0; n < e; n++) {
        var r = Math.floor(16 * Math.random());
        t[n] = r.toString(16);
      }
      return t.join("");
    },
    getCurDomain: function () {
      return (location && location.hostname) || "";
    },
    getSrcType: function (e, t) {
      var n = (location && location.host) || "";
      if (!n) return "";
      var r = new URL(e).host;
      if (r === n) return "self";
      for (var o = 0; o < t.length; o += 1) if (r.includes(t[o])) return "cdn";
      return "others";
    },
    parseFetchHeaders: function (e) {
      if (!e) return {};
      var t = {};
      try {
        if (typeof e.keys == "function")
          for (var n = e.keys(), r = n.next(); !r.done; ) {
            var o = r.value;
            (t[o] = e.get(o)), (r = n.next());
          }
        else t = e;
      } catch {
        t = {};
      }
      return t;
    },
    parseXhrHeaders: function (e) {
      if (!e && typeof e != "string") return {};
      var t = {};
      try {
        var n = e.split(`\r
`);
        t = n.reduce(function (r, o) {
          var s = o.split(": ");
          return (r[s[0]] = s[1]), r;
        }, {});
      } catch {
        t = {};
      }
      return t;
    },
    getQuerys: function (e) {
      if (!e) return "";
      var t = {},
        n = [],
        r = "",
        o = "";
      try {
        var s = [];
        if (
          (e.indexOf("?") >= 0 &&
            (s = e.substring(e.indexOf("?") + 1, e.length).split("&")),
          s.length > 0)
        )
          for (var i in s)
            (r = (n = s[i].split("="))[0]), (o = n[1]), (t[r] = o);
      } catch {
        t = {};
      }
      return t;
    },
    getURL: function (e) {
      if (!e) return null;
      var t = {},
        n = e.length,
        r = e.indexOf("://");
      if (r < 0) return null;
      t.protocol = e.substring(0, r + 1);
      var o = e.indexOf("#"),
        s = e.indexOf("?");
      o < 0 && (o = n),
        s < 0 && (s = o),
        (t.search = e.substring(s, o).substring(0, 1e3));
      var i = e.substring(r + 3, s),
        a = i.indexOf("/");
      return (
        a < 0 && (a = i.length),
        (t.domain = i.substring(0, a).split(":")[0]),
        (t.path = i.substring(a, i.length).substring(0, 1e3)),
        t
      );
    },
    getResType: function (e, t) {
      if (["script", "img", "other"].indexOf(e) > -1) return e;
      if (["video"].indexOf(e) > -1) return "media";
      if (["document", "iframe"].indexOf(e) > -1) return "doc";
      var n = t ? this.getURL(t) : null,
        r = n && n.path ? n.path.lastIndexOf(".") : -1,
        o = (r > 0 ? n.path.substr(r + 1) : "").toLowerCase();
      if (o) {
        if (["eot", "woff", "woff2", "ttf"].indexOf(o) > -1) return "font";
        if (o === "css") return "css";
        if (o === "js") return "script";
      }
      return ["fetch", "xmlhttprequest", "beacon"].indexOf(e) > -1
        ? "api"
        : "others";
    },
    areInOrder: function () {
      for (var e = 1; e < arguments.length; e += 1)
        if (arguments[e - 1] > arguments[e]) return !1;
      return !0;
    },
    getFetchSnapshot: function (e, t, n) {
      var r, o;
      try {
        var s = (e && typeof e[0] != "string" ? e[0].url : e[0]) || "",
          i = (e && typeof e[0] != "string" ? e[0] : e[1]) || {},
          a = i.method.toUpperCase() === "POST" ? i.body : this.getQuerys(s);
        (r = {
          originApi: s,
          method: i.method || "unknown",
          params: a,
          response: t || "",
          reqHeaders: this.parseFetchHeaders(i.headers || null),
          resHeaders: this.parseFetchHeaders(n),
        }),
          (o = (JSON && JSON.stringify(r)) || "{}");
      } catch {
        o = "{}";
      }
      return o;
    },
    getXhrSnapshot: function (e, t, n) {
      if (!e || !t || !n) return {};
      var r, o;
      try {
        var s = "";
        n.responseType === "" || n.responseType === "text"
          ? (s = n.responseText)
          : n.responseType === "document" && (s = n.responseXML),
          (r = {
            originApi: e,
            method: t,
            params: this.getQuerys(e),
            response: s,
            reqHeaders: {},
            resHeaders: this.parseXhrHeaders(
              (typeof n.getAllResponseHeaders == "function" &&
                n.getAllResponseHeaders()) ||
                ""
            ),
          }),
          (o = (JSON && JSON.stringify(r)) || "{}");
      } catch {
        o = "{}";
      }
      return o;
    },
    isRobot: function () {
      var e = [
        "nuhk",
        "googlebot/",
        "googlebot-image",
        "yammybot",
        "openbot",
        "slurp",
        "msnbot",
        "ask jeeves/teoma",
        "ia_archiver",
        "baiduspider",
        "bingbot/",
        "adsbot",
      ];
      if (!navigator || typeof navigator.userAgent != "string") return !1;
      try {
        for (
          var t = navigator.userAgent.toLowerCase(), n = 0;
          n < e.length;
          n++
        ) {
          var r = e[n];
          if (t.lastIndexOf(r) >= 0) return !0;
        }
      } catch {
        this.warn("[arms] useragent parse error");
      }
      return !1;
    },
    isFunction: function (e) {
      return typeof e == "function";
    },
    isPlainObject: function (e) {
      return Object.prototype.toString.call(e) === "[object Object]";
    },
    isString: function (e) {
      return Object.prototype.toString.call(e) === "[object String]";
    },
    isArray: function (e) {
      return Object.prototype.toString.call(e) === "[object Array]";
    },
    joinRegExp: function (e) {
      for (var t, n = [], r = 0, o = e.length; r < o; r++)
        (t = e[r]),
          this.isString(t)
            ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"))
            : t && t.source && n.push(t.source);
      return new RegExp(n.join("|"), "i");
    },
    reWriteMethod: function (e, t, n) {
      if (e !== null) {
        var r = e[t];
        e[t] = n(r);
      }
    },
    checkSDKError: function (e, t) {
      return !e && !t
        ? !1
        : new RegExp(this.selfErrKey, "i").test(e)
        ? !0
        : !!this.ignoreByRule(t, [
            /retcode.alicdn.com\/retcode\/bl.js/,
            /g.alicdn.com\/retcode\/cloud-sdk\/bl.js/,
            /laz-g-cdn.alicdn.com\/retcode\/cloud-sdk\/bl.js/,
            /local.taobao.com:8880\/build\/bl/,
          ]);
    },
    sdkError: function (e) {
      return { msg: e, message: this.selfErrKey };
    },
    dealParam: function (e, t, n) {
      var r = {};
      try {
        r = this.isPlainObject(e)
          ? this.ext(
              { key: e.key || "default", val: e.val || e.value || n },
              e,
              { begin: Date.now() }
            )
          : { key: e || "default", val: t || n, begin: Date.now() };
      } catch (o) {
        this.warn("[retcode] baseLog error: " + o);
      }
      return r;
    },
  },
  He = Zb,
  dg = { exports: {} },
  pg = { exports: {} },
  Tp = He,
  Jb = function (e, t, n) {
    typeof e == "object" && (e = Tp.serialize(e));
    var r = t + e + (n ? "&post_res=" : "");
    window &&
    window.navigator &&
    typeof window.navigator.sendBeacon == "function"
      ? window.navigator.sendBeacon(r, n || "&post_res=")
      : Tp.warn("[arms] navigator.sendBeacon not surported");
  },
  U = He,
  eT = Jb,
  Ap = "aokcdqn3ly@e629dabd48a9933",
  Ip = function (e, t) {
    var n;
    if (
      t.t === "error" &&
      (n = e.requestQueue[0]) &&
      n.t === "error" &&
      t.msg === n.msg
    )
      return (t.times = n.times + 1), void (e.requestQueue[0] = t);
    if (t.t === "behavior") {
      var r = e.requestQueue && e.requestQueue.length;
      if (r > 0 && e.requestQueue[r - 1].t === "behavior") {
        var o = t.behavior || [];
        e.requestQueue[r - 1].behavior.concat(o);
      } else e.requestQueue.push(t);
    } else e.requestQueue.unshift(t);
    return (
      e.onReady(function () {
        e.requestTimmer = U.delay(
          function () {
            e.clear();
          },
          e.requestQueue[0] && e.requestQueue[0].t === "error" ? 3e3 : -1
        );
      }),
      !0
    );
  },
  Zr = function (e) {
    return (
      (this.ver = "1.8.36-beta.12"),
      (this._conf = U.ext({}, Zr.dftCon)),
      (this.sampleCache = {}),
      (this.requestQueue = []),
      (this.selfQueue = []),
      (this.sdkFlag = !0),
      (this.hash = U.seq()),
      this.resetPageview(),
      this.setConfig(e),
      (this.rip = U.getRandIP()),
      (this.record = 999),
      (this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"]),
      (this._common = {}),
      this
    );
  };
(Zr.dftCon = {
  sample: 1,
  pvSample: 1,
  tag: "",
  imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
  region: null,
  ignore: {
    ignoreUrls: [],
    ignoreApis: [],
    ignoreErrors: [/^Script error\.?$/],
    ignoreResErrors: [],
    ignoreResources: [/\/(bl|wl)(.debug)?.js$/],
  },
  release: void 0,
  environment: "prod",
  beforeReport: null,
  parseTraceId: null,
}),
  (Zr.prototype = {
    constructor: Zr,
    onReady: function (e) {
      return e();
    },
    getPage: function () {
      var e = this._conf.page;
      return U.safetyCall(e, [], e + "");
    },
    setPage: function () {},
    setConfig: function (e) {
      e &&
        typeof e == "object" &&
        (U.verifyConfig(e),
        (e = this.setImgUrl(e)),
        (this._conf = U.ext({}, this._conf, e)));
    },
    setImgUrl: function (e) {
      var t = e.region,
        n = e.imgUrl;
      if (t) {
        var r = U.regionMap[t];
        return (e.imgUrl = r || U.defaultImgUrl), e;
      }
      return n && (e.imgUrl = n), e;
    },
    checkImgUrl: function () {
      return !0;
    },
    sendRequest: function () {},
    sendBeacon: function (e, t, n) {
      eT(e, t || this.getConfig("imgUrl"), n);
    },
    postData: function () {},
    commonInfo: function () {
      return {};
    },
    setCommonInfo: function (e) {
      e && typeof e == "object" && (this._common = U.ext({}, this._common, e));
    },
    resetPageview: function () {
      (this.pageview = U.uu()), (this.sBegin = Date.now());
    },
    getUsername: function () {
      if (this.username) return this.username;
      var e = this._conf,
        t = e && e.setUsername;
      if (typeof t == "function")
        try {
          var n = t();
          typeof n == "string" && ((n = n.substr(0, 40)), (this.username = n));
        } catch (r) {
          U.warn("[arms] setUsername fail", r);
        }
      return this.username;
    },
    getTraceId: function () {
      var e = this.rip,
        t = Date.now(),
        n = U.getSortNum(this.record),
        r = e + t + n + U.getRandNum(this._conf.pid);
      return (
        (this["EagleEye-TraceID"] = r),
        (this.record = n),
        { "EagleEye-TraceID": r }
      );
    },
    getUberTraceId: function (e) {
      var t = this.rip,
        n = Date.now(),
        r = U.getSortNum(this.record),
        o = U.getRandNum(this._conf.pid),
        s = t + n + r + U.getNum(2) + o,
        i = s.substring(0, 16);
      return (
        (e = e ? "1" : "0"),
        s[0] === "0" && (s[0] = "1"),
        s[16] === "0" && (s[16] = "1"),
        { "uber-trace-id": s + ":" + i + ":0:" + e, traceId: s }
      );
    },
    getB3TraceId: function (e) {
      var t = this.rip,
        n = Date.now(),
        r = U.getSortNum(this.record),
        o = U.getRandNum(this._conf.pid),
        s = t + n + r + U.getNum(2) + o,
        i = s.substring(0, 16);
      return (
        (e = e ? "1" : "0"),
        s[0] === "0" && (s[0] = "1"),
        s[16] === "0" && (s[16] = "1"),
        {
          b3: s + "-" + i + "-" + e + "-0",
          "X-B3-TraceId": s,
          "X-B3-ParentSpanId": "0",
          "X-B3-SpanId": i,
          "X-B3-Sampled": e,
        }
      );
    },
    getPageviewId: function () {
      return { "EagleEye-SessionID": this.pageview };
    },
    getConfig: function (e) {
      return e ? this._conf[e] : U.ext({}, this._conf);
    },
    sampling: function (e) {
      return (
        e === 1 ||
        (typeof this.sampleCache[e] == "boolean"
          ? this.sampleCache[e]
          : ((this.sampleCache[e] = U.pick(e)), this.sampleCache[e]))
      );
    },
    clear: function (e) {
      var t;
      clearTimeout(this.requestTimmer), (this.requestTimmer = null);
      for (
        var n = this._conf && typeof this._conf.sendRequest == "function";
        (t = this.requestQueue.pop());

      )
        if (t.t === "res") this.postData(t, "res");
        else if (t.t === "error") this.postData(t, "err");
        else if (t.t === "api") this.postData(t, "apiSnapshot");
        else if (t.t === "behavior") this.postData(t, "behavior");
        else if (
          t.t === "health" &&
          !n &&
          window &&
          window.navigator &&
          typeof window.navigator.sendBeacon == "function"
        )
          this.sendBeacon(t);
        else if (
          t.t === "resource" &&
          !n &&
          window &&
          window.navigator &&
          typeof window.navigator.sendBeacon == "function"
        ) {
          var r = JSON.stringify({ resource: t.resource });
          delete t.resource, this.sendBeacon(t, null, r);
        } else
          t.t === "resource"
            ? this.postData(t, "resource")
            : this.sendRequest(t);
      return e && this.clearSelf(), this;
    },
    clearSelf: function () {
      var e;
      for (
        clearTimeout(this.Timmer), this.Timmer = null;
        (e = this.selfQueue.pop());

      )
        this.postData(e, "err");
      return this;
    },
    _lg: function (e, t, n, r) {
      var o = this,
        s = o._conf,
        i = o.getPage(),
        a = s.ignore || {},
        l = a.ignoreErrors,
        c = a.ignoreResErrors,
        u = a.ignoreUrls,
        f = a.ignoreApis;
      if (
        o._isRobot ||
        U.ignoreByRule(i, u) ||
        U.ignoreByRule(U.decode(i), u) ||
        (e === "error" &&
          (U.ignoreByRule(t.msg, l) || U.ignoreByRule(U.decode(t.msg), l))) ||
        (e === "resourceError" &&
          (U.ignoreByRule(t.src, c) || U.ignoreByRule(U.decode(t.src), c))) ||
        (e === "api" &&
          (U.ignoreByRule(t.api, f) || U.ignoreByRule(U.decode(t.api), f))) ||
        !o.checkImgUrl(s.imgUrl) ||
        !t ||
        s.disabled ||
        !s.pid ||
        r === 0
      )
        return o;
      var d = t.dl;
      if (
        (delete t.dl,
        (t = U.ext(
          {
            t: e,
            times: 1,
            page: i,
            tag: s.tag || "",
            release: s.release || "",
            environment: s.environment,
            begin: Date.now(),
            c1: s.c1,
            c2: s.c2,
            c3: s.c3,
          },
          t,
          o.commonInfo(),
          o._common,
          {
            pid: s.pid,
            _v: o.ver,
            pv_id: o.pageview,
            username: o.getUsername(),
            sampling: n || 1,
            dl: d,
            z: U.seq(),
          }
        )),
        U.T(s.beforeReport) === "Function")
      )
        try {
          if (!(t = s.beforeReport(t))) return o;
        } catch {
          return o;
        }
      return r === 1 ? Ip(o, t) : n && !o.sampling(n) ? o : Ip(o, t);
    },
    _self: function (e, t, n) {
      var r = this,
        o = r._conf;
      if (
        e !== "error" ||
        !r.checkImgUrl(o.imgUrl) ||
        !t ||
        o.disabled ||
        !o.pid ||
        !Ap ||
        (n && !r.sampling(n))
      )
        return r;
      t = U.ext(
        { t: e, times: 1, page: U.selfErrPage, tag: o.pid, begin: Date.now() },
        t,
        { pid: Ap, _v: r.ver, sampling: n || 1, z: U.seq() }
      );
      var s = r.selfQueue[0];
      if (s) {
        s.times++;
        try {
          s.err &&
            t.err &&
            s.err.msg_raw &&
            t.err.msg_raw &&
            s.err.msg_raw.split("&").indexOf(t.err.msg_raw) < 0 &&
            s.err.msg_raw.length < 1e3 &&
            (s.err.msg_raw += "&" + t.err.msg_raw);
        } catch {}
      } else
        r.selfQueue.unshift(t),
          r.onReady(function () {
            r.sdkFlag &&
              ((r.sdkFlag = !1),
              (r.Timmer = U.delay(function () {
                r.clearSelf();
              }, 1e4)));
          });
    },
    custom: function (e, t) {
      if (!e || typeof e != "object") return this;
      var n = !1,
        r = { begin: Date.now() };
      return (
        U.each(e, function (o, s) {
          return (
            !(n = s && s.length <= 20) && U.warn("[retcode] invalid key: " + s),
            (r["x-" + s] = o),
            n
          );
        }),
        n ? this._lg("custom", r, t || 1) : this
      );
    },
  }),
  (pg.exports = Zr);
var tT = pg.exports,
  Q = He,
  Cn = tT,
  nT = [
    "api",
    "success",
    "time",
    "code",
    "msg",
    "trace",
    "traceId",
    "begin",
    "pv_id",
    "sid",
    "seq",
    "domain",
    "flag",
    "apiSnapshot",
    "tag",
    "c1",
    "c2",
    "c3",
  ],
  Aa = function (e) {
    var t = (e.key || "default").split("::");
    return t.length > 1
      ? Q.ext(e, { group: t[0], key: t[1] })
      : Q.ext(e, { group: "default_group", key: t[0] });
  },
  gn = function (e) {
    Cn.call(this, e);
    var t;
    try {
      t =
        typeof performance == "object"
          ? performance.timing.fetchStart
          : Date.now();
    } catch {
      t = Date.now();
    }
    return (this._startTime = t), this;
  };
(gn.prototype = Q.createObject(Cn.prototype)),
  Q.ext(Cn.dftCon, { startTime: null }),
  Q.ext(gn.prototype, {
    constructor: gn,
    _super: Cn,
    sum: function (e, t, n) {
      try {
        var r = Q.dealParam(e, t, 1);
        return this._lg("sum", Aa(r), n);
      } catch (o) {
        Q.warn("[retcode] can not get parseStatData: " + o);
      }
    },
    avg: function (e, t, n) {
      try {
        var r = Q.dealParam(e, t, 0);
        return this._lg("avg", Aa(r), n);
      } catch (o) {
        Q.warn("[retcode] can not get parseStatData: " + o);
      }
    },
    percent: function (e, t, n, r) {
      try {
        return this._lg(
          "percent",
          Aa({ key: e, subkey: t, val: n || 0, begin: Date.now() }),
          r
        );
      } catch (o) {
        Q.warn("[retcode] can not get parseStatData: " + o);
      }
    },
    msg: function (e, t) {
      if (e && !(e.length > 180)) return this.custom({ msg: e }, t);
    },
    error: function (e, t) {
      if (!e) return Q.warn("[retcode] invalid param e: " + e), this;
      arguments.length === 1
        ? (typeof e == "string" && ((e = { message: e }), (t = {})),
          typeof e == "object" && (t = e = e.error || e))
        : (typeof e == "string" && (e = { message: e }),
          typeof t != "object" && (t = {}));
      var n = e.name || "CustomError",
        r = e.message || "",
        o = e.stack || "";
      t = t || {};
      var s =
        (typeof location == "object" &&
          typeof location.href == "string" &&
          location.href.substring(0, 500)) ||
        "";
      if (Q.checkSDKError(r, t.filename)) {
        var i = /^Script error\.?$/,
          a = e.msg || e.message;
        if (Q.ignoreByRule(a, i) || Q.ignoreByRule(Q.decode(a), i)) return this;
        var l = {
          msg: Q.selfErrKey,
          err: { msg_raw: Q.encode(e.msg || e.message) },
        };
        return this._self("error", l, 1);
      }
      for (
        var c = {
            begin: Date.now(),
            cate: n,
            msg: r && r.substring(0, 1e3),
            stack: o && o.substring(0, 1e3),
            file: Q.removeUrlSearch(t.filename || ""),
            line: t.lineno || "",
            col: t.colno || "",
            err: { msg_raw: Q.encode(r), stack_raw: Q.encode(o) },
            dl: s,
          },
          u = ["tag", "c1", "c2", "c3"],
          f = 0;
        f < u.length;
        f++
      ) {
        var d = u[f];
        t[d] && (c[d] = t[d]);
      }
      var m = (this.getConfig("ignore") || {}).ignoreErrors;
      return Q.ignoreByRule(c.msg, m) || Q.ignoreByRule(Q.decode(c.msg), m)
        ? this
        : (this.beforeSend && this.beforeSend("error", c),
          this._lg("error", c, 1));
    },
    behavior: function (e) {
      if (e) {
        var t = typeof e == "object" && e.behavior ? e : { behavior: e };
        return (
          this.beforeSend && this.beforeSend("behavior", t),
          this._lg("behavior", t, 1)
        );
      }
    },
    api: function (e, t, n, r, o, s, i, a, l, c, u, f, d, m, g, p) {
      if (!e) return Q.warn("[retcode] api is null"), this;
      if (
        ((e =
          typeof e == "string"
            ? {
                api: e,
                success: t,
                time: n,
                code: r,
                msg: o,
                begin: s,
                traceId: i,
                pv_id: a,
                apiSnapshot: l,
                domain: c,
                flag: f,
                tag: d,
                c1: m,
                c2: g,
                c3: p,
              }
            : Q.sub(e, nT)),
        !Q.checkAPI(e.api, !0))
      )
        return this;
      e.code = e.code || "";
      var w = e.msg || "";
      if (
        ((w = typeof w == "string" ? w.substring(0, 1e3) : w),
        (e.msg = w),
        (e.success = e.success ? 1 : 0),
        (e.time = +e.time),
        (e.begin = e.begin),
        (e.traceId = e.traceId || ""),
        (e.pv_id = e.pv_id || ""),
        (e.domain = e.domain || ""),
        (e.flag = e.flag),
        (e.dl =
          (typeof location == "object" &&
            typeof location.href == "string" &&
            location.href.substring(0, 500)) ||
          ""),
        e.apiSnapshot &&
          (typeof e.apiSnapshot == "object" &&
            (e.apiSnapshot = JSON.stringify(e.apiSnapshot)),
          typeof e.apiSnapshot != "string" && delete e.apiSnapshot,
          e.apiSnapshot.length > 2e3 &&
            (e.apiSnapshot = e.apiSnapshot.substring(0, 2e3))),
        u && (e.traceOrigin = u),
        !e.api || isNaN(e.time))
      )
        return Q.warn("[retcode] invalid time or api"), this;
      var v = (this.getConfig("ignore") || {}).ignoreApis;
      return Q.ignoreByRule(e.api, v) || Q.ignoreByRule(Q.decode(e.api), v)
        ? this
        : e.time < 0
        ? this
        : (this.beforeSend && this.beforeSend("api", e),
          this._lg("api", e, e.success && this.getConfig("sample"), e.flag));
    },
    speed: function (e, t, n) {
      var r = this,
        o = this.getConfig("startTime") || this._startTime;
      return /^s(\d|1[0])$/.test(e)
        ? ((t = typeof t != "number" ? Date.now() - o : t >= o ? t - o : t),
          (r.speedCache = r.speedCache || {}),
          (r.speedCache[e] = t),
          (r.speedCache.begin = o),
          clearTimeout(r.speedTimmer),
          (r.speedTimmer = setTimeout(function () {
            n || (r.speedCache.page = r.getPage(!0)),
              r._lg("speed", r.speedCache),
              (r.speedCache = null);
          }, 5e3)),
          r)
        : (Q.warn("[retcode] invalid point: " + e), r);
    },
    performance: function (e) {
      if (e && typeof e == "object" && !this.hasSendPerf) {
        var t = {},
          n = {},
          r = this.getConfig("autoSendPerf");
        if (e.autoSend && r)
          return (
            (n = Q.ext(this.perfData || {}, e)),
            (this.hasSendPerf = !0),
            this._lg("perf", n, this.getConfig("sample"))
          );
        if (e.autoSend && !r)
          return (
            delete e.autoSend,
            this.perfData
              ? ((n = Q.ext(this.perfData || {}, e)),
                (this.hasSendPerf = !0),
                this._lg("perf", n, this.getConfig("sample")))
              : void (this.perfData = e)
          );
        for (var o in e)
          (/^t([1-9]|1[0])$/.test(o) || o === "ctti" || o === "cfpt") &&
            (t[o] = e[o]);
        if (e.autoSend === !0 || (!r && (r || this.perfData)))
          return e.autoSend !== !0 && r === !1 && this.perfData
            ? ((t = Q.ext(this.perfData || {}, t)),
              (this.hasSendPerf = !0),
              this._lg("perf", t, this.getConfig("sample")))
            : void 0;
        this.perfData = Q.ext(this.perfData || {}, t);
      }
    },
    resource: function (e, t) {
      if (!e || !Q.isPlainObject(e))
        return Q.warn("[arms] invalid param data: " + e), this;
      var n = Object.keys(e),
        r = ["begin", "dom", "load", "res", "dl"],
        o = !1;
      for (var s in r)
        if (n.indexOf(r[s]) < 0) {
          o = !0;
          break;
        }
      if (o) return Q.warn("[arms] lack param data: " + e), this;
      var i = {
        begin: e.begin || Date.now(),
        dom: e.dom || "",
        load: e.load || "",
        res: Q.isArray(e.res) ? JSON.stringify(e.res) : JSON.stringify([]),
        dl: e.dl || "",
      };
      return this._lg("res", i, t);
    },
    event: function (e, t) {
      if (typeof e == "object" && e && e.key) {
        var n = {},
          r = ["key", "success", "time", "c1", "c2", "c3"];
        for (var o in e) r.indexOf(o) > -1 && (n[o] = e[o]);
        (n.success = e.success === !1 ? 0 : 1), this._lg("event", n, t);
      }
    },
  }),
  (gn._super = Cn),
  (gn._root = Cn),
  (Cn.Reporter = gn),
  (dg.exports = gn);
var rT = dg.exports,
  fg = { exports: {} },
  Pp = He,
  ir = typeof window == "object" ? window : {},
  oT = "catch",
  Xr = ir.__oFetch_ || ir.fetch;
(Xr = typeof Xr == "function" ? Xr : void 0),
  (fg.exports = function (e, t) {
    var n = -1;
    typeof e == "object" && ((n = e.z), (e = Pp.serialize(e)));
    var r = t + e;
    if (Xr) return Xr(r, { method: "HEAD", mode: "no-cors" })[oT](Pp.noop);
    if (ir.document && ir.document.createElement) {
      var o = "__request_hold_" + n,
        s = (ir[o] = new Image());
      (s.onload = s.onerror =
        function () {
          ir[o] = void 0;
        }),
        (s.src = r),
        (s = null);
    }
  });
var sT = fg.exports,
  hg = { exports: {} },
  iT = He,
  Rp = typeof window == "object" ? window : {},
  Es = Rp.__oXMLHttpRequest_ || Rp.XMLHttpRequest;
(Es = typeof Es == "function" ? Es : void 0),
  (hg.exports = function (e, t) {
    try {
      var n = new Es();
      n.open("POST", t, !0),
        n.setRequestHeader("Content-Type", "text/plain"),
        n.send(JSON.stringify(e));
    } catch (r) {
      iT.warn(
        `[retcode] Failed to log, exception is :
` + r
      );
    }
  });
var aT = hg.exports,
  Ia,
  _p;
function lT() {
  if (_p) return Ia;
  _p = 1;
  var e = He;
  return (
    (Ia = function (t, n) {
      var r = [],
        o = null,
        s = n && n.location && n.location.href,
        i = void 0,
        a = null,
        l = function (d, m, g) {
          if (d !== null) {
            var p = d[m];
            d[m] = g(p);
          }
        },
        c = function (d) {
          var m,
            g,
            p,
            w,
            v,
            h = [];
          if (!d || typeof d.tagName != "string") return "";
          if (
            (h.push(d.tagName.toLowerCase()),
            typeof d.id == "string" && h.push("#".concat(d.id)),
            typeof (m = d.className) == "string")
          )
            for (g = m.split(/\s+/), v = 0; v < g.length; v++)
              h.push(".".concat(g[v]));
          var y = ["type", "name", "title", "alt", "data-arms-attr"];
          for (v = 0; v < y.length; v++)
            (p = y[v]),
              typeof (w = d.getAttribute(p)) == "string" &&
                h.push("[".concat(p, '="').concat(w, '"]'));
          return h.join("");
        },
        u = function (d, m) {
          return function (g) {
            if (g && g !== a) {
              a = g;
              var p;
              try {
                p = g.target;
              } catch {
                p = "<unknown>";
              }
              if (p.length !== 0) {
                var w = {
                  type: "ui.".concat(d),
                  data: {
                    message: (function (v) {
                      if (!v || v.nodeType !== 1) return "";
                      for (
                        var h = v || null, y = [], k = 0, x = 0, S = 3, b = "";
                        h &&
                        k++ < 5 &&
                        !(
                          (b = c(h)) === "html" ||
                          (k > 1 && x + y.length * S + b.length >= 80)
                        );

                      )
                        y.push(b), (x += b.length), (h = h.parentNode);
                      return y.reverse().join(" > ");
                    })(p),
                  },
                  timestamp: Date.now(),
                };
                d === "click"
                  ? o && o.addBehavior(w)
                  : d === "keypress" &&
                    (i || (o && o.addBehavior(w)),
                    clearTimeout(i),
                    (i = setTimeout(function () {
                      i = void 0;
                    }, 100)));
              }
            }
          };
        },
        f = function () {
          if (
            (function () {
              var p = n && n.chrome,
                w = p && p.app && p.app.runtime,
                v =
                  "history" in n &&
                  !!n.history.pushState &&
                  !!n.history.replaceState;
              return !w && v;
            })()
          ) {
            var d = function (p, w) {
                var v = { type: "navigation", data: { from: p, to: w } };
                o && o.addBehavior(v), (s = w);
              },
              m = n.onpopstate;
            n.onpopstate = function () {
              for (
                var p = arguments.length, w = new Array(p), v = 0;
                v < p;
                v++
              )
                w[v] = arguments[v];
              var h = n.location.href;
              if ((d(s, h), m)) return m.apply(this, w);
            };
            var g = function (p) {
              return function () {
                for (
                  var w = arguments.length, v = new Array(w), h = 0;
                  h < w;
                  h++
                )
                  v[h] = arguments[h];
                var y = v.length > 2 ? v[2] : void 0;
                return y && d(s, String(y)), p.apply(this, v);
              };
            };
            l(n.history, "pushState", g), l(n.history, "replaceState", g);
          }
        };
      e.ext(t.prototype, {
        addBehavior: function (d) {
          if (this.getConfig("behavior") && d && typeof d == "object") {
            var m = {},
              g = d.data || {};
            if (d.type) m = g;
            else {
              if (typeof g.name != "string" || typeof g.message != "string")
                return;
              (m.name = g.name.substr(0, 20)),
                (m.message = g.message.substr(0, 200));
            }
            m.message && (m.message = e.encode(m.message));
            var p = {
              type: d.type || "custom",
              data: m || {},
              timestamp: d.timestamp || Date.now(),
              page: d.page || (n && n.location && n.location.pathname),
            };
            return r.push(p), (r = r.slice(-100));
          }
        },
        getBehavior: function () {
          return r || [];
        },
        setBehavior: function (d) {
          return d && (r = d), r;
        },
        reportBehavior: function (d) {
          var m = this;
          m.getConfig("behavior") &&
            (m.sendBhTimer &&
              (clearTimeout(m.sendBhTimer), (m.sendBhTimer = void 0)),
            (m.sendBhTimer = setTimeout(function () {
              r &&
                r.length > 0 &&
                (m.behavior(r),
                (r = []),
                (m.sendBhTimer = void 0),
                d && typeof d == "function" && d());
            }, 0)));
        },
        initBehavior: function () {
          if (!this.hasInitBehavior && !o) {
            try {
              (function () {
                if (document && document.referrer && document.location) {
                  var m = document.referrer,
                    g = document.location.href;
                  if (m !== "") {
                    var p = { type: "navigation", data: { from: m, to: g } };
                    (s = g), o && o.addBehavior(p);
                  }
                }
              })(),
                n &&
                  n.document &&
                  n.document.addEventListener &&
                  (n.document.addEventListener("click", u("click"), !1),
                  n.document.addEventListener("keypress", u("keypress"), !1)),
                f();
              var d = this.getConfig("enableConsole");
              d &&
                (function (m) {
                  if (n && n.console) {
                    var g = ["debug", "info", "warn", "log", "error", "assert"];
                    e.isArray(m) && (g = m);
                    for (var p = 0; p < g.length; p++) {
                      var w = g[p];
                      w &&
                        e.isString(w) &&
                        n.console[w] &&
                        typeof n.console[w] == "function" &&
                        l(n.console, w, function (v) {
                          var h = w;
                          return function () {
                            for (
                              var y = arguments.length, k = new Array(y), x = 0;
                              x < y;
                              x++
                            )
                              k[x] = arguments[x];
                            var S = {
                              type: "console",
                              data: { level: h, message: k },
                            };
                            if ((o && o.addBehavior(S), h === "error"))
                              for (var b = 0; b < k.length; b++) {
                                var C = k[b];
                                C &&
                                  C.message &&
                                  C.stack &&
                                  o &&
                                  o.errorHandler(
                                    new ErrorEvent("error", {
                                      error: C,
                                      message: C.message,
                                    })
                                  );
                              }
                            v && Function.prototype.apply.call(v, n.console, k);
                          };
                        });
                    }
                  }
                })(d);
            } catch (m) {
              e.warn("[arms] error in initBehavior", m);
            }
            (o = this), (this.hasInitBehavior = !0);
          }
          return this;
        },
      });
    }),
    Ia
  );
}
var Pa = {},
  Lp;
function lc() {
  return (
    Lp ||
      ((Lp = 1),
      (Pa.TIMING_KEYS = [
        "startTime",
        "fetchStart",
        "domainLookupStart",
        "domainLookupEnd",
        "connectStart",
        "connectEnd",
        "requestStart",
        "responseStart",
        "responseEnd",
        "",
        "domInteractive",
        "",
        "domContentLoadedEventEnd",
        "",
        "loadEventStart",
        "",
        "msFirstPaint",
        "secureConnectionStart",
        "redirectStart",
        "redirectEnd",
      ])),
    Pa
  );
}
var Ra, Bp;
function uT() {
  if (Bp) return Ra;
  Bp = 1;
  var e = He,
    t = lc(),
    n = t.TIMING_KEYS;
  return (
    (Ra = function () {
      var r = e.win || {},
        o = r.performance;
      if (!o || typeof o != "object" || typeof o.getEntriesByType != "function")
        return null;
      var s = {},
        i = o.timing || {},
        a = o.getEntriesByType("resource") || [];
      if (
        ((s.begin = i[n[1]] || Date.now()),
        typeof r.PerformanceNavigationTiming == "function")
      ) {
        var l = o.getEntriesByType("navigation")[0];
        l && (i = l);
      }
      return (
        e.each({ dom: [10, 8], load: [14, 1] }, function (c, u) {
          var f = i[n[c[1]]],
            d = i[n[c[0]]];
          if (f > 0 && d > 0) {
            var m = Math.round(d - f);
            m >= 0 && m < 6e5 && (s[u] = m);
          }
        }),
        (s.res = JSON.stringify(a)),
        s
      );
    }),
    Ra
  );
}
var _a, Op;
function cT() {
  if (Op) return _a;
  Op = 1;
  var e = He,
    t = lc(),
    n = t.TIMING_KEYS;
  return (
    (_a = function () {
      var r = e.win || {},
        o = r.performance;
      if (!o || typeof o != "object") return null;
      var s = {},
        i = o.timing || {},
        a = Date.now(),
        l = 1;
      if (typeof r.PerformanceNavigationTiming == "function") {
        var c = o.getEntriesByType("navigation")[0];
        c && ((i = c), (l = 2));
      }
      e.each(
        {
          dns: [3, 2],
          tcp: [5, 4],
          ssl: [5, 17],
          ttfb: [7, 6],
          trans: [8, 7],
          dom: [10, 8],
          res: [14, 12],
          firstbyte: [7, 2],
          fpt: [8, 1],
          tti: [10, 1],
          ready: [12, 1],
          load: [14, 1],
        },
        function (g, p) {
          var w = i[n[g[1]]],
            v = i[n[g[0]]];
          if (l === 2 || (w > 0 && v > 0)) {
            var h = Math.round(v - w);
            h >= 0 && h < 6e5 && (s[p] = h);
          }
        }
      );
      var u = r.navigator.connection,
        f = o.navigation || {};
      s.ct = u ? u.effectiveType || u.type : "";
      var d = (u && (u.downlink || u.downlinkMax || u.bandwidth)) || null;
      if (
        ((d = d > 999 ? 999 : d) && (s.bandwidth = d),
        (s.navtype = f.type === 1 ? "Reload" : "Other"),
        l === 1 && i[n[16]] > 0 && i[n[1]] > 0)
      ) {
        var m = i[n[16]] - i[n[1]];
        m >= 0 && m < 36e5 && (s.fpt = m);
      }
      return (
        l === 1 && i[n[1]] > 0
          ? (s.begin = i[n[1]])
          : l === 2 && s.load > 0
          ? (s.begin = a - s.load)
          : (s.begin = a),
        s
      );
    }),
    _a
  );
}
var La, Mp;
function dT() {
  return (
    Mp ||
      ((Mp = 1),
      (La = function (e, t, n) {
        var r = He,
          o = uT(),
          s = cT(),
          i = null,
          a = n.documentElement,
          l = t.innerWidth || a.clientWidth || n.body.clientWidth,
          c = t.innerHeight || a.clientHeight || n.body.clientHeight,
          u = t.navigator.connection,
          f = {
            sr: screen.width + "x" + screen.height,
            vp: l + "x" + c,
            ct: u ? u.effectiveType || u.type : "",
          },
          d = {},
          m = function (p, w, v, h, y) {
            if (w === void 0) {
              var k, x;
              if (!d[p]) {
                k = new RegExp(p + "=([^;]+)");
                try {
                  x = k.exec(n.cookie);
                } catch (b) {
                  return r.warn("[retcode] can not get cookie:", b), null;
                }
                x && (d[p] = x[1]);
              }
              return d[p];
            }
            var S = p + "=" + w;
            (S += "; path=/"), v && (S += "; max-age=" + v);
            try {
              return (n.cookie = S), !!n.cookie;
            } catch (b) {
              return r.warn("[retcode] can not set cookie: ", b), !1;
            }
          },
          g = function (p) {
            var w = p._conf.uid || m("_nk_") || m("_bl_uid");
            return !w && ((w = r.uu()), !m("_bl_uid", w, 15552e3)) ? null : w;
          };
        return (
          r.ext(e.prototype, {
            activeErrHandler: function (p) {
              return i && !p ? this : ((i = this), this);
            },
            errorHandler: function (p) {
              if (!p) return this;
              var w = p.type;
              if (w === "error") {
                var v = p.target || p.srcElement;
                !v ||
                !v.tagName ||
                p.message ||
                p.filename ||
                p.lineno ||
                p.colno
                  ? this.error(p.error || { message: p.message }, p)
                  : this.resourceErrorHandler(p);
              } else
                w === "unhandledrejection" &&
                  r.T(p.reason, "Error") &&
                  r.checkAutoError(p.reason) &&
                  this.error(p.reason);
              try {
                this.getConfig("behavior") &&
                  this.reportBehavior &&
                  this.reportBehavior();
              } catch {}
              return this;
            },
            resourceErrorHandler: function (p) {
              var w = this,
                v = p.target || p.srcElement;
              try {
                var h = w.getSrc(v),
                  y =
                    typeof v.tagName == "string" ? v.tagName.toLowerCase() : "",
                  k = w.getXPath(v, 5),
                  x = r.getURL(h),
                  S = {
                    src: h && h.substring(0, 1e3),
                    node_name: y,
                    xpath: k,
                    res_type: r.getResType(y, h),
                    res_name: x.path,
                    domain: x.domain,
                  };
                return (
                  w._conf.enableResource &&
                    w.fixResourceStatus &&
                    p.timeStamp &&
                    w.fixResourceStatus({
                      src: h,
                      node_name: y,
                      res_type: r.getResType(y, h),
                      timeStamp: p.timeStamp,
                      domain: x.domain,
                    }),
                  w._lg("resourceError", S),
                  w
                );
              } catch (b) {
                return r.warn("[ARMS] resourceErrorHandler error :", b), w;
              }
            },
            getSrc: function (p) {
              var w = p.src || p.href;
              try {
                if (!w) {
                  var v =
                      (typeof p.tagName == "string"
                        ? p.tagName.toLowerCase()
                        : "") === "object",
                    h =
                      (p.getAttribute("classid") &&
                        p.getAttribute("classid").toLowerCase() ===
                          "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000") ||
                      p.getAttribute("type") ===
                        "application/x-shockwave-flash";
                  v &&
                    h &&
                    (w = p.getAttribute("data") || p.getAttribute("codebase")),
                    w || (w = p.outerHTML || p.innerHTML);
                }
              } catch {
                w = "";
              }
              return w;
            },
            getXPath: function (p, w) {
              var v = p.id ? "#" + p.id : "",
                h =
                  typeof p.className == "string"
                    ? "." + p.className.split(" ").join(".")
                    : "",
                y =
                  (typeof p.tagName == "string"
                    ? p.tagName.toLowerCase()
                    : "") +
                  v +
                  h;
              return p.parentNode && p.parentNode.tagName && w - 1 != 0
                ? this.getXPath(p.parentNode, w - 1) + " > " + y
                : y;
            },
            sendPerformance: function (p) {
              var w = this;
              w.onReady(function () {
                var v = s();
                v &&
                  v.load &&
                  v.load > 0 &&
                  ((v.page = w.getPage(!0)),
                  p && (v = r.ext(v, p)),
                  (v.autoSend = !0),
                  w.performance(v));
              });
            },
            sendResources: function (p) {
              var w = this;
              w.onReady(function () {
                var v = o();
                v &&
                  v.load &&
                  v.load > 0 &&
                  ((v.load && v.load <= 2e3) ||
                    (v.load && v.load <= 8e3 && Math.random() > 0.05) ||
                    ((v.page = w.getPage(!0)),
                    (v.dl = location.href),
                    p && (v = r.ext(v, p)),
                    w._lg("res", v, w.getConfig("sample"))));
              });
            },
            sendPV: function () {
              var p = this;
              p.onReady(function () {
                var w = (function (v) {
                  var h = g(v),
                    y = t.devicePixelRatio || 1;
                  return {
                    uid: h,
                    dt: n.title,
                    dl: location.href,
                    dr: n.referrer,
                    dpr: y.toFixed(2),
                    de: (
                      n.characterSet ||
                      n.defaultCharset ||
                      ""
                    ).toLowerCase(),
                    ul: a.lang,
                    begin: Date.now(),
                  };
                })(p);
                w && w.uid && p._lg("pv", w, p.getConfig("pvSample"));
              });
            },
            commonInfo: function () {
              return (
                (f.uid = g(this)),
                (f.sid = (function (p) {
                  if (p.session) return p.session;
                  var w;
                  try {
                    if (
                      typeof window == "object" &&
                      typeof sessionStorage == "object" &&
                      typeof sessionStorage.getItem == "function"
                    )
                      return typeof (w = sessionStorage.getItem("_bl_sid")) ==
                        "string"
                        ? ((p.session = w), w)
                        : ((w = r.uu()),
                          (p.session = w),
                          typeof sessionStorage.setItem == "function" &&
                            sessionStorage.setItem("_bl_sid", w),
                          w);
                  } catch (v) {
                    r.warn("[ARMS] getSid error :", v);
                  }
                  return (p.session = w = r.uu()), w;
                })(this)),
                f
              );
            },
            handleUnload: function (p) {
              var w = Date.now();
              if (w - this._lastUnload < 200) return this;
              (this._lastUnload = w),
                this.sendHealth(p),
                this.speedCache &&
                  (this._lg("speed", this.speedCache),
                  (this.speedCache = null),
                  clearTimeout(this.speedTimmer)),
                this._conf &&
                  this._conf.enableResource &&
                  this.resourceComboReport(),
                this.clear(!0);
            },
            bindHashChange: function (p) {
              var w = this;
              if (!p ^ w.hashChangeHandler) return w;
              p
                ? (w.hackHistoryState(),
                  (w.hashChangeHandler = function (v) {
                    var h = w._conf.parseHash(location.hash);
                    h && w.setPage(h, v !== !1);
                  }),
                  (w.stateChangeHandler = function (v) {
                    var h = w._conf.parseHash(v.detail);
                    h && w.setPage(h);
                  }),
                  r.on(t, "hashchange", w.hashChangeHandler),
                  r.on(t, "historystatechange", w.stateChangeHandler),
                  w.hashChangeHandler(!1))
                : (r.off(t, "hashchange", w.hashChangeHandler),
                  r.off(t, "historystatechange", w.stateChangeHandler),
                  (w.hashChangeHandler = null),
                  (w.stateChangeHandler = null));
            },
            initHandler: function () {
              var p = this;
              if (p.hasInitHandler) return p;
              var w = p._conf;
              return (
                r.on(t, "beforeunload", function () {
                  p.handleUnload(0);
                }),
                p.bindHashChange(w.enableSPA),
                p.activeErrHandler(!1),
                (p.hasInitHandler = !0),
                p
              );
            },
          }),
          r
            .on(
              t,
              "error",
              function (p) {
                i && i.errorHandler(p);
              },
              !1,
              !0
            )
            .on(t, "unhandledrejection", function (p) {
              i && i.errorHandler(p);
            }),
          e
        );
      })),
    La
  );
}
var Ba, zp;
function pT() {
  if (zp) return Ba;
  zp = 1;
  var e = He,
    t = 500;
  return (
    (Ba = function (n, r, o) {
      function s(f, d, m) {
        var g = 0,
          p = f.tagName;
        if (p !== "SCRIPT" && p !== "STYLE" && p !== "META" && p !== "HEAD") {
          var w = f.children ? f.children.length : 0;
          if (w > 0)
            for (var v = f.children, h = w - 1; h >= 0; h--)
              g += s(v[h], d + 1, g > 0);
          if (
            g <= 0 &&
            !m &&
            !(f.getBoundingClientRect && f.getBoundingClientRect().top < a)
          )
            return 0;
          g += 1 + 0.5 * d;
        }
        return g;
      }
      function i(f) {
        for (var d = 1; d < f.length; d++)
          if (f[d].score < f[d - 1].score) return f.splice(d, 1), i(f);
        return f;
      }
      var a = r.innerHeight || 0,
        l = [],
        c = null,
        u = 0;
      e.ext(n.prototype, {
        initFmpObserver: function (f) {
          var d = this;
          if (!d._conf || !d._conf.useFmp) return null;
          if (!r.MutationObserver)
            return (
              e.warn("[retcode] first meaningful paint can not be retrieved"),
              d.sendPerformance(),
              null
            );
          e.on(r, "beforeunload", function () {
            d.endObserving(0, !0);
          });
          var m = r.MutationObserver;
          return (
            (c = new m(function () {
              (function (g) {
                var p = Date.now() - g,
                  w = o.querySelector("body");
                if (w) {
                  var v = 0;
                  (v += s(w, 1, !1)), l.push({ score: v, t: p });
                } else l.push({ score: 0, t: p });
              })(d._startTime);
            })).observe(document, { childList: !0, subtree: !0 }),
            (u = 1),
            d.onReady(function () {
              d.endObserving(f);
            }),
            c
          );
        },
        endObserving: function (f, d) {
          var m = this;
          if (c && u)
            if (
              (m.fmpTimmer && (clearTimeout(m.fmpTimmer), (m.fmpTimmer = null)),
              d ||
                !(function (v, h) {
                  var y = Date.now() - v;
                  return !(
                    y > h ||
                    y - ((l && l.length && l[l.length - 1].t) || 0) > 2 * t
                  );
                })(m._startTime, f))
            ) {
              c.disconnect(), (u = 0), (l = i(l));
              for (var g = null, p = 1; p < l.length; p++)
                if (l[p].t >= l[p - 1].t) {
                  var w = l[p].score - l[p - 1].score;
                  (!g || g.rate <= w) && (g = { t: l[p].t, rate: w });
                }
              g && g.t > 0 && g.t < 36e5
                ? m.sendPerformance({ fmp: g.t })
                : m.sendPerformance();
            } else
              m.fmpTimmer = e.delay(function () {
                m.endObserving(f);
              }, t);
        },
      });
    }),
    Ba
  );
}
var Oa, $p;
function fT() {
  return (
    $p ||
      (($p = 1),
      (Oa = function (e, t) {
        var n = He,
          r = null,
          o = n.getCurDomain(),
          s = function (u, f, d, m, g, p, w, v, h, y, k, x, S) {
            var b = n.J(g) || null,
              C = n.safetyCall(f, [b, m], null);
            if (!C) return !1;
            var I = C.code || p,
              P = !("success" in C) || C.success;
            u.api(d, P, w, I, C.msg, v, h, y, P ? {} : k, o, x, S);
          },
          i = "fetch",
          a = "__oFetch_",
          l = "__oXMLHttpRequest_",
          c = "XMLHttpRequest";
        return (
          n.ext(e.prototype, {
            removeHook: function (u, f) {
              return r && (f || this === r)
                ? (t[a] && ((t[i] = t[a]), delete t[a]),
                  t[l] && ((t[c] = t[l]), delete t[l]),
                  (r = null),
                  this)
                : this;
            },
            addHook: function (u) {
              return !u && r
                ? this
                : (r ||
                    ((function () {
                      if (typeof t[i] == "function") {
                        var f = t[i];
                        (t[a] = f),
                          (t[i] = function (d, m) {
                            var g =
                                arguments.length === 1
                                  ? [arguments[0]]
                                  : Array.apply(null, arguments),
                              p = r;
                            if (
                              !p ||
                              !p.api ||
                              (m &&
                                (m.method === "HEAD" || m.mode === "no-cors"))
                            )
                              return f.apply(t, g);
                            m || (m = {});
                            var w = Date.now(),
                              v = p._conf,
                              h = n.duration(),
                              y = (d && typeof d != "string" ? d.url : d) || "",
                              k = y;
                            y = n.cutUrlSearch(y);
                            var x = (v.ignore || {}).ignoreApis,
                              S = v.parseTraceId;
                            if (!n.checkAPI(y, !0) || n.ignoreByRule(y, x))
                              return f.apply(t, g);
                            y = n.filterByRule(
                              y,
                              k,
                              v.ignoreApiPath ? v.ignoreApiPath : v.apiHelper
                            );
                            var b = v.enableLinkTrace,
                              C = "",
                              I = "",
                              P = p.getConfig("pid"),
                              D = null,
                              B = p.getConfig("sample"),
                              z = p.getConfig("linkType"),
                              j = 1;
                            if ((B && !p.sampling(B) && (j = 0), b)) {
                              var W = "";
                              try {
                                W = location.origin
                                  ? location.origin
                                  : location.protocol +
                                    "//" +
                                    location.hostname +
                                    (location.port ? ":" + location.port : "");
                              } catch {
                                W = "";
                              }
                              var fe = n.checkSameOrigin(k, W);
                              if (p.getConfig("enableApiCors") || fe)
                                if (d && typeof d != "string")
                                  try {
                                    if (
                                      g[0].headers &&
                                      typeof g[0].headers.get == "function" &&
                                      typeof g[0].headers.append == "function"
                                    )
                                      switch (z) {
                                        case "arms":
                                          var G =
                                              g[0].headers.get(
                                                "EagleEye-TraceID"
                                              ),
                                            R =
                                              g[0].headers.get(
                                                "EagleEye-SessionID"
                                              ),
                                            L =
                                              g[0].headers.get(
                                                "EagleEye-pAppName"
                                              );
                                          G
                                            ? (C = G)
                                            : ((C =
                                                p.getTraceId()[
                                                  "EagleEye-TraceID"
                                                ]),
                                              g[0].headers.append(
                                                "EagleEye-TraceID",
                                                C
                                              )),
                                            R
                                              ? (I = R)
                                              : ((I =
                                                  p.getPageviewId()[
                                                    "EagleEye-SessionID"
                                                  ]),
                                                g[0].headers.append(
                                                  "EagleEye-SessionID",
                                                  I
                                                )),
                                            L ||
                                              g[0].headers.append(
                                                "EagleEye-pAppName",
                                                P
                                              );
                                          break;
                                        case "b3":
                                          var O =
                                            g[0].headers.get("X-B3-TraceId");
                                          if (O) C = O;
                                          else {
                                            var N = p.getB3TraceId(j);
                                            g[0].headers.append(
                                              "X-B3-TraceId",
                                              N["X-B3-TraceId"]
                                            ),
                                              g[0].headers.append(
                                                "X-B3-ParentSpanId",
                                                N["X-B3-ParentSpanId"]
                                              ),
                                              g[0].headers.append(
                                                "X-B3-SpanId",
                                                N["X-B3-SpanId"]
                                              ),
                                              g[0].headers.append(
                                                "X-B3-Sampled",
                                                N["X-B3-Sampled"]
                                              ),
                                              g[0].headers.append(
                                                "X-Request-ID",
                                                n.guid()
                                              ),
                                              (C = N["X-B3-TraceId"]);
                                          }
                                          I = p.pageview;
                                          break;
                                        case "tracing":
                                        default:
                                          var H =
                                            g[0].headers.get("uber-trace-id");
                                          H
                                            ? (C = H.split(":")[0])
                                            : ((H = p.getUberTraceId(j)),
                                              g[0].headers.append(
                                                "uber-trace-id",
                                                H["uber-trace-id"]
                                              ),
                                              (C = H.traceId)),
                                            (I = p.pageview);
                                      }
                                  } catch (V) {
                                    n.warn(
                                      `[retcode] fetch failed to set header, exception is :
` + V
                                    );
                                  }
                                else
                                  switch (
                                    ((m.headers = m.headers ? m.headers : {}),
                                    z)
                                  ) {
                                    case "arms":
                                      m.headers["EagleEye-TraceID"]
                                        ? (C = m.headers["EagleEye-TraceID"])
                                        : ((C =
                                            p.getTraceId()["EagleEye-TraceID"]),
                                          (m.headers["EagleEye-TraceID"] = C)),
                                        m.headers["EagleEye-SessionID"]
                                          ? (I =
                                              m.headers["EagleEye-SessionID"])
                                          : ((I =
                                              p.getPageviewId()[
                                                "EagleEye-SessionID"
                                              ]),
                                            (m.headers["EagleEye-SessionID"] =
                                              I)),
                                        m.headers["EagleEye-pAppName"] ||
                                          (m.headers["EagleEye-pAppName"] = P);
                                      break;
                                    case "b3":
                                      if (m.headers["X-B3-TraceId"])
                                        C = m.headers["X-B3-TraceId"];
                                      else {
                                        var K = p.getB3TraceId(j);
                                        (m.headers["X-B3-TraceId"] =
                                          K["X-B3-TraceId"]),
                                          (m.headers["X-B3-ParentSpanId"] =
                                            K["X-B3-ParentSpanId"]),
                                          (m.headers["X-B3-SpanId"] =
                                            K["X-B3-SpanId"]),
                                          (m.headers["X-B3-Sampled"] =
                                            K["X-B3-Sampled"]),
                                          (m.headers["X-Request-ID"] =
                                            n.guid()),
                                          (C = K["X-B3-TraceId"]);
                                      }
                                      I =
                                        p.getPageviewId()["EagleEye-SessionID"];
                                      break;
                                    case "tracing":
                                    default:
                                      if (m.headers["uber-trace-id"])
                                        C =
                                          m.headers["uber-trace-id"].split(
                                            ":"
                                          )[0];
                                      else {
                                        var Te = p.getUberTraceId(j);
                                        (m.headers["uber-trace-id"] =
                                          Te["uber-trace-id"]),
                                          (C = Te.traceId);
                                      }
                                      I =
                                        p.getPageviewId()["EagleEye-SessionID"];
                                  }
                            }
                            return f
                              .apply(t, g)
                              .then(function (V) {
                                if (!p || !p.api) return V;
                                try {
                                  if (!V || typeof V.clone != "function")
                                    return V;
                                  var ee = V.clone(),
                                    Ge = ee.headers;
                                  if (Ge && typeof Ge.get == "function") {
                                    var Hn = Ge.get("content-type");
                                    if (Hn && !/(text)|(json)/.test(Hn))
                                      return V;
                                    if (!C) {
                                      var Rr = n.parseFetchHeaders(Ge);
                                      typeof Rr == "object" &&
                                        Rr["eagleeye-traceid"] &&
                                        ((C = Rr["eagleeye-traceid"]),
                                        (D = "response"));
                                    }
                                  }
                                  var Qo = h();
                                  return (
                                    ee.text().then(function (Ut) {
                                      if (!C && n.isFunction(S)) {
                                        var Fn = S(ee, Ut);
                                        Fn && n.isString(Fn) && (C = Fn);
                                      }
                                      var _r = n.getFetchSnapshot(g, Ut, Ge);
                                      ee.ok
                                        ? s(
                                            p,
                                            v.parseResponse,
                                            y,
                                            k,
                                            Ut,
                                            ee.status || 200,
                                            Qo,
                                            w,
                                            C,
                                            I,
                                            _r,
                                            D,
                                            j
                                          )
                                        : (p.api(
                                            y,
                                            !1,
                                            Qo,
                                            ee.status || 404,
                                            ee.statusText,
                                            w,
                                            C,
                                            I,
                                            _r,
                                            o,
                                            D,
                                            j
                                          ),
                                          v.enableResource &&
                                            r.fixResourceStatus &&
                                            r.fixResourceStatus({
                                              src: ee.url,
                                              res_type: "api",
                                            }));
                                    }),
                                    V
                                  );
                                } catch (Ut) {
                                  return (
                                    n.warn("[ARMS] fetch response error :", Ut),
                                    V
                                  );
                                }
                              })
                              .catch(function (V) {
                                if (!p || !p.api) throw V;
                                var ee = h();
                                throw (
                                  (p.api(
                                    y,
                                    !1,
                                    ee,
                                    V.name || "Error",
                                    V.message,
                                    w,
                                    C,
                                    I,
                                    {},
                                    o
                                  ),
                                  v.enableResource &&
                                    r.fixResourceStatus &&
                                    r.fixResourceStatus({
                                      src: k,
                                      res_type: "api",
                                    }),
                                  V)
                                );
                              });
                          }),
                          (t[i].toString = n.createFakeToString(i));
                      }
                    })(),
                    (function () {
                      if (typeof t[c] == "function") {
                        var f,
                          d = t[c];
                        t[l] = d;
                        var m = function (g) {
                          var p = new d(g),
                            w = r;
                          if (!w || !w.api || !p.addEventListener) return p;
                          var v,
                            h,
                            y,
                            k,
                            x = p.send,
                            S = p.open,
                            b = p.setRequestHeader,
                            C = w._conf,
                            I = (C.ignore || {}).ignoreApis,
                            P = C.parseTraceId,
                            D = w.getConfig("enableLinkTrace"),
                            B = "",
                            z = "",
                            j = "",
                            W = null,
                            fe = w.getConfig("sample"),
                            G = w.getConfig("linkType"),
                            R = 1;
                          return (
                            fe && !w.sampling(fe) && (R = 0),
                            (p.open = function (L, O) {
                              f = L;
                              var N =
                                arguments.length === 1
                                  ? [arguments[0]]
                                  : Array.apply(null, arguments);
                              S.apply(p, N),
                                (k = O || ""),
                                (y = n.cutUrlSearch(k));
                              var H =
                                !n.checkAPI(y, !0) || n.ignoreByRule(y, I);
                              if (
                                ((y = y
                                  ? n.filterByRule(
                                      y,
                                      k,
                                      C.ignoreApiPath
                                        ? C.ignoreApiPath
                                        : C.apiHelper
                                    )
                                  : ""),
                                !H && D)
                              ) {
                                var K = "";
                                try {
                                  K = location.origin
                                    ? location.origin
                                    : location.protocol +
                                      "//" +
                                      location.hostname +
                                      (location.port
                                        ? ":" + location.port
                                        : "");
                                } catch {
                                  K = "";
                                }
                                var Te = n.checkSameOrigin(k, K);
                                if (
                                  (w.getConfig("enableApiCors") || Te) &&
                                  b &&
                                  typeof b == "function"
                                )
                                  switch (G) {
                                    case "arms":
                                      (B = w.getTraceId()["EagleEye-TraceID"]),
                                        b.apply(p, ["EagleEye-TraceID", B]),
                                        (z =
                                          w.getPageviewId()[
                                            "EagleEye-SessionID"
                                          ]),
                                        b.apply(p, ["EagleEye-SessionID", z]),
                                        (j = w.getConfig("pid")),
                                        b.apply(p, ["EagleEye-pAppName", j]);
                                      break;
                                    case "b3":
                                      var V = w.getB3TraceId(R);
                                      b.apply(p, [
                                        "X-B3-TraceId",
                                        V["X-B3-TraceId"],
                                      ]),
                                        b.apply(p, [
                                          "X-B3-ParentSpanId",
                                          V["X-B3-ParentSpanId"],
                                        ]),
                                        b.apply(p, [
                                          "X-B3-SpanId",
                                          V["X-B3-SpanId"],
                                        ]),
                                        b.apply(p, [
                                          "X-B3-Sampled",
                                          V["X-B3-Sampled"],
                                        ]),
                                        b.apply(p, ["X-Request-ID", n.guid()]),
                                        (B = V["X-B3-TraceId"]),
                                        (z =
                                          w.getPageviewId()[
                                            "EagleEye-SessionID"
                                          ]);
                                      break;
                                    case "tracing":
                                    default:
                                      var ee = w.getUberTraceId(R);
                                      b.apply(p, [
                                        "uber-trace-id",
                                        ee["uber-trace-id"],
                                      ]),
                                        (B = ee.traceId),
                                        (z =
                                          w.getPageviewId()[
                                            "EagleEye-SessionID"
                                          ]);
                                  }
                              }
                            }),
                            (p.send = function () {
                              (v = Date.now()), (h = n.duration());
                              var L =
                                arguments.length === 1
                                  ? [arguments[0]]
                                  : Array.apply(null, arguments);
                              x.apply(p, L);
                            }),
                            n.on(p, "readystatechange", function () {
                              if (y && p.readyState === 4) {
                                var L = h(),
                                  O = n.getXhrSnapshot(k, f, p);
                                if (!B) {
                                  var N = n.parseXhrHeaders(
                                    (typeof p.getAllResponseHeaders ==
                                      "function" &&
                                      p.getAllResponseHeaders()) ||
                                      ""
                                  );
                                  typeof N == "object" &&
                                    N["eagleeye-traceid"] &&
                                    ((B = N["eagleeye-traceid"]),
                                    (W = "response"));
                                }
                                if (!B && n.isFunction(P)) {
                                  var H = P(p);
                                  H && n.isString(H) && (B = H);
                                }
                                if (p.status >= 200 && p.status <= 299) {
                                  var K = p.status || 200;
                                  if (
                                    typeof p.getResponseHeader == "function"
                                  ) {
                                    var Te =
                                      p.getResponseHeader("Content-Type");
                                    if (Te && !/(text)|(json)/.test(Te)) return;
                                  }
                                  p.responseType && p.responseType !== "text"
                                    ? w.api(
                                        y,
                                        !0,
                                        L,
                                        K,
                                        "",
                                        v,
                                        B,
                                        z,
                                        {},
                                        o,
                                        W,
                                        R
                                      )
                                    : s(
                                        w,
                                        C.parseResponse,
                                        y,
                                        k,
                                        p.responseText,
                                        K,
                                        L,
                                        v,
                                        B,
                                        z,
                                        O,
                                        W,
                                        R
                                      );
                                } else
                                  w.api(
                                    y,
                                    !1,
                                    L,
                                    p.status || "FAILED",
                                    p.statusText,
                                    v,
                                    B,
                                    z,
                                    O,
                                    o,
                                    W,
                                    R
                                  ),
                                    C.enableResource &&
                                      r.fixResourceStatus &&
                                      r.fixResourceStatus({
                                        src: p.responseURL || k,
                                        res_type: "api",
                                      });
                              }
                            }),
                            p
                          );
                        };
                        (m.prototype = d.prototype),
                          n.each(Object.keys(d), function (g) {
                            m[g] = d[g];
                          }),
                          (t[c] = m),
                          (t[c].toString = n.createFakeToString(c));
                      }
                    })()),
                  (r = this),
                  this);
            },
            initHook: function () {
              return this.hasInitHook
                ? this
                : (this.getConfig("disableHook") || this.addHook(),
                  (this.hasInitHook = !0),
                  this);
            },
          }),
          e
        );
      })),
    Oa
  );
}
var Ma, Dp;
function hT() {
  return (
    Dp ||
      ((Dp = 1),
      (Ma = function (e, t) {
        var n = He,
          r = t.history || {},
          o = t.document,
          s = function (a, l) {
            var c;
            t.CustomEvent
              ? (c = new CustomEvent(a, { detail: l }))
              : ((c = o.createEvent("HTMLEvents")).initEvent(a, !1, !0),
                (c.detail = l)),
              t.dispatchEvent(c);
          },
          i = function (a) {
            var l = r[a];
            typeof l == "function" &&
              ((r[a] = function (c, u, f) {
                var d =
                    arguments.length === 1
                      ? [arguments[0]]
                      : Array.apply(null, arguments),
                  m = location.href,
                  g = l.apply(r, d);
                if (!f || typeof f != "string" || f === m) return g;
                try {
                  var p = m.split("#"),
                    w = f.split("#"),
                    v = n.cutUrlSearch(p[0]),
                    h = n.cutUrlSearch(w[0]),
                    y = p[1] && p[1].replace(/^\/?(.*)/, "$1"),
                    k = w[1] && w[1].replace(/^\/?(.*)/, "$1");
                  y !== k
                    ? s("historystatechange", k)
                    : v !== h && s("historystatechange", h);
                } catch (x) {
                  n.warn("[retcode] error in " + a + ": " + x);
                }
                return g;
              }),
              (r[a].toString = n.createFakeToString(a)));
          };
        n.ext(e.prototype, {
          hackHistoryState: function () {
            return this.hasHackedHistoryState
              ? this
              : (i("pushState"),
                i("replaceState"),
                (this.hasHackedHistoryState = !0),
                this);
          },
        });
      })),
    Ma
  );
}
var za, jp;
function mT() {
  if (jp) return za;
  jp = 1;
  var e = He,
    t = lc(),
    n = t.TIMING_KEYS;
  return (
    (za = function (r, o) {
      function s(l, c, u) {
        if (l instanceof o.PerformanceResourceTiming && l.initiatorType) {
          var f = e.getResType(l.initiatorType, l.name),
            d = c.resourceTypes || [],
            m = (c.ignore || {}).ignoreResources;
          if (
            f &&
            d.includes(f) &&
            !e.ignoreByRule(l.name, m) &&
            !e.ignoreByRule(e.decode(l.name), m)
          ) {
            var g = l[n[0]],
              p = l[n[1]],
              w = l[n[2]],
              v = l[n[3]],
              h = l[n[4]],
              y = l[n[5]],
              k = l[n[6]],
              x = l[n[7]],
              S = l[n[8]],
              b = l[n[18]],
              C = l[n[19]];
            if (
              !u.has(l) &&
              (!e.areInOrder(g, p, w, v, h, y, k, x, S) || g > x)
            )
              return;
            if ((b < g && (b = g), C < g && (C = p), e.areInOrder(g, b, C, p)))
              return {
                domain: e.getURL(l.name).domain,
                res_type: f,
                src_type: e.getSrcType(l.name, c.cdnHostList),
                success: 1,
                size: Math.round(l.decodedBodySize),
                duration: Math.round(l.duration),
                timeStamp: l.responseEnd,
                timing: l,
              };
          }
        }
      }
      var i = "_resource-" + Date.now(),
        a = "_resource_error-" + Date.now();
      e.ext(r.prototype, {
        initResource: function () {
          var l = this,
            c = o.performance,
            u = o.PerformanceObserver;
          if (
            (l[a] || (l[a] = new WeakMap()),
            !c ||
              !u ||
              typeof c != "object" ||
              typeof c.getEntriesByType != "function")
          )
            return null;
          var f = c.getEntriesByType("resource") || [];
          return (
            setTimeout(function () {
              l.setResource(f);
            }, 10),
            new u(function (d) {
              setTimeout(function () {
                l.setResource(d.getEntries());
              }, 10);
            }).observe({ entryTypes: ["resource"] }),
            this.onReady(function () {
              setTimeout(l.resourceComboReport.bind(l), 5e3);
            }),
            l
          );
        },
        setResource: function (l) {
          var c = this._conf,
            u = this[a];
          if (e.isArray(l) && l.length) {
            this[i] || (this[i] = {});
            for (var f = this[i], d = 0, m = l.length; d < m; d += 1) {
              var g = l[d];
              if (e.checkAPI(g.name, !1)) {
                var p = s(g, c, u);
                if (p) {
                  var w = p.res_type + "-" + p.domain;
                  w in f || (f[w] = []), f[w].push(p);
                }
              }
            }
            return this;
          }
        },
        fixResourceStatus: function (l) {
          var c = o.performance;
          if (!c || typeof c.getEntriesByName != "function") return null;
          var u = this[a];
          if (!l.src || !e.checkAPI(l.src, !1)) return this;
          var f = l.timeStamp || c.now(),
            d = c.getEntriesByName(l.src, "resource");
          return (
            e.each(d, function (m) {
              u.has(m) || (f - m.responseEnd < 100 && u.set(m, { success: 0 }));
            }),
            this
          );
        },
        resourceComboReport: function () {
          var l = this[i] || {},
            c = this._conf.resourceSlow || 2e3,
            u = this[a];
          this[i] = {};
          var f = Object.keys(l);
          if (f.length !== 0) {
            var d = [];
            e.each(f, function (w) {
              var v = l[w],
                h = {
                  domain: "",
                  res_type: "",
                  src_type: "",
                  size: 0,
                  duration: 0,
                  count: 0,
                  err_count: 0,
                  err_duration: 0,
                  slow_count: 0,
                  slow_duration: 0,
                  timings: [],
                };
              e.each(v, function (y) {
                var k = y.timing || {},
                  x = u.get(y.timing),
                  S = x ? x.success : 1,
                  b = y.duration > c ? 1 : 0;
                (h.domain = y.domain),
                  (h.res_type = y.res_type),
                  (h.src_type = y.src_type),
                  (h.count += 1),
                  (h.duration += y.duration),
                  (h.size += y.size),
                  S || ((h.err_count += 1), (h.err_duration += y.duration)),
                  b && ((h.slow_count += 1), (h.slow_duration += y.duration));
                try {
                  var C = JSON.parse(JSON.stringify(k));
                  (C.success = S),
                    (C.resourceSlow = c),
                    (C.isSlow = b),
                    h.timings.push(C);
                } catch {}
              }),
                h.count &&
                  ((h.size = Math.round(h.size / h.count)),
                  (h.duration = Math.round(h.duration / h.count))),
                h.slow_count &&
                  (h.slow_duration = Math.round(
                    h.slow_duration / h.slow_count
                  )),
                h.err_count &&
                  (h.err_duration = Math.round(h.err_duration / h.err_count)),
                h.timings.length > 20 &&
                  (h.timings.sort(function (y, k) {
                    return k.duration - y.duration;
                  }),
                  (h.timings.length = 20)),
                (h.timings = encodeURIComponent(JSON.stringify(h.timings))),
                d.push(h);
            });
            var m = { _combo: 1, resource: JSON.stringify(d) },
              g = o.navigator.connection;
            m.ct = g ? g.effectiveType || g.type : "";
            var p = (g && (g.downlink || g.downlinkMax || g.bandwidth)) || null;
            (p = p > 999 ? 999 : p) && (m.bandwidth = p),
              this._lg("resource", m, this.getConfig("sample"));
          }
        },
      });
    }),
    za
  );
}
var ye = He,
  En = rT,
  gT = sT,
  vT = aT,
  Rt = ye.win,
  $a = Rt.document,
  yT =
    /^(error|api|speed|sum|avg|percent|custom|msg|setPage|setConfig|behavior|performance)$/,
  Ke = function (e) {
    var t = this;
    return (
      En.call(t, e),
      (t._initialPage =
        (e.page && ye.safetyCall(e.page, [], e.page + "")) || null),
      (t._isRobot = ye.isRobot()),
      (t._health = { errcount: 0, apisucc: 0, apifail: 0 }),
      (t.beforeSend = function (n, r) {
        n === "error"
          ? t._health.errcount++
          : n === "api" && t._health[r.success ? "apisucc" : "apifail"]++;
      }),
      e.enableInstanceAutoSend !== !1 &&
        (t.initHandler(),
        t.initHook(),
        t.initFmpObserver(1e4),
        t._conf &&
          t._conf.behavior &&
          typeof t.initBehavior == "function" &&
          t.initBehavior(),
        t._conf &&
          t._conf.enableResource &&
          typeof t.initResource == "function" &&
          t.initResource()),
      Object.defineProperty &&
        Rt.addEventListener &&
        Object.defineProperty(t, "pipe", { set: t.sendPipe }),
      t
    );
  };
(Ke.prototype = ye.createObject(En.prototype)),
  ye.ext(En._root.dftCon, {
    uid: null,
    setUsername: null,
    ignoreUrlPath: null,
    ignoreApiPath: null,
    urlHelper: [{ rule: /\/([a-z\-_]+)?\d{2,20}/g, target: "/$1**" }, /\/$/],
    resourceHelper: [],
    apiHelper: { rule: /\/([a-z\-_]+)?\d{2,20}/g, target: "/$1**" },
    ignoreUrlCase: !0,
    imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
    cdnHostList: [],
    resourceTypes: ["css", "script", "img", "font"],
    resourceSlow: 2e3,
    disableHook: !1,
    autoSendPv: !0,
    autoSendPerf: !0,
    enableSPA: !1,
    enableLinkTrace: !1,
    linkType: "arms",
    enableApiCors: !1,
    sendResource: !0,
    behavior: !0,
    enableConsole: !1,
    parseHash: function (e) {
      return (e ? ye.cutUrlSearch(e.replace(/^#\/?/, "")) : "") || "[index]";
    },
    parseResponse: function (e) {
      if (!e || typeof e != "object") return {};
      var t = e.code,
        n =
          e.msg ||
          e.message ||
          e.subMsg ||
          e.errorMsg ||
          e.ret ||
          e.errorResponse ||
          "";
      return (
        typeof n == "object" &&
          ((t = t || n.code),
          (n = n.msg || n.message || n.info || n.ret || JSON.stringify(n))),
        { msg: n, code: t, success: !0 }
      );
    },
  }),
  ye.ext(Ke.prototype, {
    constructor: Ke,
    _super: En,
    onReady: function (e) {
      var t = this;
      if (t.hasReady) return e();
      $a.readyState === "complete"
        ? ((t.hasReady = !0), e())
        : ye.on(
            Rt,
            "load",
            function () {
              (t.hasReady = !0), e();
            },
            !0
          );
    },
    getPage: function (e) {
      var t = this._conf,
        n = t.page,
        r = location,
        o = r.host + r.pathname;
      return n && !e
        ? ye.safetyCall(n, [], n + "")
        : this._initialPage ||
            ye.filterByRule(
              t.ignoreUrlCase ? o.toLowerCase() : o,
              r.href,
              t.ignoreUrlPath ? t.ignoreUrlPath : t.urlHelper
            );
    },
    setPage: function (e, t) {
      var n = this,
        r = n.prevPage;
      if (t !== !1) {
        if (!e || e === r) return n;
        (n.prevPage = e),
          clearTimeout(n.sendPVTimmer),
          n.handleUnload(1),
          n.resetPageview(),
          (n.sendPVTimmer = setTimeout(function () {
            n.sendPV();
          }, 10));
      } else n.prevPage = e;
      return (n._conf.page = e), n;
    },
    setConfig: function (e, t) {
      if (e && typeof e == "object") {
        ye.verifyConfig(e), (e = this.setImgUrl(e));
        var n = this._conf;
        if (((this._conf = ye.ext({}, n, e)), !t)) {
          var r = "disableHook";
          r in e &&
            n[r] !== e[r] &&
            (e[r] ? this.removeHook() : this.addHook()),
            (r = "enableSPA") in e &&
              n[r] !== e[r] &&
              this.bindHashChange(e[r]);
        }
      }
    },
    sendRequest: function (e) {
      gT(e, this.getConfig("imgUrl"));
    },
    postData: function (e, t) {
      var n = {};
      (n[t] = e[t]), delete e[t];
      var r = "";
      typeof e == "object" && (r = ye.serialize(e)),
        vT(n, this.getConfig("imgUrl") + r + "&post_res=");
    },
    sendPipe: function (e) {
      var t = this;
      if (!e || !e.length) return t;
      try {
        if (ye.T(e[0]) === "Array")
          return ye.each(e, function (r) {
            return t.sendPipe(r);
          });
        if (ye.T(e) !== "Array") return t;
        var n = e.shift();
        if (!yT.test(n)) return t;
        t[n].apply(t, e);
      } catch (r) {
        return ye.warn("[retcode] error in sendPipe", r), t;
      }
    },
    sendHealth: function () {
      var e = ye.ext({}, this._health);
      (e.healthy = e.errcount > 0 ? 0 : 1), (e.begin = Date.now());
      var t = e.begin - this.sBegin;
      (e.stay = t),
        this._lg("health", e, 1),
        (this._health = { errcount: 0, apisucc: 0, apifail: 0 });
    },
    createInstance: function (e) {
      e = ye.ext({ pid: this._conf.pid }, e);
      var t = this.__proto__.constructor(e);
      return e.page && t.sendPV(), t;
    },
  }),
  lT()(Ke, Rt),
  dT()(Ke, Rt, $a),
  pT()(Ke, Rt, $a),
  fT()(Ke, Rt),
  hT()(Ke, Rt),
  mT()(Ke, Rt),
  (Ke._super = En),
  (Ke._root = En._root),
  (En.Browser = Ke),
  (cg.exports = Ke);
var wT = cg.exports;
function mg(e, t) {
  var n = (gt[In] = new hr(e));
  n.sendPipe(t);
  var r = n._conf;
  return (
    r.autoSendPv !== !1 && n.sendPV(),
    (r && r.useFmp) || n.sendPerformance(),
    r && r.sendResource && n.sendResources(),
    (gt[uc] = !0),
    n
  );
}
function kT() {
  if (gt[uc]) return gt[In];
  var e = {},
    t = [];
  return (
    In in gt && ((e = gt[In].config || {}), (t = gt[In].pipe || [])), mg(e, t)
  );
}
var gt = window,
  hr = (gt.BrowserLogger = wT),
  In = He.key,
  uc = "__hasInitBlSdk";
(hr.singleton = function (e, t) {
  return gt[uc] ? gt[In] : mg(e, t);
}),
  (hr.createExtraInstance = function (e) {
    e &&
      typeof e == "object" &&
      e.enableInstanceAutoSend !== !0 &&
      (e.enableInstanceAutoSend = !1);
    var t = new hr(e),
      n = t._conf;
    return (
      n.enableInstanceAutoSend &&
        (n.autoSendPv !== !1 && t.sendPV(),
        (n && n.useFmp) || t.sendPerformance(),
        n && n.sendResource && t.sendResources()),
      t
    );
  });
var xT = typeof window == "object" && !!window.navigator;
xT && gt[In] && (hr.bl = kT()), (ug.exports = hr);
var ST = ug.exports;
const CT = Kl(ST);
CT.singleton({
  pid: "fq234nz6x8@c359f05138532f1",
  appType: "web",
  imgUrl: "https://arms-retcode.aliyuncs.com/r.png?",
  behavior: !1,
  disableHook: !0,
  release: "0.0.13",
});
const gg = document.createElement("div");
document.body.appendChild(gg);
Da.createRoot(gg).render(A.jsx(Yp.StrictMode, { children: A.jsx(Kb, {}) }));
