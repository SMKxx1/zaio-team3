/*!For license information please see main.43e2b301.js.LICENSE.txt*/ !(function (
  e
) {
  function n(n) {
    for (
      var a, i, s = n[0], l = n[1], c = n[2], _ = 0, d = [];
      _ < s.length;
      _++
    )
      (i = s[_]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
        (r[i] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    for (u && u(n); d.length; ) d.shift()();
    return o.push.apply(o, c || []), t();
  }
  function t() {
    for (var e, n = 0; n < o.length; n++) {
      for (var t = o[n], a = !0, s = 1; s < t.length; s++) {
        var l = t[s];
        0 !== r[l] && (a = !1);
      }
      a && (o.splice(n--, 1), (e = i((i.s = t[0]))));
    }
    return e;
  }
  var a = {},
    r = { 0: 0 },
    o = [];
  function i(n) {
    if (a[n]) return a[n].exports;
    var t = (a[n] = { i: n, l: !1, exports: {} });
    return e[n].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
  }
  (i.m = e),
    (i.c = a),
    (i.d = function (e, n, t) {
      i.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, n) {
      if ((1 & n && (e = i(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (i.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var a in e)
          i.d(
            t,
            a,
            function (n) {
              return e[n];
            }.bind(null, a)
          );
      return t;
    }),
    (i.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(n, "a", n), n;
    }),
    (i.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (i.p = "/");
  var s = (this.webpackJsonpundefined = this.webpackJsonpundefined || []),
    l = s.push.bind(s);
  (s.push = n), (s = s.slice());
  for (var c = 0; c < s.length; c++) n(s[c]);
  var u = l;
  o.push([276, 2, 1]), t();
})({
  118: function (e, n) {
    e.exports = {
      angry: [">:(", ">:-("],
      blush: [':")', ':-")'],
      broken_heart: ["</3", "<\\3"],
      confused: [":/", ":-/"],
      cry: [":'(", ":'-(", ":,(", ":,-("],
      frowning: [":(", ":-("],
      heart: ["<3"],
      imp: ["]:(", "]:-("],
      innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
      joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
      kissing: [":*", ":-*"],
      laughing: ["x-)", "X-)"],
      neutral_face: [":|", ":-|"],
      open_mouth: [":o", ":-o", ":O", ":-O"],
      rage: [":@", ":-@"],
      smile: [":D", ":-D"],
      smiley: [":)", ":-)"],
      smiling_imp: ["]:)", "]:-)"],
      sob: [":,'(", ":,'-(", ";(", ";-("],
      stuck_out_tongue: [":P", ":-P", ":p", ":-p"],
      sunglasses: ["8-)", "B-)"],
      sweat: [",:(", ",:-("],
      sweat_smile: [",:)", ",:-)"],
      unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
      wink: [";)", ";-)"],
    };
  },
  119: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (n.allowedAliasCharacters =
        "\\w\\-\\_\\+\\*\\(\\)\\!#&\xe5\xf4\u2019\xe7\xe9\xe3\xed\u201c\u201d,"),
      r = (n.startOfURL = "https?\\S*");
    n.default = function () {
      return new RegExp("(" + r + ")?:([" + a + "]+):", "g");
    };
  },
  125: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.FrameContextConsumer =
        n.FrameContextProvider =
        n.FrameContext =
          void 0);
    var a,
      r = t(0),
      o = (a = r) && a.__esModule ? a : { default: a };
    var i = void 0,
      s = void 0;
    "undefined" !== typeof document && (i = document),
      "undefined" !== typeof window && (s = window);
    var l = (n.FrameContext = o.default.createContext({
        document: i,
        window: s,
      })),
      c = l.Provider,
      u = l.Consumer;
    (n.FrameContextProvider = c), (n.FrameContextConsumer = u);
  },
  127: function (e, n) {},
  132: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = void 0);
    var a = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== g(e) && "function" !== typeof e))
          return { default: e };
        var n = s();
        if (n && n.has(e)) return n.get(e);
        var t = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if (Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(t, r, o)
              : (t[r] = e[r]);
          }
        (t.default = e), n && n.set(e, t);
        return t;
      })(t(0)),
      r = i(t(2)),
      o = i(t(250));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s() {
      if ("function" !== typeof WeakMap) return null;
      var e = new WeakMap();
      return (
        (s = function () {
          return e;
        }),
        e
      );
    }
    function l() {
      var e = p([
        "\n  float: right;\n  margin: -5px 10px 20px;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 0.5;\n  background: transparent;\n  border: none;\n",
      ]);
      return (
        (l = function () {
          return e;
        }),
        e
      );
    }
    function c() {
      var e = p([
        "\n  background-color: transparent;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n  color: inherit;\n  font-size: 15px;\n  height: auto;\n  line-height: 1.2;\n  margin: 0;\n  padding: 16px;\n  width: 95%;\n  margin: 0 auto;\n  display: block;\n  &:focus {\n    outline: none;\n  }\n",
      ]);
      return (
        (c = function () {
          return e;
        }),
        e
      );
    }
    function u() {
      var e = p([
        "\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n  padding: 0.21rem;\n",
      ]);
      return (
        (u = function () {
          return e;
        }),
        e
      );
    }
    function _() {
      var e = p([
        "\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 0.8rem;\n  padding-right: 0;\n  border-radius: 2px;\n  align-items: baseline;\n",
      ]);
      return (
        (_ = function () {
          return e;
        }),
        e
      );
    }
    function d() {
      var e = p([
        "\n  cursor: pointer;\n  border: 1px solid #eee;\n  padding: 0.4rem 0.8rem;\n  margin: 0;\n  border-radius: 2px;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n",
      ]);
      return (
        (d = function () {
          return e;
        }),
        e
      );
    }
    function f() {
      var e = p([
        "\n  position: ",
        ";\n  opacity: ",
        ";\n  display: ",
        ";\n  transition: opacity 300ms linear;\n  margin-top: 1rem;\n  border: 1px solid #f1f1f1;\n  border-radius: 2px;\n  background: white;\n  box-shadow: 3px 3px 5px #bfbdbd;\n  width: 80%;\n  height: 50%;\n  overflow-y: scroll;\n  z-index: 100;\n  padding-top: 1rem;\n",
      ]);
      return (
        (f = function () {
          return e;
        }),
        e
      );
    }
    function p(e, n) {
      return (
        n || (n = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
        )
      );
    }
    function g(e) {
      return (g =
        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" === typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function m(e, n) {
      for (var t = 0; t < n.length; t++) {
        var a = n[t];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function h(e, n) {
      return !n || ("object" !== g(n) && "function" !== typeof n)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : n;
    }
    function b(e) {
      return (b = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function w(e, n) {
      return (w =
        Object.setPrototypeOf ||
        function (e, n) {
          return (e.__proto__ = n), e;
        })(e, n);
    }
    t(251);
    var y = (function (e) {
      function n(e) {
        var t;
        return (
          (function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
          ((t = h(this, b(n).call(this, e))).state = {
            gifs: [],
            searchValue: "",
            giphySearchUrl:
              "https://api.giphy.com/v1/gifs/search?api_key=".concat(
                t.props.apiKey
              ),
            giphyTrendingUrl:
              "https://api.giphy.com/v1/gifs/trending?api_key=".concat(
                t.props.apiKey
              ),
          }),
          t.loadTrendingGifs(),
          t
        );
      }
      var t, o, i;
      return (
        (function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            n && w(e, n);
        })(n, e),
        (t = n),
        (i = [
          {
            key: "propTypes",
            get: function () {
              return {
                onSelected: r.default.func.isRequired,
                visible: r.default.bool,
                modal: r.default.bool,
              };
            },
          },
          {
            key: "defaultProps",
            get: function () {
              return { visible: !0, modal: !1 };
            },
          },
        ]),
        (o = [
          {
            key: "loadTrendingGifs",
            value: function () {
              var e = this,
                n = this.state.giphyTrendingUrl;
              fetch(n, { method: "get" })
                .then(function (e) {
                  return e.json();
                })
                .then(function (n) {
                  var t = n.data.map(function (e, n) {
                    return e.images;
                  });
                  e.setState({ gifs: t });
                });
            },
          },
          {
            key: "searchGifs",
            value: function () {
              var e = this,
                n = this.state,
                t = n.giphySearchUrl,
                a = n.searchValue;
              if (!(a.length < 1)) {
                var r = t + "&q=" + a.replace(" ", "+");
                this.setState({ gifs: [] }),
                  fetch(r, { method: "get" })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (n) {
                      var t = n.data.map(function (e, n) {
                        return e.images;
                      });
                      e.setState({ gifs: t });
                    });
              }
            },
          },
          {
            key: "onGiphySelect",
            value: function (e) {
              this.props.onSelected(e);
            },
          },
          {
            key: "onSearchChange",
            value: function (e) {
              var n = this;
              e.stopPropagation(),
                this.setState({ searchValue: e.target.value }, function () {
                  return n.searchGifs();
                });
            },
          },
          {
            key: "onKeyDown",
            value: function (e) {
              "Escape" === e.key && (e.preventDefault(), this.reset());
            },
          },
          {
            key: "reset",
            value: function () {
              this.setState({ searchValue: "" });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                n = this.state.gifs,
                t = this.props,
                r = t.visible,
                o = t.modal;
              return a.default.createElement(
                v,
                { className: "image-picker", visible: r, modal: o },
                a.default.createElement(
                  O,
                  {
                    className: "close-picker",
                    onClick: this.props.handleClose,
                  },
                  "\xd7"
                ),
                a.default.createElement(x, {
                  name: "giphy-search",
                  type: "text",
                  autoCapitalize: "none",
                  autoComplete: "off",
                  autoCorrect: "off",
                  onChange: this.onSearchChange.bind(this),
                  value: this.state.searchValue,
                  onKeyDown: this.onKeyDown.bind(this),
                  placeholder: "Search for gifs",
                }),
                a.default.createElement(
                  k,
                  null,
                  n.map(function (n, t) {
                    var r = n.fixed_width.url;
                    return a.default.createElement(j, {
                      className: "giphy-gif",
                      key: t,
                      src: r,
                      onClick: function () {
                        e.onGiphySelect(n);
                      },
                    });
                  })
                )
              );
            },
          },
        ]) && m(t.prototype, o),
        i && m(t, i),
        n
      );
    })(a.Component);
    n.default = y;
    var v = o.default.div(
        f(),
        function (e) {
          return e.modal ? "absolute" : "static";
        },
        function (e) {
          return e.visible ? 1 : 0;
        },
        function (e) {
          return e.visible ? "block" : "none";
        }
      ),
      k = (o.default.div(d()), o.default.div(_())),
      j = o.default.img(u()),
      x = o.default.input(c()),
      O = o.default.button(l());
  },
  135: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), (n.toArray = void 0);
    var a =
        Object.assign ||
        function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        },
      r = t(252);
    Object.defineProperty(n, "toArray", {
      enumerable: !0,
      get: function () {
        return r.toArray;
      },
    }),
      (n.Twemoji = _),
      (n.Emojione = d),
      (n.EmojioneV4 = f);
    var o = l(t(0)),
      i = l(t(2)),
      s = l(r);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function c(e, n) {
      var t = {};
      for (var a in e)
        n.indexOf(a) >= 0 ||
          (Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]));
      return t;
    }
    var u = "https";
    function _(e) {
      var n = e.svg,
        t = e.options,
        r = c(e, ["svg", "options"]);
      return (
        (t = a(
          {
            protocol: u,
            baseUrl: "//twemoji.maxcdn.com/2/" + (n ? "svg/" : ""),
            size: n ? "" : "72x72",
            ext: n ? "svg" : "png",
          },
          t
        )),
        o.default.createElement(s.default, a({ options: t }, r))
      );
    }
    function d(e) {
      var n = e.svg,
        t = e.options,
        r = c(e, ["svg", "options"]),
        i = n ? "svg" : "png";
      return (
        (t = a(
          {
            protocol: u,
            baseUrl:
              "//cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/" +
              i +
              "/",
            size: "",
            ext: i,
            emojione: !0,
          },
          t
        )),
        o.default.createElement(s.default, a({ options: t }, r))
      );
    }
    function f(e) {
      var n = e.size,
        t = e.options,
        r = c(e, ["size", "options"]);
      return (
        (t = a(
          {
            protocol: u,
            baseUrl: "//cdn.jsdelivr.net/emojione/assets/4.0/png/",
            size: n,
            ext: "png",
            emojione: !0,
          },
          t
        )),
        o.default.createElement(s.default, a({ options: t }, r))
      );
    }
    "undefined" !== typeof location &&
      "http:" === location.protocol &&
      (u = "http"),
      (n.default = s.default),
      (_.propTypes = {
        text: i.default.string,
        options: i.default.object,
        svg: i.default.bool,
      }),
      (d.propTypes = {
        text: i.default.string,
        options: i.default.object,
        svg: i.default.bool,
      }),
      (f.propTypes = {
        text: i.default.string,
        options: i.default.object,
        size: i.default.oneOf([32, 64, 128]),
      }),
      (f.defaultProps = { size: 64 });
  },
  149: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.HABITAT_PROP_REF =
        n.HABITAT_PROP_NUMBER =
        n.HABITAT_PROP_JSON =
        n.HABITAT_PROP =
        n.ACTIVE_HABITAT_FLAG =
        n.HABITAT_NAMESPACE =
        n.HABITAT_HOST_KEY =
          void 0);
    var a,
      r = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      o = t(36),
      i = (a = o) && a.__esModule ? a : { default: a };
    var s = (n.HABITAT_HOST_KEY = "habitatHostElement"),
      l = (n.HABITAT_NAMESPACE = "data-habitat"),
      c = (n.ACTIVE_HABITAT_FLAG = "data-has-habitat"),
      u = (n.HABITAT_PROP = "data-prop-"),
      _ = (n.HABITAT_PROP_JSON = "data-props"),
      d = (n.HABITAT_PROP_NUMBER = "data-n-prop-"),
      f = (n.HABITAT_PROP_REF = "data-r-prop-"),
      p = !1;
    function g(e) {
      return (e.currentStyle || window.getComputedStyle(e, "")).display;
    }
    function m(e) {
      return e[1].toUpperCase();
    }
    function h(e, n) {
      return n.replace(e, "").replace(/-([a-z])/g, m);
    }
    var b = (function () {
      function e() {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        r(e, null, [
          {
            key: "parseProps",
            value: function (e) {
              for (var n = { proxy: e }, t = 0; t < e.attributes.length; t++) {
                var a = e.attributes[t];
                if (0 === a.name.indexOf(u)) {
                  var r = h(u, a.name),
                    o = a.value || "";
                  "string" === typeof o &&
                    "false" === o.toLowerCase() &&
                    (o = !1),
                    "string" === typeof o &&
                      "true" === o.toLowerCase() &&
                      (o = !0),
                    "string" === typeof o &&
                      o.length >= 2 &&
                      (("{" === o[0] && "}" === o[o.length - 1]) ||
                        ("[" === o[0] && "]" === o[o.length - 1])) &&
                      (o = JSON.parse(o)),
                    "string" === typeof o &&
                      "null" === o.toLowerCase() &&
                      (o = null),
                    (n[r] = o);
                } else if (a.name === _) Object.assign(n, JSON.parse(a.value));
                else if (0 === a.name.indexOf("data-n-prop-")) {
                  n[h(d, a.name)] = parseFloat(a.value);
                } else if (window && 0 === a.name.indexOf(f)) {
                  n[h(f, a.name)] = window[a.value];
                }
              }
              return n;
            },
          },
          {
            key: "create",
            value: function (e, n) {
              var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (window.document.body === e || null === e || void 0 === e)
                return (
                  i.default.warn(
                    "RHW04",
                    "Cannot open a habitat for element.",
                    e
                  ),
                  null
                );
              var a = e.getAttribute("data-habitat-tag") || t.tag || null;
              a || ((a = "span"), "block" === g(e) && (a = "div"));
              var r = window.document.createElement(a),
                o = e.getAttribute("data-habitat-class") || t.className || null,
                u = "boolean" === typeof t.replaceDisabled && t.replaceDisabled;
              if (
                (null !== e.getAttribute("data-habitat-no-replace") &&
                  (u =
                    "true" ===
                    e
                      .getAttribute("data-habitat-no-replace")
                      .toLocaleLowerCase()),
                r.setAttribute(l, n),
                o && (r.className = "" + o),
                e.parentNode.insertBefore(r, e.nextSibling),
                "INPUT" !== e.tagName)
              ) {
                if (!u) {
                  var _ = e.parentNode.removeChild(e);
                  try {
                    r[s] = _;
                  } catch (d) {
                    p &&
                      (i.default.warn(
                        "RHW06",
                        "Arbitrary properties are disabled. The container may not dispose correctly.",
                        d
                      ),
                      (p = !0));
                  }
                }
              } else
                e.setAttribute(c, "true"),
                  "hidden" !== e.getAttribute("type") &&
                    e.setAttribute("style", "display: none;");
              return r;
            },
          },
          {
            key: "hasHabitat",
            value: function (e) {
              return null !== e.getAttribute(c);
            },
          },
          {
            key: "destroy",
            value: function (e) {
              try {
                "undefined" !== typeof e[s] &&
                  e.parentNode.insertBefore(e[s], e);
              } finally {
                e.parentNode.removeChild(e);
              }
            },
          },
          {
            key: "listHabitats",
            value: function (e) {
              return window.document.body.querySelectorAll(
                "[" + l + '="' + e + '"]'
              );
            },
          },
        ]),
        e
      );
    })();
    n.default = b;
  },
  150: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a,
      r = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      o = t(36),
      i = (a = o) && a.__esModule ? a : { default: a };
    var s = (function () {
      function e(n) {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this._operator = n),
          (this._key = null),
          (this._meta = {});
      }
      return (
        r(e, [
          {
            key: "as",
            value: function (e) {
              if ("string" === typeof e) return (this._key = e), this;
              i.default.error(
                "RHE13",
                "Unexpected key type. Expected a string.",
                e
              );
            },
          },
          {
            key: "withDefaultProps",
            value: function (e) {
              return (this._meta.defaultProps = e), this;
            },
          },
          {
            key: "withOptions",
            value: function (e) {
              return (this._meta.options = e), this;
            },
          },
          {
            key: "operator",
            get: function () {
              return this._operator;
            },
          },
          {
            key: "key",
            get: function () {
              return this._key;
            },
          },
          {
            key: "meta",
            get: function () {
              return this._meta;
            },
          },
        ]),
        e
      );
    })();
    (n.default = s), (e.exports = n.default);
  },
  151: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }), (n._Mixin = void 0);
    var a = (function () {
      function e(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function (n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n;
      };
    })();
    n.createBootstrapper = function (e) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return new l(e, n);
    };
    var r = i(t(85)),
      o = i(t(88));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ("object" !== typeof n && "function" !== typeof n) ? e : n;
    }
    var l = (n._Mixin = (function (e) {
      function n(e, t) {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var a = s(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        if (!e.container)
          return console.warn('"Container" property was not supplied'), s(a);
        e.componentSelector && (a.componentSelector = e.componentSelector),
          "boolean" === typeof e.enableWatcher &&
            (a.enableWatcher = e.enableWatcher);
        for (
          var r = new o.default(e.defaultOptions || null), i = 0;
          i < e.container.length;
          i++
        ) {
          var l = void 0;
          (l = e.container[i].forAsync
            ? r
                .registerAsync(e.container[i].forAsync)
                .as(e.container[i].register)
            : r.register(e.container[i].for).as(e.container[i].register)),
            e.container[i].withDefaultProps &&
              l.withDefaultProps(e.container[i].withDefaultProps),
            e.container[i].withOptions &&
              l.withOptions(e.container[i].withOptions);
        }
        return (
          (a._shouldUpdateProxy = e.shouldUpdate || null),
          (a._willUpdateProxy = e.willUpdate || null),
          (a._didUpdateProxy = e.didUpdate || null),
          (a._willUnmountProxy = e.willUnmountHabitats || null),
          (a._didUnmountProxy = e.didUnmountHabitats || null),
          (a._didDisposeProxy = e.didDispose || null),
          a.setContainer(r.build(), function () {
            "function" === typeof t && t();
          }),
          a
        );
      }
      return (
        (function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, n)
                : (e.__proto__ = n));
        })(n, e),
        a(n, [
          {
            key: "shouldUpdate",
            value: function (e) {
              this._shouldUpdateProxy && this._shouldUpdateProxy(e);
            },
          },
          {
            key: "willUpdate",
            value: function () {
              this._willUpdateProxy && this._willUpdateProxy();
            },
          },
          {
            key: "didUpdate",
            value: function () {
              this._didUpdateProxy && this._didUpdateProxy();
            },
          },
          {
            key: "willUnmountHabitats",
            value: function () {
              this._willUnmountProxy && this._willUnmountProxy();
            },
          },
          {
            key: "didUnmountHabitats",
            value: function () {
              this._didUnmountProxy && this._didUnmountProxy();
            },
          },
          {
            key: "didDispose",
            value: function () {
              this._didDisposeProxy && this._didDisposeProxy();
            },
          },
        ]),
        n
      );
    })(r.default));
  },
  154: function (e, n, t) {
    "use strict";
    var a = "function" === typeof Symbol && Symbol.for,
      r = a ? Symbol.for("react.element") : 60103,
      o = a ? Symbol.for("react.portal") : 60106,
      i = a ? Symbol.for("react.fragment") : 60107,
      s = a ? Symbol.for("react.strict_mode") : 60108,
      l = a ? Symbol.for("react.profiler") : 60114,
      c = a ? Symbol.for("react.provider") : 60109,
      u = a ? Symbol.for("react.context") : 60110,
      _ = a ? Symbol.for("react.async_mode") : 60111,
      d = a ? Symbol.for("react.concurrent_mode") : 60111,
      f = a ? Symbol.for("react.forward_ref") : 60112,
      p = a ? Symbol.for("react.suspense") : 60113,
      g = a ? Symbol.for("react.suspense_list") : 60120,
      m = a ? Symbol.for("react.memo") : 60115,
      h = a ? Symbol.for("react.lazy") : 60116,
      b = a ? Symbol.for("react.block") : 60121,
      w = a ? Symbol.for("react.fundamental") : 60117,
      y = a ? Symbol.for("react.responder") : 60118,
      v = a ? Symbol.for("react.scope") : 60119;
    function k(e) {
      if ("object" === typeof e && null !== e) {
        var n = e.$$typeof;
        switch (n) {
          case r:
            switch ((e = e.type)) {
              case _:
              case d:
              case i:
              case l:
              case s:
              case p:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case u:
                  case f:
                  case h:
                  case m:
                  case c:
                    return e;
                  default:
                    return n;
                }
            }
          case o:
            return n;
        }
      }
    }
    function j(e) {
      return k(e) === d;
    }
    (n.AsyncMode = _),
      (n.ConcurrentMode = d),
      (n.ContextConsumer = u),
      (n.ContextProvider = c),
      (n.Element = r),
      (n.ForwardRef = f),
      (n.Fragment = i),
      (n.Lazy = h),
      (n.Memo = m),
      (n.Portal = o),
      (n.Profiler = l),
      (n.StrictMode = s),
      (n.Suspense = p),
      (n.isAsyncMode = function (e) {
        return j(e) || k(e) === _;
      }),
      (n.isConcurrentMode = j),
      (n.isContextConsumer = function (e) {
        return k(e) === u;
      }),
      (n.isContextProvider = function (e) {
        return k(e) === c;
      }),
      (n.isElement = function (e) {
        return "object" === typeof e && null !== e && e.$$typeof === r;
      }),
      (n.isForwardRef = function (e) {
        return k(e) === f;
      }),
      (n.isFragment = function (e) {
        return k(e) === i;
      }),
      (n.isLazy = function (e) {
        return k(e) === h;
      }),
      (n.isMemo = function (e) {
        return k(e) === m;
      }),
      (n.isPortal = function (e) {
        return k(e) === o;
      }),
      (n.isProfiler = function (e) {
        return k(e) === l;
      }),
      (n.isStrictMode = function (e) {
        return k(e) === s;
      }),
      (n.isSuspense = function (e) {
        return k(e) === p;
      }),
      (n.isValidElementType = function (e) {
        return (
          "string" === typeof e ||
          "function" === typeof e ||
          e === i ||
          e === d ||
          e === l ||
          e === s ||
          e === p ||
          e === g ||
          ("object" === typeof e &&
            null !== e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === c ||
              e.$$typeof === u ||
              e.$$typeof === f ||
              e.$$typeof === w ||
              e.$$typeof === y ||
              e.$$typeof === v ||
              e.$$typeof === b))
        );
      }),
      (n.typeOf = k);
  },
  184: function (e, n) {},
  198: function (e, n) {},
  211: function (e, n) {},
  217: function (e, n) {},
  22: function (e, n, t) {
    "use strict";
    e.exports = t(154);
  },
  252: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      };
    (n.toArray = y), (n.default = v);
    var r = g(t(0)),
      o = g(t(2)),
      i = g(t(253)),
      s = g(t(254)),
      l = g(t(256)),
      c = g(t(257)),
      u = g(t(119)),
      _ = g(t(259)),
      d = g(t(260)),
      f = g(t(261)),
      p = g(t(118));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = (0, c.default)(),
      h = (0, u.default)(),
      b = (0, l.default)(),
      w = {
        width: "1em",
        height: "1em",
        margin: "0 .05em 0 .1em",
        verticalAlign: "-0.1em",
      };
    function y(e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        t = (0, _.default)(n.protocol);
      function o(e, o) {
        if (!n.baseUrl)
          return r.default.createElement(
            "span",
            { key: o, style: w, className: n.className },
            e
          );
        var i = (0, d.default)(e, s),
          s = n.emojione;
        s && (i = i.replace(/-200d/g, "").replace(/-fe0f/g, ""));
        var l = n.size ? "/" : "",
          c = "" + t + n.baseUrl + n.size + l + i + "." + n.ext;
        return r.default.createElement(
          "img",
          a(
            { key: o, alt: e, src: c, style: w, className: n.className },
            n.props
          )
        );
      }
      function i() {
        var e = Object.keys(p.default),
          n = arguments.length <= 0 ? void 0 : arguments[0],
          t = arguments.length <= 1 ? void 0 : arguments[1],
          a = arguments.length <= 2 ? void 0 : arguments[2],
          r = arguments.length <= 3 ? void 0 : arguments[3];
        for (var o in e) {
          var i = e[o],
            s = p.default[i];
          if (s.includes(a)) {
            var l = void 0 !== t;
            if (l) return n;
            var c = void 0 !== r;
            if (!c) return f.default[i];
            if (":" === n[0]) {
              var u = n.slice(1, -1),
                _ = void 0 !== f.default[u];
              if (_) return n;
            }
            return "" + f.default[i] + r;
          }
        }
      }
      function l() {
        var e = arguments.length <= 0 ? void 0 : arguments[0],
          n = arguments.length <= 1 ? void 0 : arguments[1],
          t = arguments.length <= 2 ? void 0 : arguments[2];
        if (n) return e;
        var a = f.default[t];
        return a || e;
      }
      function c(e) {
        for (var n = null, t = e; n !== t; ) (n = t), (t = t.replace(m, i));
        return t;
      }
      var u = e;
      return (
        (u = (u = c((u = u.replace(h, l)))).replace(h, l)),
        (0, s.default)(u, b, o)
      );
    }
    function v(e) {
      var n = e.text,
        t = e.onlyEmojiClassName,
        o = e.options,
        s = void 0 === o ? {} : o,
        l = e.className,
        c = (function (e, n) {
          var t = {};
          for (var a in e)
            n.indexOf(a) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]));
          return t;
        })(e, ["text", "onlyEmojiClassName", "options", "className"]);
      var u,
        _,
        d,
        f = y(n, s),
        p = (0, i.default)(
          l,
          ((u = {}),
          (_ = t),
          (d = (function (e) {
            if (e.length > 3) return !1;
            for (var n = 0; n < e.length; n++)
              if ("string" === typeof e[n]) return !1;
            return !0;
          })(f)),
          _ in u
            ? Object.defineProperty(u, _, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (u[_] = d),
          u)
        );
      return r.default.createElement("span", a({}, c, { className: p }), f);
    }
    v.propTypes = {
      text: o.default.string,
      props: o.default.object,
      onlyEmojiClassName: o.default.string,
      options: o.default.shape({
        baseUrl: o.default.string,
        size: o.default.oneOfType([o.default.number, o.default.string]),
        ext: o.default.string,
        className: o.default.string,
      }),
    };
  },
  257: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function () {
        return new RegExp(
          "(" + c + ")?(" + l + ")([" + o.allowedAliasCharacters + "]*:)?",
          "g"
        );
      });
    var a = s(t(118)),
      r = s(t(117)),
      o = t(119),
      i = t(258);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = (0, r.default)(
        Object.keys(a.default).map(function (e) {
          return a.default[e].map(i.escapeStringToBeUsedInRegExp);
        })
      ).join("|"),
      c = [o.startOfURL].join("|");
  },
  258: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.escapeStringToBeUsedInRegExp = function (e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      });
  },
  259: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function (e) {
        return e && !e.endsWith(":") ? e + ":" : e;
      });
  },
  260: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function (e) {
        return (function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "-",
            t = [],
            a = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var i, s = e[Symbol.iterator]();
              !(a = (i = s.next()).done);
              a = !0
            ) {
              var l = i.value;
              t.push(l.codePointAt(0).toString(16));
            }
          } catch (c) {
            (r = !0), (o = c);
          } finally {
            try {
              !a && s.return && s.return();
            } finally {
              if (r) throw o;
            }
          }
          return t.join(n);
        })(e.indexOf(r) < 0 ? e.replace(a, "") : e);
      });
    var a = /\uFE0F/g,
      r = String.fromCharCode(8205);
  },
  261: function (e, n) {
    e.exports = {
      0: "0\ufe0f\u20e3",
      1: "1\ufe0f\u20e3",
      2: "2\ufe0f\u20e3",
      3: "3\ufe0f\u20e3",
      4: "4\ufe0f\u20e3",
      5: "5\ufe0f\u20e3",
      6: "6\ufe0f\u20e3",
      7: "7\ufe0f\u20e3",
      8: "8\ufe0f\u20e3",
      9: "9\ufe0f\u20e3",
      10: "\ud83d\udd1f",
      100: "\ud83d\udcaf",
      1234: "\ud83d\udd22",
      grinning_face: "\ud83d\ude00",
      grinning_face_with_big_eyes: "\ud83d\ude03",
      grinning_face_with_smiling_eyes: "\ud83d\ude01",
      beaming_face_with_smiling_eyes: "\ud83d\ude01",
      grinning_squinting_face: "\ud83d\ude06",
      grinning_face_with_sweat: "\ud83d\ude05",
      rolling_on_the_floor_laughing: "\ud83e\udd23",
      face_with_tears_of_joy: "\ud83d\ude02",
      slightly_smiling_face: "\ud83d\ude42",
      upside_down_face: "\ud83d\ude43",
      winking_face: "\ud83d\ude09",
      smiling_face_with_smiling_eyes: "\ud83d\ude0a",
      smiling_face_with_halo: "\ud83d\ude07",
      smiling_face_with_hearts: "\ud83e\udd70",
      smiling_face_with_heart_eyes: "\ud83d\ude0d",
      star_struck: "\ud83e\udd29",
      face_blowing_a_kiss: "\ud83d\ude18",
      kissing_face: "\ud83d\ude17",
      smiling_face: "\u263a\ufe0f",
      kissing_face_with_closed_eyes: "\ud83d\ude1a",
      kissing_face_with_smiling_eyes: "\ud83d\ude19",
      face_savoring_food: "\ud83d\ude0b",
      face_with_tongue: "\ud83d\ude1b",
      winking_face_with_tongue: "\ud83d\ude1c",
      zany_face: "\ud83e\udd2a",
      squinting_face_with_tongue: "\ud83d\ude1d",
      money_mouth_face: "\ud83e\udd11",
      hugging_face: "\ud83e\udd17",
      face_with_hand_over_mouth: "\ud83e\udd2d",
      shushing_face: "\ud83e\udd2b",
      thinking_face: "\ud83e\udd14",
      zipper_mouth_face: "\ud83e\udd10",
      face_with_raised_eyebrow: "\ud83e\udd28",
      neutral_face: "\ud83d\ude10",
      expressionless_face: "\ud83d\ude11",
      face_without_mouth: "\ud83d\ude36",
      smirking_face: "\ud83d\ude0f",
      unamused_face: "\ud83d\ude12",
      face_with_rolling_eyes: "\ud83d\ude44",
      grimacing_face: "\ud83d\ude2c",
      lying_face: "\ud83e\udd25",
      relieved_face: "\ud83d\ude0c",
      pensive_face: "\ud83d\ude14",
      sleepy_face: "\ud83d\ude2a",
      drooling_face: "\ud83e\udd24",
      sleeping_face: "\ud83d\ude34",
      face_with_medical_mask: "\ud83d\ude37",
      face_with_thermometer: "\ud83e\udd12",
      face_with_head_bandage: "\ud83e\udd15",
      nauseated_face: "\ud83e\udd22",
      face_vomiting: "\ud83e\udd2e",
      sneezing_face: "\ud83e\udd27",
      hot_face: "\ud83e\udd75",
      cold_face: "\ud83e\udd76",
      woozy_face: "\ud83e\udd74",
      dizzy_face: "\ud83d\ude35",
      exploding_head: "\ud83e\udd2f",
      cowboy_hat_face: "\ud83e\udd20",
      partying_face: "\ud83e\udd73",
      smiling_face_with_sunglasses: "\ud83d\ude0e",
      nerd_face: "\ud83e\udd13",
      face_with_monocle: "\ud83e\uddd0",
      confused_face: "\ud83d\ude15",
      worried_face: "\ud83d\ude1f",
      slightly_frowning_face: "\ud83d\ude41",
      frowning_face: "\u2639",
      face_with_open_mouth: "\ud83d\ude2e",
      hushed_face: "\ud83d\ude2f",
      astonished_face: "\ud83d\ude32",
      flushed_face: "\ud83d\ude33",
      pleading_face: "\ud83e\udd7a",
      frowning_face_with_open_mouth: "\ud83d\ude26",
      anguished_face: "\ud83d\ude27",
      fearful_face: "\ud83d\ude28",
      anxious_face_with_sweat: "\ud83d\ude30",
      sad_but_relieved_face: "\ud83d\ude25",
      crying_face: "\ud83d\ude22",
      loudly_crying_face: "\ud83d\ude2d",
      face_screaming_in_fear: "\ud83d\ude31",
      confounded_face: "\ud83d\ude16",
      persevering_face: "\ud83d\ude23",
      disappointed_face: "\ud83d\ude1e",
      downcast_face_with_sweat: "\ud83d\ude13",
      weary_face: "\ud83d\ude29",
      tired_face: "\ud83d\ude2b",
      yawning_face: "\ud83e\udd71",
      face_with_steam_from_nose: "\ud83d\ude24",
      pouting_face: "\ud83d\ude21",
      angry_face: "\ud83d\ude20",
      face_with_symbols_on_mouth: "\ud83e\udd2c",
      smiling_face_with_horns: "\ud83d\ude08",
      angry_face_with_horns: "\ud83d\udc7f",
      skull: "\ud83d\udc80",
      skull_and_crossbones: "\u2620\ufe0f",
      pile_of_poo: "\ud83d\udca9",
      clown_face: "\ud83e\udd21",
      ogre: "\ud83d\udc79",
      goblin: "\ud83d\udc7a",
      ghost: "\ud83d\udc7b",
      alien: "\ud83d\udc7d",
      alien_monster: "\ud83d\udc7e",
      robot: "\ud83e\udd16",
      grinning_cat: "\ud83d\ude3a",
      grinning_cat_with_smiling_eyes: "\ud83d\ude38",
      cat_with_tears_of_joy: "\ud83d\ude39",
      smiling_cat_with_heart_eyes: "\ud83d\ude3b",
      cat_with_wry_smile: "\ud83d\ude3c",
      kissing_cat: "\ud83d\ude3d",
      weary_cat: "\ud83d\ude40",
      crying_cat: "\ud83d\ude3f",
      pouting_cat: "\ud83d\ude3e",
      see_no_evil_monkey: "\ud83d\ude48",
      hear_no_evil_monkey: "\ud83d\ude49",
      speak_no_evil_monkey: "\ud83d\ude4a",
      kiss_mark: "\ud83d\udc8b",
      love_letter: "\ud83d\udc8c",
      heart_with_arrow: "\ud83d\udc98",
      heart_with_ribbon: "\ud83d\udc9d",
      sparkling_heart: "\ud83d\udc96",
      growing_heart: "\ud83d\udc97",
      beating_heart: "\ud83d\udc93",
      revolving_hearts: "\ud83d\udc9e",
      two_hearts: "\ud83d\udc95",
      heart_decoration: "\ud83d\udc9f",
      heart_exclamation: "\u2763\ufe0f",
      broken_heart: "\ud83d\udc94",
      red_heart: "\u2764\ufe0f",
      orange_heart: "\ud83e\udde1",
      yellow_heart: "\ud83d\udc9b",
      green_heart: "\ud83d\udc9a",
      blue_heart: "\ud83d\udc99",
      purple_heart: "\ud83d\udc9c",
      brown_heart: "\ud83e\udd0e",
      black_heart: "\ud83d\udda4",
      white_heart: "\ud83e\udd0d",
      hundred_points: "\ud83d\udcaf",
      anger_symbol: "\ud83d\udca2",
      collision: "\ud83d\udca5",
      dizzy: "\ud83d\udcab",
      sweat_droplets: "\ud83d\udca6",
      dashing_away: "\ud83d\udca8",
      hole: "\ud83d\udd73\ufe0f",
      bomb: "\ud83d\udca3",
      speech_balloon: "\ud83d\udcac",
      eye_in_speech_bubble: "\ud83d\udc41\u200d\ud83d\udde8",
      left_speech_bubble: "\ud83d\udde8\ufe0f",
      right_anger_bubble: "\ud83d\uddef\ufe0f",
      thought_balloon: "\ud83d\udcad",
      zzz: "\ud83d\udca4",
      waving_hand: "\ud83d\udc4b",
      raised_back_of_hand: "\ud83e\udd1a",
      hand_with_fingers_splayed: "\ud83d\udd90",
      raised_hand: "\u270b",
      vulcan_salute: "\ud83d\udd96",
      ok_hand: "\ud83d\udc4c",
      pinching_hand: "\ud83e\udd0f",
      victory_hand: "\u270c",
      crossed_fingers: "\ud83e\udd1e",
      love_you_gesture: "\ud83e\udd1f",
      sign_of_the_horns: "\ud83e\udd18",
      call_me_hand: "\ud83e\udd19",
      backhand_index_pointing_left: "\ud83d\udc48",
      backhand_index_pointing_right: "\ud83d\udc49",
      backhand_index_pointing_up: "\ud83d\udc46",
      middle_finger: "\ud83d\udd95",
      backhand_index_pointing_down: "\ud83d\udc47",
      index_pointing_up: "\u261d\ufe0f",
      thumbs_up: "\ud83d\udc4d",
      thumbs_down: "\ud83d\udc4e",
      raised_fist: "\u270a",
      oncoming_fist: "\ud83d\udc4a",
      left_facing_fist: "\ud83e\udd1b",
      right_facing_fist: "\ud83e\udd1c",
      clapping_hands: "\ud83d\udc4f",
      raising_hands: "\ud83d\ude4c",
      open_hands: "\ud83d\udc50",
      palms_up_together: "\ud83e\udd32",
      handshake: "\ud83e\udd1d",
      folded_hands: "\ud83d\ude4f",
      writing_hand: "\u270d\ufe0f",
      nail_polish: "\ud83d\udc85",
      selfie: "\ud83e\udd33",
      flexed_biceps: "\ud83d\udcaa",
      mechanical_arm: "\ud83e\uddbe",
      mechanical_leg: "\ud83e\uddbf",
      leg: "\ud83e\uddb5",
      foot: "\ud83e\uddb6",
      ear: "\ud83d\udc42",
      ear_with_hearing_aid: "\ud83e\uddbb",
      nose: "\ud83d\udc43",
      brain: "\ud83e\udde0",
      tooth: "\ud83e\uddb7",
      bone: "\ud83e\uddb4",
      eyes: "\ud83d\udc40",
      eye: "\ud83d\udc41\ufe0f",
      tongue: "\ud83d\udc45",
      mouth: "\ud83d\udc44",
      baby: "\ud83d\udc76",
      child: "\ud83e\uddd2",
      boy: "\ud83d\udc66",
      girl: "\ud83d\udc67",
      person: "\ud83e\uddd1",
      person_blond_hair: "\ud83d\udc71",
      man: "\ud83d\udc68",
      man_beard: "\ud83e\uddd4",
      man_red_hair: "\ud83d\udc68\u200d\ud83e\uddb0",
      man_curly_hair: "\ud83d\udc68\u200d\ud83e\uddb1",
      man_white_hair: "\ud83d\udc68\u200d\ud83e\uddb3",
      man_bald: "\ud83d\udc68\u200d\ud83e\uddb2",
      woman: "\ud83d\udc69",
      woman_red_hair: "\ud83d\udc69\u200d\ud83e\uddb0",
      person_red_hair: "\ud83e\uddd1\u200d\ud83e\uddb0",
      woman_curly_hair: "\ud83d\udc69\u200d\ud83e\uddb1",
      person_curly_hair: "\ud83e\uddd1\u200d\ud83e\uddb1",
      woman_white_hair: "\ud83d\udc69\u200d\ud83e\uddb3",
      person_white_hair: "\ud83e\uddd1\u200d\ud83e\uddb3",
      woman_bald: "\ud83d\udc69\u200d\ud83e\uddb2",
      person_bald: "\ud83e\uddd1\u200d\ud83e\uddb2",
      woman_blond_hair: "\ud83d\udc71\u200d\u2640\ufe0f",
      man_blond_hair: "\ud83d\udc71\u200d\u2642\ufe0f",
      older_person: "\ud83e\uddd3",
      old_man: "\ud83d\udc74",
      old_woman: "\ud83d\udc75",
      person_frowning: "\ud83d\ude4d",
      man_frowning: "\ud83d\ude4d\u200d\u2642",
      woman_frowning: "\ud83d\ude4d\u200d\u2640",
      person_pouting: "\ud83d\ude4e",
      man_pouting: "\ud83d\ude4e\u200d\u2642",
      woman_pouting: "\ud83d\ude4e\u200d\u2640",
      person_gesturing_no: "\ud83d\ude45",
      man_gesturing_no: "\ud83d\ude45\u200d\u2642",
      woman_gesturing_no: "\ud83d\ude45\u200d\u2640",
      person_gesturing_ok: "\ud83d\ude46",
      man_gesturing_ok: "\ud83d\ude46\u200d\u2642",
      woman_gesturing_ok: "\ud83d\ude46\u200d\u2640",
      person_tipping_hand: "\ud83d\udc81",
      man_tipping_hand: "\ud83d\udc81\u200d\u2642",
      woman_tipping_hand: "\ud83d\udc81\u200d\u2640",
      person_raising_hand: "\ud83d\ude4b",
      man_raising_hand: "\ud83d\ude4b\u200d\u2642",
      woman_raising_hand: "\ud83d\ude4b\u200d\u2640",
      deaf_person: "\ud83e\uddcf",
      deaf_man: "\ud83e\uddcf\u200d\u2642",
      deaf_woman: "\ud83e\uddcf\u200d\u2640",
      person_bowing: "\ud83d\ude47",
      man_bowing: "\ud83d\ude47\u200d\u2642",
      woman_bowing: "\ud83d\ude47\u200d\u2640",
      person_facepalming: "\ud83e\udd26",
      man_facepalming: "\ud83e\udd26\u200d\u2642",
      woman_facepalming: "\ud83e\udd26\u200d\u2640",
      person_shrugging: "\ud83e\udd37",
      man_shrugging: "\ud83e\udd37\u200d\u2642",
      woman_shrugging: "\ud83e\udd37\u200d\u2640",
      health_worker: "\ud83e\uddd1\u200d\u2695\ufe0f",
      man_health_worker: "\ud83d\udc68\u200d\u2695\ufe0f",
      woman_health_worker: "\ud83d\udc69\u200d\u2695\ufe0f",
      student: "\ud83e\uddd1\u200d\ud83c\udf93",
      man_student: "\ud83d\udc68\u200d\ud83c\udf93",
      woman_student: "\ud83d\udc69\u200d\ud83c\udf93",
      teacher: "\ud83e\uddd1\u200d\ud83c\udfeb",
      man_teacher: "\ud83d\udc68\u200d\ud83c\udfeb",
      woman_teacher: "\ud83d\udc69\u200d\ud83c\udfeb",
      judge: "\ud83e\uddd1\u200d\u2696\ufe0f",
      man_judge: "\ud83d\udc68\u200d\u2696\ufe0f",
      woman_judge: "\ud83d\udc69\u200d\u2696\ufe0f",
      farmer: "\ud83e\uddd1\u200d\ud83c\udf3e",
      man_farmer: "\ud83d\udc68\u200d\ud83c\udf3e",
      woman_farmer: "\ud83d\udc69\u200d\ud83c\udf3e",
      cook: "\ud83e\uddd1\u200d\ud83c\udf73",
      man_cook: "\ud83d\udc68\u200d\ud83c\udf73",
      woman_cook: "\ud83d\udc69\u200d\ud83c\udf73",
      mechanic: "\ud83e\uddd1\u200d\ud83d\udd27",
      man_mechanic: "\ud83d\udc68\u200d\ud83d\udd27",
      woman_mechanic: "\ud83d\udc69\u200d\ud83d\udd27",
      factory_worker: "\ud83e\uddd1\u200d\ud83c\udfed",
      man_factory_worker: "\ud83d\udc68\u200d\ud83c\udfed",
      woman_factory_worker: "\ud83d\udc69\u200d\ud83c\udfed",
      office_worker: "\ud83e\uddd1\u200d\ud83d\udcbc",
      man_office_worker: "\ud83d\udc68\u200d\ud83d\udcbc",
      woman_office_worker: "\ud83d\udc69\u200d\ud83d\udcbc",
      scientist: "\ud83e\uddd1\u200d\ud83d\udd2c",
      man_scientist: "\ud83d\udc68\u200d\ud83d\udd2c",
      woman_scientist: "\ud83d\udc69\u200d\ud83d\udd2c",
      technologist: "\ud83e\uddd1\u200d\ud83d\udcbb",
      man_technologist: "\ud83d\udc68\u200d\ud83d\udcbb",
      woman_technologist: "\ud83d\udc69\u200d\ud83d\udcbb",
      singer: "\ud83e\uddd1\u200d\ud83c\udfa4",
      man_singer: "\ud83d\udc68\u200d\ud83c\udfa4",
      woman_singer: "\ud83d\udc69\u200d\ud83c\udfa4",
      artist: "\ud83e\uddd1\u200d\ud83c\udfa8",
      man_artist: "\ud83d\udc68\u200d\ud83c\udfa8",
      woman_artist: "\ud83d\udc69\u200d\ud83c\udfa8",
      pilot: "\ud83e\uddd1\u200d\u2708\ufe0f",
      man_pilot: "\ud83d\udc68\u200d\u2708\ufe0f",
      woman_pilot: "\ud83d\udc69\u200d\u2708\ufe0f",
      astronaut: "\ud83e\uddd1\u200d\ud83d\ude80",
      man_astronaut: "\ud83d\udc68\u200d\ud83d\ude80",
      woman_astronaut: "\ud83d\udc69\u200d\ud83d\ude80",
      firefighter: "\ud83e\uddd1\u200d\ud83d\ude92",
      man_firefighter: "\ud83d\udc68\u200d\ud83d\ude92",
      woman_firefighter: "\ud83d\udc69\u200d\ud83d\ude92",
      police_officer: "\ud83d\udc6e",
      man_police_officer: "\ud83d\udc6e\u200d\u2642",
      woman_police_officer: "\ud83d\udc6e\u200d\u2640",
      detective: "\ud83d\udd75",
      man_detective: "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f",
      woman_detective: "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",
      guard: "\ud83d\udc82",
      man_guard: "\ud83d\udc82\u200d\u2642",
      woman_guard: "\ud83d\udc82\u200d\u2640",
      construction_worker: "\ud83d\udc77",
      man_construction_worker: "\ud83d\udc77\u200d\u2642",
      woman_construction_worker: "\ud83d\udc77\u200d\u2640",
      prince: "\ud83e\udd34",
      princess: "\ud83d\udc78",
      person_wearing_turban: "\ud83d\udc73",
      man_wearing_turban: "\ud83d\udc73\u200d\u2642",
      woman_wearing_turban: "\ud83d\udc73\u200d\u2640",
      man_with_skullcap: "\ud83d\udc72",
      woman_with_headscarf: "\ud83e\uddd5",
      man_in_tuxedo: "\ud83e\udd35",
      bride_with_veil: "\ud83d\udc70",
      pregnant_woman: "\ud83e\udd30",
      breast_feeding: "\ud83e\udd31",
      baby_angel: "\ud83d\udc7c",
      santa_claus: "\ud83c\udf85",
      mrs_claus: "\ud83e\udd36",
      superhero: "\ud83e\uddb8",
      man_superhero: "\ud83e\uddb8\u200d\u2642",
      woman_superhero: "\ud83e\uddb8\u200d\u2640",
      supervillain: "\ud83e\uddb9",
      man_supervillain: "\ud83e\uddb9\u200d\u2642",
      woman_supervillain: "\ud83e\uddb9\u200d\u2640",
      mage: "\ud83e\uddd9",
      man_mage: "\ud83e\uddd9\u200d\u2642",
      woman_mage: "\ud83e\uddd9\u200d\u2640",
      fairy: "\ud83e\uddda",
      man_fairy: "\ud83e\uddda\u200d\u2642",
      woman_fairy: "\ud83e\uddda\u200d\u2640",
      vampire: "\ud83e\udddb",
      man_vampire: "\ud83e\udddb\u200d\u2642",
      woman_vampire: "\ud83e\udddb\u200d\u2640",
      merperson: "\ud83e\udddc",
      merman: "\ud83e\udddc\u200d\u2642\ufe0f",
      mermaid: "\ud83e\udddc\u200d\u2640\ufe0f",
      elf: "\ud83e\udddd",
      man_elf: "\ud83e\udddd\u200d\u2642",
      woman_elf: "\ud83e\udddd\u200d\u2640",
      genie: "\ud83e\uddde",
      man_genie: "\ud83e\uddde\u200d\u2642",
      woman_genie: "\ud83e\uddde\u200d\u2640",
      zombie: "\ud83e\udddf",
      man_zombie: "\ud83e\udddf\u200d\u2642",
      woman_zombie: "\ud83e\udddf\u200d\u2640",
      person_getting_massage: "\ud83d\udc86",
      man_getting_massage: "\ud83d\udc86\u200d\u2642",
      woman_getting_massage: "\ud83d\udc86\u200d\u2640",
      person_getting_haircut: "\ud83d\udc87",
      man_getting_haircut: "\ud83d\udc87\u200d\u2642",
      woman_getting_haircut: "\ud83d\udc87\u200d\u2640",
      person_walking: "\ud83d\udeb6",
      man_walking: "\ud83d\udeb6\u200d\u2642",
      woman_walking: "\ud83d\udeb6\u200d\u2640",
      person_standing: "\ud83e\uddcd",
      man_standing: "\ud83e\uddcd\u200d\u2642",
      woman_standing: "\ud83e\uddcd\u200d\u2640",
      person_kneeling: "\ud83e\uddce",
      man_kneeling: "\ud83e\uddce\u200d\u2642",
      woman_kneeling: "\ud83e\uddce\u200d\u2640",
      person_with_probing_cane: "\ud83e\uddd1\u200d\ud83e\uddaf",
      man_with_probing_cane: "\ud83d\udc68\u200d\ud83e\uddaf",
      woman_with_probing_cane: "\ud83d\udc69\u200d\ud83e\uddaf",
      person_in_motorized_wheelchair: "\ud83e\uddd1\u200d\ud83e\uddbc",
      man_in_motorized_wheelchair: "\ud83d\udc68\u200d\ud83e\uddbc",
      woman_in_motorized_wheelchair: "\ud83d\udc69\u200d\ud83e\uddbc",
      person_in_manual_wheelchair: "\ud83e\uddd1\u200d\ud83e\uddbd",
      man_in_manual_wheelchair: "\ud83d\udc68\u200d\ud83e\uddbd",
      woman_in_manual_wheelchair: "\ud83d\udc69\u200d\ud83e\uddbd",
      person_running: "\ud83c\udfc3",
      man_running: "\ud83c\udfc3\u200d\u2642",
      woman_running: "\ud83c\udfc3\u200d\u2640",
      woman_dancing: "\ud83d\udc83",
      man_dancing: "\ud83d\udd7a",
      man_in_suit_levitating: "\ud83d\udd74",
      people_with_bunny_ears: "\ud83d\udc6f",
      men_with_bunny_ears: "\ud83d\udc6f\u200d\u2642",
      women_with_bunny_ears: "\ud83d\udc6f\u200d\u2640",
      person_in_steamy_room: "\ud83e\uddd6",
      man_in_steamy_room: "\ud83e\uddd6\u200d\u2642\ufe0f",
      woman_in_steamy_room: "\ud83e\uddd6\u200d\u2640\ufe0f",
      person_climbing: "\ud83e\uddd7",
      man_climbing: "\ud83e\uddd7\u200d\u2642\ufe0f",
      woman_climbing: "\ud83e\uddd7\u200d\u2640\ufe0f",
      person_fencing: "\ud83e\udd3a",
      horse_racing: "\ud83c\udfc7",
      skier: "\u26f7\ufe0f",
      snowboarder: "\ud83c\udfc2",
      person_golfing: "\ud83c\udfcc",
      man_golfing: "\ud83c\udfcc\u2642\ufe0f",
      woman_golfing: "\ud83c\udfcc\u200d\u2640\ufe0f",
      person_surfing: "\ud83c\udfc4",
      man_surfing: "\ud83c\udfc4\u200d\u2642",
      woman_surfing: "\ud83c\udfc4\u200d\u2640",
      person_rowing_boat: "\ud83d\udea3",
      man_rowing_boat: "\ud83d\udea3\u200d\u2642",
      woman_rowing_boat: "\ud83d\udea3\u200d\u2640",
      person_swimming: "\ud83c\udfca",
      man_swimming: "\ud83c\udfca\u200d\u2642",
      woman_swimming: "\ud83c\udfca\u200d\u2640",
      person_bouncing_ball: "\u26f9",
      man_bouncing_ball: "\u26f9\ufe0f\u200d\u2642\ufe0f",
      woman_bouncing_ball: "\u26f9\ufe0f\u200d\u2640\ufe0f",
      person_lifting_weights: "\ud83c\udfcb",
      man_lifting_weights: "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
      woman_lifting_weights: "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",
      person_biking: "\ud83d\udeb4",
      man_biking: "\ud83d\udeb4\u200d\u2642",
      woman_biking: "\ud83d\udeb4\u200d\u2640",
      person_mountain_biking: "\ud83d\udeb5",
      man_mountain_biking: "\ud83d\udeb5\u200d\u2642",
      woman_mountain_biking: "\ud83d\udeb5\u200d\u2640",
      person_cartwheeling: "\ud83e\udd38",
      man_cartwheeling: "\ud83e\udd38\u200d\u2642",
      woman_cartwheeling: "\ud83e\udd38\u200d\u2640",
      people_wrestling: "\ud83e\udd3c",
      men_wrestling: "\ud83e\udd3c\u200d\u2642",
      women_wrestling: "\ud83e\udd3c\u200d\u2640",
      person_playing_water_polo: "\ud83e\udd3d",
      man_playing_water_polo: "\ud83e\udd3d\u200d\u2642",
      woman_playing_water_polo: "\ud83e\udd3d\u200d\u2640",
      person_playing_handball: "\ud83e\udd3e",
      man_playing_handball: "\ud83e\udd3e\u200d\u2642",
      woman_playing_handball: "\ud83e\udd3e\u200d\u2640",
      person_juggling: "\ud83e\udd39",
      man_juggling: "\ud83e\udd39\u200d\u2642\ufe0f",
      woman_juggling: "\ud83e\udd39\u200d\u2640\ufe0f",
      person_in_lotus_position: "\ud83e\uddd8",
      man_in_lotus_position: "\ud83e\uddd8\u200d\u2642\ufe0f",
      woman_in_lotus_position: "\ud83e\uddd8\u200d\u2640\ufe0f",
      person_taking_bath: "\ud83d\udec0",
      person_in_bed: "\ud83d\udecc",
      people_holding_hands: "\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1",
      women_holding_hands: "\ud83d\udc6d",
      woman_and_man_holding_hands: "\ud83d\udc6b",
      men_holding_hands: "\ud83d\udc6c",
      kiss: "\ud83d\udc8b",
      kiss_woman_man:
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      kiss_man_man:
        "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      kiss_woman_woman:
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
      couple_with_heart: "\ud83d\udc91",
      couple_with_heart_woman_man:
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68",
      couple_with_heart_man_man: "\ud83d\udc68\u200d\u2764\u200d\ud83d\udc68",
      couple_with_heart_woman_woman:
        "\ud83d\udc69\u200d\u2764\u200d\ud83d\udc69",
      family: "\ud83d\udc6a",
      family_man_woman_boy: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
      family_man_woman_girl: "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
      family_man_woman_girl_boy:
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      family_man_woman_boy_boy:
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      family_man_woman_girl_girl:
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      family_man_man_boy: "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",
      family_man_man_girl: "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",
      family_man_man_girl_boy:
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      family_man_man_boy_boy:
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      family_man_man_girl_girl:
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      family_woman_woman_boy:
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
      family_woman_woman_girl:
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",
      family_woman_woman_girl_boy:
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      family_woman_woman_boy_boy:
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      family_woman_woman_girl_girl:
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      family_man_boy: "\ud83d\udc68\u200d\ud83d\udc66",
      family_man_boy_boy: "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      family_man_girl: "\ud83d\udc68\u200d\ud83d\udc67",
      family_man_girl_boy: "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      family_man_girl_girl: "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      family_woman_boy: "\ud83d\udc69\u200d\ud83d\udc66",
      family_woman_boy_boy: "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      family_woman_girl: "\ud83d\udc69\u200d\ud83d\udc67",
      family_woman_girl_boy: "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      family_woman_girl_girl:
        "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      speaking_head: "\ud83d\udde3",
      bust_in_silhouette: "\ud83d\udc64",
      busts_in_silhouette: "\ud83d\udc65",
      footprints: "\ud83d\udc63",
      monkey_face: "\ud83d\udc35",
      monkey: "\ud83d\udc12",
      gorilla: "\ud83e\udd8d",
      orangutan: "\ud83e\udda7",
      dog_face: "\ud83d\udc36",
      dog: "\ud83d\udc36",
      guide_dog: "\ud83e\uddae",
      service_dog: "\ud83d\udc15\u200d\ud83e\uddba",
      poodle: "\ud83d\udc29",
      wolf: "\ud83d\udc3a",
      fox: "\ud83e\udd8a",
      raccoon: "\ud83e\udd9d",
      cat_face: "\ud83d\udc31",
      cat: "\ud83d\udc31",
      lion: "\ud83e\udd81",
      tiger_face: "\ud83d\udc2f",
      tiger: "\ud83d\udc2f",
      leopard: "\ud83d\udc06",
      horse_face: "\ud83d\udc34",
      horse: "\ud83d\udc34",
      unicorn: "\ud83e\udd84",
      zebra: "\ud83e\udd93",
      deer: "\ud83e\udd8c",
      cow_face: "\ud83d\udc2e",
      ox: "\ud83d\udc02",
      water_buffalo: "\ud83d\udc03",
      cow: "\ud83d\udc2e",
      pig_face: "\ud83d\udc37",
      pig: "\ud83d\udc37",
      boar: "\ud83d\udc17",
      pig_nose: "\ud83d\udc3d",
      ram: "\ud83d\udc0f",
      ewe: "\ud83d\udc11",
      goat: "\ud83d\udc10",
      camel: "\ud83d\udc2b",
      two_hump_camel: "\ud83d\udc2b",
      llama: "\ud83e\udd99",
      giraffe: "\ud83e\udd92",
      elephant: "\ud83d\udc18",
      rhinoceros: "\ud83e\udd8f",
      hippopotamus: "\ud83e\udd9b",
      mouse_face: "\ud83d\udc2d",
      mouse: "\ud83d\udc2d",
      rat: "\ud83d\udc00",
      hamster: "\ud83d\udc39",
      rabbit_face: "\ud83d\udc30",
      rabbit: "\ud83d\udc30",
      chipmunk: "\ud83d\udc3f\ufe0f",
      hedgehog: "\ud83e\udd94",
      bat: "\ud83e\udd87",
      bear: "\ud83d\udc3b",
      koala: "\ud83d\udc28",
      panda: "\ud83d\udc3c",
      sloth: "\ud83e\udda5",
      otter: "\ud83e\udda6",
      skunk: "\ud83e\udda8",
      kangaroo: "\ud83e\udd98",
      badger: "\ud83e\udda1",
      paw_prints: "\ud83d\udc3e",
      turkey: "\ud83e\udd83",
      chicken: "\ud83d\udc14",
      rooster: "\ud83d\udc13",
      hatching_chick: "\ud83d\udc23",
      baby_chick: "\ud83d\udc24",
      front_facing_baby_chick: "\ud83d\udc25",
      bird: "\ud83d\udc26",
      penguin: "\ud83d\udc27",
      dove: "\ud83d\udd4a",
      eagle: "\ud83e\udd85",
      duck: "\ud83e\udd86",
      swan: "\ud83e\udda2",
      owl: "\ud83e\udd89",
      flamingo: "\ud83e\udda9",
      peacock: "\ud83e\udd9a",
      parrot: "\ud83e\udd9c",
      frog: "\ud83d\udc38",
      crocodile: "\ud83d\udc0a",
      turtle: "\ud83d\udc22",
      lizard: "\ud83e\udd8e",
      snake: "\ud83d\udc0d",
      dragon_face: "\ud83d\udc32",
      dragon: "\ud83d\udc09",
      sauropod: "\ud83e\udd95",
      t_rex: "\ud83e\udd96",
      spouting_whale: "\ud83d\udc33",
      whale: "\ud83d\udc33",
      dolphin: "\ud83d\udc2c",
      fish: "\ud83d\udc1f",
      tropical_fish: "\ud83d\udc20",
      blowfish: "\ud83d\udc21",
      shark: "\ud83e\udd88",
      octopus: "\ud83d\udc19",
      spiral_shell: "\ud83d\udc1a",
      snail: "\ud83d\udc0c",
      butterfly: "\ud83e\udd8b",
      bug: "\ud83d\udc1b",
      ant: "\ud83d\udc1c",
      honeybee: "\ud83d\udc1d",
      lady_beetle: "\ud83d\udc1e",
      cricket: "\ud83e\udd97",
      spider: "\ud83d\udd77\ufe0f",
      spider_web: "\ud83d\udd78\ufe0f",
      scorpion: "\ud83e\udd82",
      mosquito: "\ud83e\udd9f",
      microbe: "\ud83e\udda0",
      bouquet: "\ud83d\udc90",
      cherry_blossom: "\ud83c\udf38",
      white_flower: "\ud83d\udcae",
      rosette: "\ud83c\udff5\ufe0f",
      rose: "\ud83c\udf39",
      wilted_flower: "\ud83e\udd40",
      hibiscus: "\ud83c\udf3a",
      sunflower: "\ud83c\udf3b",
      blossom: "\ud83c\udf3c",
      tulip: "\ud83c\udf37",
      seedling: "\ud83c\udf31",
      evergreen_tree: "\ud83c\udf32",
      deciduous_tree: "\ud83c\udf33",
      palm_tree: "\ud83c\udf34",
      cactus: "\ud83c\udf35",
      sheaf_of_rice: "\ud83c\udf3e",
      herb: "\ud83c\udf3f",
      shamrock: "\u2618\ufe0f",
      four_leaf_clover: "\ud83c\udf40",
      maple_leaf: "\ud83c\udf41",
      fallen_leaf: "\ud83c\udf42",
      leaf_fluttering_in_wind: "\ud83c\udf43",
      grapes: "\ud83c\udf47",
      melon: "\ud83c\udf48",
      watermelon: "\ud83c\udf49",
      tangerine: "\ud83c\udf4a",
      lemon: "\ud83c\udf4b",
      banana: "\ud83c\udf4c",
      pineapple: "\ud83c\udf4d",
      mango: "\ud83e\udd6d",
      red_apple: "\ud83c\udf4e",
      green_apple: "\ud83c\udf4f",
      pear: "\ud83c\udf50",
      peach: "\ud83c\udf51",
      cherries: "\ud83c\udf52",
      strawberry: "\ud83c\udf53",
      kiwi_fruit: "\ud83e\udd5d",
      tomato: "\ud83c\udf45",
      coconut: "\ud83e\udd65",
      avocado: "\ud83e\udd51",
      eggplant: "\ud83c\udf46",
      potato: "\ud83e\udd54",
      carrot: "\ud83e\udd55",
      ear_of_corn: "\ud83c\udf3d",
      hot_pepper: "\ud83c\udf36\ufe0f",
      cucumber: "\ud83e\udd52",
      leafy_green: "\ud83e\udd6c",
      broccoli: "\ud83e\udd66",
      garlic: "\ud83e\uddc4",
      onion: "\ud83e\uddc5",
      mushroom: "\ud83c\udf44",
      peanuts: "\ud83e\udd5c",
      chestnut: "\ud83c\udf30",
      bread: "\ud83c\udf5e",
      croissant: "\ud83e\udd50",
      baguette_bread: "\ud83e\udd56",
      pretzel: "\ud83e\udd68",
      bagel: "\ud83e\udd6f",
      pancakes: "\ud83e\udd5e",
      waffle: "\ud83e\uddc7",
      cheese_wedge: "\ud83e\uddc0",
      meat_on_bone: "\ud83c\udf56",
      poultry_leg: "\ud83c\udf57",
      cut_of_meat: "\ud83e\udd69",
      bacon: "\ud83e\udd53",
      hamburger: "\ud83c\udf54",
      french_fries: "\ud83c\udf5f",
      pizza: "\ud83c\udf55",
      hot_dog: "\ud83c\udf2d",
      sandwich: "\ud83e\udd6a",
      taco: "\ud83c\udf2e",
      burrito: "\ud83c\udf2f",
      stuffed_flatbread: "\ud83e\udd59",
      falafel: "\ud83e\uddc6",
      egg: "\ud83e\udd5a",
      cooking: "\ud83c\udf73",
      shallow_pan_of_food: "\ud83e\udd58",
      pot_of_food: "\ud83c\udf72",
      bowl_with_spoon: "\ud83e\udd63",
      green_salad: "\ud83e\udd57",
      popcorn: "\ud83c\udf7f",
      butter: "\ud83e\uddc8",
      salt: "\ud83e\uddc2",
      canned_food: "\ud83e\udd6b",
      bento_box: "\ud83c\udf71",
      rice_cracker: "\ud83c\udf58",
      rice_ball: "\ud83c\udf59",
      cooked_rice: "\ud83c\udf5a",
      curry_rice: "\ud83c\udf5b",
      steaming_bowl: "\ud83c\udf5c",
      spaghetti: "\ud83c\udf5d",
      roasted_sweet_potato: "\ud83c\udf60",
      oden: "\ud83c\udf62",
      sushi: "\ud83c\udf63",
      fried_shrimp: "\ud83c\udf64",
      fish_cake_with_swirl: "\ud83c\udf65",
      moon_cake: "\ud83e\udd6e",
      dango: "\ud83c\udf61",
      dumpling: "\ud83e\udd5f",
      fortune_cookie: "\ud83e\udd60",
      takeout_box: "\ud83e\udd61",
      crab: "\ud83e\udd80",
      lobster: "\ud83e\udd9e",
      shrimp: "\ud83e\udd90",
      squid: "\ud83e\udd91",
      oyster: "\ud83e\uddaa",
      soft_ice_cream: "\ud83c\udf66",
      shaved_ice: "\ud83c\udf67",
      ice_cream: "\ud83c\udf68",
      doughnut: "\ud83c\udf69",
      cookie: "\ud83c\udf6a",
      birthday_cake: "\ud83c\udf82",
      shortcake: "\ud83c\udf70",
      cupcake: "\ud83e\uddc1",
      pie: "\ud83e\udd67",
      chocolate_bar: "\ud83c\udf6b",
      candy: "\ud83c\udf6c",
      lollipop: "\ud83c\udf6d",
      custard: "\ud83c\udf6e",
      honey_pot: "\ud83c\udf6f",
      baby_bottle: "\ud83c\udf7c",
      glass_of_milk: "\ud83e\udd5b",
      hot_beverage: "\u2615",
      teacup_without_handle: "\ud83c\udf75",
      sake: "\ud83c\udf76",
      bottle_with_popping_cork: "\ud83c\udf7e",
      wine_glass: "\ud83c\udf77",
      cocktail_glass: "\ud83c\udf78",
      tropical_drink: "\ud83c\udf79",
      beer_mug: "\ud83c\udf7a",
      clinking_beer_mugs: "\ud83c\udf7b",
      clinking_glasses: "\ud83e\udd42",
      tumbler_glass: "\ud83e\udd43",
      cup_with_straw: "\ud83e\udd64",
      beverage_box: "\ud83e\uddc3",
      mate: "\ud83e\uddc9",
      ice: "\ud83e\uddca",
      chopsticks: "\ud83e\udd62",
      fork_and_knife_with_plate: "\ud83c\udf7d",
      fork_and_knife: "\ud83c\udf74",
      spoon: "\ud83e\udd44",
      kitchen_knife: "\ud83d\udd2a",
      amphora: "\ud83c\udffa",
      globe_showing_europe_africa: "\ud83c\udf0d",
      globe_showing_americas: "\ud83c\udf0e",
      globe_showing_asia_australia: "\ud83c\udf0f",
      globe_with_meridians: "\ud83c\udf10",
      world_map: "\ud83d\uddfa\ufe0f",
      map_of_japan: "\ud83d\uddfe",
      compass: "\ud83e\udded",
      snow_capped_mountain: "\ud83c\udfd4\ufe0f",
      mountain: "\u26f0\ufe0f",
      volcano: "\ud83c\udf0b",
      mount_fuji: "\ud83d\uddfb",
      camping: "\ud83c\udfd5\ufe0f",
      beach_with_umbrella: "\ud83c\udfd6\ufe0f",
      desert: "\ud83c\udfdc\ufe0f",
      desert_island: "\ud83c\udfdd\ufe0f",
      national_park: "\ud83c\udfde\ufe0f",
      stadium: "\ud83c\udfdf\ufe0f",
      classical_building: "\ud83c\udfdb\ufe0f",
      building_construction: "\ud83c\udfd7\ufe0f",
      brick: "\ud83e\uddf1",
      houses: "\ud83c\udfd8",
      derelict_house: "\ud83c\udfda",
      house: "\ud83c\udfe0",
      house_with_garden: "\ud83c\udfe1",
      office_building: "\ud83c\udfe2",
      japanese_post_office: "\ud83c\udfe3",
      post_office: "\ud83c\udfe3",
      hospital: "\ud83c\udfe5",
      bank: "\ud83c\udfe6",
      hotel: "\ud83c\udfe8",
      love_hotel: "\ud83c\udfe9",
      convenience_store: "\ud83c\udfea",
      school: "\ud83c\udfeb",
      department_store: "\ud83c\udfec",
      factory: "\ud83c\udfed",
      japanese_castle: "\ud83c\udfef",
      castle: "\ud83c\udff0",
      wedding: "\ud83d\udc92",
      tokyo_tower: "\ud83d\uddfc",
      statue_of_liberty: "\ud83d\uddfd",
      church: "\u26ea",
      mosque: "\ud83d\udd4c",
      hindu_temple: "\ud83d\uded5",
      synagogue: "\ud83d\udd4d",
      shinto_shrine: "\u26e9\ufe0f",
      kaaba: "\ud83d\udd4b",
      fountain: "\u26f2",
      tent: "\u26fa",
      foggy: "\ud83c\udf01",
      night_with_stars: "\ud83c\udf03",
      cityscape: "\ud83c\udfd9\ufe0f",
      sunrise_over_mountains: "\ud83c\udf04",
      sunrise: "\ud83c\udf05",
      cityscape_at_dusk: "\ud83c\udf06",
      sunset: "\ud83c\udf07",
      bridge_at_night: "\ud83c\udf09",
      hot_springs: "\u2668",
      carousel_horse: "\ud83c\udfa0",
      ferris_wheel: "\ud83c\udfa1",
      roller_coaster: "\ud83c\udfa2",
      barber_pole: "\ud83d\udc88",
      circus_tent: "\ud83c\udfaa",
      locomotive: "\ud83d\ude82",
      railway_car: "\ud83d\ude83",
      high_speed_train: "\ud83d\ude84",
      bullet_train: "\ud83d\ude85",
      train: "\ud83d\ude8b",
      metro: "\ud83d\ude87",
      light_rail: "\ud83d\ude88",
      station: "\ud83d\ude89",
      tram: "\ud83d\ude8a",
      monorail: "\ud83d\ude9d",
      mountain_railway: "\ud83d\ude9e",
      tram_car: "\ud83d\ude8b",
      bus: "\ud83d\ude8c",
      oncoming_bus: "\ud83d\ude8d",
      trolleybus: "\ud83d\ude8e",
      minibus: "\ud83d\ude90",
      ambulance: "\ud83d\ude91",
      fire_engine: "\ud83d\ude92",
      police_car: "\ud83d\ude93",
      oncoming_police_car: "\ud83d\ude94",
      taxi: "\ud83d\ude95",
      oncoming_taxi: "\ud83d\ude96",
      automobile: "\ud83d\ude97",
      oncoming_automobile: "\ud83d\ude98",
      sport_utility_vehicle: "\ud83d\ude99",
      delivery_truck: "\ud83d\ude9a",
      articulated_lorry: "\ud83d\ude9b",
      tractor: "\ud83d\ude9c",
      racing_car: "\ud83c\udfce\ufe0f",
      motorcycle: "\ud83c\udfcd",
      motor_scooter: "\ud83d\udef5",
      manual_wheelchair: "\ud83e\uddbd",
      motorized_wheelchair: "\ud83e\uddbc",
      auto_rickshaw: "\ud83d\udefa",
      bicycle: "\ud83d\udeb2",
      kick_scooter: "\ud83d\udef4",
      skateboard: "\ud83d\udef9",
      bus_stop: "\ud83d\ude8f",
      motorway: "\ud83d\udee3\ufe0f",
      railway_track: "\ud83d\udee4\ufe0f",
      oil_drum: "\ud83d\udee2\ufe0f",
      fuel_pump: "\u26fd",
      police_car_light: "\ud83d\udea8",
      horizontal_traffic_light: "\ud83d\udea5",
      vertical_traffic_light: "\ud83d\udea6",
      stop_sign: "\ud83d\uded1",
      construction: "\ud83d\udea7",
      anchor: "\u2693",
      sailboat: "\u26f5",
      canoe: "\ud83d\udef6",
      speedboat: "\ud83d\udea4",
      passenger_ship: "\ud83d\udef3\ufe0f",
      ferry: "\u26f4\ufe0f",
      motor_boat: "\ud83d\udee5\ufe0f",
      ship: "\ud83d\udea2",
      airplane: "\u2708\ufe0f",
      small_airplane: "\ud83d\udee9\ufe0f",
      airplane_departure: "\ud83d\udeeb",
      airplane_arrival: "\ud83d\udeec",
      parachute: "\ud83e\ude82",
      seat: "\ud83d\udcba",
      helicopter: "\ud83d\ude81",
      suspension_railway: "\ud83d\ude9f",
      mountain_cableway: "\ud83d\udea0",
      aerial_tramway: "\ud83d\udea1",
      satellite: "\ud83d\udef0\ufe0f",
      rocket: "\ud83d\ude80",
      flying_saucer: "\ud83d\udef8",
      bellhop_bell: "\ud83d\udece\ufe0f",
      luggage: "\ud83e\uddf3",
      hourglass_done: "\u231b",
      hourglass_not_done: "\u23f3",
      watch: "\u231a",
      alarm_clock: "\u23f0",
      stopwatch: "\u23f1\ufe0f",
      timer_clock: "\u23f2\ufe0f",
      mantelpiece_clock: "\ud83d\udd70\ufe0f",
      twelve_o_clock: "\ud83d\udd5b",
      twelve_thirty: "\ud83d\udd67",
      one_o_clock: "\ud83d\udd50",
      one_thirty: "\ud83d\udd5c",
      two_o_clock: "\ud83d\udd51",
      two_thirty: "\ud83d\udd5d",
      three_o_clock: "\ud83d\udd52",
      three_thirty: "\ud83d\udd5e",
      four_o_clock: "\ud83d\udd53",
      four_thirty: "\ud83d\udd5f",
      five_o_clock: "\ud83d\udd54",
      five_thirty: "\ud83d\udd60",
      six_o_clock: "\ud83d\udd55",
      six_thirty: "\ud83d\udd61",
      seven_o_clock: "\ud83d\udd56",
      seven_thirty: "\ud83d\udd62",
      eight_o_clock: "\ud83d\udd57",
      eight_thirty: "\ud83d\udd63",
      nine_o_clock: "\ud83d\udd58",
      nine_thirty: "\ud83d\udd64",
      ten_o_clock: "\ud83d\udd59",
      ten_thirty: "\ud83d\udd65",
      eleven_o_clock: "\ud83d\udd5a",
      eleven_thirty: "\ud83d\udd66",
      new_moon: "\ud83c\udf11",
      waxing_crescent_moon: "\ud83c\udf12",
      first_quarter_moon: "\ud83c\udf13",
      waxing_gibbous_moon: "\ud83c\udf14",
      full_moon: "\ud83c\udf15",
      waning_gibbous_moon: "\ud83c\udf16",
      last_quarter_moon: "\ud83c\udf17",
      waning_crescent_moon: "\ud83c\udf18",
      crescent_moon: "\ud83c\udf19",
      new_moon_face: "\ud83c\udf1a",
      first_quarter_moon_face: "\ud83c\udf1b",
      last_quarter_moon_face: "\ud83c\udf1c",
      thermometer: "\ud83c\udf21\ufe0f",
      sun: "\u2600\ufe0f",
      full_moon_face: "\ud83c\udf1d",
      sun_with_face: "\ud83c\udf1e",
      ringed_planet: "\ud83e\ude90",
      star: "\u2b50",
      glowing_star: "\ud83c\udf1f",
      shooting_star: "\ud83c\udf20",
      milky_way: "\ud83c\udf0c",
      cloud: "\u2601\ufe0f",
      sun_behind_cloud: "\u26c5",
      cloud_with_lightning_and_rain: "\u26c8",
      sun_behind_small_cloud: "\ud83c\udf24",
      sun_behind_large_cloud: "\ud83c\udf25",
      sun_behind_rain_cloud: "\ud83c\udf26",
      cloud_with_rain: "\ud83c\udf27",
      cloud_with_snow: "\ud83c\udf28",
      cloud_with_lightning: "\ud83c\udf29",
      tornado: "\ud83c\udf2a\ufe0f",
      fog: "\ud83c\udf2b\ufe0f",
      wind_face: "\ud83c\udf2c",
      cyclone: "\ud83c\udf00",
      rainbow: "\ud83c\udf08",
      closed_umbrella: "\ud83c\udf02",
      umbrella: "\u2602\ufe0f",
      umbrella_with_rain_drops: "\u2614",
      umbrella_on_ground: "\u26f1\ufe0f",
      high_voltage: "\u26a1",
      snowflake: "\u2744\ufe0f",
      snowman: "\u2603\ufe0f",
      snowman_without_snow: "\u26c4",
      comet: "\u2604\ufe0f",
      fire: "\ud83d\udd25",
      droplet: "\ud83d\udca7",
      water_wave: "\ud83c\udf0a",
      jack_o_lantern: "\ud83c\udf83",
      christmas_tree: "\ud83c\udf84",
      fireworks: "\ud83c\udf86",
      sparkler: "\ud83c\udf87",
      firecracker: "\ud83e\udde8",
      sparkles: "\u2728",
      balloon: "\ud83c\udf88",
      party_popper: "\ud83c\udf89",
      confetti_ball: "\ud83c\udf8a",
      tanabata_tree: "\ud83c\udf8b",
      pine_decoration: "\ud83c\udf8d",
      japanese_dolls: "\ud83c\udf8e",
      carp_streamer: "\ud83c\udf8f",
      wind_chime: "\ud83c\udf90",
      moon_viewing_ceremony: "\ud83c\udf91",
      red_envelope: "\ud83e\udde7",
      ribbon: "\ud83c\udf80",
      wrapped_gift: "\ud83c\udf81",
      reminder_ribbon: "\ud83c\udf97\ufe0f",
      admission_tickets: "\ud83c\udf9f\ufe0f",
      ticket: "\ud83c\udfab",
      military_medal: "\ud83c\udf96",
      trophy: "\ud83c\udfc6",
      sports_medal: "\ud83c\udfc5",
      "1st_place_medal": "\ud83e\udd47",
      "2nd_place_medal": "\ud83e\udd48",
      "3rd_place_medal": "\ud83e\udd49",
      soccer_ball: "\u26bd",
      baseball: "\u26be",
      softball: "\ud83e\udd4e",
      basketball: "\ud83c\udfc0",
      volleyball: "\ud83c\udfd0",
      american_football: "\ud83c\udfc8",
      rugby_football: "\ud83c\udfc9",
      tennis: "\ud83c\udfbe",
      flying_disc: "\ud83e\udd4f",
      bowling: "\ud83c\udfb3",
      cricket_game: "\ud83c\udfcf",
      field_hockey: "\ud83c\udfd1",
      ice_hockey: "\ud83c\udfd2",
      lacrosse: "\ud83e\udd4d",
      ping_pong: "\ud83c\udfd3",
      badminton: "\ud83c\udff8",
      boxing_glove: "\ud83e\udd4a",
      martial_arts_uniform: "\ud83e\udd4b",
      goal_net: "\ud83e\udd45",
      flag_in_hole: "\u26f3",
      ice_skate: "\u26f8\ufe0f",
      fishing_pole: "\ud83c\udfa3",
      diving_mask: "\ud83e\udd3f",
      running_shirt: "\ud83c\udfbd",
      skis: "\ud83c\udfbf",
      sled: "\ud83d\udef7",
      curling_stone: "\ud83e\udd4c",
      direct_hit: "\ud83c\udfaf",
      yo_yo: "\ud83e\ude80",
      kite: "\ud83e\ude81",
      pool_8_ball: "\ud83c\udfb1",
      crystal_ball: "\ud83d\udd2e",
      nazar_amulet: "\ud83e\uddff",
      video_game: "\ud83c\udfae",
      joystick: "\ud83d\udd79\ufe0f",
      slot_machine: "\ud83c\udfb0",
      game_die: "\ud83c\udfb2",
      puzzle_piece: "\ud83e\udde9",
      teddy_bear: "\ud83e\uddf8",
      spade_suit: "\u2660\ufe0f",
      heart_suit: "\u2665\ufe0f",
      diamond_suit: "\u2666\ufe0f",
      club_suit: "\u2663\ufe0f",
      chess_pawn: "\u265f",
      joker: "\ud83c\udccf",
      mahjong_red_dragon: "\ud83c\udc04",
      flower_playing_cards: "\ud83c\udfb4",
      performing_arts: "\ud83c\udfad",
      framed_picture: "\ud83d\uddbc",
      artist_palette: "\ud83c\udfa8",
      thread: "\ud83e\uddf5",
      yarn: "\ud83e\uddf6",
      glasses: "\ud83d\udc53",
      sunglasses: "\ud83d\ude0e",
      goggles: "\ud83e\udd7d",
      lab_coat: "\ud83e\udd7c",
      safety_vest: "\ud83e\uddba",
      necktie: "\ud83d\udc54",
      t_shirt: "\ud83d\udc55",
      jeans: "\ud83d\udc56",
      scarf: "\ud83e\udde3",
      gloves: "\ud83e\udde4",
      coat: "\ud83e\udde5",
      socks: "\ud83e\udde6",
      dress: "\ud83d\udc57",
      kimono: "\ud83d\udc58",
      sari: "\ud83e\udd7b",
      one_piece_swimsuit: "\ud83e\ude71",
      briefs: "\ud83e\ude72",
      shorts: "\ud83e\ude73",
      bikini: "\ud83d\udc59",
      woman_s_clothes: "\ud83d\udc5a",
      purse: "\ud83d\udc5b",
      handbag: "\ud83d\udc5c",
      clutch_bag: "\ud83d\udc5d",
      shopping_bags: "\ud83d\udecd\ufe0f",
      backpack: "\ud83c\udf92",
      man_s_shoe: "\ud83d\udc5e",
      running_shoe: "\ud83d\udc5f",
      hiking_boot: "\ud83e\udd7e",
      flat_shoe: "\ud83e\udd7f",
      high_heeled_shoe: "\ud83d\udc60",
      woman_s_sandal: "\ud83d\udc61",
      ballet_shoes: "\ud83e\ude70",
      woman_s_boot: "\ud83d\udc62",
      crown: "\ud83d\udc51",
      woman_s_hat: "\ud83d\udc52",
      top_hat: "\ud83c\udfa9",
      graduation_cap: "\ud83c\udf93",
      billed_cap: "\ud83e\udde2",
      rescue_worker_s_helmet: "\u26d1\ufe0f",
      prayer_beads: "\ud83d\udcff",
      lipstick: "\ud83d\udc84",
      ring: "\ud83d\udc8d",
      gem_stone: "\ud83d\udc8e",
      muted_speaker: "\ud83d\udd07",
      speaker_low_volume: "\ud83d\udd08",
      speaker_medium_volume: "\ud83d\udd09",
      speaker_high_volume: "\ud83d\udd0a",
      loudspeaker: "\ud83d\udce2",
      megaphone: "\ud83d\udce3",
      postal_horn: "\ud83d\udcef",
      bell: "\ud83d\udd14",
      bell_with_slash: "\ud83d\udd15",
      musical_score: "\ud83c\udfbc",
      musical_note: "\ud83c\udfb5",
      musical_notes: "\ud83c\udfb6",
      studio_microphone: "\ud83c\udf99\ufe0f",
      level_slider: "\ud83c\udf9a\ufe0f",
      control_knobs: "\ud83c\udf9b\ufe0f",
      microphone: "\ud83c\udfa4",
      headphone: "\ud83c\udfa7",
      radio: "\ud83d\udcfb",
      saxophone: "\ud83c\udfb7",
      guitar: "\ud83c\udfb8",
      musical_keyboard: "\ud83c\udfb9",
      trumpet: "\ud83c\udfba",
      violin: "\ud83c\udfbb",
      banjo: "\ud83e\ude95",
      drum: "\ud83e\udd41",
      mobile_phone: "\ud83d\udcf1",
      mobile_phone_with_arrow: "\ud83d\udcf2",
      telephone: "\u260e",
      telephone_receiver: "\ud83d\udcde",
      pager: "\ud83d\udcdf",
      fax_machine: "\ud83d\udce0",
      battery: "\ud83d\udd0b",
      electric_plug: "\ud83d\udd0c",
      laptop: "\ud83d\udcbb",
      desktop_computer: "\ud83d\udda5\ufe0f",
      printer: "\ud83d\udda8\ufe0f",
      keyboard: "\u2328\ufe0f",
      computer_mouse: "\ud83d\uddb1",
      trackball: "\ud83d\uddb2\ufe0f",
      computer_disk: "\ud83d\udcbd",
      floppy_disk: "\ud83d\udcbe",
      optical_disk: "\ud83d\udcbf",
      dvd: "\ud83d\udcc0",
      abacus: "\ud83e\uddee",
      movie_camera: "\ud83c\udfa5",
      film_frames: "\ud83c\udf9e\ufe0f",
      film_projector: "\ud83d\udcfd\ufe0f",
      clapper_board: "\ud83c\udfac",
      television: "\ud83d\udcfa",
      camera: "\ud83d\udcf7",
      camera_with_flash: "\ud83d\udcf8",
      video_camera: "\ud83d\udcf9",
      videocassette: "\ud83d\udcfc",
      magnifying_glass_tilted_left: "\ud83d\udd0d",
      magnifying_glass_tilted_right: "\ud83d\udd0e",
      candle: "\ud83d\udd6f\ufe0f",
      light_bulb: "\ud83d\udca1",
      flashlight: "\ud83d\udd26",
      red_paper_lantern: "\ud83c\udfee",
      diya_lamp: "\ud83e\ude94",
      notebook_with_decorative_cover: "\ud83d\udcd4",
      closed_book: "\ud83d\udcd5",
      open_book: "\ud83d\udcd6",
      green_book: "\ud83d\udcd7",
      blue_book: "\ud83d\udcd8",
      orange_book: "\ud83d\udcd9",
      books: "\ud83d\udcda",
      notebook: "\ud83d\udcd3",
      ledger: "\ud83d\udcd2",
      page_with_curl: "\ud83d\udcc3",
      scroll: "\ud83d\udcdc",
      page_facing_up: "\ud83d\udcc4",
      newspaper: "\ud83d\udcf0",
      rolled_up_newspaper: "\ud83d\uddde\ufe0f",
      bookmark_tabs: "\ud83d\udcd1",
      bookmark: "\ud83d\udd16",
      label: "\ud83c\udff7\ufe0f",
      money_bag: "\ud83d\udcb0",
      yen_banknote: "\ud83d\udcb4",
      dollar_banknote: "\ud83d\udcb5",
      euro_banknote: "\ud83d\udcb6",
      pound_banknote: "\ud83d\udcb7",
      money_with_wings: "\ud83d\udcb8",
      credit_card: "\ud83d\udcb3",
      receipt: "\ud83e\uddfe",
      chart_increasing_with_yen: "\ud83d\udcb9",
      currency_exchange: "\ud83d\udcb1",
      heavy_dollar_sign: "\ud83d\udcb2",
      envelope: "\u2709",
      e_mail: "\ud83d\udce7",
      incoming_envelope: "\ud83d\udce8",
      envelope_with_arrow: "\ud83d\udce9",
      outbox_tray: "\ud83d\udce4",
      inbox_tray: "\ud83d\udce5",
      package: "\ud83d\udce6",
      closed_mailbox_with_raised_flag: "\ud83d\udceb",
      closed_mailbox_with_lowered_flag: "\ud83d\udcea",
      open_mailbox_with_raised_flag: "\ud83d\udcec",
      open_mailbox_with_lowered_flag: "\ud83d\udced",
      postbox: "\ud83d\udcee",
      ballot_box_with_ballot: "\ud83d\uddf3\ufe0f",
      pencil: "\ud83d\udcdd",
      black_nib: "\u2712\ufe0f",
      fountain_pen: "\ud83d\udd8b",
      pen: "\ud83d\udd8a",
      paintbrush: "\ud83d\udd8c",
      crayon: "\ud83d\udd8d",
      memo: "\ud83d\udcdd",
      briefcase: "\ud83d\udcbc",
      file_folder: "\ud83d\udcc1",
      open_file_folder: "\ud83d\udcc2",
      card_index_dividers: "\ud83d\uddc2\ufe0f",
      calendar: "\ud83d\udcc6",
      tear_off_calendar: "\ud83d\udcc6",
      spiral_notepad: "\ud83d\uddd2",
      spiral_calendar: "\ud83d\uddd3",
      card_index: "\ud83d\udcc7",
      chart_increasing: "\ud83d\udcc8",
      chart_decreasing: "\ud83d\udcc9",
      bar_chart: "\ud83d\udcca",
      clipboard: "\ud83d\udccb",
      pushpin: "\ud83d\udccc",
      round_pushpin: "\ud83d\udccd",
      paperclip: "\ud83d\udcce",
      linked_paperclips: "\ud83d\udd87\ufe0f",
      straight_ruler: "\ud83d\udccf",
      triangular_ruler: "\ud83d\udcd0",
      scissors: "\u2702\ufe0f",
      card_file_box: "\ud83d\uddc3\ufe0f",
      file_cabinet: "\ud83d\uddc4\ufe0f",
      wastebasket: "\ud83d\uddd1\ufe0f",
      locked: "\ud83d\udd12",
      unlocked: "\ud83d\udd13",
      locked_with_pen: "\ud83d\udd0f",
      locked_with_key: "\ud83d\udd10",
      key: "\ud83d\udd11",
      old_key: "\ud83d\udddd\ufe0f",
      hammer: "\ud83d\udd28",
      axe: "\ud83e\ude93",
      pick: "\u26cf\ufe0f",
      hammer_and_pick: "\u2692\ufe0f",
      hammer_and_wrench: "\ud83d\udee0\ufe0f",
      dagger: "\ud83d\udde1",
      crossed_swords: "\u2694\ufe0f",
      pistol: "\ud83d\udd2b",
      bow_and_arrow: "\ud83c\udff9",
      shield: "\ud83d\udee1\ufe0f",
      wrench: "\ud83d\udd27",
      nut_and_bolt: "\ud83d\udd29",
      gear: "\u2699\ufe0f",
      clamp: "\ud83d\udddc",
      balance_scale: "\u2696",
      probing_cane: "\ud83e\uddaf",
      link: "\ud83d\udd17",
      chains: "\u26d3\ufe0f",
      toolbox: "\ud83e\uddf0",
      magnet: "\ud83e\uddf2",
      alembic: "\u2697\ufe0f",
      test_tube: "\ud83e\uddea",
      petri_dish: "\ud83e\uddeb",
      dna: "\ud83e\uddec",
      microscope: "\ud83d\udd2c",
      telescope: "\ud83d\udd2d",
      satellite_antenna: "\ud83d\udce1",
      syringe: "\ud83d\udc89",
      drop_of_blood: "\ud83e\ude78",
      pill: "\ud83d\udc8a",
      adhesive_bandage: "\ud83e\ude79",
      stethoscope: "\ud83e\ude7a",
      door: "\ud83d\udeaa",
      bed: "\ud83d\udecf\ufe0f",
      couch_and_lamp: "\ud83d\udecb\ufe0f",
      chair: "\ud83e\ude91",
      toilet: "\ud83d\udebd",
      shower: "\ud83d\udebf",
      bathtub: "\ud83d\udec1",
      razor: "\ud83e\ude92",
      lotion_bottle: "\ud83e\uddf4",
      safety_pin: "\ud83e\uddf7",
      broom: "\ud83e\uddf9",
      basket: "\ud83e\uddfa",
      roll_of_paper: "\ud83e\uddfb",
      soap: "\ud83e\uddfc",
      sponge: "\ud83e\uddfd",
      fire_extinguisher: "\ud83e\uddef",
      shopping_cart: "\ud83d\uded2",
      cigarette: "\ud83d\udeac",
      coffin: "\u26b0\ufe0f",
      funeral_urn: "\u26b1\ufe0f",
      moai: "\ud83d\uddff",
      atm_sign: "\ud83c\udfe7",
      litter_in_bin_sign: "\ud83d\udeae",
      potable_water: "\ud83d\udeb0",
      wheelchair_symbol: "\u267f",
      men_s_room: "\ud83d\udeb9",
      women_s_room: "\ud83d\udeba",
      restroom: "\ud83d\udebb",
      baby_symbol: "\ud83d\udebc",
      water_closet: "\ud83d\udebe",
      passport_control: "\ud83d\udec2",
      customs: "\ud83d\udec3",
      baggage_claim: "\ud83d\udec4",
      left_luggage: "\ud83d\udec5",
      warning: "\u26a0\ufe0f",
      children_crossing: "\ud83d\udeb8",
      no_entry: "\u26d4",
      prohibited: "\ud83d\udeab",
      no_bicycles: "\ud83d\udeb3",
      no_smoking: "\ud83d\udead",
      no_littering: "\ud83d\udeaf",
      non_potable_water: "\ud83d\udeb1",
      no_pedestrians: "\ud83d\udeb7",
      no_mobile_phones: "\ud83d\udcf5",
      no_one_under_eighteen: "\ud83d\udd1e",
      radioactive: "\u2622",
      biohazard: "\u2623",
      up_arrow: "\u2b06\ufe0f",
      up_right_arrow: "\u2197\ufe0f",
      right_arrow: "\u27a1\ufe0f",
      down_right_arrow: "\u2198\ufe0f",
      down_arrow: "\u2b07\ufe0f",
      down_left_arrow: "\u2199\ufe0f",
      left_arrow: "\u2b05\ufe0f",
      up_left_arrow: "\u2196\ufe0f",
      up_down_arrow: "\u2195",
      left_right_arrow: "\u2194\ufe0f",
      right_arrow_curving_left: "\u21a9\ufe0f",
      left_arrow_curving_right: "\u21aa\ufe0f",
      right_arrow_curving_up: "\u2934\ufe0f",
      right_arrow_curving_down: "\u2935\ufe0f",
      clockwise_vertical_arrows: "\ud83d\udd03",
      counterclockwise_arrows_button: "\ud83d\udd04",
      back_arrow: "\ud83d\udd19",
      end_arrow: "\ud83d\udd1a",
      on_arrow: "\ud83d\udd1b",
      soon_arrow: "\ud83d\udd1c",
      top_arrow: "\ud83d\udd1d",
      place_of_worship: "\ud83d\uded0",
      atom_symbol: "\u269b\ufe0f",
      om: "\ud83c\uddf4\ud83c\uddf2",
      star_of_david: "\u2721\ufe0f",
      wheel_of_dharma: "\u2638\ufe0f",
      yin_yang: "\u262f\ufe0f",
      latin_cross: "\u271d\ufe0f",
      orthodox_cross: "\u2626\ufe0f",
      star_and_crescent: "\u262a\ufe0f",
      peace_symbol: "\u262e\ufe0f",
      menorah: "\ud83d\udd4e",
      dotted_six_pointed_star: "\ud83d\udd2f",
      aries: "\u2648",
      taurus: "\u2649",
      gemini: "\u264a",
      cancer: "\u264b",
      leo: "\u264c",
      virgo: "\u264d",
      libra: "\u264e",
      scorpio: "\u264f",
      sagittarius: "\u2650",
      capricorn: "\u2651",
      aquarius: "\u2652",
      pisces: "\u2653",
      ophiuchus: "\u26ce",
      shuffle_tracks_button: "\ud83d\udd00",
      repeat_button: "\ud83d\udd01",
      repeat_single_button: "\ud83d\udd02",
      play_button: "\u25b6\ufe0f",
      fast_forward_button: "\u23e9",
      next_track_button: "\u23ed",
      play_or_pause_button: "\u23ef",
      reverse_button: "\u25c0\ufe0f",
      fast_reverse_button: "\u23ea",
      last_track_button: "\u23ee",
      upwards_button: "\ud83d\udd3c",
      fast_up_button: "\u23eb",
      downwards_button: "\ud83d\udd3d",
      fast_down_button: "\u23ec",
      pause_button: "\u23f8",
      stop_button: "\u23f9",
      record_button: "\u23fa",
      eject_button: "\u23cf\ufe0f",
      cinema: "\ud83c\udfa6",
      dim_button: "\ud83d\udd05",
      bright_button: "\ud83d\udd06",
      antenna_bars: "\ud83d\udcf6",
      vibration_mode: "\ud83d\udcf3",
      mobile_phone_off: "\ud83d\udcf4",
      female_sign: "\u2640\ufe0f",
      male_sign: "\u2642\ufe0f",
      medical_symbol: "\u2695\ufe0f",
      infinity: "\u267e",
      recycling_symbol: "\u267b\ufe0f",
      fleur_de_lis: "\u269c\ufe0f",
      trident_emblem: "\ud83d\udd31",
      name_badge: "\ud83d\udcdb",
      japanese_symbol_for_beginner: "\ud83d\udd30",
      hollow_red_circle: "\u2b55",
      check_mark_button: "\u2705",
      check_box_with_check: "\u2611\ufe0f",
      check_mark: "\u2714\ufe0f",
      multiplication_sign: "\u2716\ufe0f",
      cross_mark: "\u274c",
      cross_mark_button: "\u274e",
      plus_sign: "\u2795",
      minus_sign: "\u2796",
      division_sign: "\u2797",
      curly_loop: "\u27b0",
      double_curly_loop: "\u27bf",
      part_alternation_mark: "\u303d\ufe0f",
      eight_spoked_asterisk: "\u2733\ufe0f",
      eight_pointed_star: "\u2734\ufe0f",
      sparkle: "\u2747\ufe0f",
      double_exclamation_mark: "\u203c",
      exclamation_question_mark: "\u2049",
      question_mark: "\u2753",
      white_question_mark: "\u2754",
      white_exclamation_mark: "\u2755",
      exclamation_mark: "\u2757",
      wavy_dash: "\u3030\ufe0f",
      copyright: "\xa9\ufe0f",
      registered: "\xae\ufe0f",
      trade_mark: "\u2122\ufe0f",
      keycap_: "*\ufe0f\u20e3",
      keycap_0: "0\ufe0f\u20e3",
      keycap_1: "1\ufe0f\u20e3",
      keycap_2: "2\ufe0f\u20e3",
      keycap_3: "3\ufe0f\u20e3",
      keycap_4: "4\ufe0f\u20e3",
      keycap_5: "5\ufe0f\u20e3",
      keycap_6: "6\ufe0f\u20e3",
      keycap_7: "7\ufe0f\u20e3",
      keycap_8: "8\ufe0f\u20e3",
      keycap_9: "9\ufe0f\u20e3",
      keycap_10: "\ud83d\udd1f",
      input_latin_uppercase: "\ud83d\udd20",
      input_latin_lowercase: "\ud83d\udd21",
      input_numbers: "\ud83d\udd22",
      input_symbols: "\ud83d\udd23",
      input_latin_letters: "\ud83d\udd24",
      a_button: "\ud83c\udd70\ufe0f",
      ab_button: "\ud83c\udd8e",
      b_button: "\ud83c\udd71\ufe0f",
      cl_button: "\ud83c\udd91",
      cool_button: "\ud83c\udd92",
      free_button: "\ud83c\udd93",
      information: "\u2139\ufe0f",
      id_button: "\ud83c\udd94",
      circled_m: "\u24c2\ufe0f",
      new_button: "\ud83c\udd95",
      ng_button: "\ud83c\udd96",
      o_button: "\ud83c\udd7e\ufe0f",
      ok_button: "\ud83c\udd97",
      p_button: "\ud83c\udd7f\ufe0f",
      sos_button: "\ud83c\udd98",
      up_button: "\ud83c\udd99",
      vs_button: "\ud83c\udd9a",
      japanese_here_button: "\ud83c\ude01",
      japanese_service_charge_button: "\ud83c\ude02\ufe0f",
      japanese_monthly_amount_button: "\ud83c\ude37\ufe0f",
      japanese_not_free_of_charge_button: "\ud83c\ude36",
      japanese_reserved_button: "\ud83c\ude2f",
      japanese_bargain_button: "\ud83c\ude50",
      japanese_discount_button: "\ud83c\ude39",
      japanese_free_of_charge_button: "\ud83c\ude1a",
      japanese_prohibited_button: "\ud83c\ude32",
      japanese_acceptable_button: "\ud83c\ude51",
      japanese_application_button: "\ud83c\ude38",
      japanese_passing_grade_button: "\ud83c\ude34",
      japanese_vacancy_button: "\ud83c\ude33",
      japanese_congratulations_button: "\u3297\ufe0f",
      japanese_secret_button: "\u3299\ufe0f",
      japanese_open_for_business_button: "\ud83c\ude3a",
      japanese_no_vacancy_button: "\ud83c\ude35",
      red_circle: "\ud83d\udd34",
      orange_circle: "\ud83d\udfe0",
      yellow_circle: "\ud83d\udfe1",
      green_circle: "\ud83d\udfe2",
      blue_circle: "\ud83d\udd35",
      purple_circle: "\ud83d\udfe3",
      brown_circle: "\ud83d\udfe4",
      black_circle: "\u26ab",
      white_circle: "\u26aa",
      red_square: "\ud83d\udfe5",
      orange_square: "\ud83d\udfe7",
      yellow_square: "\ud83d\udfe8",
      green_square: "\ud83d\udfe9",
      blue_square: "\ud83d\udfe6",
      purple_square: "\ud83d\udfea",
      brown_square: "\ud83d\udfeb",
      black_large_square: "\u2b1b",
      white_large_square: "\u2b1c",
      black_medium_square: "\u25fc\ufe0f",
      white_medium_square: "\u25fb\ufe0f",
      black_medium_small_square: "\u25fe",
      white_medium_small_square: "\u25fd",
      black_small_square: "\u25aa\ufe0f",
      white_small_square: "\u25ab\ufe0f",
      large_orange_diamond: "\ud83d\udd36",
      large_blue_diamond: "\ud83d\udd37",
      small_orange_diamond: "\ud83d\udd38",
      small_blue_diamond: "\ud83d\udd39",
      red_triangle_pointed_up: "\ud83d\udd3a",
      red_triangle_pointed_down: "\ud83d\udd3b",
      diamond_with_a_dot: "\ud83d\udca0",
      radio_button: "\ud83d\udd18",
      white_square_button: "\ud83d\udd33",
      black_square_button: "\ud83d\udd32",
      chequered_flag: "\ud83c\udfc1",
      triangular_flag: "\ud83d\udea9",
      crossed_flags: "\ud83c\udf8c",
      black_flag: "\ud83c\udff4",
      white_flag: "\ud83c\udff3",
      rainbow_flag: "\ud83c\udff3\ufe0f\u200d\ud83c\udf08",
      pirate_flag: "\ud83c\udff4\u200d\u2620",
      flag_ascension_island: "\ud83c\udde6\ud83c\udde8",
      flag_andorra: "\ud83c\udde6\ud83c\udde9",
      flag_united_arab_emirates: "\ud83c\udde6\ud83c\uddea",
      flag_afghanistan: "\ud83c\udde6\ud83c\uddeb",
      flag_antigua_barbuda: "\ud83c\udde6\ud83c\uddec",
      flag_anguilla: "\ud83c\udde6\ud83c\uddee",
      flag_albania: "\ud83c\udde6\ud83c\uddf1",
      flag_armenia: "\ud83c\udde6\ud83c\uddf2",
      flag_angola: "\ud83c\udde6\ud83c\uddf4",
      flag_antarctica: "\ud83c\udde6\ud83c\uddf6",
      flag_argentina: "\ud83c\udde6\ud83c\uddf7",
      flag_american_samoa: "\ud83c\udde6\ud83c\uddf8",
      flag_austria: "\ud83c\udde6\ud83c\uddf9",
      flag_australia: "\ud83c\udde6\ud83c\uddfa",
      flag_aruba: "\ud83c\udde6\ud83c\uddfc",
      flag_land_islands: "\ud83c\udde6\ud83c\uddfd",
      flag_azerbaijan: "\ud83c\udde6\ud83c\uddff",
      flag_bosnia_herzegovina: "\ud83c\udde7\ud83c\udde6",
      flag_barbados: "\ud83c\udde7\ud83c\udde7",
      flag_bangladesh: "\ud83c\udde7\ud83c\udde9",
      flag_belgium: "\ud83c\udde7\ud83c\uddea",
      flag_burkina_faso: "\ud83c\udde7\ud83c\uddeb",
      flag_bulgaria: "\ud83c\udde7\ud83c\uddec",
      flag_bahrain: "\ud83c\udde7\ud83c\udded",
      flag_burundi: "\ud83c\udde7\ud83c\uddee",
      flag_benin: "\ud83c\udde7\ud83c\uddef",
      flag_st_barth_lemy: "\ud83c\udde7\ud83c\uddf1",
      flag_bermuda: "\ud83c\udde7\ud83c\uddf2",
      flag_brunei: "\ud83c\udde7\ud83c\uddf3",
      flag_bolivia: "\ud83c\udde7\ud83c\uddf4",
      flag_caribbean_netherlands: "\ud83c\udde7\ud83c\uddf6",
      flag_brazil: "\ud83c\udde7\ud83c\uddf7",
      flag_bahamas: "\ud83c\udde7\ud83c\uddf8",
      flag_bhutan: "\ud83c\udde7\ud83c\uddf9",
      flag_bouvet_island: "\ud83c\udde7\ud83c\uddfb",
      flag_botswana: "\ud83c\udde7\ud83c\uddfc",
      flag_belarus: "\ud83c\udde7\ud83c\uddfe",
      flag_belize: "\ud83c\udde7\ud83c\uddff",
      flag_canada: "\ud83c\udde8\ud83c\udde6",
      flag_cocos_islands: "\ud83c\udde8\ud83c\udde8",
      flag_congo_kinshasa: "\ud83c\udde8\ud83c\udde9",
      flag_central_african_republic: "\ud83c\udde8\ud83c\uddeb",
      flag_congo_brazzaville: "\ud83c\udde8\ud83c\uddec",
      flag_switzerland: "\ud83c\udde8\ud83c\udded",
      flag_c_te_d_ivoire: "\ud83c\udde8\ud83c\uddee",
      flag_cook_islands: "\ud83c\udde8\ud83c\uddf0",
      flag_chile: "\ud83c\udde8\ud83c\uddf1",
      flag_cameroon: "\ud83c\udde8\ud83c\uddf2",
      flag_china: "\ud83c\udde8\ud83c\uddf3",
      flag_colombia: "\ud83c\udde8\ud83c\uddf4",
      flag_clipperton_island: "\ud83c\udde8\ud83c\uddf5",
      flag_costa_rica: "\ud83c\udde8\ud83c\uddf7",
      flag_cuba: "\ud83c\udde8\ud83c\uddfa",
      flag_cape_verde: "\ud83c\udde8\ud83c\uddfb",
      flag_cura_ao: "\ud83c\udde8\ud83c\uddfc",
      flag_christmas_island: "\ud83c\udde8\ud83c\uddfd",
      flag_cyprus: "\ud83c\udde8\ud83c\uddfe",
      flag_czechia: "\ud83c\udde8\ud83c\uddff",
      flag_germany: "\ud83c\udde9\ud83c\uddea",
      flag_diego_garcia: "\ud83c\udde9\ud83c\uddec",
      flag_djibouti: "\ud83c\udde9\ud83c\uddef",
      flag_denmark: "\ud83c\udde9\ud83c\uddf0",
      flag_dominica: "\ud83c\udde9\ud83c\uddf2",
      flag_dominican_republic: "\ud83c\udde9\ud83c\uddf4",
      flag_algeria: "\ud83c\udde9\ud83c\uddff",
      flag_ceuta_melilla: "\ud83c\uddea\ud83c\udde6",
      flag_ecuador: "\ud83c\uddea\ud83c\udde8",
      flag_estonia: "\ud83c\uddea\ud83c\uddea",
      flag_egypt: "\ud83c\uddea\ud83c\uddec",
      flag_western_sahara: "\ud83c\uddea\ud83c\udded",
      flag_eritrea: "\ud83c\uddea\ud83c\uddf7",
      flag_spain: "\ud83c\uddea\ud83c\uddf8",
      flag_ethiopia: "\ud83c\uddea\ud83c\uddf9",
      flag_european_union: "\ud83c\uddea\ud83c\uddfa",
      flag_finland: "\ud83c\uddeb\ud83c\uddee",
      flag_fiji: "\ud83c\uddeb\ud83c\uddef",
      flag_falkland_islands: "\ud83c\uddeb\ud83c\uddf0",
      flag_micronesia: "\ud83c\uddeb\ud83c\uddf2",
      flag_faroe_islands: "\ud83c\uddeb\ud83c\uddf4",
      flag_france: "\ud83c\uddeb\ud83c\uddf7",
      flag_gabon: "\ud83c\uddec\ud83c\udde6",
      flag_united_kingdom: "\ud83c\uddec\ud83c\udde7",
      flag_grenada: "\ud83c\uddec\ud83c\udde9",
      flag_georgia: "\ud83c\uddec\ud83c\uddea",
      flag_french_guiana: "\ud83c\uddec\ud83c\uddeb",
      flag_guernsey: "\ud83c\uddec\ud83c\uddec",
      flag_ghana: "\ud83c\uddec\ud83c\udded",
      flag_gibraltar: "\ud83c\uddec\ud83c\uddee",
      flag_greenland: "\ud83c\uddec\ud83c\uddf1",
      flag_gambia: "\ud83c\uddec\ud83c\uddf2",
      flag_guinea: "\ud83c\uddec\ud83c\uddf3",
      flag_guadeloupe: "\ud83c\uddec\ud83c\uddf5",
      flag_equatorial_guinea: "\ud83c\uddec\ud83c\uddf6",
      flag_greece: "\ud83c\uddec\ud83c\uddf7",
      flag_south_georgia_south_sandwich_islands: "\ud83c\uddec\ud83c\uddf8",
      flag_guatemala: "\ud83c\uddec\ud83c\uddf9",
      flag_guam: "\ud83c\uddec\ud83c\uddfa",
      flag_guinea_bissau: "\ud83c\uddec\ud83c\uddfc",
      flag_guyana: "\ud83c\uddec\ud83c\uddfe",
      flag_hong_kong_sar_china: "\ud83c\udded\ud83c\uddf0",
      flag_heard_mcdonald_islands: "\ud83c\udded\ud83c\uddf2",
      flag_honduras: "\ud83c\udded\ud83c\uddf3",
      flag_croatia: "\ud83c\udded\ud83c\uddf7",
      flag_haiti: "\ud83c\udded\ud83c\uddf9",
      flag_hungary: "\ud83c\udded\ud83c\uddfa",
      flag_canary_islands: "\ud83c\uddee\ud83c\udde8",
      flag_indonesia: "\ud83c\uddee\ud83c\udde9",
      flag_ireland: "\ud83c\uddee\ud83c\uddea",
      flag_israel: "\ud83c\uddee\ud83c\uddf1",
      flag_isle_of_man: "\ud83c\uddee\ud83c\uddf2",
      flag_india: "\ud83c\uddee\ud83c\uddf3",
      flag_british_indian_ocean_territory: "\ud83c\uddee\ud83c\uddf4",
      flag_iraq: "\ud83c\uddee\ud83c\uddf6",
      flag_iran: "\ud83c\uddee\ud83c\uddf7",
      flag_iceland: "\ud83c\uddee\ud83c\uddf8",
      flag_italy: "\ud83c\uddee\ud83c\uddf9",
      flag_jersey: "\ud83c\uddef\ud83c\uddea",
      flag_jamaica: "\ud83c\uddef\ud83c\uddf2",
      flag_jordan: "\ud83c\uddef\ud83c\uddf4",
      flag_japan: "\ud83c\uddef\ud83c\uddf5",
      flag_kenya: "\ud83c\uddf0\ud83c\uddea",
      flag_kyrgyzstan: "\ud83c\uddf0\ud83c\uddec",
      flag_cambodia: "\ud83c\uddf0\ud83c\udded",
      flag_kiribati: "\ud83c\uddf0\ud83c\uddee",
      flag_comoros: "\ud83c\uddf0\ud83c\uddf2",
      flag_st_kitts_nevis: "\ud83c\uddf0\ud83c\uddf3",
      flag_north_korea: "\ud83c\uddf0\ud83c\uddf5",
      flag_south_korea: "\ud83c\uddf0\ud83c\uddf7",
      flag_kuwait: "\ud83c\uddf0\ud83c\uddfc",
      flag_cayman_islands: "\ud83c\uddf0\ud83c\uddfe",
      flag_kazakhstan: "\ud83c\uddf0\ud83c\uddff",
      flag_laos: "\ud83c\uddf1\ud83c\udde6",
      flag_lebanon: "\ud83c\uddf1\ud83c\udde7",
      flag_st_lucia: "\ud83c\uddf1\ud83c\udde8",
      flag_liechtenstein: "\ud83c\uddf1\ud83c\uddee",
      flag_sri_lanka: "\ud83c\uddf1\ud83c\uddf0",
      flag_liberia: "\ud83c\uddf1\ud83c\uddf7",
      flag_lesotho: "\ud83c\uddf1\ud83c\uddf8",
      flag_lithuania: "\ud83c\uddf1\ud83c\uddf9",
      flag_luxembourg: "\ud83c\uddf1\ud83c\uddfa",
      flag_latvia: "\ud83c\uddf1\ud83c\uddfb",
      flag_libya: "\ud83c\uddf1\ud83c\uddfe",
      flag_morocco: "\ud83c\uddf2\ud83c\udde6",
      flag_monaco: "\ud83c\uddf2\ud83c\udde8",
      flag_moldova: "\ud83c\uddf2\ud83c\udde9",
      flag_montenegro: "\ud83c\uddf2\ud83c\uddea",
      flag_st_martin: "\ud83c\uddf2\ud83c\uddeb",
      flag_madagascar: "\ud83c\uddf2\ud83c\uddec",
      flag_marshall_islands: "\ud83c\uddf2\ud83c\udded",
      flag_north_macedonia: "\ud83c\uddf2\ud83c\uddf0",
      flag_mali: "\ud83c\uddf2\ud83c\uddf1",
      flag_myanmar: "\ud83c\uddf2\ud83c\uddf2",
      flag_mongolia: "\ud83c\uddf2\ud83c\uddf3",
      flag_macao_sar_china: "\ud83c\uddf2\ud83c\uddf4",
      flag_northern_mariana_islands: "\ud83c\uddf2\ud83c\uddf5",
      flag_martinique: "\ud83c\uddf2\ud83c\uddf6",
      flag_mauritania: "\ud83c\uddf2\ud83c\uddf7",
      flag_montserrat: "\ud83c\uddf2\ud83c\uddf8",
      flag_malta: "\ud83c\uddf2\ud83c\uddf9",
      flag_mauritius: "\ud83c\uddf2\ud83c\uddfa",
      flag_maldives: "\ud83c\uddf2\ud83c\uddfb",
      flag_malawi: "\ud83c\uddf2\ud83c\uddfc",
      flag_mexico: "\ud83c\uddf2\ud83c\uddfd",
      flag_malaysia: "\ud83c\uddf2\ud83c\uddfe",
      flag_mozambique: "\ud83c\uddf2\ud83c\uddff",
      flag_namibia: "\ud83c\uddf3\ud83c\udde6",
      flag_new_caledonia: "\ud83c\uddf3\ud83c\udde8",
      flag_niger: "\ud83c\uddf3\ud83c\uddea",
      flag_norfolk_island: "\ud83c\uddf3\ud83c\uddeb",
      flag_nigeria: "\ud83c\uddf3\ud83c\uddec",
      flag_nicaragua: "\ud83c\uddf3\ud83c\uddee",
      flag_netherlands: "\ud83c\uddf3\ud83c\uddf1",
      flag_norway: "\ud83c\uddf3\ud83c\uddf4",
      flag_nepal: "\ud83c\uddf3\ud83c\uddf5",
      flag_nauru: "\ud83c\uddf3\ud83c\uddf7",
      flag_niue: "\ud83c\uddf3\ud83c\uddfa",
      flag_new_zealand: "\ud83c\uddf3\ud83c\uddff",
      flag_oman: "\ud83c\uddf4\ud83c\uddf2",
      flag_panama: "\ud83c\uddf5\ud83c\udde6",
      flag_peru: "\ud83c\uddf5\ud83c\uddea",
      flag_french_polynesia: "\ud83c\uddf5\ud83c\uddeb",
      flag_papua_new_guinea: "\ud83c\uddf5\ud83c\uddec",
      flag_philippines: "\ud83c\uddf5\ud83c\udded",
      flag_pakistan: "\ud83c\uddf5\ud83c\uddf0",
      flag_poland: "\ud83c\uddf5\ud83c\uddf1",
      flag_st_pierre_miquelon: "\ud83c\uddf5\ud83c\uddf2",
      flag_pitcairn_islands: "\ud83c\uddf5\ud83c\uddf3",
      flag_puerto_rico: "\ud83c\uddf5\ud83c\uddf7",
      flag_palestinian_territories: "\ud83c\uddf5\ud83c\uddf8",
      flag_portugal: "\ud83c\uddf5\ud83c\uddf9",
      flag_palau: "\ud83c\uddf5\ud83c\uddfc",
      flag_paraguay: "\ud83c\uddf5\ud83c\uddfe",
      flag_qatar: "\ud83c\uddf6\ud83c\udde6",
      flag_r_union: "\ud83c\uddf7\ud83c\uddea",
      flag_romania: "\ud83c\uddf7\ud83c\uddf4",
      flag_serbia: "\ud83c\uddf7\ud83c\uddf8",
      flag_russia: "\ud83c\uddf7\ud83c\uddfa",
      flag_rwanda: "\ud83c\uddf7\ud83c\uddfc",
      flag_saudi_arabia: "\ud83c\uddf8\ud83c\udde6",
      flag_solomon_islands: "\ud83c\uddf8\ud83c\udde7",
      flag_seychelles: "\ud83c\uddf8\ud83c\udde8",
      flag_sudan: "\ud83c\uddf8\ud83c\udde9",
      flag_sweden: "\ud83c\uddf8\ud83c\uddea",
      flag_singapore: "\ud83c\uddf8\ud83c\uddec",
      flag_st_helena: "\ud83c\uddf8\ud83c\udded",
      flag_slovenia: "\ud83c\uddf8\ud83c\uddee",
      flag_svalbard_jan_mayen: "\ud83c\uddf8\ud83c\uddef",
      flag_slovakia: "\ud83c\uddf8\ud83c\uddf0",
      flag_sierra_leone: "\ud83c\uddf8\ud83c\uddf1",
      flag_san_marino: "\ud83c\uddf8\ud83c\uddf2",
      flag_senegal: "\ud83c\uddf8\ud83c\uddf3",
      flag_somalia: "\ud83c\uddf8\ud83c\uddf4",
      flag_suriname: "\ud83c\uddf8\ud83c\uddf7",
      flag_south_sudan: "\ud83c\uddf8\ud83c\uddf8",
      flag_s_o_tom_pr_ncipe: "\ud83c\uddf8\ud83c\uddf9",
      flag_el_salvador: "\ud83c\uddf8\ud83c\uddfb",
      flag_sint_maarten: "\ud83c\uddf8\ud83c\uddfd",
      flag_syria: "\ud83c\uddf8\ud83c\uddfe",
      flag_eswatini: "\ud83c\uddf8\ud83c\uddff",
      flag_tristan_da_cunha: "\ud83c\uddf9\ud83c\udde6",
      flag_turks_caicos_islands: "\ud83c\uddf9\ud83c\udde8",
      flag_chad: "\ud83c\uddf9\ud83c\udde9",
      flag_french_southern_territories: "\ud83c\uddf9\ud83c\uddeb",
      flag_togo: "\ud83c\uddf9\ud83c\uddec",
      flag_thailand: "\ud83c\uddf9\ud83c\udded",
      flag_tajikistan: "\ud83c\uddf9\ud83c\uddef",
      flag_tokelau: "\ud83c\uddf9\ud83c\uddf0",
      flag_timor_leste: "\ud83c\uddf9\ud83c\uddf1",
      flag_turkmenistan: "\ud83c\uddf9\ud83c\uddf2",
      flag_tunisia: "\ud83c\uddf9\ud83c\uddf3",
      flag_tonga: "\ud83c\uddf9\ud83c\uddf4",
      flag_turkey: "\ud83c\uddf9\ud83c\uddf7",
      flag_trinidad_tobago: "\ud83c\uddf9\ud83c\uddf9",
      flag_tuvalu: "\ud83c\uddf9\ud83c\uddfb",
      flag_taiwan: "\ud83c\uddf9\ud83c\uddfc",
      flag_tanzania: "\ud83c\uddf9\ud83c\uddff",
      flag_ukraine: "\ud83c\uddfa\ud83c\udde6",
      flag_uganda: "\ud83c\uddfa\ud83c\uddec",
      flag_u_s_outlying_islands: "\ud83c\uddfa\ud83c\uddf2",
      flag_united_nations: "\ud83c\uddfa\ud83c\uddf3",
      flag_united_states: "\ud83c\uddfa\ud83c\uddf8",
      flag_uruguay: "\ud83c\uddfa\ud83c\uddfe",
      flag_uzbekistan: "\ud83c\uddfa\ud83c\uddff",
      flag_vatican_city: "\ud83c\uddfb\ud83c\udde6",
      flag_st_vincent_grenadines: "\ud83c\uddfb\ud83c\udde8",
      flag_venezuela: "\ud83c\uddfb\ud83c\uddea",
      flag_british_virgin_islands: "\ud83c\uddfb\ud83c\uddec",
      flag_u_s_virgin_islands: "\ud83c\uddfb\ud83c\uddee",
      flag_vietnam: "\ud83c\uddfb\ud83c\uddf3",
      flag_vanuatu: "\ud83c\uddfb\ud83c\uddfa",
      flag_wallis_futuna: "\ud83c\uddfc\ud83c\uddeb",
      flag_samoa: "\ud83c\uddfc\ud83c\uddf8",
      flag_kosovo: "\ud83c\uddfd\ud83c\uddf0",
      flag_yemen: "\ud83c\uddfe\ud83c\uddea",
      flag_mayotte: "\ud83c\uddfe\ud83c\uddf9",
      flag_south_africa: "\ud83c\uddff\ud83c\udde6",
      flag_zambia: "\ud83c\uddff\ud83c\uddf2",
      flag_zimbabwe: "\ud83c\uddff\ud83c\uddfc",
      flag_england:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
      flag_scotland:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
      flag_wales:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f",
      grinning: "\ud83d\ude00",
      smiley: "\ud83d\ude03",
      smile: "\ud83d\ude04",
      grin: "\ud83d\ude01",
      laughing: "\ud83d\ude06",
      satisfied: "\ud83d\ude06",
      sweat_smile: "\ud83d\ude05",
      rofl: "\ud83e\udd23",
      joy: "\ud83d\ude02",
      wink: "\ud83d\ude09",
      blush: "\ud83d\ude0a",
      innocent: "\ud83d\ude07",
      smiling_face_with_three_hearts: "\ud83e\udd70",
      heart_eyes: "\ud83d\ude0d",
      kissing_heart: "\ud83d\ude18",
      kissing: "\ud83d\ude17",
      relaxed: "\u263a\ufe0f",
      kissing_closed_eyes: "\ud83d\ude1a",
      kissing_smiling_eyes: "\ud83d\ude19",
      yum: "\ud83d\ude0b",
      stuck_out_tongue: "\ud83d\ude1b",
      stuck_out_tongue_winking_eye: "\ud83d\ude1c",
      stuck_out_tongue_closed_eyes: "\ud83d\ude1d",
      hugs: "\ud83e\udd17",
      hand_over_mouth: "\ud83e\udd2d",
      thinking: "\ud83e\udd14",
      raised_eyebrow: "\ud83e\udd28",
      expressionless: "\ud83d\ude11",
      no_mouth: "\ud83d\ude36",
      smirk: "\ud83d\ude0f",
      unamused: "\ud83d\ude12",
      roll_eyes: "\ud83d\ude44",
      grimacing: "\ud83d\ude2c",
      relieved: "\ud83d\ude0c",
      pensive: "\ud83d\ude14",
      sleepy: "\ud83d\ude2a",
      sleeping: "\ud83d\ude34",
      mask: "\ud83d\ude37",
      vomiting_face: "\ud83e\udd2e",
      monocle_face: "\ud83e\uddd0",
      confused: "\ud83d\ude15",
      worried: "\ud83d\ude1f",
      open_mouth: "\ud83d\ude2e",
      hushed: "\ud83d\ude2f",
      astonished: "\ud83d\ude32",
      flushed: "\ud83d\ude33",
      frowning: "\ud83d\ude26",
      anguished: "\ud83d\ude27",
      fearful: "\ud83d\ude28",
      cold_sweat: "\ud83d\ude30",
      disappointed_relieved: "\ud83d\ude25",
      cry: "\ud83d\ude22",
      sob: "\ud83d\ude2d",
      scream: "\ud83d\ude31",
      confounded: "\ud83d\ude16",
      persevere: "\ud83d\ude23",
      disappointed: "\ud83d\ude1e",
      sweat: "\ud83d\ude13",
      weary: "\ud83d\ude29",
      triumph: "\ud83d\ude24",
      rage: "\ud83d\ude21",
      pout: "\ud83d\ude21",
      angry: "\ud83d\ude20",
      cursing_face: "\ud83e\udd2c",
      smiling_imp: "\ud83d\ude08",
      imp: "\ud83d\udc7f",
      hankey: "\ud83d\udca9",
      poop: "\ud83d\udca9",
      shit: "\ud83d\udca9",
      japanese_ogre: "\ud83d\udc79",
      japanese_goblin: "\ud83d\udc7a",
      space_invader: "\ud83d\udc7e",
      smiley_cat: "\ud83d\ude3a",
      smile_cat: "\ud83d\ude38",
      joy_cat: "\ud83d\ude39",
      heart_eyes_cat: "\ud83d\ude3b",
      smirk_cat: "\ud83d\ude3c",
      scream_cat: "\ud83d\ude40",
      crying_cat_face: "\ud83d\ude3f",
      see_no_evil: "\ud83d\ude48",
      hear_no_evil: "\ud83d\ude49",
      speak_no_evil: "\ud83d\ude4a",
      cupid: "\ud83d\udc98",
      gift_heart: "\ud83d\udc9d",
      heartpulse: "\ud83d\udc97",
      heartbeat: "\ud83d\udc93",
      heavy_heart_exclamation: "\u2763\ufe0f",
      heart: "\u2764\ufe0f",
      anger: "\ud83d\udca2",
      boom: "\ud83d\udca5",
      sweat_drops: "\ud83d\udca6",
      dash: "\ud83d\udca8",
      eye_speech_bubble: "\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f",
      wave: "\ud83d\udc4b",
      raised_hand_with_fingers_splayed: "\ud83d\udd90\ufe0f",
      hand: "\u270b",
      v: "\u270c\ufe0f",
      metal: "\ud83e\udd18",
      point_left: "\ud83d\udc48",
      point_right: "\ud83d\udc49",
      point_up_2: "\ud83d\udc46",
      fu: "\ud83d\udd95",
      point_down: "\ud83d\udc47",
      point_up: "\u261d\ufe0f",
      "+1": "\ud83d\udc4d",
      thumbsup: "\ud83d\udc4d",
      "-1": "\ud83d\udc4e",
      thumbsdown: "\ud83d\udc4e",
      fist_raised: "\u270a",
      fist: "\u270a",
      fist_oncoming: "\ud83d\udc4a",
      facepunch: "\ud83d\udc4a",
      punch: "\ud83d\udc4a",
      fist_left: "\ud83e\udd1b",
      fist_right: "\ud83e\udd1c",
      clap: "\ud83d\udc4f",
      raised_hands: "\ud83d\ude4c",
      pray: "\ud83d\ude4f",
      nail_care: "\ud83d\udc85",
      muscle: "\ud83d\udcaa",
      lips: "\ud83d\udc44",
      adult: "\ud83e\uddd1",
      blond_haired_person: "\ud83d\udc71",
      bearded_person: "\ud83e\uddd4",
      red_haired_man: "\ud83d\udc68\u200d\ud83e\uddb0",
      curly_haired_man: "\ud83d\udc68\u200d\ud83e\uddb1",
      white_haired_man: "\ud83d\udc68\u200d\ud83e\uddb3",
      bald_man: "\ud83d\udc68\u200d\ud83e\uddb2",
      red_haired_woman: "\ud83d\udc69\u200d\ud83e\uddb0",
      curly_haired_woman: "\ud83d\udc69\u200d\ud83e\uddb1",
      white_haired_woman: "\ud83d\udc69\u200d\ud83e\uddb3",
      bald_woman: "\ud83d\udc69\u200d\ud83e\uddb2",
      blond_haired_woman: "\ud83d\udc71\u200d\u2640",
      blonde_woman: "\ud83d\udc71\u200d\u2640",
      blond_haired_man: "\ud83d\udc71\u200d\u2642",
      older_adult: "\ud83e\uddd3",
      older_man: "\ud83d\udc74",
      older_woman: "\ud83d\udc75",
      frowning_person: "\ud83d\ude4d",
      frowning_man: "\ud83d\ude4d\u200d\u2642",
      frowning_woman: "\ud83d\ude4d\u200d\u2640",
      pouting_man: "\ud83d\ude4e\u200d\u2642",
      pouting_woman: "\ud83d\ude4e\u200d\u2640",
      no_good: "\ud83d\ude45",
      no_good_man: "\ud83d\ude45\u200d\u2642",
      ng_man: "\ud83d\ude45\u200d\u2642",
      no_good_woman: "\ud83d\ude45\u200d\u2640",
      ng_woman: "\ud83d\ude45\u200d\u2640",
      ok_person: "\ud83d\ude46",
      ok_man: "\ud83d\ude46\u200d\u2642",
      ok_woman: "\ud83d\ude46",
      tipping_hand_person: "\ud83d\udc81",
      information_desk_person: "\ud83d\udc81",
      tipping_hand_man: "\ud83d\udc81\u200d\u2642",
      sassy_man: "\ud83d\udc81\u200d\u2642",
      tipping_hand_woman: "\ud83d\udc81\u200d\u2640",
      sassy_woman: "\ud83d\udc81\u200d\u2640",
      raising_hand: "\ud83d\ude4b",
      raising_hand_man: "\ud83d\ude4b\u200d\u2642",
      raising_hand_woman: "\ud83d\ude4b\u200d\u2640",
      bow: "\ud83d\ude47",
      bowing_man: "\ud83d\ude47\u200d\u2642",
      bowing_woman: "\ud83d\ude47\u200d\u2640",
      facepalm: "\ud83e\udd26",
      shrug: "\ud83e\udd37",
      cop: "\ud83d\udc6e",
      policeman: "\ud83d\udc6e\u200d\u2642",
      policewoman: "\ud83d\udc6e\u200d\u2640",
      male_detective: "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f",
      female_detective: "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",
      guardsman: "\ud83d\udc82",
      guardswoman: "\ud83d\udc82\u200d\u2640",
      construction_worker_man: "\ud83d\udc77\u200d\u2642",
      construction_worker_woman: "\ud83d\udc77\u200d\u2640",
      person_with_turban: "\ud83d\udc73",
      man_with_turban: "\ud83d\udc73",
      woman_with_turban: "\ud83d\udc73\u200d\u2640",
      man_with_gua_pi_mao: "\ud83d\udc72",
      angel: "\ud83d\udc7c",
      santa: "\ud83c\udf85",
      superhero_man: "\ud83e\uddb8\u200d\u2642",
      superhero_woman: "\ud83e\uddb8\u200d\u2640",
      supervillain_man: "\ud83e\uddb9\u200d\u2642",
      supervillain_woman: "\ud83e\uddb9\u200d\u2640",
      mage_man: "\ud83e\uddd9\u200d\u2642",
      mage_woman: "\ud83e\uddd9\u200d\u2640",
      fairy_man: "\ud83e\uddda\u200d\u2642",
      fairy_woman: "\ud83e\uddda\u200d\u2640",
      vampire_man: "\ud83e\udddb\u200d\u2642",
      vampire_woman: "\ud83e\udddb\u200d\u2640",
      elf_man: "\ud83e\udddd\u200d\u2642",
      elf_woman: "\ud83e\udddd\u200d\u2640",
      genie_man: "\ud83e\uddde\u200d\u2642",
      genie_woman: "\ud83e\uddde\u200d\u2640",
      zombie_man: "\ud83e\udddf\u200d\u2642",
      zombie_woman: "\ud83e\udddf\u200d\u2640",
      massage: "\ud83d\udc86",
      massage_man: "\ud83d\udc86\u200d\u2642",
      massage_woman: "\ud83d\udc86\u200d\u2640",
      haircut: "\ud83d\udc87",
      haircut_man: "\ud83d\udc87\u200d\u2642",
      haircut_woman: "\ud83d\udc87\u200d\u2640",
      walking: "\ud83d\udeb6",
      walking_man: "\ud83d\udeb6\u200d\u2642",
      walking_woman: "\ud83d\udeb6\u200d\u2640",
      standing_person: "\ud83e\uddcd",
      standing_man: "\ud83e\uddcd\u200d\u2642",
      standing_woman: "\ud83e\uddcd\u200d\u2640",
      kneeling_person: "\ud83e\uddce",
      kneeling_man: "\ud83e\uddce\u200d\u2642",
      kneeling_woman: "\ud83e\uddce\u200d\u2640",
      runner: "\ud83c\udfc3",
      running: "\ud83c\udfc3",
      running_man: "\ud83c\udfc3\u200d\u2642",
      running_woman: "\ud83c\udfc3\u200d\u2640",
      dancer: "\ud83d\udc83",
      business_suit_levitating: "\ud83d\udd74",
      dancers: "\ud83d\udc6f",
      dancing_men: "\ud83d\udc6f\u200d\u2642",
      dancing_women: "\ud83d\udc6f\u200d\u2640",
      sauna_person: "\ud83e\uddd6",
      sauna_man: "\ud83e\uddd6\u200d\u2642",
      sauna_woman: "\ud83e\uddd6\u200d\u2640",
      climbing: "\ud83e\uddd7",
      climbing_man: "\ud83e\uddd7\u200d\u2642",
      climbing_woman: "\ud83e\uddd7\u200d\u2640",
      golfing: "\ud83c\udfcc",
      golfing_man: "\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f",
      golfing_woman: "\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f",
      surfer: "\ud83c\udfc4",
      surfing_man: "\ud83c\udfc4\u200d\u2642",
      surfing_woman: "\ud83c\udfc4\u200d\u2640",
      rowboat: "\ud83d\udea3",
      rowing_man: "\ud83d\udea3\u200d\u2642",
      rowing_woman: "\ud83d\udea3\u200d\u2640",
      swimmer: "\ud83c\udfca",
      swimming_man: "\ud83c\udfca\u200d\u2642",
      swimming_woman: "\ud83c\udfca\u200d\u2640",
      bouncing_ball_person: "\u26f9",
      bouncing_ball_man: "\u26f9\ufe0f\u200d\u2642\ufe0f",
      basketball_man: "\u26f9\ufe0f\u200d\u2642\ufe0f",
      bouncing_ball_woman: "\u26f9\ufe0f\u200d\u2640\ufe0f",
      basketball_woman: "\u26f9\ufe0f\u200d\u2640\ufe0f",
      weight_lifting: "\ud83c\udfcb",
      weight_lifting_man: "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
      weight_lifting_woman: "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",
      bicyclist: "\ud83d\udeb4",
      biking_man: "\ud83d\udeb4\u200d\u2642",
      biking_woman: "\ud83d\udeb4\u200d\u2640",
      mountain_bicyclist: "\ud83d\udeb5",
      mountain_biking_man: "\ud83d\udeb5\u200d\u2642",
      mountain_biking_woman: "\ud83d\udeb5\u200d\u2640",
      cartwheeling: "\ud83e\udd38",
      wrestling: "\ud83e\udd3c",
      water_polo: "\ud83e\udd3d",
      handball_person: "\ud83e\udd3e",
      juggling_person: "\ud83e\udd39",
      lotus_position: "\ud83e\uddd8",
      lotus_position_man: "\ud83e\uddd8\u200d\u2642",
      lotus_position_woman: "\ud83e\uddd8\u200d\u2640",
      bath: "\ud83d\udec0",
      sleeping_bed: "\ud83d\udecc",
      two_women_holding_hands: "\ud83d\udc6d",
      couple: "\ud83d\udc6b",
      two_men_holding_hands: "\ud83d\udc6c",
      couplekiss: "\ud83d\udc8f",
      couplekiss_man_woman:
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      couplekiss_man_man:
        "\u200d\ud83d\udc68\u2764\ufe0f\ud83d\udc8b\u200d\ud83d\udc68",
      couplekiss_woman_woman:
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
      dog2: "\ud83d\udc15",
      fox_face: "\ud83e\udd8a",
      cat2: "\ud83d\udc08",
      tiger2: "\ud83d\udc05",
      racehorse: "\ud83d\udc0e",
      cow2: "\ud83d\udc04",
      pig2: "\ud83d\udc16",
      sheep: "\ud83d\udc11",
      dromedary_camel: "\ud83d\udc2a",
      mouse2: "\ud83d\udc01",
      rabbit2: "\ud83d\udc07",
      panda_face: "\ud83d\udc3c",
      feet: "\ud83d\udc3e",
      hatched_chick: "\ud83d\udc25",
      "t-rex": "\ud83e\udd96",
      whale2: "\ud83d\udc0b",
      flipper: "\ud83d\udc2c",
      shell: "\ud83d\udc1a",
      bee: "\ud83d\udc1d",
      beetle: "\ud83d\udc1e",
      ear_of_rice: "\ud83c\udf3e",
      leaves: "\ud83c\udf43",
      orange: "\ud83c\udf4a",
      mandarin: "\ud83c\udf4a",
      apple: "\ud83c\udf4e",
      corn: "\ud83c\udf3d",
      cheese: "\ud83e\uddc0",
      fries: "\ud83c\udf5f",
      hotdog: "\ud83c\udf2d",
      fried_egg: "\ud83c\udf73",
      stew: "\ud83c\udf72",
      bento: "\ud83c\udf71",
      rice: "\ud83c\udf5a",
      curry: "\ud83c\udf5b",
      ramen: "\ud83c\udf5c",
      sweet_potato: "\ud83c\udf60",
      fish_cake: "\ud83c\udf65",
      icecream: "\ud83c\udf66",
      birthday: "\ud83c\udf82",
      cake: "\ud83c\udf70",
      milk_glass: "\ud83e\udd5b",
      coffee: "\u2615",
      tea: "\ud83c\udf75",
      champagne: "\ud83c\udf7e",
      cocktail: "\ud83c\udf78",
      beer: "\ud83c\udf7a",
      beers: "\ud83c\udf7b",
      ice_cube: "\ud83e\uddca",
      plate_with_cutlery: "\ud83c\udf7d",
      hocho: "\ud83d\udd2a",
      knife: "\ud83d\udd2a",
      earth_africa: "\ud83c\udf0d",
      earth_americas: "\ud83c\udf0e",
      earth_asia: "\ud83c\udf0f",
      japan: "\ud83d\uddfe",
      mountain_snow: "\ud83c\udfd4",
      beach_umbrella: "\ud83c\udfd6",
      bricks: "\ud83e\uddf1",
      office: "\ud83c\udfe2",
      european_post_office: "\ud83c\udfe4",
      european_castle: "\ud83c\udff0",
      city_sunset: "\ud83c\udf06",
      city_sunrise: "\ud83c\udf07",
      hotsprings: "\u2668\ufe0f",
      barber: "\ud83d\udc88",
      steam_locomotive: "\ud83d\ude82",
      bullettrain_side: "\ud83d\ude84",
      bullettrain_front: "\ud83d\ude85",
      train2: "\ud83d\ude86",
      car: "\ud83d\ude97",
      red_car: "\ud83d\ude97",
      blue_car: "\ud83d\ude99",
      truck: "\ud83d\ude9a",
      bike: "\ud83d\udeb2",
      busstop: "\ud83d\ude8f",
      fuelpump: "\u26fd",
      rotating_light: "\ud83d\udea8",
      traffic_light: "\ud83d\udea5",
      boat: "\u26f5",
      flight_departure: "\ud83d\udeeb",
      flight_arrival: "\ud83d\udeec",
      artificial_satellite: "\ud83d\udef0",
      hourglass: "\u231b",
      hourglass_flowing_sand: "\u23f3",
      clock12: "\ud83d\udd5b",
      clock1230: "\ud83d\udd67",
      clock1: "\ud83d\udd50",
      clock130: "\ud83d\udd5c",
      clock2: "\ud83d\udd51",
      clock230: "\ud83d\udd5d",
      clock3: "\ud83d\udd52",
      clock330: "\ud83d\udd5e",
      clock4: "\ud83d\udd53",
      clock430: "\ud83d\udd5f",
      clock5: "\ud83d\udd54",
      clock530: "\ud83d\udd60",
      clock6: "\ud83d\udd55",
      clock630: "\ud83d\udd61",
      clock7: "\ud83d\udd56",
      clock730: "\ud83d\udd62",
      clock8: "\ud83d\udd57",
      clock830: "\ud83d\udd63",
      clock9: "\ud83d\udd58",
      clock930: "\ud83d\udd64",
      clock10: "\ud83d\udd59",
      clock1030: "\ud83d\udd65",
      clock11: "\ud83d\udd5a",
      clock1130: "\ud83d\udd66",
      moon: "\ud83c\udf14",
      new_moon_with_face: "\ud83c\udf1a",
      first_quarter_moon_with_face: "\ud83c\udf1b",
      last_quarter_moon_with_face: "\ud83c\udf1c",
      sunny: "\u2600\ufe0f",
      full_moon_with_face: "\ud83c\udf1d",
      star2: "\ud83c\udf1f",
      stars: "\ud83c\udf20",
      partly_sunny: "\u26c5",
      open_umbrella: "\u2602",
      parasol_on_ground: "\u26f1",
      zap: "\u26a1",
      snowman_with_snow: "\u2603",
      ocean: "\ud83c\udf0a",
      tada: "\ud83c\udf89",
      bamboo: "\ud83c\udf8d",
      dolls: "\ud83c\udf8e",
      flags: "\ud83c\udf8f",
      rice_scene: "\ud83c\udf91",
      gift: "\ud83c\udf81",
      tickets: "\ud83c\udf9f",
      medal_military: "\ud83c\udf96",
      medal_sports: "\ud83c\udfc5",
      soccer: "\u26bd",
      football: "\ud83c\udfc8",
      golf: "\u26f3",
      fishing_pole_and_fish: "\ud83c\udfa3",
      running_shirt_with_sash: "\ud83c\udfbd",
      ski: "\ud83c\udfbf",
      dart: "\ud83c\udfaf",
      "8ball": "\ud83c\udfb1",
      jigsaw: "\ud83e\udde9",
      spades: "\u2660\ufe0f",
      hearts: "\u2665\ufe0f",
      diamonds: "\u2666\ufe0f",
      clubs: "\u2663\ufe0f",
      black_joker: "\ud83c\udccf",
      mahjong: "\ud83c\udc04",
      art: "\ud83c\udfa8",
      eyeglasses: "\ud83d\udc53",
      dark_sunglasses: "\ud83d\udd76\ufe0f",
      shirt: "\ud83d\udc55",
      tshirt: "\ud83d\udc55",
      swim_brief: "\ud83e\ude72",
      womans_clothes: "\ud83d\udc5a",
      pouch: "\ud83d\udc5d",
      shopping: "\ud83d\udecd",
      school_satchel: "\ud83c\udf92",
      mans_shoe: "\ud83d\udc5e",
      shoe: "\ud83d\udc5e",
      athletic_shoe: "\ud83d\udc5f",
      high_heel: "\ud83d\udc60",
      sandal: "\ud83d\udc61",
      boot: "\ud83d\udc62",
      womans_hat: "\ud83d\udc52",
      tophat: "\ud83c\udfa9",
      mortar_board: "\ud83c\udf93",
      rescue_worker_helmet: "\u26d1",
      gem: "\ud83d\udc8e",
      mute: "\ud83d\udd07",
      speaker: "\ud83d\udd08",
      sound: "\ud83d\udd09",
      loud_sound: "\ud83d\udd0a",
      mega: "\ud83d\udce3",
      no_bell: "\ud83d\udd15",
      notes: "\ud83c\udfb6",
      headphones: "\ud83c\udfa7",
      iphone: "\ud83d\udcf1",
      calling: "\ud83d\udcf2",
      phone: "\u260e\ufe0f",
      fax: "\ud83d\udce0",
      computer: "\ud83d\udcbb",
      minidisc: "\ud83d\udcbd",
      cd: "\ud83d\udcbf",
      film_strip: "\ud83c\udf9e",
      clapper: "\ud83c\udfac",
      tv: "\ud83d\udcfa",
      camera_flash: "\ud83d\udcf8",
      vhs: "\ud83d\udcfc",
      mag: "\ud83d\udd0d",
      mag_right: "\ud83d\udd0e",
      bulb: "\ud83d\udca1",
      izakaya_lantern: "\ud83c\udfee",
      lantern: "\ud83c\udfee",
      book: "\ud83d\udcd6",
      newspaper_roll: "\ud83d\uddde",
      moneybag: "\ud83d\udcb0",
      yen: "\ud83d\udcb4",
      dollar: "\ud83d\udcb5",
      euro: "\ud83d\udcb6",
      pound: "\ud83d\udcb7",
      chart: "\ud83d\udcb9",
      email: "\u2709\ufe0f",
      "e-mail": "\ud83d\udce7",
      mailbox: "\ud83d\udceb",
      mailbox_closed: "\ud83d\udcea",
      mailbox_with_mail: "\ud83d\udcec",
      mailbox_with_no_mail: "\ud83d\udced",
      ballot_box: "\ud83d\uddf3",
      pencil2: "\u270f\ufe0f",
      date: "\ud83d\udcc5",
      chart_with_upwards_trend: "\ud83d\udcc8",
      chart_with_downwards_trend: "\ud83d\udcc9",
      paperclips: "\ud83d\udd87",
      lock: "\ud83d\udd12",
      unlock: "\ud83d\udd13",
      lock_with_ink_pen: "\ud83d\udd0f",
      closed_lock_with_key: "\ud83d\udd10",
      gun: "\ud83d\udd2b",
      smoking: "\ud83d\udeac",
      moyai: "\ud83d\uddff",
      atm: "\ud83c\udfe7",
      put_litter_in_its_place: "\ud83d\udeae",
      wheelchair: "\u267f",
      mens: "\ud83d\udeb9",
      womens: "\ud83d\udeba",
      wc: "\ud83d\udebe",
      no_entry_sign: "\ud83d\udeab",
      do_not_litter: "\ud83d\udeaf",
      "non-potable_water": "\ud83d\udeb1",
      underage: "\ud83d\udd1e",
      arrow_up: "\u2b06\ufe0f",
      arrow_upper_right: "\u2197\ufe0f",
      arrow_right: "\u27a1\ufe0f",
      arrow_lower_right: "\u2198\ufe0f",
      arrow_down: "\u2b07\ufe0f",
      arrow_lower_left: "\u2199\ufe0f",
      arrow_left: "\u2b05\ufe0f",
      arrow_upper_left: "\u2196\ufe0f",
      arrow_up_down: "\u2195\ufe0f",
      leftwards_arrow_with_hook: "\u21a9\ufe0f",
      arrow_right_hook: "\u21aa\ufe0f",
      arrow_heading_up: "\u2934\ufe0f",
      arrow_heading_down: "\u2935\ufe0f",
      arrows_clockwise: "\ud83d\udd03",
      arrows_counterclockwise: "\ud83d\udd04",
      back: "\ud83d\udd19",
      end: "\ud83d\udd1a",
      on: "\ud83d\udd1b",
      soon: "\ud83d\udd1c",
      top: "\ud83d\udd1d",
      six_pointed_star: "\ud83d\udd2f",
      scorpius: "\u264f",
      twisted_rightwards_arrows: "\ud83d\udd00",
      repeat: "\ud83d\udd01",
      repeat_one: "\ud83d\udd02",
      arrow_forward: "\u25b6\ufe0f",
      fast_forward: "\u23e9",
      arrow_backward: "\u25c0\ufe0f",
      rewind: "\u23ea",
      previous_track_button: "\u23ee",
      arrow_up_small: "\ud83d\udd3c",
      arrow_double_up: "\u23eb",
      arrow_down_small: "\ud83d\udd3d",
      arrow_double_down: "\u23ec",
      low_brightness: "\ud83d\udd05",
      high_brightness: "\ud83d\udd06",
      signal_strength: "\ud83d\udcf6",
      recycle: "\u267b\ufe0f",
      trident: "\ud83d\udd31",
      beginner: "\ud83d\udd30",
      o: "\u2b55",
      white_check_mark: "\u2705",
      ballot_box_with_check: "\u2611\ufe0f",
      heavy_check_mark: "\u2714\ufe0f",
      heavy_multiplication_x: "\u2716\ufe0f",
      x: "\u274c",
      negative_squared_cross_mark: "\u274e",
      heavy_plus_sign: "\u2795",
      heavy_minus_sign: "\u2796",
      heavy_division_sign: "\u2797",
      loop: "\u27bf",
      eight_pointed_black_star: "\u2734\ufe0f",
      bangbang: "\u203c\ufe0f",
      interrobang: "\u2049\ufe0f",
      question: "\u2753",
      grey_question: "\u2754",
      grey_exclamation: "\u2755",
      exclamation: "\u2757",
      heavy_exclamation_mark: "\u2757",
      tm: "\u2122\ufe0f",
      hash: "#\ufe0f\u20e3",
      asterisk: "*\ufe0f\u20e3",
      zero: "0\ufe0f\u20e3",
      one: "1\ufe0f\u20e3",
      two: "2\ufe0f\u20e3",
      three: "3\ufe0f\u20e3",
      four: "4\ufe0f\u20e3",
      five: "5\ufe0f\u20e3",
      six: "6\ufe0f\u20e3",
      seven: "7\ufe0f\u20e3",
      eight: "8\ufe0f\u20e3",
      nine: "9\ufe0f\u20e3",
      keycap_ten: "\ud83d\udd1f",
      capital_abcd: "\ud83d\udd20",
      abcd: "\ud83d\udd21",
      symbols: "\ud83d\udd23",
      abc: "\ud83d\udd24",
      a: "\ud83c\udd70\ufe0f",
      ab: "\ud83c\udd8e",
      b: "\ud83c\udd71\ufe0f",
      cl: "\ud83c\udd91",
      cool: "\ud83c\udd92",
      free: "\ud83c\udd93",
      information_source: "\u2139\ufe0f",
      id: "\ud83c\udd94",
      m: "\u24c2\ufe0f",
      new: "\ud83c\udd95",
      ng: "\ud83c\udd96",
      o2: "\ud83c\udd7e\ufe0f",
      ok: "\ud83c\udd97",
      parking: "\ud83c\udd7f\ufe0f",
      sos: "\ud83c\udd98",
      up: "\ud83c\udd99",
      vs: "\ud83c\udd9a",
      koko: "\ud83c\ude01",
      sa: "\ud83c\ude02\ufe0f",
      u6708: "\ud83c\ude37\ufe0f",
      u6709: "\ud83c\ude36",
      u6307: "\ud83c\ude2f",
      ideograph_advantage: "\ud83c\ude50",
      u5272: "\ud83c\ude39",
      u7121: "\ud83c\ude1a",
      u7981: "\ud83c\ude32",
      accept: "\ud83c\ude51",
      u7533: "\ud83c\ude38",
      u5408: "\ud83c\ude34",
      u7a7a: "\ud83c\ude33",
      congratulations: "\u3297\ufe0f",
      secret: "\u3299\ufe0f",
      u55b6: "\ud83c\ude3a",
      u6e80: "\ud83c\ude35",
      large_blue_circle: "\ud83d\udd35",
      small_red_triangle: "\ud83d\udd3a",
      small_red_triangle_down: "\ud83d\udd3b",
      diamond_shape_with_a_dot_inside: "\ud83d\udca0",
      checkered_flag: "\ud83c\udfc1",
      triangular_flag_on_post: "\ud83d\udea9",
      ascension_island: "\ud83c\udde6\ud83c\udde8",
      andorra: "\ud83c\udde6\ud83c\udde9",
      united_arab_emirates: "\ud83c\udde6\ud83c\uddea",
      afghanistan: "\ud83c\udde6\ud83c\uddeb",
      antigua_barbuda: "\ud83c\udde6\ud83c\uddec",
      anguilla: "\ud83c\udde6\ud83c\uddee",
      albania: "\ud83c\udde6\ud83c\uddf1",
      armenia: "\ud83c\udde6\ud83c\uddf2",
      angola: "\ud83c\udde6\ud83c\uddf4",
      antarctica: "\ud83c\udde6\ud83c\uddf6",
      argentina: "\ud83c\udde6\ud83c\uddf7",
      american_samoa: "\ud83c\udde6\ud83c\uddf8",
      austria: "\ud83c\udde6\ud83c\uddf9",
      australia: "\ud83c\udde6\ud83c\uddfa",
      aruba: "\ud83c\udde6\ud83c\uddfc",
      aland_islands: "\ud83c\udde6\ud83c\uddfd",
      azerbaijan: "\ud83c\udde6\ud83c\uddff",
      bosnia_herzegovina: "\ud83c\udde7\ud83c\udde6",
      barbados: "\ud83c\udde7\ud83c\udde7",
      bangladesh: "\ud83c\udde7\ud83c\udde9",
      belgium: "\ud83c\udde7\ud83c\uddea",
      burkina_faso: "\ud83c\udde7\ud83c\uddeb",
      bulgaria: "\ud83c\udde7\ud83c\uddec",
      bahrain: "\ud83c\udde7\ud83c\udded",
      burundi: "\ud83c\udde7\ud83c\uddee",
      benin: "\ud83c\udde7\ud83c\uddef",
      st_barthelemy: "\ud83c\udde7\ud83c\uddf1",
      bermuda: "\ud83c\udde7\ud83c\uddf2",
      brunei: "\ud83c\udde7\ud83c\uddf3",
      bolivia: "\ud83c\udde7\ud83c\uddf4",
      caribbean_netherlands: "\ud83c\udde7\ud83c\uddf6",
      brazil: "\ud83c\udde7\ud83c\uddf7",
      bahamas: "\ud83c\udde7\ud83c\uddf8",
      bhutan: "\ud83c\udde7\ud83c\uddf9",
      bouvet_island: "\ud83c\udde7\ud83c\uddfb",
      botswana: "\ud83c\udde7\ud83c\uddfc",
      belarus: "\ud83c\udde7\ud83c\uddfe",
      belize: "\ud83c\udde7\ud83c\uddff",
      canada: "\ud83c\udde8\ud83c\udde6",
      cocos_islands: "\ud83c\udde8\ud83c\udde8",
      congo_kinshasa: "\ud83c\udde8\ud83c\udde9",
      central_african_republic: "\ud83c\udde8\ud83c\uddeb",
      congo_brazzaville: "\ud83c\udde8\ud83c\uddec",
      switzerland: "\ud83c\udde8\ud83c\udded",
      cote_divoire: "\ud83c\udde8\ud83c\uddee",
      cook_islands: "\ud83c\udde8\ud83c\uddf0",
      chile: "\ud83c\udde8\ud83c\uddf1",
      cameroon: "\ud83c\udde8\ud83c\uddf2",
      cn: "\ud83c\udde8\ud83c\uddf3",
      colombia: "\ud83c\udde8\ud83c\uddf4",
      clipperton_island: "\ud83c\udde8\ud83c\uddf5",
      costa_rica: "\ud83c\udde8\ud83c\uddf7",
      cuba: "\ud83c\udde8\ud83c\uddfa",
      cape_verde: "\ud83c\udde8\ud83c\uddfb",
      curacao: "\ud83c\udde8\ud83c\uddfc",
      christmas_island: "\ud83c\udde8\ud83c\uddfd",
      cyprus: "\ud83c\udde8\ud83c\uddfe",
      czech_republic: "\ud83c\udde8\ud83c\uddff",
      de: "\ud83c\udde9\ud83c\uddea",
      diego_garcia: "\ud83c\udde9\ud83c\uddec",
      djibouti: "\ud83c\udde9\ud83c\uddef",
      denmark: "\ud83c\udde9\ud83c\uddf0",
      dominica: "\ud83c\udde9\ud83c\uddf2",
      dominican_republic: "\ud83c\udde9\ud83c\uddf4",
      algeria: "\ud83c\udde9\ud83c\uddff",
      ceuta_melilla: "\ud83c\uddea\ud83c\udde6",
      ecuador: "\ud83c\uddea\ud83c\udde8",
      estonia: "\ud83c\uddea\ud83c\uddea",
      egypt: "\ud83c\uddea\ud83c\uddec",
      western_sahara: "\ud83c\uddea\ud83c\udded",
      eritrea: "\ud83c\uddea\ud83c\uddf7",
      es: "\ud83c\uddea\ud83c\uddf8",
      ethiopia: "\ud83c\uddea\ud83c\uddf9",
      eu: "\ud83c\uddea\ud83c\uddfa",
      european_union: "\ud83c\uddea\ud83c\uddfa",
      finland: "\ud83c\uddeb\ud83c\uddee",
      fiji: "\ud83c\uddeb\ud83c\uddef",
      falkland_islands: "\ud83c\uddeb\ud83c\uddf0",
      micronesia: "\ud83c\uddeb\ud83c\uddf2",
      faroe_islands: "\ud83c\uddeb\ud83c\uddf4",
      fr: "\ud83c\uddeb\ud83c\uddf7",
      gabon: "\ud83c\uddec\ud83c\udde6",
      gb: "\ud83c\uddec\ud83c\udde7",
      uk: "\ud83c\uddec\ud83c\udde7",
      grenada: "\ud83c\uddec\ud83c\udde9",
      georgia: "\ud83c\uddec\ud83c\uddea",
      french_guiana: "\ud83c\uddec\ud83c\uddeb",
      guernsey: "\ud83c\uddec\ud83c\uddec",
      ghana: "\ud83c\uddec\ud83c\udded",
      gibraltar: "\ud83c\uddec\ud83c\uddee",
      greenland: "\ud83c\uddec\ud83c\uddf1",
      gambia: "\ud83c\uddec\ud83c\uddf2",
      guinea: "\ud83c\uddec\ud83c\uddf3",
      guadeloupe: "\ud83c\uddec\ud83c\uddf5",
      equatorial_guinea: "\ud83c\uddec\ud83c\uddf6",
      greece: "\ud83c\uddec\ud83c\uddf7",
      south_georgia_south_sandwich_islands: "\ud83c\uddec\ud83c\uddf8",
      guatemala: "\ud83c\uddec\ud83c\uddf9",
      guam: "\ud83c\uddec\ud83c\uddfa",
      guinea_bissau: "\ud83c\uddec\ud83c\uddfc",
      guyana: "\ud83c\uddec\ud83c\uddfe",
      hong_kong: "\ud83c\udded\ud83c\uddf0",
      heard_mcdonald_islands: "\ud83c\udded\ud83c\uddf2",
      honduras: "\ud83c\udded\ud83c\uddf3",
      croatia: "\ud83c\udded\ud83c\uddf7",
      haiti: "\ud83c\udded\ud83c\uddf9",
      hungary: "\ud83c\udded\ud83c\uddfa",
      canary_islands: "\ud83c\uddee\ud83c\udde8",
      indonesia: "\ud83c\uddee\ud83c\udde9",
      ireland: "\ud83c\uddee\ud83c\uddea",
      israel: "\ud83c\uddee\ud83c\uddf1",
      isle_of_man: "\ud83c\uddee\ud83c\uddf2",
      india: "\ud83c\uddee\ud83c\uddf3",
      british_indian_ocean_territory: "\ud83c\uddee\ud83c\uddf4",
      iraq: "\ud83c\uddee\ud83c\uddf6",
      iran: "\ud83c\uddee\ud83c\uddf7",
      iceland: "\ud83c\uddee\ud83c\uddf8",
      it: "\ud83c\uddee\ud83c\uddf9",
      jersey: "\ud83c\uddef\ud83c\uddea",
      jamaica: "\ud83c\uddef\ud83c\uddf2",
      jordan: "\ud83c\uddef\ud83c\uddf4",
      jp: "\ud83c\uddef\ud83c\uddf5",
      kenya: "\ud83c\uddf0\ud83c\uddea",
      kyrgyzstan: "\ud83c\uddf0\ud83c\uddec",
      cambodia: "\ud83c\uddf0\ud83c\udded",
      kiribati: "\ud83c\uddf0\ud83c\uddee",
      comoros: "\ud83c\uddf0\ud83c\uddf2",
      st_kitts_nevis: "\ud83c\uddf0\ud83c\uddf3",
      north_korea: "\ud83c\uddf0\ud83c\uddf5",
      kr: "\ud83c\uddf0\ud83c\uddf7",
      kuwait: "\ud83c\uddf0\ud83c\uddfc",
      cayman_islands: "\ud83c\uddf0\ud83c\uddfe",
      kazakhstan: "\ud83c\uddf0\ud83c\uddff",
      laos: "\ud83c\uddf1\ud83c\udde6",
      lebanon: "\ud83c\uddf1\ud83c\udde7",
      st_lucia: "\ud83c\uddf1\ud83c\udde8",
      liechtenstein: "\ud83c\uddf1\ud83c\uddee",
      sri_lanka: "\ud83c\uddf1\ud83c\uddf0",
      liberia: "\ud83c\uddf1\ud83c\uddf7",
      lesotho: "\ud83c\uddf1\ud83c\uddf8",
      lithuania: "\ud83c\uddf1\ud83c\uddf9",
      luxembourg: "\ud83c\uddf1\ud83c\uddfa",
      latvia: "\ud83c\uddf1\ud83c\uddfb",
      libya: "\ud83c\uddf1\ud83c\uddfe",
      morocco: "\ud83c\uddf2\ud83c\udde6",
      monaco: "\ud83c\uddf2\ud83c\udde8",
      moldova: "\ud83c\uddf2\ud83c\udde9",
      montenegro: "\ud83c\uddf2\ud83c\uddea",
      st_martin: "\ud83c\uddf2\ud83c\uddeb",
      madagascar: "\ud83c\uddf2\ud83c\uddec",
      marshall_islands: "\ud83c\uddf2\ud83c\udded",
      macedonia: "\ud83c\uddf2\ud83c\uddf0",
      mali: "\ud83c\uddf2\ud83c\uddf1",
      myanmar: "\ud83c\uddf2\ud83c\uddf2",
      mongolia: "\ud83c\uddf2\ud83c\uddf3",
      macau: "\ud83c\uddf2\ud83c\uddf4",
      northern_mariana_islands: "\ud83c\uddf2\ud83c\uddf5",
      martinique: "\ud83c\uddf2\ud83c\uddf6",
      mauritania: "\ud83c\uddf2\ud83c\uddf7",
      montserrat: "\ud83c\uddf2\ud83c\uddf8",
      malta: "\ud83c\uddf2\ud83c\uddf9",
      mauritius: "\ud83c\uddf2\ud83c\uddfa",
      maldives: "\ud83c\uddf2\ud83c\uddfb",
      malawi: "\ud83c\uddf2\ud83c\uddfc",
      mexico: "\ud83c\uddf2\ud83c\uddfd",
      malaysia: "\ud83c\uddf2\ud83c\uddfe",
      mozambique: "\ud83c\uddf2\ud83c\uddff",
      namibia: "\ud83c\uddf3\ud83c\udde6",
      new_caledonia: "\ud83c\uddf3\ud83c\udde8",
      niger: "\ud83c\uddf3\ud83c\uddea",
      norfolk_island: "\ud83c\uddf3\ud83c\uddeb",
      nigeria: "\ud83c\uddf3\ud83c\uddec",
      nicaragua: "\ud83c\uddf3\ud83c\uddee",
      netherlands: "\ud83c\uddf3\ud83c\uddf1",
      norway: "\ud83c\uddf3\ud83c\uddf4",
      nepal: "\ud83c\uddf3\ud83c\uddf5",
      nauru: "\ud83c\uddf3\ud83c\uddf7",
      niue: "\ud83c\uddf3\ud83c\uddfa",
      new_zealand: "\ud83c\uddf3\ud83c\uddff",
      oman: "\ud83c\uddf4\ud83c\uddf2",
      panama: "\ud83c\uddf5\ud83c\udde6",
      peru: "\ud83c\uddf5\ud83c\uddea",
      french_polynesia: "\ud83c\uddf5\ud83c\uddeb",
      papua_new_guinea: "\ud83c\uddf5\ud83c\uddec",
      philippines: "\ud83c\uddf5\ud83c\udded",
      pakistan: "\ud83c\uddf5\ud83c\uddf0",
      poland: "\ud83c\uddf5\ud83c\uddf1",
      st_pierre_miquelon: "\ud83c\uddf5\ud83c\uddf2",
      pitcairn_islands: "\ud83c\uddf5\ud83c\uddf3",
      puerto_rico: "\ud83c\uddf5\ud83c\uddf7",
      palestinian_territories: "\ud83c\uddf5\ud83c\uddf8",
      portugal: "\ud83c\uddf5\ud83c\uddf9",
      palau: "\ud83c\uddf5\ud83c\uddfc",
      paraguay: "\ud83c\uddf5\ud83c\uddfe",
      qatar: "\ud83c\uddf6\ud83c\udde6",
      reunion: "\ud83c\uddf7\ud83c\uddea",
      romania: "\ud83c\uddf7\ud83c\uddf4",
      serbia: "\ud83c\uddf7\ud83c\uddf8",
      ru: "\ud83c\uddf7\ud83c\uddfa",
      rwanda: "\ud83c\uddf7\ud83c\uddfc",
      saudi_arabia: "\ud83c\uddf8\ud83c\udde6",
      solomon_islands: "\ud83c\uddf8\ud83c\udde7",
      seychelles: "\ud83c\uddf8\ud83c\udde8",
      sudan: "\ud83c\uddf8\ud83c\udde9",
      sweden: "\ud83c\uddf8\ud83c\uddea",
      singapore: "\ud83c\uddf8\ud83c\uddec",
      st_helena: "\ud83c\uddf8\ud83c\udded",
      slovenia: "\ud83c\uddf8\ud83c\uddee",
      svalbard_jan_mayen: "\ud83c\uddf8\ud83c\uddef",
      slovakia: "\ud83c\uddf8\ud83c\uddf0",
      sierra_leone: "\ud83c\uddf8\ud83c\uddf1",
      san_marino: "\ud83c\uddf8\ud83c\uddf2",
      senegal: "\ud83c\uddf8\ud83c\uddf3",
      somalia: "\ud83c\uddf8\ud83c\uddf4",
      suriname: "\ud83c\uddf8\ud83c\uddf7",
      south_sudan: "\ud83c\uddf8\ud83c\uddf8",
      sao_tome_principe: "\ud83c\uddf8\ud83c\uddf9",
      el_salvador: "\ud83c\uddf8\ud83c\uddfb",
      sint_maarten: "\ud83c\uddf8\ud83c\uddfd",
      syria: "\ud83c\uddf8\ud83c\uddfe",
      swaziland: "\ud83c\uddf8\ud83c\uddff",
      tristan_da_cunha: "\ud83c\uddf9\ud83c\udde6",
      turks_caicos_islands: "\ud83c\uddf9\ud83c\udde8",
      chad: "\ud83c\uddf9\ud83c\udde9",
      french_southern_territories: "\ud83c\uddf9\ud83c\uddeb",
      togo: "\ud83c\uddf9\ud83c\uddec",
      thailand: "\ud83c\uddf9\ud83c\udded",
      tajikistan: "\ud83c\uddf9\ud83c\uddef",
      tokelau: "\ud83c\uddf9\ud83c\uddf0",
      timor_leste: "\ud83c\uddf9\ud83c\uddf1",
      turkmenistan: "\ud83c\uddf9\ud83c\uddf2",
      tunisia: "\ud83c\uddf9\ud83c\uddf3",
      tonga: "\ud83c\uddf9\ud83c\uddf4",
      tr: "\ud83c\uddf9\ud83c\uddf7",
      trinidad_tobago: "\ud83c\uddf9\ud83c\uddf9",
      tuvalu: "\ud83c\uddf9\ud83c\uddfb",
      taiwan: "\ud83c\uddf9\ud83c\uddfc",
      tanzania: "\ud83c\uddf9\ud83c\uddff",
      ukraine: "\ud83c\uddfa\ud83c\udde6",
      uganda: "\ud83c\uddfa\ud83c\uddec",
      us_outlying_islands: "\ud83c\uddfa\ud83c\uddf2",
      united_nations: "\ud83c\uddfa\ud83c\uddf3",
      us: "\ud83c\uddfa\ud83c\uddf8",
      uruguay: "\ud83c\uddfa\ud83c\uddfe",
      uzbekistan: "\ud83c\uddfa\ud83c\uddff",
      vatican_city: "\ud83c\uddfb\ud83c\udde6",
      st_vincent_grenadines: "\ud83c\uddfb\ud83c\udde8",
      venezuela: "\ud83c\uddfb\ud83c\uddea",
      british_virgin_islands: "\ud83c\uddfb\ud83c\uddec",
      us_virgin_islands: "\ud83c\uddfb\ud83c\uddee",
      vietnam: "\ud83c\uddfb\ud83c\uddf3",
      vanuatu: "\ud83c\uddfb\ud83c\uddfa",
      wallis_futuna: "\ud83c\uddfc\ud83c\uddeb",
      samoa: "\ud83c\uddfc\ud83c\uddf8",
      kosovo: "\ud83c\uddfd\ud83c\uddf0",
      yemen: "\ud83c\uddfe\ud83c\uddea",
      mayotte: "\ud83c\uddfe\ud83c\uddf9",
      south_africa: "\ud83c\uddff\ud83c\udde6",
      zambia: "\ud83c\uddff\ud83c\uddf2",
      zimbabwe: "\ud83c\uddff\ud83c\uddfc",
      england:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
      scotland:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
      wales:
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f",
      hundred_points_symbol: "\ud83d\udcaf",
      input_symbol_for_numbers: "\ud83d\udd22",
      "#": "#\ufe0f\u20e3",
      keycap_star: "*\ufe0f\u20e3",
      "*": "*\ufe0f\u20e3",
      mahjong_tile_red_dragon: "\ud83c\udc04",
      playing_card_black_joker: "\ud83c\udccf",
      "a_button_(blood_type)": "\ud83c\udd70\ufe0f",
      "b_button_(blood_type)": "\ud83c\udd71\ufe0f",
      "o_button_(blood_type)": "\ud83c\udd7e\ufe0f",
      negative_squared_ab: "\ud83c\udd8e",
      "ab_button_(blood_type)": "\ud83c\udd8e",
      squared_cl: "\ud83c\udd91",
      squared_cool: "\ud83c\udd92",
      squared_free: "\ud83c\udd93",
      squared_id: "\ud83c\udd94",
      squared_new: "\ud83c\udd95",
      squared_ng: "\ud83c\udd96",
      squared_ok: "\ud83c\udd97",
      squared_sos: "\ud83c\udd98",
      squared_up_with_exclamation_mark: "\ud83c\udd99",
      "up!_button": "\ud83c\udd99",
      squared_vs: "\ud83c\udd9a",
      "flag-ac": "\ud83c\udde6\ud83c\udde8",
      "flag-ad": "\ud83c\udde6\ud83c\udde9",
      ad: "\ud83c\udde6\ud83c\udde9",
      "flag-ae": "\ud83c\udde6\ud83c\uddea",
      ae: "\ud83c\udde6\ud83c\uddea",
      "flag-af": "\ud83c\udde6\ud83c\uddeb",
      af: "\ud83c\udde6\ud83c\uddeb",
      "flag-ag": "\ud83c\udde6\ud83c\uddec",
      ag: "\ud83c\udde6\ud83c\uddec",
      "antigua_&_barbuda": "\ud83c\udde6\ud83c\uddec",
      "flag-ai": "\ud83c\udde6\ud83c\uddee",
      ai: "\ud83c\udde6\ud83c\uddee",
      "flag-al": "\ud83c\udde6\ud83c\uddf1",
      al: "\ud83c\udde6\ud83c\uddf1",
      "flag-am": "\ud83c\udde6\ud83c\uddf2",
      am: "\ud83c\udde6\ud83c\uddf2",
      "flag-ao": "\ud83c\udde6\ud83c\uddf4",
      ao: "\ud83c\udde6\ud83c\uddf4",
      "flag-aq": "\ud83c\udde6\ud83c\uddf6",
      "flag-ar": "\ud83c\udde6\ud83c\uddf7",
      ar: "\ud83c\udde6\ud83c\uddf7",
      "flag-as": "\ud83c\udde6\ud83c\uddf8",
      as: "\ud83c\udde6\ud83c\uddf8",
      "flag-at": "\ud83c\udde6\ud83c\uddf9",
      at: "\ud83c\udde6\ud83c\uddf9",
      "flag-au": "\ud83c\udde6\ud83c\uddfa",
      au: "\ud83c\udde6\ud83c\uddfa",
      "flag-aw": "\ud83c\udde6\ud83c\uddfc",
      aw: "\ud83c\udde6\ud83c\uddfc",
      "flag-ax": "\ud83c\udde6\ud83c\uddfd",
      "\xe5land_islands": "\ud83c\udde6\ud83c\uddfd",
      "flag-az": "\ud83c\udde6\ud83c\uddff",
      az: "\ud83c\udde6\ud83c\uddff",
      "flag-ba": "\ud83c\udde7\ud83c\udde6",
      ba: "\ud83c\udde7\ud83c\udde6",
      "bosnia_&_herzegovina": "\ud83c\udde7\ud83c\udde6",
      "flag-bb": "\ud83c\udde7\ud83c\udde7",
      bb: "\ud83c\udde7\ud83c\udde7",
      "flag-bd": "\ud83c\udde7\ud83c\udde9",
      bd: "\ud83c\udde7\ud83c\udde9",
      "flag-be": "\ud83c\udde7\ud83c\uddea",
      be: "\ud83c\udde7\ud83c\uddea",
      "flag-bf": "\ud83c\udde7\ud83c\uddeb",
      bf: "\ud83c\udde7\ud83c\uddeb",
      "flag-bg": "\ud83c\udde7\ud83c\uddec",
      bg: "\ud83c\udde7\ud83c\uddec",
      "flag-bh": "\ud83c\udde7\ud83c\udded",
      bh: "\ud83c\udde7\ud83c\udded",
      "flag-bi": "\ud83c\udde7\ud83c\uddee",
      bi: "\ud83c\udde7\ud83c\uddee",
      "flag-bj": "\ud83c\udde7\ud83c\uddef",
      bj: "\ud83c\udde7\ud83c\uddef",
      "flag-bl": "\ud83c\udde7\ud83c\uddf1",
      "flag-bm": "\ud83c\udde7\ud83c\uddf2",
      bm: "\ud83c\udde7\ud83c\uddf2",
      "flag-bn": "\ud83c\udde7\ud83c\uddf3",
      bn: "\ud83c\udde7\ud83c\uddf3",
      "flag-bo": "\ud83c\udde7\ud83c\uddf4",
      bo: "\ud83c\udde7\ud83c\uddf4",
      "flag-bq": "\ud83c\udde7\ud83c\uddf6",
      "flag-br": "\ud83c\udde7\ud83c\uddf7",
      br: "\ud83c\udde7\ud83c\uddf7",
      "flag-bs": "\ud83c\udde7\ud83c\uddf8",
      bs: "\ud83c\udde7\ud83c\uddf8",
      "flag-bt": "\ud83c\udde7\ud83c\uddf9",
      bt: "\ud83c\udde7\ud83c\uddf9",
      "flag-bv": "\ud83c\udde7\ud83c\uddfb",
      "flag-bw": "\ud83c\udde7\ud83c\uddfc",
      bw: "\ud83c\udde7\ud83c\uddfc",
      "flag-by": "\ud83c\udde7\ud83c\uddfe",
      by: "\ud83c\udde7\ud83c\uddfe",
      "flag-bz": "\ud83c\udde7\ud83c\uddff",
      bz: "\ud83c\udde7\ud83c\uddff",
      "flag-ca": "\ud83c\udde8\ud83c\udde6",
      ca: "\ud83c\udde8\ud83c\udde6",
      "flag-cc": "\ud83c\udde8\ud83c\udde8",
      "cocos_(keeling)_islands": "\ud83c\udde8\ud83c\udde8",
      "flag-cd": "\ud83c\udde8\ud83c\udde9",
      cd_flag: "\ud83c\udde8\ud83c\udde9",
      "congo_-_kinshasa": "\ud83c\udde8\ud83c\udde9",
      "flag-cf": "\ud83c\udde8\ud83c\uddeb",
      cf: "\ud83c\udde8\ud83c\uddeb",
      "flag-cg": "\ud83c\udde8\ud83c\uddec",
      cg: "\ud83c\udde8\ud83c\uddec",
      "congo_-_brazzaville": "\ud83c\udde8\ud83c\uddec",
      "flag-ch": "\ud83c\udde8\ud83c\udded",
      ch: "\ud83c\udde8\ud83c\udded",
      "flag-ci": "\ud83c\udde8\ud83c\uddee",
      ci: "\ud83c\udde8\ud83c\uddee",
      "c\xf4te_d\u2019ivoire": "\ud83c\udde8\ud83c\uddee",
      "flag-ck": "\ud83c\udde8\ud83c\uddf0",
      ck: "\ud83c\udde8\ud83c\uddf0",
      "flag-cl": "\ud83c\udde8\ud83c\uddf1",
      cl_flag: "\ud83c\udde8\ud83c\uddf1",
      "flag-cm": "\ud83c\udde8\ud83c\uddf2",
      cm: "\ud83c\udde8\ud83c\uddf2",
      "flag-cn": "\ud83c\udde8\ud83c\uddf3",
      china: "\ud83c\udde8\ud83c\uddf3",
      "flag-co": "\ud83c\udde8\ud83c\uddf4",
      co: "\ud83c\udde8\ud83c\uddf4",
      "flag-cp": "\ud83c\udde8\ud83c\uddf5",
      "flag-cr": "\ud83c\udde8\ud83c\uddf7",
      cr: "\ud83c\udde8\ud83c\uddf7",
      "flag-cu": "\ud83c\udde8\ud83c\uddfa",
      cu: "\ud83c\udde8\ud83c\uddfa",
      "flag-cv": "\ud83c\udde8\ud83c\uddfb",
      cv: "\ud83c\udde8\ud83c\uddfb",
      "flag-cw": "\ud83c\udde8\ud83c\uddfc",
      cw: "\ud83c\udde8\ud83c\uddfc",
      "cura\xe7ao": "\ud83c\udde8\ud83c\uddfc",
      "flag-cx": "\ud83c\udde8\ud83c\uddfd",
      "flag-cy": "\ud83c\udde8\ud83c\uddfe",
      cy: "\ud83c\udde8\ud83c\uddfe",
      "flag-cz": "\ud83c\udde8\ud83c\uddff",
      cz: "\ud83c\udde8\ud83c\uddff",
      czechia: "\ud83c\udde8\ud83c\uddff",
      "flag-de": "\ud83c\udde9\ud83c\uddea",
      germany: "\ud83c\udde9\ud83c\uddea",
      "flag-dg": "\ud83c\udde9\ud83c\uddec",
      "flag-dj": "\ud83c\udde9\ud83c\uddef",
      dj: "\ud83c\udde9\ud83c\uddef",
      "flag-dk": "\ud83c\udde9\ud83c\uddf0",
      dk: "\ud83c\udde9\ud83c\uddf0",
      "flag-dm": "\ud83c\udde9\ud83c\uddf2",
      dm: "\ud83c\udde9\ud83c\uddf2",
      "flag-do": "\ud83c\udde9\ud83c\uddf4",
      do: "\ud83c\udde9\ud83c\uddf4",
      "flag-dz": "\ud83c\udde9\ud83c\uddff",
      dz: "\ud83c\udde9\ud83c\uddff",
      "flag-ea": "\ud83c\uddea\ud83c\udde6",
      "ceuta_&_melilla": "\ud83c\uddea\ud83c\udde6",
      "flag-ec": "\ud83c\uddea\ud83c\udde8",
      ec: "\ud83c\uddea\ud83c\udde8",
      "flag-ee": "\ud83c\uddea\ud83c\uddea",
      ee: "\ud83c\uddea\ud83c\uddea",
      "flag-eg": "\ud83c\uddea\ud83c\uddec",
      eg: "\ud83c\uddea\ud83c\uddec",
      "flag-eh": "\ud83c\uddea\ud83c\udded",
      "flag-er": "\ud83c\uddea\ud83c\uddf7",
      er: "\ud83c\uddea\ud83c\uddf7",
      "flag-es": "\ud83c\uddea\ud83c\uddf8",
      spain: "\ud83c\uddea\ud83c\uddf8",
      "flag-et": "\ud83c\uddea\ud83c\uddf9",
      et: "\ud83c\uddea\ud83c\uddf9",
      "flag-eu": "\ud83c\uddea\ud83c\uddfa",
      "flag-fi": "\ud83c\uddeb\ud83c\uddee",
      fi: "\ud83c\uddeb\ud83c\uddee",
      "flag-fj": "\ud83c\uddeb\ud83c\uddef",
      fj: "\ud83c\uddeb\ud83c\uddef",
      "flag-fk": "\ud83c\uddeb\ud83c\uddf0",
      "flag-fm": "\ud83c\uddeb\ud83c\uddf2",
      "flag-fo": "\ud83c\uddeb\ud83c\uddf4",
      fo: "\ud83c\uddeb\ud83c\uddf4",
      "flag-fr": "\ud83c\uddeb\ud83c\uddf7",
      france: "\ud83c\uddeb\ud83c\uddf7",
      "flag-ga": "\ud83c\uddec\ud83c\udde6",
      ga: "\ud83c\uddec\ud83c\udde6",
      "flag-gb": "\ud83c\uddec\ud83c\udde7",
      united_kingdom: "\ud83c\uddec\ud83c\udde7",
      "flag-gd": "\ud83c\uddec\ud83c\udde9",
      gd: "\ud83c\uddec\ud83c\udde9",
      "flag-ge": "\ud83c\uddec\ud83c\uddea",
      ge: "\ud83c\uddec\ud83c\uddea",
      "flag-gf": "\ud83c\uddec\ud83c\uddeb",
      gf: "\ud83c\uddec\ud83c\uddeb",
      "flag-gg": "\ud83c\uddec\ud83c\uddec",
      "flag-gh": "\ud83c\uddec\ud83c\udded",
      gh: "\ud83c\uddec\ud83c\udded",
      "flag-gi": "\ud83c\uddec\ud83c\uddee",
      gi: "\ud83c\uddec\ud83c\uddee",
      "flag-gl": "\ud83c\uddec\ud83c\uddf1",
      "flag-gm": "\ud83c\uddec\ud83c\uddf2",
      gm: "\ud83c\uddec\ud83c\uddf2",
      "flag-gn": "\ud83c\uddec\ud83c\uddf3",
      gn: "\ud83c\uddec\ud83c\uddf3",
      "flag-gp": "\ud83c\uddec\ud83c\uddf5",
      gp: "\ud83c\uddec\ud83c\uddf5",
      "flag-gq": "\ud83c\uddec\ud83c\uddf6",
      gq: "\ud83c\uddec\ud83c\uddf6",
      "flag-gr": "\ud83c\uddec\ud83c\uddf7",
      gr: "\ud83c\uddec\ud83c\uddf7",
      "flag-gs": "\ud83c\uddec\ud83c\uddf8",
      "south_georgia_&_south_sandwich_islands": "\ud83c\uddec\ud83c\uddf8",
      "flag-gt": "\ud83c\uddec\ud83c\uddf9",
      gt: "\ud83c\uddec\ud83c\uddf9",
      "flag-gu": "\ud83c\uddec\ud83c\uddfa",
      gu: "\ud83c\uddec\ud83c\uddfa",
      "flag-gw": "\ud83c\uddec\ud83c\uddfc",
      gw: "\ud83c\uddec\ud83c\uddfc",
      "guinea-bissau": "\ud83c\uddec\ud83c\uddfc",
      "flag-gy": "\ud83c\uddec\ud83c\uddfe",
      gy: "\ud83c\uddec\ud83c\uddfe",
      "flag-hk": "\ud83c\udded\ud83c\uddf0",
      hk: "\ud83c\udded\ud83c\uddf0",
      hong_kong_sar_china: "\ud83c\udded\ud83c\uddf0",
      "flag-hm": "\ud83c\udded\ud83c\uddf2",
      "heard_&_mcdonald_islands": "\ud83c\udded\ud83c\uddf2",
      "flag-hn": "\ud83c\udded\ud83c\uddf3",
      hn: "\ud83c\udded\ud83c\uddf3",
      "flag-hr": "\ud83c\udded\ud83c\uddf7",
      hr: "\ud83c\udded\ud83c\uddf7",
      "flag-ht": "\ud83c\udded\ud83c\uddf9",
      ht: "\ud83c\udded\ud83c\uddf9",
      "flag-hu": "\ud83c\udded\ud83c\uddfa",
      hu: "\ud83c\udded\ud83c\uddfa",
      "flag-ic": "\ud83c\uddee\ud83c\udde8",
      "flag-id": "\ud83c\uddee\ud83c\udde9",
      id_flag: "\ud83c\uddee\ud83c\udde9",
      "flag-ie": "\ud83c\uddee\ud83c\uddea",
      ie: "\ud83c\uddee\ud83c\uddea",
      "flag-il": "\ud83c\uddee\ud83c\uddf1",
      il: "\ud83c\uddee\ud83c\uddf1",
      "flag-im": "\ud83c\uddee\ud83c\uddf2",
      "flag-in": "\ud83c\uddee\ud83c\uddf3",
      in: "\ud83c\uddee\ud83c\uddf3",
      "flag-io": "\ud83c\uddee\ud83c\uddf4",
      "flag-iq": "\ud83c\uddee\ud83c\uddf6",
      iq: "\ud83c\uddee\ud83c\uddf6",
      "flag-ir": "\ud83c\uddee\ud83c\uddf7",
      ir: "\ud83c\uddee\ud83c\uddf7",
      "flag-is": "\ud83c\uddee\ud83c\uddf8",
      is: "\ud83c\uddee\ud83c\uddf8",
      "flag-it": "\ud83c\uddee\ud83c\uddf9",
      italy: "\ud83c\uddee\ud83c\uddf9",
      "flag-je": "\ud83c\uddef\ud83c\uddea",
      "flag-jm": "\ud83c\uddef\ud83c\uddf2",
      jm: "\ud83c\uddef\ud83c\uddf2",
      "flag-jo": "\ud83c\uddef\ud83c\uddf4",
      jo: "\ud83c\uddef\ud83c\uddf4",
      "flag-jp": "\ud83c\uddef\ud83c\uddf5",
      "flag-ke": "\ud83c\uddf0\ud83c\uddea",
      ke: "\ud83c\uddf0\ud83c\uddea",
      "flag-kg": "\ud83c\uddf0\ud83c\uddec",
      kg: "\ud83c\uddf0\ud83c\uddec",
      "flag-kh": "\ud83c\uddf0\ud83c\udded",
      kh: "\ud83c\uddf0\ud83c\udded",
      "flag-ki": "\ud83c\uddf0\ud83c\uddee",
      ki: "\ud83c\uddf0\ud83c\uddee",
      "flag-km": "\ud83c\uddf0\ud83c\uddf2",
      km: "\ud83c\uddf0\ud83c\uddf2",
      "flag-kn": "\ud83c\uddf0\ud83c\uddf3",
      "flag-kp": "\ud83c\uddf0\ud83c\uddf5",
      kp: "\ud83c\uddf0\ud83c\uddf5",
      "flag-kr": "\ud83c\uddf0\ud83c\uddf7",
      south_korea: "\ud83c\uddf0\ud83c\uddf7",
      "flag-kw": "\ud83c\uddf0\ud83c\uddfc",
      kw: "\ud83c\uddf0\ud83c\uddfc",
      "flag-ky": "\ud83c\uddf0\ud83c\uddfe",
      ky: "\ud83c\uddf0\ud83c\uddfe",
      "flag-kz": "\ud83c\uddf0\ud83c\uddff",
      kz: "\ud83c\uddf0\ud83c\uddff",
      "flag-la": "\ud83c\uddf1\ud83c\udde6",
      la: "\ud83c\uddf1\ud83c\udde6",
      "flag-lb": "\ud83c\uddf1\ud83c\udde7",
      lb: "\ud83c\uddf1\ud83c\udde7",
      "flag-lc": "\ud83c\uddf1\ud83c\udde8",
      "flag-li": "\ud83c\uddf1\ud83c\uddee",
      li: "\ud83c\uddf1\ud83c\uddee",
      "flag-lk": "\ud83c\uddf1\ud83c\uddf0",
      lk: "\ud83c\uddf1\ud83c\uddf0",
      "flag-lr": "\ud83c\uddf1\ud83c\uddf7",
      lr: "\ud83c\uddf1\ud83c\uddf7",
      "flag-ls": "\ud83c\uddf1\ud83c\uddf8",
      ls: "\ud83c\uddf1\ud83c\uddf8",
      "flag-lt": "\ud83c\uddf1\ud83c\uddf9",
      lt: "\ud83c\uddf1\ud83c\uddf9",
      "flag-lu": "\ud83c\uddf1\ud83c\uddfa",
      lu: "\ud83c\uddf1\ud83c\uddfa",
      "flag-lv": "\ud83c\uddf1\ud83c\uddfb",
      lv: "\ud83c\uddf1\ud83c\uddfb",
      "flag-ly": "\ud83c\uddf1\ud83c\uddfe",
      ly: "\ud83c\uddf1\ud83c\uddfe",
      "flag-ma": "\ud83c\uddf2\ud83c\udde6",
      ma: "\ud83c\uddf2\ud83c\udde6",
      "flag-mc": "\ud83c\uddf2\ud83c\udde8",
      "flag-md": "\ud83c\uddf2\ud83c\udde9",
      md: "\ud83c\uddf2\ud83c\udde9",
      "flag-me": "\ud83c\uddf2\ud83c\uddea",
      me: "\ud83c\uddf2\ud83c\uddea",
      "flag-mf": "\ud83c\uddf2\ud83c\uddeb",
      "flag-mg": "\ud83c\uddf2\ud83c\uddec",
      mg: "\ud83c\uddf2\ud83c\uddec",
      "flag-mh": "\ud83c\uddf2\ud83c\udded",
      "flag-mk": "\ud83c\uddf2\ud83c\uddf0",
      mk: "\ud83c\uddf2\ud83c\uddf0",
      "flag-ml": "\ud83c\uddf2\ud83c\uddf1",
      ml: "\ud83c\uddf2\ud83c\uddf1",
      "flag-mm": "\ud83c\uddf2\ud83c\uddf2",
      mm: "\ud83c\uddf2\ud83c\uddf2",
      "myanmar_(burma)": "\ud83c\uddf2\ud83c\uddf2",
      "flag-mn": "\ud83c\uddf2\ud83c\uddf3",
      mn: "\ud83c\uddf2\ud83c\uddf3",
      "flag-mo": "\ud83c\uddf2\ud83c\uddf4",
      mo: "\ud83c\uddf2\ud83c\uddf4",
      macao_sar_china: "\ud83c\uddf2\ud83c\uddf4",
      "flag-mp": "\ud83c\uddf2\ud83c\uddf5",
      mp: "\ud83c\uddf2\ud83c\uddf5",
      "flag-mq": "\ud83c\uddf2\ud83c\uddf6",
      mq: "\ud83c\uddf2\ud83c\uddf6",
      "flag-mr": "\ud83c\uddf2\ud83c\uddf7",
      mr: "\ud83c\uddf2\ud83c\uddf7",
      "flag-ms": "\ud83c\uddf2\ud83c\uddf8",
      ms: "\ud83c\uddf2\ud83c\uddf8",
      "flag-mt": "\ud83c\uddf2\ud83c\uddf9",
      mt: "\ud83c\uddf2\ud83c\uddf9",
      "flag-mu": "\ud83c\uddf2\ud83c\uddfa",
      "flag-mv": "\ud83c\uddf2\ud83c\uddfb",
      mv: "\ud83c\uddf2\ud83c\uddfb",
      "flag-mw": "\ud83c\uddf2\ud83c\uddfc",
      mw: "\ud83c\uddf2\ud83c\uddfc",
      "flag-mx": "\ud83c\uddf2\ud83c\uddfd",
      mx: "\ud83c\uddf2\ud83c\uddfd",
      "flag-my": "\ud83c\uddf2\ud83c\uddfe",
      my: "\ud83c\uddf2\ud83c\uddfe",
      "flag-mz": "\ud83c\uddf2\ud83c\uddff",
      mz: "\ud83c\uddf2\ud83c\uddff",
      "flag-na": "\ud83c\uddf3\ud83c\udde6",
      na: "\ud83c\uddf3\ud83c\udde6",
      "flag-nc": "\ud83c\uddf3\ud83c\udde8",
      nc: "\ud83c\uddf3\ud83c\udde8",
      "flag-ne": "\ud83c\uddf3\ud83c\uddea",
      ne: "\ud83c\uddf3\ud83c\uddea",
      "flag-nf": "\ud83c\uddf3\ud83c\uddeb",
      "flag-ng": "\ud83c\uddf3\ud83c\uddec",
      "flag-ni": "\ud83c\uddf3\ud83c\uddee",
      ni: "\ud83c\uddf3\ud83c\uddee",
      "flag-nl": "\ud83c\uddf3\ud83c\uddf1",
      nl: "\ud83c\uddf3\ud83c\uddf1",
      "flag-no": "\ud83c\uddf3\ud83c\uddf4",
      no: "\ud83c\uddf3\ud83c\uddf4",
      "flag-np": "\ud83c\uddf3\ud83c\uddf5",
      np: "\ud83c\uddf3\ud83c\uddf5",
      "flag-nr": "\ud83c\uddf3\ud83c\uddf7",
      "flag-nu": "\ud83c\uddf3\ud83c\uddfa",
      nu: "\ud83c\uddf3\ud83c\uddfa",
      "flag-nz": "\ud83c\uddf3\ud83c\uddff",
      nz: "\ud83c\uddf3\ud83c\uddff",
      "flag-om": "\ud83c\uddf4\ud83c\uddf2",
      "flag-pa": "\ud83c\uddf5\ud83c\udde6",
      pa: "\ud83c\uddf5\ud83c\udde6",
      "flag-pe": "\ud83c\uddf5\ud83c\uddea",
      pe: "\ud83c\uddf5\ud83c\uddea",
      "flag-pf": "\ud83c\uddf5\ud83c\uddeb",
      "flag-pg": "\ud83c\uddf5\ud83c\uddec",
      pg: "\ud83c\uddf5\ud83c\uddec",
      "flag-ph": "\ud83c\uddf5\ud83c\udded",
      ph: "\ud83c\uddf5\ud83c\udded",
      "flag-pk": "\ud83c\uddf5\ud83c\uddf0",
      pk: "\ud83c\uddf5\ud83c\uddf0",
      "flag-pl": "\ud83c\uddf5\ud83c\uddf1",
      pl: "\ud83c\uddf5\ud83c\uddf1",
      "flag-pm": "\ud83c\uddf5\ud83c\uddf2",
      "flag-pn": "\ud83c\uddf5\ud83c\uddf3",
      "flag-pr": "\ud83c\uddf5\ud83c\uddf7",
      pr: "\ud83c\uddf5\ud83c\uddf7",
      "flag-ps": "\ud83c\uddf5\ud83c\uddf8",
      ps: "\ud83c\uddf5\ud83c\uddf8",
      "flag-pt": "\ud83c\uddf5\ud83c\uddf9",
      pt: "\ud83c\uddf5\ud83c\uddf9",
      "flag-pw": "\ud83c\uddf5\ud83c\uddfc",
      pw: "\ud83c\uddf5\ud83c\uddfc",
      "flag-py": "\ud83c\uddf5\ud83c\uddfe",
      py: "\ud83c\uddf5\ud83c\uddfe",
      "flag-qa": "\ud83c\uddf6\ud83c\udde6",
      qa: "\ud83c\uddf6\ud83c\udde6",
      "flag-re": "\ud83c\uddf7\ud83c\uddea",
      re: "\ud83c\uddf7\ud83c\uddea",
      "r\xe9union": "\ud83c\uddf7\ud83c\uddea",
      "flag-ro": "\ud83c\uddf7\ud83c\uddf4",
      ro: "\ud83c\uddf7\ud83c\uddf4",
      "flag-rs": "\ud83c\uddf7\ud83c\uddf8",
      rs: "\ud83c\uddf7\ud83c\uddf8",
      "flag-ru": "\ud83c\uddf7\ud83c\uddfa",
      russia: "\ud83c\uddf7\ud83c\uddfa",
      "flag-rw": "\ud83c\uddf7\ud83c\uddfc",
      rw: "\ud83c\uddf7\ud83c\uddfc",
      "flag-sa": "\ud83c\uddf8\ud83c\udde6",
      sa_flag: "\ud83c\uddf8\ud83c\udde6",
      "flag-sb": "\ud83c\uddf8\ud83c\udde7",
      sb: "\ud83c\uddf8\ud83c\udde7",
      "flag-sc": "\ud83c\uddf8\ud83c\udde8",
      sc: "\ud83c\uddf8\ud83c\udde8",
      "flag-sd": "\ud83c\uddf8\ud83c\udde9",
      sd: "\ud83c\uddf8\ud83c\udde9",
      "flag-se": "\ud83c\uddf8\ud83c\uddea",
      se: "\ud83c\uddf8\ud83c\uddea",
      "flag-sg": "\ud83c\uddf8\ud83c\uddec",
      sg: "\ud83c\uddf8\ud83c\uddec",
      "flag-sh": "\ud83c\uddf8\ud83c\udded",
      "flag-si": "\ud83c\uddf8\ud83c\uddee",
      si: "\ud83c\uddf8\ud83c\uddee",
      "flag-sj": "\ud83c\uddf8\ud83c\uddef",
      "svalbard_&_jan_mayen": "\ud83c\uddf8\ud83c\uddef",
      "flag-sk": "\ud83c\uddf8\ud83c\uddf0",
      sk: "\ud83c\uddf8\ud83c\uddf0",
      "flag-sl": "\ud83c\uddf8\ud83c\uddf1",
      sl: "\ud83c\uddf8\ud83c\uddf1",
      "flag-sm": "\ud83c\uddf8\ud83c\uddf2",
      sm: "\ud83c\uddf8\ud83c\uddf2",
      "flag-sn": "\ud83c\uddf8\ud83c\uddf3",
      sn: "\ud83c\uddf8\ud83c\uddf3",
      "flag-so": "\ud83c\uddf8\ud83c\uddf4",
      so: "\ud83c\uddf8\ud83c\uddf4",
      "flag-sr": "\ud83c\uddf8\ud83c\uddf7",
      sr: "\ud83c\uddf8\ud83c\uddf7",
      "flag-ss": "\ud83c\uddf8\ud83c\uddf8",
      ss: "\ud83c\uddf8\ud83c\uddf8",
      "flag-st": "\ud83c\uddf8\ud83c\uddf9",
      st: "\ud83c\uddf8\ud83c\uddf9",
      "s\xe3o_tom\xe9_&_pr\xedncipe": "\ud83c\uddf8\ud83c\uddf9",
      "flag-sv": "\ud83c\uddf8\ud83c\uddfb",
      sv: "\ud83c\uddf8\ud83c\uddfb",
      "flag-sx": "\ud83c\uddf8\ud83c\uddfd",
      "flag-sy": "\ud83c\uddf8\ud83c\uddfe",
      sy: "\ud83c\uddf8\ud83c\uddfe",
      "flag-sz": "\ud83c\uddf8\ud83c\uddff",
      sz: "\ud83c\uddf8\ud83c\uddff",
      eswatini: "\ud83c\uddf8\ud83c\uddff",
      "flag-ta": "\ud83c\uddf9\ud83c\udde6",
      "flag-tc": "\ud83c\uddf9\ud83c\udde8",
      tc: "\ud83c\uddf9\ud83c\udde8",
      "turks_&_caicos_islands": "\ud83c\uddf9\ud83c\udde8",
      "flag-td": "\ud83c\uddf9\ud83c\udde9",
      "flag-tf": "\ud83c\uddf9\ud83c\uddeb",
      tf: "\ud83c\uddf9\ud83c\uddeb",
      "flag-tg": "\ud83c\uddf9\ud83c\uddec",
      tg: "\ud83c\uddf9\ud83c\uddec",
      "flag-th": "\ud83c\uddf9\ud83c\udded",
      th: "\ud83c\uddf9\ud83c\udded",
      "flag-tj": "\ud83c\uddf9\ud83c\uddef",
      tj: "\ud83c\uddf9\ud83c\uddef",
      "flag-tk": "\ud83c\uddf9\ud83c\uddf0",
      "flag-tl": "\ud83c\uddf9\ud83c\uddf1",
      tl: "\ud83c\uddf9\ud83c\uddf1",
      "timor-leste": "\ud83c\uddf9\ud83c\uddf1",
      "flag-tm": "\ud83c\uddf9\ud83c\uddf2",
      tm_flag: "\ud83c\uddf9\ud83c\uddf2",
      "flag-tn": "\ud83c\uddf9\ud83c\uddf3",
      tn: "\ud83c\uddf9\ud83c\uddf3",
      "flag-to": "\ud83c\uddf9\ud83c\uddf4",
      to: "\ud83c\uddf9\ud83c\uddf4",
      "flag-tr": "\ud83c\uddf9\ud83c\uddf7",
      "flag-tt": "\ud83c\uddf9\ud83c\uddf9",
      tt: "\ud83c\uddf9\ud83c\uddf9",
      "trinidad_&_tobago": "\ud83c\uddf9\ud83c\uddf9",
      "flag-tv": "\ud83c\uddf9\ud83c\uddfb",
      tv_flag: "\ud83c\uddf9\ud83c\uddfb",
      "flag-tw": "\ud83c\uddf9\ud83c\uddfc",
      "flag-tz": "\ud83c\uddf9\ud83c\uddff",
      tz: "\ud83c\uddf9\ud83c\uddff",
      "flag-ua": "\ud83c\uddfa\ud83c\udde6",
      ua: "\ud83c\uddfa\ud83c\udde6",
      "flag-ug": "\ud83c\uddfa\ud83c\uddec",
      ug: "\ud83c\uddfa\ud83c\uddec",
      "flag-um": "\ud83c\uddfa\ud83c\uddf2",
      "flag-un": "\ud83c\uddfa\ud83c\uddf3",
      "flag-us": "\ud83c\uddfa\ud83c\uddf8",
      united_states: "\ud83c\uddfa\ud83c\uddf8",
      "flag-uy": "\ud83c\uddfa\ud83c\uddfe",
      uy: "\ud83c\uddfa\ud83c\uddfe",
      "flag-uz": "\ud83c\uddfa\ud83c\uddff",
      uz: "\ud83c\uddfa\ud83c\uddff",
      "flag-va": "\ud83c\uddfb\ud83c\udde6",
      "flag-vc": "\ud83c\uddfb\ud83c\udde8",
      vc: "\ud83c\uddfb\ud83c\udde8",
      "flag-ve": "\ud83c\uddfb\ud83c\uddea",
      ve: "\ud83c\uddfb\ud83c\uddea",
      "flag-vg": "\ud83c\uddfb\ud83c\uddec",
      vg: "\ud83c\uddfb\ud83c\uddec",
      "flag-vi": "\ud83c\uddfb\ud83c\uddee",
      vi: "\ud83c\uddfb\ud83c\uddee",
      "flag-vn": "\ud83c\uddfb\ud83c\uddf3",
      vn: "\ud83c\uddfb\ud83c\uddf3",
      "flag-vu": "\ud83c\uddfb\ud83c\uddfa",
      vu: "\ud83c\uddfb\ud83c\uddfa",
      "flag-wf": "\ud83c\uddfc\ud83c\uddeb",
      "wallis_&_futuna": "\ud83c\uddfc\ud83c\uddeb",
      "flag-ws": "\ud83c\uddfc\ud83c\uddf8",
      ws: "\ud83c\uddfc\ud83c\uddf8",
      "flag-xk": "\ud83c\uddfd\ud83c\uddf0",
      "flag-ye": "\ud83c\uddfe\ud83c\uddea",
      ye: "\ud83c\uddfe\ud83c\uddea",
      "flag-yt": "\ud83c\uddfe\ud83c\uddf9",
      "flag-za": "\ud83c\uddff\ud83c\udde6",
      za: "\ud83c\uddff\ud83c\udde6",
      "flag-zm": "\ud83c\uddff\ud83c\uddf2",
      zm: "\ud83c\uddff\ud83c\uddf2",
      "flag-zw": "\ud83c\uddff\ud83c\uddfc",
      zw: "\ud83c\uddff\ud83c\uddfc",
      squared_katakana_koko: "\ud83c\ude01",
      "japanese_\u201chere\u201d_button": "\ud83c\ude01",
      "japanese_\u201cservice_charge\u201d_button": "\ud83c\ude02\ufe0f",
      "squared_cjk_unified_ideograph-7121": "\ud83c\ude1a",
      "japanese_\u201cfree_of_charge\u201d_button": "\ud83c\ude1a",
      "squared_cjk_unified_ideograph-6307": "\ud83c\ude2f",
      "japanese_\u201creserved\u201d_button": "\ud83c\ude2f",
      "squared_cjk_unified_ideograph-7981": "\ud83c\ude32",
      "japanese_\u201cprohibited\u201d_button": "\ud83c\ude32",
      "squared_cjk_unified_ideograph-7a7a": "\ud83c\ude33",
      "japanese_\u201cvacancy\u201d_button": "\ud83c\ude33",
      "squared_cjk_unified_ideograph-5408": "\ud83c\ude34",
      "japanese_\u201cpassing_grade\u201d_button": "\ud83c\ude34",
      "squared_cjk_unified_ideograph-6e80": "\ud83c\ude35",
      "japanese_\u201cno_vacancy\u201d_button": "\ud83c\ude35",
      "squared_cjk_unified_ideograph-6709": "\ud83c\ude36",
      "japanese_\u201cnot_free_of_charge\u201d_button": "\ud83c\ude36",
      "japanese_\u201cmonthly_amount\u201d_button": "\ud83c\ude37\ufe0f",
      "squared_cjk_unified_ideograph-7533": "\ud83c\ude38",
      "japanese_\u201capplication\u201d_button": "\ud83c\ude38",
      "squared_cjk_unified_ideograph-5272": "\ud83c\ude39",
      "japanese_\u201cdiscount\u201d_button": "\ud83c\ude39",
      "squared_cjk_unified_ideograph-55b6": "\ud83c\ude3a",
      "japanese_\u201copen_for_business\u201d_button": "\ud83c\ude3a",
      circled_ideograph_advantage: "\ud83c\ude50",
      "japanese_\u201cbargain\u201d_button": "\ud83c\ude50",
      circled_ideograph_accept: "\ud83c\ude51",
      "japanese_\u201cacceptable\u201d_button": "\ud83c\ude51",
      sunset_over_buildings: "\ud83c\udf07",
      "earth_globe_europe-africa": "\ud83c\udf0d",
      "globe_showing_europe-africa": "\ud83c\udf0d",
      earth_globe_americas: "\ud83c\udf0e",
      "earth_globe_asia-australia": "\ud83c\udf0f",
      "globe_showing_asia-australia": "\ud83c\udf0f",
      new_moon_symbol: "\ud83c\udf11",
      waxing_crescent_moon_symbol: "\ud83c\udf12",
      first_quarter_moon_symbol: "\ud83c\udf13",
      waxing_gibbous_moon_symbol: "\ud83c\udf14",
      full_moon_symbol: "\ud83c\udf15",
      waning_gibbous_moon_symbol: "\ud83c\udf16",
      last_quarter_moon_symbol: "\ud83c\udf17",
      waning_crescent_moon_symbol: "\ud83c\udf18",
      mostly_sunny: "\ud83c\udf24\ufe0f",
      barely_sunny: "\ud83c\udf25\ufe0f",
      partly_sunny_rain: "\ud83c\udf26\ufe0f",
      rain_cloud: "\ud83c\udf27\ufe0f",
      snow_cloud: "\ud83c\udf28\ufe0f",
      lightning: "\ud83c\udf29\ufe0f",
      wind_blowing_face: "\ud83c\udf2c\ufe0f",
      wrap: "\ud83c\udf2f",
      ear_of_maize: "\ud83c\udf3d",
      aubergine: "\ud83c\udf46",
      slice_of_pizza: "\ud83c\udf55",
      curry_and_rice: "\ud83c\udf5b",
      fish_cake_with_swirl_design: "\ud83c\udf65",
      sake_bottle_and_cup: "\ud83c\udf76",
      knife_fork_plate: "\ud83c\udf7d\ufe0f",
      sparkling_wine: "\ud83c\udf7e",
      wrapped_present: "\ud83c\udf81",
      "jack-o-lantern": "\ud83c\udf83",
      father_christmas: "\ud83c\udf85",
      firework_sparkler: "\ud83c\udf87",
      medal: "\ud83c\udf96\ufe0f",
      billiards: "\ud83c\udfb1",
      multiple_musical_notes: "\ud83c\udfb6",
      tennis_racquet_and_ball: "\ud83c\udfbe",
      ski_and_ski_boot: "\ud83c\udfbf",
      basketball_and_hoop: "\ud83c\udfc0",
      "woman-running": "\ud83c\udfc3\u200d\u2640\ufe0f",
      "man-running": "\ud83c\udfc3\u200d\u2642\ufe0f",
      "woman-surfing": "\ud83c\udfc4\u200d\u2640\ufe0f",
      "man-surfing": "\ud83c\udfc4\u200d\u2642\ufe0f",
      sports_decoration: "\ud83c\udfc5",
      "woman-swimming": "\ud83c\udfca\u200d\u2640\ufe0f",
      "man-swimming": "\ud83c\udfca\u200d\u2642\ufe0f",
      "woman-lifting-weights": "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",
      "man-lifting-weights": "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
      weight_lifter: "\ud83c\udfcb\ufe0f",
      "woman-golfing": "\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f",
      "man-golfing": "\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f",
      golfer: "\ud83c\udfcc\ufe0f",
      racing_motorcycle: "\ud83c\udfcd\ufe0f",
      cricket_bat_and_ball: "\ud83c\udfcf",
      field_hockey_stick_and_ball: "\ud83c\udfd1",
      ice_hockey_stick_and_puck: "\ud83c\udfd2",
      table_tennis_paddle_and_ball: "\ud83c\udfd3",
      table_tennis: "\ud83c\udfd3",
      house_buildings: "\ud83c\udfd8\ufe0f",
      derelict_house_building: "\ud83c\udfda\ufe0f",
      house_building: "\ud83c\udfe0",
      automated_teller_machine: "\ud83c\udfe7",
      "rainbow-flag": "\ud83c\udff3\ufe0f\u200d\ud83c\udf08",
      waving_white_flag: "\ud83c\udff3\ufe0f",
      "flag-england":
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
      "flag-scotland":
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f",
      "flag-wales":
        "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f",
      waving_black_flag: "\ud83c\udff4",
      badminton_racquet_and_shuttlecock: "\ud83c\udff8",
      badminton_racket_and_shuttlecock: "\ud83c\udff8",
      bow_arrow: "\ud83c\udff9",
      archery: "\ud83c\udff9",
      jar: "\ud83c\udffa",
      vase: "\ud83c\udffa",
      "skin-tone-2": "\ud83c\udffb",
      "skin-tone-3": "\ud83c\udffc",
      "skin-tone-4": "\ud83c\udffd",
      "skin-tone-5": "\ud83c\udffe",
      "skin-tone-6": "\ud83c\udfff",
      "front-facing_baby_chick": "\ud83d\udc25",
      bactrian_camel: "\ud83d\udc2b",
      "two-hump_camel": "\ud83d\udc2b",
      frog_face: "\ud83d\udc38",
      hamster_face: "\ud83d\udc39",
      wolf_face: "\ud83d\udc3a",
      bear_face: "\ud83d\udc3b",
      "eye-in-speech-bubble": "\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f",
      white_up_pointing_backhand_index: "\ud83d\udc46",
      white_down_pointing_backhand_index: "\ud83d\udc47",
      white_left_pointing_backhand_index: "\ud83d\udc48",
      white_right_pointing_backhand_index: "\ud83d\udc49",
      fisted_hand_sign: "\ud83d\udc4a",
      waving_hand_sign: "\ud83d\udc4b",
      ok_hand_sign: "\ud83d\udc4c",
      thumbs_up_sign: "\ud83d\udc4d",
      thumbs_down_sign: "\ud83d\udc4e",
      clapping_hands_sign: "\ud83d\udc4f",
      open_hands_sign: "\ud83d\udc50",
      "woman\u2019s_hat": "\ud83d\udc52",
      "t-shirt": "\ud83d\udc55",
      "woman\u2019s_clothes": "\ud83d\udc5a",
      "man\u2019s_shoe": "\ud83d\udc5e",
      "high-heeled_shoe": "\ud83d\udc60",
      womans_sandal: "\ud83d\udc61",
      "woman\u2019s_sandal": "\ud83d\udc61",
      womans_boots: "\ud83d\udc62",
      "woman\u2019s_boot": "\ud83d\udc62",
      "male-farmer": "\ud83d\udc68\u200d\ud83c\udf3e",
      male_farmer: "\ud83d\udc68\u200d\ud83c\udf3e",
      "male-cook": "\ud83d\udc68\u200d\ud83c\udf73",
      male_cook: "\ud83d\udc68\u200d\ud83c\udf73",
      "male-student": "\ud83d\udc68\u200d\ud83c\udf93",
      male_student: "\ud83d\udc68\u200d\ud83c\udf93",
      "male-singer": "\ud83d\udc68\u200d\ud83c\udfa4",
      male_singer: "\ud83d\udc68\u200d\ud83c\udfa4",
      "male-artist": "\ud83d\udc68\u200d\ud83c\udfa8",
      male_artist: "\ud83d\udc68\u200d\ud83c\udfa8",
      "male-teacher": "\ud83d\udc68\u200d\ud83c\udfeb",
      male_teacher: "\ud83d\udc68\u200d\ud83c\udfeb",
      "male-factory-worker": "\ud83d\udc68\u200d\ud83c\udfed",
      male_factory_worker: "\ud83d\udc68\u200d\ud83c\udfed",
      "man-boy-boy": "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man,_boy,_boy": "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man-boy": "\ud83d\udc68\u200d\ud83d\udc66",
      "man,_boy": "\ud83d\udc68\u200d\ud83d\udc66",
      "man-girl-boy": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man,_girl,_boy": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man-girl-girl": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "man,_girl,_girl": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "man-girl": "\ud83d\udc68\u200d\ud83d\udc67",
      "man,_girl": "\ud83d\udc68\u200d\ud83d\udc67",
      "man-man-boy": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",
      "family_(man,_man,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",
      "man,_man,_boy": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66",
      "man-man-boy-boy":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "family_(man,_man,_boy,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man,_man,_boy,_boy":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man-man-girl": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",
      "family_(man,_man,_girl)":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",
      "man,_man,_girl": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67",
      "man-man-girl-boy":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "family_(man,_man,_girl,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man,_man,_girl,_boy":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man-man-girl-girl":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "family_(man,_man,_girl,_girl)":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "man,_man,_girl,_girl":
        "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "man-woman-boy": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "family_(man,_woman,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "man,_woman,_boy": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "man-woman-boy-boy":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "family_(man,_woman,_boy,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man,_woman,_boy,_boy":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "man-woman-girl": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "family_(man,_woman,_girl)":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "man,_woman,_girl": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "man-woman-girl-boy":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "family_(man,_woman,_girl,_boy)":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man,_woman,_girl,_boy":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "man-woman-girl-girl":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "family_(man,_woman,_girl,_girl)":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "man,_woman,_girl,_girl":
        "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "male-technologist": "\ud83d\udc68\u200d\ud83d\udcbb",
      male_technologist: "\ud83d\udc68\u200d\ud83d\udcbb",
      "male-office-worker": "\ud83d\udc68\u200d\ud83d\udcbc",
      male_office_worker: "\ud83d\udc68\u200d\ud83d\udcbc",
      "male-mechanic": "\ud83d\udc68\u200d\ud83d\udd27",
      male_mechanic: "\ud83d\udc68\u200d\ud83d\udd27",
      "male-scientist": "\ud83d\udc68\u200d\ud83d\udd2c",
      male_scientist: "\ud83d\udc68\u200d\ud83d\udd2c",
      "male-astronaut": "\ud83d\udc68\u200d\ud83d\ude80",
      male_astronaut: "\ud83d\udc68\u200d\ud83d\ude80",
      "male-firefighter": "\ud83d\udc68\u200d\ud83d\ude92",
      male_firefighter: "\ud83d\udc68\u200d\ud83d\ude92",
      "male-doctor": "\ud83d\udc68\u200d\u2695\ufe0f",
      male_health_worker: "\ud83d\udc68\u200d\u2695\ufe0f",
      "male-judge": "\ud83d\udc68\u200d\u2696\ufe0f",
      male_judge: "\ud83d\udc68\u200d\u2696\ufe0f",
      "male-pilot": "\ud83d\udc68\u200d\u2708\ufe0f",
      male_pilot: "\ud83d\udc68\u200d\u2708\ufe0f",
      "man-heart-man": "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68",
      "man-kiss-man":
        "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      "man,_man":
        "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      "female-farmer": "\ud83d\udc69\u200d\ud83c\udf3e",
      female_farmer: "\ud83d\udc69\u200d\ud83c\udf3e",
      woman_famer: "\ud83d\udc69\u200d\ud83c\udf3e",
      "female-cook": "\ud83d\udc69\u200d\ud83c\udf73",
      female_cook: "\ud83d\udc69\u200d\ud83c\udf73",
      "female-student": "\ud83d\udc69\u200d\ud83c\udf93",
      female_student: "\ud83d\udc69\u200d\ud83c\udf93",
      "female-singer": "\ud83d\udc69\u200d\ud83c\udfa4",
      female_singer: "\ud83d\udc69\u200d\ud83c\udfa4",
      "female-artist": "\ud83d\udc69\u200d\ud83c\udfa8",
      female_artist: "\ud83d\udc69\u200d\ud83c\udfa8",
      "female-teacher": "\ud83d\udc69\u200d\ud83c\udfeb",
      female_teacher: "\ud83d\udc69\u200d\ud83c\udfeb",
      "female-factory-worker": "\ud83d\udc69\u200d\ud83c\udfed",
      female_factory_worker: "\ud83d\udc69\u200d\ud83c\udfed",
      "woman-boy-boy": "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "woman,_boy,_boy": "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "woman-boy": "\ud83d\udc69\u200d\ud83d\udc66",
      "woman,_boy": "\ud83d\udc69\u200d\ud83d\udc66",
      "woman-girl-boy": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "woman,_girl,_boy": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "woman-girl-girl": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "woman,_girl,_girl": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "woman-girl": "\ud83d\udc69\u200d\ud83d\udc67",
      "woman,_girl": "\ud83d\udc69\u200d\ud83d\udc67",
      "woman-woman-boy": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "family_(woman,_woman,_boy)":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "woman,_woman,_boy": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
      "woman-woman-boy-boy":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "family_(woman,_woman,_boy,_boy)":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "woman,_woman,_boy,_boy":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66",
      "woman-woman-girl": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "family_(woman,_woman,_girl)":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "woman,_woman,_girl": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67",
      "woman-woman-girl-boy":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "family_(woman,_woman,_girl,_boy)":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "woman,_woman,_girl,_boy":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66",
      "woman-woman-girl-girl":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "family_(woman,_woman,_girl,_girl)":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "woman,_woman,_girl,_girl":
        "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67",
      "female-technologist": "\ud83d\udc69\u200d\ud83d\udcbb",
      female_technologist: "\ud83d\udc69\u200d\ud83d\udcbb",
      "female-office-worker": "\ud83d\udc69\u200d\ud83d\udcbc",
      female_office_worker: "\ud83d\udc69\u200d\ud83d\udcbc",
      "female-mechanic": "\ud83d\udc69\u200d\ud83d\udd27",
      female_mechanic: "\ud83d\udc69\u200d\ud83d\udd27",
      "female-scientist": "\ud83d\udc69\u200d\ud83d\udd2c",
      female_scientist: "\ud83d\udc69\u200d\ud83d\udd2c",
      "female-astronaut": "\ud83d\udc69\u200d\ud83d\ude80",
      female_astronaut: "\ud83d\udc69\u200d\ud83d\ude80",
      "female-firefighter": "\ud83d\udc69\u200d\ud83d\ude92",
      female_firefighter: "\ud83d\udc69\u200d\ud83d\ude92",
      "female-doctor": "\ud83d\udc69\u200d\u2695\ufe0f",
      female_health_worker: "\ud83d\udc69\u200d\u2695\ufe0f",
      "female-judge": "\ud83d\udc69\u200d\u2696\ufe0f",
      female_judge: "\ud83d\udc69\u200d\u2696\ufe0f",
      "female-pilot": "\ud83d\udc69\u200d\u2708\ufe0f",
      female_pilot: "\ud83d\udc69\u200d\u2708\ufe0f",
      "woman-heart-man": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68",
      "woman-heart-woman": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69",
      "woman-kiss-man":
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      "woman,_man":
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
      "woman-kiss-woman":
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
      "kiss_(woman,_woman)":
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
      "woman,_woman":
        "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
      man_and_woman_holding_hands: "\ud83d\udc6b",
      "female-police-officer": "\ud83d\udc6e\u200d\u2640\ufe0f",
      "male-police-officer": "\ud83d\udc6e\u200d\u2642\ufe0f",
      "woman-with-bunny-ears-partying": "\ud83d\udc6f\u200d\u2640\ufe0f",
      "man-with-bunny-ears-partying": "\ud83d\udc6f\u200d\u2642\ufe0f",
      woman_with_bunny_ears: "\ud83d\udc6f",
      "blond-haired-woman": "\ud83d\udc71\u200d\u2640\ufe0f",
      "blond-haired-man": "\ud83d\udc71\u200d\u2642\ufe0f",
      person_with_blond_hair: "\ud83d\udc71",
      blond_hair: "\ud83d\udc71",
      man_with_chinese_cap: "\ud83d\udc72",
      "woman-wearing-turban": "\ud83d\udc73\u200d\u2640\ufe0f",
      "man-wearing-turban": "\ud83d\udc73\u200d\u2642\ufe0f",
      "female-construction-worker": "\ud83d\udc77\u200d\u2640\ufe0f",
      "male-construction-worker": "\ud83d\udc77\u200d\u2642\ufe0f",
      extraterrestrial_alien: "\ud83d\udc7d",
      "woman-tipping-hand": "\ud83d\udc81\u200d\u2640\ufe0f",
      "man-tipping-hand": "\ud83d\udc81\u200d\u2642\ufe0f",
      "female-guard": "\ud83d\udc82\u200d\u2640\ufe0f",
      "male-guard": "\ud83d\udc82\u200d\u2642\ufe0f",
      "woman-getting-massage": "\ud83d\udc86\u200d\u2640\ufe0f",
      "man-getting-massage": "\ud83d\udc86\u200d\u2642\ufe0f",
      face_massage: "\ud83d\udc86",
      "woman-getting-haircut": "\ud83d\udc87\u200d\u2640\ufe0f",
      "man-getting-haircut": "\ud83d\udc87\u200d\u2642\ufe0f",
      electric_light_bulb: "\ud83d\udca1",
      sleeping_symbol: "\ud83d\udca4",
      collision_symbol: "\ud83d\udca5",
      splashing_sweat_symbol: "\ud83d\udca6",
      dash_symbol: "\ud83d\udca8",
      dizzy_symbol: "\ud83d\udcab",
      banknote_with_yen_sign: "\ud83d\udcb4",
      banknote_with_dollar_sign: "\ud83d\udcb5",
      banknote_with_euro_sign: "\ud83d\udcb6",
      banknote_with_pound_sign: "\ud83d\udcb7",
      chart_with_upwards_trend_and_yen_sign: "\ud83d\udcb9",
      personal_computer: "\ud83d\udcbb",
      laptop_computer: "\ud83d\udcbb",
      optical_disc: "\ud83d\udcbf",
      "tear-off_calendar": "\ud83d\udcc6",
      public_address_loudspeaker: "\ud83d\udce2",
      cheering_megaphone: "\ud83d\udce3",
      "e-mail_symbol": "\ud83d\udce7",
      envelope_with_downwards_arrow_above: "\ud83d\udce9",
      mobile_phone_with_rightwards_arrow_at_left: "\ud83d\udcf2",
      antenna_with_bars: "\ud83d\udcf6",
      dhikr_beads: "\ud83d\udcff",
      rosary_beads: "\ud83d\udcff",
      clockwise_rightwards_and_leftwards_open_circle_arrows: "\ud83d\udd01",
      clockwise_rightwards_and_leftwards_open_circle_arrows_with_circled_one_overlay:
        "\ud83d\udd02",
      clockwise_downwards_and_upwards_open_circle_arrows: "\ud83d\udd03",
      anticlockwise_downwards_and_upwards_open_circle_arrows: "\ud83d\udd04",
      low_brightness_symbol: "\ud83d\udd05",
      high_brightness_symbol: "\ud83d\udd06",
      speaker_with_cancellation_stroke: "\ud83d\udd07",
      speaker_with_one_sound_wave: "\ud83d\udd09",
      speaker_with_three_sound_waves: "\ud83d\udd0a",
      "left-pointing_magnifying_glass": "\ud83d\udd0d",
      "right-pointing_magnifying_glass": "\ud83d\udd0e",
      open_lock: "\ud83d\udd13",
      bell_with_cancellation_stroke: "\ud83d\udd15",
      link_symbol: "\ud83d\udd17",
      back_with_leftwards_arrow_above: "\ud83d\udd19",
      end_with_leftwards_arrow_above: "\ud83d\udd1a",
      on_with_exclamation_mark_with_left_right_arrow_above: "\ud83d\udd1b",
      "on!_arrow": "\ud83d\udd1b",
      soon_with_rightwards_arrow_above: "\ud83d\udd1c",
      top_with_upwards_arrow_above: "\ud83d\udd1d",
      no_one_under_eighteen_symbol: "\ud83d\udd1e",
      input_symbol_for_latin_capital_letters: "\ud83d\udd20",
      input_symbol_for_latin_small_letters: "\ud83d\udd21",
      input_symbol_for_symbols: "\ud83d\udd23",
      input_symbol_for_latin_letters: "\ud83d\udd24",
      electric_torch: "\ud83d\udd26",
      six_pointed_star_with_middle_dot: "\ud83d\udd2f",
      "dotted_six-pointed_star": "\ud83d\udd2f",
      large_red_circle: "\ud83d\udd34",
      "up-pointing_red_triangle": "\ud83d\udd3a",
      "down-pointing_red_triangle": "\ud83d\udd3b",
      "up-pointing_small_red_triangle": "\ud83d\udd3c",
      "down-pointing_small_red_triangle": "\ud83d\udd3d",
      om_symbol: "\ud83d\udd49\ufe0f",
      dove_of_peace: "\ud83d\udd4a\ufe0f",
      mecca: "\ud83d\udd4b",
      minaret: "\ud83d\udd4c",
      domed_roof: "\ud83d\udd4c",
      mosque_with_domed_roof_and_minaret: "\ud83d\udd4c",
      temple: "\ud83d\udd4d",
      jewish: "\ud83d\udd4d",
      synagogue_with_star_of_david: "\ud83d\udd4d",
      menorah_with_nine_branches: "\ud83d\udd4e",
      candelabrum: "\ud83d\udd4e",
      chanukiah: "\ud83d\udd4e",
      clock_face_one_oclock: "\ud83d\udd50",
      "one_o\u2019clock": "\ud83d\udd50",
      clock_face_two_oclock: "\ud83d\udd51",
      "two_o\u2019clock": "\ud83d\udd51",
      clock_face_three_oclock: "\ud83d\udd52",
      "three_o\u2019clock": "\ud83d\udd52",
      clock_face_four_oclock: "\ud83d\udd53",
      "four_o\u2019clock": "\ud83d\udd53",
      clock_face_five_oclock: "\ud83d\udd54",
      "five_o\u2019clock": "\ud83d\udd54",
      clock_face_six_oclock: "\ud83d\udd55",
      "six_o\u2019clock": "\ud83d\udd55",
      clock_face_seven_oclock: "\ud83d\udd56",
      "seven_o\u2019clock": "\ud83d\udd56",
      clock_face_eight_oclock: "\ud83d\udd57",
      "eight_o\u2019clock": "\ud83d\udd57",
      clock_face_nine_oclock: "\ud83d\udd58",
      "nine_o\u2019clock": "\ud83d\udd58",
      clock_face_ten_oclock: "\ud83d\udd59",
      "ten_o\u2019clock": "\ud83d\udd59",
      clock_face_eleven_oclock: "\ud83d\udd5a",
      "eleven_o\u2019clock": "\ud83d\udd5a",
      clock_face_twelve_oclock: "\ud83d\udd5b",
      "twelve_o\u2019clock": "\ud83d\udd5b",
      "clock_face_one-thirty": "\ud83d\udd5c",
      "one-thirty": "\ud83d\udd5c",
      "clock_face_two-thirty": "\ud83d\udd5d",
      "two-thirty": "\ud83d\udd5d",
      "clock_face_three-thirty": "\ud83d\udd5e",
      "three-thirty": "\ud83d\udd5e",
      "clock_face_four-thirty": "\ud83d\udd5f",
      "four-thirty": "\ud83d\udd5f",
      "clock_face_five-thirty": "\ud83d\udd60",
      "five-thirty": "\ud83d\udd60",
      "clock_face_six-thirty": "\ud83d\udd61",
      "six-thirty": "\ud83d\udd61",
      "clock_face_seven-thirty": "\ud83d\udd62",
      "seven-thirty": "\ud83d\udd62",
      "clock_face_eight-thirty": "\ud83d\udd63",
      "eight-thirty": "\ud83d\udd63",
      "clock_face_nine-thirty": "\ud83d\udd64",
      "nine-thirty": "\ud83d\udd64",
      "clock_face_ten-thirty": "\ud83d\udd65",
      "ten-thirty": "\ud83d\udd65",
      "clock_face_eleven-thirty": "\ud83d\udd66",
      "eleven-thirty": "\ud83d\udd66",
      "clock_face_twelve-thirty": "\ud83d\udd67",
      "twelve-thirty": "\ud83d\udd67",
      man_in_business_suit_levitating: "\ud83d\udd74\ufe0f",
      "female-detective": "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",
      "male-detective": "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f",
      sleuth_or_spy: "\ud83d\udd75\ufe0f",
      lower_left_ballpoint_pen: "\ud83d\udd8a\ufe0f",
      lower_left_fountain_pen: "\ud83d\udd8b\ufe0f",
      lower_left_paintbrush: "\ud83d\udd8c\ufe0f",
      lower_left_crayon: "\ud83d\udd8d\ufe0f",
      reversed_hand_with_middle_finger_extended: "\ud83d\udd95",
      "spock-hand": "\ud83d\udd96",
      raised_hand_with_part_between_middle_and_ring_fingers: "\ud83d\udd96",
      three_button_mouse: "\ud83d\uddb1\ufe0f",
      frame_with_picture: "\ud83d\uddbc\ufe0f",
      spiral_note_pad: "\ud83d\uddd2\ufe0f",
      spiral_calendar_pad: "\ud83d\uddd3\ufe0f",
      compression: "\ud83d\udddc\ufe0f",
      dagger_knife: "\ud83d\udde1\ufe0f",
      speaking_head_in_silhouette: "\ud83d\udde3\ufe0f",
      silhouette_of_japan: "\ud83d\uddfe",
      smiling_face_with_open_mouth: "\ud83d\ude03",
      smiling_face_with_open_mouth_and_smiling_eyes: "\ud83d\ude04",
      smiling_face_with_open_mouth_and_cold_sweat: "\ud83d\ude05",
      "smiling_face_with_open_mouth_and_tightly-closed_eyes": "\ud83d\ude06",
      face_savouring_delicious_food: "\ud83d\ude0b",
      "smiling_face_with_heart-shaped_eyes": "\ud83d\ude0d",
      "smiling_face_with_heart-eyes": "\ud83d\ude0d",
      face_with_cold_sweat: "\ud83d\ude13",
      face_throwing_a_kiss: "\ud83d\ude18",
      "face_with_stuck-out_tongue": "\ud83d\ude1b",
      "face_with_stuck-out_tongue_and_winking_eye": "\ud83d\ude1c",
      "face_with_stuck-out_tongue_and_tightly-closed_eyes": "\ud83d\ude1d",
      face_with_look_of_triumph: "\ud83d\ude24",
      disappointed_but_relieved_face: "\ud83d\ude25",
      face_with_open_mouth_and_cold_sweat: "\ud83d\ude30",
      grinning_cat_face_with_smiling_eyes: "\ud83d\ude38",
      cat_face_with_tears_of_joy: "\ud83d\ude39",
      smiling_cat_face_with_open_mouth: "\ud83d\ude3a",
      "smiling_cat_face_with_heart-shaped_eyes": "\ud83d\ude3b",
      "smiling_cat_with_heart-eyes": "\ud83d\ude3b",
      cat_face_with_wry_smile: "\ud83d\ude3c",
      kissing_cat_face_with_closed_eyes: "\ud83d\ude3d",
      pouting_cat_face: "\ud83d\ude3e",
      weary_cat_face: "\ud83d\ude40",
      slightly_frowning: "\ud83d\ude41",
      slightly_smiling: "\ud83d\ude42",
      slight_smile: "\ud83d\ude42",
      upside_down: "\ud83d\ude43",
      flipped_face: "\ud83d\ude43",
      "upside-down_face": "\ud83d\ude43",
      eye_roll: "\ud83d\ude44",
      rolling_eyes: "\ud83d\ude44",
      "woman-gesturing-no": "\ud83d\ude45\u200d\u2640\ufe0f",
      "man-gesturing-no": "\ud83d\ude45\u200d\u2642\ufe0f",
      face_with_no_good_gesture: "\ud83d\ude45",
      "woman-gesturing-ok": "\ud83d\ude46\u200d\u2640\ufe0f",
      "man-gesturing-ok": "\ud83d\ude46\u200d\u2642\ufe0f",
      face_with_ok_gesture: "\ud83d\ude46",
      "woman-bowing": "\ud83d\ude47\u200d\u2640\ufe0f",
      woman_bow: "\ud83d\ude47\u200d\u2640\ufe0f",
      female_bow: "\ud83d\ude47\u200d\u2640\ufe0f",
      woman_bowing_deeply: "\ud83d\ude47\u200d\u2640\ufe0f",
      "man-bowing": "\ud83d\ude47\u200d\u2642\ufe0f",
      man_bow: "\ud83d\ude47\u200d\u2642\ufe0f",
      male_bow: "\ud83d\ude47\u200d\u2642\ufe0f",
      man_bowing_deeply: "\ud83d\ude47\u200d\u2642\ufe0f",
      person_bowing_deeply: "\ud83d\ude47",
      "see-no-evil_monkey": "\ud83d\ude48",
      "hear-no-evil_monkey": "\ud83d\ude49",
      "speak-no-evil_monkey": "\ud83d\ude4a",
      "woman-raising-hand": "\ud83d\ude4b\u200d\u2640\ufe0f",
      "man-raising-hand": "\ud83d\ude4b\u200d\u2642\ufe0f",
      happy_person_raising_one_hand: "\ud83d\ude4b",
      person_raising_both_hands_in_celebration: "\ud83d\ude4c",
      "woman-frowning": "\ud83d\ude4d\u200d\u2640\ufe0f",
      "man-frowning": "\ud83d\ude4d\u200d\u2642\ufe0f",
      "woman-pouting": "\ud83d\ude4e\u200d\u2640\ufe0f",
      "man-pouting": "\ud83d\ude4e\u200d\u2642\ufe0f",
      person_with_pouting_face: "\ud83d\ude4e",
      person_with_folded_hands: "\ud83d\ude4f",
      "high-speed_train": "\ud83d\ude84",
      "high-speed_train_with_bullet_nose": "\ud83d\ude85",
      recreational_vehicle: "\ud83d\ude99",
      "woman-rowing-boat": "\ud83d\udea3\u200d\u2640\ufe0f",
      "man-rowing-boat": "\ud83d\udea3\u200d\u2642\ufe0f",
      construction_sign: "\ud83d\udea7",
      police_cars_revolving_light: "\ud83d\udea8",
      smoking_symbol: "\ud83d\udeac",
      no_smoking_symbol: "\ud83d\udead",
      put_litter_in_its_place_symbol: "\ud83d\udeae",
      do_not_litter_symbol: "\ud83d\udeaf",
      potable_water_symbol: "\ud83d\udeb0",
      "non-potable_water_symbol": "\ud83d\udeb1",
      "woman-biking": "\ud83d\udeb4\u200d\u2640\ufe0f",
      "man-biking": "\ud83d\udeb4\u200d\u2642\ufe0f",
      "woman-mountain-biking": "\ud83d\udeb5\u200d\u2640\ufe0f",
      "man-mountain-biking": "\ud83d\udeb5\u200d\u2642\ufe0f",
      "woman-walking": "\ud83d\udeb6\u200d\u2640\ufe0f",
      "man-walking": "\ud83d\udeb6\u200d\u2642\ufe0f",
      pedestrian: "\ud83d\udeb6",
      mens_symbol: "\ud83d\udeb9",
      "men\u2019s_room": "\ud83d\udeb9",
      womens_symbol: "\ud83d\udeba",
      "women\u2019s_room": "\ud83d\udeba",
      sleeping_accommodation: "\ud83d\udecc",
      worship_building: "\ud83d\uded0",
      worship_place: "\ud83d\uded0",
      religious_building: "\ud83d\uded0",
      religious_place: "\ud83d\uded0",
      octagonal_sign: "\ud83d\uded1",
      shopping_trolley: "\ud83d\uded2",
      take_off: "\ud83d\udeeb",
      airplane_arriving: "\ud83d\udeec",
      landing: "\ud83d\udeec",
      scooter: "\ud83d\udef4",
      zipper_mouth: "\ud83e\udd10",
      zip_it: "\ud83e\udd10",
      sealed_lips: "\ud83e\udd10",
      lips_sealed: "\ud83e\udd10",
      "zipper-mouth_face": "\ud83e\udd10",
      money_mouth: "\ud83e\udd11",
      money_face: "\ud83e\udd11",
      "money-mouth_face": "\ud83e\udd11",
      sick: "\ud83e\udd12",
      ill: "\ud83e\udd12",
      thermometer_face: "\ud83e\udd12",
      nerd: "\ud83e\udd13",
      nerdy: "\ud83e\udd13",
      think: "\ud83e\udd14",
      thinker: "\ud83e\udd14",
      injured: "\ud83e\udd15",
      head_bandage: "\ud83e\udd15",
      head_bandaged: "\ud83e\udd15",
      bandaged: "\ud83e\udd15",
      "face_with_head-bandage": "\ud83e\udd15",
      robot_face: "\ud83e\udd16",
      bot_face: "\ud83e\udd16",
      hugging: "\ud83e\udd17",
      hug: "\ud83e\udd17",
      the_horns: "\ud83e\udd18",
      horns_sign: "\ud83e\udd18",
      rock_on: "\ud83e\udd18",
      heavy_metal: "\ud83e\udd18",
      devil_fingers: "\ud83e\udd18",
      "left-facing_fist": "\ud83e\udd1b",
      "right-facing_fist": "\ud83e\udd1c",
      hand_with_index_and_middle_fingers_crossed: "\ud83e\udd1e",
      i_love_you_hand_sign: "\ud83e\udd1f",
      "love-you_gesture": "\ud83e\udd1f",
      face_with_cowboy_hat: "\ud83e\udd20",
      cowboy: "\ud83e\udd20",
      clown: "\ud83e\udd21",
      "woman-facepalming": "\ud83e\udd26\u200d\u2640\ufe0f",
      female_facepalm: "\ud83e\udd26\u200d\u2640\ufe0f",
      woman_facepalm: "\ud83e\udd26\u200d\u2640\ufe0f",
      "man-facepalming": "\ud83e\udd26\u200d\u2642\ufe0f",
      face_palm: "\ud83e\udd26",
      "star-struck": "\ud83e\udd29",
      "breast-feeding": "\ud83e\udd31",
      mother_christmas: "\ud83e\udd36",
      "woman-shrugging": "\ud83e\udd37\u200d\u2640\ufe0f",
      female_shrug: "\ud83e\udd37\u200d\u2640\ufe0f",
      woman_shrug: "\ud83e\udd37\u200d\u2640\ufe0f",
      "man-shrugging": "\ud83e\udd37\u200d\u2642\ufe0f",
      male_shrug: "\ud83e\udd37\u200d\u2642\ufe0f",
      man_shrug: "\ud83e\udd37\u200d\u2642\ufe0f",
      "woman-cartwheeling": "\ud83e\udd38\u200d\u2640\ufe0f",
      woman_doing_cartwheel: "\ud83e\udd38\u200d\u2640\ufe0f",
      female_doing_cartwheel: "\ud83e\udd38\u200d\u2640\ufe0f",
      "man-cartwheeling": "\ud83e\udd38\u200d\u2642\ufe0f",
      man_doing_cartwheel: "\ud83e\udd38\u200d\u2642\ufe0f",
      male_doing_cartwheel: "\ud83e\udd38\u200d\u2642\ufe0f",
      person_doing_cartwheel: "\ud83e\udd38",
      "woman-juggling": "\ud83e\udd39\u200d\u2640\ufe0f",
      female_juggling: "\ud83e\udd39\u200d\u2640\ufe0f",
      "man-juggling": "\ud83e\udd39\u200d\u2642\ufe0f",
      male_juggling: "\ud83e\udd39\u200d\u2642\ufe0f",
      juggling: "\ud83e\udd39",
      fencer: "\ud83e\udd3a",
      "woman-wrestling": "\ud83e\udd3c\u200d\u2640\ufe0f",
      woman_wrestlers: "\ud83e\udd3c\u200d\u2640\ufe0f",
      female_wrestlers: "\ud83e\udd3c\u200d\u2640\ufe0f",
      "man-wrestling": "\ud83e\udd3c\u200d\u2642\ufe0f",
      man_wrestlers: "\ud83e\udd3c\u200d\u2642\ufe0f",
      male_wrestlers: "\ud83e\udd3c\u200d\u2642\ufe0f",
      wrestlers: "\ud83e\udd3c",
      "woman-playing-water-polo": "\ud83e\udd3d\u200d\u2640\ufe0f",
      woman_water_polo: "\ud83e\udd3d\u200d\u2640\ufe0f",
      female_water_polo: "\ud83e\udd3d\u200d\u2640\ufe0f",
      "man-playing-water-polo": "\ud83e\udd3d\u200d\u2642\ufe0f",
      man_water_polo: "\ud83e\udd3d\u200d\u2642\ufe0f",
      male_water_polo: "\ud83e\udd3d\u200d\u2642\ufe0f",
      "woman-playing-handball": "\ud83e\udd3e\u200d\u2640\ufe0f",
      woman_handball: "\ud83e\udd3e\u200d\u2640\ufe0f",
      female_handball: "\ud83e\udd3e\u200d\u2640\ufe0f",
      "man-playing-handball": "\ud83e\udd3e\u200d\u2642\ufe0f",
      man_handball: "\ud83e\udd3e\u200d\u2642\ufe0f",
      male_handball: "\ud83e\udd3e\u200d\u2642\ufe0f",
      handball: "\ud83e\udd3e",
      drum_with_drumsticks: "\ud83e\udd41",
      first_place_medal: "\ud83e\udd47",
      second_place_medal: "\ud83e\udd48",
      third_place_medal: "\ud83e\udd49",
      kiwifruit: "\ud83e\udd5d",
      red_crab: "\ud83e\udd80",
      lion_face: "\ud83e\udd81",
      cute_lion: "\ud83e\udd81",
      timid_lion: "\ud83e\udd81",
      unicorn_face: "\ud83e\udd84",
      giraffe_face: "\ud83e\udd92",
      zebra_face: "\ud83e\udd93",
      beard: "\ud83e\uddd4",
      person_with_headscarf: "\ud83e\uddd5",
      female_mage: "\ud83e\uddd9\u200d\u2640\ufe0f",
      male_mage: "\ud83e\uddd9\u200d\u2642\ufe0f",
      female_fairy: "\ud83e\uddda\u200d\u2640\ufe0f",
      male_fairy: "\ud83e\uddda\u200d\u2642\ufe0f",
      female_vampire: "\ud83e\udddb\u200d\u2640\ufe0f",
      male_vampire: "\ud83e\udddb\u200d\u2642\ufe0f",
      female_elf: "\ud83e\udddd\u200d\u2640\ufe0f",
      male_elf: "\ud83e\udddd\u200d\u2642\ufe0f",
      female_genie: "\ud83e\uddde\u200d\u2640\ufe0f",
      male_genie: "\ud83e\uddde\u200d\u2642\ufe0f",
      female_zombie: "\ud83e\udddf\u200d\u2640\ufe0f",
      male_zombie: "\ud83e\udddf\u200d\u2642\ufe0f",
      "left-right_arrow": "\u2194\ufe0f",
      "up-down_arrow": "\u2195\ufe0f",
      "up-left_arrow": "\u2196\ufe0f",
      "up-right_arrow": "\u2197\ufe0f",
      "down-right_arrow": "\u2198\ufe0f",
      "down-left_arrow": "\u2199\ufe0f",
      eject: "\u23cf\ufe0f",
      "black_right-pointing_double_triangle": "\u23e9",
      "fast-forward_button": "\u23e9",
      "black_left-pointing_double_triangle": "\u23ea",
      "black_up-pointing_double_triangle": "\u23eb",
      "black_down-pointing_double_triangle": "\u23ec",
      black_right_pointing_double_triangle_with_vertical_bar: "\u23ed\ufe0f",
      black_left_pointing_double_triangle_with_vertical_bar: "\u23ee\ufe0f",
      black_right_pointing_triangle_with_double_vertical_bar: "\u23ef\ufe0f",
      hourglass_with_flowing_sand: "\u23f3",
      double_vertical_bar: "\u23f8\ufe0f",
      black_square_for_stop: "\u23f9\ufe0f",
      black_circle_for_record: "\u23fa\ufe0f",
      "white_medium-small_square": "\u25fd",
      "black_medium-small_square": "\u25fe",
      radioactive_sign: "\u2622\ufe0f",
      biohazard_sign: "\u2623\ufe0f",
      white_frowning_face: "\u2639\ufe0f",
      staff_of_aesculapius: "\u2695\ufe0f",
      scales: "\u2696\ufe0f",
      high_voltage_sign: "\u26a1",
      medium_white_circle: "\u26aa",
      medium_black_circle: "\u26ab",
      thunder_cloud_and_rain: "\u26c8\ufe0f",
      helmet_with_white_cross: "\u26d1\ufe0f",
      "woman-bouncing-ball": "\u26f9\ufe0f\u200d\u2640\ufe0f",
      "man-bouncing-ball": "\u26f9\ufe0f\u200d\u2642\ufe0f",
      person_with_ball: "\u26f9\ufe0f",
      white_heavy_check_mark: "\u2705",
      "eight-spoked_asterisk": "\u2733\ufe0f",
      "eight-pointed_star": "\u2734\ufe0f",
      black_question_mark_ornament: "\u2753",
      white_question_mark_ornament: "\u2754",
      white_exclamation_mark_ornament: "\u2755",
      heavy_exclamation_mark_symbol: "\u2757",
      heavy_heart_exclamation_mark_ornament: "\u2763\ufe0f",
      white_medium_star: "\u2b50",
      heavy_large_circle: "\u2b55",
      "japanese_\u201ccongratulations\u201d_button": "\u3297\ufe0f",
      "japanese_\u201csecret\u201d_button": "\u3299\ufe0f",
      white_smiling_face: "\u263a",
      white_up_pointing_index: "\u261d",
      heavy_black_heart: "\u2764",
      black_sun_with_rays: "\u2600",
      black_telephone: "\u260e",
      black_scissors: "\u2702",
      warning_sign: "\u26a0",
      upwards_black_arrow: "\u2b06",
      downwards_black_arrow: "\u2b07",
      leftwards_black_arrow: "\u2b05",
      black_rightwards_arrow: "\u27a1",
      north_east_arrow: "\u2197",
      north_west_arrow: "\u2196",
      south_east_arrow: "\u2198",
      south_west_arrow: "\u2199",
      "black_left-pointing_triangle": "\u25c0",
      "black_right-pointing_triangle": "\u25b6",
      rightwards_arrow_with_hook: "\u21aa",
      arrow_pointing_rightwards_then_curving_downwards: "\u2935",
      arrow_pointing_rightwards_then_curving_upwards: "\u2934",
      negative_squared_latin_capital_letter_p: "\ud83c\udd7f",
      "squared_cjk_unified_ideograph-6708": "\ud83c\ude37",
      squared_katakana_sa: "\ud83c\ude02",
      circled_latin_capital_letter_m: "\u24c2",
      circled_ideograph_secret: "\u3299",
      circled_ideograph_congratulation: "\u3297",
      negative_squared_latin_capital_letter_a: "\ud83c\udd70",
      negative_squared_latin_capital_letter_b: "\ud83c\udd71",
      negative_squared_latin_capital_letter_o: "\ud83c\udd7e",
      black_universal_recycling_symbol: "\u267b",
      copyright_sign: "\xa9",
      registered_sign: "\xae",
      trade_mark_sign: "\u2122",
      black_spade_suit: "\u2660",
      black_heart_suit: "\u2665",
      black_club_suit: "\u2663",
      black_diamond_suit: "\u2666",
      regional_indicator_symbol_a: "\ud83c\udde6",
      regional_indicator_symbol_letter_a: "\ud83c\udde6",
      regional_indicator_symbol_b: "\ud83c\udde7",
      regional_indicator_symbol_letter_b: "\ud83c\udde7",
      regional_indicator_symbol_c: "\ud83c\udde8",
      regional_indicator_symbol_letter_c: "\ud83c\udde8",
      regional_indicator_symbol_d: "\ud83c\udde9",
      regional_indicator_symbol_letter_d: "\ud83c\udde9",
      regional_indicator_symbol_e: "\ud83c\uddea",
      regional_indicator_symbol_letter_e: "\ud83c\uddea",
      regional_indicator_symbol_f: "\ud83c\uddeb",
      regional_indicator_symbol_letter_f: "\ud83c\uddeb",
      regional_indicator_symbol_g: "\ud83c\uddec",
      regional_indicator_symbol_letter_g: "\ud83c\uddec",
      regional_indicator_symbol_h: "\ud83c\udded",
      regional_indicator_symbol_letter_h: "\ud83c\udded",
      regional_indicator_symbol_i: "\ud83c\uddee",
      regional_indicator_symbol_letter_i: "\ud83c\uddee",
      regional_indicator_symbol_j: "\ud83c\uddef",
      regional_indicator_symbol_letter_j: "\ud83c\uddef",
      regional_indicator_symbol_k: "\ud83c\uddf0",
      regional_indicator_symbol_letter_k: "\ud83c\uddf0",
      regional_indicator_symbol_l: "\ud83c\uddf1",
      regional_indicator_symbol_letter_l: "\ud83c\uddf1",
      regional_indicator_symbol_m: "\ud83c\uddf2",
      regional_indicator_symbol_letter_m: "\ud83c\uddf2",
      regional_indicator_symbol_n: "\ud83c\uddf3",
      regional_indicator_symbol_letter_n: "\ud83c\uddf3",
      regional_indicator_symbol_o: "\ud83c\uddf4",
      regional_indicator_symbol_letter_o: "\ud83c\uddf4",
      regional_indicator_symbol_p: "\ud83c\uddf5",
      regional_indicator_symbol_letter_p: "\ud83c\uddf5",
      regional_indicator_symbol_q: "\ud83c\uddf6",
      regional_indicator_symbol_letter_q: "\ud83c\uddf6",
      regional_indicator_symbol_r: "\ud83c\uddf7",
      regional_indicator_symbol_letter_r: "\ud83c\uddf7",
      regional_indicator_symbol_s: "\ud83c\uddf8",
      regional_indicator_symbol_letter_s: "\ud83c\uddf8",
      regional_indicator_symbol_t: "\ud83c\uddf9",
      regional_indicator_symbol_letter_t: "\ud83c\uddf9",
      regional_indicator_symbol_u: "\ud83c\uddfa",
      regional_indicator_symbol_letter_u: "\ud83c\uddfa",
      regional_indicator_symbol_v: "\ud83c\uddfb",
      regional_indicator_symbol_letter_v: "\ud83c\uddfb",
      regional_indicator_symbol_w: "\ud83c\uddfc",
      regional_indicator_symbol_letter_w: "\ud83c\uddfc",
      regional_indicator_symbol_x: "\ud83c\uddfd",
      regional_indicator_symbol_letter_x: "\ud83c\uddfd",
      regional_indicator_symbol_y: "\ud83c\uddfe",
      regional_indicator_symbol_letter_y: "\ud83c\uddfe",
      regional_indicator_symbol_z: "\ud83c\uddff",
      regional_indicator_symbol_letter_z: "\ud83c\uddff",
      "couple_with_heart_(woman,_woman)":
        "\ud83d\udc69\u200d\u2764\u200d\ud83d\udc69",
      "couple_with_heart_(man,_man)":
        "\ud83d\udc68\u200d\u2764\u200d\ud83d\udc68",
      "kiss_(man,_man)":
        "\u200d\ud83d\udc68\u2764\ufe0f\ud83d\udc8b\u200d\ud83d\udc68",
      helmet_white_cross: "\u26d1",
      helmet_with_white_crosse: "\u26d1",
      "rescue_worker\u2019s_helmet": "\u26d1",
      sleuth: "\ud83d\udd75",
      private_eye: "\ud83d\udd75",
      spy: "\ud83d\udd75",
      hovering_man: "\ud83d\udd74",
      levitating_man: "\ud83d\udd74",
      splayed_hand: "\ud83d\udd90",
      raised_hand_with_five_fingers_splayed: "\ud83d\udd90",
      writing: "\u270d",
      exclamation_heart: "\u2763",
      zig_zag_bubble: "\ud83d\uddef",
      skull_crossbones: "\u2620",
      squirrel: "\ud83d\udc3f",
      dove_peace: "\ud83d\udd4a",
      "dove_of_peace,_carrying_an_olive_branch": "\ud83d\udd4a",
      black_spider_with_eight_legs: "\ud83d\udd77",
      cobweb: "\ud83d\udd78",
      spider_web_in_orb_form: "\ud83d\udd78",
      st_patrick: "\u2618",
      chili_pepper: "\ud83c\udf36",
      spice: "\ud83c\udf36",
      spicy: "\ud83c\udf36",
      fork_knife_plate: "\ud83c\udf7d",
      mont_fuji: "\ud83c\udfd4",
      "snow-capped_mountain": "\ud83c\udfd4",
      campsite: "\ud83c\udfd5",
      camping_with_tent_and_tree: "\ud83c\udfd5",
      breach: "\ud83c\udfd6",
      desert_with_cactus: "\ud83c\udfdc",
      desert_island_with_palm_tree: "\ud83c\udfdd",
      crane: "\ud83c\udfd7",
      building_in_construction_with_crane: "\ud83c\udfd7",
      multiple_houses: "\ud83c\udfd8",
      old_house: "\ud83c\udfda",
      abandoned_house: "\ud83c\udfda",
      picture_frame: "\ud83d\uddbc",
      painting: "\ud83d\uddbc",
      gallery: "\ud83d\uddbc",
      frame_with_picture_or_painting: "\ud83d\uddbc",
      highway: "\ud83d\udee3",
      road: "\ud83d\udee3",
      interstate: "\ud83d\udee3",
      freeway: "\ud83d\udee3",
      bedroom: "\ud83d\udecf",
      bed_or_bedroom: "\ud83d\udecf",
      couch_lamp: "\ud83d\udecb",
      couch: "\ud83d\udecb",
      sofa: "\ud83d\udecb",
      lounge: "\ud83d\udecb",
      hot_weather: "\ud83c\udf21",
      temperature: "\ud83c\udf21",
      thunder_cloud_rain: "\u26c8",
      white_sun_small_cloud: "\ud83c\udf24",
      white_sun_with_small_cloud: "\ud83c\udf24",
      white_sun_behind_cloud: "\ud83c\udf25",
      white_sun_behind_cloud_rain: "\ud83c\udf26",
      white_sun_behind_cloud_with_rain: "\ud83c\udf26",
      cloud_rain: "\ud83c\udf27",
      cloud_snow: "\ud83c\udf28",
      cloud_lightning: "\ud83c\udf29",
      cloud_tornado: "\ud83c\udf2a",
      cloud_with_tornado: "\ud83c\udf2a",
      mother_nature: "\ud83c\udf2c",
      blowing_wind: "\ud83c\udf2c",
      planted_umbrella: "\u26f1",
      umbrella_planted_on_the_ground: "\u26f1",
      snowing_snowman: "\u2603",
      light_beam: "\u2604",
      blue_beam: "\u2604",
      military_decoration: "\ud83c\udf96",
      military_medal_with_ribbon: "\ud83c\udf96",
      awareness_ribbon: "\ud83c\udf97",
      admission_ticket: "\ud83c\udf9f",
      golf_club: "\ud83c\udfcc",
      golfer_swinging_a_golf_club: "\ud83c\udfcc",
      man_golfer: "\ud83c\udfcc\u2642\ufe0f",
      male_golfer: "\ud83c\udfcc\u2642\ufe0f",
      male_golfing: "\ud83c\udfcc\u2642\ufe0f",
      woman_golfer: "\ud83c\udfcc\u200d\u2640\ufe0f",
      female_golfer: "\ud83c\udfcc\u200d\u2640\ufe0f",
      female_golfing: "\ud83c\udfcc\u200d\u2640\ufe0f",
      ice_skating: "\u26f8",
      single_ice_skate: "\u26f8",
      formula_one: "\ud83c\udfce",
      f1: "\ud83c\udfce",
      motorbike: "\ud83c\udfcd",
      "black_right-pointing_double_triangle_with_vertical_bar": "\u23ed",
      "black_right-pointing_triangle_with_double_vertical_bar": "\u23ef",
      "black_left-pointing_double_triangle_with_vertical_bar": "\u23ee",
      keycap_asterisk: "*\u20e3",
      star_keycap: "*\u20e3",
      pc_tower: "\ud83d\udda5",
      imac: "\ud83d\udda5",
      candle_burning: "\ud83d\udd6f",
      newspaper_delivery: "\ud83d\uddde",
      newspaper_rolled_up_for_delivery: "\ud83d\uddde",
      "rolled-up_newspaper": "\ud83d\uddde",
      ballot: "\ud83d\uddf3",
      ballot_bow_with_ballot: "\ud83d\uddf3",
      multiple_paperclips_linked_together: "\ud83d\udd87",
      an_ornate_old_key: "\ud83d\udddd",
      scales_of_justice: "\u2696",
      knife_weapon: "\ud83d\udde1",
      funeral: "\u26b0",
      casket: "\u26b0",
      scouts: "\u269c",
      "fleur-de-lis": "\u269c",
      atom: "\u269b",
      pranava: "\ud83d\udd49",
      aumkara: "\ud83d\udd49",
      omkara: "\ud83d\udd49",
      christian_cross: "\u271d",
      kami_no_michi: "\u26e9",
      star_crescent: "\u262a",
      peace_sign: "\u262e",
      radioactive_symbol: "\u2622",
      biohazard_symbol: "\u2623",
      i_am_a_witness: "\ud83d\udc41\u200d\ud83d\udde8",
      red_hair: "\ud83d\udc68\u200d\ud83e\uddb0",
      curly_hair: "\ud83d\udc68\u200d\ud83e\uddb1",
      white_hair: "\ud83d\udc68\u200d\ud83e\uddb3",
      bald: "\ud83d\udc68\u200d\ud83e\uddb2",
      "yo-yo": "\ud83e\ude80",
      "one-piece_swimsuit": "\ud83e\ude71",
    };
  },
  262: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      r = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        if (null != e)
          for (var t in e)
            Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
        return (n.default = e), n;
      })(t(0)),
      o = c(t(263)),
      i = c(t(264)),
      s = c(t(265)),
      l = c(t(273));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function _(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ("object" !== typeof n && "function" !== typeof n) ? e : n;
    }
    var d = (function (e) {
      function n() {
        return (
          u(this, n),
          _(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
          )
        );
      }
      return (
        (function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, n)
                : (e.__proto__ = n));
        })(n, e),
        a(n, [
          {
            key: "parseString",
            value: function (e) {
              var n = this;
              if ("" === e) return e;
              var t = this.props.matchDecorator(e);
              if (!t) return e;
              var a = [],
                r = 0;
              return (
                t.forEach(function (t, o) {
                  t.index > r && a.push(e.substring(r, t.index));
                  var i = n.props.hrefDecorator(t.url),
                    s = n.props.textDecorator(t.text),
                    l = n.props.componentDecorator(i, s, o);
                  a.push(l), (r = t.lastIndex);
                }),
                e.length > r && a.push(e.substring(r)),
                1 === a.length ? a[0] : a
              );
            },
          },
          {
            key: "parse",
            value: function (e) {
              var n = this,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              return "string" === typeof e
                ? this.parseString(e)
                : r.isValidElement(e) && "a" !== e.type && "button" !== e.type
                ? r.cloneElement(e, { key: t }, this.parse(e.props.children))
                : Array.isArray(e)
                ? e.map(function (e, t) {
                    return n.parse(e, t);
                  })
                : e;
            },
          },
          {
            key: "render",
            value: function () {
              return r.createElement(
                r.Fragment,
                null,
                this.parse(this.props.children)
              );
            },
          },
        ]),
        n
      );
    })(r.Component);
    (d.defaultProps = {
      componentDecorator: o.default,
      hrefDecorator: i.default,
      matchDecorator: s.default,
      textDecorator: l.default,
    }),
      (n.default = d);
  },
  263: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function (e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (null != e)
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
      return (n.default = e), n;
    })(t(0));
    n.default = function (e, n, t) {
      return a.createElement("a", { href: e, key: t }, n);
    };
  },
  264: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function (e) {
        return e;
      });
  },
  265: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = o(t(266)),
      r = o(t(272));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = new a.default();
    i.tlds(r.default),
      (n.default = function (e) {
        return i.match(e);
      });
  },
  273: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = function (e) {
        return e;
      });
  },
  274: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a =
        Object.assign ||
        function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        },
      r = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      o = t(0),
      i = _(o),
      s = _(t(21)),
      l = _(t(2)),
      c = t(125),
      u = _(t(275));
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = (function (e) {
      function n(e, t) {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, n);
        var a = (function (e, n) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !n || ("object" !== typeof n && "function" !== typeof n)
            ? e
            : n;
        })(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e, t));
        return (
          (a.handleLoad = function () {
            a.forceUpdate();
          }),
          (a._isMounted = !1),
          a
        );
      }
      return (
        (function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, n)
                : (e.__proto__ = n));
        })(n, e),
        r(n, [
          {
            key: "componentDidMount",
            value: function () {
              this._isMounted = !0;
              var e = this.getDoc();
              e && "complete" === e.readyState
                ? this.forceUpdate()
                : this.node.addEventListener("load", this.handleLoad);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              (this._isMounted = !1),
                this.node.removeEventListener("load", this.handleLoad);
            },
          },
          {
            key: "getDoc",
            value: function () {
              return this.node ? this.node.contentDocument : null;
            },
          },
          {
            key: "getMountTarget",
            value: function () {
              var e = this.getDoc();
              return this.props.mountTarget
                ? e.querySelector(this.props.mountTarget)
                : e.body.children[0];
            },
          },
          {
            key: "renderFrameContents",
            value: function () {
              if (!this._isMounted) return null;
              var e = this.getDoc();
              if (!e) return null;
              var n = this.props.contentDidMount,
                t = this.props.contentDidUpdate,
                a = e.defaultView || e.parentView,
                r = i.default.createElement(
                  u.default,
                  { contentDidMount: n, contentDidUpdate: t },
                  i.default.createElement(
                    c.FrameContextProvider,
                    { value: { document: e, window: a } },
                    i.default.createElement(
                      "div",
                      { className: "frame-content" },
                      this.props.children
                    )
                  )
                );
              e.body.children.length < 1 &&
                (e.open("text/html", "replace"),
                e.write(this.props.initialContent),
                e.close());
              var o = this.getMountTarget();
              return [
                s.default.createPortal(this.props.head, this.getDoc().head),
                s.default.createPortal(r, o),
              ];
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                n = a({}, this.props, { children: void 0 });
              return (
                delete n.head,
                delete n.initialContent,
                delete n.mountTarget,
                delete n.contentDidMount,
                delete n.contentDidUpdate,
                i.default.createElement(
                  "iframe",
                  a({}, n, {
                    ref: function (n) {
                      e.node = n;
                    },
                  }),
                  this.renderFrameContents()
                )
              );
            },
          },
        ]),
        n
      );
    })(o.Component);
    (d.propTypes = {
      style: l.default.object,
      head: l.default.node,
      initialContent: l.default.string,
      mountTarget: l.default.string,
      contentDidMount: l.default.func,
      contentDidUpdate: l.default.func,
      children: l.default.oneOfType([
        l.default.element,
        l.default.arrayOf(l.default.element),
      ]),
    }),
      (d.defaultProps = {
        style: {},
        head: null,
        children: void 0,
        mountTarget: void 0,
        contentDidMount: function () {},
        contentDidUpdate: function () {},
        initialContent:
          '<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>',
      }),
      (n.default = d);
  },
  275: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      r = t(0),
      o = (i(r), i(t(2)));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    function l(e, n) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !n || ("object" !== typeof n && "function" !== typeof n) ? e : n;
    }
    var c = (function (e) {
      function n() {
        return (
          s(this, n),
          l(
            this,
            (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)
          )
        );
      }
      return (
        (function (e, n) {
          if ("function" !== typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof n
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            n &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, n)
                : (e.__proto__ = n));
        })(n, e),
        a(n, [
          {
            key: "componentDidMount",
            value: function () {
              this.props.contentDidMount();
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              this.props.contentDidUpdate();
            },
          },
          {
            key: "render",
            value: function () {
              return r.Children.only(this.props.children);
            },
          },
        ]),
        n
      );
    })(r.Component);
    (c.propTypes = {
      children: o.default.element.isRequired,
      contentDidMount: o.default.func.isRequired,
      contentDidUpdate: o.default.func.isRequired,
    }),
      (n.default = c);
  },
  276: function (e, n, t) {
    "use strict";
    t.r(n);
    var a = t(0),
      r = t.n(a),
      o = t(21),
      i = t.n(o),
      s = t(9),
      l = t(12),
      c = t(11),
      u = t(4),
      _ = t(80),
      d = t.n(_),
      f = t(10),
      p = (t(2), r.a.createContext(null));
    var g = function (e) {
        e();
      },
      m = { notify: function () {} };
    function h() {
      var e = g,
        n = null,
        t = null;
      return {
        clear: function () {
          (n = null), (t = null);
        },
        notify: function () {
          e(function () {
            for (var e = n; e; ) e.callback(), (e = e.next);
          });
        },
        get: function () {
          for (var e = [], t = n; t; ) e.push(t), (t = t.next);
          return e;
        },
        subscribe: function (e) {
          var a = !0,
            r = (t = { callback: e, next: null, prev: t });
          return (
            r.prev ? (r.prev.next = r) : (n = r),
            function () {
              a &&
                null !== n &&
                ((a = !1),
                r.next ? (r.next.prev = r.prev) : (t = r.prev),
                r.prev ? (r.prev.next = r.next) : (n = r.next));
            }
          );
        },
      };
    }
    var b = (function () {
        function e(e, n) {
          (this.store = e),
            (this.parentSub = n),
            (this.unsubscribe = null),
            (this.listeners = m),
            (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var n = e.prototype;
        return (
          (n.addNestedSub = function (e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
          }),
          (n.notifyNestedSubs = function () {
            this.listeners.notify();
          }),
          (n.handleChangeWrapper = function () {
            this.onStateChange && this.onStateChange();
          }),
          (n.isSubscribed = function () {
            return Boolean(this.unsubscribe);
          }),
          (n.trySubscribe = function () {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                : this.store.subscribe(this.handleChangeWrapper)),
              (this.listeners = h()));
          }),
          (n.tryUnsubscribe = function () {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = m));
          }),
          e
        );
      })(),
      w =
        "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        "undefined" !== typeof window.document.createElement
          ? a.useLayoutEffect
          : a.useEffect;
    var y = function (e) {
        var n = e.store,
          t = e.context,
          o = e.children,
          i = Object(a.useMemo)(
            function () {
              var e = new b(n);
              return (
                (e.onStateChange = e.notifyNestedSubs),
                { store: n, subscription: e }
              );
            },
            [n]
          ),
          s = Object(a.useMemo)(
            function () {
              return n.getState();
            },
            [n]
          );
        w(
          function () {
            var e = i.subscription;
            return (
              e.trySubscribe(),
              s !== n.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [i, s]
        );
        var l = t || p;
        return r.a.createElement(l.Provider, { value: i }, o);
      },
      v = t(17),
      k = t(19),
      j = t(23),
      x = t.n(j),
      O = t(22),
      C = [],
      A = [null, null];
    function E(e, n) {
      var t = e[1];
      return [n.payload, t + 1];
    }
    function P(e, n, t) {
      w(function () {
        return e.apply(void 0, n);
      }, t);
    }
    function S(e, n, t, a, r, o, i) {
      (e.current = a),
        (n.current = r),
        (t.current = !1),
        o.current && ((o.current = null), i());
    }
    function T(e, n, t, a, r, o, i, s, l, c) {
      if (e) {
        var u = !1,
          _ = null,
          d = function () {
            if (!u) {
              var e,
                t,
                d = n.getState();
              try {
                e = a(d, r.current);
              } catch (f) {
                (t = f), (_ = f);
              }
              t || (_ = null),
                e === o.current
                  ? i.current || l()
                  : ((o.current = e),
                    (s.current = e),
                    (i.current = !0),
                    c({ type: "STORE_UPDATED", payload: { error: t } }));
            }
          };
        (t.onStateChange = d), t.trySubscribe(), d();
        return function () {
          if (((u = !0), t.tryUnsubscribe(), (t.onStateChange = null), _))
            throw _;
        };
      }
    }
    var M = function () {
      return [null, 0];
    };
    function I(e, n) {
      void 0 === n && (n = {});
      var t = n,
        o = t.getDisplayName,
        i =
          void 0 === o
            ? function (e) {
                return "ConnectAdvanced(" + e + ")";
              }
            : o,
        s = t.methodName,
        l = void 0 === s ? "connectAdvanced" : s,
        c = t.renderCountProp,
        u = void 0 === c ? void 0 : c,
        _ = t.shouldHandleStateChanges,
        d = void 0 === _ || _,
        f = t.storeKey,
        g = void 0 === f ? "store" : f,
        m = (t.withRef, t.forwardRef),
        h = void 0 !== m && m,
        w = t.context,
        y = void 0 === w ? p : w,
        j = Object(k.a)(t, [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ]),
        I = y;
      return function (n) {
        var t = n.displayName || n.name || "Component",
          o = i(t),
          s = Object(v.a)({}, j, {
            getDisplayName: i,
            methodName: l,
            renderCountProp: u,
            shouldHandleStateChanges: d,
            storeKey: g,
            displayName: o,
            wrappedComponentName: t,
            WrappedComponent: n,
          }),
          c = j.pure;
        var _ = c
          ? a.useMemo
          : function (e) {
              return e();
            };
        function f(t) {
          var o = Object(a.useMemo)(
              function () {
                var e = t.reactReduxForwardedRef,
                  n = Object(k.a)(t, ["reactReduxForwardedRef"]);
                return [t.context, e, n];
              },
              [t]
            ),
            i = o[0],
            l = o[1],
            c = o[2],
            u = Object(a.useMemo)(
              function () {
                return i &&
                  i.Consumer &&
                  Object(O.isContextConsumer)(
                    r.a.createElement(i.Consumer, null)
                  )
                  ? i
                  : I;
              },
              [i, I]
            ),
            f = Object(a.useContext)(u),
            p =
              Boolean(t.store) &&
              Boolean(t.store.getState) &&
              Boolean(t.store.dispatch);
          Boolean(f) && Boolean(f.store);
          var g = p ? t.store : f.store,
            m = Object(a.useMemo)(
              function () {
                return (function (n) {
                  return e(n.dispatch, s);
                })(g);
              },
              [g]
            ),
            h = Object(a.useMemo)(
              function () {
                if (!d) return A;
                var e = new b(g, p ? null : f.subscription),
                  n = e.notifyNestedSubs.bind(e);
                return [e, n];
              },
              [g, p, f]
            ),
            w = h[0],
            y = h[1],
            j = Object(a.useMemo)(
              function () {
                return p ? f : Object(v.a)({}, f, { subscription: w });
              },
              [p, f, w]
            ),
            x = Object(a.useReducer)(E, C, M),
            z = x[0][0],
            N = x[1];
          if (z && z.error) throw z.error;
          var L = Object(a.useRef)(),
            D = Object(a.useRef)(c),
            B = Object(a.useRef)(),
            R = Object(a.useRef)(!1),
            F = _(
              function () {
                return B.current && c === D.current
                  ? B.current
                  : m(g.getState(), c);
              },
              [g, z, c]
            );
          P(S, [D, L, R, c, F, B, y]),
            P(T, [d, g, w, m, D, L, R, B, y, N], [g, w, m]);
          var W = Object(a.useMemo)(
            function () {
              return r.a.createElement(n, Object(v.a)({}, F, { ref: l }));
            },
            [l, n, F]
          );
          return Object(a.useMemo)(
            function () {
              return d ? r.a.createElement(u.Provider, { value: j }, W) : W;
            },
            [u, W, j]
          );
        }
        var p = c ? r.a.memo(f) : f;
        if (
          ((p.WrappedComponent = n), (p.displayName = f.displayName = o), h)
        ) {
          var m = r.a.forwardRef(function (e, n) {
            return r.a.createElement(
              p,
              Object(v.a)({}, e, { reactReduxForwardedRef: n })
            );
          });
          return (m.displayName = o), (m.WrappedComponent = n), x()(m, n);
        }
        return x()(p, n);
      };
    }
    function z(e, n) {
      return e === n
        ? 0 !== e || 0 !== n || 1 / e === 1 / n
        : e !== e && n !== n;
    }
    function N(e, n) {
      if (z(e, n)) return !0;
      if (
        "object" !== typeof e ||
        null === e ||
        "object" !== typeof n ||
        null === n
      )
        return !1;
      var t = Object.keys(e),
        a = Object.keys(n);
      if (t.length !== a.length) return !1;
      for (var r = 0; r < t.length; r++)
        if (
          !Object.prototype.hasOwnProperty.call(n, t[r]) ||
          !z(e[t[r]], n[t[r]])
        )
          return !1;
      return !0;
    }
    function L(e) {
      return function (n, t) {
        var a = e(n, t);
        function r() {
          return a;
        }
        return (r.dependsOnOwnProps = !1), r;
      };
    }
    function D(e) {
      return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
        ? Boolean(e.dependsOnOwnProps)
        : 1 !== e.length;
    }
    function B(e, n) {
      return function (n, t) {
        t.displayName;
        var a = function (e, n) {
          return a.dependsOnOwnProps ? a.mapToProps(e, n) : a.mapToProps(e);
        };
        return (
          (a.dependsOnOwnProps = !0),
          (a.mapToProps = function (n, t) {
            (a.mapToProps = e), (a.dependsOnOwnProps = D(e));
            var r = a(n, t);
            return (
              "function" === typeof r &&
                ((a.mapToProps = r),
                (a.dependsOnOwnProps = D(r)),
                (r = a(n, t))),
              r
            );
          }),
          a
        );
      };
    }
    var R = [
      function (e) {
        return "function" === typeof e ? B(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : L(function (e) {
              return { dispatch: e };
            });
      },
      function (e) {
        return e && "object" === typeof e
          ? L(function (n) {
              return (function (e, n) {
                var t = {},
                  a = function (a) {
                    var r = e[a];
                    "function" === typeof r &&
                      (t[a] = function () {
                        return n(r.apply(void 0, arguments));
                      });
                  };
                for (var r in e) a(r);
                return t;
              })(e, n);
            })
          : void 0;
      },
    ];
    var F = [
      function (e) {
        return "function" === typeof e ? B(e) : void 0;
      },
      function (e) {
        return e
          ? void 0
          : L(function () {
              return {};
            });
      },
    ];
    function W(e, n, t) {
      return Object(v.a)({}, t, e, n);
    }
    var H = [
      function (e) {
        return "function" === typeof e
          ? (function (e) {
              return function (n, t) {
                t.displayName;
                var a,
                  r = t.pure,
                  o = t.areMergedPropsEqual,
                  i = !1;
                return function (n, t, s) {
                  var l = e(n, t, s);
                  return i ? (r && o(l, a)) || (a = l) : ((i = !0), (a = l)), a;
                };
              };
            })(e)
          : void 0;
      },
      function (e) {
        return e
          ? void 0
          : function () {
              return W;
            };
      },
    ];
    function G(e, n, t, a) {
      return function (r, o) {
        return t(e(r, o), n(a, o), o);
      };
    }
    function U(e, n, t, a, r) {
      var o,
        i,
        s,
        l,
        c,
        u = r.areStatesEqual,
        _ = r.areOwnPropsEqual,
        d = r.areStatePropsEqual,
        f = !1;
      function p(r, f) {
        var p = !_(f, i),
          g = !u(r, o);
        return (
          (o = r),
          (i = f),
          p && g
            ? ((s = e(o, i)),
              n.dependsOnOwnProps && (l = n(a, i)),
              (c = t(s, l, i)))
            : p
            ? (e.dependsOnOwnProps && (s = e(o, i)),
              n.dependsOnOwnProps && (l = n(a, i)),
              (c = t(s, l, i)))
            : g
            ? (function () {
                var n = e(o, i),
                  a = !d(n, s);
                return (s = n), a && (c = t(s, l, i)), c;
              })()
            : c
        );
      }
      return function (r, u) {
        return f
          ? p(r, u)
          : ((s = e((o = r), (i = u))),
            (l = n(a, i)),
            (c = t(s, l, i)),
            (f = !0),
            c);
      };
    }
    function q(e, n) {
      var t = n.initMapStateToProps,
        a = n.initMapDispatchToProps,
        r = n.initMergeProps,
        o = Object(k.a)(n, [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ]),
        i = t(e, o),
        s = a(e, o),
        l = r(e, o);
      return (o.pure ? U : G)(i, s, l, e, o);
    }
    function V(e, n, t) {
      for (var a = n.length - 1; a >= 0; a--) {
        var r = n[a](e);
        if (r) return r;
      }
      return function (n, a) {
        throw new Error(
          "Invalid value of type " +
            typeof e +
            " for " +
            t +
            " argument when connecting component " +
            a.wrappedComponentName +
            "."
        );
      };
    }
    function Z(e, n) {
      return e === n;
    }
    function Y(e) {
      var n = void 0 === e ? {} : e,
        t = n.connectHOC,
        a = void 0 === t ? I : t,
        r = n.mapStateToPropsFactories,
        o = void 0 === r ? F : r,
        i = n.mapDispatchToPropsFactories,
        s = void 0 === i ? R : i,
        l = n.mergePropsFactories,
        c = void 0 === l ? H : l,
        u = n.selectorFactory,
        _ = void 0 === u ? q : u;
      return function (e, n, t, r) {
        void 0 === r && (r = {});
        var i = r,
          l = i.pure,
          u = void 0 === l || l,
          d = i.areStatesEqual,
          f = void 0 === d ? Z : d,
          p = i.areOwnPropsEqual,
          g = void 0 === p ? N : p,
          m = i.areStatePropsEqual,
          h = void 0 === m ? N : m,
          b = i.areMergedPropsEqual,
          w = void 0 === b ? N : b,
          y = Object(k.a)(i, [
            "pure",
            "areStatesEqual",
            "areOwnPropsEqual",
            "areStatePropsEqual",
            "areMergedPropsEqual",
          ]),
          j = V(e, o, "mapStateToProps"),
          x = V(n, s, "mapDispatchToProps"),
          O = V(t, c, "mergeProps");
        return a(
          _,
          Object(v.a)(
            {
              methodName: "connect",
              getDisplayName: function (e) {
                return "Connect(" + e + ")";
              },
              shouldHandleStateChanges: Boolean(e),
              initMapStateToProps: j,
              initMapDispatchToProps: x,
              initMergeProps: O,
              pure: u,
              areStatesEqual: f,
              areOwnPropsEqual: g,
              areStatePropsEqual: h,
              areMergedPropsEqual: w,
            },
            y
          )
        );
      };
    }
    var K = Y();
    var X;
    (X = o.unstable_batchedUpdates), (g = X);
    var J = (function () {
        function e() {
          var n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          Object(s.a)(this, e), (this.store = n);
        }
        return (
          Object(f.a)(e, [
            {
              key: "inject",
              value: function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  t = arguments.length > 2 ? arguments[2] : void 0;
                t &&
                  i.a.render(
                    r.a.createElement(
                      y,
                      { store: this.store },
                      r.a.createElement(e, n)
                    ),
                    t
                  );
              },
            },
            {
              key: "dispose",
              value: function (e) {
                e && i.a.unmountComponentAtNode(e);
              },
            },
          ]),
          e
        );
      })(),
      Q = t(24),
      $ = t(41),
      ee = "Chat/SET_CHAT_WINDOW_VISIBLE",
      ne = "Chat/CHANGE_MESSAGE_INPUT_TEXT",
      te = "Chat/SEND_MESSAGE_REQUEST",
      ae = "Chat/ADD_SENDING_MESSAGE",
      re = "Chat/SEND_MESSAGE",
      oe = "Chat/READ_MESSAGE",
      ie = "Chat/READ_MESSAGE_SUCCESS",
      se = "Chat/HANDLE_INCOMING_MESSAGE",
      le = "Chat/CREATE_OR_GET_CONVERSATION_SUCCESS",
      ce = "Chat/JOIN_CONVERSATION",
      ue = "Chat/SET_OPERATORS_LIST",
      _e = "Chat/HANDLE_OPERATORS_STATUS_CHANGE",
      de = "Chat/UPDATE_OPERATORS_STATUS",
      fe = "Chat/TURN_OFFLINE_IF_NO_RECONNECT",
      pe = "Chat/UPDATE_OPERATOR_TYPING",
      ge = "Chat/UPDATE_VISITOR_TYPING",
      me = "Chat/LOAD_CHAT",
      he = "Chat/SET_SOCKET",
      be = "Chat/INITIALIZE_CHAT_COMPONENT",
      we = "Chat/RECONNECT_CHAT",
      ye = "Chat/SET_SHOULD_SHOW_CHAT",
      ve = "Chat/SET_ROOM_PRESENCE",
      ke = "Chat/SET_FIRST_MESSAGE_SENT",
      je = "Chat/SET_OFFLINE_CONVERSATION",
      xe = "Chat/HANDLE_THREAD_PAGINATION",
      Oe = "Chat/HANDLE_ADD_PAGINATION_MESSAGE",
      Ce = "Chat/SET_PENDING_STATUS",
      Ae = "Chat/SHOW_EMOJI_PICKER",
      Ee = "Chat/SHOW_GIF_PICKER",
      Pe = "Chat/SHOW_CHAT_CLOSE_ICON",
      Se = function () {
        return function (e) {
          return function (n) {
            switch (n.type) {
              case ee:
                localStorage.setItem(
                  ee,
                  n.payload.chatWindowVisible.toString()
                );
                break;
              case ne:
                localStorage.setItem(ne, n.payload.text);
                break;
              case ae:
                localStorage.setItem(ne, "");
            }
            return e(n);
          };
        };
      };
    function Te(e, n) {
      return { type: Ce, payload: { componentName: e, isPending: n } };
    }
    function Me(e) {
      return { type: ee, payload: { chatWindowVisible: e } };
    }
    function Ie(e) {
      return { type: ne, payload: { text: e } };
    }
    function ze(e) {
      return { type: le, payload: { conversation: e } };
    }
    function Ne() {
      return { type: te };
    }
    function Le(e) {
      return { type: re, payload: { message: e } };
    }
    function De(e, n) {
      return { type: oe, payload: { time: e, sentBy: n } };
    }
    function Be(e, n) {
      return { type: ie, payload: { readAt: e, sentBy: n } };
    }
    function Re(e) {
      return { type: ae, payload: { message: e } };
    }
    function Fe(e) {
      return { type: se, payload: { message: e } };
    }
    function We(e, n, t) {
      return {
        type: ce,
        payload: { conversationId: e, visitorId: n, currentPageInfo: t },
      };
    }
    function He(e) {
      return { type: "Chat/SEND_MESSAGE_ERROR", payload: e.message };
    }
    function Ge(e) {
      return { type: ue, payload: { operators: e } };
    }
    function Ue() {
      return { type: me };
    }
    function qe(e) {
      return { type: he, payload: { socket: e } };
    }
    function Ve(e, n, t, a, r, o, i, s, l, c, u, _, d) {
      return {
        type: be,
        payload: {
          clientId: e,
          companyName: n,
          companyAvatarUrl: t,
          primaryColor: a,
          welcomeMessage: r,
          offlineMessage: o,
          isLogoEnabled: i,
          defaultLocale: s && s.trim() ? s.trim().substring(0, 2) : "en",
          locales:
            l && l.length
              ? l.split(",").map(function (e) {
                  return e.substring(0, 2);
                })
              : null,
          chatboxAvailabilityType: c,
          isOfflineChatboxEnabled: u,
          chatboxAvailabilityTimings: _,
          timezone: d,
        },
      };
    }
    function Ze() {
      return { type: we };
    }
    function Ye(e) {
      return { type: de, payload: { operators: e } };
    }
    function Ke(e) {
      return { type: fe, payload: { operatorId: e } };
    }
    function Xe(e, n) {
      return { type: pe, payload: { operatorId: e, isTyping: n } };
    }
    function Je(e) {
      return { type: ge, payload: { isTyping: e } };
    }
    function Qe(e) {
      return { type: ye, payload: { shouldShowChat: e } };
    }
    function $e(e) {
      return { type: ve, payload: { isRoomAvailable: e } };
    }
    function en(e) {
      return { type: ke, payload: { isFirstMessageSent: e } };
    }
    function nn(e) {
      return { type: je, payload: { isOfflineConversation: e } };
    }
    function tn(e, n, t) {
      return {
        type: xe,
        payload: { lastMessageId: e, threadId: n, messagesGroups: t },
      };
    }
    function an(e, n, t) {
      return {
        type: Oe,
        payload: { messagesGroups: e, message: n, threadId: t },
      };
    }
    function rn(e) {
      return { type: Ae, payload: { show: e } };
    }
    function on(e) {
      return { type: Ee, payload: { show: e } };
    }
    function sn(e) {
      return { type: Pe, payload: { show: e } };
    }
    var ln = t(15),
      cn = t(20),
      un = function () {
        return Math.floor(Date.now());
      },
      _n = 6e4,
      dn = function (e) {
        return e.time || un() + 864e5;
      },
      fn = function (e, n) {
        var t = dn(n),
          a = n.sentBy === e[0].sentBy && n.senderId === e[0].senderId,
          r = n.read === e[0].read;
        if (t > dn(e[e.length - 1]) + _n) return [e, [n]];
        for (var o = 0; o < e.length; o += 1)
          if (t < dn(e[o]))
            return a && r
              ? [
                  [].concat(
                    Object(ln.a)(e.slice(0, o)),
                    [n],
                    Object(ln.a)(e.slice(o, e.length))
                  ),
                ]
              : e.slice(0, o).length > 0
              ? [e.slice(0, o), [n], e.slice(o, e.length)]
              : [[n], e.slice(o, e.length)];
        return a && r ? [[].concat(Object(ln.a)(e), [n])] : [e, [n]];
      },
      pn = function (e, n) {
        var t,
          a = Object(ln.a)(e),
          r = [];
        if (0 === e.length) return [[n]];
        for (; a.length > 0; ) {
          if (((t = a.pop()), dn(n) >= dn(t[0]) - _n))
            return [].concat(
              Object(ln.a)(a),
              Object(ln.a)(fn(t, n)),
              Object(ln.a)(r)
            );
          r = [t].concat(Object(ln.a)(r));
        }
        return [[n]].concat(Object(ln.a)(r));
      },
      gn = function (e) {
        if (e === []) return [];
        if (e[0] === []) return [[]];
        var n = e[0][0],
          t = [[]],
          a = 0;
        return (
          e.forEach(function (e) {
            return e.forEach(function (e) {
              !(function (e, n) {
                return (
                  e.senderId === n.senderId &&
                  e.read === n.read &&
                  dn(e) + _n >= dn(n)
                );
              })(n, e)
                ? (a = t.push([e]) - 1)
                : t[a].push(e),
                (n = e);
            });
          }),
          t
        );
      },
      mn = function (e, n) {
        var t = !1,
          a = e.map(function (e) {
            return e.map(function (e) {
              return e.time && e.time <= n.readAt && e.sentBy === n.sentBy
                ? ((t = !0), Object(u.a)(Object(u.a)({}, e), {}, { read: !0 }))
                : e;
            });
          });
        return t ? gn(a) : a;
      },
      hn = function (e, n) {
        var t = !1,
          a = e.reduce(function (e, a) {
            var r = a.reduce(function (e, a) {
              if (
                (function (e, n) {
                  return (
                    e.text === n.text &&
                    e.senderId === n.senderId &&
                    e.conversationId === n.conversationId
                  );
                })(a, n)
              ) {
                if (a.time === n.time)
                  return (
                    (t = !0),
                    e.concat([
                      Object(u.a)(Object(u.a)({}, n), {}, { received: !0 }),
                    ])
                  );
                if (!a.time && n.time) return e;
              }
              return e.concat([a]);
            }, []);
            return r.length > 0 ? e.concat([r]) : e;
          }, []);
        return t
          ? a
          : pn(a, Object(u.a)(Object(u.a)({}, n), {}, { received: !0 }));
      },
      bn = t(81),
      wn = function (e) {
        var n = { operators: e },
          t = { operators: [new bn.b.Entity("operators")] };
        return Object(bn.a)(n, t).entities.operators;
      },
      yn = function (e) {
        return "unknown" === e ? "online" : e;
      },
      vn = function (e) {
        return e.filter(function (e) {
          return "online" === yn(e.status);
        }).length;
      };
    var kn = function (e) {
        for (var n = e.length - 1; n >= 0; n--)
          if ("operator" === e[n][0].sentBy) return e[n][0].senderId;
        return null;
      },
      jn = function (e, n) {
        return "operator" === n.sentBy ? n.senderId : e;
      },
      xn = function (e, n) {
        var t = (
          window.navigator.language ||
          window.navigator.userLanguage ||
          e
        )
          .trim()
          .substring(0, 2);
        return n ? (-1 === n.indexOf(t) ? e : t) : e;
      },
      On = t(52),
      Cn = t(53),
      An = t(54),
      En = t(55),
      Pn = t(56),
      Sn = t(57),
      Tn = { en: On, fr: Cn, de: An, es: En, it: Pn, pt: Sn },
      Mn = function (e, n) {
        return e.reduce(function (e, n) {
          return e && e[n] ? e[n] : "";
        }, n);
      };
    var In = function (e, n, t) {
      var a,
        r = xn(n, t);
      return r in Tn && (a = Mn(e.split("."), Tn[r]))
        ? a
        : (a = Mn(e.split("."), Tn.en)) || "";
    };
    function zn(e, n, t, a, r, o, i) {
      var s = [];
      switch (!0) {
        case "string" === typeof t && !t:
          break;
        case !1 !== t && null !== t && void 0 !== t:
          s.push({
            conversationId: e,
            senderId: null,
            sentBy: "operator",
            text: t,
            received: !1,
            read: !1,
            sent: !0,
            time: 1,
          });
          break;
        default:
          s.push({
            conversationId: e,
            senderId: null,
            sentBy: "operator",
            text: In("chat.welcomeMessage", r, o),
            received: !1,
            read: !1,
            sent: !0,
            time: 1,
          });
      }
      if (n)
        switch (!0) {
          case "string" === typeof a && !a:
            break;
          case !1 !== a && null !== a && void 0 !== a:
            s.push({
              conversationId: e,
              senderId: null,
              sentBy: "operator",
              text: a,
              received: !1,
              read: !1,
              sent: !0,
              time: 1,
            });
            break;
          case !a && i:
            break;
          default:
            s.push({
              conversationId: e,
              senderId: null,
              sentBy: "operator",
              text: In("chat.currentlyOfflineMessage", r, o),
              received: !1,
              read: !1,
              sent: !0,
              time: 1,
            });
        }
      return s;
    }
    var Nn = function (e) {
        var n = [];
        return (
          e.map(function (e) {
            e.map(function (e) {
              n.push(e);
            });
          }),
          n.length
        );
      },
      Ln = function () {
        return window.innerWidth < 869 || window.screen.height < 520;
      },
      Dn = t(33),
      Bn = t.n(Dn),
      Rn = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      Fn = function (e, n, t) {
        var a = !1;
        return "dynamic" === e
          ? !a
          : ("scheduled" === e &&
              n &&
              n.length &&
              n.map(function (e) {
                var n = Bn()(new Date()).tz(t),
                  r = n.valueOf(),
                  o = e.start_time.split(":"),
                  i = e.end_time.split(":"),
                  s = Bn()(new Date())
                    .tz(t)
                    .startOf("day")
                    .hour(o[0])
                    .minute(o[1])
                    .valueOf(),
                  l = Bn()(new Date())
                    .tz(t)
                    .startOf("day")
                    .hour(i[0])
                    .minute(i[1])
                    .valueOf();
                "everyday" === e.day
                  ? r >= s && r <= l && (a = !0)
                  : ("weekday" !== e.day ||
                      (0 === parseInt(n.format("e")) &&
                        6 === parseInt(n.format("e")))) &&
                    ("weekend" !== e.day ||
                      (0 !== parseInt(n.format("e")) &&
                        6 !== parseInt(n.format("e"))))
                  ? Rn.indexOf(e.day) === parseInt(n.format("e")) &&
                    r >= s &&
                    r <= l &&
                    (a = !0)
                  : r >= s && r <= l && (a = !0);
              }),
            a);
      },
      Wn = {
        clientId: void 0,
        chatWindowVisible: "true" === localStorage.getItem(ee),
        companyAvatarUrl: void 0,
        companyName: void 0,
        primaryColor: void 0,
        currentConversationId: null,
        currentMessageInputText: localStorage.getItem(ne) || "",
        conversations: {},
        initialPageTitle: document.title,
        isChatValid: !1,
        operators: null,
        socket: null,
        visitor: null,
        shouldShowChat: !1,
        isRoomAvailable: !1,
        isFirstMessageSent: !1,
        sendingMessagesQueue: [],
        isOfflineConversation: !1,
        welcomeMessage: null,
        offlineMessage: null,
        isLogoEnabled: !0,
        defaultLocale: "en",
        locales: null,
        isMessageUpdate: !1,
        isEmojiPickerEnabled: !1,
        isGifPickerEnabled: !1,
        isCloseIconEnabled: Ln(),
        chatboxAvailabilityType: "",
        isOfflineChatboxEnabled: null,
        chatboxAvailabilityTimings: null,
        timezone: "Europe/Paris",
        isChatBoxAvailable: !1,
      };
    function Hn() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wn,
        n = arguments.length > 1 ? arguments[1] : void 0;
      switch (n.type) {
        case be:
          var t = n.payload,
            a = t.clientId,
            r = t.companyName,
            o = t.companyAvatarUrl,
            i = t.primaryColor,
            s = t.welcomeMessage,
            l = t.offlineMessage,
            c = t.isLogoEnabled,
            _ = t.defaultLocale,
            d = t.locales,
            f = t.chatboxAvailabilityType,
            p = t.isOfflineChatboxEnabled,
            g = t.chatboxAvailabilityTimings,
            m = t.timezone;
          return a && r
            ? Object(u.a)(
                Object(u.a)({}, e),
                {},
                {
                  clientId: a,
                  isChatValid: !0,
                  companyName: r,
                  companyAvatarUrl: o,
                  primaryColor: i,
                  welcomeMessage: s,
                  offlineMessage: l,
                  isLogoEnabled: null == c || c,
                  defaultLocale: _,
                  locales: d,
                  chatboxAvailabilityType: f,
                  isOfflineChatboxEnabled: p,
                  chatboxAvailabilityTimings: g,
                  timezone: m,
                  isChatBoxAvailable: Fn(f, g, m),
                }
              )
            : e;
        case Ce:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            Object(cn.a)({}, n.payload.componentName, n.payload.isPending)
          );
        case ee:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { chatWindowVisible: n.payload.chatWindowVisible }
          );
        case ye:
          var h = n.payload.shouldShowChat;
          return Object(u.a)(Object(u.a)({}, e), {}, { shouldShowChat: h });
        case ne:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { currentMessageInputText: n.payload.text }
          );
        case le:
          var b = n.payload.conversation,
            w = e.offlineMessage,
            y = e.welcomeMessage,
            v = zn(
              b.id,
              e.isOfflineConversation,
              y && y.trim(),
              w && w.trim(),
              e.defaultLocale,
              e.locales,
              "scheduled" === e.chatboxAvailabilityType && e.isChatBoxAvailable
            ),
            k = Nn(b.messagesGroups) < 25;
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            {
              conversations: Object(u.a)(
                Object(u.a)({}, e.conversations),
                {},
                Object(cn.a)({}, b.id, {
                  id: b.id,
                  messagesGroups:
                    v && v.length && k
                      ? [v].concat(Object(ln.a)(b.messagesGroups))
                      : Object(ln.a)(b.messagesGroups),
                  lastOperatorId: kn(b.messagesGroups),
                })
              ),
              visitor: b.visitor,
              currentConversationId: b.id,
            }
          );
        case ae:
          if (e.currentConversationId) {
            var j = e.currentConversationId,
              x = e.conversations,
              O = e.sendingMessagesQueue,
              C = x[j];
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                conversations: Object(u.a)(
                  Object(u.a)({}, x),
                  {},
                  Object(cn.a)(
                    {},
                    j,
                    Object(u.a)(
                      Object(u.a)({}, x[j]),
                      {},
                      {
                        messagesGroups: pn(
                          C.messagesGroups || [],
                          n.payload.message
                        ),
                      }
                    )
                  )
                ),
                currentMessageInputText: "",
                sendingMessagesQueue: [].concat(Object(ln.a)(O), [
                  n.payload.message,
                ]),
              }
            );
          }
          return e;
        case se:
          if (e.currentConversationId) {
            var A = e.currentConversationId,
              E = e.conversations,
              P = E[A];
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                conversations: Object(u.a)(
                  Object(u.a)({}, E),
                  {},
                  Object(cn.a)(
                    {},
                    A,
                    Object(u.a)(
                      Object(u.a)({}, P),
                      {},
                      {
                        messagesGroups: hn(P.messagesGroups, n.payload.message),
                        lastOperatorId: jn(P.lastOperatorId, n.payload.message),
                      }
                    )
                  )
                ),
              }
            );
          }
          return e;
        case ue:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { operators: wn(n.payload.operators) }
          );
        case de:
          if (e.operators) {
            var S = {};
            Object.keys(e.operators).forEach(function (n) {
              var t = e.operators && e.operators[n],
                a = t && "online" !== t.status ? t.status : "unknown";
              S[n] = Object(u.a)(Object(u.a)({}, t), {}, { status: a });
            }),
              n.payload.operators.forEach(function (e) {
                (S[e.id].status = e.status),
                  "offline" === e.status && (S[e.id].isTyping = !1);
              });
            var T =
              "scheduled" !== e.chatboxAvailabilityType ||
              e.isChatBoxAvailable ||
              e.isOfflineChatboxEnabled;
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                operators: S,
                shouldShowChat:
                  e.shouldShowChat ||
                  (T &&
                    vn(
                      Object.keys(S).map(function (e) {
                        return S[e];
                      })
                    ) > 0),
              }
            );
          }
          return null;
        case fe:
          if (e.operators && e.operators[n.payload.operatorId]) {
            var M = e.operators[n.payload.operatorId];
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                operators: Object(u.a)(
                  Object(u.a)({}, e.operators),
                  {},
                  Object(cn.a)(
                    {},
                    n.payload.operatorId,
                    Object(u.a)(
                      Object(u.a)({}, M),
                      {},
                      { status: "unknown" === M.status ? "offline" : M.status }
                    )
                  )
                ),
              }
            );
          }
          return e;
        case pe:
          var I = n.payload,
            z = I.operatorId,
            N = I.isTyping;
          return e.operators && e.operators[z]
            ? Object(u.a)(
                Object(u.a)({}, e),
                {},
                {
                  operators: Object(u.a)(
                    Object(u.a)({}, e.operators),
                    {},
                    Object(cn.a)(
                      {},
                      z,
                      Object(u.a)(
                        Object(u.a)({}, e.operators[z]),
                        {},
                        { isTyping: N }
                      )
                    )
                  ),
                }
              )
            : e;
        case ie:
          if (e.currentConversationId) {
            var L = e.currentConversationId,
              D = e.conversations,
              B = D[L];
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                conversations: Object(u.a)(
                  Object(u.a)({}, D),
                  {},
                  Object(cn.a)(
                    {},
                    L,
                    Object(u.a)(
                      Object(u.a)({}, D[L]),
                      {},
                      {
                        messagesGroups: mn(B.messagesGroups, {
                          readAt: n.payload.readAt,
                          sentBy: n.payload.sentBy,
                        }),
                      }
                    )
                  )
                ),
              }
            );
          }
          return e;
        case he:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { socket: n.payload.socket }
          );
        case ve:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isRoomAvailable: n.payload.isRoomAvailable }
          );
        case ke:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isFirstMessageSent: n.payload.isFirstMessageSent }
          );
        case re:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { sendingMessagesQueue: [] }
          );
        case je:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isOfflineConversation: n.payload.isOfflineConversation }
          );
        case Oe:
          var R = n.payload,
            F = R.messagesGroups,
            W = R.message,
            H = R.threadId,
            G = e.offlineMessage,
            U = e.welcomeMessage,
            q = zn(
              H,
              e.isOfflineConversation,
              U && U.trim(),
              G && G.trim(),
              e.defaultLocale,
              e.locales,
              "scheduled" === e.chatboxAvailabilityType && e.isChatBoxAvailable
            );
          if (e.currentConversationId) {
            var V = e.currentConversationId,
              Z = e.conversations,
              Y = Z[V];
            return Object(u.a)(
              Object(u.a)({}, e),
              {},
              {
                conversations: Object(u.a)(
                  Object(u.a)({}, Z),
                  {},
                  Object(cn.a)(
                    {},
                    V,
                    Object(u.a)(
                      Object(u.a)({}, Y),
                      {},
                      {
                        messagesGroups:
                          q && q.length && W.length < 25
                            ? [q].concat(Object(ln.a)(F))
                            : F,
                      }
                    )
                  )
                ),
              }
            );
          }
          return e;
        case Ae:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isEmojiPickerEnabled: n.payload.show }
          );
        case Ee:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isGifPickerEnabled: n.payload.show }
          );
        case Pe:
          return Object(u.a)(
            Object(u.a)({}, e),
            {},
            { isCloseIconEnabled: n.payload.show }
          );
        default:
          return e;
      }
    }
    var Gn = t(13),
      Un = t.n(Gn),
      qn = t(5),
      Vn = t(126),
      Zn = t.n(Vn),
      Yn = t(28),
      Kn = t.n(Yn);
    var Xn = function (e) {
      if (e.message) throw new Error(e.message);
      throw new Error(e);
    };
    var Jn = function (e) {
        return e
          ? e.status >= 200 && e.status < 300
            ? e
            : Xn(e)
          : Xn("No response");
      },
      Qn = function (e) {
        if (
          !Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_ENV: "production",
            REACT_APP_BASE_URL: "https://chat-operating-back.sendinblue.com",
            REACT_APP_MESSAGING_URL: "https://chat-messaging.sendinblue.com",
            REACT_APP_GIFHY_API: "aaJ5h9gfaI2UNasPenSK02bW09dEz0cX",
            REACT_APP_NEW_BASE_URL: "https://chat-backend.sendinblue.com",
          })[e]
        )
          throw new Error("process.env.".concat(e, " required"));
        return Object({
          NODE_ENV: "production",
          PUBLIC_URL: "",
          WDS_SOCKET_HOST: void 0,
          WDS_SOCKET_PATH: void 0,
          WDS_SOCKET_PORT: void 0,
          FAST_REFRESH: !0,
          REACT_APP_ENV: "production",
          REACT_APP_BASE_URL: "https://chat-operating-back.sendinblue.com",
          REACT_APP_MESSAGING_URL: "https://chat-messaging.sendinblue.com",
          REACT_APP_GIFHY_API: "aaJ5h9gfaI2UNasPenSK02bW09dEz0cX",
          REACT_APP_NEW_BASE_URL: "https://chat-backend.sendinblue.com",
        })[e];
      },
      $n = Qn("REACT_APP_BASE_URL"),
      et = Qn("REACT_APP_MESSAGING_URL"),
      nt = Qn("REACT_APP_GIFHY_API"),
      tt = Qn("REACT_APP_NEW_BASE_URL"),
      at = function (e, n, t, a) {
        return a
          ? Kn.a
              .post("".concat($n).concat(e))
              .send(n)
              .set({
                "X-auth-token": t,
                "X-source-url": a,
                Accept: "application/json",
              })
              .then(Jn)
              .catch(Xn)
          : Kn.a
              .post("".concat($n).concat(e))
              .send(n)
              .set("X-auth-token", t)
              .set("Accept", "application/json");
      },
      rt = function (e, n, t) {
        return void 0 !== n
          ? Kn.a
              .get("".concat(tt).concat(e))
              .query(n)
              .set("X-auth-token", t)
              .set("Accept", "application/json")
          : Kn.a
              .get("".concat(tt).concat(e))
              .set("X-auth-token", t)
              .set("Accept", "application/json");
      },
      ot = function (e, n) {
        return Zn()("".concat(et, "/").concat(e), {
          query: "namespace=".concat(e, "&visitorId=").concat(n),
          transports: ["websocket", "polling"],
          timeout: 4e4,
        });
      },
      it = function (e, n) {
        return {
          sentBy: "visitor",
          time: null,
          conversationId: n,
          senderId: "FixedSenderId",
          text: e,
          received: !1,
          read: !1,
          sent: !1,
        };
      },
      st = function (e, n, t) {
        return { conversationId: t, lastMessageToUpdateDate: e, sentBy: n };
      },
      lt = t(58),
      ct = t.n(lt),
      ut = "sib_cuid",
      _t = function (e) {
        ct.a.set(ut, e);
      },
      dt = function () {
        return ct.a.get(ut);
      },
      ft = function () {
        return { title: document.title, url: window.location.href };
      },
      pt = function () {
        var e = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (n) {
            var t = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" === n ? t : (3 & t) | 8).toString(16)
            );
          }
        );
      },
      gt = function (e, n) {
        return Object.keys(n).filter(function (t) {
          var a = !e.find(function (e) {
              return e.id === t;
            }),
            r = "online" === n[t].status;
          return a && r;
        });
      },
      mt = 3e5,
      ht = function (e, n, t) {
        return t - e < n;
      };
    var bt = function (e, n, t, a) {
        var r = un();
        if (n) {
          var o = n.messagesGroups,
            i = o[o.length - 1];
          if (!e && a) return !0;
          if (i) {
            var s = i[i.length - 1];
            if (!s.time) return !0;
            if ("operator" === s.sentBy && !s.read) return !0;
            if (s.readAt) {
              var l = ht(s.readAt, mt, r);
              if (!e && "operator" === s.sentBy && l) return !0;
            }
            return e || ht(s.time, mt, r);
          }
          if (!t.id) return !1;
          if (!e && !a) return !1;
        }
        return !0;
      },
      wt = function () {
        return Bn.a.tz.guess();
      },
      yt = function (e) {
        return new Promise(function (n) {
          return setTimeout(n, e);
        });
      },
      vt = function (e) {
        return e.reduce(function (e, n) {
          return (
            n.map(function (n) {
              return (e =
                "operator" === n.sentBy && !n.read && n.senderId ? e + 1 : e);
            }),
            e
          );
        }, 0);
      };
    function kt(e) {
      return e.chat.currentConversationId ? e.chat.currentConversationId : null;
    }
    function jt(e) {
      return e.chat.currentMessageInputText;
    }
    function xt(e, n) {
      return n && e.chat.conversations[n]
        ? e.chat.conversations[n].messagesGroups
        : [];
    }
    function Ot(e) {
      return e.chat.operators ? e.chat.operators : null;
    }
    function Ct(e) {
      return e.chat.operators
        ? Object.keys(e.chat.operators)
            .map(function (n) {
              return e.chat.operators[n];
            })
            .filter(function (e) {
              var n = e.status;
              return "online" === yn(n);
            })
        : [];
    }
    function At(e) {
      return e.chat.chatWindowVisible;
    }
    function Et(e) {
      return e.chat.socket;
    }
    function Pt(e) {
      return e.chat.companyAvatarUrl;
    }
    function St(e) {
      return e.chat.clientId;
    }
    function Tt(e) {
      return e.chat.operators
        ? Object.keys(e.chat.operators)
            .map(function (n) {
              return e.chat.operators[n];
            })
            .filter(function (e) {
              return !!e.isTyping;
            })
            .map(function (e) {
              return e.name;
            })
        : [];
    }
    function Mt(e) {
      return e.chat.primaryColor;
    }
    function It(e) {
      return e.chat.visitor ? e.chat.visitor.id : null;
    }
    function zt(e) {
      return e.chat.isRoomAvailable;
    }
    function Nt(e) {
      return e.chat.isFirstMessageSent;
    }
    function Lt(e) {
      return e.chat.sendingMessagesQueue;
    }
    function Dt(e) {
      return e.chat.isLogoEnabled;
    }
    function Bt(e) {
      return e.chat.defaultLocale;
    }
    function Rt(e) {
      return e.chat.locales;
    }
    var Ft = function (e, n) {
        return e.chat[n];
      },
      Wt = function (e) {
        return e.chat.isEmojiPickerEnabled;
      },
      Ht = function (e) {
        return e.chat.isGifPickerEnabled;
      },
      Gt = function (e) {
        return e.chat.isCloseIconEnabled;
      },
      Ut = function (e) {
        return e.chat.chatboxAvailabilityType;
      },
      qt = function (e) {
        return e.chat.isOfflineChatboxEnabled;
      },
      Vt = function (e) {
        return e.chat.isChatBoxAvailable;
      },
      Zt = {
        getClientId: St,
        getCurrentConversationId: kt,
        getConversationMessagesGroupsById: xt,
        getConversationUnreadMessagesCountById: function (e, n) {
          var t = xt(e, n);
          return t.length > 0 ? vt(t) : 0;
        },
        getCurrentMessageInputText: jt,
        getInitialPageTitle: function (e) {
          return e.chat.initialPageTitle;
        },
        getOperatorName: function (e, n) {
          return e.chat.operators && e.chat.operators[n]
            ? e.chat.operators[n].name
            : null;
        },
        getOperators: Ot,
        anyOperators: function (e) {
          return null !== e.chat.operators;
        },
        getLastOperator: function (e) {
          var n = kt(e),
            t = n && e.chat.conversations[n];
          if (e.chat.operators && t && t.lastOperatorId) {
            var a = e.chat.operators[t.lastOperatorId];
            return Object(u.a)(
              Object(u.a)({}, a),
              {},
              { status: yn(a.status) }
            );
          }
          return null;
        },
        isChatWindowVisible: At,
        getCompanyName: function (e) {
          return e.chat.companyName;
        },
        getCompanyAvatarUrl: Pt,
        shouldShowChat: function (e) {
          return e.chat.shouldShowChat;
        },
        typingOperatorsNameSelector: Tt,
        getPrimaryColor: Mt,
        getCurrentVisitorId: It,
        isLogoEnabledSelector: Dt,
        getDefaultLanguage: Bt,
        getLanguages: Rt,
        pendingStatusSelector: Ft,
        isEmojiPickerEnabledSelector: Wt,
        isGifPickerEnabledSelector: Ht,
        isCloseIconEnabledSelector: Gt,
        getChatboxAvailabilityTypeSelector: Ut,
        getChatboxAvailabilityTimingsSelector: function (e) {
          return e.chat.chatboxAvailabilityTimings;
        },
        isOfflineChatboxEnabledSelector: qt,
        getOrganizationTimezoneSelector: function (e) {
          return e.chat.timezone;
        },
        isChatBoxAvailableSelector: Vt,
      },
      Yt = Un.a.mark(ua),
      Kt = Un.a.mark(_a),
      Xt = Un.a.mark(da),
      Jt = Un.a.mark(pa),
      Qt = Un.a.mark(ga),
      $t = Un.a.mark(ma),
      ea = Un.a.mark(ha),
      na = Un.a.mark(ba),
      ta = Un.a.mark(wa),
      aa = Un.a.mark(ya),
      ra = Un.a.mark(va),
      oa = Un.a.mark(ka),
      ia = Un.a.mark(ja),
      sa = Un.a.mark(xa),
      la = Un.a.mark(Oa),
      ca = Un.a.mark(Ca);
    function ua(e, n) {
      var t, a, r;
      return Un.a.wrap(function (o) {
        for (;;)
          switch ((o.prev = o.next)) {
            case 0:
              return (o.next = 2), Object(qn.d)(St);
            case 2:
              return (
                (t = o.sent),
                (o.next = 5),
                Object(qn.b)(
                  at,
                  "/chat/thread",
                  { sib_cuid: e, offline_conversation: n, timezone: wt() },
                  t,
                  window.location.href
                )
              );
            case 5:
              return (
                (a = o.sent),
                (r = {
                  id: a.body.id,
                  messagesGroups: [],
                  visitor: a.body.visitor,
                  isOfflineConversation: a.body.isOfflineConversation,
                }),
                (o.next = 9),
                Object(qn.c)(nn(r.isOfflineConversation))
              );
            case 9:
              return (
                a.body.messages &&
                  a.body.messages.forEach(function (e) {
                    r.messagesGroups = pn(r.messagesGroups, e);
                  }),
                o.abrupt("return", r)
              );
            case 11:
            case "end":
              return o.stop();
          }
      }, Yt);
    }
    function _a() {
      var e, n, t, a, r, o, i, s, l, c, u;
      return Un.a.wrap(
        function (_) {
          for (;;)
            switch ((_.prev = _.next)) {
              case 0:
                return (
                  (_.prev = 0),
                  (e = dt()) || ((e = pt()), _t(e)),
                  (_.next = 5),
                  Object(qn.d)(St)
                );
              case 5:
                if (!(n = _.sent)) {
                  _.next = 40;
                  break;
                }
                return (
                  (_.next = 9), Object(qn.b)(rt, "/chat/operators", void 0, n)
                );
              case 9:
                return (t = _.sent), (_.next = 12), Object(qn.c)(Ge(t.body));
              case 12:
                return (a = vn(t.body) > 0), (_.next = 15), Object(qn.d)(qt);
              case 15:
                return (r = _.sent), (_.next = 18), Object(qn.d)(Ut);
              case 18:
                return (o = _.sent), (_.next = 21), Object(qn.d)(Vt);
              case 21:
                if (
                  ((i = _.sent),
                  (s = !1),
                  !r || (("scheduled" !== o || i) && (a || "scheduled" === o)))
                ) {
                  _.next = 27;
                  break;
                }
                return (s = !0), (_.next = 27), Object(qn.c)(nn(!0));
              case 27:
                return (_.next = 29), Object(qn.b)(ua, e, s);
              case 29:
                return (
                  (l = _.sent),
                  (_.next = 32),
                  Object(qn.c)(
                    ze({
                      id: l.id,
                      messagesGroups: l.messagesGroups,
                      visitor: l.visitor,
                    })
                  )
                );
              case 32:
                if (!(l.messagesGroups.length > 0)) {
                  _.next = 35;
                  break;
                }
                return (_.next = 35), Object(qn.b)(da);
              case 35:
                return (
                  (c = { id: l.id, messagesGroups: l.messagesGroups }),
                  (u = !1),
                  "scheduled" === o
                    ? (u = i || r)
                    : i && (u = bt(a, c, l.visitor, r)),
                  (_.next = 40),
                  Object(qn.c)(Qe(u))
                );
              case 40:
                _.next = 45;
                break;
              case 42:
                (_.prev = 42),
                  (_.t0 = _.catch(0)),
                  console.error("error", _.t0);
              case 45:
              case "end":
                return _.stop();
            }
        },
        Kt,
        null,
        [[0, 42]]
      );
    }
    function da() {
      var e, n, t, a, r;
      return Un.a.wrap(function (o) {
        for (;;)
          switch ((o.prev = o.next)) {
            case 0:
              return (o.next = 2), Object(qn.d)(Et);
            case 2:
              if ((e = o.sent)) {
                o.next = 25;
                break;
              }
              return (o.next = 6), Object(qn.d)(St);
            case 6:
              return (n = o.sent), (o.next = 9), Object(qn.d)(It);
            case 9:
              return (t = o.sent), (o.next = 12), Object(qn.b)(ot, n, t);
            case 12:
              return (e = o.sent), (o.next = 15), Object(qn.c)(qe(e));
            case 15:
              return (o.next = 17), Object(qn.e)(pa, e);
            case 17:
              return (o.next = 19), Object(qn.e)(ga, e);
            case 19:
              return (a = ft()), (o.next = 22), Object(qn.d)(kt);
            case 22:
              return (r = o.sent), (o.next = 25), Object(qn.c)(We(r, t, a));
            case 25:
            case "end":
              return o.stop();
          }
      }, Xt);
    }
    function fa(e) {
      return Object($.c)(function (n) {
        var t = function (e) {
            n(Fe(e));
          },
          a = function () {
            n(Ze());
          },
          r = function (e) {
            n(Be(e.readAt, e.sentBy));
          },
          o = function (e) {
            var t;
            n(((t = e.operators), { type: _e, payload: { operators: t } }));
          },
          i = function (e) {
            n(Xe(e.operatorId, e.isTyping));
          },
          s = function (e) {
            n($e(e.isRoomAvailable));
          },
          l = function () {
            console.log("socket connection Error event");
          };
        e.on("MESSAGE", t),
          e.on("MESSAGE_READ_BY_VISITOR", r),
          e.on("OPERATOR_PRESENCE", o),
          e.on("OPERATOR_TYPING", i),
          e.on("ROOM_PRESENCE", s),
          e.on("reconnect", a),
          e.on("connect_timeout", function () {
            console.log("socket connection Timeout event");
          }),
          e.on("connect_error", l);
        return function () {
          e.off("MESSAGE", t),
            e.off("MESSAGE_READ_BY_VISITOR", r),
            e.off("OPERATOR_PRESENCE", o),
            e.off("OPERATOR_TYPING", i),
            e.off("ROOM_PRESENCE", s),
            e.off("reconnect", a),
            e.off("connect_timeout", l),
            e.off("connect_error", l);
        };
      }, $.a.expanding());
    }
    function pa(e) {
      var n, t;
      return Un.a.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              return (a.next = 2), Object(qn.b)(fa, e);
            case 2:
              n = a.sent;
            case 3:
              return (a.next = 6), Object(qn.f)(n);
            case 6:
              return (t = a.sent), (a.next = 9), Object(qn.c)(t);
            case 9:
              a.next = 3;
              break;
            case 11:
            case "end":
              return a.stop();
          }
      }, Jt);
    }
    function ga(e) {
      return Un.a.wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return n.delegateYield(
                [
                  Object(qn.g)(re, wa, e),
                  Object(qn.g)(ce, ya, e),
                  Object(qn.h)(oe, ba, e),
                ],
                "t0",
                1
              );
            case 1:
            case "end":
              return n.stop();
          }
      }, Qt);
    }
    function ma() {
      var e, n, t, a, r;
      return Un.a.wrap(
        function (o) {
          for (;;)
            switch ((o.prev = o.next)) {
              case 0:
                return (o.prev = 0), o.delegateYield(da(), "t0", 2);
              case 2:
                return (o.next = 4), Object(qn.d)(zt);
              case 4:
                return (e = o.sent), (o.next = 7), Object(qn.d)(Nt);
              case 7:
                return (n = o.sent), (o.next = 10), Object(qn.d)(jt);
              case 10:
                return (t = o.sent), (o.next = 13), Object(qn.d)(kt);
              case 13:
                return (
                  (a = o.sent),
                  (r = it(t, a)),
                  (o.next = 17),
                  Object(qn.c)(Re(r))
                );
              case 17:
                if (!e || !n) {
                  o.next = 22;
                  break;
                }
                return (o.next = 20), Object(qn.c)(Le(r));
              case 20:
                return (o.next = 22), Object(qn.c)(Je(!1));
              case 22:
                o.next = 28;
                break;
              case 24:
                return (
                  (o.prev = 24),
                  (o.t1 = o.catch(0)),
                  (o.next = 28),
                  Object(qn.c)(He(o.t1))
                );
              case 28:
              case "end":
                return o.stop();
            }
        },
        $t,
        null,
        [[0, 24]]
      );
    }
    function ha() {
      var e, n;
      return Un.a.wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.prev = 0), (t.next = 3), Object(qn.d)(Lt);
              case 3:
                if (!((e = t.sent).length > 0)) {
                  t.next = 14;
                  break;
                }
                n = 0;
              case 6:
                if (!(n < e.length)) {
                  t.next = 12;
                  break;
                }
                return (t.next = 9), Object(qn.c)(Le(e[n]));
              case 9:
                n++, (t.next = 6);
                break;
              case 12:
                return (t.next = 14), Object(qn.c)(Je(!1));
              case 14:
                return (t.next = 16), Object(qn.c)(en(!0));
              case 16:
                t.next = 22;
                break;
              case 18:
                return (
                  (t.prev = 18),
                  (t.t0 = t.catch(0)),
                  (t.next = 22),
                  Object(qn.c)(He(t.t0))
                );
              case 22:
              case "end":
                return t.stop();
            }
        },
        ea,
        null,
        [[0, 18]]
      );
    }
    function ba(e, n) {
      var t, a;
      return Un.a.wrap(
        function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return (r.prev = 0), (r.next = 3), Object(qn.d)(kt);
              case 3:
                if (!(t = r.sent)) {
                  r.next = 8;
                  break;
                }
                return (
                  (a = st(n.payload.time, n.payload.sentBy, t)),
                  (r.next = 8),
                  Object(qn.b)([e, e.emit], "READ_MESSAGE", a)
                );
              case 8:
                r.next = 13;
                break;
              case 10:
                (r.prev = 10), (r.t0 = r.catch(0)), console.log("error", r.t0);
              case 13:
              case "end":
                return r.stop();
            }
        },
        na,
        null,
        [[0, 10]]
      );
    }
    function wa(e, n) {
      return Un.a.wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (
                (t.next = 2),
                Object(qn.b)([e, e.emit], "MESSAGE", n.payload.message)
              );
            case 2:
            case "end":
              return t.stop();
          }
      }, ta);
    }
    function ya(e, n) {
      return Un.a.wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (t.next = 2), Object(qn.b)([e, e.emit], "JOIN", n.payload);
            case 2:
            case "end":
              return t.stop();
          }
      }, aa);
    }
    function va() {
      var e, n, t;
      return Un.a.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              return (a.next = 2), Object(qn.d)(It);
            case 2:
              return (e = a.sent), (n = ft()), (a.next = 6), Object(qn.d)(kt);
            case 6:
              return (t = a.sent), (a.next = 9), Object(qn.c)(We(t, e, n));
            case 9:
            case "end":
              return a.stop();
          }
      }, ra);
    }
    function ka(e) {
      var n, t;
      return Un.a.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              return (a.next = 2), Object(qn.d)(Et);
            case 2:
              if (!(n = a.sent)) {
                a.next = 9;
                break;
              }
              return (a.next = 6), Object(qn.d)(kt);
            case 6:
              return (
                (t = a.sent),
                (a.next = 9),
                Object(qn.b)([n, n.emit], "VISITOR_TYPING", {
                  conversationId: t,
                  isTyping: e.payload.isTyping,
                })
              );
            case 9:
            case "end":
              return a.stop();
          }
      }, oa);
    }
    function ja(e) {
      return Un.a.wrap(function (n) {
        for (;;)
          switch ((n.prev = n.next)) {
            case 0:
              return 1e4, (n.next = 3), Object(qn.b)(yt, 1e4);
            case 3:
              return (n.next = 5), Object(qn.c)(Ke(e));
            case 5:
            case "end":
              return n.stop();
          }
      }, ia);
    }
    function xa(e) {
      var n, t;
      return Un.a.wrap(function (a) {
        for (;;)
          switch ((a.prev = a.next)) {
            case 0:
              return (a.next = 2), Object(qn.d)(Ot);
            case 2:
              return (
                (n = a.sent),
                (t = gt(e.payload.operators, n)),
                (a.next = 6),
                Object(qn.a)(
                  t.map(function (e) {
                    return Object(qn.e)(ja, e);
                  })
                )
              );
            case 6:
              return (a.next = 8), Object(qn.c)(Ye(e.payload.operators));
            case 8:
            case "end":
              return a.stop();
          }
      }, sa);
    }
    function Oa(e) {
      var n, t, a, r, o, i, s;
      return Un.a.wrap(
        function (l) {
          for (;;)
            switch ((l.prev = l.next)) {
              case 0:
                return (
                  (l.prev = 0),
                  (l.next = 3),
                  Object(qn.c)(Te("isMessageUpdate", !0))
                );
              case 3:
                return (
                  (n = e.payload),
                  (t = n.lastMessageId),
                  (a = n.threadId),
                  (r = n.messagesGroups),
                  (l.next = 6),
                  Object(qn.d)(St)
                );
              case 6:
                return (
                  (o = l.sent),
                  (l.next = 9),
                  Object(qn.b)(
                    rt,
                    "/chat/".concat(a, "/messages"),
                    { last_message_id: t, limit: 25 },
                    o
                  )
                );
              case 9:
                return (
                  (i = l.sent),
                  (s = { messagesGroups: [] }),
                  i &&
                    i.body.forEach(function (e) {
                      s.messagesGroups = pn(s.messagesGroups, e);
                    }),
                  (s.messagesGroups = [].concat(
                    Object(ln.a)(s.messagesGroups),
                    Object(ln.a)(r)
                  )),
                  (l.next = 15),
                  Object(qn.c)(an(s.messagesGroups, i.body, a))
                );
              case 15:
                return (l.next = 17), Object(qn.c)(Te("isMessageUpdate", !1));
              case 17:
                l.next = 22;
                break;
              case 19:
                (l.prev = 19),
                  (l.t0 = l.catch(0)),
                  console.error("error", l.t0);
              case 22:
              case "end":
                return l.stop();
            }
        },
        la,
        null,
        [[0, 19]]
      );
    }
    function Ca() {
      return Un.a.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (e.next = 2), Object(qn.g)(te, ma);
            case 2:
              return (e.next = 4), Object(qn.g)(ve, ha);
            case 4:
              return (e.next = 6), Object(qn.g)(me, _a);
            case 6:
              return (e.next = 8), Object(qn.g)(we, va);
            case 8:
              return (e.next = 10), Object(qn.h)(ge, ka);
            case 10:
              return (e.next = 12), Object(qn.g)(_e, xa);
            case 12:
              return (e.next = 14), Object(qn.g)(xe, Oa);
            case 14:
            case "end":
              return e.stop();
          }
      }, ca);
    }
    function Aa(e) {
      return Object(Q.b)(Object(u.a)(Object(u.a)({}, e), {}, { chat: Hn }));
    }
    var Ea = Un.a.mark(Pa);
    function Pa() {
      return Un.a.wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return (e.next = 2), Object(qn.a)([Ca()]);
            case 2:
            case "end":
              return e.stop();
          }
      }, Ea);
    }
    var Sa = Object($.b)(),
      Ta = null;
    function Ma() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (Ta) return Ta;
      var n = [Sa, Se],
        t = [Q.a.apply(void 0, n)],
        a =
          "object" === typeof window &&
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : Q.c;
      return (
        (Ta = Object(Q.d)(Aa(), e, a.apply(void 0, t))),
        Sa.run(Pa),
        (Ta.runSaga = Sa.run),
        (Ta.asyncReducers = {}),
        Ta
      );
    }
    var Ia,
      za,
      Na,
      La,
      Da = t(16),
      Ba = t(7),
      Ra = t(6),
      Fa = Ra.c.p(
        Ia ||
          (Ia = Object(Ba.a)([
            "\n  align-self: flex-start;\n  line-height: 16px;\n  color: ",
            ";\n  font-size: 12px;\n  font-family: Roboto;\n  font-weight: 400;\n  margin: 0;\n",
          ])),
        function (e) {
          return e.theme.statusGrey;
        }
      ),
      Wa = Fa,
      Ha = t(1),
      Ga = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return Object(Ha.jsx)(Fa, {
                  children:
                    1 === this.props.typingOperators.length
                      ? Object(Ha.jsx)(Da.a, {
                          id: "chat.typingIndicatorSingular",
                          values: {
                            operatorName: this.props.typingOperators[0],
                          },
                        })
                      : Object(Ha.jsx)(Da.a, {
                          id: "chat.typingIndicatorPlural",
                        }),
                });
              },
            },
          ]),
          t
        );
      })(a.PureComponent),
      Ua = Object(Ra.c)(Wa)(
        za ||
          (za = Object(Ba.a)([
            "\n  align-self: center;\n  display: flex;\n  justify-content: space-between;\n  color: ",
            ";\n",
          ])),
        function (e) {
          return e.theme.grey;
        }
      );
    (Ua.Icon = Ra.c.svg(
      Na ||
        (Na = Object(Ba.a)([
          "\n  fill: ",
          ";\n  width: ",
          ";\n  height: ",
          ";\n",
        ])),
      function (e) {
        return e.theme.grey;
      },
      function (e) {
        return e.width;
      },
      function (e) {
        return e.height;
      }
    )),
      (Ua.BrandName = Ra.c.span(
        La || (La = Object(Ba.a)(["\n  font-weight: 600;\n"]))
      ));
    var qa,
      Va = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return Object(Ha.jsx)(Ua, {
                  children: Object(Ha.jsx)("a", {
                    href: "https://www.sendinblue.com/features/chat/?utm_medium=chat&utm_source=logo",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: Object(Ha.jsxs)("svg", {
                      width: "130",
                      height: "16",
                      viewBox: "0 0 130 16",
                      children: [
                        Object(Ha.jsx)("defs", {
                          children: Object(Ha.jsx)("path", {
                            id: "chat-a",
                            d: "M11.7321429,2.28482143 C11.1723214,1.58214286 10.4089286,1.02767857 9.44196429,0.619642857 C8.475,0.211607143 7.42232143,0.00803571429 6.28571429,0.00803571429 C5.14910714,0.00803571429 4.09642857,0.211607143 3.12946429,0.619642857 C2.1625,1.02767857 1.39910714,1.58303571 0.839285714,2.28482143 C0.279464286,2.98660714 0,3.75178571 0,4.57946429 C0,5.2875 0.211607143,5.95446429 0.633928571,6.57946429 C1.05625,7.20446429 1.63660714,7.73125 2.375,8.15982143 C2.31517857,8.30267857 2.25446429,8.43392857 2.19196429,8.55267857 C2.12946429,8.67142857 2.05535714,8.78660714 1.96875,8.89642857 C1.88214286,9.00625 1.81517857,9.09285714 1.76785714,9.15535714 C1.72053571,9.21785714 1.64285714,9.30535714 1.53571429,9.41875 C1.42857143,9.53214286 1.35982143,9.60625 1.33035714,9.64196429 C1.33035714,9.63571429 1.31875,9.64910714 1.29464286,9.68214286 C1.27053571,9.71517857 1.25714286,9.72946429 1.25446429,9.72678571 C1.25178571,9.72410714 1.23928571,9.73839286 1.21875,9.77142857 C1.19821429,9.80446429 1.1875,9.82053571 1.1875,9.82053571 L1.16517857,9.86517857 C1.15625,9.88303571 1.15,9.90089286 1.14732143,9.91875 C1.14464286,9.93660714 1.14285714,9.95625 1.14285714,9.97678571 C1.14285714,9.99732143 1.14553571,10.0169643 1.15178571,10.0348214 C1.16339286,10.1125 1.19821429,10.175 1.25446429,10.2223214 C1.31071429,10.2696429 1.37232143,10.29375 1.4375,10.29375 L1.46428571,10.29375 C1.76160714,10.2517857 2.01785714,10.2044643 2.23214286,10.1508929 C3.14910714,9.9125 3.97589286,9.53214286 4.71428571,9.00803571 C5.25,9.10357143 5.77410714,9.15089286 6.28571429,9.15089286 C7.42232143,9.15089286 8.475,8.94732143 9.44196429,8.53928571 C10.4089286,8.13125 11.1723214,7.57678571 11.7321429,6.87410714 C12.2919643,6.17142857 12.5714286,5.40714286 12.5714286,4.57946429 C12.5714286,3.75178571 12.2919643,2.9875 11.7321429,2.28482143 Z M15.3303571,4.81160714 C14.8839286,4.175 14.2767857,3.64464286 13.5089286,3.22232143 C13.6455357,3.66875 13.7142857,4.12142857 13.7142857,4.57946429 C13.7142857,5.37678571 13.5151786,6.13303571 13.1160714,6.84732143 C12.7169643,7.56160714 12.1455357,8.19285714 11.4017857,8.74017857 C10.7116071,9.24017857 9.92589286,9.62410714 9.04464286,9.89196429 C8.16339286,10.1598214 7.24375,10.29375 6.28571429,10.29375 C6.10714286,10.29375 5.84553571,10.2821429 5.5,10.2580357 C6.69642857,11.04375 8.10089286,11.4366071 9.71428571,11.4366071 C10.2258929,11.4366071 10.75,11.3892857 11.2857143,11.29375 C12.0241071,11.8178571 12.8508929,12.1982143 13.7678571,12.4366071 C13.9821429,12.4901786 14.2383929,12.5375 14.5357143,12.5794643 C14.6071429,12.5857143 14.6723214,12.5642857 14.7321429,12.5169643 C14.7919643,12.4696429 14.8303571,12.4035714 14.8482143,12.3205357 C14.8455357,12.2848214 14.8482143,12.2651786 14.8571429,12.2625 C14.8660714,12.2598214 14.8642857,12.2401786 14.8526786,12.2044643 C14.8410714,12.16875 14.8348214,12.1508929 14.8348214,12.1508929 L14.8125,12.10625 C14.80625,12.0946429 14.7964286,12.0776786 14.78125,12.0571429 C14.7660714,12.0366071 14.7544643,12.0214286 14.7455357,12.0125 C14.7366071,12.0035714 14.7232143,11.9883929 14.7053571,11.9678571 C14.6875,11.9473214 14.6758929,11.9339286 14.6696429,11.9276786 C14.6401786,11.8919643 14.5714286,11.8178571 14.4642857,11.7044643 C14.3571429,11.5910714 14.2794643,11.5035714 14.2321429,11.4410714 C14.1848214,11.3785714 14.1178571,11.2919643 14.03125,11.1821429 C13.9446429,11.0723214 13.8705357,10.9571429 13.8080357,10.8383929 C13.7455357,10.7196429 13.6848214,10.5883929 13.625,10.4455357 C14.3633929,10.0169643 14.94375,9.49196429 15.3660714,8.86964286 C15.7883929,8.24732143 16,7.57946429 16,6.86517857 C16,6.13303571 15.7767857,5.44910714 15.3303571,4.81160714 Z",
                          }),
                        }),
                        Object(Ha.jsxs)("g", {
                          fill: "none",
                          fillRule: "evenodd",
                          children: [
                            Object(Ha.jsxs)("g", {
                              transform: "translate(2 2)",
                              children: [
                                Object(Ha.jsx)("mask", {
                                  id: "chat-b",
                                  fill: "#fff",
                                  children: Object(Ha.jsx)("use", {
                                    href: "#chat-a",
                                  }),
                                }),
                                Object(Ha.jsx)("g", {
                                  fill: "#C0CCDA",
                                  mask: "url(#chat-b)",
                                  children: Object(Ha.jsx)("rect", {
                                    width: "16",
                                    height: "16",
                                    transform: "translate(0 -2)",
                                  }),
                                }),
                              ],
                            }),
                            Object(Ha.jsx)("text", {
                              fill: "#C0CCDA",
                              fontFamily: "Roboto-Regular, Roboto",
                              fontSize: "12",
                              children: Object(Ha.jsx)("tspan", {
                                x: "22",
                                y: "11",
                                children: "by",
                              }),
                            }),
                            Object(Ha.jsxs)("g", {
                              fill: "#C0CCDA",
                              transform: "translate(39 2)",
                              children: [
                                Object(Ha.jsx)("path", {
                                  d: "M3.18889037,4.03566894 C2.27707473,4.03566894 1.69301985,4.33756061 1.69301985,4.8759341 C1.69301985,5.41430759 2.30664713,5.6507894 3.21846277,5.74638844 C4.5147196,5.85708205 6.1954176,6.07846928 6.1954176,7.84453559 C6.1954176,9.10241759 5.01252165,9.99802957 3.20367656,9.99802957 C2.06267484,9.99802957 0.966031704,9.74645316 0,8.74014758 L0.768882376,7.73384199 C1.41436948,8.38291637 2.28532349,8.74471444 3.19135473,8.74014758 C3.97502332,8.74014758 4.74390569,8.50366576 4.74390569,7.86969324 C4.74390569,7.23572072 4.14506461,7.0269123 3.10510191,6.93131328 C1.79405888,6.82061966 0.241507927,6.42816048 0.241507927,4.91870209 C0.241507927,3.4092437 1.85320367,2.84822833 3.16178233,2.84822833 C4.13814097,2.8283869 5.09275186,3.14377716 5.87258558,3.7438403 L5.10370321,4.64196805 C4.54798617,4.23066089 3.87506784,4.01759057 3.18889037,4.03566894 Z M11.0526842,8.67473771 C11.7919941,8.67473771 12.6495937,8.42316132 13.0907153,7.94265039 L14.0468895,8.83826237 C13.3199015,9.62569649 12.1074331,9.99802957 11.0255761,9.99802957 C8.71646463,9.99802957 7.23538032,8.60429632 7.23538032,6.42312895 C7.23538032,4.35265519 8.77314507,2.84822833 10.9960037,2.84822833 C13.0636072,2.84822833 14.4880112,4.02057434 14.4880112,6.37029791 C14.4880112,6.56149597 14.4732249,6.77030438 14.4584388,6.97659702 L8.76575197,6.97659702 C8.8889703,8.03824943 9.7514986,8.67473771 11.0526842,8.67473771 Z M10.9960037,4.11868914 C9.928933,4.11868914 9.00233116,4.68473604 8.7780738,5.78915643 L13.0389636,5.78915643 C12.9551752,4.69731486 12.2158652,4.11868914 10.9960037,4.11868914 Z M21.2847343,6.0080279 C21.2847343,4.83568187 20.5996404,4.15894137 19.3896363,4.15894137 C18.8552844,4.15373447 18.3421521,4.37213446 17.9696832,4.76330347 C17.5972142,5.15447247 17.3979028,5.68428524 17.418143,6.22941513 L17.418143,9.83450491 L15.9395231,9.83450491 L15.9395231,3.01426876 L17.2801386,3.01426876 L17.3663914,3.96522754 C17.9521815,3.25254435 18.8184007,2.843136 19.7297189,2.84822833 C21.4252031,2.84822833 22.7510323,3.86962851 22.7510323,5.99544908 L22.7510323,9.83450491 L21.2724124,9.83450491 L21.2847343,6.0080279 Z M31.7139337,9.83450491 L30.3314241,9.83450491 L30.2451711,8.75524216 C29.6940407,9.56598272 28.7763969,10.034374 27.810377,9.99802957 C25.7723458,9.99802957 24.2197949,8.68731653 24.2197949,6.42312895 C24.2197949,4.10359456 25.7427734,2.84822833 27.7808046,2.84822833 C28.6359398,2.84822833 29.7892633,3.24823481 30.2451711,4.06334233 L30.2451711,0.184034278 L31.7237912,0.184034278 L31.7139337,9.83450491 Z M25.6860929,6.42312895 C25.6860929,7.80428338 26.6545891,8.67473771 27.9040229,8.67473771 C29.1180635,8.67473771 30.1022379,7.67003718 30.1022379,6.43067624 C30.1022379,5.19131533 29.1180635,4.18661477 27.9040229,4.18661477 C26.6545891,4.18661477 25.6860929,5.04197452 25.6860929,6.42312895 Z M34.4493806,0.00289927224 C34.6863282,-0.0169989756 34.9204871,0.0661918749 35.0941379,0.231965635 C35.2677889,0.397739395 35.3647772,0.630674561 35.3611963,0.87335361 C35.3260568,1.36094089 34.9282973,1.73821965 34.4493806,1.73821965 C33.9704639,1.73821965 33.5727043,1.36094089 33.5375649,0.87335361 C33.533984,0.630674561 33.6309723,0.397739395 33.8046231,0.231965635 C33.9782741,0.0661918749 34.212433,-0.0169989756 34.4493806,0.00289927224 Z M35.1763687,9.83450491 L33.6977487,9.83450491 L33.6977487,3.01426876 L35.1763687,3.01426876 L35.1763687,9.83450491 Z M42.4980019,6.0080279 C42.4980019,4.83568187 41.8153723,4.15894137 40.6029039,4.15894137 C40.0683347,4.15300927 39.554781,4.3711811 39.1821557,4.7625144 C38.8095304,5.15384768 38.6104539,5.68408419 38.6314107,6.22941513 L38.6314107,9.83450491 L37.1527907,9.83450491 L37.1527907,3.01426876 L38.4909418,3.01426876 L38.5771946,3.96522754 C39.163965,3.25243673 40.0309574,2.84308971 40.9429866,2.84822833 C42.6384708,2.84822833 43.9643,3.86962851 43.9643,5.99544908 L43.9643,9.83450491 L42.48568,9.83450491 L42.4980019,6.0080279 Z M47.3281604,4.13126796 C47.7840682,3.31616043 48.9398561,2.84822833 49.792527,2.84822833 C51.8157719,2.84822833 53.356001,4.10611032 53.356001,6.42312895 C53.356001,8.68731653 51.7024111,9.99802957 49.7802051,9.99802957 C48.8954975,9.99802957 47.8851073,9.62569649 47.3281604,8.75524216 L47.244372,9.83450491 L45.8618623,9.83450491 L45.8618623,0.184034278 L47.3404822,0.184034278 L47.3281604,4.13126796 Z M47.4144132,6.42312895 C47.4052647,7.03103833 47.6408618,7.61615167 48.0661578,8.04175809 C48.4914541,8.46736452 49.0691903,8.69617842 49.6643799,8.67473771 C50.9483149,8.67473771 51.8823099,7.80428338 51.8823099,6.42312895 C51.8823099,5.04197452 50.9433862,4.18661477 49.6643799,4.18661477 C49.0719838,4.16603997 48.4970021,4.39305463 48.0723279,4.81518965 C47.6476537,5.23732463 47.4100429,5.81804437 47.4144132,6.42312895 Z M56.4463168,9.83450491 L54.9676969,9.83450491 L54.9676969,0.184034278 L56.4463168,0.184034278 L56.4463168,9.83450491 Z M59.8520714,6.72753639 C59.8520714,7.88730358 60.5223791,8.68731653 61.7619555,8.68731653 C62.2926372,8.6933561 62.8023864,8.47628162 63.17155,8.08704705 C63.5407134,7.69781247 63.7367826,7.17069372 63.7137338,6.62942159 L63.7137338,3.01426876 L65.180032,3.01426876 L65.180032,9.83450491 L63.8566671,9.83450491 L63.7704143,8.89360918 C63.172228,9.62241911 62.2788259,10.0297267 61.3479419,9.99802957 C59.6228853,9.99802957 58.390702,8.79801015 58.390702,6.74011521 L58.390702,3.01426876 L59.8570002,3.01426876 L59.8520714,6.72753639 Z M70.5671374,8.67473771 C71.3064473,8.67473771 72.1615825,8.42316132 72.6051685,7.94265039 L73.5588783,8.83826237 C72.8318902,9.62569649 71.6218863,9.99802957 70.5375649,9.99802957 C68.2309178,9.99802957 66.7473691,8.60429632 66.7473691,6.42312895 C66.7473691,4.35265519 68.2875982,2.84822833 70.5104569,2.84822833 C72.5755961,2.84822833 74,4.02057434 74,6.37029791 C74,6.56149597 73.9852138,6.77030438 73.972892,6.97659702 L68.272812,6.97659702 C68.4034234,8.03824943 69.2708805,8.67473771 70.5671374,8.67473771 Z M70.5104569,4.11868914 C69.4409218,4.11868914 68.51432,4.68473604 68.292527,5.78915643 L72.5509524,5.78915643 C72.4622352,4.69731486 71.720461,4.11868914 70.5104569,4.11868914 Z",
                                  transform: "translate(15)",
                                }),
                                Object(Ha.jsx)("path", {
                                  d: "M10.5641108,3.00216427 C10.146235,2.25079185 9.44513368,1.70167457 8.62003646,1.47952447 C8.4491297,1.43491727 8.27492922,1.40431796 8.09913615,1.3880253 C7.51217272,0.519581249 6.53766166,0 5.49579736,0 C4.45393307,0 3.47942201,0.519581249 2.89245858,1.3880253 C1.85810861,1.48719586 0.936541168,2.08865377 0.422833031,2.99981813 C-0.0937368041,3.92197673 -0.139592201,5.03840554 0.299584299,6.00052123 C-0.134914629,6.9611326 -0.0891294759,8.0732365 0.422833031,8.99418592 C0.841321235,9.74502591 1.54216955,10.293945 2.36690738,10.5168257 C2.54132789,10.5634209 2.71955951,10.5940447 2.89943492,10.6083249 C3.48502202,11.478787 4.46002972,12 5.50277371,12 C6.5455177,12 7.5205254,11.478787 8.1061125,10.6083249 C9.14086265,10.5103172 10.0629171,9.90854142 10.575738,8.99653206 C11.0942072,8.07492108 11.140101,6.95755745 10.6989868,5.99582897 C11.1310668,5.03358597 11.0809357,3.92089157 10.5641108,3.00216427 L10.5641108,3.00216427 Z M9.77918251,3.47651865 C10.0295276,3.92143383 10.1241432,4.43674152 10.0481082,4.94117647 C9.87786899,4.78386333 9.69123278,4.6451503 9.49138486,4.52740476 C8.75475975,4.0934736 7.87365974,3.97396333 7.04746385,4.1959172 C6.54502588,4.33068575 6.0828411,4.58478935 5.70047649,4.93647452 C5.55923857,4.02952854 5.98493404,3.12800171 6.77617918,2.65837913 C7.27230722,2.36137643 7.86774973,2.27660246 8.42747716,2.42328157 C9.00270754,2.57717509 9.49055491,2.95730153 9.77918251,3.47651865 Z M5.48958526,1.05882353 C5.97993615,1.06157386 6.45418467,1.2359326 6.83157895,1.55221109 C6.61143511,1.62368471 6.39949565,1.7187536 6.19938124,1.83579366 C5.0207869,2.54692986 4.42359371,3.93910545 4.71588481,5.29411765 C3.89327473,4.95660072 3.3559382,4.14831593 3.35791501,3.25140095 C3.35282916,2.05474162 4.30504744,1.07840574 5.48958526,1.06574018 L5.48958526,1.05882353 Z M1.23034615,3.53041499 C1.47982182,3.10299299 1.87001405,2.77087321 2.3372697,2.5882353 C2.28561544,2.81517066 2.25877286,3.04683421 2.25719438,3.27932064 C2.2531452,4.66781351 3.16573074,5.90016222 4.51578947,6.32931066 C4.27525393,6.52623803 3.99407716,6.67003615 3.6914847,6.75087273 C3.13425791,6.89830949 2.53977278,6.81939491 2.04287514,6.53202902 C0.978789277,5.91761029 0.612456426,4.58365 1.21857037,3.53041499 L1.23034615,3.53041499 Z M1.21971967,8.52132738 C0.968908967,8.07736192 0.875006728,7.56232426 0.953074336,7.05882353 C1.1231354,7.21541003 1.30896271,7.35408738 1.50760223,7.47265098 C1.99663582,7.76001254 2.55389882,7.91182128 3.12163236,7.91234265 C3.40213487,7.91146355 3.68133697,7.87431645 3.95224435,7.80183192 C4.45504352,7.66757155 4.91748494,7.41336761 5.29962915,7.06117483 C5.44037966,7.96822806 5.01592436,8.86988928 4.22596877,9.34192841 C3.72951166,9.63845847 3.13410741,9.72321342 2.57418354,9.57705766 C1.99422501,9.42793189 1.50063795,9.04907852 1.20792119,8.52838126 L1.21971967,8.52132738 Z M5.5109979,10.9365704 C5.01969808,10.9334873 4.54486932,10.7575519 4.16842105,10.4391133 C4.38889626,10.3703259 4.60104205,10.2768542 4.80089348,10.1604453 C5.97999997,9.45008245 6.57745267,8.05942091 6.28503454,6.70588235 C7.24164114,7.09951471 7.79307468,8.11624236 7.60578036,9.14106024 C7.41848605,10.1658781 6.54387918,10.9174568 5.5109979,10.9411765 L5.5109979,10.9365704 Z M9.55749736,8.46867766 C9.3172097,8.89805418 8.93784854,9.23103261 8.48304155,9.4117647 C8.53430555,9.18480227 8.56037477,8.95279142 8.56076813,8.72001381 C8.56397527,7.33041917 7.67843327,6.097268 6.36842106,5.66708652 C6.60190133,5.46996949 6.87483076,5.3260329 7.16854772,5.24511847 C7.71100327,5.10178824 8.28783228,5.18490467 8.76880107,5.4757021 C9.79484698,6.09440161 10.1447711,7.42537658 9.55749736,8.47559516 L9.55749736,8.46867766 Z",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                });
              },
            },
          ]),
          t
        );
      })(a.PureComponent),
      Za = Ra.c.div(
        qa ||
          (qa = Object(Ba.a)([
            "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  height: 40px;\n  flex-shrink: 0;\n",
          ]))
      ),
      Ya = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "disableEmoji",
              value: function (e) {
                var n = this.props,
                  t = n.isEmojiPickerEnabled,
                  a = n.showEmojiPicker,
                  r = n.showGifPicker,
                  o = n.isGifPickerEnabled;
                ((!e.nativeEvent.shiftKey &&
                  e.target instanceof window.HTMLInputElement &&
                  e.target instanceof window.HTMLInputElement &&
                  !e.target.className.includes("emojiPicker") &&
                  e.target instanceof window.HTMLInputElement &&
                  !e.target.className.includes("emoji") &&
                  !e.target.id.includes("emoji-mart-search")) ||
                  (!e.nativeEvent.shiftKey && t)) &&
                  a(!1),
                  ((e.target instanceof window.HTMLInputElement &&
                    !e.target.className.includes("gifPicker")) ||
                    o) &&
                    r(!1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return Object(Ha.jsx)(Za, {
                  onClick: function (n) {
                    return e.disableEmoji(n);
                  },
                  children:
                    this.props.typingOperators &&
                    this.props.typingOperators.length > 0
                      ? Object(Ha.jsx)(Ga, {
                          typingOperators: this.props.typingOperators,
                        })
                      : this.props.isLogoEnabled
                      ? Object(Ha.jsx)(Va, {})
                      : null,
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var Ka,
      Xa,
      Ja,
      Qa,
      $a,
      er = K(
        function (e) {
          return {
            typingOperators: Tt(e),
            isLogoEnabled: Dt(e),
            isEmojiPickerEnabled: Wt(e),
            isGifPickerEnabled: Ht(e),
          };
        },
        function (e) {
          return {
            showEmojiPicker: function (n) {
              return e(rn(n));
            },
            showGifPicker: function (n) {
              return e(on(n));
            },
          };
        }
      )(Ya),
      nr = t(62),
      tr = Ra.c.svg(
        Ka ||
          (Ka = Object(Ba.a)([
            "\n  height: ",
            ";\n  width: ",
            ";\n  fill: ",
            ";\n",
          ])),
        function (e) {
          return e.height;
        },
        function (e) {
          return e.width;
        },
        function (e) {
          return e.theme[e.color];
        }
      ),
      ar = ["children"],
      rr = function (e) {
        var n = e.children,
          t = Object(nr.a)(e, ar);
        return Object(Ha.jsx)(
          tr,
          Object(u.a)(Object(u.a)({}, t), {}, { children: n })
        );
      },
      or = ["color", "width", "height", "bold"],
      ir = function (e) {
        var n = e.color,
          t = e.width,
          a = e.height,
          r = e.bold,
          o = Object(nr.a)(e, or);
        return r
          ? Object(Ha.jsx)(
              rr,
              Object(u.a)(
                Object(u.a)(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 384 512",
                    color: n || "white",
                    width: t || "22px",
                    height: a || "22px",
                  },
                  o
                ),
                {},
                {
                  children: Object(Ha.jsx)("path", {
                    d: "M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z",
                  }),
                }
              )
            )
          : Object(Ha.jsx)(
              rr,
              Object(u.a)(
                Object(u.a)(
                  {
                    "aria-hidden": "true",
                    "data-prefix": "far",
                    "data-icon": "times",
                    class: "svg-inline--fa fa-times fa-w-10",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 320 512",
                    color: n || "white",
                    width: t || "22px",
                    height: a || "22px",
                  },
                  o
                ),
                {},
                {
                  children: Object(Ha.jsx)("path", {
                    fill: "currentColor",
                    d: "M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z",
                  }),
                }
              )
            );
      },
      sr = Ra.c.div(
        Xa ||
          (Xa = Object(Ba.a)([
            "\n  border-radius: 50%;\n  width: 56px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n",
          ]))
      );
    sr.Status = Ra.c.div(
      Ja ||
        (Ja = Object(Ba.a)([
          "\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  background-color: ",
          ";\n  position: absolute;\n  right: 0;\n  bottom: 6px;\n  border: ",
          ";\n",
        ])),
      function (e) {
        return e.isOperatorConnected ? e.theme.green : e.theme.grey;
      },
      function (e) {
        return "2px solid ".concat(e.theme.primaryColor);
      }
    );
    var lr,
      cr,
      ur,
      _r = Ra.c.div(
        Qa ||
          (Qa = Object(Ba.a)([
            "\n  background-image: ",
            ";\n  background-size: cover;\n  background-position: center center;\n  border-radius: 50%;\n",
          ])),
        function (e) {
          return "url(".concat(e.imageSrc, ")");
        }
      ),
      dr = Object(Ra.c)(_r)(
        $a || ($a = Object(Ba.a)(["\n  height: 56px;\n  width: 56px;\n"]))
      ),
      fr = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  n = e.operatorAvatarUrl,
                  t = e.isOperatorConnected;
                return Object(Ha.jsxs)(sr, {
                  children: [
                    Object(Ha.jsx)(dr, { imageSrc: n }),
                    Object(Ha.jsx)(sr.Status, { isOperatorConnected: t }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component),
      pr =
        "data:image/png;base64,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",
      gr = Ra.c.div(
        lr ||
          (lr = Object(Ba.a)([
            "\n  height: 24px;\n  width: ",
            ";\n  background-color: rgba(0, 0, 0, 0.2);\n  color: ",
            ";\n  font-size: 12px;\n  line-height: 14px;\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n",
          ])),
        function (e) {
          return "".concat(18 + 6 * e.count.toString().length, "px");
        },
        function (e) {
          return e.theme.white;
        }
      ),
      mr = function (e) {
        return Object(Ha.jsx)(gr, {
          count: e.count,
          children: "+".concat(e.count),
        });
      },
      hr = Ra.c.div(
        cr ||
          (cr = Object(Ba.a)([
            "\n  display: inline-flex;\n  align-items: center;\n  & :not(:last-child) {\n    margin-right: 8px;\n  }\n  color: ",
            ";\n  font-size: 14px;\n  line-height: 24px;\n  font-family: Roboto;\n",
          ])),
        function (e) {
          return e.theme.lightGrey;
        }
      ),
      br = Object(Ra.c)(_r)(
        ur || (ur = Object(Ba.a)(["\n  height: 24px;\n  width: 24px;\n"]))
      ),
      wr = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "renderIcons",
              value: function (e) {
                return this.props.operators.slice(0, e).map(function (e, n) {
                  var t = e.avatar;
                  return Object(Ha.jsx)(br, { imageSrc: t || pr }, n);
                });
              },
            },
            {
              key: "getFormattedTextId",
              value: function (e) {
                var n = ["no", "one", "many"].includes(e);
                return "chat.operatorStatus.".concat(
                  n ? e : "no",
                  "OperatorOnline"
                );
              },
            },
            {
              key: "getFormattedTextIdForScheduled",
              value: function (e) {
                return "chat.operatorStatus.".concat(
                  e ? "officeHours" : "outsideOfficeHours"
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props.operators.length,
                  n = 0 === e ? "no" : e > 1 ? "many" : "one",
                  t = this.props,
                  a = t.chatboxAvailabilityType,
                  r = t.isChatBoxAvailable;
                return Object(Ha.jsxs)(hr, {
                  children: [
                    "scheduled" !== a &&
                      (4 === e ? this.renderIcons(4) : this.renderIcons(3)),
                    "scheduled" !== a &&
                      e > 4 &&
                      Object(Ha.jsx)(mr, { count: e - 4 + 1 }),
                    Object(Ha.jsx)(Da.a, {
                      id:
                        "scheduled" !== a
                          ? this.getFormattedTextId(n)
                          : this.getFormattedTextIdForScheduled(r),
                    }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var yr,
      vr,
      kr,
      jr,
      xr,
      Or,
      Cr,
      Ar,
      Er,
      Pr = K(function (e) {
        return {
          operators: Ct(e),
          chatboxAvailabilityType: Ut(e),
          isChatBoxAvailable: Vt(e),
        };
      }, null)(wr),
      Sr = Ra.c.div(
        yr ||
          (yr = Object(Ba.a)([
            "\n  display: flex;\n  border-radius: 5px 5px 0 0;\n  background-color: ",
            ";\n  height: 88px;\n  min-height: 88px;\n  width: 100%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  ",
            ";\n",
          ])),
        function (e) {
          return e.theme.primaryColor;
        },
        function () {
          return Ln() && "border-radius: 0;";
        }
      ),
      Tr = Ra.c.div(
        vr || (vr = Object(Ba.a)(["\n  display: none;\n  ", ";\n"])),
        function () {
          return (
            Ln() &&
            "position: absolute;\n    right: 16px;\n    top: 16px;\n    display: block;"
          );
        }
      ),
      Mr = Object(Ra.c)(Sr)(
        kr ||
          (kr = Object(Ba.a)([
            "\n  display: flex;\n  padding-left: 16px;\n  padding-top: 16px;\n",
          ]))
      ),
      Ir = Object(Ra.c)(Sr)(
        jr || (jr = Object(Ba.a)(["\n  padding: 16px;\n"]))
      ),
      zr = Ra.c.h1(
        xr ||
          (xr = Object(Ba.a)([
            "\n  color: ",
            ";\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: 600;\n  -webkit-font-smoothing: auto;\n  line-height: 24px;\n  margin: 0 0 8px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 20.5rem;\n",
          ])),
        function (e) {
          return e.theme.white;
        }
      );
    (Mr.Info = Ra.c.div(
      Or ||
        (Or = Object(Ba.a)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 8px;\n  font-family: 'Roboto';\n  margin-top: 8px;\n",
        ]))
    )),
      (Mr.OperatorName = Ra.c.p(
        Cr ||
          (Cr = Object(Ba.a)([
            "\n  font-size: 16px;\n  font-weight: 600;\n  -webkit-font-smoothing: auto;\n  color: ",
            ";\n  line-height: 24px;\n  margin: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 17rem;\n",
          ])),
        function (e) {
          return e.theme.white;
        }
      )),
      (Mr.OperatorStatus = Ra.c.p(
        Ar ||
          (Ar = Object(Ba.a)([
            "\n  font-size: 14px;\n  color: ",
            ";\n  line-height: 24px;\n  text-transform: capitalize;\n  margin: 0;\n",
          ])),
        function (e) {
          return e.theme.lightGrey;
        }
      ));
    var Nr = Ra.c.button(
        Er ||
          (Er = Object(Ba.a)([
            "\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  outline: none;\n",
          ]))
      ),
      Lr = function (e) {
        return Object(Ha.jsx)(Tr, {
          children: Object(Ha.jsx)(Nr, {
            onClick: e.closeChatWindow,
            children: Object(Ha.jsx)(ir, {
              width: "26px",
              height: "26px",
              color: "white",
            }),
          }),
        });
      },
      Dr = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).resizeCalculate =
              function () {
                var n = e.props.showChatCloseIcon;
                Ln() ? n(!0) : n(!1);
              }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                window.addEventListener("resize", this.resizeCalculate);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                window.removeEventListener("resize", this.resizeCalculate);
              },
            },
            {
              key: "disableEmoji",
              value: function (e) {
                var n = this.props,
                  t = n.showEmojiPicker,
                  a = n.isEmojiPickerEnabled,
                  r = n.showGifPicker,
                  o = n.isGifPickerEnabled;
                ((!e.nativeEvent.shiftKey &&
                  e.target instanceof window.HTMLInputElement &&
                  !e.target.className.includes("emojiPicker")) ||
                  (!e.nativeEvent.shiftKey && a)) &&
                  t(!1),
                  ((e.target instanceof window.HTMLInputElement &&
                    !e.target.className.includes("gifPicker")) ||
                    o) &&
                    r(!1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = this.props.isCloseIconEnabled;
                if (this.props.lastOperator) {
                  var t = this.props.lastOperator,
                    a = t.name,
                    r = t.avatar,
                    o = t.status;
                  return Object(Ha.jsxs)(Mr, {
                    onClick: function (n) {
                      return e.disableEmoji(n);
                    },
                    children: [
                      Object(Ha.jsx)(fr, {
                        operatorAvatarUrl: r || pr,
                        companyAvatarUrl: this.props.companyAvatarUrl,
                        isOperatorConnected: "online" === o,
                      }),
                      Object(Ha.jsxs)(Mr.Info, {
                        children: [
                          Object(Ha.jsx)(Mr.OperatorName, {
                            children: a || "Operator",
                          }),
                          Object(Ha.jsx)(Mr.OperatorStatus, {
                            children: Object(Ha.jsx)(Da.a, {
                              id: "chat.operatorStatus.".concat(o),
                            }),
                          }),
                        ],
                      }),
                      n
                        ? Object(Ha.jsx)(Lr, {
                            closeChatWindow: this.props.closeChatWindow,
                          })
                        : "",
                    ],
                  });
                }
                return Object(Ha.jsxs)(Ir, {
                  onClick: function (n) {
                    return e.disableEmoji(n);
                  },
                  children: [
                    Object(Ha.jsxs)("div", {
                      children: [
                        Object(Ha.jsx)(zr, {
                          children: this.props.companyName,
                        }),
                        Object(Ha.jsx)(Pr, {
                          companyAvatarUrl: this.props.companyAvatarUrl,
                        }),
                      ],
                    }),
                    n
                      ? Object(Ha.jsx)(Lr, {
                          closeChatWindow: this.props.closeChatWindow,
                        })
                      : "",
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var Br,
      Rr,
      Fr,
      Wr = K(
        function (e) {
          return {
            companyName: Zt.getCompanyName(e),
            companyAvatarUrl: Zt.getCompanyAvatarUrl(e),
            lastOperator: Zt.getLastOperator(e),
            isEmojiPickerEnabled: Wt(e),
            isGifPickerEnabled: Ht(e),
            isCloseIconEnabled: Gt(e),
          };
        },
        function (e) {
          return {
            closeChatWindow: function () {
              return e(Me(!1));
            },
            showEmojiPicker: function (n) {
              return e(rn(n));
            },
            showGifPicker: function (n) {
              return e(on(n));
            },
            showChatCloseIcon: function (n) {
              return e(sn(n));
            },
          };
        }
      )(Object(Da.d)(Dr)),
      Hr = 56,
      Gr = Ra.c.div(
        Br ||
          (Br = Object(Ba.a)([
            "\n  background-color: ",
            ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: ",
            "px;\n  width: ",
            "px;\n  cursor: pointer;\n  box-shadow: 0 2px 32px 0 rgba(0, 0, 0, 0.16), 0 1px 6px 0 rgba(0, 0, 0, 0.08);\n  outline: none;\n  border-radius: 50%;\n  border-left: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-top: 1px solid transparent;\n  padding: 0;\n",
          ])),
        function (e) {
          return e.theme.primaryColor;
        },
        Hr,
        Hr
      ),
      Ur = Ra.c.img(
        Rr ||
          (Rr = Object(Ba.a)([
            "\n  height: ",
            "px;\n  width: ",
            "px;\n  padding: 9px;\n",
          ])),
        Hr,
        Hr
      ),
      qr = Ra.c.div(
        Fr ||
          (Fr = Object(Ba.a)([
            "\n  padding: 17px;\n  height: ",
            "px;\n  width: ",
            "px;\n",
          ])),
        Hr,
        Hr
      ),
      Vr = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).handleClick = function () {
              return e.props.onClick();
            }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return Object(Ha.jsx)(Gr, {
                  onClick: this.handleClick,
                  children: this.props.isChatWindowVisible
                    ? Object(Ha.jsx)(qr, {
                        children: Object(Ha.jsx)(ir, { bold: !0 }),
                      })
                    : Object(Ha.jsx)(Ur, {
                        src: "data:image/png;base64,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",
                        alt: "chat",
                      }),
                });
              },
            },
          ]),
          t
        );
      })(a.Component),
      Zr = t(143),
      Yr = t(134),
      Kr = {
        "min-height": "0",
        "max-height": "none",
        height: "0",
        visibility: "hidden",
        overflow: "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0",
      },
      Xr = function (e) {
        Object.keys(Kr).forEach(function (n) {
          e.style.setProperty(n, Kr[n], "important");
        });
      },
      Jr = null;
    var Qr,
      $r,
      eo,
      no,
      to = function () {},
      ao = [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "boxSizing",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "letterSpacing",
        "lineHeight",
        "paddingBottom",
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "tabSize",
        "textIndent",
        "textRendering",
        "textTransform",
        "width",
        "wordBreak",
      ],
      ro = !!document.documentElement.currentStyle,
      oo = function (e, n) {
        var t = e.cacheMeasurements,
          r = e.maxRows,
          o = e.minRows,
          i = e.onChange,
          s = void 0 === i ? to : i,
          l = e.onHeightChange,
          c = void 0 === l ? to : l,
          u = Object(k.a)(e, [
            "cacheMeasurements",
            "maxRows",
            "minRows",
            "onChange",
            "onHeightChange",
          ]);
        var _ = void 0 !== u.value,
          d = Object(a.useRef)(null),
          f = Object(Yr.a)(d, n),
          p = Object(a.useRef)(0),
          g = Object(a.useRef)(),
          m = function () {
            var e = d.current,
              n =
                t && g.current
                  ? g.current
                  : (function (e) {
                      var n = window.getComputedStyle(e);
                      if (null === n) return null;
                      var t,
                        a =
                          ((t = n),
                          ao.reduce(function (e, n) {
                            return (e[n] = t[n]), e;
                          }, {})),
                        r = a.boxSizing;
                      return "" === r
                        ? null
                        : (ro &&
                            "border-box" === r &&
                            (a.width =
                              parseFloat(a.width) +
                              parseFloat(a.borderRightWidth) +
                              parseFloat(a.borderLeftWidth) +
                              parseFloat(a.paddingRight) +
                              parseFloat(a.paddingLeft) +
                              "px"),
                          {
                            sizingStyle: a,
                            paddingSize:
                              parseFloat(a.paddingBottom) +
                              parseFloat(a.paddingTop),
                            borderSize:
                              parseFloat(a.borderBottomWidth) +
                              parseFloat(a.borderTopWidth),
                          });
                    })(e);
            if (n) {
              g.current = n;
              var a = (function (e, n, t, a) {
                  void 0 === t && (t = 1),
                    void 0 === a && (a = 1 / 0),
                    Jr ||
                      ((Jr = document.createElement("textarea")).setAttribute(
                        "tabindex",
                        "-1"
                      ),
                      Jr.setAttribute("aria-hidden", "true"),
                      Xr(Jr)),
                    null === Jr.parentNode && document.body.appendChild(Jr);
                  var r = e.paddingSize,
                    o = e.borderSize,
                    i = e.sizingStyle,
                    s = i.boxSizing;
                  Object.keys(i).forEach(function (e) {
                    var n = e;
                    Jr.style[n] = i[n];
                  }),
                    Xr(Jr),
                    (Jr.value = n);
                  var l = (function (e, n) {
                    var t = e.scrollHeight;
                    return "border-box" === n.sizingStyle.boxSizing
                      ? t + n.borderSize
                      : t - n.paddingSize;
                  })(Jr, e);
                  Jr.value = "x";
                  var c = Jr.scrollHeight - r,
                    u = c * t;
                  "border-box" === s && (u = u + r + o), (l = Math.max(u, l));
                  var _ = c * a;
                  return (
                    "border-box" === s && (_ = _ + r + o),
                    [(l = Math.min(_, l)), c]
                  );
                })(n, e.value || e.placeholder || "x", o, r),
                i = a[0],
                s = a[1];
              p.current !== i &&
                ((p.current = i),
                e.style.setProperty("height", i + "px", "important"),
                c(i, { rowHeight: s }));
            }
          };
        return (
          Object(a.useLayoutEffect)(m),
          (function (e) {
            var n = Object(Zr.a)(e);
            Object(a.useLayoutEffect)(function () {
              var e = function (e) {
                n.current(e);
              };
              return (
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []);
          })(m),
          Object(a.createElement)(
            "textarea",
            Object(v.a)({}, u, {
              onChange: function (e) {
                _ || m(), s(e);
              },
              ref: f,
            })
          )
        );
      },
      io = Object(a.forwardRef)(oo),
      so = Ra.c.button(
        Qr ||
          (Qr = Object(Ba.a)([
            "\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: right;\n  border-width: 0px;\n  padding: 0px;\n  cursor: pointer;\n  text-transform: uppercase;\n  background-color: transparent;\n  &.active {\n    color: ",
            ";\n  }\n  &.send-button {\n    padding: 0.5rem 1rem 0.5rem 0.25rem;\n  }\n  &.disabled,\n  &.disabled:hover {\n    color: ",
            ";\n  }\n  &:hover {\n    color: ",
            ";\n  }\n  outline: none;\n",
          ])),
        function (e) {
          return e.theme.blue;
        },
        function (e) {
          return e.theme.lightBlue;
        },
        function (e) {
          return e.theme.darkBlue;
        }
      ),
      lo = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return Object(Ha.jsx)(so, {
                  className: ""
                    .concat(this.props.disabled ? "disabled" : "active", " ")
                    .concat(this.props.isSendButton ? "send-button" : ""),
                  disabled: this.props.disabled,
                  onClick: this.props.onClick,
                  children: Object(Ha.jsx)(Da.a, {
                    id: this.props.translationKey,
                  }),
                });
              },
            },
          ]),
          t
        );
      })(a.PureComponent),
      co = t(51),
      uo = t(142),
      _o = t(132),
      fo = t.n(_o),
      po = Ra.c.div(
        $r ||
          ($r = Object(Ba.a)([
            "\n  width: 16px;\n  height: 16px;\n  margin-right: 12px;\n  cursor: pointer;\n",
          ]))
      ),
      go = Ra.c.div(
        eo ||
          (eo = Object(Ba.a)([
            "\n  cursor: pointer;\n  width: 15px;\n  height: 15px;\n  margin-right: 12px;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='15px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ERegular/sticky-note%3C/title%3E%3Cg id='\u2705\u2699\ufe0f-Plugins' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Chat_reply' transform='translate(-1196.000000, -772.000000)'%3E%3Cg id='Regular/sticky-note' transform='translate(1196.000000, 772.000000)'%3E%3Cpath d='M15.9999999,11.2895 L15.9999999,1.71428568 C15.9999999,0.767499955 15.2325,-4.99999828e-08 14.2857143,-4.99999828e-08 L1.71428567,-4.99999828e-08 C0.767499955,-4.99999828e-08 -5.00003807e-08,0.767499955 -5.00003807e-08,1.71428568 L-5.00003807e-08,14.2852858 C-5.00003807e-08,15.2320715 0.767499955,15.9995715 1.71428567,15.9995715 L11.2899286,15.9995715 C11.7445845,15.9995715 12.1806181,15.8189558 12.5021072,15.4974643 L15.4978929,12.5016786 C15.8193844,12.1801895 15.9999999,11.744156 15.9999999,11.2895 Z' id='Path' fill='%238492A6'%3E%3C/path%3E%3Cpolygon id='Path' fill='%238492A6' points='11.4285714 14.1466429 11.4285714 11.4281429 14.1470715 11.4281429'%3E%3C/polygon%3E%3Cpath d='M14.2857143,1.71428568 L14.2857143,9.71385715 C12.134191,9.55551195 10.7719016,9.76286714 10.198846,10.3359227 C9.62579039,10.9089783 9.46427028,12.2254327 9.71428567,14.2852858 L1.71428567,14.2852858 L1.71428567,1.71428568 L14.2857143,1.71428568 Z' id='Path' fill='%23FFFFFF'%3E%3C/path%3E%3Cg id='Group-5' transform='translate(4.000000, 4.000000)' fill='%238492A6'%3E%3Cpath d='M7.77083333,5.359375 C7.6875,5.19583333 7.559375,5.08645833 7.38541667,5.03125 C7.21145833,4.97604167 7.04166667,4.98958333 6.875,5.07291667 C6.70833333,5.15625 6.596875,5.28854167 6.54166667,5.46875 C6.36770833,6.02395833 6.046875,6.47395833 5.578125,6.81770833 C5.109375,7.16145833 4.58333333,7.33333333 4,7.33333333 C3.41666667,7.33333333 2.890625,7.16145833 2.421875,6.81770833 C1.953125,6.47395833 1.63229167,6.02395833 1.45833333,5.46875 C1.403125,5.28854167 1.29375,5.15625 1.13020833,5.07291667 C0.966666667,4.98958333 0.798958333,4.97604167 0.625,5.03125 C0.444791667,5.08645833 0.3125,5.19583333 0.229166667,5.359375 C0.145833333,5.52291667 0.132291667,5.690625 0.1875,5.86458333 C0.444791667,6.70520833 0.923958333,7.38229167 1.625,7.89583333 C2.32604167,8.409375 3.11770833,8.66666667 4,8.66666667 C4.88229167,8.66666667 5.67395833,8.409375 6.375,7.89583333 C7.07604167,7.38229167 7.55520833,6.70520833 7.8125,5.86458333 C7.86770833,5.690625 7.85416667,5.52291667 7.77083333,5.359375 Z' id='Path'%3E%3C/path%3E%3Cpath d='M2.27604167,0.390625 C2.015625,0.130208333 1.70104167,-1.86517468e-14 1.33333333,-1.86517468e-14 C0.965625,-1.86517468e-14 0.651041667,0.130208333 0.390625,0.390625 C0.130208333,0.651041667 6.06625861e-13,0.965625 6.06625861e-13,1.33333333 C6.06625861e-13,1.70104167 0.130208333,2.015625 0.390625,2.27604167 C0.651041667,2.53645833 0.965625,2.66666667 1.33333333,2.66666667 C1.70104167,2.66666667 2.015625,2.53645833 2.27604167,2.27604167 C2.53645833,2.015625 2.66666667,1.70104167 2.66666667,1.33333333 C2.66666667,0.965625 2.53645833,0.651041667 2.27604167,0.390625 Z' id='Path'%3E%3C/path%3E%3Cpath d='M7.609375,0.390625 C7.34895833,0.130208333 7.034375,-1.86517468e-14 6.66666667,-1.86517468e-14 C6.29895833,-1.86517468e-14 5.984375,0.130208333 5.72395833,0.390625 C5.46354167,0.651041667 5.33333333,0.965625 5.33333333,1.33333333 C5.33333333,1.70104167 5.46354167,2.015625 5.72395833,2.27604167 C5.984375,2.53645833 6.29895833,2.66666667 6.66666667,2.66666667 C7.034375,2.66666667 7.34895833,2.53645833 7.609375,2.27604167 C7.86979167,2.015625 8,1.70104167 8,1.33333333 C8,0.965625 7.86979167,0.651041667 7.609375,0.390625 Z' id='Path'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  &:hover {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='15px' height='15px' viewBox='0 0 16 16' version='1.1'%3E%3Ctitle%3Esticky-note%3C/title%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='sticky-note' fill='%231F2D3D' fill-rule='nonzero'%3E%3Cpath d='M14.2857143,-4.99999828e-08 C15.2325,-4.99999828e-08 15.9999999,0.767499955 15.9999999,1.71428568 L15.9999999,1.71428568 L15.9999999,11.2895 C15.9999999,11.744156 15.8193844,12.1801895 15.4978929,12.5016786 L15.4978929,12.5016786 L12.5021072,15.4974643 C12.1806181,15.8189558 11.7445845,15.9995715 11.2899286,15.9995715 L11.2899286,15.9995715 L1.71428567,15.9995715 C0.767499955,15.9995715 -5.00003807e-08,15.2320715 -5.00003807e-08,14.2852858 L-5.00003807e-08,14.2852858 L-5.00003807e-08,1.71428568 C-5.00003807e-08,0.767499955 0.767499955,-4.99999828e-08 1.71428567,-4.99999828e-08 L1.71428567,-4.99999828e-08 Z M14.2857143,1.71428568 L1.71428567,1.71428568 L1.71428567,14.2852858 L9.71428567,14.2852858 C9.46427028,12.2254327 9.62579039,10.9089783 10.198846,10.3359227 C10.7719016,9.76286714 12.134191,9.55551195 14.2857143,9.71385715 L14.2857143,9.71385715 L14.2857143,1.71428568 Z' id='Combined-Shape'/%3E%3Cpolygon id='Path' points='11.4285714 14.1466429 11.4285714 11.4281429 14.1470715 11.4281429'/%3E%3Cg id='Group-5' transform='translate(4.000000, 4.000000)'%3E%3Cpath d='M7.77083333,5.359375 C7.6875,5.19583333 7.559375,5.08645833 7.38541667,5.03125 C7.21145833,4.97604167 7.04166667,4.98958333 6.875,5.07291667 C6.70833333,5.15625 6.596875,5.28854167 6.54166667,5.46875 C6.36770833,6.02395833 6.046875,6.47395833 5.578125,6.81770833 C5.109375,7.16145833 4.58333333,7.33333333 4,7.33333333 C3.41666667,7.33333333 2.890625,7.16145833 2.421875,6.81770833 C1.953125,6.47395833 1.63229167,6.02395833 1.45833333,5.46875 C1.403125,5.28854167 1.29375,5.15625 1.13020833,5.07291667 C0.966666667,4.98958333 0.798958333,4.97604167 0.625,5.03125 C0.444791667,5.08645833 0.3125,5.19583333 0.229166667,5.359375 C0.145833333,5.52291667 0.132291667,5.690625 0.1875,5.86458333 C0.444791667,6.70520833 0.923958333,7.38229167 1.625,7.89583333 C2.32604167,8.409375 3.11770833,8.66666667 4,8.66666667 C4.88229167,8.66666667 5.67395833,8.409375 6.375,7.89583333 C7.07604167,7.38229167 7.55520833,6.70520833 7.8125,5.86458333 C7.86770833,5.690625 7.85416667,5.52291667 7.77083333,5.359375 Z' id='Path'/%3E%3Cpath d='M2.27604167,0.390625 C2.015625,0.130208333 1.70104167,-1.86517468e-14 1.33333333,-1.86517468e-14 C0.965625,-1.86517468e-14 0.651041667,0.130208333 0.390625,0.390625 C0.130208333,0.651041667 6.06625861e-13,0.965625 6.06625861e-13,1.33333333 C6.06625861e-13,1.70104167 0.130208333,2.015625 0.390625,2.27604167 C0.651041667,2.53645833 0.965625,2.66666667 1.33333333,2.66666667 C1.70104167,2.66666667 2.015625,2.53645833 2.27604167,2.27604167 C2.53645833,2.015625 2.66666667,1.70104167 2.66666667,1.33333333 C2.66666667,0.965625 2.53645833,0.651041667 2.27604167,0.390625 Z' id='Path'/%3E%3Cpath d='M7.609375,0.390625 C7.34895833,0.130208333 7.034375,-1.86517468e-14 6.66666667,-1.86517468e-14 C6.29895833,-1.86517468e-14 5.984375,0.130208333 5.72395833,0.390625 C5.46354167,0.651041667 5.33333333,0.965625 5.33333333,1.33333333 C5.33333333,1.70104167 5.46354167,2.015625 5.72395833,2.27604167 C5.984375,2.53645833 6.29895833,2.66666667 6.66666667,2.66666667 C7.034375,2.66666667 7.34895833,2.53645833 7.609375,2.27604167 C7.86979167,2.015625 8,1.70104167 8,1.33333333 C8,0.965625 7.86979167,0.651041667 7.609375,0.390625 Z' id='Path'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  }\n",
          ]))
      ),
      mo = Ra.c.div(
        no ||
          (no = Object(Ba.a)([
            "\n  position: absolute;\n  z-index: 1;\n  bottom: 36px;\n  right: 64px;\n  display: block;\n",
          ]))
      ),
      ho = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).onEmojiClick = function (
              n,
              t
            ) {
              var a = e.props,
                r = a.showEmojiPicker,
                o = a.changeTextInput,
                i = a.text,
                s = a.onIsTypingChange;
              t.preventDefault(),
                i ? (o(i + n.native), s(!0)) : (o(n.native), s(!0)),
                t.nativeEvent.shiftKey || r(!1);
              var l = document.querySelector(".sib__chatbox"),
                c =
                  l instanceof HTMLIFrameElement &&
                  l.contentDocument.querySelector(".input_text_editor");
              c &&
                (c.focus(),
                !t.nativeEvent.shiftKey &&
                  t.target instanceof window.HTMLInputElement &&
                  !t.target.id.includes("emoji-mart-search") &&
                  r(!1));
            }),
            (e.onGifClick = function (n) {
              var t = e.props,
                a = t.changeTextInput,
                r = t.sendMessageRequest,
                o = t.showGifPicker;
              a(n.original.url), o(!1), r();
            }),
            (e.handleClickOutside = function (n) {
              var t = e.props,
                a = t.showEmojiPicker,
                r = t.showGifPicker,
                o = i.a.findDOMNode(Object(co.a)(e)),
                s = n.target;
              !(s instanceof Node) || (o && o.contains(s)) || (a(!1), r(!1));
            }),
            (e.enableEmojiPicker = function () {
              var n = e.props,
                t = n.showEmojiPicker,
                a = n.showGifPicker;
              t(!n.isEmojiPickerEnabled), a(!1);
            }),
            (e.enableGifPicker = function () {
              var n = e.props,
                t = n.showEmojiPicker,
                a = n.showGifPicker,
                r = n.isGifPickerEnabled;
              t(!1), a(!r);
            }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                document.addEventListener("click", this.handleClickOutside, !0);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.removeEventListener(
                  "click",
                  this.handleClickOutside,
                  !0
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = this.props,
                  t = n.isEmojiPickerEnabled,
                  a = n.isGifPickerEnabled;
                return Object(Ha.jsxs)("div", {
                  children: [
                    Object(Ha.jsxs)("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        height: "2.5rem",
                      },
                      children: [
                        Object(Ha.jsx)(po, {
                          className: "emojiPicker",
                          onClick: function () {
                            return e.enableEmojiPicker();
                          },
                        }),
                        Object(Ha.jsx)(go, {
                          className: "gifPicker",
                          onClick: function () {
                            return e.enableGifPicker();
                          },
                        }),
                      ],
                    }),
                    t &&
                      Object(Ha.jsx)(mo, {
                        children: Object(Ha.jsx)(uo.a, {
                          onClick: function (n, t) {
                            return e.onEmojiClick(n, t);
                          },
                          native: !0,
                          emojiSize: 24,
                          perLine: 7,
                          showPreview: !1,
                          showSkinTones: !1,
                        }),
                      }),
                    a &&
                      Object(Ha.jsxs)("div", {
                        className: "gif__picker",
                        children: [
                          Object(Ha.jsx)(fo.a, {
                            apiKey: nt,
                            onSelected: function (n) {
                              return e.onGifClick(n);
                            },
                          }),
                          Object(Ha.jsxs)("div", {
                            className: "poweredby_giphy",
                            children: [
                              " ",
                              Object(Ha.jsx)("img", {
                                height: "12px",
                                src: "data:image/png;base64,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",
                                alt: "Powered by GIPHY",
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var bo,
      wo,
      yo = K(
        function (e) {
          return {
            text: jt(e),
            isEmojiPickerEnabled: Wt(e),
            isGifPickerEnabled: Ht(e),
          };
        },
        function (e) {
          return {
            changeTextInput: function (n) {
              return e(Ie(n));
            },
            showEmojiPicker: function (n) {
              return e(rn(n));
            },
            showGifPicker: function (n) {
              return e(on(n));
            },
            onIsTypingChange: function (n) {
              return e(Je(n));
            },
            sendMessageRequest: function () {
              return e(Ne());
            },
          };
        }
      )(Object(Da.d)(ho)),
      vo = Ra.c.div(
        bo ||
          (bo = Object(Ba.a)([
            "\n  align-items: flex-end;\n  background-color: ",
            ";\n  border-radius: 0 0 5px 5px;\n  border-width: 0px;\n  box-shadow: inset 0 1px 0 0 ",
            ";\n  display: flex;\n  justify-content: space-between;\n  min-height: fit-content;\n  width: 100%;\n",
          ])),
        function (e) {
          return e.theme.white;
        },
        function (e) {
          return e.theme.grey;
        }
      ),
      ko = Object(Ra.c)(io)(
        wo ||
          (wo = Object(Ba.a)([
            "\n  font-family: 'Roboto', sans-serif;\n  background: transparent;\n  border-width: 0px;\n  box-sizing: border-box;\n  color: ",
            ";\n  font-size: 14px;\n  line-height: 24px;\n  outline: none;\n  padding: 8px 16px;\n  resize: none;\n  text-align: left;\n  width: 100%;\n  &::placeholder {\n    color: ",
            ";\n  }\n",
          ])),
        function (e) {
          return e.theme.darkGrey;
        },
        function (e) {
          return e.theme.grey;
        }
      ),
      jo = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).handleChangeMessage =
              function (n) {
                e.props.onTextChange(n.currentTarget.value);
                var t = !e.isTextInputEmpty(),
                  a = n.currentTarget.value.trim().length > 0;
                t !== a && e.props.onIsTypingChange(a);
              }),
            (e.sendMessage = function () {
              e.props.sendMessageRequest();
            }),
            (e.isTextInputEmpty = function () {
              return !(e.props.currentMessageInputText.trim().length > 0);
            }),
            (e.onKeyPress = function (n) {
              var t = e.props.showEmojiPicker;
              "Enter" !== n.key ||
                n.nativeEvent.shiftKey ||
                (n.preventDefault(),
                t(!1),
                e.isTextInputEmpty() || e.sendMessage());
            }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                "" !== this.props.currentMessageInputText &&
                  this.props.onIsTypingChange(!0);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                "" !== this.props.currentMessageInputText &&
                  this.props.onIsTypingChange(!1);
              },
            },
            {
              key: "disableEmoji",
              value: function (e) {
                var n = this.props,
                  t = n.showEmojiPicker,
                  a = n.showGifPicker;
                e.preventDefault(),
                  e.target &&
                    e.target.className.length > 30 &&
                    !e.nativeEvent.shiftKey &&
                    (t(!1), a(!1));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = this.props.intl.formatMessage;
                return Object(Ha.jsxs)(vo, {
                  onClick: function (n) {
                    return e.disableEmoji(n);
                  },
                  children: [
                    Object(Ha.jsx)(ko, {
                      type: "text",
                      className: "input_text_editor",
                      maxRows: 8,
                      value: this.props.currentMessageInputText,
                      placeholder: n({ id: "chat.inputPlaceholder" }),
                      onChange: this.handleChangeMessage,
                      onKeyPress: this.onKeyPress,
                    }),
                    Object(Ha.jsx)(yo, {}),
                    Object(Ha.jsx)(lo, {
                      translationKey: "chat.send",
                      disabled: this.isTextInputEmpty(),
                      onClick: this.sendMessage,
                      isSendButton: !0,
                    }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.PureComponent);
    var xo,
      Oo,
      Co = K(
        function (e) {
          return {
            currentMessageInputText: Zt.getCurrentMessageInputText(e),
            isGifPickerEnabled: Ht(e),
          };
        },
        function (e) {
          return {
            onTextChange: function (n) {
              return e(Ie(n));
            },
            showEmojiPicker: function (n) {
              return e(rn(n));
            },
            sendMessageRequest: function () {
              return e(Ne());
            },
            onIsTypingChange: function (n) {
              return e(Je(n));
            },
            showGifPicker: function (n) {
              return e(on(n));
            },
          };
        }
      )(Object(Da.d)(jo)),
      Ao = Ra.c.div(
        xo ||
          (xo = Object(Ba.a)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 16px;\n  width: ",
            "px;\n  background-color: ",
            ";\n  border-radius: 8px;\n",
          ])),
        function (e) {
          return 8 * (e.unreadMessageCountDigits + 1);
        },
        function (e) {
          return e.theme.red;
        }
      );
    Ao.displayName = "NotificationCountBubble";
    var Eo = Ra.c.p(
      Oo ||
        (Oo = Object(Ba.a)([
          "\n  text-align: center;\n  margin: 0px;\n  color: ",
          ";\n  font-size: 12px;\n  line-height 14px;\n  font-family: 'Roboto';\n",
        ])),
      function (e) {
        return e.theme.white;
      }
    );
    Eo.displayName = "UnreadMessageCountNumber";
    var Po,
      So,
      To,
      Mo = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return Object(Ha.jsx)(Ao, {
                  unreadMessageCountDigits:
                    this.props.unreadMessagesCount.toString().length,
                  children: Object(Ha.jsx)(Eo, {
                    children: this.props.unreadMessagesCount,
                  }),
                });
              },
            },
          ]),
          t
        );
      })(a.Component),
      Io = t(135),
      zo = function (e) {
        return Object(Io.toArray)(e).reduce(function (e, n) {
          return "string" === typeof n ? e + n : e + n.props.children;
        }, "");
      },
      No = t(60),
      Lo = t.n(No),
      Do = function (e, n, t) {
        return Object(Ha.jsx)(
          "a",
          {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#0b0b0c" },
            children: n,
          },
          t
        );
      },
      Bo = function (e, n, t) {
        return Object(Ha.jsx)(
          "a",
          {
            href: e,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "white" },
            children: n,
          },
          t
        );
      },
      Ro = function (e) {
        return e.includes("giphy.com");
      },
      Fo = Ra.c.p(
        Po ||
          (Po = Object(Ba.a)([
            "\n  hyphens: auto;\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  max-width: 264px;\n  border-radius: 16px;\n  padding: 6px 16px 6px 16px;\n  display: inline-block;\n  cursor: default;\n  font-family: 'Roboto', sans-serif;\n  white-space: pre-line;\n  word-wrap: break-word;\n",
          ]))
      ),
      Wo = Ra.c.div(
        So ||
          (So = Object(Ba.a)([
            "\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n\n  p {\n    background-color: ",
            ";\n    padding: ",
            ";\n    border-radius: 1rem 0.1875rem 1rem 1rem !important;\n  }\n\n  ",
            " {\n    border-radius: 16px 0px;\n    &.isLeft {\n      border-radius: 3px 16px 16px 16px;\n      margin-left: 8px;\n      background-color: ",
            ";\n      padding: ",
            ";\n    }\n  }\n  &.isLeft {\n  }\n",
          ])),
        function (e) {
          return e.isGif ? "#ffffff !important" : e.theme.primaryColor;
        },
        function (e) {
          return e.isGif ? "6px 0px" : "6px 16px";
        },
        Fo,
        function (e) {
          return e.isGif ? "#ffffff" : e.theme.lightGrey;
        },
        function (e) {
          return e.isGif ? "6px 4px 6px 4px" : "6px 16px 6px 16px";
        }
      ),
      Ho = Ra.c.div(
        To ||
          (To = Object(Ba.a)([
            "\n  background-image: ",
            ";\n  background-size: cover;\n  background-position: center center;\n  height: 32px;\n  width: 32px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n",
          ])),
        function (e) {
          return "url(".concat(e.imageSrc, ")");
        }
      ),
      Go = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  n = e.operatorAvatarUrl,
                  t = e.companyAvatarUrl,
                  r = e.isOnLeftSide,
                  o = e.operatorName,
                  i = e.message;
                return Object(Ha.jsxs)(Wo, {
                  isGif: Ro(i.text),
                  children: [
                    r &&
                      (o
                        ? Object(Ha.jsx)(a.Fragment, {
                            children: Object(Ha.jsx)(Ho, {
                              imageSrc: n || pr,
                              "data-tip": !0,
                              "data-for": "operatorName",
                            }),
                          })
                        : Object(Ha.jsx)(Ho, {
                            imageSrc:
                              t ||
                              "data:image/png;base64,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",
                            alt: "chat",
                          })),
                    Object(Ha.jsx)(Lo.a, {
                      componentDecorator: "visitor" === i.sentBy ? Bo : Do,
                      children: Object(Ha.jsx)(Fo, {
                        className: r && "isLeft",
                        children: Ro(i.text)
                          ? Object(Ha.jsx)("span", {
                              children: Object(Ha.jsx)("img", {
                                alt: "gif",
                                src: i.text,
                                style: { maxWidth: "180px" },
                              }),
                            })
                          : zo(i.text),
                      }),
                    }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var Uo,
      qo,
      Vo,
      Zo,
      Yo,
      Ko,
      Xo,
      Jo = K(
        function (e) {
          return { companyAvatarUrl: Pt(e), operators: Ot(e) };
        },
        null,
        function (e, n, t) {
          var a = t.message.senderId,
            r = a && e.operators && e.operators[a];
          return Object(u.a)(
            Object(u.a)(Object(u.a)(Object(u.a)({}, e), n), t),
            {},
            { operatorAvatarUrl: r && r.avatar, operatorName: r && r.name }
          );
        }
      )(Go),
      Qo = Ra.c.p(
        Uo ||
          (Uo = Object(Ba.a)([
            "\n  height: 16px;\n  color: ",
            ";\n  font-family: Roboto;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: right;\n  margin: 0;\n",
          ])),
        function (e) {
          return e.theme.greyForInfo;
        }
      ),
      $o = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  n = e.message,
                  t = e.isFirstLine,
                  r = e.isOnLeftSide;
                return Object(Ha.jsxs)(a.Fragment, {
                  children: [
                    t
                      ? Object(Ha.jsx)(Jo, { message: n, isOnLeftSide: r })
                      : Object(Ha.jsx)(Lo.a, {
                          componentDecorator: "visitor" === n.sentBy ? Bo : Do,
                          children: Ro(n.text)
                            ? Object(Ha.jsx)("img", {
                                alt: "gif",
                                src: n.text,
                                style: {
                                  maxWidth: "180px",
                                  marginLeft: "40px",
                                  padding: "6px 4px",
                                },
                              })
                            : Object(Ha.jsx)(Fo, { children: zo(n.text) }),
                        }),
                    !n.sent &&
                      n.senderId &&
                      Object(Ha.jsx)(Qo, {
                        children: Object(Ha.jsx)(Da.a, { id: "chat.sending" }),
                      }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component),
      ei = Ra.c.div(
        qo ||
          (qo = Object(Ba.a)([
            "\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  min-height: fit-content;\n  width: 100%;\n  ",
            " {\n    background-color: ",
            ";\n    margin-left: 40px;\n  }\n",
          ])),
        Fo,
        function (e) {
          return e.theme.lightGrey;
        }
      ),
      ni = Ra.c.div(
        Vo ||
          (Vo = Object(Ba.a)([
            "\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  margin-bottom: 16px;\n  min-height: fit-content;\n  width: 100%;\n  ",
            " {\n    background-color: ",
            ";\n    color: ",
            ";\n  }\n",
          ])),
        Fo,
        function (e) {
          return e.theme.primaryColor;
        },
        function (e) {
          return e.theme.whiteMessageText;
        }
      ),
      ti = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                return this.props.isSentByOperator
                  ? Object(Ha.jsx)(ei, { children: this.props.children })
                  : Object(Ha.jsx)(ni, { children: this.props.children });
              },
            },
          ]),
          t
        );
      })(a.Component),
      ai = function (e, n) {
        return (
          !(!e && !n[0].senderId) &&
          !(!n[0].time || (e && !e[e.length - 1].time)) &&
          ((!e && !!n[0].senderId) ||
            (!!e && n[0].time - e[e.length - 1].time > 864e5))
        );
      },
      ri = function (e, n, t) {
        return n === t || e + t >= n - 48;
      },
      oi = t(18),
      ii = t.n(oi),
      si =
        (t(120),
        t(121),
        t(122),
        t(123),
        t(124),
        function (e, n, t) {
          var a = xn(n, t);
          return ii.a.locale(a), ii()(e).format("LL");
        }),
      li = function (e, n, t) {
        var a = xn(n, t);
        return ii.a.locale(a), ii()(e).format("LT");
      },
      ci = function (e) {
        var n = e.length && e[e.length - 1];
        return n && n.length ? n[n.length - 1] : null;
      },
      ui = function () {
        var e = { isTabActive: !1, visibilityChangeEventType: "" };
        return (
          "undefined" !== typeof document.hidden
            ? (e = {
                isTabActive: !document.hidden,
                visibilityChangeEventType: "visibilitychange",
              })
            : "undefined" !== typeof document.msHidden
            ? (e = {
                visibilityChangeEventType: "msvisibilitychange",
                isTabActive: !document.msHidden,
              })
            : "undefined" !== typeof document.webkitHidden &&
              (e = {
                visibilityChangeEventType: "webkitvisibilitychange",
                isTabActive: !document.webkitHidden,
              }),
          e
        );
      },
      _i = Ra.c.div(
        Zo ||
          (Zo = Object(Ba.a)([
            "\n  flex-grow: 1;\n  flex-direction: column;\n  display: flex;\n  padding: 16px;\n  overflow-y: ",
            ";\n",
          ])),
        function () {
          return window.MSInputMethodContext ? "scroll" : "auto";
        }
      ),
      di = Ra.c.p(
        Yo ||
          (Yo = Object(Ba.a)([
            "\n  align-self: center;\n  color: ",
            ";\n  font-family: Roboto;\n  font-size: 14px;\n  line-height: 16px;\n  margin-bottom: 16px;\n  margin-top: 8px;\n  text-align: center;\n",
          ])),
        function (e) {
          return e.theme.greyForInfo;
        }
      ),
      fi = Ra.c.p(
        Ko ||
          (Ko = Object(Ba.a)([
            "\n  color: ",
            ";\n  height: 16px;\n  font-family: Roboto;\n  font-size: 12px;\n  line-height: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-align: right;\n  &.isLeft {\n    text-align: left;\n    margin-left: 40px;\n  }\n",
          ])),
        function (e) {
          return e.theme.greyForInfo;
        }
      ),
      pi = Ra.c.div(
        Xo ||
          (Xo = Object(Ba.a)([
            "\n  -webkit-align-items: center;\n  align-items: center;\n  background: hsla(0, 0%, 100%, 0.9);\n  display: -webkit-flex;\n  display: flex;\n  height: 100%;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 100%;\n  & svg {\n    fill: #0092ff;\n    height: 2rem;\n    width: 2rem;\n    animation: indicator-spin 1.3s cubic-bezier(0.46, 0.35, 0.39, 0.85) infinite;\n  }\n  @keyframes indicator-spin {\n    0% {\n      transform: rotate(0deg);\n    }\n\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
          ]))
      ),
      gi = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).shouldScrollToBottom = !0),
            (e.visibilityChangeEventType = ""),
            (e.acknowledgeMessageIfVisible = function () {
              if (
                (ui() || {}).isTabActive &&
                e.props.chatWindowVisible &&
                e.container &&
                e.props.currentConversationId
              ) {
                var n = ci(e.props.messagesGroups);
                ri(
                  e.container.scrollTop,
                  e.container.scrollHeight,
                  e.container.clientHeight
                ) &&
                  n &&
                  "operator" === n.sentBy &&
                  !n.read &&
                  e.props.readMessage(n.time, n.sentBy);
              }
            }),
            (e.updateShouldScrollToBottom = function (n) {
              e.shouldScrollToBottom = n;
            }),
            (e.onScroll = function () {
              ri(
                e.container.scrollTop,
                e.container.scrollHeight,
                e.container.clientHeight
              )
                ? (e.updateShouldScrollToBottom(!0),
                  e.acknowledgeMessageIfVisible())
                : e.updateShouldScrollToBottom(!1);
              var n = e.props.messagesGroups ? e.props.messagesGroups[0] : null;
              !e.props.isMessageUpdate &&
                0 === e.container.scrollTop &&
                n &&
                n[0].id &&
                e.props.handleThreadPagination(
                  n[0].id,
                  e.props.currentConversationId,
                  e.props.messagesGroups
                );
            }),
            (e.scrollToBottom = function () {
              for (var n = 0; n < 3; n++)
                setTimeout(function () {
                  e.container &&
                    e.messagesEnd &&
                    (e.container.scrollTop = e.messagesEnd.offsetTop);
                }, 1e3);
            }),
            (e.renderTime = function (n) {
              var t = e.props,
                a = t.defaultLanguage,
                r = t.languages;
              if (n.senderId && n.time)
                return n.received
                  ? Object(Ha.jsx)(fi, {
                      className: "operator" === n.sentBy && "isLeft",
                      children: li(n.time, a, r),
                    })
                  : void 0;
            }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                var e = (ui() || {}).visibilityChangeEventType;
                (this.visibilityChangeEventType = e),
                  this.acknowledgeMessageIfVisible(),
                  document.addEventListener(
                    this.visibilityChangeEventType,
                    this.acknowledgeMessageIfVisible
                  ),
                  this.container &&
                    (this.container.addEventListener("scroll", this.onScroll),
                    this.scrollToBottom());
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                document.removeEventListener(
                  this.visibilityChangeEventType,
                  this.acknowledgeMessageIfVisible
                ),
                  document.removeEventListener("scroll", this.onScroll);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.acknowledgeMessageIfVisible(),
                  this.shouldScrollToBottom && this.scrollToBottom();
              },
            },
            {
              key: "disableEmoji",
              value: function (e) {
                var n = this.props,
                  t = n.showEmojiPicker,
                  a = n.isEmojiPickerEnabled,
                  r = n.showGifPicker,
                  o = n.isGifPickerEnabled;
                ((!e.nativeEvent.shiftKey &&
                  e.target instanceof window.HTMLInputElement &&
                  !e.target.className.includes("emojiPicker")) ||
                  (!e.nativeEvent.shiftKey && a)) &&
                  t(!1),
                  ((e.target instanceof window.HTMLInputElement &&
                    !e.target.className.includes("gifPicker")) ||
                    o) &&
                    r(!1);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  n = this.props,
                  t = n.defaultLanguage,
                  r = n.languages,
                  o = n.isMessageUpdate;
                return Object(Ha.jsxs)(_i, {
                  onClick: function (n) {
                    return e.disableEmoji(n);
                  },
                  ref: function (n) {
                    e.container = n;
                  },
                  children: [
                    o &&
                      Object(Ha.jsx)(pi, {
                        children: Object(Ha.jsx)("svg", {
                          viewBox: "0 0 512 512",
                          children: Object(Ha.jsx)("path", {
                            d: "M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z",
                          }),
                        }),
                      }),
                    this.props.currentConversationId &&
                      this.props.messagesGroups.map(function (n, o) {
                        return Object(Ha.jsxs)(
                          a.Fragment,
                          {
                            children: [
                              ai(e.props.messagesGroups[o - 1], n) &&
                                n[0].time &&
                                Object(Ha.jsx)(di, {
                                  children: si(n[0].time, t, r),
                                }),
                              Object(Ha.jsxs)(ti, {
                                isSentByOperator: "operator" === n[0].sentBy,
                                children: [
                                  n.map(function (e, t) {
                                    return Object(Ha.jsx)(
                                      "div",
                                      {
                                        children: Object(Ha.jsx)($o, {
                                          message: e,
                                          isOnLeftSide:
                                            "operator" === n[0].sentBy,
                                          isFirstLine: 0 === t,
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                  e.renderTime(n[n.length - 1]),
                                ],
                              }),
                            ],
                          },
                          o
                        );
                      }),
                    Object(Ha.jsx)("div", {
                      ref: function (n) {
                        e.messagesEnd = n;
                      },
                    }),
                  ],
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var mi,
      hi,
      bi,
      wi = K(
        function (e) {
          var n = Zt.getCurrentConversationId(e);
          return {
            currentConversationId: n,
            messagesGroups: Zt.getConversationMessagesGroupsById(e, n),
            defaultLanguage: Zt.getDefaultLanguage(e),
            languages: Zt.getLanguages(e),
            isMessageUpdate: Ft(e, "isMessageUpdate"),
            isEmojiPickerEnabled: Wt(e),
            isGifPickerEnabled: Ht(e),
          };
        },
        function (e) {
          return {
            readMessage: function (n, t) {
              e(De(n, t));
            },
            handleThreadPagination: function (n, t, a) {
              e(tn(n, t, a));
            },
            showEmojiPicker: function (n) {
              return e(rn(n));
            },
            showGifPicker: function (n) {
              return e(on(n));
            },
          };
        }
      )(gi),
      yi = function (e, n) {
        var t = e === document.title ? n : e;
        document.title = t;
      },
      vi = function (e, n) {
        return setInterval(yi, 2e3, e, n);
      },
      ki = function (e, n) {
        return clearInterval(n), (document.title = e), null;
      },
      ji = t(84),
      xi = t.n(ji),
      Oi = Object(Ra.c)(xi.a)(
        mi ||
          (mi = Object(Ba.a)([
            "\n  border: none;\n  width: 360px;\n  box-shadow: 0 5px 40px 0 rgba(0, 0, 0, 0.16);\n  position: fixed;\n  min-height: 250px;\n  -webkit-overflow-scrolling: touch;\n  bottom: 98px;\n\n  @media screen and (max-width: 869px) and (min-width: 120px) {\n    bottom: 0px;\n    height: calc(100% - 0px);\n    width: calc(100% - 0px);\n    right: 0px;\n  }\n\n  @media screen and (min-width: 869px) {\n    max-height: 506px;\n    height: calc(100% - 122px);\n    right: 24px;\n  }\n\n  @media screen and (max-height: 520px) {\n    height: calc(100% - 0px);\n  }\n",
          ]))
      ),
      Ci = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                var e = this.props.children;
                return Object(Ha.jsx)(Oi, {
                  className: "sib__chatbox",
                  open: this.props.chatWindowVisible,
                  children: Object(Ha.jsx)(ji.FrameContextConsumer, {
                    children: function (n) {
                      return Object(Ha.jsx)(Ra.a, {
                        target: n.document.head,
                        children: Object(Ha.jsx)(a.Fragment, { children: e }),
                      });
                    },
                  }),
                });
              },
            },
          ]),
          t
        );
      })(a.Component),
      Ai = Ra.c.div(
        hi ||
          (hi = Object(Ba.a)([
            "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  border-radius: 5px;\n  background-color: ",
            ";\n",
          ])),
        function (e) {
          return e.theme.white;
        }
      );
    Ai.displayName = "ChatWindowContainer";
    var Ei = Ra.c.div(
      bi ||
        (bi = Object(Ba.a)([
          "\n  width: 56px;\n  height: 56px;\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  display: block;\n  @media screen and (max-width: 869px) and (min-width: 120px) {\n    display: ",
          ";\n  }\n",
        ])),
      function (e) {
        return e.hide && "none";
      }
    );
    Ei.displayName = "ChatBubbleWrapper";
    var Pi = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.loadChat();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                var e = this.props.intl.formatMessage;
                if (this.props.unreadMessagesCount > 0) {
                  if (!this.intervalId) {
                    var n = this.props.currentOperatorName
                        ? e(
                            { id: "chat.notificationTitle" },
                            { operatorName: this.props.currentOperatorName }
                          )
                        : e({ id: "chat.defaultNotificationTitle" }),
                      t = vi(this.props.initialPageTitle, n);
                    this.intervalId = t;
                  }
                } else
                  this.intervalId &&
                    (this.intervalId = ki(
                      this.props.initialPageTitle,
                      this.intervalId
                    ));
              },
            },
            {
              key: "render",
              value: function () {
                var e = this;
                return this.props.shouldShowChat
                  ? Object(Ha.jsxs)(a.Fragment, {
                      children: [
                        this.props.chatWindowVisible &&
                          Object(Ha.jsxs)(Ci, {
                            title: "Chatbox",
                            scrolling: "no",
                            chatWindowVisible: this.props.chatWindowVisible,
                            children: [
                              Object(Ha.jsx)("style", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    "\n            @font-face{\n              font-family:'Roboto';\n              src:url('https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff') format('woff'),\n                  url('https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2') format('woff2');\n              }\n            body {\n              height: 100vh;\n              margin: 0;\n            }\n            .frame-content, .frame-root {\n              height: 100%;\n            }\n            * {\n              box-sizing: border-box;\n            }\n            .emoji-mart,\n            .emoji-mart * {\n              box-sizing: border-box;\n              line-height: 1.15;\n            }\n\n            .emoji-mart {\n              font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", sans-serif;\n              font-size: 16px;\n              display: inline-block;\n              color: #222427;\n              border: 1px solid #d9d9d9;\n              border-radius: 5px;\n              background: #fff;\n            }\n\n            .emoji-mart .emoji-mart-emoji {\n              padding: 6px;\n            }\n\n            .emoji-mart-bar {\n              border: 0 solid #d9d9d9;\n            }\n            .emoji-mart-bar:first-child {\n              border-bottom-width: 1px;\n              border-top-left-radius: 5px;\n              border-top-right-radius: 5px;\n            }\n            .emoji-mart-bar:last-child {\n              border-top-width: 1px;\n              border-bottom-left-radius: 5px;\n              border-bottom-right-radius: 5px;\n            }\n\n            .emoji-mart-anchors {\n              display: flex;\n              flex-direction: row;\n              justify-content: space-between;\n              padding: 0 6px;\n              line-height: 0;\n            }\n\n            .emoji-mart-anchor {\n              position: relative;\n              display: block;\n              flex: 1 1 auto;\n              color: #858585;\n              text-align: center;\n              padding: 12px 4px;\n              overflow: hidden;\n              transition: color .1s ease-out;\n              margin: 0;\n              box-shadow: none;\n              background: none;\n              border: none;\n            }\n            .emoji-mart-anchor:focus { outline: 0 }\n            .emoji-mart-anchor:hover,\n            .emoji-mart-anchor:focus,\n            .emoji-mart-anchor-selected {\n              color: #464646;\n            }\n\n            .emoji-mart-anchor-selected .emoji-mart-anchor-bar {\n              bottom: 0;\n            }\n\n            .emoji-mart-anchor-bar {\n              position: absolute;\n              bottom: -3px; left: 0;\n              width: 100%; height: 3px;\n              background-color: #464646;\n            }\n\n            .emoji-mart-anchors i {\n              display: inline-block;\n              width: 100%;\n              max-width: 22px;\n            }\n\n            .emoji-mart-anchors svg,\n            .emoji-mart-anchors img {\n              fill: currentColor;\n              height: 18px;\n              width: 18px;\n            }\n\n            .emoji-mart-scroll {\n              overflow-y: scroll;\n              overflow-x: hidden;\n              height: 270px;\n              padding: 0 6px 6px 6px;\n              will-change: transform; /* avoids \"repaints on scroll\" in mobile Chrome */\n            }\n\n            .emoji-mart-search {\n              margin-top: 6px;\n              padding: 0 6px;\n              position: relative;\n            }\n\n            .emoji-mart-search input {\n              font-size: 16px;\n              display: block;\n              width: 100%;\n              padding: 5px 25px 6px 10px;\n              border-radius: 5px;\n              border: 1px solid #d9d9d9;\n              outline: 0;\n            }\n\n            .emoji-mart-search input,\n            .emoji-mart-search input::-webkit-search-decoration,\n            .emoji-mart-search input::-webkit-search-cancel-button,\n            .emoji-mart-search input::-webkit-search-results-button,\n            .emoji-mart-search input::-webkit-search-results-decoration {\n              /* remove webkit/blink styles for <input type=\"search\">\n              * via https://stackoverflow.com/a/9422689 */\n              -webkit-appearance: none;\n            }\n\n            .emoji-mart-search-icon {\n              position: absolute;\n              top: 7px;\n              right: 11px;\n              z-index: 2;\n              padding: 2px 5px 1px;\n              border: none;\n              background: none;\n            }\n\n            .emoji-mart-category .emoji-mart-emoji span {\n              z-index: 1;\n              position: relative;\n              text-align: center;\n              cursor: default;\n            }\n\n            .emoji-mart-category .emoji-mart-emoji:hover:before {\n              z-index: 0;\n              content: \"\";\n              position: absolute;\n              top: 0; left: 0;\n              width: 100%; height: 100%;\n              background-color: #f4f4f4;\n              border-radius: 100%;\n            }\n\n            .emoji-mart-category-label {\n              z-index: 2;\n              position: relative;\n              position: -webkit-sticky;\n              position: sticky;\n              top: 0;\n            }\n\n            .emoji-mart-category-label span {\n              display: block;\n              width: 100%;\n              font-weight: 500;\n              padding: 5px 6px;\n              background-color: #fff;\n              background-color: rgba(255, 255, 255, .95);\n            }\n\n            .emoji-mart-category-list {\n              margin: 0;\n              padding: 0;\n            }\n\n            .emoji-mart-category-list li {\n              list-style: none;\n              margin: 0;\n              padding: 0;\n              display: inline-block;\n            }\n\n            .emoji-mart-emoji {\n              position: relative;\n              display: inline-block;\n              font-size: 0;\n              margin: 0;\n              padding: 0;\n              border: none;\n              background: none;\n              box-shadow: none;\n            }\n\n            .emoji-mart-emoji-native {\n              font-family: \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Segoe UI\", \"Apple Color Emoji\", \"Twemoji Mozilla\", \"Noto Color Emoji\", \"Android Emoji\";\n            }\n\n            .emoji-mart-no-results {\n              font-size: 14px;\n              text-align: center;\n              padding-top: 70px;\n              color: #858585;\n            }\n            .emoji-mart-no-results-img {\n              display: block;\n              margin-left: auto;\n              margin-right: auto;\n              width: 50%;\n            }\n            .emoji-mart-no-results .emoji-mart-category-label {\n              display: none;\n            }\n            .emoji-mart-no-results .emoji-mart-no-results-label {\n              margin-top: .2em;\n            }\n            .emoji-mart-no-results .emoji-mart-emoji:hover:before {\n              content: none;\n            }\n\n            .emoji-mart-preview {\n              position: relative;\n              height: 70px;\n            }\n\n            .emoji-mart-preview-emoji,\n            .emoji-mart-preview-data,\n            .emoji-mart-preview-skins {\n              position: absolute;\n              top: 50%;\n              transform: translateY(-50%);\n            }\n\n            .emoji-mart-preview-emoji {\n              left: 12px;\n            }\n\n            .emoji-mart-preview-data {\n              left: 68px; right: 12px;\n              word-break: break-all;\n            }\n\n            .emoji-mart-preview-skins {\n              right: 30px;\n              text-align: right;\n            }\n\n            .emoji-mart-preview-skins.custom {\n              right: 10px;\n              text-align: right;\n            }\n\n            .emoji-mart-preview-name {\n              font-size: 14px;\n            }\n\n            .emoji-mart-preview-shortname {\n              font-size: 12px;\n              color: #888;\n            }\n            .emoji-mart-preview-shortname + .emoji-mart-preview-shortname,\n            .emoji-mart-preview-shortname + .emoji-mart-preview-emoticon,\n            .emoji-mart-preview-emoticon + .emoji-mart-preview-emoticon {\n              margin-left: .5em;\n            }\n\n            .emoji-mart-preview-emoticon {\n              font-size: 11px;\n              color: #bbb;\n            }\n\n            .emoji-mart-title span {\n              display: inline-block;\n              vertical-align: middle;\n            }\n\n            .emoji-mart-title .emoji-mart-emoji {\n              padding: 0;\n            }\n\n            .emoji-mart-title-label {\n              color: #999A9C;\n              font-size: 26px;\n              font-weight: 300;\n            }\n\n            .emoji-mart-skin-swatches {\n              font-size: 0;\n              padding: 2px 0;\n              border: 1px solid #d9d9d9;\n              border-radius: 12px;\n              background-color: #fff;\n            }\n\n            .emoji-mart-skin-swatches.custom {\n              font-size: 0;\n              border: none;\n              background-color: #fff;\n            }\n\n            .emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch {\n              width: 16px;\n              padding: 0 2px;\n            }\n\n            .emoji-mart-skin-swatches.opened .emoji-mart-skin-swatch.selected:after {\n              opacity: .75;\n            }\n\n            .emoji-mart-skin-swatch {\n              display: inline-block;\n              width: 0;\n              vertical-align: middle;\n              transition-property: width, padding;\n              transition-duration: .125s;\n              transition-timing-function: ease-out;\n            }\n\n            .emoji-mart-skin-swatch:nth-child(1) { transition-delay: 0s }\n            .emoji-mart-skin-swatch:nth-child(2) { transition-delay: .03s }\n            .emoji-mart-skin-swatch:nth-child(3) { transition-delay: .06s }\n            .emoji-mart-skin-swatch:nth-child(4) { transition-delay: .09s }\n            .emoji-mart-skin-swatch:nth-child(5) { transition-delay: .12s }\n            .emoji-mart-skin-swatch:nth-child(6) { transition-delay: .15s }\n\n            .emoji-mart-skin-swatch.selected {\n              position: relative;\n              width: 16px;\n              padding: 0 2px;\n            }\n\n            .emoji-mart-skin-swatch.selected:after {\n              content: \"\";\n              position: absolute;\n              top: 50%; left: 50%;\n              width: 4px; height: 4px;\n              margin: -2px 0 0 -2px;\n              background-color: #fff;\n              border-radius: 100%;\n              pointer-events: none;\n              opacity: 0;\n              transition: opacity .2s ease-out;\n            }\n\n            .emoji-mart-skin-swatch.custom {\n              display: inline-block;\n              width: 0;\n              height: 38px;\n              overflow: hidden;\n              vertical-align: middle;\n              transition-property: width, height;\n              transition-duration: .125s;\n              transition-timing-function: ease-out;\n              cursor: default;\n            }\n\n            .emoji-mart-skin-swatch.custom.selected {\n              position: relative;\n              width: 36px;\n              height: 38px;\n              padding: 0 2px 0 0;\n            }\n\n            .emoji-mart-skin-swatch.custom.selected:after {\n              content: \"\";\n              width: 0;\n              height: 0;\n            }\n\n            .emoji-mart-skin-swatches.custom .emoji-mart-skin-swatch.custom:hover {\n              background-color: #f4f4f4;\n              border-radius: 10%;\n            }\n\n            .emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom {\n              width: 36px;\n              height: 38px;\n              padding: 0 2px 0 0;\n            }\n\n            .emoji-mart-skin-swatches.custom.opened .emoji-mart-skin-swatch.custom.selected:after {\n              opacity: .75;\n            }\n\n            .emoji-mart-skin-text.opened {\n              display: inline-block;\n              vertical-align: middle;\n              text-align: left;\n              color: #888;\n              font-size: 11px;\n              padding: 5px 2px;\n              width: 95px;\n              height: 40px;\n              border-radius: 10%;\n              background-color: #fff;\n            }\n\n            .emoji-mart-skin {\n              display: inline-block;\n              width: 100%;\n              padding-top: 100%;\n              max-width: 12px;\n              border-radius: 100%;\n            }\n\n            .emoji-mart-skin-tone-1 { background-color: #ffc93a }\n            .emoji-mart-skin-tone-2 { background-color: #fadcbc }\n            .emoji-mart-skin-tone-3 { background-color: #e0bb95 }\n            .emoji-mart-skin-tone-4 { background-color: #bf8f68 }\n            .emoji-mart-skin-tone-5 { background-color: #9b643d }\n            .emoji-mart-skin-tone-6 { background-color: #594539 }\n\n            /* For screenreaders only, via https://stackoverflow.com/a/19758620 */\n            .emoji-mart-sr-only {\n              position: absolute;\n              width: 1px;\n              height: 1px;\n              padding: 0;\n              margin: -1px;\n              overflow: hidden;\n              clip: rect(0, 0, 0, 0);\n              border: 0;\n            }\n\n            /*\n            * Dark mode styles\n            */\n\n            .emoji-mart-dark {\n              color: #fff;\n              border-color: #555453;\n              background-color: #222;\n            }\n\n            .emoji-mart-dark .emoji-mart-bar {\n              border-color: #555453;\n            }\n\n            .emoji-mart-dark .emoji-mart-search input {\n              color: #fff;\n              border-color: #555453;\n              background-color: #2f2f2f;\n            }\n\n            .emoji-mart-dark .emoji-mart-search-icon svg {\n              fill: #fff;\n            }\n\n            .emoji-mart-dark .emoji-mart-category .emoji-mart-emoji:hover:before {\n              background-color: #444;\n            }\n\n            .emoji-mart-dark .emoji-mart-category-label span {\n              background-color: #222;\n              color: #fff;\n            }\n\n            .emoji-mart-dark .emoji-mart-skin-swatches {\n              border-color: #555453;\n              background-color: #222;\n            }\n\n            .emoji-mart-dark .emoji-mart-anchor:hover,\n            .emoji-mart-dark .emoji-mart-anchor:focus,\n            .emoji-mart-dark .emoji-mart-anchor-selected {\n              color: #bfbfbf;\n            }\n\n            .emoji-mart-emoji span, .emoji-mart-anchor-icon, .emoji-mart-search {\n              cursor: pointer !important;\n              pointer-events: all;\n            }\n\n            .emoji-mart-scroll {\n              -webkit-overflow-scrolling: touch;\n            }\n\n            .emojiPicker {\n              background-image: url(\"data:image/svg+xml,%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EShape%3C/title%3E%3Cg id='Mobile_chatbox' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='360---mobile_chat+landscape' transform='translate(-556.000000, -332.000000)' fill='%238492A6'%3E%3Cg id='Answer' transform='translate(0.000000, 320.000000)'%3E%3Cg id='ASK' transform='translate(16.000000, 8.000000)'%3E%3Cpath d='M551.770833,13.359375 C551.6875,13.1958333 551.559375,13.0864583 551.385417,13.03125 C551.211458,12.9760417 551.041667,12.9895833 550.875,13.0729167 C550.708333,13.15625 550.596875,13.2885417 550.541667,13.46875 C550.367708,14.0239583 550.046875,14.4739583 549.578125,14.8177083 C549.109375,15.1614583 548.583333,15.3333333 548,15.3333333 C547.416667,15.3333333 546.890625,15.1614583 546.421875,14.8177083 C545.953125,14.4739583 545.632292,14.0239583 545.458333,13.46875 C545.403125,13.2885417 545.29375,13.15625 545.130208,13.0729167 C544.966667,12.9895833 544.798958,12.9760417 544.625,13.03125 C544.444792,13.0864583 544.3125,13.1958333 544.229167,13.359375 C544.145833,13.5229167 544.132292,13.690625 544.1875,13.8645833 C544.444792,14.7052083 544.923958,15.3822917 545.625,15.8958333 C546.326042,16.409375 547.117708,16.6666667 548,16.6666667 C548.882292,16.6666667 549.673958,16.409375 550.375,15.8958333 C551.076042,15.3822917 551.555208,14.7052083 551.8125,13.8645833 C551.867708,13.690625 551.854167,13.5229167 551.770833,13.359375 Z M546.276042,8.390625 C546.015625,8.13020833 545.701042,8 545.333333,8 C544.965625,8 544.651042,8.13020833 544.390625,8.390625 C544.130208,8.65104167 544,8.965625 544,9.33333333 C544,9.70104167 544.130208,10.015625 544.390625,10.2760417 C544.651042,10.5364583 544.965625,10.6666667 545.333333,10.6666667 C545.701042,10.6666667 546.015625,10.5364583 546.276042,10.2760417 C546.536458,10.015625 546.666667,9.70104167 546.666667,9.33333333 C546.666667,8.965625 546.536458,8.65104167 546.276042,8.390625 Z M551.609375,8.390625 C551.348958,8.13020833 551.034375,8 550.666667,8 C550.298958,8 549.984375,8.13020833 549.723958,8.390625 C549.463542,8.65104167 549.333333,8.965625 549.333333,9.33333333 C549.333333,9.70104167 549.463542,10.015625 549.723958,10.2760417 C549.984375,10.5364583 550.298958,10.6666667 550.666667,10.6666667 C551.034375,10.6666667 551.348958,10.5364583 551.609375,10.2760417 C551.869792,10.015625 552,9.70104167 552,9.33333333 C552,8.965625 551.869792,8.65104167 551.609375,8.390625 Z M554.135417,14.5885417 C553.78125,15.4114583 553.307292,16.1197917 552.713542,16.7135417 C552.119792,17.3072917 551.411458,17.78125 550.588542,18.1354167 C549.765625,18.4895833 548.903125,18.6666667 548,18.6666667 C547.096875,18.6666667 546.234375,18.4895833 545.411458,18.1354167 C544.588542,17.78125 543.880208,17.3072917 543.286458,16.7135417 C542.692708,16.1197917 542.21875,15.4114583 541.864583,14.5885417 C541.510417,13.765625 541.333333,12.903125 541.333333,12 C541.333333,11.096875 541.510417,10.234375 541.864583,9.41145833 C542.21875,8.58854167 542.692708,7.88020833 543.286458,7.28645833 C543.880208,6.69270833 544.588542,6.21875 545.411458,5.86458333 C546.234375,5.51041667 547.096875,5.33333333 548,5.33333333 C548.903125,5.33333333 549.765625,5.51041667 550.588542,5.86458333 C551.411458,6.21875 552.119792,6.69270833 552.713542,7.28645833 C553.307292,7.88020833 553.78125,8.58854167 554.135417,9.41145833 C554.489583,10.234375 554.666667,11.096875 554.666667,12 C554.666667,12.903125 554.489583,13.765625 554.135417,14.5885417 Z M554.927083,7.984375 C554.211458,6.75833333 553.241667,5.78854167 552.015625,5.07291667 C550.789583,4.35729167 549.451042,4 548,4 C546.548958,4 545.210417,4.35729167 543.984375,5.07291667 C542.758333,5.78854167 541.788542,6.75833333 541.072917,7.984375 C540.357292,9.21041667 540,10.5489583 540,12 C540,13.4510417 540.357292,14.7895833 541.072917,16.015625 C541.788542,17.2416667 542.758333,18.2114583 543.984375,18.9270833 C545.210417,19.6427083 546.548958,20 548,20 C549.451042,20 550.789583,19.6427083 552.015625,18.9270833 C553.241667,18.2114583 554.211458,17.2416667 554.927083,16.015625 C555.642708,14.7895833 556,13.4510417 556,12 C556,10.5489583 555.642708,9.21041667 554.927083,7.984375 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");  \n            }\n            \n            .gif__picker input {\n              border: 1px solid #ddd;\n              border-radius: 2px;\n              color: inherit;\n              height: auto;\n              line-height: 1.2;\n              width: 93%;\n              margin: 0 auto;\n              display: block;\n              margin-top: 16px;\n            }\n            \n            .gif__picker {\n              position: absolute;\n              width: 250px;\n              z-index: 1;\n              bottom: 41px;\n              right: 64px;\n              background: white;\n              box-shadow: 0px 3px 5px #BFBDBD;\n              border: 1px solid #f1f1f1;\n            }\n            \n            .gif__picker .image-picker {\n              width: 100%\n            }\n\n            .gif__picker div:nth-child(1) div {\n              flex-direction: row;\n              flex-wrap: wrap;\n              overflow-y: scroll;\n              height: 250px;\n              padding: .5rem;\n            }\n            \n            .gif__picker input {\n              padding: .5rem;\n              margin-bottom: 0rem;\n            }\n            \n            .gif__picker .giphy-gif {\n              width: 114px;\n              height: 90px;\n              margin: -2px 1px 0px 1px;\n              cursor: pointer;\n            }\n            \n            .close-picker {\n              display: none;\n            }\n            \n            @media screen and (max-width: 869px) and (orientation: landscape) {\n              .emoji-mart-scroll, .gif__picker div:nth-child(1) div {\n                height: 150px;\n              }\n            }\n\n            @media not all and (pointer: coarse) {\n              .emojiPicker:hover {\n                background-image: url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EShape%3C/title%3E%3Cg id='Mobile_chatbox' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='360---mobile_chat+landscape' transform='translate(-556.000000, -332.000000)' fill='%231F2D3D'%3E%3Cg id='Answer' transform='translate(0.000000, 320.000000)'%3E%3Cg id='ASK' transform='translate(16.000000, 8.000000)'%3E%3Cpath d='M551.770833,13.359375 C551.6875,13.1958333 551.559375,13.0864583 551.385417,13.03125 C551.211458,12.9760417 551.041667,12.9895833 550.875,13.0729167 C550.708333,13.15625 550.596875,13.2885417 550.541667,13.46875 C550.367708,14.0239583 550.046875,14.4739583 549.578125,14.8177083 C549.109375,15.1614583 548.583333,15.3333333 548,15.3333333 C547.416667,15.3333333 546.890625,15.1614583 546.421875,14.8177083 C545.953125,14.4739583 545.632292,14.0239583 545.458333,13.46875 C545.403125,13.2885417 545.29375,13.15625 545.130208,13.0729167 C544.966667,12.9895833 544.798958,12.9760417 544.625,13.03125 C544.444792,13.0864583 544.3125,13.1958333 544.229167,13.359375 C544.145833,13.5229167 544.132292,13.690625 544.1875,13.8645833 C544.444792,14.7052083 544.923958,15.3822917 545.625,15.8958333 C546.326042,16.409375 547.117708,16.6666667 548,16.6666667 C548.882292,16.6666667 549.673958,16.409375 550.375,15.8958333 C551.076042,15.3822917 551.555208,14.7052083 551.8125,13.8645833 C551.867708,13.690625 551.854167,13.5229167 551.770833,13.359375 Z M546.276042,8.390625 C546.015625,8.13020833 545.701042,8 545.333333,8 C544.965625,8 544.651042,8.13020833 544.390625,8.390625 C544.130208,8.65104167 544,8.965625 544,9.33333333 C544,9.70104167 544.130208,10.015625 544.390625,10.2760417 C544.651042,10.5364583 544.965625,10.6666667 545.333333,10.6666667 C545.701042,10.6666667 546.015625,10.5364583 546.276042,10.2760417 C546.536458,10.015625 546.666667,9.70104167 546.666667,9.33333333 C546.666667,8.965625 546.536458,8.65104167 546.276042,8.390625 Z M551.609375,8.390625 C551.348958,8.13020833 551.034375,8 550.666667,8 C550.298958,8 549.984375,8.13020833 549.723958,8.390625 C549.463542,8.65104167 549.333333,8.965625 549.333333,9.33333333 C549.333333,9.70104167 549.463542,10.015625 549.723958,10.2760417 C549.984375,10.5364583 550.298958,10.6666667 550.666667,10.6666667 C551.034375,10.6666667 551.348958,10.5364583 551.609375,10.2760417 C551.869792,10.015625 552,9.70104167 552,9.33333333 C552,8.965625 551.869792,8.65104167 551.609375,8.390625 Z M554.135417,14.5885417 C553.78125,15.4114583 553.307292,16.1197917 552.713542,16.7135417 C552.119792,17.3072917 551.411458,17.78125 550.588542,18.1354167 C549.765625,18.4895833 548.903125,18.6666667 548,18.6666667 C547.096875,18.6666667 546.234375,18.4895833 545.411458,18.1354167 C544.588542,17.78125 543.880208,17.3072917 543.286458,16.7135417 C542.692708,16.1197917 542.21875,15.4114583 541.864583,14.5885417 C541.510417,13.765625 541.333333,12.903125 541.333333,12 C541.333333,11.096875 541.510417,10.234375 541.864583,9.41145833 C542.21875,8.58854167 542.692708,7.88020833 543.286458,7.28645833 C543.880208,6.69270833 544.588542,6.21875 545.411458,5.86458333 C546.234375,5.51041667 547.096875,5.33333333 548,5.33333333 C548.903125,5.33333333 549.765625,5.51041667 550.588542,5.86458333 C551.411458,6.21875 552.119792,6.69270833 552.713542,7.28645833 C553.307292,7.88020833 553.78125,8.58854167 554.135417,9.41145833 C554.489583,10.234375 554.666667,11.096875 554.666667,12 C554.666667,12.903125 554.489583,13.765625 554.135417,14.5885417 Z M554.927083,7.984375 C554.211458,6.75833333 553.241667,5.78854167 552.015625,5.07291667 C550.789583,4.35729167 549.451042,4 548,4 C546.548958,4 545.210417,4.35729167 543.984375,5.07291667 C542.758333,5.78854167 541.788542,6.75833333 541.072917,7.984375 C540.357292,9.21041667 540,10.5489583 540,12 C540,13.4510417 540.357292,14.7895833 541.072917,16.015625 C541.788542,17.2416667 542.758333,18.2114583 543.984375,18.9270833 C545.210417,19.6427083 546.548958,20 548,20 C549.451042,20 550.789583,19.6427083 552.015625,18.9270833 C553.241667,18.2114583 554.211458,17.2416667 554.927083,16.015625 C555.642708,14.7895833 556,13.4510417 556,12 C556,10.5489583 555.642708,9.21041667 554.927083,7.984375 Z' id='Shape'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n              }\n            }\n\n            .poweredby_giphy {\n              text-align: right;\n              margin-right: 0.25rem;\n              margin-top: 0.25rem;\n            }",
                                },
                              }),
                              Object(Ha.jsxs)(Ai, {
                                children: [
                                  Object(Ha.jsx)(Wr, {}),
                                  Object(Ha.jsx)(wi, {
                                    chatWindowVisible:
                                      this.props.chatWindowVisible,
                                  }),
                                  Object(Ha.jsx)(er, {}),
                                  Object(Ha.jsx)(Co, {}),
                                ],
                              }),
                            ],
                          }),
                        Object(Ha.jsxs)(Ei, {
                          hide: this.props.chatWindowVisible,
                          children: [
                            Object(Ha.jsx)(Vr, {
                              onClick: function () {
                                return e.props.onChatBubbleClick(
                                  !e.props.chatWindowVisible
                                );
                              },
                              isChatWindowVisible: this.props.chatWindowVisible,
                            }),
                            !this.props.chatWindowVisible &&
                              this.props.unreadMessagesCount > 0 &&
                              Object(Ha.jsx)(Mo, {
                                unreadMessagesCount:
                                  this.props.unreadMessagesCount,
                              }),
                          ],
                        }),
                      ],
                    })
                  : null;
              },
            },
          ]),
          t
        );
      })(a.Component),
      Si = function (e) {
        return e && "operator" === e.sentBy ? e.senderId : null;
      };
    var Ti,
      Mi = K(
        function (e) {
          var n = Zt.getCurrentConversationId(e),
            t = Zt.getConversationMessagesGroupsById(e, n),
            a = 0 !== t.length ? Si(ci(t)) : null,
            r = Zt.anyOperators(e) && a ? Zt.getOperatorName(e, a) : null;
          return {
            chatWindowVisible: Zt.isChatWindowVisible(e),
            shouldShowChat: Zt.shouldShowChat(e),
            companyName: Zt.getCompanyName(e),
            lastOperator: Zt.getLastOperator(e),
            initialPageTitle: Zt.getInitialPageTitle(e),
            unreadMessagesCount: Zt.getConversationUnreadMessagesCountById(
              e,
              n
            ),
            currentOperatorName: r,
          };
        },
        function (e) {
          return {
            onChatBubbleClick: function (n) {
              return e(Me(n));
            },
            loadChat: function () {
              return e(Ue());
            },
          };
        }
      )(Object(Da.d)(Pi)),
      Ii = t(136),
      zi = t.n(Ii),
      Ni = t(137),
      Li = t.n(Ni),
      Di = t(138),
      Bi = t.n(Di),
      Ri = t(139),
      Fi = t.n(Ri),
      Wi = t(140),
      Hi = t.n(Wi),
      Gi = t(141),
      Ui = t.n(Gi),
      qi = function e(n) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return Object.keys(n).reduce(function (a, r) {
          var o = n[r],
            i = t ? "".concat(t, ".").concat(r) : r;
          return (
            "string" === typeof o ? (a[i] = o) : Object.assign(a, e(o, i)), a
          );
        }, {});
      },
      Vi = Ra.c.div(
        Ti ||
          (Ti = Object(Ba.a)([
            "\n  & > ",
            ", & > ",
            " {\n    z-index: 900000;\n  }\n  & * {\n    box-sizing: border-box;\n  }\n",
          ])),
        Oi,
        Ei
      );
    Vi.displayName = "StyledRoot";
    var Zi = Vi,
      Yi = {
        fr: qi(Cn),
        en: qi(On),
        de: qi(An),
        es: qi(En),
        it: qi(Pn),
        pt: qi(Sn),
      };
    Object(Da.c)(
      [].concat(
        Object(ln.a)(zi.a),
        Object(ln.a)(Li.a),
        Object(ln.a)(Bi.a),
        Object(ln.a)(Hi.a),
        Object(ln.a)(Fi.a),
        Object(ln.a)(Ui.a)
      )
    );
    var Ki = {
        blue: "#0092FF",
        darkBlue: "#3a75aa",
        lightBlue: "#c2e7fd",
        white: "#ffffff",
        whiteMessageText: "#F9FAFC",
        darkGrey: "#3c4858",
        grey: "#c0ccda",
        green: "#13ce66",
        lightGrey: "#eff2f7",
        statusGrey: "#687484",
        greyForInfo: "#8492a6",
        red: "#FF4949",
      },
      Xi = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          var e;
          Object(s.a)(this, t);
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
            r[o] = arguments[o];
          return (
            ((e = n.call.apply(n, [this].concat(r))).getTheme = function (e) {
              var n = e.primaryColor;
              return Object(u.a)(
                Object(u.a)({}, Ki),
                {},
                { primaryColor: n || "#0092FF" }
              );
            }),
            e
          );
        }
        return (
          Object(f.a)(t, [
            {
              key: "render",
              value: function () {
                var e = xn(this.props.defaultLocale, this.props.locales);
                return Object(Ha.jsx)(a.Fragment, {
                  children: Object(Ha.jsx)(Da.b, {
                    locale: e,
                    messages: Yi[e],
                    children: Object(Ha.jsx)(Ra.b, {
                      theme: this.getTheme(this.props),
                      children: Object(Ha.jsx)(Zi, {
                        chatWindowVisible: this.props.chatWindowVisible,
                        children: this.props.children,
                      }),
                    }),
                  }),
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
    var Ji = K(function (e) {
        return {
          primaryColor: Mt(e),
          chatWindowVisible: At(e),
          defaultLocale: Bt(e),
          locales: Rt(e),
        };
      })(Xi),
      Qi = (function (e) {
        Object(l.a)(t, e);
        var n = Object(c.a)(t);
        function t() {
          return Object(s.a)(this, t), n.apply(this, arguments);
        }
        return (
          Object(f.a)(t, [
            {
              key: "componentDidMount",
              value: function () {
                this.props.initializeChatComponent(
                  this.props.clientId,
                  this.props.companyName,
                  this.props.avatarUrl,
                  this.props.primaryColor,
                  this.props.welcomeMessage,
                  this.props.offlineMessage,
                  this.props.isLogoEnabled,
                  this.props.defaultLocale,
                  this.props.locales,
                  this.props.chatboxAvailabilityType,
                  this.props.isOfflineChatboxEnabled,
                  this.props.chatboxAvailabilityTimings,
                  this.props.timezone
                );
              },
            },
            {
              key: "render",
              value: function () {
                return !this.props.isChatValid ||
                  (window.sib && 0 === window.sib.display_chat) ||
                  "hidden" === this.props.chatboxAvailabilityType
                  ? null
                  : Object(Ha.jsx)(Ji, { children: Object(Ha.jsx)(Mi, {}) });
              },
            },
          ]),
          t
        );
      })(r.a.Component);
    var $i = K(
        function (e) {
          return { isChatValid: e.chat.isChatValid };
        },
        function (e) {
          return {
            initializeChatComponent: function (
              n,
              t,
              a,
              r,
              o,
              i,
              s,
              l,
              c,
              u,
              _,
              d,
              f
            ) {
              e(Ve(n, t, a, r, o, i, s, l, c, u, _, d, f));
            },
          };
        }
      )(Qi),
      es = function (e) {
        return Object(Ha.jsx)($i, Object(u.a)({}, e));
      };
    new ((function (e) {
      Object(l.a)(t, e);
      var n = Object(c.a)(t);
      function t() {
        var e;
        Object(s.a)(this, t), (e = n.call(this));
        var a = Ma({}),
          r = new d.a.ContainerBuilder();
        return (
          (r.factory = new J(a)),
          r.register(es).as("ChatComponent"),
          e.setContainer(r.build()),
          e
        );
      }
      return t;
    })(d.a.Bootstrapper))(),
      Ma({});
  },
  36: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
      function e(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function (n, t, a) {
        return t && e(n.prototype, t), a && e(n, a), n;
      };
    })();
    var r = function () {},
      o = r,
      i = r,
      s = "http://tinyurl.com/jxryd3s";
    var l = (function () {
      function e() {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        a(e, null, [
          {
            key: "warn",
            value: function (e, n) {
              for (
                var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), r = 2;
                r < t;
                r++
              )
                a[r - 2] = arguments[r];
              var l = i(
                "WARNING: " + e + " " + n + " " + s + "#" + e.toLowerCase(),
                a
              );
              o("warn", l);
            },
          },
          {
            key: "error",
            value: function (e, n) {
              for (
                var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), r = 2;
                r < t;
                r++
              )
                a[r - 2] = arguments[r];
              var l = i(
                "ERROR: " + e + " " + n + " " + s + "#" + e.toLowerCase(),
                a
              );
              o("error", l);
            },
          },
        ]),
        e
      );
    })();
    (n.default = l), (e.exports = n.default);
  },
  52: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Send","ok":"Ok","inputPlaceholder":"Write your message...","sending":"Sending...","notificationTitle":"{operatorName} says...","defaultNotificationTitle":"New message","welcomeMessage":"Hello! How can we help you?","typingIndicatorSingular":"{operatorName} is typing...","typingIndicatorPlural":"Several people are typing...","copyright":{"by":"by"},"operatorStatus":{"online":"Online","offline":"Offline","noOperatorOnline":"No operator online","oneOperatorOnline":"is online","manyOperatorOnline":"are online","outsideOfficeHours":"Outside office hours","officeHours":"We are open"},"currentlyOfflineMessage":"We are currently offline. In order to answer you, please indicate your email in your messages."}}'
    );
  },
  53: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Envoyer","ok":"OK","inputPlaceholder":"\xc9crivez votre message...","sending":"En cours d\'envoi...","notificationTitle":"{operatorName} dit...","defaultNotificationTitle":"Nouveau message","welcomeMessage":"Bonjour ! Que pouvons-nous faire pour vous ?","typingIndicatorSingular":"{operatorName} est en train d\'\xe9crire...","typingIndicatorPlural":"Plusieurs personnes sont en train d\'\xe9crire...","copyright":{"by":"par"},"operatorStatus":{"online":"En ligne","offline":"Hors ligne","noOperatorOnline":"Aucun op\xe9rateur en ligne","oneOperatorOnline":"est en ligne","manyOperatorOnline":"sont en ligne","outsideOfficeHours":"En dehors des horaires d\'ouverture","officeHours":"Nous sommes ouverts"},"currentlyOfflineMessage":"Nous sommes actuellement hors ligne. Afin que nous puissions vous r\xe9pondre, veuillez indiquer votre adresse e-mail dans vos messages."}}'
    );
  },
  54: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Senden","ok":"Ok","inputPlaceholder":"Verfassen Sie Ihre Nachricht ...","sending":"Wird versandt ...","notificationTitle":"{operatorName} sagt ...","defaultNotificationTitle":"Neue Nachricht","welcomeMessage":"Hallo! Wie k\xf6nnen wir Ihnen helfen?","typingIndicatorSingular":"{operatorName} schreibt gerade ...","typingIndicatorPlural":"Mehrere Personen schreiben gerade ...","copyright":{"by":"von"},"operatorStatus":{"online":"Online","offline":"Offline","noOperatorOnline":"Kein Berater online","oneOperatorOnline":"ist online","manyOperatorOnline":"sind online","outsideOfficeHours":"Au\xdferhalb der Gesch\xe4ftszeiten","officeHours":"Wir sind offen"},"currentlyOfflineMessage":"Wir sind zurzeit offline. Damit wir Ihnen antworten k\xf6nnen, geben Sie bitte in Ihrer Nachricht Ihre E-Mail-Adresse an."}}'
    );
  },
  55: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Enviar","ok":"Ok","inputPlaceholder":"Escriba su mensaje...","sending":"Enviando...","notificationTitle":"{operatorName} dice...","defaultNotificationTitle":"Nuevo mensaje","welcomeMessage":"\xa1Hola! \xbfC\xf3mo podemos ayudarle?\\n","typingIndicatorSingular":"{operatorName} est\xe1 escribiendo...","typingIndicatorPlural":"Varias personas est\xe1n escribiendo...","copyright":{"by":"por"},"operatorStatus":{"online":"En l\xednea","offline":"Desconectado","noOperatorOnline":"No hay ning\xfan operador en l\xednea","oneOperatorOnline":"est\xe1 en l\xednea","manyOperatorOnline":"est\xe1n en l\xednea","outsideOfficeHours":"Fuera del horario de atenci\xf3n","officeHours":"Estamos abiertos"},"currentlyOfflineMessage":"Ahora mismo no estamos conectados, para poder responderle necesitamos que indique su e-mail en sus mensajes."}}'
    );
  },
  56: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Invia","ok":"OK","inputPlaceholder":"Scrivi il messaggio...","sending":"Invio in corso...","notificationTitle":"{operatorName} dice...","defaultNotificationTitle":"Nuovo messaggio","welcomeMessage":"Salve! Come posso aiutarti?","typingIndicatorSingular":"{operatorName} sta scrivendo...","typingIndicatorPlural":"Molti stanno scrivendo...","copyright":{"by":"di"},"operatorStatus":{"online":"Online","offline":"Offline","noOperatorOnline":"Nessun operatore online","oneOperatorOnline":"\xe8 online","manyOperatorOnline":"sono online","outsideOfficeHours":"Fuori orario d\'ufficio","officeHours":"Siamo aperti"},"currentlyOfflineMessage":"Al momento siamo offline. Includi il tuo indirizzo email nei tuoi messaggi e ti risponderemo appena possibile."}}'
    );
  },
  57: function (e) {
    e.exports = JSON.parse(
      '{"chat":{"title":"Chat","send":"Enviar","ok":"Ok","inputPlaceholder":"Escreva sua mensagem...","sending":"Enviando...","notificationTitle":"{operatorName} diz...","defaultNotificationTitle":"Nova mensagem","welcomeMessage":"Ol\xe1! Como posso ajudar?","typingIndicatorSingular":"{operatorName} est\xe1 digitando...","typingIndicatorPlural":"Mais de uma pessoa est\xe1 digitando...","copyright":{"by":"por"},"operatorStatus":{"online":"On-line","offline":"Off-line","noOperatorOnline":"Nenhum operador est\xe1 on-line","oneOperatorOnline":"est\xe1 on-line","manyOperatorOnline":"est\xe3o on-line","outsideOfficeHours":"Fora do hor\xe1rio comercial","officeHours":"Estamos abertos"},"currentlyOfflineMessage":"No momento, estamos off-line. Para podermos atend\xea-lo, informe seu e-mail em suas mensagens."}}'
    );
  },
  60: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a,
      r = t(262),
      o = (a = r) && a.__esModule ? a : { default: a };
    n.default = o.default;
  },
  80: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = s(t(85)),
      r = s(t(86)),
      o = s(t(88)),
      i = t(151);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (n.default = {
      Bootstrapper: a.default,
      Container: r.default,
      ContainerBuilder: o.default,
      createBootstrapper: i.createBootstrapper,
    }),
      (e.exports = n.default);
  },
  84: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.FrameContextConsumer = n.FrameContext = void 0);
    var a = t(125);
    Object.defineProperty(n, "FrameContext", {
      enumerable: !0,
      get: function () {
        return a.FrameContext;
      },
    }),
      Object.defineProperty(n, "FrameContextConsumer", {
        enumerable: !0,
        get: function () {
          return a.FrameContextConsumer;
        },
      });
    var r,
      o = t(274),
      i = (r = o) && r.__esModule ? r : { default: r };
    n.default = i.default;
  },
  85: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      r = i(t(149)),
      o = i(t(36));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, n) {
      if ("function" === typeof e) {
        for (
          var t = arguments.length, a = Array(t > 2 ? t - 2 : 0), r = 2;
          r < t;
          r++
        )
          a[r - 2] = arguments[r];
        e.call.apply(e, [n].concat(a));
      }
    }
    var l = (function () {
      function e() {
        if (
          ((function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          !window || (!window && !window.document))
        )
          throw new Error(
            "React Habitat requires a window but cannot see one :("
          );
        (this.componentSelector = "data-component"),
          (this.__container__ = null);
      }
      return (
        a(e, [
          {
            key: "_apply",
            value: function (e) {
              for (
                var n = this,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null,
                  a = [],
                  i = function (t) {
                    var i = e[t];
                    if (r.default.hasHabitat(i)) return "continue";
                    var s = i.getAttribute(n.componentSelector);
                    a.push(
                      n.__container__
                        .resolve(s, n)
                        .then(function (e) {
                          var t = r.default.parseProps(i);
                          e.meta.defaultProps &&
                            (t = Object.assign({}, e.meta.defaultProps, t));
                          var a = e.meta.options || {};
                          n.__container__.factory.inject(
                            e.component,
                            t,
                            r.default.create(i, n.__container__.id, a)
                          );
                        })
                        .catch(function (e) {
                          o.default.error(
                            "RHW01",
                            'Cannot resolve component "' + s + '" for element.',
                            e,
                            i
                          );
                        })
                    );
                  },
                  l = 0;
                l < e.length;
                ++l
              )
                i(l);
              Promise.all(
                a.map(function (e) {
                  return e.catch(function (e) {
                    return e;
                  });
                })
              )
                .then(function () {
                  s(t);
                })
                .catch(function (e) {
                  throw e;
                });
            },
          },
          {
            key: "setContainer",
            value: function (e) {
              var n = this,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              null === this.__container__
                ? e.factory &&
                  "function" === typeof e.factory.inject &&
                  "function" === typeof e.factory.dispose
                  ? ((this.__container__ = e),
                    this.update(null, function () {
                      s(t, n);
                    }))
                  : o.default.error("RHE10", "Incompatible factory")
                : o.default.error(
                    "RHW02",
                    "A container is already set. Please call dispose() before assigning a new one."
                  );
            },
          },
          {
            key: "update",
            value: function (e) {
              var n = this,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
              if (this.__container__) {
                var a = e || window.document.body,
                  r = a.querySelectorAll("[" + this.componentSelector + "]");
                r.length &&
                  ("function" !== typeof this.shouldUpdate ||
                  !1 !== this.shouldUpdate(a, r)
                    ? ("function" === typeof this.willUpdate &&
                        this.willUpdate(a, r),
                      this._apply(r, function () {
                        "function" === typeof n.didUpdate && n.didUpdate(a),
                          s(t, n);
                      }))
                    : s(t, this));
              } else s(t);
            },
          },
          {
            key: "unmountHabitats",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null;
              "function" === typeof this.willUnmountHabitats &&
                this.willUnmountHabitats();
              for (
                var n = r.default.listHabitats(this.__container__.id), t = 0;
                t < n.length;
                ++t
              )
                this.__container__.factory.dispose(n[t]),
                  r.default.destroy(n[t]);
              "function" === typeof this.didUnmountHabitats &&
                this.didUnmountHabitats(),
                s(e, this);
            },
          },
          {
            key: "dispose",
            value: function () {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
              this.unmountHabitats(function () {
                (e.__container__ = null),
                  "function" === typeof e.didDispose && e.didDispose(),
                  s(n, e);
              });
            },
          },
          {
            key: "container",
            get: function () {
              return this.__container__;
            },
          },
        ]),
        e
      );
    })();
    (n.default = l), (e.exports = n.default);
  },
  86: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a,
      r = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      o = t(87),
      i = (a = o) && a.__esModule ? a : { default: a };
    function s(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    var l = (function () {
        var e = 0;
        return function () {
          return "C" + (e += 1);
        };
      })(),
      c = (function () {
        function e() {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.default,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          s(this, e),
            (this._id = l()),
            (this._registrations = t || {}),
            (this._factory = n);
        }
        return (
          r(e, [
            {
              key: "resolve",
              value: function (e) {
                var n = this;
                return new Promise(function (t, a) {
                  var r = n._registrations[e];
                  if (!r || !r.operator)
                    return a(new Error("Cannot resolve registration.")), null;
                  r.operator()
                    .then(function (e) {
                      var n = e;
                      return (
                        e.__esModule && e.default && (n = e.default),
                        t({ component: n, meta: r.meta }),
                        n
                      );
                    })
                    .catch(a);
                });
              },
            },
            {
              key: "id",
              get: function () {
                return this._id;
              },
            },
            {
              key: "factory",
              get: function () {
                return this._factory;
              },
            },
            {
              key: "length",
              get: function () {
                return Object.keys(this._registrations).length;
              },
            },
          ]),
          e
        );
      })();
    (n.default = c), (e.exports = n.default);
  },
  87: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      r = s(t(0)),
      o = s(t(21)),
      i = s(t(36));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = (function () {
      function e() {
        !(function (e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        })(this, e);
      }
      return (
        a(e, null, [
          {
            key: "inject",
            value: function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                t = arguments[2];
              t
                ? o.default.render(r.default.createElement(e, n || {}), t)
                : i.default.warn(
                    "RHW07",
                    "Target element is null or undefined."
                  );
            },
          },
          {
            key: "dispose",
            value: function (e) {
              e && o.default.unmountComponentAtNode(e);
            },
          },
        ]),
        e
      );
    })();
    (n.default = l), (e.exports = n.default);
  },
  88: function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var a = (function () {
        function e(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        return function (n, t, a) {
          return t && e(n.prototype, t), a && e(n, a), n;
        };
      })(),
      r = l(t(36)),
      o = l(t(150)),
      i = l(t(86)),
      s = l(t(87));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function c(e, n) {
      if (!(e instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    var u = (function () {
      function e() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        c(this, e),
          (this._registrations = []),
          (this._defaultOptions = n),
          (this._factory = s.default);
      }
      return (
        a(e, [
          {
            key: "registerAsync",
            value: function (e) {
              var n = new o.default(e);
              return (
                this._defaultOptions && n.withOptions(this._defaultOptions),
                this._registrations.push(n),
                n
              );
            },
          },
          {
            key: "register",
            value: function (e) {
              return this.registerAsync(function () {
                return Promise.resolve(e);
              });
            },
          },
          {
            key: "build",
            value: function () {
              return new i.default(
                this._factory,
                this._registrations.reduce(function (e, n) {
                  return n.key
                    ? (e[n.key] &&
                        r.default.warn("RHW12", "Duplicate key", n.key),
                      (e[n.key] = n),
                      e)
                    : (r.default.error(
                        "RHE11",
                        "Missing key for registration."
                      ),
                      e);
                }, {})
              );
            },
          },
          {
            key: "factory",
            set: function (e) {
              this._factory = e;
            },
          },
        ]),
        e
      );
    })();
    (n.default = u), (e.exports = n.default);
  },
});
