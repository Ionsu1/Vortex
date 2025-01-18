customElements.get("compare-table") ||
  customElements.define(
    "compare-table",
    class extends HTMLElement {
      constructor() {
        super(),
          this.querySelectorAll(
            "[data-swatch-synergy] .color-swatches"
          ).forEach((swatches) => {
            swatches.addEventListener("click", this.onSwatchesClick.bind(this));
          });
      }
      onSwatchesClick(event) {
        event.stopPropagation();
        const swatch = event.target.closest(".color-swatch");
        if (!swatch) return;
        const index = swatch.getAttribute("data-index"),
          column = swatch.closest("td").dataset.id,
          currentSwatch = event.currentTarget.querySelector(
            ".color-swatch.active"
          );
        currentSwatch && this.toggleSwatch(currentSwatch, column, !1),
          swatch !== currentSwatch && this.toggleSwatch(swatch, column);
      }
      toggleSwatch(swatch, column, active = !0) {
        const variantImage = this.querySelector(
          `.product-variant-image[data-index='${column}-${swatch.dataset.index}']`
        );
        variantImage &&
          (active
            ? (swatch.classList.add("active"),
              variantImage.classList.remove("hidden"),
              variantImage.parentElement.classList.add("has-swatch-active"))
            : (swatch.classList.remove("active"),
              variantImage.classList.add("hidden"),
              variantImage.parentElement.classList.remove(
                "has-swatch-active"
              )));
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/compare-table.js.map?v=37022766458508816951731541615
