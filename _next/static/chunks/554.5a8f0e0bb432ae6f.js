"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [554],
  {
    9554: function (e, r, s) {
      s.r(r),
        s.d(r, {
          default: function () {
            return h;
          },
        });
      var t = s(2676),
        a = s(1422),
        i = s(350),
        o = s(5440);
      let c = (0, i.zo)("div", {
          width: "100%",
          position: "fixed",
          top: 43,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 150,
        }),
        l = (0, i.zo)(o.Z, { color: "$titlePrimary", fz: "$lg", fw: 400 });
      (0, i.zo)("div", {
        pos: "relative",
        d: "flex",
        jc: "space-between",
        ai: "center",
        variants: {
          whiteLinks: { true: { ["& ".concat(l)]: { color: "$white" } } },
        },
      }),
        (0, i.zo)("div", {
          d: "flex",
          ai: "center",
          "@lg": { mb: 15, fd: "column", ai: "flex-start" },
        }),
        (0, i.zo)("div", { ml: 10, "@lg": { mr: 10 } });
      var n = s(3801),
        x = s(2550),
        f = s(6943),
        d = s(6094),
        p = s(2761),
        h = (e) => {
          let { price: r } = e,
            { t: s } = (0, d.$G)();
          return (0, t.jsx)(c, {
            children: (0, t.jsx)(a.ZP, {
              moreWidth: !0,
              children: (0, t.jsxs)(n.Z, {
                css: {
                  d: "flex",
                  jc: "space-between",
                  ai: "center",
                  gap: 72,
                  bg: "#F5FAFB",
                  boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.25)",
                  br: "21px",
                  m: "0px 15px",
                  p: "22px 22px 22px 38px",
                },
                children: [
                  (0, t.jsxs)(n.Z, {
                    css: { d: "flex", ai: "center", gap: "60px" },
                    children: [
                      (0, t.jsx)(p.Z, {
                        src: "/images/common/footer/logo.png",
                        alt: "logo",
                        width: 175,
                        height: 51,
                        css: { width: "175px" },
                      }),
                      (0, t.jsxs)(n.Z, {
                        css: {
                          d: "flex",
                          ai: "center",
                          gap: "32px",
                          textTransform: "uppercase",
                        },
                        children: [
                          (0, t.jsx)(o.Z, {
                            href: "/",
                            hash: "features",
                            children: (0, t.jsx)(f.Z, {
                              text: s("common.navigation.features", "Features"),
                              css: {
                                color: "#000",
                                ff: "var(--font-rubik)",
                                fw: 500,
                                "@xl": { fz: "$md" },
                              },
                            }),
                          }),
                          (0, t.jsx)(o.Z, {
                            href: "/",
                            hash: "utility",
                            children: (0, t.jsx)(f.Z, {
                              text: s("common.navigation.utility", "Utility"),
                              css: {
                                color: "#000",
                                ff: "var(--font-rubik)",
                                fw: 500,
                                "@xl": { fz: "$md" },
                              },
                            }),
                          }),
                          (0, t.jsx)(o.Z, {
                            href: "/",
                            hash: "roadmap",
                            children: (0, t.jsx)(f.Z, {
                              text: s("common.navigation.roadmap", "Roadmap"),
                              css: {
                                color: "#000",
                                ff: "var(--font-rubik)",
                                fw: 500,
                                "@xl": { fz: "$md" },
                              },
                            }),
                          }),
                          (0, t.jsx)(o.Z, {
                            href: "/",
                            hash: "faq",
                            children: (0, t.jsx)(f.Z, {
                              text: s("common.navigation.FAQ", "FAQ"),
                              css: {
                                color: "#000",
                                ff: "var(--font-rubik)",
                                fw: 500,
                                "@xl": { fz: "$md" },
                              },
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(n.Z, {
                    css: { ml: 133, d: "flex", ai: "center", gap: 14 },
                    children: (0, t.jsx)(x.Z, {
                      href: "/app",
                      css: {
                        br: 12,
                        border: "2px solid $black",
                        bg: "#F96D6D",
                        textTransform: "uppercase",
                        p: "0px 10px",
                        ff: "var(--font-rubik)",
                      },
                      children: (0, t.jsx)(f.Z, {
                        css: { color: "#FFF", fw: 700 },
                        children: s("common.presale", "Pre-Sale"),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          });
        };
    },
  },
]);
