// script.js

// Load buttons dynamically
const buttonGallery = document.getElementById("buttonGallery");

const buttons = [
  { title: "Solve Quadratic Equation", link: "quadratic.html" },
  { title: "Prime Numbers 1-100", link: "prime.html" },
  { title: "JavaScript Functions", link: "javascript-functions.html" },
  { title: "HTML Properties", link: "html-properties.html" },
  { title: "Student CV", link: "student-cv.html" },
  { title: "Bootstrap Template", link: "bootstrap-template.html" }  // New button for Bootstrap template
];

function loadButtons() {
  buttons.forEach((button) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = button.title;
    if (button.link) {
      buttonElement.addEventListener("click", () => window.location.href = button.link);
    } else {
      buttonElement.addEventListener("click", () => alert(`You clicked on ${button.title}`));
    }
    buttonGallery.appendChild(buttonElement);
  });
}

document.addEventListener("DOMContentLoaded", loadButtons);
