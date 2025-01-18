import.meta;
var aa = Object.defineProperty,
  ia = Object.defineProperties,
  oa = Object.getOwnPropertyDescriptors,
  yr = Object.getOwnPropertySymbols,
  sa = Object.prototype.hasOwnProperty,
  la = Object.prototype.propertyIsEnumerable,
  St = (t, e) => ((e = Symbol[t]) ? e : Symbol.for("Symbol." + t)),
  gr = (t) => {
    throw TypeError(t);
  },
  It = (t, e, n) =>
    e in t
      ? aa(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n),
  _ = (t, e) => {
    for (var n in e || (e = {})) sa.call(e, n) && It(t, n, e[n]);
    if (yr) for (var n of yr(e)) la.call(e, n) && It(t, n, e[n]);
    return t;
  },
  D = (t, e) => ia(t, oa(e)),
  d = (t, e, n) => It(t, typeof e != "symbol" ? e + "" : e, n),
  fr = (t, e, n) => e.has(t) || gr("Cannot " + n),
  S = (t, e, n) => (
    fr(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  G = (t, e, n) =>
    e.has(t)
      ? gr("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, n),
  z = (t, e, n, r) => (
    fr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n
  ),
  K = function (t, e) {
    (this[0] = t), (this[1] = e);
  },
  Ce = (t, e, n) => {
    var r = (o, s, l, c) => {
        try {
          var u = n[o](s),
            h = (s = u.value) instanceof K,
            p = u.done;
          Promise.resolve(h ? s[0] : s)
            .then((y) =>
              h
                ? r(
                    o === "return" ? o : "next",
                    s[1] ? { done: y.done, value: y.value } : y,
                    l,
                    c
                  )
                : l({ value: y, done: p })
            )
            .catch((y) => r("throw", y, l, c));
        } catch (y) {
          c(y);
        }
      },
      a = (o) => (i[o] = (s) => new Promise((l, c) => r(o, s, l, c))),
      i = {};
    return (
      (n = n.apply(t, e)),
      (i[St("asyncIterator")] = () => i),
      a("next"),
      a("throw"),
      a("return"),
      i
    );
  },
  Q = (t, e, n) =>
    (e = t[St("asyncIterator")])
      ? e.call(t)
      : ((t = t[St("iterator")]()),
        (e = {}),
        (n = (r, a) =>
          (a = t[r]) &&
          (e[r] = (i) =>
            new Promise(
              (o, s, l) => (
                (i = a.call(t, i)),
                (l = i.done),
                Promise.resolve(i.value).then(
                  (c) => o({ value: c, done: l }),
                  s
                )
              )
            ))),
        n("next"),
        n("return"),
        e);
const ca = ":host{display:flex;align-items:center;justify-content:center}";
class da extends HTMLElement {
  constructor() {
    var e, n;
    super(),
      d(this, "size"),
      d(this, "color"),
      (this.size = (e = this.getAttribute("size")) != null ? e : "18px"),
      (this.color = (n = this.getAttribute("color")) != null ? n : "gray"),
      this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
    const e = document.createElement("style");
    (e.textContent = ca), this.shadowRoot.appendChild(e);
  }
  render() {
    const e = this.shadowRoot,
      n = '\n      width="'
        .concat(this.size, '"\n      height="')
        .concat(
          this.size,
          '"\n      xmlns="http://www.w3.org/2000/svg"\n      aria-hidden="true"\n    '
        );
    e.innerHTML = "\n      <svg "
      .concat(n, ' viewBox="0 0 20 20" fill="')
      .concat(
        this.color,
        '">\n        <path d="M17.1 4.3l-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7z"/>\n      </svg>\n    '
      );
  }
}
const ua =
  "#overlay{position:fixed;width:100%;height:100%;background:#0006;top:0;left:0;z-index:2147483647;animation:modalPop .3s ease-out}#modal{position:fixed;top:20%;left:50%;width:100%;max-width:383px;transform:translate(-50%,-100%);background:#fff;color:#000;border-radius:5px;animation:modalSlideInFromTop .3s forwards}@keyframes modalPop{0%{opacity:0}to{opacity:1}}@keyframes modalSlideInFromTop{0%{transform:translate(-50%,-100%)}to{transform:translate(-50%)}}@keyframes modalSlideInFromBottom{0%{transform:translate(-50%,100%)}to{transform:translate(-50%)}}@media only screen and (max-width: 640px){#modal{top:auto;bottom:0;animation:modalSlideInFromBottom .3s forwards}}#modal footer{padding:0 21px 21px}#modal header{display:flex;justify-content:space-between;padding:21px 21px 16px}#title{font-size:21px;font-weight:600;line-height:25.2px;margin:0}.capitalize:first-letter{display:inline-block;text-transform:capitalize}#content{text-align:left;padding:0 21px 16px;overflow:auto;max-height:50vh}#modal #content p{margin:0;font-size:14px;line-height:21px}#close-icon,#close-button{cursor:pointer}#close-icon{min-width:24px;background:transparent;padding:0;border:none}#close-button{width:100%;padding:16px 21px;color:#fff;background-color:#1773b0;border:none;border-radius:5px;font-size:14px;line-height:21px;font-family:inherit}#close-button:hover,#close-button:active{background:#136f99}#close-button:active,#close-button:focus{box-shadow:0 0 0 4px #1990c640}";
function ha(t) {
  return Jr(t).map((e) =>
    e instanceof Error
      ? e
      : new Xr("[".concat(typeof e, "] ").concat(pa(e).slice(0, 10240)))
  );
}
function Jr(t, e = 0) {
  return e >= 20
    ? [t, "Truncated cause stack"]
    : t instanceof Error && "cause" in t
    ? [t, ...Jr(t.cause, e + 1)]
    : [t];
}
function pa(t) {
  var e;
  if (typeof t != "string")
    try {
      return (e = JSON.stringify(t)) != null ? e : typeof t;
    } catch (n) {}
  return "".concat(t);
}
var Xr = class extends Error {
    constructor() {
      super(...arguments), d(this, "name", "BugsnagInvalidError");
    }
  },
  Zr = /^\s*at .*(\S+:\d+|\(native\))/m,
  ma = /^(eval@)?(\[native code])?$/;
function ya(t) {
  return t.stack ? (t.stack.match(Zr) ? ga(t) : fa(t)) : [];
}
function en(t) {
  if (t.indexOf(":") === -1) return [t];
  let e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
  return [e[1], e[2] ? Number(e[2]) : void 0, e[3] ? Number(e[3]) : void 0];
}
function ga(t) {
  return t.stack
    .split("\n")
    .filter((e) => !!e.match(Zr))
    .map((e) => {
      let n = e.replace(/^\s+/, "").replace(/^.*?\s+/, ""),
        r = n.match(/ (\(.+\)$)/);
      n = r ? n.replace(r[0], "") : n;
      let a = en(r ? r[1] : n),
        i = (r && n) || void 0,
        o = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
      return { method: i, file: o, lineNumber: a[1], columnNumber: a[2] };
    });
}
function fa(t) {
  return t.stack
    .split("\n")
    .filter((e) => !e.match(ma))
    .map((e) => {
      if (e.indexOf("@") === -1 && e.indexOf(":") === -1) return { method: e };
      let n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
        r = e.match(n),
        a = r && r[1] ? r[1] : void 0,
        i = en(e.replace(n, ""));
      return { method: a, file: i[0], lineNumber: i[1], columnNumber: i[2] };
    });
}
var br = "5",
  ba = class {
    constructor(t) {
      d(this, "breadcrumbs", []),
        d(this, "apiKey"),
        d(this, "plugins"),
        d(this, "appId"),
        d(this, "appType"),
        d(this, "appVersion"),
        d(this, "releaseStage"),
        d(this, "locale"),
        d(this, "userAgent"),
        d(this, "metadata"),
        d(this, "persistedMetadata"),
        d(this, "onError"),
        d(this, "onPostErrorListeners", []),
        d(this, "endpoints");
      var e, n;
      (this.apiKey = t.apiKey),
        (this.appType = t.appType),
        (this.appId = t.appId),
        (this.appVersion = t.appVersion),
        (this.releaseStage = t.releaseStage),
        (this.locale = t.locale),
        (this.userAgent = t.userAgent),
        (this.metadata = t.metadata),
        (this.onError = t.onError),
        (this.persistedMetadata = {}),
        (this.endpoints =
          (e = t.endpoints) != null
            ? e
            : {
                notify: "https://notify.bugsnag.com/",
                sessions: "https://sessions.bugsnag.com",
              }),
        (this.plugins = (n = t.plugins) != null ? n : []),
        this.plugins.forEach((r) => r.load(this)),
        this.leaveBreadcrumb("Bugsnag started", void 0, "state");
    }
    addMetadata(t) {
      for (let e of Object.keys(t)) this.persistedMetadata[e] = t[e];
    }
    leaveBreadcrumb(t, e, n = "manual") {
      this.breadcrumbs.push({
        name: t,
        metaData: e,
        type: n,
        timestamp: new Date().toISOString(),
      });
    }
    notify(
      t,
      {
        errorClass: e,
        severity: n,
        severityType: r,
        handled: a = !0,
        metadata: i,
        context: o,
      } = {}
    ) {
      var s, l;
      let c = ha(t),
        u = _(_(_({}, this.metadata), this.persistedMetadata), i),
        h = this.buildBugsnagEvent(c, {
          errorClass: e,
          severityType: r,
          handled: a,
          severity: n,
          metadata: u,
          context: o,
        });
      if (
        ((l = (s = this.onError) == null ? void 0 : s.call(this, h)) == null ||
          l) &&
        this.releaseStage !== "development"
      ) {
        let p = this.sendToBugsnag(h);
        return this.onPostErrorListeners.forEach((y) => y(h)), p;
      }
      return Promise.resolve();
    }
    addOnPostError(t) {
      this.onPostErrorListeners.push(t);
    }
    buildBugsnagEvent(
      t,
      {
        errorClass: e,
        severity: n = "error",
        severityType: r = "handledException",
        handled: a,
        metadata: i = {},
        context: o,
      }
    ) {
      let s = new Date().toISOString(),
        {
          breadcrumbs: l,
          appId: c,
          appType: u,
          appVersion: h,
          releaseStage: p,
          locale: y,
          userAgent: v,
        } = this,
        w = t.map((E, I) => ({
          errorClass: I === 0 && e != null ? e : E.name,
          stacktrace: tn(c, E),
          message: E.message,
        }));
      return {
        payloadVersion: br,
        exceptions: w,
        severity: n,
        severityReason: { type: r },
        unhandled: !a,
        app: { id: c, type: u, version: h, releaseStage: p },
        device: { time: s, locale: y, userAgent: v },
        breadcrumbs: l,
        context: o,
        metaData: i,
      };
    }
    async sendToBugsnag(t) {
      let { apiKey: e } = this,
        n = {
          apiKey: e,
          notifier: {
            name: "Bugsnag JavaScript",
            version: "7.22.2",
            url: "https://github.com/bugsnag/bugsnag-js",
          },
          events: [t],
        };
      try {
        await fetch(this.endpoints.notify, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Bugsnag-Api-Key": e,
            "Bugsnag-Payload-Version": br,
            "Bugsnag-Sent-At": t.device.time,
          },
          body: JSON.stringify(n),
        });
      } catch (r) {
        console.warn("[bugsnag-light] failed to send an event"),
          console.warn(r);
      }
    }
  };
function tn(t, e) {
  let n = ya(e).map((r) => {
    var a, i, o, s;
    let l = (a = r.file) == null ? void 0 : a.includes(t);
    return {
      method: (i = r.method) != null ? i : "",
      file: (o = r.file) != null ? o : "",
      lineNumber: (s = r.lineNumber) != null ? s : 0,
      columnNumber: r.columnNumber,
      inProject: l,
    };
  });
  if (e instanceof Xr) {
    let r = n.findIndex((a) => a.method.endsWith("notify"));
    r > -1 && (n = n.slice(r + 1));
  }
  return n;
}
function wa(t) {
  let e = window.onerror;
  window.onerror = (n, r, a, i, o) => {
    o && t.notify(o, { severityType: "unhandledException", handled: !1 }),
      typeof e == "function" && e.apply(window.onerror, [n, r, a, i, o]);
  };
}
function _a(t) {
  window.addEventListener("unhandledrejection", ({ reason: e }) => {
    e &&
      t.notify(e, { severityType: "unhandledPromiseRejection", handled: !1 });
  });
}
function Ye(t) {
  try {
    const e = new RegExp("(^| )".concat(t, "=([^;]+)")).exec(document.cookie);
    if (e) {
      const n = e[2];
      try {
        return decodeURIComponent(n);
      } catch (r) {
        return n;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}
const xt = {
    BRANDED_BUTTON:
      "shopify-payment-button__button shopify-payment-button__button--branded",
    UNBRANDED_BUTTON:
      "shopify-payment-button__button shopify-payment-button__button--unbranded",
    MORE_PAYMENT_OPTION_BUTTON: "shopify-payment-button__more-options",
    HIDDEN: "shopify-payment-button__button--hidden",
  },
  Ea = { DARK: "apple-pay--dark", LIGHT: "apple-pay--light" },
  Aa = 44,
  Ca = "_shopify_y",
  rn = 6,
  Sa = "discount_code",
  Qt = "https://static-na.payments-amazon.com/checkout.js",
  Pt = {
    CURRENCY_CHANGE: "wallet_currency_change",
    CAPTCHA_REQUIRED: "wallet_captcha_required",
    NOT_ENOUGH_STOCK: "wallet_not_enough_stock",
  },
  it = "VALIDATION_CUSTOM",
  nn = "portable-wallets",
  we = {
    BUTTON: "accelerated-checkout-button",
    BUTTON_ON_CART: "accelerated-checkout-button-cart",
    CONTAINER: "accelerated-checkout-button-container",
  },
  Jt = "DeveloperError";
class Je extends Error {
  constructor({ code: e, message: n }) {
    const r =
      "An unexpected error happened likely because of customizations made to HTML/JavaScript on this site ".concat(
        n
      );
    super("[".concat(e, "]: ").concat(r)),
      d(this, "name", Jt),
      d(this, "code", "unknown"),
      (this.code = e);
  }
}
const Xt = "SilencedError";
class pt extends Error {
  constructor() {
    super(...arguments), d(this, "name", Xt);
  }
}
class Ia extends Error {
  constructor() {
    super(...arguments), d(this, "name", "MissingConfigError");
  }
}
const Pa = [
    "Load failed",
    "Failed to fetch",
    "when attempting to fetch resource",
    "GraphQL mutation failed with status 404",
    "Component closed",
    Jt,
    Xt,
  ],
  wr = new Map([
    ["TypeError", "Illegal constructor"],
    ["BugsnagInvalidError", '"isTrusted":true'],
  ]),
  va = ["Chrome-Lighthouse"],
  Mt = {};
function Da(t) {
  if (!t.exceptions[0]) return !1;
  Ra(t);
  try {
    return Na(t);
  } catch (e) {
    const n = e;
    console.error(n);
    const r = {
      errorClass: "UnfilterableError",
      message: "Could not properly filter error with message: ".concat(
        n.message
      ),
      stacktrace: tn(nn, n),
    };
    return t.exceptions.unshift(r), !0;
  }
}
function Ra(t) {
  var e, n, r;
  (t.context = window.location.pathname),
    t.request || (t.request = {}),
    (t.request.url = window.location.href),
    (t.device.orientation =
      (n = (e = window.screen) == null ? void 0 : e.orientation) == null
        ? void 0
        : n.type);
  const a = !!((r = t.exceptions[0].stacktrace[0]) != null && r.inProject),
    i = t.exceptions.every((o) => {
      var s;
      return (s = o.stacktrace[0]) == null ? void 0 : s.inProject;
    });
  !a && t.unhandled && (t.severity = "warning"),
    (t.metaData = D(_(_({}, Mt), t.metaData), {
      custom: D(_({}, t.metaData.custom || {}), {
        alwaysFirstFrameInProject: i,
        firstFrameInProject: a,
      }),
    }));
}
function Na(t) {
  const e = t.exceptions[0];
  return !(
    Ta() ||
    La(t) ||
    Oa(e) ||
    ka() ||
    xa(t) ||
    Ma(e.message) ||
    Fa(t) ||
    Ua(t) ||
    $a(e) ||
    Ba(t) ||
    Ha(e)
  );
}
function Ta() {
  return va.some((t) => navigator.userAgent.includes(t));
}
function La(t) {
  return t.exceptions[0].stacktrace.length === 0;
}
function Oa(t) {
  return t.stacktrace.some((e) => {
    var n;
    return (n = e.file) == null ? void 0 : n.includes("spin.dev");
  });
}
function ka() {
  try {
    return !HTMLElement.toString().includes("[native code]");
  } catch (t) {
    return !0;
  }
}
function xa(t) {
  const e = t.exceptions[0],
    n = e.stacktrace.some((a) => a.inProject),
    r = t.unhandled && !e.stacktrace[0].inProject;
  return !n || r;
}
function Ma(t) {
  return Pa.some((e) => (t == null ? void 0 : t.includes(e)));
}
function Fa(t) {
  const e = t.exceptions.some((n) => n.errorClass === Jt);
  return e && console.error(t.exceptions[0]), e;
}
function Ua(t) {
  return t.exceptions.some((e) => e.errorClass === Xt);
}
function $a(t) {
  const e = t.errorClass,
    n = t.message;
  return wr.has(e) && (n == null ? void 0 : n.includes(wr.get(e)));
}
function Ba(t) {
  return t.exceptions[0].errorClass === "BugsnagInvalidError" && t.unhandled;
}
function Ha(t) {
  var e, n;
  return !!(
    t.errorClass === "OpenTelemetryClientError" &&
    (((e = t.message) != null &&
      e.match(/Server responded with ([45]\d\d|undefined)/)) ||
      ((n = t.message) != null && n.includes("error found in #10 byte")))
  );
}
var Qr;
const Ga = {
    apiKey: "cb577dc231be1c7494db8a63441ef66b",
    appId: nn,
    appVersion: "0.0.0-6bc6ab402adea37b0bdb7cfa5606848fe55e551f",
    releaseStage: "production",
    locale: "en",
    userAgent: navigator.userAgent,
    metadata: { user: { id: (Qr = Ye(Ca)) != null ? Qr : "unknown" } },
    onError: Da,
  },
  f = new ba(Ga);
f.addOnPostError((t) => {
  f.leaveBreadcrumb(
    "Bugsnag Error Notified",
    {
      errorClass: t.exceptions[0].errorClass,
      message: t.exceptions[0].message,
    },
    "error"
  );
});
function Zt(t) {
  for (const [e, n] of Object.entries(t)) Mt[e] = _(_({}, Mt[e]), n);
}
var Va = {
  en: {
    express_checkout: "Express checkout",
    instruments_copy: { checkout: { buy_now: "Buy it now" } },
    error_dialogs: {
      checkout: {
        title: "Transaction failed",
        generic_error:
          "Checkout is currently unavailable due to technical problems. Please try again in a few minutes.",
        button_text: "Close",
      },
      product: { out_of_stock: "This item is no longer available." },
      wallet: {
        title: "%{wallet} unavailable",
        generic_error:
          "There was an issue with %{wallet}. Try again or use a different payment method.",
        eligibility_error:
          "Items that were eligible for %{wallet} are no longer in your cart.",
      },
    },
    more_payment_options: "More payment options",
    action: { view: "View %{content}" },
    subscriptions: {
      cancellation_policy: "Cancellation policy",
      policy_not_found:
        "The subscription policy could not be found. Refresh the page or contact us for more information.",
    },
    shipping_methods: {
      connect_shipping_methods: "%{methodOne} and %{methodTwo}",
      choose_delivery_strategy: "Choose a delivery method",
    },
    delivery_promises: {
      connect_delivery_promises: "%{promiseOne} and %{promiseTwo}",
    },
    order_summary: {
      total: "Total",
      subtotal: "Subtotal",
      duties: "Duties",
      taxes: "Taxes",
      shipping: "Shipping",
      shipping_one_time_purchase: "Shipping (One-time purchase)",
      shipping_subscription: "Shipping (Subscription)",
      discount: "Discount",
      subscriptions: {
        recurring_total_tooltip_line:
          "Does not include shipping, tax, duties, or any applicable discounts",
        recurring_totals: "%{fixedPrice} every %{interval}",
        recurring_totals_with_policies: {
          one: "First payment %{fixedPrice}, then %{recurringPrice} every %{interval}",
          other:
            "First %{count} payments %{fixedPrice} each, then %{recurringPrice} every %{interval}",
        },
        recurring_total_intervals: {
          day: { one: "day", other: "%{count} days" },
          month: { one: "month", other: "%{count} months" },
          week: { one: "week", other: "%{count} weeks" },
          year: { one: "year", other: "%{count} years" },
        },
      },
    },
    brand: {
      amazon_pay: "Amazon Pay",
      apple_pay: "Apple Pay",
      buy_with_prime: "Buy with Prime",
      paypal: "PayPal",
      google_pay: "Google Pay",
      shop_pay: "Shop Pay",
    },
    buy_with_button_content: "Buy with %{wallet}",
    shop_promise_delivery: {
      same_day: "Same-day delivery",
      next_day: "Next-day delivery",
      two_day: "2-day delivery",
    },
    errors: {
      address_unserviceable:
        "%{shopName} does not currently deliver to this address. Use a different address to complete your purchase.",
      missing: {
        email: "Enter an email address",
        first_name: "Enter a first name",
        last_name: "Enter a last name",
        address1: "Enter an address",
        address2: "Enter an apartment, suite, etc.",
        city: "Enter a city",
        zone: "Select a state / province",
        country: "Select a country",
        phone: "Enter a phone number",
        postal_code: "Enter a ZIP / postal code",
        shipping_option: "Select a shipping method",
        emirate: "Enter an emirate",
      },
      invalid: {
        email: "Enter a valid email",
        first_name: "Enter a valid first name",
        last_name: "Enter a valid last name",
        address1: "Enter a valid address",
        address2: "Enter a valid apartment, suite, etc.",
        city: "Enter a valid city",
        zone: "Select a valid state / province",
        country: "Select a country / region",
        phone: "Enter a valid phone number",
        postal_code: "Enter a valid zip / postal code",
        billing_address: "Invalid billing address",
        shipping_address: "Invalid shipping address",
        payment_method: "Invalid payment method",
        discount: "Invalid discount",
        emirate: "Enter a valid emirate",
      },
      emojis: {
        first_name: "First name cannot contain emojis",
        last_name: "Last name cannot contain emojis",
        city: "City cannot contain emojis",
        address1: "Address line cannot contain emojis",
        address2: "Second address line cannot contain emojis",
        postal_code: "Postal code/zip cannot contain emojis",
      },
      too_long: {
        address1: "Address line is too long",
        address2: "Second address line is too long",
        first_name: "First name is too long",
        last_name: "Last name is too long",
        city: "City is too long",
      },
      url: {
        first_name: "First name cannot contain a URL",
        last_name: "Last name cannot contain a URL",
      },
      html_tags: {
        first_name: "First name cannot contain HTML tags",
        last_name: "Last name cannot contain HTML tags",
        city: "City cannot contain HTML tags",
        address1: "Address line cannot contain HTML tags",
        address2: "Second address line cannot contain HTML tags",
      },
      currency: {
        mismatch:
          "Your cart and currency has been updated based on your shipping country.",
      },
    },
  },
};
let vt;
class _r extends Error {
  constructor(e, n) {
    const r = "i18n: Missing or invalid translation '"
      .concat(e, "' in '")
      .concat(n, "'");
    super(r);
  }
}
class qa extends Error {
  constructor(e, n, r) {
    const a = "i18n: Missing translation template key '"
      .concat(e, "' for '")
      .concat(n, "' in '")
      .concat(r, "'");
    super(a);
  }
}
class za extends Error {
  constructor(e, n, r) {
    const a = "i18n: Invalid pluralization for '"
      .concat(e, "':'")
      .concat(n, "' in '")
      .concat(r, "'");
    super(a);
  }
}
function mt() {
  return vt == null && (vt = ja(Va)), vt;
}
function ja(t) {
  const e = (i, o) => typeof i != "string" && o.count !== "undefined",
    n = (i, o) => {
      let s = o === 1 ? "one" : "other";
      return (
        o === 0 &&
          typeof i != "string" &&
          i.zero !== "undefined" &&
          (s = "zero"),
        s
      );
    },
    r = (i, o = {}) => {
      const s = i.match(/%\{.+?\}/g);
      return s
        ? s.reduce((l, c) => {
            const u = c.replace(/%\{(.*)\}/, "$1");
            return o[u] ? l.replace(c, o[u]) : (f.notify(new qa(u, i, a)), l);
          }, i)
        : i;
    },
    a = Ya();
  return {
    locale: a,
    translate(i, o = {}) {
      var s;
      const l = i.split(".");
      let c = t[a];
      try {
        for (const u of l)
          switch (typeof c) {
            case "object":
              c = c[u];
              break;
            case "string":
            case "undefined":
              throw new _r(i, a);
          }
        if (e(c, o)) {
          if (typeof c == "string") throw new za(i, c, a);
          c = c[n(c, o.count)];
        }
        if (typeof c != "string") throw new _r(i, a);
        return r(c, o);
      } catch (u) {
        return f.notify(u), (s = o.defaultValue) != null ? s : i;
      }
    },
  };
}
function Ya() {
  return "en";
}
var g = ((t) => (
    (t.BuyItNow = "BuyItNow"),
    (t.MoreOptions = "MoreOptions"),
    (t.ApplePay = "ApplePay"),
    (t.PayPal = "PayPal"),
    (t.Venmo = "Venmo"),
    (t.GooglePay = "GooglePay"),
    (t.ShopPay = "ShopPay"),
    (t.MetaPay = "FacebookPay"),
    (t.BuyWithPrime = "BuyWithPrime"),
    (t.AmazonPay = "AmazonPay"),
    (t.Unknown = "Unknown"),
    t
  ))(g || {}),
  C = ((t) => (
    (t.CartPage = "cart_page"),
    (t.CartAjax = "cart_ajax"),
    (t.ProductPage = "product"),
    (t.Checkout = "checkout"),
    (t.Unknown = "unknown"),
    t
  ))(C || {}),
  He = ((t) => (
    (t.CartChange = "/cart/change"),
    (t.CartUpdate = "/cart/update"),
    (t.CartAdd = "/cart/add"),
    (t.CartClear = "/cart/clear"),
    t
  ))(He || {}),
  be = ((t) => (
    (t.OneTimePurchase = "ONE_TIME_PURCHASE"),
    (t.Subscription = "SUBSCRIPTION"),
    t
  ))(be || {});
function Wa(t) {
  const e = document.querySelectorAll(
      "shopify-accelerated-checkout .shopify-payment-button__skeleton, shopify-accelerated-checkout-cart .wallet-cart-button__skeleton"
    ),
    n = document.getElementById("shopify-buyer-consent");
  for (let r = 0; r < e.length; r++) e[r].remove();
  n && n.remove();
}
function an(t) {
  !(t instanceof ErrorEvent) ||
    !(typeof t.message == "string" && t.message.includes("import.meta")) ||
    !(
      typeof t.filename == "string" && t.filename.includes("portable-wallets")
    ) ||
    (window.removeEventListener("error", an),
    (window.Shopify.PaymentButton.failedToLoad = t),
    document.readyState === "loading"
      ? document.addEventListener(
          "DOMContentLoaded",
          window.Shopify.PaymentButton.init
        )
      : window.Shopify.PaymentButton.init());
}
window.addEventListener("error", an);
const Ka = "https://monorail-edge.shopifysvc.com",
  Qa = "/v1/produce";
function Ja() {
  if (typeof crypto < "u" && crypto && typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const t = new Array(36);
  for (let e = 0; e < 36; e++) t[e] = Math.floor(Math.random() * 16);
  return (
    (t[14] = 4),
    (t[19] = t[19] &= -5),
    (t[19] = t[19] |= 8),
    (t[8] = t[13] = t[18] = t[23] = "-"),
    t.map((e) => e.toString(16)).join("")
  );
}
function Xa(t) {
  const e = {
    "Content-Type": "application/json; charset=utf-8",
    "X-Monorail-Edge-Event-Created-At-Ms": (
      (t && t.eventCreatedAtMs) ||
      Date.now()
    ).toString(),
    "X-Monorail-Edge-Event-Sent-At-Ms": Date.now().toString(),
    "X-Monorail-Edge-Client-Message-Id": (
      (t && t.clientMessageId) ||
      Ja()
    ).toString(),
  };
  return (
    t && t.userAgent && (e["User-Agent"] = t.userAgent),
    t && t.remoteIp && (e["X-Forwarded-For"] = t.remoteIp),
    e
  );
}
async function Za({ endpoint: t, event: e, keepalive: n }) {
  return fetch(t != null ? t : Ka + Qa, {
    method: "post",
    headers: Xa(e.metadata),
    body: JSON.stringify({ schema_id: e.schemaId, payload: e.payload }),
    keepalive: n,
  });
}
function P(t, e) {
  if (!{}.hasOwnProperty.call(t, e))
    throw new TypeError("attempted to use private field on non-instance");
  return t;
}
var ei = 0;
function ae(t) {
  return "__private_" + ei++ + "_" + t;
}
function yt(t) {
  return Object.entries(t).map(([e, n]) => ({
    key: e,
    value: { stringValue: String(n) },
  }));
}
function ti(t) {
  return Object.entries(t).map(([e, n]) => ({ key: e, value: on(n) }));
}
function on(t) {
  if (Array.isArray(t)) return { arrayValue: { values: t.map((e) => on(e)) } };
  switch (typeof t) {
    case "boolean":
      return { boolValue: !!t };
    case "number":
      return { doubleValue: Number(t) };
    case "string":
    default:
      return { stringValue: String(t) };
  }
}
const er = 1,
  ri = ni(5, 2, 12);
function ni(t, e, n) {
  const r = [0];
  for (let a = 0; a < n; a++) {
    const i = Math.floor(t * e ** a);
    r.push(i);
  }
  return r;
}
var le = ae("exporter"),
  j = ae("attributes"),
  H = ae("metrics"),
  ce = ae("logs");
class ai {
  constructor({ exporter: e, attributes: n }) {
    Object.defineProperty(this, le, { writable: !0, value: void 0 }),
      Object.defineProperty(this, j, { writable: !0, value: void 0 }),
      Object.defineProperty(this, H, { writable: !0, value: [] }),
      Object.defineProperty(this, ce, { writable: !0, value: [] }),
      (P(this, le)[le] = e),
      (P(this, j)[j] = n != null ? n : {});
  }
  addAttributes(e) {
    P(this, j)[j] = _(_({}, P(this, j)[j]), e);
  }
  histogram({
    name: e,
    value: n,
    unit: r,
    bounds: a,
    attributes: i,
    scale: o,
  }) {
    const s = Date.now() * 1e6;
    a
      ? P(this, H)[H].push({
          name: e,
          type: "histogram",
          value: n,
          unit: r,
          timeUnixNano: s,
          attributes: i,
          bounds: a,
        })
      : P(this, H)[H].push({
          name: e,
          type: "exponential_histogram",
          value: n,
          unit: r,
          timeUnixNano: s,
          attributes: i,
          scale: o,
        });
  }
  counter({ name: e, value: n, unit: r, attributes: a }) {
    const i = Date.now() * 1e6;
    P(this, H)[H].push({
      name: e,
      type: "counter",
      value: n,
      unit: r,
      timeUnixNano: i,
      attributes: a,
    });
  }
  gauge({ name: e, value: n, unit: r, attributes: a }) {
    const i = Date.now() * 1e6;
    P(this, H)[H].push({
      name: e,
      type: "gauge",
      value: n,
      unit: r,
      timeUnixNano: i,
      attributes: a,
    });
  }
  log({ body: e, attributes: n }) {
    const r = Date.now() * 1e6;
    P(this, ce)[ce].push({ timeUnixNano: r, body: e, attributes: n });
  }
  async exportMetrics() {
    const e = {};
    P(this, H)[H].forEach((r) => {
      switch (
        ((r.attributes = _(_({}, P(this, j)[j]), r.attributes)), r.type)
      ) {
        case "histogram":
          ii(e, r);
          break;
        case "exponential_histogram":
          oi(e, r);
          break;
        case "counter":
          si(e, r);
          break;
        case "gauge":
          li(e, r);
          break;
      }
    });
    const n = Object.values(e);
    n.length !== 0 &&
      ((P(this, H)[H] = []), await P(this, le)[le].exportMetrics(n));
  }
  async exportLogs() {
    const e = P(this, ce)[ce].map((n) => {
      const r = {
        timeUnixNano: n.timeUnixNano,
        observedTimeUnixNano: n.timeUnixNano,
        attributes: ti(_(_({}, P(this, j)[j]), n.attributes)),
      };
      return n.body && (r.body = { stringValue: n.body }), r;
    });
    e.length !== 0 &&
      ((P(this, ce)[ce] = []), await P(this, le)[le].exportLogs(e));
  }
}
function ii(t, e) {
  var n;
  const { name: r, value: a, unit: i, timeUnixNano: o, attributes: s } = e,
    l = (n = e.bounds) !== null && n !== void 0 ? n : ri,
    c = new Array(l.length + 1).fill(0);
  t[r] ||
    (t[r] = {
      name: r,
      unit: i || "1",
      histogram: { aggregationTemporality: er, dataPoints: [] },
    });
  for (let u = 0; u < c.length; u++) {
    const h = l[u];
    if (h === void 0) c[u] = 1;
    else if (a <= h) {
      c[u] = 1;
      break;
    }
  }
  t[r].histogram.dataPoints.push({
    startTimeUnixNano: o,
    timeUnixNano: o,
    count: 1,
    sum: a,
    min: a,
    max: a,
    bucketCounts: c,
    explicitBounds: l,
    attributes: yt(s != null ? s : {}),
  });
}
function oi(t, e) {
  const {
    name: n,
    value: r,
    unit: a,
    timeUnixNano: i,
    attributes: o,
    scale: s,
  } = e;
  t[n] ||
    (t[n] = {
      name: n,
      unit: a || "1",
      exponentialHistogram: { aggregationTemporality: er, dataPoints: [] },
    });
  const l = r <= 0 ? 0 : r,
    c = s || 3,
    u = 2 ** c / Math.log(2),
    h = Math.ceil(Math.log(r) * u) - 1,
    p = r <= 0 ? 1 : 0,
    y = { offset: 0, bucketCounts: [] },
    v = { offset: r > 0 ? h : 0, bucketCounts: r > 0 ? [1] : [] };
  t[n].exponentialHistogram.dataPoints.push({
    attributes: yt(o != null ? o : {}),
    startTimeUnixNano: i,
    timeUnixNano: i,
    count: 1,
    sum: l,
    scale: c,
    zeroCount: p,
    positive: v,
    negative: y,
    min: l,
    max: l,
    zeroThreshold: 0,
  });
}
function si(t, e) {
  const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = e;
  t[n] ||
    (t[n] = {
      name: n,
      unit: a || "1",
      sum: { aggregationTemporality: er, isMonotonic: !0, dataPoints: [] },
    }),
    t[n].sum.dataPoints.push({
      startTimeUnixNano: i,
      timeUnixNano: i,
      asDouble: r,
      attributes: yt(o != null ? o : {}),
    });
}
function li(t, e) {
  const { name: n, value: r, unit: a, timeUnixNano: i, attributes: o } = e;
  t[n] || (t[n] = { name: n, unit: a || "1", gauge: { dataPoints: [] } }),
    t[n].gauge.dataPoints.push({
      startTimeUnixNano: i,
      timeUnixNano: i,
      asDouble: r,
      attributes: yt(o != null ? o : {}),
    });
}
var Fe = ae("url"),
  de = ae("serviceName"),
  Ue = ae("logger"),
  $e = ae("fetchFn");
class ci {
  constructor(e, n, r) {
    Object.defineProperty(this, Fe, { writable: !0, value: void 0 }),
      Object.defineProperty(this, de, { writable: !0, value: void 0 }),
      Object.defineProperty(this, Ue, { writable: !0, value: void 0 }),
      Object.defineProperty(this, $e, { writable: !0, value: void 0 }),
      (P(this, Fe)[Fe] = e.replace(/\/v1\/(logs|metrics|traces)\/?$/, "")),
      (P(this, de)[de] = n),
      (P(this, Ue)[Ue] = r == null ? void 0 : r.logger),
      (P(this, $e)[$e] = r == null ? void 0 : r.fetchFn);
  }
  async exportMetrics(e) {
    const n = {
      resourceMetrics: [
        {
          resource: {
            attributes: [
              { key: "service.name", value: { stringValue: P(this, de)[de] } },
            ],
          },
          scopeMetrics: [
            {
              scope: {
                name: "open-telemetry-mini-client",
                version: "1.1.0",
                attributes: [],
              },
              metrics: e,
            },
          ],
        },
      ],
    };
    await this.exportTo(n, "/v1/metrics");
  }
  async exportLogs(e) {
    const n = {
      resourceLogs: [
        {
          resource: {
            attributes: [
              { key: "service.name", value: { stringValue: P(this, de)[de] } },
            ],
          },
          scopeLogs: [
            {
              scope: {
                name: "open-telemetry-mini-client",
                version: "1.1.0",
                attributes: [],
              },
              logRecords: e,
            },
          ],
        },
      ],
    };
    await this.exportTo(n, "/v1/logs");
  }
  async exportTo(e, n) {
    var r;
    const a = await this.exporterFetch()("".concat(P(this, Fe)[Fe]).concat(n), {
      method: "POST",
      keepalive: !0,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    if (
      ((r = P(this, Ue)[Ue]) === null ||
        r === void 0 ||
        r.log({ status: a.status }),
      !a.ok)
    ) {
      if (a.status === 400) {
        const i = await a.text();
        throw new ze("Invalid OpenTelemetry Data: ".concat(i));
      }
      if (a.status === 429 || a.status === 503) {
        const i = await a.json(),
          o = a.headers.get("Retry-After"),
          s = o ? { seconds: Number(o) } : void 0;
        throw new ze("Server did not accept data", {
          errorData: i,
          retryAfter: s,
          body: e,
        });
      }
      throw new ze("Server responded with ".concat(a.status));
    }
  }
  exporterFetch() {
    return P(this, $e)[$e] || fetch;
  }
}
class ze extends Error {
  constructor(e, n) {
    super(e),
      (this.metadata = void 0),
      (this.name = "OpenTelemetryClientError"),
      (this.metadata = n);
  }
}
const di = "https://otlp-http-production.shopifysvc.com",
  ui = "portable_wallets";
var Re;
class hi {
  constructor(e) {
    G(this, Re), z(this, Re, e);
  }
  async exportMetrics(e) {
    var n;
    try {
      await S(this, Re).exportMetrics(e);
    } catch (r) {
      if (r instanceof ze) {
        const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
        if (a) {
          await new Promise((i) => {
            setTimeout(() => {
              this.exportMetrics(e), i();
            }, a.seconds * 1e3);
          });
          return;
        }
      }
      throw r;
    }
  }
  async exportLogs(e) {
    var n;
    try {
      await S(this, Re).exportLogs(e);
    } catch (r) {
      if (r instanceof ze) {
        const a = (n = r.metadata) == null ? void 0 : n.retryAfter;
        if (a) {
          await new Promise((i) => {
            setTimeout(() => {
              this.exportLogs(e), i();
            }, a.seconds * 1e3);
          });
          return;
        }
      }
      throw r;
    }
  }
}
Re = new WeakMap();
const pi = new ci(di, ui),
  mi = new hi(pi),
  T = new ai({ exporter: mi });
var F = ((t) => (
    (t.Decelerated = "portable_wallets_decelerated"),
    (t.InitCompleted = "portable_wallets_init_completed"),
    (t.InstrumentLoadEligibility =
      "portable_wallets_instrument_load_eligibility"),
    (t.InstrumentLoadTime = "portable_wallets_instrument_load_time"),
    (t.InstrumentLoadTimeFromPageLoad =
      "portable_wallets_instrument_load_time_from_page_load"),
    (t.MonorailProduceError = "portable_wallets_monorail_produce_error"),
    (t.SheetClicked = "portable_wallets_sheet_clicked"),
    (t.SheetCancelled = "portable_wallets_sheet_cancelled"),
    (t.SheetFailed = "portable_wallets_sheet_failed"),
    (t.AuthorizationAttempt = "portable_wallets_authorization_attempt"),
    (t.AuthorizationComplete = "portable_wallets_authorization_complete"),
    (t.CartTokenMissing = "portable_wallets_cart_token_missing"),
    (t.GooglePayNotEligibleWebview =
      "portable_wallets_google_pay_not_eligible_webview"),
    (t.WalletConfigDeveloperError =
      "portable_wallets_wallet_config_developer_error"),
    (t.LegacyCartCookie = "portable_wallets_legacy_cart_cookie"),
    t
  ))(F || {}),
  ge = ((t) => (
    (t.InstrumentSdkLoaded = "portable_wallets_instrument_sdk_loaded"),
    (t.InstrumentSdkFailed = "portable_wallets_instrument_sdk_failed"),
    (t.InstrumentSdkEligible = "portable_wallets_instrument_sdk_eligible"),
    (t.InstrumentSdkNotEligible =
      "portable_wallets_instrument_sdk_not_eligible"),
    t
  ))(ge || {});
const yi = ["Chrome-Lighthouse"];
function gi() {
  const t = navigator.userAgent;
  return yi.some((e) => t.includes(e));
}
async function fi(t) {
  if (gi()) return;
  f.leaveBreadcrumb("monorail event produced to ".concat(t.schemaId), t);
  let e;
  try {
    e = await Za({ event: t });
  } catch (n) {}
  if (!(e != null && e.ok))
    try {
      T.counter({
        name: F.MonorailProduceError,
        value: 1,
        attributes: { schemaId: t.schemaId },
      });
    } catch (n) {}
}
const Er = "shopify_wallet_checkout_track/6.2";
async function q(t) {
  var e, n, r, a, i, o, s;
  let l = null;
  try {
    const c = await bi();
    if (
      ((l = {
        schemaId: Er,
        payload: {
          app_name: "storefront",
          page_type: Bi(),
          checkout_one: !0,
          event: t.event,
          event_subtype: t.eventSubtype,
          checkout_token: t.checkoutToken,
          instrument_id: t.instrumentId,
          ttl: t.ttl,
          error_reason: t.errorReason,
          uniq_token: (e = c == null ? void 0 : c.uniqToken) != null ? e : "",
          visit_token: (n = c == null ? void 0 : c.visitToken) != null ? n : "",
          micro_session_id:
            (r = c == null ? void 0 : c.microSessionId) != null ? r : "",
          micro_session_count:
            (a = c == null ? void 0 : c.microSessionCount) != null ? a : 0,
          shop_id: (i = c == null ? void 0 : c.shopId) != null ? i : 0,
          theme_id: c == null ? void 0 : c.themeId,
          theme_city_hash:
            (o = c == null ? void 0 : c.themeCityHash) != null ? o : "",
          content_language:
            (s = c == null ? void 0 : c.contentLanguage) != null ? s : "",
          referer: c == null ? void 0 : c.referer,
        },
      }),
      !(t != null && t.event))
    ) {
      f.notify(new Error("Event is required"), {
        metadata: {
          request: { monorail: { schemaId: Er, payload: JSON.stringify(l) } },
        },
      });
      return;
    }
    await fi(l);
  } catch (c) {
    f.notify(
      new wi("Failed to send monorail event: ".concat(c), { cause: c }),
      {
        metadata: {
          request: { monorail: { payload: JSON.stringify(l != null ? l : t) } },
        },
      }
    );
  }
}
async function bi() {
  var t, e, n, r, a;
  return (
    ((e =
      (t = window == null ? void 0 : window.ShopifyAnalytics) == null
        ? void 0
        : t.lib) != null &&
      e.trekkie) ||
      (await new Promise((i) => {
        const o = setInterval(() => {
            var l, c;
            (c =
              (l = window == null ? void 0 : window.ShopifyAnalytics) == null
                ? void 0
                : l.lib) != null &&
              c.trekkie &&
              (clearInterval(o), i());
          }, 100),
          s = setTimeout(() => {
            clearInterval(o), clearTimeout(s), i();
          }, 7e3);
      })),
    (a =
      (r = (n = window.ShopifyAnalytics) == null ? void 0 : n.lib) == null
        ? void 0
        : r.trekkie) == null
      ? void 0
      : a.defaultAttributes
  );
}
class wi extends Error {
  constructor() {
    super(...arguments), d(this, "name", "MonorailError");
  }
}
var B = ((t) => (
  (t.CartInitCalled = "portable_wallets_cart_init_called"),
  (t.ClickSheetCancelled = "portable_wallets_instrument_click_sheet_cancelled"),
  (t.ClickSheetFailed = "portable_wallets_instrument_click_sheet_failure"),
  (t.ClickSheetSuccess = "portable_wallets_instrument_click_sheet_success"),
  (t.SheetFailed = "portable_wallets_instrument_sheet_failed"),
  (t.AuthorizationAttempt = "portable_wallets_authorization_attempt"),
  (t.AuthorizationComplete = "portable_wallets_authorization_complete"),
  (t.InitCalled = "portable_wallets_init_called"),
  (t.InitFailed = "portable_wallets_init_failed"),
  (t.InitSuccess = "portable_wallets_init_success"),
  (t.UpdateFailed = "portable_wallets_instrument_update_failed"),
  (t.InstrumentLoaded = "portable_wallets_instrument_loaded"),
  (t.InstrumentLoadFailed = "portable_wallets_instrument_load_failed"),
  t
))(B || {});
const Ar = {
  [C.Checkout]: "bwp_checkout_widget_click",
  [C.CartAjax]: "bwp_cart_widget_click",
  [C.CartPage]: "bwp_cart_widget_click",
  [C.ProductPage]: "bwp_widget_click",
  [C.Unknown]: "bwp_widget_click",
};
function _i({ apiClientId: t, skus: e, pageType: n }) {
  var r;
  if (!((r = window.Shopify) != null && r.analytics)) return;
  const a = (n && Ar[n]) || "bwp_widget_click";
  a === Ar[C.Checkout] &&
    window.Shopify.analytics.publish(
      "shopify:app:pixels:load:".concat(t),
      {},
      { sendTo: "PIXEL-LOADER" }
    ),
    window.Shopify.analytics.publish(a, { skus: e }, { sendTo: t });
}
function Ei() {
  q({ event: B.InitCalled });
}
function Ai(t) {
  var e, n;
  const r = "error" in t ? "failed" : t.result,
    a =
      "error" in t && Ui(t.error)
        ? "[".concat(t.error.name, "]: ").concat(t.error.code)
        : ("eventType" in t && t.eventType) || void 0;
  q({ event: r === "success" ? B.InitSuccess : B.InitFailed, eventSubtype: a }),
    T.counter({
      name: F.InitCompleted,
      value: 1,
      attributes: {
        result: r,
        eventType: a,
        recoveredFailure: !!(
          (n = (e = window.Shopify) == null ? void 0 : e.PaymentButton) !=
            null && n.failedToLoad
        ),
      },
    });
}
function Ci({ instrumentOrComponentName: t, result: e, measurement: n }) {
  q({
    event: e === "success" ? B.InstrumentLoaded : B.InstrumentLoadFailed,
    instrumentId: t,
    ttl: n,
  }),
    n != null &&
      (T.histogram({
        name: F.InstrumentLoadTime,
        value: n,
        attributes: { instrument: t },
        unit: "ms",
      }),
      T.histogram({
        name: F.InstrumentLoadTimeFromPageLoad,
        value: window.performance.now(),
        attributes: { instrument: t },
        unit: "ms",
      }));
}
function Si({ instrument: t, measurement: e, result: n }) {
  const r = n === "success" ? ge.InstrumentSdkLoaded : ge.InstrumentSdkFailed;
  q({
    event: r,
    instrumentId: t,
    ttl: e,
    errorReason: n === "success" ? void 0 : n,
  }),
    e != null &&
      T.histogram({
        name: ge.InstrumentSdkLoaded,
        value: e,
        attributes: { instrument: t, result: n },
        unit: "ms",
      });
}
function Ii({ instrument: t, result: e, reason: n }) {
  const r =
    e === "success" ? ge.InstrumentSdkEligible : ge.InstrumentSdkNotEligible;
  q({ event: r, instrumentId: t }),
    T.counter({
      name: ge.InstrumentSdkEligible,
      value: 1,
      attributes: { instrument: t, reason: n, result: e },
    });
}
function Pi({ instrument: t, result: e, reason: n }) {
  T.counter({
    name: F.InstrumentLoadEligibility,
    value: 1,
    attributes: { instrument: t, result: e, reason: n },
  });
}
function vi({ instrument: t, result: e, webPixelMetaData: n }) {
  q({
    event: e === "success" ? B.ClickSheetSuccess : B.ClickSheetFailed,
    instrumentId: t,
  }),
    T.counter({
      name: F.SheetClicked,
      value: 1,
      attributes: { instrument: t, result: e },
    }),
    t === g.BuyWithPrime && n && _i(n);
}
function Di(t, e) {
  q({ event: "".concat(B.UpdateFailed, "-").concat(e), instrumentId: t });
}
function Ri(t) {
  q({ event: B.ClickSheetCancelled, instrumentId: t }),
    T.counter({
      name: F.SheetCancelled,
      value: 1,
      attributes: { instrument: t },
    });
}
function Ni(t, e) {
  q({
    event: B.SheetFailed,
    instrumentId: t,
    errorReason: e == null ? void 0 : e.message,
  }),
    T.counter({ name: F.SheetFailed, value: 1, attributes: { instrument: t } });
}
function Ti(t) {
  q({ event: B.AuthorizationAttempt, instrumentId: t }),
    T.counter({
      name: F.AuthorizationAttempt,
      value: 1,
      attributes: { instrument: t },
    });
}
function Li({ instrument: t, measurement: e, result: n }) {
  q({
    event: B.AuthorizationComplete,
    eventSubtype: n,
    ttl: e,
    instrumentId: t,
  }),
    e != null &&
      T.histogram({
        name: F.AuthorizationComplete,
        value: e,
        attributes: { instrument: t, result: n },
        unit: "ms",
      });
}
function Oi({ instrument: t, reason: e }) {
  T.counter({
    name: F.Decelerated,
    value: 1,
    attributes: { instrument: t, reason: e },
  }),
    b.flushTelemetry();
}
function ki({ reason: t }) {
  T.counter({ name: F.CartTokenMissing, value: 1, attributes: { reason: t } });
}
function xi() {
  T.counter({ name: F.WalletConfigDeveloperError, value: 1 });
}
function Mi() {
  T.counter({ name: F.LegacyCartCookie, value: 1 });
}
function Fi() {
  window.setInterval(() => {
    sn();
  }, 1e3);
}
function Ui(t) {
  return (t == null ? void 0 : t.name) === Je.name;
}
function sn() {
  T.exportMetrics(), T.exportLogs();
}
function $i(t) {
  T.log(t);
}
const b = {
  initStarted: N(Ei),
  initCompleted: N(Ai),
  instrumentLoaded: N(Ci),
  instrumentLoadEligibility: N(Pi),
  instrumentSDKLoaded: N(Si),
  instrumentSDKEligible: N(Ii),
  sheetClicked: N(vi),
  sheetCancelled: N(Ri),
  sheetFailed: N(Ni),
  updateFailed: N(Di),
  authorizationAttempt: N(Ti),
  authorizationComplete: N(Li),
  startExporter: N(Fi),
  decelerated: N(Oi),
  cartTokenMissing: N(ki),
  walletConfigDeveloperError: N(xi),
  legacyCartCookie: N(Mi),
  flushTelemetry: N(sn),
  log: N($i),
};
function N(t) {
  return (...e) => {
    try {
      t(...e);
    } catch (n) {
      f.notify(n);
    }
  };
}
const Ge = [];
function ie(t, e, n) {
  if (window.customElements != null)
    try {
      const r = e;
      window.customElements.get(t) ||
        (window.customElements.define(t, r),
        n != null && n.isChildCustomElement && Ge.push(t));
    } catch (r) {
      f.notify(r), Wa();
    }
}
function ot() {
  const t = new URLSearchParams(window.location.search);
  return function (e) {
    return !!t.get(e);
  };
}
function Bi() {
  var t, e, n, r;
  const a = (t = window.Shopify) == null ? void 0 : t.CartType;
  if (a === C.CartAjax) return C.CartAjax;
  if (a === C.CartPage) return C.CartPage;
  const i =
    (r =
      (n = (e = window.ShopifyAnalytics) == null ? void 0 : e.meta) == null
        ? void 0
        : n.page) == null
      ? void 0
      : r.pageType;
  if (i)
    switch (i.toLowerCase()) {
      case "product":
        return C.ProductPage;
      case "cart":
        return C.CartPage;
    }
  const o = document.querySelector("#shop-js-analytics");
  if (o)
    try {
      const s = JSON.parse(o.textContent || "{}");
      if (s.pageType)
        switch (s.pageType.toLowerCase()) {
          case "product":
            return C.ProductPage;
          case "cart":
            return C.CartPage;
        }
    } catch (s) {
      console.error("Error parsing JSON script tag:", s);
    }
  return C.Unknown;
}
function fe(t) {
  return Number(t).toFixed(2);
}
function ln(t) {
  if (!(!t || !t.id || !t.id.includes("gid://shopify/Cart/")))
    return t.id.replace("gid://shopify/Cart/", "").split("?")[0];
}
function Z() {
  let t;
  return [new Promise((e) => (t = e)), t];
}
const Hi = {
  force_shop_pay_product: "direct_checkout_product",
  force_shop_pay_cart: "direct_checkout_cart",
};
function re(t, e = "no_redirect_for_checkout") {
  b.flushTelemetry();
  const n = new URL(t);
  switch (e) {
    case "skip_shop_pay":
      n.searchParams.set("skip_shop_pay", "true");
      break;
    case "no_redirect_for_checkout":
      n.searchParams.set("storefront_wallet", "true");
      break;
    case "force_shop_pay_cart":
    case "force_shop_pay_product":
    case "force_shop_pay": {
      n.searchParams.set("payment", "shop_pay");
      const r = Hi[e];
      r && n.searchParams.set("redirect_source", r);
      break;
    }
  }
  window.location.assign(n.toString());
}
function cn() {
  return !!document.querySelector(
    '[data-source-attribution="shopify.shop-promise-pdp"]'
  );
}
function Ve() {
  return new Date().getTime();
}
function tr(t) {
  return t.find(
    (e) => typeof e == "object" && (e == null ? void 0 : e.code) === it
  );
}
class Gi extends HTMLElement {
  constructor() {
    super(),
      d(this, "overflow"),
      d(this, "formerFocus"),
      this.attachShadow({ mode: "open" }),
      (this.overflow = ""),
      (this.formerFocus = document.activeElement);
  }
  connectedCallback() {
    const e = mt();
    this.render(e);
    const n = this.shadowRoot,
      r = n.getElementById("modal");
    n.querySelectorAll("button").forEach((o) =>
      o.addEventListener("click", this.closeModal.bind(this))
    );
    const a = n.getElementById("overlay");
    a == null ||
      a.addEventListener("click", (o) => this.handleOutsideClick(o, r)),
      document.addEventListener("keydown", this.handleEscapeKey.bind(this));
    const i = document.createElement("style");
    (i.textContent = ua),
      n.appendChild(i),
      (this.overflow = document.body.style.overflow),
      (document.body.style.overflow = "hidden"),
      this.trapFocus(r, n),
      ie("svg-icon", da);
  }
  trapFocus(e, n) {
    if (!e) return;
    const r = e.querySelectorAll("a[href], button"),
      a = Array.from(r),
      i = a[0],
      o = a[a.length - 1];
    e.addEventListener("keydown", (s) => {
      s.key === "Tab" &&
        !s.shiftKey &&
        n.activeElement === o &&
        (s.preventDefault(), i.focus()),
        s.key === "Tab" &&
          s.shiftKey &&
          n.activeElement === i &&
          (s.preventDefault(), o.focus());
    }),
      i.focus();
  }
  handleOutsideClick(e, n) {
    n && (n.contains(e.target) || this.closeModal());
  }
  handleEscapeKey(e) {
    e.key === "Escape" && this.closeModal();
  }
  closeModal() {
    var e;
    (document.body.style.overflow = this.overflow),
      this.remove(),
      this.formerFocus &&
        "focus" in (this == null ? void 0 : this.formerFocus) &&
        typeof this.formerFocus.focus == "function" &&
        ((e = this.formerFocus) == null || e.focus());
  }
  render(e) {
    const n = this.getAttribute("title"),
      r = this.getAttribute("has-close-button"),
      a = e.translate("error_dialogs.checkout.button_text"),
      i =
        '\n      <footer>\n        <button type="button" id="close-button" tabindex="0">'.concat(
          a,
          "</button>\n      </footer>\n    "
        );
    this.shadowRoot.innerHTML =
      '\n      <div id="overlay">\n        <div id="modal" role="dialog" aria-modal="true" aria-labelledby="title">\n          <header>\n            <h2 id="title">\n              <span class="capitalize">'
        .concat(
          n,
          '</span>\n            </h2>\n            <button type="button" id="close-icon" aria-label='
        )
        .concat(
          a,
          ' tabindex="0">\n              <svg-icon color="gray"></svg-icon>\n            </button>\n          </header>\n          <div id="content">\n            <p><slot></slot></p>\n          </div>\n          '
        )
        .concat(r ? i : "", "\n        </div>\n      </div>\n    ");
  }
}
const Vi =
  "@keyframes topLevelModalLoadingSkeleton{50%{opacity:1}75%{opacity:.5}to{opacity:1}}top-level-modal .text-skeleton{display:inline-block;width:100%;height:14px;margin-bottom:7px;animation:topLevelModalLoadingSkeleton 4s ease infinite;animation-delay:-.168s;text-decoration:none!important;background-color:#dedede}top-level-modal .text-skeleton:last-of-type{width:50%}";
function gt({ type: t = "button", label: e = void 0 } = {}) {
  const n = document.createElement("button");
  return (n.type = t), e && n.setAttribute("aria-label", e), n;
}
function ft(t, e) {
  for (const [n, r] of Object.entries(e)) t.setAttribute(n, r);
}
function Cr(t, e) {
  for (const [n, r] of Object.entries(e)) t.style.setProperty(n, r);
}
function _e(t, e) {
  const n = document.createElement("top-level-modal");
  (n.textContent = e),
    ft(n, {
      "data-testid": "top-level-modal",
      "has-close-button": "true",
      title: t,
    }),
    document.body.appendChild(n);
}
function rr(t, e, n) {
  const r = document.createElement("top-level-modal");
  ft(r, { "data-testid": "top-level-modal", title: t }),
    e instanceof Promise
      ? ((r.innerHTML = "\n      <style>".concat(
          Vi,
          '</style>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n      <span class="text-skeleton">&nbsp;</span>\n    '
        )),
        e
          .then((a) => {
            a && a !== ""
              ? (r.innerHTML = a)
              : (r.innerHTML = n != null ? n : "");
          })
          .catch(() => {
            r.innerHTML = n != null ? n : "";
          }))
      : (r.innerHTML = e),
    document.body.appendChild(r);
}
function W(t, e) {
  _e(
    e.translate("error_dialogs.wallet.title", { wallet: t }),
    e.translate("error_dialogs.wallet.generic_error", { wallet: t })
  );
}
function Ee(t, e) {
  _e(t.translate("error_dialogs.checkout.title"), e);
}
ie("top-level-modal", Gi);
class bt extends HTMLElement {
  get buyerCountry() {
    return this.getAttribute("buyer-country");
  }
  get recommendedInstrument() {
    return this.getAttribute("recommended-instrument");
  }
  get buyerCurrency() {
    const e = this.getAttribute("buyer-currency");
    if (e == null) throw new Error("WalletElement buyer-currency is null");
    return e;
  }
  get cartPrepareMigrationEnabled() {
    return this.hasAttribute("cart-prepare");
  }
  get accessToken() {
    return this.getAttribute("access-token");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(e) {
    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  get hasSellingPlan() {
    const e = this.getAttribute("has-selling-plan");
    return e === "true" || e === "";
  }
  set hasSellingPlan(e) {
    e
      ? this.setAttribute("has-selling-plan", "")
      : this.removeAttribute("has-selling-plan");
  }
  get isShippingRequired() {
    const e = this.getAttribute("requires-shipping");
    return e === "true" || e === "";
  }
  set isShippingRequired(e) {
    e
      ? this.setAttribute("requires-shipping", "")
      : this.removeAttribute("requires-shipping");
  }
  get pciEnabled() {
    return this.hasAttribute("pci-enabled");
  }
}
const qi = "#more-payment-options-link{cursor:pointer}";
function zi(t) {
  const e = (n) => {
    n.persisted && (t(), window.removeEventListener("pageshow", e));
  };
  window.addEventListener("pageshow", e);
}
var m = ((t) => (
  (t.InvalidLanguage =
    "Variable $language of type LanguageCode was provided invalid value"),
  (t.InvalidCountry =
    "Variable $country of type CountryCode was provided invalid value"),
  (t.MissingCartId = "Variable $cartId of type ID! was provided invalid value"),
  (t.BuyerIdentityInvalidCountry =
    "Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode"),
  (t.BuyerIdentityInvalidPhone = "INVALID: buyerIdentity.phone"),
  (t.BuyerIdentityEmailRequired = "BUYER_IDENTITY_EMAIL_REQUIRED"),
  (t.BuyerIdentityEmailDomainInvalid =
    "BUYER_IDENTITY_EMAIL_DOMAIN_IS_INVALID"),
  (t.BuyerIdentityEmailNotExpectedPattern =
    "BUYER_IDENTITY_EMAIL_DOES_NOT_MATCH_EXPECTED_PATTERN"),
  (t.BuyerIdentityEmailInvalid = "INVALID: buyerIdentity.email"),
  (t.CaptchaCompletionRequired = "CAPTCHA_COMPLETION_REQUIRED"),
  (t.CustomValidation = "".concat(it)),
  (t.DeliveryFirstNameInvalid = "DELIVERY_FIRST_NAME_INVALID"),
  (t.DeliveryFirstNameRequired = "DELIVERY_FIRST_NAME_REQUIRED"),
  (t.BuyerIdentityDeliveryFirstNameRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryFirstNameContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryFirstNameTooLong =
    "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryFirstNameContainsUrl =
    "ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryFirstNameContainsHtmlTags =
    "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryFirstNameDoesNotMatchExpectedPattern =
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName"),
  (t.DeliveryLastNameInvalid = "DELIVERY_LAST_NAME_INVALID"),
  (t.DeliveryLastNameRequired = "DELIVERY_LAST_NAME_REQUIRED"),
  (t.BuyerIdentityDeliveryLastNameRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.DeliveryLastNameContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.DeliveryLastNameTooLong =
    "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.DeliveryLastNameContainsUrl =
    "ADDRESS_FIELD_CONTAINS_URL: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.DeliveryLastNameContainsHtmlTags =
    "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.DeliveryLastNameDoesNotMatchExpectedPattern =
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName"),
  (t.BuyerIdentityDeliveryAddress1Required =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1"),
  (t.DeliveryAddress1Required = "DELIVERY_ADDRESS1_REQUIRED"),
  (t.DeliveryAddress1Invalid = "DELIVERY_ADDRESS1_INVALID"),
  (t.DeliveryAddress1TooLong =
    "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1"),
  (t.DeliveryAddress1ContainsHtmlTags =
    "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1"),
  (t.DeliveryAddress1ContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1"),
  (t.DeliveryAddress2Required = "DELIVERY_ADDRESS2_REQUIRED"),
  (t.DeliveryAddress2AddressFieldRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2"),
  (t.DeliveryAddress2Invalid = "DELIVERY_ADDRESS2_INVALID"),
  (t.DeliveryAddress2TooLong =
    "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2"),
  (t.DeliveryAddress2ContainsHtmlTags =
    "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2"),
  (t.DeliveryAddress2ContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2"),
  (t.DeliveryCityRequired = "DELIVERY_CITY_REQUIRED"),
  (t.DeliveryCityAddressFieldRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city"),
  (t.DeliveryCityInvalid = "DELIVERY_CITY_INVALID"),
  (t.DeliveryCityTooLong =
    "ADDRESS_FIELD_IS_TOO_LONG: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city"),
  (t.DeliveryCityContainsHtmlTags =
    "ADDRESS_FIELD_CONTAINS_HTML_TAGS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city"),
  (t.DeliveryCityContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city"),
  (t.DeliveryZoneNotFound = "DELIVERY_ZONE_NOT_FOUND"),
  (t.DeliveryZoneRequiredForCountry = "DELIVERY_ZONE_REQUIRED_FOR_COUNTRY"),
  (t.DeliveryProvinceRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.province"),
  (t.DeliveryPostalCodeInvalid = "DELIVERY_POSTAL_CODE_INVALID"),
  (t.DeliveryInvalidPostalCodeForZone =
    "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE"),
  (t.DeliveryInvalidPostalCodeForCountry =
    "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY"),
  (t.DeliveryPostalCodeRequired = "DELIVERY_POSTAL_CODE_REQUIRED"),
  (t.DeliveryPostalCodeAddressFieldRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip"),
  (t.DeliveryZipInvalidForProvince = "INVALID_ZIP_CODE_FOR_PROVINCE"),
  (t.BuyerIdentityDeliveryZipInvalidForProvince =
    "INVALID_ZIP_CODE_FOR_PROVINCE: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip"),
  (t.DeliveryZipInvalidForCountry =
    "INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip"),
  (t.DeliveryPostalCodeContainsEmojis =
    "ADDRESS_FIELD_CONTAINS_EMOJIS: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip"),
  (t.DeliveryCountryRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country"),
  (t.DeliveryCountryInvalid =
    "INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country"),
  (t.DeliveryPhoneNumberRequired = "DELIVERY_PHONE_NUMBER_REQUIRED"),
  (t.BuyerIdentityDeliveryPhoneNumberRequired =
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone"),
  (t.DeliveryOptionsPhoneNumberRequired =
    "DELIVERY_OPTIONS_PHONE_NUMBER_REQUIRED"),
  (t.DeliveryPhoneNumberInvalid = "DELIVERY_PHONE_NUMBER_INVALID"),
  (t.DeliveryPhoneDoesNotMatchExpectedPattern =
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone"),
  (t.MerchandiseOutOfStock = "MERCHANDISE_OUT_OF_STOCK"),
  (t.MerchandiseNotEnoughStock = "MERCHANDISE_NOT_ENOUGH_STOCK"),
  (t.InvalidQuantity = "INVALID: input.lines.0.quantity"),
  (t.DeliveryOutOfStockAtOrigin = "DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION"),
  (t.DeliveryExternalPromiseUnfulfillable =
    "DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE"),
  (t.MerchandiseNotApplicable = "MERCHANDISE_NOT_APPLICABLE"),
  (t.MerchandiseVariantNotFound = "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND"),
  (t.MerchandiseNotFound = "MERCHANDISE_NOT_FOUND"),
  (t.MerchandiseNotPublished = "MERCHANDISE_PRODUCT_NOT_PUBLISHED"),
  (t.MerchandiseNotSupportedForB2B =
    "MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B"),
  (t.MerchandiseBundleRequiresComponents =
    "MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS"),
  (t.MerchandiseGiftCardsNotSupported =
    "MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED"),
  (t.MerchandiseGiftCardGreaterThanZero =
    "MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO"),
  (t.MerchandiseGiftCardCannotExceedLimit =
    "MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT"),
  (t.UnacceptablePaymentsAmount = "PAYMENTS_UNACCEPTABLE_PAYMENT_AMOUNT"),
  (t.DiscountNotApplicable = "DISCOUNT_NOT_APPLICABLE"),
  (t.DeliveryNotAvailable = "DELIVERY_NO_DELIVERY_AVAILABLE"),
  (t.DeliveryNoStrategyAvailable = "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE"),
  (t.DeliveryNoLocalPickupStrategyAvailable =
    "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE"),
  (t.DeliveryLineChanged = "DELIVERY_DELIVERY_LINE_DETAIL_CHANGED"),
  (t.DeliveryLocalPickupLineChanged =
    "DELIVERY_LOCAL_PICKUP_DELIVERY_LINE_DETAIL_CHANGED"),
  (t.DeliveryNoDeliveryAvailableForMerchandise =
    "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE"),
  (t.DeliveryFulfillmentConstraintNotSatisfied =
    "DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED"),
  (t.DeliveryFulfillmentLocationConstraint =
    "DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED"),
  (t.NoDeliveryGroupSelected = "NO_DELIVERY_GROUP_SELECTED"),
  (t.DeliveryOptionInvalid =
    "INVALID_DELIVERY_OPTION: selectedDeliveryOptions"),
  (t.DeliveryGroupInvalid = "INVALID_DELIVERY_GROUP: selectedDeliveryOptions"),
  (t.DeliveryDetailChanged = "DELIVERY_DETAIL_CHANGED"),
  (t.PendingDeliveryGroups = "PENDING_DELIVERY_GROUPS"),
  (t.InvalidPaymentAmount = "INVALID_PAYMENT: amount"),
  (t.InvalidPaymentPaymentAmount = "INVALID_PAYMENT: payment.amount"),
  (t.NewTaxMustBeAccepted = "TAX_NEW_TAX_MUST_BE_ACCEPTED"),
  (t.MerchandiseExpectedPriceMismatch = "MERCHANDISE_EXPECTED_PRICE_MISMATCH"),
  (t.InvalidPaymentApplePayBillingAddress =
    "INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress"),
  (t.InvalidPaymentGooglePayBillingAddress =
    "INVALID_PAYMENT: payment.walletPaymentMethod.googlePayWalletContent.billingAddress"),
  (t.InvalidPaymentBillingAddress =
    "INVALID_PAYMENT: payment.freePaymentMethod.billingAddress"),
  (t.UnsupportedGooglePayPaymentMethod =
    "PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.googlePayWalletContent"),
  (t.UnsupportedApplePayPaymentMethod =
    "PAYMENT_METHOD_NOT_SUPPORTED: payment.walletPaymentMethod.applePayWalletContent"),
  t
))(m || {});
const ji = [
    "DELIVERY_FIRST_NAME_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName",
  ],
  Yi = [
    "DELIVERY_FIRST_NAME_INVALID",
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.firstName",
  ],
  Wi = [
    "DELIVERY_LAST_NAME_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName",
  ],
  Ki = [
    "DELIVERY_LAST_NAME_INVALID",
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.lastName",
  ],
  Qi = [
    "DELIVERY_ADDRESS1_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address1",
  ],
  Ji = [
    "DELIVERY_ADDRESS2_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.address2",
  ],
  Xi = [
    "DELIVERY_CITY_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.city",
  ],
  Zi = [
    "DELIVERY_POSTAL_CODE_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip",
  ],
  dn = [
    "DELIVERY_POSTAL_CODE_INVALID",
    "INVALID_ZIP_CODE_FOR_COUNTRY: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip",
    "INVALID_ZIP_CODE_FOR_PROVINCE",
    "DELIVERY_INVALID_POSTAL_CODE_FOR_ZONE",
    "DELIVERY_INVALID_POSTAL_CODE_FOR_COUNTRY",
    "INVALID_ZIP_CODE_FOR_PROVINCE: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.zip",
  ],
  eo = [
    "DELIVERY_PHONE_NUMBER_REQUIRED",
    "ADDRESS_FIELD_IS_REQUIRED: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone",
  ],
  to = [
    "INVALID: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.country",
    "Variable $buyerIdentity of type CartBuyerIdentityInput! was provided invalid value for countryCode",
  ],
  ro = [
    "DELIVERY_PHONE_NUMBER_INVALID",
    "INVALID: buyerIdentity.phone",
    "ADDRESS_FIELD_DOES_NOT_MATCH_EXPECTED_PATTERN: buyerIdentity.deliveryAddressPreferences.0.deliveryAddress.phone",
  ],
  un = [
    "INVALID_DELIVERY_OPTION: selectedDeliveryOptions",
    "INVALID_DELIVERY_GROUP: selectedDeliveryOptions",
    "DELIVERY_NO_DELIVERY_AVAILABLE",
    "DELIVERY_DETAIL_CHANGED",
    "NO_DELIVERY_GROUP_SELECTED",
    "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE",
    "DELIVERY_LOCAL_PICKUP_NO_DELIVERY_STRATEGY_AVAILABLE",
  ],
  hn = ["INVALID_PAYMENT: amount", "INVALID_PAYMENT: payment.amount"],
  no = [
    "INVALID_PAYMENT: payment.freePaymentMethod.billingAddress",
    "INVALID_PAYMENT: payment.walletPaymentMethod.applePayWalletContent.billingAddress",
  ],
  pn = [
    "DELIVERY_NO_DELIVERY_STRATEGY_AVAILABLE_FOR_MERCHANDISE_LINE",
    "DELIVERY_OUT_OF_STOCK_AT_ORIGIN_LOCATION",
    "DELIVERY_MUST_FULFILL_FROM_CONSTRAINT_NOT_SATISFIED",
    "DELIVERY_MUST_FULFILL_FROM_SAME_LOCATION_CONSTRAINT_NOT_SATISFIED",
    "DELIVERY_EXTERNAL_PROMISE_UNFULFILLABLE",
    "MERCHANDISE_OUT_OF_STOCK",
    "MERCHANDISE_PRODUCT_VARIANT_NOT_FOUND",
    "MERCHANDISE_NOT_FOUND",
    "MERCHANDISE_PRODUCT_NOT_PUBLISHED",
    "MERCHANDISE_SELLING_PLANS_NOT_SUPPORTED_FOR_B2B",
    "MERCHANDISE_BUNDLE_REQUIRES_COMPONENTS",
    "MERCHANDISE_GIFT_CARDS_COMPONENTS_NOT_SUPPORTED",
    "MERCHANDISE_GIFT_CARD_PRICE_MUST_BE_GREATER_THAN_ZERO",
    "MERCHANDISE_GIFT_CARD_PRICE_MUST_NOT_EXCEED_LIMIT",
    "INVALID: input.lines.0.quantity",
    "MERCHANDISE_NOT_APPLICABLE",
  ],
  ao = {
    currency_changed: Pt.CURRENCY_CHANGE,
    captcha_required: Pt.CAPTCHA_REQUIRED,
    not_enough_stock: Pt.NOT_ENOUGH_STOCK,
    out_of_stock: null,
  };
function nt(t) {
  if (!(!t || t.length === 0)) {
    if (t.includes("MERCHANDISE_OUT_OF_STOCK")) return "out_of_stock";
    if (t.includes("MERCHANDISE_NOT_ENOUGH_STOCK")) return "not_enough_stock";
  }
}
function nr({ currentCartTotal: t, initialBuyerCurrency: e }) {
  const n = t.amount;
  return !(
    !n ||
    Number(n) === 0 ||
    e.toUpperCase() === t.currencyCode.toUpperCase()
  );
}
function x({ checkoutUrl: t, instrumentName: e, reason: n }) {
  if (!t) throw new Error("Invalid Checkout URL");
  const r = new URL(t),
    a = ao[n];
  a && r.searchParams.set(a, "true"),
    b.decelerated({ instrument: e, reason: n }),
    re(r.toString());
}
class io extends Error {
  constructor(e) {
    super("[".concat(e.name, "] ").concat(e.message)),
      (this.stack = e.stack),
      (this.name = "HandleCreateCartError");
  }
}
async function oe({ element: t, instrumentName: e, dataSource: n }) {
  try {
    const r = await n.getInitialCart(e),
      { cart: a, errors: i, warnings: o } = r;
    zi(() => {
      t && (t.disabled = !1);
    });
    const s = tr(i);
    if (!a && !s) throw new Error("[".concat(e, "] Failed to create cart"));
    if (a && !a.id) throw new Error("[".concat(e, "] received invalid cart"));
    if (a && !a.checkoutUrl)
      throw new Error("[".concat(e, "] Created cart with no checkout URL"));
    const l = i.length === 1 && i[0] === m.InvalidQuantity;
    if (i.length > 0 && !(l || s))
      throw new Error("Failed to create cart: ".concat(JSON.stringify(i)));
    return {
      cart: a,
      warnings: o,
      customValidationError: s,
      hasStockProblems: nt(o),
    };
  } catch (r) {
    throw new io(r);
  } finally {
    t.disabled = !1;
  }
}
class oo extends bt {
  constructor() {
    super(),
      d(this, "name", g.MoreOptions),
      d(this, "anchor"),
      d(this, "i18n"),
      d(this, "dataSource"),
      d(this, "classNames"),
      d(this, "setI18n"),
      d(this, "setDataSource"),
      d(this, "setClassNames"),
      ([this.i18n, this.setI18n] = Z()),
      ([this.dataSource, this.setDataSource] = Z()),
      ([this.classNames, this.setClassNames] = Z());
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  connectedCallback() {
    this.anchor || this.render();
  }
  attributeChangedCallback(e, n, r) {
    n !== r &&
      e === "disabled" &&
      this.anchor &&
      (r === ""
        ? this.anchor.setAttribute("aria-disabled", "true")
        : this.anchor.removeAttribute("aria-disabled"),
      this.setAccessibilityAttributes());
  }
  async handleClick(e) {
    var n, r;
    if ((e.preventDefault(), this.disabled || !this.anchor)) return;
    this.disabled = !0;
    const [a, i] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        hasStockProblems: o,
        cart: s,
        customValidationError: l,
      } = await oe({
        element: this,
        instrumentName: g.MoreOptions,
        dataSource: i,
      });
      if (l) {
        Ee(a, l.message);
        return;
      }
      if (o) {
        x({
          checkoutUrl:
            (n = s == null ? void 0 : s.checkoutUrl) != null ? n : "",
          instrumentName: g.MoreOptions,
          reason: o,
        });
        return;
      }
      const c =
        this.recommendedInstrument === g.ShopPay
          ? "skip_shop_pay"
          : "allow_redirect";
      b.sheetClicked({ instrument: g.MoreOptions, result: "success" }),
        re((r = s == null ? void 0 : s.checkoutUrl) != null ? r : "", c);
    } catch (o) {
      b.sheetClicked({ instrument: g.MoreOptions, result: "failed" }),
        f.notify(o),
        _e(
          a.translate("error_dialogs.checkout.title"),
          a.translate("error_dialogs.checkout.generic_error")
        );
    }
  }
  async render() {
    const e = await this.i18n,
      n = await this.classNames;
    (this.anchor = document.createElement("a")),
      (this.anchor.textContent = e.translate("more_payment_options")),
      (this.anchor.className = n),
      this.anchor.setAttribute("id", "more-payment-options-link"),
      (this.anchor.onclick = (a) => this.handleClick(a)),
      this.setAccessibilityAttributes(),
      this.appendChild(this.anchor);
    const r = document.createElement("style");
    (r.textContent = qi), this.appendChild(r);
  }
  setAccessibilityAttributes() {
    this.anchor &&
      (this.disabled
        ? (this.anchor.removeAttribute("href"), (this.anchor.role = "link"))
        : (this.anchor.removeAttribute("role"), (this.anchor.href = "#")));
  }
}
var M = ((t) => (
  (t.ButtonDisplay = "buttonDisplay"),
  (t.LoadInstrument = "loadInstrument"),
  (t.LoadSdk = "loadSDK"),
  (t.AuthorizationLatency = "authorizationLatency"),
  t
))(M || {});
function mn() {
  var t, e;
  return (
    !!((t = window.performance) != null && t.mark) &&
    !!((e = window.performance) != null && e.measure)
  );
}
function wt(t, e) {
  return Xe(t, e), () => ne(t, e);
}
function Xe(t, e) {
  mn() && window.performance.mark("".concat(t, "-").concat(e, "-start"));
}
function ne(t, e) {
  var n, r;
  if (mn())
    try {
      const a = "".concat(t, "-").concat(e, "-start"),
        i = "".concat(t, "-").concat(e, "-end"),
        o = "".concat(t, "-").concat(e, "-duration");
      window.performance.mark(i);
      const s =
          (r = window.performance.measure(o, a, i)) != null
            ? r
            : (n = window.performance.getEntriesByName(o, "measure")) == null
            ? void 0
            : n[0],
        l = s == null ? void 0 : s.duration;
      if (l == null) {
        f.notify(
          new Sr("Could not measure performance of ".concat(t, " ").concat(e)),
          { severity: "warning" }
        );
        return;
      }
      return l;
    } catch (a) {
      a instanceof SyntaxError ||
        f.notify(
          new Sr(
            "An error occurred when attempting to measure benchmark duration "
              .concat(t, " with context ")
              .concat(e, ": ")
              .concat(a),
            { cause: a }
          )
        );
      return;
    }
}
class Sr extends Error {
  constructor() {
    super(...arguments), d(this, "name", "BenchmarkError");
  }
}
function ar(t, e, n) {
  if (Ge != null && Ge.length) {
    const r = Ge.join(",");
    t.querySelectorAll(r).forEach((a) => {
      n === null ? a.removeAttribute(e) : a.setAttribute(e, n);
    });
  }
}
function so(t, e) {
  try {
    const n = JSON.parse(t != null ? t : "[]");
    if (!(n instanceof Array))
      throw new Error("[".concat(e, "] invalid walletConfigs found"));
    return n;
  } catch (n) {
    throw new Error(
      "[".concat(e, "] Error while parsing walletConfigs JSON: ").concat(n)
    );
  }
}
function lo(t, e) {
  try {
    return t ? JSON.parse(t) : null;
  } catch (n) {
    throw new Error(
      "[".concat(e, "] Error while parsing walletConfig JSON: ").concat(n)
    );
  }
}
function ir(t, e) {
  var n;
  const r = e == null ? void 0 : e.getLoadEligibility(t);
  return (
    b.instrumentLoadEligibility({
      instrument: e == null ? void 0 : e.getInstrumentName(),
      result: r != null && r.eligible ? "success" : "failed",
      reason: (r != null && r.eligible) || r == null ? void 0 : r.reason,
    }),
    (n = r == null ? void 0 : r.eligible) != null ? n : !1
  );
}
function co(t, e) {
  return e.filter((n) => ir(t, n));
}
async function Ft({ walletInstrument: t, instanceNumber: e }) {
  const n = t.getInstrumentName(),
    r = wt(M.LoadSdk, "".concat(n, ":").concat(e));
  try {
    await t.loadWalletSDK(),
      b.instrumentSDKLoaded({
        instrument: n,
        measurement: r(),
        result: "success",
      });
  } catch (i) {
    return (
      f.notify(i),
      b.instrumentSDKLoaded({
        instrument: n,
        measurement: r(),
        result: "failed",
      }),
      null
    );
  }
  let a;
  try {
    a = t.getPartnerSDKEligibility();
  } catch (i) {
    f.notify(i), (a = { eligible: !1, reason: "uncaught exception" });
  }
  return a.eligible
    ? (b.instrumentSDKEligible({ instrument: n, result: "success" }), t)
    : (b.instrumentSDKEligible({
        instrument: n,
        reason: a.reason,
        result: "failed",
      }),
      null);
}
class or extends bt {
  constructor() {
    super(...arguments),
      d(this, "name", null),
      d(this, "apiClient"),
      d(this, "i18n"),
      d(this, "policy"),
      d(this, "isFetchingPolicy", !1);
  }
  get shopId() {
    return this.getAttribute("shop-id");
  }
  get cartId() {
    return this.getAttribute("cart-id");
  }
  get walletConfigs() {
    return this.getAttribute("wallet-configs");
  }
  get recommendedWallet() {
    return this.getAttribute("recommended");
  }
  get fallbackWallet() {
    return this.getAttribute("fallback");
  }
  get variantParams() {
    var e;
    try {
      return JSON.parse(
        (e = this.getAttribute("variant-params")) != null ? e : "[]"
      );
    } catch (n) {
      throw new Je({
        code: "invalid-variant-params",
        message:
          "variant-params must be a valid JSON string. Received variant-params: "
            .concat(this.getAttribute("variant-params"), ", received error: ")
            .concat(n),
      });
    }
  }
  get styleExtractorDisabled() {
    return this.hasAttribute("disable-compat");
  }
  get onlySdk() {
    return this.hasAttribute("only-sdk");
  }
  triggerLoadedEvent() {
    document.dispatchEvent(
      new Event("shopify:payment_button:loaded", {
        bubbles: !0,
        cancelable: !0,
      })
    );
  }
  async attributeChangedCallback(e, n, r) {
    n !== r && ar(this, e, r);
  }
  showBuyerConsent(e, n) {
    var r, a, i;
    !e ||
      !n ||
      (i =
        (a = (r = window.Shopify) == null ? void 0 : r.PaymentButton) == null
          ? void 0
          : a.showBuyerConsent) == null ||
      i.call(a, (o) => this.onClickSubscriptionPolicy(o, e, n));
  }
  hideBuyerConsent() {
    var e, n, r;
    (r =
      (n = (e = window.Shopify) == null ? void 0 : e.PaymentButton) == null
        ? void 0
        : n.hideBuyerConsent) == null || r.call(n);
  }
  clearUI() {
    this.innerHTML = "";
  }
  async onClickSubscriptionPolicy(e, n, r) {
    if ((e.preventDefault(), this.isFetchingPolicy)) return;
    if (this.policy) {
      this.showPolicy(this.policy, r);
      return;
    }
    this.isFetchingPolicy = !0;
    const a = this.fetchSubscriptionPolicy(n)
      .then((i) => ((this.policy = i), i))
      .catch(
        (i) => (f.notify(i), r.translate("subscriptions.policy_not_found"))
      )
      .finally(() => {
        this.isFetchingPolicy = !1;
      });
    this.showPolicy(a, r);
  }
  async fetchSubscriptionPolicy(e) {
    const n = await e.fetchSubscriptionPolicy();
    return (this.policy = n), n;
  }
  showPolicy(e, n) {
    rr(
      n.translate("subscriptions.cancellation_policy"),
      e,
      n.translate("subscriptions.policy_not_found")
    );
  }
}
function yn({ type: t, form: e }) {
  if (!e) return [];
  const n = document.querySelectorAll(
      '[name^="'
        .concat(t, '"][form^="')
        .concat(CSS.escape(e.getAttribute("id") || ""), '"]')
    ),
    r = e.querySelectorAll('[name^="'.concat(t, '"]')),
    a = [...n, ...r],
    i = {};
  return (
    a.forEach((o) => {
      const s = uo(o),
        l = ho(o);
      s && typeof l < "u" && l.trim() !== "" && (i[s] = l);
    }),
    Object.entries(i != null ? i : {}).map(([o, s]) => ({ key: o, value: s }))
  );
}
function _t({ page: t, element: e }) {
  const n =
      t === "product"
        ? '[data-shopify="payment-button"]'
        : '[data-shopify="dynamic-checkout-cart"]',
    r = Ir(e, n) || document.querySelector(n);
  return Ir(r, "form");
}
const Be = Element.prototype;
function Ir(t, e) {
  if (
    ((Be.matches =
      Be.matches ||
      Be.webkitMatchesSelector ||
      Be.msMatchesSelector ||
      Be.mozMatchesSelector),
    !t || t.matches(e))
  )
    return t;
  let n = t;
  for (; n && n !== document.body; )
    if (((n = n.parentElement), n && n.matches(e))) return n;
  return null;
}
function uo(t) {
  const e = t.getAttribute("name");
  if (e === null) return null;
  const n = e.indexOf("["),
    r = e.lastIndexOf("]");
  return n === -1 || r === -1 ? null : e.substring(n + 1, r);
}
function ho(t) {
  if (
    !(["radio", "checkbox"].includes(t.type) && !t.checked) &&
    !(t.value === "" || typeof t.value > "u")
  )
    return t.value;
}
function sr(t) {
  const e = _t({ page: "product", element: t });
  return gn(e);
}
function gn(t) {
  var e;
  const n = t == null ? void 0 : t.elements;
  if (!n) return null;
  const r = at(n, "id");
  if (!r || isNaN(Number(r))) return null;
  const a = Number((e = at(n, "quantity")) != null ? e : "1"),
    i = "gid://shopify/ProductVariant/".concat(r),
    o = at(n, "selling_plan"),
    s = o ? "gid://shopify/SellingPlan/".concat(o) : void 0,
    l = yn({ type: "properties", form: t });
  return {
    variantId: r,
    quantity: a,
    merchandiseId: i,
    sellingPlanId: s,
    lineItemProperties: l,
  };
}
function po(t) {
  const e = t == null ? void 0 : t.elements;
  return e ? !!at(e, "selling_plan") : !1;
}
function at(t, e) {
  var n;
  const r = t.namedItem(e);
  return r && "value" in r && (n = r.value) != null ? n : null;
}
class fn {
  constructor(e, n) {
    d(this, "addToCartMutationObserver"),
      d(this, "addToCartForm"),
      d(this, "addToCartButtons"),
      (this.element = e),
      (this.onFormChanged = n),
      (this.addToCartMutationObserver = null),
      (this.addToCartForm = null),
      (this.addToCartButtons = []);
  }
  setupMutationObservers() {
    if ((this.findAndSetAddToCartButtons(), !this.addToCartForm)) return;
    this.syncComponentStateWithForm();
    const e = new MutationObserver(() => this.reobserveOnFormChanges());
    (this.addToCartMutationObserver = new MutationObserver(() =>
      this.syncComponentStateWithForm()
    )),
      e.observe(this.addToCartForm, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["value"],
      }),
      this.observeAddToCartButtons();
  }
  syncComponentStateWithForm() {
    if (!this.addToCartForm) {
      this.onFormChanged({ disabled: !0, hasSellingPlan: !1 });
      return;
    }
    const e = gn(this.addToCartForm),
      n = !!(
        this.addToCartButtons.length > 0 &&
        this.addToCartButtons.every(
          (r) =>
            r.hasAttribute("disabled") ||
            r.getAttribute("aria-disabled") === "true"
        )
      );
    this.onFormChanged({
      disabled: n || e === null,
      hasSellingPlan: po(this.addToCartForm),
      variantId: e == null ? void 0 : e.variantId,
      sellingPlanId: e == null ? void 0 : e.sellingPlanId,
    });
  }
  observeAddToCartButtons() {
    this.addToCartButtons.forEach((e) => {
      this.addToCartMutationObserver.observe(e, { attributes: !0 });
    });
  }
  reobserveOnFormChanges() {
    var e;
    (e = this.addToCartMutationObserver) == null || e.disconnect(),
      this.findAndSetAddToCartButtons(),
      this.observeAddToCartButtons(),
      this.syncComponentStateWithForm();
  }
  findAndSetAddToCartButtons() {
    (this.addToCartForm = _t({ page: "product", element: this.element })),
      this.addToCartForm &&
        (this.addToCartButtons = [
          ...this.addToCartForm.querySelectorAll("[type=submit]"),
        ]);
  }
}
function mo(t, e, n) {
  try {
    const r = JSON.parse(t != null ? t : "{}"),
      a = JSON.parse(
        e != null
          ? e
          : JSON.stringify({ name: "buy_it_now", wallet_params: {} })
      );
    if (r === null || Object.keys(r).length === 0) {
      if (!(a instanceof Object))
        throw new Error(
          "[".concat(n, "] Invalid fallback wallet configs JSON")
        );
      return { recommendedWallet: null, fallbackWallet: a };
    }
    return { recommendedWallet: r, fallbackWallet: a };
  } catch (r) {
    throw r instanceof SyntaxError
      ? (b.walletConfigDeveloperError(),
        new Je({
          code: "invalid-recommended-fallback-json",
          message: "recommended / fallback must be valid JSON",
        }))
      : new Error(
          "["
            .concat(n, "] Error while parsing recommended/fallback JSON: ")
            .concat(r)
        );
  }
}
const yo =
    ".shopify-payment-button__button--hidden{visibility:hidden}.shopify-payment-button__button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);width:100%;border:none;box-shadow:0 0 0 0 transparent;color:#fff;cursor:pointer;display:block;font-size:1em;font-weight:500;line-height:1;text-align:center;transition:background .2s ease-in-out}.shopify-payment-button__button[disabled]{opacity:.6;cursor:default}.shopify-payment-button__button--unbranded{background-color:#1990c6;padding:1em 2em}.shopify-payment-button__button--unbranded:hover:not([disabled]){background-color:#136f99}.shopify-payment-button__more-options{background:transparent;border:0 none;cursor:pointer;display:block;font-size:1em;margin-top:1em;text-align:center;text-decoration:underline;width:100%}.shopify-payment-button__more-options.shopify-payment-button__skeleton{height:auto!important;min-height:0!important;border-radius:4px!important;width:50%;margin-left:25%;margin-right:25%}.shopify-payment-button__more-options[disabled]{opacity:.6;cursor:default!important}.shopify-payment-button__button.shopify-payment-button__button--branded{display:flex;flex-direction:column;position:relative;z-index:1}.shopify-payment-button__button.shopify-payment-button__button--branded .shopify-cleanslate{flex:1!important;display:flex!important;flex-direction:column!important}.shopify-payment-button__button.button.loading{position:relative;color:transparent}.shopify-payment-button__button.button.loading>.loading-overlay__spinner{top:50%;left:50%;transform:translate(-50%,-50%);position:absolute;height:100%;display:flex;align-items:center}.shopify-payment-button__button.button.loading>.loading-overlay__spinner .spinner{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content}.button.loading>.loading-overlay__spinner .path{stroke:#fff}.shopify-payment-button__button .loading-overlay__spinner{width:1.8rem;display:inline-block}.shopify-payment-button__button .spinner{animation:shopify-rotator 1.4s linear infinite}@keyframes shopify-rotator{0%{transform:rotate(0)}to{transform:rotate(270deg)}}.shopify-payment-button__button .path{stroke-dasharray:280;stroke-dashoffset:0;transform-origin:center;stroke:#121212;animation:shopify-dash 1.4s ease-in-out infinite}@media screen and (forced-colors: active){.shopify-payment-button__button .path{stroke:CanvasText}}@keyframes shopify-dash{0%{stroke-dashoffset:280}50%{stroke-dashoffset:75;transform:rotate(135deg)}to{stroke-dashoffset:280;transform:rotate(450deg)}}@keyframes acceleratedCheckoutLoadingSkeleton{50%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}75%{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-end, .5)}to{opacity:var(--shopify-accelerated-checkout-skeleton-animation-opacity-start, 1)}}.shopify-payment-button__skeleton{animation:acceleratedCheckoutLoadingSkeleton var(--shopify-accelerated-checkout-skeleton-animation-duration, 4s) var(--shopify-accelerated-checkout-skeleton-animation-timing-function, ease) infinite;animation-delay:-.168s;background-color:var(--shopify-accelerated-checkout-skeleton-background-color, #dedede);box-sizing:border-box;text-decoration:none!important;height:var(--shopify-accelerated-checkout-button-block-size, inherit);min-height:25px;max-height:55px;border-radius:var(--shopify-accelerated-checkout-button-border-radius, inherit)}.shopify-payment-button__button{border-radius:0}#shopify-buyer-consent{margin-top:1em;display:inline-block;width:100%}#shopify-buyer-consent.hidden{display:none}#shopify-subscription-policy-button{background:none;border:none;padding:0;text-decoration:underline;font-size:inherit;cursor:pointer}#shopify-subscription-policy-button:before{box-shadow:none}",
  bn =
    '.accelerated-checkout-button{height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);min-height:clamp(25px,var(--shopify-accelerated-checkout-button-block-size, 44px),55px);border-radius:var(--shopify-accelerated-checkout-button-border-radius, 0px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow);min-width:150px}:host([page-type="cart_page"]) .accelerated-checkout-button{height:100%;width:100%;border-radius:var(--shopify-accelerated-checkout-button-border-radius, 4px);box-shadow:var(--shopify-accelerated-checkout-button-box-shadow)}@media (forced-colors: active){.accelerated-checkout-button{border:1px solid transparent!important}:host([page-type="cart_page"]) .accelerated-checkout-button{border:1px solid transparent!important}}',
  go = 70;
class je {
  constructor(e, n, r, a) {
    d(this, "red"),
      d(this, "green"),
      d(this, "blue"),
      d(this, "opacity"),
      (this.red = e || 0),
      (this.green = n || 0),
      (this.blue = r || 0),
      (this.opacity = typeof a > "u" ? 1 : a);
  }
  getLuminance() {
    const e = this.red & 255,
      n = this.green & 255,
      r = this.blue & 255;
    return e * 0.2126 + n * 0.7152 + r * 0.0722;
  }
  isDark() {
    return this.opacity === 0 ? !1 : this.getLuminance() / this.opacity < go;
  }
  blendWith(e, n) {
    (this.opacity = 1 - (1 - e.opacity) * (1 - n.opacity)),
      (this.red = this.blend(e.red, n.red, e, n)),
      (this.green = this.blend(e.green, n.green, e, n)),
      (this.blue = this.blend(e.blue, n.blue, e, n));
  }
  blend(e, n, r, a) {
    return Math.round(
      (e * r.opacity) / this.opacity +
        (n * a.opacity * (1 - r.opacity)) / this.opacity
    );
  }
}
function fo(t) {
  const e = [...t];
  let n = new je(0, 0, 0, 0),
    r = new je(255, 255, 255, 1),
    a = e.shift();
  for (; a; )
    n.opacity > 0 && a.opacity > 0
      ? ((r = new je(0, 0, 0, 0)), r.blendWith(a, n))
      : a.opacity > 0
      ? (r = a)
      : (r = n),
      (n = r),
      (a = e.shift());
  return r;
}
const Ut = new je(255, 255, 255, 1);
function bo(t) {
  const e = [];
  let n = t;
  for (; n.parentElement; ) {
    n = n.parentElement;
    const r = window.getComputedStyle(n).backgroundColor,
      a = wo(r);
    if ((r && e.push(a), a.opacity === 1)) break;
  }
  try {
    return fo(e.reverse());
  } catch (r) {
    return (
      f.notify(
        new wn(
          "[BackgroundDetection] Failed to blend colors for element ".concat(
            t.outerHTML
          ),
          { cause: r }
        )
      ),
      Ut
    );
  }
}
function wo(t) {
  if (!t) return Ut;
  try {
    const e = t.split("(")[1].split(")")[0].replace(" ", "").split(",");
    return new je(
      Number(e[0]),
      Number(e[1]),
      Number(e[2]),
      typeof e[3] > "u" ? 1 : Number(e[3])
    );
  } catch (e) {
    f.notify(
      new wn(
        "[BackgroundDetection] Failed to convert rgbString to array ".concat(t),
        { cause: e }
      )
    );
  }
  return Ut;
}
class wn extends Error {
  constructor() {
    super(...arguments), d(this, "name", "ColorProcessingError");
  }
}
class Ae extends bt {
  constructor() {
    super(),
      d(this, "name", null),
      d(this, "i18n"),
      d(this, "dataSource"),
      d(this, "apiClient"),
      d(this, "classNames"),
      d(this, "containerInstanceNumber"),
      d(this, "onRendered"),
      d(this, "setI18n"),
      d(this, "setDataSource"),
      d(this, "setApiClient"),
      d(this, "setClassNames"),
      d(this, "setContainerInstanceNumber"),
      d(this, "parsedWalletParams"),
      (this.onRendered = () => {}),
      ([this.i18n, this.setI18n] = Z()),
      ([this.dataSource, this.setDataSource] = Z()),
      ([this.apiClient, this.setApiClient] = Z()),
      ([this.classNames, this.setClassNames] = Z()),
      ([this.containerInstanceNumber, this.setContainerInstanceNumber] = Z());
  }
  async cleanupOnFailure(e, n) {
    var r;
    try {
      await e();
    } catch (a) {
      f.notify(
        new _o(
          "An error occurred requiring cleanup when attempting to render the "
            .concat(n, " instrument: ")
            .concat(a),
          { cause: a }
        )
      );
      const i = await this.containerInstanceNumber;
      b.instrumentLoaded({
        instrumentOrComponentName: n,
        result: "failed",
        measurement: ne(M.ButtonDisplay, "".concat(n, ":").concat(i)),
      }),
        (r = this.parentElement) == null || r.remove();
    }
  }
  attributeChangedCallback(e, n, r, a) {
    n !== r &&
      e === "disabled" &&
      a &&
      (r === ""
        ? (a.setAttribute("aria-disabled", "true"),
          a.setAttribute("disabled", ""))
        : (a.removeAttribute("aria-disabled"), a.removeAttribute("disabled")));
  }
  get pageType() {
    return this.getAttribute("page-type") || C.Unknown;
  }
  get buttonTheme() {
    return bo(this).isDark() ? "LIGHT" : "DARK";
  }
  get isCTA() {
    return this.hasAttribute("call-to-action");
  }
  get walletParams() {
    var e;
    if (this.parsedWalletParams === void 0)
      try {
        this.parsedWalletParams = JSON.parse(
          (e = this.getAttribute("wallet-params")) != null ? e : "{}"
        );
      } catch (n) {
        throw new Error("Error while parsing wallet-params JSON: ".concat(n));
      }
    return this.parsedWalletParams;
  }
  async initializeShadowStyles(e, n = "") {
    const r = document.createElement("style");
    (r.innerHTML = [bn, n].join("\n")), e.appendChild(r);
  }
  async ensureLightDOMIsNotEmpty() {
    this.textContent = "\xA0";
  }
}
class _o extends Error {
  constructor() {
    super(...arguments), d(this, "name", "CleanupOnFailureError");
  }
}
class Eo extends Ae {
  constructor() {
    super(...arguments), d(this, "name", g.BuyItNow), d(this, "button", null);
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  attributeChangedCallback(e, n, r) {
    super.attributeChangedCallback(e, n, r, this.button);
  }
  async handleClick() {
    var e, n;
    if (
      this.disabled ||
      !this.button ||
      this.button.getAttribute("aria-disabled")
    )
      return;
    this.disabled = !0;
    const [r, a] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        hasStockProblems: i,
        cart: o,
        customValidationError: s,
      } = await oe({ element: this, instrumentName: this.name, dataSource: a });
      if ((b.sheetClicked({ instrument: this.name, result: "success" }), s)) {
        Ee(r, s.message);
        return;
      }
      if (i) {
        x({
          checkoutUrl:
            (e = o == null ? void 0 : o.checkoutUrl) != null ? e : "",
          instrumentName: this.name,
          reason: i,
        });
        return;
      }
      re(
        (n = o == null ? void 0 : o.checkoutUrl) != null ? n : "",
        "allow_redirect"
      );
    } catch (i) {
      f.notify(i),
        b.sheetClicked({ instrument: this.name, result: "failed" }),
        _e(
          r.translate("error_dialogs.checkout.title"),
          r.translate("error_dialogs.checkout.generic_error")
        );
    }
  }
  async render() {
    var e;
    this.button || (this.button = gt());
    const n = await this.classNames;
    (this.button.textContent = (await this.i18n).translate(
      "instruments_copy.checkout.buy_now"
    )),
      (this.button.className = n),
      this.disabled && this.button.setAttribute("aria-disabled", "true"),
      (this.button.onclick = () => this.handleClick()),
      this.appendChild(this.button),
      (e = this.onRendered) == null || e.call(this);
  }
}
function Ao() {
  const t = navigator.userAgent,
    e = t.indexOf("Android") > -1,
    n = t.indexOf("Chrome/") > -1,
    r = parseInt((/Chrome\/([0-9]+)/.exec(t) || ["0", "0"])[1], 10);
  return e && n && r === 114;
}
class se {
  constructor(e) {
    d(this, "walletParams"), (this.walletParams = e.wallet_params);
  }
  static walletName() {
    throw new Error("Must define walletName for WalletInstrument subclass");
  }
  createWebComponent({
    walletContainer: e,
    dataSource: n,
    i18n: r,
    apiClient: a,
    containerInstanceNumber: i,
    classNames: o = "",
    callToAction: s,
    pageType: l = C.ProductPage,
    slot: c = "button",
    onRendered: u = () => {},
  }) {
    var h, p, y;
    const v = this.getWebComponentName();
    ie(v, this.getWebComponentClass(), { isChildCustomElement: !0 });
    const w = document.createElement(v),
      E = {
        "access-token": (h = e.accessToken) != null ? h : "",
        "buyer-country": (p = e.buyerCountry) != null ? p : "",
        "buyer-currency": e.buyerCurrency,
        "wallet-params": JSON.stringify(
          (y = this.walletParams) != null ? y : {}
        ),
        "page-type": l,
        slot: c,
      };
    try {
      e.disabled && w.setAttribute("disabled", ""),
        ft(w, E),
        e.isShippingRequired && w.setAttribute("requires-shipping", ""),
        e.hasSellingPlan && w.setAttribute("has-selling-plan", ""),
        e.pciEnabled && w.setAttribute("pci-enabled", "");
    } catch (I) {
      const L = I;
      throw L.message.includes("setAttribute is not a function") && Ao()
        ? new pt(L.message)
        : L;
    }
    return (
      s && w.setAttribute("call-to-action", ""),
      w.setDataSource(n),
      w.setApiClient(a),
      w.setI18n(r),
      w.setClassNames(o),
      w.setContainerInstanceNumber(i),
      (w.onRendered = u),
      w
    );
  }
  loadWalletSDK() {
    return Promise.resolve();
  }
  getLoadEligibility(e) {
    return { eligible: !0 };
  }
  getPartnerSDKEligibility() {
    return { eligible: !0 };
  }
}
class Co extends se {
  static walletName() {
    return "buy_it_now";
  }
  getWebComponentName() {
    return "shopify-buy-it-now-button";
  }
  getInstrumentName() {
    return g.BuyItNow;
  }
  getWebComponentClass() {
    return Eo;
  }
}
const So =
    "shopify-paypal-button[disabled]{opacity:.5;cursor:not-allowed}shopify-paypal-button div.paypal-buttons>iframe{z-index:auto!important;border-radius:0!important;box-shadow:none}",
  Io = "::slotted(div){height:100%}";
async function De(t) {
  const { cartClient: e, instrumentName: n } = t;
  try {
    if (!t.cartId)
      throw new Error(
        "[".concat(n, "] provided no cart ID when updating buyer identity")
      );
    if (!e)
      throw new Error(
        "[".concat(
          n,
          "] provided invalid cart client when updating buyer identity"
        )
      );
    return await e.updateCartBuyerIdentity(t);
  } catch (r) {
    throw (b.updateFailed(n, "updateBuyerIdentity"), r);
  }
}
async function lr({
  cartId: t,
  totalAmount: e,
  paymentMethod: n,
  billingAddress: r,
  cartClient: a,
  instrumentName: i,
  abortSignal: o,
  hasSellingPlan: s,
  canUsePaymentMethodForFreeOrder: l,
}) {
  try {
    if (!t)
      throw new Error(
        "[".concat(i, "] provided no cart ID when updating payment")
      );
    if (!e)
      throw new Error(
        "[".concat(i, "] provided no total amount when updating payment")
      );
    if (!n)
      throw new Error(
        "[".concat(
          i,
          "] provided no apple pay wallet content when updating payment"
        )
      );
    if (!a)
      throw new Error(
        "[".concat(i, "] provided invalid cart client when updating payment")
      );
    const c = { freePaymentMethod: { billingAddress: r } };
    return await a.updateCartPayment(
      t,
      _(
        { amount: { amount: e.amount, currencyCode: e.currencyCode } },
        Number(e.amount) <= 0 && !l && !s ? c : n
      ),
      i,
      o
    );
  } catch (c) {
    throw (b.updateFailed(i, "updatePayment"), c);
  }
}
function _n(t) {
  return window[En(t)];
}
function En(t) {
  return "paypal-".concat(t.replace(/[^a-zA-Z0-9]/g, ""));
}
function Pr(t) {
  if (!t) return null;
  const e = getComputedStyle(t).borderRadius;
  return e.includes("px") ? parseInt(e, 10) : null;
}
function $t(t) {
  if (!t) return null;
  const e = getComputedStyle(t).height;
  return e.includes("px") ? parseInt(e, 10) : null;
}
function cr() {
  return (
    (typeof AbortController == "function" && new AbortController()) || null
  );
}
const Dt = 25,
  vr = 55;
var pe;
class Po extends Ae {
  constructor() {
    super(),
      d(this, "name", g.PayPal),
      d(this, "abortController"),
      d(this, "cartId"),
      d(this, "sdkButtonsComponent"),
      d(this, "container", null),
      d(this, "resizeObserver", null),
      d(this, "buttonHeight"),
      d(this, "rendering", !1),
      d(this, "prevBorderRadius", 0),
      d(this, "prevHeight", 0),
      G(this, pe),
      z(this, pe, this.attachShadow({ mode: "closed" })),
      (this.abortController = cr()),
      (this.resizeObserver =
        (typeof ResizeObserver == "function" &&
          new ResizeObserver(() => this.onResize())) ||
        null);
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async disconnectedCallback() {
    (this.innerHTML = ""),
      (S(this, pe).innerHTML = ""),
      await this.teardownPayPalButton(),
      this.resizeObserver && this.resizeObserver.disconnect();
  }
  async teardownPayPalButton() {
    var e;
    try {
      await ((e = this.sdkButtonsComponent) == null
        ? void 0
        : e.close().catch(() => {}));
    } catch (n) {
    } finally {
      this.sdkButtonsComponent = void 0;
    }
  }
  async onResize() {
    const e = Pr(this.container),
      n = $t(this.container),
      r =
        (e !== null && this.prevBorderRadius !== e) ||
        (n !== null && this.prevHeight !== n);
    !this.rendering &&
      r &&
      (await this.teardownPayPalButton(),
      (this.container.innerHTML = ""),
      await this.cleanupOnFailure(() => this.renderFromPayPalSDK(), this.name));
  }
  async render() {
    var e;
    const n = document.createElement("div");
    n.className = we.BUTTON;
    const r = document.createElement("style");
    (r.innerHTML = So),
      this.appendChild(r),
      await this.initializeShadowStyles(S(this, pe), Io),
      S(this, pe).appendChild(n),
      (this.container = n),
      this.renderFromPayPalSDK(),
      (e = this.resizeObserver) == null || e.observe(this.container);
  }
  getHeight() {
    const e = $t(this.container);
    return e
      ? e >= Dt && e <= vr
        ? e
        : e < Dt
        ? (console.debug(
            "[PayPalButton] Container height is less than the minimum height of the PayPal button. Using the minimum height of 25px."
          ),
          Dt)
        : (console.debug(
            "[PayPalButton] Container height is greater than the maximum height of the PayPal button. Using the maximum height of 55px."
          ),
          vr)
      : Aa;
  }
  async renderFromPayPalSDK() {
    var e, n, r;
    if (!this.container)
      throw new Error("button container not set when attempting to render");
    this.rendering = !0;
    const a = () => this.createToken(this.apiClient);
    let i, o;
    this.requiresBillingAgreement() ? (o = a) : (i = a);
    const s = Pr(this.container),
      l = this.getHeight();
    this.prevHeight = l;
    const c = await this.i18n,
      u = {
        color: "gold",
        label: this.isCTA ? "pay" : "paypal",
        disableMaxWidth: !0,
        height: l,
        shape: "sharp",
      };
    s && s > 0 && ((u.borderRadius = s), (this.prevBorderRadius = s)),
      (this.sdkButtonsComponent =
        (n = (e = _n(this.walletParams.sdkUrl)) == null ? void 0 : e.Buttons) ==
        null
          ? void 0
          : n.call(e, {
              fundingSource: "paypal",
              style: u,
              createOrder: i,
              createBillingAgreement: o,
              onApprove: async (h) => {
                await this.onApprove(h);
              },
              onCancel: () => {
                var h;
                b.sheetCancelled(this.name),
                  (h = this.abortController) == null || h.abort();
              },
              onClick: this.onClick.bind(this),
              onError: (h) => {
                var p;
                if (h.message === "Window is closed, can not determine type") {
                  b.sheetCancelled(this.name),
                    (p = this.abortController) == null || p.abort();
                  return;
                }
                f.notify(h);
                const y = c.translate("brand.paypal");
                W(y, c);
              },
            })),
      await ((r = this.sdkButtonsComponent) == null
        ? void 0
        : r.render(this.container)),
      (this.rendering = !1),
      this.onRendered();
  }
  async onClick(e, n) {
    var r, a;
    if (this.disabled) return n.reject();
    const i = this.getBoundingClientRect(),
      o = i.left + i.width / 2,
      s = i.top + i.height / 2,
      l = new MouseEvent("click", {
        view: window,
        bubbles: !0,
        cancelable: !1,
        clientX: o,
        clientY: s,
        screenX: window.screenX + o,
        screenY: window.screenY + s,
      });
    this.dispatchEvent(l);
    const [c, u] = await Promise.all([this.dataSource, this.i18n]);
    try {
      const {
        hasStockProblems: h,
        cart: p,
        customValidationError: y,
      } = await oe({ element: this, instrumentName: this.name, dataSource: c });
      if (y) return Ee(u, y.message), n.reject();
      const { hasManagedSellingPlanState: v } = this.walletParams;
      return v != null && v !== this.hasSellingPlan
        ? (re((r = p == null ? void 0 : p.checkoutUrl) != null ? r : ""),
          n.reject())
        : h
        ? (x({
            checkoutUrl:
              (a = p == null ? void 0 : p.checkoutUrl) != null ? a : "",
            instrumentName: this.name,
            reason: h,
          }),
          n.reject())
        : ((this.cartId = p.id), n.resolve());
    } catch (h) {
      return (
        b.sheetClicked({ instrument: this.name, result: "failed" }),
        f.notify(h),
        _e(
          u.translate("error_dialogs.checkout.title"),
          u.translate("error_dialogs.checkout.generic_error")
        ),
        n.reject()
      );
    }
  }
  async createToken(e) {
    const n = await e;
    try {
      if (!this.cartId) throw new Error("cartId not found when creating token");
      const r = await n.paypalTokenCreate(this.cartId);
      return b.sheetClicked({ instrument: this.name, result: "success" }), r;
    } catch (r) {
      throw (b.sheetClicked({ instrument: this.name, result: "failed" }), r);
    }
  }
  async onApprove({ orderID: e, payerID: n, billingToken: r }) {
    var a;
    try {
      if (
        (b.authorizationAttempt(this.name),
        Xe(M.AuthorizationLatency, this.name),
        !this.cartId)
      )
        throw new Error("Cart not found");
      const i = await this.apiClient,
        o = this.requiresBillingAgreement() && r != null ? r : e,
        {
          billingAddress: s,
          destinationAddress: l,
          expiresAt: c,
          email: u,
          remoteOrderId: h,
        } = await i.paypalBuyerDetailsFetch(o, this.cartId),
        { data: p } = await De({
          cartId: this.cartId,
          cartClient: i,
          instrumentName: this.name,
          emailAddress: u,
          streetAddress: l,
        });
      if (!p) throw new Error("Cart not found");
      const { id: y, checkoutUrl: v, totalAmount: w } = p;
      if (
        (await lr({
          abortSignal: (a = this.abortController) == null ? void 0 : a.signal,
          cartClient: i,
          cartId: y,
          instrumentName: g.PayPal,
          billingAddress: s != null ? s : l,
          paymentMethod: {
            walletPaymentMethod: {
              paypalWalletContent: {
                billingAddress: s != null ? s : l,
                email: u,
                expiresAt: c,
                payerId: n,
                token: h != null ? h : e,
                acceptedSubscriptionTerms: !1,
                vaultingAgreement: !1,
                merchantId: this.walletParams.merchantId,
              },
            },
          },
          canUsePaymentMethodForFreeOrder: !0,
          totalAmount: w,
        }),
        nr({ currentCartTotal: w, initialBuyerCurrency: this.buyerCurrency }))
      ) {
        x({
          checkoutUrl: v,
          instrumentName: this.name,
          reason: "currency_changed",
        });
        return;
      }
      b.authorizationComplete({
        instrument: this.name,
        result: "success",
        measurement: ne(M.AuthorizationLatency, this.name),
      }),
        re(v);
    } catch (i) {
      throw (
        (b.authorizationComplete({
          instrument: this.name,
          result: "failure",
          measurement: ne(M.AuthorizationLatency, this.name),
        }),
        i)
      );
    }
  }
  requiresBillingAgreement() {
    return (
      this.walletParams.hasManagedSellingPlanState ||
      this.walletParams.requiresBillingAgreement
    );
  }
}
pe = new WeakMap();
const Se = class ql extends se {
  static walletName() {
    return "paypal";
  }
  constructor(e) {
    super(e);
  }
  getWebComponentName() {
    return "shopify-paypal-button";
  }
  getInstrumentName() {
    return g.PayPal;
  }
  getWebComponentClass() {
    return Po;
  }
  loadWalletSDK() {
    let e = ql.paypalSDKPromiseByUrl.get(this.walletParams.sdkUrl);
    if (e) return e;
    const n = document.createElement("script");
    return (
      n.setAttribute("src", this.walletParams.sdkUrl),
      (e = new Promise((r, a) => {
        n.setAttribute("data-namespace", En(this.walletParams.sdkUrl)),
          (n.onload = () => r()),
          (n.onerror = (i) => {
            ql.paypalSDKPromiseByUrl.delete(this.walletParams.sdkUrl),
              n && document.body.contains(n) && document.body.removeChild(n),
              a(i);
          }),
          document.body.appendChild(n);
      })),
      ql.paypalSDKPromiseByUrl.set(this.walletParams.sdkUrl, e),
      e
    );
  }
  getLoadEligibility() {
    return { eligible: !0 };
  }
  getPartnerSDKEligibility() {
    var e, n;
    try {
      return (n =
        (e = _n(this.walletParams.sdkUrl)) == null ? void 0 : e.Buttons) !=
        null && n.call(e).isEligible()
        ? { eligible: !0 }
        : { eligible: !1, reason: "PayPal SDK not eligible" };
    } catch (r) {
      throw new Je({
        code: "paypal-sdk-eligibility-check-failed",
        message: "PayPal SDK 'isEligible' method failed unexpectedly: ".concat(
          r
        ),
      });
    }
  }
};
d(Se, "paypalSDKPromiseByUrl", new Map());
let Bt = Se;
const vo =
    ".apple-pay-button{display:flex;align-items:center;justify-content:center;width:100%;padding:0!important;cursor:pointer;border:none}.apple-pay-button:hover:not(:disabled){filter:brightness(92%)}.apple-pay-button:disabled{opacity:.5;cursor:not-allowed}.apple-pay-button svg{height:100%;flex-shrink:0}.apple-pay--content{font-size:16px;font-family:San Francisco,sans-serif;width:100%;height:100%;flex-grow:1;display:flex;align-items:center;justify-content:center;white-space:pre}.apple-pay--light{background:#fff;color:#000}.apple-pay--light svg{fill:#000}.apple-pay--dark{background:#000;color:#fff}.apple-pay--dark svg{fill:#fff}",
  Ht = { UK: "GB", JA: "JP" },
  An = ["AS", "GU", "MP", "PR", "VI"];
An.forEach((t) => {
  Ht[t] = "US";
});
function et(t) {
  var e, n;
  const r = t.countryCode,
    a = {
      firstName: t.givenName || void 0,
      lastName: t.familyName || void 0,
      address1:
        (e = t == null ? void 0 : t.addressLines) == null ? void 0 : e[0],
      address2:
        ((n = t == null ? void 0 : t.addressLines) == null ? void 0 : n[1]) ||
        void 0,
      city: t.locality || void 0,
      zip: t.postalCode || void 0,
      province: t.administrativeArea || t.subLocality || void 0,
      country: Do(t.countryCode),
      phone: t.phoneNumber || void 0,
    };
  return (
    a.country === "HK" && ((a.zip = void 0), (a.province = t.postalCode)),
    r && An.includes(r) && (a.province = r),
    a.lastName || (a.lastName = a.firstName),
    a
  );
}
function Do(t) {
  if (!t) return "ZZ";
  const e = t.toUpperCase();
  return Object.keys(Ht).includes(e) ? Ht[e] : e;
}
function Ro(t, e) {
  return t.map((n) => {
    const { title: r, deliveryPromise: a } = Lo(n, e);
    return {
      title: r,
      estimatedCost: {
        amount: To(n),
        currencyCode: n[0].estimatedCost.currencyCode,
      },
      handle: Sn(n),
      deliveryPromise: a,
    };
  });
}
function No(t, e) {
  return t.map((n) => {
    const { title: r, description: a } = Oo(n, e);
    return { title: r, description: a, handle: Sn(n) };
  });
}
function Cn({ deliveryGroups: t }) {
  return t
    .map((e) =>
      e.deliveryOptions
        .filter(({ deliveryMethodType: n }) => n === "SHIPPING")
        .map((n) => D(_({}, n), { groupType: e.groupType }))
    )
    .reduce((e, n) => e.flatMap((r) => n.map((a) => [...r, a])), [[]]);
}
function To(t) {
  return t.reduce((e, n) => e + Number(n.estimatedCost.amount), 0).toFixed(2);
}
function Lo(t, e) {
  const n = t.find((l) => l.groupType === be.OneTimePurchase),
    r = t.find((l) => l.groupType === be.Subscription),
    a = [
      ...new Set([n == null ? void 0 : n.title, r == null ? void 0 : r.title]),
    ].filter(Boolean),
    i = [
      ...new Set([
        n == null ? void 0 : n.deliveryPromise,
        r == null ? void 0 : r.deliveryPromise,
      ]),
    ].filter(Boolean),
    o =
      a.length === 2
        ? e.translate("shipping_methods.connect_shipping_methods", {
            methodOne: a[0],
            methodTwo: a[1],
          })
        : a[0],
    s =
      i.length === 2
        ? e.translate("delivery_promises.connect_delivery_promises", {
            promiseOne: i[0],
            promiseTwo: i[1],
          })
        : i[0];
  return { title: o, deliveryPromise: s };
}
function Oo(t, e) {
  const n = t.find((o) => o.groupType === be.OneTimePurchase),
    r = t.find((o) => o.groupType === be.Subscription),
    a = t.map(ko).filter(Boolean).join(", ");
  let i = (n == null ? void 0 : n.title) || (r == null ? void 0 : r.title);
  return (
    n &&
      r &&
      (i = e.translate("shipping_methods.connect_shipping_methods", {
        methodOne: n.title,
        methodTwo: r.title,
      })),
    { title: i, description: a }
  );
}
function ko(t) {
  const e = Number(t.estimatedCost.amount).toFixed(2),
    n = t.estimatedCost.currencyCode,
    r = t.deliveryPromise;
  return r
    ? "(".concat(r, ") ").concat(e, " ").concat(n)
    : "".concat(e, " ").concat(n);
}
function Sn(t) {
  return t.map((e) => e.handle).join(",");
}
function In({ deliveryGroups: t, i18n: e }) {
  const n = t.some((r) => r.groupType === be.Subscription);
  return t.map((r) => {
    var a;
    let i = e.translate("order_summary.shipping");
    return (
      n &&
        (i =
          r.groupType === be.Subscription
            ? e.translate("order_summary.shipping_subscription")
            : e.translate("order_summary.shipping_one_time_purchase")),
      {
        label: i,
        amount: fe(
          ((a = r.selectedDeliveryOption) == null
            ? void 0
            : a.estimatedCost.amount) || 0
        ),
      }
    );
  });
}
function xo(t, e) {
  return qe({ label: t, possibleLines: [e] })[0];
}
function Mo({
  subtotal: t,
  deliveryGroups: e,
  duties: n,
  taxes: r,
  discountAllocations: a,
  i18n: i,
  formattedRecurringTotals: o,
}) {
  var s;
  const l = qe({
      label: i.translate("order_summary.subtotal"),
      possibleLines: [t],
    }),
    c = In({ deliveryGroups: e, i18n: i }),
    u = qe({ label: i.translate("order_summary.duties"), possibleLines: [n] }),
    h = qe({ label: i.translate("order_summary.taxes"), possibleLines: [r] }),
    p = o.map((w) => ({ label: w, amount: "0.00", type: "pending" })),
    y = p.length
      ? [
          {
            label: i.translate(
              "order_summary.subscriptions.recurring_total_tooltip_line"
            ),
            amount: "0.00",
            type: "pending",
          },
        ]
      : [],
    v =
      (s =
        a == null
          ? void 0
          : a.flatMap((w) => {
              var E;
              const I = (E = w.title) != null ? E : w.code;
              return qe({
                label: I != null ? I : i.translate("order_summary.discount"),
                possibleLines: [w.discountedAmount],
                isDiscount: !0,
              });
            })) != null
        ? s
        : [];
  return [...l, ...c, ...u, ...h, ...v, ...p, ...y];
}
function qe({ label: t, possibleLines: e, isDiscount: n = !1 }) {
  return e
    .filter((r) => (r == null ? void 0 : r.amount) !== void 0)
    .map((r) => ({
      label: t,
      amount: n ? "-".concat(fe(r.amount)) : fe(r.amount),
    }));
}
function Fo(t, e) {
  if (!t.length) return [];
  const n = Cn({ deliveryGroups: t });
  return Ro(n, e).map((r) => {
    var a;
    return {
      label: r.title || "",
      amount: r.estimatedCost.amount,
      identifier: r.handle,
      detail: (a = r.deliveryPromise) != null ? a : "",
    };
  });
}
const Rt = async ({
    paymentSheetAction: t,
    onProceed: e,
    terminateSession: n,
  }) => {
    switch (t.action) {
      case "abort":
        n();
        break;
      case "show_error":
        await e(t.errors);
        break;
      case "update":
        await e(t.errors);
        break;
      default:
        throw new Error(
          'Missing handler for payment sheet action "'.concat(t.action, '"')
        );
    }
  },
  Uo = ["decelerate", "abort", "show_error", "complete", "update"];
class st extends Error {
  constructor() {
    super(...arguments), d(this, "name", "UnhandledActionError");
  }
}
class Pn {
  constructor() {
    d(this, "generatePrioritizedPaymentSheetAction", (e, n) => {
      let r;
      const a = [],
        i = [],
        o = [],
        s = n
          .filter((c) => c !== m.UnacceptablePaymentsAmount)
          .some((c) => e[c] !== void 0);
      for (const c of Object.keys(e))
        if (!(c === m.UnacceptablePaymentsAmount && s)) {
          const u = e[c]();
          u.effects && i.push(...u.effects),
            u.action !== "complete" && u.errors && o.push(...u.errors),
            a.push(u);
        }
      const l = ((c) =>
        Uo.map((u) => c.find((h) => h.action === u)).find((u) => !!u))(a);
      return (
        l &&
          ((r = l), (r.effects = i), r.action !== "complete" && (r.errors = o)),
        r
      );
    });
  }
  getMergedPaymentSheetAction({ result: e, errorActions: n }) {
    const r = {};
    n.forEach((i) => {
      i.errors.forEach((o) => {
        e.errors.includes(o) && (r[o] = i.generateAction);
      });
    });
    let a;
    for (const i of e.errors) {
      const o = r[i];
      if (o) {
        a = o();
        break;
      }
    }
    return {
      firstPaymentSheetAction: a,
      prioritizedPaymentSheetAction: this.generatePrioritizedPaymentSheetAction(
        r,
        e.errors
      ),
    };
  }
  getUnhandledErrors(e, n) {
    const r = n.flatMap((a) => a.errors);
    return e.filter((a) => !r.includes(a));
  }
  decelerateOrAbort({
    reason: e,
    instrumentName: n,
    errorOrWarning: r,
    result: a,
  }) {
    var i, o;
    return a
      ? ((i = a.data) == null ? void 0 : i.__typename) === "SubmitFailed"
        ? {
            action: "decelerate",
            redirectUrl: (o = a.data) == null ? void 0 : o.checkoutUrl,
            reason: e,
          }
        : {
            action: "abort",
            effects: [
              () => {
                var s;
                f.notify(
                  new Error(
                    "["
                      .concat(n, "] unexpected ")
                      .concat(r, " received in ")
                      .concat(
                        (s = a.data) == null ? void 0 : s.__typename,
                        " response, aborting"
                      )
                  )
                );
              },
            ],
          }
      : { action: "abort" };
  }
}
class $o extends Pn {
  constructor(e) {
    super(),
      d(this, "completionResult"),
      (this.i18n = e),
      (this.completionResult = null);
  }
  mapMutationResultToPaymentSheetAction(e, n) {
    var r;
    const a = this.mapCustomValidationFunctionErrorToAction(e.errors);
    if (a) return a;
    const i = this.getErrorActions({
        shippingCountryCode: n == null ? void 0 : n.shippingCountryCode,
      }),
      o = e.errors,
      s = this.getUnhandledErrors(o, i);
    if (
      (s.forEach((c) => {
        f.notify(
          new st(
            "["
              .concat(g.ApplePay, "] mutation result error not handled: ")
              .concat(c)
          )
        );
      }),
      ((r = e.data) == null ? void 0 : r.deliveryGroups.length) === 0 &&
        n != null &&
        n.shippingRequired)
    )
      return {
        action: "show_error",
        errors: [new ApplePayError("addressUnserviceable")],
      };
    const { firstPaymentSheetAction: l } = this.getMergedPaymentSheetAction({
      result: e,
      errorActions: i,
    });
    return (
      l ||
      (s.length > 0 ? { action: "abort" } : { action: "update", errors: [] })
    );
  }
  mapCompletionResultToPaymentSheetAction(e, n) {
    if (!e.data)
      throw new Error(
        "[".concat(g.ApplePay, "] completion returned null result")
      );
    switch (((this.completionResult = e), e.data.__typename)) {
      case "SubmitSuccess":
        return { action: "complete", redirectUrl: e.data.redirectUrl };
      case "SubmitAlreadyAccepted":
      case "SubmitThrottled":
      case "SubmitFailed": {
        const r = this.mapCustomValidationFunctionErrorToAction(e.errors);
        if (r) return r;
        const a = this.getErrorActions({
            shippingCountryCode: n == null ? void 0 : n.shippingCountryCode,
          }),
          i = e.errors;
        this.getUnhandledErrors(i, a).forEach((s) => {
          f.notify(
            new Error(
              "["
                .concat(g.ApplePay, "] completion result error not handled: ")
                .concat(s)
            )
          );
        });
        const { prioritizedPaymentSheetAction: o } =
          this.getMergedPaymentSheetAction({ result: e, errorActions: a });
        return o || { action: "abort" };
      }
      default:
        throw new Error(
          "["
            .concat(g.ApplePay, "] unknown completion result type: ")
            .concat(e.data.__typename)
        );
    }
  }
  getErrorActions({ shippingCountryCode: e }) {
    return [
      {
        errors: [m.CaptchaCompletionRequired],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "captcha_required",
            instrumentName: g.ApplePay,
            errorOrWarning: m.CaptchaCompletionRequired,
            result: this.completionResult,
          }),
      },
      {
        errors: [m.InvalidLanguage],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.ApplePay,
                    "] mutation provided invalid language, aborting"
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [m.InvalidCountry],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.ApplePay,
                    "] mutation provided invalid country, aborting"
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [m.MissingCartId],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.ApplePay,
                    "] mutation provided invalid cart ID, aborting"
                  )
                )
              );
            },
          ],
        }),
      },
      {
        errors: [m.UnacceptablePaymentsAmount],
        generateAction: () => ({ action: "abort" }),
      },
      { errors: hn, generateAction: () => ({ action: "abort" }) },
      {
        errors: [m.MerchandiseNotEnoughStock],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "not_enough_stock",
            instrumentName: g.ApplePay,
            errorOrWarning: m.MerchandiseNotEnoughStock,
            result: this.completionResult,
          }),
      },
      {
        errors: pn,
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "out_of_stock",
            instrumentName: g.ApplePay,
            errorOrWarning: m.MerchandiseOutOfStock,
            result: this.completionResult,
          }),
      },
      {
        errors: un,
        generateAction: () => ({
          action: "show_error",
          errors: [new ApplePayError("addressUnserviceable")],
        }),
      },
      {
        errors: [m.BuyerIdentityEmailRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "emailAddress",
              this.i18n.translate("errors.missing.email")
            ),
          ],
        }),
      },
      {
        errors: ji,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.missing.first_name")
            ),
          ],
        }),
      },
      {
        errors: Yi,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.invalid.first_name")
            ),
          ],
        }),
      },
      {
        errors: Wi,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.missing.last_name")
            ),
          ],
        }),
      },
      {
        errors: Ki,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.invalid.last_name")
            ),
          ],
        }),
      },
      {
        errors: Qi,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.missing.address1")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1Invalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.invalid.address1")
            ),
          ],
        }),
      },
      {
        errors: Ji,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.missing.address2")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2Invalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.invalid.address2")
            ),
          ],
        }),
      },
      {
        errors: Xi,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "locality",
              this.i18n.translate("errors.missing.city")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryCityInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "locality",
              this.i18n.translate("errors.invalid.city")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryZoneRequiredForCountry],
        generateAction: () => ({
          action: "show_error",
          errors: [
            this.createApplePayZoneError(
              this.i18n.translate("errors.missing.zone"),
              this.i18n.translate("errors.missing.emirate"),
              "shippingContactInvalid",
              e
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryZoneNotFound],
        generateAction: () => ({
          action: "show_error",
          errors: [
            this.createApplePayZoneError(
              this.i18n.translate("errors.invalid.zone"),
              this.i18n.translate("errors.invalid.emirate"),
              "shippingContactInvalid",
              e
            ),
          ],
        }),
      },
      {
        errors: Zi,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "postalCode",
              this.i18n.translate("errors.missing.postal_code")
            ),
          ],
        }),
      },
      {
        errors: dn,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "postalCode",
              this.i18n.translate("errors.invalid.postal_code")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryCountryRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "country",
              this.i18n.translate("errors.missing.country")
            ),
          ],
        }),
      },
      {
        errors: eo,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "phoneNumber",
              this.i18n.translate("errors.missing.phone")
            ),
          ],
        }),
      },
      {
        errors: ro,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "phoneNumber",
              this.i18n.translate("errors.invalid.phone")
            ),
          ],
        }),
      },
      {
        errors: to,
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "country",
              this.i18n.translate("errors.invalid.country")
            ),
          ],
        }),
      },
      {
        errors: no,
        generateAction: () => ({
          action: "show_error",
          errors: [new ApplePayError("billingContactInvalid")],
        }),
      },
      {
        errors: [m.UnsupportedApplePayPaymentMethod],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              W(this.i18n.translate("brand.apple_pay"), this.i18n);
            },
            () => {
              f.notify(
                new st(
                  "[".concat(g.ApplePay, "] payment method is not supported")
                )
              );
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.emojis.last_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.emojis.first_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1TooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.too_long.address1")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2TooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.too_long.address2")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.too_long.first_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.too_long.last_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryCityTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "locality",
              this.i18n.translate("errors.too_long.city")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameContainsUrl],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.url.first_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsUrl],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.url.last_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1ContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.html_tags.address1")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2ContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.html_tags.address2")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryCityContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "locality",
              this.i18n.translate("errors.html_tags.city")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.html_tags.first_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "name",
              this.i18n.translate("errors.html_tags.last_name")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryCityContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "locality",
              this.i18n.translate("errors.emojis.city")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1ContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.emojis.address1")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2ContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "addressLines",
              this.i18n.translate("errors.emojis.address2")
            ),
          ],
        }),
      },
      {
        errors: [m.DeliveryPostalCodeContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "postalCode",
              this.i18n.translate("errors.emojis.postal_code")
            ),
          ],
        }),
      },
      {
        errors: [m.BuyerIdentityEmailInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "shippingContactInvalid",
              "emailAddress",
              this.i18n.translate("errors.invalid.email")
            ),
          ],
        }),
      },
      {
        errors: [m.DiscountNotApplicable],
        generateAction: () => ({
          action: "show_error",
          errors: [
            new ApplePayError(
              "couponCodeInvalid",
              void 0,
              this.i18n.translate("errors.invalid.discount")
            ),
          ],
        }),
      },
    ];
  }
  mapCustomValidationFunctionErrorToAction(e) {
    const n = tr(e);
    return n
      ? {
          action: "abort",
          effects: [
            () => {
              const r = this.i18n.translate("brand.apple_pay");
              rr(
                this.i18n.translate("error_dialogs.wallet.title", {
                  wallet: r,
                }),
                n.message
              );
            },
          ],
        }
      : null;
  }
  createApplePayZoneError(e, n, r, a) {
    const i = a === "AE" ? "subLocality" : "administrativeArea";
    return new ApplePayError(r, i, a === "AE" ? n : e);
  }
}
const Dr = ["name", "postalAddress"];
function Bo({ shippingRequired: t, walletParams: e, buyerCurrency: n }) {
  const { phoneRequired: r, emailRequired: a } = e,
    i = [...(a ? ["email"] : []), ...(r ? ["phone"] : [])],
    o = t ? [...Dr, ...i] : i;
  return {
    countryCode: e.countryCode,
    currencyCode: n,
    merchantCapabilities: e.merchantCapabilities,
    supportedNetworks: e.supportedNetworks,
    total: { type: "pending", label: e.merchantName, amount: "1.00" },
    requiredBillingContactFields: Dr,
    requiredShippingContactFields: o,
    shippingType: e.shippingType,
  };
}
const Ho = (t) => {
    const e = t.lineItems.flatMap((n) => n.discountAllocations);
    return [
      ...t.discountCodes
        .filter(
          (n) =>
            n.applicable &&
            t.discountAllocations.findIndex((r) => r.code === n.code) === -1 &&
            e.findIndex((r) => r.code === n.code) === -1
        )
        .map((n) => ({
          code: n.code,
          discountedAmount: {
            amount: "0",
            currencyCode: t.totalAmount.currencyCode,
          },
        })),
      ...t.discountAllocations,
      ...e,
    ];
  },
  vn = (t) => {
    const e = t.lineItems.reduce(
      (n, r) => n + Number(r.subtotalAmount.amount),
      0
    );
    return { amount: String(e), currencyCode: t.totalAmount.currencyCode };
  };
