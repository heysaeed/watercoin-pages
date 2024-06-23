(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8329: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(7841);
        },
      ]);
    },
    3801: function (e, t, i) {
      "use strict";
      let s = (0, i(350).zo)("div", {});
      t.Z = s;
    },
    2550: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return y;
        },
      });
      var s = i(350),
        n = i(2676);
      let r = (0, s.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        o = (0, s.zo)("div", {
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 10,
          variants: {
            isStatic: {
              true: {
                pos: "static",
                t: "initial",
                l: "initial",
                transform: "none",
              },
            },
          },
        }),
        a = (0, s.zo)("div", {
          width: 48,
          height: 48,
          border: "5px solid",
          borderColor: "$main",
          borderBottomColor: "transparent",
          br: "50%",
          d: "inline-block",
          "box-sizing": "border-box",
          animation: "".concat(r, " 1s linear infinite"),
          "@sm": { w: 30, h: 30, borderWidth: 3 },
          variants: {
            border: {
              red: { borderColor: "$red", borderBottomColor: "transparent" },
              white: {
                borderColor: "$white",
                borderBottomColor: "transparent",
              },
            },
          },
        });
      var l = (e) => {
          let {
            cssWrapperOuter: t,
            cssWrapperInner: i,
            variant: s,
            isStatic: r,
          } = e;
          return (0, n.jsx)(o, {
            css: t,
            isStatic: r,
            children: (0, n.jsx)(a, { border: s, css: i }),
          });
        },
        c = i(9050),
        d = i.n(c);
      let x = {
        disabled: {
          true: {
            pointerEvents: "none",
            bg: "#E8E8E8",
            color: "#939393",
            "&::before": {
              content: "",
              w: "100%",
              h: "100%",
              pos: "absolute",
              t: 0,
              l: 0,
              r: 0,
              b: 0,
              borderRadius: "$buttonMain",
            },
          },
        },
        loading: {
          true: {
            pointerEvents: "none",
            "&::before": {
              content: "",
              w: "100%",
              h: "100%",
              pos: "absolute",
              t: 0,
              l: 0,
              r: 0,
              b: 0,
              bg: "rgba(0,0,0,0.5)",
              borderRadius: "$buttonMain",
            },
          },
        },
      };
      (0, s.zo)("div", { position: "relative", w: "fit-content", variants: x }),
        (0, s.zo)("div", { w: 16, h: 16, pos: "relative", d: "flex" });
      let p = (0, s.zo)("div", {
          w: 0,
          h: "1.5px",
          pos: "absolute",
          r: 3,
          top: "50%",
          transform: "translateY(-50%)",
          br: 2,
          bg: "$white",
          transitionDuration: "0.25s",
          variants: {
            background: { purple: { bg: "#5856D6" }, white: { bg: "$white" } },
          },
        }),
        m = (0, s.zo)("div", {
          w: 7,
          h: 10,
          d: "flex",
          pos: "absolute",
          top: "50%",
          r: 0,
          transform: "translateY(-50%)",
          transitionDuration: "0.25s",
        }),
        h = (0, s.zo)("button", {
          position: "relative",
          m: 0,
          variants: x,
          "&:hover": {
            ["& ".concat(p)]: { w: 9, r: 0 },
            ["& ".concat(m)]: { r: -3 },
          },
        }),
        g = (0, s.zo)(d(), {
          position: "relative",
          variants: x,
          "&:hover": {
            ["& ".concat(p)]: { w: 9, r: 0 },
            ["& ".concat(m)]: { r: -3 },
          },
        });
      var f = i(9807),
        u = i(193),
        b = i(7953),
        w = i(5271),
        j = i(3801),
        y = (0, s.zo)(
          (e) => {
            let {
                text: t,
                isExternal: i,
                href: s,
                children: r,
                loaderVariant: o = "white",
                disabled: a,
                locale: c,
                align: d,
                hostname: x,
                passLang: p = !0,
                customParams: m,
                background: y,
                loading: v,
                noParams: Z,
                arrowColor: z = "white",
                withBorder: k,
                withBorderWrapperCss: C,
                hash: S,
                ...W
              } = e,
              F = (0, f.useRouter)(),
              [$, E] = (0, w.useState)(s),
              A = { ...(0, b.vl)(F.asPath), ...m };
            return ((0, w.useEffect)(() => {
              F &&
                s &&
                A &&
                E(
                  i
                    ? s
                    : {
                        ...(S && { hash: S }),
                        pathname:
                          p && "en" !== F.locale
                            ? (null == F ? void 0 : F.locale) + s
                            : s,
                        ...(!Z && { query: A }),
                        protocol: "localhost" === u.MX ? "http" : "https",
                        hostname: x || u.MX,
                        port: x ? void 0 : "localhost" === u.MX ? u.px : void 0,
                      }
                );
            }, [F, s]),
            s)
              ? (0, n.jsx)(g, {
                  ...W,
                  locale: !1,
                  href: $,
                  rel:
                    (null == W ? void 0 : W.target) === "_blank"
                      ? "noopener noreferrer"
                      : void 0,
                  children: t ? (0, n.jsx)(n.Fragment, { children: t }) : r,
                })
              : k
              ? (0, n.jsx)(j.Z, {
                  css: {
                    w: "fit-content",
                    p: 12,
                    border: "1.31px dashed #8EB8BF",
                    br: "20.961px 26.202px 26.202px 20.961px",
                    pos: "relative",
                    zi: 2,
                    ...C,
                  },
                  children: (0, n.jsxs)(h, {
                    ...W,
                    disabled: a,
                    loading: v,
                    children: [
                      v &&
                        (0, n.jsx)(l, {
                          variant: o,
                          cssWrapperInner: { w: 30, h: 30, borderWidth: 3 },
                        }),
                      t ? (0, n.jsx)(n.Fragment, { children: t }) : r,
                    ],
                  }),
                })
              : (0, n.jsxs)(h, {
                  ...W,
                  disabled: a,
                  loading: v,
                  children: [
                    v &&
                      (0, n.jsx)(l, {
                        variant: o,
                        cssWrapperInner: { w: 30, h: 30, borderWidth: 3 },
                      }),
                    t ? (0, n.jsx)(n.Fragment, { children: t }) : r,
                  ],
                });
          },
          {
            minW: 188,
            h: 44,
            w: "fit-content",
            d: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "content-box",
            bg: "$main",
            color: "$white",
            appearance: "none",
            outline: "none",
            borderRadius: "$main",
            cursor: "pointer",
            fz: "$buttonDef",
            fw: 700,
            ff: "var(--font-primary)",
            textAlign: "center",
            textDecoration: "none",
            fontStyle: "normal",
            fill: "currentColor",
            transitionDuration: "0.25s",
            letterSpacing: "0.04em",
            "&:hover": { textDecoration: "none", transform: "scale(0.97)" },
            variants: {
              background: {
                violet: {
                  bg: "#8A7FCC",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
                yellow: {
                  bg: "linear-gradient(180deg, #FFED97 0%, #FFC32C 100%)",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
                blue: {
                  bg: "#4672EB",
                  boxShadow: "0px -5px 0px 0px #000 inset",
                  border: "3px solid #000",
                },
              },
              color: {
                blue: { color: "$blue" },
                grey: { color: "$textDef" },
                red: { color: "$red" },
              },
              active: { true: {} },
              centered: { true: { margin: "0 auto" } },
              fontWeight: {
                400: { fontWeight: 400 },
                500: { fontWeight: 500 },
                600: { fontWeight: 600 },
                700: { fontWeight: 700 },
              },
              fontFamily: { inter: { fontFamily: "$rubik" } },
              size: {
                sm: { p: "11px 10px", minW: 82 },
                def: { minW: 152, fz: "$buttonDef" },
                md: { p: "15px 10px", minW: 200, fz: "$buttonDef" },
                lg: { p: "15px 10px", minW: 384 },
                w100: { w: "100%", maxW: "100%", pos: "relative" },
              },
              w100Mob: {
                true: { "@md": { minW: "100%", maxW: "100%", w: "100%" } },
              },
              mt: {
                1: { marginTop: "8px" },
                2: { marginTop: "16px" },
                3: { marginTop: "24px" },
                4: { marginTop: "32px" },
                5: { marginTop: "40px" },
                6: { marginTop: "48px" },
              },
              mb: {
                1: { marginBottom: "8px" },
                2: { marginBottom: "16px" },
                3: { marginBottom: "24px" },
                4: { marginBottom: "32px" },
                5: { marginBottom: "40px" },
                6: { marginBottom: "48px" },
                7: { marginBottom: "56px" },
                8: { marginBottom: "64px" },
              },
            },
            compoundVariants: [
              {
                background: "darkRedTransparent",
                active: !0,
                css: { bg: "#260704" },
              },
              {
                background: "darkBlueTransparent",
                active: !0,
                css: { bg: "#0A1117" },
              },
            ],
          }
        );
    },
    1422: function (e, t, i) {
      "use strict";
      i.d(t, {
        ZP: function () {
          return s;
        },
      });
      var s = (0, i(350).zo)("div", {
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        variants: {
          withFlex: { true: { flex: 1 } },
          withMt: { true: { mt: 40, "@minTablet": { mt: 80 } } },
          withMb: { true: { mb: 40, "@minTablet": { mb: 80 } } },
          moreWidth: {
            true: { maxWidth: "1674px", paddingLeft: 14, paddingRight: 14 },
            false: { maxWidth: 1642, paddingLeft: 14, paddingRight: 14 },
            undefined: { maxWidth: 1642, paddingLeft: 14, paddingRight: 14 },
          },
          noPaddingOnMob: { true: { "@md": { p: 0 } } },
        },
        compoundVariants: [
          {
            noPaddingOnMob: !0,
            moreWidth: void 0,
            css: { paddingLeft: 14, paddingRight: 14, "@md": { p: 0 } },
          },
          {
            noPaddingOnMob: !0,
            moreWidth: !0,
            css: { paddingLeft: 14, paddingRight: 14, "@md": { p: 0 } },
          },
        ],
      });
    },
    8412: function (e, t, i) {
      "use strict";
      i.d(t, {
        fL: function () {
          return d;
        },
        Jv: function () {
          return x;
        },
      });
      var s = i(2676),
        n = i(5271),
        r = i(7953),
        o = i(350),
        a = i(7359);
      let l = (0, n.createContext)(void 0),
        c = o.BC.lg,
        d = (e) => {
          let { children: t } = e,
            [i, r] = (0, n.useState)(!1),
            o = (0, n.useCallback)(() => r(!0), []),
            d = (0, n.useCallback)(() => r(!1), []),
            x = (0, n.useCallback)(() => r((e) => !e), []),
            p = (0, a.Z)(c);
          return (0, s.jsx)(l.Provider, {
            value: {
              isOpen: i,
              openBar: o,
              closeBar: d,
              toggleBar: x,
              isCollapsed: p,
            },
            children: t,
          });
        },
        x = () => (0, r.EF)(l);
    },
    3676: function (e, t, i) {
      "use strict";
      i.d(t, {
        SF: function () {
          return r;
        },
        im: function () {
          return o;
        },
      });
      var s = i(350),
        n = i(5440);
      let r = 150,
        o = (0, s.zo)("div", {
          width: "100%",
          position: "fixed",
          top: 45,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: r,
        }),
        a = (0, s.zo)(n.Z, { color: "$titlePrimary", fz: "$lg", fw: 400 });
      (0, s.zo)("div", {
        pos: "relative",
        d: "flex",
        jc: "space-between",
        ai: "center",
        variants: {
          whiteLinks: { true: { ["& ".concat(a)]: { color: "$white" } } },
        },
      }),
        (0, s.zo)("div", {
          d: "flex",
          ai: "center",
          "@lg": { mb: 15, fd: "column", ai: "flex-start" },
        }),
        (0, s.zo)("div", { ml: 10, "@lg": { mr: 10 } });
    },
    2761: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return c;
        },
      });
      var s = i(2676),
        n = i(350),
        r = i(9586),
        o = i.n(r);
      let a = (0, n.zo)(o(), {
        variants: { responsive: { true: { w: "100%", h: "auto" } } },
      });
      var l = i(3801),
        c = function (e) {
          let {
              src: t,
              responsive: i = !0,
              css: n,
              sizes: r,
              alt: o,
              ...c
            } = e,
            d = !c.fill && i,
            x = i ? r || "100vw" : void 0;
          return i
            ? (0, s.jsx)(l.Z, {
                css: { maxW: c.width, w: "100%", d: "flex", ...n },
                children: (0, s.jsx)(a, {
                  quality: 100,
                  ...c,
                  src: t,
                  sizes: x,
                  responsive: d,
                  alt: o || "image",
                }),
              })
            : (0, s.jsx)(a, {
                quality: 100,
                ...c,
                src: t,
                sizes: x,
                responsive: d,
                alt: o || "image",
                css: n,
              });
        };
    },
    5440: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return h;
        },
      });
      var s = i(2676),
        n = i(6943),
        r = (e) => {
          let { text: t, children: i, leftIcon: n, rightIcon: r } = e;
          return t
            ? (0, s.jsxs)(s.Fragment, { children: [n && n, t, r && r] })
            : (0, s.jsxs)(s.Fragment, { children: [n, i, r] });
        },
        o = i(350),
        a = i(9050),
        l = i.n(a);
      (0, o.zo)("div", {});
      let c = (0, o.zo)(l(), {}),
        d = (0, o.zo)("span", {});
      var x = i(9807),
        p = i(193),
        m = i(7953),
        h = (e) => {
          let {
              href: t,
              children: i,
              passLang: o = !1,
              leftIcon: a,
              rightIcon: l,
              asComp: h,
              hostname: g,
              isExternal: f,
              customParams: u,
              target: b,
              noParams: w,
              css: j,
              secondaryFont: y,
              hash: v,
              ...Z
            } = e,
            z = (0, x.useRouter)(),
            k = (0, s.jsx)(r, {
              text: Z.text,
              rightIcon: l,
              leftIcon: a,
              children: i,
            });
          if (t) {
            let e = { ...(0, m.vl)(z.asPath), ...u },
              i = f
                ? t
                : {
                    ...(v && { hash: v }),
                    pathname: t,
                    ...(!w && { query: e }),
                    protocol: "localhost" === p.MX ? "http" : "https",
                    hostname: g || p.MX,
                    port: g ? void 0 : "localhost" === p.MX ? p.px : void 0,
                  };
            return (0, s.jsx)(c, {
              href: i,
              locale: !1,
              rel: "_blank" === b ? "noopener noreferrer" : void 0,
              target: f ? "_blank" : b,
              css: j,
              ...Z,
              children: (0, s.jsx)(n.Z, {
                as: h || "span",
                ...Z,
                css: { m: 0, p: 0, fontSize: "inherit" },
                children: k,
              }),
            });
          }
          return (0, s.jsx)(d, { ...Z, css: j, children: k });
        };
    },
    6943: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var s = i(350),
        n = i(2676);
      let r = (0, s.zo)("div", { letterSpacing: "-0.02em" });
      (0, s.F4)({
        "0%": { backgroundPosition: "left center" },
        "25%": { backgroundPosition: "center top" },
        "50%": { backgroundPosition: "right center" },
        "75%": { backgroundPosition: "center bottom" },
        "100%": { backgroundPosition: "left center" },
      });
      var o = i(2635),
        a = (0, s.zo)(
          (e) => {
            let { text: t, asComp: i, children: s, ...o } = e;
            return (0, n.jsx)(r, {
              as: i,
              ...o,
              children: t ? (0, n.jsx)(n.Fragment, { children: t }) : s,
            });
          },
          {
            fz: "$def",
            fw: 400,
            color: "$textPrimary",
            letterSpacing: "-0.084px",
            variants: o.y,
          }
        );
    },
    193: function (e, t, i) {
      "use strict";
      i.d(t, {
        MX: function () {
          return o;
        },
        px: function () {
          return a;
        },
      });
      var s,
        n = i(6710),
        r = i.n(n);
      let o = window.location.hostname,
        a =
          null !== (s = r().env.NEXT_PUBLIC_PORT) && void 0 !== s ? s : "3000";
    },
    7359: function (e, t, i) {
      "use strict";
      var s = i(5271);
      t.Z = (e) => {
        let [t, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            {
              let s = window.matchMedia(e);
              s.matches !== t && i(s.matches);
              let n = () => i(s.matches);
              return (
                window.addEventListener("resize", n),
                () => window.removeEventListener("resize", n)
              );
            }
          }, [t, e]),
          t
        );
      };
    },
    7841: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSP: function () {
            return eG;
          },
          default: function () {
            return eX;
          },
        });
      var s = i(2676),
        n = i(350);
      let r = (0, n.zo)("div", {
          pt: 160,
          d: "flex",
          flexDirection: "column",
          w: "100%",
          "@md": { pt: 90 },
        }),
        o = (0, n.zo)("div", { w: "100%" });
      var a = i(4614),
        l = i.n(a),
        c = i(6094),
        d = (e) => {
          let { title: t, description: i, preview: n, children: r } = e,
            { t: o } = (0, c.$G)(),
            a = o("seo.title", "$WATER - OFFICIAL WEBSITE"),
            d = o(
              "seo.description",
              "Water is life. Join our big and conscious community. Bring the vital liquid to your portfolio with $WATER."
            ),
            x = "/images/preview.png";
          return (0, s.jsxs)(l(), {
            children: [
              (0, s.jsx)(
                "link",
                { rel: "icon", href: "/images/favicon.ico" },
                "icon"
              ),
              (0, s.jsx)("title", { children: t || a }, "title"),
              (0, s.jsx)(
                "meta",
                { property: "og:title", content: t || a },
                "og:title"
              ),
              (0, s.jsx)("meta", { name: "twitter:title", content: t || a }),
              (0, s.jsx)(
                "meta",
                { itemProp: "name", content: t || a },
                "google:name"
              ),
              (0, s.jsx)("meta", { name: "description", content: i || d }),
              (0, s.jsx)("meta", {
                property: "og:description",
                content: i || d,
              }),
              (0, s.jsx)("meta", {
                name: "twitter:description",
                content: i || d,
              }),
              (0, s.jsx)("meta", {
                name: "google:description",
                content: i || d,
              }),
              (0, s.jsx)("meta", { property: "og:image", content: n || x }),
              (0, s.jsx)("meta", { name: "twitter:image", content: n || x }),
              (0, s.jsx)("meta", { name: "image", content: n || x }),
              (0, s.jsx)(
                "meta",
                { property: "og:type", content: "website" },
                "og:type"
              ),
              (0, s.jsx)(
                "meta",
                { property: "og:site_name", content: "Website" },
                "og:site_name"
              ),
              (0, s.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              r,
            ],
          });
        },
        x = i(5634);
      i(634);
      var p = i(8412);
      let m = (0, n.zo)("div", { pt: 70, pb: 54 });
      var h = i(1422),
        g = i(6943),
        f = i(3801),
        u = i(2761),
        b = i(7359),
        w = (e) => {
          let { noFooterMt: t, footerTextColor: i, bgColor: r } = e,
            { t: o } = (0, c.$G)(),
            a = (0, b.Z)(n.BC.md);
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(m, {
              css: { bg: r || "transparent" },
              children: (0, s.jsxs)(h.ZP, {
                children: [
                  (0, s.jsxs)(f.Z, {
                    css: { d: "flex", ai: "center", fd: "column", mb: "36px" },
                    children: [
                      (0, s.jsx)(u.Z, {
                        src: "/images/common/footer/logo.png",
                        alt: "logo",
                        width: a ? 175 : 364,
                        height: a ? 50 : 106,
                        css: { mb: "10px" },
                      }),
                      (0, s.jsx)(g.Z, {
                        text: o("common.isLiquidSilver", "is liquid silver"),
                        css: {
                          color: i || "#FFF",
                          fz: "40px",
                          textTransform: "uppercase",
                          fw: 500,
                          ta: "center",
                          "@md": { fz: "23px" },
                        },
                      }),
                    ],
                  }),
                  (0, s.jsxs)(f.Z, {
                    css: {
                      maxW: "840px",
                      w: "100%",
                      ta: "center",
                      m: "0 auto",
                    },
                    children: [
                      (0, s.jsx)(g.Z, {
                        css: {
                          color: i || "#FFF",
                          mb: "15px",
                          fw: 500,
                          "@md": { fz: "14px", fw: 400 },
                        },
                        fontSize: "md",
                        text: o(
                          "common.footer.text",
                          "RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk."
                        ),
                      }),
                      (0, s.jsx)(g.Z, {
                        css: {
                          color: i || "#FFF",
                          fw: 500,
                          "@md": { fz: "14px", fw: 400 },
                        },
                        fontSize: "md",
                        text: o(
                          "common.footer.text2",
                          "We do not allow users of these countries to participate in the presale: The information on this site is not intended for residents of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation."
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        j = i(5271);
      let y = (e, t) => {
        let [i, s] = (0, j.useState)(() => {
          try {
            let i = window.localStorage.getItem(e);
            if (i) return JSON.parse(i);
            return window.localStorage.setItem(e, JSON.stringify(t)), t;
          } catch (e) {
            return t;
          }
        });
        return [
          i,
          (t) => {
            try {
              window.localStorage.setItem(e, JSON.stringify(t));
            } catch (e) {
              console.log(e);
            }
            s(t);
          },
        ];
      };
      var v = i(7375),
        Z = i(4849),
        z = i(3415),
        k = i(63);
      let C = (0, k.ZP)(
        "button",
        {}
      )((e) => {
        let { theme: t } = e;
        return {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px",
          minWidth: "42px",
          width: "42px",
          height: "42px",
          padding: 0,
          cursor: "pointer",
          "&:hover": { boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.17)" },
        };
      });
      var S = (e) => {
          let {
            image: t,
            handleClick: i,
            isNotVisible: n,
            imageAlt: r,
            backgroundColor: o = "inherit",
            sx: a,
          } = e;
          return (0, s.jsx)(C, {
            onClick: i,
            sx: {
              opacity: n ? 0 : 1,
              backgroundColor: o && "".concat(o, " !important"),
            },
            children: (0, s.jsx)(u.Z, {
              src: t,
              alt: r,
              responsive: !1,
              width: 24,
              height: 24,
            }),
          });
        },
        W = i(48),
        F = i(397);
      let $ = (0, k.ZP)(
          W.Z,
          {}
        )((e) => {
          let { theme: t } = e;
          return {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "rgba(11, 0, 33, 0.55)",
            backdropFilter: "blur(10.5px)",
            "&::-webkit-scrollbar": { display: "none !important", width: "0" },
          };
        }),
        E = (0, k.ZP)(
          F.Z,
          {}
        )((e) => {
          let { theme: t } = e;
          return {
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            padding: 0,
            maxHeight: "fit-content !important",
            border: "none",
            ["@media (min-width: ".concat(t.breakpoints.values.sm, "px)")]: {
              gap: "12px",
            },
          };
        }),
        A = (0, k.ZP)(
          z.Z,
          {}
        )((e) => {
          let { theme: t } = e;
          return {
            position: "fixed",
            bottom: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            color: "white",
            width: "100%",
            marginBottom: "32px",
          };
        });
      var T = (e) => {
          let {
              modalOpen: t,
              children: i,
              width: n = 700,
              height: r = "initial",
              padding: o,
              hasNotCloseButton: a,
              closeModal: l,
              backgroundColor: c = "base.white",
              borderRadius: d = "12px",
              leftButtonIsVisible: x,
              leftModalComponent: p,
              mobileLeftButton: m,
              mobileTitleElement: h,
              mobileRightButton: g,
              bottomModalComponent: f,
              backAction: u,
              noMarginBottom: b,
              modalRef: w,
              isDark: j,
              closeBg: y,
              closeWithClickAway: k,
              onCloseAddFunction: C,
              border: W,
              ...F
            } = e,
            T = (0, v.Z)(),
            B = (0, Z.Z)(T.breakpoints.down("sm")),
            P = (0, s.jsx)(S, {
              image: j
                ? "/images/formIcons/close-modal-icon-white.svg"
                : "/images/formIcons/close-modal-icon.svg",
              handleClick: l && l,
              imageAlt: "close",
              backgroundColor: y || "#FFF",
              isNotVisible: a,
            }),
            R = (0, s.jsx)(S, {
              handleClick: u,
              backgroundColor: "#FFF",
              imageAlt: "back",
              image: "/images/common/arrow-left.svg",
              isNotVisible: !u,
            }),
            I = "80px";
          return (0, s.jsxs)($, {
            scroll: "body",
            disableAutoFocus: !0,
            disableEscapeKeyDown: !0,
            open: t,
            "aria-labelledby": "scroll-dialog-title",
            "aria-describedby": "scroll-dialog-description",
            ref: w,
            PaperProps: {
              sx: {
                maxWidth: n && "".concat(+n + 124, "px"),
                width: "100%",
                height: b ? "calc(100% - ".concat(I, ")") : r,
                backgroundColor: "inherit",
                boxShadow: "none",
                marginTop: I,
                ...(b && { marginBottom: 0, maxHeight: "940px" }),
                [T.breakpoints.down("sm")]: {
                  margin: 0,
                  maxWidth: "100%",
                  minHeight: "100%",
                  minWidth: "100%",
                  borderRadius: 0,
                },
              },
            },
            onClose: (e, t) => {
              ("backdropClick" !== t || k) && (l && l(), C && C());
            },
            ...F,
            children: [
              (0, s.jsxs)(E, {
                onClick: () => k && l && l(),
                sx: {
                  width: "100%",
                  height: "100%",
                  ...(b && { overflow: "auto", paddingBottom: 0 }),
                  [T.breakpoints.down("sm")]: {
                    display: "flex",
                    flexDirection: "column-reverse",
                    justifyContent: "flex-end",
                  },
                },
                children: [
                  (0, s.jsx)(z.Z, { children: !B && R }),
                  (0, s.jsx)(z.Z, {
                    onClick: (e) => e.stopPropagation(),
                    sx: {
                      position: "relative",
                      backgroundColor: c,
                      borderRadius: d,
                      maxWidth: "".concat(n, "px"),
                      height: "100%",
                      width: "100%",
                      overflow: b ? "initial" : "hidden",
                      border: W || "none",
                      fontFamily: "inherit",
                      [T.breakpoints.down("sm")]: {
                        borderRadius: "".concat(d, " ").concat(d, " 0 0"),
                        minHeight: "calc(100vh - 82px)",
                      },
                    },
                    children: i,
                  }),
                  B
                    ? (0, s.jsxs)(z.Z, {
                        sx: {
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "20px 14px",
                          alignItems: "center",
                        },
                        children: [
                          (0, s.jsx)(s.Fragment, { children: m || R }),
                          (0, s.jsx)(s.Fragment, {
                            children: null != g ? g : P,
                          }),
                        ],
                      })
                    : P,
                ],
              }),
              !B && (0, s.jsx)(A, { children: f }),
            ],
          });
        },
        B = i(2550),
        P = i(2635);
      let R = (0, n.zo)(g.Z, {
        mb: 24,
        fontSize: "$titleDef",
        fw: 900,
        color: "$titlePrimary",
        lineHeight: "104%",
        "& span": { color: "#58B7E7" },
        "@md": { fontSize: "$titleSm" },
        variants: P.y,
      });
      var I = i(4064),
        D = (e) => {
          let {} = e,
            [t, i] = y("disclaimer-accepted", "0"),
            { t: n } = (0, c.$G)();
          return (0, s.jsx)(T, {
            modalOpen: "0" === t,
            hasNotCloseButton: !0,
            closeWithClickAway: !1,
            width: 850,
            children: (0, s.jsxs)(f.Z, {
              className: I.primary.className,
              css: {
                border: "1px solid #40BEFF",
                bg: "#FFF",
                padding: "45px 61px 56px",
                br: "18px",
                width: "100%",
                maxWidth: "650px",
                d: "flex",
                fd: "column",
                ai: "center",
                mb: 25,
                "@sm": { padding: "45px 11px 56px" },
              },
              children: [
                (0, s.jsx)(u.Z, {
                  src: "/images/common/disclaimer.png",
                  alt: "globe",
                  width: 66,
                  height: 66,
                }),
                (0, s.jsx)(R, {
                  css: {
                    fz: "55px",
                    ta: "center",
                    tt: "uppercase",
                    color: "#6EC7FC",
                    fw: 700,
                    textShadow: "0px 4px 0px #3582B0",
                  },
                  children: n("disclaimer.title", "Disclaimer"),
                }),
                (0, s.jsx)(g.Z, {
                  css: {
                    fz: "24px",
                    m: "0 auto 25px",
                    color: "#000",
                    maxW: 450,
                    ta: "center",
                  },
                  children: n(
                    "disclaimer.text",
                    "I confirm that I am not a citizen of Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq, Syria, USA, Vatican City, or for use by any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation."
                  ),
                }),
                (0, s.jsx)(B.Z, {
                  css: {
                    bg: "#53A865",
                    br: "12px",
                    border: "3px solid #000",
                    boxShadow: "none",
                    color: "#FFF",
                    minHeight: "75px",
                    maxW: "485px",
                    w: "100%",
                    m: "0 auto",
                    "-webkit-text-stroke-width": "1px",
                  },
                  onClick: () => i("1"),
                  children: (0, s.jsx)(g.Z, {
                    withBlackStroke: !0,
                    css: { fz: "24px", fw: 700 },
                    children: n(
                      "disclaimer.confirm",
                      "Confirm and go to website"
                    ),
                  }),
                }),
              ],
            }),
          });
        },
        L = i(1043),
        N = i.n(L);
      let M = (0, n.zo)("div", {
          variants: {
            down: {
              m: { "@m": { display: "none" } },
              xs: { "@xs": { display: "none" } },
              iphone14ProMax: { "@iphone14ProMax": { display: "none" } },
              sm: { "@sm": { display: "none" } },
              md: { "@md": { display: "none" } },
              lg: { "@lg": { display: "none" } },
              xl: { "@xl": { display: "none" } },
              xxl: { "@xxl": { display: "none" } },
              xxxl: { "@xxxl": { display: "none" } },
              extraLarge: { "@extraLarge": { display: "none" } },
            },
            up: {
              minM: { "@minM": { display: "none" } },
              minXs: { "@minXs": { display: "none" } },
              minSm: { "@minSm": { display: "none" } },
              minMd: { "@minMd": { display: "none" } },
              minLg: { "@minLg": { display: "none" } },
              minXl: { "@minXl": { display: "none" } },
              minXxl: { "@minXxl": { display: "none" } },
              minXxxl: { "@minXxxl": { display: "none" } },
              minExtraLarge: { "@minExtraLarge": { display: "none" } },
            },
          },
        }),
        H = (e) => {
          let { up: t, down: i, children: r } = e;
          return (0, b.Z)(n.BC[null != i ? i : t])
            ? null
            : (0, s.jsx)(s.Fragment, { children: r });
        };
      var O = (e) => {
          let { children: t, up: i, down: n, css: r, ...o } = e;
          return (0, s.jsx)(M, {
            up: i,
            down: n,
            ...o,
            css: r,
            children: (0, s.jsx)(H, { up: i, down: n, children: t }),
          });
        },
        _ = i(3676);
      let G = (0, n.F4)({
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }),
        X = (0, n.zo)("div", {
          zIndex: _.SF + 1,
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
          animation: "".concat(G, " 0.45s ease-in-out"),
          backgroundColor: "$bodyBg",
          backgroundImage: 'url("/images/common/navigation/bg.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          "&::-webkit-scrollbar": { d: "none" },
        });
      (0, n.zo)("div", {
        w: "100%",
        flex: 1,
        d: "flex",
        flexDirection: "column",
      }),
        (0, n.zo)("div", { mb: 60, d: "flex", flexDirection: "column" }),
        (0, n.zo)("div", {
          mb: 51,
          d: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }),
        (0, n.zo)("div", { d: "flex", alignItems: "center" }),
        (0, n.zo)("div", { ml: 10, w: 35, h: 35, d: "flex", ai: "center" });
      let K = (0, n.zo)("div", {
          zIndex: _.SF,
          pos: "fixed",
          t: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0, 0, 0, 0.13)",
        }),
        q = N()(() => i.e(465).then(i.bind(i, 8465)), {
          loadableGenerated: { webpack: () => [8465] },
          ssr: !1,
        });
      var V = () => {
        let { isOpen: e, closeBar: t } = (0, p.Jv)();
        return (0, s.jsx)(s.Fragment, {
          children:
            e &&
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(X, {
                  children: (0, s.jsx)(f.Z, {
                    css: {
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    },
                    children: (0, s.jsx)(q, {}),
                  }),
                }),
                (0, s.jsx)(K, { onClick: t }),
              ],
            }),
        });
      };
      let Y = N()(() => i.e(962).then(i.bind(i, 7962)), {
          loadableGenerated: { webpack: () => [7962] },
          ssr: !1,
        }),
        U = N()(() => i.e(554).then(i.bind(i, 9554)), {
          loadableGenerated: { webpack: () => [9554] },
          ssr: !1,
        });
      var J = function (e) {
          let { price: t } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(O, { up: "minXxl", children: (0, s.jsx)(Y, {}) }),
              (0, s.jsx)(O, {
                down: "xxl",
                children: (0, s.jsx)(U, { price: t }),
              }),
              (0, s.jsx)(V, {}),
            ],
          });
        },
        Q = (e) => {
          let {
            noFooterMt: t,
            noPt: i,
            bgColor: n,
            footerTextColor: a,
            newHeader: l,
            price: c,
            children: m,
          } = e;
          return (0, s.jsx)(r, {
            className: "Layout-container",
            css: { pt: i ? 0 : void 0 },
            children: (0, s.jsxs)(p.fL, {
              children: [
                (0, s.jsx)(d, {}),
                (0, s.jsx)(J, { price: c }),
                (0, s.jsx)(o, { children: m }),
                (0, s.jsx)(w, {
                  noFooterMt: t,
                  bgColor: n,
                  footerTextColor: a,
                }),
                (0, s.jsx)(x.Ix, {}),
                (0, s.jsx)(D, {}),
              ],
            }),
          });
        };
      let ee = (0, n.zo)("div", {
        pb: 70,
        "& .prizes-slider": {
          "&-pagination": {
            w: "initial !important",
            transform: "none !important",
            jc: "center",
            "& .swiper-pagination": {
              jc: "center",
              "&-bullet": {
                opacity: 1,
                w: 13,
                h: 13,
                flex: "0 0 13px",
                bg: "#F8F8F8",
                br: "50%",
                border: "0.3px solid $black",
                "&-active": {
                  bg: "radial-gradient(213.64% 50% at 50% 50%, #3D6494 0%, #2A4C75 100%)",
                },
              },
            },
            "@md": { d: "flex" },
          },
        },
        "& .swiper-slide": {
          w: "658px !important",
          "@sm": { w: "350px !important" },
        },
      });
      var et = i(1729),
        ei = i(2264);
      let es = (e) => [
        {
          image: "/images/index/prizes/1.png",
          title: (0, s.jsx)(c.cC, {
            i18nKey: "index.prizesNew.item1.title",
            children: (0, s.jsxs)(g.Z, {
              css: {
                mb: 15,
                fz: 36,
                fw: 800,
                textTransform: "uppercase",
                color: "#2A4C75",
                textShadow: "0px 1px 0px #13612E",
              },
              children: [
                "MALDIVES",
                " ",
                (0, s.jsx)(g.Z, {
                  as: "span",
                  css: { color: "#58B7E7", fz: 36, fw: 800 },
                  children: "Getaway",
                }),
              ],
            }),
          }),
          text: e(
            "index.prizesNew.item1.text",
            "Escape to paradise with a luxury trip to the Maldives. Stay in the best hotels, enjoy crystal-clear waters, pristine beaches, and indulge in world-class spa treatments."
          ),
        },
        {
          image: "/images/index/prizes/2.png",
          title: (0, s.jsx)(c.cC, {
            i18nKey: "index.prizesNew.item2.title",
            children: (0, s.jsxs)(g.Z, {
              css: {
                mb: 15,
                fz: 36,
                fw: 800,
                textTransform: "uppercase",
                color: "#2A4C75",
                textShadow: "0px 1px 0px #13612E",
              },
              children: [
                "Iceland Geysers",
                " ",
                (0, s.jsx)(g.Z, {
                  as: "span",
                  css: { color: "#58B7E7", fz: 36, fw: 800 },
                  children: "VIP Trip",
                }),
              ],
            }),
          }),
          text: e(
            "index.prizesNew.item2.text",
            "Experience the natural wonders of Iceland with a VIP tour of the famous geysers, hot springs, and breathtaking waterfalls. Enjoy luxurious accommodations."
          ),
        },
        {
          image: "/images/index/prizes/3.png",
          title: (0, s.jsx)(c.cC, {
            i18nKey: "index.prizesNew.item3.title",
            children: (0, s.jsxs)(g.Z, {
              css: {
                mb: 15,
                fz: 36,
                fw: 800,
                textTransform: "uppercase",
                color: "#2A4C75",
                textShadow: "0px 1px 0px #13612E",
              },
              children: [
                "YOUR OWN PRIVATE",
                " ",
                (0, s.jsx)(g.Z, {
                  as: "span",
                  css: { color: "#58B7E7", fz: 36, fw: 800 },
                  children: "YACHT",
                }),
              ],
            }),
          }),
          text: e(
            "index.prizesNew.item3.text",
            "Win a mid sized private yacht! Enjoy luxurious and private water travel with your family or friends in any part of the world, hosting parties or simply relaxing in style."
          ),
        },
        {
          image: "/images/index/prizes/4.png",
          title: (0, s.jsx)(c.cC, {
            i18nKey: "index.prizesNew.item4.title",
            children: (0, s.jsxs)(g.Z, {
              css: {
                mb: 15,
                fz: 36,
                fw: 800,
                textTransform: "uppercase",
                color: "#2A4C75",
                textShadow: "0px 1px 0px #13612E",
              },
              children: [
                "Ultimate",
                " ",
                (0, s.jsx)(g.Z, {
                  as: "span",
                  css: { color: "#58B7E7", fz: 36, fw: 800 },
                  children: "World Cruise",
                }),
              ],
            }),
          }),
          text: e(
            "index.prizesNew.item4.text",
            "Embark on the adventure of a lifetime with the Ultimate World Cruise. Visit multiple continents, immerse yourself in diverse cultures, and enjoy the top-tier amenities."
          ),
        },
      ];
      var en = i(9586),
        er = i.n(en),
        eo = (e) => {
          let {} = e,
            { t } = (0, c.$G)();
          return (0, s.jsxs)(ee, {
            children: [
              (0, s.jsx)(h.ZP, {
                children: (0, s.jsx)(R, {
                  fontWeight: 700,
                  css: {
                    ta: "center",
                    textTransform: "uppercase",
                    "@lg": { fz: "72px" },
                    "@md": { mb: "45px", fz: "48px" },
                    "@sm": { mb: "45px", fz: "36px" },
                  },
                  children: (0, s.jsxs)(c.cC, {
                    i18nKey: "index.prizesNew.title",
                    children: [
                      "BECOME A",
                      " ",
                      (0, s.jsx)("span", {
                        style: { color: "#58B7E7" },
                        children: "$WATER",
                      }),
                      " ",
                      "HOLDER ",
                      (0, s.jsx)("br", {}),
                      " – WIN HUGE PRIZES",
                    ],
                  }),
                }),
              }),
              (0, s.jsx)(g.Z, {
                css: { mb: 45, color: "#63C2FA", ta: "center", fw: 900 },
                children: t(
                  "index.prizes.text",
                  "And so much more coming soon"
                ),
              }),
              (0, s.jsxs)(f.Z, {
                css: { m: "0 auto", maxW: 2675, w: "100%" },
                children: [
                  (0, s.jsx)(et.tq, {
                    slidesPerView: "auto",
                    centeredSlides: !0,
                    spaceBetween: 24,
                    loop: !0,
                    pagination: { el: ".prizes-slider-pagination" },
                    navigation: {
                      prevEl: ".prizes-slider-arrow-left",
                      nextEl: ".prizes-slider-arrow-right",
                    },
                    modules: [ei.pt, ei.tl, ei.W_],
                    className: "prizes-slider",
                    children: es(t).map((e, t) =>
                      (0, s.jsx)(
                        et.o5,
                        {
                          children: (0, s.jsxs)(f.Z, {
                            css: {
                              h: 550,
                              br: 12,
                              overflow: "hidden",
                              "@sm": { h: "auto" },
                            },
                            children: [
                              (0, s.jsx)(f.Z, {
                                css: { pb: "53%", pos: "relative" },
                                children: (0, s.jsx)(er(), {
                                  src: e.image,
                                  alt: e.image,
                                  fill: !0,
                                  loading: "eager",
                                  quality: 100,
                                }),
                              }),
                              (0, s.jsxs)(f.Z, {
                                css: {
                                  p: "40px 24px",
                                  h: "100%",
                                  bg: "#F7F7F7",
                                  br: "15px",
                                  mt: "10px",
                                  "@sm": { p: "20px 14px" },
                                },
                                children: [
                                  e.title,
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      fz: 18,
                                      color: "#6A6A6A",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: e.text,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, s.jsxs)(f.Z, {
                    css: {
                      mt: 46,
                      d: "flex",
                      jc: "center",
                      ai: "center",
                      gap: 90,
                      "& img": { cursor: "pointer" },
                      "@sm": { mt: 24, gap: 40 },
                    },
                    children: [
                      (0, s.jsx)(er(), {
                        className: "prizes-slider-arrow-left",
                        src: "/images/index/prizes/arrow-left.png",
                        width: 67,
                        height: 52,
                        alt: "/images/index/prizes/arrow-left.png",
                      }),
                      (0, s.jsx)(f.Z, {
                        className: "prizes-slider-pagination",
                      }),
                      (0, s.jsx)(er(), {
                        className: "prizes-slider-arrow-right",
                        src: "/images/index/prizes/arrow-right.png",
                        width: 67,
                        height: 52,
                        alt: "/images/index/prizes/arrow-right.png",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      let ea = (0, n.zo)("div", {});
      var el = (e) => {
        let {} = e,
          t = (0, b.Z)(n.BC.lg);
        (0, b.Z)(n.BC.md);
        let { t: i } = (0, c.$G)();
        return (0, s.jsx)(ea, {
          id: "community",
          children: (0, s.jsx)(h.ZP, {
            children: (0, s.jsxs)(f.Z, {
              css: {
                br: "40px",
                pos: "relative",
                pt: "120px",
                "@xl": {
                  pt: 50,
                  backgroundImage: "url(/images/index/join/bg-mob.png)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                },
              },
              children: [
                !t &&
                  (0, s.jsx)(u.Z, {
                    src: "/images/index/join/bg.png",
                    alt: "background",
                    fill: !0,
                    css: { "& img": { br: "40px" } },
                  }),
                t &&
                  (0, s.jsx)(u.Z, {
                    src: "/images/index/join/glass.png",
                    width: 261,
                    height: 340,
                    alt: "glass",
                    css: {
                      m: "0 auto",
                      pos: "absolute",
                      b: 0,
                      l: "50%",
                      transform: "translateX(-50%)",
                    },
                  }),
                (0, s.jsxs)(f.Z, {
                  css: { pos: "relative", zi: 5 },
                  children: [
                    (0, s.jsx)(f.Z, {
                      css: { pos: "relative" },
                      children: (0, s.jsx)(R, {
                        text: i("index.join.title", "Community Drink together"),
                        fontSize: "titleLg",
                        css: {
                          maxWidth: "1100px",
                          margin: "0 auto 38px",
                          ta: "center",
                          textTransform: "uppercase",
                          textShadow: "3px 5px 0px #375E8B",
                          color: "#FFF",
                          "@sm": { p: "0 12px" },
                        },
                      }),
                    }),
                    (0, s.jsxs)(f.Z, {
                      css: {
                        pb: "173px",
                        d: "flex",
                        gap: "12px",
                        jc: "center",
                        "@xl": { pb: "400px" },
                        "@md": { fd: "column", ai: "center" },
                      },
                      children: [
                        (0, s.jsx)("a", {
                          href: "https://x.com/WaterMemeCoin",
                          target: "_blank",
                          children: (0, s.jsxs)(B.Z, {
                            background: "blue",
                            children: [
                              (0, s.jsx)(u.Z, {
                                src: "/images/index/join/twitter.svg",
                                alt: "twitter",
                                width: 22,
                                height: 18,
                                css: { mr: 8 },
                              }),
                              (0, s.jsx)(g.Z, {
                                css: { textTransform: "uppercase", fw: 900 },
                                children: "Twitter",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("a", {
                          href: "https://t.me/watersolmeme",
                          target: "_blank",
                          children: (0, s.jsxs)(B.Z, {
                            background: "violet",
                            children: [
                              (0, s.jsx)(u.Z, {
                                src: "/images/index/join/telegram.svg",
                                alt: "discord",
                                width: 24,
                                height: 18,
                                css: { mr: 8 },
                              }),
                              (0, s.jsx)(g.Z, {
                                css: { textTransform: "uppercase", fw: 900 },
                                children: "TELEGRAM",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("a", {
                          href: "https://www.instagram.com/watermemecoin",
                          target: "_blank",
                          children: (0, s.jsx)(B.Z, {
                            css: {
                              border: "3px solid $black",
                              bg: "#F96D6D",
                              textTransform: "uppercase",
                              p: "0px 10px",
                              boxShadow: "rgb(0, 0, 0) 0px -5px 0px 0px inset",
                            },
                            children: (0, s.jsx)(g.Z, {
                              css: { textTransform: "uppercase", fw: 900 },
                              children: "INSTAGRAM",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      let ec = (0, n.zo)("div", { mb: 100 }),
        ed = (e) => [
          {
            title: e(
              "index.waterProducts.items.item1.title",
              "African Health Mission"
            ),
            text: e(
              "index.waterProducts.items.item1.text",
              "The struggle for clear water never ends, especially with global warming. We aim for sustainable projects that prevent deforestation and help with Water Distribution in the dryest parts of Africa!"
            ),
          },
          {
            title: e(
              "index.waterProducts.items.item2.title",
              "DONATE $WATER NFT Series"
            ),
            text: e(
              "index.waterProducts.items.item2.text",
              "The $WATER NFT Series is a way to be a charitable person and have a chance to earn even more than you donated! Being a great person should be rewarded!"
            ),
          },
          {
            title: e(
              "index.waterProducts.items.item3.title",
              "FREEZING AND VAPORIZING $WATER"
            ),
            text: e(
              "index.waterProducts.items.item3.text",
              "$WATER introduces a unique and engaging game mechanic inspired by the states of water—Freezing (Unique staking system) and Vaporizing (Regular burning events with charity and rewards)."
            ),
          },
        ];
      var ex = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsx)(ec, {
          children: (0, s.jsxs)(h.ZP, {
            children: [
              (0, s.jsx)(R, {
                centered: !0,
                noStroke: !0,
                color: "titleSecondary",
                css: { maxW: 653, w: "100%", mb: 72, tt: "uppercase" },
                children: t(
                  "index.waterProducts.title",
                  "$Water Future Products"
                ),
              }),
              (0, s.jsx)(f.Z, {
                css: {
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "32px",
                  "@lg": { gridTemplateColumns: "repeat(1, 1fr)" },
                },
                children: ed(t).map((e, i) =>
                  (0, s.jsxs)(
                    f.Z,
                    {
                      css: {
                        p: 13,
                        pb: 38,
                        minH: 634,
                        d: "flex",
                        fd: "column",
                        jc: "space-between",
                        ta: "center",
                        br: 12,
                        border: "3px solid $black",
                        boxShadow: "0px -5px 0px 0px #000 inset",
                        "@sm": { minH: "initial" },
                      },
                      children: [
                        (0, s.jsxs)(f.Z, {
                          children: [
                            (0, s.jsx)(u.Z, {
                              src: "/images/index/water-products/".concat(
                                i + 1,
                                ".png"
                              ),
                              width: 422,
                              height: 278,
                              alt: "img",
                              css: { m: "0 auto", mb: 28 },
                            }),
                            (0, s.jsx)(g.Z, {
                              css: {
                                mb: 9,
                                fz: 36,
                                color: "#2A4C75",
                                tt: "uppercase",
                                fw: 800,
                                "@sm": { fz: 24 },
                              },
                              children: e.title,
                            }),
                            (0, s.jsx)(g.Z, {
                              centered: !0,
                              css: {
                                mb: 30,
                                maxW: 341,
                                w: "100%",
                                fz: 18,
                                fw: 400,
                                color: "$black",
                              },
                              children: e.text,
                            }),
                          ],
                        }),
                        (0, s.jsx)(B.Z, {
                          disabled: !0,
                          css: {
                            m: "0 auto",
                            br: 12,
                            border: "3px solid $black",
                            boxShadow: "0px -5px 0px 0px #000 inset",
                            textTransform: "uppercase",
                            color: "$black",
                            p: "0px 10px",
                            bg: "$white",
                            d: "flex",
                            ai: "center",
                            minH: "62px",
                          },
                          children: (0, s.jsx)(g.Z, {
                            css: { color: "$black" },
                            children: t("common.comingSoon", "Coming soon"),
                          }),
                        }),
                      ],
                    },
                    e.title
                  )
                ),
              }),
            ],
          }),
        });
      };
      let ep = (0, n.zo)("div", {
        mb: 100,
        pos: "relative",
        h: 2522,
        "@lg": { mb: 70, h: 2440 },
      });
      var em = (e) => {
        let {} = e,
          t = (0, b.Z)(n.BC.lg),
          { i18n: i } = (0, c.$G)(),
          r = t
            ? "" === i.language
              ? "/images/index/roadmap/mob-en.png"
              : "/images/index/roadmap/mob-".concat(i.language, ".png")
            : "" === i.language
            ? "/images/index/roadmap/desk-en.png"
            : "/images/index/roadmap/desk-".concat(i.language, ".png");
        return (0, s.jsx)(ep, {
          id: "roadmap",
          children: (0, s.jsx)(u.Z, {
            loading: "eager",
            unoptimized: !0,
            src: r,
            ...(t
              ? { width: 375, height: 2440 }
              : { width: 1675, height: 2522 }),
            alt: r,
            responsive: !1,
            css: {
              m: "0 auto",
              zi: 2,
              h: "100%",
              objectFit: "cover",
              pos: "absolute",
              l: "50%",
              transform: "translateX(-50%)",
              "& img": {
                zi: 2,
                h: "100%",
                objectFit: "cover",
                pos: "absolute",
                l: "50%",
                transform: "translateX(-50%)",
              },
            },
          }),
        });
      };
      let eh = (0, n.zo)("div", { mt: 3, pos: "relative", "@sm": { h: 726 } });
      var eg = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsxs)(eh, {
          children: [
            (0, s.jsx)(u.Z, {
              src: "/images/index/hero/title-img.png",
              width: 1053,
              height: 393,
              alt: "/title-img",
              css: {
                pos: "absolute",
                t: 156,
                l: "50%",
                transform: "translateX(-50%)",
                "@sm": { p: "0 10px", t: 122 },
              },
            }),
            (0, s.jsx)(h.ZP, {
              css: {
                maxW: 1651,
                minH: 880,
                backgroundImage: "url(/images/index/hero/bg-desk.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",
                br: 6,
                "@sm": {
                  minH: 726,
                  backgroundImage: "url(/images/index/hero/bg-mob.png)",
                },
              },
            }),
          ],
        });
      };
      let ef = (0, n.zo)("div", { mt: -100, mb: 110, pos: "relative" }),
        eu = () => [
          {
            title: (0, s.jsx)(g.Z, {
              color: "black",
              fontWeight: 700,
              css: { mb: 5, "& span": { color: "#58B7E7" } },
              children: (0, s.jsx)(c.cC, {
                i18nKey: "index.get.items.item1.title",
                children: "PREPARE A WALLET",
              }),
            }),
            text: (0, s.jsx)(g.Z, {
              color: "black",
              css: {
                fz: "$sm",
                ff: "var(--font-secondary)",
                lineHeight: "24px",
                "& span": { color: "#58B7E7" },
              },
              children: (0, s.jsxs)(c.cC, {
                i18nKey: "index.get.items.item1.text",
                children: [
                  "The potential $WATER holder should have a Solana-based wallet to operate with NFT and cryptocurrencies.",
                  (0, s.jsx)("span", { children: "Phantom Wallet" }),
                  " works perfectly fine.",
                ],
              }),
            }),
          },
          {
            title: (0, s.jsx)(g.Z, {
              color: "black",
              fontWeight: 700,
              css: { mb: 5, "& span": { color: "#58B7E7" } },
              children: (0, s.jsx)(c.cC, {
                i18nKey: "index.get.items.item2.title",
                children: "BUY SOLANA",
              }),
            }),
            text: (0, s.jsxs)(g.Z, {
              color: "black",
              css: {
                fz: "$sm",
                ff: "var(--font-secondary)",
                lineHeight: "24px",
                "& span.blue": { color: "#58B7E7" },
                "& a": {
                  d: "inline-block",
                  color: "#58B7E7",
                  textDecoration: "underline",
                  "& img": { verticalAlign: "middle" },
                },
              },
              children: [
                (0, s.jsx)(c.cC, {
                  i18nKey: "index.get.items.item2.text1",
                  children:
                    "To participate you need to have $SOL on your wallet. You can buy that on any CEX or exchange like",
                }),
                " ",
                (0, s.jsxs)("a", {
                  href: "https://binance.com",
                  target: "_blank",
                  children: [
                    (0, s.jsx)(u.Z, {
                      src: "/images/index/get/items/binance.svg",
                      width: 24,
                      height: 24,
                      responsive: !1,
                      alt: "binance",
                    }),
                    " ",
                    "Binance",
                  ],
                }),
                ",",
                " ",
                (0, s.jsxs)("a", {
                  href: "https://www.okx.com",
                  target: "_blank",
                  children: [
                    (0, s.jsx)(u.Z, {
                      src: "/images/index/get/items/okx.png",
                      width: 24,
                      height: 24,
                      responsive: !1,
                      alt: "binance",
                    }),
                    " ",
                    "OKX",
                  ],
                }),
                ",",
                " ",
                (0, s.jsxs)("a", {
                  href: "https://www.bitpanda.com",
                  target: "_blank",
                  children: [
                    (0, s.jsx)(u.Z, {
                      src: "/images/index/get/items/bitpanda.png",
                      width: 24,
                      height: 24,
                      responsive: !1,
                      alt: "binance",
                    }),
                    " ",
                    "Bitpanda",
                  ],
                }),
                ",",
                " ",
                (0, s.jsxs)("a", {
                  href: "https://www.crypto.com",
                  target: "_blank",
                  children: [
                    (0, s.jsx)(u.Z, {
                      src: "/images/index/get/items/cryptocom.png",
                      width: 24,
                      height: 24,
                      responsive: !1,
                      alt: "binance",
                    }),
                    " ",
                    "Crypto.com",
                  ],
                }),
                (0, s.jsx)(c.cC, {
                  i18nKey: "index.get.items.item2.text2",
                  children: ", or anything else and send it to your wallet.",
                }),
              ],
            }),
          },
          {
            title: (0, s.jsx)(g.Z, {
              color: "black",
              fontWeight: 700,
              css: { mb: 5, "& span": { color: "#58B7E7" } },
              children: (0, s.jsxs)(c.cC, {
                i18nKey: "index.get.items.item3.title",
                children: ["BUY ", (0, s.jsx)("span", { children: "$WATER" })],
              }),
            }),
            text: (0, s.jsxs)(f.Z, {
              children: [
                (0, s.jsx)(g.Z, {
                  color: "black",
                  css: {
                    mb: 10,
                    fz: "$sm",
                    ff: "var(--font-secondary)",
                    lineHeight: "24px",
                    "& span": { color: "#58B7E7" },
                  },
                  children: (0, s.jsxs)(c.cC, {
                    i18nKey: "index.get.items.item3.text",
                    children: [
                      "After that, you should send up to 50 $SOL from THE WALLET to the specified Presale address that will appear on the website ",
                      (0, s.jsx)("span", { children: "" }),
                      " within 72 hours from the start of the Presale.",
                    ],
                  }),
                }),
                (0, s.jsx)(g.Z, {
                  css: {
                    color: "#CE0B0B",
                    fz: "14px",
                    fw: 600,
                    ff: "var(--font-secondary)",
                  },
                  children: (0, s.jsx)(c.cC, {
                    i18nKey: "index.get.items.item3.warning",
                    children:
                      "Presale goes until the Presale Cap Limit of 55,555 SOL. Any transaction after the announcement of the Presale end deemed to be lost forever.",
                  }),
                }),
              ],
            }),
          },
          {
            title: (0, s.jsx)(g.Z, {
              color: "black",
              fontWeight: 700,
              css: { mb: 5, "& span": { color: "#58B7E7" } },
              children: (0, s.jsxs)(c.cC, {
                i18nKey: "index.get.items.item4.title",
                children: [
                  "ADD ",
                  (0, s.jsx)("span", { children: "$WATER" }),
                  " to your wallet",
                ],
              }),
            }),
            text: (0, s.jsxs)(f.Z, {
              children: [
                (0, s.jsx)(g.Z, {
                  color: "black",
                  css: {
                    fz: "$sm",
                    ff: "var(--font-secondary)",
                    lineHeight: "24px",
                    "& span, a": { color: "#58B7E7" },
                  },
                  children: (0, s.jsxs)(c.cC, {
                    i18nKey: "index.get.items.item4.text",
                    children: [
                      "Listing happens within 24 hours after the presale has ended. TGE starts the moment the token is listed.",
                      " ",
                      (0, s.jsxs)("b", {
                        children: [
                          "Have a question - ",
                          (0, s.jsx)("a", {
                            href: "/app/",
                            children: "Read WIKI",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(u.Z, {
                  src: "/images/index/get/items/4-img.png",
                  width: 372,
                  height: 192,
                  alt: "4-img",
                  css: { mt: 30, transform: "scale(1.15)" },
                }),
              ],
            }),
          },
        ],
        eb = N()(() => i.e(109).then(i.bind(i, 1109)), {
          loadableGenerated: { webpack: () => [1109] },
          ssr: !1,
        });
      var ew = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        (0, b.Z)(n.BC.xl);
        let [i, r] = (0, j.useState)(!1),
          o = t("", "PRESALE PARTICIPANTS WHO SENT SOL TO PRESALE ADDRESS CAN NOW CLAIM $WATER TO THEIR WALLET. ALL $BEER HOLDERS ARE ALSO ELIGIBLE FOR $WATER AIRDROP"),
          a = i ? t("common.copied", "Copied") : t("common.copy", "Copy"),
          l = () => {
            navigator.clipboard.writeText(o), r(!0);
          };
        return (0, s.jsx)(ef, {
          children: (0, s.jsxs)(h.ZP, {
            css: { pos: "relative" },
            children: [
              (0, s.jsx)(u.Z, {
                src: "/images/index/get/glass.png",
                width: 299,
                height: 402,
                responsive: !1,
                alt: "glass",
                css: {
                  pos: "absolute",
                  t: -350,
                  l: "50%",
                  transform: "translateX(-50%)",
                  zi: 2,
                  "@sm": { w: 227, h: 305, t: -260 },
                },
              }),
              (0, s.jsxs)(f.Z, {
                css: {
                  p: "80px 26px 28px 26px",
                  bg: "#F5FAFB",
                  br: 21,
                  boxShadow: "0px 4px 0px 0px #649AC0",
                  pos: "relative",
                  "@sm": {
                    p: "80px 14px 28px 14px",
                    d: "flex",
                    fd: "column",
                    ai: "center",
                  },
                },
                children: [
                  (0, s.jsx)(u.Z, {
                    src: "/images/index/get/badge.svg",
                    width: 337,
                    height: 77,
                    responsive: !1,
                    alt: "badge",
                    css: {
                      pos: "absolute",
                      d: "inline-block",
                      t: -33,
                      l: -10,
                      zi: 2,
                      "@sm": { t: 60 },
                    },
                  }),
                  (0, s.jsxs)(f.Z, {
                    css: {
                      mb: 40,
                      d: "flex",
                      jc: "space-between",
                      ai: "flex-end",
                      "@xl": { fd: "column", ai: "center", ta: "center" },
                      "@sm": { mt: 70 },
                    },
                    children: [
                      (0, s.jsx)(R, {
                        css: {
                          mb: 0,
                          textTransform: "uppercase",
                          "& span": { color: "#58B7E7" },
                        },
                        children: (0, s.jsxs)(c.cC, {
                          i18nKey: "index.get.title",
                          children: [
                            "Claim ",
                            (0, s.jsx)("span", { children: "$WATER" }),
                            " ",
                            (0, s.jsx)("br", {}),
                            " in 4 simple steps",
                          ],
                        }),
                      }),
                      (0, s.jsx)(g.Z, {
                        css: {
                          maxW: 696,
                          textTransform: "uppercase",
                          fz: 20,
                          color: "$black",
                          fw: 600,
                        },
                        children: t(
                          "index.hero.subtitle",
                          "Welcome to Project Water, a revolutionary meme coin initiative emphasizing purity, life, and transparency. $WATER stands out for its commitment to a cleaner and more ethical approach to cryptocurrency."
                        ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(f.Z, {
                    css: {
                      d: "flex",
                      jc: "space-between",
                      gap: 24,
                      "@xl": { w: "100%", fd: "column" },
                    },
                    children: [
                      (0, s.jsxs)(f.Z, {
                        id: "presale",
                        css: {
                          w: "100%",
                          p: 40,
                          bg: "#2A4C75",
                          border: "1px solid #40BEFF",
                          br: 14,
                          "@xl": { p: "24px 15px", ta: "center" },
                        },
                        children: [
                          (0, s.jsxs)(f.Z, {
                            css: {
                              mb: 16,
                              p: 27,
                              bg: "#213D5E",
                              br: 12,
                              d: "flex",
                              fd: "column",
                              ai: "center",
                            },
                            children: [
                              (0, s.jsx)(g.Z, {
                                fontSize: "xxl",
                                color: "white",
                                textTransform: "uppercase",
                                css: { mb: 22, fw: 600 },
                                children: t(
                                  "",
                                  "Presale claim details"
                                ),
                              }),

                              (0, s.jsx)(eb, {}),
                              (0, s.jsxs)(f.Z, {
                                css: {
                                  m: "0 auto",
                                  mt: 20,
                                  p: "19px 19px 19px 25px",
                                  w: "100%",
                                  d: "flex",
                                  jc: "space-between",
                                  ai: "center",
                                  bg: "#E8F9FF",
                                  border: "1px solid #40BEFF",
                                  br: 52,
                                  "@md": { mb: 24, p: 18, maxW: 297 },
                                },
                                children: [
                                  (0, s.jsx)(g.Z, {
                                    color: "titlePrimary",
                                    fontWeight: 600,
                                    css: {
                                      ta: "center",
                                      overflowWrap: "anywhere",
                                      fz: "$md",
                                      "@md": { fz: "$md" },
                                    },
                                    children: o,
                                  })
                                ],
                              }),
                              (0, s.jsx)(B.Z, {
                                href: "/app/",
                                isExternal: !0,
                                css: {
                                  m: "0 auto",
                                  br: 12,
                                  border: "3px solid $black",
                                  boxShadow: "0px -5px 0px 0px #000 inset",
                                  textTransform: "uppercase",
                                  color: "$black",
                                  p: "0px 10px",
                                  bg: "$white",
                                  d: "flex",
                                  ai: "center",
                                  minH: "62px",
                                  marginTop: "20px"
                                },
                                children: (0, s.jsx)(g.Z, {
                                  css: { color: "$black", fw: 700 },
                                  children: t("", "CLAIM $WATER"),
                                }),
                              }),
                              
                            ],
                          }),
                          (0, s.jsxs)(g.Z, {
                            centered: !0,
                            fontSize: "lg",
                            color: "white",
                            textTransform: "uppercase",
                            css: {
                              mb: 10,
                              pos: "relative",
                              fw: 600,
                              "@xl": { maxW: 230 },
                            },
                            children: [
                              (0, s.jsx)(u.Z, {
                                src: "/images/index/get/presale-details/water-drops-left.svg",
                                width: 29,
                                height: 15,
                                responsive: !1,
                                alt: "water-drops-left",
                                css: {
                                  "@xl": { pos: "absolute", l: -5, t: 5 },
                                },
                              }),
                              " ",
                              t(
                                "index.hero.presaleDetails.title2",
                                "More TOKENS EVERY ROUNDS"
                              ),
                              " ",
                              (0, s.jsx)(u.Z, {
                                src: "/images/index/get/presale-details/water-drops-right.svg",
                                width: 29,
                                height: 15,
                                responsive: !1,
                                alt: "water-drops-right",
                                css: {
                                  "@xl": { pos: "absolute", r: -5, t: 5 },
                                },
                              }),
                            ],
                          }),
                          (0, s.jsx)(g.Z, {
                            centered: !0,
                            fontSize: "md",
                            color: "white",
                            css: { mb: 32, maxW: 415, opacity: 0.7 },
                            children: t(
                              "index.hero.presaleDetails.text1",
                              "Presale last for 72 hours and staged into 5 rounds, 7B $WATER each presale round"
                            ),
                          }),
                          (0, s.jsxs)(f.Z, {
                            css: { maxW: "650px", w: "100%", m: "0 auto" },
                            children: [
                              (0, s.jsxs)(f.Z, {
                                css: {
                                  d: "flex",
                                  jc: "space-between",
                                  ai: "center",
                                  mb: 7,
                                },
                                children: [
                                  (0, s.jsxs)(g.Z, {
                                    css: {
                                      color: "#88FF9E",
                                      ff: "var(--font-secondary)",
                                    },
                                    children: ["55 000", " $SOL"],
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#88FF9E",
                                      ff: "var(--font-secondary)",
                                    },
                                    children: "55 000 $SOL",
                                  }),
                                ],
                              }),
                              (0, s.jsx)(f.Z, {
                                css: {
                                  w: "100%",
                                  br: 9,
                                  bg: "rgba(50, 209, 209, 0.2)",
                                },
                                children: (0, s.jsx)(f.Z, {
                                  css: {
                                    maxW: "".concat(100, "%"),
                                    bg: "#66DD7C",
                                    br: 9,
                                    p: "5px 40px 5px 10px",
                                  },
                                  children: (0, s.jsxs)(g.Z, {
                                    css: {
                                      textShadow:
                                        "0px 2px 0.9px rgba(0, 0, 0, 0.25)",
                                      ff: "var(--font-secondary)",
                                      ta: "center",
                                      d: "flex",
                                    },
                                    children: [100, "%"],
                                  }),
                                }),
                              }),
                              (0, s.jsxs)(f.Z, {
                                css: {
                                  d: "flex",
                                  ai: "center",
                                  jc: "center",
                                  mt: 19,
                                  mb: 19,
                                  ta: "center",
                                },
                                children: [
                                  (0, s.jsx)(g.Z, {
                                    css: { fz: "24px", fw: 800 },
                                    children: t(
                                      "common.currentBonus",
                                      "Current bonus:"
                                    ),
                                  }),
                                  (0, s.jsxs)(f.Z, {
                                    css: { d: "flex", ai: "center" },
                                    children: [
                                      (0, s.jsx)(g.Z, {
                                        css: {
                                          fz: "24px",
                                          ff: "var(--font-secondary)",
                                          fw: 700,
                                        },
                                        children: "+35%",
                                      }),
                                      (0, s.jsx)(u.Z, {
                                        src: "/images/favicon.ico",
                                        alt: "glass",
                                        width: 27,
                                        height: 27,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)(f.Z, {
                                css: {
                                  d: "flex",
                                  ai: "center",
                                  jc: "center",
                                  mb: 10,
                                  ta: "center",
                                },
                                children: (0, s.jsx)(g.Z, {
                                  css: {
                                    color: "#FFED97",
                                    ff: "var(--font-secondary)",
                                    fw: 900,
                                  },
                                  children: t(
                                    "index.getWater.min",
                                    "Min. investment per wallet - 0.1 $SOL"
                                  ),
                                }),
                              }),
                              (0, s.jsx)(f.Z, {
                                css: {
                                  d: "flex",
                                  ai: "center",
                                  jc: "center",
                                  ta: "center",
                                },
                                children: (0, s.jsx)(g.Z, {
                                  css: {
                                    color: "#FFED97",
                                    ff: "var(--font-secondary)",
                                    fw: 900,
                                  },
                                  children: t(
                                    "index.getWater.max",
                                    "Max. investment per wallet - 200 $SOL"
                                  ),
                                }),
                              }),
                              (0, s.jsx)(f.Z, {
                                css: {
                                  d: "flex",
                                  ai: "center",
                                  jc: "center",
                                  ta: "center",
                                  maxW: "550px",
                                  m: "0 auto",
                                },
                                children: (0, s.jsx)(g.Z, {
                                  css: { ff: "var(--font-secondary)", mt: 36 },
                                  children: t(
                                    "",
                                    "*Tokens purchased on the presale are NOT subject to vesting and have 100% unlock on TGE."
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(f.Z, {
                        css: {
                          maxW: 768,
                          w: "100%",
                          display: "grid",
                          gridTemplateColumns: "repeat(2, 1fr)",
                          gap: 24,
                          "@xl": {
                            maxW: "100%",
                            w: "100%",
                            gridTemplateColumns: "repeat(1, 1fr)",
                          },
                        },
                        children: eu().map((e, t) =>
                          (0, s.jsxs)(
                            f.Z,
                            {
                              css: {
                                p: 22,
                                bg: "$white",
                                border: "1px solid #40BEFF",
                                br: 14,
                              },
                              children: [
                                (0, s.jsx)(f.Z, {
                                  css: {
                                    h: 48,
                                    w: 48,
                                    br: 9,
                                    border: "1px solid #000",
                                    boxShadow:
                                      "0px -3.2px 0px 0px #C4C4C4 inset",
                                    d: "flex",
                                    jc: "center",
                                    ai: "center",
                                    mb: 11,
                                  },
                                  children: (0, s.jsx)(g.Z, {
                                    css: { color: "#718CAB", fz: 16, fw: 700 },
                                    children: t + 1,
                                  }),
                                }),
                                (0, s.jsxs)(f.Z, {
                                  css: { maxW: 312 },
                                  children: [e.title, e.text],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),

                    ],
                  }),
                  (0, s.jsx)(g.Z, {
                    centered: !0,
                    color: "black",
                    css: { mt: 30, fz: 20, "& span": { color: "#CE0B0B" } },
                    children: (0, s.jsxs)(c.cC, {
                      i18nKey: "index.presale.warning",
                      children: [
                        (0, s.jsx)("span", {
                          children:
                            "Any transactions to presale wallet from from CEX will be deemed lost forever and nonrefundable",
                        }),
                        ".",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let ej = (0, n.zo)("div", {}),
        ey = (e) => [
          {
            title: e(
              "index.charity.items.item1.title",
              "Dedicated Charity Wallet"
            ),
            text: e(
              "index.charity.items.item1.text",
              "For the sake of transparency, we will have a separate, publicly known wallet address to use for charity donations and any campaigns aimed to achieve the greater good!"
            ),
          },
          {
            title: e(
              "index.charity.items.item2.title",
              "Sustainable opportunities and interesting Plans"
            ),
            text: e(
              "index.charity.items.item2.text",
              "Unlike many memecoins that lack universal value, $WATER stands out with a clear purpose. Our token exists to ensure fair asset redistribution among holders while also supporting charitable causes. With $WATER, you can contribute to helping others without any personal loss."
            ),
          },
          {
            title: e(
              "index.charity.items.item3.title",
              "Rapid Growth and Strong Marketing"
            ),
            text: e(
              "index.charity.items.item3.text",
              "As it already happened, we are constantly improving the approach and financial balancing models to unlock untapped potential of $WATER with outstanding Marketing and Performance"
            ),
          },
        ];
      var ev = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsx)(ej, {
          id: "utility",
          children: (0, s.jsxs)(h.ZP, {
            css: {
              mb: 100,
              pt: 74,
              pb: 88,
              backgroundImage: "url(/images/index/charity/bg.png)",
              backgroundColor:
                "linear-gradient(180deg, #FFF 0%, #F5FAFB 67.66%)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              boxShadow: "0px 4px 0px 0px #649AC0",
              br: 21,
            },
            children: [
              (0, s.jsx)(R, {
                centered: !0,
                css: { mb: 20, textTransform: "uppercase", maxW: 600 },
                children: (0, s.jsxs)(c.cC, {
                  i18nKey: "index.charity.title",
                  children: [
                    (0, s.jsx)("span", { children: "$Water" }),
                    " is a CHARITY Token",
                  ],
                }),
              }),
              (0, s.jsx)(g.Z, {
                color: "titleSecondary",
                centered: !0,
                css: { maxW: 612, w: "100%", ff: "var(--font-secondary)" },
                children: t(
                  "index.charity.text",
                  "$WATER is something that is essential for everyone, and to underline this idea, we created a way not only make profits, but give an opportunity to share that for the sake of charity."
                ),
              }),
              (0, s.jsx)(u.Z, {
                src: "/images/index/charity/img.png",
                width: 760,
                height: 552,
                alt: "img",
                css: {
                  m: "0 auto",
                  mt: 20,
                  mb: 70,
                  "@lg": { mt: 30, transform: "scale(1.2)" },
                },
              }),
              (0, s.jsx)(f.Z, {
                css: {
                  d: "flex",
                  jc: "space-between",
                  gap: 10,
                  "@lg": { fd: "column", ai: "center" },
                },
                children: ey(t).map((e, t) =>
                  (0, s.jsxs)(
                    f.Z,
                    {
                      css: { maxW: 550, w: "100%", ta: "center" },
                      children: [
                        (0, s.jsxs)(g.Z, {
                          css: {
                            mb: 34,
                            color: "#63C2FA",
                            fz: 64,
                            fw: 800,
                            "@sm": { mb: 15, fz: 30 },
                          },
                          children: ["0", t + 1],
                        }),
                        (0, s.jsx)(g.Z, {
                          css: {
                            mb: 25,
                            fz: 40,
                            fw: 800,
                            tt: "uppercase",
                            color: "#2A4C75",
                            "@sm": { fz: 26 },
                          },
                          children: e.title,
                        }),
                        (0, s.jsx)(g.Z, {
                          css: {
                            mb: 25,
                            ff: "var(--font-secondary)",
                            color: "#2A4C75",
                            fz: 20,
                          },
                          children: e.text,
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      };
      let eZ = (0, n.zo)("div", {
          mt: -300,
          "@lg": { mt: 400 },
          "@sm": { mt: 100 },
        }),
        ez = (0, n.zo)("div", {});
      var ek = (e) => {
        let { text: t, css: i, lgCss: n } = e,
          { t: r } = (0, c.$G)();
        return (0, s.jsx)(ez, {
          css: {
            p: "8px 36px",
            w: "fit-content",
            h: 80,
            pos: "absolute",
            d: "flex",
            ai: "center",
            jc: "center",
            border: "3px solid #2A4C75",
            br: 94,
            boxShadow:
              "-3px 5px 0px 0px #2A4C75, 0px -5px 0px 0px #2A4C75 inset",
            bg: "$white",
            backgroundImage: "url(/images/index/benefits/item-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            ta: "center",
            ...i,
            "@lg": {
              p: "14px 24px",
              pos: "initial",
              boxShadow:
                "-3px 5px 0px 0px #2A4C75, 0px -5px 0px 0px #2A4C75 inset",
              ...n,
            },
          },
          children: (0, s.jsx)(g.Z, {
            color: "titleSecondary",
            css: {
              fz: 20,
              ff: "var(--font-secondary)",
              fw: 700,
              "@lg": { fz: 18 },
            },
            children: t,
          }),
        });
      };
      let eC = (e) => [
        {
          title: e("index.benefits.items.item1.title", "No Perpetuals"),
          text: e(
            "index.benefits.items.item1.text",
            "To prevent market manipulation, we avoid perpetual contracts at the beginning stage of the project, reducing volatility."
          ),
          color: "#57BB7A",
        },
        {
          title: e("index.benefits.items.item2.title", "Heavy Presale Limits:"),
          text: e(
            "index.benefits.items.item2.text",
            "Limited to 100 Solana (SOL) per wallet. Each wallet can invest up to 100 SOL."
          ),
          color: "#6EC7FC",
        },
        {
          title: e(
            "index.benefits.items.item3.title",
            "Pre-agreed top listings:"
          ),
          text: e(
            "index.benefits.items.item3.text",
            "We have several listings pre-agreed with top tier exchanges with amazing liquidity and features."
          ),
          color: "#BF8DFF",
        },
        {
          title: e(
            "index.benefits.items.item4.title",
            "Vested partners & KOLs"
          ),
          text: e(
            "index.benefits.items.item4.text",
            "All of our top partners & KOLs are limited with publicly visible tokens vesting. This ensures a long-term involvement."
          ),
          color: "#F79422",
        },
      ];
      var eS = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsxs)(eZ, {
          id: "features",
          children: [
            (0, s.jsxs)(h.ZP, {
              css: {
                minH: 895,
                pos: "relative",
                "@lg": { d: "flex", fd: "column", ai: "center" },
                "@sm": { minH: "initial" },
              },
              children: [
                (0, s.jsx)(ek, {
                  text: t("index.benefits.item1.text", "You Drink it everyday"),
                  css: { t: 302, l: "10%", transform: "rotate(13.161deg)" },
                  lgCss: { mb: 35, ml: 100 },
                }),
                (0, s.jsx)(ek, {
                  text: t(
                    "index.benefits.item2.text",
                    "Is the vital component of life in our universe"
                  ),
                  css: {
                    maxW: 350,
                    t: 345,
                    r: 100,
                    transform: "rotate(-7.117deg)",
                  },
                  lgCss: { mr: 100, maxW: 218 },
                }),
                (0, s.jsx)(f.Z, {
                  css: { pt: 350, "@lg": { pt: 41 } },
                  children: (0, s.jsxs)(f.Z, {
                    css: { m: "0 auto", pos: "relative", w: "fit-content" },
                    children: [
                      (0, s.jsx)(u.Z, {
                        src: "/images/index/benefits/left-title-icon.svg",
                        width: 65,
                        height: 100,
                        responsive: !1,
                        alt: "left-title-icon.svg",
                        css: { pos: "absolute", t: 0, l: 0, "@sm": { l: -15 } },
                      }),
                      (0, s.jsx)(u.Z, {
                        src: "/images/index/benefits/right-title-icon.svg",
                        width: 65,
                        height: 100,
                        responsive: !1,
                        alt: "right-title-icon.svg",
                        css: { pos: "absolute", t: 0, r: 0, "@sm": { r: -15 } },
                      }),
                      (0, s.jsx)(R, {
                        centered: !0,
                        css: { mb: 20, textTransform: "uppercase" },
                        children: (0, s.jsxs)(c.cC, {
                          i18nKey: "index.benefits.title",
                          children: [
                            "Key Features: ",
                            (0, s.jsx)("br", {}),
                            (0, s.jsx)("span", { children: "$WaterCoin" }),
                          ],
                        }),
                      }),
                      (0, s.jsx)(g.Z, {
                        centered: !0,
                        color: "titleSecondary",
                        css: {
                          mb: 37,
                          maxW: 612,
                          fz: "$sm",
                          ff: "var(--font-secondary)",
                        },
                        children: (0, s.jsx)(c.cC, {
                          i18nKey: "index.benefits.text",
                          children:
                            "Our goal is to create the cleanest and most ethical platform in the crypto space, treating our community with fairness and transparency.",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(ek, {
                  text: t(
                    "index.benefits.item3.text",
                    "Tastes great when you are thirsty"
                  ),
                  css: { b: 230, l: 100, transform: "rotate(-8deg)" },
                  lgCss: { mr: 40, mb: 50 },
                }),
                (0, s.jsx)(ek, {
                  text: t(
                    "index.benefits.item4.text",
                    "Scarce, same as Bitcoin"
                  ),
                  css: { t: 460, l: 100 },
                  lgCss: { ml: 100, mb: 50 },
                }),
                (0, s.jsx)(ek, {
                  text: t(
                    "index.benefits.item5.textNew",
                    "You definitely need some WATER after you had too much alcohol"
                  ),
                  css: {
                    maxW: 420,
                    b: 288,
                    r: 50,
                    transform: "rotate(5.293deg)",
                  },
                  lgCss: { transform: "rotate(10.111deg)" },
                }),
              ],
            }),
            (0, s.jsx)(h.ZP, {
              css: {
                transform: "translateY(-200px)",
                "@lg": { transform: "translateY(0px)", mb: 100 },
                "@sm": { mt: 70 },
              },
              children: (0, s.jsxs)(f.Z, {
                css: {
                  display: "flex",
                  m: "50px auto 0",
                  jc: "center",
                  gap: 24,
                  "@lg": { fd: "column" },
                },
                children: [
                  (0, s.jsxs)(f.Z, {
                    css: {
                      p: 22,
                      minH: 230,
                      bg: "#FFF",
                      border: "3px solid #58B7E7",
                      br: 14,
                      maxW: "590px",
                      boxShadow: "0px -5px 0px 0px #58B7E7 inset",
                      "@lg": { maxW: "362px", m: "0 auto" },
                    },
                    children: [
                      (0, s.jsx)(u.Z, {
                        src: "/images/index/benefits/5.png",
                        alt: "icon",
                        width: 557,
                        height: 304,
                        css: { mb: 21 },
                      }),
                      (0, s.jsxs)(f.Z, {
                        css: { maxW: 512 },
                        children: [
                          (0, s.jsx)(g.Z, {
                            css: {
                              mb: 10,
                              color: "#58B7E7",
                              tt: "uppercase",
                              fw: 900,
                            },
                            children: t(
                              "index.benefits.items.item5.title",
                              "Charity FIRST"
                            ),
                          }),
                          (0, s.jsx)(g.Z, {
                            css: {
                              color: "#000",
                              fz: "$sm",
                              ff: "var(--font-secondary)",
                            },
                            children: t(
                              "index.benefits.items.item5.text",
                              "Global charity and research initiatives that will drive attention of millions of people. $WATER aims to have a net-positive impact on real world with the help of charity."
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(f.Z, {
                    css: {
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 24,
                      maxW: "778px",
                      "@lg": {
                        maxW: "100%",
                        gridTemplateColumns: "repeat(1, 1fr)",
                        justifyItems: "center",
                      },
                    },
                    children: eC(t).map((e, t) =>
                      (0, s.jsxs)(
                        f.Z,
                        {
                          css: {
                            p: 22,
                            minH: 230,
                            bg: "#FFF",
                            border: "3px solid ".concat(e.color),
                            br: 14,
                            maxW: "370px",
                            boxShadow: "0px -5px 0px 0px ".concat(
                              e.color,
                              " inset"
                            ),
                          },
                          children: [
                            (0, s.jsx)(u.Z, {
                              src: "/images/index/benefits/".concat(
                                t + 1,
                                ".svg"
                              ),
                              alt: "icon",
                              width: 54,
                              height: 54,
                              css: { mb: 9 },
                            }),
                            (0, s.jsxs)(f.Z, {
                              css: { maxW: 312 },
                              children: [
                                (0, s.jsx)(g.Z, {
                                  css: {
                                    mb: 10,
                                    color: e.color,
                                    tt: "uppercase",
                                    fw: 900,
                                  },
                                  children: e.title,
                                }),
                                (0, s.jsx)(g.Z, {
                                  css: {
                                    color: "#000",
                                    fz: "$sm",
                                    ff: "var(--font-secondary)",
                                  },
                                  children: e.text,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      let eW = (0, n.zo)("div", { position: "relative", mb: "150px" });
      var eF = (e) => {
        let {} = e,
          { t, i18n: i } = (0, c.$G)(),
          r = (0, b.Z)(n.BC.md),
          o = (0, b.Z)(n.BC.xl),
          a = r
            ? "" === i.language
              ? "/images/index/tokenomics/bg-mob-en.png"
              : "/images/index/tokenomics/bg-mob-".concat(i.language, ".png")
            : "" === i.language
            ? "/images/index/tokenomics/bg-en.png"
            : "/images/index/tokenomics/bg-".concat(i.language, ".png");
        return (0, s.jsxs)(eW, {
          children: [
            (0, s.jsx)(f.Z, {
              css: {
                pos: "relative",
                w: "100%",
                maxW: "1675px",
                minHeight: "1338px",
                m: "0 auto 100px",
                "@xl": { minHeight: "1000px" },
                "@lg": { minHeight: "800px" },
                "@md": { minHeight: "1460px" },
              },
              children: (0, s.jsx)(u.Z, {
                loading: "eager",
                unoptimized: !0,
                src: a,
                alt: "bg",
                ...(r
                  ? { width: 375, height: 1577 }
                  : { width: 1645, height: 1338 }),
                css: {
                  position: "absolute",
                  maxW: "1675px",
                  t: 0,
                  "@md": { maxW: "375px", l: 0, r: 0, m: "auto" },
                },
              }),
            }),
            (0, s.jsx)(h.ZP, {
              children: (0, s.jsxs)(f.Z, {
                css: {
                  position: "relative",
                  br: "30px",
                  minH: 355,
                  d: "flex",
                  ai: "center",
                  "@xl": { fd: "column", pt: 30, minH: "500px" },
                },
                children: [
                  (0, s.jsx)(R, {
                    css: {
                      color: "#FFF",
                      zi: 2,
                      position: "relative",
                      p: "0 60px",
                      textShadow: "3px 5px 0px #375E8B",
                      fz: "96px",
                      "@xl": { ta: "center" },
                      "@md": { fz: "48px" },
                    },
                    children: t(
                      "index.tokenomics.presale",
                      "Presale Breakdown"
                    ),
                  }),
                  (0, s.jsx)(u.Z, {
                    src: o
                      ? "/images/index/tokenomics/bg-block-mob.png"
                      : "/images/index/tokenomics/bg-block.png",
                    alt: "bg",
                    fill: !0,
                  }),
                  (0, s.jsx)(u.Z, {
                    src:
                      "" === i.language
                        ? "/images/index/tokenomics/percentage-en.png"
                        : "/images/index/tokenomics/percentage-".concat(
                            i.language,
                            ".png"
                          ),
                    alt: "bg",
                    width: 569,
                    height: 558,
                    css: {
                      zi: 2,
                      position: "relative",
                      pos: "absolute",
                      r: 80,
                      "@xl": {
                        r: 0,
                        l: 0,
                        m: "auto",
                        maxW: "450px",
                        b: "-100px",
                      },
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      };
      let e$ = (0, n.zo)("div", { mb: "102px" });
      var eE = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsx)(e$, {
          id: "faq",
          children: (0, s.jsx)(h.ZP, {
            children: (0, s.jsxs)(f.Z, {
              css: { d: "flex", ai: "center", jc: "center", fd: "column" },
              children: [
                (0, s.jsx)(u.Z, {
                  src: "/images/index/questions/img.svg",
                  alt: "image",
                  width: 112,
                  height: 166,
                  css: { mb: "28px" },
                }),
                (0, s.jsx)(R, {
                  centered: !0,
                  noStroke: !0,
                  color: "titleSecondary",
                  css: { maxW: 653, w: "100%", mb: 24, tt: "uppercase" },
                  children: t("index.questions.title", "Have A questions?"),
                }),
                (0, s.jsx)(g.Z, {
                  centered: !0,
                  css: { color: "#2A4C75", maxW: "385px", w: "100%", mb: 32 },
                  children: t(
                    "index.questions.text",
                    "More of detailed information can also be found in our Wiki here"
                  ),
                }),
                (0, s.jsx)(B.Z, {
                  href: "/app/",
                  isExternal: !0,
                  css: {
                    m: "0 auto",
                    br: 12,
                    border: "3px solid $black",
                    boxShadow: "0px -5px 0px 0px #000 inset",
                    textTransform: "uppercase",
                    color: "$black",
                    p: "0px 10px",
                    bg: "$white",
                    d: "flex",
                    ai: "center",
                    minH: "62px",
                  },
                  children: (0, s.jsx)(g.Z, {
                    css: { color: "$black", fw: 700 },
                    children: t("common.wiki", "$Water WIKI"),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      let eA = (0, n.zo)("div", { mb: 170, "@sm": { mb: 70 } }),
        eT = (0, n.zo)("div", {
          border: "1px solid #40BEFF",
          br: 14,
          maxW: "670px",
          w: "100%",
          p: "76px 29px 28px",
          d: "flex",
          fd: "column",
          ai: "center",
          "@sm": { p: "40px 25px 10px" },
        }),
        eB = (0, n.zo)("div", { br: 14, w: "100%", p: "24px" }),
        eP = (0, n.zo)("div", {
          d: "flex",
          gap: 21,
          ai: "center",
          "@sm": { gap: 12 },
        });
      var eR = i(1364);
      let eI = (0, n.zo)("div", { w: "100%" }),
        eD = (0, n.zo)("video", { w: "100%", overflow: "hidden" }),
        eL = (e) => {
          var t;
          let i = e.split("."),
            s = null !== (t = i[i.length - 1]) && void 0 !== t ? t : "mp4";
          return "video/".concat(s);
        };
      function eN(e) {
        let { source: t, loading: i = "lazy", lazyBoundary: n = 100, ...r } = e,
          { ref: o, inView: a } = (0, eR.YD)({ delay: 500 }),
          [l, c] = (0, j.useState)("lazy" !== i);
        return (
          (0, j.useEffect)(() => {
            !l && a && c(!0);
          }, [a]),
          (0, s.jsx)(eI, {
            ref: o,
            children: (0, s.jsxs)(eD, {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              css: { br: "16px" },
              ...r,
              children: [
                Array.isArray(t) &&
                  t.length &&
                  l &&
                  t.map((e, t) =>
                    (0, s.jsx)("source", { src: e, type: eL(e) }, t)
                  ),
                "string" == typeof t &&
                  l &&
                  (0, s.jsx)("source", { src: t, type: eL(t) }),
                "Your browser does not support the video tag.",
              ],
            }),
          })
        );
      }
      var eM = (e) => {
        let {} = e,
          { t } = (0, c.$G)();
        return (0, s.jsx)(eA, {
          children: (0, s.jsxs)(h.ZP, {
            children: [
              (0, s.jsx)(R, {
                centered: !0,
                css: { mb: 20, textTransform: "uppercase", maxW: 850 },
                children: (0, s.jsxs)(c.cC, {
                  i18nKey: "index.supply.title",
                  children: [
                    "Supply Dynamics:",
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", { children: "The States of Water" }),
                  ],
                }),
              }),
              (0, s.jsx)(g.Z, {
                color: "titleSecondary",
                centered: !0,
                css: {
                  maxW: 612,
                  w: "100%",
                  mb: 65,
                  ff: "var(--font-secondary)",
                },
                children: t(
                  "index.supply.text",
                  "$WATER introduces a unique and engaging game mechanic inspired by the states of water—staking (icing) and burning (vaporizing)."
                ),
              }),
              (0, s.jsxs)(f.Z, {
                css: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 34,
                  "@xl": { d: "flex", fd: "column", gap: 16 },
                },
                children: [
                  (0, s.jsxs)(eT, {
                    css: { ml: "auto", "@xl": { m: "0 auto" } },
                    children: [
                      (0, s.jsx)(u.Z, {
                        src: "/images/index/supply/ice.svg",
                        alt: "ice",
                        width: 176,
                        height: 157,
                      }),
                      (0, s.jsx)(R, {
                        centered: !0,
                        css: {
                          mb: 17,
                          mt: 35,
                          textTransform: "uppercase",
                          maxW: 850,
                          fz: 40,
                          "@sm": { fz: 30 },
                        },
                        children: t(
                          "index.supply.block1.title",
                          "Freezing (Staking)"
                        ),
                      }),
                      (0, s.jsx)(g.Z, {
                        centered: !0,
                        css: {
                          maxW: 550,
                          w: "100%",
                          mb: 37,
                          ff: "var(--font-secondary)",
                          fz: 20,
                          color: "#2A4C75",
                          mt: 0,
                          "@sm": { fz: 16 },
                        },
                        children: t(
                          "index.supply.block1.text",
                          "Just as water turns into ice when it gets cold, $WATER tokens can be staked (iced) to earn rewards. Stakers are rewarded with additional $WATER tokens over time, simulating the process of accumulating ice"
                        ),
                      }),
                      (0, s.jsxs)(eB, {
                        css: { bg: "rgba(146, 100, 192, 0.13)", mb: 6 },
                        children: [
                          (0, s.jsx)(g.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                            },
                            children: t("common.mechanism", "Mechanism"),
                          }),
                          (0, s.jsxs)(f.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/1.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text1",
                                      "Users stake $WATER tokens for a specified period."
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/2.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text2",
                                      "The longer the staking period, the higher the rewards."
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/3.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block1.mechanism.text3",
                                      "Staking rewards are distributed from the community rewards pool."
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)(eB, {
                        css: { bg: "rgba(100, 154, 192, 0.13)", mb: 6 },
                        children: [
                          (0, s.jsx)(g.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                            },
                            children: t("common.simpleMath", "Simple Math"),
                          }),
                          (0, s.jsxs)(f.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/4.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block2.mechanism.text1",
                                      "4.5% total allocated for a year between 3 pools: daily, weekly, and monthly"
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/5.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block2.mechanism.text2",
                                      "At 20% of the presale tokens evenly staked to these pools, users will get 50% APR"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)(f.Z, {
                            css: {
                              border: "1px dashed #3AA3F4",
                              mt: "21px",
                              p: "10px",
                              br: 30,
                              bg: "#FFF",
                            },
                            children: (0, s.jsx)(g.Z, {
                              css: {
                                fz: "18px",
                                ta: "center",
                                fw: 900,
                                color: "#2A4C75",
                                tt: "uppercase",
                                "@sm": { fz: 16 },
                              },
                              children: (0, s.jsxs)(c.cC, {
                                i18nKey: "common.aprFormula",
                                children: [
                                  "APR =",
                                  " ",
                                  (0, s.jsx)("span", {
                                    style: { color: "#B55AD5" },
                                    children: "% total staking rewards",
                                  }),
                                  " ",
                                  "/",
                                  " ",
                                  (0, s.jsx)("span", {
                                    style: { color: "#66DD7C" },
                                    children: "% of total supply",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)(eT, {
                    css: { mr: "auto", "@xl": { m: "0 auto" } },
                    children: [
                      (0, s.jsx)(u.Z, {
                        src: "/images/index/supply/ice2.svg",
                        alt: "ice",
                        width: 176,
                        height: 157,
                      }),
                      (0, s.jsx)(R, {
                        centered: !0,
                        css: {
                          mb: 17,
                          mt: 35,
                          textTransform: "uppercase",
                          maxW: 850,
                          fz: 40,
                          "@sm": { fz: 30 },
                        },
                        children: t(
                          "index.supply.block2.title",
                          "Vaporizing (Burning)"
                        ),
                      }),
                      (0, s.jsx)(g.Z, {
                        color: "titleSecondary",
                        centered: !0,
                        css: {
                          maxW: 550,
                          w: "100%",
                          mb: 37,
                          ff: "var(--font-secondary)",
                          fz: 20,
                          color: "#2A4C75",
                          mt: 0,
                          "@sm": { fz: 16 },
                        },
                        children: t(
                          "index.supply.block2.text",
                          "When water is heated, it turns into vapor and disappears. Similarly, $WATER tokens can be burned (vaporized) to reduce the total supply, increasing scarcity and potentially the value of the remaining tokens."
                        ),
                      }),
                      (0, s.jsxs)(eB, {
                        css: { bg: "rgba(100, 192, 109, 0.13)" },
                        children: [
                          (0, s.jsx)(g.Z, {
                            css: {
                              w: "100%",
                              mb: 18,
                              fz: 24,
                              color: "#2A4C75",
                              tt: "uppercase",
                              fw: 800,
                              "@sm": { fz: 16 },
                            },
                            children: t("common.mechanism", "Mechanism"),
                          }),
                          (0, s.jsxs)(f.Z, {
                            css: { d: "flex", fd: "column", gap: 18 },
                            children: [
                              (0, s.jsxs)(eP, {
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/6.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block3.mechanism.text1",
                                      "Users can send $WATER tokens to burn contract"
                                    ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(eP, {
                                css: { ai: "flex-start" },
                                children: [
                                  (0, s.jsx)(u.Z, {
                                    src: "/images/index/supply/7.svg",
                                    alt: "icon",
                                    width: 32,
                                    height: 32,
                                  }),
                                  (0, s.jsx)(g.Z, {
                                    css: {
                                      color: "#2A4C75",
                                      ff: "var(--font-secondary)",
                                      "@sm": { fz: 16 },
                                    },
                                    children: t(
                                      "index.supply.block3.mechanism.text2",
                                      "Every week, 25% of these tokens burned, 25% sent to charity, and 50% are rained (raffled) among all participants giving them back from 0.1x to 10x of tokens they burned (with 2 times higher odds for getting less than 1x)"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(f.Z, {
                        css: { mt: 47 },
                        children: (0, s.jsx)(eN, {
                          source: "/images/index/supply/video.mp4",
                          poster: "/images/index/supply/poster.png",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      let eH = (0, n.zo)("div", { p: "12px 0", bg: "#2A4C75" });
      var eO = i(9507),
        e_ = (e) => {
          let {} = e,
            { t } = (0, c.$G)();
          return (0, s.jsx)(eH, {
            children: (0, s.jsx)(eO.Z, {
              children: [...Array(100)].map((e, i) =>
                (0, s.jsx)(
                  f.Z,
                  {
                    css: { mr: 24, d: "flex", ai: "center", gap: 24 },
                    children: (0, s.jsxs)(f.Z, {
                      css: { d: "flex", ai: "center" },
                      children: [
                        (0, s.jsx)(g.Z, {
                          css: {
                            fz: 15,
                            textTransform: "uppercase",
                            fw: 900,
                            mr: 5,
                          },
                          children: t("index.marquee.text", "Rehydrate"),
                        }),
                        (0, s.jsx)(u.Z, {
                          src: "/images/favicon.ico",
                          alt: "glass",
                          width: 27,
                          height: 27,
                          priority: !0,
                          loading: "eager",
                          unoptimized: !0,
                        }),
                      ],
                    }),
                  },
                  i
                )
              ),
            }),
          });
        },
        eG = !0;
      function eX(e) {
        let {} = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(e_, {}),
            (0, s.jsx)(eg, {}),
            (0, s.jsx)(ew, {}),
            (0, s.jsx)(eS, {}),
            (0, s.jsx)(eo, {}),
            (0, s.jsx)(em, {}),
            (0, s.jsx)(eF, {}),
            (0, s.jsx)(eM, {}),
            (0, s.jsx)(ev, {}),
            (0, s.jsx)(ex, {}),
            (0, s.jsx)(eE, {}),
            (0, s.jsx)(el, {}),
          ],
        });
      }
      eX.getLayout = function (e) {
        return (0, s.jsx)(Q, {
          noPt: !0,
          bgColor: "#FFF",
          footerTextColor: "#737373",
          newHeader: !0,
          children: e,
        });
      };
    },
    2635: function (e, t, i) {
      "use strict";
      i.d(t, {
        y: function () {
          return s;
        },
      });
      let s = {
        fontWeight: {
          400: { fontWeight: 400 },
          500: { fontWeight: 500 },
          600: { fontWeight: 600 },
          700: { fontWeight: 700 },
        },
        textAlign: {
          center: { textAlign: "center" },
          left: { textAlign: "left" },
          right: { textAlign: "right" },
        },
        color: {
          main: { color: "$main" },
          titleSecondary: { color: "$titleSecondary" },
          textSecondary: { color: "$textSecondary" },
          white: { color: "$white" },
          black: { color: "$black" },
          green: { color: "$green" },
          placeholder: { color: "$text_secondary" },
          textGrey: { color: "$text_secondary" },
          titlePrimary: { color: "$titlePrimary" },
          greySecondary: { color: "$text_secondary" },
          red: { color: "$error" },
          error: { color: "$error" },
          def: { color: "$text_primary" },
          blue: { color: "$link" },
          highlightMain: { color: "$highlightMain" },
        },
        fontStyle: {
          normal: { fontStyle: "normal" },
          italic: { fontStyle: "italic" },
        },
        primaryFont: { true: { fontFamily: "var(--font-primary)" } },
        secondaryFont: { true: { fontFamily: "var(--font-secondary)" } },
        noStroke: { true: { "-webkit-text-stroke": "transparent" } },
        centered: { true: { m: "auto", ta: "center" } },
        withBlackStroke: {
          true: {
            "-webkit-text-stroke-width": "1px",
            "-webkit-text-stroke-color": "#000",
          },
        },
        withBlackStrokeTitle: {
          true: {
            "-webkit-text-stroke-width": "6px",
            "-webkit-text-stroke-color": "#010101",
          },
        },
        fontSize: {
          input: { fz: "$input" },
          xxxs: { fontSize: "$xxxs" },
          xxs: { fontSize: "$xxs" },
          xs: { fontSize: "$xs" },
          sm: { fontSize: "$sm" },
          md: { fontSize: "$md" },
          def: { fontSize: "$def" },
          lg: { fontSize: "$lg" },
          xl: { fontSize: "$xl" },
          xxl: { fontSize: "$xxl" },
          titleXs: { fontSize: "$titleXs" },
          titleSm: { fontSize: "$titleSm" },
          titleMd: { fontSize: "$titleMd", "@md": { fontSize: "$titleSm" } },
          titleDef: { fontSize: "$titleDef", "@md": { fontSize: "$titleSm" } },
          titleLg: { fontSize: "$titleLg", "@md": { fontSize: "$titleSm" } },
        },
        textTransform: {
          uppercase: { textTransform: "uppercase" },
          capitalize: { textTransform: "capitalize" },
        },
        cursor: { pointer: { cursor: "pointer" } },
      };
    },
    7953: function (e, t, i) {
      "use strict";
      i.d(t, {
        EF: function () {
          return n;
        },
        vl: function () {
          return r;
        },
      });
      var s = i(5271);
      function n(e) {
        let t = (0, s.useContext)(e);
        if (!t)
          throw Error("useContext must be used within the <ContextProvider>");
        return t;
      }
      i(5634);
      let r = (e) => {
        let t = e.slice(e.indexOf("?") + 1).split("&"),
          i = {};
        return (
          e.includes("?") &&
            t.map((e) => {
              let [t, s] = e.split("=");
              i[t] = decodeURIComponent(s);
            }),
          i
        );
      };
    },
  },
  function (e) {
    e.O(0, [83, 888, 774, 179], function () {
      return e((e.s = 8329));
    }),
      (_N_E = e.O());
  },
]);
