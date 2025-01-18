customElements.get("product-info") ||
  customElements.define(
    "product-info",
    class extends HTMLElement {
      cartUpdateUnsubscriber = void 0;
      variantChangeUnsubscriber = void 0;
      constructor() {
        super(),
          (this.quantityForm = this.querySelector(".quantity-selector")),
          (this.input = this.querySelector(".quantity-input")),
          !(!this.quantityForm || !this.input) &&
            ((this.currentVariant = this.querySelector(
              "input.product-variant-id"
            )),
            (this.submitButton = this.querySelector('button[type="submit"]')),
            this.setQuantityBoundries(),
            this.dataset.originalSection ||
              (this.cartUpdateUnsubscriber = subscribe(
                PUB_SUB_EVENTS.cartUpdate,
                this.fetchQuantityRules.bind(this)
              )),
            (this.variantChangeUnsubscriber = subscribe(
              PUB_SUB_EVENTS.variantChange,
              (event) => {
                event.data.sectionId === this.dataset.section &&
                  (this.updateQuantityRules(event.data.html),
                  this.setQuantityBoundries());
              }
            )),
            window.localStorage && this.addRecentlyViewedProduct());
      }
      disconnectedCallback() {
        this.cartUpdateUnsubscriber && this.cartUpdateUnsubscriber(),
          this.variantChangeUnsubscriber && this.variantChangeUnsubscriber();
      }
      fetchQuantityRules() {
        !this.currentVariant ||
          !this.currentVariant.value ||
          fetch(
            `${this.dataset.url}?variant=${this.currentVariant.value}&section_id=${this.sectionId}`
          )
            .then((response) => {
              if (!response.ok)
                throw new Error(
                  `Network response was not ok: ${response.statusText}`
                );
              return response.text();
            })
            .then((responseText) => {
              const html = new DOMParser().parseFromString(
                responseText,
                "text/html"
              );
              this.updateQuantityRules(html), this.setQuantityBoundries();
            })
            .catch((e) => {
              popToast(window.variantStrings.unknownError, "error");
            });
      }
      setQuantityBoundries() {
        const data = {
          cartQuantity: this.input.dataset.cartQuantity
            ? parseInt(this.input.dataset.cartQuantity)
            : 0,
          min: this.input.dataset.min ? parseInt(this.input.dataset.min) : 1,
          max: this.input.dataset.max ? parseInt(this.input.dataset.max) : null,
          step: this.input.step ? parseInt(this.input.step) : 1,
        };
        let min = data.min;
        const max = data.max === null ? data.max : data.max - data.cartQuantity;
        max !== null && (min = Math.min(min, max)),
          data.cartQuantity >= data.min && (min = Math.min(min, data.step)),
          (this.input.min = min),
          (this.input.max = max),
          (this.input.value = min),
          publish(PUB_SUB_EVENTS.quantityUpdate, void 0);
      }
      updateQuantityRules(html) {
        const quantityFormSource = html.querySelector(".quantity-selector"),
          selectors = [".quantity-input", ".quantity-label"];
        for (let selector of selectors) {
          const current = this.quantityForm.querySelector(selector),
            updated = quantityFormSource.querySelector(selector);
          if (!(!current || !updated))
            if (selector === ".quantity-input") {
              const attributes = [
                "data-cart-quantity",
                "data-min",
                "data-max",
                "step",
              ];
              for (let attribute of attributes) {
                const valueUpdated = updated.getAttribute(attribute);
                valueUpdated !== null &&
                  current.setAttribute(attribute, valueUpdated);
              }
            } else current.innerHTML = updated.innerHTML;
        }
      }
      addRecentlyViewedProduct() {
        if (!this.dataset.id) return;
        const recentlyViewedData = retrieveData(RECENTLY_VIEWED_KEY) || [],
          index = recentlyViewedData.indexOf(this.dataset.id);
        index !== -1 && recentlyViewedData.splice(index, 1),
          recentlyViewedData.push(this.dataset.id),
          recentlyViewedData.length > 10 &&
            recentlyViewedData.splice(0, recentlyViewedData.length - 10),
          storeData(RECENTLY_VIEWED_KEY, recentlyViewedData);
      }
      get sectionId() {
        return this.dataset.section;
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/product-info.js.map?v=117670712358035570271735362317
