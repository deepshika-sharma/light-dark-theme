const a = document.querySelectorAll("a");
const mode = document.getElementById("mode");
const toggleMode = document.querySelector(".toggleMode");
const circle = document.getElementById("circle");
const body = document.querySelector("body");
const navbar = document.querySelector(".contain");
const modeIcon = document.querySelector(".fas");
const social = document.querySelectorAll(".fab");
const images = document.querySelectorAll("img");
const imageDiv = document.querySelectorAll(".img-container");

console.log(imageDiv.length);
// colors
let darkColor = "#7809E5";

const modeChange = () => {
  body.classList.toggle("body-dark");
  navbar.classList.toggle("contain-dark");
  for (let i = 0; i < a.length; i++) {
    a[i].classList.toggle("a-dark");
  }
  modeIcon.classList.toggle("mode-dark");
  mode.classList.toggle("mode-dark");

  mode.textContent =
    mode.textContent === "Dark Mode" ? "Light Mode" : "Dark Mode";
  if (modeIcon.classList.contains("fa-sun")) {
    modeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    modeIcon.classList.replace("fa-moon", "fa-sun");
  }

  circle.classList.toggle("circle-dark");
  toggleMode.classList.toggle("toggle-dark");

  for (let i = 0; i < social.length; i++) {
    social[i].classList.toggle("contact-dark");
  }

  if (mode.textContent === "Dark Mode") {
    images[0].src = "./img/undraw_conceptual_idea_dark.svg";
    images[1].setAttribute("src", "./img/undraw_feeling_proud_dark.svg");
    images[2].setAttribute("src", "./img/undraw_proud_coder_dark.svg");
  } else {
    images[0].setAttribute("src", "./img/undraw_conceptual_idea_light.svg");
    images[1].setAttribute("src", "./img/undraw_feeling_proud_light.svg");
    images[2].setAttribute("src", "./img/undraw_proud_coder_light.svg");
  }

  for (let i = 0; i < imageDiv.length; i++) {
    imageDiv[i].classList.toggle("img-dark");
  }
};

// Event Listener for changing modes
toggleMode.addEventListener("click", modeChange);
