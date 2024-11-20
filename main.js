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
    if (displayNumber == "") {
        display.textContent = "";
    }
    display.textContent = display.textContent + str;
}

function updateDisplayNumber () {
    // updates displayNumber to whatever is on the display
    displayNumber = display.textContent; 
}

let display = document.querySelector(".display");

// create eventListeners for the NUMBER buttons
const nodeListNumber = document.querySelectorAll(".number");
const numButtonsArr = Array.from(nodeListNumber).map( (button) => {
    button.addEventListener("click", () => {
        addToDisplay(button.textContent); 
        updateDisplayNumber();
    });
});

// eventListeners for the CLEAR button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    updateDisplayNumber();
    number1 = 0;
    number2 = 0;
    operator = "";
});

// "PLUS" button
const plus = document.querySelector(".addition");
plus.addEventListener("click", () => {
    number1 = Number(displayNumber);
    displayNumber = "";
    operator = "+";
});

// "MINUS" button
const minus = document.querySelector(".subtract");
minus.addEventListener("click", () => {
    number1 = Number(displayNumber);
    displayNumber = "";
    operator = "-";
});

// "EQUALS" button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    number2 = Number(displayNumber);
    display.textContent = operate(number1, number2, operator);
    displayNumber = "";
});

let number1 = 0;
let number2 = 0;
let displayNumber;
let operator;
