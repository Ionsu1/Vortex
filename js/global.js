function disablePageScroll() {
  if (document.body.hasAttribute("scroll-y-off")) return;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (document.body.style.top = -scrollTop + "px"),
    document.body.setAttribute("scroll-y-off", "true");
}
function enablePageScroll() {
  if (!document.body.hasAttribute("scroll-y-off")) return;
  const scrollPosition = -parseInt(document.body.style.top, 10);
  (document.body.style.top = null),
    document.body.removeAttribute("scroll-y-off"),
    requestAnimationFrame(() => window.scrollTo(0, scrollPosition));
}
function getFocusableElements(container, filter_invisible = !0) {
  let list = Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
  return (
    filter_invisible &&
      (list = list.filter((element) => element.offsetParent !== null)),
    list
  );
}
const trapFocusHandlers = {};
function trapFocus(container, elementToFocus) {
  if (!container) return;
  const trap = container.hasAttribute("data-trap")
    ? container
    : container.querySelector("[data-trap]");
  if (!trap) return;
  const elements = getFocusableElements(trap);
  if (elements.length <= 0) return;
  const first = elements[0],
    last = elements[elements.length - 1];
  (elementToFocus = elementToFocus || trap),
    removeTrapFocus(),
    (trapFocusHandlers.focusin = (event) => {
      (event.target !== trap &&
        event.target !== last &&
        event.target !== first) ||
        document.addEventListener("keydown", trapFocusHandlers.keydown);
    }),
    (trapFocusHandlers.focusout = function () {
      document.removeEventListener("keydown", trapFocusHandlers.keydown);
    }),
    (trapFocusHandlers.keydown = function (event) {
      (event.code && event.code.toUpperCase() !== "TAB") ||
        (event.target === last && !event.shiftKey
          ? (event.preventDefault(), first.focus())
          : (event.target === trap || event.target === first) &&
            event.shiftKey &&
            (event.preventDefault(), last.focus()));
    }),
    document.addEventListener("focusin", trapFocusHandlers.focusin),
    document.addEventListener("focusout", trapFocusHandlers.focusout),
    elementToFocus.focus(),
    elementToFocus.tagName === "INPUT" &&
      ["search", "text", "email", "url"].includes(elementToFocus.type) &&
      elementToFocus.value &&
      elementToFocus.setSelectionRange(0, elementToFocus.value.length);
}
function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener("focusin", trapFocusHandlers.focusin),
    document.removeEventListener("focusout", trapFocusHandlers.focusout),
    document.removeEventListener("keydown", trapFocusHandlers.keydown),
    elementToFocus &&
      (elementToFocus.closest("[data-trap]")
        ? trapFocus(elementToFocus.closest("[data-trap]"), elementToFocus)
        : elementToFocus.focus());
}
try {
  document.querySelector(":focus-visible");
} catch {
  focusVisiblePolyfill();
}
function focusVisiblePolyfill() {
  const navKeys = [
    "ARROWUP",
    "ARROWDOWN",
    "ARROWLEFT",
    "ARROWRIGHT",
    "TAB",
    "ENTER",
    "SPACE",
    "ESCAPE",
    "HOME",
    "END",
    "PAGEUP",
    "PAGEDOWN",
  ];
  let currentFocusedElement = null,
    mouseClick = null;
  window.addEventListener("keydown", (event) => {
    navKeys.includes(event.code.toUpperCase()) && (mouseClick = !1);
  }),
    window.addEventListener("mousedown", (event) => {
      mouseClick = !0;
    }),
    window.addEventListener(
      "focus",
      () => {
        currentFocusedElement &&
          currentFocusedElement.classList.remove("focused"),
          !mouseClick &&
            ((currentFocusedElement = document.activeElement),
            currentFocusedElement.classList.add("focused"));
      },
      !0
    );
}
function getFirstActiveInput(container = null) {
  if (container)
    return container.querySelector(
      'input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), select:not([disabled])'
    );
}
function pauseAllMedia(dom = document) {
  dom.querySelectorAll(".js-youtube").forEach((video) => {
    video.contentWindow.postMessage(
      '{"event":"command","func":"pauseVideo","args":""}',
      "*"
    );
  }),
    dom.querySelectorAll(".js-vimeo").forEach((video) => {
      video.contentWindow.postMessage('{"method":"pause"}', "*");
    }),
    dom.querySelectorAll("video").forEach((video) => video.pause()),
    dom.querySelectorAll("product-model").forEach((model) => {
      model.modelViewerUI && model.modelViewerUI.pause();
    });
}
function playAllMedia(dom = document) {
  dom.querySelectorAll(".js-youtube").forEach((video) => {
    video.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  }),
    dom.querySelectorAll(".js-vimeo").forEach((video) => {
      video.contentWindow.postMessage('{"method":"play"}', "*");
    }),
    dom.querySelectorAll("video").forEach((video) => {
      video.play();
    });
}
function onKeyUpEscape(event) {
  if (event.code && event.code.toUpperCase() !== "ESCAPE") return;
  const openDetailsElement = event.target.closest("details[open]");
  if (!openDetailsElement) return;
  const summaryElement = openDetailsElement.querySelector("summary");
  openDetailsElement.removeAttribute("open"),
    summaryElement.setAttribute("aria-expanded", "false"),
    summaryElement.focus();
}
function setCookie(name, value, hoursToExpire = 30) {
  const date = new Date();
  date.setTime(date.getTime() + hoursToExpire * 60 * 60 * 1e3);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}
