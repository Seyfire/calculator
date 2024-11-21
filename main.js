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

function addToDisplay (buttonNumber) {
    // populates the calculator display when number buttons are pressed
    if (isNewInput) {
        display.textContent = "";
        isNewInput = false;
    }

    refreshDisplay(display.textContent + buttonNumber);
}

function refreshDisplay (num) {
    // refreshes the calculator display with the passed number
    display.textContent = num;
}

function getDisplayNumber () {
    // returns the number on the calculator display
    return Number(display.textContent);
}

function getOperator (str) {
    // returns operator symbol based on passed str
    switch (str) {
        case "addition":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
    }
}

let display = document.querySelector(".display");

// create eventListeners for the NUMBER buttons
const nodeListNumber = document.querySelectorAll(".number");
Array.from(nodeListNumber).map( (button) => {
    button.addEventListener("click", () => {
        addToDisplay(button.textContent); 
    });
});

// eventListeners for the CLEAR button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    number1 = null;
    number2 = null;
    operator = null;
});

// operator buttons
const operators = Array.from(document.querySelectorAll(".operator"));
operators.map( (button) => {
    button.addEventListener("click", (e) => {
        // sets the operator to the corresponding button press
        operator = getOperator(e.target.id);

        // performs operation if there's a value already stored
        if (number1) {
            number2 = getDisplayNumber();
            refreshDisplay(operate(number1, number2, operator));
        }

        number1 = getDisplayNumber();

        // reset button input to a fresh state
        isNewInput = true;});
});

// "EQUALS" button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    number2 = getDisplayNumber();
    refreshDisplay(operate(number1, number2, operator));
    isNewInput = true;
    number1 = null;
    number2 = null;
});

let number1 = null;
let number2 = null;
let isNewInput = true;
let operator;
