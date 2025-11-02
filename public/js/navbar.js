document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Toggle menu on click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Add shadow on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Animate icon change (bars ↔ close)
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    // Switch icon from bars <-> close
    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