function Go(t, e) {
  return t.reduce((n, r) => {
    if (!r.sellingPlanAllocation) return n;
    const {
      sellingPlanAllocation: { sellingPlan: a, priceAdjustments: i },
      quantity: o,
    } = r;
    if (!a.recurringDeliveries || !a.billingPolicy) return n;
    const s = Vo({ billingPolicy: a.billingPolicy, i18n: e });
    if (i.length === 0) {
      const l = tt({
        price: Number(r.subtotalAmount.amount) * o,
        currencyCode: r.subtotalAmount.currencyCode,
        locale: e.locale,
      });
      return [
        ...n,
        e.translate("order_summary.subscriptions.recurring_totals", {
          fixedPrice: l,
          interval: s,
        }),
      ];
    } else if (i.length === 1) {
      const l = tt({
        price: Number(i[0].price.amount) * o,
        currencyCode: i[0].price.currencyCode,
        locale: e.locale,
      });
      return [
        ...n,
        e.translate("order_summary.subscriptions.recurring_totals", {
          fixedPrice: l,
          interval: s,
        }),
      ];
    } else if (i.length === 2) {
      const l = tt({
          price: Number(i[0].price.amount) * o,
          currencyCode: i[0].price.currencyCode,
          locale: e.locale,
        }),
        c = tt({
          price: Number(i[1].price.amount) * o,
          currencyCode: i[1].price.currencyCode,
          locale: e.locale,
        }),
        u = a.priceAdjustments[0].orderCount;
      return [
        ...n,
        e.translate(
          "order_summary.subscriptions.recurring_totals_with_policies",
          { count: u, fixedPrice: l, recurringPrice: c, interval: s }
        ),
      ];
    }
    return n;
  }, []);
}
function tt({ price: t, currencyCode: e, locale: n }) {
  return Intl.NumberFormat(n, {
    style: "currency",
    currency: e,
    currencyDisplay: "narrowSymbol",
  }).format(t);
}
function Vo({ billingPolicy: t, i18n: e }) {
  const { interval: n, intervalCount: r } = t,
    a = {
      YEAR: "order_summary.subscriptions.recurring_total_intervals.year",
      MONTH: "order_summary.subscriptions.recurring_total_intervals.month",
      WEEK: "order_summary.subscriptions.recurring_total_intervals.week",
      DAY: "order_summary.subscriptions.recurring_total_intervals.day",
    }[n];
  if (!a) throw new Error("Unknown selling plan interval provided: ".concat(n));
  return e.translate(a, { count: r });
}
const Et = "GraphQL Client",
  Rr = 0,
  Nr = 3,
  Dn =
    "An error occurred while fetching from the API. Review 'graphQLErrors' for details.",
  Rn = "Response returned unexpected Content-Type:",
  Nn =
    "An unknown error has occurred. The API did not return a data object or any errors in its response.",
  Gt = { json: "application/json", multipart: "multipart/mixed" },
  Tr = "X-SDK-Variant",
  Lr = "X-SDK-Version",
  qo = "shopify-graphql-client",
  zo = "1.2.0",
  Tn = 1e3,
  jo = [429, 503],
  Ln = /@(defer)\b/i,
  Or = "\r\n",
  Yo = /boundary="?([^=";]+)"?/i,
  kr = Or + Or;
