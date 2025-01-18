class SliderBasicHandler {
  constructor(slider) {
    (this.slider = slider),
      (this.prevButton = this.slider.querySelector('button[name="previous"]')),
      (this.nextButton = this.slider.querySelector('button[name="next"]')),
      (this.pageDotsWrapper = this.slider.querySelector(".slider-page-dots")),
      (this.counterWrapper = this.slider.querySelector(".slider-counter")),
      this.initModule();
  }
  onButtonClick(direction) {
    this.slider.slideByDirection(direction);
  }
  onPageLinkClick(event) {
    const page = parseInt(event.currentTarget.dataset.page);
    this.slider.slideByPage(page);
  }
  initModule() {
    const onButtonClickFunction = debounce(this.onButtonClick.bind(this), 200);
    (this.boundOnButtonClick = (event) => {
      const direction = event.currentTarget.name;
      onButtonClickFunction(direction);
    }),
      (this.pageCount = this.slider.slideLength),
      this.slider.ifLoopingInfinite ||
        (this.pageCount =
          this.slider.slideLength - this.slider.slidesPerPage + 1),
      this.prevButton &&
        this.prevButton.addEventListener("click", this.boundOnButtonClick),
      this.nextButton &&
        this.nextButton.addEventListener("click", this.boundOnButtonClick),
      this.pageDotsWrapper && this.initPageDots(),
      this.counterWrapper && this.initCounter(),
      this.slider.addEventListener("keydown", (event) => {
        const key = event.code ? event.code.toUpperCase() : "";
        key === "ARROWLEFT" &&
          (event.preventDefault(), this.slider.slideByDirection("previous")),
          key === "ARROWRIGHT" &&
            (event.preventDefault(), this.slider.slideByDirection("next"));
      });
  }
  initPageDots() {
    if (this.pageDotsWrapper) {
      this.boundOnPageButtonClick = this.onPageLinkClick.bind(this);
      for (let i = 1; i <= this.pageCount; i++) {
        const link = document.createElement("li");
        (link.className = "page-dot"),
          link.setAttribute("data-page", i),
          link.setAttribute("tabindex", "0"),
          this.pageDotsWrapper.hasAttribute("data-number") &&
            (link.innerText = i.toString()),
          link.addEventListener("click", this.boundOnPageButtonClick),
          link.addEventListener("keydown", (event) => {
            const key = event.code ? event.code.toUpperCase() : "";
            (key === "ENTER" || key === "SPACE") &&
              (event.preventDefault(), this.boundOnPageButtonClick(event));
          }),
          this.pageDotsWrapper.appendChild(link);
      }
    }
  }
  initCounter() {
    const totalCounterElement =
      this.counterWrapper.querySelector(".total-page");
    totalCounterElement && (totalCounterElement.innerText = this.pageCount);
  }
  updateInfo(currentSlide = null, totalPage = 1) {
    if (!currentSlide) return;
    const currentPage = currentSlide.dataset.page;
    if (
      (this.pageDotsWrapper &&
        (this.pageDotsWrapper
          .querySelector("li.current")
          ?.classList.remove("current"),
        this.pageDotsWrapper
          .querySelector(`li[data-page="${currentPage}"]`)
          ?.classList.add("current")),
      this.counterWrapper)
    ) {
      const currentCounterElement =
        this.counterWrapper.querySelector(".current-page");
      currentCounterElement && (currentCounterElement.innerText = currentPage);
    }
    this.slider.ifEnableLooping ||
      (this.prevButton &&
        this.prevButton.toggleAttribute("disabled", currentPage <= 1),
      this.nextButton &&
        this.nextButton.toggleAttribute("disabled", currentPage >= totalPage));
  }
  unmount() {
    this.prevButton &&
      this.prevButton.removeEventListener("click", this.boundOnButtonClick),
      this.nextButton &&
        this.nextButton.removeEventListener("click", this.boundOnButtonClick),
      this.pageDotsWrapper && (this.pageDotsWrapper.innerHTML = "");
  }
}
class SliderAutoplay {
  constructor(slider, interval, reverse = !1, focusPause = !1) {
    (this.slider = slider),
      (this.interval = interval),
      (this.autoInterval = null),
      (this.direction = reverse ? "previous" : "next"),
      (this.focusPause = focusPause),
      (this.toggleAutoplayButton = this.slider.querySelector(
        ".slider-toggle-autoplay-button"
      )),
      (this.ifPaused = !1),
      (this.startTime = null),
      (this.spendTime = null),
      (this.leftTime = this.interval),
      this.initMount();
  }
  play(refresh = !1) {
    refresh &&
      (this.autoInterval && clearTimeout(this.autoInterval),
      (this.startTime = null),
      (this.leftTime = this.interval)),
      (this.ifPaused = !1),
      this.slider.classList.add("slider--is-playing"),
      this.#doPlay();
  }
  #doPlay() {
    this.slider.hasAttribute("editor-selected") ||
      this.ifPaused ||
      ((this.startTime = Date.now()),
      (this.autoInterval = setTimeout(() => {
        this.slider.slideByDirection(this.direction),
          (this.leftTime = this.interval);
      }, this.leftTime)));
  }
  pause() {
    this.autoInterval &&
      ((this.ifPaused = !0),
      clearTimeout(this.autoInterval),
      (this.autoInterval = null),
      this.startTime &&
        ((this.spendTime = Date.now() - this.startTime),
        (this.leftTime = this.leftTime - this.spendTime)),
      this.slider.classList.remove("slider--is-playing"));
  }
  toggleAutoplayHandling() {
    this.ifPaused ? this.play() : this.pause();
  }
  focusInHandling() {
    this.pause();
  }
  focusOutHandling() {
    this.play();
  }
  initMount() {
    this.focusPause &&
      ((this.boundFocusInHandling = this.focusInHandling.bind(this)),
      (this.boundFocusOutHandling = this.focusOutHandling.bind(this)),
      this.slider.addEventListener("mouseover", this.boundFocusInHandling),
      this.slider.addEventListener("mouseleave", this.boundFocusOutHandling),
      this.slider.addEventListener("focusin", this.boundFocusInHandling),
      this.slider.addEventListener("focusout", this.boundFocusOutHandling)),
      this.toggleAutoplayButton &&
        ((this.boundToggleHandling = this.toggleAutoplayHandling.bind(this)),
        this.toggleAutoplayButton.addEventListener(
          "click",
          this.boundToggleHandling
        ));
  }
  unmount() {
    this.focusPause &&
      (this.slider.removeEventListener("mouseover", this.boundFocusInHandling),
      this.slider.removeEventListener("mouseleave", this.boundFocusOutHandling),
      this.slider.removeEventListener("focusin", this.boundFocusInHandling),
      this.slider.removeEventListener("focusout", this.boundFocusOutHandling)),
      this.toggleAutoplayButton &&
        this.toggleAutoplayButton.removeEventListener(
          "click",
          this.boundToggleHandling
        );
  }
}
class SliderDrag {
  constructor(slider, smooth = !0) {
    (this.DRAG_MOVE_RATE = 1.5),
      (this.slider = slider),
      (this.smooth = smooth),
      (this.isClicking = !1),
      (this.isDragging = !1),
      (this.dragStartPos = null),
      (this.boundDragStart = this.onDragStart.bind(this)),
      (this.boundDragMove = this.onDragMove.bind(this)),
      (this.boundDragEnd = this.onDragEnd.bind(this)),
      this.bindEventListener();
  }
  onDragStart(event) {
    document.addEventListener("mousemove", this.boundDragMove, { passive: !0 }),
      document.addEventListener("mouseup", this.boundDragEnd, { passive: !0 }),
      document.addEventListener("touchmove", this.boundDragMove, {
        passive: !1,
      }),
      document.addEventListener("touchend", this.boundDragEnd, { passive: !0 }),
      (this.isClicking = !0),
      (this.isDragging = !1),
      event.touches
        ? (this.dragStartPos = this.slider.ifLayoutVertical
            ? event.touches[0].clientY
            : event.touches[0].clientX)
        : (this.dragStartPos = this.slider.ifLayoutVertical
            ? event.clientY
            : event.clientX),
      (this.slider.preTranslate = this.slider.currentTranslate),
      this.slider.disableTransition();
  }
  onDragMove(event) {
    if (!this.isClicking) return;
    let currentPos = this.dragStartPos;
    event.touches
      ? (currentPos = this.slider.ifLayoutVertical
          ? event.touches[0].clientY
          : event.touches[0].clientX)
      : (currentPos = this.slider.ifLayoutVertical
          ? event.clientY
          : event.clientX);
    const dragOffset = this.dragStartPos - currentPos;
    Math.abs(dragOffset) > 1 &&
      (event.touches && event.cancelable && event.preventDefault(),
      (this.isDragging = !0),
      this.slider.classList.add("slider--is-dragging"),
      this.rafId && cancelAnimationFrame(this.rafId),
      (this.slider.currentTranslate =
        this.slider.preTranslate + dragOffset * this.DRAG_MOVE_RATE),
      this.smooth &&
        (this.rafId = requestAnimationFrame(() => {
          this.slider.applyTranslation();
        })));
  }
  onDragEnd(event) {
    document.removeEventListener("mousemove", this.boundDragMove),
      document.removeEventListener("mouseup", this.boundDragEnd),
      document.removeEventListener("touchmove", this.boundDragMove),
      document.removeEventListener("touchend", this.boundDragEnd),
      (this.isClicking = !1),
      this.isDragging &&
        (event.stopPropagation(),
        this.slider.classList.remove("slider--is-dragging"),
        this.rafId && cancelAnimationFrame(this.rafId),
        this.slider.enableTransition(),
        this.slider.currentTranslate !== this.slider.preTranslate &&
          (this.updateIndexAfterDrag(), this.slider.performSlide()));
  }
  updateIndexAfterDrag() {
    const movedBy = this.slider.currentTranslate - this.slider.preTranslate,
      DRAG_THRESHOLD = this.slider.TRANSITION_THRESHOLD + 20;
    movedBy < 0
      ? (this.slider.index = Math.floor(
          (this.slider.currentTranslate + DRAG_THRESHOLD) /
            this.slider.sliderItemOffset
        ))
      : movedBy > 0 &&
        (this.slider.index = Math.ceil(
          Math.max(0, this.slider.currentTranslate - DRAG_THRESHOLD) /
            this.slider.sliderItemOffset
        ));
  }
  bindEventListener() {
    this.slider.sliderContainer.addEventListener(
      "mousedown",
      this.boundDragStart,
      { passive: !0 }
    ),
      this.slider.sliderContainer.addEventListener(
        "touchstart",
        this.boundDragStart,
        { passive: !0 }
      );
  }
  unmount() {
    this.slider.sliderContainer.removeEventListener(
      "mousedown",
      this.boundDragStart
    ),
      document.removeEventListener("mousemove", this.boundDragMove),
      document.removeEventListener("mouseup", this.boundDragEnd),
      this.slider.sliderContainer.removeEventListener(
        "touchstart",
        this.boundDragStart
      ),
      document.removeEventListener("touchmove", this.boundDragMove),
      document.removeEventListener("touchend", this.boundDragEnd);
  }
}
class SliderWheel {
  constructor(slider) {
    (this.slider = slider),
      (this.SCROLL_THRESHOLD = 60),
      (this.boundHandleWheel = this.handleWheel.bind(this)),
      this.bindEventListener();
  }
  handleWheel(event) {
    if (
      (event.deltaY > 0 && this.slider.index < this.slider.totalPages - 1) ||
      (event.deltaY < 0 && this.slider.index > 0)
    )
      event.stopPropagation();
    else return;
    if (
      event.deltaY > this.SCROLL_THRESHOLD &&
      this.slider.index < this.slider.totalPages - 1
    )
      this.slider.index++;
    else if (event.deltaY < -this.SCROLL_THRESHOLD && this.slider.index > 0)
      this.slider.index--;
    else return;
    this.slider.performSlide();
  }
  bindEventListener() {
    this.slider.addEventListener("wheel", this.boundHandleWheel, {
      passive: !0,
    });
  }
  unmount() {
    this.slider.removeEventListener("wheel", this.boundHandleWheel);
  }
}
class SliderInfiniteLoop {
  constructor(slider) {
    (this.slider = slider),
      this.paddingSlides(),
      this.slider.addEventListener(
        "sliderChanged",
        this.onSlideChange.bind(this)
      );
  }
  paddingSlides() {
    const {
        slidesPerPage,
        slideLength: totalSlides,
        sliderWrapper,
      } = this.slider,
      paddingCount = 2 * slidesPerPage - 1,
      fragmentAfter = document.createDocumentFragment(),
      fragmentBefore = document.createDocumentFragment();
    for (let i = 0; i < paddingCount; i++) {
      let cloneSlideItem = this.cloneSlide(i % totalSlides);
      cloneSlideItem && fragmentAfter.append(cloneSlideItem),
        (cloneSlideItem = this.cloneSlide(totalSlides - 1 - (i % totalSlides))),
        cloneSlideItem && fragmentBefore.prepend(cloneSlideItem);
    }
    this.slider.sliderWrapper.append(fragmentAfter),
      this.slider.sliderWrapper.prepend(fragmentBefore),
      this.slider.updateSliderMetrics(),
      (this.slider.index = paddingCount),
      typeof initializeScrollAnimationTrigger == "function" &&
        initializeScrollAnimationTrigger(),
      initializeScrollLazyImageTrigger(),
      initializeToolTipTrigger();
  }
  cloneSlide(fromIndex = null) {
    const cloneSlide = this.slider.sliderItems[fromIndex].cloneNode(!0);
    if (!cloneSlide) return !1;
    cloneSlide.classList.add("slider-slide--clone"),
      cloneSlide.setAttribute("data-clone-from", `#${cloneSlide.id}`),
      cloneSlide.setAttribute("data-page", fromIndex + 1),
      (cloneSlide.id = `${cloneSlide.id}-Clone`),
      cloneSlide.removeAttribute("data-shopify-editor-block"),
      cloneSlide.removeAttribute("tabindex");
    const elements = getFocusableElements(cloneSlide, !1);
    return (
      elements &&
        elements.length > 0 &&
        elements.forEach((element) => {
          element.setAttribute("tabindex", -1);
        }),
      cloneSlide
    );
  }
  removePaddings() {
    this.slider
      .querySelectorAll(".slider-slide--clone")
      .forEach((element) => element.remove());
  }
  onSlideChange(event) {
    if (event.target !== this.slider) return;
    const currentSlide = event.detail.currentElement;
    if (currentSlide && currentSlide.hasAttribute("data-clone-from")) {
      const cloneFromId = currentSlide.dataset.cloneFrom;
      cloneFromId &&
        setTimeout(() => {
          this.slider.slideById(cloneFromId, !0);
        }, 30);
    }
  }
  unmount() {
    this.removePaddings();
  }
}
class Slider extends HTMLElement {
  constructor() {
    if (
      (super(),
      (this.TRANSITION_DURING = 300),
      (this.DEFAULT_INTERVAL = 5e3),
      (this.TRANSITION_THRESHOLD = 50),
      (this.index = 0),
      (this.initSliderStatus = !1),
      (this.preTranslate = 0),
      (this.currentTranslate = 0),
      (this.lastWindowSize = window.innerWidth),
      (this.sliderContainer = this.querySelector(".slider-container")),
      (this.sliderWrapper = this.querySelector(".slider-wrapper")),
      !this.sliderContainer || !this.sliderWrapper)
    )
      return;
    this.initConfig(),
      (window.Shopify.designMode || window.debug) &&
        ((this.debounceWindowSizeChangeHandler = debounce(
          this.onWindowSizeChange.bind(this),
          500
        )),
        window.addEventListener(
          "resize",
          this.debounceWindowSizeChangeHandler
        )),
      new IntersectionObserver((entries, observer2) => {
        entries.forEach(
          (entry) => {
            entry.isIntersecting && (this.install(), observer2.unobserve(this));
          },
          { root: null, rootMargin: "100px", threshold: 0 }
        );
      }).observe(this);
  }
  disconnectedCallback() {
    this.uninstall(),
      this.debounceWindowSizeChangeHandler &&
        window.removeEventListener(
          "resize",
          this.debounceWindowSizeChangeHandler
        );
  }
  install() {
    this.initSliderStatus ||
      (isMobileScreen() && !this.ifSlideMobile) ||
      (!isMobileScreen() && !this.ifSlideDesktop) ||
      (this.hookBeforeInstall(),
      (this.index = 0),
      this.updateSliderMetrics(),
      this.verifyBeforeMountModules() &&
        (this.initPages(),
        this.mountModules(),
        this.initPosition(),
        this.toggleStatus(!0),
        this.hookAfterInstall()));
  }
  hookBeforeInstall() {}
  hookAfterInstall() {}
  uninstall() {
    this.autoplayHandler && this.autoplayHandler.pause(),
      this.unmountModules(),
      this.clearTranslation(),
      this.toggleStatus(!1);
  }
  reInstall() {
    this.initSliderStatus && this.uninstall(), this.install();
  }
  initConfig() {
    (this.ifSlideDesktop = this.hasAttribute("data-slide-desktop")),
      (this.ifSlideMobile = this.hasAttribute("data-slide-mobile")),
      (this.ifLayoutVertical = this.hasAttribute("data-layout-vertical")),
      (this.ifEnableAutoplay = this.hasAttribute("data-autoplay")),
      (this.ifReversePlay = this.hasAttribute("data-autoplay-reverse")),
      (this.interval = this.dataset.interval || this.DEFAULT_INTERVAL),
      (this.ifFocusPause = this.hasAttribute("data-focus-pause")),
      (this.ifSlideSmooth = this.hasAttribute("data-slide-smooth")),
      (this.ifeEnableDragging = this.hasAttribute("data-draggable")),
      (this.ifEnableWheeling = this.hasAttribute("data-wheelable")),
      (this.ifLoopingInfinite = this.hasAttribute("data-looping-infinite")),
      (this.ifEnableLooping =
        this.ifLoopingInfinite ||
        this.ifEnableAutoplay ||
        this.hasAttribute("data-looping")),
      (this.ifAriaLive = this.hasAttribute("aria-live")),
      (this.keepVideo = this.hasAttribute("data-keep-video"));
  }
  initPages() {
    this.sliderItems.forEach((sliderItem, index) => {
      sliderItem.setAttribute("data-page", index + 1);
    });
  }
  initPosition() {
    this.disableTransition(),
      this.performSlide(),
      setTimeout(() => {
        this.enableTransition();
      }, this.TRANSITION_DURING);
  }
  verifyBeforeMountModules() {
    return this.sliderTotalSize > this.sliderClientSize && this.totalPages > 1;
  }
  onWindowSizeChange() {
    let currentSize;
    this.ifLayoutVertical
      ? (currentSize = window.innerHeight)
      : (currentSize = window.innerWidth),
      currentSize !== this.lastWindowSize &&
        (this.reInstall(), (this.lastWindowSize = currentSize));
  }
  toggleStatus(status = !1) {
    (this.initSliderStatus = status),
      this.classList.toggle("slider--installed", status);
  }
  mountModules() {
    this.initSliderStatus ||
      ((this.BasicHandler = new SliderBasicHandler(this)),
      this.ifeEnableDragging &&
        (this.dragHandler = new SliderDrag(this, this.ifSlideSmooth)),
      this.ifEnableWheeling && (this.wheelHandler = new SliderWheel(this)),
      this.ifLoopingInfinite &&
        (this.seamLoopingHandler = new SliderInfiniteLoop(this)),
      this.ifEnableAutoplay &&
        (this.autoplayHandler = new SliderAutoplay(
          this,
          this.interval,
          this.ifReversePlay,
          this.ifFocusPause
        )));
  }
  unmountModules() {
    this.BasicHandler && this.BasicHandler.unmount(),
      this.ifeEnableDragging && this.dragHandler && this.dragHandler.unmount(),
      this.ifEnableWheeling && this.wheelHandler && this.wheelHandler.unmount(),
      this.ifEnableAutoplay &&
        this.autoplayHandler &&
        this.autoplayHandler.unmount(),
      this.ifLoopingInfinite &&
        this.seamLoopingHandler &&
        this.seamLoopingHandler.unmount(),
      Shopify.designMode &&
        this.shopifyDesignModelHandler &&
        this.shopifyDesignModelHandler.unmount();
  }
  updateSliderMetrics() {
    if (
      ((this.sliderItems = Array.from(
        this.sliderContainer.querySelectorAll('[id^="Slide-"]')
      ).filter(
        (slide) => slide.innerHTML.trim() !== "" && slide.offsetParent !== null
      )),
      (this.slideLength = this.sliderItems.length),
      this.slideLength <= 1)
    )
      return;
    let sliderContainerRect = this.sliderContainer.getBoundingClientRect();
    const sliderRect0 = this.sliderItems[0].getBoundingClientRect(),
      sliderRect1 = this.sliderItems[1].getBoundingClientRect(),
      sliderRectLast = this.sliderItems.at(-1).getBoundingClientRect();
    this.ifLayoutVertical
      ? ((this.sliderItemOffset = sliderRect1.top - sliderRect0.top),
        (this.sliderClientSize = sliderContainerRect.height),
        (this.sliderTotalSize = sliderRectLast.bottom - sliderRect0.top))
      : ((this.sliderItemOffset = sliderRect1.left - sliderRect0.left),
        (this.sliderClientSize = sliderContainerRect.width),
        (this.sliderTotalSize = sliderRectLast.right - sliderRect0.left)),
      !(this.sliderTotalSize <= this.sliderClientSize) &&
        ((this.slidesPerPage = Math.max(
          1,
          Math.round(this.sliderClientSize / this.sliderItemOffset)
        )),
        this.slideLength === this.slidesPerPage && this.slidesPerPage--,
        (this.maxTranslateValue = this.sliderTotalSize - this.sliderClientSize),
        (this.totalPages = this.slideLength - this.slidesPerPage + 1));
  }
  slideByDirection(direction = "next") {
    this.initSliderStatus &&
      ((this.index += direction === "previous" ? -1 : 1), this.performSlide());
  }
  slideByElement(element = null, silent = !1) {
    if (
      !this.initSliderStatus ||
      !element ||
      (element.hasAttribute("data-clone-from") &&
        (element = this.querySelector(element.getAttribute("data-clone-from"))),
      !element)
    )
      return !1;
    if (this.sliderItems.indexOf(element) >= 0)
      (this.index = this.sliderItems.indexOf(element)),
        silent && this.disableTransition(),
        this.performSlide(),
        silent &&
          setTimeout(this.enableTransition.bind(this), this.TRANSITION_DURING);
    else return !1;
  }
  slideByPage(page = 1, silent = !1) {
    if (!this.initSliderStatus || page < 1) return !1;
    const slide = this.sliderItems.find(
      (slide2) =>
        !slide2.hasAttribute("data-clone-from") &&
        parseInt(slide2.dataset.page) === page
    );
    this.slideByElement(slide, silent);
  }
  slideById(id, silent = !1) {
    if (!this.initSliderStatus || id == null || id === "") return !1;
    const slide = this.querySelector(id);
    if (!slide) return !1;
    this.slideByElement(slide, silent);
  }
  slideByOffset(offset = 0) {
    (this.currentTranslate += offset),
      this.applyTranslation(),
      this.updateInfo();
  }
  slideToVisible(index) {
    const slide = this.sliderItems[index];
    if (!slide || this.isVisibleSlide(slide)) return;
    const slideRect = slide.getBoundingClientRect(),
      containerRect = this.sliderContainer.getBoundingClientRect();
    let offset;
    slideRect.right >= containerRect.right
      ? (offset = slideRect.right - containerRect.right)
      : (offset = slideRect.left - containerRect.left),
      this.slideByOffset(offset);
  }
  performSlide() {
    this.correctIndex(),
      this.updateCurrentTranslate(),
      this.applyTranslation(),
      this.updateInfo();
  }
  updateCurrentTranslate() {
    (this.currentTranslate = this.index * this.sliderItemOffset),
      !this.ifLoopingInfinite &&
        (this.index <= 0
          ? (this.currentTranslate = 0)
          : this.index >= this.totalPages - 1 &&
            (this.currentTranslate = this.maxTranslateValue));
  }
  applyTranslation() {
    this.correctTranslate(),
      (this.sliderWrapper.style.transform = this.ifLayoutVertical
        ? `translate3d(0, ${-this.currentTranslate}px, 0)`
        : `translate3d(${-this.currentTranslate}px, 0, 0)`);
  }
  dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("sliderChanged", {
        bubbles: !0,
        detail: {
          currentIndex: this.index,
          currentElement: this.sliderItems[this.index],
        },
      })
    );
  }
  correctIndex() {
    this.ifEnableLooping
      ? this.index < 0
        ? (this.index = this.slideLength - this.slidesPerPage)
        : this.index > this.slideLength - this.slidesPerPage && (this.index = 0)
      : this.index < 0
      ? (this.index = 0)
      : this.index > this.slideLength - this.slidesPerPage &&
        (this.index = this.slideLength - this.slidesPerPage);
  }
  correctTranslate() {
    let threshold = 0;
    this.dragHandler &&
      this.dragHandler.isDragging &&
      (threshold = this.TRANSITION_THRESHOLD);
    const boundary = [-threshold, this.maxTranslateValue + threshold];
    this.currentTranslate > boundary[1]
      ? ((this.currentTranslate = boundary[1]),
        this.setAttribute("data-move-exceed", "next"))
      : this.currentTranslate < boundary[0]
      ? ((this.currentTranslate = boundary[0]),
        this.setAttribute("data-move-exceed", "pre"))
      : this.removeAttribute("data-move-exceed");
  }
  updateInfo() {
    const activeSlide = this.sliderItems.find((slide) =>
      slide.classList.contains("active")
    );
    (this.currentSlide = this.sliderItems[this.index]),
      activeSlide &&
        (activeSlide.classList.remove("active"),
        this.ifAriaLive && activeSlide.setAttribute("aria-hidden", "true")),
      this.currentSlide &&
        (this.currentSlide.classList.add("active"),
        this.ifAriaLive && this.currentSlide.removeAttribute("aria-hidden")),
      this.keepVideo ||
        (window.pauseAllMedia(this), window.playAllMedia(this.currentSlide)),
      setTimeout(this.dispatchChangeEvent.bind(this), this.TRANSITION_DURING),
      this.autoplayHandler && this.autoplayHandler.play(!0),
      this.BasicHandler.updateInfo(this.currentSlide, this.totalPages);
  }
  isVisibleSlide(element = null) {
    if (!element) return !1;
    const elementIndex = this.sliderItems.indexOf(element);
    return elementIndex === -1
      ? !1
      : elementIndex >= this.index &&
          elementIndex < this.index + this.slidesPerPage;
  }
  isCurrentSlide(element = null) {
    return element === this.sliderItems[this.index];
  }
  disableTransition() {
    this.sliderWrapper.style.transition = "";
  }
  enableTransition() {
    this.ifSlideSmooth &&
      (this.sliderWrapper.style.transition = `transform ${this.TRANSITION_DURING}ms`);
  }
  clearTranslation() {
    (this.index = 0),
      (this.preTranslate = 0),
      (this.currentTranslate = 0),
      (this.sliderWrapper.style.transition = ""),
      (this.sliderWrapper.style.transform = "");
  }
}
customElements.define("slider-component", Slider);
class ProductMediaSlider extends Slider {
  constructor() {
    super();
  }
}
customElements.define("product-media-slider", ProductMediaSlider);
class ProductThumbnailSlider extends Slider {
  constructor() {
    super();
  }
  correctIndex() {
    this.index < 0 ||
    (this.index > this.slideLength - this.slidesPerPage &&
      this.index < this.slideLength)
      ? (this.index = this.totalPages - 1)
      : this.index >= this.slideLength
      ? (this.index = 0)
      : this.index > 0 && (this.index = this.index - 1);
  }
}
customElements.define("product-thumbnail-slider", ProductThumbnailSlider);
//# sourceMappingURL=/cdn/shop/t/2/assets/slider.js.map?v=19513983324513046621735980153
