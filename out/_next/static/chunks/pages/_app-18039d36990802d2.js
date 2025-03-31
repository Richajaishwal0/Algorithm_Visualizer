(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [203, 636],
  {
    1788: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(5203);
        },
      ]);
    },
    5203: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let u = n(7528);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let l = n(7677),
        o = n(4848),
        r = l._(n(6540)),
        a = n(4881);
      async function s(e) {
        let { Component: t, ctx: n } = e;
        return { pageProps: await (0, a.loadGetInitialProps)(t, n) };
      }
      class d extends r.default.Component {
        render() {
          let { Component: e, pageProps: t } = this.props;
          return (0, o.jsx)(e, u._({}, t));
        }
      }
      (d.origGetInitialProps = s),
        (d.getInitialProps = s),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [593, 792], () => (t(1788), t(4009))), (_N_E = e.O());
  },
]);
