let currentExpression = "";

// script.js
window.onload = function () {
  alert("Welcome to my Calculator!");
};



function appendCharacter(char) {
  currentExpression += char;
  updateDisplay();
}

function clearDisplay() {
  currentExpression = "";
  updateDisplay();
}

function deleteLastCharacter() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateDisplay();
  } catch (error) {
    currentExpression = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  const displayElement = document.getElementById("display");
  displayElement.textContent = currentExpression;
}



