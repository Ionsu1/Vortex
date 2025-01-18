customElements.get("media-gallery") ||
  customElements.define(
    "media-gallery",
    class extends HTMLElement {
      constructor() {
        super(),
          (this.ifMediaStack = this.hasAttribute("data-media-stack")),
          (this.lastVariantMediaId = parseInt(
            this.querySelector(".is-current-variant-media").dataset.mediaId
          )),
          this.thumbnails &&
            (this.thumbnails
              .querySelectorAll("[data-target]")
              .forEach((thumbnail) => {
                thumbnail.addEventListener(
                  "click",
                  this.onThumbnailClick.bind(this)
                );
              }),
            this.addEventListener(
              "sliderChanged",
              this.onSlideChanged.bind(this)
            ));
      }
      get viewer() {
        return this.querySelector('[id^="Gallery-Viewer"]');
      }
      get thumbnails() {
        return this.querySelector('[id^="Gallery-Thumbnail-Slider"]');
      }
      onSlideChanged(event) {
        if (!event || !event.detail) return;
        const mediaId = event.detail.currentElement.dataset.mediaId,
          thumbnail = this.thumbnails.querySelector(
            `[data-target="${mediaId}"]`
          );
        thumbnail &&
          (thumbnail.querySelector("button").hasAttribute("aria-current") ||
            this.setActiveThumbnail(thumbnail),
          this.thumbnails.initSliderStatus &&
            this.thumbnails.slideByElement(thumbnail));
      }
      onThumbnailClick(event) {
        const thumbnail = event.currentTarget;
        this.setActiveThumbnail(thumbnail),
          this.changeMedia(thumbnail.getAttribute("data-target"));
      }
      updateGallery(currentVariantMediaId) {
        if (
          !(
            currentVariantMediaId === this.lastVariantMediaId ||
            currentVariantMediaId == null
          )
        ) {
          if (
            ((this.lastVariantMediaId = currentVariantMediaId),
            this.viewer
              .querySelectorAll(".is-current-variant-media")
              .forEach((element) =>
                element.classList.remove("is-current-variant-media")
              ),
            this.viewer
              .querySelectorAll(`[data-media-id="${currentVariantMediaId}"]`)
              .forEach((element) =>
                element.classList.add("is-current-variant-media")
              ),
            this.thumbnails &&
              (this.thumbnails
                .querySelector(".is-current-variant-thumbnail")
                ?.classList.remove("is-current-variant-thumbnail"),
              this.thumbnails
                .querySelector(`[data-target="${currentVariantMediaId}"]`)
                ?.classList.add("is-current-variant-thumbnail")),
            this.hasAttribute("data-hide-variants"))
          ) {
            const groupName = this.viewer.querySelector(
              `[data-media-id="${currentVariantMediaId}"]`
            )?.dataset.mediaGroup;
            this.viewer
              .querySelectorAll(".is-current-variant-media-group")
              .forEach((element) =>
                element.classList.remove("is-current-variant-media-group")
              ),
              groupName &&
                this.viewer
                  .querySelectorAll(`[data-media-group='${groupName}']`)
                  .forEach((element) => {
                    element.classList.add("is-current-variant-media-group");
                  }),
              this.thumbnails &&
                (this.thumbnails
                  .querySelectorAll(".is-current-variant-thumbnail-group")
                  .forEach((element) =>
                    element.classList.remove(
                      "is-current-variant-thumbnail-group"
                    )
                  ),
                groupName &&
                  this.thumbnails
                    .querySelectorAll(`[data-thumbnail-group='${groupName}']`)
                    .forEach((element) => {
                      element.classList.add(
                        "is-current-variant-thumbnail-group"
                      );
                    })),
              this.ifMediaStack ||
                (this.viewer.reInstall(),
                this.thumbnails && this.thumbnails.reInstall());
          }
          this.changeMedia(currentVariantMediaId),
            isMobileScreen() && scrollElementToHeaderBottom(this, 16);
        }
      }
      changeMedia(mediaId) {
        const activeMedia = this.viewer.querySelector(
          `[data-media-id="${mediaId}"]`
        );
        this.ifMediaStack
          ? activeMedia.parentElement.prepend(activeMedia)
          : this.viewer.initSliderStatus &&
            this.viewer.slideByElement(activeMedia);
      }
      setActiveThumbnail(thumbnail) {
        !this.thumbnails ||
          !thumbnail ||
          (this.thumbnails
            .querySelectorAll("button")
            .forEach((element) => element.removeAttribute("aria-current")),
          thumbnail.querySelector("button").setAttribute("aria-current", !0));
      }
    }
  );
//# sourceMappingURL=/cdn/shop/t/2/assets/media-gallery.js.map?v=109929015519704407891735741987
