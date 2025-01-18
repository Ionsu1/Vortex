customElements.get("product-form") ||
  customElements.define(
    "product-form",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.form = this.querySelector("form")),
          this.form &&
            ((this.isloading = !1),
            (this.error = !1),
            (this.variantIdInput.disabled = !1),
            this.form.addEventListener(
              "submit",
              this.onSubmitHandler.bind(this)
            ),
            (this.addCartButtons = this.querySelectorAll(
              'button[type="submit"]'
            )),
            (this.cartDrawer = document.getElementById("Cart-Drawer")),
            this.cartDrawer &&
              !this.cartDrawer.hasAttribute("data-status-silence") &&
              this.addCartButtons.forEach((button) => {
                button.setAttribute("aria-haspopup", "dialog"),
                  button.setAttribute("aria-expanded", "false"),
                  button.setAttribute("aria-controls", "Cart-Drawer");
              }),
            (this.errorMessageWrapper = document.getElementById(
              `Product-Form-Error-Message-${this.dataset.section}`
            )),
            (this.quickAddDrawer = this.closest("product-side-drawer")),
            (this.miniChecker = document.getElementById(
              `Product-Mini-Checkout-${this.dataset.section}`
            )),
            this.miniChecker &&
              ((this.miniCheckerObserver = new IntersectionObserver(
                (entries, observer) => {
                  entries[0].isIntersecting
                    ? this.hideMiniCheck()
                    : entries[0].boundingClientRect.top < 0 &&
                      this.showMiniCheck();
                },
                { root: null, rootMargin: "-200px 0px 0px 0px" }
              )),
              this.miniCheckerObserver.observe(this)));
      }
      disconnectedCallback() {
        this.miniCheckerObserver && this.miniCheckerObserver.disconnect();
      }
      get variantIdInput() {
        return this.form.querySelector("[name=id]");
      }
      get hideErrors() {
        return this.dataset.hideErrors === "true";
      }
      onSubmitHandler(event) {
        if (
          this.isloading ||
          (event.preventDefault(),
          Array.from(this.addCartButtons).find((button) =>
            button.hasAttribute("disabled")
          ))
        )
          return;
        this.handleErrorMessage(), this.startLoading();
        const config = fetchConfig("javascript");
        (config.headers["X-Requested-With"] = "XMLHttpRequest"),
          delete config.headers["Content-Type"];
        const formData = new FormData(this.form);
        formData.append(
          "sections",
          this.getSectionsToRender()
            .map((section) => section.section)
            .join()
        ),
          formData.append("sections_url", window.location.pathname),
          (config.body = formData),
          fetch(`${window.routes.cart_add_url}`, config)
            .then((response) => response.json())
            .then((response) => {
              if (response.status)
                return (
                  publish(PUB_SUB_EVENTS.cartError, {
                    source: "product-form",
                    productVariantId: formData.get("id"),
                    errors: response.errors || response.description,
                    message: response.message,
                  }),
                  this.handleErrorMessage(response.description),
                  (this.error = !0)
                );
              if (
                ((this.error = !1),
                SectionDynamicUpdate.updateSections(
                  this.getSectionsToRender(),
                  response.sections
                ),
                publish(PUB_SUB_EVENTS.cartUpdate, {
                  source: "product-form",
                  productVariantId: formData.get("id"),
                  cartData: response,
                }),
                this.cartDrawer &&
                  !this.cartDrawer.hasAttribute("data-status-silence"))
              )
                this.cartDrawer.show(event.submitter);
              else return (window.location = window.routes.cart_url);
            })
            .catch((e) => {
              this.handleErrorMessage(window.variantStrings.unknownError),
                (this.error = !0);
            })
            .finally(() => {
              this.endLoading(), this.hideMiniCheck();
            });
      }
      getSectionsToRender() {
        const sections = [
          {
            id: "Cart-Icon-Bubble",
            section: "cart-icon-bubble",
            selector: ".shopify-section",
          },
        ];
        return (
          this.cartDrawer &&
            !this.cartDrawer.hasAttribute("data-status-silence") &&
            sections.push({
              id: "Cart-Drawer",
              section: this.cartDrawer.dataset.section,
              selector: "#Cart-Drawer-Details",
            }),
          sections
        );
      }
      handleErrorMessage(errorMessage = null) {
        this.hideErrors ||
          !this.errorMessageWrapper ||
          (this.errorMessageWrapper.toggleAttribute("hidden", !errorMessage),
          (this.errorMessageWrapper.textContent = errorMessage || ""));
      }
      startLoading() {
        (this.isloading = !0),
          this.addCartButtons.forEach((button) => {
            button.setAttribute("disabled", "disabled"),
              button.classList.add("loading");
          });
      }
      endLoading() {
        (this.isloading = !1),
          this.addCartButtons.forEach((button) => {
            button.removeAttribute("disabled"),
              button.classList.remove("loading");
          }),
          !this.error && this.quickAddDrawer && this.quickAddDrawer.hide();
      }
      showMiniCheck() {
        this.miniChecker && this.miniChecker.classList.add("active");
      }
      hideMiniCheck() {
        this.miniChecker && this.miniChecker.classList.remove("active");
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/product-form.js.map?v=158724063672826444101730604923
