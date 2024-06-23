"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [465],
  {
    8465: function (e, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return z;
          },
        });
      var t = n(2676),
        s = n(5271),
        r = n(2761);
      let l = () => {
        (0, s.useLayoutEffect)(() => {
          let e = window.getComputedStyle(document.body).overflow;
          return (
            (document.body.style.overflow = "hidden"),
            () => (document.body.style.overflow = e)
          );
        }, []);
      };
      var i = n(8412),
        c = n(350),
        a = n(3676);
      let d = (0, c.F4)({
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      });
      (0, c.zo)("div", {
        zIndex: a.SF + 1,
        pos: "fixed",
        w: "100%",
        h: "100%",
        t: 0,
        r: 0,
        ff: "$title",
        d: "flex",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        transitionDuration: "0.35s",
        animation: "".concat(d, " 0.45s ease-in-out"),
        backgroundColor: "$bodyBg",
        backgroundImage: 'url("/images/common/navigation/bg.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        "&::-webkit-scrollbar": { d: "none" },
      });
      let f = (0, c.zo)("div", {
        w: "100%",
        flex: 1,
        d: "flex",
        flexDirection: "column",
      });
      (0, c.zo)("div", { mb: 60, d: "flex", flexDirection: "column" });
      let x = (0, c.zo)("div", {
        mb: 51,
        d: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      });
      (0, c.zo)("div", { d: "flex", alignItems: "center" });
      let h = (0, c.zo)("div", {
        ml: 10,
        w: 35,
        h: 35,
        d: "flex",
        ai: "center",
      });
      (0, c.zo)("div", {
        zIndex: a.SF,
        pos: "fixed",
        t: 0,
        w: "100%",
        h: "100%",
        bg: "rgba(0, 0, 0, 0.13)",
      });
      var m = n(3801),
        u = n(6943),
        p = n(5440);
      let g = (0, c.zo)(p.Z, { d: "flex" }),
        v = (0, c.zo)(r.Z, {});
      var b = n(7359),
        w = function (e) {
          let {} = e,
            { closeBar: o } = (0, i.Jv)(),
            n = (0, b.Z)(c.BC.lg);
          return (0, t.jsx)(g, {
            onClick: o,
            href: "/",
            children: (0, t.jsx)(v, {
              src: "/images/common/footer/logo.png",
              alt: "logo",
              width: n ? 118 : 175,
              height: n ? 35 : 51,
              responsive: !1,
            }),
          });
        },
        j = n(2550),
        Z = n(6094),
        z = function () {
          let { closeBar: e } = (0, i.Jv)();
          l();
          let { t: o } = (0, Z.$G)();
          return (0, t.jsxs)(m.Z, {
            css: { p: 20, zIndex: 99, position: "relative", h: "100%" },
            children: [
              (0, t.jsxs)(x, {
                children: [
                  (0, t.jsx)(w, {}),
                  (0, t.jsx)(m.Z, {
                    css: { d: "flex", ai: "center" },
                    children: (0, t.jsx)(h, {
                      children: (0, t.jsx)(r.Z, {
                        onClick: e,
                        src: "/images/common/navigation/menu-close.svg",
                        width: 48,
                        height: 48,
                        responsive: !1,
                        alt: "close-menu",
                      }),
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(f, {
                children: (0, t.jsxs)(m.Z, {
                  css: {
                    h: "100%",
                    d: "flex",
                    fd: "column",
                    jc: "space-between",
                  },
                  children: [
                    (0, t.jsxs)(m.Z, {
                      css: {
                        d: "flex",
                        fd: "column",
                        gap: "32px",
                        textTransform: "uppercase",
                      },
                      children: [
                        (0, t.jsx)(p.Z, {
                          href: "/",
                          hash: "features",
                          children: (0, t.jsx)(u.Z, {
                            withBlackStroke: !0,
                            text: o("common.navigation.features", "Features"),
                            css: { color: "#2A4C75", fw: 900, fz: "40px" },
                          }),
                        }),
                        (0, t.jsx)(p.Z, {
                          href: "/",
                          hash: "utility",
                          children: (0, t.jsx)(u.Z, {
                            text: o("common.navigation.utility", "Utility"),
                            css: { color: "#2A4C75", fw: 900, fz: "40px" },
                          }),
                        }),
                        (0, t.jsx)(p.Z, {
                          href: "/",
                          hash: "roadmap",
                          children: (0, t.jsx)(u.Z, {
                            text: o("common.navigation.roadmap", "Roadmap"),
                            css: { color: "#2A4C75", fw: 900, fz: "40px" },
                          }),
                        }),
                        (0, t.jsx)(p.Z, {
                          href: "/",
                          hash: "faq",
                          children: (0, t.jsx)(u.Z, {
                            text: o("common.navigation.FAQ", "FAQ"),
                            css: { color: "#2A4C75", fw: 900, fz: "40px" },
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(j.Z, {
                      href: "/app",
                      w100Mob: !0,
                      onClick: e,
                      css: {
                        br: 12,
                        border: "2px solid $black",
                        bg: "#53A865",
                        textTransform: "uppercase",
                        mt: "100px",
                      },
                      children: (0, t.jsx)(u.Z, {
                        css: { color: "#FFF", fw: 700 },
                        children: o("common.presale", "Pre-Sale"),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
  },
]);
