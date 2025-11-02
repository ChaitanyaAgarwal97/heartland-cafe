 // Optional: smooth scroll for buttons
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('click', e => {
    const target = btn.getAttribute('data-scroll');
    if (target && document.getElementById(target)) {
      e.preventDefault();
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const revealCards = () => {
  const cards = document.querySelectorAll('.menu-card');
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) card.classList.add('reveal');
  });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);


function copyNumber() {
  const number = document.getElementById("phone-number").innerText;
  navigator.clipboard.writeText(number).then(() => {
    const icon = document.querySelector(".copy-icon");
    icon.classList.add("copied");
    setTimeout(() => icon.classList.remove("copied"), 1200);
  });
}


const cube = document.querySelector(".cube-wrapper .cube");
let xAxis = 0, yAxis = 0;

document.querySelector(".cube-wrapper").addEventListener("mousemove", (e) => {
  const box = e.currentTarget.getBoundingClientRect();
  const centerX = box.left + box.width / 2;
  const centerY = box.top + box.height / 2;
  xAxis = (e.clientY - centerY) / 40;
  yAxis = (centerX - e.clientX) / 40;
  cube.style.transform = `rotateX(${xAxis - 20}deg) rotateY(${yAxis + 25}deg)`;
});

document.querySelector(".cube-wrapper").addEventListener("mouseleave", () => {
  cube.style.transform = `rotateX(-20deg) rotateY(25deg)`;
});

