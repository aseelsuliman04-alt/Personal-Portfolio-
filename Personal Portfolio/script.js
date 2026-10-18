const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('light-theme');
    
    if (bodyElement.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'Light Mode';
    }
});


const textArray = ["Aseel.", "a Cyber Specialist.", "a Web Developer."];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); 
    } else {
        setTimeout(eraseText, 2000); 
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex++;
        if (textIndex >= textArray.length) {
            textIndex = 0; 
        }
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText, 1000);
});document.addEventListener("mousemove", function (e) {
    const star = document.createElement("div");
    star.innerHTML = "★";
    star.className = "star-effect";
    
    const size = Math.random() * 12 + 5;
    star.style.fontSize = `${size}px`;
    
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;
    
    const colors = ["#2563eb", "#60a5fa", "#ffffff", "#3b82f6"];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 800);
});