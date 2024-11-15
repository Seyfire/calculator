function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function addToDisplay (str) {
    // appends number to the display
    display.textContent = display.textContent + str;
}

function updateDisplayNumber () {
    // updates displayNumber to whatever is on the display
    displayNumber = display.textContent; 
}

let display = document.querySelector(".display");

// create eventListeners for the number buttons
const nodeListNumber = document.querySelectorAll(".number");
const numButtonsArr = Array.from(nodeListNumber).map( (button) => {
    button.addEventListener("click", () => {
        addToDisplay(button.textContent); 
        updateDisplayNumber();
    });
});

let number1 = 0;
let number2 = 0;
let displayNumber;
let operator;
