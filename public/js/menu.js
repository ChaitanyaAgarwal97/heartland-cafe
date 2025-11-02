class Slider {
  constructor(slider) {
    this.slider = slider;
    this.display = slider.querySelector(".image-display");
    this.navButtons = Array.from(slider.querySelectorAll(".nav-button"));
    this.prevButton = slider.querySelector(".prev-button");
    this.nextButton = slider.querySelector(".next-button");
    this.currentSlideIndex = 0;

    this.preloadedImages = {};
    this.init();
  }

  init() {
    this.preloadImages();
    this.showSlide(0);
    this.addEvents();
  }

  showSlide(index) {
    this.currentSlideIndex = index;
    const img = this.navButtons[index]?.querySelector("img");
    if (img) {
      const clone = img.cloneNode();
      this.display.replaceChildren(clone);
    }

    this.navButtons.forEach((btn, i) =>
      btn.setAttribute("aria-selected", i === index)
    );
  }

  preloadImages() {
    this.navButtons.forEach(btn => {
      const img = btn.querySelector("img");
      if (img && !this.preloadedImages[img.src]) {
        this.preloadedImages[img.src] = new Image();
        this.preloadedImages[img.src].src = img.src;
      }
    });
  }

  addEvents() {
    document.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") this.next();
      if (e.key === "ArrowLeft") this.prev();
    });

    this.slider.querySelector(".slider-navigation").addEventListener("click", e => {
      const target = e.target.closest(".nav-button");
      if (!target) return;
      const index = this.navButtons.indexOf(target);
      if (index >= 0) this.showSlide(index);
    });

    this.prevButton.addEventListener("click", () => this.prev());
    this.nextButton.addEventListener("click", () => this.next());
  }

  next() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.navButtons.length;
    this.showSlide(this.currentSlideIndex);
  }

  prev() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.navButtons.length) %
      this.navButtons.length;
    this.showSlide(this.currentSlideIndex);
  }
}

// Initialize slider
new Slider(document.querySelector(".image-slider"));

// Prevent unwanted scroll on load
window.addEventListener("load", () => {
  window.history.replaceState(null, null, window.location.pathname);
  window.scrollTo(0, 0);
});

// Smooth scroll for View Menu button
const viewMenuBtn = document.getElementById("viewMenuBtn");
if (viewMenuBtn) {
  viewMenuBtn.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector("#imageSlider")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