function te(t, e = Et) {
  return t.startsWith("".concat(e)) ? t : "".concat(e, ": ").concat(t);
}
function xe(t) {
  return t instanceof Error ? t.message : JSON.stringify(t);
}
function On(t) {
  return t instanceof Error && t.cause ? t.cause : void 0;
}
function kn(t) {
  return t.flatMap(({ errors: e }) => (e != null ? e : []));
}
function xn({ client: t, retries: e }) {
  if (e !== void 0 && (typeof e != "number" || e < Rr || e > Nr))
    throw new Error(
      ""
        .concat(t, ': The provided "retries" value (')
        .concat(e, ") is invalid - it cannot be less than ")
        .concat(Rr, " or greater than ")
        .concat(Nr)
    );
}
function $(t, e) {
  return e &&
    (typeof e != "object" ||
      Array.isArray(e) ||
      (typeof e == "object" && Object.keys(e).length > 0))
    ? { [t]: e }
    : {};
}
function Mn(t, e) {
  if (t.length === 0) return e;
  const n = { [t.pop()]: e };
  return t.length === 0 ? n : Mn(t, n);
}
function Fn(t, e) {
  return Object.keys(e || {}).reduce(
    (n, r) =>
      (typeof e[r] == "object" || Array.isArray(e[r])) && t[r]
        ? ((n[r] = Fn(t[r], e[r])), n)
        : ((n[r] = e[r]), n),
    Array.isArray(t) ? [...t] : _({}, t)
  );
}
function Un([t, ...e]) {
  return e.reduce(Fn, _({}, t));
}
function Wo({
  clientLogger: t,
  customFetchApi: e = fetch,
  client: n = Et,
  defaultRetryWaitTime: r = Tn,
  retriableCodes: a = jo,
}) {
  const i = async (o, s, l) => {
    const c = s + 1,
      u = l + 1;
    let h;
    try {
      if (
        ((h = await e(...o)),
        t({
          type: "HTTP-Response",
          content: { requestParams: o, response: h },
        }),
        !h.ok && a.includes(h.status) && c <= u)
      )
        throw new Error();
      return h;
    } catch (p) {
      if (c <= u) {
        const y = h == null ? void 0 : h.headers.get("Retry-After");
        return (
          await Ko(y ? parseInt(y, 10) : r),
          t({
            type: "HTTP-Retry",
            content: {
              requestParams: o,
              lastResponse: h,
              retryAttempt: s,
              maxRetries: l,
            },
          }),
          i(o, c, l)
        );
      }
      throw new Error(
        te(
          ""
            .concat(
              l > 0
                ? "Attempted maximum number of ".concat(
                    l,
                    " network retries. Last message - "
                  )
                : ""
            )
            .concat(xe(p)),
          n
        )
      );
    }
  };
  return i;
}
async function Ko(t) {
  return new Promise((e) => setTimeout(e, t));
}
function Qo({
  headers: t,
  url: e,
  customFetchApi: n = fetch,
  retries: r = 0,
  logger: a,
}) {
  xn({ client: Et, retries: r });
  const i = { headers: t, url: e, retries: r },
    o = Jo(a),
    s = Wo({ customFetchApi: n, clientLogger: o, defaultRetryWaitTime: Tn }),
    l = Xo(s, i),
    c = Zo(l),
    u = os(l);
  return { config: i, fetch: l, request: c, requestStream: u };
}
function Jo(t) {
  return (e) => {
    t && t(e);
  };
}
async function $n(t) {
  const { errors: e, data: n, extensions: r } = await t.json();
  return _(
    D(_(_({}, $("data", n)), $("extensions", r)), { headers: t.headers }),
    e || !n
      ? {
          errors: D(
            _(
              { networkStatusCode: t.status, message: te(e ? Dn : Nn) },
              $("graphQLErrors", e)
            ),
            { response: t }
          ),
        }
      : {}
  );
}
function Xo(t, { url: e, headers: n, retries: r }) {
  return async (a, i = {}) => {
    const { variables: o, headers: s, url: l, retries: c, signal: u } = i,
      h = JSON.stringify({ query: a, variables: o });
    xn({ client: Et, retries: c });
    const p = Object.entries(_(_({}, n), s)).reduce(
      (v, [w, E]) => (
        (v[w] = Array.isArray(E) ? E.join(", ") : E.toString()), v
      ),
      {}
    );
    !p[Tr] && !p[Lr] && ((p[Tr] = qo), (p[Lr] = zo));
    const y = [
      l != null ? l : e,
      { method: "POST", headers: p, body: h, signal: u },
    ];
    return t(y, 1, c != null ? c : r);
  };
}
function Zo(t) {
  return async (...e) => {
    if (Ln.test(e[0]))
      throw new Error(
        te(
          "This operation will result in a streamable response - use requestStream() instead."
        )
      );
    try {
      const n = await t(...e),
        { status: r, statusText: a } = n,
        i = n.headers.get("content-type") || "";
      return n.ok
        ? i.includes(Gt.json)
          ? $n(n)
          : {
              errors: {
                networkStatusCode: r,
                message: te("".concat(Rn, " ").concat(i)),
                response: n,
              },
            }
        : { errors: { networkStatusCode: r, message: te(a), response: n } };
    } catch (n) {
      return { errors: { message: xe(n) } };
    }
  };
}
function es(t) {
  return Ce(this, null, function* () {
    const e = new TextDecoder();
    if (t.body[Symbol.asyncIterator])
      try {
        for (
          var n = Q(t.body), r, a, i;
          (r = !(a = yield new K(n.next())).done);
          r = !1
        ) {
          const o = a.value;
          yield e.decode(o);
        }
      } catch (o) {
        i = [o];
      } finally {
        try {
          r && (a = n.return) && (yield new K(a.call(n)));
        } finally {
          if (i) throw i[0];
        }
      }
    else {
      const o = t.body.getReader();
      let s;
      try {
        for (; !(s = yield new K(o.read())).done; ) yield e.decode(s.value);
      } finally {
        o.cancel();
      }
    }
  });
}
function ts(t, e) {
  return {
    [Symbol.asyncIterator]() {
      return Ce(this, null, function* () {
        try {
          let o = "";
          try {
            for (
              var n = Q(t), r, a, i;
              (r = !(a = yield new K(n.next())).done);
              r = !1
            ) {
              const s = a.value;
              if (((o += s), o.indexOf(e) > -1)) {
                const l = o.lastIndexOf(e),
                  c = o
                    .slice(0, l)
                    .split(e)
                    .filter((u) => u.trim().length > 0)
                    .map((u) => u.slice(u.indexOf(kr) + kr.length).trim());
                c.length > 0 && (yield c),
                  (o = o.slice(l + e.length)),
                  o.trim() === "--" && (o = "");
              }
            }
          } catch (s) {
            i = [s];
          } finally {
            try {
              r && (a = n.return) && (yield new K(a.call(n)));
            } finally {
              if (i) throw i[0];
            }
          }
        } catch (o) {
          throw new Error(
            "Error occured while processing stream payload - ".concat(xe(o))
          );
        }
      });
    },
  };
}
function rs(t) {
  return {
    [Symbol.asyncIterator]() {
      return Ce(this, null, function* () {
        const e = yield new K($n(t));
        yield D(_({}, e), { hasNext: !1 });
      });
    },
  };
}
function ns(t) {
  return t
    .map((e) => {
      try {
        return JSON.parse(e);
      } catch (n) {
        throw new Error("Error in parsing multipart response - ".concat(xe(n)));
      }
    })
    .map((e) => {
      const {
        data: n,
        incremental: r,
        hasNext: a,
        extensions: i,
        errors: o,
      } = e;
      if (!r)
        return D(_(_({ data: n || {} }, $("errors", o)), $("extensions", i)), {
          hasNext: a,
        });
      const s = r.map(({ data: l, path: c, errors: u }) =>
        _({ data: l && c ? Mn(c, l) : {} }, $("errors", u))
      );
      return D(
        _(
          {
            data:
              s.length === 1 ? s[0].data : Un([...s.map(({ data: l }) => l)]),
          },
          $("errors", kn(s))
        ),
        { hasNext: a }
      );
    });
}
function as(t, e) {
  if (t.length > 0) throw new Error(Dn, { cause: { graphQLErrors: t } });
  if (Object.keys(e).length === 0) throw new Error(Nn);
}
function is(t, e) {
  var n;
  const r = (e != null ? e : "").match(Yo),
    a = "--".concat(r ? r[1] : "-");
  if (!((n = t.body) != null && n.getReader) && !t.body[Symbol.asyncIterator])
    throw new Error("API multipart response did not return an iterable body", {
      cause: t,
    });
  const i = es(t);
  let o = {},
    s;
  return {
    [Symbol.asyncIterator]() {
      return Ce(this, null, function* () {
        var l, c;
        try {
          let v = !0;
          try {
            for (
              var u = Q(ts(i, a)), h, p, y;
              (h = !(p = yield new K(u.next())).done);
              h = !1
            ) {
              const w = p.value,
                E = ns(w);
              s =
                (c =
                  (l = E.find((L) => L.extensions)) == null
                    ? void 0
                    : l.extensions) != null
                  ? c
                  : s;
              const I = kn(E);
              (o = Un([o, ...E.map(({ data: L }) => L)])),
                (v = E.slice(-1)[0].hasNext),
                as(I, o),
                yield D(_(_({}, $("data", o)), $("extensions", s)), {
                  hasNext: v,
                });
            }
          } catch (w) {
            y = [w];
          } finally {
            try {
              h && (p = u.return) && (yield new K(p.call(u)));
            } finally {
              if (y) throw y[0];
            }
          }
          if (v) throw new Error("Response stream terminated unexpectedly");
        } catch (v) {
          const w = On(v);
          yield D(_(_({}, $("data", o)), $("extensions", s)), {
            errors: D(
              _(
                { message: te(xe(v)), networkStatusCode: t.status },
                $("graphQLErrors", w == null ? void 0 : w.graphQLErrors)
              ),
              { response: t }
            ),
            hasNext: !1,
          });
        }
      });
    },
  };
}
function os(t) {
  return async (...e) => {
    if (!Ln.test(e[0]))
      throw new Error(
        te(
          "This operation does not result in a streamable response - use request() instead."
        )
      );
    try {
      const n = await t(...e),
        { statusText: r } = n;
      if (!n.ok) throw new Error(r, { cause: n });
      const a = n.headers.get("content-type") || "";
      switch (!0) {
        case a.includes(Gt.json):
          return rs(n);
        case a.includes(Gt.multipart):
          return is(n, a);
        default:
          throw new Error("".concat(Rn, " ").concat(a), { cause: n });
      }
    } catch (n) {
      return {
        [Symbol.asyncIterator]() {
          return Ce(this, null, function* () {
            const r = On(n);
            yield {
              errors: _(
                _(
                  { message: te(xe(n)) },
                  $("networkStatusCode", r == null ? void 0 : r.status)
                ),
                $("response", r)
              ),
              hasNext: !1,
            };
          });
        },
      };
    }
  };
}
const ss =
    "mutation cartCreate($input:CartInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){result:cartCreate(input:$input){...@defer(if:$withCarrierRates){cart{...CartParts}errors:userErrors{...on CartUserError{message field code}}warnings:warnings{...on CartWarning{code}}}}}",
  ls =
    "mutation cartAttributesUpdate($cartId:ID!$attributes:[AttributeInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartAttributesUpdate(cartId:$cartId attributes:$attributes){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}",
  cs =
    "mutation cartBillingAddressUpdate($cartId:ID!$billingAddress:MailingAddressInput$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartBillingAddressUpdate(cartId:$cartId billingAddress:$billingAddress){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}",
  ds =
    "mutation cartBuyerIdentityUpdate($cartId:ID!$buyerIdentity:CartBuyerIdentityInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartBuyerIdentityUpdate(cartId:$cartId buyerIdentity:$buyerIdentity){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}",
  us =
    "mutation cartSelectedDeliveryOptionsUpdate($cartId:ID!$selectedDeliveryOptions:[CartSelectedDeliveryOptionInput!]!$country:CountryCode=CA$language:LanguageCode=EN$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartSelectedDeliveryOptionsUpdate(cartId:$cartId selectedDeliveryOptions:$selectedDeliveryOptions){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}",
  hs =
    "mutation applePaySessionCreate($validationUrl:URL!){applePaySessionCreate(validationUrl:$validationUrl){...@defer{applePaySession{body}}}}",
  ps =
    "mutation PayPalBuyerDetailsFetch($token:String!$cartId:ID){paypalBuyerDetailsFetch(token:$token cartId:$cartId){...@defer{paypalDetails{email expiresAt remoteOrderId destinationAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}billingAddress{...on MailingAddress{address1 address2 city company country firstName lastName phone province zip}}}}}}",
  ms =
    "mutation PayPalTokenCreate($cartId:ID!){paypalTokenCreate(cartId:$cartId){...@defer{paypalToken{token}}}}",
  ys =
    "query cartQuery($id:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false)@inContext(country:$country language:$language){cart(id:$id){...@defer(if:$withCarrierRates){...CartParts}}}",
  gs =
    "query subscriptionPolicyQuery($country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){shop{subscriptionPolicy(sanitized:true){body}}}",
  fs =
    "mutation cartPaymentUpdate($cartId:ID!$input:CartPaymentInput!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=false)@inContext(country:$country language:$language){result:cartPaymentUpdate(cartId:$cartId payment:$input){...@defer(if:$withCarrierRates)@skip(if:$prepareCart){cart{...CartParts}errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}...@include(if:$prepareCart){errors:userErrors{...CartErrorParts}warnings:warnings{...on CartWarning{code}}}}...PreparedCartFragment}",
  rt =
    "fragment CartParts on Cart{id checkoutUrl buyerIdentity{deliveryAddressPreferences{...on MailingAddress{address1 address2 city province phone country firstName lastName zip}}}deliveryGroups(first:10 withCarrierRates:$withCarrierRates){edges{node{id groupType selectedDeliveryOption{code title handle deliveryPromise deliveryMethodType estimatedCost{amount currencyCode}}deliveryOptions{code title handle deliveryPromise deliveryMethodType estimatedCost{amount currencyCode}}}}}cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}totalTaxAmount{amount currencyCode}totalDutyAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}discountCodes{code applicable}lines(first:10){edges{node{quantity cost{subtotalAmount{amount currencyCode}totalAmount{amount currencyCode}}discountAllocations{discountedAmount{amount currencyCode}...on CartCodeDiscountAllocation{code}...on CartAutomaticDiscountAllocation{title}...on CartCustomDiscountAllocation{title}}merchandise{...on ProductVariant{requiresShipping}}sellingPlanAllocation{priceAdjustments{price{amount currencyCode}}sellingPlan{billingPolicy{...on SellingPlanRecurringBillingPolicy{interval intervalCount}}priceAdjustments{orderCount}recurringDeliveries}}}}}}",
  xr = "fragment CartErrorParts on CartUserError{message field code}",
  Mr =
    "fragment PreparedCartFragment on Mutation{preparedCart:cartPrepareForCompletion(cartId:$cartId)@include(if:$prepareCart){...@defer{result{__typename ...on CartStatusReady{cart{...CartParts}}...on CartStatusNotReady{cart{...CartParts}errors{code message}}...on CartThrottled{pollAfter}}errors:userErrors{...CartErrorParts}}}}",
  bs =
    "mutation prepareCart($cartId:ID!$country:CountryCode$language:LanguageCode$withCarrierRates:Boolean=false$prepareCart:Boolean=true)@inContext(country:$country language:$language){...PreparedCartFragment}",
  ws =
    "mutation cartSubmitForCompletion($cartId:ID!$attemptToken:String!$country:CountryCode$language:LanguageCode)@inContext(country:$country language:$language){cartSubmitForCompletion(cartId:$cartId attemptToken:$attemptToken){result{__typename ...on SubmitSuccess{redirectUrl}...on SubmitThrottled{pollAfterV2:pollAfter}...on SubmitFailed{errors{code message}checkoutUrl}}errors:userErrors{...on CartUserError{code field message}}}}",
  _s = "unstable",
  Fr = "RESTRICTED_WALLET_ACCOUNT";
