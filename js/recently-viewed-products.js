customElements.get("recently-viewed-products") ||
  customElements.define(
    "recently-viewed-products",
    class extends HTMLElement {
      constructor() {
        super(), (this.productIds = []);
        const url = this.constructQueryUrl();
        url &&
          ((this.obsever = new IntersectionObserver(
            (entries, observer) => {
              entries[0].isIntersecting &&
                (observer.disconnect(), this.fetchData(url));
            },
            { rootMargin: "0px 0px 400px 0px" }
          )),
          this.obsever.observe(this));
      }
      disconnectedCallback() {
        this.obsever && this.obsever.disconnect();
      }
      fetchData(url) {
        fetch(url)
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
        const sourceRecentlyViewedMain = new DOMParser()
          .parseFromString(html, "text/html")
          .querySelector(".recently-viewed-main");
        if (sourceRecentlyViewedMain) {
          const itemListWrapper =
              sourceRecentlyViewedMain.querySelector(".slider-wrapper"),
            fragment = document.createDocumentFragment();
          this.productIds.forEach((id) => {
            const item = itemListWrapper.querySelector(
              `li[data-product-id="${id}"]`
            );
            item && fragment.appendChild(item);
          }),
            (itemListWrapper.innerHTML = ""),
            itemListWrapper.appendChild(fragment),
            (this.querySelector(".products-container").innerHTML =
              sourceRecentlyViewedMain.outerHTML);
        } else this.remove();
        initializeScrollLazyImageTrigger(), initializeToolTipTrigger();
      }
      constructQueryUrl() {
        const limit = parseInt(this.dataset.limit) || 5;
        if (
          ((this.productIds = retrieveData(RECENTLY_VIEWED_KEY)
            .slice(-limit)
            .reverse()),
          !this.productIds || this.productIds.length <= 0)
        )
          return null;
        const baseUrl = this.dataset.searchUrl,
          query = this.productIds.map((id) => `id:${id}`).join(" OR "),
          params = new URLSearchParams({
            q: query,
            "resources[limit]": String(limit),
            "resources[type]": "product",
            section_id: this.dataset.section,
            ose: "false",
          });
        return `${baseUrl}?${params.toString()}`;
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/recently-viewed-products.js.map?v=147424493615080036461735980151
