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

// Dark Mode Toggle
document.getElementById("modeToggle").onclick = function(){
  document.body.classList.toggle("dark");
};