class ue extends Error {
  constructor(e = "No response") {
    super(e), (this.name = "NoResponseError");
  }
}
class At {
  constructor({
    accessToken: e,
    country: n,
    locale: r,
    apiVersion: a = _s,
    withCarrierRates: i = !1,
    cartPrepareMigrationEnabled: o = !1,
  }) {
    if (
      (d(this, "OPERATION_NAME_REGEX", /[^ ]+ (\w+)/),
      d(this, "client"),
      d(this, "country"),
      d(this, "url"),
      d(this, "locale"),
      d(this, "withCarrierRates"),
      d(this, "lastValidCart"),
      d(this, "cartPrepareMigrationEnabled"),
      !e)
    )
      throw new Error("StorefrontApiClient constructed with no access token");
    if (!n)
      throw new Error("StorefrontApiClient constructed with no buyer country");
    if (!r) throw new Error("StorefrontApiClient constructed with no locale");
    (this.country = n),
      (this.locale = r),
      (this.withCarrierRates = i),
      (this.cartPrepareMigrationEnabled = o),
      (this.url = "/api/".concat(a, "/graphql.json")),
      (this.client = Qo({
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-Shopify-Storefront-Access-Token": e,
          "X-SDK-Variant": "portable-wallets",
        },
        url: this.url,
        retries: 0,
        logger: (s) => {
          if (s.type === "HTTP-Response") {
            const [l, c] = s.content.requestParams;
            f.leaveBreadcrumb(
              "POST: ".concat(l),
              {
                statusCode: s.content.response.status,
                statusText: s.content.response.statusText,
                url: l,
                method: c == null ? void 0 : c.method,
                headers: c == null ? void 0 : c.headers,
                body: c == null ? void 0 : c.body,
              },
              "request"
            );
          }
        },
      }));
  }
  async createCart(e) {
    var n, r, a;
    const i = await this.requestStream(
      [ss, rt],
      {
        input: {
          lines: [
            {
              merchandiseId: e.merchandiseId,
              quantity: e.quantity,
              sellingPlanId: e.sellingPlanId,
              attributes: e.lineItemProperties,
            },
          ],
          discountCodes: e.discountCodes,
          buyerIdentity: e.buyerIdentity,
        },
        country: this.country,
        language: this.formatLanguage(this.locale),
      },
      { instrumentName: e.instrumentName, startingCheckout: !0 }
    );
    try {
      for (var o = Q(i), s, l, c; (s = !(l = await o.next()).done); s = !1) {
        const u = l.value;
        u.errors && this.onError(u.errors);
        const h = (n = u.data) == null ? void 0 : n.result;
        if (h && !u.hasNext) {
          h.errors && this.onResultError(h.errors);
          const p = this.parseMutationWarnings(
            (a = (r = u.data) == null ? void 0 : r.result) == null
              ? void 0
              : a.warnings
          );
          return {
            data: h.cart ? this.parseCartResponse(h.cart) : null,
            errors: this.parseMutationErrors(u, "result"),
            warnings: p,
            hasStockProblems: nt(p),
          };
        }
      }
    } catch (u) {
      c = [u];
    } finally {
      try {
        s && (l = o.return) && (await l.call(o));
      } finally {
        if (c) throw c[0];
      }
    }
    throw new ue("Cart create operation returned no response");
  }
  async updateCartBillingAddress(e) {
    const { cartId: n, billingAddress: r, instrumentName: a } = e;
    return this.requestDeferredCart(
      cs,
      { cartId: n, billingAddress: r },
      { instrumentName: a }
    );
  }
  async updateCartBuyerIdentity(e, n) {
    const { cartId: r, instrumentName: a } = e;
    return this.requestDeferredCart(
      ds,
      { cartId: r, buyerIdentity: As(e) },
      { instrumentName: a, abortSignal: n }
    );
  }
  async updateSelectedDeliveryOptions(e, n, r, a) {
    let i = n;
    const o = Ve() + 2e4;
    for (; Ve() < o; ) {
      const s = await this.requestDeferredCart(
        us,
        { cartId: e, selectedDeliveryOptions: i },
        { instrumentName: r, abortSignal: a }
      );
      if (
        !(
          !this.cartPrepareMigrationEnabled &&
          s.errors.some(
            (c) => typeof c == "string" && c.startsWith(m.PendingDeliveryGroups)
          )
        )
      )
        return s;
      const l = s.data.deliveryGroups.flatMap((c) =>
        c.deliveryOptions.map((u) => ({
          deliveryOptionHandle: u.handle,
          deliveryGroupId: c.id,
        }))
      );
      i = i.map((c) => {
        var u;
        return (u = l.find(
          (h) => h.deliveryOptionHandle === c.deliveryOptionHandle
        )) != null
          ? u
          : c;
      });
    }
    throw new Error("Selected delivery options update operation timed out");
  }
  async applePaySessionCreate(e) {
    var n, r, a;
    const i = await this.requestStream(
      [hs],
      { validationUrl: e.toString() },
      { instrumentName: g.ApplePay }
    );
    try {
      for (var o = Q(i), s, l, c; (s = !(l = await o.next()).done); s = !1) {
        const u = l.value;
        u.errors && this.onError(u.errors);
        const h =
          (a =
            (r = (n = u.data) == null ? void 0 : n.applePaySessionCreate) ==
            null
              ? void 0
              : r.applePaySession) == null
            ? void 0
            : a.body;
        if (h) return h;
      }
    } catch (u) {
      c = [u];
    } finally {
      try {
        s && (l = o.return) && (await l.call(o));
      } finally {
        if (c) throw c[0];
      }
    }
    throw new ue("Apple Pay session create operation returned no response");
  }
  async paypalBuyerDetailsFetch(e, n) {
    var r, a;
    const i = await this.requestStream(
      [ps],
      { token: e, cartId: n },
      { instrumentName: g.PayPal }
    );
    try {
      for (var o = Q(i), s, l, c; (s = !(l = await o.next()).done); s = !1) {
        const u = l.value;
        if (u.hasNext) continue;
        u.errors && this.onError(u.errors);
        const h =
          (a = (r = u.data) == null ? void 0 : r.paypalBuyerDetailsFetch) ==
          null
            ? void 0
            : a.paypalDetails;
        if (h) return h;
      }
    } catch (u) {
      c = [u];
    } finally {
      try {
        s && (l = o.return) && (await l.call(o));
      } finally {
        if (c) throw c[0];
      }
    }
    throw new ue("PayPal buyer details fetch operation returned no response");
  }
  async paypalTokenCreate(e) {
    var n, r, a, i;
    const o = await this.requestStream(
      [ms],
      { cartId: e },
      { instrumentName: g.PayPal }
    );
    try {
      for (var s = Q(o), l, c, u; (l = !(c = await s.next()).done); l = !1) {
        const h = c.value;
        if (h.errors) {
          if (
            (n = h.errors.graphQLErrors) != null &&
            n.find((y) => {
              var v;
              return ((v = y.extensions) == null ? void 0 : v.code) === Fr;
            })
          )
            throw new pt(Fr);
          this.onError(h.errors);
        }
        const p =
          (i =
            (a = (r = h.data) == null ? void 0 : r.paypalTokenCreate) == null
              ? void 0
              : a.paypalToken) == null
            ? void 0
            : i.token;
        if (p) return p;
      }
    } catch (h) {
      u = [h];
    } finally {
      try {
        l && (c = s.return) && (await c.call(s));
      } finally {
        if (u) throw u[0];
      }
    }
    throw new ue("PayPal token create operation returned no response");
  }
  async fetchCart({ id: e, startingCheckout: n, instrumentName: r }) {
    var a, i;
    const o = this.formatLanguage(this.locale),
      s = this.cartPrepareMigrationEnabled ? "Prepare cart" : "Fetch cart",
      l = this.cartPrepareMigrationEnabled ? bs : ys,
      c = this.cartPrepareMigrationEnabled ? [rt, xr, Mr] : [rt],
      u = this.cartPrepareMigrationEnabled
        ? {
            cartId: e,
            country: this.country,
            language: o,
            withCarrierRates: this.withCarrierRates,
            prepareCart: !0,
          }
        : {
            id: e,
            country: this.country,
            language: o,
            withCarrierRates: this.withCarrierRates,
          },
      h = await this.requestStream([l, ...c], u, {
        instrumentName: r,
        startingCheckout: n,
      });
    try {
      for (var p = Q(h), y, v, w; (y = !(v = await p.next()).done); y = !1) {
        const E = v.value;
        E.errors && this.onError(E.errors);
        let I = null,
          L;
        if (!E.data)
          throw new ue("".concat(s, " operation returned no data in response"));
        if (Es(E.data)) {
          const k = E.data.preparedCart;
          if (
            ((a = k == null ? void 0 : k.result) == null
              ? void 0
              : a.__typename) === "CartThrottled"
          )
            throw new Error(
              "TODO: Trigger deceleration once we have checkout URL and/or cart data"
            );
          (I = (i = k == null ? void 0 : k.result) == null ? void 0 : i.cart),
            (L = this.parsePreparedCartMutationErrors(
              E.errors,
              this.extractPreparedCartMutationErrors(k)
            ));
        } else I = E.data.cart;
        if (
          (f.leaveBreadcrumb(
            "".concat(s, " response"),
            { body: I, errors: L, hasNext: E.hasNext },
            "log"
          ),
          I && !E.hasNext)
        ) {
          const k = this.parseCartResponse(I);
          return (this.lastValidCart = k), k;
        }
      }
    } catch (E) {
      w = [E];
    } finally {
      try {
        y && (v = p.return) && (await v.call(p));
      } finally {
        if (w) throw w[0];
      }
    }
    throw new ue("".concat(s, " operation returned no response"));
  }
  async updateCartPayment(e, n, r, a) {
    var i, o;
    const s = { cartId: e, input: n },
      { amount: l, currencyCode: c } = n.amount;
    let u;
    const h = Ve() + 1e4;
    for (; Ve() < h; ) {
      const p = await this.requestDeferredCart(fs, s, {
        instrumentName: r,
        abortSignal: a,
      });
      if (
        (u || (u = p),
        !this.cartPrepareMigrationEnabled &&
          p.errors.includes(m.InvalidPaymentAmount))
      ) {
        parseFloat(
          (o = (i = p.data.totalTaxAmount) == null ? void 0 : i.amount) != null
            ? o
            : "0"
        ) === 0 && (await new Promise((y) => setTimeout(y, 500))),
          (s.input.amount = {
            amount: p.data.totalAmount.amount,
            currencyCode: p.data.totalAmount.currencyCode,
          });
        continue;
      }
      return (p.data.totalAmount.amount === l ||
        parseFloat(p.data.totalAmount.amount) <= parseFloat(l)) &&
        p.data.totalAmount.currencyCode === c
        ? p
        : u;
    }
    throw new Error("Payment update operation timed out");
  }
  async updateCartAttributes({
    cartId: e,
    attributes: n,
    instrumentName: r,
    startingCheckout: a,
  }) {
    const i = { cartId: e, attributes: n };
    return await this.requestDeferredCart(ls, i, {
      instrumentName: r,
      startingCheckout: a,
    });
  }
  async submitForCompletion(e, n, r) {
    var a, i;
    const o = this.formatLanguage(this.locale),
      s = await this.request(
        [ws],
        {
          cartId: e,
          attemptToken: n,
          country: this.country,
          language: o,
          withCarrierRates: this.withCarrierRates,
        },
        { instrumentName: r }
      );
    return {
      data:
        (i = (a = s.data) == null ? void 0 : a.cartSubmitForCompletion) == null
          ? void 0
          : i.result,
      errors: this.parseCompletionErrors(s),
    };
  }
  async fetchSubscriptionPolicy() {
    var e, n;
    const { data: r } = await this.request(
      [gs],
      { country: this.country, language: this.formatLanguage(this.locale) },
      {}
    );
    return (n =
      (e = r == null ? void 0 : r.shop) == null
        ? void 0
        : e.subscriptionPolicy) == null
      ? void 0
      : n.body;
  }
  generateURLWithOperationName(e) {
    const n = e.match(this.OPERATION_NAME_REGEX);
    if (n) {
      const r = this.url.includes("?") ? "&" : "?",
        a = "operation_name=".concat(n[1]);
      return "".concat(this.url).concat(r).concat(a);
    }
    return this.url;
  }
  async request(e, n, r) {
    return this.client.request(e.join(""), {
      variables: n,
      headers: Ur(r),
      url: this.generateURLWithOperationName(e[0]),
    });
  }
  async requestStream(e, n, r) {
    return this.client.requestStream(e.join(""), {
      variables: n,
      headers: Ur(r),
      url: this.generateURLWithOperationName(e[0]),
      signal: r.abortSignal,
    });
  }
  async requestDeferredCart(e, n, r) {
    var a, i, o, s, l, c, u, h, p;
    const y = this.formatLanguage(this.locale),
      v = await this.requestStream(
        [e, rt, xr, Mr],
        D(_({}, n), {
          country: this.country,
          language: y,
          withCarrierRates: this.withCarrierRates,
          prepareCart: this.cartPrepareMigrationEnabled,
        }),
        r
      );
    try {
      for (var w = Q(v), E, I, L; (E = !(I = await w.next()).done); E = !1) {
        const k = I.value;
        k.errors && this.onError(k.errors);
        const Me = this.extractMutationErrors(k),
          A =
            (i = (a = k.data) == null ? void 0 : a.preparedCart) == null
              ? void 0
              : i.result;
        if ((A == null ? void 0 : A.__typename) === "CartThrottled")
          throw new Error(
            "TODO: Trigger deceleration once we have checkout URL and/or cart data"
          );
        const U =
          (l =
            (s = (o = k.data) == null ? void 0 : o.result) == null
              ? void 0
              : s.cart) != null
            ? l
            : A == null
            ? void 0
            : A.cart;
        if (U && !k.hasNext) {
          let O;
          this.cartPrepareMigrationEnabled ||
            (O = await this.fetchCart({
              id: U.id,
              instrumentName: r.instrumentName,
              startingCheckout: !1,
            }));
          const R = this.parseMutationWarnings(
            (u = (c = k.data) == null ? void 0 : c.result) == null
              ? void 0
              : u.warnings
          );
          return {
            data: O != null ? O : this.parseCartResponse(U),
            errors: this.parsePreparedCartMutationErrors(k.errors, Me),
            warnings: R,
            hasStockProblems: nt(R),
          };
        }
        if (this.lastValidCart && Me.length > 0) {
          this.onResultError(Me);
          const O = this.parseMutationWarnings(
            (p = (h = k.data) == null ? void 0 : h.result) == null
              ? void 0
              : p.warnings
          );
          return {
            data: this.lastValidCart,
            errors: this.parsePreparedCartMutationErrors(k.errors, Me),
            warnings: O,
            hasStockProblems: nt(O),
          };
        }
      }
    } catch (k) {
      L = [k];
    } finally {
      try {
        E && (I = w.return) && (await I.call(w));
      } finally {
        if (L) throw L[0];
      }
    }
    throw new ue("Deferred cart operation returned no response");
  }
  onError(e) {
    var n, r;
    if (!e) return;
    f.leaveBreadcrumb("GraphQL response error", e, "error");
    const a =
        (r =
          (n = e.graphQLErrors) == null
            ? void 0
            : n.map((s) => s.message).join(", ")) != null
          ? r
          : "",
      i = "".concat(e.message).concat(a.length > 0 ? " - ".concat(a) : ""),
      o =
        e != null && e.networkStatusCode
          ? "with status ".concat(e.networkStatusCode, " => ").concat(i)
          : "=> ".concat(i);
    throw new Error("GraphQL mutation failed ".concat(o));
  }
  onResultError(e) {
    f.leaveBreadcrumb("GraphQL result error", e, "error");
  }
  formatLanguage(e) {
    return e.includes("-") ? e.split("-")[0].toUpperCase() : e.toUpperCase();
  }
  parseCartResponse(e) {
    var n, r, a;
    const i = e.lines.edges.map((s) => {
        var l, c;
        const u = s.node;
        return {
          quantity: u.quantity,
          totalAmount: {
            amount: u.cost.totalAmount.amount,
            currencyCode: u.cost.totalAmount.currencyCode,
          },
          subtotalAmount: {
            amount: (l = u.cost.subtotalAmount) == null ? void 0 : l.amount,
            currencyCode:
              (c = u.cost.subtotalAmount) == null ? void 0 : c.currencyCode,
          },
          merchandise: { requiresShipping: u.merchandise.requiresShipping },
          discountAllocations: u.discountAllocations,
          sellingPlanAllocation: u.sellingPlanAllocation,
        };
      }),
      o = e.deliveryGroups.edges.map((s) => s.node);
    return {
      id: e.id,
      totalAmount: e.cost.totalAmount,
      subtotalAmount: (n = e.cost.subtotalAmount) != null ? n : void 0,
      totalTaxAmount: (r = e.cost.totalTaxAmount) != null ? r : void 0,
      totalDutyAmount: (a = e.cost.totalDutyAmount) != null ? a : void 0,
      discountAllocations: e.discountAllocations,
      discountCodes: e.discountCodes,
      lineItems: i,
      deliveryGroups: o,
      checkoutUrl: e.checkoutUrl,
    };
  }
  parseGraphQlErrors(e) {
    var n, r;
    return (r =
      (n = e == null ? void 0 : e.graphQLErrors) == null
        ? void 0
        : n.map((a) => a.message.replace(/\(Expected.*\)/, "").trim())) != null
      ? r
      : [];
  }
  parseMutationError(e) {
    return e.code === it
      ? { code: it, message: e.message }
      : e.field && e.field.length > 0
      ? "".concat(e.code, ": ").concat(e.field.join("."))
      : e.code;
  }
  parseMutationErrors(e, n) {
    var r, a, i;
    const o = this.parseGraphQlErrors(e.errors),
      s =
        ((i =
          (a = (r = e.data) == null ? void 0 : r[n]) == null
            ? void 0
            : a.errors) == null
          ? void 0
          : i.map(this.parseMutationError).filter((c) => c)) || [],
      l = [...o, ...s];
    return f.leaveBreadcrumb("GraphQL errors on mutation", l, "error"), l;
  }
  parseMutationWarnings(e) {
    return !e || e.length === 0 ? [] : e.map((n) => n.code);
  }
  filterErrors(e) {
    var n;
    return !(
      ((n = e.code) != null && n.startsWith("PENDING_DELIVERY_GROUPS")) ||
      e.code === "INVALID_PAYMENT"
    );
  }
  extractPreparedCartMutationErrors(e) {
    var n;
    return (n = e == null ? void 0 : e.errors) != null ? n : [];
  }
  extractMutationErrors(e) {
    var n, r, a, i;
    let o =
      (a =
        (r = (n = e.data) == null ? void 0 : n.result) == null
          ? void 0
          : r.errors) != null
        ? a
        : [];
    return (
      this.cartPrepareMigrationEnabled && (o = o.filter(this.filterErrors)),
      [
        ...o,
        ...this.extractPreparedCartMutationErrors(
          (i = e.data) == null ? void 0 : i.preparedCart
        ),
      ]
    );
  }
  parsePreparedCartMutationErrors(e, n) {
    const r = this.parseGraphQlErrors(e),
      a = n.map(this.parseMutationError).filter((o) => o),
      i = [...r, ...a];
    return f.leaveBreadcrumb("GraphQL errors on mutation", i, "error"), i;
  }
  parseCompletionErrors(e) {
    var n, r, a, i;
    const o = this.parseGraphQlErrors(e.errors);
    let s = [];
    ((a =
      (r = (n = e.data) == null ? void 0 : n.cartSubmitForCompletion) == null
        ? void 0
        : r.result) == null
      ? void 0
      : a.__typename) === "SubmitFailed" &&
      (s =
        (i = e.data.cartSubmitForCompletion.result.errors.map((c) => c.code)) !=
        null
          ? i
          : []);
    const l = [...o, ...s];
    return f.leaveBreadcrumb("GraphQL errors on completion", l, "error"), l;
  }
}
function Es(t) {
  return !("cart" in t);
}
function As({
  emailAddress: t,
  countryCode: e,
  phone: n,
  streetAddress: r,
  validateAddress: a,
  preferences: i,
}) {
  return {
    email: t,
    countryCode: e != null ? e : r == null ? void 0 : r.country,
    phone: n != null ? n : r == null ? void 0 : r.phone,
    deliveryAddressPreferences: r
      ? [
          {
            deliveryAddressValidationStrategy: a
              ? "STRICT"
              : "COUNTRY_CODE_ONLY",
            deliveryAddress: r,
          },
        ]
      : [],
    preferences: i,
  };
}
function Ur({ instrumentName: t, startingCheckout: e }) {
  const n = {};
  return (
    t && (n["X-Wallet-Name"] = "".concat(t)),
    e && (n["X-Start-Wallet-Checkout"] = "".concat(e)),
    n
  );
}
async function Bn({
  cartId: t,
  cartClient: e,
  instrumentName: n,
  selectedDeliveryOptions: r,
  abortSignal: a,
}) {
  try {
    if (!t)
      throw new Error(
        "[".concat(n, "] provided no cart ID when updating shipping method")
      );
    if (!e)
      throw new Error(
        "[".concat(
          n,
          "] provided invalid cart client when updating shipping method"
        )
      );
    return await e.updateSelectedDeliveryOptions(t, r, n, a);
  } catch (i) {
    throw (b.updateFailed(n, "updateSelectedDeliveryOptions"), i);
  }
}
async function Hn({ cartId: t, token: e, cartClient: n, instrumentName: r }) {
  try {
    if (!t)
      throw new Error(
        "[".concat(r, "] provided no cart ID when submitting for completion")
      );
    if (!n)
      throw new Error(
        "[".concat(
          r,
          "] provided invalid cart client when submitting for completion"
        )
      );
    if (!e)
      throw new Error(
        "[".concat(r, "] provided no token when submitting for completion")
      );
    return await n.submitForCompletion(t, e, r);
  } catch (a) {
    throw (b.updateFailed(r, "submitForCompletion"), a);
  }
}
function Gn({
  selectedDeliveryOptionHandles: t,
  deliveryGroups: e,
  instrumentName: n,
}) {
  return e.map((r) => {
    const a = r.deliveryOptions.filter((i) => t.includes(i.handle));
    if (!a.length)
      throw new Error(
        "["
          .concat(n, "] could not find delivery option for group: ")
          .concat(r.id)
      );
    if (a.length > 1)
      throw new Error(
        "["
          .concat(
            n,
            "] found multiple delivery options with selectedDeliverOptionHandle in group: "
          )
          .concat(r.id)
      );
    return { deliveryGroupId: r.id, deliveryOptionHandle: a[0].handle };
  });
}
async function Cs(t) {
  const { cartClient: e, instrumentName: n } = t;
  try {
    if (!t.cartId)
      throw new Error(
        "[".concat(n, "] provided no cart ID when updating billing address")
      );
    if (!e)
      throw new Error(
        "[".concat(
          n,
          "] provided invalid cart client when updating billing address"
        )
      );
    return await e.updateCartBillingAddress(t);
  } catch (r) {
    throw (b.updateFailed(n, "updateBillingAddress"), r);
  }
}
class Ss {
  constructor({
    accessToken: e,
    buyerCountry: n,
    buyerCurrency: r,
    button: a,
    i18n: i,
    merchantName: o,
    dataSource: s,
    apiClient: l,
    walletParams: c,
  }) {
    d(this, "name", g.ApplePay),
      d(this, "accessToken"),
      d(this, "button"),
      d(this, "buyerCountry"),
      d(this, "cart"),
      d(this, "apiClient"),
      d(this, "dataSource"),
      d(this, "i18n"),
      d(this, "merchantName"),
      d(this, "session"),
      d(this, "paymentSheetActionGenerator"),
      d(this, "cancelled"),
      d(this, "buyerCurrency"),
      d(this, "customerAccountEmail"),
      d(this, "abortController", null),
      d(this, "onvalidatemerchant", async (u) => {
        var h, p, y;
        try {
          const v = new URL(u.validationURL),
            w = this.getMerchantSession(v),
            {
              cart: E,
              hasStockProblems: I,
              customValidationError: L,
            } = await oe({
              element: this.button,
              instrumentName: this.name,
              dataSource: this.dataSource,
            });
          if (L) {
            this.session.abort(),
              (h = this.abortController) == null || h.abort(),
              Ee(this.i18n, L.message);
            return;
          }
          this.cart = E;
          const k = await w;
          if (
            (f.leaveBreadcrumb(
              "ApplePay Session completeMerchantValidation",
              { session: k },
              "log"
            ),
            I)
          ) {
            this.session.abort(),
              (p = this.abortController) == null || p.abort(),
              x({
                checkoutUrl:
                  (y = E == null ? void 0 : E.checkoutUrl) != null ? y : "",
                instrumentName: this.name,
                reason: I,
              });
            return;
          }
          if (this.sessionIsCancelled()) return;
          this.session.completeMerchantValidation(k);
        } catch (v) {
          b.sheetClicked({ instrument: g.ApplePay, result: "failed" }),
            this.terminateSession(v);
        }
      }),
      d(this, "onshippingcontactselected", async (u) => {
        try {
          const h = et(u.shippingContact),
            p = await De({
              cartId: this.cart.id,
              streetAddress: h,
              cartClient: this.apiClient,
              instrumentName: this.name,
            });
          if (!p.data)
            throw new Error("Missing cart during Apple Pay Session creation");
          if (this.shouldDecelerate(p.data)) return;
          await this.applyPaymentSheetActions(
            p,
            (y) => this.completeShippingContactSelection(p.data, y),
            {
              shippingRequired: this.isShippingRequired,
              shippingCountryCode: h.country,
            }
          );
        } catch (h) {
          this.terminateSession(h);
        }
      }),
      d(this, "onshippingmethodselected", async (u) => {
        var h;
        try {
          const p = u.shippingMethod.identifier.split(","),
            y = Gn({
              selectedDeliveryOptionHandles: p,
              deliveryGroups: this.cart.deliveryGroups,
              instrumentName: this.name,
            }),
            v = await Bn({
              cartId: this.cart.id,
              cartClient: this.apiClient,
              instrumentName: this.name,
              selectedDeliveryOptions: y,
              abortSignal:
                (h = this.abortController) == null ? void 0 : h.signal,
            });
          await this.applyPaymentSheetActions(
            v,
            () => this.completeShippingMethodSelection(v.data),
            {
              shippingRequired: this.isShippingRequired,
              shippingCountryCode: void 0,
            }
          );
        } catch (p) {
          this.terminateSession(p);
        }
      }),
      d(this, "onpaymentmethodselected", async (u) => {
        try {
          const { billingContact: h } = u.paymentMethod;
          if (!this.isShippingRequired && h) {
            const v = et(h),
              w = await De({
                cartId: this.cart.id,
                countryCode: v.country,
                cartClient: this.apiClient,
                instrumentName: this.name,
              });
            if (!w.data)
              throw new Error("Missing cart during Apple Pay Session creation");
            if (this.shouldDecelerate(w.data)) return;
            await this.applyPaymentSheetActions(w, () => (this.cart = w.data), {
              shippingRequired: this.isShippingRequired,
              shippingCountryCode: v.country,
            });
            const E = await Cs({
              billingAddress: v,
              cartId: this.cart.id,
              cartClient: this.apiClient,
              instrumentName: this.name,
            });
            await this.applyPaymentSheetActions(E, () => (this.cart = E.data), {
              shippingRequired: this.isShippingRequired,
              shippingCountryCode: v.country,
            });
          }
          const { newTotal: p, newLineItems: y } = this.getNewTotalAndLineItems(
            this.cart
          );
          if (
            (f.leaveBreadcrumb(
              "ApplePay Session completePaymentMethodSelection",
              { newTotal: p, newLineItems: y },
              "log"
            ),
            this.sessionIsCancelled())
          )
            return;
          this.session.completePaymentMethodSelection({
            newTotal: p,
            newLineItems: y,
          });
        } catch (h) {
          this.terminateSession(h);
        }
      }),
      d(this, "oncancel", () => {
        var u;
        (this.cancelled = !0),
          b.sheetCancelled(this.name),
          (this.button.disabled = !1),
          (u = this.abortController) == null || u.abort();
      }),
      d(this, "onpaymentauthorized", async (u) => {
        b.authorizationAttempt(this.name),
          Xe(M.AuthorizationLatency, this.name);
        const h = (A) => {
            b.authorizationComplete({
              instrument: this.name,
              measurement: ne(M.AuthorizationLatency, this.name),
              result: "failure",
            }),
              this.terminateSession(A);
          },
          p = async (A) => {
            var U, O;
            switch (
              ((U = A.effects) == null || U.forEach((R) => R()), A.action)
            ) {
              case "complete": {
                const R = ApplePaySession.STATUS_SUCCESS;
                try {
                  await this.completePayment(R), re(A.redirectUrl);
                } catch (X) {
                  h(X);
                }
                break;
              }
              case "show_error": {
                const R = (O = A.errors) != null ? O : [];
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE, R);
                } catch (X) {
                  h(X);
                }
                break;
              }
              case "abort": {
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE),
                    (this.button.disabled = !1);
                } catch (R) {
                  h(R);
                }
                break;
              }
              case "decelerate": {
                try {
                  await this.completePayment(ApplePaySession.STATUS_FAILURE),
                    x({
                      checkoutUrl: A.redirectUrl,
                      instrumentName: this.name,
                      reason: A.reason,
                    });
                } catch (R) {
                  h(R);
                }
                break;
              }
              default:
                h(
                  new Error(
                    "["
                      .concat(this.name, "] completion action not handled: ")
                      .concat(A.action)
                  )
                );
            }
          },
          { token: y, billingContact: v, shippingContact: w } = u.payment;
        let E = null,
          I = null;
        try {
          if (!v) {
            await this.completePayment(ApplePaySession.STATUS_FAILURE);
            return;
          }
          if (
            ((E = et(
              D(_({}, v), { phoneNumber: w == null ? void 0 : w.phoneNumber })
            )),
            this.isShippingRequired)
          ) {
            if (!w) {
              await this.completePayment(ApplePaySession.STATUS_FAILURE);
              return;
            }
            I = et(w);
          }
        } catch (A) {
          h(A);
          return;
        }
        const L = async () => {
            var A;
            try {
              const U = this.isShippingRequired
                  ? { validateAddress: !0, streetAddress: I }
                  : {},
                O =
                  (A = this.customerAccountEmail) != null
                    ? A
                    : w == null
                    ? void 0
                    : w.emailAddress,
                R = await De(
                  _(
                    {
                      cartId: this.cart.id,
                      emailAddress: O,
                      cartClient: this.apiClient,
                      instrumentName: this.name,
                    },
                    U
                  )
                ),
                X =
                  this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                    R,
                    {
                      shippingRequired: this.isShippingRequired,
                      shippingCountryCode: I == null ? void 0 : I.country,
                    }
                  );
              await Rt({
                paymentSheetAction: X,
                onProceed: async (Ze) => {
                  Ze && Ze.length > 0
                    ? await this.completePayment(
                        ApplePaySession.STATUS_FAILURE,
                        Ze
                      )
                    : await k();
                },
                terminateSession: h,
              });
            } catch (U) {
              h(U);
            }
          },
          k = async () => {
            var A;
            try {
              const U = this.cart.lineItems.some(
                  (X) => !!X.sellingPlanAllocation
                ),
                O = await lr({
                  cartId: this.cart.id,
                  totalAmount: this.cart.totalAmount,
                  paymentMethod: {
                    walletPaymentMethod: {
                      applePayWalletContent: {
                        billingAddress: E,
                        data: y.paymentData.data,
                        header: y.paymentData.header,
                        lastDigits: y.paymentMethod.displayName.split(" ")[1],
                        signature: y.paymentData.signature,
                        version: y.paymentData.version,
                      },
                    },
                  },
                  canUsePaymentMethodForFreeOrder: !1,
                  billingAddress: E,
                  cartClient: this.apiClient,
                  instrumentName: this.name,
                  hasSellingPlan: U,
                  abortSignal:
                    (A = this.abortController) == null ? void 0 : A.signal,
                }),
                R =
                  this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
                    O,
                    {
                      shippingRequired: this.isShippingRequired,
                      shippingCountryCode: I == null ? void 0 : I.country,
                    }
                  );
              await Rt({
                paymentSheetAction: R,
                onProceed: async (X) => {
                  X && X.length > 0
                    ? await this.completePayment(
                        ApplePaySession.STATUS_FAILURE,
                        X
                      )
                    : await Me();
                },
                terminateSession: h,
              });
            } catch (U) {
              h(U);
            }
          },
          Me = async () => {
            try {
              const A = await Hn({
                  cartId: this.cart.id,
                  token: y.transactionIdentifier,
                  cartClient: this.apiClient,
                  instrumentName: this.name,
                }),
                U =
                  this.paymentSheetActionGenerator.mapCompletionResultToPaymentSheetAction(
                    A,
                    {
                      shippingRequired: this.isShippingRequired,
                      shippingCountryCode: I == null ? void 0 : I.country,
                    }
                  );
              await p(U);
            } catch (A) {
              h(A);
            }
          };
        await L();
      }),
      d(this, "terminateSession", (u) => {
        var h;
        (this.button.disabled = !1),
          u && f.notify(u),
          b.sheetFailed(this.name, u);
        try {
          f.leaveBreadcrumb("ApplePay Session abort", {}, "log"),
            this.session.abort(),
            (h = this.abortController) == null || h.abort();
        } catch (p) {
          console.debug(
            "[DEBUG] InvalidAccessError occurred during Apple Pay terminateSession"
          );
        }
        if (u) {
          const p = this.i18n.translate("brand.apple_pay");
          W(p, this.i18n);
        }
      }),
      d(this, "getMostRecentNonNullCart", (u, h) =>
        u ? ((this.cart = u), u) : h
      ),
      d(this, "handleNullCart", (u) => {
        if (!u)
          throw new Error(
            "[".concat(this.name, "] no cart returned on mutation, aborting")
          );
      }),
      d(this, "completeShippingContactSelection", (u, h) => {
        try {
          const p = this.getMostRecentNonNullCart(u, this.cart),
            { newTotal: y, newLineItems: v } = this.getNewTotalAndLineItems(p),
            w = Fo(p.deliveryGroups, this.i18n);
          f.leaveBreadcrumb(
            "ApplePay Session completeShippingContactSelection",
            { errors: h, newTotal: y, newLineItems: v, newShippingMethods: w },
            "log"
          ),
            this.session.completeShippingContactSelection({
              errors: h != null ? h : [],
              newTotal: y,
              newLineItems: v,
              newShippingMethods: w,
            });
        } catch (p) {
          this.terminateSession(p);
        }
      }),
      d(this, "completeShippingMethodSelection", (u) => {
        try {
          this.handleNullCart(u), (this.cart = u);
          const { newTotal: h, newLineItems: p } =
            this.getNewTotalAndLineItems(u);
          f.leaveBreadcrumb(
            "ApplePay Session completeShippingContactSelection",
            { newTotal: h, newLineItems: p },
            "log"
          ),
            this.session.completeShippingMethodSelection({
              newTotal: h,
              newLineItems: p,
            });
        } catch (h) {
          this.terminateSession(h);
        }
      }),
      d(this, "sessionIsCancelled", () => this.cancelled),
      (this.accessToken = e),
      (this.buyerCountry = n),
      (this.button = a),
      (this.cart = null),
      (this.apiClient = l),
      (this.dataSource = s),
      (this.i18n = i),
      (this.merchantName = o),
      (this.cancelled = !1),
      (this.buyerCurrency = r),
      (this.customerAccountEmail = c.customerAccountEmail),
      (this.session = new ApplePaySession(
        rn,
        Bo({
          shippingRequired: this.isShippingRequired,
          walletParams: c,
          buyerCurrency: r,
        })
      )),
      (this.session.onvalidatemerchant = this.onvalidatemerchant),
      (this.session.onshippingcontactselected = this.onshippingcontactselected),
      (this.session.onshippingmethodselected = this.onshippingmethodselected),
      (this.session.onpaymentmethodselected = this.onpaymentmethodselected),
      (this.session.oncancel = this.oncancel),
      (this.session.onpaymentauthorized = this.onpaymentauthorized),
      (this.paymentSheetActionGenerator = new $o(i));
  }
  begin() {
    f.leaveBreadcrumb("ApplePay Session begin", {}, "log"),
      (this.abortController = cr()),
      this.session.begin();
  }
  async applyPaymentSheetActions(e, n, r) {
    var a;
    const i =
      this.paymentSheetActionGenerator.mapMutationResultToPaymentSheetAction(
        e,
        r
      );
    (a = i.effects) == null || a.forEach((o) => o()),
      !this.sessionIsCancelled() &&
        (await Rt({
          paymentSheetAction: i,
          onProceed: n,
          terminateSession: this.terminateSession,
        }));
  }
  async getMerchantSession(e) {
    const n = await new At({
      accessToken: this.accessToken,
      country: this.buyerCountry,
      locale: this.i18n.locale,
      apiVersion: "unstable",
    }).applePaySessionCreate(e);
    return JSON.parse(n);
  }
  async completePayment(e, n = void 0) {
    f.leaveBreadcrumb(
      "ApplePay Session completePayment",
      { status: e, errors: n },
      "log"
    ),
      this.session.completePayment({ status: e, errors: n }),
      b.authorizationComplete({
        instrument: this.name,
        measurement: ne(M.AuthorizationLatency, this.name),
        result: e === ApplePaySession.STATUS_SUCCESS ? "success" : "failure",
      });
  }
  getNewTotalAndLineItems(e) {
    return {
      newTotal: xo(this.merchantName, e.totalAmount),
      newLineItems: Mo({
        subtotal: vn(e),
        discountAllocations: Ho(e),
        deliveryGroups: e.deliveryGroups,
        duties: e.totalDutyAmount,
        taxes: e.totalTaxAmount,
        i18n: this.i18n,
        formattedRecurringTotals: Go(this.cart.lineItems, this.i18n),
      }),
    };
  }
  shouldDecelerate(e) {
    const { checkoutUrl: n, totalAmount: r } = e;
    return nr({ currentCartTotal: r, initialBuyerCurrency: this.buyerCurrency })
      ? (x({
          checkoutUrl: n,
          instrumentName: this.name,
          reason: "currency_changed",
        }),
        this.terminateSession(),
        !0)
      : !1;
  }
  get isShippingRequired() {
    return this.button.isShippingRequired;
  }
}
function dr({ translate: t, logoElement: e, setAriaHidden: n }) {
  const r = document.createElement("div");
  return (
    t("buy_with_button_content", { wallet: "LOGO_PLACEHOLDER" })
      .split(new RegExp("(LOGO_PLACEHOLDER)"))
      .filter(Boolean)
      .forEach((a) => {
        let i;
        a === "LOGO_PLACEHOLDER"
          ? (i = e)
          : ((i = document.createElement("span")),
            (i.innerText = a),
            n && i.setAttribute("aria-hidden", "true")),
          r.appendChild(i);
      }),
    r
  );
}
var Ne;
class Is extends Ae {
  constructor() {
    super(),
      d(this, "name", g.ApplePay),
      d(this, "button", null),
      G(this, Ne),
      z(this, Ne, this.attachShadow({ mode: "closed" }));
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  get merchantName() {
    return this.walletParams.merchantName;
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  attributeChangedCallback(e, n, r) {
    super.attributeChangedCallback(e, n, r, this.button);
  }
  async handleClick(e) {
    if (
      (e.preventDefault(),
      this.disabled ||
        !this.button ||
        this.button.hasAttribute("aria-disabled"))
    )
      return;
    this.disabled = !0;
    const [n, r, a] = await Promise.all([
      this.i18n,
      this.dataSource,
      this.apiClient,
    ]);
    let i;
    try {
      if (
        ((i = new Ss({
          accessToken: this.accessToken,
          buyerCountry: this.buyerCountry,
          buyerCurrency: this.buyerCurrency,
          button: this,
          i18n: n,
          merchantName: this.merchantName,
          dataSource: r,
          apiClient: a,
          walletParams: this.walletParams,
        })),
        !i)
      )
        throw new Error("missing ApplePaySession");
      i.begin(), b.sheetClicked({ instrument: this.name, result: "success" });
    } catch (o) {
      f.notify(o),
        b.sheetClicked({ instrument: this.name, result: "failed" }),
        i == null || i.terminateSession();
    }
  }
  async render() {
    var e;
    const { translate: n } = await this.i18n,
      r = new DOMParser().parseFromString(
        qn.applePayLogo,
        "image/svg+xml"
      ).documentElement;
    if (!this.button) {
      const a = this.isCTA
        ? n("buy_with_button_content", { wallet: n("brand.apple_pay") })
        : n("brand.apple_pay");
      if (
        ((this.button = gt({ label: a })),
        (this.button.onclick = (i) => this.handleClick(i)),
        this.button.classList.add(
          "apple-pay-button",
          Ea[this.buttonTheme],
          we.BUTTON
        ),
        this.isCTA)
      ) {
        const i = dr({ translate: n, logoElement: r, setAriaHidden: !0 });
        i.classList.add("apple-pay--content"), this.button.appendChild(i);
      } else this.button.appendChild(r);
      this.initializeShadowStyles(S(this, Ne), vo),
        S(this, Ne).appendChild(this.button),
        this.ensureLightDOMIsNotEmpty(),
        (e = this.onRendered) == null || e.call(this);
    }
    this.disabled &&
      (this.button.setAttribute("disabled", ""),
      this.button.setAttribute("aria-disabled", "true"));
  }
}
Ne = new WeakMap();
function ur(t) {
  return function (e, n, r) {
    const a = r.value;
    return (
      (r.value = function (...i) {
        const o = a.apply(this, i);
        return (
          o.eligible ||
            console.debug(
              "[DEBUG] "
                .concat(t, " could not be rendered. Reason: ")
                .concat(o.reason)
            ),
          o
        );
      }),
      r
    );
  };
}
var Ps = Object.defineProperty,
  vs = Object.getOwnPropertyDescriptor,
  Vn = (t, e, n, r) => {
    for (var a = vs(e, n), i = t.length - 1, o; i >= 0; i--)
      (o = t[i]) && (a = o(e, n, a) || a);
    return a && Ps(e, n, a), a;
  },
  ee;
const hr =
  ((ee = class extends se {
    constructor(t) {
      super(t),
        d(this, "companyFieldRequired"),
        (this.companyFieldRequired = !!this.walletParams.companyRequired);
    }
    static walletName() {
      return "apple_pay";
    }
    getWebComponentName() {
      return "shopify-apple-pay-button";
    }
    getWebComponentClass() {
      return Is;
    }
    getInstrumentName() {
      return g.ApplePay;
    }
    applePayInIframe() {
      return typeof window > "u" || window.self !== window.top;
    }
    getLoadEligibility() {
      return this.applePayInIframe()
        ? { eligible: !1, reason: "cannot be loaded in an iframe" }
        : { eligible: !0 };
    }
    getPartnerSDKEligibility() {
      var t, e, n, r;
      return typeof window > "u" || window.ApplePaySession === void 0
        ? { eligible: !1, reason: "window or ApplePaySession is undefined" }
        : (e = (t = window.ApplePaySession).supportsVersion) != null &&
          e.call(t, rn)
        ? (r = (n = window.ApplePaySession).canMakePayments) != null &&
          r.call(n)
          ? { eligible: !0 }
          : { eligible: !1, reason: "failed SDK eligibility check" }
        : {
            eligible: !1,
            reason: "SDK does not meet minimum version requirement",
          };
    }
    async loadWalletSDK() {
      await this.loadAppleLogo();
    }
    async loadAppleLogo() {
      if (
        ((ee.applePayLogo = (
          await import("./apple-pay-logo-BZB6IYWC.js")
        ).default),
        !ee.applePayLogo)
      )
        throw new Error("Apple Pay logo is empty");
    }
  }),
  d(ee, "applePayLogo", ""),
  ee);
Vn([ur("Apple Pay")], hr.prototype, "getLoadEligibility"),
  Vn([ur("Apple Pay")], hr.prototype, "getPartnerSDKEligibility");
let qn = hr;
const Ds =
  ".buy-with-prime-button{width:100%;height:100%;padding:12px 10px 8px;display:flex;align-items:center;justify-content:center;gap:5px;opacity:1;border-width:0px}.buy-with-prime-button:hover:enabled{background-color:#0684eb!important}.buy-with-prime-button:focus{box-shadow:0 0 0 2px #1a98ff,inset 0 0 0 2px rgb(var(--color-background))!important;outline:none!important}.buy-with-prime-button:active,.buy-with-prime-button:hover:enabled:active{background-color:#0066cd!important;box-shadow:none!important}";
class lt extends Error {
  constructor() {
    super(...arguments), d(this, "name", "MissingAccessTokenError");
  }
}
class pr extends Error {
  constructor() {
    super(...arguments), d(this, "name", "FetchingWalletsPlatformConfigError");
  }
}
class mr extends Error {
  constructor() {
    super(...arguments),
      d(this, "name", "EmptyLineItemsWalletsPlatformConfigError");
  }
}
async function zn({
  configOptionsEndpoint: t,
  checkoutUrl: e,
  sourceId: n,
  accessToken: r,
  instrument: a,
}) {
  try {
    const i = JSON.stringify({
        checkout_url: e,
        checkout_cancel_url: window.location.href,
        cart_id: n,
      }),
      o = await fetch(t, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": r,
        },
        body: i,
      });
    if (o.ok) return o.json();
    const s = await o.json();
    throw s.error
      ? new Error(s.error)
      : new Error(
          "Could not fetch wallets platform configs: ["
            .concat(o.status, "] ")
            .concat(o.statusText)
        );
  } catch (i) {
    const { message: o } = i != null ? i : {};
    switch (o) {
      case "empty_line_items":
        throw new mr(
          "[Fetch Pay Config][".concat(
            a,
            "] No eligible line items provided in the config request."
          )
        );
      default:
        throw new pr("[Fetch Pay Config][".concat(a, "] ").concat(o));
    }
  }
}
const Rs = {
  [C.Checkout]: "Checkout",
  [C.CartAjax]: "Cart",
  [C.CartPage]: "Cart",
  [C.ProductPage]: "Product",
  [C.Unknown]: "Product",
};
var Ke;
const Ie = class zl extends Ae {
  constructor() {
    super(...arguments),
      d(this, "name", g.BuyWithPrime),
      d(this, "button", null),
      d(this, "apiClientId", ""),
      G(this, Ke, this.attachShadow({ mode: "closed" }));
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name),
      (this.handleOnSendCheckoutAction =
        this.handleOnSendCheckoutAction.bind(this));
  }
  async createButton() {
    const { translate: e } = await this.i18n,
      n = gt({ label: e("brand.buy_with_prime") });
    return (
      (n.type = "button"),
      (n.className = "buy-with-prime-button"),
      this.applyEnabledStyles(n),
      n
    );
  }
  applyEnabledStyles(e) {
    (e.innerHTML = We.primeLogo),
      (e.disabled = !1),
      Cr(e, {
        "background-color": "#1A98FF",
        color: "#FFFFFF",
        cursor: "pointer",
      });
  }
  applyDisabledStyles(e) {
    (e.innerHTML = We.primeLogoDark),
      (e.disabled = !0),
      Cr(e, {
        "background-color": "#C0E3FF",
        color: "#7292AC",
        cursor: "not-allowed",
      });
  }
  async handleClick() {
    var e, n, r;
    if (!this.button) return;
    const [a, i] = await Promise.all([this.i18n, this.dataSource]);
    let o = [];
    try {
      this.applyDisabledStyles(this.button);
      let s = this.walletParams;
      if (
        ((this.apiClientId = this.apiClientId || s.appId || ""),
        !s.createCheckoutSessionConfig)
      ) {
        const {
          cart: c,
          hasStockProblems: u,
          customValidationError: h,
        } = await oe({
          element: this,
          instrumentName: this.name,
          dataSource: i,
        });
        if (h) {
          Ee(a, h.message);
          return;
        }
        if (u) {
          x({
            checkoutUrl:
              (e = c == null ? void 0 : c.checkoutUrl) != null ? e : "",
            instrumentName: this.name,
            reason: u,
          });
          return;
        }
        if (!this.accessToken)
          throw new lt(
            "[Fetch Pay Config] could not fetch pay configs since required accessToken is missing."
          );
        s = _(
          {},
          await zn({
            configOptionsEndpoint: zl.OPTIMUS_CONFIG_REST_API_URL,
            checkoutUrl:
              (n = c == null ? void 0 : c.checkoutUrl) != null ? n : "",
            sourceId: (r = ln(c)) != null ? r : "",
            accessToken: this.accessToken,
            instrument: this.name,
          })
        );
      }
      (s.placement = this.getPlacement()),
        (o = this.extractSKUs(s)),
        delete s.checkoutSupportsSplitCart,
        delete s.appId;
      const l = s;
      this.pciEnabled &&
        (l.onSendCheckoutAction = this.handleOnSendCheckoutAction),
        window.amazon.buywithprime.initCheckout({ amazonPayOptions: l }),
        b.sheetClicked({
          instrument: this.name,
          result: "success",
          webPixelMetaData: this.apiClientId
            ? {
                apiClientId: this.apiClientId,
                skus: o,
                pageType: this.pageType,
              }
            : void 0,
        });
    } catch (s) {
      zl.EXPECTED_ERRORS.some((u) => s instanceof u) || f.notify(s),
        b.sheetClicked({
          instrument: this.name,
          result: "failed",
          webPixelMetaData: this.apiClientId
            ? {
                apiClientId: this.apiClientId,
                skus: o,
                pageType: this.pageType,
              }
            : void 0,
        });
      const { name: l } = s != null ? s : { name: "unknown" },
        { translate: c } = a;
      _e(
        c("error_dialogs.wallet.title", { wallet: c("brand.buy_with_prime") }),
        this.getModalContent(l, c)
      );
    } finally {
      this.applyEnabledStyles(this.button);
    }
  }
  getModalContent(e, n) {
    return e === "EmptyLineItemsWalletsPlatformConfigError"
      ? n("error_dialogs.wallet.eligibility_error", {
          wallet: n("brand.buy_with_prime"),
        })
      : n("error_dialogs.wallet.generic_error", {
          wallet: n("brand.buy_with_prime"),
        });
  }
  extractSKUs(e) {
    var n;
    return (n = e.createCheckoutSessionConfig) != null && n.payloadJSON
      ? JSON.parse(e.createCheckoutSessionConfig.payloadJSON)
          .cartDetails.lineItems.map((r) => r && r.sku)
          .filter((r) => r)
      : [];
  }
  getPlacement() {
    return (this.pageType && Rs[this.pageType]) || "Other";
  }
  async render() {
    var e;
    this.button ||
      ((this.button = await this.createButton()),
      (this.button.onclick = () => this.handleClick()),
      this.button.classList.add("buy-with-prime-button"),
      this.getPlacement().includes("Checkout") ||
        this.button.classList.add(we.BUTTON),
      await this.initializeShadowStyles(S(this, Ke), Ds),
      S(this, Ke).appendChild(this.button),
      (e = this.onRendered) == null || e.call(this));
  }
  async handleOnSendCheckoutAction(e) {
    var n, r, a;
    const { eventName: i, redirect: o, redirectUrl: s, requestPayload: l } = e;
    if (o && s) {
      (n = this.parentElement) == null ||
        n.dispatchEvent(
          new CustomEvent("wallet-redirect", {
            detail: { redirectUrl: s, requestPayload: l },
          })
        );
      return;
    }
    switch (i) {
      case "initCheckout":
      case "initChange":
        (r = this.parentElement) == null ||
          r.dispatchEvent(new CustomEvent("wallet-clicked"));
        break;
      case "cancelCheckout":
        (a = this.parentElement) == null ||
          a.dispatchEvent(new CustomEvent("wallet-cancel"));
        break;
    }
  }
};
(Ke = new WeakMap()),
  d(
    Ie,
    "OPTIMUS_CONFIG_REST_API_URL",
    "".concat(window.location.origin, "/wallets/config/optimus")
  ),
  d(Ie, "EXPECTED_ERRORS", [pr, lt, mr]);
