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
    number1 = 0;
    number2 = 0;
    operator = "";
});

// "PLUS" button
const plus = document.querySelector(".addition");
plus.addEventListener("click", (e) => {
    // sets the operator to the corresponding button press
    console.log(e.target.className);
    operator = getOperator(e.target.className);

    // performs operation if there's a value already stored
    if (number1) {
        number2 = getDisplayNumber();
        refreshDisplay(operate(number1, number2, operator));
    }

    number1 = getDisplayNumber();

    // reset button input to a fresh state
    isNewInput = true;
});

// "MINUS" button
const minus = document.querySelector(".subtract");
minus.addEventListener("click", (e) => {
    operator = e.target.textContent;

    if (number1) {
        number2 = getDisplayNumber();
        refreshDisplay(operate(number1, number2, operator));
    }   

    number1 = getDisplayNumber();

    isNewInput = true;
});

// "EQUALS" button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    number2 = getDisplayNumber();
    refreshDisplay(operate(number1, number2, operator));
    number1 = null;
    number2 = null
    isNewInput = true;
});

let number1 = null;
let number2 = null;
let isNewInput = true;
let operator;
