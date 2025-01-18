class SearchForm extends HTMLElement {
  connectedCallback() {
    (this.input = this.querySelector('input[type="search"]')),
      (this.resetButton = this.querySelector('button[type="reset"]')),
      this.input &&
        (this.input.form.addEventListener("reset", this.onFormReset.bind(this)),
        this.input.addEventListener(
          "input",
          debounce((event) => {
            this.onChange(event);
          }, 300)
        ),
        this.hasAttribute("data-pop-panel") &&
          (this.input.addEventListener("focusin", this.onFocusin.bind(this)),
          this.addEventListener("focusout", this.onFocusout.bind(this))));
  }
  toggleResetButton() {
    const resetIsHidden = this.resetButton.classList.contains("hidden");
    this.input.value.length > 0 && resetIsHidden
      ? this.resetButton.classList.remove("hidden")
      : this.input.value.length === 0 &&
        !resetIsHidden &&
        this.resetButton.classList.add("hidden");
  }
  onChange() {
    this.toggleResetButton();
  }
  onFormReset(event) {
    event.preventDefault(),
      (this.input.value = ""),
      this.input.focus(),
      this.input.dispatchEvent(
        new Event("input", { bubbles: !0, cancelable: !0 })
      ),
      this.toggleResetButton();
  }
  onFocusin() {
    this.classList.add("in-focus"),
      (this.isOpen = !0),
      this.input.setAttribute("aria-expanded", "true"),
      this.toggleHeaderActive(!0);
  }
  onFocusout() {
    setTimeout(() => {
      this.contains(document.activeElement) ||
        (this.classList.remove("in-focus"),
        (this.isOpen = !1),
        this.input.setAttribute("aria-expanded", "false"),
        this.toggleHeaderActive(!1));
    });
  }
  toggleHeaderActive(active = !0) {
    (this.header = this.header || this.closest(".section-header")),
      this.header && this.header.classList.toggle("header--is-active", active);
  }
}
customElements.define("search-form", SearchForm);
class MainSearch extends SearchForm {
  connectedCallback() {
    super.connectedCallback(),
      (this.allSearchInputs = document.querySelectorAll(
        'input[type="search"]'
      ));
  }
  onFormReset(event) {
    super.onFormReset(event), this.keepInSync("", this.input);
  }
  onChange(event) {
    super.onChange(), this.keepInSync(event.target.value, this.input);
  }
  keepInSync(value, from) {
    this.allSearchInputs.forEach((input) => {
      input !== from && (input.value = value);
    });
  }
}
customElements.define("main-search", MainSearch);
class PredictiveSearch extends SearchForm {
  constructor() {
    super(),
      (this.cachedResults = {}),
      (this.searchTerm = ""),
      (this.isOpen = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.searchResultsWrapper = this.querySelector(
        ".search-results-wrapper"
      )),
      (this.allPredictiveSearchInstances =
        document.querySelectorAll("predictive-search")),
      this.querySelectorAll(".popular-searches a").forEach((suggestion) => {
        suggestion.addEventListener(
          "click",
          this.onPopularKeywordClick.bind(this)
        );
      }),
      (this.abortController = new AbortController());
  }
  disconnectedCallback() {
    this.abortController.abort();
  }
  getQuery() {
    return this.input.value.trim();
  }
  onChange() {
    super.onChange();
    const currentSearchTerm = this.getQuery();
    if (currentSearchTerm !== this.searchTerm) {
      if (((this.searchTerm = currentSearchTerm), this.searchTerm.length <= 0))
        return this.closeResults(!0);
      this.showPlaceholder(), this.getSearchResults();
    }
  }
  onPopularKeywordClick(event) {
    event.preventDefault();
    const keyword = event.currentTarget.getAttribute("data-keyword");
    keyword !== "" &&
      ((this.input.value = keyword),
      this.input.focus(),
      this.input.dispatchEvent(
        new Event("input", { bubbles: !0, cancelable: !0 })
      ));
  }
  onFormReset(event) {
    super.onFormReset(event),
      (this.searchTerm = ""),
      this.abortController.abort(),
      (this.abortController = new AbortController()),
      this.closeResults(!0);
  }
  onFocusin() {
    super.onFocusin();
    const currentSearchTerm = this.getQuery();
    (!currentSearchTerm && currentSearchTerm === this.searchTerm) ||
      (this.searchTerm !== currentSearchTerm
        ? this.onChange()
        : this.getAttribute("results") === "true"
        ? this.showResults()
        : this.getSearchResults());
  }
  showPlaceholder() {
    (this.placeholder =
      this.placeholder || this.querySelector("template").innerHTML),
      (this.searchResultsWrapper.innerHTML = this.placeholder);
  }
  getSearchResults() {
    const queryKey = this.searchTerm.replace(" ", "-").toLowerCase();
    if ((this.setLiveRegionLoading(), this.cachedResults[queryKey]))
      return this.renderSearchResults(this.cachedResults[queryKey]);
    fetch(
      `${window.routes.predictive_search_url}?q=${encodeURIComponent(
        this.searchTerm
      )}&section_id=predictive-search`,
      { signal: this.abortController.signal }
    )
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        return response.text();
      })
      .then((text) => {
        let resultsMarkup = new DOMParser()
          .parseFromString(text, "text/html")
          .querySelector(".shopify-section").innerHTML;
        (resultsMarkup = this.preventDuplicatedIDs(resultsMarkup)),
          this.allPredictiveSearchInstances.forEach(
            (predictiveSearchInstance) => {
              predictiveSearchInstance.cachedResults[queryKey] = resultsMarkup;
            }
          ),
          this.renderSearchResults(resultsMarkup);
      })
      .catch((error) => {
        popToast(window.variantStrings.unknownError, "error"),
          this.closeResults(!0);
      });
  }
  renderSearchResults(resultsHtml) {
    (this.searchResultsWrapper.innerHTML = resultsHtml),
      this.setAttribute("results", "true"),
      this.setLiveRegionResults(),
      this.showResults(),
      initializeScrollLazyImageTrigger(),
      initializeToolTipTrigger();
  }
  getResultsMaxHeight() {
    return (
      (this.resultsMaxHeight =
        window.innerHeight -
        this.querySelector(".predictive-search-main").getBoundingClientRect()
          .top -
        32),
      this.resultsMaxHeight
    );
  }
  showResults() {
    this.style.setProperty(
      "--result-max-height",
      `${this.resultsMaxHeight || this.getResultsMaxHeight()}px`
    ),
      this.setAttribute("open", "true");
  }
  closeResults(clearSearchTerm = !1) {
    clearSearchTerm &&
      ((this.input.value = ""),
      (this.searchResultsWrapper.innerHTML = " "),
      this.removeAttribute("results")),
      this.removeAttribute("loading"),
      this.removeAttribute("open"),
      (this.resultsMaxHeight = !1),
      this.style.removeProperty("--result-max-height");
  }
  preventDuplicatedIDs(html) {
    return this.id
      ? html.replace(
          /(id|aria-controls|aria-labelledby)="([^"]+)"/g,
          (match, attr, value) => `${attr}="${value}_${this.id}"`
        )
      : html;
  }
  setLiveRegionLoading() {
    (this.statusElement =
      this.statusElement || this.querySelector(".predictive-search-status")),
      (this.loadingText =
        this.loadingText || this.getAttribute("data-loading-text")),
      this.setAttribute("loading", "true"),
      this.setLiveRegionText(this.loadingText);
  }
  setLiveRegionResults() {
    this.removeAttribute("loading"),
      this.setLiveRegionText(
        this.querySelector("[data-predictive-search-live-region-count-value]")
          .textContent
      );
  }
  setLiveRegionText(statusText) {
    this.statusElement.setAttribute("aria-hidden", "false"),
      (this.statusElement.textContent = statusText),
      setTimeout(() => {
        this.statusElement.setAttribute("aria-hidden", "true");
      }, 1e3);
  }
}
customElements.define("predictive-search", PredictiveSearch);
//# sourceMappingURL=/cdn/shop/t/2/assets/main-search.js.map?v=66729079468444315351730604923
