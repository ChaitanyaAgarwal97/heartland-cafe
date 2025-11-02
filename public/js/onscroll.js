/* -----------------------------
   SCROLL REVEAL SCRIPT
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // remove for replay effect (optional)
      }
    });
  };

  // Initial call + listener
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