function getCookie(name) {
  const nameEQ = name + "=",
    ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    for (; c.charAt(0) === " "; ) c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0)
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}
function storeData(key, value, expirationInMinutes = null) {
  const dataToStore = {
    value,
    expiration: expirationInMinutes
      ? new Date().getTime() + expirationInMinutes * 6e4
      : null,
  };
  localStorage.setItem(key, JSON.stringify(dataToStore));
}
function retrieveData(key) {
  try {
    const dataObj = JSON.parse(localStorage.getItem(key));
    if (dataObj) {
      const currentTime = new Date().getTime();
      if (dataObj.expiration === null || currentTime < dataObj.expiration)
        return dataObj.value;
      localStorage.removeItem(key);
    }
    return null;
  } catch {
    return null;
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function padNumber(num, length) {
  return String(num).padStart(length, "0");
}
function isMobileScreen() {
  return window.matchMedia("(max-width: 749px)").matches;
}
function isPadScreen() {
  return window.matchMedia("(max-width: 999px)").matches;
}
function isNumeric(value) {
  if (typeof value == "number" && !isNaN(value)) return !0;
  if (typeof value == "string" && value.trim() !== "") {
    const number = Number(value);
    return !isNaN(number);
  }
  return !1;
}
function formatPriceAmount(amount = 0, currency) {
  if (
    window.priceFormatTemplate == null ||
    window.priceFormatTemplate === "" ||
    !currency
  )
    return;
  const value = amount / 100,
    hasNoDecimals = [
      "JPY",
      "KRW",
      "VND",
      "IDR",
      "CLP",
      "COP",
      "PYG",
      "UGX",
      "ISK",
      "HUF",
      "RWF",
      "BIF",
      "DJF",
      "GNF",
      "KMF",
      "XAF",
      "XOF",
      "XPF",
    ].includes(currency),
    price = value.toLocaleString(void 0, {
      minimumFractionDigits: hasNoDecimals ? 0 : 2,
      maximumFractionDigits: hasNoDecimals ? 0 : 2,
    });
  return window.priceFormatTemplate.replace(/[\d,.]+/, price);
}
function floorToMultiple(n, x) {
  return Math.floor(n / x) * x;
}
function ceilToMultiple(n, x) {
  return Math.ceil(n / x) * x;
}
function popToast(message = "", type = "info") {
  if (message === "") return;
  const toastEle = document.createElement("div");
  (toastEle.className = `toast type-${type}`),
    toastEle.setAttribute("aria-role", "alert"),
    toastEle.setAttribute("aria-live", "assertive"),
    (toastEle.textContent = message),
    setTimeout(() => {
      toastEle.remove();
    }, 5e3),
    document.getElementById("toasts-container")?.appendChild(toastEle);
}
function scrollToElementWithOffset(element, offset = 50) {
  if (!element) return;
  const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset,
    targetPosition = Math.max(0, elementPosition - offset);
  window.scrollTo({ top: targetPosition, behavior: "smooth" });
}
function scrollElementToHeaderBottom(element, offset = 0) {
  const header = document.getElementById("Page-Header");
  scrollToElementWithOffset(
    element,
    Math.max(0, header.getBoundingClientRect().bottom) + offset
  );
}
function fire(particleRatio, opts) {
  const defaults = { origin: { y: 0.7 }, zIndex: 999 };
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(200 * particleRatio),
  });
}
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
function cannonConfetti() {
  typeof confetti > "u" ||
    (fire(0.25, { spread: 26, startVelocity: 55 }),
    fire(0.2, { spread: 60 }),
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 }),
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 }),
    fire(0.1, { spread: 120, startVelocity: 45 }));
}
function firework() {
  const animationEnd = Date.now() + 1500,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 },
    interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 150 * (timeLeft / 1500);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }),
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
    }, 250);
}
function sideConfetti() {
  const star = confetti.shapeFromPath({
      path: "M43.767 59.6698L31.4327 53.1854L19.094 59.6698C14.3183 62.187 8.68819 58.1198 9.60225 52.7741L11.9573 39.0363L1.97805 29.3081C-1.89655 25.5351 0.242508 18.9273 5.60265 18.1492L19.396 16.1429L25.5655 3.64453C27.971 -1.22187 34.901 -1.20781 37.2995 3.64453L43.467 16.1429L57.2604 18.1492C62.6135 18.9265 64.7643 25.5308 60.885 29.3081L50.9057 39.0363L53.2608 52.7741C54.1737 58.1143 48.5592 62.1831 43.767 59.6698Z",
      matrix: [
        0.03597122302158273, 0, 0, 0.03597122302158273, -4.856115107913669,
        -5.071942446043165,
      ],
    }),
    heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    }),
    end = Date.now() + 1e3,
    defaults = {
      particleCount: 3,
      startVelocity: 80,
      spread: 55,
      colors: ["#ffff00", "#bb0000", "#ffffff"],
    };
  (function frame() {
    confetti({ ...defaults, angle: 60, origin: { x: 0 } }),
      confetti({
        ...defaults,
        angle: 60,
        origin: { x: 0 },
        shapes: [star, heart],
        scalar: randomInRange(1, 1.5),
      }),
      confetti({ ...defaults, angle: 120, origin: { x: 1 } }),
      confetti({
        ...defaults,
        angle: 120,
        origin: { x: 1 },
        shapes: [star, heart],
        scalar: randomInRange(1, 1.5),
      }),
      Date.now() < end && requestAnimationFrame(frame);
  })();
}
function fallingRibbons() {
  const heart = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
    }),
    star = confetti.shapeFromPath({
      path: "M43.767 59.6698L31.4327 53.1854L19.094 59.6698C14.3183 62.187 8.68819 58.1198 9.60225 52.7741L11.9573 39.0363L1.97805 29.3081C-1.89655 25.5351 0.242508 18.9273 5.60265 18.1492L19.396 16.1429L25.5655 3.64453C27.971 -1.22187 34.901 -1.20781 37.2995 3.64453L43.467 16.1429L57.2604 18.1492C62.6135 18.9265 64.7643 25.5308 60.885 29.3081L50.9057 39.0363L53.2608 52.7741C54.1737 58.1143 48.5592 62.1831 43.767 59.6698Z",
    }),
    shortRibbon = confetti.shapeFromPath({
      path: "M13.4189 115.023L5.75487 107.359C-1.91777 99.6915 -1.91777 87.277 5.75487 79.6048L13.4189 71.9408C15.9681 69.3892 15.9681 65.2392 13.4166 62.6876L5.75448 55.0236C-1.91816 47.3556 -1.91816 34.9412 5.75448 27.269L16.0021 17.0213C17.9951 15.026 18.4873 11.9913 17.2267 9.46783C15.6127 6.23737 16.9224 2.30808 20.1548 0.692064C23.3787 -0.922386 27.3162 0.38269 28.9302 3.61979C32.7122 11.1862 31.2345 20.2901 25.2521 26.2717L15.0056 36.5193C12.4435 39.0861 12.4525 43.217 15.0056 45.7701L22.6697 53.4365C30.3212 61.0904 30.3212 73.5419 22.6697 81.1911L15.0056 88.8552C12.4435 91.422 12.4525 95.5528 15.0056 98.1059L22.6697 105.772C25.2251 108.325 25.2251 112.47 22.6697 115.023C20.1138 117.579 15.974 117.579 13.4189 115.023Z",
    }),
    longRibbon = confetti.shapeFromPath({
      path: "M15.0039 141.17C13.739 142.435 13.0843 144.049 13.0843 145.793C13.0843 147.538 13.7386 149.195 15.0039 150.416L15.4402 150.896L22.6363 158.092C30.3117 165.768 30.3117 178.198 22.6363 185.874C21.3714 187.139 19.714 187.793 18.0136 187.793C17.141 187.793 16.2687 187.618 15.4398 187.226C14.6988 186.921 14 186.485 13.3898 185.874C10.8597 183.301 10.8597 179.158 13.3898 176.584C15.9629 174.055 15.9629 169.911 13.3898 167.338L5.75741 159.706C2.05 155.999 0 151.07 0 145.793C0 140.559 2.05 135.631 5.75741 131.924L13.3898 124.248C15.9629 121.718 15.9629 117.575 13.3898 115.002L5.75741 107.369C2.05 103.662 0 98.7338 0 93.4565C0 88.2229 2.05 83.2944 5.75741 79.5873L13.3898 71.9112C15.9629 69.3815 15.9629 65.2382 13.3898 62.6651L5.75741 55.0327C2.05 51.3257 0 46.3972 0 41.1198C0 35.8863 2.05 30.9577 5.75741 27.2507L15.4402 17.5695L15.9636 17.0027C17.9703 14.9965 18.4492 11.9871 17.2281 9.4574C15.6148 6.23006 16.9238 2.30468 20.1511 0.691013C23.3785 -0.922656 27.3035 0.386326 28.9175 3.61327C32.7117 11.1586 31.2285 20.2738 25.2535 26.2488L15.0043 36.498C13.7394 37.7628 13.0847 39.3765 13.0847 41.121C13.0847 42.8655 13.739 44.523 15.0043 45.744L15.4406 46.2237L22.6367 53.4198C23.073 53.8561 23.5527 54.3358 23.9882 54.9026C30.2691 62.6221 29.8328 74.0049 22.6367 81.2018L15.0043 88.8342C13.7394 90.099 13.0847 91.7127 13.0847 93.4572C13.0847 95.2018 13.739 96.8592 15.0043 98.0803L15.4406 98.56L22.6367 105.756C30.312 113.432 30.312 125.862 22.6367 133.538L15.4406 140.734L15.0039 141.17Z",
    }),
    duration = 3 * 1e3,
    animationEnd = Date.now() + duration;
  let skew = 1;
  function randomColor() {
    const colors = ["#ffffff", "#e9fa01", "#f93963", "#0b55e8", "#7c0e8f"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  (function frame() {
    const timeLeft = animationEnd - Date.now(),
      ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);
    const defaults = {
      particleCount: 1,
      startVelocity: 0,
      ticks,
      colors: [randomColor()],
      zIndex: 999,
    };
    confetti({
      ...defaults,
      origin: { x: Math.random(), y: Math.random() * skew - 0.2 },
      gravity: randomInRange(0.2, 0.4),
    }),
      confetti({
        ...defaults,
        origin: { x: Math.random(), y: 0 },
        shapes: [shortRibbon, longRibbon, heart, star],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(1.5, 2),
        drift: randomInRange(-0.4, 0.4),
      }),
      timeLeft > 0 && requestAnimationFrame(frame);
  })();
}
function loadingImage(image) {
  image.dataset.srcset &&
    (image.setAttribute("srcset", image.dataset.srcset),
    image.removeAttribute("data-srcset"),
    (image.onload = () => {
      image.classList.add("image-lazy-loaded");
    }));
}
function initializeScrollLazyImageTrigger() {
  if (!window.enableLazyImage) return;
  const lazyImages = document.querySelectorAll(
    ".image-lazy-loading:not(.image-lazy-loaded)"
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observer2) => {
        entries.forEach((entry, index) => {
          entry.isIntersecting &&
            (loadingImage(entry.target), observer2.unobserve(entry.target));
        });
      },
      { rootMargin: "0px 0px 400px 0px" }
    );
    lazyImages.forEach((image) => observer.observe(image));
  } else lazyImages.forEach((image) => loadingImage(image));
}
function loadToolTip(tooltipTrigger) {
  function moveTooltip(event, tooltip) {
    (tooltip.style.left = `${event.clientX}px`),
      (tooltip.style.top = `${event.clientY - 16}px`);
  }
  tooltipTrigger.addEventListener("mouseenter", function () {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tool-tip"),
      (tooltip.innerText = tooltipTrigger.getAttribute("data-title")),
      document.body.appendChild(tooltip);
    function onMouseMove(event) {
      moveTooltip(event, tooltip);
    }
    function hideToolTip() {
      const tooltips = document.querySelectorAll(".tool-tip");
      tooltips && tooltips.forEach((tooltip2) => tooltip2.remove()),
        tooltipTrigger.removeEventListener("mousemove", onMouseMove);
    }
    tooltipTrigger.addEventListener("mousemove", onMouseMove),
      tooltipTrigger.addEventListener("mouseleave", hideToolTip, { once: !0 }),
      window.addEventListener("scroll", hideToolTip, { once: !0 });
  }),
    tooltipTrigger.setAttribute("data-tooltip-loaded", "true");
}
function initializeToolTipTrigger() {
  if (isMobileScreen()) return;
  const tooltipTriggers = document.querySelectorAll(
    '[data-toggle="tooltip"]:not([data-tooltip-loaded])'
  );
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, observer2) => {
      entries.forEach((entry, index) => {
        entry.isIntersecting &&
          (loadToolTip(entry.target), observer2.unobserve(entry.target));
      });
    });
    tooltipTriggers.forEach((tooltipTrigger) =>
      observer.observe(tooltipTrigger)
    );
  } else
    tooltipTriggers.forEach((tooltipTrigger) => loadToolTip(tooltipTrigger));
}
function initializeHeaderHeightStyle() {
  const header = document.querySelector("header");
  header &&
    document.documentElement.style.setProperty(
      "--header-height",
      `${Math.floor(header.offsetHeight)}px`
    );
}
function initializeScrollSynergy() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    isMobileScreen()
  )
    return;
  const animationTriggerElements = Array.from(
    document.querySelectorAll(
      ".scroll-synergy:not([data-scroll-synergy-observed])"
    )
  );
  if (animationTriggerElements.length === 0) return;
  const observer = new IntersectionObserver((elements) => {
    elements.forEach((entry) => {
      let prePosition;
      const handleScroll = throttle(() => {
        const percentage = percentageSeen(entry.target);
        let position = 0;
        if (
          (percentage <= 0
            ? (position = 0)
            : percentage < 30
            ? (position = 1)
            : percentage < 100
            ? (position = 2)
            : (position = 3),
          prePosition !== position &&
            (entry.target.classList.remove(
              "synergy-position--1",
              "synergy-position--2"
            ),
            position > 0 &&
              position < 3 &&
              entry.target.classList.add(`synergy-position--${position}`),
            (prePosition = position)),
          entry.target.style.setProperty("--synergy-ratio", `${percentage}%`),
          entry.target.classList.contains("synergy--zoom-in"))
        ) {
          const zoomInRatio = 1 + 0.005 * percentage;
          entry.target.style.setProperty(
            "--zoom-in-ratio",
            zoomInRatio.toString()
          );
        } else if (entry.target.classList.contains("synergy--parallax")) {
          const parallaxRatio = percentage / 100;
          entry.target.style.setProperty(
            "--parallax-ratio",
            parallaxRatio.toString()
          );
        } else if (
          entry.target.classList.contains("synergy--crab-left") ||
          entry.target.classList.contains("synergy--crab-right")
        ) {
          let crabRatio = 0.25 * percentage;
          entry.target.classList.contains("synergy--crab-left") &&
            (crabRatio = -1 * crabRatio),
            entry.target.style.setProperty("--crab-ratio", `${crabRatio}%`);
        }
      });
      entry.isIntersecting
        ? window.addEventListener("scroll", handleScroll)
        : window.removeEventListener("scroll", handleScroll);
    });
  });
  animationTriggerElements.forEach((element) => {
    observer.observe(element),
      element.setAttribute("data-scroll-synergy-observed", "true");
  });
}
function percentageSeen(element) {
  const viewportHeight = window.innerHeight,
    scrollY = window.scrollY,
    elementPositionY = element.getBoundingClientRect().top + scrollY,
    elementHeight = element.offsetHeight;
  return elementPositionY > scrollY + viewportHeight
    ? 0
    : elementPositionY + elementHeight < scrollY
    ? 100
    : (
        (scrollY + viewportHeight - elementPositionY) /
        ((viewportHeight + elementHeight) / 100)
      ).toFixed(2);
}
function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t), (t = setTimeout(() => fn.apply(this, args), wait));
  };
}
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (!(now - lastCall < delay)) return (lastCall = now), fn(...args);
  };
}
function fetchConfig(type = "json", method = "POST") {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: `application/${type}`,
    },
  };
}
typeof window.Shopify > "u" && (window.Shopify = {}),
  (Shopify.bind = function (fn, scope) {
    return function () {
      return fn.apply(scope, arguments);
    };
  }),
  (Shopify.setSelectorByValue = function (selector, value) {
    for (let i = 0, count = selector.options.length; i < count; i++) {
      const option = selector.options[i];
      if (value === option.value || value === option.innerHTML)
        return (selector.selectedIndex = i), i;
    }
  }),
  (Shopify.addListener = function (target, eventName, callback) {
    target.addEventListener
      ? target.addEventListener(eventName, callback, !1)
      : target.attachEvent("on" + eventName, callback);
  }),
  (Shopify.postLink = function (path, options) {
    options = options || {};
    const method = options.method || "post",
      params = options.parameters || {},
      form = document.createElement("form");
    form.setAttribute("method", method), form.setAttribute("action", path);
    for (let key in params) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden"),
        hiddenField.setAttribute("name", key),
        hiddenField.setAttribute("value", params[key]),
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form),
      form.submit(),
      document.body.removeChild(form);
  }),
  (Shopify.CountryProvinceSelector = function (
    country_domid,
    province_domid,
    options
  ) {
    (this.countryEl = document.getElementById(country_domid)),
      (this.provinceEl = document.getElementById(province_domid)),
      options && options.hideElement
        ? (this.provinceContainer = document.getElementById(
            options.hideElement
          ))
        : (this.provinceContainer = document.getElementById(province_domid)),
      Shopify.addListener(
        this.countryEl,
        "change",
        Shopify.bind(this.countryHandler, this)
      ),
      this.initCountry(),
      this.initProvince();
  }),
  (Shopify.CountryProvinceSelector.prototype = {
    initCountry: function () {
      const value = this.countryEl.getAttribute("data-default");
      Shopify.setSelectorByValue(this.countryEl, value), this.countryHandler();
    },
    initProvince: function () {
      const value = this.provinceEl.getAttribute("data-default");
      value &&
        this.provinceEl.options.length > 0 &&
        Shopify.setSelectorByValue(this.provinceEl, value);
    },
    countryHandler: function (e) {
      const raw =
          this.countryEl.options[this.countryEl.selectedIndex].getAttribute(
            "data-provinces"
          ),
        provinces = JSON.parse(raw);
      this.clearOptions(this.provinceEl),
        provinces && provinces.length <= 0
          ? (this.provinceContainer.style.display = "none")
          : (provinces.forEach((province) => {
              const opt2 = document.createElement("option");
              (opt2.value = province[0]),
                (opt2.innerHTML = province[1]),
                this.provinceEl.appendChild(opt2);
            }),
            (this.provinceContainer.style.display = ""));
    },
    clearOptions: function (selector) {
      for (; selector.firstChild; ) selector.removeChild(selector.firstChild);
    },
    setOptions: function (selector, values) {
      values.length &&
        values.length > 0 &&
        values.forEach((value) => {
          const opt = document.createElement("option");
          (opt.value = value),
            (opt.innerHTML = value),
            selector.appendChild(opt);
        });
    },
  });
