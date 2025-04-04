"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [76],
  {
    7401: (e, r, t) => {
      t.d(r, { A: () => u });
      var o = t(9233),
        n = t(2175),
        l = t(2115);
      let a = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return r
            .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
            .join(" ")
            .trim();
        };
      var s = t(5843),
        c = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let d = (0, l.forwardRef)((e, r) => {
          var {
              color: t = "currentColor",
              size: a = 24,
              strokeWidth: d = 2,
              absoluteStrokeWidth: u,
              className: f = "",
              children: p,
              iconNode: b,
            } = e,
            m = (0, n._)(e, [
              "color",
              "size",
              "strokeWidth",
              "absoluteStrokeWidth",
              "className",
              "children",
              "iconNode",
            ]);
          return (0, l.createElement)(
            "svg",
            (0, o._)(
              (0, s._)((0, o._)({ ref: r }, c), {
                width: a,
                height: a,
                stroke: t,
                strokeWidth: u ? (24 * Number(d)) / Number(a) : d,
                className: i("lucide", f),
              }),
              m
            ),
            [
              ...b.map((e) => {
                let [r, t] = e;
                return (0, l.createElement)(r, t);
              }),
              ...(Array.isArray(p) ? p : [p]),
            ]
          );
        }),
        u = (e, r) => {
          let t = (0, l.forwardRef)((t, s) => {
            var { className: c } = t,
              u = (0, n._)(t, ["className"]);
            return (0, l.createElement)(
              d,
              (0, o._)(
                {
                  ref: s,
                  iconNode: r,
                  className: i("lucide-".concat(a(e)), c),
                },
                u
              )
            );
          });
          return (t.displayName = "".concat(e)), t;
        };
    },
    1626: (e, r, t) => {
      t.d(r, { A: () => o });
      let o = (0, t(7401).A)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
    6507: (e, r, t) => {
      t.d(r, { A: () => o });
      let o = (0, t(7401).A)("House", [
        [
          "path",
          { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
        ],
        [
          "path",
          {
            d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "1d0kgt",
          },
        ],
      ]);
    },
    8173: (e, r, t) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      let o = t(9233),
        n = t(5843),
        l = t(2175);
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let a = t(306),
        i = t(5155),
        s = a._(t(2115)),
        c = t(180),
        d = t(1394),
        u = t(4116),
        f = t(4445),
        p = t(5353),
        b = t(2170),
        m = t(9544);
      function g(e, r, t) {
        "undefined" != typeof window &&
          (async () => e.prefetch(r, t))().catch((e) => {});
      }
      function h(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      t(2363);
      let y = s.default.forwardRef(function (e, r) {
        let t, a;
        let {
            href: c,
            as: y,
            children: v,
            prefetch: w = null,
            passHref: x,
            replace: k,
            shallow: j,
            scroll: O,
            onClick: P,
            onMouseEnter: E,
            onTouchStart: C,
            legacyBehavior: _ = !1,
          } = e,
          z = l._(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (t = v),
          _ &&
            ("string" == typeof t || "number" == typeof t) &&
            (t = (0, i.jsx)("a", { children: t }));
        let M = s.default.useContext(d.AppRouterContext),
          N = !1 !== w,
          S = null === w ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL,
          { href: A, as: I } = s.default.useMemo(() => {
            let e = h(c);
            return { href: e, as: y ? h(y) : e };
          }, [c, y]),
          R = s.default.useRef(A),
          T = s.default.useRef(I);
        _ && (a = s.default.Children.only(t));
        let W = _ ? a && "object" == typeof a && a.ref : r,
          [G, U, $] = (0, u.useIntersection)({ rootMargin: "200px" }),
          L = s.default.useCallback(
            (e) => {
              (T.current !== I || R.current !== A) &&
                ($(), (T.current = I), (R.current = A)),
                G(e);
            },
            [I, A, $, G]
          ),
          F = (0, p.useMergedRef)(L, W);
        s.default.useEffect(() => {
          M && U && N && g(M, A, { kind: S });
        }, [I, A, U, N, M, S]);
        let D = {
          ref: F,
          onClick(e) {
            _ || "function" != typeof P || P(e),
              _ &&
                a.props &&
                "function" == typeof a.props.onClick &&
                a.props.onClick(e),
              M &&
                !e.defaultPrevented &&
                (function (e, r, t, o, n, l, a) {
                  let { nodeName: i } = e.currentTarget;
                  ("A" === i.toUpperCase() &&
                    (function (e) {
                      let r = e.currentTarget.getAttribute("target");
                      return (
                        (r && "_self" !== r) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e)) ||
                    (e.preventDefault(),
                    s.default.startTransition(() => {
                      let e = null == a || a;
                      "beforePopState" in r
                        ? r[n ? "replace" : "push"](t, o, {
                            shallow: l,
                            scroll: e,
                          })
                        : r[n ? "replace" : "push"](o || t, { scroll: e });
                    }));
                })(e, M, A, I, k, j, O);
          },
          onMouseEnter(e) {
            _ || "function" != typeof E || E(e),
              _ &&
                a.props &&
                "function" == typeof a.props.onMouseEnter &&
                a.props.onMouseEnter(e),
              M && N && g(M, A, { kind: S });
          },
          onTouchStart: function (e) {
            _ || "function" != typeof C || C(e),
              _ &&
                a.props &&
                "function" == typeof a.props.onTouchStart &&
                a.props.onTouchStart(e),
              M && N && g(M, A, { kind: S });
          },
        };
        return (
          (0, b.isAbsoluteUrl)(I)
            ? (D.href = I)
            : (_ && !x && ("a" !== a.type || "href" in a.props)) ||
              (D.href = (0, m.addBasePath)(I)),
          _
            ? s.default.cloneElement(a, D)
            : (0, i.jsx)("a", n._(o._({}, z, D), { children: t }))
        );
      });
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    8571: (e, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          cancelIdleCallback: function () {
            return o;
          },
          requestIdleCallback: function () {
            return t;
          },
        });
      const getTimestamp = () =>
        typeof window !== "undefined" ? Date.now() : 0;

      const t =
        typeof window !== "undefined" &&
        (self.requestIdleCallback
          ? self.requestIdleCallback.bind(window)
          : function (e) {
              let r = getTimestamp(); // ✅ Store timestamp once
              return setTimeout(() => {
                e({
                  didTimeout: false,
                  timeRemaining: () => Math.max(0, 50 - (getTimestamp() - r)),
                });
              }, 1);
            });
      o =
        ("undefined" != typeof self &&
          self.cancelIdleCallback &&
          self.cancelIdleCallback.bind(window)) ||
        function (e) {
          return clearTimeout(e);
        };
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    4116: (e, r, t) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useIntersection", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let o = t(2115),
        n = t(8571),
        l = "function" == typeof IntersectionObserver,
        a = new Map(),
        i = [];
      function s(e) {
        let { rootRef: r, rootMargin: t, disabled: s } = e,
          c = s || !l,
          [d, u] = (0, o.useState)(!1),
          f = (0, o.useRef)(null),
          p = (0, o.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, o.useEffect)(() => {
            if (l) {
              if (c || d) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, r, t) {
                  let {
                    id: o,
                    observer: n,
                    elements: l,
                  } = (function (e) {
                    let r;
                    let t = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      o = i.find(
                        (e) => e.root === t.root && e.margin === t.margin
                      );
                    if (o && (r = a.get(o))) return r;
                    let n = new Map();
                    return (
                      (r = {
                        id: t,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let r = n.get(e.target),
                              t = e.isIntersecting || e.intersectionRatio > 0;
                            r && t && r(t);
                          });
                        }, e),
                        elements: n,
                      }),
                      i.push(t),
                      a.set(t, r),
                      r
                    );
                  })(t);
                  return (
                    l.set(e, r),
                    n.observe(e),
                    function () {
                      if ((l.delete(e), n.unobserve(e), 0 === l.size)) {
                        n.disconnect(), a.delete(o);
                        let e = i.findIndex(
                          (e) => e.root === o.root && e.margin === o.margin
                        );
                        e > -1 && i.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && u(e), {
                  root: null == r ? void 0 : r.current,
                  rootMargin: t,
                });
            } else if (!d) {
              let e = (0, n.requestIdleCallback)(() => u(!0));
              return () => (0, n.cancelIdleCallback)(e);
            }
          }, [c, t, r, d, f.current]),
          [
            p,
            d,
            (0, o.useCallback)(() => {
              u(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    5353: (e, r, t) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let o = t(2115);
      function n(e, r) {
        let t = (0, o.useRef)(() => {}),
          n = (0, o.useRef)(() => {});
        return (0, o.useMemo)(
          () =>
            e && r
              ? (o) => {
                  null === o
                    ? (t.current(), n.current())
                    : ((t.current = l(e, o)), (n.current = l(r, o)));
                }
              : e || r,
          [e, r]
        );
      }
      function l(e, r) {
        if ("function" != typeof e)
          return (
            (e.current = r),
            () => {
              e.current = null;
            }
          );
        {
          let t = e(r);
          return "function" == typeof t ? t : () => e(null);
        }
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    180: (e, r, t) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          formatUrl: function () {
            return l;
          },
          formatWithValidation: function () {
            return i;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let o = t(9955)._(t(4156)),
        n = /https?|ftp|gopher|file/;
      function l(e) {
        let { auth: r, hostname: t } = e,
          l = e.protocol || "",
          a = e.pathname || "",
          i = e.hash || "",
          s = e.query || "",
          c = !1;
        (r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = r + e.host)
            : t &&
              ((c = r + (~t.indexOf(":") ? "[" + t + "]" : t)),
              e.port && (c += ":" + e.port)),
          s &&
            "object" == typeof s &&
            (s = String(o.urlQueryToSearchParams(s)));
        let d = e.search || (s && "?" + s) || "";
        return (l && !l.endsWith(":") && (l += ":"), e.slashes || ((!l || n.test(l)) && !1 !== c)
          ? ((c = "//" + (c || "")), a && "/" !== a[0] && (a = "/" + a))
          : c || (c = ""), i && "#" !== i[0] && (i = "#" + i), d && "?" !== d[0] && (d = "?" + d), "" +
          l +
          c +
          (a = a.replace(/[?#]/g, encodeURIComponent)) +
          (d = d.replace("#", "%23")) +
          i);
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function i(e) {
        return l(e);
      }
    },
    4156: (e, r) => {
      function t(e) {
        let r = {};
        return (
          e.forEach((e, t) => {
            void 0 === r[t]
              ? (r[t] = e)
              : Array.isArray(r[t])
              ? r[t].push(e)
              : (r[t] = [r[t], e]);
          }),
          r
        );
      }
      function o(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function n(e) {
        let r = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [t, n] = e;
            Array.isArray(n)
              ? n.forEach((e) => r.append(t, o(e)))
              : r.set(t, o(n));
          }),
          r
        );
      }
      function l(e) {
        for (
          var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), o = 1;
          o < r;
          o++
        )
          t[o - 1] = arguments[o];
        return (
          t.forEach((r) => {
            Array.from(r.keys()).forEach((r) => e.delete(r)),
              r.forEach((r, t) => e.append(t, r));
          }),
          e
        );
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          assign: function () {
            return l;
          },
          searchParamsToUrlQuery: function () {
            return t;
          },
          urlQueryToSearchParams: function () {
            return n;
          },
        });
    },
    2170: (e, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          DecodeError: function () {
            return b;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return h;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return t;
          },
          execOnce: function () {
            return o;
          },
          getDisplayName: function () {
            return s;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return i;
          },
          isAbsoluteUrl: function () {
            return l;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return d;
          },
          stringifyError: function () {
            return v;
          },
        });
      let t = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function o(e) {
        let r,
          t = !1;
        return function () {
          for (var o = arguments.length, n = Array(o), l = 0; l < o; l++)
            n[l] = arguments[l];
          return t || ((t = !0), (r = e(...n))), r;
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        l = (e) => n.test(e);
      function a() {
        let { protocol: e, hostname: r, port: t } = window.location;
        return e + "//" + r + (t ? ":" + t : "");
      }
      function i() {
        let { href: e } = window.location,
          r = a();
        return e.substring(r.length);
      }
      function s(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function d(e) {
        let r = e.split("?");
        return (r[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (r[1] ? "?" + r.slice(1).join("?") : ""));
      }
      async function u(e, r) {
        let t = r.res || (r.ctx && r.ctx.res);
        if (!e.getInitialProps)
          return r.ctx && r.Component
            ? { pageProps: await u(r.Component, r.ctx) }
            : {};
        let o = await e.getInitialProps(r);
        if (t && c(t)) return o;
        if (!o)
          throw Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              o +
              '" instead.'
          );
        return o;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class b extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class h extends Error {
        constructor(e, r) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + r);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function v(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    8068: (e, r, t) => {
      t.d(r, { s: () => l, t: () => n });
      var o = t(2115);
      function n(...e) {
        return (r) =>
          e.forEach((e) => {
            "function" == typeof e ? e(r) : null != e && (e.current = r);
          });
      }
      function l(...e) {
        return o.useCallback(n(...e), e);
      }
    },
    2317: (e, r, t) => {
      t.d(r, { DX: () => a });
      var o = t(2115),
        n = t(8068),
        l = t(5155),
        a = o.forwardRef((e, r) => {
          let { children: t, ...n } = e,
            a = o.Children.toArray(t),
            s = a.find(c);
          if (s) {
            let e = s.props.children,
              t = a.map((r) =>
                r !== s
                  ? r
                  : o.Children.count(e) > 1
                  ? o.Children.only(null)
                  : o.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, l.jsx)(i, {
              ...n,
              ref: r,
              children: o.isValidElement(e)
                ? o.cloneElement(e, void 0, t)
                : null,
            });
          }
          return (0, l.jsx)(i, { ...n, ref: r, children: t });
        });
      a.displayName = "Slot";
      var i = o.forwardRef((e, r) => {
        let { children: t, ...l } = e;
        if (o.isValidElement(t)) {
          let e = (function (e) {
            let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = r && "isReactWarning" in r && r.isReactWarning;
            return t
              ? e.ref
              : (t =
                  (r = Object.getOwnPropertyDescriptor(e, "ref")?.get) &&
                  "isReactWarning" in r &&
                  r.isReactWarning)
              ? e.props.ref
              : e.props.ref || e.ref;
          })(t);
          return o.cloneElement(t, {
            ...(function (e, r) {
              let t = { ...r };
              for (let o in r) {
                let n = e[o],
                  l = r[o];
                /^on[A-Z]/.test(o)
                  ? n && l
                    ? (t[o] = (...e) => {
                        l(...e), n(...e);
                      })
                    : n && (t[o] = n)
                  : "style" === o
                  ? (t[o] = { ...n, ...l })
                  : "className" === o &&
                    (t[o] = [n, l].filter(Boolean).join(" "));
              }
              return { ...e, ...t };
            })(l, t.props),
            ref: r ? (0, n.t)(r, e) : e,
          });
        }
        return o.Children.count(t) > 1 ? o.Children.only(null) : null;
      });
      i.displayName = "SlotClone";
      var s = ({ children: e }) => (0, l.jsx)(l.Fragment, { children: e });
      function c(e) {
        return o.isValidElement(e) && e.type === s;
      }
    },
    2175: (e, r, t) => {
      t.r(r), t.d(r, { _: () => o });
      function o(e, r) {
        if (null == e) return {};
        var t,
          o,
          n = (function (e, r) {
            if (null == e) return {};
            var t,
              o,
              n = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++)
              (t = l[o]), r.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (t = l[o]),
              !(r.indexOf(t) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, t) &&
                (n[t] = e[t]);
        }
        return n;
      }
    },
    1027: (e, r, t) => {
      t.d(r, { F: () => a });
      var o = t(3463);
      let n = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        l = o.$,
        a = (e, r) => (t) => {
          var o;
          if ((null == r ? void 0 : r.variants) == null)
            return l(
              e,
              null == t ? void 0 : t.class,
              null == t ? void 0 : t.className
            );
          let { variants: a, defaultVariants: i } = r,
            s = Object.keys(a).map((e) => {
              let r = null == t ? void 0 : t[e],
                o = null == i ? void 0 : i[e];
              if (null === r) return null;
              let l = n(r) || n(o);
              return a[e][l];
            }),
            c =
              t &&
              Object.entries(t).reduce((e, r) => {
                let [t, o] = r;
                return void 0 === o || (e[t] = o), e;
              }, {});
          return l(
            e,
            s,
            null == r
              ? void 0
              : null === (o = r.compoundVariants) || void 0 === o
              ? void 0
              : o.reduce((e, r) => {
                  let { class: t, className: o, ...n } = r;
                  return Object.entries(n).every((e) => {
                    let [r, t] = e;
                    return Array.isArray(t)
                      ? t.includes({ ...i, ...c }[r])
                      : { ...i, ...c }[r] === t;
                  })
                    ? [...e, t, o]
                    : e;
                }, []),
            null == t ? void 0 : t.class,
            null == t ? void 0 : t.className
          );
        };
    },
    3463: (e, r, t) => {
      t.d(r, { $: () => o });
      function o() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r) {
                if (Array.isArray(r)) {
                  var l = r.length;
                  for (t = 0; t < l; t++)
                    r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              }
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
    },
    9795: (e, r, t) => {
      t.d(r, { QP: () => Z });
      let o = (e) => {
          let r = i(e),
            { conflictingClassGroups: t, conflictingClassGroupModifiers: o } =
              e;
          return {
            getClassGroupId: (e) => {
              let t = e.split("-");
              return (
                "" === t[0] && 1 !== t.length && t.shift(), n(t, r) || a(e)
              );
            },
            getConflictingClassGroupIds: (e, r) => {
              let n = t[e] || [];
              return r && o[e] ? [...n, ...o[e]] : n;
            },
          };
        },
        n = (e, r) => {
          if (0 === e.length) return r.classGroupId;
          let t = e[0],
            o = r.nextPart.get(t),
            l = o ? n(e.slice(1), o) : void 0;
          if (l) return l;
          if (0 === r.validators.length) return;
          let a = e.join("-");
          return r.validators.find(({ validator: e }) => e(a))?.classGroupId;
        },
        l = /^\[(.+)\]$/,
        a = (e) => {
          if (l.test(e)) {
            let r = l.exec(e)[1],
              t = r?.substring(0, r.indexOf(":"));
            if (t) return "arbitrary.." + t;
          }
        },
        i = (e) => {
          let { theme: r, prefix: t } = e,
            o = { nextPart: new Map(), validators: [] };
          return (
            u(Object.entries(e.classGroups), t).forEach(([e, t]) => {
              s(t, o, e, r);
            }),
            o
          );
        },
        s = (e, r, t, o) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? r : c(r, e)).classGroupId = t;
              return;
            }
            if ("function" == typeof e) {
              if (d(e)) {
                s(e(o), r, t, o);
                return;
              }
              r.validators.push({ validator: e, classGroupId: t });
              return;
            }
            Object.entries(e).forEach(([e, n]) => {
              s(n, c(r, e), t, o);
            });
          });
        },
        c = (e, r) => {
          let t = e;
          return (
            r.split("-").forEach((e) => {
              t.nextPart.has(e) ||
                t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (t = t.nextPart.get(e));
            }),
            t
          );
        },
        d = (e) => e.isThemeGetter,
        u = (e, r) =>
          r
            ? e.map(([e, t]) => [
                e,
                t.map((e) =>
                  "string" == typeof e
                    ? r + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, t]) => [r + e, t])
                      )
                    : e
                ),
              ])
            : e,
        f = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let r = 0,
            t = new Map(),
            o = new Map(),
            n = (n, l) => {
              t.set(n, l), ++r > e && ((r = 0), (o = t), (t = new Map()));
            };
          return {
            get(e) {
              let r = t.get(e);
              return void 0 !== r
                ? r
                : void 0 !== (r = o.get(e))
                ? (n(e, r), r)
                : void 0;
            },
            set(e, r) {
              t.has(e) ? t.set(e, r) : n(e, r);
            },
          };
        },
        p = (e) => {
          let { separator: r, experimentalParseClassName: t } = e,
            o = 1 === r.length,
            n = r[0],
            l = r.length,
            a = (e) => {
              let t;
              let a = [],
                i = 0,
                s = 0;
              for (let c = 0; c < e.length; c++) {
                let d = e[c];
                if (0 === i) {
                  if (d === n && (o || e.slice(c, c + l) === r)) {
                    a.push(e.slice(s, c)), (s = c + l);
                    continue;
                  }
                  if ("/" === d) {
                    t = c;
                    continue;
                  }
                }
                "[" === d ? i++ : "]" === d && i--;
              }
              let c = 0 === a.length ? e : e.substring(s),
                d = c.startsWith("!"),
                u = d ? c.substring(1) : c;
              return {
                modifiers: a,
                hasImportantModifier: d,
                baseClassName: u,
                maybePostfixModifierPosition: t && t > s ? t - s : void 0,
              };
            };
          return t ? (e) => t({ className: e, parseClassName: a }) : a;
        },
        b = (e) => {
          if (e.length <= 1) return e;
          let r = [],
            t = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (r.push(...t.sort(), e), (t = [])) : t.push(e);
            }),
            r.push(...t.sort()),
            r
          );
        },
        m = (e) => ({ cache: f(e.cacheSize), parseClassName: p(e), ...o(e) }),
        g = /\s+/,
        h = (e, r) => {
          let {
              parseClassName: t,
              getClassGroupId: o,
              getConflictingClassGroupIds: n,
            } = r,
            l = [],
            a = e.trim().split(g),
            i = "";
          for (let e = a.length - 1; e >= 0; e -= 1) {
            let r = a[e],
              {
                modifiers: s,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: u,
              } = t(r),
              f = !!u,
              p = o(f ? d.substring(0, u) : d);
            if (!p) {
              if (!f || !(p = o(d))) {
                i = r + (i.length > 0 ? " " + i : i);
                continue;
              }
              f = !1;
            }
            let m = b(s).join(":"),
              g = c ? m + "!" : m,
              h = g + p;
            if (l.includes(h)) continue;
            l.push(h);
            let y = n(p, f);
            for (let e = 0; e < y.length; ++e) {
              let r = y[e];
              l.push(g + r);
            }
            i = r + (i.length > 0 ? " " + i : i);
          }
          return i;
        };
      function y() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) && (r = v(e)) && (o && (o += " "), (o += r));
        return o;
      }
      let v = (e) => {
          let r;
          if ("string" == typeof e) return e;
          let t = "";
          for (let o = 0; o < e.length; o++)
            e[o] && (r = v(e[o])) && (t && (t += " "), (t += r));
          return t;
        },
        w = (e) => {
          let r = (r) => r[e] || [];
          return (r.isThemeGetter = !0), r;
        },
        x = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        k = /^\d+\/\d+$/,
        j = new Set(["px", "full", "screen"]),
        O = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        P =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        _ =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        z = (e) => N(e) || j.has(e) || k.test(e),
        M = (e) => q(e, "length", B),
        N = (e) => !!e && !Number.isNaN(Number(e)),
        S = (e) => q(e, "number", N),
        A = (e) => !!e && Number.isInteger(Number(e)),
        I = (e) => e.endsWith("%") && N(e.slice(0, -1)),
        R = (e) => x.test(e),
        T = (e) => O.test(e),
        W = new Set(["length", "size", "percentage"]),
        G = (e) => q(e, W, K),
        U = (e) => q(e, "position", K),
        $ = new Set(["image", "url"]),
        L = (e) => q(e, $, Q),
        F = (e) => q(e, "", V),
        D = () => !0,
        q = (e, r, t) => {
          let o = x.exec(e);
          return (
            !!o &&
            (o[1] ? ("string" == typeof r ? o[1] === r : r.has(o[1])) : t(o[2]))
          );
        },
        B = (e) => P.test(e) && !E.test(e),
        K = () => !1,
        V = (e) => C.test(e),
        Q = (e) => _.test(e);
      Symbol.toStringTag;
      let Z = (function (e, ...r) {
        let t, o, n;
        let l = function (i) {
          return (
            (o = (t = m(r.reduce((e, r) => r(e), e()))).cache.get),
            (n = t.cache.set),
            (l = a),
            a(i)
          );
        };
        function a(e) {
          let r = o(e);
          if (r) return r;
          let l = h(e, t);
          return n(e, l), l;
        }
        return function () {
          return l(y.apply(null, arguments));
        };
      })(() => {
        let e = w("colors"),
          r = w("spacing"),
          t = w("blur"),
          o = w("brightness"),
          n = w("borderColor"),
          l = w("borderRadius"),
          a = w("borderSpacing"),
          i = w("borderWidth"),
          s = w("contrast"),
          c = w("grayscale"),
          d = w("hueRotate"),
          u = w("invert"),
          f = w("gap"),
          p = w("gradientColorStops"),
          b = w("gradientColorStopPositions"),
          m = w("inset"),
          g = w("margin"),
          h = w("opacity"),
          y = w("padding"),
          v = w("saturate"),
          x = w("scale"),
          k = w("sepia"),
          j = w("skew"),
          O = w("space"),
          P = w("translate"),
          E = () => ["auto", "contain", "none"],
          C = () => ["auto", "hidden", "clip", "visible", "scroll"],
          _ = () => ["auto", R, r],
          W = () => [R, r],
          $ = () => ["", z, M],
          q = () => ["auto", N, R],
          B = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          K = () => ["solid", "dashed", "dotted", "double", "none"],
          V = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          Q = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          Z = () => ["", "0", R],
          H = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          J = () => [N, R];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [D],
            spacing: [z, M],
            blur: ["none", "", T, R],
            brightness: J(),
            borderColor: [e],
            borderRadius: ["none", "", "full", T, R],
            borderSpacing: W(),
            borderWidth: $(),
            contrast: J(),
            grayscale: Z(),
            hueRotate: J(),
            invert: Z(),
            gap: W(),
            gradientColorStops: [e],
            gradientColorStopPositions: [I, M],
            inset: _(),
            margin: _(),
            opacity: J(),
            padding: W(),
            saturate: J(),
            scale: J(),
            sepia: Z(),
            skew: J(),
            space: W(),
            translate: W(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", R] }],
            container: ["container"],
            columns: [{ columns: [T] }],
            "break-after": [{ "break-after": H() }],
            "break-before": [{ "break-before": H() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...B(), R] }],
            overflow: [{ overflow: C() }],
            "overflow-x": [{ "overflow-x": C() }],
            "overflow-y": [{ "overflow-y": C() }],
            overscroll: [{ overscroll: E() }],
            "overscroll-x": [{ "overscroll-x": E() }],
            "overscroll-y": [{ "overscroll-y": E() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [m] }],
            "inset-x": [{ "inset-x": [m] }],
            "inset-y": [{ "inset-y": [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", A, R] }],
            basis: [{ basis: _() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", R] }],
            grow: [{ grow: Z() }],
            shrink: [{ shrink: Z() }],
            order: [{ order: ["first", "last", "none", A, R] }],
            "grid-cols": [{ "grid-cols": [D] }],
            "col-start-end": [{ col: ["auto", { span: ["full", A, R] }, R] }],
            "col-start": [{ "col-start": q() }],
            "col-end": [{ "col-end": q() }],
            "grid-rows": [{ "grid-rows": [D] }],
            "row-start-end": [{ row: ["auto", { span: [A, R] }, R] }],
            "row-start": [{ "row-start": q() }],
            "row-end": [{ "row-end": q() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", R] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", R] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ...Q()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...Q(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...Q(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [y] }],
            px: [{ px: [y] }],
            py: [{ py: [y] }],
            ps: [{ ps: [y] }],
            pe: [{ pe: [y] }],
            pt: [{ pt: [y] }],
            pr: [{ pr: [y] }],
            pb: [{ pb: [y] }],
            pl: [{ pl: [y] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [O] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [O] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", R, r] },
            ],
            "min-w": [{ "min-w": [R, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  R,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [T] },
                  T,
                ],
              },
            ],
            h: [
              { h: [R, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [R, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [R, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [R, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", T, M] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  S,
                ],
              },
            ],
            "font-family": [{ font: [D] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  R,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", N, S] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  z,
                  R,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", R] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", R] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [h] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [h] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...K(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", z, M] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", z, R] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: W() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  R,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", R] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [h] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...B(), U] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", G] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  L,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [b] }],
            "gradient-via-pos": [{ via: [b] }],
            "gradient-to-pos": [{ to: [b] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [l] }],
            "rounded-s": [{ "rounded-s": [l] }],
            "rounded-e": [{ "rounded-e": [l] }],
            "rounded-t": [{ "rounded-t": [l] }],
            "rounded-r": [{ "rounded-r": [l] }],
            "rounded-b": [{ "rounded-b": [l] }],
            "rounded-l": [{ "rounded-l": [l] }],
            "rounded-ss": [{ "rounded-ss": [l] }],
            "rounded-se": [{ "rounded-se": [l] }],
            "rounded-ee": [{ "rounded-ee": [l] }],
            "rounded-es": [{ "rounded-es": [l] }],
            "rounded-tl": [{ "rounded-tl": [l] }],
            "rounded-tr": [{ "rounded-tr": [l] }],
            "rounded-br": [{ "rounded-br": [l] }],
            "rounded-bl": [{ "rounded-bl": [l] }],
            "border-w": [{ border: [i] }],
            "border-w-x": [{ "border-x": [i] }],
            "border-w-y": [{ "border-y": [i] }],
            "border-w-s": [{ "border-s": [i] }],
            "border-w-e": [{ "border-e": [i] }],
            "border-w-t": [{ "border-t": [i] }],
            "border-w-r": [{ "border-r": [i] }],
            "border-w-b": [{ "border-b": [i] }],
            "border-w-l": [{ "border-l": [i] }],
            "border-opacity": [{ "border-opacity": [h] }],
            "border-style": [{ border: [...K(), "hidden"] }],
            "divide-x": [{ "divide-x": [i] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [i] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [h] }],
            "divide-style": [{ divide: K() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-s": [{ "border-s": [n] }],
            "border-color-e": [{ "border-e": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...K()] }],
            "outline-offset": [{ "outline-offset": [z, R] }],
            "outline-w": [{ outline: [z, M] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: $() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [h] }],
            "ring-offset-w": [{ "ring-offset": [z, M] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", T, F] }],
            "shadow-color": [{ shadow: [D] }],
            opacity: [{ opacity: [h] }],
            "mix-blend": [
              { "mix-blend": [...V(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": V() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [t] }],
            brightness: [{ brightness: [o] }],
            contrast: [{ contrast: [s] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", T, R] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [d] }],
            invert: [{ invert: [u] }],
            saturate: [{ saturate: [v] }],
            sepia: [{ sepia: [k] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [t] }],
            "backdrop-brightness": [{ "backdrop-brightness": [o] }],
            "backdrop-contrast": [{ "backdrop-contrast": [s] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
            "backdrop-invert": [{ "backdrop-invert": [u] }],
            "backdrop-opacity": [{ "backdrop-opacity": [h] }],
            "backdrop-saturate": [{ "backdrop-saturate": [v] }],
            "backdrop-sepia": [{ "backdrop-sepia": [k] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [a] }],
            "border-spacing-x": [{ "border-spacing-x": [a] }],
            "border-spacing-y": [{ "border-spacing-y": [a] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  R,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", R] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", R] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [x] }],
            "scale-x": [{ "scale-x": [x] }],
            "scale-y": [{ "scale-y": [x] }],
            rotate: [{ rotate: [A, R] }],
            "translate-x": [{ "translate-x": [P] }],
            "translate-y": [{ "translate-y": [P] }],
            "skew-x": [{ "skew-x": [j] }],
            "skew-y": [{ "skew-y": [j] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  R,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  R,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": W() }],
            "scroll-mx": [{ "scroll-mx": W() }],
            "scroll-my": [{ "scroll-my": W() }],
            "scroll-ms": [{ "scroll-ms": W() }],
            "scroll-me": [{ "scroll-me": W() }],
            "scroll-mt": [{ "scroll-mt": W() }],
            "scroll-mr": [{ "scroll-mr": W() }],
            "scroll-mb": [{ "scroll-mb": W() }],
            "scroll-ml": [{ "scroll-ml": W() }],
            "scroll-p": [{ "scroll-p": W() }],
            "scroll-px": [{ "scroll-px": W() }],
            "scroll-py": [{ "scroll-py": W() }],
            "scroll-ps": [{ "scroll-ps": W() }],
            "scroll-pe": [{ "scroll-pe": W() }],
            "scroll-pt": [{ "scroll-pt": W() }],
            "scroll-pr": [{ "scroll-pr": W() }],
            "scroll-pb": [{ "scroll-pb": W() }],
            "scroll-pl": [{ "scroll-pl": W() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", R] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [z, M, S] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