let Vt = Ie;
function jn(t, e = 3, n = 1e3, r = () => !0) {
  const a = () =>
      new Promise((o) => {
        setTimeout(o, n);
      }),
    i = async (o) => {
      try {
        return await t();
      } catch (s) {
        if (o > 0 && r(s)) return await a(), i(o - 1);
        throw s;
      }
    };
  return i(e - 1);
}
async function Ns(t) {
  return new Promise((e, n) => {
    if (
      document.querySelector('script[src="'.concat(t, '"]')) &&
      window.amazon
    ) {
      e();
      return;
    }
    const r = document.createElement("script");
    (r.src = t),
      (r.onload = () => {
        window.amazon
          ? e()
          : n(new Error("Amazon SDK not present after loading"));
      }),
      (r.onerror = () => {
        n(new pt("Error loading Amazon SDK"));
      }),
      document.head.append(r);
  });
}
async function Yn({ sdkUrl: t = Qt, maxRetries: e = 3 }) {
  return jn(() => Ns(t), e, 200);
}
const V = class Ct extends se {
  static walletName() {
    return "buy_with_prime";
  }
  constructor(e) {
    super(e);
  }
  getWebComponentName() {
    return "shopify-buy-with-prime-button";
  }
  getInstrumentName() {
    return g.BuyWithPrime;
  }
  getWebComponentClass() {
    return Vt;
  }
  async loadWalletSDK() {
    await Yn({ sdkUrl: Ct.SDK_URL, maxRetries: Ct.MAX_RETRIES }),
      await this.loadLogos();
  }
  async loadLogos() {
    await Promise.all([this.loadPrimeLogo(), this.loadPrimeLogoDark()]);
  }
  async loadPrimeLogo() {
    if (
      ((Ct.primeLogo = (await import("./prime-logo-DoVHKBSO.js")).default),
      !Ct.primeLogo)
    )
      throw new Error("Buy with Prime logo is empty");
  }
  async loadPrimeLogoDark() {
    if (
      ((Ct.primeLogoDark = (
        await import("./prime-logo-dark-DJIA6J0w.js")
      ).default),
      !Ct.primeLogoDark)
    )
      throw new Error("Buy with Prime logo dark is empty");
  }
};
d(V, "MAX_RETRIES", 3),
  d(V, "SDK_URL", Qt),
  d(V, "primeLogo", ""),
  d(V, "primeLogoDark", "");
