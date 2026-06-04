// Typing Effect

const text = [
  "Web Developer",
  "Frontend Developer",
  "JavaScript Enthusiast",
  "Creative Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;

    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }

})();


// GSAP Animations

gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".hero-content h1", {
  x: -200,
  opacity: 0,
  duration: 1.5
});

gsap.from(".hero-content p", {
  x: 200,
  opacity: 0,
  duration: 1.5
});

gsap.from(".btn", {
  scale: 0,
  duration: 1,
  stagger: 0.2
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".glass-card", {
  scrollTrigger: ".glass-card",
  y: 100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".skill-card", {
  scrollTrigger: ".skills-grid",
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

gsap.from(".project-card", {
  scrollTrigger: ".projects-grid",
  scale: 0.8,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});