class SectionDynamicUpdate {
  static getSectionInnerHTML(html, id, selector) {
    const dom = new DOMParser().parseFromString(html, "text/html");
    return dom ? (dom.querySelector(selector) || dom).innerHTML : "";
  }
  static updateSections(sections, responseSections) {
    sections.forEach((section) => {
      const elementToReplace =
        document.getElementById(section.id)?.querySelector(section.selector) ||
        document.getElementById(section.id);
      elementToReplace &&
        (elementToReplace.innerHTML = SectionDynamicUpdate.getSectionInnerHTML(
          responseSections[section.section],
          section.id,
          section.selector
        ));
    }),
      initializeScrollLazyImageTrigger(),
      typeof initializeScrollAnimationTrigger == "function" &&
        initializeScrollAnimationTrigger(),
      initializeToolTipTrigger();
  }
}
let firstTrigger = !0,
  hasConfetti = !1;
document.addEventListener("freeShippingUnlocked", (event) => {
  event.detail.status
    ? (!hasConfetti && !firstTrigger && cannonConfetti(), (hasConfetti = !0))
    : (hasConfetti = !1),
    (firstTrigger = !1);
}),
  document.addEventListener("DOMContentLoaded", function () {
    initializeHeaderHeightStyle(),
      initializeScrollLazyImageTrigger(),
      initializeToolTipTrigger(),
      initializeScrollSynergy();
  });