let We = V;
const Ts =
    "shopify-amazon-pay-button div[role=button][slot=amazon-pay-slot][data-testid=amazon-pay-button]{border-radius:0!important}",
  $r = "amazon-pay-slot";
var Te;
const Pe = class jl extends Ae {
  constructor() {
    super(),
      d(this, "name", g.AmazonPay),
      d(this, "container", null),
      G(this, Te),
      z(this, Te, this.attachShadow({ mode: "closed" }));
  }
  connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async handleClick(e) {
    var n, r;
    const [a, i] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        cart: o,
        hasStockProblems: s,
        customValidationError: l,
      } = await oe({ element: this, instrumentName: this.name, dataSource: i });
      if (l) {
        Ee(a, l.message);
        return;
      }
      if (s) {
        x({
          checkoutUrl:
            (n = o == null ? void 0 : o.checkoutUrl) != null ? n : "",
          instrumentName: this.name,
          reason: s,
        });
        return;
      }
      const {
        totalAmount: { amount: c },
        checkoutUrl: u,
      } = o;
      let h = this.walletParams;
      if (!h.createCheckoutSessionConfig) {
        if (!this.accessToken)
          throw new lt(
            "[Fetch Pay Config] could not fetch pay configs since required accessToken is missing."
          );
        h = D(
          _(
            {},
            await zn({
              configOptionsEndpoint: jl.CV2_CONFIG_REST_API_URL,
              checkoutUrl: u,
              sourceId: (r = ln(o)) != null ? r : "",
              accessToken: this.accessToken,
              instrument: this.name,
            })
          ),
          { placement: this.pageType === C.ProductPage ? "Product" : "Cart" }
        );
      }
      delete h.appId,
        e.initCheckout(
          _(
            _({}, h),
            Number(c) !== 0 && {
              estimatedOrderAmount: {
                amount: c,
                currencyCode: this.buyerCurrency,
              },
            }
          )
        ),
        b.sheetClicked({ instrument: this.name, result: "success" });
    } catch (o) {
      jl.EXPECTED_ERRORS.some((l) => o instanceof l) || f.notify(o),
        b.sheetClicked({ instrument: this.name, result: "failed" });
      const s = a.translate("brand.amazon_pay");
      W(s, a);
    }
  }
  createContainer({ containerID: e, height: n }) {
    const r = document.createElement("div");
    return (
      (r.id = e),
      (r.style.display = "flex"),
      n != null && (r.style.height = "".concat(n, "px")),
      (r.slot = $r),
      r.setAttribute("data-testid", "amazon-pay-button"),
      r
    );
  }
  async render() {
    var e;
    try {
      if (!this.container) {
        const n = document.createElement("slot");
        n.name = $r;
        const r = document.createElement("style");
        (r.textContent = Ts),
          this.appendChild(r),
          await this.initializeShadowStyles(S(this, Te));
        const a = await this.containerInstanceNumber,
          i = "AcceleratedCheckoutAmazonPayButtonContainer"
            .concat(this.pageType)
            .concat(a),
          o = document.createElement("div");
        o.classList.add(we.BUTTON),
          (o.style.overflow = "hidden"),
          o.appendChild(n),
          S(this, Te).appendChild(o);
        const s = $t(o);
        (this.container = this.createContainer({ containerID: i, height: s })),
          this.appendChild(this.container);
        const l = window.amazon.Pay.renderButton(
          "#".concat(i),
          D(_({}, this.walletParams), {
            placement: this.pageType === C.ProductPage ? "Product" : "Cart",
          })
        );
        l == null || l.onClick(() => this.handleClick(l)),
          (e = this.onRendered) == null || e.call(this);
      }
    } catch (n) {
      f.notify(n);
    }
  }
};
(Te = new WeakMap()),
  d(
    Pe,
    "CV2_CONFIG_REST_API_URL",
    "".concat(window.location.origin, "/wallets/config/amazon_pay")
  ),
  d(Pe, "EXPECTED_ERRORS", [pr, lt, mr]);
let qt = Pe;
const ve = class Wl extends se {
  static walletName() {
    return "amazon_pay";
  }
  constructor(e) {
    super(e);
  }
  getWebComponentName() {
    return "shopify-amazon-pay-button";
  }
  getInstrumentName() {
    return g.AmazonPay;
  }
  getWebComponentClass() {
    return qt;
  }
  async loadWalletSDK() {
    await Yn({ sdkUrl: Wl.SDK_URL, maxRetries: Wl.MAX_RETRIES });
  }
  getLoadEligibility(e) {
    return e.getRootNode() instanceof ShadowRoot
      ? { eligible: !1, reason: "Cannot load Amazon Pay within Shadow DOM" }
      : { eligible: !0 };
  }
};
d(ve, "MAX_RETRIES", 3), d(ve, "SDK_URL", Qt);
let zt = ve;
var Nt = {
    Purple: {
      D0: "#4524DB",
      D1: "#30368D",
      D2: "#1C234C",
      L0: "#6445ED",
      L1: "#9C83F8",
      L2: "#EEEAFF",
      L3: "#F7F5FF",
      Primary: "#5433EB",
      PrimaryLight: "#DBD1FF",
    },
    Grayscale: {
      Black: "#000000",
      D0: "#666666",
      D1: "#404040",
      D2: "#121212",
      D3: "#0B0B0C",
      D2D: "#2A2A2A",
      PrimaryLight: "#707070",
      L1: "#A8A8A7",
      L2: "#CBCBCA",
      L2L: "#E3E3E3",
      L3: "#F0F0F0",
      L4: "#F2F4F5",
      White: "#FFFFFF",
    },
    Green: {
      D1: "#008552",
      D2: "#004839",
      L1: "#BAEBCB",
      L2: "#D2F2DE",
      L3: "#E4F6EB",
      Primary: "#92D08D",
    },
    Poppy: {
      D0: "#F05D38",
      D1: "#D92A0F",
      D2: "#832711",
      L1: "#FFD2C2",
      L2: "#FFECE9",
      Primary: "#FF967D",
    },
    Ochre: {
      D0: "#F8DB67",
      D1: "#E3BE2B",
      D2: "#C29D05",
      D4: "#443600",
      L1: "#FFF4CB",
      L2: "#FFF9E2",
      Primary: "#FFEC9F",
    },
    Brand: {
      Aqua: "#8DC0C6",
      Lime: "#C7DE00",
      Magenta: "#D354FF",
      Olive: "#8B8F01",
      Sage: "#D8E59D",
      Sand: "#F4F4ED",
      Violet: "#A327C2",
    },
  },
  Ls = {
    0: 0,
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    "xs-s": 12,
    s: 16,
    gutter: 20,
    m: 24,
    l: 32,
    section: 36,
    xl: 40,
    xxl: 48,
    xxxl: 64,
    auto: "auto",
  },
  Os = class extends HTMLElement {
    static get observedAttributes() {
      return ["disabled"];
    }
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this._updateButton();
    }
    attributeChangedCallback() {
      this._updateButton();
    }
    _updateButton() {
      var t;
      let e = this.shadowRoot;
      e &&
        ((e.innerHTML = xs),
        this.hasAttribute("disabled") &&
          ((t = this.shadowRoot.querySelector("button")) == null ||
            t.setAttribute("disabled", "")));
    }
  };
function ks() {
  window.customElements &&
    (customElements.get("gravity-button") ||
      customElements.define("gravity-button", Os));
}
var xs =
  "\n<style>\n  * {\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n    --focused-box-shadow: 0 0 0 3px #DBD1FF, 0 0 #0000;\n  }\n\n  button {\n    text-transform: none;\n    -webkit-appearance: button;\n    background-color: transparent;\n    background-image: none;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    font-size: 100%;\n    font-weight: inherit;\n    line-height: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    cursor: default;\n    opacity: 0.5;\n  }\n\n  .gravity-button {\n    position: relative;\n    display: flex;\n    min-height: var(--gravity-button-min-height);\n    height: var(--gravity-button-height);\n    width: var(--gravity-button-width, 260px);\n    justify-content: center;\n    color: "
    .concat(
      Nt.Grayscale.White,
      ";\n    align-items: center;\n    overflow: visible;\n    padding: var(--gravity-button-padding, "
    )
    .concat(
      Ls.s,
      "px 10px);\n    border-radius: var(--gravity-button-border-radius);\n    border: none;\n    background-color: "
    )
    .concat(
      Nt.Purple.Primary,
      ";\n    transition: all;\n  }\n\n  .gravity-button:not([disabled]):focus-visible {\n    box-shadow: var(--focused-base-box-shadow, var(--focused-box-shadow));\n    outline: var(--focused-base-outline, 2px solid transparent);\n    outline-offset: var(--focused-base-outline-offset, 2px);\n  }\n\n  .gravity-button:not([disabled]):hover {\n    background-color: "
    )
    .concat(
      Nt.Purple.D0,
      ';\n  }\n</style>\n\n<button class="gravity-button">\n  <slot id="button-content"></slot>\n</button>\n'
    );
const Ms =
    ".button-content{display:flex;align-items:center;justify-content:center;width:100%;height:100%;gap:3px;white-space:nowrap;container-type:inline-size;container-name:bc}.ShopPromise>.separator{margin:0 8px}@container bc (width <= 338px){.ShopPromise{display:none!important}}gravity-button{display:block}",
  Fs =
    '.accelerated-checkout-button{--gravity-button-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-min-height: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 44px), 55px );--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 0px );--gravity-button-padding: 0px 10px;--gravity-button-width: 100%}:host([page-type="cart_page"]) .accelerated-checkout-button{--gravity-button-height: 100%;--gravity-button-min-height: 100%;--gravity-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--gravity-button-width: 100%}';
class Wn extends Error {
  constructor() {
    const e = "DeliveryEstimatesResponseIsNullError";
    super("deliveryEstimates is null or undefined"), (this.name = e);
  }
}
class Tt extends Error {
  constructor() {
    const e = "DeliveryPromiseAPIClientError";
    super("window.Shopify.ShopPromise.deliveryPromiseAPIClient is undefined"),
      (this.name = e);
  }
}
const Us = 15,
  $s = 200;
class Bs {
  constructor(e) {
    d(this, "storefrontAPIToken"), (this.storefrontAPIToken = e);
  }
  async fetchDeliveryPromise({
    variant: e,
    postalCode: n,
    defaultPostalCode: r,
    sellingPlanId: a,
  }) {
    const i = await jn(
      async () => this.fetchDeliveryOptions(e, n, r, a),
      Us,
      $s,
      (o) => o instanceof Tt
    ).catch((o) => {
      if (o instanceof Tt) throw o;
      return null;
    });
    if (!i) throw new Wn();
    return i;
  }
  async fetchDeliveryOptions(e, n, r, a) {
    var i, o;
    const s = {
        variantId: e,
        sellingPlanId: a,
        postalCode: n || r,
        isPostalCodeOverride: !!n,
      },
      l =
        (o =
          (i = window == null ? void 0 : window.Shopify) == null
            ? void 0
            : i.ShopPromise) == null
          ? void 0
          : o.deliveryPromiseAPIClient;
    if (!l) throw new Tt();
    return l(s, this.storefrontAPIToken);
  }
}
function Hs(t, e) {
  switch (t) {
    case 0:
      return (
        (e == null ? void 0 : e.translate("shop_promise_delivery.same_day")) ||
        null
      );
    case 1:
      return (
        (e == null ? void 0 : e.translate("shop_promise_delivery.next_day")) ||
        null
      );
    case 2:
      return (
        (e == null ? void 0 : e.translate("shop_promise_delivery.two_day")) ||
        null
      );
    default:
      return null;
  }
}
const Gs = "delivery_promise_default_address",
  Vs = "delivery_promise_postal_code";
