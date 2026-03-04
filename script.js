// Typing Animation
const words = ["Web Developer", "Frontend Designer", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  currentWord = words[i];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, j--);
  } else {
    typingElement.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Dark Mode
document.getElementById("modeToggle").onclick = function(){
  document.body.classList.toggle("dark");
};

// Scroll Reveal
function reveal(){
  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el=>{
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", reveal);

// Hamburger Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.onclick = function(){
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};
