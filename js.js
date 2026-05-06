const toggle = document.querySelector(".toggle-container");
const circle = document.querySelector(".toggle-circle");
const body = document.body;

let theme = 1;

toggle.addEventListener("click", () => {
  

  body.classList.remove("theme-2", "theme-3");

  if (theme === 1) {
    circle.style.transform = "translateX(20px)";
    body.classList.add("theme-2");
    theme = 2;

  } else if (theme === 2) {
    circle.style.transform = "translateX(40px)";
    body.classList.add("theme-3");
    theme = 3;

  } else {
    circle.style.transform = "translateX(0)";
    theme = 1;
  }
});

const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "RESET") {
      currentInput = "";
      screen.textContent = "0";

    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      screen.textContent = currentInput || "0";

    } else if (value === "=") {
      try {
        currentInput = eval(currentInput.replace("x", "*"));
        screen.textContent = currentInput;
      } catch {
        screen.textContent = "Error";
      }

    } else {
      currentInput += value;
      screen.textContent = currentInput;
    }
  });
});