class qs extends bt {
  constructor() {
    super(...arguments),
      d(this, "lastFetchedProductVariantId"),
      d(this, "lastFetchSellingPlan"),
      d(this, "fetching", !1),
      d(this, "i18n", null),
      d(this, "daysToDelivery"),
      d(this, "formObserver", null);
  }
  async connectedCallback() {
    (this.formObserver = new fn(this, ({ variantId: e, sellingPlanId: n }) => {
      this.fetchDeliveryPromise(e, n);
    })),
      this.formObserver.setupMutationObservers();
  }
  setTranslations(e) {
    (this.i18n = e), this.render();
  }
  get postalCode() {
    try {
      return JSON.parse(Ye(Vs) || "null") || null;
    } catch (e) {
      return null;
    }
  }
  get defaultDeliveryAddress() {
    try {
      return JSON.parse(Ye(Gs) || "null");
    } catch (e) {
      return null;
    }
  }
  async fetchDeliveryPromise(e, n) {
    var r, a, i, o;
    if (
      !(!e || !this.accessToken) &&
      !(
        e === this.lastFetchedProductVariantId &&
        n === this.lastFetchSellingPlan
      )
    )
      try {
        (this.lastFetchedProductVariantId = e), (this.lastFetchSellingPlan = n);
        const s =
            ((r = this.defaultDeliveryAddress) == null ? void 0 : r.zip) || "",
          l = await new Bs(this.accessToken).fetchDeliveryPromise({
            variant: e,
            postalCode: this.postalCode || "",
            defaultPostalCode: s,
            sellingPlanId: n || "",
          }),
          c = sr(this),
          u =
            (i =
              (a = l == null ? void 0 : l.selectedShippingOption) == null
                ? void 0
                : a.brandedPromise) == null
              ? void 0
              : i.handle;
        if (
          (c == null ? void 0 : c.sellingPlanId) !== n ||
          (c == null ? void 0 : c.variantId) !== e ||
          u !== "shop_promise"
        )
          return;
        (this.daysToDelivery =
          (o = l == null ? void 0 : l.selectedShippingOption) == null
            ? void 0
            : o.maxCalendarDaysToDelivery),
          this.render();
      } catch (s) {
        s instanceof Wn && (this.daysToDelivery = null);
      }
  }
  render() {
    const e = Hs(this.daysToDelivery, this.i18n);
    this.classList.add("ShopPromise"),
      (this.innerHTML = e
        ? '<span class="separator">|</span><span>'.concat(e, "</span>")
        : "");
  }
}
var me;
class zs extends Ae {
  constructor() {
    super(),
      d(this, "name", g.ShopPay),
      d(this, "button", null),
      d(this, "shopPromiseProductPageContent", null),
      d(this, "shopPromiseEligible", !1),
      G(this, me),
      z(this, me, this.attachShadow({ mode: "closed" }));
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  connectedCallback() {
    (this.shopPromiseEligible = cn()),
      this.cleanupOnFailure(async () => {
        ks(), await this.render();
      }, this.name);
  }
  attributeChangedCallback(e, n, r) {
    super.attributeChangedCallback(e, n, r, this.button);
  }
  async addButtonContent() {
    if (!this.button) return;
    let e;
    const n = await this.i18n,
      r = new DOMParser().parseFromString(
        Qn.shopPayLogoElement,
        "image/svg+xml"
      ).documentElement;
    this.isCTA
      ? (e = dr({ translate: n.translate, logoElement: r, setAriaHidden: !1 }))
      : ((e = document.createElement("div")), e.appendChild(r)),
      e.classList.add("button-content"),
      this.shopPromiseEligible &&
        !this.shopPromiseProductPageContent &&
        ((this.shopPromiseProductPageContent = document.createElement(
          "shop-promise-product-page-content"
        )),
        this.shopPromiseProductPageContent.setTranslations(n),
        this.shopPromiseProductPageContent.setAttribute(
          "access-token",
          this.accessToken || ""
        ),
        e.appendChild(this.shopPromiseProductPageContent)),
      this.button.appendChild(e);
  }
  getShopPayBehavior() {
    return this.pageType === C.ProductPage
      ? "force_shop_pay_product"
      : this.pageType === C.CartPage
      ? "force_shop_pay_cart"
      : "force_shop_pay";
  }
  async handleClick(e) {
    var n, r;
    if (
      (e.preventDefault(),
      this.disabled || !this.button || this.button.getAttribute("disabled"))
    )
      return;
    this.disabled = !0;
    const [a, i] = await Promise.all([this.i18n, this.dataSource]);
    try {
      const {
        hasStockProblems: o,
        cart: s,
        customValidationError: l,
      } = await oe({ element: this, instrumentName: g.ShopPay, dataSource: i });
      if ((b.sheetClicked({ instrument: this.name, result: "success" }), l)) {
        Ee(a, l.message);
        return;
      }
      if (o) {
        x({
          checkoutUrl:
            (n = s == null ? void 0 : s.checkoutUrl) != null ? n : "",
          instrumentName: this.name,
          reason: o,
        });
        return;
      }
      re(
        (r = s == null ? void 0 : s.checkoutUrl) != null ? r : "",
        this.getShopPayBehavior()
      );
    } catch (o) {
      f.notify(
        new js(
          "An error occurred when attempting to create a cart using the Shop Pay Button. Details: ".concat(
            o
          ),
          { cause: o }
        )
      ),
        b.sheetClicked({ instrument: this.name, result: "failed" }),
        _e(
          a.translate("error_dialogs.checkout.title"),
          a.translate("error_dialogs.checkout.generic_error")
        );
    }
  }
  async render() {
    if (S(this, me).innerHTML) return;
    this.button || (this.button = document.createElement("gravity-button"));
    const e = document.createElement("style");
    (e.innerHTML = [bn, Fs, Ms].join("\n")),
      S(this, me).appendChild(e),
      await this.addButtonContent(),
      this.disabled && this.button.setAttribute("disabled", ""),
      this.button.setAttribute("aria-hidden", "true"),
      this.button.classList.add(we.BUTTON),
      (this.button.onclick = (n) => this.handleClick(n)),
      S(this, me).appendChild(this.button),
      this.ensureLightDOMIsNotEmpty(),
      this.onRendered();
  }
}
(me = new WeakMap()), ie("shop-promise-product-page-content", qs);
class js extends Error {
  constructor() {
    super(...arguments), d(this, "name", "ShopPayButtonError");
  }
}
var Ys = Object.defineProperty,
  Ws = Object.getOwnPropertyDescriptor,
  Ks = (t, e, n, r) => {
    for (var a = Ws(e, n), i = t.length - 1, o; i >= 0; i--)
      (o = t[i]) && (a = o(e, n, a) || a);
    return a && Ys(e, n, a), a;
  },
  ye;
const Kn =
  ((ye = class extends se {
    static walletName() {
      return "shop_pay";
    }
    constructor(t) {
      super(t);
    }
    getWebComponentName() {
      return "shop-pay-wallet-button";
    }
    getWebComponentClass() {
      return zs;
    }
    getInstrumentName() {
      return g.ShopPay;
    }
    async loadWalletSDK() {
      await this.loadLogo();
    }
    getLoadEligibility() {
      return { eligible: !0 };
    }
    async loadLogo() {
      ye.shopPayLogoElement = (
        await import("./shop-pay-logo-CYhOC7ye.js")
      ).default;
    }
  }),
  d(ye, "shopPayLogoElement"),
  ye);
Ks([ur("Shop Pay")], Kn.prototype, "getLoadEligibility");
let Qn = Kn;
const Qs =
  ".button{display:flex;justify-content:center;align-items:center;width:100%;border:none}.button:hover:not(:disabled){filter:brightness(92%);cursor:pointer}.button:disabled{opacity:.5;cursor:not-allowed}.logo-only>svg{width:50px}.dark{background:#000;color:#fff}.light{background:#fff;color:#000;outline:1px solid #3c4043}@media (forced-colors: active){.light{outline:none}}.content{display:flex;justify-content:center;align-items:center;white-space:pre}";
function Lt({ cart: t, i18n: e }) {
  const n = vn(t),
    r = {
      label: e.translate("order_summary.subtotal"),
      type: "SUBTOTAL",
      price: fe(n.amount),
    },
    a = In({ deliveryGroups: t.deliveryGroups, i18n: e }).map((s) =>
      Js({ lineItem: s, type: "LINE_ITEM" })
    ),
    i = Xs(t, e),
    o = [r, ...a, ...i];
  if (t.totalDutyAmount) {
    const s = {
      label: e.translate("order_summary.duties"),
      type: "LINE_ITEM",
      price: fe(t.totalDutyAmount.amount),
    };
    o.push(s);
  }
  if (t.totalTaxAmount) {
    const s = {
      label: e.translate("order_summary.taxes"),
      type: "TAX",
      price: fe(t.totalTaxAmount.amount),
    };
    o.push(s);
  }
  return {
    totalPrice: t.totalAmount.amount,
    currencyCode: t.totalAmount.currencyCode,
    totalPriceStatus: "ESTIMATED",
    totalPriceLabel: e.translate("order_summary.total"),
    displayItems: o,
  };
}
function Js({ lineItem: t, type: e, status: n = "FINAL" }) {
  return { label: t.label, type: e, price: t.amount, status: n };
}
function Xs(t, e) {
  return [
    ...t.lineItems.flatMap((n) => n.discountAllocations),
    ...t.discountAllocations,
  ].flatMap((n) => {
    var r;
    const a = (r = n.title) != null ? r : n.code;
    return {
      label: a != null ? a : e.translate("order_summary.discount"),
      type: "LINE_ITEM",
      price: "-".concat(fe(Number(n.discountedAmount.amount))),
    };
  });
}
const Jn = ["PAYMENT_AUTHORIZATION"],
  Zs = Jn.concat(["SHIPPING_ADDRESS", "SHIPPING_OPTION"]),
  el = ["PAN_ONLY"];
function tl({
  walletParams: t,
  isShippingRequired: e,
  hasSellingPlan: n,
  i18n: r,
  buyerCurrency: a,
  authJwt: i,
}) {
  const o = {
      totalPrice: "0.01",
      currencyCode: a,
      totalPriceStatus: "ESTIMATED",
      totalPriceLabel: r.translate("order_summary.total"),
      displayItems: [
        {
          label: r.translate("order_summary.subtotal"),
          type: "SUBTOTAL",
          price: "0.01",
        },
      ],
    },
    s = D(_({}, t.paymentData), {
      shippingAddressRequired: e,
      shippingOptionRequired: e,
      transactionInfo: o,
    });
  return (
    (s.merchantInfo.authJwt = i),
    e || delete s.shippingAddressParameters,
    (s.callbackIntents = e ? Zs : Jn),
    n && rl(s),
    s
  );
}
function rl(t) {
  t.allowedPaymentMethods.forEach((e) => {
    e.parameters.allowedAuthMethods = e.parameters.allowedAuthMethods.filter(
      (n) => el.includes(n)
    );
  });
}
class nl extends Pn {
  constructor(e) {
    super(),
      d(this, "brandName"),
      d(this, "completionResult"),
      (this.i18n = e),
      (this.brandName = this.i18n.translate("brand.google_pay")),
      (this.completionResult = void 0);
  }
  mapMutationResultToPaymentSheetAction(e) {
    const n = this.mapCustomValidationFunctionErrorToAction(e.errors);
    if (n) return n;
    const r = this.getErrorActions(),
      a = e.errors,
      i = this.getUnhandledErrors(a, r);
    i.forEach((s) => {
      f.notify(
        new st(
          "["
            .concat(g.GooglePay, "] mutation result error not handled: ")
            .concat(s)
        )
      );
    });
    const { firstPaymentSheetAction: o } = this.getMergedPaymentSheetAction({
      result: e,
      errorActions: r,
    });
    return (
      o ||
      (i.length > 0 ? { action: "abort" } : { action: "update", errors: [] })
    );
  }
  mapCompletionResultToPaymentSheetAction(e) {
    if (!e.data)
      throw new Error(
        "[".concat(g.GooglePay, "] completion returned null result")
      );
    switch (((this.completionResult = e), e.data.__typename)) {
      case "SubmitSuccess":
        return { action: "complete", redirectUrl: e.data.redirectUrl };
      case "SubmitAlreadyAccepted":
      case "SubmitThrottled":
      case "SubmitFailed": {
        const n = this.mapCustomValidationFunctionErrorToAction(e.errors);
        if (n) return n;
        const r = this.getErrorActions(),
          a = e.errors;
        this.getUnhandledErrors(a, r).forEach((o) => {
          f.notify(
            new Error(
              "["
                .concat(g.GooglePay, "] completion result error not handled: ")
                .concat(o)
            )
          );
        });
        const { prioritizedPaymentSheetAction: i } =
          this.getMergedPaymentSheetAction({ result: e, errorActions: r });
        return i || (W(this.brandName, this.i18n), { action: "abort" });
      }
      default:
        throw new Error(
          "["
            .concat(g.GooglePay, "] unknown completion result type: ")
            .concat(e.data.__typename)
        );
    }
  }
  getErrorActions() {
    return [
      {
        errors: [m.CaptchaCompletionRequired],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "captcha_required",
            instrumentName: g.GooglePay,
            errorOrWarning: m.CaptchaCompletionRequired,
            result: this.completionResult,
          }),
      },
      {
        errors: [m.InvalidLanguage],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.GooglePay,
                    "] mutation provided invalid language, aborting"
                  )
                )
              );
            },
            () => W(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [m.InvalidCountry],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.GooglePay,
                    "] mutation provided invalid country, aborting"
                  )
                )
              );
            },
            () => W(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [m.MissingCartId],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => {
              f.notify(
                new Error(
                  "[".concat(
                    g.GooglePay,
                    "] mutation provided invalid cart ID, aborting"
                  )
                )
              );
            },
            () => W(this.brandName, this.i18n),
          ],
        }),
      },
      {
        errors: [
          m.UnacceptablePaymentsAmount,
          m.NewTaxMustBeAccepted,
          m.MerchandiseExpectedPriceMismatch,
          m.DeliveryLineChanged,
          m.DeliveryLocalPickupLineChanged,
          ...hn,
        ],
        generateAction: () => ({
          action: "abort",
          effects: [() => W(this.brandName, this.i18n)],
        }),
      },
      {
        errors: [m.UnsupportedGooglePayPaymentMethod],
        generateAction: () => ({
          action: "abort",
          effects: [
            () => W(this.brandName, this.i18n),
            () => {
              f.notify(
                new st(
                  "[".concat(g.GooglePay, "] payment method is not supported")
                )
              );
            },
          ],
        }),
      },
      {
        errors: [m.MerchandiseNotEnoughStock],
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "not_enough_stock",
            instrumentName: g.GooglePay,
            errorOrWarning: m.MerchandiseNotEnoughStock,
            result: this.completionResult,
          }),
      },
      {
        errors: pn,
        generateAction: () =>
          this.decelerateOrAbort({
            reason: "out_of_stock",
            instrumentName: g.GooglePay,
            errorOrWarning: m.MerchandiseOutOfStock,
            result: this.completionResult,
          }),
      },
      {
        errors: un,
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_UNSERVICEABLE",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.shipping_address"),
            },
          ],
        }),
      },
      {
        errors: dn,
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.postal_code"),
            },
          ],
        }),
      },
      {
        errors: [m.NoDeliveryGroupSelected],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_OPTION_INVALID",
              intent: "SHIPPING_OPTION",
              message: this.i18n.translate("errors.missing.shipping_option"),
            },
          ],
        }),
      },
      {
        errors: [
          m.BuyerIdentityEmailDomainInvalid,
          m.BuyerIdentityEmailNotExpectedPattern,
          m.BuyerIdentityEmailInvalid,
        ],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "OTHER_ERROR",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.email"),
            },
          ],
        }),
      },
      {
        errors: [m.BuyerIdentityEmailRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.email"),
            },
          ],
        }),
      },
      {
        errors: [
          m.DeliveryAddress2Required,
          m.DeliveryAddress2AddressFieldRequired,
        ],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.address2"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2Invalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.address2"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryCityAddressFieldRequired, m.DeliveryCityRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.city"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryCityInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.city"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryZoneRequiredForCountry],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.zone"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryZoneNotFound],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.zone"),
            },
          ],
        }),
      },
      {
        errors: [
          m.DeliveryPostalCodeRequired,
          m.DeliveryPostalCodeAddressFieldRequired,
        ],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.postal_code"),
            },
          ],
        }),
      },
      {
        errors: [
          m.DeliveryPostalCodeInvalid,
          m.DeliveryInvalidPostalCodeForZone,
          m.DeliveryInvalidPostalCodeForCountry,
          m.DeliveryZipInvalidForCountry,
        ],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.postal_code"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryPhoneNumberRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "OTHER_ERROR",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.phone_number"),
            },
          ],
        }),
      },
      {
        errors: [
          m.DeliveryPhoneNumberInvalid,
          m.BuyerIdentityInvalidPhone,
          m.DeliveryPhoneDoesNotMatchExpectedPattern,
        ],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "OTHER_ERROR",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.phone_number"),
            },
          ],
        }),
      },
      {
        errors: [m.BuyerIdentityInvalidCountry, m.DeliveryCountryInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.country"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.first_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.first_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameRequired],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameInvalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1Required],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.missing.address1"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1Invalid],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.invalid.address1"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.emojis.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryCityContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.emojis.city"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1ContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.emojis.address1"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2ContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.emojis.address2"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryPostalCodeContainsEmojis],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.emojis.postal_code"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1TooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.too_long.address1"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2TooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.too_long.address2"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.too_long.first_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.too_long.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryCityTooLong],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.too_long.city"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameContainsUrl],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.url.first_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsUrl],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.url.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress1ContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.html_tags.address1"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryAddress2ContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.html_tags.address2"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryCityContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.html_tags.city"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryFirstNameContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.html_tags.first_name"),
            },
          ],
        }),
      },
      {
        errors: [m.DeliveryLastNameContainsHtmlTags],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "SHIPPING_ADDRESS",
              message: this.i18n.translate("errors.html_tags.last_name"),
            },
          ],
        }),
      },
      {
        errors: [m.InvalidPaymentGooglePayBillingAddress],
        generateAction: () => ({
          action: "show_error",
          errors: [
            {
              reason: "PAYMENT_DATA_INVALID",
              intent: "PAYMENT_METHOD",
              message: this.i18n.translate("errors.invalid.billing_address"),
            },
          ],
        }),
      },
    ];
  }
  mapCustomValidationFunctionErrorToAction(e) {
    const n = tr(e);
    return n
      ? (f.notify(
          new Error(
            "["
              .concat(g.GooglePay, "] custom validation function error: ")
              .concat(JSON.stringify(e))
          )
        ),
        rr(
          this.i18n.translate("error_dialogs.wallet.title", {
            wallet: this.brandName,
          }),
          n.message
        ),
        { action: "abort" })
      : null;
  }
}
function al({ deliveryGroups: t, i18n: e }) {
  var n;
  const r = No(Cn({ deliveryGroups: t }), e),
    a = r.map(({ handle: o, title: s, description: l }) => ({
      id: o,
      label: s != null ? s : "",
      description: l,
    })),
    i =
      (n = r.find((o) => {
        var s;
        return o.handle.includes(
          ((s = t[0].selectedDeliveryOption) == null ? void 0 : s.handle) || ""
        );
      })) == null
        ? void 0
        : n.handle;
  return { shippingOptions: a, defaultSelectedOptionId: i };
}
function Ot(t) {
  let e = t.administrativeArea,
    n = t.locality;
  t.countryCode === "AE" &&
    ((n = t.administrativeArea),
    t.administrativeArea in Br && (e = Br[t.administrativeArea])),
    t.countryCode === "MX" && e && (e = il(e));
  let r, a;
  if (t.name) {
    const [i, ...o] = (t.name || "").split(" ");
    o.length === 0 ? (a = i) : (a = o.join(" ")), (r = i);
  }
  return {
    firstName: r,
    lastName: a,
    address1: t.address1,
    address2: t.address2,
    city: n,
    province: e,
    country: t.countryCode,
    phone: t.phoneNumber,
    zip: t.postalCode,
  };
}
const Br = {
    "\u0623\u0628\u0648 \u0638\u0628\u064A": "AZ",
    "\u0625\u0645\u0627\u0631\u0629 \u0627\u0644\u0634\u0627\u0631\u0642\u0629\u0651":
      "SH",
    الفجيرة: "FU",
    عجمان: "AJ",
    "\u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629": "RK",
    "\u0625\u0645\u0627\u0631\u0629 \u0631\u0623\u0633 \u0627\u0644\u062E\u064A\u0645\u0629":
      "RK",
    "\u0623\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646": "UQ",
    "\u0627\u0645 \u0627\u0644\u0642\u064A\u0648\u064A\u0646": "UQ",
    دبي: "DU",
    "\u0625\u0645\u0627\u0631\u0629 \u062F\u0628\u064A\u0651": "DU",
  },
  il = (t) =>
    t === "M\xE9x."
      ? "MEX"
      : t === "Q.R."
      ? "Q ROO"
      : t.replace(/\./g, "").toUpperCase();
class kt extends Error {
  constructor() {
    super(...arguments), d(this, "name", "GooglePayError");
  }
}
function Xn(t) {
  const e = t.auth;
  if (!(Array.isArray(e) && e.length > 0))
    return { result: "error", reason: "invalidAuthParams" };
  const n = Ve();
  for (const r of e)
    if (n < r.expiresAt * 1e3) return { result: "success", jwt: r.jwt };
  return { result: "error", reason: "authJwtExpired" };
}
const ol = 27e3;
var Qe, J, Le;
class sl {
  constructor({
    walletParams: e,
    isShippingRequired: n,
    hasSellingPlan: r,
    dataSource: a,
    button: i,
    i18n: o,
    cartClient: s,
    buyerCurrency: l,
    abortController: c,
  }) {
    d(this, "name", g.GooglePay),
      d(this, "walletParams"),
      d(this, "cart", null),
      d(this, "isShippingRequired"),
      d(this, "hasSellingPlan"),
      d(this, "dataSource"),
      d(this, "button"),
      d(this, "paymentsClient"),
      d(this, "i18n"),
      d(this, "actionGenerator"),
      d(this, "cartClient"),
      d(this, "initialBuyerCurrency"),
      d(this, "customValidationError"),
      G(this, Qe),
      G(this, J),
      G(this, Le),
      d(this, "onPaymentDataChanged", async (p) => {
        var y;
        const {
            callbackTrigger: v,
            shippingAddress: w,
            shippingOptionData: E,
          } = p,
          { translate: I } = this.i18n;
        switch (v) {
          case "INITIALIZE": {
            if (!this.cart)
              try {
                const {
                  cart: k,
                  customValidationError: Me,
                  hasStockProblems: A,
                } = await oe({
                  element: this.button,
                  instrumentName: g.GooglePay,
                  dataSource: this.dataSource,
                });
                if (Me)
                  return (
                    (this.customValidationError = Me),
                    this.showPaymentDataRequestError({
                      error: {
                        reason: "OTHER_ERROR",
                        message: this.customValidationError.message,
                        intent: "SHIPPING_ADDRESS",
                      },
                    })
                  );
                if (A)
                  return (
                    x({
                      checkoutUrl:
                        (y = k == null ? void 0 : k.checkoutUrl) != null
                          ? y
                          : "",
                      instrumentName: this.name,
                      reason: A,
                    }),
                    this.showPaymentDataRequestError({
                      error: {
                        intent: "SHIPPING_ADDRESS",
                        reason: "OTHER_ERROR",
                        message: "",
                      },
                    })
                  );
                (this.cart = k),
                  b.sheetClicked({ instrument: this.name, result: "success" });
              } catch (k) {
                return (
                  b.sheetClicked({ instrument: this.name, result: "failed" }),
                  this.showPaymentDataRequestError({
                    intent: "SHIPPING_ADDRESS",
                  })
                );
              }
            let L = !1;
            if (w)
              try {
                return await this.handleShippingAddressChange(this.cart.id, w);
              } catch (k) {
                L = !0;
              }
            return _(
              { newTransactionInfo: Lt({ cart: this.cart, i18n: this.i18n }) },
              L ? this.showPaymentDataRequestError() : {}
            );
          }
          case "SHIPPING_ADDRESS":
            return this.customValidationError
              ? this.showPaymentDataRequestError({
                  error: {
                    reason: "OTHER_ERROR",
                    message: this.customValidationError.message,
                    intent: "SHIPPING_ADDRESS",
                  },
                })
              : this.cart
              ? w
                ? this.handleShippingAddressChange(this.cart.id, w)
                : {
                    newTransactionInfo: Lt({
                      cart: this.cart,
                      i18n: this.i18n,
                    }),
                  }
              : this.showPaymentDataRequestError({ intent: v });
          case "SHIPPING_OPTION": {
            if (!this.cart)
              return this.showPaymentDataRequestError({ intent: v });
            if (!E || !E.id)
              return {
                error: {
                  reason: "SHIPPING_OPTION_INVALID",
                  message: I("shipping_methods.choose_delivery_strategy"),
                  intent: "SHIPPING_OPTION",
                },
              };
            const L = await this.handleDeliveryOptionChange(E.id.split(","));
            return L.data
              ? ((this.cart = L.data),
                this.handlePaymentDataRequestUpdate({ result: L, intent: v }))
              : this.showPaymentDataRequestError({ intent: v });
          }
          default:
            return (
              this.logException(
                "Payment data changed callback returned unexpected intent: ".concat(
                  v
                ),
                { severity: "warning" }
              ),
              this.showPaymentDataRequestError({ intent: "SHIPPING_ADDRESS" })
            );
        }
      }),
      d(this, "onPaymentAuthorized", async (p) => {
        var y, v, w;
        b.authorizationAttempt(this.name),
          Xe(M.AuthorizationLatency, this.name);
        const E =
            (y = p.paymentMethodData.info) == null ? void 0 : y.billingAddress,
          I = p.shippingAddress,
          {
            signature: L,
            signedMessage: k,
            protocolVersion: Me,
          } = JSON.parse(p.paymentMethodData.tokenizationData.token);
        if (!E)
          return this.handlePaymentAuthorizationError({
            error: {
              reason: "PAYMENT_DATA_INVALID",
              intent: "PAYMENT_AUTHORIZATION",
              message: this.i18n.translate("errors.invalid.billing_address"),
            },
          });
        if (this.isShippingRequired && !I)
          return this.handlePaymentAuthorizationError({
            error: {
              reason: "SHIPPING_ADDRESS_INVALID",
              intent: "PAYMENT_AUTHORIZATION",
              message: this.i18n.translate("errors.invalid.shipping_address"),
            },
          });
        const A = async () => {
            var O, R;
            const X = (O = S(this, Qe)) != null ? O : p.email,
              Ze = this.isShippingRequired
                ? { validateAddress: !0, streetAddress: Ot(I) }
                : {};
            return await De(
              _(
                {
                  cartClient: this.cartClient,
                  cartId: this.cart.id,
                  instrumentName: this.name,
                  emailAddress: X,
                  abortSignal: (R = S(this, J)) == null ? void 0 : R.signal,
                },
                Ze
              )
            );
          },
          U = async () => {
            var O;
            const R = Ot(E);
            return await lr({
              cartId: this.cart.id,
              totalAmount: this.cart.totalAmount,
              paymentMethod: {
                walletPaymentMethod: {
                  googlePayWalletContent: {
                    billingAddress: R,
                    signature: L,
                    signedMessage: k,
                    protocolVersion: Me,
                  },
                },
              },
              canUsePaymentMethodForFreeOrder: !1,
              billingAddress: R,
              cartClient: this.cartClient,
              instrumentName: this.name,
              hasSellingPlan: this.hasSellingPlan,
              abortSignal: (O = S(this, J)) == null ? void 0 : O.signal,
            });
          };
        try {
          const O = setTimeout(() => {
              var Kl;
              (Kl = S(this, J)) == null || Kl.abort("Google Pay Timeout");
            }, ol),
            R = await A(),
            X = this.handleIntermediatePaymentAuthorizationResult(R);
          if (X) return X;
          const Ze = await U(),
            Yl = this.handleIntermediatePaymentAuthorizationResult(Ze);
          if (Yl) return Yl;
          if (
            (clearTimeout(O),
            (w = (v = S(this, J)) == null ? void 0 : v.signal) != null &&
              w.aborted)
          )
            throw new kt("Abort Controller was not aborted");
          const Zl = await Hn({
              cartId: this.cart.id,
              token: L,
              cartClient: this.cartClient,
              instrumentName: this.name,
            }),
            ec =
              this.actionGenerator.mapCompletionResultToPaymentSheetAction(Zl);
          return this.handlePaymentAuthorizationResult(ec);
        } catch (O) {
          const { message: R } = O;
          return this.logException(R), this.handlePaymentAuthorizationError();
        }
      }),
      d(this, "handlePaymentAuthorizationResult", async (p) => {
        var y, v;
        switch (((y = p.effects) == null || y.forEach((w) => w()), p.action)) {
          case "complete":
            return (
              this.emitAuthorizationCompleteMetric("success"),
              re(p.redirectUrl),
              { transactionState: "SUCCESS" }
            );
          case "show_error":
            return this.handlePaymentAuthorizationError({
              error: (v = p.errors) == null ? void 0 : v[0],
            });
          case "decelerate":
            return (
              x({
                checkoutUrl: p.redirectUrl,
                instrumentName: this.name,
                reason: p.reason,
              }),
              this.emitAuthorizationCompleteMetric("failure"),
              { transactionState: "SUCCESS" }
            );
          case "abort":
          default:
            return (
              this.emitAuthorizationCompleteMetric("failure"),
              { transactionState: "SUCCESS" }
            );
        }
      }),
      (this.walletParams = e),
      (this.isShippingRequired = n),
      (this.hasSellingPlan = r),
      (this.dataSource = a),
      (this.button = i),
      (this.i18n = o),
      (this.cartClient = s),
      (this.initialBuyerCurrency = l),
      z(this, Qe, e.customerAccountEmail),
      z(this, J, c);
    const u = Xn(this.walletParams);
    if (u.result === "error")
      throw (
        (f.leaveBreadcrumb(
          "Google Pay Invalid AuthJwt detected on click",
          { reason: u.reason, walletParams: this.walletParams },
          "error"
        ),
        new kt(u.reason))
      );
    z(this, Le, u.jwt);
    const h = {
      environment: this.walletParams.environment,
      merchantInfo: D(_({}, this.walletParams.paymentData.merchantInfo), {
        authJwt: S(this, Le),
      }),
      paymentDataCallbacks: {
        onPaymentDataChanged: this.isShippingRequired
          ? this.onPaymentDataChanged
          : void 0,
        onPaymentAuthorized: this.onPaymentAuthorized,
      },
    };
    (this.paymentsClient = new window.google.payments.api.PaymentsClient(h)),
      (this.actionGenerator = new nl(this.i18n));
  }
  async handleClick() {
    if (!this.isShippingRequired)
      throw new pt("Google Pay checkout started for digital cart");
    const e = tl({
      walletParams: this.walletParams,
      isShippingRequired: this.isShippingRequired,
      hasSellingPlan: this.hasSellingPlan,
      i18n: this.i18n,
      buyerCurrency: this.initialBuyerCurrency,
      authJwt: S(this, Le),
    });
    await this.paymentsClient.loadPaymentData(e);
  }
  showPaymentDataRequestError({
    error: e,
    intent: n = "SHIPPING_ADDRESS",
  } = {}) {
    return e
      ? { error: e }
      : {
          error: {
            intent: n,
            reason: "OTHER_ERROR",
            message: this.i18n.translate("error_dialogs.wallet.generic_error", {
              wallet: this.i18n.translate("brand.google_pay"),
            }),
          },
        };
  }
  handlePaymentAuthorizationError({ error: e } = {}) {
    return (
      this.emitAuthorizationCompleteMetric("failure"),
      _(
        { transactionState: "ERROR" },
        this.showPaymentDataRequestError({
          error: e,
          intent: "PAYMENT_AUTHORIZATION",
        })
      )
    );
  }
  handlePaymentDataRequestUpdate({ result: e, intent: n }) {
    var r, a;
    const i = this.actionGenerator.mapMutationResultToPaymentSheetAction(e);
    switch (i.action) {
      case "update": {
        const o = i,
          { data: s, hasStockProblems: l } = e;
        return s
          ? l
            ? (x({
                checkoutUrl: s.checkoutUrl,
                instrumentName: this.name,
                reason: l,
              }),
              this.showPaymentDataRequestError({
                error: { reason: "OTHER_ERROR", message: "", intent: "OFFER" },
              }))
            : this.isShippingRequired && s.deliveryGroups.length === 0
            ? this.showPaymentDataRequestError({
                error: {
                  reason: "SHIPPING_ADDRESS_INVALID",
                  message: this.i18n.translate("errors.address_unserviceable", {
                    shopName:
                      this.walletParams.paymentData.merchantInfo.merchantName,
                  }),
                  intent: "SHIPPING_ADDRESS",
                },
              })
            : {
                newTransactionInfo: Lt({ cart: s, i18n: this.i18n }),
                newShippingOptionParameters: this.isShippingRequired
                  ? al({ deliveryGroups: s.deliveryGroups, i18n: this.i18n })
                  : void 0,
                error: (r = o.errors) == null ? void 0 : r[0],
              }
          : this.showPaymentDataRequestError({ intent: n });
      }
      case "show_error":
        return { error: (a = i.errors) == null ? void 0 : a[0] };
      case "abort":
        return this.showPaymentDataRequestError({ intent: n });
      default:
        return (
          this.logException(
            "Payment sheet update returned unexpected action (see request tab for details)",
            { metadata: { request: { action: i.action, intent: n } } }
          ),
          this.showPaymentDataRequestError({ intent: n })
        );
    }
  }
  handleIntermediatePaymentAuthorizationResult(e) {
    var n, r, a, i;
    if (e.hasStockProblems)
      return (
        x({
          checkoutUrl:
            (r = (n = e.data) == null ? void 0 : n.checkoutUrl) != null
              ? r
              : "",
          instrumentName: this.name,
          reason: e.hasStockProblems,
        }),
        { transactionState: "SUCCESS" }
      );
    const o = this.actionGenerator.mapMutationResultToPaymentSheetAction(e);
    if (((a = e.errors) == null ? void 0 : a.length) > 0) {
      const s = o;
      if (s.action === "show_error")
        return this.handlePaymentAuthorizationError({
          error: (i = s.errors) == null ? void 0 : i[0],
        });
    }
  }
  handleCurrencyChange(e, n) {
    nr({
      currentCartTotal: n,
      initialBuyerCurrency: this.initialBuyerCurrency,
    }) &&
      x({
        checkoutUrl: e,
        instrumentName: this.name,
        reason: "currency_changed",
      });
  }
  async handleShippingAddressChange(e, n) {
    var r;
    let a = await De({
      cartClient: this.cartClient,
      cartId: e,
      streetAddress: n ? Ot(n) : {},
      instrumentName: g.GooglePay,
      abortSignal: (r = S(this, J)) == null ? void 0 : r.signal,
    });
    if (!a.data)
      return this.showPaymentDataRequestError({ intent: "SHIPPING_ADDRESS" });
    if (
      ((this.cart = a.data),
      this.cart.deliveryGroups.length > 0 &&
        (this.cart.deliveryGroups.some((i) => {
          var o;
          return (
            ((o = i.selectedDeliveryOption) == null
              ? void 0
              : o.deliveryMethodType) === "LOCAL"
          );
        }) ||
          this.cart.deliveryGroups.every(
            (i) => i.selectedDeliveryOption == null
          )))
    ) {
      const i = this.cart.deliveryGroups
        .map((o) =>
          o.deliveryOptions.filter(
            ({ deliveryMethodType: s }) => s === "SHIPPING"
          )
        )
        .map((o) => o[0].handle);
      if (((a = await this.handleDeliveryOptionChange(i)), !a.data))
        return this.showPaymentDataRequestError({ intent: "SHIPPING_ADDRESS" });
      this.cart = a.data;
    }
    return (
      this.handleCurrencyChange(this.cart.checkoutUrl, this.cart.totalAmount),
      this.handlePaymentDataRequestUpdate({
        result: a,
        intent: "SHIPPING_ADDRESS",
      })
    );
  }
  async handleDeliveryOptionChange(e) {
    var n;
    const r = Gn({
      deliveryGroups: this.cart.deliveryGroups,
      instrumentName: g.GooglePay,
      selectedDeliveryOptionHandles: e,
    });
    return await Bn({
      cartClient: this.cartClient,
      cartId: this.cart.id,
      instrumentName: g.GooglePay,
      selectedDeliveryOptions: r,
      abortSignal: (n = S(this, J)) == null ? void 0 : n.signal,
    });
  }
  logException(e, { severity: n, metadata: r } = {}) {
    f.notify(new kt(e), { severity: n != null ? n : "error", metadata: r });
  }
  emitAuthorizationCompleteMetric(e) {
    b.authorizationComplete({
      instrument: this.name,
      measurement: ne(M.AuthorizationLatency, this.name),
      result: e,
    });
  }
}
(Qe = new WeakMap()), (J = new WeakMap()), (Le = new WeakMap());
const ll =
    '<svg viewBox="0 0 41 17" xmlns="http://www.w3.org/2000/svg" width="45px" id="google-pay-logo">\n  <path\n    d="M19.526 2.635v4.083h2.518q.9 0 1.488-.605.605-.604.605-1.437 0-.816-.605-1.422-.588-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99q1.519 0 2.582 1.012 1.08 1.013 1.08 2.466 0 1.487-1.08 2.482-1.046.997-2.583.996zm7.668 2.287q0 .587.499.98.498.39 1.168.391.949 0 1.692-.701.745-.703.744-1.65-.704-.555-1.962-.555-.916 0-1.528.442-.613.44-.613 1.093m1.946-5.815q1.668 0 2.633.89.964.891.964 2.442v4.932h-1.439v-1.11h-.065q-.933 1.372-2.486 1.372-1.323 0-2.215-.784t-.891-1.96q0-1.242.94-1.976c.94-.734 1.463-.735 2.51-.735q1.34 0 2.206.49v-.344q0-.784-.621-1.33a2.13 2.13 0 0 0-1.455-.547q-1.26 0-1.995 1.062l-1.324-.834q1.095-1.568 3.238-1.568m11.853.262-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"\n    style="fill: #000000"\n  />\n  <path\n    d="M13.448 7.134q-.001-.71-.116-1.366H6.988v2.588h3.634a3.1 3.1 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"\n    style="fill: #4285f4"\n  />\n  <path\n    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.73 6.73 0 0 0 6.01 3.703"\n    style="fill: #34a853"\n  />\n  <path\n    d="M3.212 8.267a4.03 4.03 0 0 1 0-2.572V3.964H.978A6.7 6.7 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017z"\n    style="fill: #fbbc05"\n  />\n  <path\n    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.73 6.73 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"\n    style="fill: #ea4335"\n  />\n</svg>\n',
  cl =
    '<svg viewBox="0 0 41 17" xmlns="http://www.w3.org/2000/svg" width="45px" id="google-pay-logo-dark">\n  <path\n    d="M19.526 2.635v4.083h2.518q.9 0 1.488-.605.605-.604.605-1.437 0-.816-.605-1.422-.588-.62-1.488-.62h-2.518zm0 5.52v4.736h-1.504V1.198h3.99q1.519 0 2.582 1.012 1.08 1.013 1.08 2.466 0 1.487-1.08 2.482-1.046.997-2.583.996zm7.668 2.287q0 .587.499.98.498.39 1.168.391.949 0 1.692-.701.745-.703.744-1.65-.704-.555-1.962-.555-.916 0-1.528.442-.613.44-.613 1.093m1.946-5.815q1.668 0 2.633.89.964.891.964 2.442v4.932h-1.439v-1.11h-.065q-.933 1.372-2.486 1.372-1.323 0-2.215-.784t-.891-1.96q0-1.242.94-1.976c.94-.734 1.463-.735 2.51-.735q1.34 0 2.206.49v-.344q0-.784-.621-1.33a2.13 2.13 0 0 0-1.455-.547q-1.26 0-1.995 1.062l-1.324-.834q1.095-1.568 3.238-1.568m11.853.262-5.02 11.53H34.42l1.864-4.034-3.302-7.496h1.635l2.387 5.749h.032l2.322-5.75z"\n    style="fill: #ffffff"\n  />\n  <path\n    d="M13.448 7.134q-.001-.71-.116-1.366H6.988v2.588h3.634a3.1 3.1 0 0 1-1.344 2.042v1.68h2.169c1.27-1.17 2.001-2.9 2.001-4.944"\n    style="fill: #4285f4"\n  />\n  <path\n    d="M6.988 13.7c1.816 0 3.344-.595 4.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754 0-3.244-1.182-3.776-2.774H.978v1.731a6.73 6.73 0 0 0 6.01 3.703"\n    style="fill: #34a853"\n  />\n  <path\n    d="M3.212 8.267a4.03 4.03 0 0 1 0-2.572V3.964H.978A6.7 6.7 0 0 0 .261 6.98c0 1.085.26 2.11.717 3.017z"\n    style="fill: #fbbc05"\n  />\n  <path\n    d="M6.988 2.921c.992 0 1.88.34 2.58 1.008v.001l1.92-1.918C10.324.928 8.804.262 6.989.262a6.73 6.73 0 0 0-6.01 3.702l2.234 1.731c.532-1.592 2.022-2.774 3.776-2.774"\n    style="fill: #ea4335"\n  />\n</svg>\n',
  dl = { LIGHT: "light", DARK: "dark" };
