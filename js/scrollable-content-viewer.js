customElements.get("scrollable-content-viewer") ||
  customElements.define(
    "scrollable-content-viewer",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.initScrollableStatus = !1),
          (this.DRAG_THRESHOLD = 100),
          (this.TRANSITION_DURING = 300),
          (this.currentTranslate = 0),
          (this.isClicking = !1),
          (this.isDragging = !1),
          (this.lastWindowWidth = window.innerWidth),
          (this.scrollableWrapper = this.querySelector(
            ".scrollable-content-wrapper"
          )),
          this.scrollableWrapper &&
            ((this.prevButton = this.querySelector('button[name="previous"]')),
            (this.nextButton = this.querySelector('button[name="next"]')),
            this.install(),
            (window.Shopify.designMode || window.debug) &&
              ((this.debounceWindowSizeChangeHandler = debounce(
                this.onWindowSizeChange.bind(this),
                500
              )),
              window.addEventListener(
                "resize",
                this.debounceWindowSizeChangeHandler
              )));
      }
      disconnectedCallback() {
        this.debounceWindowSizeChangeHandler &&
          window.removeEventListener(
            "resize",
            this.debounceWindowSizeChangeHandler
          );
      }
      install() {
        if (
          this.initScrollableStatus ||
          (this.updateScrollableMetrics(),
          this.updateInfo(),
          this.maxTranslateValue <= 0)
        )
          return;
        const onNavButtonClickFunction = debounce(
          this.onNavButtonClick.bind(this),
          200
        );
        (this.boundOnNavButtonClick = (event) => {
          event.preventDefault();
          const direction = event.currentTarget.name;
          onNavButtonClickFunction(direction);
        }),
          this.prevButton &&
            this.prevButton.addEventListener(
              "click",
              this.boundOnNavButtonClick
            ),
          this.nextButton &&
            this.nextButton.addEventListener(
              "click",
              this.boundOnNavButtonClick
            ),
          this.hasAttribute("data-draggable") &&
            ((this.boundDragStart = this.onDragStart.bind(this)),
            (this.boundDragMove = this.onDragMove.bind(this)),
            (this.boundDragEnd = this.onDragEnd.bind(this)),
            this.addEventListener("mousedown", this.boundDragStart, {
              passive: !0,
            }),
            this.addEventListener("touchstart", this.boundDragStart, {
              passive: !0,
            })),
          this.enableTransition(),
          this.toggleStatus(!0);
      }
      reInstall() {
        this.initScrollableStatus && this.uninstall(), this.install();
      }
      uninstall() {
        this.clearTranslation(),
          this.prevButton &&
            this.prevButton.removeEventListener(
              "click",
              this.boundOnNavButtonClick
            ),
          this.nextButton &&
            this.nextButton.removeEventListener(
              "click",
              this.boundOnNavButtonClick
            ),
          this.hasAttribute("data-draggable") &&
            (this.boundDragStart &&
              (this.removeEventListener("mousedown", this.boundDragStart),
              this.removeEventListener("touchstart", this.boundDragStart)),
            this.boundDragMove &&
              (this.removeEventListener("mousemove", this.boundDragMove),
              this.removeEventListener("touchmove", this.boundDragMove)),
            this.boundDragEnd &&
              (this.removeEventListener("mouseup", this.boundDragEnd),
              this.removeEventListener("touchend", this.boundDragEnd))),
          this.rafId && cancelAnimationFrame(this.rafId),
          this.toggleStatus(!1);
      }
      updateScrollableMetrics() {
        const wrapperRect = this.scrollableWrapper.getBoundingClientRect(),
          firstChildRect =
            this.scrollableWrapper.firstElementChild.getBoundingClientRect(),
          lastChildRect =
            this.scrollableWrapper.lastElementChild.getBoundingClientRect();
        (this.scrollableClientSize = wrapperRect.width),
          (this.scrollableTotalSize =
            lastChildRect.right - firstChildRect.left),
          (this.maxTranslateValue =
            this.scrollableTotalSize - this.scrollableClientSize);
      }
      toggleStatus(status = !1) {
        (this.initScrollableStatus = status),
          this.classList.toggle("scrollable--installed", status);
      }
      onNavButtonClick(direction = "next") {
        this.slideContentByScreen(direction);
      }
      onWindowSizeChange() {
        const currentWidth = window.innerWidth;
        currentWidth !== this.lastWindowWidth &&
          (this.reInstall(), (this.lastWindowWidth = currentWidth));
      }
      slideContentByScreen(direction = "next") {
        this.initScrollableStatus &&
          (direction === "next"
            ? (this.currentTranslate = ceilToMultiple(
                this.currentTranslate + 5,
                this.scrollableClientSize
              ))
            : (this.currentTranslate = floorToMultiple(
                this.currentTranslate - 5,
                this.scrollableClientSize
              )),
          this.enableTransition(),
          this.applyTranslation(),
          this.updateInfo());
      }
      slideContentByItem(itemElement) {
        if (
          !itemElement ||
          !this.initScrollableStatus ||
          itemElement.parentElement !== this.scrollableWrapper
        )
          return;
        const itemRect = itemElement.getBoundingClientRect(),
          firstElementRect =
            this.scrollableWrapper.firstElementChild.getBoundingClientRect();
        (this.currentTranslate =
          itemRect.left - firstElementRect.left - firstElementRect.width / 2),
          this.enableTransition(),
          this.applyTranslation(),
          this.updateInfo();
      }
      applyTranslation() {
        this.correctTranslate(),
          (this.scrollableWrapper.style.transform = `translateX(${-this
            .currentTranslate}px)`);
      }
      correctTranslate() {
        let threshold = 0;
        this.isClicking && (threshold = this.DRAG_THRESHOLD);
        const boundary = [-threshold, this.maxTranslateValue + threshold];
        this.currentTranslate > boundary[1]
          ? ((this.currentTranslate = boundary[1]),
            this.setAttribute("data-move-exceed", "next"))
          : this.currentTranslate < boundary[0]
          ? ((this.currentTranslate = boundary[0]),
            this.setAttribute("data-move-exceed", "pre"))
          : this.removeAttribute("data-move-exceed");
      }
      onDragStart(event) {
        document.addEventListener("mousemove", this.boundDragMove),
          document.addEventListener("mouseup", this.boundDragEnd),
          document.addEventListener("touchmove", this.boundDragMove),
          document.addEventListener("touchend", this.boundDragEnd),
          (this.isClicking = !0),
          (this.isDragging = !1),
          event.touches
            ? (this.dragStartPos = event.touches[0].clientX)
            : (this.dragStartPos = event.clientX),
          (this.currentPos = this.dragStartPos),
          (this.preTranslate = this.currentTranslate),
          this.disableTransition();
      }
      onDragMove(event) {
        if (!this.isClicking) return;
        event.touches
          ? (this.currentPos = event.touches[0].clientX)
          : (this.currentPos = event.clientX);
        const dragOffset = this.dragStartPos - this.currentPos;
        Math.abs(dragOffset) > 1 &&
          (event.preventDefault(),
          (this.isDragging = !0),
          this.classList.add("scrollable--is-dragging"),
          this.rafId && cancelAnimationFrame(this.rafId),
          (this.rafId = requestAnimationFrame(() => {
            (this.currentTranslate = this.preTranslate + dragOffset),
              this.applyTranslation();
          })));
      }
      onDragEnd(event) {
        document.removeEventListener("mousemove", this.boundDragMove),
          document.removeEventListener("mouseup", this.boundDragEnd),
          document.addEventListener("touchmove", this.boundDragMove),
          document.addEventListener("touchend", this.boundDragEnd),
          (this.isClicking = !1),
          this.isDragging &&
            (event.stopPropagation(),
            this.classList.remove("scrollable--is-dragging"),
            this.rafId && cancelAnimationFrame(this.rafId),
            this.slideContentByScreen(
              this.dragStartPos - this.currentPos > 0 ? "next" : "previous"
            ));
      }
      updateInfo() {
        this.prevButton &&
          this.prevButton.toggleAttribute(
            "disabled",
            this.currentTranslate <= 0
          ),
          this.nextButton &&
            this.nextButton.toggleAttribute(
              "disabled",
              this.currentTranslate >= this.maxTranslateValue
            );
      }
      disableTransition() {
        this.scrollableWrapper.style.transition = "";
      }
      enableTransition() {
        this.scrollableWrapper.style.transition = `transform ${this.TRANSITION_DURING}ms`;
      }
      clearTranslation() {
        (this.currentTranslate = 0), (this.scrollableWrapper.style = "");
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/scrollable-content-viewer.js.map?v=154340165641291606711735204813
