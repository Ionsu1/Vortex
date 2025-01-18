/**
 * ProductSideDrawer - Custom element for handling product quick view functionality
 * Extends the Drawer class to provide product-specific drawer behavior
 */
customElements.get("product-side-drawer") ||
  customElements.define(
    "product-side-drawer",
    class extends Drawer {
      /**
       * Initialize the ProductSideDrawer
       * Sets up the quickview content container
       */
      constructor() {
        super();
        this.quickViewContent = this.querySelector(".quickview-content");
      }

      /**
       * Shows the drawer and fetches product content
       * @param {HTMLElement} opener - The element that triggered the drawer
       */
      show(opener) {
        super.show(opener);
        let productUrl;
        
        if (opener) {
          productUrl = opener.getAttribute("data-product-url");
        } else if (window.Shopify.designMode) {
          productUrl = this.getAttribute("data-product-url");
        }
        
        if (productUrl) {
          this.fetchContent(productUrl);
        }
      }

      /**
       * Hides the drawer and cleans up any ongoing operations
       */
      hide() {
        this.endLoading();
        if (this.fetchController) {
          this.fetchController.abort();
        }
        this.quickViewContent.innerHTML = "";
        super.hide();
      }

      /**
       * Fetches product content from the given URL
       * @param {string} url - URL to fetch product content from
       */
      fetchContent(url) {
        this.startLoading();
        this.fetchController = new AbortController();
        const signal = this.fetchController.signal;

        fetch(url, { signal })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
          })
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, "text/html");
            this.handleHTML(html);
            trapFocus(this);
            this.endLoading();
          })
          .catch((error) => {
            console.error("Error loading product content:", error);
            console.log(window.variantStrings.unknownError, "error");
          });
      }

      /**
       * Starts the loading state
       * Updates UI to show loading indicators
       */
      startLoading() {
        if (this.openedBy) {
          this.openedBy.setAttribute("aria-disabled", true);
          this.openedBy.classList.add("loading");
        }
        this.quickViewContent.innerHTML = this.querySelector("template").innerHTML;
      }

      /**
       * Ends the loading state
       * Updates UI to hide loading indicators
       */
      endLoading() {
        if (this.openedBy) {
          this.openedBy.removeAttribute("aria-disabled");
          this.openedBy.classList.remove("loading");
        }
      }

      /**
       * Handles the parsed HTML content
       * Updates the quickview content and initializes various components
       * @param {Document} html - Parsed HTML content
       */
      handleHTML(html) {
        this.productHtml = html.querySelector('[id^="MainProduct-"]');
        this.preventDuplicatedIDs();
        this.updateProductContainerStyle();
        this.removeUnnecessaryElements();
        this.changeGalleryLayout();
        this.updateImageSizes();
        this.setInnerHTML(this.quickViewContent, this.productHtml.innerHTML);
        initializeScrollLazyImageTrigger();
        initializeToolTipTrigger();
        window.Shopify &&
          Shopify.PaymentButton &&
          Shopify.PaymentButton.init();
        this.preventVariantURLSwitching();
      }

      /**
       * Sets the inner HTML of an element
       * Replaces any script tags with new ones to ensure proper execution
       * @param {HTMLElement} element - Element to set inner HTML for
       * @param {string} html - Inner HTML to set
       */
      setInnerHTML(element, html) {
        element.innerHTML = html;

        element.querySelectorAll("script").forEach((oldScriptTag) => {
          const newScriptTag = document.createElement("script");
          Array.from(oldScriptTag.attributes).forEach((attribute) => {
            newScriptTag.setAttribute(attribute.name, attribute.value);
          });
          newScriptTag.appendChild(
            document.createTextNode(oldScriptTag.innerHTML)
          );
          oldScriptTag.parentNode.replaceChild(newScriptTag, oldScriptTag);
        });
      }

      /**
       * Prevents variant URL switching
       * Sets the data-update-url attribute to false on the variant picker
       */
      preventVariantURLSwitching() {
        const variantPicker =
          this.quickViewContent.querySelector("variant-selects");
        if (variantPicker) {
          variantPicker.setAttribute("data-update-url", "false");
        }
      }

      /**
       * Removes unnecessary elements from the product HTML
       * Removes elements with the class quick-add-remove
       */
      removeUnnecessaryElements() {
        Array.from(
          this.productHtml.querySelectorAll(".quick-add-remove")
        ).forEach((element) => {
          element.remove();
        });
      }

      /**
       * Updates the product container style
       * Sets the class names for the product container and main container
       */
      updateProductContainerStyle() {
        const productContainer =
          this.productHtml.querySelector(".product-container");
        if (productContainer) {
          productContainer.className = "product product-container isolate";
        }
        const productContainerMain = this.productHtml.querySelector(
          ".product-container-main"
        );
        if (productContainerMain) {
          productContainerMain.className = "product-container-main";
        }
      }

      /**
       * Prevents duplicated IDs in the product HTML
       * Replaces IDs with a new ID and sets the original ID as a data attribute
       */
      preventDuplicatedIDs() {
        const sectionId = this.productHtml.dataset.section;
        if (!sectionId) return;
        const quickAddSectionId = `quickadd-${sectionId}`;
        this.productHtml.innerHTML = this.productHtml.innerHTML.replaceAll(
          sectionId,
          quickAddSectionId
        );
        this.productHtml
          .querySelectorAll(`[data-section='${quickAddSectionId}']`)
          .forEach((element) => {
            element.dataset.originalSection = sectionId;
          });
      }

      /**
       * Updates the image sizes in the product HTML
       * Sets the sizes attribute on media images
       */
      updateImageSizes() {
        const mediaImages =
          this.productHtml.querySelectorAll(".product-media img");
        if (!mediaImages.length) return;
        let mediaImageSizes = "(min-width: 750px) 15rem, calc(100vw - 2rem)";
        mediaImages.forEach((img) => {
          img.setAttribute("sizes", mediaImageSizes);
          img.setAttribute("loading", "lazy");
          img.removeAttribute("fetchpriority");
        });
      }

      /**
       * Changes the gallery layout in the product HTML
       * Sets various attributes on the gallery viewer element
       */
      changeGalleryLayout() {
        this.productHtml
          .querySelector("[data-media-stack]")
          ?.removeAttribute("data-media-stack");
        const galleryView = this.productHtml.querySelector(
          '[id^="Gallery-Viewer"]'
        );
        if (galleryView) {
          galleryView.setAttribute("data-slide-desktop", "true");
          galleryView.setAttribute("data-slide-mobile", "true");
          galleryView.setAttribute("data-layout-vertical", "true");
          galleryView.setAttribute("data-draggable", "true");
          galleryView.setAttribute("data-slide-smooth", "true");
          galleryView.setAttribute("data-wheelable", "true");
          galleryView.removeAttribute("data-looping-infinite");
        }
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/quick-add.js.map?v=142902028201252436621734354525