var Oe;
class ul extends Ae {
  constructor() {
    super(),
      d(this, "name", g.GooglePay),
      d(this, "paymentsClient", null),
      d(this, "button", null),
      G(this, Oe),
      d(this, "handleClick", async () => {
        if (this.disabled) return;
        this.disabled = !0;
        const e = cr();
        try {
          await this.createPaymentsClient(e),
            await this.paymentsClient.handleClick();
        } catch (n) {
          if (((this.disabled = !1), n.statusCode === "CANCELED")) {
            e == null || e.abort("Payment sheet cancelled"),
              b.sheetCancelled(g.GooglePay);
            return;
          }
          e == null || e.abort("Payment sheet failure"),
            f.notify(n),
            b.sheetClicked({ instrument: this.name, result: "failed" });
          const r = await this.i18n,
            a = r.translate("brand.google_pay");
          W(a, r);
        }
      }),
      z(this, Oe, this.attachShadow({ mode: "closed" }));
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  attributeChangedCallback(e, n, r) {
    super.attributeChangedCallback(e, n, r, this.button);
  }
  async connectedCallback() {
    this.cleanupOnFailure(this.render.bind(this), this.name);
  }
  async createPaymentsClient(e) {
    this.paymentsClient = new sl({
      walletParams: this.walletParams,
      isShippingRequired: this.isShippingRequired,
      hasSellingPlan: this.hasSellingPlan,
      dataSource: await this.dataSource,
      button: this,
      cartClient: await this.apiClient,
      i18n: await this.i18n,
      buyerCurrency: this.buyerCurrency,
      abortController: e,
    });
  }
  async render() {
    if (this.button) return;
    await this.initializeShadowStyles(S(this, Oe), Qs);
    const { translate: e } = await this.i18n,
      n = this.isCTA
        ? e("buy_with_button_content", { wallet: e("brand.google_pay") })
        : e("brand.google_pay"),
      r = gt({ label: n });
    this.disabled && r.setAttribute("disabled", ""),
      r.classList.add("button", we.BUTTON, dl[this.buttonTheme]),
      (r.onclick = this.handleClick),
      await this.renderButtonContent(r, e),
      (this.button = r),
      S(this, Oe).appendChild(r),
      this.ensureLightDOMIsNotEmpty(),
      this.onRendered();
  }
  async renderButtonContent(e, n) {
    const r = this.buttonTheme === "DARK" ? cl : ll,
      a = new DOMParser().parseFromString(r, "image/svg+xml").documentElement;
    if (((e.style.font = window.getComputedStyle(this).font), this.isCTA)) {
      const i = dr({ translate: n, logoElement: a, setAriaHidden: !0 });
      i.classList.add("content"), e.appendChild(i);
    } else e.classList.add("logo-only"), e.appendChild(a);
  }
}
Oe = new WeakMap();
const he = class Vl extends se {
  static walletName() {
    return "google_pay";
  }
  constructor(e) {
    super(e);
  }
  getWebComponentName() {
    return "shopify-google-pay-button";
  }
  getInstrumentName() {
    return g.GooglePay;
  }
  getWebComponentClass() {
    return ul;
  }
  async loadWalletSDK() {
    if (Vl.googlePaySDKPromise) return Vl.googlePaySDKPromise;
    const e = document.createElement("script");
    return (
      e.setAttribute("src", this.walletParams.sdkUrl),
      (Vl.googlePaySDKPromise = new Promise((n, r) => {
        (e.onload = () => n()),
          (e.onerror = (a) => {
            document.body.removeChild(e), r(a);
          }),
          document.body.appendChild(e);
      })),
      Vl.googlePaySDKPromise
    );
  }
  getLoadEligibility() {
    const e = Xn(this.walletParams);
    switch (e.result) {
      case "success":
        return { eligible: !0 };
      case "error":
        return { eligible: !1, reason: e.reason };
    }
  }
  getPartnerSDKEligibility() {
    return { eligible: !0 };
  }
};
d(he, "googlePaySDKPromise");
let jt = he;
const hl = [Co, Bt, qn, jt, We, zt, Qn],
  pl = new Map(hl.map((t) => [t.walletName(), (e) => new t(e)]));
function ct(t) {
  const e = pl.get(t.name);
  return e
    ? e(t)
    : (console.debug("Can't build wallet with name ".concat(t.name)), null);
}
function ml(t) {
  return t.map((e) => ct(e)).filter((e) => e != null);
}
const Zn =
  "*{box-sizing:border-box}.wallet-button-fade-in{animation:animation-fade-in .3s cubic-bezier(.1,.79,1,1)}@keyframes animation-fade-in{0%{opacity:0}to{opacity:1}}button[aria-disabled=true]{opacity:.5;cursor:not-allowed}";
class yl {
  constructor(e, n, r) {
    (this.element = e), (this.apiClient = n), (this.instrumentName = r);
  }
  async getInitialCart(e) {
    const n = sr(this.element);
    if (!n)
      throw new Error(
        "[".concat(this.instrumentName, "] unable to find product form")
      );
    const r = Ye(Sa),
      {
        data: a,
        errors: i,
        warnings: o,
      } = await this.apiClient.createCart(
        D(_({}, n), { discountCodes: r ? [r] : [], instrumentName: e })
      );
    return { cart: a, errors: i, warnings: o };
  }
}
function gl({ instanceNumber: t, styleId: e, styles: n, cssFileName: r }) {
  var a, i;
  t === 1 &&
    (i = (a = window.Shopify) == null ? void 0 : a.PaymentButton) != null &&
    i.isStorefrontPortableWallets &&
    (fl({ styleId: e, styles: n, cssFileName: r }) ||
      bl({ styleId: e, styles: n }));
}
function fl({ styleId: t, styles: e, cssFileName: n }) {
  return !!document.querySelector("style#".concat(t));
}
function bl({ styleId: t, styles: e }) {
  const n = document.createElement("style");
  (n.id = t), (n.innerHTML = e), document.head.appendChild(n);
}
const Y = {
  buttonBlockSize: "--shopify-accelerated-checkout-button-block-size",
  buttonBorderRadius: "--shopify-accelerated-checkout-button-border-radius",
  buttonBoxShadow: "--shopify-accelerated-checkout-button-box-shadow",
  inlineAlignment: "--shopify-accelerated-checkout-inline-alignment",
};
function Hr(t) {
  let e = 0,
    n = 0,
    r = 0;
  const a = t.split(/\s+/);
  for (let i = 0; i < a.length; i++) {
    const o = a[i];
    o !== ">" &&
      (o.includes("#") && (e += (o.match(/#/g) || []).length),
      o.includes(".") && (n += (o.match(/\./g) || []).length),
      o.includes("[") && (n += (o.match(/\[/g) || []).length),
      o.includes(":") && (n += (o.match(/:[^:]/g) || []).length),
      /^[A-Za-z]/.test(o) && (r += 1));
  }
  return [e, n, r];
}
function wl(t, e) {
  for (let n = 0; n < 3; n++) if (t[n] !== e[n]) return e[n] - t[n];
  return 0;
}
function Gr(t) {
  return [...t].sort((e, n) => {
    const r = Hr(e.selector),
      a = Hr(n.selector);
    return wl(r, a);
  });
}
const _l =
    /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*(>\s*)?li(?![a-zA-Z0-9_.:#-])/,
  El =
    /\.cart__dynamic-checkout-buttons|\.dynamic-checkout-buttons\s*\[role="?button"?\](?![:\w-])/,
  Al =
    /\.additional-checkout-buttons\s*(?:div\s*)?\[role="?button"?\](?![:\w-])/,
  ea = /\[data-shopify-buttoncontainer\](?![:\w-])/,
  ta = /.dynamic-checkout-buttons .shopify-payment-button__button/,
  Cl =
    /(?!.*\.shopify-cleanslate)\.shopify-payment-button__button(?:--branded)?(?![\w-:.#>])/,
  Sl =
    /\.(shopify-payment-button|shopify-payment-button__button|shopify-payment-button__button--branded)\s*\[role="?button"?\](?![:\w-])/,
  Il =
    /(?:only\s+)?(?:screen\s+and\s+)?\((?:min|max)-(?:width|height):\s*\d+px\)/,
  Pl = [El, ea, _l, Al, ta],
  vl = [Cl, Sl, ta];
function ra(t) {
  const e = t.pageType,
    n = [...document.styleSheets].filter(Dl),
    r = [],
    a = [];
  n.forEach((A) => {
    try {
      const U = [...A.cssRules].filter((R) => R instanceof CSSMediaRule),
        O = [...A.cssRules].filter((R) => R instanceof CSSStyleRule);
      a.push(
        ...U.filter((R) => Il.test(R.conditionText)).flatMap((R) =>
          [...R.cssRules]
            .filter((X) => X instanceof CSSStyleRule)
            .flatMap((X) =>
              X.selectorText
                .split(",")
                .map((Ze) => Ze.trim())
                .map((Ze) =>
                  _({ selector: Ze, conditionText: R.conditionText }, Yr(X))
                )
            )
        )
      ),
        r.push(
          ...O.flatMap((R) =>
            R.selectorText
              .split(",")
              .map((X) => X.trim())
              .map((X) => _({ selector: X }, Yr(R)))
          )
        );
    } catch (U) {
      ot()("shopify-support-debug") &&
        (console.debug(
          "[shopify-support-debug] stylesheet origin: ".concat(A.href)
        ),
        console.debug(U));
    }
  });
  const i = e === C.ProductPage ? vl : Pl,
    o = new Set();
  function s(A, U) {
    const O = U.selector.match(A);
    return O ? (o.add(O[0]), !0) : !1;
  }
  const l = r.filter((A) => i.some((U) => s(U, A))).reverse(),
    c = a.filter((A) => i.some((U) => s(U, A))).reverse(),
    u = ot()("shopify-support-debug");
  u && console.table(Array.from(o));
  const h = Gr(l),
    p = Gr(c),
    y = {},
    v = Vr(e)
      ? document.querySelector(".cart__blocks .button")
      : document.querySelector(".product-form__buttons .button");
  v && (y.boxShadow = getComputedStyle(v, ":before").boxShadow);
  for (const A of h) {
    const U = ["height", "minHeight", "borderRadius", "marginTop"];
    Vr(e) && A.selector.match(ea) && U.push("justifyContent");
    for (const O of U)
      y[O] = Tl({ rule: A, property: O, currentPropertyValue: y[O] });
  }
  const {
    height: w,
    borderRadius: E,
    minHeight: I,
    marginTop: L,
    justifyContent: k,
    boxShadow: Me,
  } = y;
  return (
    u &&
      console.table([
        { property: "height", value: w },
        { property: "borderRadius", value: E },
        { property: "minHeight", value: I },
        { property: "marginTop", value: L },
        { property: "justifyContent", value: k },
        { property: "boxShadow", value: Me },
      ]),
    e === C.ProductPage
      ? jr({
          styles: {
            height: w,
            minHeight: I,
            borderRadius: E,
            marginTop: L,
            boxShadow: Me,
          },
          mediaRules: p,
          element: t,
        })
      : jr({
          styles: { borderRadius: E, boxShadow: Me, justifyContent: k },
          mediaRules: p,
          element: t,
        })
  );
}
function na(t, e) {
  if (!e) return;
  const n = "global-".concat(t.tagName.toLowerCase(), "-styles");
  if (document.head.querySelector("style#".concat(n)) == null) {
    const r = document.createElement("style");
    (r.id = n), (r.innerHTML = e), document.head.appendChild(r);
  }
}
function Dl(t) {
  const e =
    t.ownerNode instanceof HTMLLinkElement &&
    (t.ownerNode.getAttribute("crossorigin") === "anonymous" ||
      t.ownerNode.getAttribute("crossorigin") === "");
  return t.href == null || t.href.startsWith(window.location.origin) || e;
}
function Vr(t) {
  return t === C.CartPage || t === C.CartAjax;
}
function qr({ height: t, minHeight: e }) {
  let n = t,
    r = e;
  return (
    ((n != null && n.includes("var(".concat(Y.buttonBlockSize))) ||
      n === "auto") &&
      (n = null),
    ((r != null && r.includes("var(".concat(Y.buttonBlockSize))) ||
      r === "auto") &&
      (r = null),
    n === r ? n : r && n ? "max(".concat(n, ",").concat(r, ")") : n || r
  );
}
function zr({
  existingProperties: t,
  mediaCondition: e,
  selector: n,
  styles: r,
}) {
  const a = _({}, r);
  for (const i of t) delete a[i];
  for (const [i, o] of Object.entries(a))
    o != null && o.startsWith("var(".concat(i)) && delete a[i];
  return Object.keys(a).length === 0
    ? ""
    : Rl({ mediaCondition: e, selector: n, styles: a });
}
function Rl({ mediaCondition: t, selector: e, styles: n }) {
  let r = "".concat(t ? "@media ".concat(t, " { ") : "").concat(e, " {");
  for (const [a, i] of Object.entries(n))
    i && (r += "\n  ".concat(a, ": ").concat(i, ";"));
  return (r += "\n}"), t && (r += "}"), (r += "\n"), r;
}
function jr({ styles: t, element: e, mediaRules: n }) {
  const {
      height: r,
      minHeight: a,
      borderRadius: i,
      marginTop: o,
      justifyContent: s,
      boxShadow: l,
    } = t,
    c = e.tagName.toLowerCase(),
    u = getComputedStyle(e),
    h = new Set();
  for (const y of Object.values(Y)) u.getPropertyValue(y) && h.add(y);
  let p = zr({
    existingProperties: h,
    selector: c,
    styles: {
      [Y.buttonBlockSize]: qr({ height: r, minHeight: a }),
      [Y.buttonBorderRadius]: i,
      [Y.buttonBoxShadow]: l,
      [Y.inlineAlignment]: s,
      "margin-top": o,
      display: o ? "block" : void 0,
    },
  });
  return (
    n.forEach((y) => {
      (y.height ||
        y.minHeight ||
        y.borderRadius ||
        y.boxShadow ||
        y.justifyContent ||
        y.marginTop) &&
        (p += zr({
          existingProperties: h,
          mediaCondition: y.conditionText,
          selector: c,
          styles: {
            [Y.buttonBlockSize]: qr({
              height: y.height,
              minHeight: y.minHeight,
            }),
            [Y.buttonBorderRadius]: y.borderRadius,
            [Y.buttonBoxShadow]: y.boxShadow,
            [Y.inlineAlignment]: y.justifyContent,
            "margin-top": y.marginTop,
            display: y.marginTop ? "block" : void 0,
          },
        }));
    }),
    p.trim()
  );
}
function Yr(t) {
  return [
    ["height"],
    ["minHeight", "min-height"],
    ["borderRadius", "border-radius"],
    ["marginTop", "margin-top"],
    ["justifyContent", "justify-content"],
  ].reduce(
    (e, [n, r]) => ((e[n] = Nl({ rule: t, property: r != null ? r : n })), e),
    {}
  );
}
function Nl({ rule: t, property: e }) {
  const n = t.style.getPropertyValue(e);
  return t.style.getPropertyPriority(e)
    ? "".concat(n, " !important")
    : n || null;
}
function Tl({ rule: t, property: e, currentPropertyValue: n }) {
  const r = t[e];
  return !(n != null && n.includes("!important")) &&
    r != null &&
    r.includes("!important")
    ? r
    : n != null
    ? n
    : r;
}
const Wr = 2e3;
class Kr extends Error {
  constructor() {
    super(...arguments), d(this, "name", "AcceleratedCheckoutError");
  }
}
const dt = class Ql extends or {
  constructor() {
    super(),
      d(this, "instanceNumber", ++Ql.instanceCount),
      d(this, "pageType", C.ProductPage),
      d(this, "formObserver"),
      d(this, "dataSource"),
      d(this, "wrapper"),
      d(this, "shopPromiseEligible"),
      d(this, "didInitiateRender", !1),
      (this.wrapper = document.createElement("div")),
      Zt({ shop: { shopId: this.shopId } }),
      gl({
        instanceNumber: this.instanceNumber,
        styleId: "shopify-accelerated-checkout",
        styles: yo,
        cssFileName: "AcceleratedCheckout.css",
      }),
      (this.shopPromiseEligible = cn());
  }
  static get observedAttributes() {
    return [
      "access-token",
      "disabled",
      "has-selling-plan",
      "requires-shipping",
    ];
  }
  async connectedCallback() {
    var e, n, r;
    try {
      if (
        ((n = (e = this.wrapper) == null ? void 0 : e.children) != null &&
          n.length) ||
        this.didInitiateRender
      )
        return;
      if (!this.validateRenderingSurface()) {
        this.clearUI();
        return;
      }
      this.instanceNumber === 1 && (b.initStarted(), this.extractStyles());
      const a = wt(M.ButtonDisplay, "dc:".concat(this.instanceNumber));
      (this.i18n = mt()),
        this.setupFormObserver(),
        (this.didInitiateRender = !0);
      const i = await this.loadWallet(),
        o =
          (r = i == null ? void 0 : i.getInstrumentName()) != null
            ? r
            : g.BuyItNow,
        s = o === g.ApplePay || o === g.GooglePay;
      (this.apiClient = new At({
        accessToken: this.accessToken,
        country: this.buyerCountry,
        locale: this.i18n.locale,
        withCarrierRates: s,
        cartPrepareMigrationEnabled: this.cartPrepareMigrationEnabled,
      })),
        (this.dataSource = new yl(this, this.apiClient, o));
      const l =
        i == null
          ? void 0
          : i.createWebComponent({
              walletContainer: this,
              dataSource: this.dataSource,
              i18n: this.i18n,
              apiClient: this.apiClient,
              classNames: Ll(o),
              callToAction: "true",
              pageType: this.pageType,
              containerInstanceNumber: this.instanceNumber,
              onRendered: () =>
                b.instrumentLoaded({
                  instrumentOrComponentName: o,
                  result: "success",
                  measurement: a(),
                }),
            });
      if (!l) throw new Kr("No web component found");
      this.render(l, o),
        b.initCompleted({ result: "success" }),
        this.instanceNumber === 1 && this.triggerLoadedEvent();
    } catch (a) {
      if ((this.clearUI(), b.initCompleted({ error: a }), a.name === Je.name))
        throw a;
      f.notify(
        new Kr(
          "An error occurred while attempting to render the AcceleratedCheckout: ".concat(
            a
          ),
          { cause: a }
        )
      );
    }
  }
  async attributeChangedCallback(e, n, r) {
    n !== r &&
      (ar(this, e, r),
      e === "has-selling-plan" && r === ""
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : e === "has-selling-plan" && r === null && this.hideBuyerConsent());
  }
  async render(e, n) {
    this.clearUI();
    const r = this.attachShadow({ mode: "closed" }),
      a = document.createElement("style");
    (a.innerHTML = Zn),
      r.appendChild(a),
      (this.wrapper.className = "wallet-button-fade-in");
    const i = document.createElement("slot");
    (i.name = "button"), this.wrapper.appendChild(i);
    const o = document.createElement("slot");
    (o.name = "promise"), this.wrapper.appendChild(o);
    const s = document.createElement("slot");
    (s.name = "more-options"),
      this.wrapper.appendChild(s),
      r == null || r.appendChild(this.wrapper),
      this.hasSellingPlan
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : this.hideBuyerConsent();
    const l = new DocumentFragment();
    l.appendChild(e);
    const c = this.getShopPromiseSlot();
    c && l.appendChild(c);
    const u = this.getMorePaymentOptionsLink(n);
    u && l.appendChild(u), this.appendChild(l);
  }
  getMorePaymentOptionsLink(e) {
    var n, r;
    if (e === g.BuyItNow) return null;
    const a = document.createElement("more-payment-options-link");
    return (
      ft(a, {
        "buyer-country": (n = this.buyerCountry) != null ? n : "",
        "access-token": (r = this.accessToken) != null ? r : "",
        "recommended-instrument": e,
        slot: "more-options",
      }),
      (a.disabled = this.disabled),
      a.setDataSource(this.dataSource),
      a.setI18n(this.i18n),
      a.setClassNames(xt.MORE_PAYMENT_OPTION_BUTTON),
      a
    );
  }
  getShopPromiseSlot() {
    if (!this.shopPromiseEligible) return null;
    const e = document.createElement("div");
    return (
      e.setAttribute("data-shopify", "shop-promise-payment-button-slot"),
      (e.style.height = "100%"),
      (e.slot = "promise"),
      e
    );
  }
  validateRenderingSurface() {
    return _t({ page: "product", element: this }) != null;
  }
  async loadWallet() {
    const e = mo(
      this.recommendedWallet,
      this.fallbackWallet,
      "AcceleratedCheckout"
    );
    return await kl(this, D(_({}, e), { instanceNumber: this.instanceNumber }));
  }
  setupFormObserver() {
    this.formObserver ||
      ((this.formObserver = new fn(
        this,
        ({ disabled: e, hasSellingPlan: n }) => {
          (this.disabled = e),
            (this.hasSellingPlan = n),
            (this.isShippingRequired = Ol(this, this.variantParams));
        }
      )),
      this.formObserver.setupMutationObservers());
  }
  extractStyles() {
    if (this.styleExtractorDisabled) {
      ot()("shopify-support-debug") &&
        console.debug(
          "[shopify-support-debug] styling backward compatibility disabled"
        );
      return;
    }
    const e = ra(this);
    e && na(this, e);
  }
};
d(dt, "instanceCount", 0);
let Yt = dt;
function Ll(t) {
  return t === g.BuyItNow ? xt.UNBRANDED_BUTTON : xt.BRANDED_BUTTON;
}
function Ol(t, e) {
  var n;
  const r = sr(t);
  return !!(
    (n = e.find((a) => a.id === Number(r == null ? void 0 : r.variantId))) !=
      null && n.requiresShipping
  );
}
async function kl(
  t,
  { recommendedWallet: e, fallbackWallet: n, instanceNumber: r }
) {
  const a = e ? ct(e) : null,
    i = ct(n);
  if (ir(t, a)) {
    const o = Ft({ walletInstrument: a, instanceNumber: r }),
      s = "timeout",
      l = await Promise.race([
        o,
        new Promise((c) => setTimeout(() => c(s), Wr)),
      ]);
    if (l === s)
      b.instrumentSDKLoaded({
        instrument: a.getInstrumentName(),
        measurement: Wr,
        result: "timeout",
      });
    else if (l instanceof se) return l;
  }
  return i && Ft({ walletInstrument: i, instanceNumber: r });
}
ie("shopify-accelerated-checkout", Yt),
  ie("more-payment-options-link", oo, { isChildCustomElement: !0 });
const xl = (t) => {
    const e = new PerformanceObserver((n) => {
      n
        .getEntriesByType("resource")
        .some(
          (r) =>
            r.name.includes(He.CartUpdate) ||
            r.name.includes(He.CartChange) ||
            r.name.includes(He.CartAdd) ||
            r.name.includes(He.CartClear)
        ) && t();
    });
    return e.observe({ entryTypes: ["resource"] }), e;
  },
  Ml =
    ".wallet-cart-wrapper{--wallet-button-height-horizontal: clamp( 25px, var(--shopify-accelerated-checkout-button-inline-size, 42px), 55px );--wallet-button-height-vertical: clamp( 25px, var(--shopify-accelerated-checkout-button-block-size, 54px), 55px );--wallet-button-width-horizontal: 150px;--wallet-button-width-vertical: 100%;--wallet-button-border-radius: var( --shopify-accelerated-checkout-button-border-radius, 4px );--wallet-grid-margin-horizontal: 0 -5px -5px -5px;--wallet-button-container-margin-horizontal: 0 5px 5px;--wallet-button-container-margin-vertical: var( --shopify-accelerated-checkout-row-gap, 8px ) 0 0}.wallet-cart-wrapper{container-type:inline-size;container-name:wrapper}.wallet-cart-grid{margin:var(--wallet-grid-margin-horizontal);padding:0;display:flex;justify-content:var(--shopify-accelerated-checkout-inline-alignment, start);flex-direction:row}.wallet-cart-grid.wallet-cart-grid--vertical{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}.wallet-cart-button-container{position:relative;margin:var(--wallet-button-container-margin-horizontal)}.wallet-cart-button-container,.wallet-cart-button{width:var(--wallet-button-width-horizontal);height:var(--wallet-button-height-horizontal);border-radius:var(--wallet-button-border-radius);list-style-type:none!important;text-align:center;flex-shrink:0;flex-grow:0}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)){justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}@media screen and (max-width: 750px){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;max-width:none;margin:0}.wallet-cart-grid .wallet-cart-button-container{max-width:none;width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-grid{justify-content:flex-start;flex-direction:column;margin:0}.wallet-cart-button-container{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical);margin:var(--wallet-button-container-margin-vertical)}.wallet-cart-button-container:first-child{margin-top:0}.wallet-cart-grid .wallet-cart-button{width:var(--wallet-button-width-vertical);height:var(--wallet-button-height-vertical)}}.screen-reader-text{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}",
  Fl =
    ".wallet-cart-grid.wallet-cart-grid--vertical .wallet-cart-button-container:first-child{margin-top:8px}@container wrapper (width >= 150px) and (width <= 500px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(1)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(2))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 310px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(2)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(3))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 470px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(3)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(4))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 630px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(4)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(5))) .wallet-cart-button-container:first-child{margin-top:8px}}@container wrapper (width <= 790px){.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(5)).wallet-cart-grid:not(:has(>.wallet-cart-button-container:nth-of-type(6))) .wallet-cart-button-container:first-child{margin-top:8px}}.wallet-cart-grid:has(>.wallet-cart-button-container:nth-of-type(6)) .wallet-cart-button-container:first-child{margin-top:8px}@media screen and (max-width: 750px){.wallet-cart-grid .wallet-cart-button-container:first-child{margin-top:8px}}@supports (not (container-type: inline-size)) or (not (selector(:has(*)))){.wallet-cart-button-container:first-child{margin-top:8px}}";
function Ul(t) {
  const e = _t({ page: "cart", element: t });
  return yn({ type: "attributes", form: e });
}
class $l {
  constructor(e, n, r) {
    (this.element = e), (this.cartToken = n), (this.apiClient = r);
  }
  async getInitialCart(e) {
    const n = "gid://shopify/Cart/".concat(this.cartToken),
      r = Ul(this.element);
    let a,
      i = [];
    if (r.length) {
      const o = await this.apiClient.updateCartAttributes({
        cartId: n,
        attributes: r,
        instrumentName: e,
        startingCheckout: !0,
      });
      (a = o.data), (i = o.errors);
    } else
      a = await this.apiClient.fetchCart({
        id: n,
        instrumentName: e,
        startingCheckout: !0,
      });
    return { cart: a, errors: i };
  }
}
var ke;
const ut = class Jl extends or {
  constructor() {
    super(),
      d(this, "instanceNumber", ++Jl.instanceCount),
      d(this, "pageType", C.CartPage),
      d(this, "cartObserver", null),
      d(this, "dataSource", null),
      d(this, "wrapper"),
      d(this, "didInitiateRender", !1),
      G(this, ke),
      Zt({ shop: { shopId: this.shopId, cartId: this.cartId } }),
      (this.wrapper = document.createElement("div"));
  }
  static get observedAttributes() {
    return ["access-token", "has-selling-plan", "requires-shipping"];
  }
  createDataSource(e) {
    if (!this.cartToken)
      throw new Error("[AcceleratedCheckoutCart] cart cookie does not exist");
    const n = mt(),
      r = new At({
        accessToken: this.accessToken,
        country: this.buyerCountry,
        locale: n.locale,
        withCarrierRates: e,
        cartPrepareMigrationEnabled: this.cartPrepareMigrationEnabled,
      }),
      a = new $l(this, this.cartToken, r);
    (this.dataSource = a), (this.apiClient = r), (this.i18n = n);
  }
  async createWebComponents({ shouldRefetchCartAttributes: e }) {
    if (!this.walletConfigs)
      throw new Error("[AcceleratedCheckoutCart] walletConfigs does not exist");
    const n = so(this.walletConfigs, "AcceleratedCheckoutCart");
    if (!(n instanceof Array))
      throw new Error("[AcceleratedCheckoutCart] invalid walletConfigs found");
    const r = M.ButtonDisplay,
      a = (l) => "".concat(l, ":").concat(this.instanceNumber),
      i = await Bl(this, {
        walletConfigs: n,
        startButtonDisplayBenchmark: (l) => Xe(r, a(l)),
      }),
      o = new Set([g.ApplePay, g.GooglePay]),
      s = i.some((l) => o.has(l.getInstrumentName()));
    return (
      this.createDataSource(s),
      e && (await this.updateAttributes()),
      i.map((l) => {
        const c = l.getInstrumentName();
        return l.createWebComponent({
          walletContainer: this,
          dataSource: this.dataSource,
          i18n: this.i18n,
          apiClient: this.apiClient,
          pageType: this.pageType,
          containerInstanceNumber: this.instanceNumber,
          slot: "button-".concat(l.getInstrumentName()),
          onRendered: () =>
            b.instrumentLoaded({
              instrumentOrComponentName: c,
              result: "success",
              measurement: ne(r, a(c)),
            }),
        });
      })
    );
  }
  async cartChangedCallback() {
    try {
      if (!this.dataSource && this.cartToken) {
        await this.render({ shouldRefetchCartAttributes: !0 });
        return;
      } else if (!this.cartToken) {
        b.cartTokenMissing({ reason: "cartChangedCallback" });
        return;
      }
      await this.updateAttributes();
    } catch (e) {
      this.clearUI(), f.notify(e);
    }
  }
  async updateAttributes() {
    var e;
    if (!this.cartToken) return;
    const n = await ((e = this.apiClient) == null
      ? void 0
      : e.fetchCart({
          id: "gid://shopify/Cart/".concat(this.cartToken),
          instrumentName: g.Unknown,
        }));
    if (!(n != null && n.id))
      throw new Error(
        "[".concat(this.updateAttributes, "] received invalid cart")
      );
    (this.hasSellingPlan = n.lineItems.some(
      (r) => r.sellingPlanAllocation != null
    )),
      (this.isShippingRequired = n.lineItems.some(
        (r) => r.merchandise.requiresShipping
      ));
  }
  async connectedCallback() {
    try {
      if (this.didInitiateRender) return;
      if (
        (q({ event: B.CartInitCalled }),
        (this.cartObserver = xl(() => this.cartChangedCallback())),
        !this.cartToken)
      ) {
        b.cartTokenMissing({ reason: "connectedCallback" });
        return;
      }
      await this.render({ shouldRefetchCartAttributes: !1 });
    } catch (e) {
      this.clearUI(), f.notify(e);
    }
  }
  disconnectedCallback() {
    var e;
    (e = this.cartObserver) == null || e.disconnect();
  }
  async attributeChangedCallback(e, n, r) {
    n !== r &&
      (ar(this, e, r),
      e === "has-selling-plan" && r === ""
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : e === "has-selling-plan" && r === null && this.hideBuyerConsent());
  }
  get cartToken() {
    return Ye("cart");
  }
  async render({ shouldRefetchCartAttributes: e }) {
    var n;
    if (this.hasLegacyCartCookie()) {
      b.legacyCartCookie(), this.clearUI();
      return;
    }
    this.didInitiateRender = !0;
    const r = wt(M.ButtonDisplay, "cart:".concat(this.instanceNumber)),
      a = await this.createWebComponents({ shouldRefetchCartAttributes: e });
    if ((this.clearUI(), a.length === 0)) return;
    const i = new DocumentFragment(),
      o = this.getOrCreateShadowRoot(),
      s = document.createElement("style");
    (s.innerHTML = [Zn, Ml].join("\n")),
      o.appendChild(s),
      this.extractStyles(),
      (this.wrapper = document.createElement("div")),
      (this.wrapper.className = "wallet-cart-wrapper wallet-button-fade-in");
    const l = document.createElement("h2");
    (l.className = "screen-reader-text"),
      (l.textContent =
        ((n = this.i18n) == null ? void 0 : n.translate("express_checkout")) ||
        ""),
      this.wrapper.appendChild(l);
    const c = document.createElement("div");
    (c.className = "wallet-cart-grid ".concat(we.CONTAINER)),
      Hl() && c.classList.add("wallet-cart-grid--vertical"),
      a.forEach((u) => {
        const h = document.createElement("div"),
          p = document.createElement("div"),
          y = document.createElement("slot");
        (y.name = "button-".concat(u.name)),
          (h.className = "wallet-cart-button-container"),
          (p.className = "wallet-cart-button"),
          h.setAttribute("data-testid", "grid-cell"),
          h.appendChild(p),
          p.appendChild(y),
          c.appendChild(h),
          i.appendChild(u);
      }),
      this.wrapper.appendChild(c),
      this.hasSellingPlan
        ? this.showBuyerConsent(this.apiClient, this.i18n)
        : this.hideBuyerConsent(),
      o.appendChild(this.wrapper),
      this.appendChild(i),
      b.instrumentLoaded({
        instrumentOrComponentName: "AcceleratedCheckoutCart",
        result: "success",
        measurement: r(),
      });
  }
  getOrCreateShadowRoot() {
    return (
      S(this, ke) || z(this, ke, this.attachShadow({ mode: "closed" })),
      S(this, ke)
    );
  }
  hasLegacyCartCookie() {
    var e;
    return this.cartToken
      ? (e = this.cartToken) == null
        ? void 0
        : e.match(/^[a-z0-9]+$/)
      : !1;
  }
  extractStyles() {
    if (this.styleExtractorDisabled) {
      ot()("shopify-support-debug") &&
        console.debug(
          "[shopify-support-debug] styling backward compatibility disabled"
        );
      return;
    }
    const e = ra(this);
    if (e) {
      na(this, e);
      const n = this.getOrCreateShadowRoot(),
        r = document.createElement("style");
      (r.innerHTML = Fl), n.appendChild(r);
    }
  }
};
(ke = new WeakMap()), d(ut, "instanceCount", 0);
let Wt = ut;
async function Bl(
  t,
  { walletConfigs: e, startButtonDisplayBenchmark: n = () => {} }
) {
  const r = co(t, ml(e));
  return (
    await Promise.all(
      r.map(
        (a) => (
          n(a.getInstrumentName()),
          Ft({ walletInstrument: a, instanceNumber: t.instanceNumber })
        )
      )
    )
  ).filter((a) => a != null);
}
function Hl() {
  return !!document.querySelector(
    ".additional-checkout-buttons--vertical shopify-accelerated-checkout-cart"
  );
}
ie("shopify-accelerated-checkout-cart", Wt);
class Gl {
  getInitialCart() {
    throw new Error('[NoOpDataSource] Unexpected call to "getCart"');
  }
}
const ht = class Xl extends or {
  constructor() {
    super(),
      d(this, "instanceNumber", ++Xl.instanceCount),
      Zt({ shop: { shopId: this.shopId } });
  }
  get walletConfig() {
    return this.getAttribute("wallet-config");
  }
  get pageType() {
    return this.getAttribute("page-type") || C.Unknown;
  }
  async connectedCallback() {
    var e;
    try {
      if (this.children.length) return;
      this.instanceNumber === 1 && b.initStarted();
      const n = wt(M.ButtonDisplay, "dc:".concat(this.instanceNumber)),
        r = lo(this.walletConfig, "WalletButton");
      if (!r) throw new Ia("[WalletButton] No config provided.");
      const a = ct(r);
      if (!a) return;
      if (!(await this.eligibleToShow(a))) {
        this.pciEnabled &&
          this.dispatchEvent(
            new CustomEvent("wallet-rendered", {
              detail: { status: "failure", message: "ineligible" },
            })
          );
        return;
      }
      if (this.onlySdk) {
        b.initCompleted({ result: "success" }),
          this.pciEnabled &&
            this.dispatchEvent(
              new CustomEvent("wallet-rendered", {
                detail: { status: "success" },
              })
            );
        return;
      }
      const i = a.getInstrumentName();
      (this.i18n = mt()),
        (this.apiClient = new At({
          accessToken: this.accessToken,
          country: this.buyerCountry,
          locale: this.i18n.locale,
        }));
      const o = this.createWebComponent(a, this.i18n, this.apiClient, i, n);
      (this.innerHTML = ""),
        this.appendChild(o),
        b.initCompleted({ result: "success" }),
        this.instanceNumber === 1 && this.triggerLoadedEvent();
    } catch (n) {
      (this.innerHTML = ""),
        this.pciEnabled &&
          this.dispatchEvent(
            new CustomEvent("wallet-rendered", {
              detail: {
                status: "failure",
                message:
                  (e = n.message) != null ? e : "Error loading wallet SDK",
              },
            })
          ),
        b.initCompleted({ error: n }),
        f.notify(n);
    }
  }
  createWebComponent(e, n, r, a, i) {
    const o = e.createWebComponent({
      walletContainer: this,
      dataSource: new Gl(),
      i18n: n,
      apiClient: r,
      containerInstanceNumber: this.instanceNumber,
      pageType: this.pageType,
    });
    return (
      (o.onRendered = () => {
        this.pciEnabled &&
          this.dispatchEvent(
            new CustomEvent("wallet-rendered", {
              detail: { status: "success" },
            })
          ),
          b.instrumentLoaded({
            instrumentOrComponentName: a,
            result: "success",
            measurement: i(),
          });
      }),
      o
    );
  }
  async eligibleToShow(e) {
    return !(
      !ir(this, e) ||
      (await e.loadWalletSDK(), !e.getPartnerSDKEligibility().eligible)
    );
  }
};
d(ht, "instanceCount", 0);
let Kt = ht;
ie("shopify-wallet-button", Kt), wa(f), _a(f), b.startExporter();
