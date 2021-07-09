window.sib.client_key !== "" &&
  (function () {
    "use strict";
    var config = {
        url: "https://in-automate.sendinblue.com/p",
        com_err_msg:
          "Please try again later/ Report this error to Sendinblue Team",
        cookie_exp: 182 * 24,
        if_url:
          "https://sibautomation.com/cm.html?key=" + window.sib.client_key,
      },
      Helper = new hl();
    var iframe, cm;
    function q() {
      while (window.sib.equeue.length) {
        (function (obj) {
          for (var k in obj) {
            if (typeof window.sib[k] === "function") {
              setTimeout(function () {
                if (typeof window.sib[k] === "function") {
                  window.sib[k](obj[k][0], obj[k][1], obj[k][2]);
                }
              }, 200);
            }
          }
        })(window.sib.equeue.shift());
      }
    }
    function mo(t) {
      var to = Object(t);
      for (var i = 1; i < arguments.length; i++) {
        var n = arguments[i];
        if (n != null) {
          for (var k in n) {
            Object.prototype.hasOwnProperty.call(n, k) && (to[k] = n[k]);
          }
        }
      }
      return to;
    }
    function sr(o) {
      var s = [];
      for (var p in o) {
        Object.prototype.hasOwnProperty.call(o, p) &&
          s.push(encodeURIComponent(p) + "=" + encodeURIComponent(o[p]));
      }
      return s.join("&");
    }
    function br(d) {
      var td = {
        key: window.sib.client_key,
        cuid: Helper.cookie.get("sib_cuid"),
        ma_url: window.location.href,
      };
      window.sib.email_id && (td.email_id = window.sib.email_id);
      return mo(td, d);
    }
    function hl() {}
    function sib() {}
    hl.prototype.cookie = {
      get: function (cn) {
        var name = cn + "=",
          dc = document.cookie,
          ca = dc.split(";");
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return decodeURIComponent(c.substring(name.length, c.length));
          }
        }
        return "";
      },
      set: function (n, v) {
        var cd = new Date();
        cd.setHours(config.cookie_exp);
        document.cookie =
          n +
          "=" +
          v +
          ";domain= " +
          window.location.hostname +
          ";expires=" +
          cd.toGMTString() +
          ";path=/";
      },
      remove: function (n) {
        document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      },
    };
    hl.prototype.gen_sib_cuid = function () {
      var d = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
    };
    hl.prototype.closest = function (el, fn) {
      return el && (fn(el) ? el : this.closest(el.parentNode, fn));
    };
    hl.prototype.send = function (d, cb) {
      var u = config.url + "?" + sr(d),
        x = new XMLHttpRequest();
      x.open("GET", u, !0);
      x.send();
      return cb && cb(null);
    };
    hl.prototype.post = function (d, cb) {
      var u = config.url,
        x = new XMLHttpRequest();
      x.open("POST", u, !0);
      x.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      x.send(JSON.stringify(d));
      return cb && cb(null);
    };
    sib.prototype.track = function (n, d, s, cb) {
      if (n && n != undefined && n != "") {
        var o = { sib_type: "track", sib_name: n };
        if (d && typeof d == "object") {
          o.contact = d;
        }
        if (s && typeof s == "object") {
          o.event = s;
        }
        o = br(o);
        Helper.post(o, function (err) {
          return cb && cb(err);
        });
      } else {
        return cb && cb("Event name not passed.");
      }
    };
    sib.prototype.identify = function (em, d, cb) {
      if (em != undefined && em != "") {
        var o = { sib_type: "identify" };
        if (d && typeof d == "object") {
          o.contact = d;
        }
        o = br(o);
        o.email_id = em;
        Helper.post(o, function (err) {
          return cb && cb(err);
        });
      } else {
        return cb && cb("Email not passed");
      }
    };
    sib.prototype.trackLink = function (l, d, cb) {
      d = br(d);
      d.sib_type = "trackLink";
      var links = l ? (Array.isArray(l) ? l : [l]) : [];
      for (var i = 0; i < links.length; i++) {
        (function (v, td) {
          if (v) {
            var href = v.getAttribute("href");
            var jsClosest = Helper.closest(v, function (el) {
              return (
                el &&
                typeof el.tagName != "undefined" &&
                el.tagName.toLowerCase() == "a"
              );
            });
            if (jsClosest && href) {
              v.addEventListener("click", function (e) {
                e.preventDefault();
                (td.href = href),
                  (td.linkid = v.getAttribute("id")),
                  (td.sib_name = v.getAttribute("id"));
                Helper.send(td, function (err) {
                  cb && cb(err);
                  v.getAttribute("target") !== "_blank"
                    ? setTimeout(function () {
                        window.location.href = href;
                      }, 1000)
                    : window.open(href);
                });
              });
            }
          }
        })(links[i], d);
      }
    };
    sib.prototype.page = function (n, d, cb) {
      d = br(d);
      (d.sib_type = "page"),
        (d.ma_title = d.title || document.title),
        (d.sib_name = n || d.ma_title),
        (d.ma_referrer = d.referrer || document.referrer),
        (d.ma_path = d.path || window.location.pathname);
      Helper.send(d, function (err) {
        return cb && cb(err);
      });
    };
    window.sib = mo(new sib(), window.sib);
    var cuid;
    var cm_flag = false;
    if (Helper.cookie.get("sib_cuid")) {
      cuid = Helper.cookie.get("sib_cuid");
    } else {
      cuid = Helper.gen_sib_cuid();
      cm_flag = true;
      Helper.cookie.set("sib_cuid", cuid);
    }
    cm_flag = true;
    function load_cm(c) {
      cm = {
        cuid: cuid,
        cm_flag: cm_flag,
        allow_cookie: Helper.cookie.get("cookieconsent_status"),
      };
      window.sib.email_id && (cm.email_id = window.sib.email_id);
      var i =
        config.if_url.indexOf("#") > 0
          ? config.if_url.indexOf("#")
          : config.if_url.length;
      config.if_url = config.if_url.substr(0, i);
      config.if_url = config.if_url + "#" + sr(cm);
      iframe = document.createElement("iframe");
      (iframe.id = "cm_iframe"),
        (iframe.height = "0"),
        (iframe.width = "0"),
        (iframe.style.display = "none"),
        (iframe.style.visibility = "hidden"),
        (iframe.src = config.if_url + "&i=0");
      document.body.appendChild(iframe);
      if (iframe.readyState) {
        iframe.onreadystatechange = function () {
          if (
            iframe.readyState == "loaded" ||
            iframe.readyState == "complete"
          ) {
            iframe.onreadystatechange = null;
            return c && c();
          }
        };
      } else {
        iframe.onload = function () {
          return c && c();
        };
      }
    }
    load_cm(function () {
      q();
      typeof create_chat == "function" && create_chat();
    });
    function create_chat() {
      var chatElement = document.createElement("script");
      chatElement.type = "application/javascript";
      chatElement.src =
        "https://sibautomation.com/chat.js?key=" + window.sib.client_key;
      document.getElementsByTagName("head")[0].appendChild(chatElement);
    }
  })();