class QuantityInput extends HTMLElement {
  quantityUpdateUnsubscriber = void 0;
  constructor() {
    super(),
      (this.changeEvent = new Event("change", { bubbles: !0 })),
      (this.input = this.querySelector("input")),
      this.input.addEventListener("change", this.onInputChange.bind(this)),
      this.querySelectorAll("button").forEach((button) =>
        button.addEventListener("click", this.onButtonClick.bind(this))
      ),
      this.updateQtyButtonState(),
      (this.quantityUpdateUnsubscriber = subscribe(
        PUB_SUB_EVENTS.quantityUpdate,
        this.updateQtyButtonState.bind(this)
      ));
  }
  disconnectedCallback() {
    this.quantityUpdateUnsubscriber && this.quantityUpdateUnsubscriber();
  }
  onInputChange(event) {
    this.updateQtyButtonState();
  }
  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;
    event.target.name === "plus" ? this.input.stepUp() : this.input.stepDown(),
      previousValue !== this.input.value &&
        this.input.dispatchEvent(this.changeEvent);
  }
  updateQtyButtonState() {
    const value = parseInt(this.input.value);
    if (this.input.min) {
      const min = parseInt(this.input.min);
      this.querySelector(".quantity-button[name='minus']").classList.toggle(
        "disabled",
        value <= min
      );
    }
    if (this.input.max) {
      const max = parseInt(this.input.max);
      this.querySelector(".quantity-button[name='plus']").classList.toggle(
        "disabled",
        value >= max
      );
    }
  }
}
customElements.define("quantity-input", QuantityInput);
class HeaderDrawer extends HTMLElement {
  constructor() {
    super(),
      (this.mainDetails = this.querySelector("details")),
      (this.mainSummary = this.querySelector("summary")),
      (this.header = this.closest(".section-header")),
      this.addEventListener("keyup", this.onKeyUp.bind(this)),
      this.addEventListener("focusout", this.onFocusOut.bind(this)),
      this.mainDetails.addEventListener("toggle", this.onToggleMain.bind(this)),
      this.querySelector(".menu-drawer-nav")
        .querySelectorAll("details")
        .forEach((detail) => {
          detail.addEventListener("toggle", this.onToggleSub.bind(this));
        });
  }
  onKeyUp(event) {
    (event.code && event.code.toUpperCase() !== "ESCAPE") ||
      this.mainDetails.removeAttribute("open");
  }
  onToggleMain(event) {
    event.currentTarget.hasAttribute("open")
      ? this.openMenuDrawer()
      : this.closeMenuDrawer();
  }
  onToggleSub(event) {
    event.currentTarget.hasAttribute("open")
      ? this.openSubmenu(event.currentTarget)
      : this.closeSubmenu(event.currentTarget);
  }
  openMenuDrawer() {
    setTimeout(() => {
      this.mainDetails.classList.add("menu-open");
    }),
      this.mainSummary.setAttribute("aria-expanded", "true"),
      this.header && this.header.classList.add("header--is-active"),
      this.setTopPosition(),
      window.Shopify.designMode &&
        window.addEventListener("resize", this.setTopPosition.bind(this)),
      disablePageScroll();
  }
  closeMenuDrawer() {
    this.mainDetails.classList.remove("menu-open"),
      this.mainSummary.setAttribute("aria-expanded", "false"),
      this.header && this.header.classList.remove("header--is-active"),
      this.mainDetails
        .querySelectorAll('details[open][data-belong="1"]')
        .forEach((elements) => {
          elements.removeAttribute("open");
        }),
      enablePageScroll(),
      window.removeEventListener("resize", this.setTopPosition.bind(this));
  }
  onFocusOut(event) {
    const triggerElement = event.target;
    setTimeout(() => {
      this.mainDetails.hasAttribute("open") &&
        !this.mainDetails.contains(document.activeElement) &&
        !triggerElement.classList.contains("nav-button") &&
        this.mainDetails.removeAttribute("open");
    });
  }
  openSubmenu(detailsElement) {
    const parentMenuElement = detailsElement.closest(".has-submenu");
    detailsElement
      .querySelector("summary")
      .setAttribute("aria-expanded", "true"),
      setTimeout(() => {
        detailsElement.classList.add("menu-open");
      }),
      parentMenuElement &&
        (parentMenuElement.classList.add("submenu-open"),
        isPadScreen() ||
          Array.from(
            parentMenuElement.querySelectorAll(
              `details[open][data-belong="${parentMenuElement.dataset.level}"]`
            )
          )
            .filter((details) => details !== detailsElement)
            .forEach((details) => {
              details.removeAttribute("open");
            }));
  }
  closeSubmenu(detailsElement) {
    const parentMenuElement = detailsElement.closest(".submenu-open"),
      summaryElement = detailsElement.querySelector("summary");
    parentMenuElement && parentMenuElement.classList.remove("submenu-open"),
      detailsElement.classList.remove("menu-open"),
      summaryElement.setAttribute("aria-expanded", "false"),
      Array.from(
        detailsElement.querySelectorAll("details[open]"),
        (details) => {
          details.removeAttribute("open");
        }
      ),
      Array.from(
        detailsElement.querySelectorAll(".submenu-open"),
        (element) => {
          element.classList.remove("submenu-open");
        }
      );
  }
  setTopPosition() {
    (this.borderOffset =
      this.borderOffset ||
      this.closest(".header-wrapper").classList.contains(
        "header-wrapper--border-bottom"
      )
        ? 1
        : 0),
      this.header &&
        document.documentElement.style.setProperty(
          "--header-bottom-position",
          `${
            this.header.querySelector("header").getBoundingClientRect().bottom -
            this.borderOffset
          }px`
        ),
      document.documentElement.style.setProperty(
        "--viewport-height",
        `${window.innerHeight}px`
      );
  }
}
customElements.define("header-drawer", HeaderDrawer);
class ModalOpener extends HTMLElement {
  constructor() {
    super(),
      !this.hasAttribute("aria-disabled") &&
        ((this.modal = document.getElementById(
          this.getAttribute("aria-controls")
        )),
        this.modal &&
          (this.addEventListener("click", this.onOpenerClick.bind(this)),
          this.addEventListener("keydown", this.onKeyDown.bind(this))));
  }
  onOpenerClick(event) {
    event.preventDefault(),
      this.getAttribute("aria-expanded") !== "true" &&
        this.modal.show(event.target);
  }
  onKeyDown(event) {
    ["Space", "Enter"].includes(event.code) && this.modal.show(event.target);
  }
  dispatchEvent(event) {
    return !1;
  }
}
customElements.define("modal-opener", ModalOpener);
class ModalDialog extends HTMLElement {
  constructor() {
    super(),
      (this.enableScrollWhenOpen = this.hasAttribute("data-enable-scroll")),
      this.hasAttribute("data-force") ||
        (this.addEventListener("keyup", (event) => {
          event.stopPropagation(),
            event.code && event.code.toUpperCase() === "ESCAPE" && this.hide();
        }),
        this.addEventListener("click", (event) => {
          event.stopPropagation(),
            this.contains(event.target) &&
              event.target.classList.contains("modal-overlay") &&
              this.hide();
        })),
      window.Shopify.designMode &&
        (document.addEventListener("shopify:section:select", (event) => {
          event.detail.sectionId === this.dataset.section
            ? this.show()
            : this.hide();
        }),
        document.addEventListener("shopify:section:deselect", (event) => {
          event.detail.sectionId === this.dataset.section && this.hide();
        }));
  }
  show(opener) {
    (this.openedBy = opener),
      this.setAttribute("open", ""),
      this.openedBy && this.openedBy.setAttribute("aria-expanded", "true"),
      trapFocus(this),
      this.enableScrollWhenOpen || disablePageScroll();
  }
  hide() {
    this.removeAttribute("open"),
      this.openedBy &&
        (this.openedBy.setAttribute("aria-expanded", "false"),
        removeTrapFocus(this.openedBy)),
      pauseAllMedia(this),
      this.enableScrollWhenOpen || enablePageScroll();
  }
  dispatchEvent(event) {
    return !1;
  }
}
customElements.define("modal-dialog", ModalDialog);
class Drawer extends ModalDialog {
  constructor() {
    super();
  }
}
customElements.define("drawer-component", Drawer);
class ConfirmOpener extends ModalOpener {
  onOpenerClick(event) {
    const confirmMessageElement = this.modal.querySelector(".confirm-message"),
      message = this.getAttribute("data-message") || "Are you sure?";
    message && (confirmMessageElement.innerText = message),
      super.onOpenerClick(event);
  }
  sendRequest() {
    const url = this.getAttribute("data-url");
    if (!url) return;
    const method = this.getAttribute("data-method") || "post";
    Shopify.postLink(url, { parameters: { _method: method } });
  }
}
customElements.define("confirm-opener", ConfirmOpener);
class ConfirmDialog extends ModalDialog {
  constructor() {
    super();
    const confirmButton = this.querySelector(".confirm-button");
    confirmButton &&
      confirmButton.addEventListener("click", this.handleConfirm.bind(this));
    const cancelButton = this.querySelector(".cancel-button");
    cancelButton &&
      cancelButton.addEventListener("click", this.hide.bind(this));
  }
  handleConfirm() {
    this.openedBy && this.openedBy.sendRequest();
  }
}
customElements.define("confirm-dialog", ConfirmDialog);
class TabPanel extends HTMLElement {
  constructor() {
    super(),
      (this.tabs = Array.from(this.querySelectorAll(".tab"))),
      (this.panels = Array.from(this.querySelectorAll(".panel"))),
      !(!this.tabs || this.tabs.length < 2) &&
        this.tabs.forEach((tab) => {
          tab.addEventListener("click", this.onTabClick.bind(this)),
            tab.setAttribute("tabindex", 0),
            tab.addEventListener("keydown", this.onKeydown.bind(this));
        });
  }
  onTabClick(event) {
    this.tabChoose(event.currentTarget);
  }
  onKeydown(event) {
    const key = event.code ? event.code.toUpperCase() : "";
    (key === "ENTER" || key === "SPACE") &&
      (this.tabChoose(event.currentTarget), event.preventDefault());
  }
  tabChoose(tab) {
    const panel = document.getElementById(tab.getAttribute("aria-controls"));
    if (!tab || !panel) return;
    const currentTab = this.querySelector(".tab[aria-selected=true]"),
      currentPanel = this.querySelector(".panel:not([aria-hidden])");
    tab !== currentTab &&
      (currentTab.setAttribute("aria-selected", !1),
      currentPanel.setAttribute("aria-hidden", !0),
      tab.setAttribute("aria-selected", !0),
      panel.removeAttribute("aria-hidden")),
      (this.scrollableContentViewer =
        this.scrollableContentViewer ||
        tab.closest("scrollable-content-viewer")),
      this.scrollableContentViewer &&
        this.scrollableContentViewer.slideContentByItem(tab);
  }
}
customElements.define("tab-panel", TabPanel);
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super(),
      (this.mainDetailsToggle = this.querySelector("details")),
      (this.content =
        this.mainDetailsToggle.querySelector("summary").nextElementSibling),
      !(!this.mainDetailsToggle || !this.content) && this.observeVisibility();
  }
  disconnectedCallback() {
    this.observer && this.observer.disconnect();
  }
  observeVisibility() {
    (this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          entry.isIntersecting &&
            (this.handleWhenVisibility(), observer.unobserve(this));
        });
      },
      { root: null, threshold: 0.1 }
    )),
      this.observer.observe(this);
  }
  handleWhenVisibility() {
    this.mainDetailsToggle.hasAttribute("open") && this.onToggle(),
      this.mainDetailsToggle.addEventListener(
        "toggle",
        this.onToggle.bind(this)
      );
  }
  onToggle() {
    this.mainDetailsToggle
      .querySelector("summary")
      .setAttribute(
        "aria-expanded",
        this.mainDetailsToggle.hasAttribute("open")
      ),
      setTimeout(() => {
        this.mainDetailsToggle.classList.toggle(
          "has-opened",
          this.mainDetailsToggle.hasAttribute("open")
        );
      });
  }
  open() {
    this.mainDetailsToggle.setAttribute("open", "true");
  }
  close() {
    this.mainDetailsToggle.removeAttribute("open");
  }
}
customElements.define("details-disclosure", DetailsDisclosure);
class DropMenu extends DetailsDisclosure {
  handleWhenVisibility() {
    super.handleWhenVisibility(),
      this.mainDetailsToggle.addEventListener(
        "focusout",
        this.onFocusOut.bind(this)
      ),
      this.hasAttribute("data-hover-open") &&
        (this.mainDetailsToggle.addEventListener(
          "mouseenter",
          this.open.bind(this)
        ),
        this.mainDetailsToggle.addEventListener(
          "mouseleave",
          this.close.bind(this)
        ));
  }
  onFocusOut() {
    setTimeout(() => {
      this.contains(document.activeElement) || this.close();
    });
  }
  onToggle() {
    this.mainDetailsToggle.hasAttribute("data-constrain") &&
      this.adjustContentPosition();
    const header = this.closest(".section-header");
    header &&
      header.classList.toggle(
        "header--is-active",
        this.mainDetailsToggle.hasAttribute("open")
      ),
      super.onToggle();
  }
  adjustContentPosition() {
    const needAdjust = this.mainDetailsToggle.hasAttribute("data-adjust");
    if (!this.mainDetailsToggle.hasAttribute("open"))
      this.mainDetailsToggle.classList.remove("position--exceed"),
        needAdjust && (this.content.style.left = null);
    else {
      let areaRightSidePosition = document.documentElement.clientWidth,
        areaLeftSidePosition = 0;
      if (this.dataset.area) {
        const areaRect = document
          .querySelector(this.dataset.area)
          ?.getBoundingClientRect();
        areaRect &&
          ((areaRightSidePosition = areaRect.right),
          (areaLeftSidePosition = areaRect.left));
      }
      let offset =
        this.content.getBoundingClientRect().right - areaRightSidePosition;
      offset > 0 &&
        (this.mainDetailsToggle.classList.add("position--exceed"),
        needAdjust && (this.content.style.left = `${-Math.ceil(offset)}px`));
    }
    this.mainDetailsToggle.classList.toggle(
      "position--constrained",
      this.mainDetailsToggle.hasAttribute("open")
    );
  }
}
customElements.define("drop-menu", DropMenu);
class DeferredMedia extends HTMLElement {
  constructor() {
    if (
      (super(),
      (this.template = this.querySelector("template")),
      !this.template)
    )
      return;
    const button = this.querySelector(".media-play-button");
    button &&
      (button.removeAttribute("disabled"),
      button.addEventListener("click", this.loadContent.bind(this))),
      this.hasAttribute("data-load-when-visible") && this.initObserver();
  }
  initObserver() {
    const options = { root: null, rootMargin: "100px 0px 100px 0px" };
    new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting && (this.loadContent(), observer.disconnect());
      });
    }, options).observe(this);
  }
  loadContent(focus = !0) {
    if (!this.getAttribute("loaded")) {
      const content = document.createElement("div");
      content.appendChild(
        this.template.content.firstElementChild.cloneNode(!0)
      ),
        (this.deferredElement = this.appendChild(
          content.querySelector("video, model-viewer, iframe")
        )),
        this.setAttribute("loaded", "true"),
        this.deferredElement.nodeName === "VIDEO" &&
          this.deferredElement.getAttribute("autoplay") &&
          ((this.deferredElement.muted = !0),
          this.deferredElement.play(),
          this.deferredElement.addEventListener(
            "ended",
            this.removeContent.bind(this)
          )),
        focus && this.deferredElement.focus();
    }
  }
  removeContent() {
    this.deferredElement &&
      (this.deferredElement.remove(), this.removeAttribute("loaded"));
  }
}
customElements.define("deferred-media", DeferredMedia);
class VariantSelects extends HTMLElement {
  constructor() {
    super(),
      (this.productForm = document.getElementById(
        `product-form-${this.dataset.section}`
      )),
      this.addEventListener("change", this.onVariantChange.bind(this));
  }
  onVariantChange() {
    this.updateOptions(),
      this.updateMasterId(),
      this.toggleAddButtonStatus(!0, ""),
      this.updatePickupAvailability(),
      this.removeErrorMessage(),
      this.updateVariantStatuses(),
      this.currentVariant
        ? (this.updateMedia(),
          this.updateURL(),
          this.updateVariantInput(),
          this.renderProductInfo())
        : (this.toggleAddButtonStatus(!0, window.variantStrings.unavailable),
          this.setUnavailable());
  }
  updateOptions() {
    (this.options = Array.from(
      this.querySelectorAll("select, fieldset"),
      (item) =>
        item.tagName === "SELECT"
          ? item.value
          : Array.from(item.querySelectorAll("input")).find(
              (radio) => radio.checked
            )?.value
    )),
      this.querySelectorAll(".product-form-input")?.forEach(
        (optionElement, index) => {
          const optionValueElement =
            optionElement.querySelector(".form-label span");
          optionValueElement &&
            (optionValueElement.innerText = this.options[index]);
        }
      );
  }
  updateMasterId() {
    this.currentVariant = this.getVariantData().find(
      (variant) =>
        !variant.options
          .map((option, index) => this.options[index] === option)
          .includes(!1)
    );
  }
  updateMedia() {
    if (!this.currentVariant || !this.currentVariant.featured_media) return;
    const mediaGallery = document.getElementById(
      `Media-Gallery-${this.dataset.section}`
    );
    mediaGallery &&
      mediaGallery.updateGallery(this.currentVariant.featured_media.id);
  }
  updateURL() {
    !this.currentVariant ||
      this.dataset.updateUrl === "false" ||
      window.history.replaceState(
        {},
        "",
        `${this.dataset.url}?variant=${this.currentVariant.id}`
      );
  }
  updateVariantInput() {
    document
      .querySelectorAll(
        `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
      )
      .forEach((productForm) => {
        const input = productForm.querySelector('input[name="id"]');
        (input.value = this.currentVariant.id),
          input.dispatchEvent(new Event("change", { bubbles: !0 }));
      });
  }
  updateVariantStatuses() {
    const selectedOptionOneVariants = this.variantData.filter(
        (variant) => this.querySelector(":checked").value === variant.option1
      ),
      inputWrappers = [...this.querySelectorAll(".product-form-input")];
    inputWrappers.forEach((option, index) => {
      if (index === 0) return;
      const optionInputs = Array.from(
          option.querySelectorAll('input[type="radio"]')
        ),
        previousOptionSelected =
          inputWrappers[index - 1].querySelector(":checked").value,
        availableOptionInputsValue = selectedOptionOneVariants
          .filter(
            (variant) =>
              variant.available &&
              variant[`option${index}`] === previousOptionSelected
          )
          .map((variantOption) => variantOption[`option${index + 1}`]);
      this.setInputAvailability(optionInputs, availableOptionInputsValue);
    });
  }
  setInputAvailability(listOfOptions, listOfAvailableOptions) {
    listOfOptions.forEach((input) => {
      listOfAvailableOptions.includes(input.getAttribute("value"))
        ? input.classList.remove("disabled")
        : input.classList.add("disabled");
    });
  }
  updatePickupAvailability() {
    const pickUpAvailability = document.querySelector("pickup-availability");
    pickUpAvailability &&
      (this.currentVariant && this.currentVariant.available
        ? pickUpAvailability.fetchAvailability(this.currentVariant.id)
        : (pickUpAvailability.removeAttribute("available"),
          (pickUpAvailability.innerHTML = "")));
  }
  removeErrorMessage() {
    this.productForm &&
      this.productForm.closest("product-form")?.handleErrorMessage();
  }
  renderProductInfo() {
    const requestedVariantId = this.currentVariant.id;
    fetch(
      `${this.dataset.url}?variant=${requestedVariantId}&section_id=${this.sourceSectionId}`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        return response.text();
      })
      .then((responseText) => {
        if (this.currentVariant.id !== requestedVariantId) return;
        const html = new DOMParser().parseFromString(responseText, "text/html"),
          updateSourceFromDestination = (
            id,
            needReplace = !0,
            replaceSelectors,
            shouldHide = (source) => !1
          ) => {
            const source = html.getElementById(`${id}-${this.sourceSectionId}`),
              destination = document.getElementById(
                `${id}-${this.dataset.section}`
              );
            source &&
              destination &&
              (needReplace &&
                (replaceSelectors == null || replaceSelectors.length <= 0
                  ? (destination.innerHTML = source.innerHTML)
                  : replaceSelectors.forEach((selector) => {
                      const destinationEle =
                          destination.querySelector(selector),
                        sourceEle = source.querySelector(selector);
                      destinationEle &&
                        sourceEle &&
                        destinationEle.replaceWith(sourceEle);
                    })),
              destination.classList.toggle("hidden", shouldHide(source)));
          },
          addCartButtonSource = html.getElementById(
            `Product-Submit-Button-${this.sourceSectionId}`
          );
        this.toggleAddButtonStatus(
          addCartButtonSource
            ? addCartButtonSource.hasAttribute("disabled")
            : !0,
          addCartButtonSource
            ? addCartButtonSource.querySelector(".button-text").innerText
            : window.variantStrings.soldOut
        ),
          updateSourceFromDestination("Price"),
          updateSourceFromDestination(
            "Inventory",
            !0,
            null,
            ({ innerHTML }) => innerHTML === ""
          ),
          updateSourceFromDestination(
            "Sku",
            !0,
            null,
            ({ innerHTML }) => innerHTML === ""
          ),
          updateSourceFromDestination("Share-Link"),
          updateSourceFromDestination("Product-Gift"),
          updateSourceFromDestination("Product-Mini-Checkout", !0, [
            ".product-image",
            ".product-content",
          ]),
          updateSourceFromDestination(
            "Notify-Email-Button",
            !1,
            null,
            ({ classList }) => classList.contains("hidden")
          ),
          updateSourceFromDestination("Notify-Email"),
          initializeScrollLazyImageTrigger(),
          initializeToolTipTrigger(),
          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId: this.dataset.section,
              html,
              variant: this.currentVariant,
            },
          });
      })
      .catch((error) => {
        popToast(window.variantStrings.unknownError, "error");
      });
  }
  toggleAddButtonStatus(disable = !0, text) {
    if (!this.productForm) return;
    const addCartButtons = this.productForm.querySelectorAll(
        'button[type="submit"]'
      ),
      dynamicCheckout = this.productForm.querySelector(".dynamic-checkout");
    disable
      ? (addCartButtons.forEach((addButton) => {
          if ((addButton.setAttribute("disabled", "disabled"), !text)) return;
          const addButtonTextElement = addButton.querySelector(".button-text");
          addButtonTextElement && (addButtonTextElement.textContent = text);
        }),
        dynamicCheckout && text && dynamicCheckout.classList.add("hidden"))
      : (addCartButtons.forEach((button) => {
          button.removeAttribute("disabled");
          const addButtonTextElement = button.querySelector(".button-text");
          addButtonTextElement &&
            (addButtonTextElement.textContent =
              text || window.variantStrings.addToCart);
        }),
        dynamicCheckout && dynamicCheckout.classList.remove("hidden"));
  }
  setUnavailable() {
    [
      `Price-${this.dataset.section}`,
      `Inventory-${this.dataset.section}`,
      `Sku-${this.dataset.section}`,
      `Price-Per-Item-${this.dataset.section}`,
    ].forEach((id) => {
      const element = document.getElementById(id);
      element && element.classList.add("hidden");
    });
  }
  getVariantData() {
    return (
      (this.variantData =
        this.variantData ||
        JSON.parse(
          this.querySelector('[type="application/json"]').textContent
        )),
      this.variantData
    );
  }
  get sourceSectionId() {
    return this.dataset.originalSection || this.dataset.section;
  }
}
customElements.define("variant-selects", VariantSelects);
class ProductRecommendations extends HTMLElement {
  constructor() {
    super(),
      (this.obsever = new IntersectionObserver(
        (entries, observer) => {
          entries[0].isIntersecting &&
            (observer.unobserve(this), this.fetchData());
        },
        { rootMargin: "0px 0px 400px 0px" }
      )),
      this.obsever.observe(this);
  }
  disconnectedCallback() {
    this.obsever && this.obsever.disconnect();
  }
  fetchData() {
    fetch(this.dataset.url)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        return response.text();
      })
      .then((text) => {
        this.renderHtml(text);
      })
      .catch((error) => {
        popToast(window.variantStrings.unknownError, "error");
      });
  }
  renderHtml(html) {
    const sourceRecommendationMain = new DOMParser()
      .parseFromString(html, "text/html")
      .querySelector(".recommendation-main");
    sourceRecommendationMain
      ? (this.querySelector(".products-container").innerHTML =
          sourceRecommendationMain.outerHTML)
      : this.remove(),
      initializeScrollLazyImageTrigger(),
      initializeToolTipTrigger();
  }
}
customElements.define("product-recommendations", ProductRecommendations);
class ProductCard extends HTMLElement {
  constructor() {
    super(),
      (this.colorSwatches = this.querySelector(".color-swatches")),
      this.colorSwatches && this.initSwatchHandle();
  }
  initSwatchHandle() {
    this.colorSwatches.querySelectorAll(".color-swatch").forEach((swatch) => {
      swatch.addEventListener("click", this.onSwatchClick.bind(this));
    });
  }
  onSwatchClick(event) {
    event.stopPropagation();
    const swatch = event.currentTarget,
      currentSwatch = this.colorSwatches.querySelector(".color-swatch.active"),
      index = swatch.getAttribute("data-index"),
      variantImage = this.querySelector(
        `.product-card-variant-image[data-index="${index}"]`
      );
    variantImage &&
      (currentSwatch && this.inActiveSwatch(currentSwatch),
      swatch !== currentSwatch && this.activeSwatch(swatch, variantImage));
  }
  activeSwatch(swatch, image) {
    swatch.classList.add("active"),
      this.classList.add("has-swatch-active"),
      image.classList.remove("hidden");
  }
  inActiveSwatch(swatch) {
    swatch.classList.remove("active"),
      this.classList.remove("has-swatch-active"),
      this.querySelector(
        `.product-card-variant-image[data-index="${swatch.getAttribute(
          "data-index"
        )}"]`
      )?.classList.add("hidden");
  }
}
customElements.define("product-card", ProductCard);
class StickyScroll extends HTMLElement {
  constructor() {
    super(),
      !(this.hasAttribute("data-mobile-disabled") && isMobileScreen()) &&
        ((this.hasListenWindowScroll = !1),
        (this.inView = !1),
        (this.preStatus = 0),
        (this.currentStatus = 0),
        (this.stickyContainer = this.querySelector(".sticky-scroll-container")),
        this.stickyContainer &&
          ((this.changeRatio = 0),
          (this.stickyScrollDistance =
            parseInt(this.getAttribute("data-sticky-distance")) || 0),
          this.getTriggerOffset(),
          (this.topHalt = parseInt(this.getAttribute("data-top-halt")) || 0),
          (this.bottomHalt =
            parseInt(this.getAttribute("data-bottom-halt")) || 0),
          !(
            this.stickyScrollDistance > 0 &&
            this.stickyScrollDistance - this.topHalt - this.bottomHalt <= 0
          ) &&
            ((this.containerHeight = this.offsetHeight),
            (this.boundHandleScrollEffect = this.handleScrollEffect.bind(this)),
            this.hasAttribute("data-initialized") || this.initializeHeight(),
            this.observeScrollIntoView())));
  }
  disconnectedCallback() {
    this.observer && this.observer.disconnect();
  }
  observeScrollIntoView() {
    (this.observer = new IntersectionObserver(
      (entries) => {
        (this.inView = entries[0].isIntersecting),
          this.inView &&
            this.hasAttribute("data-initialized") &&
            this.referencePageScrollY == null &&
            this.getReferenceScrollY(),
          this.inView
            ? this.listenWindowScroll()
            : this.removeListenWindowScroll();
      },
      { root: null, rootMargin: "0px 0px -200px 0px", threshold: 0 }
    )),
      this.observer.observe(this);
  }
  getTriggerOffset() {
    this.triggerPosition = this.getAttribute("data-trigger-position") || "top";
    const clientHeight = document.documentElement.clientHeight;
    this.triggerPosition === "top"
      ? (this.triggerOffset = 0)
      : this.triggerPosition === "center"
      ? (this.triggerOffset = clientHeight / 2)
      : (this.triggerOffset = clientHeight);
  }
  getReferenceScrollY() {
    const rect = this.getBoundingClientRect(),
      pageScrollTop = window.scrollY || document.documentElement.scrollTop;
    this.referencePageScrollY = pageScrollTop + rect.top - this.triggerOffset;
  }
  listenWindowScroll() {
    this.hasListenWindowScroll ||
      (window.addEventListener("scroll", this.boundHandleScrollEffect),
      (this.hasListenWindowScroll = !0));
  }
  removeListenWindowScroll() {
    this.hasListenWindowScroll &&
      (window.removeEventListener("scroll", this.boundHandleScrollEffect),
      (this.hasListenWindowScroll = !1));
  }
  initializeHeight() {
    (this.style.height = `${
      this.containerHeight + this.stickyScrollDistance
    }px`),
      this.setAttribute("data-initialized", "true");
  }
  handleScrollEffect() {
    const currentPageScrollY =
        window.scrollY || document.documentElement.scrollTop,
      rect = this.getBoundingClientRect();
    if (
      rect.top <= this.triggerOffset &&
      rect.bottom > document.documentElement.clientHeight
    ) {
      const ratio =
        (currentPageScrollY - this.referencePageScrollY - this.topHalt) /
        (this.stickyScrollDistance +
          this.triggerOffset -
          this.topHalt -
          this.bottomHalt);
      this.changeRatio = Math.min(1, Math.max(0, ratio));
    } else
      rect.top > this.triggerOffset
        ? (this.changeRatio = 0)
        : (this.changeRatio = 1);
    this.changeRatio <= 0
      ? (this.currentStatus = 0)
      : this.changeRatio >= 1
      ? (this.currentStatus = 2)
      : (this.currentStatus = 1),
      this.preStatus !== this.currentStatus &&
        (this.currentStatus === 1
          ? (this.classList.add("sticky-scroll--effect"),
            this.classList.remove("sticky-scroll--end"))
          : this.currentStatus === 2
          ? (this.classList.add("sticky-scroll--end"),
            this.classList.remove("sticky-scroll--effect"))
          : (this.classList.remove("sticky-scroll--effect"),
            this.classList.remove("sticky-scroll--end"))),
      (this.preStatus = this.currentStatus),
      this.style.setProperty("--change-ratio", this.changeRatio);
  }
}
customElements.define("sticky-scroll", StickyScroll);
class IncrementNumber extends HTMLElement {
  constructor() {
    super(),
      (this.start = 0),
      (this.currentNumber = 0),
      (this.observer = new IntersectionObserver(
        (entries, observer) => {
          entries[0].isIntersecting && (this.init(), observer.disconnect());
        },
        { root: null, rootMargin: "-300px 0px -300px 0px" }
      )),
      this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer && this.observer.disconnect();
  }
  init() {
    const textContent = this.textContent,
      numberMatch = textContent.match(/\d+/);
    numberMatch &&
      ((this.targetNumber = parseInt(numberMatch[0], 10)),
      (this.remainingText = textContent.replace(numberMatch[0], "")),
      (this.duration = parseInt(this.getAttribute("data-duration"), 10) || 2e3),
      (this.startTime = Date.now()),
      this.updateNumber());
  }
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
  updateNumber() {
    const elapsedTime = Date.now() - this.startTime,
      progress = Math.min(elapsedTime / this.duration, 1),
      easedProgress = this.easeInOutQuad(progress);
    (this.currentNumber = Math.floor(
      this.start + easedProgress * (this.targetNumber - this.start)
    )),
      (this.textContent = this.currentNumber + this.remainingText),
      progress < 1 && requestAnimationFrame(this.updateNumber.bind(this));
  }
}
customElements.define("increment-number", IncrementNumber);
class TypingWords extends HTMLElement {
  constructor() {
    super(),
      (this.index = 0),
      (this.observer = new IntersectionObserver((entries, observer) => {
        entries[0].isIntersecting &&
          ((this.text = this.getAttribute("data-text") || ""),
          (this.interval = this.getAttribute("data-interval")
            ? parseInt(this.getAttribute("data-interval"))
            : 10),
          this.initTyping(),
          observer.disconnect());
      })),
      this.observer.observe(this);
  }
  disconnectedCallback() {
    this.observer && this.observer.disconnect(), this.clearTimers();
  }
  clearTimers() {
    this.timer && clearInterval(this.timer),
      this.restartTimer && clearTimeout(this.restartTimer);
  }
  initTyping() {
    (this.textContent = ""),
      (this.index = 0),
      (this.timer = setInterval(() => this.type(), 150));
  }
  type() {
    this.index < this.text.length
      ? ((this.textContent += this.text.charAt(this.index)), this.index++)
      : (clearInterval(this.timer),
        (this.restartTimer = setTimeout(
          () => this.initTyping(),
          this.interval * 1e3
        )));
  }
}
customElements.define("typing-words", TypingWords);
class CustomCopyText extends HTMLElement {
  constructor() {
    super();
    const debounceHandle = debounce(() => {
      if (typeof Shopify < "u" && Shopify.designMode)
        return popToast(window.copyStrings.copyDisabled, "warning");
      navigator.clipboard
        .writeText(this.getAttribute("data-text"))
        .then(() => {
          popToast(this.getAttribute("data-message"), "success");
        })
        .catch((err) => {
          popToast(window.copyStrings.copyFailed, "error");
        });
    }, 500);
    this.addEventListener("click", debounceHandle),
      this.addEventListener("keydown", (event) => {
        const key = event.code ? event.code.toUpperCase() : "";
        (key === "ENTER" || key === "SPACE") &&
          (event.preventDefault(), debounceHandle());
      });
  }
}
customElements.define("custom-copy-text", CustomCopyText);
class LinkForm extends HTMLElement {
  constructor() {
    super(), this.addEventListener("click", this.onItemClick.bind(this));
  }
  onItemClick(event) {
    if (event.target.tagName !== "A") return;
    event.preventDefault();
    const form = this.querySelector("form");
    if (!form) return;
    const input = this.querySelector("input.link-value");
    input && (input.value = event.target.dataset.value), form.submit();
  }
}
customElements.define("link-form", LinkForm);
class ShowMoreButton extends HTMLElement {
  constructor() {
    super(),
      (this.parentDisplay = this.closest(".show-more-parent")),
      this.parentDisplay &&
        this.addEventListener("click", (event) => {
          this.toggleItems(event);
        });
  }
  toggleItems(event) {
    this.querySelectorAll(".label-text").forEach((element) =>
      element.classList.toggle("hidden")
    ),
      this.parentDisplay
        .querySelectorAll(".show-more-item")
        .forEach((item) => item.classList.toggle("hidden"));
  }
}
customElements.define("show-more-button", ShowMoreButton);
//# sourceMappingURL=/cdn/shop/t/2/assets/global.js.map?v=145399708028671527791735659363
