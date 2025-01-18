customElements.get("product-gallery-modal") ||
  customElements.define(
    "product-gallery-modal",
    class extends ModalDialog {
      constructor() {
        super(),
          (this.slider = this.querySelector("slider-component")),
          (this.tip = this.querySelector(".modal-tip"));
      }
      show(opener) {
        super.show(opener),
          setTimeout(() => this.showActiveMedia(), 50),
          this.timer && clearTimeout(this.timer),
          this.tip.classList.add("active"),
          (this.timer = setTimeout(() => {
            this.tip.classList.remove("active");
          }, 5e3));
      }
      showActiveMedia() {
        const mediaId = this.openedBy.getAttribute("data-media-id");
        if (mediaId && this.slider && this.slider.initSliderStatus) {
          const currentSlideElement = this.slider.querySelector(
            `.slider-slide[data-media-id='${mediaId}']`
          );
          if (!currentSlideElement) return;
          this.slider.slideByElement(currentSlideElement),
            currentSlideElement.querySelector(".deferred-media") &&
              currentSlideElement
                .querySelector(".deferred-media")
                .loadContent();
        }
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/product-gallery-modal.js.map?v=36238088347880717751736326176
