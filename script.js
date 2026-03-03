// Typing Animation
const text = ["Web Designer", "Web Developer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 150);
})();

// Dark Mode Toggle
const toggle = document.getElementById("mode-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Scroll Reveal
ScrollReveal().reveal('section', {
    distance:'50px',
    duration:1000,
    origin:'bottom',
    interval:200
});
